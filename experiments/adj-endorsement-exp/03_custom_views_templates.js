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

      <button id='next' class='magpie-view-button magpie-nodisplay'>next</button>
      </div>`)


      $("input[name=main]").on("change", function() {
        $("#next").removeClass("magpie-nodisplay");
        $("#next").on("click", function() {
    // const RT = Date.now() - startingTime;
          let trial_data = {
              trial_name: config.name,
              trial_number: CT + 1,
              response: $("input[name=main]:checked").val(),
              // RT: RT
          };
          trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        })
      });

    }
  }
  return view
}
