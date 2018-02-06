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

  // the catch trial will take the first two indices of the sliders and of exp.sliderPost
  slides.instructions = slide({
    name: "instructions",
    start: function() {
      $(".catchErr").hide();
    },
    button: function() {
      catch_response = $("#catch_response").val();

      // displays an error if no response has been entered
      if (catch_response.length == 0) {
        $(".catchErr").show();
      }
      else {
        exp.catch_trials.push({catch_response: catch_response});
        exp.go();
      }
    }
  });

  // runs when a slide is first loaded
  function start() {
    $(".err").hide();
    $(".inputErr").hide();

    // display the context sentence
    exp.pronoun = 0;
    if((exp.examples[i].context.search("their") != -1) || (exp.examples[i].context.search("they") != -1) ||
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

    // construct the target sentence
    var targetSentence, adjectivePhrase;
    if (exp.examples[i].target[0] === " ") {
      adjectivePhrase = getPronoun2(exp.examples[i][exp.condition], exp.examples[i].target) + " is " + exp.examples[i].target;
    }
    else {
      adjectivePhrase = "It's " + exp.examples[i].target;
    }

    // display the target sentence
    targetSentence = exp.names[i] + " says to " + getPronoun3(exp.names[i]) + " friend, " + "\"" + adjectivePhrase;
    $(".display_target").html(targetSentence + "." + "\"");

    // display the question
    $(".display_question").html("What do you think " + exp.names[i] + " meant?");

    // set up the text next to each input box
    // $(".display_paraphrase").html("\"" + adjectivePhrase + " relative to other " + exp.examples[i][exp.sliderOrder[j-exp.nCatch]] + ".\"");
    $(".display_paraphrase").html("\"" + adjectivePhrase + " relative to other ");
  }

  // runs when the "Continue" button is hit on a slide
  function button() {

    // stores the adjective used in this experiment; same as the target
    adjective = exp.examples[i].target.split(" ").pop();

    // stores the text response
    response = $("#text_response" + (i+1)).val();

    // displays an error if no response has been entered
    if (response.length == 0) {
      $(".inputErr").hide();
      $(".err").show();
    }

    // displays an error if a number is used in the response
    else if (/\d/.test(response)) {
      $(".err").hide();
      $(".inputErr").show();
    }

    // otherwise, stores the data relevant to the current trial
    else {
      exp.data_trials.push({
        "condition": exp.condition,
        "trial_num": i + 1,
        "context": exp.examples[i].context,
        "contextWithSuper": exp.pronoun ? exp.pronoun : exp.examples[i].contextWithSuper,
        "contextWithSuperPronoun": exp.pronoun ? (exp.pronoun.search("He") != -1 ? "He" : "She") : "",
        "target": exp.examples[i].target,
        "degree": exp.examples[i].degree,
        "form": exp.examples[i].form,
        "adjective": adjective,
        "strength": exp.examples[i].strength,
        "names": exp.names[i],
        "gender": getGender(exp.names[i]),
        "sub_category": exp.examples[i].sub_singular,
        "super_category": exp.examples[i].super,
        "response": response
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
    name : "subj_info",
    submit : function(e) {
      exp.subj_data = {
        language: $("#language").val(),
        enjoyment: $("#enjoyment").val(),
        asses: $('input[name="assess"]:checked').val(),
        age: $("#age").val(),
        gender: $("#gender").val(),
        education: $("#education").val(),
        problems: $("#problems").val(),
        fairprice: $("#fairprice").val(),
        comments: $("#comments").val()
      };
      exp.go();
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
          "paraphrase0": exp.sliderOrder[0],
          "paraphrase1": exp.sliderOrder[1],
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
      var ut_id = "mlb-adjectives-20170531-ccep";
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

  // sample a phrase for this particular instance
  exp.condition = sampleCondition();

  // set the number of sliders to use and their order
  exp.sliderOrder = _.shuffle(["sub_plural", "super"]);
  exp.nSentences = exp.sliderOrder.length;

  // if we have more trials than we do unique names, some names will be reused
  if (exp.trials > characters.length) {
    // this needs to be fixed later to account for the possibility of two names on the same trial slide
    exp.names = sampleNames(characters).concat(sampleNames(characters));
    exp.extra = sampleNames(characters);
  }
  else {
    // generate a list of unique names
    exp.names = sampleNames(characters);

    // names for the trials that require an extra name
    exp.extra = exp.names.slice(exp.trials, exp.names.length);
  }

  // stores the catch trial results for this experiment
  exp.nCatch = 2;
  exp.catch_trials = [];

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

  // make corresponding slides
  exp.slides = makeSlides(exp);

  // embed the slides
  embedCEPSlides(exp.trials);

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