// examples stores the target sentences and an array of their corresponding context sentences
var examples = [
{
	// warm and cold are not super context sensitive because of perception
	// the best example is of people from different places
	target : "It's warm",
	context : [
		" lives in Maryland and steps outside in Winter.",
		" lives in Maryland and steps outside in Spring.",
		" lives in Maryland and steps outside in Summer."
	],
	prompt : [
		"What do you think was the temperature outside?",
		"What do you think was the temperature outside?",
		"What do you think was the temperature outside?",
	],
	sub : [
		"days in Winter",
		"days in Spring",
		"days in Summer"
	],
	super : [
		"days of the year",
		"days of the year",
		"days of the year"
	],
	degree : "temperature",
	unit : ["degrees Fahrenheit", "degrees Celsius"],
	subunit : ["none"]
}, {
	target : "It's cold",
	context : [
		" lives in Maryland and steps outside in Winter.",
		" lives in Maryland and steps outside in Spring.",
		" lives in Maryland and steps outside in Summer."
	],
	prompt : [
		"What do you think was the temperature outside?",
		"What do you think was the temperature outside?",
		"What do you think was the temperature outside?",
	],
	sub : [
		"days in Winter",
		"days in Spring",
		"days in Summer"
	],
	super : [
		"days of the year",
		"days of the year",
		"days of the year"
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
	target : "This is expensive",
	context : [
		" is buying a can opener.",
		" is buying a toaster.",
		" is buying an oven."
	],
	prompt : [
		"What do you think was the price of the can opener?",
		"What do you think was the price of the toaster?",
		"What do you think was the price of the oven?"
	],
	sub : [
		"can openers",
		"toasters",
		"ovens"
	],
	super: [
		"appliances",
		"appliances",
		"appliances"
	],
	degree : "price",
	unit : ["dollars"],
	subunit : ["none"]
}, {
	target : "This is cheap",
	context : [
		" is buying a can opener.",
		" is buying a toaster.",
		" is buying an oven."
	],
	prompt : [
		"What do you think was the price of the can opener?",
		"What do you think was the price of the toaster?",
		"What do you think was the price of the oven?"
	],
	sub : [
		"can openers",
		"toasters",
		"ovens"
	],
	super: [
		"appliances",
		"appliances",
		"appliances"
	],
	degree : "price",
	unit : ["dollars"],
	subunit : ["none"]
}, {
	target : "It's long",
	context : [
		// " was talking about the episode of the television show they just watched.",
		// " was talking about the informercial they just watched.", // with informercial, it seems to be a statement meaning "Long, relative to how long informercials SHOULD be" [see 20160106.txt notes]
		" is about to show their friend a TV ad on YouTube.",
		" is about to show their friend a music video on YouTube.",
		" is about to show their friend a lecture on YouTube."
		// " is about to show their friend an episode of a TV show.",
		// " is about to show their friend a movie."
	],
	prompt : [
		// "What do you think was the duration of the television show?",
		"What do you think was the duration of the TV ad?",
		"What do you think was the duration of the music video?",
		"What do you think was the duration of the lecture?"
		// "What do you think was the duration of the movie?",
		// "What do you think was the duration of the television series?"
	],
	sub: [
		"TV ads",
		"music videos",
		"lectures"
	],
	super: [
		"things you watch on YouTube",
		"things you watch on YouTube",
		"things you watch on YouTube"
	],
	degree : "time",
	unit : ["seconds", "minutes", "hours", "days"],
	subunit : ["seconds", "minutes", "hours"]
}, {
	target : "It's short", // needs help
	context : [
		// " was talking about the episode of the television show they just watched.",
		// " was talking about the informercial they just watched.", // with informercial, it seems to be a statement meaning "Long, relative to how long informercials SHOULD be" [see 20160106.txt notes]
		" is about to show their friend a TV ad on YouTube.",
		" is about to show their friend a music video on YouTube.",
		" is about to show their friend a lecture on YouTube."
		// " is about to show their friend an episode of a TV show.",
		// " is about to show their friend a movie."
	],
	prompt : [
		// "What do you think was the duration of the television show?",
		"What do you think was the duration of the TV ad?",
		"What do you think was the duration of the music video?",
		"What do you think was the duration of the lecture?"
		// "What do you think was the duration of the movie?",
		// "What do you think was the duration of the television series?"
	],
	sub: [
		"TV ads",
		"music videos",
		"lectures"
	],
	super: [
		"things you watch on YouTube",
		"things you watch on YouTube",
		"things you watch on YouTube"
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
	target : " is tall",
	context : [
		" sees a professional gymnast.",
		" sees a professional soccer player.",
		" sees a professional basketball player."
	],
	prompt : [
		"What do you think is the height of the gymnast?",
		"What do you think is the height of the soccer player?",
		"What do you think is the height of the basketball player?"
	],
	sub: [
		"gymnasts",
		"soccer players",
		"basketball players"
	],
	super: [
		"people",
		"people",
		"people"
	],
	degree : "height",
	unit : ["feet", "meters"],
	subunit : ["inches", "centimeters"]
}, {
	target : " is short",
	context : [
		" sees a professional gymnast.",
		" sees a professional soccer player.",
		" sees a professional basketball player."
	],
	prompt : [
		"What do you think is the height of the gymnast?",
		"What do you think is the height of the soccer player?",
		"What do you think is the height of the basketball player?"
	],
	sub: [
		"gymnasts",
		"soccer players",
		"basketball players"
	],
	super: [
		"people",
		"people",
		"people"
	],
	degree : "height",
	unit : ["feet", "meters"],
	subunit : ["inches", "centimeters"]
}, {
	target : " is heavy",
	context : [
		" picks up a lime.",
		" picks up an apple.",
		" picks up a watermelon.",
	],
	prompt : [
		"What do you think is the weight of the lime?",
		"What do you think is the weight of the apple?",
		"What do you think is the weight of the watermelon?"
	],
	sub: [
		"limes",
		"apples",
		"watermelons"
	],
	super: [
		"fruit",
		"fruit",
		"fruit"
	],
	degree : "weight",
	unit : ["pounds", "kilograms"],
	subunit : ["ounces", "grams"]
}, {
	target : " is light",
	context : [
		" picks up a lime.",
		" picks up an apple.",
		" picks up a watermelon.",
	],
	prompt : [
		"What do you think is the weight of the lime?",
		"What do you think is the weight of the apple?",
		"What do you think is the weight of the watermelon?"
	],
	sub: [
		"limes",
		"apples",
		"watermelons"
	],
	super: [
		"fruit",
		"fruit",
		"fruit"
	],
	degree : "weight",
	unit : ["pounds", "kilograms"],
	subunit : ["ounces", "grams"]
}];
