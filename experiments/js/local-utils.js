// samples without replacement from the sentences array in order to derive an array of unique sentences
var sampleSentence = function(sentences, trials) {
	var pairs = [];
	for (var i = 0; i < trials; i++) {
		pairs.push(_.sample(sentences));
		sentences = _.reject(sentences, function(phrase) {
			return _.contains(pairs, phrase);
		});
	}
	return pairs;
}

// for each phrase in sentences, sample one context phrase to go along with it
var sampleContext = function(sentences, contexts) {
	return _.map(sentences, function(phrase) {
		return _.sample(contexts[phrase]);
	});
}