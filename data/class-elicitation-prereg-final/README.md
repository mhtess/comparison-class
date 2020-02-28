# Comparison Class Elicitation Data

This folder contains the raw and analyzed data from the comparison class free production experiment. A major part of the data (83%) was processed automatically, the remainder was processed manually. The frequencies of the responses were extracted from the Google Web 1T 5-gram database.

## Versions of the data set

- `auto-classified-data-w-freqs-final.csv`: a dataframe with only the automatically classified responses and their corresponding frequencies. Two of the superordinate categories are adjusted to the empirical modal superordinate responses. The responses are coerced to either this superordinates or the NPs.
- `cc-prod-super-resps-w-produced-super.csv`: a dataframe with superordinate responses which were not classified automatically. The column `produced_super` contains the best fitting modal superordinate: it is the response provided by the participant if at least two other participants provided the same response for this item; it is the anticipated superordinate otherwise.
- `class-elicitation-final-full_analysis_w_adjusted_super.csv`: the full dataset; two superordinate categories are adjusted according to the modal responses produced by participants (the response produced by most participants in all NP and adjective conditions of an item): 'writing utensils' --> 'script'; 'drinks' --> 'food'; the dataframe includes superordinate responses coerced to this updated superordinates set. These superordinates were used for the adjective rating experiment.

- `full-classified-data-w-freqs.csv`: the full processed dataset with superordinate responses coerced to the superordinates set with the two adjusted items and corresponding subordinate and superordinate frequencies.
- `full-classified-data-w-produced-super.csv`: the full processed data with superordinates produced by participants (s. above) and corresponding subordinate and superordinate frequencies. (The difference to the previous dataset are the responses (coerced to different superordinates) and the superordinate frequencies).
- `full-data-w-handResps-as-super.csv`: the full processed dataset where all responses which were not classified automatically as subordinate are marked as superordinate (column `specific`). The responses are coerced to the anticipated superordinates including the two adjusted items. The respective frequencies are included.

## Supplementary files

- `cc-prod-distinct-super-pl.csv`: all distinct plural superordinate responses deviating from the anticipated superordinate categories of the experimental items, that were produced by at least three participants (collapsed across adjective condition and NP within item). This data frame was used to extract frequencies.
- `cc-prod-produced-super-pl-frequencies.csv`: frequencies of the _plural_ superordinate responses provided by at least three participants.
- `class-elicitation-final-full_analysis_w_pl_np.csv`: the full dataset with plural NPs which were used for frequency extraction.
- `class-elicitation-final-plural_frequencies.csv`: frequencies of the _plural_ NPs and anticipated superordinates (including adjustment of the two above).
- `hand_classification_dict.csv`: transformations of the responses that were used to manually classify responses which were not classified automatically.
- `lemmatization_dict`: lemmatization transformations that were performed on the raw responses in order to improve automatic classification.
- `misspellings_dict.csv`: misspelling corrections that were performed on the raw responses in order to improve automatic classification.
- `nonmatched-produced-super-w-freqs.csv`: a subset of processed data containing only superordinate responses that were not classified automatically. The responses are coerced to the responses provided by at least three participants (s. above). The respective frequencies are included. (It is a subset of the `full-classified-data-w-produced-super.csv` dataframe.)
- `synonym_dict.csv`: transformations of raw responses which are obvious synonyms of anticipated NPs and superordinates to those phrases to improve automatic classification.

## Raw data

- `class-elicitation-prereg-final-catch_trials.csv`: warm-up trial data from the Empire State Building paraphrase task and the memory check.
- `class-elicitation-prereg-final-subject_information.csv`: subject information.
- `class-elicitation-prereg-final-trials`: raw experimental data.
