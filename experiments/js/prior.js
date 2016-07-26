function make_slides(f) {
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

  slides["trial" + 1] = slide({
    name : "trial" + 1,
    start : function() {
      $(".err").hide();
      $(".display_context").html(exp.names[0] + exp.context[0]);

      // changes the format when a person is used in the target sentence
      if ((exp.target[0] === " is short") || (exp.target[0] === " is heavy")) {
        $(".display_target").html(exp.names[exp.trials] + " says, " + "\"" + exp.names[0] + exp.target[0] + "." + "\"");
        $(".display_question").html("What do you think " + exp.names[exp.trials] + " meant?");
        $(".display_prompt").html("\"" + exp.names[0] + exp.target[0] + "\"" + " relative to: ");
      } else {
        $(".display_target").html(exp.names[0] + " says, " + "\"" + exp.target[0] + "." + "\"");
        $(".display_question").html("What do you think " + exp.names[0] + " meant?");
        $(".display_prompt").html("\"" + exp.target[0] + "\"" + " relative to: ");
      }
    },
    button : function() {
      response = $("#text_response1").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        exp.data_trials.push({
          "context" : exp.context[0],
          "target" : exp.target[0],
          "response" : response
        });
        exp.go(); // make sure this is at the *end*, after you log your data
      }
    },
  });

  slides["trial" + 2] = slide({
    name : "trial" + 2,
    start : function() {
      $(".err").hide();
      $(".display_context").html(exp.names[1] + exp.context[1]);
      
      // changes the format when a person is used in the target sentence
      if ((exp.target[1] === " is short") || (exp.target[1] === " is heavy")) {
        $(".display_target").html(exp.names[exp.trials + 1] + " says, " + "\"" + exp.names[1] + exp.target[1] + "." + "\"");
        $(".display_question").html("What do you think " + exp.names[exp.trials + 1] + " meant?");
        $(".display_prompt").html("\"" + exp.names[1] + exp.target[1] + "\"" + " relative to: ");
      } else {
        $(".display_target").html(exp.names[1] + " says, " + "\"" + exp.target[1] + "." + "\"");
        $(".display_question").html("What do you think " + exp.names[1] + " meant?");
        $(".display_prompt").html("\"" + exp.target[1] + "\"" + " relative to: ");
      }
    },
    button : function() {
      response = $("#text_response2").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        exp.data_trials.push({
          "context" : exp.context[1],
          "target" : exp.target[1],
          "response" : response
        });
        exp.go(); // make sure this is at the *end*, after you log your data
      }
    },
  });

  slides["trial" + 3] = slide({
    name : "trial" + 3,
    start : function() {
      $(".err").hide();
      $(".display_context").html(exp.names[2] + exp.context[2]);

      // changes the format when a person is used in the target sentence
      if ((exp.target[2] === " is short") || (exp.target[2] === " is heavy")) {
        $(".display_target").html(exp.names[exp.trials + 2] + " says, " + "\"" + exp.names[2] + exp.target[2] + "." + "\"");
        $(".display_question").html("What do you think " + exp.names[exp.trials + 2] + " meant?");
        $(".display_prompt").html("\"" + exp.names[2] + exp.target[2] + "\"" + " relative to: ");
      } else {
        $(".display_target").html(exp.names[2] + " says, " + "\"" + exp.target[2] + "." + "\"");
        $(".display_question").html("What do you think " + exp.names[2] + " meant?");
        $(".display_prompt").html("\"" + exp.target[2] + "\"" + " relative to: ");
      }
    },
    button : function() {
      response = $("#text_response3").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        exp.data_trials.push({
          "context" : exp.context[2],
          "target" : exp.target[2],
          "response" : response
        });
        exp.go(); // make sure this is at the *end*, after you log your data
      }
    },
  });

  slides["trial" + 4] = slide({
    name : "trial" + 4,
    start : function() {
      $(".err").hide();
      $(".display_context").html(exp.names[3] + exp.context[3]);

      // changes the format when a person is used in the target sentence
      if ((exp.target[3] === " is short") || (exp.target[3] === " is heavy")) {
        $(".display_target").html(exp.names[exp.trials + 3] + " says, " + "\"" + exp.names[3] + exp.target[3] + "." + "\"");
        $(".display_question").html("What do you think " + exp.names[exp.trials + 3] + " meant?");
        $(".display_prompt").html("\"" + exp.names[3] + exp.target[3] + "\"" + " relative to: ");
      } else {
        $(".display_target").html(exp.names[3] + " says, " + "\"" + exp.target[3] + "." + "\"");
        $(".display_question").html("What do you think " + exp.names[3] + " meant?");
        $(".display_prompt").html("\"" + exp.target[3] + "\"" + " relative to: ");
      }
    },
    button : function() {
      response = $("#text_response4").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        exp.data_trials.push({
          "context" : exp.context[3],
          "target" : exp.target[3],
          "response" : response
        });
        exp.go(); // make sure this is at the *end*, after you log your data
      }
    },
  });

  slides["trial" + 5] = slide({
    name : "trial" + 5,
    start : function() {
      $(".err").hide();
      $(".display_context").html(exp.names[4] + exp.context[4]);

      // changes the format when a person is used in the target sentence
      if ((exp.target[4] === " is short") || (exp.target[4] === " is heavy")) {
        $(".display_target").html(exp.names[exp.trials + 4] + " says, " + "\"" + exp.names[4] + exp.target[4] + "." + "\"");
        $(".display_question").html("What do you think " + exp.names[exp.trials + 4] + " meant?");
        $(".display_prompt").html("\"" + exp.names[4] + exp.target[4] + "\"" + " relative to: ");
      } else {
        $(".display_target").html(exp.names[4] + " says, " + "\"" + exp.target[4] + "." + "\"");
        $(".display_question").html("What do you think " + exp.names[4] + " meant?");
        $(".display_prompt").html("\"" + exp.target[4] + "\"" + " relative to: ");
      }
    },
    button : function() {
      response = $("#text_response5").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        exp.data_trials.push({
          "context" : exp.context[4],
          "target" : exp.target[4],
          "response" : response
        });
        exp.go(); // make sure this is at the *end*, after you log your data
      }
    },
  });

  slides["trial" + 6] = slide({
    name : "trial" + 6,
    start : function() {
      $(".err").hide();
      $(".display_context").html(exp.names[5] + exp.context[5]);

      // changes the format when a person is used in the target sentence
      if ((exp.target[5] === " is short") || (exp.target[5] === " is heavy")) {
        $(".display_target").html(exp.names[exp.trials + 5] + " says, " + "\"" + exp.names[5] + exp.target[5] + "." + "\"");
        $(".display_question").html("What do you think " + exp.names[exp.trials + 5] + " meant?");
        $(".display_prompt").html("\"" + exp.names[5] + exp.target[5] + "\"" + " relative to: ");
      } else {
        $(".display_target").html(exp.names[5] + " says, " + "\"" + exp.target[5] + "." + "\"");
        $(".display_question").html("What do you think " + exp.names[5] + " meant?");
        $(".display_prompt").html("\"" + exp.target[5] + "\"" + " relative to: ");
      }
    },
    button : function() {
      response = $("#text_response6").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        exp.data_trials.push({
          "context" : exp.context[5],
          "target" : exp.target[5],
          "response" : response
        });
        exp.go(); // make sure this is at the *end*, after you log your data
      }
    },
  });

  slides["trial" + 7] = slide({
    name : "trial" + 7,
    start : function() {
      $(".err").hide();
      $(".display_context").html(exp.names[6] + exp.context[6]);

      // changes the format when a person is used in the target sentence
      if ((exp.target[6] === " is short") || (exp.target[6] === " is heavy")) {
        $(".display_target").html(exp.names[exp.trials + 6] + " says, " + "\"" + exp.names[6] + exp.target[6] + "." + "\"");
        $(".display_question").html("What do you think " + exp.names[exp.trials + 6] + " meant?");
        $(".display_prompt").html("\"" + exp.names[6] + exp.target[6] + "\"" + " relative to: ");
      } else {
        $(".display_target").html(exp.names[6] + " says, " + "\"" + exp.target[6] + "." + "\"");
        $(".display_question").html("What do you think " + exp.names[6] + " meant?");
        $(".display_prompt").html("\"" + exp.target[6] + "\"" + " relative to: ");
      }
    },
    button : function() {
      response = $("#text_response7").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        exp.data_trials.push({
          "context" : exp.context[6],
          "target" : exp.target[6],
          "response" : response
        });
        exp.go(); // make sure this is at the *end*, after you log your data
      }
    },
  });

  slides["trial" + 8] = slide({
    name : "trial" + 8,
    start : function() {
      $(".err").hide();
      $(".display_context").html(exp.names[7] + exp.context[7]);

      // changes the format when a person is used in the target sentence
      if ((exp.target[7] === " is short") || (exp.target[7] === " is heavy")) {
        $(".display_target").html(exp.names[exp.trials + 7] + " says, " + "\"" + exp.names[7] + exp.target[7] + "." + "\"");
        $(".display_question").html("What do you think " + exp.names[exp.trials + 7] + " meant?");
        $(".display_prompt").html("\"" + exp.names[7] + exp.target[7] + "\"" + " relative to: ");
      } else {
        $(".display_target").html(exp.names[7] + " says, " + "\"" + exp.target[7] + "." + "\"");
        $(".display_question").html("What do you think " + exp.names[7] + " meant?");
        $(".display_prompt").html("\"" + exp.target[7] + "\"" + " relative to: ");
      }
    },
    button : function() {
      response = $("#text_response8").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        exp.data_trials.push({
          "context" : exp.context[7],
          "target" : exp.target[7],
          "response" : response
        });
        exp.go(); // make sure this is at the *end*, after you log your data
      }
    },
  });

  slides["trial" + 9] = slide({
    name : "trial" + 9,
    start : function() {
      $(".err").hide();
      $(".display_context").html(exp.names[8] + exp.context[8]);

      // changes the format when a person is used in the target sentence
      if ((exp.target[8] === " is short") || (exp.target[8] === " is heavy")) {
        $(".display_target").html(exp.names[exp.trials + 8] + " says, " + "\"" + exp.names[8] + exp.target[8] + "." + "\"");
        $(".display_question").html("What do you think " + exp.names[exp.trials + 8] + " meant?");
        $(".display_prompt").html("\"" + exp.names[8] + exp.target[8] + "\"" + " relative to: ");
      } else {
        $(".display_target").html(exp.names[8] + " says, " + "\"" + exp.target[8] + "." + "\"");
        $(".display_question").html("What do you think " + exp.names[8] + " meant?");
        $(".display_prompt").html("\"" + exp.target[8] + "\"" + " relative to: ");
      }
    },
    button : function() {
      response = $("#text_response9").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        exp.data_trials.push({
          "context" : exp.context[8],
          "target" : exp.target[8],
          "response" : response
        });
        exp.go(); // make sure this is at the *end*, after you log your data
      }
    },
  });

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
  // we will have one trial for each unique adjective
  exp.trials = Object.keys(examples).length;

  // we don't have any catch trials
  // exp.catch_trials = [];
  
  // set up an array with our target sentences
  var targets = Object.keys(examples);

  // we will be using samples from targets to match keys from examples, then we will sample a context sentence
  var contexts = examples;

  // generate a list of unique names
  exp.names = sampleNames(characters, exp.trials)

  // samples from targets (without replacement) 
  exp.target = sampleSentence(targets, exp.trials);

  // uses the results stored in exp.target to randomly sample one context phrase from contexts
  exp.context = sampleContext(exp.target, contexts);

  // get user system specs
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH : screen.height,
      screenUH : exp.height,
      screenW : screen.width,
      screenUW : exp.width
  };
  
  //blocks of the experiment:
  exp.structure = ["i0", "instructions"];
  for (var i = 1; i <= exp.trials; i++) {
    exp.structure.push("trial" + i);
  }
  exp.structure.push("subj_info");
  exp.structure.push("thanks");

  // data from each trial
  exp.data_trials = [];

  // make corresponding slides
  exp.slides = make_slides(exp);

  // this does not work if there are stacks of stims (but does work for an experiment with this structure)
  // relies on structure and slides being defined
  exp.nQs = utils.get_exp_length(); 

  // hide everything
  $('.slide').hide();

  // make sure Turkers have accepted HIT (or you're not in MTurk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });

  // show first slide
  exp.go();
}