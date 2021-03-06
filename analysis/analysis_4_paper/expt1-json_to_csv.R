# preprocess NP elicitation data

library(tidyverse)
library(jsonlite)
data.path <- "../mturk/np-elicitation/production-results/"
result.files <- list.files(data.path, pattern="json")

df.subject <- data.frame()
df.trials <- data.frame()
df.attention <- data.frame()
for (result_file in result.files) {
  result_json = fromJSON(paste(data.path, result_file, sep ="/"))
  worker.id = result_json$WorkerId
  condition = result_json$answers$condition
  
  df.attention = bind_rows(
    df.attention, 
    data.frame(result_json$answers$catch_trials) %>%
      mutate(workerid = worker.id)
  )
  
  df.subject = bind_rows(
    df.subject, 
    data.frame(result_json$answers$subject_information) %>% 
      mutate(
        workerid = worker.id,
        language = gsub("\"", "", language),
        enjoyment = gsub("\"", "", enjoyment),
        age = gsub("\"", "", age),
        gender = gsub("\"", "", gender),
        problems = gsub("\"", "", problems),
        comments = gsub("\"", "", comments)
      ) 
  )
  
  df.trials = bind_rows(
    df.trials, 
    data.frame(result_json$answers$trials) %>%
      mutate(workerid = worker.id)
  )
}

df.noun.elicit.wide <- df.trials %>%
  mutate(workerid = paste("s", as.numeric(factor(workerid)), sep = "")) %>%
  rowwise() %>% 
  mutate(adj_response = paste(adjective, response, sep = "_")) %>%
  select(workerid, trial_num, degree, adjective_form, adj_response) %>%
  spread(adjective_form, adj_response) %>%
  rowwise() %>%
  mutate(
    pos_adj = strsplit(positive, "_")[[1]][1],
    neg_adj = strsplit(negative, "_")[[1]][1],
    positive = strsplit(positive, "_")[[1]][2],
    negative = strsplit(negative, "_")[[1]][2],
    neither_nor = strsplit(neither_nor, "_")[[1]][2],
    superordinate = strsplit(superordinate, "_")[[1]][2]
  ) %>%
  select(workerid, trial_num, degree, pos_adj, neg_adj, superordinate, positive, neither_nor, negative)


write_csv(df.noun.elicit.wide,
          path = paste("../data/np-elicitation/",
                "np-elicitation-wide-n50.csv", sep = ""))