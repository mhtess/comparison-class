# Comparison Class Elicitation Data

This folder contains the raw and analyzed data from the comparison class free production experiment. A major part of the data (83%) was processed automatically, the remainder was processed manually. The frequencies of the responses were extracted from the Google Web 1T 5-gram database.

## Versions of the data set

- `full-classified-data-w-freqs-no-failedRef.csv`: the full processed dataset; all invalid responses are excluded. Two superordinate categories are adjusted according to the modal responses produced by participants (the response produced by most participants in all NP and adjective conditions of an item): 'writing utensils' was adjusted to 'script' (item 5); 'drinks' was adjusted to 'food' (item 77) (these adjustments become the _updated superordinates set_). The subordinate responses are coerced to the NPs and the superordinate responses are coerced to this updated superordinates set. These superordinates were used for the adjective rating experiment. The file includes frequencies.
- `full-classified-data-w-freqs.csv`: the full processed dataset, including 113 responses failing correct reference given the context sentence (e.g. 'furniture' for item 90; these responses were excluded in the dataframe above).  The subordinate responses are coerced to the NPs and the superordinate responses are coerced to the updated superordinates set. The file includes frequencies. (It is a superset of `full-classified-data-w-freqs-no-failedRef.csv`)
- `full-classified-data-w-produced-super-no-failedRef.csv`: the full processed data, all invalid responses excluded; the superordinate responses which were classified manually were coerced with respect to their frequency in the data: if the response provided by the participant was produced by at least three participants across NP and adjective conditions the response was kept, otherwise the response was coerced to the updated superordinates set. The file includes corresponding frequencies. (The difference to the previous dataset are the responses (coerced to different superordinates) and the superordinate frequencies).
- `full-classified-data-w-produced-super.csv`: the full processed data, including 113 responses failing correct reference given the context sentence (e.g. 'furniture' for item 90; these responses were excluded in the dataframe above). The superordinates were coerced in the same manner as in the dataframe above. The file includes corresponding frequencies. (It is a superset of `full-classified-data-w-produced-super-no-failedRef.csv`)
- `full-classified-data-w-handResps-as-super-no-failedRef.csv`: the full processed dataset (all invalid responses excluded) where all responses which were not classified automatically as subordinate are marked as superordinate (in the column `specific`). The responses are coerced to the NPs and the updated superordinates set. The respective frequencies are included.
- `full-classified-data-w-handResps-as-super.csv`: the full processed dataset including 113 responses failing correct reference given the context sentence, where all responses which were not classified automatically as subordinate are marked as superordinate (column `specific`). The responses are coerced to the NPs and the updated superordinates set. The respective frequencies are included. (It is a superset of `full-classified-data-w-handResps-as-super-no-failedRef.csv`)

## Data subsets

- `auto-classified-data-w-freqs-final.csv`: a dataframe with only the automatically classified responses and their corresponding frequencies. Two of the superordinate categories are adjusted to the empirical modal superordinate responses (s. above). The responses are coerced to either these u[pdated superordinates or the NPs. (It is a subset of `full-classified-data-w-freqs.csv`)
- `hand-classified-supers-w-produced-super.csv`: a subset of the data with superordinate responses which were not classified automatically only. The column `produced_super` contains the best fitting modal superordinate: it is the response provided by the participant if at least two other participants provided the same response for this item; it is the anticipated superordinate otherwise. It includes no frequencies. (It is a subset of `full-classified-data-w-produced-super.csv`)
- `hand-classified-supers-w-produced-super-w-freqs.csv`: a subset of processed data containing only superordinate responses that were not classified automatically. The responses are coerced to the responses provided by at least three participants (s. above). The respective frequencies are included. (It is a subset of the `full-classified-data-w-produced-super.csv` dataframe.)

## Supplementary files

- `hand-classified-produced-distinct-super-pl.csv`: all distinct superordinate responses (converted to plural) deviating from the anticipated superordinate categories of the experimental items, that were produced by at least three participants (collapsed across adjective condition and NP within item). This data frame was used to extract frequencies.
- `hand-classified-produced-super-pl-frequencies.csv`: frequencies of the _plural_ superordinate responses provided by at least three participants.
- `class-elicitation-final-plural_frequencies.csv`: frequencies of the _plural_ NPs and updated superordinates (some items were adjusted to avoid polysemy, like races --> rallies).
- `hand_classification_dict.csv`: transformations of the responses that were used to manually classify responses which were not classified automatically.
- `lemmatization_dict`: lemmatization transformations that were performed on the raw responses in order to improve automatic classification.
- `misspellings_dict.csv`: misspelling corrections that were performed on the raw responses in order to improve automatic classification.
- `synonym_dict.csv`: transformations of raw responses which are obvious synonyms of anticipated NPs and superordinates to those phrases to improve automatic classification.

## Raw data

- `class-elicitation-prereg-final-catch_trials.csv`: warm-up trial data from the Empire State Building paraphrase task and the memory check.
- `class-elicitation-prereg-final-subject_information.csv`: subject information.
- `class-elicitation-prereg-final-trials`: raw experimental data.
