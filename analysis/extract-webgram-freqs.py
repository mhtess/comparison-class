import requests, re
import pandas as pd
from bs4 import BeautifulSoup


# set corpus, access via university of Erlangen
base_url = "https://corpora.linguistik.uni-erlangen.de/cgi-bin/demos/Web1T5/"

# read in unique responses
data_path = '../data/pilot-classElicitation-free-4/class-elicitation-free-4-modal-responses.csv'
data = pd.read_csv(data_path)

#manually include all the plural seed nouns, since they are in singular form in the data
pluralNouns = ["crows", "parrots", "seagulls", "days", "dusks", "nights", "carpets", "tiles", "woods", "chocolate", "jolly ranchers", "marshmallows", "birds", "giraffes", "monkeys",
"basketballers", "golfers", "jockeys", "bassetts", "chihuahuas", "dachshunds", "novels", "poems", "stories", "cats", "dogs", "donkeys", "auditoria", "classrooms", "study halls", "beer",
"liquors", "wines", "bronze", "statues", "plastic", "platinum", "elephants", "mice", "bushes", "flowers", "trees", "cheetahs", "sloths", "joggers", "runners", "walkers", "adults", "children",
"teenagers", "hurricanes", "rains", "thunderstorms", "ice creams", "salads", "kids", "soups", "fall days", "summer days", "winter days", "fish", "babies", "caves", "caverns", "fox holes",
"downtown streets", "highways", "side roads" ]
# extract unique superordinates
supers = data['superordinate'].drop_duplicates().tolist()
# extract unique modal responses
modes = data['cleanMode'].drop_duplicates().tolist()
unique_nps = supers + modes

freqs = []
words = []
# construct the url
for np in unique_nps:
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
    # the text list includes the frequency and the word
    freqs.append(text[0])
    words.append(text[1])
# create DF of frequencies and words
df_nps = pd.DataFrame(list(zip(words, freqs)), columns=['NPs', 'Frequencies'])
#df_nps.to_csv('../data/pilot-classElicitation-free-4/webgram-freqs-unique-nps.csv')
