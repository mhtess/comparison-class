from nltk.corpus import wordnet as wn
from nltk.stem import WordNetLemmatizer
import csv
import json
from string import punctuation
from collections import Counter

# np = "pork"
# class_elicited_1 = "meats"
#
# np_synset = wn.synsets(np)[0]
# np_hypernyms = set([i for i in np_synset.closure(lambda s:s.hypernyms())])
# class_elicited_1_synset = wn.synsets(class_elicited_1)[0]
#
# print(np_synset)
# print(class_elicited_1_synset)
# print(np_hypernyms)
#
# print(np in np_synset.lemma_names())
# print(class_elicited_1_synset in np_hypernyms)

# Constants -- edit these if you change the experiment structure!
NUM_WORKERS = 81
NUM_MEMCHECK_TRIALS = 10
MEMCHECK_TOLERANCE = 2
NUM_DATA_TRIALS = 18
NUM_STIMULI = 20

# Identify workers who failed the memory check

memory_check = csv.reader(open("../data/pilot-classElicitation-free-3/class-elicitation-free-3-catch_trials.csv"))

i = iter(memory_check)
memory_check_headers = i.__next__()
workerid = memory_check_headers.index('workerid')
tested_on = memory_check_headers.index('tested_on')
response = memory_check_headers.index('response')

failed_memcheck = []

for worker_id in range(NUM_WORKERS):
    num_wrong = 0
    for trial in range(NUM_MEMCHECK_TRIALS):
        row = i.__next__()
        num_wrong += not (row[tested_on] == row[response])
    if num_wrong > MEMCHECK_TOLERANCE:
        failed_memcheck.append(worker_id)

print(str(len(failed_memcheck)) + " WORKERS FAILED THE MEMORY CHECK: " + str(failed_memcheck) + ".\n")

# Read in and sort all trial data, ignoring workers who failed the memory check

trial_data = csv.reader(open("../data/pilot-classElicitation-free-3/class-elicitation-free-3-trials.csv"))
i = iter(trial_data)
trial_data_headers = i.__next__()
worker_index = trial_data_headers.index('workerid')
np_index = trial_data_headers.index('np')
adj_index = trial_data_headers.index('adj')
np_positiveness_index = trial_data_headers.index('np_positiveness')
adj_positiveness_index = trial_data_headers.index('adj_positiveness')
response_index = trial_data_headers.index('response')
context_index = trial_data_headers.index('context')

# Build multi-level dictionary structure to hold trial data together for each of the 120 stim variations
# Forgot to include a stim ID field so we need to do a bit of extra processing to sort the trials

all_results = dict()

with open("../experiments/js/noun_elicitation_pilot.json") as json_file:
    stimuli = iter(json.load(json_file)["examples"])
    for stim in stimuli:
        id = stim['stim_id']
        all_results[id] = dict()
        for np_option in ['high', 'med', 'low']:
            all_results[id][np_option] = dict()
            for adj_option in ['positive', 'negative']:
                all_results[id][np_option][adj_option] = []

# Log results in appropriate dictionary position

for row in i:

    if not int(row[worker_index]) in failed_memcheck:

        np = row[np_index].strip('\"')
        adj = row[adj_index].strip('\"')
        np_positiveness = row[np_positiveness_index].strip('\"')
        adj_positiveness = row[adj_positiveness_index].strip('\"')
        response = row[response_index].strip('\"')
        context = row[context_index].strip('\"')

        # Need to do some extra processing to identitfy stim set, because I forgot to log
        # stim IDs. Can remove this in future iterations.
        stim_id = -1
        if (np == "the morning" or np == "the evening" or np == "dusk"):
            stim_id = 0
        elif (np == "adult"):
            if (context[-4:] == "Pat."):
                stim_id = 1
            else:
                stim_id = 12
        elif (np == "child" or np == "teenager"):
            stim_id = 1
        elif (np == "steak" or np == "pork" or np == "chicken"):
            stim_id = 2
        elif (np == "drums" or np == "violin" or np == "piano"):
            stim_id = 3
        elif (np == "box"):
            if (np_positiveness == "positive"):
                stim_id = 4
            else:
                stim_id = 9
        elif (np == "envelope" or np == "package"):
            stim_id = 4
        elif (np == "basketball player" or np == "jockey" or np == "baseball player"):
            stim_id = 5
        elif (np == "bottle of top-shelf liquor" or np == "box of wine" or np == "bottle of wine"):
            stim_id = 6
        elif (np == "gymnasium" or np == "library" or np == "classroom"):
            stim_id = 7
        elif (np == "coffee" or np == "water" or np == "tea"):
            stim_id = 8
        elif (np == "piece of furniture" or np == "piece of clothing"):
            stim_id = 9
        elif (np == "villa" or np == "apartment" or np == "townhouse"):
            stim_id = 10
        elif (np == "movie" or np == "TV show" or np == "documentary"):
            stim_id = 11
        elif (np == "baby" or np == "kid"):
            stim_id = 12
        elif (np == "rooster" or np == "hummingbird" or np == "parrot"):
            stim_id = 13
        elif (np == "Summer" or np == "Winter" or np == "Fall"):
            stim_id = 14
        elif (np == "giraffe" or np == "penguin" or np == "monkey"):
            stim_id = 15
        elif (np == "styrofoam" or np == "steel" or np == "plastic"):
            stim_id = 16
        elif (np == "dog" or np == "mouse" or np == "cat"):
            stim_id = 17
        elif (np == "burger" or np == "ice cream" or np == "fruit"):
            stim_id = 18
        elif (np == "snake" or np == "slug" or np == "eel"):
            stim_id = 19
        else:
            print("ERROR")

        if np_positiveness == "positive":
            np_positiveness = "high"
        if np_positiveness == "neither-nor":
            np_positiveness = "med"
        if np_positiveness == "negative":
            np_positiveness = "low"

        all_results[stim_id][np_positiveness][adj_positiveness].append(str(response))

for i in range(NUM_STIMULI):
    for np_option in ['high', 'med', 'low']:
        for adj_option in ['positive', 'negative']:
            print(all_results[i][np_option][adj_option])
    print('\n')

lemmatizer = WordNetLemmatizer()

def process_response_group(responses, lemmatizer):

    responses_lemmatized = []
    for r in responses:
        # remove leading/trailing spaces
        r = r.strip()
        # remove trailing punctuation
        r = r.rstrip(punctuation)
        responses_lemmatized.append(lemmatizer.lemmatize(r))
    response_freqs = Counter(responses_lemmatized).most_common()
    return response_freqs

stim_json = open("../experiments/js/noun_elicitation_pilot.json")
stimuli = json.load(stim_json)["examples"]
clean_response_json = open("../data/pilot-classElicitation-free-3/results_cleaned.json")
responses_cleaned = json.load(clean_response_json)["responses"]

# change to range NUM_STIMULI
for i in range(1):
    stim = stimuli[i]
    for np_option in ['high', 'med', 'low']:
        for adj_option in ['positive', 'negative']:

            # Retrieve lemmatized responses (pre-processed by a human)
            clean_response = responses_cleaned[i][np_option][adj_option]

            response_freqs = process_response_group(clean_response, lemmatizer)

            if np_option == 'high':
                syn = stim['positive']
            elif np_option == 'med':
                syn = stim['neither_nor']
            else:
                syn = stim['negative']

            if syn[:3] == "the":
                syn = syn[4:]

            superordinate = stim['superordinate']

            print(response_freqs)

            syn_count = 0
            synonyms = []
            hypernym_count = 0
            hypernyms = []
            unused_count = 0
            unused = []
            throwaway_count = 0
            throwaways = []

            for word, count in response_freqs:

                # dont use words or phrases that only one person suggested
                if count < 2:
                    continue

                used = False

                np_synset = wn.synsets(lemmatizer.lemmatize(syn))[0]

                if word in np_synset.lemma_names():
                    syn_count += count
                    synonyms.append(word)
                    used = True

                else:
                    if word == superordinate:
                        hypernyms.append(word)
                        hypernym_count += count
                        used = True
                    else:
                        np_hypernyms = set([i for i in np_synset.closure(lambda s:s.hypernyms())])
                        np_hypernyms_names = set()
                        for h in np_hypernyms:
                            for n in h.lemma_names():
                                np_hypernyms_names.add(n)
                        if word in np_hypernyms_names:
                            hypernyms.append(word)
                            hypernym_count += count
                            used = True

                if not used:
                    unused.append(word)
                    unused_count += count

            print("Synonyms: " + str(syn_count))
            print(synonyms)
            print("Hypernyms: " + str(hypernym_count))
            print(hypernyms)
            print("Other: " + str(unused_count))
            print(unused)
            print("Throwaway: " + str(throwaway_count))
            print(throwaways)