from nltk.corpus import wordnet as wn
import csv

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

NUM_WORKERS = 81
NUM_MEMCHECK_TRIALS = 10
MEMCHECK_TOLERANCE = 2

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

print(failed_memcheck)