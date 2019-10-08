// custom forced choice view

// reads data for single trials from 04_trials.js
// saves response to global data

// first a context sentence is shown, below follows the quetion

const custom_forced_choice = function(config) {
  const view = {
    name: config.name,
    CT: 0,
    trials: config.trials ,
    render: function(CT, magpie, startingTime) {
      $("main").html(`<div class='magpie-view'>
      <section class ="magpie-text-container">
        <p class="magpie-view-question">${config.data[CT].context}<br><br></p>
      </section>
      <section class="magpie-text-container">
        <p class="magpie-view-question">${config.data[CT].question}</p>
      <section class="magpie-view-answer-container">
        <label><input type="radio" name="main" value="No"/>No</label>
        <label><input type="radio" name="main" value="Yes"/>Yes</label>
      </section>

      <button id='next' class='magpie-view-button'>next</button>

        <p id='catch' class="magpie-view-question" >Please select an option before continuing.</p>

      </div>`)


      $("#catch").hide();
      $("#next").on("click", function() {
        var response = $("input[name=main]:checked").val();
        if (response === undefined) {
          $("#catch").show()
        } else {
          let trial_data = {
            trial_name: config.name,
            trial_number: CT + 1,
            response: response
          }
          trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        }
      })

    

    }
  }
  return view
}
