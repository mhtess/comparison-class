// samples without replacement from a list of target sentences in order to get an array of unique sentences
var sampleTarget = function(target, trials) {
	var pairs = [];
	for (var i = 0; i < trials; i++) {
		pairs.push(_.sample(target));
		target = _.reject(target, function(phrase) {
			return _.contains(pairs, phrase);
		});
	}
	return pairs;
}

// for each target sentence, sample one context sentence to go along with it
var sampleContext = function(target, contexts) {
	return _.map(target, function(phrase) {
		return _.sample(contexts[phrase]);
	});
}

// samples without replacement from a list of names for all of our examples
var sampleNames = function(characters, trials) {
	var n = _.pluck(characters, "name");
	var names = [];
	for (var i = 0; i < (trials * 2); i++) {
		names.push(_.sample(n));
		n = _.reject(n, function(phrase) {
			return _.contains(names, phrase);
		});
	}
	return names;
}

// swaps out singular "they" for gendered pronoun given a name
var getPronoun = function(context, name) {
	var gender = (_.find(characters, function(person) {
		return person.name === name;
	})).gender;
	if (gender === "male") { return context.split("their").join("his"); }
	else if (gender === "female") { return context.split("their").join("her"); }
}

// playing around with the effects of using "for a" versus "relative to"
var samplePhrase = function() {
	return _.sample([" for a ", " relative to "]);
}