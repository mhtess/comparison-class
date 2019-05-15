from nltk.corpus import wordnet as wn
import csv
import json

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

print(str(len(failed_memcheck)) + " workers failed the memory check.")


# Read in and sort all trial data, ignoring workers who failed the memory check

trial_data = csv.reader(open("../data/pilot-classElicitation-free-3/class-elicitation-free-3-trials.csv"))
i = iter(trial_data)
trial_data_headers = i.__next__()
print(trial_data_headers)
worker_id = trial_data_headers.index('workerid')
np_index = trial_data_headers.index('np')
adj_index = trial_data_headers.index('adj')
np_positiveness_index = trial_data_headers.index('np_positiveness')
adj_positiveness_index = trial_data_headers.index('adj_positiveness')
response_index = trial_data_headers.index('response')

# Build structure to hold trial data together for each of the 20 variations

all_trial_data = dict()

with open("../experiments/js/noun_elicitation_pilot.json") as json_file:
    stimuli = iter(json.load(json_file)["examples"])
    for stim in stimuli:
        for np_option in ['positive', 'neither_nor', 'negative']:
            for adj_option in ['adj_positive', 'adj_negative']:
                pass

for row in i:
    if not int(row[worker_id]) in failed_memcheck:
        np = row[np_index]
        adj = row[adj_index]
        np_positiveness = row[np_positiveness_index]
        adj_positiveness = row[adj_positiveness_index]
        response = row['response']