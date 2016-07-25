function make_slides(f) {
  var slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions = slide({
    name : "instructions",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.trial1 = slide({
    name : "trial1",
    start : function() {
      $(".err").hide();
      $(".display_context").html(exp.names[0] + exp.context[0]);
      $(".display_target").html(exp.names[0] + " says, " + "\"" + exp.target[0] + "\"");
      $(".display_question").html("What do you think " + exp.names[0] + " meant?");
    },
    button : function() {
      response = $("#text_response1").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        exp.data_trials.push({
          "trial_type" : exp.context[0] + " " + exp.target[0],
          "response" : response
        });
        exp.go(); //make sure this is at the *end*, after you log your data
      }
    },
  });

  slides.trial2 = slide({
    name : "trial2",
    start : function() {
      $(".err").hide();
      $(".display_context").html(exp.names[1] + exp.context[1]);
      $(".display_target").html(exp.names[1] + " says, " + "\"" + exp.target[1] + "\"");
      $(".display_question").html("What do you think " + exp.names[1] + " meant?");
    },
    button : function() {
      response = $("#text_response2").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        exp.data_trials.push({
          "trial_type" : exp.context[1] + " " + exp.target[1],
          "response" : response
        });
        exp.go(); //make sure this is at the *end*, after you log your data
      }
    },
  });

  slides.trial3 = slide({
    name : "trial3",
    start : function() {
      $(".err").hide();
      $(".display_context").html(exp.names[2] + exp.context[2]);
      $(".display_target").html(exp.names[2] + " says, " + "\"" + exp.target[2] + "\"");
      $(".display_question").html("What do you think " + exp.names[2] + " meant?");
    },
    button : function() {
      response = $("#text_response3").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        exp.data_trials.push({
          "trial_type" : exp.context[2] + " " + exp.target[2],
          "response" : response
        });
        exp.go(); //make sure this is at the *end*, after you log your data
      }
    },
  });

  slides.trial4 = slide({
    name : "trial4",
    start : function() {
      $(".err").hide();
      $(".display_context").html(exp.names[3] + exp.context[3]);
      $(".display_target").html(exp.names[3] + " says, " + "\"" + exp.target[3] + "\"");
      $(".display_question").html("What do you think " + exp.names[3] + " meant?");
    },
    button : function() {
      response = $("#text_response4").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        exp.data_trials.push({
          "trial_type" : exp.context[3] + " " + exp.target[3],
          "response" : response
        });
        exp.go(); //make sure this is at the *end*, after you log your data
      }
    },
  });

  slides.trial5 = slide({
    name : "trial5",
    start : function() {
      $(".err").hide();
      $(".display_context").html(exp.names[4] + exp.context[4]);
      $(".display_target").html(exp.names[4] + " says, " + "\"" + exp.target[4] + "\"");
      $(".display_question").html("What do you think " + exp.names[4] + " meant?");
    },
    button : function() {
      response = $("#text_response5").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        exp.data_trials.push({
          "trial_type" : exp.context[4] + " " + exp.target[4],
          "response" : response
        });
        exp.go(); //make sure this is at the *end*, after you log your data
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
      exp.go(); //use exp.go() if and only if there is no "present" data.
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
  exp.trials = 5;
  exp.catch_trials = [];
  
  var targets = Object.keys(examples);
  var contexts = examples;

  // generate a list of unique names
  exp.names = sampleNames(characters, exp.trials)

  // samples from the target sentences (without replacement) 
  exp.target = sampleSentence(targets, exp.trials);

  // uses the results stored in exp.target to randomly sample one context phrase from contexts
  exp.context = sampleContext(exp.target, contexts);

  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH : screen.height,
      screenUH : exp.height,
      screenW : screen.width,
      screenUW : exp.width
  };
  
  //blocks of the experiment:
  exp.structure = ["i0", "instructions", "trial1", "trial2", "trial3", "trial4", "trial5", "subj_info", "thanks"];
  exp.data_trials = [];

  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });

  exp.go(); //show first slide
}