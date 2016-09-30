# set the working directory to your local path to comparison-class
path = "~/Desktop/comparison-class/"

# reads in the results file
results = read.csv(paste(path, "data/pilot-1-paraphrase/pilot-1-paraphrase-trials.csv", sep = ""))

# import the target and context sentences used
pairs = read.csv(paste(path, "data/pilot-1-paraphrase/pilot-1-paraphrase-pairs.csv", sep = ""))

# cycle through both conditions
condition = c(" relative to ", " for a ")

# automate data binning and file creation
for (c in condition) {
  # gets the rows in data that correspond to the current condition
  results_cond = results[rownames(results)[results["condition"] == c],]
  
  for (p in c(1:NROW(pairs))) {
    # finds the rows that match the current target-context pair
    results_cond_pair = results_cond[rownames(results_cond)[results_cond["target"] == as.character(pairs[,"target"][p]) & 
      results_cond["context"] == as.character(pairs[,"context"][p])],]
    # extract the meaningful columns
    results_cond_pair_wrn = results_cond_pair[c("workerid", "response", "names")]
    
    # separate the data files by condition
    if (c == " for a ") {
      write.csv(results_cond_pair_wrn, file = paste(path, "data/pilot-1-paraphrase/raw/pilot-1-paraphrase-trials-condition-1/pair-",
                                                 as.character(p),"-condition-1",sep=""))
    } else {
      write.csv(results_cond_pair_wrn, file = paste(path, "data/pilot-1-paraphrase/raw/pilot-1-paraphrase-trials-condition-2/pair-",
                                                 as.character(p),"-condition-2",sep=""))
    }
  }
}
