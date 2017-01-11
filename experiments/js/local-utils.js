// creates all possible unique target-context pairs and shuffles them before returning
function getTrials(examples) {
	var trials = [];
	for (var i = 0; i < examples.length; i++) {
		for (var j = 0; j < examples[i].context.length; j++) {
			trials.push({
				target : examples[i].target,
				context : examples[i].context[j],
        prompt : examples[i].prompt[j],
        degree : examples[i].degree,
        unit : examples[i].unit,
				form : examples[i].form,
        subunit : examples[i].subunit,
				sub : examples[i].sub[j],
				super : examples[i].super[j],
				strength: examples[i].strength[j]
			});
		}
	}
	return _.shuffle(trials);
}

// samples without replacement from a list of names for all of our trial slides
// NOTE: 30 NAMES MAX
var sampleNames = function(characters) {
	var names = _.pluck(characters, "name");
	return _.shuffle(names);
}

// swaps out singular "they" for gendered pronoun given a name
var getPronoun = function(context, name) {
	var gender = (_.find(characters, function(person) {
		return person.name == name;
	})).gender;
	if (gender == "male") { return context.split("their").join("his").split("they").join("his"); }
	else if (gender == "female") { return context.split("their").join("her").split("they").join("her"); }
}

// retrieves the correct pronoun for the context/target pair
var getPronoun2 = function(context, target) {
  var pronoun = "";
  if ((target.search("tall") != -1) || (target.search("short") != -1)) {
    if (context.search("tower") == -1) { pronoun = "He"; }
    else { pronoun = "That"; }
  }
  else {
    pronoun = "This";
  }
  return pronoun;
}

// sample a condition, where a condition is the use of the "for a" or "relative to"
var sampleCondition = function() {
	return " relative to other "; //_.sample([" for a ", " relative to "]);
}

// embeds the trial slides that were generated in the experiment file into the html file
function embedSlides(trials) {
  var slides = "";
  for (var i = 1; i <= trials; i++) {
    slides = slides + "<div class=\"slide\" id=\"trial" + i + "\">" +
    	"<p class=\"display_context\"></p>" +
  		"<p class=\"display_target\"></p>" +
  		"<p class=\"display_question\"></p>" +
  		"<span class=\"display_prompt\"></span><input type=\"text\" id=\"text_response" + i + "\"></input>.\"<p></p>" +
  		"<button onclick=\"_s.button()\">Continue</button>" +
  		"<p class=\"err\">Please write something.</p>" +
  		"</div>";
  	$(".trial_slides").html(slides);
  }
}

// embeds the trial slides that were generated in the experiment file into the html file
function embedSliderSlides(trials) {
  var slides = "", sliderText;
  for (var i = 1; i <= trials; i++) {

		sliderText = [
			exp.examples[i-1]["low"],
			exp.examples[i-1]["medium"]
		];

    slides = slides +
		"<div class=\"slide\" id=\"trial" + i + "\">" +
    	"<p class=\"display_context\"></p>" +
  		"<p class=\"display_target\"></p>" +
  		"<p class=\"display_question\"></p>" +
			"<table id=\"multi_slider_table" + i +"\"" +  "class=\"slider_table\">" +
			"<tr><td></td>"+
			"<td class=\"left\">very unlikely</td>"+
			"<td class=\"right\">very likely</td>" +
			"</tr> </table>" +
  		"<span class=\"display_prompt\"></span>"+
			// '<textarea id="text_response' + i + '" rows="1" cols="50"></textarea>."<br>' +
			"<input type=\"text\" class='textbox' id=\"text_response" + i + "\"></input>.\"<p></p>" +
  		"<button onclick=\"_s.button()\">Continue</button>" +
			'<p class="errSliders">Please adjust the first two sliders before continuing.</p>'+
  		'<p class="err">Please tell us what "other" paraphrase you think is likely.</p>' +
  		"</div>";

  	$(".trial_slides").html(slides);
  }
}


// embeds the trial slides that were generated in the experiment file into the html file
function embedSliderSlides(trials) {
  var slides = "", sliderText;
  for (var i = 1; i <= trials; i++) {

		sliderText = [
			exp.examples[i-1]["low"],
			exp.examples[i-1]["medium"]
		];

    slides = slides +
		"<div class=\"slide\" id=\"trial" + i + "\">" +
    	"<p class=\"display_context\"></p>" +
  		"<p class=\"display_target\"></p>" +
  		"<p class=\"display_question\"></p>" +
			"<table id=\"multi_slider_table" + i +"\"" +  "class=\"slider_table\">" +
			"<tr><td></td>"+
			"<td class=\"left\">very unlikely</td>"+
			"<td class=\"right\">very likely</td>" +
			"</tr> </table>" +
  		"<span class=\"display_prompt\"></span>"+
			// '<textarea id="text_response' + i + '" rows="1" cols="50"></textarea>."<br>' +
			"<input type=\"text\" class='textbox' id=\"text_response" + i + "\"></input>.\"<p></p>" +
  		"<button onclick=\"_s.button()\">Continue</button>" +
			'<p class="errSliders">Please adjust the first two sliders before continuing.</p>'+
  		'<p class="err">Please tell us what "other" paraphrase you think is likely.</p>' +
  		"</div>";

  	$(".trial_slides").html(slides);
  }
}



// embeds the trial slides that were generated in the experiment file into the html file for the listener experiment
function embedListenerSlides(examples, trials) {
  // get the units and subunits
  var unit = _.pluck(examples, "unit");
  var subunit = _.pluck(examples, "subunit");

  // stores the html for the slides
  var slides = "";
  for (var i = 1; i <= trials; i++) {

    // stores the html script for the units dropdown menu
    var u = "";

    // stores the html script for the subunits dropdown menu
    var su = "";

    // generate the script for the units
    for (var j = 0; j < unit[i-1].length; j++) {
      u = u + "<label><option value=\"" + unit[i-1][j] + "\">" + unit[i-1][j] + "</option></label>";
    }

    // if there are subunits, generate scripts for them
    if (subunit[i-1][0] != "none") {
      var temp = "<input type=\"text\" id=\"measure2" + i + "\" maxlength=\"5\" size =\"5\" tabindex=\"1\"></input>" +
        "<select id=\"subunit" + i + "\">" +
        "<option selected disabled hidden style='display: none' value=''></option>";
      for (var k = 0; k < subunit[i-1].length; k++) {
        su = su + "<label><option value=\"" + subunit[i-1][k] + "\">" + subunit[i-1][k] + "</option></label>";
      }
      su = temp + su + "</select>";
    }

    // finally, combine everything to generate the script for the trial slides
    slides = slides +
		"<div class=\"slide\" id=\"trial" + i + "\">" +
    	"<p class=\"display_context\"></p>" +
  		"<p class=\"display_target\"></p>" +
			"<p class=\"display_question\"></p>" +
			"<div id=\"text_prompt" + i + "\"><span class=\"display_prompt\"></span><input type=\"text\" id=\"text_response" + i + "\"></input>.\"</div><p></p>" +
  		"<p class=\"display_question2\"></p>" +
      "<div id=\"estimation_prompt" + i + "\"><input type=\"text\" id=\"measure1" + i + "\" maxlength=\"6\" size =\"7\" tabindex=\"1\"></input>" +
      "<select id=\"unit" + i + "\">" +
      "<option selected disabled hidden style='display: none' value=''></option>" + u + "</select>" + su +
      "</div><br><br>" +
  		// "<p class=\"slider_number\"></p>" +
  		// " <table id=\"slider_table\"class=\"slider_table\">" +
  		// "<tr><td class=\"left\"></td><td class=\"right\"></td></tr>" +
  		// "<tr><td colspan=\"2\"><div id=\"single_slider\"class=\"slider\"></div></td></tr>" +
  		// "</table>" +
  		"<button onclick=\"_s.button()\">Continue</button>" +
      "<p class=\"err\">Please type something and select a unit and subunit.</p>" +
      "<p class=\"numErr\">Please use whole numbers only.</p>" +
			"<p class=\"textErr\">Please write something.</p>" +
  		"</div>";
  	$(".trial_slides").html(slides);
  }
}

function embed2AFCSlides(trials) {
  var slides = "";
  for (var i = 1; i <= trials; i++) {


    slides = slides +
		"<div class=\"slide\" id=\"trial" + i + "\">" +
    	"<p class=\"display_context\"></p>" +
  		"<p class=\"display_target\"></p>" +
  		"<p class=\"display_question\"></p>" +
			"<div class=\"radioLeft\"><input type=\"radio\" name=\"paraphrase\" value=\"0\"/><label for=\"0\"></label><br><br>"+
			"<input type=\"radio\" name=\"paraphrase\" value=\"1\"/><label for=\"1\"></label><br><br></div>"+
  		"<button onclick=\"_s.button()\">Continue</button>" +
			'<p class="err">Please select an option before contining.</p>'+
  		"</div>";

  	$(".trial_slides").html(slides);
  }
}
