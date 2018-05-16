library(jsonlite)
setwd("D:/Research/comparison-class/")
data = read.csv("analysis/class-elicitation-freeProduction-2-updated.csv")

data.json = toJSON(data, pretty=TRUE)
write(paste("var examples = ", data.json, sep=""), 
      "experiments/js/class-elicitation-freeProduction-2-examples.js")
