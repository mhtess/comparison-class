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
	degree: "temperature",
	units: ["degrees Fahrenheit","degrees Celsius"]
}, {
	target :"It's cold",
	context : [
		" buys a cup of coffee.",
		" buys a glass of milk.",
		" buys an iced coffee."
	],
	degree: "temperature",
	units: ["degrees Fahrenheit","degrees Celsius"]
}, {
	target : "It's cold outside", // we can go back to the original version ("The weather is cold") but Turkers said it sounded off
	context : [
		" is from Southern California.",
		" is from Kansas.",
		" is from Alaska."
	],
	degree: "temperature",
	units: ["degrees Fahrenheit","degrees Celsius"]
}, {
	target : "It's warm outside", // we can go back to the original version ("The weather is cold") but Turkers said it sounded off
	context : [
		" is from Southern California.",
		" is from Kansas.",
		" is from Alaska."
	],
	degree: "temperature",
	units: ["degrees Fahrenheit","degrees Celsius"]
}, {
	target : "This is expensive",
	context : [
		" is buying a candy bar.",
		" is buying a ticket to the movies.",
		" is buying a ticket to Europe.",
		" is buying a truck."
	],
	degree: "price",
	units: "dollars"
}, {
	target : "This is cheap",
	context : [
		" is buying a candy bar.",
		" is buying a ticket to the movies.",
		" is buying a ticket to Europe.",
		" is buying a truck."
	],
	degree: "price",
	units: "dollars"
}, {
	target : "That was long", // needs help
	context : [
		" watched a movie.",
		" was waiting at a traffic light; the light turned green.",
		" drove across the country."
	],
	degree: "time",
	units: ["seconds","minutes","hours","days"]
}, {
	target : "That was short", // needs help
	context : [
		" watched a movie.",
		" was waiting at a traffic light; the light turned green.",
		" drove across the country."
	],
	degree: "time",
	units: ["seconds","minutes","hours","days"]
// }, {
// 	target : "It's open late.", // this is more like a habitual
// 	context : [
// 		" is picking up ",
// 		" works at an elementary school."
// 	],
// 	degree: "time",
// 	units: "minutes"
}, {
	target : " is tall",
	context : [
		" is looking at a 4 year-old.",
		" is looking at a 25 year-old.",
		" is looking at the point guard on local basketball team.",
		" is looking at a tower in a European city."
	],
	degree: "height",
	units: "feet"
}, {
	target : " is short",
	context : [
		" is looking at a 4 year-old.",
		" is looking at a 25 year-old.",
		" is looking at the point guard on local basketball team.",
		" is looking at a tower in a European city."
	],
	degree: "height",
	units: "feet"
}, {
	target : " is heavy",
	context : [
		" bought a television, and picked it up",
		" bought a book, and picked it up",
		" bought an iPhone, and picked it up"
	],
	degree: "weight",
	units: "pounds"
},{
	target : " is light",
	context : [
		" bought a television, and picked it up",
		" bought a book, and picked it up",
		" bought an iPhone, and picked it up"
	],
	degree: "weight",
	units: "pounds"
}];
