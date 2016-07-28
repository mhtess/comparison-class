// examples stores the target sentences as keys (string literals) and the context sentences as an array of values for each key.
var examples = {
	"The coffee is hot" : [
		// " has never been to this coffee shop and buys a cup of coffee.",
		" is a regular at the coffee shop and buys a cup of coffee.",
		" takes a sip of their friend's coffee before returning back to their tea."
	],
	"The weather is cold" : [
		// " is not wearing a jacket or sweater.",
		" just flew into New York from Florida.",
		" is a New York native."
	],
	"The necklace is expensive" : [
		// " is buying their high-school date a necklace.",
		" is browsing at a jewelry store.",
		" is buying a diamond necklace."
	],
	"The ticket is cheap" : [
		// " is buying a cruise ticket.",
		// " is buying a plane ticket.",
		" is buying a movie ticket.",
		" got pulled over by a police officer." // technically not proper English usage
	], 
	"Switzerland is far away" : [ 
		" lives in Germany.",
		" lives in the Caribbean."
	],
	"This is a long car ride" : [
		// " is driving to a theme park.",
		" is driving across the country.",
		" is driving to work."
	],
	"The crane is tall" : [
		// " sees many kinds of animals at the city park.",
		" is at a construction site.",
		" is a veterinarian."
	]
};

// additional examples with keys using dynamic literals
examples[" is short"] = [
	// " is a tennis player.",
	" is a goat.",
	" is a basketball player."
];

examples[" is heavy"] = [
	// " is a cow.",
		// " is a featherweight boxer."
	" is a person.",
	" is a dancer."
];

// additional examples with repeated adjectives
/*examples[" is tall"] = [
	" is a 4-year-old.",
	" is a jockey.",
	" is a giraffe."
];*/
