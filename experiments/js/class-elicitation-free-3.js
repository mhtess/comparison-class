function make_slides(f) {
  var   slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions = slide({
    name : "instructions",
    start: function() {
      $(".err").hide();
    },
    button : function() {
      response = $("#text_response").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        exp.go();
      }
    },
  });

  slides.single_trial = slide({
    name: "single_trial",
    start: function() {
      $(".err").hide();
      $(".display_condition").html("You are in " + exp.condition + ".");
      //context_mod = exp.examples[i].context
      //re = new RegExp("PERSON", "g")
      //context_mod.replace(re, exp.names[i])
      //display_context.html(context_mod)

    },
    button : function() {
      response = $("#text_response").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        exp.data_trials.push({
          "trial_type" : "single_trial",
          "response" : response
        });
        exp.go(); //make sure this is at the *end*, after you log your data
      }
    },
  });

  slides.one_textbox = slide({
    name : "one_textbox",

    /* trial information for this block
     (the variable 'stim' will change between each of these values,
      and for each of these, present_handle will be run.) */
    present : exp.examples,

    //this gets run only at the beginning of the block
    present_handle : function(stim) {
      $(".err").hide();

      this.stim = stim; //I like to store this information in the slide so I can record it later.
      console.log(stim)

      // Building the appropriate context information
      this.context_mod = stim.context

      // Insert name info
      re_name = new RegExp("PERSON", "g")
      this.context_mod = this.context_mod.replace(re_name, stim.name)

      // Insert phrase info
      re_phrase = new RegExp("PHRASE", "g")

      if (stim.positivity == "positive") {
        this.phrase = stim.positive
        this.adj = stim.adj_positive
      } else if (stim.positivity == "negative") {
        this.phrase = stim.negative
        this.adj = stim.adj_negative
      } else {
        this.phrase = stim.neither_nor
        this.adj = _.shuffle([stim.adj_positive, stim.adj_negative])[0]
      }

      this.context_mod = this.context_mod.replace(re_phrase, this.phrase)

      re_pre = new RegExp("PRE", "g")
      if (re_pre.test(this.context_mod)) {
        if (stim.positivity == "positive") {
          this.context_mod = this.context_mod.replace(re_pre, stim.pre_positive)
        } else if (stim.positivity == "negative") {
          this.context_mod = this.context_mod.replace(re_pre, stim.pre_negative)
        } else {
          this.context_mod = this.context_mod.replace(re_pre, stim.pre_neutral)
        }
      }

      this.statement = stim.name + " says: " this.pronoun + " is " + this.adj + "."

      this.question = "What do you think " + stim.name + " meant?"

      console.log(this.context_mod)
      console.log(this.statement)

      $(".prompt").html(this.context_mod);
      $("#subj_statement").html(this.statement);
      $("#subj_question").html(this.question);
      $("#subj_question").html(this.question);
      $("#obj_current").html(this.phrase);
      $("#adj_current").html(this.adj);
      // TODO: need help w/ erasing the current text box value
      $("#relativity_response").val(''); //erase current text box value
    },

    button : function() {
      response = $("#relativity_response").val();
      console.log(response)
      if (response.length == 0) {
        $(".err").show();
      } else {
        exp.data_trials.push({
          "trial_type" : "one_textbox",
          "stim" : this.stim,
          "response" : response
        });
        _stream.apply(this);
      }
    },

  });

  slides.one_slider = slide({
    name : "one_slider",

    /* trial information for this block
     (the variable 'stim' will change between each of these values,
      and for each of these, present_handle will be run.) */
    present : exp.examples,

    //this gets run only at the beginning of the block
    present_handle : function(stim) {
      $(".err").hide();

      this.stim = stim; //I like to store this information in the slide so I can record it later.

      $(".prompt").html(stim.subject + "s like " + stim.object + "s.");
      this.init_sliders();
      exp.sliderPost = null; //erase current slider value
    },

    button : function() {
      if (exp.sliderPost == null) {
        $(".err").show();
      } else {
        this.log_responses();

        /* use _stream.apply(this); if and only if there is
        "present" data. (and only *after* responses are logged) */
        _stream.apply(this);
      }
    },

    init_sliders : function() {
      utils.make_slider("#single_slider", function(event, ui) {
        exp.sliderPost = ui.value;
      });
    },

    log_responses : function() {
      exp.data_trials.push({
        "trial_type" : "one_slider",
        "response" : exp.sliderPost
      });
    }
  });

  slides.memory_check = slide({
    name : "memory_check",
    start: function() {
    $(".err").hide()
    console.log(exp.memory_properties)

     this.catch_properties = [
       "lorches have long legs and breathe underwater",
       "taifles have gold spots that are sticky",
       "dorbs have infected, yellow scales ",
       "cranoor is the king of all beings",
       "no kweps eat plants"
     ]

     this.check_properties = _.shuffle(_.flatten([this.tested_properties, this.catch_properties]))

     // clear the former content of a given <div id="memory_checkboxes"></div>
     document.getElementById('memory_checkboxes').innerHTML = '';

     for (i=0;i<this.check_properties.length;i++){
       // create the necessary elements
       var label= document.createElement("label");
       var description = document.createTextNode(this.check_properties[i]);
       var checkbox = document.createElement("input");

       checkbox.type = "checkbox";    // make the element a checkbox
       checkbox.name = "slct1";      // give it a name we can check on the server side
       checkbox.value = this.check_properties[i];         // make its value "pair"

       label.appendChild(checkbox);   // add the box to the element
       label.appendChild(description);// add the description to the element

       // add the label element to your div
       document.getElementById('memory_checkboxes').appendChild(label);
       document.getElementById('memory_checkboxes').appendChild(document.createElement("br"));

     }
   },
    button : function() {

    var checked_options = new Array();
    var unchecked_options = new Array();

    $.each($("input[name='slct1']:checked"), function() {
      checked_options.push($(this).val());
    });

    $.each($("input[name='slct1']:not(:checked)"), function() {
      unchecked_options.push($(this).val());
    });

    for (i=0;i<this.check_properties.length;i++){
      var p = this.check_properties[i];
      var tested_on = this.tested_properties.indexOf(p) > -1 ? 1 : 0;
      var response = checked_options.indexOf(p) > -1 ? 1 : 0;
      exp.catch_trials.push({
        condition: "memory_check",
        check_index: i,
        property: p,
        tested_on: tested_on,
        response: response,
        correct: (tested_on == response) ? 1 : 0
      })


        exp.go(); //use exp.go() if and only if there is no "present" data.
      }

    }
  });


  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        asses : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
        comments : $("#comments").val(),
        problems: $("#problems").val(),
        fairprice: $("#fairprice").val()
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
          "trials" : exp.data_trials,
          "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          "condition" : exp.condition,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000
      };
      setTimeout(function() {turk.submit(exp.data);}, 1000);
    }
  });

  return slides;
}

/// init ///
function init() {

  // Prereq: should be a multiple of 3 (for even distribution of positive, negative, neither-nor questions)
  exp.n_trials = 3

  // Randomize ordering of positive, negative, and neither-nor trials
  exp.positivities = [];
  for (var k = 0; k < Math.floor(exp.n_trials/3); k++) {
    exp.positivities.push("positive")
    exp.positivities.push("negative")
    exp.positivities.push("neither-nor")
  }
  exp.positivities = _.shuffle(exp.positivities)

  // Also randomize provided example scenarios and names
  exp.examples = _.shuffle(getNounElicitationTrials(examples)).slice(0, exp.n_trials)
  exp.names = sampleNames(characters).slice(0, exp.n_trials)
  for (var k = 0; k < exp.n_trials; k++) {
    exp.examples[k].name = exp.names[k];
    exp.examples[k].positivity = exp.positivities[k];
  }
  console.log(exp.examples)

  exp.trials = exp.n_trials;
  exp.catch_trials = [];
  //exp.condition = sampleCondition(); //can randomize between subject conditions here
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };
  //blocks of the experiment:
  exp.structure=["i0", "instructions", "one_textbox", "subj_info", "thanks"]

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
