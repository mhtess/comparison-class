// examples stores the target sentences and an array of their corresponding context sentences
var examples = [
{
	// warm and cold are not super context sensitive because of perception
	// the best example is of people from different places
	target : "It's warm",
	context : [
		" takes a sip from a cup of coffee.",
		" takes a sip from a glass of milk.",
		" takes a sip from a cup of iced coffee."
	],
	prompt : [
		"What do you think was the temperature of the cup of coffee?",
		"What do you think was the temperature of the glass of milk?",
		"What do you think was the temperature of the iced coffee?"
	],
	sub : [
		"cups of coffee",
		"glasses of milk",
		"cups of iced coffee"
	],
	super : [
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
		" takes a sip from a cup of coffee.",
		" takes a sip from a glass of milk.",
		" takes a sip from a cup of iced coffee."
	],
	prompt : [
		"What do you think was the temperature of the cup of coffee?",
		"What do you think was the temperature of the glass of milk?",
		"What do you think was the temperature of the iced coffee?"
	],
	sub : [
		"cups of coffee",
		"glasses of milk",
		"cups of iced coffee"
	],
	super : [
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
	target : "This is expensive",
	context : [
		" is buying a lollipop.",
		" is buying an ice cream cone.",
		" is buying a box of chocolates from the local chocolatier."
	],
	prompt : [
		"What do you think was the price of the candy bar?",
		"What do you think was the price of the ice cream cone?",
		"What do you think was the price of the box of chocolates?"
	],
	sub : [
		"lollipops",
		"ice cream cones",
		"boxes of chocolate from the local chocolatier"
	],
	super: [
		"treats",
		"treats",
		"treats"
	],
	degree : "price",
	unit : ["dollars"],
	subunit : ["none"]
}, {
	target : "This is cheap",
	context : [
		" is buying a lollipop.",
		" is buying an ice cream cone.",
		" is buying a box of chocolates from the local chocolatier."
	],
	prompt : [
		"What do you think was the price of the candy bar?",
		"What do you think was the price of the ice cream cone?",
		"What do you think was the price of the box of chocolates?"
	],
	sub : [
		"lollipops",
		"ice cream cones",
		"boxes of chocolate from the local chocolatier"
	],
	super: [
		"treats",
		"treats",
		"treats"
	],
	degree : "price",
	unit : ["dollars"],
	subunit : ["none"]
}, {
	target : "That was long",
	context : [
		// " was talking about the episode of the television show they just watched.",
		// " was talking about the informercial they just watched.", // with informercial, it seems to be a statement meaning "Long, relative to how long informercials SHOULD be" [see 20160106.txt notes]
		" just finished watching a youtube video.",
		" just finished watching a movie.",
		" just finished watching a season of a television show."
	],
	prompt : [
		// "What do you think was the duration of the television show?",
		"What do you think was the duration of the youtube video?",
		"What do you think was the duration of the movie?",
		"What do you think was the duration of the season of television?"
	],
	sub: [
		// "television shows",
		"youtube videos",
		"movies",
		"television seasons"
	],
	super: [
		"entertainment",
		"entertainment",
		"entertainment"
	],
	degree : "time",
	unit : ["seconds", "minutes", "hours", "days"],
	subunit : ["seconds", "minutes", "hours"]
}, {
	target : "That was short", // needs help
	context : [
		// " was talking about the episode of the television show they just watched.",
		// " was talking about the informercial they just watched.", // with informercial, it seems to be a statement meaning "Long, relative to how long informercials SHOULD be" [see 20160106.txt notes]
		" just finished watching a youtube video.",
		" just finished watching a movie.",
		" just finished watching a season of a television show."
	],
	prompt : [
		// "What do you think was the duration of the television show?",
		"What do you think was the duration of the youtube video?",
		"What do you think was the duration of the movie?",
		"What do you think was the duration of the season of television?"
	],
	sub: [
		// "television shows",
		"youtube videos",
		"movies",
		"television seasons"
	],
	super: [
		"entertainment",
		"entertainment",
		"entertainment"
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
		" sees a 4 year-old boy.",
		" sees a 35 year-old man.",
		" sees a professional basketball player."
	],
	prompt : [
		"What do you think is the height of the 4 year-old boy?",
		"What do you think is the height of the 35 year-old man?",
		"What do you think is the height of the basketball player?"
	],
	sub: [
		"4 year-old boys",
		"men in their 30s",
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
		" sees a 4 year-old boy.",
		" sees a 35 year-old man.",
		" sees a professional basketball player."
	],
	prompt : [
		"What do you think is the height of the 4 year-old boy?",
		"What do you think is the height of the 35 year-old man?",
		"What do you think is the height of the basketball player?"
	],
	sub: [
		"4 year-old boys",
		"men in their 30s",
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
		" is buying an iPod shuffle and lifts it up.",
		" is buying an iPhone and lifts it up.",
		" is buying an iPad and lifts it up.",
		" is buying an Apple Laptop (MacBook) and lifts it up."
	],
	prompt : [
		"What do you think is the weight of the iPod shuffle?",
		"What do you think is the weight of the iPhone?",
		"What do you think is the weight of the iPad?",
		"What do you think is the weight of the Apple Laptop (MacBook)?"
	],
	sub: [
		"digital music players",
		"phones",
		"tablet computers",
		"laptop computers"
	],
	super: [
		"personal electronics",
		"personal electronics",
		"personal electronics",
		"personal electronics"
	],
	degree : "weight",
	unit : ["pounds", "kilograms"],
	subunit : ["ounces", "grams"]
}, {
	target : " is light",
	context : [
		" is buying an iPod shuffle and lifts it up.",
		" is buying an iPhone and lifts it up.",
		" is buying an iPad and lifts it up.",
		" is buying an Apple Laptop (MacBook) and lifts it up."
	],
	prompt : [
		"What do you think is the weight of the iPod shuffle?",
		"What do you think is the weight of the iPhone?",
		"What do you think is the weight of the iPad?",
		"What do you think is the weight of the Apple Laptop (MacBook)?"
	],
	sub: [
		"digital music players",
		"phones",
		"tablet computers",
		"laptop computers"
	],
	super: [
		"personal electronics",
		"personal electronics",
		"personal electronics",
		"personal electronics"
	],
	degree : "weight",
	unit : ["pounds", "kilograms"],
	subunit : ["ounces", "grams"]
}];
