# set the working directory to your local path to comparison-class
path = "~/cocolab/comparison-class/data/pilot-1-paraphrase/raw/pilot-1-paraphrase-trials-condition-2/"

# list the files in the current directory
files = list.files(path)

# stores the number of times "other" or "typical" has appeared in a file
other = 0
typical = 0

# create a chart that stores the information we need
chart = data.frame("other.count" = 1:length(files),
                   "typical.count" = 1:length(files),
                   "other.frequency" = 1:length(files),
                   "typical.frequency" = 1:length(files),
                   "responses.total" = 1:length(files))

# iterate through each file and check for the occurrence of "other" and "typical"
for (f in 1:length(files)) {
  # read in the current file
  file = read.csv(paste(path, "pair-", f, "-condition-2", sep = ""))

  # remove levels and isolate the responses
  responses = as.character(file[,"response"])
 
  # read through all of the responses in the current file
  for (r in 1:length(responses)) {
    # if "other" is found within the current response, increment the counter
    if (grepl("other", responses[r])) {
      other = other + 1
    }
    # else, if "typical" is found within the current response, increment the counter
    else if (grepl("typical", responses[r])) {
      typical = typical + 1  
    }
  }
  
  # store the frequency of occurence, the occurrence, and the total number of responses of the current file
  chart[,"other.count"][f] = other
  chart[,"typical.count"][f] = typical
  chart[,"other.frequency"][f] = other / length(responses)
  chart[,"typical.frequency"][f] = typical / length(responses)
  chart[,"responses.total"][f] = length(responses)
  
  # reset the occurrence counter
  other = 0
  typical = 0
}