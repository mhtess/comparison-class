import time
import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from string import punctuation
from nltk.corpus import wordnet as wn
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import WhitespaceTokenizer


def get_stim_dimension(np, context, positiveness):
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
        if (positiveness == "positive"):
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
        stim_id = np.nan

    return stim_id


# ----------------------------------------------------------------------------------------------------------------


# import gensim.downloader as api
# import numpy as np

# def compute_sim_GENSIM(row, model, word1, word2):
#     try:
#         return model.similarity(row[word1], row[word2])
#     except KeyError as e:
#         return np.nan

# def compute_similarities_GENSIM(data, x, y, model_names, save = True):
#     ''' Given a pandas dataframe, compute the similarity between the words in two columns.
#         A new data frame is returned that is a duplicate of the original but also contains
#         columns for word similarity.

#         Note: If either word in a given row does not exist in the word embedding, similarity cannot be computed
#         and np.nan (not a number) is returned.

#         Keyword arguments:
#         data -- the pandas dataframe
#         x -- the name of the first column of words
#         y -- the name of the second column of words
#         model_names -- a list of gensim model names that should be used to compute similarity,
#                         each model will add a new column to the dataframe
#                         * See https://github.com/RaRe-Technologies/gensim-data for more info on model names
#         save -- Boolean representing if the dataframe should be saved to HDD as a csv file, Defaults to True
#     '''
#     import gensim.downloader as api

#     for model_name in model_names:

#         # load the model and give it a proper name in the data-frame
#         model = api.load(model_name)
#         name = 'sim_' + model_name.split('-')[0]

#         # compute the similarity between stim and response
#         data[name] = data.apply(lambda row: compute_sim_GENSIM(row, model, x, y), axis=1)

#         print(name, 'has completed!')


#     # models take a lot of time to compute, so save to csv each time
#     if save:
#         save_file = 'with-model:' + time.strftime("%m-%d-%H:%M") + '.csv'
#         data.to_csv(save_file, encoding='utf-8', index=False)

#     return data

# # No longer using gensim!
# # compute_similarities_GENSIM(df, 'np', 'response', model_names = ['glove-wiki-gigaword-100'], save = True)


# ----------------------------------------------------------------------------------------------------------------


def get_word_vector(word, model, norm = False):
    try:
        vec = sim_df.at[word, model]

        if norm:
            vec = vec / np.linalg.norm(vec)

    except KeyError:
        vec = np.nan

    return vec


def append_similarity(data, x = 'np', y = 'response', add_raw_vectors = False):
    ''' Given a pandas dataframe, compute the similarity between the words in two columns.
        A new data frame is returned that is a duplicate of the original but also contains
        columns for word similarity.

        Note: If either word in a given row does not exist in the word embedding, similarity cannot be computed
        and np.nan (not a number) is returned.

        Keyword arguments:
        data -- the pandas dataframe
        x -- the name of the first column of words
        y -- the name of the second column of words
        model  -- 'glove' or fasttext
    '''

     # Compute the normalized vector for each word
    stim_vec = data[x].map(lambda x: get_word_vector(x, 'vec', norm = True))
    response_vec = data[y].map(lambda x: get_word_vector(x, 'vec', norm = True))

    embedding = pd.concat([stim_vec, response_vec], axis=1)


    if add_raw_vectors:
        data = data.assign(stim_vector = stim_vec,
                           response_vector = response_vec)


    # Compute the cosine similarity
    data['similarity'] = embedding.apply(lambda row: np.dot(row[x], row[y]), axis = 1)

    return data
