// custom forced choice view

// reads data for single trials from 04_trials.js
// saves response to global data

// first a context sentence is shown, below follows the quetion
const custom_memory_check = function(config, startTime) {

  const view = {
    name: config.name,
    CT: 0,
    trials: config.trials,
    render: function(CT, magpie, startTime) {
      const startingTime = Date.now()
      $("main").html(` <div class='magpie-view'>
      <section class="magpie-text-container">
        <p class="magpie-view-text" style="font-size:20px">Select all of the things you can remember seeing in this experiment.</p>
      </section>

      <section class="magpie-answer-container">
      <div class="magpie-view-text">
        <p><label><input type='radio' id='valid1' name='memory1' value='1'/>${config.data[CT].memory1}</label></p>
        <p><label><input type='radio' id='valid2' name='memory2' value='1'/>${config.data[CT].memory2}</label></p>
        <p><label><input type='radio' id='valid3' name='memory3' value='1'/>${config.data[CT].memory3}</label></p>
        <p><label><input type='radio' id='invalid1' name='memory4' value='1'/>${config.data[CT].memory4}</label></p>
        <p><label><input type='radio' id='invalid2' name='memory5' value='1'/>${config.data[CT].memory5}</label></p>
        <p><label><input type='radio' id='invalid3' name='memory6' value='1'/>${config.data[CT].memory6}</label></p>
        <p><label><input type='radio' id='valid4' name='memory7' value='1'/>${config.data[CT].memory7}</label></p>
        <p><label><input type='radio' id='invalid4' name='memory8' value='1'/>${config.data[CT].memory8}</label></p>
        <p><label><input type='radio' id='invalid5' name='memory9' value='1'/>${config.data[CT].memory9}</label></p>
        <p><label><input type='radio' id='valid5' name='memory10' value='1'/>${config.data[CT].memory10}</label></p>
      </div>
      <p class="text" align="center" id="catch">Please select a response before proceeding.</p>
      <button id='next' class='magpie-view-button'>next</button>
      </section>
      </div>
        `)


              $("#catch").hide();
              $("#next").on("click", function() {
                var response1 = $("input[name=memory1]:checked").val();
                var response2 = $("input[name=memory2]:checked").val();
                var response3 = $("input[name=memory3]:checked").val();
                var response4 = $("input[name=memory4]:checked").val();
                var response5 = $("input[name=memory5]:checked").val();
                var response6 = $("input[name=memory6]:checked").val();
                var response7 = $("input[name=memory7]:checked").val();
                var response8 = $("input[name=memory8]:checked").val();
                var response9 = $("input[name=memory9]:checked").val();
                var response10 = $("input[name=memory10]:checked").val();

                if ((response1 === undefined) & (response2 === undefined) & (response3 === undefined) & (response4 === undefined) & (response5 === undefined)
                  & (response6 === undefined) & (response7 === undefined) & (response8 === undefined) & (response9 === undefined) & (response10 === undefined)) {
                  $("#catch").show()
                } else {
                const RT = Date.now() - startingTime;
                const resps = [response1, response2, response3, response4, response5, response6, response7, response8, response9, response10]
                console.log(resps)
                const correct_mem = [1,1,1,,,,1,,,1]
                var num_mem_false = 0
                for (i = 0; i < 10; i++) {
                  if (resps[i] != correct_mem[i]) {
                    num_mem_false = num_mem_false + 1
                  }
                }
                  let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: num_mem_false,

                    // response2: response2,
                    RT: RT
                    // response3: response3,
                    // response4: response4
                  }
                  trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);
                  magpie.trial_data.push(trial_data);
                  magpie.findNextView();
                }
              })

    }
  }
  return view
}


const custom_forced_choice = function(config, startTime) {

  const view = {
    name: config.name,
    CT: 0,
    trials: config.trials ,
    render: function(CT, magpie, startTime) {
      const startingTime = Date.now()
      $("main").html(

      `<div class='magpie-view'>

      <section class="magpie-text-container">
        <p class="magpie-view-text" style="font-size:20px">${config.data[CT].context}</br></br></p>
      </section>
      <section class="magpie-text-container" position="left">
        <p class="magpie-view-text" style="font-size:20px;font-family:Times New Roman, Times">${config.data[CT].question}</br></p>
      </section>

      <div style="width:100%;">
          <div style="width:60%;height:120px;float:left;position:relative;align:center;">
              <div style="position:absolute;top:20px;right:20px;align:center;">
                  <p class="magpie-view-text">${config.data[CT].sentence_1}</p> </br>
                  <p class="magpie-view-text">${config.data[CT].sentence_2}</p>
              </div>
          </div>
              <div style="width:40%;height:120px;float:right;position:relative;align:center;">
                  <span style="position:absolute;top:20px;left:20px;align:center">
                      <p class='magpie-view-text'>
                        <label><input type="radio" name="main1" value="1"/>Yes</label>
                        <label><input type="radio" name="main1" value="0"/>No</label>
                      </p> </br>
                      <p class='magpie-view-text'>
                        <label><input type="radio" name="main2" value="1"/>Yes</label>
                        <label><input type="radio" name="main2" value="0"/>No</label>
                      </p>
                  </span>
              </div>
      </div>

          <button id='next' class='magpie-view-button'>next</button>
          <p class="text" align="center" id="catch">Please select a response before proceeding.</p>
      </div>`


    )


      $("#catch").hide();
      $("#next").on("click", function() {
        var response1 = $("input[name=main1]:checked").val();
        var response2 = $("input[name=main2]:checked").val();
        // var response3 = $("input[name=main3]:checked").val();
        // var response4 = $("input[name=main4]:checked").val();
        // var responses = [response1, response2, response3, response4];
        if ((response1 === undefined) | (response2 === undefined) ) {
          $("#catch").show()
        } else {
        const RT = Date.now() - startingTime;
          let trial_data = {
            trial_name: config.name,
            trial_number: CT + 1,
            response1: response1,
            response2: response2,
            RT: RT
            // response3: response3,
            // response4: response4
          }
          trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        }
      })



    }
  }
  return view
}


const custom_botcaptcha = function(config){
  const view = {
    name: config.name,
    CT: 0,
    trials: config.trials,
    render: function(CT, magpie) {
      $("main").html(`<div class="magpie-view">
        <h1 class='magpie-view-title'>Are you a bot?</h1>
        <br />
        <section class="magpie-text-container" align="center">
            <p class="magpie-text-container">${config.speaker} says to ${config.listener}: It's a beautiful day, isn't it?</p>
        </section>
        <br />
        <section class="magpie-text-container" align="center">
            <p class="magpie-text-container" id="quest-response">Who is ${config.speaker} talking to?</p>
            <section class="magpie-text-container" align="center">
                <p class="magpie-text-container">Please enter your answer in lower case.</p>
            </section
            <br />
            <textarea rows="1" cols="15" name="botresponse" id="listener-response"></textarea>

        </section>
        <br />
        <button class="magpie-view-button" id='next'>Let's go!</button>
        <section class="answer-container" align="center">
            <p class="text" id="error_incorrect" style="color: #7CB637">This is incorrect.</p>
            <p class="text" id="error_2more" style="color: #7CB637">You have 2 more trials.</p>
            <p class="text" id="error_1more" style="color: #7CB637">You have 1 more trial.</p>
            <p class="text" id="error" style="color: #7CB637">Error: You failed the comprehension questions too many times.
            You are not permitted to complete the HIT. Please click 'Return HIT' to avoid any impact on your approval rating.
            <br/><br/>
            If you believe you are receiving thin message in error, please email <a href="mailto:polinats@mit.edu">polinats@mit.edu</a> </p>
        </section>
        </div>`);
// don't allow to press enter in the response field
        $('#listener-response').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        let next = $("#next");
        // don't show any error message
        $("#error").hide();
        $("#error_incorrect").hide();
        $("#error_2more").hide();
        $("#error_1more").hide();

        // amount of trials to enter correct response
        var trial = 0;

        $("#next").on("click", function() {
            response = $("#listener-response").val().replace(" ","");

            // response correct
            if (listener.toLowerCase() == response.toLowerCase()) {
                magpie.global_data.botresponse = $("#listener-response").val();
                magpie.findNextView();

            // response false
            } else {
                trial = trial + 1;
                $("#error_incorrect").show();
                if (trial == 1) {
                    $("#error_2more").show();
                } else if (trial == 2) {
                    $("#error_2more").hide();
                    $("#error_1more").show();
                } else {
                    $("#error_incorrect").hide();
                    $("#error_1more").hide();
                    $("#next").hide();
                //    $('#quest-response').css("opacity", "0.2");
                    $('#listener-response').prop("disabled", true);
                    $("#error").show();
                };
            };

        });

    }
  };
  return view;
};


const custom_post_test_view = function(config) {
  const _survey = {
      name: config.name,
      title: config.title,
      text: config.text,
      render: function(CT, magpie) {
          let startingTime;
          const viewTemplate = `
          <div class="magpie-post-test-view">
              <h1 class="magpie-view-title">${this.title}</h1>
              <section class="text-container">
                  <h4 style = "text-align:center;">${this.text}</p>
              </section>
              <form style = "margin-top:-50px">
              <p class = "magpie-view-text" >
              <label for="understand">Did you read the instructions and do you think you completed the experiment correctly?</label>
              <select id="understand" name="understand">
                  <option></option>
                  <option value="yes" >Yes</option>
                  <option value="no">No</option>
                  <option value="confused">I was confused</option>
              </select>
          </p>
          <p class = "magpie-view-text" >
              <label for="age">Age:</label>
              <input type="number" name="age" min="18" max="110" id="age" />
          </p>
          <p class = "magpie-view-text" >
              <label for="sex">Sex:</label>
              <select id="sex" name="sex">
                  <option></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
              </select>
          </p>
          <p class = "magpie-view-text" >
              <label for="education">Level of Education:</label>
              <select id="education" name="education">
                  <option></option>
                  <option value="some_high_school">Some High School</option>
                  <option value="graduated_high_school">Graduated High School</option>
                  <option value="some_college">Some College</option>
                  <option value="graduated_college">Graduated College</option>
                  <option value="higher_degree">Higher Degree</option>
              </select>
          </p>
          <p class = "magpie-view-text" >
              <label for="languages" name="languages">Native Languages: <br /><span>(i.e. the language(s) spoken at home when you were a child)</</span></label>
              <input type="text" id="languages"/>
          </p>
          <p class = "magpie-view-text" >
              <label for="enjoyment">Did you enjoy the experiment?</label>
              <select id="enjoyment" name="enjoyment">
                  <option></option>
                  <option value="0">Worse than the Average Experiment</option>
                  <option value="1" >An Average Experiment</option>
                  <option value="2">Better than average Experiment</option>
              </select>
          </p>
          <p class = "magpie-view-text" >
              <label for="fairprice">What do you think is a fair price for the work you did?</label>
              <input type="number" name="fairprice" min="0" max="100" id="fairprice" step="0.01"/>
          </p>
          <p class = "magpie-view-text" >
              <label for="problems">Were there any problems or glitches in the experiment?</label>
              <textarea id="problems" rows="2" cols="50"></textarea>
          </p>
          <p class = "magpie-view-text"  class="comment-sect">
              <label for="comments">Further comments</label>
              <textarea name="comments" id="comments"
              rows="6" cols="40"></textarea>
          </p>
              <button class = "magpie-view-button" id="next">Finish</button>
              </form>
              </div>
          `;
          $("#main").html(viewTemplate);
          let next = $("#next");
          next.on("click", function() {
            magpie.global_data.understand = $("#understand").val();
            magpie.global_data.age = $("#age").val();
            magpie.global_data.sex = $("#sex").val();
            magpie.global_data.education = $("#education").val();
            magpie.global_data.languages = $("#languages").val();
            magpie.global_data.enjoyment = $("#enjoyment").val();
            magpie.global_data.problems = $("#problems").val().trim();
            magpie.global_data.fairprice = $("#fairprice").val();
            magpie.global_data.comments = $("#comments").val().trim();
            magpie.findNextView();
          });
          startingTime = Date.now();
      },
      CT: 0,
      trials: config.trials
  };
  return _survey;
};

const custom_intro_view = function(config) {
  const view = {
      name: config.name,
      title: config.title,
    //  text: config.text,
      render: function(CT, magpie) {
          let startingTime;
          const viewTemplate = `
          <div class='magpie-view'>
          <h1 class='magpie-view-title'>Welcome!</h1>
          <div class="picture" align="center">
            <img src="${config.picture1}">
          </div>
          <section class="magpie-text-container">
            <p class="magpie-view-text"> Thank you for taking part in our study. We are studying how people talk about things around them. The study will take about 6-8 minutes.<br /> <br />
            </br>
            <p class="magpie-view-text" style="font-family:Courier New, Courier"> Please note: There will be multiple posted versions of this HIT (name:<b> Adjectives - 505</b>) throughout the next few days.
            Please attempt only one HIT in this series. You will not be allowed to complete multiple HITs in this series. </br> </br>
            </p>
          </section>

          <section class="magpie-text-container">
          <p class="magpie-view-text">
            By continuing, you are participating in an experiment being performed by cognitive scientists in the MIT Computational Psycholinguistics Lab. If you have questions about this research, please contact Polina Tsvilodub, at <a href="mailto:polinats@mit.edu">polinats@mit.edu</a>, or MH Tessler, at tessler@mit.edu. You must be at least 18 years old to participate. Your participation in this research is voluntary. You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences. Your anonymity is assured; the researchers who have requested your participation will not receive any personal information about you.
             </p>
          </section>

          <p class = 'magpie-nodisplay' id = 'please-return'>Please return the HIT. It seems that your IP is not from the US or you have completed this HIT before.</p>
          <button class = "magpie-view-button" id="next">Go To Trials</button>
          </div>
          `;
          $("#main").html(viewTemplate);


          var bad_worker = false;

          console.log("UNIQUE TURKER?");
          (function(){
              var ut_id = magpie.uniqueTurkerID;
              if (UTWorkerLimitReached(ut_id)) {// {
                  bad_worker = true;
              }
          })();


          console.log("ARE YOU FROM THE US???");
          function USOnly() {var accessKey = 'b487843addca6e9ec32e6ae28aeaa022';

               $.ajax({
                   url: 'https://api.ipstack.com/check?access_key='+accessKey,
                   dataType: 'jsonp',

                   success: function(json) {
                     if (json.country_code != 'US') {
                       bad_worker = true;
                   }
               }
             });
           }


          let next = $("#next");
          next.on("click", function() {
            if (bad_worker) {
              $("#please-return").removeClass('magpie-nodisplay')
            } else {
              magpie.findNextView();
            }
          });
          startingTime = Date.now();
      },
      CT: 0,
      trials: config.trials
  };
  return view;
};
