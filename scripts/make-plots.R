# set the working directory to your local path to comparison-class
path = "~/cocolab/comparison-class/"

# set the experiment title
experiment = "pilot-1-paraphrase"

# is the data processed by hand or through caveman?
format = "caveman"

# import the ggplot2 library for plotting
library(ggplot2)

for (condition in c(1, 2)) {
  # set the working directory as the plots folder for the current condition
  setwd(paste(path, "analysis/", experiment, "/", format, "/", experiment, "-trials-condition-", as.character(condition), "-plots/", sep = ""))
  
  # get the number of files in the current condition folder
  files = list.files(paste(path, "data/", experiment, "/", format, "/", experiment, "-trials-condition-", as.character(condition), sep = ""))
  
  for (pair in 1:length(files)) {
    if(format == "caveman") {
      file = read.csv(paste(path, "data/", experiment, "/", format, "/", experiment, "-trials-condition-", as.character(condition), "/pair-", as.character(pair) ,"-condition-", as.character(condition), sep = ""), header = FALSE)
      response = file[,"V1"]
      file = data.frame(response)
    } else {
      # read in the csv file, plot the data, and save it as a png image
      file = read.csv(paste(path, "data/", experiment, "/", format, "/", experiment, "-trials-condition-", as.character(condition), "/pair-", as.character(pair) ,"-condition-", as.character(condition), sep = ""))
    }
    png(filename = paste("pair-", as.character(pair), "-condition-", as.character(condition), "-plot.png", sep = ""), width = 583, height = 380, units = "px", res = 125)
    build = ggplot_build(ggplot(data = file["response"], aes(x = file[,"response"])) + geom_bar())
    response = build$panel$ranges[[1]]$x.labels
    response = data.frame(response)
    count = build$data[[1]]$count
    count = data.frame(count)
    plot = ggplot(data = data.frame(response, count), aes(x = reorder(response, count), y = count)) + geom_bar(stat = "identity") + ggtitle(paste("Pair ", as.character(pair), ", Condition ", as.character(condition), sep = "")) + xlab("response") + ylab("count") + coord_flip()
    print(plot)
    dev.off()
  }
}
