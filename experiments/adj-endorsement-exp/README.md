# Adjective endorsement Experiment

This directory holds the adjective endorsement experiment of the comparison class project. To run the experiment locally, clone the repository, navigate to the respective directory and run `npm install` on the command line (requires node.js). To post this experiment, host the `index.html` on the server of your choice. The experiment was created from the magpie template (https://github.com/magpie-ea/magpie-departure-point).

The experiment consists of an introduction view, instructions, 60 main trials and a memory check. By default, the experiment is in debug mode and displays a results table after completion.

## File structure
The following files need to be adjusted if the comparison class elicitation data is updated or the experiment structure needs to be updated.
- `03_custom_views_template.js`: This file includes the botcaptcha, the memory check functions, the function eliciting the main trials view, the post test view and the introduction view. The introduction text can be changed here (`custom_intro_view`). The location check for MTurk (e.g. US IP addresses only) can be changed here, too (line 401).
- `04_trials_processed.js`: This file lists all the stimuli used in the comparison class elicitation experiment. The context sentence is adjusted to address the participant ("You see a ..."). There are 12 degrees tested (items for each degree are saved as a list):  size, length, price, weight, loudness, darkness, height, temperature, speed, hardness, strength, width. Equal number of items from each degree is sampled - the number can be adjusted in line 12 `num_trials` (up to 5). The number is set to 5, resulting in 60 trials in total. The trials use the modal responses produced by the participants in the comparison class elicitation experiment: the superordinates of stim_id 5 and 77 were adjusted.
- `05_views.js`: In this file, all the trial views are called. Here, the trial names can be changed and trial numbers can be set manually. The botcaptcha speaker names can be accessed  (line 52 - 53). The `instructions` text should be adjusted here, e.g. if the total number of trials is changed.
-   `06_main.js`: Here, the experiment structure is defined. The trial order can be changed in `view_seq`. The deployment method is defined here (`deployMethod`): to view the results as a table after completion use 'debug', for Prolific use 'Prolific', for an access via a link use 'directLink', for MTurk Sandbox use 'MTurkSandbox', for MTurk production use 'MTurk'. Insert you email in `contact_email`. If the data is collected on the magpie server, the `experimentID` needs to be the ID of your experiment on the server, and the link needs to access your account. The `uniqueTurkerID` is saved in this file and needs to be changed if you wish to exclude participants who e.g. already participated in your other experiments. The trials for which a progress bar should be displayed are added to `progress_bar`.

For any questions about the experiment, please contact polina.tsvilodub@gmail.com