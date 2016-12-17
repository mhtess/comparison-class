// global variable for storing the index at each slide
var i = 0;

function makeSlides(f) {
  var slides = {};

  slides.i0 = slide({
    name : "i0",
    start : function() {
      exp.startT = Date.now();
    }
  });

  slides.instructions = slide({
    name : "instructions",
    button : function() {
      exp.go(); // use exp.go() if and only if there is no "present" data
    }
  });

  // runs when a slide is first loaded
  function start() {
    $(".err").hide();
    // init_sliders();
    // $(".slider_number").html("---")
    // exp.sliderPost = null; // erase current slider value

    // display the context sentence
    $(".display_context").html(exp.names[i] + exp.examples[i].context);

    // changes the format when a pronoun is used in the target sentence
    if (exp.examples[i].target[0] === " ") {
      // if we need an extra name, pop if off exp.extra
      exp.names[i] = [exp.names[i], exp.extra.pop()];

      // evaluates each target specifically
      if (exp.examples[i].target == " is tall") {
        $(".display_target").html(exp.names[i][1] + " says, " + "\"" + "That" + exp.examples[i].target + "." + "\"");
      }
      else if (exp.examples[i].target == " is short") {
        $(".display_target").html(exp.names[i][1] + " says, " + "\"" + "That" + exp.examples[i].target + "." + "\"");
      }
      else if (exp.examples[i].target == " is heavy") {
        $(".display_target").html(exp.names[i][1] + " says, " + "\"" + "This" + exp.examples[i].target + "." + "\"");
      }
      else if (exp.examples[i].target == " is light") {
        $(".display_target").html(exp.names[i][1] + " says, " + "\"" + "This" + exp.examples[i].target + "." + "\"");
      }
    }
    else {
      $(".display_target").html(exp.names[i] + " says, " + "\"" + exp.examples[i].target + "." + "\"");
    }

    // display the question
    $(".display_question").html(exp.examples[i].prompt);
  }

  function init_sliders() {
    utils.make_slider("#single_slider", function(event, ui) {
      exp.sliderPost = ui.value;
      $(".slider_number").html(Math.round(exp.sliderPost*100))
    });
  }

  // runs when the "Continue" button is hit on a slide
  function button() {
    response1 = $("#measure1" + (i+1)).val();
    unit = $("#unit" + (i+1)).val();
    response2 = $("#measure2" + (i+1)).val();
    subunit = $("#subunit" + (i+1)).val();
    // if there are no subunits for this example, don't expect a response from the Turker
    if (exp.examples[i].subunit[0] == "none") {
      response2 = -1;
      subunit = "";
    }
    if ((response1.length == 0) || (unit == undefined) || (response2.length == 0) || (subunit == undefined)) {
      $(".err").show();
    }
    else {
      exp.data_trials.push({
        "condition" : exp.condition,
        "context" : exp.examples[i].context,
        "target" : exp.examples[i].target,
        "names" : exp.names[i] + "",
        "response1" : response1,
        "unit" : unit,
        "response2" : response2,
        "subunit" : subunit
      });
      i++;
      exp.go();
    }
  }

  // stitches together all of the trial slides
  for (var j = 1; j <= exp.trials; j++) {
    slides["trial" + j] = slide({
      name : "trial" + j,
      start : start,
      button : button
    });
  }

  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e) {
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        asses : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
        comments : $("#comments").val(),
      };
      exp.go(); // use exp.go() if and only if there is no "present" data
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data = {
          "trials" : exp.data_trials,
          "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          "condition" : exp.condition,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT) / 60000
      };
      setTimeout(function() {turk.submit(exp.data);}, 1000);
    }
  });
  return slides;
}

/// init ///
function init() {

  // generate all possible target-context pair combinations
  exp.examples = getTrials(examples);

  // one trial for each unique target-context pair
  exp.trials = exp.examples.length;
  $(".display_trials").html(exp.trials);

  // sample a phrase for this particular instance
  exp.condition = sampleCondition();

  // if we have more trials than we do unique names, some names will be reused
  if (exp.trials > characters.length) {
    // this needs to be fixed later to account for the possibility of two names on the same trial slide
    exp.names = sampleNames(characters).concat(sampleNames(characters));
    exp.extra = sampleNames(characters);
  } else {
    // generate a list of unique names
    exp.names = sampleNames(characters);

    // names for the trials that require an extra name
    exp.extra = exp.names.slice(exp.trials, exp.names.length);
  }


  // we don't have any catch trials for this experiment
  exp.catch_trials = [];

  // get user system specs
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH : screen.height,
      screenUH : exp.height,
      screenW : screen.width,
      screenUW : exp.width
  };

  // the blocks of the experiment
  exp.structure = ["i0", "instructions"];
  for (var k = 1; k <= exp.trials; k++) {
    exp.structure.push("trial" + k);
  }
  exp.structure.push("subj_info");
  exp.structure.push("thanks");

  // holds the data from each trial
  exp.data_trials = [];

  // make corresponding slides
  exp.slides = makeSlides(exp);

  // embed the slides
  embedListenerSlides(exp.examples, exp.trials); 

  // this does not work if there are stacks of stims (but does work for an experiment with this structure)
  // relies on structure and slides being defined
  exp.nQs = utils.get_exp_length();

  // hide everything
  $(".slide").hide();

  // make sure Turkers have accepted HIT (or you're not in MTurk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() { $("#mustaccept").show(); });
      exp.go();
    }
  });

  // show first slide
  exp.go();
}
