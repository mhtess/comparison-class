import os

# set up the number of conditions and target/context pairs
condition = 2
pairs = 18

# current experiment
experiment = "pilot-1-paraphrase"

for c in range(0, condition):
	for p in range(0, pairs):
		# open up the file to read from and feed each line into the caveman parser
		filename = "pair-" + str(p + 1) + "-condition-" + str(c + 1)
		with open("../data/" + experiment + "/caveman/raw-responses/" + experiment + "-trials-condition-" + str(c + 1) + "/" + filename) as file:
			for line in file:
				cmd = "python ../data/caveman/caveman.py " + "\"" + line + "\"" + " " + str(c) + " " + str(p)
				os.system(cmd)
