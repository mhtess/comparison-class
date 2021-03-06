# Comparison Class Elicitation Data

This folder contains the raw and analyzed data from the comparison class free production experiment. A major part of the data (83%) was processed automatically, the remainder was processed manually. The frequencies of the responses were extracted from the Google Web 1T 5-gram database.

# Data Processing

The different dataset versions in this directory contain data processed up to different degrees of sophistication. The responses produced by participants are coerced to either subordinate or superordinate nouns of the respective item, depending on their classification. The datasets differ in the superordinates the responses are coerced to and with respect to which responses are coerced to superordinates:
1. The responses classified as superordinate are coerced to the anticipated superordinates set (two of which were adjusted to empirical modal superordinates) (`-w-freqs-` datasets)
2. All responses which were _not automatically_ classified as _specific_ are coerced to the anticipated superordinates set (`-handResps-as-super-` datasets)
3. The responses classified as superordinate are coerced to modal superordinates produced by at least three participants: if the provided response was produced by at least two other participants for the given item, it is unchanged, otherwise it is coerced to the anticipated superordinate (`-produced-super-` datasets).

Furthermore, in some datasets invalid responses which fail to establish correct reference given the context sentence are excluded (e.g. the responses refer to something mentioned in the context than the critical NP) (`-no-failedRef` datasets, they are subsets of dataframes with the same prefix.)

## Versions of the data set

- `full-classified-data-w-freqs-no-failedRef.csv`: the full processed dataset; all invalid responses are excluded. Two superordinate categories are adjusted according to the modal responses produced by participants (the response produced by most participants in all NP and adjective conditions of an item): 'writing utensils' was adjusted to 'script' (item 5); 'drinks' was adjusted to 'food' (item 77) (these adjustments become the _updated superordinates set_). The subordinate responses are coerced to the NPs and the superordinate responses are coerced to this updated superordinates set. These superordinates were used for the adjective rating experiment. The file includes frequencies (26.234 entries).
- `full-classified-data-w-freqs.csv`: the full processed dataset, including 113 responses failing correct reference given the context sentence (e.g. 'furniture' for item 90; these responses were excluded in the dataframe above).  The subordinate responses are coerced to the NPs and the superordinate responses are coerced to the updated superordinates set. The file includes frequencies. (It is a superset of `full-classified-data-w-freqs-no-failedRef.csv`, 26.347 entries)
- `full-classified-data-w-produced-super-no-failedRef.csv`: the full processed data, all invalid responses excluded; the superordinate responses which were classified manually were coerced with respect to their frequency in the data: if the response provided by the participant was produced by at least three participants across NP and adjective conditions the response was kept, otherwise the response was coerced to the updated superordinates set. The file includes corresponding frequencies. (The difference to the previous dataset are the responses (coerced to different superordinates) and the superordinate frequencies). (26.234 entries)
- `full-classified-data-w-produced-super.csv`: the full processed data, including 113 responses failing correct reference given the context sentence (e.g. 'furniture' for item 90; these responses were excluded in the dataframe above). The superordinates were coerced in the same manner as in the dataframe above. The file includes corresponding frequencies. (It is a superset of `full-classified-data-w-produced-super-no-failedRef.csv`, 26.347 entries)
- `full-classified-data-w-handResps-as-super-no-failedRef.csv`: the full processed dataset (all invalid responses excluded) where all responses which were not classified automatically as subordinate are marked as superordinate (in the column `specific`). The responses are coerced to the NPs and the updated superordinates set. The respective frequencies are included (26.234 entries).
- `full-classified-data-w-handResps-as-super.csv`: the full processed dataset including 113 responses failing correct reference given the context sentence, where all responses which were not classified automatically as subordinate are marked as superordinate (column `specific`). The responses are coerced to the NPs and the updated superordinates set. The respective frequencies are included. (It is a superset of `full-classified-data-w-handResps-as-super-no-failedRef.csv`, 26.347 entries)

## Data subsets

- `auto-classified-data-w-freqs-final.csv`: a dataframe with only the automatically classified responses and their corresponding frequencies. Two of the superordinate categories are adjusted to the empirical modal superordinate responses (s. above). The responses are coerced to either these u[pdated superordinates or the NPs. (It is a subset of `full-classified-data-w-freqs.csv`, 22.161 entries)
- `hand-classified-supers-w-produced-super.csv`: a subset of the data with superordinate responses which were not classified automatically only. The column `produced_super` contains the best fitting modal superordinate: it is the response provided by the participant if at least two other participants provided the same response for this item; it is the anticipated superordinate otherwise. It includes no frequencies. (It is a subset of `full-classified-data-w-produced-super.csv`, 3.209 entries)
- `hand-classified-supers-w-produced-super-w-freqs.csv`: a subset of processed data containing only superordinate responses that were not classified automatically. The responses are coerced to the responses provided by at least three participants (s. above). The respective frequencies are included. (It is a subset of the `full-classified-data-w-produced-super.csv` dataframe., 3.209 entries)

## Supplementary files

- `hand-classified-produced-distinct-super-pl.csv`: all distinct superordinate responses (converted to plural) deviating from the anticipated superordinate categories of the experimental items, that were produced by at least three participants (collapsed across adjective condition and NP within item). This data frame was used to extract frequencies.
- `hand-classified-produced-super-pl-frequencies.csv`: frequencies of the _plural_ superordinate responses provided by at least three participants.
- `class-elicitation-final-plural_frequencies.csv`: frequencies of the _plural_ NPs and updated superordinates (some items were adjusted to avoid polysemy, like races --> rallies).
- `data-classified-failing-reference.csv`: subset of the processed data including all the responses which fail correct reference given the context sentence (e.g. 'furniture' for item 90) (113 entries).

## Raw data

- `class-elicitation-prereg-final-catch_trials.csv`: warm-up trial data from the Empire State Building paraphrase task and the memory check.
- `class-elicitation-prereg-final-subject_information.csv`: subject information.
- `class-elicitation-prereg-final-trials`: raw experimental data.
