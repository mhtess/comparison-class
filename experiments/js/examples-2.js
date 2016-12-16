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
		"What do you think was the temperature of the cup of coffee?",
		"What do you think was the temperature of the glass of milk?",
		"What do you think was the temperature of the iced coffee?"
	],
	degree : "temperature",
	unit : ["degrees Fahrenheit", "degrees Celsius"],
	subunit : []
}, {
	target : "It's cold",
	context : [
		" buys a cup of coffee.",
		" buys a glass of milk.",
		" buys an iced coffee."
	],
	prompt : [
		"What do you think was the temperature of the cup of coffee?",
		"What do you think was the temperature of the glass of milk?",
		"What do you think was the temperature of the iced coffee?"
	],
	degree: "temperature",
	unit: ["degrees Fahrenheit", "degrees Celsius"],
	subunit : []
}, {
	target : "It's cold outside", // we can go back to the original version ("The weather is cold") but Turkers said it sounded off
	context : [
		" is from Southern California.",
		" is from Kansas.",
		" is from Alaska."
	],
	prompt : [
		"What do you think was the temperature in Southern California?",
		"What do you think was the temperature in Kansas?",
		"What do you think was the temperature in Alaska?"
	],
	degree : "temperature",
	unit : ["degrees Fahrenheit", "degrees Celsius"],
	subunit : []
}, {
	target : "It's warm outside", // we can go back to the original version ("The weather is cold") but Turkers said it sounded off
	context : [
		" is from Southern California.",
		" is from Kansas.",
		" is from Alaska."
	],
	prompt : [
		"What do you think was the temperature in Southern California?",
		"What do you think was the temperature in Kansas?",
		"What do you think was the temperature in Alaska?"
	],
	degree : "temperature",
	unit : ["degrees Fahrenheit", "degrees Celsius"],
	subunit : []
}, {
	target : "This is expensive",
	context : [
		" is buying a candy bar.",
		" is buying a ticket to the movies.",
		" is buying a ticket to Europe.",
		" is buying a truck."
	],
	prompt : [
		"What do you think was the price of the candy bar?",
		"What do you think was the price of the movie ticket?",
		"What do you think was the price of the ticket to Europe?",
		"What do you think was the price of the truck?"
	],
	degree : "price",
	unit : ["dollars"],
	subunit : []
}, {
	target : "This is cheap",
	context : [
		" is buying a candy bar.",
		" is buying a ticket to the movies.",
		" is buying a ticket to Europe.",
		" is buying a truck."
	],
	prompt : [
		"What do you think was the price of the candy bar?",
		"What do you think was the price of the movie ticket?",
		"What do you think was the price of the ticket to Europe?",
		"What do you think was the price of the truck?"
	],
	degree : "price",
	unit : ["dollars"],
	subunit : []
}, {
	target : "That was long", // needs help
	context : [
		" watched a movie.",
		" was waiting at a traffic light; the light turned green.",
		" drove across the country."
	],
	prompt : [
		"What do you think was the duration of the movie?",
		"What do you think was the duration of the traffic light?",
		"What do you think was the duration of the trip?"
	],
	degree : "time",
	unit : ["seconds", "minutes", "hours", "days"],
	subunit : []
}, {
	target : "That was short", // needs help
	context : [
		" watched a movie.",
		" was waiting at a traffic light; the light turned green.",
		" drove across the country."
	],
	prompt : [
		"What do you think was the duration of the movie?",
		"What do you think was the duration of the traffic light?",
		"What do you think was the duration of the trip?"
	],
	degree : "time",
	unit : ["seconds", "minutes", "hours", "days"],
	subunit : []
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
		" is looking at a 4 year-old boy.",
		" is looking at a 25 year-old man.",
		" is looking at the point guard on the local men's basketball team.",
		" is looking at a tower in a European city."
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
	target : " is short",
	context : [
		" is looking at a 4 year-old boy.",
		" is looking at a 25 year-old man.",
		" is looking at the point guard on the local men's basketball team.",
		" is looking at a tower in a European city."
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
		" bought a television, and picked it up",
		" bought a book, and picked it up",
		" bought an iPhone, and picked it up"
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
		" bought a television, and picked it up",
		" bought a book, and picked it up",
		" bought an iPhone, and picked it up"
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
