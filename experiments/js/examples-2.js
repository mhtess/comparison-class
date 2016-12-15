// examples stores the target sentences and an array of their corresponding context sentences
var examples = [
{
	// warm and cold are not super context sensitive because of perception
	// the best example is of people from different places
	target : "It's warm",
	context : [
		" buys a cup of coffee.",
		" buys a glass of milk.",
		" buys an iced coffee."
	],
	prompt : [
		"What do you think the temperature of the cup of coffee is?",
		"What do you think the temperature of the glass of milk is?",
		"What do you think the temperature of the iced coffee is?"
	],
	degree : "temperature",
	unit : ["degrees Fahrenheit", "degrees Celsius"]
}, {
	target : "It's cold",
	context : [
		" buys a cup of coffee.",
		" buys a glass of milk.",
		" buys an iced coffee."
	],
	prompt : [
		"What do you think the temperature of the cup of coffee is?",
		"What do you think the temperature of the glass of milk is?",
		"What do you think the temperature of the iced coffee is?"
	],
	degree: "temperature",
	unit: ["degrees Fahrenheit", "degrees Celsius"]
}, {
	target : "It's cold outside", // we can go back to the original version ("The weather is cold") but Turkers said it sounded off
	context : [
		" is from Southern California.",
		" is from Kansas.",
		" is from Alaska."
	],
	prompt : [
		"What do you think the temperature is in Southern California?",
		"What do you think the temperature is in Kansas?",
		"What do you think the temperature is in Alaska?"
	],
	degree : "temperature",
	unit : ["degrees Fahrenheit", "degrees Celsius"]
}, {
	target : "It's warm outside", // we can go back to the original version ("The weather is cold") but Turkers said it sounded off
	context : [
		" is from Southern California.",
		" is from Kansas.",
		" is from Alaska."
	],
	prompt : [
		"What do you think the temperature is in Southern California?",
		"What do you think the temperature is in Kansas?",
		"What do you think the temperature is in Alaska?"
	],
	degree : "temperature",
	unit : ["degrees Fahrenheit", "degrees Celsius"]
}, {
	target : "This is expensive",
	context : [
		" is buying a candy bar.",
		" is buying a ticket to the movies.",
		" is buying a ticket to Europe.",
		" is buying a truck."
	],
	prompt : [
		"How much do you think the candy bar costs?",
		"How much do you think the ticket to the movies costs?",
		"How much do you think the ticket to Europe costs?",
		"How much do you think the truck costs?"
	],
	degree : "price",
	unit : ["dollars"]
}, {
	target : "This is cheap",
	context : [
		" is buying a candy bar.",
		" is buying a ticket to the movies.",
		" is buying a ticket to Europe.",
		" is buying a truck."
	],
	prompt : [
		"How much do you think the candy bar costs?",
		"How much do you think the ticket to the movies costs?",
		"How much do you think the ticket to Europe costs?",
		"How much do you think the truck costs?"
	],
	degree : "price",
	unit : ["dollars"]
}, {
	target : "That was long", // needs help
	context : [
		" watched a movie.",
		" was waiting at a traffic light; the light turned green.",
		" drove across the country."
	],
	prompt : [
		"What do you think the duration of the movie was?",
		"What do you think the duration of the traffic was?",
		"What do you think the duration of the trip was?"
	],
	degree : "time",
	unit : ["seconds", "minutes", "hours", "days"]
}, {
	target : "That was short", // needs help
	context : [
		" watched a movie.",
		" was waiting at a traffic light; the light turned green.",
		" drove across the country."
	],
	prompt : [
		"What do you think the duration of the movie was?",
		"What do you think the duration of the traffic was?",
		"What do you think the duration of the trip was?"
	],
	degree : "time",
	unit : ["seconds", "minutes", "hours", "days"]
// }, {
// 	target : "It's open late.", // this is more like a habitual
// 	context : [
// 		" is picking up ",
// 		" works at an elementary school."
// 	],
// 	degree: "time",
// 	unit: "minutes"
}, {
	target : " is tall",
	context : [
		" is looking at a 4-year-old.",
		" is looking at a 25-year-old.",
		" is looking at the point guard on local basketball team.",
		" is looking at a tower in a European city."
	],
	prompt : [
		"What do you think the height of the 4-year-old is?",
		"What do you think the height of the 25-year-old is?",
		"What do you think the height of the basketball player is?",
		"What do you think the height of the tower is?"
	],
	degree : "height",
	unit : ["feet"]
}, {
	target : " is short",
	context : [
		" is looking at a 4 year-old.",
		" is looking at a 25 year-old.",
		" is looking at the point guard on local basketball team.",
		" is looking at a tower in a European city."
	],
	prompt : [
		"What do you think the height of the 4-year-old is?",
		"What do you think the height of the 25-year-old is?",
		"What do you think the height of the basketball player is?",
		"What do you think the height of the tower is?"
	],
	degree : "height",
	unit : ["feet"]
}, {
	target : " is heavy",
	context : [
		" bought a television, and picked it up",
		" bought a book, and picked it up",
		" bought an iPhone, and picked it up"
	],
	prompt : [
		"How much do you think the television weighs?",
		"How much do you think the book weighs?",
		"How much do you think the iPhone weighs?"
	],
	degree : "weight",
	unit : ["pounds"]
},{
	target : " is light",
	context : [
		" bought a television, and picked it up",
		" bought a book, and picked it up",
		" bought an iPhone, and picked it up"
	],
	prompt : [
		"How much do you think the television weighs?",
		"How much do you think the book weighs?",
		"How much do you think the iPhone weighs?"
	],
	degree : "weight",
	unit : ["pounds"]
}];
