// variable for couting trials on the botcaptcha
var bot_trials = 0;

function make_slides(f) {
  var slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.botcaptcha = slide({
     name : "botcaptcha",
     start: function() {
       $("#error").hide();
       $("#error_incorrect").hide();
       $("#error_2more").hide();
       $("#error_1more").hide();
       // list of speaker names to be sampled from
       speaker = _.sample(["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles"]);
       // list of listener names to be sampled from
       listener = _.sample(["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Margaret"]);
       // create the utterance
       this.bot_utterance = speaker + " says to " + listener + ": It's a beautiful day, isn't it?"
       // creat ethe question
       this.bot_question = "Who is " + speaker + " talking to?"
       // append the utterance and the question to the view
       var bot_sentence = document.createElement("p");
       var bot_question = document.createElement("p");
       var content = document.createTextNode(this.bot_utterance);
       var q_content = document.createTextNode(this.bot_question);
       bot_sentence.name = "bot_sentence";
       bot_question.name = "bot_question";
       bot_sentence.appendChild(content);
       bot_question.appendChild(q_content);
       document.getElementById('bot_context').appendChild(bot_sentence);
       document.getElementById('bot_context').appendChild(document.createElement("br"));
       document.getElementById('bot_context').appendChild(bot_question);
       document.getElementById('bot_context').appendChild(document.createElement("br"));

     },
     button: function() {
       // get the participants' input
       bot_response = $("#botresponse").val();
       // append data if response correct
       if (bot_response.toLowerCase() == listener.toLowerCase()) {
         exp.catch_trials.push({
           condition: "botcaptcha",
           response: bot_response,
           bot_sentence: this.bot_utterance,
           bot_question: this.bot_question
         });
         exp.go();
         // gives participant two more trials if the response was incorrect
       } else {
         bot_trials = bot_trials + 1;
         $("#error_incorrect").show();
         if (bot_trials == 1) {
             $("#error_2more").show();
         } else if (bot_trials == 2) {
             $("#error_2more").hide();
             $("#error_1more").show();
         } else {
           // in case participant fails, he cannot proceed
             $("#error_incorrect").hide();
             $("#error_1more").hide();
             $("#bot_button").hide();
             $('#botresponse').prop("disabled", true);
             $("#error").show();
         };
       }

     }
  });

  slides.instructions = slide({
    name : "instructions",
    start: function() {
      $(".display_trials").html(exp.n_trials)
      $(".catchErr").hide();
    },
    button: function() {
      catch_response = $("#catch_response").val();

      // displays an error if no response has been entered
      if (catch_response.length == 0) {
        $(".catchErr").show();
      }
      else {
        exp.catch_trials.push({
          condition: "warm_up",
          check_index: 0,
          property: "tall",
          tested_on: "Empire State Building",
          response: catch_response,
          correct: catch_response.indexOf("building") > -1 ? 1 : 0
        });
        exp.go();
      }
    }
  });

  slides.one_textbox = slide({
    name : "one_textbox",

    /* trial information for this block
     (the variable 'stim' will change between each of these values,
      and for each of these, present_handle will be run.) */
    present : exp.stimuli.reverse(),
    trial_num : 1,

    //this gets run only at the beginning of the block
    present_handle : function(stim) {
      // console.log(exp.stimuli)
      console.log(stim)
      $(".err").hide();
      this.startTime = Date.now();
      this.stim = stim; //I like to store this information in the slide so I can record it later.

      // Building the appropriate context information
      this.context_mod = stim.context
      this.degree = stim.degree
      this.stim_id = stim.stim_id
      this.superordinate = stim.superordinate
      // Insert name info
      re_name = new RegExp("PERSON", "g")
      this.context_mod = this.context_mod.replace(re_name, stim.name)

      // Insert phrase info
      re_phrase = new RegExp("PHRASE", "g")

      this.np_expectations = stim.np_expectations
      this.adj_polarity = stim.adj_polarity
      this.phrase = stim.np
      this.adj = stim.adj

      this.context_mod = this.context_mod.replace(re_phrase, this.phrase)

      re_pre = new RegExp("PRE", "g")
      if (re_pre.test(this.context_mod)) {
        this.context_mod = this.context_mod.replace(re_pre, stim.pre)
      }

      this.gender = getGender(stim.name)
      if (this.gender == "male") {
        this.speaker_pronoun = "his"
      } else {
        this.speaker_pronoun = "her"
      }

      // fill in pronoun info
      re_pronoun = new RegExp("PRO", "g")
      this.context_mod = this.context_mod.replace(re_pronoun, this.speaker_pronoun)

      if (stim.pronoun == "They") {
        this.np_pronoun = "They're"
      } else {
        this.np_pronoun = stim.pronoun + "\'s"
      }

      this.intro = stim.name + " says to " + this.speaker_pronoun + " friend: "
      this.quote = "\"" + this.np_pronoun + " " + this.adj
      if (!stim.environment_mod) {
        this.environment_mod = ""
      }
      else {
        this.environment_mod = " " + stim.environment_mod
      }

      this.statement = this.intro + this.quote + this.environment_mod + ".\""

      this.question = "What do you think " + stim.name + " meant?"

      $(".prompt").html(this.context_mod);
      $("#subj_statement").html(this.statement);
      $("#subj_question").html(this.question);
      $("#relativity_quote").html(this.quote);
      $("#relativity_response").val(''); //erase current text box value
    },

    button : function() {
      response = $("#relativity_response").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        this.rt = Date.now() - this.startTime;
        exp.data_trials.push(_.extend({
          "trial_type" : "free_class_elicitation",
          "trial_num": this.trial_num,
          "stim_id": this.stim_id,
          "degree" : this.degree,
          "context_sentence" : this.context_mod,
          "superordinate": this.superordinate,
          "np" : this.phrase,
          "np_expectations" : this.np_expectations,
          "adj" : this.adj,
          "adj_polarity" : this.adj_polarity,
          "rt": this.rt,
          "response" : response
        }));
        this.trial_num++;
        _stream.apply(this);
      }
    },

  });

  slides.memory_check = slide({
    name : "memory_check",
    start: function() {
    $(".err").hide()

    num_props = 5

    exp.memory_properties = _.shuffle(exp.memorycheck_examples).slice(0, num_props)

     this.catch_properties = [
       "beautiful watch",
       "green shirt",
       "shiny necklace",
       "purple guitar",
       "wild animal"
     ]

     this.check_properties = _.shuffle(_.flatten([exp.memory_properties, this.catch_properties]))

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
      var tested_on = exp.memory_properties.indexOf(p) > -1 ? 1 : 0;
      var response = checked_options.indexOf(p) > -1 ? 1 : 0;
      exp.catch_trials.push({
        condition: "memory_check",
        check_index: i,
        property: p,
        tested_on: tested_on,
        response: response,
        correct: (tested_on == response) ? 1 : 0
      })
    }

    exp.go(); //use exp.go() if and only if there is no "present" data.

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

  repeatWorker = false;
  (function(){
      var ut_id = "mht-cc-20191211-fp";
      if (UTWorkerLimitReached(ut_id)) {
        $('.slide').empty();
        repeatWorker = true;
        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
  })();
  // Prereq: should be a multiple of 6 (for even distribution of positive, negative, neither-nor questions)
  exp.n_trials = 36
  exp.stimuli = getNounElicitationTrials(examples, exp.n_trials)
  exp.names = sampleNames(characters).slice(0, exp.n_trials)
  exp.memorycheck_examples = []
  // console.log(exp.stimuli)

  // add speaker names and set aside memory check items
  for (var k = 0; k < exp.n_trials; k++) {
    exp.stimuli[k].name = exp.names[k];
    adj = exp.stimuli[k].adj
    np = exp.stimuli[k].np
    exp.memorycheck_examples.push(adj + " " + np)
  }
  // console.log(exp.stimuli.slice(10, exp.stimuli.length))

  // exp.trials = exp.n_trials;
  exp.catch_trials = [];

  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };
  //blocks of the experiment:
  exp.structure=[
    "i0",
    "botcaptcha",
    "instructions",
    "one_textbox",
    "memory_check",
    "subj_info",
    "thanks"
  ]

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
