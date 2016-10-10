# set the working directory to your local path to comparison-class
path = "~/cocolab/comparison-class/"

# set the experiment title
experiment = "pilot-1-paraphrase"

# set the format of the input data (manual or caveman)
format = c("manual", "caveman")

# import the target/context pairs used in the experiment
pairs = read.csv(paste(path, "data/", experiment, "/pilot-1-paraphrase-pairs-filled.csv", sep = ""))

for (condition in c(1, 2)) {
  # *FOR SAVING* set the working directory as the plots folder for the current condition
  #setwd(paste(path, "analysis/", experiment, "/", format[1], "/", experiment, "-trials-condition-", as.character(condition), "-plots/", sep = ""))
  
  # get the number of files in the current condition folder
  files = list.files(paste(path, "data/", experiment, "/", format[1], "/", experiment, "-trials-condition-", as.character(condition), sep = ""))
  
  for (pair in 1:length(files)) {
    for (f in format) {
      if (f == "manual") {
        # read in the appropriate csv file
        file = read.csv(paste(path, "data/", experiment, "/", format[1], "/", experiment, "-trials-condition-", as.character(condition), "/pair-", as.character(pair) ,"-condition-", as.character(condition), sep = ""))
        
        # cut off any characters past the 20th per response
        file["response"] = data.frame(substr(file[,"response"], 1, 20))
        colnames(file["response"]) = c("response")
      }
      if (f == "caveman") {
        # read in the appropriate csv file
        file = read.csv(paste(path, "data/", experiment, "/", format[2], "/", experiment, "-trials-condition-", as.character(condition), "/pair-", as.character(pair) ,"-condition-", as.character(condition), sep = ""), header = FALSE)
        
        # add "response" as the column name
        response = file[,"V1"]
        file = data.frame(response)
        
        # cut off any characters past the 20th per response
        file["response"] = data.frame(substr(file[,"response"], 1, 20))
        colnames(file["response"]) = c("response")
      }
      
      # *FOR SAVING*
      #png(filename = paste("pair-", as.character(pair), "-condition-", as.character(condition), "-plot.png", sep = ""), width = 583, height = 380, units = "px", res = 125)
      
      # set up the correct axis labels
      build = ggplot_build(ggplot(data = file["response"], aes(x = file[,"response"])) + geom_bar())
      response = build$panel$ranges[[1]]$x.labels
      response = data.frame(response)
      count = build$data[[1]]$count
      count = data.frame(count)
      
      # generate the base plot
      plot = ggplot(data = data.frame(response, count), aes(x = reorder(response, count), y = count)) + geom_bar(stat = "identity")
      
      # add accessories to the plot
      #title = paste("Pair ", as.character(pair), ", Condition ", as.character(condition), sep = "")
      #plot = plot + ggtitle(title)
      plot = plot + xlab("Responses") + ylab("Count")
      plot = plot + theme_bw(base_size = 11, base_family = "Helvetica")
      plot = plot + coord_flip(ylim = c(1:14)) + scale_y_continuous(breaks = pretty(seq(0, 14, by = 2), n = 7))
      
      # logic for placing the plots in a grid
      if ((pair %% 2 == 1) && f == "manual") { 
        plot = plot + ggtitle("Manual")
        plot = plot + theme(plot.title = element_text(size = "14"))
        plot1 = plot
      }
      else if ((pair %% 2 == 1) && f == "caveman") {
        plot = plot + ggtitle("Caveman")
        plot = plot + theme(plot.title = element_text(size = "14"))
        plot2 = plot
        #pg1 = plot_grid(plot1, plot2, ncol = 1)
      }
      else if ((pair %% 2 == 0) && f == "manual") { plot3 = plot }
      else if ((pair %% 2 == 0) && f == "caveman") { 
        plot4 = plot
        #pg2 = plot_grid(plot3, plot4, ncol = 1)
        #pg = plot_grid(pg1, pg2, ncol = 2, align = "v")
        pg = plot_grid(plot1, plot2, plot3, plot4, labels = c("A", "", "B", ""), align = "v")
        cat(paste("Target: \"", as.character(pairs[,"target"])[pair], "\"", sep = ""), paste("Context A: \"", as.character(pairs[,"context"])[pair - 1], "\"", sep = ""), paste("Context B: \"", as.character(pairs[,"context"])[pair], "\"", sep = ""), sep = "\n\n")
        plot(pg)
      }
      
      # *FOR SAVING*
      #print(plot)
      #dev.off()
    }
  }
}
