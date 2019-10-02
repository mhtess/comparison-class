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
    start: function() {
      $(".catchErr").hide();
    },
    button: function() {
      catch_response = "pass"//$("#catch_response").val();

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

    // $(".display_context").html("We are interested in simple objects or situations people describe as <em>" + exp.examples[i].positive + "</em> or <em>" +exp.examples[i].negative + "</em>. Write examples below and hit the Return Key (3 in total). Try to pick examples that are all the same kind of thing (for example: )");
    this.startTime = Date.now();

    // this.counter = 1;

    // this.counterDictionary = ["positive", "negative", "neither_nor"]

    // this.boxLabel = (this.counter == 3) ?
    // "neither " + exp.examples[i].negative + " nor " + exp.examples[i].positive:  exp.examples[i][this.counterDictionary[this.counter-1]]

    this.adjOrder = _.shuffle(["positive", "negative"])

    $("#entityTable"+  '_' + (i + 1)).empty();
    var newTextBoxDiv = $(document.createElement('div'))
         .attr("id", 'TextBoxDiv_' + (i + 1));

         newTextBoxDiv.attr("class", "textBox_queries")
    // newTextBoxDiv.after().html('<label><strong>'+this.boxLabel+ '</strong>: </label>' + '<input type="text" name="textbox' + this.counter + '" id="textbox' + this.counter +  '_' + (i + 1) + '" value="" size="50">');
    var newText = '<br><br><input type="text" name="textbox1" id="textbox1_' + (i + 1) + '" value="" size="30">' + '<label> are generally <strong>'+exp.examples[i][this.adjOrder[0]] + '</strong></label>.<br> ' + '<input type="text" name="textbox2" id="textbox2_' + (i + 1) + '" value="" size="30">' + '<label> are generally <strong>'+ exp.examples[i][this.adjOrder[1]] +
    '</strong></label>.<br><br>' + '<input type="text" name="textbox3" id="textbox3_' + (i + 1) +
    '" value="" size="30">' + '<label> are sometimes <strong>'+
    exp.examples[i][this.adjOrder[0]] +
    '</strong> and sometimes <strong>'+
    exp.examples[i][this.adjOrder[1]] + '</strong></label>.<br><br>These three are all kinds of <input type="text" name="textbox4" id="textbox4_' + (i + 1) + '" value="" size="30">'
    newTextBoxDiv.after().html(newText);
    // console.log(newTextBoxDiv)
    newTextBoxDiv.appendTo("#entityTable" + (i + 1));
    // $("#textbox"+ this.counter+  '_' + (i + 1)).focus()

    // this.counter++;
    // $(document).one("keydown", _s.keyPressHandler);

  }


    function keyPressHandler(event) {
      // console.log('enter key press handler')
      var keyCode = event.which;

      if (keyCode != 13) {
        // If a key that we don't care about is pressed, re-attach the handler (see the end of this script for more info)
        $(document).one("keydown", _s.keyPressHandler);
      } else {
        // If a valid key is pressed (code 80 is p, 81 is q),
          // _s.rt = Date.now() - _s.startTime;
          // _s.log_responses(keyCode);
          var responses = [
            $('#textbox1_' + (i + 1)).val(),
            $('#textbox2_' + (i + 1)).val(),
            $('#textbox3_' + (i + 1)).val(),
            $('#textbox4_' + (i + 1)).val()
          ]

          if (responses.indexOf("") > -1) {
            $(".err").show();
            // $(document).one("keydown", _s.keyPressHandler);
          } else {
            $(".err").hide();
            _s.rt = Date.now() - _s.startTime;
            // var adj = (_s.counter-1 == 3) ?
            // "neither " + exp.examples[i].negative + " nor " + exp.examples[i].positive:  exp.examples[i][_s.counterDictionary[_s.counter-1]]

            exp.data_trials.push({
              "condition": exp.condition,
              "trial_num": i + 1,
              "degree": exp.examples[i].degree,
              "adjective": _s.boxLabel,
              "response": $('#textbox' + (_s.counter - 1)+  '_' + (i + 1)).val(),
              "rt":_s.rt
            });

            this.startTime = Date.now();

            if (_s.counter > exp.n_entities) {
              // _s.trial_num++;
              i ++;

              setTimeout(function(){
                // exp.names.length = 0;
                // _stream.apply(_s);
                exp.go()
              }, 250);
            } else {
              // console.log('new box')
              // console.log(_s.counter +  '_' + (i + 1))
              var newTextBoxDiv = $(document.createElement('div'))
                   .attr("id", 'TextBoxDiv' + _s.counter +  '_' + (i + 1));

              _s.boxLabel = (_s.counter == 3) ?
                   "neither " + exp.examples[i].negative + " nor " + exp.examples[i].positive :  exp.examples[i][_s.counterDictionary[_s.counter-1]]

              newTextBoxDiv.after().html('<label><strong>'+ _s.boxLabel + '</strong>: </label>' +
                    '<input type="text" name="textbox' + _s.counter +
                    '" id="textbox' + _s.counter +  '_' + (i + 1) + '" value="" size="50">');
              newTextBoxDiv.appendTo("#entityTable" + (i + 1));
              $("#textbox"+ _s.counter+  '_' + (i + 1)).focus()
              _s.counter++;
              $(document).one("keydown", _s.keyPressHandler);
              // $(document).next('text').focus();
            }
          }
      }
    }

  // runs when the "Continue" button is hit on a slide
  function button() {
    // response = $('input[name="paraphrase"]:checked').val();
    var responses = [
      $('#textbox1_' + (i + 1)).val(),
      $('#textbox2_' + (i + 1)).val(),
      $('#textbox3_' + (i + 1)).val(),
      $('#textbox4_' + (i + 1)).val()
    ]

    // stores the adjective used in this experiment; same as the target
    // displays an error if all responses have not been entered
    if (responses.indexOf("") > -1) {
      $(".inputErr").hide();
      $(".err").show();
    }

    // displays an error if a number is used in the response
    // else if (/\d/.test(response)) {
    //   $(".err").hide();
    //   $(".inputErr").show();
    // }

    // if (!response) { $(".err").show(); }
    else {
      _s.rt = Date.now() - _s.startTime;

      for (j = 0; j<4; j++){
        exp.data_trials.push({
          "condition": "adjective_elicitation",
          "trial_num": i + 1,
          "degree": exp.examples[i].degree,
          "adjective_form": j == 2 ? "neither_nor" : j == 3 ? "superordinate" : this.adjOrder[j],
          "adjective": j == 2 ? "neither " +exp.examples[i][this.adjOrder[0]] + " nor " + exp.examples[i][this.adjOrder[1]]: j == 3 ? exp.examples[i]["positive"] : exp.examples[i][this.adjOrder[j]],
          "response": $('#textbox' + (j + 1)+  '_' + (i + 1)).val(),
          "rt":_s.rt
        });
      }
      i++;
      exp.go();
    }
  }

  // stitches together all of the trial slides
  for (var j = 1; j <= exp.trials; j++) {
    slides["trial" + j] = slide({
      name: "trial" + j,
      start: start,
      button: button,
      keyPressHandler: keyPressHandler
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
      var ut_id = "mht-20191002-np-elicitation";
      if (UTWorkerLimitReached(ut_id)) {
        $('.slide').empty();
        repeatWorker = true;
        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
  })();
  // generate all possible target-context pair combinations
  // exp.allExamples = getUniqueTrials(examples);

  exp.examples = _.shuffle(seed_adjectives);

  //  _.uniq(_.map(exp.allExamples, function(d){
  //   return {degree: d.degree, negative: d.negative.replace(/\s+/g, ''), positive: d.positive.replace(/\s+/g, '')}
  // }), function(item, key, a) {
  //   return item.positive + item.negative;
  // })

  exp.n_entities = 1;
  // one trial for each unique target-context pair
  exp.trials = exp.examples.length;
  $(".display_trials").html(exp.trials);

  // sample a phrase for this particular instance
  exp.condition = sampleCondition();

  // set the number of sliders to use and their order
  exp.sliderOrder = [];
  for (ki=0; ki<exp.trials; ki++){
    exp.sliderOrder.push(_.shuffle(["sub_plural", "super"]))
  }
  // exp.sliderOrder = _.shuffle(["sub_plural", "super"]);
  exp.nSentences = exp.sliderOrder[0].length;

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
  exp.nCatch = 2;

  // stores the catch trial results for this experiment
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
  exp.structure = ["i0","instructions"];
  // exp.structure = [];
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
  // embedCE2AFCSlides(exp.trials);
  embedElicitationSlides(exp.trials);

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
