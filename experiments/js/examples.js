// examples stores the target sentences and an array of their corresponding context sentences
var examples = [{
	target : "The coffee is hot", 
	context : [
		// " has never been to this coffee shop and buys a cup of coffee.",
		" is a regular at the coffee shop and buys a cup of coffee.",
		" takes a sip of their friend\'s coffee before returning back to their tea."
	]
}, {
	target : "The weather is cold",
	context : [
		// " is not wearing a jacket or sweater.",
		// " is a New York native.",
		" just flew into New York from Florida.",
		" was raised in Russia."
	]
}, {
	target : "The necklace is expensive",
	context : [
		// " is buying their high-school date a necklace.",
		// " is trying to pawn their necklace.",
		" is browsing at a jewelry store and stops to look at a necklace.",
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
	target : "This is a long car ride",
	context : [
		// " is driving to a theme park.",
		" is driving across the country.",
		" is driving to work."
	]
}, {
	target : "The office is open late",
	context : [
		" is making a doctor\'s appointment.",
		" works at a call center."
	]
}, {
	target : " is tall",
	context : [
		" is 4 years old.",
		" is 26 years old."
	]
}, {
	target : " is short",
	context : [
		// " is a tennis player.",
		" is a greyhound.",
		" is a professional basketball player."
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

// {
// 	target : "Switzerland is far",
// 	context : [ 
// 		// " lives in Germany.",
// 		// " lives in the Caribbean.",
// 		" lives 30 miles away from Switzerland and is planning a vacation.",
// 		" lives 10000 miles away from Switzerland and is planning a vacation."
// 	]
// } 