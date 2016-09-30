# set the working directory to your local path to comparison-class
path = "~/Desktop/comparison-class/data/pilot-1-paraphrase/raw/pilot-1-paraphrase-trials-condition-2"
setwd(path)

# store the files in the current directory
files = list.files(".")

# stores the number of times "other" or "typical" has appeared in a file
occ_other = 0
occ_typical = 0

# a chart that stores the information we need
chart = data.frame(freq_other = 1:length(files), freq_typical = 1:length(files), occ_other = 1:length(files), occ_typical = 1:length(files), responses = 1:length(files))

# iterate through each file and check for the occurrence of "other" and "typical"
for (f in 1:length(files)) {
  # read in the current file
  file = read.csv(paste("pair-", f, "-condition-2", sep = ""))

  # remove levels and isolate the responses
  responses = as.character(file[,"response"])
 
  # read through all of the responses in the current file
  for (r in 1:length(responses)) {
    # if "other" is found within the current response, increment the counter
    if (grepl("other", responses[r])) {
      occ_other = occ_other + 1
    }
    # else, if "typical" is found within the current response, increment the counter
    else if (grepl("typical", responses[r])) {
      occ_typical = occ_typical + 1  
    }
  }
  
  # store the frequency of occurence, the occurrence, and the total number of responses of the current file
  chart[,"freq_other"][f] = occ_other / length(responses)
  chart[,"freq_typical"][f] = occ_typical / length(responses)
  chart[,"occ_other"][f] = occ_other
  chart[,"occ_typical"][f] = occ_typical
  chart[,"responses"][f] = length(responses)
  
  # reset the occurrence counter
  occ_other = 0
  occ_typical = 0
}