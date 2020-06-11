# data from MTurk comes in individual JSON files
# here, we turn them into a single data file in .csv format
# data from experimental trials is put in a separate file from subject_questionnaire information and attention check trials

library(jsonlite)
library(tidyverse)

data.path <- "../mturk/class-elicitation-prereg-final/production-results/"
result.files <- list.files(data.path, pattern = "json")

df.subject <- data.frame()
df.trials <- data.frame()
df.attention <- data.frame()
for (result_file in result.files) {
  result_json <- fromJSON(paste(data.path, result_file, sep = "/"))
  worker.id <- paste("workerid_", str_pad(match(result_file, result.files), 4, pad = "0"), sep = "")
  #  result_json$WorkerId
  condition <- result_json$answers$condition
  
  df.attention <- bind_rows(
    df.attention,
    data.frame(result_json$answers$catch_trials) %>%
      mutate(workerid = worker.id)
  )
  
  df.subject <- bind_rows(
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
  
  df.trials <- bind_rows(
    df.trials,
    data.frame(result_json$answers$trials) %>%
      mutate(workerid = worker.id)
  )
}


df.trials %>%
  group_by(workerid) %>%
  count() %>%
  group_by(n) %>%
  count()


# write_csv(df.trials, "../data/class-elicitation-prereg-final/class-elicitation-prereg-final-trials.csv")
# write_csv(df.subject, "../data/class-elicitation-prereg-final/class-elicitation-prereg-final-subject_information.csv")
# write_csv(df.attention, "../data/class-elicitation-prereg-final/class-elicitation-prereg-final-catch_trials.csv")