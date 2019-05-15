from nltk.corpus import wordnet as wn

np = "pork"
class_elicited_1 = "meats"

np_synset = wn.synsets(np)[0]
np_hypernyms = set([i for i in np_synset.closure(lambda s:s.hypernyms())])
class_elicited_1_synset = wn.synsets(class_elicited_1)[0]

print(np_synset)
print(class_elicited_1_synset)
print(np_hypernyms)

print(np in np_synset.lemma_names())
print(class_elicited_1_synset in np_hypernyms)