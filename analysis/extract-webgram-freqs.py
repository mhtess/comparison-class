import requests, re
import pandas as pd
from bs4 import BeautifulSoup
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import WhitespaceTokenizer
# set corpus, access via university of Erlangen
base_url = "https://corpora.linguistik.uni-erlangen.de/cgi-bin/demos/Web1T5/"

# read in unique responses
data_path = '../data/class-elicitation-prereg-final/full-classified-tidy-data4freqs.csv'
data = pd.read_csv(data_path)

# extract unique superordinates
supers = data['superordinate.freq'].drop_duplicates().tolist()
# extract unique modal responses
subs = data['np_pl'].drop_duplicates().tolist()
# all responses
unique_nps_pl = list(set(supers + subs))

freqs_pl = []
words_pl = []
# construct the url
for np in unique_nps_pl:
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
        freqs_pl.append(text[0])
        words_pl.append(text[1])

# create DF of frequencies and words
df_nps = pd.DataFrame(list(zip(words_pl, freqs_pl)), columns=['NPs', 'Frequencies'])
df_nps.to_csv('../data/class-elicitation-prereg-final/cc-prod-produced-super-pl-frequencies_TEST.csv')
