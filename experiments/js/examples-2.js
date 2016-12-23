// examples stores the target sentences and an array of their corresponding context sentences
var examples = [
{
	// warm and cold are not super context sensitive because of perception
	// the best example is of people from different places
	target : "It's warm",
	context : [
		" took a sip from a cup of coffee.",
		" took a sip from a glass of milk.",
		" took a sip from an iced coffee."
	],
	prompt : [
		"What do you think was the temperature of the cup of coffee?",
		"What do you think was the temperature of the glass of milk?",
		"What do you think was the temperature of the iced coffee?"
	],
	degree : "temperature",
	unit : ["degrees Fahrenheit", "degrees Celsius"],
	subunit : ["none"]
}, {
	target : "It's cold",
	context : [
		" took a sip from a cup of coffee.",
		" took a sip from a glass of milk.",
		" took a sip from an iced coffee."
	],
	prompt : [
		"What do you think was the temperature of the cup of coffee?",
		"What do you think was the temperature of the glass of milk?",
		"What do you think was the temperature of the iced coffee?"
	],
	degree: "temperature",
	unit: ["degrees Fahrenheit", "degrees Celsius"],
	subunit : ["none"]
},
// WEATHER TEMPERATURE ARE MORE ABOUT SUBJECTIVE COMPARISON CLASSES
// like, a rich boy who has a different sense of what's cheap / expensive
// i.e., it's about speaker beliefs, not about shared beliefs
// {
// 	target : "It's cold outside", // we can go back to the original version ("The weather is cold") but Turkers said it sounded off
// 	context : [
// 		" is from Southern California.",
// 		" is from Kansas.",
// 		" is from Alaska."
// 	],
// 	prompt : [
// 		"What do you think was the temperature in Southern California?",
// 		"What do you think was the temperature in Kansas?",
// 		"What do you think was the temperature in Alaska?"
// 	],
// 	degree : "temperature",
// 	unit : ["degrees Fahrenheit", "degrees Celsius"],
// 	subunit : ["none"]
// }, {
// 	target : "It's warm outside", // we can go back to the original version ("The weather is cold") but Turkers said it sounded off
// 	context : [
// 		" is from Southern California.",
// 		" is from Kansas.",
// 		" is from Alaska."
// 	],
// 	prompt : [
// 		"What do you think was the temperature in Southern California?",
// 		"What do you think was the temperature in Kansas?",
// 		"What do you think was the temperature in Alaska?"
// 	],
// 	degree : "temperature",
// 	unit : ["degrees Fahrenheit", "degrees Celsius"],
// 	subunit : ["none"]
// },
{
	target : "It was expensive",
	context : [
		" bought a candy bar.",
		" bought a ticket to the movies.",
		" bought a ticket to Europe.",
		" bought a truck."
	],
	prompt : [
		"What do you think was the price of the candy bar?",
		"What do you think was the price of the movie ticket?",
		"What do you think was the price of the ticket to Europe?",
		"What do you think was the price of the truck?"
	],
	degree : "price",
	unit : ["dollars"],
	subunit : ["none"]
}, {
	target : "It was cheap",
	context : [
		" bought a candy bar.",
		" bought a ticket to the movies.",
		" bought a ticket to Europe.",
		" bought a truck."
	],
	prompt : [
		"What do you think was the price of the candy bar?",
		"What do you think was the price of the movie ticket?",
		"What do you think was the price of the ticket to Europe?",
		"What do you think was the price of the truck?"
	],
	degree : "price",
	unit : ["dollars"],
	subunit : ["none"]
}, {
	target : "That was long", // needs help
	context : [
		" was talking about the time they drove across the country.",
		" was talking about the movie they just saw.",
		" was talking about the traffic light that just turned green."
	],
	prompt : [
		"What do you think was the duration of the trip?",
		"What do you think was the duration of the movie?",
		"What do you think was the duration of the traffic light?"
	],
	degree : "time",
	unit : ["seconds", "minutes", "hours", "days"],
	subunit : ["seconds", "minutes", "hours"]
}, {
	target : "That was short", // needs help
	context : [
		" was talking about the time they drove across the country.",
		" was talking about the movie they just saw.",
		" was talking about the traffic light that just turned green."
	],
	prompt : [
		"What do you think was the duration of the trip?",
		"What do you think was the duration of the movie?",
		"What do you think was the duration of the traffic light?"
	],
	degree : "time",
	unit : ["seconds", "minutes", "hours", "days"],
	subunit : ["seconds", "minutes", "hours"]
// }, {
// 	target : "It's open late.", // this is more like a habitual
// 	context : [
// 		" is picking up ",
// 		" works at an elementary school."
// 	],
// 	degree: "time",
// 	unit: "minutes"
}, {
	target : " was tall",
	context : [
		" saw a 4 year-old boy.",
		" saw a 25 year-old man.",
		" saw the point guard on the local men's basketball team.",
		" saw a tower in a European city."
	],
	prompt : [
		"What do you think is the height of the 4 year-old boy?",
		"What do you think is the height of the 25 year-old man?",
		"What do you think is the height of the basketball player?",
		"What do you think is the height of the tower?"
	],
	degree : "height",
	unit : ["feet", "meters"],
	subunit : ["inches", "centimeters"]
}, {
	target : " was short",
	context : [
		" saw a 4 year-old boy.",
		" saw a 25 year-old man.",
		" saw the point guard on the local men's basketball team.",
		" saw a tower in a European city."
	],
	prompt : [
		"What do you think is the height of the 4 year-old boy?",
		"What do you think is the height of the 25 year-old man?",
		"What do you think is the height of the basketball player?",
		"What do you think is the height of the tower?"
	],
	degree : "height",
	unit : ["feet", "meters"],
	subunit : ["inches", "centimeters"]
}, {
	target : " is heavy",
	context : [
		" bought a television and lifted it up.",
		" bought a book and lifted it up.",
		" bought an iPhone and lifted it up."
	],
	prompt : [
		"What do you think is the weight of the television?",
		"What do you think is the weight of the book?",
		"What do you think is the weight of the iPhone?"
	],
	degree : "weight",
	unit : ["pounds", "kilograms"],
	subunit : ["ounces", "grams"]
},{
	target : " is light",
	context : [
		" bought a television and lifted it up.",
		" bought a book and lifted it up.",
		" bought an iPhone and lifted it up."
	],
	prompt : [
		"What do you think is the weight of the television?",
		"What do you think is the weight of the book?",
		"What do you think is the weight of the iPhone?"
	],
	degree : "weight",
	unit : ["pounds", "kilograms"],
	subunit : ["ounces", "grams"]
}];
