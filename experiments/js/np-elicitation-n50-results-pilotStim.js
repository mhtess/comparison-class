// the syntax and variable names are kept same as the file used in class-elicitation-free-3 experiment

// removing all the responses including ethnicity or potentially not pc conform
var examples = [

  // ---------  DARKNESS: DARK - LIGHT (10) -----------

    {
        worker_id: "1",
        stim_id: "9",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "birds",
        positive: "seagull",
        neither_nor: "parrot",
        negative: "crow",
        pronoun: "It",
        context: "PERSON is going for a walk and notices the color of a PHRASE.",

    },
    {
        worker_id: "5",
        stim_id: "13",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "times of day",
        positive: "day",
        neither_nor: "dusk",
        negative: "night",
        pronoun: "It",
        context: "PERSON steps outside during the PHRASE.",
        environment_mod: "out here"
    },
// --------- HARDNESS : HARD -SOFT (10) -----------


    {
        worker_id: "14",
        stim_id: "5",
        degree: "hardness",
        adj_positive: "hard",
        adj_negative: "soft",
        superordinate: "sweets",
        positive: "jolly rancher",
        neither_nor: "piece of chocolate",
        negative: "marshmallow",
        pronoun: "It",
        context: "PERSON is eating a PHRASE."
    },
    {
        worker_id: "15",
        stim_id: "3",
        degree: "hardness",
        adj_positive: "hard",
        adj_negative: "soft",
        superordinate: "floor materials",
        positive: "tile",
        neither_nor: "wood",
        negative: "carpet",
        pronoun: "It",
        context: "PERSON steps into a room with a PHRASE floor."
    },

// -------- HEIGHT : TALL - SHORT (9) -----------


    {
        worker_id: "21",
        stim_id: "6",
        degree: "height",
        adj_positive: "tall",
        adj_negative: "short",
        superordinate: "animals",
        positive: "giraffe",
        neither_nor: "monkey",
        negative: "bird",
        pronoun: "It",
        context: "PERSON is at a zoo and looks at a PHRASE."
    },
    {
        worker_id: "27",
        stim_id: "8",
        degree: "height",
        adj_positive: "tall",
        adj_negative: "short",
        superordinate: "athletes ",
        positive: "basketball player",
        neither_nor: "golfer",
        negative: "jockey",
        pronoun: "They",
        context: "PERSON sees a PHRASE."
    },
// ----------- DURATION / LENGTH : LONG - SHORT (10)----------

    {
        worker_id: "32",
        stim_id: "1",
        degree: "length_duration",
        adj_positive: "long",
        adj_negative: "short",
        superordinate: "dogs",
        positive: "dachshund",
        neither_nor: "bassett hound",
        negative: "chihuahua",
        pronoun: "It",
        context: "PERSON is at a pet store and notices the length of a PHRASE."
    },

    {
        worker_id: "35",
        stim_id: "15",
        degree: "length_duration",
        adj_positive: "long",
        adj_negative: "short",
        superordinate: "readings",
        positive: "novel",
        neither_nor: "story",
        negative: "poem",
        pronoun: "It",
        context: "PERSON thinks about reading PRO favorite PHRASE."
    },


// ------------ LOUDNESS : LOUD - / NOISY - QUIET (18) ----------

    {
        worker_id: "41",
        stim_id: "11",
        degree: "loudness",
        adj_positive: "loud",
        adj_negative: "quiet",
        superordinate: "animals",
        positive: "donkey",
        neither_nor: "dog",
        negative: "cat",
        pronoun: "It",
        context: "PERSON walks by a courtyard and hears a PHRASE."
    },


    {
        worker_id: "50",
        stim_id: "13",
        degree: "loudness",
        adj_positive: "loud",
        adj_negative: "quiet",
        superordinate: "rooms",
        positive: "auditorium",
        neither_nor: "classroom",
        negative: "study hall",
        pronoun: "It",
        context: "PERSON walks into a school PHRASE.",
        environment_mod: "in here"
    },

// ------------ PRICE: EXPENSIVE - CHEAP (12) -----------


    {
        worker_id: "60",
        stim_id: "5",
        degree: "price",
        adj_positive: "expensive",
        adj_negative: "cheap",
        superordinate: "statues",
        positive: "platinum",
        neither_nor: "bronze",
        negative: "plastic",
        pronoun: "It",
        context: "PERSON is at a decoration shop and looks at a statue made of PHRASE."
    },
    {
         worker_id: "69",
         stim_id: "custom",
         degree: "price",
         positive: "bottle of top-shelf liquor",
         negative: "six-pack of beer",
         neither_nor: "bottle of wine",
         superordinate: "alcoholic drinks",
         adj_positive: "expensive",
         adj_negative: "cheap",
         pronoun: "It",
         context: "PERSON is at a liquor store and wants to buy a PHRASE."
     },



// -------------SIZE : BIG - SMALL (11) -------------

    {
        worker_id: "71",
        stim_id: "5",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "plants",
        positive: "tree",
        neither_nor: "bush",
        negative: "flower",
        pronoun: "It",
        context: "PERSON is at a gardening store and looks at a PHRASE."
    },
    {
        worker_id: "72",
        stim_id: "4",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "animals",
        positive: "elephant",
        neither_nor: "monkey",
        negative: "mouse",
        pre_positive: "an",
        pre_neutral: "a",
        pre_negative: "a",
        pronoun: "It",
        context: "PERSON is at the zoo and sees PRE PHRASE."
    },

// --------------- SPEED : QUICK / FAST - SLOW (1) -------------

    {
        worker_id: "82",
        stim_id: "11",
        degree: "speed",
        adj_positive: "quick",
        adj_negative: "slow",
        superordinate: "athletes",
        positive: "runner",
        neither_nor: "jogger",
        negative: "walker",
        pronoun: "They",
        context: "PERSON is in the park and sees a PHRASE."
    },
    {
        worker_id: "83",
        stim_id: "1",
        degree: "speed",
        adj_positive: "quick",
        adj_negative: "slow",
        superordinate: "animals",
        positive: "cheetah",
        neither_nor: "elephant",
        negative: "sloth",
        pre_positive: "a",
        pre_neutral: "an",
        pre_negative: "a",
        pronoun: "It",
        context: "PERSON is at the zoo and watches PRE PHRASE move."
    },

// -------------- STRENGTH : STRONG -WEAK (7)------------------

    {
        worker_id: "93",
        stim_id: "4",
        degree: "strength",
        adj_positive: "strong",
        adj_negative: "weak",
        superordinate: "people",
        positive: "adult",
        neither_nor: "teenager",
        negative: "child",
        pre_positive: "an",
        pre_neutral: "a",
        pre_negative: "a",
        pronoun: "They",
        context: "PERSON watches PRE PHRASE lift up a box."
    },

    {
        worker_id: "95",
        stim_id: "3",
        degree: "strength",
        adj_positive: "strong",
        adj_negative: "weak",
        superordinate: "storms",
        positive: "hurricane",
        neither_nor: "thunderstorm",
        negative: "rain",
        pronoun: "It",
        context: "PERSON is hearing about the PHRASE that is heading towards them."
    },
// ------------ TEMPERATURE : HOT / WARM - COLD (8) ---------
    {
        worker_id: "100",
        stim_id: "3",
        degree: "temperature",
        adj_positive: "warm",
        adj_negative: "cold",
        superordinate: "food",
        positive: "soup",
        neither_nor: "salad",
        negative: "ice cream",
        pronoun: "It",
        context: "PERSON takes the first bite of PRO PHRASE."
    },
    {
        worker_id: "102",
        stim_id: "14",
        degree: "temperature",
        adj_positive: "warm",
        adj_negative: "cold",
        superordinate: "seasons",
        positive: "summer",
        neither_nor: "fall",
        negative: "winter",
        pronoun: "It",
        context: "PERSON steps outside on a day in PHRASE."
    },

// ------ WEIGHT: HEAVY - LIGHT (10)-------------
    {
        worker_id: "108",
        stim_id: "4",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "animals",
        positive: "elephant",
        neither_nor: "dog",
        negative: "fish",
        pre_neutral: "a",
        pre_positive: "an",
        pre_negative: "a",
        pronoun: "It",
        context: "PERSON is at the zoo and watches PRE PHRASE being lifted."
    },
    {
        worker_id: "109",
        stim_id: "7",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "people",
        positive: "adult",
        neither_nor: "kid",
        negative: "baby",
        pre_positive: "an",
        pre_negative: "a",
        pre_neutral: "a",
        pronoun: "They",
        context: "PERSON lifts up PRE PHRASE."
    },


// --------- WIDTH: WIDE - NARROW (6)

    {
        worker_id: "118",
        stim_id: "9",
        degree: "width",
        adj_positive: "wide",
        adj_negative: "narrow",
        superordinate: "holes",
        positive: "cave",
        neither_nor: "cavern",
        negative: "fox hole",
        pronoun: "It",
        context: "PERSON is in a forest and sees a PHRASE."
    },
    {
        worker_id: "119",
        stim_id: "2",
        degree: "width",
        adj_positive: "wide",
        adj_negative: "narrow",
        superordinate: "roads",
        positive: "highway",
        neither_nor: "downtown street",
        negative: "side road",
        pronoun: "It",
        context: "PERSON is driving on a PHRASE.",
        environment_mod: "here"
    }
]
