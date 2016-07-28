// creates all possible unique target-context pairs and shuffles them before returning
function getTrials(examples) {
	var trials = [];
	for (var i = 0; i < examples.length; i++) {
		for (var j = 0; j < examples[i].context.length; j++) {
			trials.push({
				target : examples[i].target,
				context : examples[i].context[j]
			});
		}
	}
	return _.shuffle(trials);
}

// samples without replacement from a list of names for all of our trial slides
// NOTE: 30 NAMES MAX
var sampleNames = function(characters, trials) {
	var names = _.pluck(characters, "name");
	return _.shuffle(names);
}

// swaps out singular "they" for gendered pronoun given a name
var getPronoun = function(context, name) {
	var gender = (_.find(characters, function(person) {
		return person.name === name;
	})).gender;
	if (gender === "male") { return context.split("their").join("his"); }
	else if (gender === "female") { return context.split("their").join("her"); }
}

// sample a condition, where a condition is the use of the "for a" or "relative to"
var sampleCondition = function() {
	return _.sample([" for a ", " relative to "]);
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