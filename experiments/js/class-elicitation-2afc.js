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

  slides.instructions = slide({
    name: "instructions",
    button: function() {
      exp.go(); // use exp.go() if and only if there is no "present" data
    }
  });

  // runs when a slide is first loaded
  function start() {
    $(".err").hide();
    $('input[name="paraphrase"]').attr('checked', false);

    // display the context sentence
    if((exp.examples[i].context.search("their") != -1) || (exp.examples[i].context.search("they") != -1)) {
      $(".display_context").html(exp.names[i] + getPronoun(exp.examples[i].context, exp.names[i]));
    }
    else {
      $(".display_context").html(exp.names[i] + exp.examples[i].context);
    }

    // construct the target sentence
    var targetSentence, adjectivePhrase;
    if (exp.examples[i].target[0] === " ") {
      adjectivePhrase = getPronoun2(exp.examples[i].context, exp.examples[i].target) + " is " + exp.examples[i].target;
    }
    else if (exp.examples[i].context.search("Maryland") != -1) {
      adjectivePhrase = "It's " + exp.examples[i].target + " outside";
    }
    else {
      adjectivePhrase = "This is " + exp.examples[i].target;
    }

    // display the target sentence
    targetSentence = exp.names[i] + " says, " + "\"" + adjectivePhrase;
    $(".display_target").html(targetSentence + "." + "\"");

    // display the question
    $(".display_question").html("What do you think " + exp.names[i] + " meant?");

    // display the paraphrase statement
    if (exp.examples[i].target[0] === " ") {
      $(".display_prompt").html("\"" + getPronoun2(exp.examples[i].context, exp.examples[i].target) + exp.examples[i].target + exp.condition);
    }
    else {
      $(".display_prompt").html("\"" + exp.examples[i].target + exp.condition);
    }

    // display the text next to the radio buttons
    $('label[for=0]').html('"' + adjectivePhrase + " relative to other " + exp.examples[i][exp.sliderOrder[0]] + '."');
    $('label[for=1]').html('"' + adjectivePhrase + " relative to other " + exp.examples[i][exp.sliderOrder[1]] + '."');

  }

  // runs when the "Continue" button is hit on a slide
  function button() {
    response = $('input[name="paraphrase"]:checked').val();

    // stores the adjective used in this experiment; same as the target
    adjective = exp.examples[i].target.split(" ").pop();

    if (!response) { $(".err").show(); }
    else {
      exp.data_trials.push({
        "condition": exp.condition,
        "context": exp.examples[i].context,
        "target": exp.examples[i].target,
        "degree": exp.examples[i].degree,
        "form": exp.examples[i].form,
        "adjective": adjective,
        "strength": exp.examples[i].strength,
        "names": exp.names[i], 
        "sub_category": exp.examples[i].sub_singular,
        "super_category": exp.examples[i].super,
        "paraphrase": exp.sliderOrder[response],
        "paraphrase0": exp.sliderOrder[0],
        "paraphrase1": exp.sliderOrder[1]
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
        comments: $("#comments").val()
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
      var ut_id = "mht-comparisonClass-20170110";
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

  exp.sliderOrder = _.shuffle(["sub_plural", "super"]);
  exp.nSentences = exp.sliderOrder.length + 1;

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
  embedCE2AFCSlides(exp.trials);

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
