# Comparison class experiments

## Cog Sci 2017

### Pilots

1. `pilot-1-paraphrase` (n=40; Summer 2016):
Wide range of adjective phrase stimuli.
Half of participants completed a open-ended paraphrase task using a "for a" paraphrase; the other half used "relative to".
2. `class-elicitation` (n=10; January 5, 2017):
More controlled set of adjective stimuli.
Free response paradigm using "for a".
Results indicated that just the most-specific subordinate category was used.
The task may have been too open-ended.
3. `class-elicitation-2` (n=18; January 7, 2017):
Cleaned up stimuli.
Subjects rate (using sliders) paraphrases of both a "subordinate" and "superordinate" paraphrase.
For example: "Luis sees a basketball player. Luis says, 'He is tall'."
What did Luis mean?
  - "Luis is tall relative to other basketball players."
  - "Luis is tall relative to other people." \\
Subjects can also give an "Other" option where they fill in a "relative to other" paraphrase.
4. `class-elicitation-2-items2` (n=9; January 9, 2017):
Same as previous but with refined stimuli.
Removed the "Other" option because it was not often used by participants in the earlier pilots.
5. `class-elicitation-2-items3` (n=18; January 14, 2017):
To confirm data collection and new "superContext" condition.
6. `class-elicitation-2-items4` (n=9; January 14, 2017):
To fix randomization scheme, data recording issues.

### Experiments

1. `class-elicitation-2afc` (n = 300; January 15, 2017)
A 2-alternative forced-choice version of the `class-elicitation` task used in the pilots.
We the 2afc for ease of the (Bayesian) data analysis.
(If it produces different results that what we expected from the pilot, we may run the slider version to see if this is due to the dependent measure.)
Since each participant only does one-half of trials, we will collect about 150 participants to get approximately 75 responses for item.
We choose n = 75 responses on a 2AFC to produce confidence intervals with a maximum width of about 0.2-0.25.
This is quantitative experiment and we are interested in the precision of our estimates for each item.
The task involves 15 2-afc trials and I expect will take < 5 minutes.
Since each participant completes half of all trials for a single condition, we will need N = 300.
We will pay each participant $0.50 for the experiment.

36 participants were accidentally collected on a slider version of the task and must be dropped.
Another 2 participants failed the simple catch trial at the start, leaving n = 262.

2. `vague-prior-elicitation-2afc` (n = 100; January 16, 2017)
Same data collection plan as above.
In these experiments, the participant knows the subordinate category ("Johns sees a basketball player").
Participants are asked if the adjective with an explicit superordinate comparison class would be appropriate (e.g., Do you think the basketball player would be considered tall relative to other people?")


## Post Cog Sci

### Pilots

1. `class-elicitation-paraphrase` (n = 18; June 1, 2017)

- Same items as main cogsci experiments but with a free production paraphrase.
- Cost = $0.75 x 18 + 20% = 16.2

2. `class-elicitation-2afc-2`

- Improved set of items based on wordnet

3. `class-elicitation-free-2` (n = 27; Sept 29, 2017)

- Cost = $1 x 27 + 20% = 32.4
- Improved set of items based on wordnet. Free production.

4. `adjective-elicitation-1` (n = 18; Feb 15, 2018)

- Cost = $0.50 x 18 + 20% = 10.8
- elicit nouns for adjectives (for stimuli generation)

5. `class-elicitation-free-3` (n = 120; May 13, 2019)

- Cost = $1 x 100 + 20% = $120
(20 itemsets X 6 formats = 120 unique stimuli; we want 15 responses on average per item so we need 100 participants)
- 18 trials per participant: randomly select 18 of the 20 possible itemsets, and generate 3 of each of the 6 stimulus formats (NP: low/med/high X ADJ: pos/neg). Elicit free production of comparison class given stimulus.

6. Adj-endorsement-exp directory (Sept 18, 2019)

- babe two-alternative forced-choice experiment: forced-choice html code in `03_custom_view_templates.js`, items list in `04_trials.js`, trial views generation in `05_view.js`, experiment structure in `06_main,js`  
- 9 dimensions (size, length, price, weight, sound (loudness), darkness, height, temperature, speed), app. 7 items each
- each item comprises context + 3 examples (positive, negative or neutral with respect to property in question)

### Preregistered

2. `class-elicitation-paraphrase` (n = 150...)

- Cost = $0.75 x 150 + 20% = 135
