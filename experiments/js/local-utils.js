// samples without replacement from a list of target sentences in order to get an array of unique sentences
var sampleSentence = function(target, trials) {
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