// examples stores the target sentences as keys (string literals) and the context sentences as an array of values for each key.
var examples = {
	"The coffee is hot." : [
		" has never been to this coffee shop and buys a cup of coffee.",
		" is a regular at the coffee shop and buys a cup of coffee.",
		" takes a sip of his friend's coffee before returning back to his tea."
	],
	"The weather is cold." : [
		" just flew into New York from Florida.",
		" is a New York native.",
		" is not wearing any warm clothing." 
	],
	"The necklace is expensive." : [
		" is browsing at a jewelry store.",
		" is buying a diamond necklace.",
		" saved up money from his part-time job to buy his prom date a necklace."
	],
	"The ticket was cheap." : [
		" bought a cruise ticket.",
		" bought a movie ticket.",
		" bought a plane ticket.",
		" got pulled over by a police officer." // technically not proper English usage
	], 
	"Switzerland is far away." : [ 
		" lives in Germany.",
		" lives in the Caribbean."
	],
	"The duration of the car ride was long." : [
		" is driving across the country.",
		" is driving to work.",
		" is driving to a theme park."
	],
	// below here the sentences use repeated adjectives
	"The crane is tall." : [
		" is at a construction site.",
		" is a veterinarian.",
		" sees many kinds of animals at the city park."
	]
};
/*
// additional examples with keys using dynamic literals
examples[names[7] + " is tall."] = [
	names[7] + " is a 4-year-old.",
	names[7] + " is a jockey.",
	names[7] + " is a giraffe."
];

examples[names[8] + " is short."] = [
	names[8] + " is a goat.",
	names[8] + " is a basketball player.",
	names[8] + " is a tennis player."
];

examples[name[9] + " is heavy."] = [
	names[9] + " is a cow.",
	names[9] + " is a person.",
	names[9] + " boxes at the welterweight level."
];
*/