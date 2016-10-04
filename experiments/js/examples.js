// examples stores the target sentences and an array of their corresponding context sentences
var examples = [{
	target : "The coffee is warm", 
	context : [
		// " has never been to this coffee shop and buys a cup of coffee.",
		" is a regular at the coffee shop and buys a cup of coffee.",
		" purchases an iced coffee."
	]
}, {
	target : "It's cold outside", // we can go back to the original version ("The weather is cold") but Turkers said it sounded off
	context : [
		" lives in Canada.",
		" was raised in Russia."
	]
}, {
	target : "The necklace is expensive",
	context : [
		" is browsing at a jewelry store and stops to look at a necklace.",
		" is buying a diamond necklace."
	]
}, {
	target : "The food is cheap ",
	context : [
		" is at a grocery store.",
		" is at a seafood restaurant."
	]
}, {
	target : "This is a long car ride",
	context : [
		" is driving to a theme park.",
		" is driving to work."
	]
}, {
	target : "The office is open late today", // original version ("The office is open late")
	context : [
		" is making a doctor\'s appointment.",
		" works at an elementary school."
	]
}, {
	target : " is tall",
	context : [
		" is 4 years old.",
		" is from Mexico."
	]
}, {
	target : " is short",
	context : [
		" is 26 years old.",
		" is a professional basketball player."
	]
}, {
	target : " is heavy",
	context : [
		" is a person.",
		" is a dancer."
	]
}];
