// examples stores the target sentences as keys (string literals) and the context sentences as an array of values for each key.
var examples = {
	"The coffee is hot" : [
		" has never been to this coffee shop and buys a cup of coffee.",
		" is a regular at the coffee shop and buys a cup of coffee.",
		" takes a sip of their friend's coffee before returning back to their tea."
	],
	"The weather is cold" : [
		" just flew into New York from Florida.",
		" is a New York native.",
		" is not wearing any warm clothing." 
	],
	"The necklace is expensive" : [
		" is browsing at a jewelry store.",
		" is buying a diamond necklace.",
		" is buying their high-school date a necklace."
	],
	"The ticket is cheap" : [
		" is buying a cruise ticket.",
		" is buying a movie ticket.",
		" is buying a plane ticket.",
		" got pulled over by a police officer." // technically not proper English usage
	], 
	"Switzerland is far away" : [ 
		" lives in Germany.",
		" lives in the Caribbean."
	],
	"This is a long car ride" : [
		" is driving across the country.",
		" is driving to work.",
		" is driving to a theme park."
	],
	"The crane is tall" : [
		" is at a construction site.",
		" is a veterinarian.",
		" sees many kinds of animals at the city park."
	]
};

// additional examples with keys using dynamic literals
examples[" is short"] = [
	" is a goat.",
	" is a basketball player.",
	" is a tennis player."
];

examples[" is heavy"] = [
	" is a cow.",
	" is a person.",
	" boxes at the welterweight level."
];

// additional examples with repeated adjectives
/*examples[" is tall"] = [
	" is a 4-year-old.",
	" is a jockey.",
	" is a giraffe."
];*/
