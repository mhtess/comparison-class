// global variable for storing the index at each slide
var i = 0;

function makeSlides(f) {
  var slides = {};

  slides.i0 = slide({
    name: "i0",
    start: function() {
      exp.startT = Date.now();
    }
  });

  // the various hard-coded 0s correspond to the slider on the instructions slide
  slides.instructions = slide({
    name: "instructions",

    // set up the slider
    start: function() {
      $(".errCatch").hide();
      $("#multi_slider_table0").append("<tr class=\"slider_row\"><td class=\"slider_target\" id=\"sentence" + 0 + "\">" +
        "</td><td colspan=\"2\"><div id=\"slider" + 0 + "\" class=\"slider\">-------[ ]--------</div></td></tr>");
      utils.make_slider("#slider" + 0, make_slider_callback(0));
      exp.sliderPost = [];
    },

    // await slider input from the user and displays an error if the user attempts to continue without responding
    button: function() {
      if (exp.sliderPost[exp.nSentences-1] === undefined) { $(".errCatch").show(); }
      else {
        exp.catch_trials.push({
          object: "basketball",
          property: "is orange",
          response: exp.sliderPost[0]
        });
        exp.go();
      }
    }
  });

  // runs when a slide is first loaded
  function start() {
    $(".err").hide();

    // display the context sentence
    exp.pronoun = 0;
    if((exp.examples[i][exp.condition].search("their") != -1) || (exp.examples[i][exp.condition].search("they") != -1) ||
      exp.examples[i][exp.condition].search("them") != -1 || exp.examples[i][exp.condition].search("They") != -1) {

      // if "They" is used, we randomly select a pronoun for the other person and record it
      if (exp.examples[i][exp.condition].search("They") != -1) {
        exp.pronoun = getPronoun(exp.examples[i][exp.condition], exp.names[i]);
        $(".display_context").html(exp.names[i] + exp.pronoun);
      }
      else {
        $(".display_context").html(exp.names[i] + getPronoun(exp.examples[i][exp.condition], exp.names[i]));
      }
    }
    else {
      $(".display_context").html(exp.names[i] + exp.examples[i][exp.condition]);
    }

    // display the target
    $(".display_target").html("How likely is the " + exp.examples[i].sub_singular + " to be <strong>" + exp.examples[i].target +
      " relative to other " + exp.examples[i].super + "</strong>?");

    // removes the slider from the previous slide before making the slider for the current slide
    $(".slider_row").remove();

    // display the slider for each slide
    $("#multi_slider_table" + (i+1)).append('<tr class="slider_row"><td class="slider_target" id="sentence' + 1 + '">' + '</td><td colspan="2"><div id="slider' + 1 + '" class="slider">-------[ ]--------</div></td></tr>');
    utils.match_row_height("#multi_slider_table" + (i+1), ".slider_target");

    init_sliders(exp.nSentences);
    exp.sliderPost = [];
  }

  // the two functions below help set up and read info from the sliders
  function init_sliders(nSentences) {
    for (var j = 1; j <= nSentences; j++) {
      utils.make_slider("#slider" + j,
        make_slider_callback(j));
    }
  }

  function make_slider_callback(j) {
    return function(event, ui) {
      exp.sliderPost[j] = ui.value;
    };
  }

  // runs when the "Continue" button is hit on a slide
  function button() {

    // stores the slider response from the participant
    response = exp.sliderPost[exp.nSentences];
    if (exp.sliderPost[exp.nSentences] === undefined) { $(".err").show(); }
    else {
      exp.data_trials.push({
        "condition": exp.condition,
        "trial_num": i + 1,
        "target": exp.examples[i].target,
        "context": exp.examples[i].context,
        "contextWithSuper": exp.pronoun ? exp.pronoun : exp.examples[i].contextWithSuper,
        "contextWithSuperPronoun": exp.pronoun ? (exp.pronoun.search("He") != -1 ? "He" : "She") : "",
        "action": exp.examples[i].action,
        "degree": exp.examples[i].degree,
        "form": exp.examples[i].form,
        "strength": exp.examples[i].strength,
        "sub_category": exp.examples[i].sub_singular,
        "super_category": exp.examples[i].super,
        "response": response,
      });
      i++;
      exp.go();
    }
  }

  // stitches together all of the trial slides
  for (var j = 1; j <= exp.trials; j++) {
    slides["trial" + j] = slide({
      name: "trial" + j,
      start: start,
      button: button
    });
  }

  slides.subj_info =  slide({
    name: "subj_info",
    submit: function(e) {
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language: $("#language").val(),
        enjoyment: $("#enjoyment").val(),
        asses: $('input[name="assess"]:checked').val(),
        age: $("#age").val(),
        gender: $("#gender").val(),
        education: $("#education").val(),
        problems: $("#problems").val(),
        fairprice: $("#fairprice").val(),
        comments : $("#comments").val()
      };
      exp.go(); // use exp.go() if and only if there is no "present" data
    }
  });

  slides.thanks = slide({
    name: "thanks",
    start: function() {
      exp.data = {
          "trials": exp.data_trials,
          "catch_trials": exp.catch_trials,
          "system": exp.system,
          "condition": exp.condition,
          "subject_information": exp.subj_data,
          "time_in_minutes": (Date.now() - exp.startT) / 60000
      };
      setTimeout(function() {turk.submit(exp.data);}, 1000);
    }
  });
  return slides;
}

/// init ///
function init() {

  repeatWorker = false;
  (function(){
      var ut_id = "mht-adjectives-20170115-vpe";
      if (UTWorkerLimitReached(ut_id)) {
        $('.slide').empty();
        repeatWorker = true;
        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
  })();

  // generate all possible target-context pair combinations
  exp.examples = getUniqueTrials(examples);

  // one trial for each unique target-context pair
  exp.trials = exp.examples.length;
  $(".display_trials").html(exp.trials);

  // sample a condition for this participant
  // exp.condition = sampleCondition();
  exp.condition = "context";
  
  // set the number of sliders to use
  exp.nSentences = 1;

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

  // get user system specs
  exp.system = {
      Browser: BrowserDetect.browser,
      OS: BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
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
  exp.catch_trials = [];

  // make corresponding slides
  exp.slides = makeSlides(exp);

  // embed the slides
  embedVPESlides(exp.trials);

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
