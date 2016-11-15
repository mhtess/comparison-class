// examples stores the target sentences and an array of their corresponding context sentences
var examples = [
{
	target : "The coffee is warm", 
	context : [
		// " has never been to this coffee shop and buys a cup of coffee.",
		" purchases a cup of coffee.",
		" purchases an iced coffee."
	]
}, {
	target : "It's cold outside", // we can go back to the original version ("The weather is cold") but Turkers said it sounded off
	context : [
		" lives in Florida.",
		" lives in Russia."
	]
}, {
	target : "The necklace is expensive",
	context : [
		" is at a jewelry store.",
		" is at a candy store."
	]
}, {
	target : "The food is cheap",
	context : [
		" is at a grocery store.",
		" is at a seafood restaurant."
	]
}, {
	target : "This movie is long", // needs help
	context : [
		" is watching a series of short films.",
		" is at the movie theater."
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
		" is from the Netherlands."
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
		" is 30 years old.",
		" is a ballet dancer."
	]
}];
