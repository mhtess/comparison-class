import requests, re
import pandas as pd
from bs4 import BeautifulSoup
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import WhitespaceTokenizer
# set corpus, access via university of Erlangen
base_url = "https://corpora.linguistik.uni-erlangen.de/cgi-bin/demos/Web1T5/"

# read in unique responses
data_path = '../data/pilot-classElicitation-free-4/class-elicitation-free-4-modal-responses.csv'
data = pd.read_csv(data_path)

#manually include all the plural seed nouns, since they are in singular form in the data
pluralNouns = ["crows", "parrots", "seagulls", "days", "dusks", "nights", "carpets", "tiles", "woods", "chocolate", "jolly ranchers", "marshmallows", "birds", "giraffes", "monkeys",
"basketballers", "golfers", "jockeys", "bassetts", "chihuahuas", "dachshunds", "novels", "poems", "stories", "cats", "dogs", "donkeys", "auditoria", "classrooms", "study halls", "studyhall",
"study-hall", "beer", "liquors", "wines", "bronze", "statues", "plastic", "platinum", "elephants", "mice", "bushes", "flowers", "trees", "cheetahs", "sloths", "joggers", "runners", "walkers",
"adults", "children", "teenagers", "hurricanes", "rains", "thunderstorms", "ice cream", "salads", "kids", "soups", "fall days", "summer days", "winter days", "fish", "babies", "caves", "caverns", "fox holes",
"downtown streets", "highways", "side roads" ]
# extract unique superordinates
supers = data['superordinate'].drop_duplicates().tolist()
# extract unique modal responses
modes = data['cleanMode'].drop_duplicates().tolist()
# all responses
# originalResps = data['cleanedPhrase'].apply(lambda x: x.replace("_", "")).drop_duplicates().tolist()
unique_nps_pl = list(set(supers + modes + pluralNouns))

lemmatizer = WordNetLemmatizer()

super_sg = data['superordinate'].drop_duplicates().apply(lambda word: lemmatizer.lemmatize(word)).tolist()
modes_sg = data['cleanMode'].drop_duplicates().apply(lambda word: lemmatizer.lemmatize(word)).tolist()

nouns_sg = pd.DataFrame(pluralNouns)[0].apply(lambda word: lemmatizer.lemmatize(word)).tolist()
print(nouns_sg, super_sg, modes_sg)
unique_nps_sg = list(set(super_sg + modes_sg + nouns_sg))
freqs_sg = []
words_sg = []
freqs_pl = []
words_pl = []
# construct the url
# for np in unique_nps_pl:
#     webgram_page = requests.get(base_url + "Web1T5_freq.perl?query=" + np + "&mode=Search&limit=50&threshold=100&optimize=on&wildcards=listed+normally&fixed=shown&.cgifields=optimize&.cgifields=debug")
#     word_soup = BeautifulSoup(webgram_page.text, 'html.parser')
#     #gives all the tables
#     tables = word_soup.find_all("table")
#     # get frequencies table (last one on the page)
#     freq_table = tables[len(tables)-1]
#     # get tags where the target information is
#     tds = freq_table.find_all("td")
#     text = []
#     for t in tds:
#         # get frequency and word
#         if t.text != "":
#             text.append(t.text)
#             print(text)
#     # the text list includes the frequency and the word
#     if len(text) == 0 :
#         continue
#     else:
#         freqs_pl.append(text[0])
#         words_pl.append(text[1])

# create DF of frequencies and words
# df_nps = pd.DataFrame(list(zip(words_pl, freqs_pl)), columns=['NPs', 'Frequencies'])
# df_nps.to_csv('../data/pilot-classElicitation-free-4/webgram-freqs-all-unique-nps.csv')

for np in unique_nps_sg:
    webgram_page = requests.get(base_url + "Web1T5_freq.perl?query=" + np + "&mode=Search&limit=50&threshold=100&optimize=on&wildcards=listed+normally&fixed=shown&.cgifields=optimize&.cgifields=debug")
    word_soup = BeautifulSoup(webgram_page.text, 'html.parser')
    #gives all the tables
    tables = word_soup.find_all("table")
    # get frequencies table (last one on the page)
    freq_table = tables[len(tables)-1]
    # get tags where the target information is
    tds = freq_table.find_all("td")
    text = []
    for t in tds:
        # get frequency and word
        if t.text != "":
            text.append(t.text)
            print(text)
    # the text list includes the frequency and the word
    if len(text) == 0 :
        continue
    else:
        freqs_sg.append(text[0])
        words_sg.append(text[1])

# create DF of frequencies and words
df_nps = pd.DataFrame(list(zip(words_sg, freqs_sg)), columns=[ 'NPs_SG', 'Frequencies_SG'])
df_nps.to_csv('../data/pilot-classElicitation-free-4/webgram-freqs-unique-nps-pl-sg.csv')
