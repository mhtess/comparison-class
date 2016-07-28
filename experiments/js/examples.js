// examples stores the target sentences and an array of their corresponding context sentences
var examples = [{
	target : "The coffee is hot", 
	context : [
		// " has never been to this coffee shop and buys a cup of coffee.",
		" is a regular at the coffee shop and buys a cup of coffee.",
		" takes a sip of their friend's coffee before returning back to their tea."
	]
}, {
	target : "The weather is cold",
	context : [
		// " is not wearing a jacket or sweater.",
		" just flew into New York from Florida.",
		" is a New York native."
	]
}, {
	target : "The necklace is expensive",
	context : [
		// " is buying their high-school date a necklace.",
		" is browsing at a jewelry store.",
		" is buying a diamond necklace."
	]
}, {
	target : "The ticket is cheap",
	context : [
		// " is buying a cruise ticket.",
		// " is buying a plane ticket.",
		" is buying a movie ticket.",
		" got pulled over by a police officer." // technically not proper English usage
	]
}, {
	target : "Switzerland is far away",
	context : [ 
		" lives in Germany.",
		" lives in the Caribbean."
	]
}, {
	target : "This is a long car ride",
	context : [
		// " is driving to a theme park.",
		" is driving across the country.",
		" is driving to work."
	]
}, {
	target : "The crane is tall",
	context : [
		// " sees many kinds of animals at the city park.",
		" is at a construction site.",
		" is a veterinarian."
	]
}, {
	target : " is short",
	context : [
		// " is a tennis player.",
		" is a goat.",
		" is a basketball player."
	]
}, {
	target : " is heavy",
	context : [
		// " is a cow.",
		// " is a featherweight boxer."
		" is a person.",
		" is a dancer."
	]
}];
