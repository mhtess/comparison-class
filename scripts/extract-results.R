# set the working directory to your local path to comparison-class
path = "~/cocolab/comparison-class/"

# set the experiment title
experiment = "pilot-1-paraphrase"

# reads in the results file
results = read.csv(paste(path, "data/", experiment, "/", experiment, "-trials.csv", sep = ""))

# import the target and context sentences used
pairs = read.csv(paste(path, "data/", experiment, "/", experiment, "-pairs.csv", sep = ""))

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
    
    # use this if we need to get the raw responses as inputs to the caveman parser
    results_r = as.character(results_cond_pair_wrn[,"response"])
    
    # separate the data files by condition
    #if (c == " for a ") {
    #  write.csv(results_cond_pair_wrn, file = paste(path, "data/", experiment, "/raw/", experiment, "-trials-condition-1/pair-",
    #                                             as.character(p),"-condition-1",sep=""), sep = "\n")
    #} else {
    #  write.csv(results_cond_pair_wrn, file = paste(path, "data/", experiment, "/raw/", experiment, "-trials-condition-2/pair-",
    #                                             as.character(p),"-condition-2",sep=""), sep = "\n")
    #}
    
    # also use this if using the caveman parser
    if (c == " for a ") {
      write(results_r, file = paste(path, "data/", experiment, "/caveman/raw-responses/", experiment, "-trials-condition-1/pair-",
                                                 as.character(p),"-condition-1",sep=""), sep = "\n")
    } else {
      write(results_r, file = paste(path, "data/", experiment, "/caveman/raw-responses/", experiment, "-trials-condition-2/pair-",
                                                 as.character(p),"-condition-2",sep=""), sep = "\n")
    }
  }
}
