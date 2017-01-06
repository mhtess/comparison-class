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
	low : [
		"cups of coffee",
		"glasses of milk",
		"cups of iced coffee"
	],
	middle : [
		"beverages",
		"beverages",
		"beverages"
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
	low : [
		"cups of coffee",
		"glasses of milk",
		"cups of iced coffee"
	],
	middle : [
		"beverages",
		"beverages",
		"beverages"
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
		" bought a cone of ice cream.",
		" bought a cup of gelato.",
		" bought a box of chocolates from the local chocolaterie."
	],
	prompt : [
		"What do you think was the price of the candy bar?",
		"What do you think was the price of the cone of ice cream?",
		"What do you think was the price of the cup of gelato?",
		"What do you think was the price of the box of chocolates?"
	],
	low : [
		"candy bars",
		"ice cream cones",
		"cups of gelato",
		"boxes of chocolate from the local chocolaterie"
	],
	middle: [
		"sweets",
		"sweets",
		"sweets",
		"sweets"
	],
	degree : "price",
	unit : ["dollars"],
	subunit : ["none"]
}, {
	target : "It was cheap",
	context : [
		" bought a candy bar.",
		" bought a cone of ice cream.",
		" bought a cup of gelato.",
		" bought a box of chocolates from the local chocolaterie."
	],
	prompt : [
		"What do you think was the price of the candy bar?",
		"What do you think was the price of the cone of ice cream?",
		"What do you think was the price of the cup of gelato?",
		"What do you think was the price of the box of chocolates?"
	],
	low : [
		"candy bars",
		"ice cream cones",
		"cups of gelato",
		"boxes of chocolate from the local chocolaterie"
	],
	middle: [
		"sweets",
		"sweets",
		"sweets",
		"sweets"
	],
	degree : "price",
	unit : ["dollars"],
	subunit : ["none"]
}, {
	target : "That was long",
	context : [
		" was talking about the television show they just watched.",
		// " was talking about the informercial they just watched.", // with informercial, it seems to be a statement meaning "Long, relative to how long informercials SHOULD be" [see 20160106.txt notes]
		" was talking about the youtube video they just watched.",
		" was talking about the movie they just watched.",
		" was talking about the television season they just watched."
	],
	prompt : [
		"What do you think was the duration of the television show?",
		"What do you think was the duration of the youtube video?",
		"What do you think was the duration of the movie?",
		"What do you think was the duration of the television season?"
	],
	low: [
		"television shows",
		"youtube videos",
		"movies",
		"television seasons"
	],
	middle: [
		"things you watch on a screen",
		"things you watch on a screen",
		"things you watch on a screen",
		"things you watch on a screen"
	],
	degree : "time",
	unit : ["seconds", "minutes", "hours", "days"],
	subunit : ["seconds", "minutes", "hours"]
}, {
	target : "That was short", // needs help
	context : [
		" was talking about the television show they just watched.",
		// " was talking about the informercial they just watched.", // with informercial, it seems to be a statement meaning "Long, relative to how long informercials SHOULD be" [see 20160106.txt notes]
		" was talking about the youtube video they just watched.",
		" was talking about the movie they just watched.",
		" was talking about the television season they just watched."
	],
	prompt : [
		"What do you think was the duration of the television show?",
		"What do you think was the duration of the youtube video?",
		"What do you think was the duration of the movie?",
		"What do you think was the duration of the television season?"
	],
	low: [
		"television shows",
		"youtube videos",
		"movies",
		"television seasons"
	],
	middle: [
		"things you watch on a screen",
		"things you watch on a screen",
		"things you watch on a screen",
		"things you watch on a screen"
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
		" saw a 35 year-old man.",
		" saw a college student.",
		" saw a professional basketball player",
	],
	prompt : [
		"What do you think is the height of the 4 year-old boy?",
		"What do you think is the height of the 35 year-old man?",
		"What do you think is the height of the college student",
		"What do you think is the height of the basketball player?",
	],
	low: [
		"4 year-old boys",
		"men in their 30s",
		"college students",
		"basketball players",
	],
	middle: [
		"boys",
		"adult males",
		"adult males",
		"adult males",
	],
	degree : "height",
	unit : ["feet", "meters"],
	subunit : ["inches", "centimeters"]
}, {
	target : " was short",
	context : [
		" saw a 4 year-old boy.",
		" saw a 35 year-old man.",
		" saw a college student.",
		" saw a professional basketball player",
	],
	prompt : [
		"What do you think is the height of the 4 year-old boy?",
		"What do you think is the height of the 35 year-old man?",
		"What do you think is the height of the college student",
		"What do you think is the height of the basketball player?",
	],
	low: [
		"4 year-old boys",
		"men in their 30s",
		"college students",
		"basketball players",
	],
	middle: [
		"boys",
		"adult males",
		"adult males",
		"adult males",
	],
	degree : "height",
	unit : ["feet", "meters"],
	subunit : ["inches", "centimeters"]
}, {
	target : " is heavy",
	context : [
		" bought an iPod mini and lifted it up.",
		" bought an iPhone and lifted it up.",
		" bought an iPad and lifted it up.",
		" bought an Apple Laptop (MacBook) and lifted it up.",
	],
	prompt : [
		"What do you think is the weight of the iPod mini?",
		"What do you think is the weight of the iPhone?",
		"What do you think is the weight of the iPad?",
		"What do you think is the weight of the Apple Laptop (MacBook) ?"
	],
	low: [
		"iPods",
		"phones",
		"tablet computers",
		"laptop computers"
	],
	middle: [
		"portable devices",
		"portable devices",
		"portable devices",
		"portable devices"
	],
	degree : "weight",
	unit : ["pounds", "kilograms"],
	subunit : ["ounces", "grams"]
}, {
	target : " is light",
	context : [
		" bought an iPod mini and lifted it up.",
		" bought an iPhone and lifted it up.",
		" bought an iPad and lifted it up.",
		" bought an Apple Laptop (MacBook) and lifted it up.",
	],
	prompt : [
		"What do you think is the weight of the iPod mini?",
		"What do you think is the weight of the iPhone?",
		"What do you think is the weight of the iPad?",
		"What do you think is the weight of the Apple Laptop (MacBook) ?"
	],
	low: [
		"iPods",
		"phones",
		"tablet computers",
		"laptop computers"
	],
	middle: [
		"portable devices",
		"portable devices",
		"portable devices",
		"portable devices"
	],
	degree : "weight",
	unit : ["pounds", "kilograms"],
	subunit : ["ounces", "grams"]
}];
