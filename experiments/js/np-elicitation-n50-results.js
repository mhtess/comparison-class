// the syntax and variable names are kept same as the file used in class-elicitation-free-3 experiment

// removing all the responses including ethnicity or potentially not pc conform

// if we find highly consistent responses on an item part-way through data collection
// we will remove the stimulus from the set

//     {degree: "darkness", adj: "dark", np: "parrot"},
//     {degree: "darkness", adj: "dark", np: "seagull"}

var examples = [

  // ---------  DARKNESs: DARK - LIGHT (9) -----------

    {
        stim_id: "1",
        author_id: "9",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "birds",
        high: "seagull",
        medium: "parrot",
        low: "crow",
        pronoun: "It",
        context: "PERSON is going for a walk and notices the color of a PHRASE.",

    },
    {
        stim_id: "2",
        author_id: "9",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "paint",
        high: "white paint",
        medium: "blue paint",
        low: "black paint",
        pronoun: "It",
        context: "PERSON bought a can of PHRASE and is testing it for the first time."
    },
    {
        stim_id: "3",
        author_id: "15",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "cakes",
        high: "cheesecake",
        medium: "fruit cake",
        low: "chocolate cake",
        pronoun: "It",
        context: "PERSON is at a bakery and looks at the color of a PHRASE."
    },
    // {
    //     stim_id: "4",
    //     author_id: "6",
    //     degree: "darkness",
    //     adj_positive: "light",
    //     adj_negative: "dark",
    //     superordinate: "fruit",
    //     high: "orange",
    //     medium: "apple",
    //     low: "plum",
    //     pre_high: "an",
    //     pre_low: "a",
    //     pre_medium: "an",
    //     pronoun: "It",
    //     context: "PERSON is at a grocery store and looks at the color of PRE PHRASE."
    // },
    {
        stim_id: "4",
        author_id: "13",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "times of day",
        high: "day",
        medium: "dusk",
        low: "night",
        pronoun: "It",
        context: "PERSON steps outside during the PHRASE.",
        environment_mod: "out here"
    },
    {
        stim_id: "5",
        author_id: "3",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "writing utensils",
        high: "piece of chalk",
        medium: "pen",
        low: "pencil",
        pronoun: "It",
        context: "PERSON is writing with a PHRASE and notices the color of the script."
    },
    // {
    //     stim_id: "7",
    //     author_id: "2",
    //     degree: "darkness",
    //     adj_positive: "light",
    //     adj_negative: "dark",
    //     superordinate: "roads",
    //     high: "highway",
    //     medium: "main road",
    //     low: "back road",
    //     pronoun: "It",
    //     context: "PERSON is driving in the evening on a PHRASE.",
    //     environment_mod: "out here"
    // },
    {
        stim_id: "6",
        author_id: "9",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "flowers",
        high: "daisy",
        medium: "rose",
        low: "dahlia",
        pronoun: "It",
        context: "PERSON is creating a flower bouquet and picks out a PHRASE."
    },
    {
        stim_id: "7",
        author_id: "2",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "dogs",
        high: "poodle",
        medium: "spaniel",
        low: "pitbull",
        pronoun: "It",
        context: "PERSON takes a walk and notices the coat of a PHRASE."
    },
    {
        stim_id: "8",
        author_id: "3",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "animals",
        high: "jaguar",
        medium: "tiger",
        low: "panther",
        pronoun: "It",
        context: "PERSON is at a zoo and notices the fur color of a PHRASE."
    },

// --------- HARDNESS : HARD -SOFT (10) -----------

    {
        stim_id: "9",
        author_id: "3",
        degree: "hardness",
        adj_positive: "hard",
        adj_negative: "soft",
        superordinate: "vegetables",
        high: "cucumber",
        medium: "tomato",
        low: "mushroom",
        pronoun: "It",
        context: "PERSON is at a vegetable market and picks up a PHRASE."
    },
    // {
    //     stim_id: "12",
    //     author_id: "6",
    //     degree: "hardness",
    //     adj_positive: "hard",
    //     adj_negative: "soft",
    //     superordinate: "fruit",
    //     high: "watermelon",
    //     medium: "plum",
    //     low: "grape",
    //     pronoun: "It",
    //     context: "PERSON is at a farmer's market and picks up a PHRASE."
    // },
    // {
    //     stim_id: "13",
    //     author_id: "10",
    //     degree: "hardness",
    //     adj_positive: "hard",
    //     adj_negative: "soft",
    //     superordinate: "food",
    //     high: "apple",
    //     medium: "bread",
    //     low: "ice cream",
    //     pre_high: "an",
    //     pre_medium: "",
    //     pre_low: "",
    //     pronoun: "It",
    //     context: "PERSON takes a bite of PRE PHRASE."
    // },
    {
        stim_id: "10",
        author_id: "5",
        degree: "hardness",
        adj_positive: "hard",
        adj_negative: "soft",
        superordinate: "candies",
        high: "jolly rancher",
        medium: "piece of chocolate",
        low: "marshmallow",
        pronoun: "It",
        context: "PERSON is eating a PHRASE."
    },
    {
        stim_id: "11",
        author_id: "3",
        degree: "hardness",
        adj_positive: "hard",
        adj_negative: "soft",
        superordinate: "floors",
        high: "tile",
        medium: "wood",
        low: "carpet",
        pronoun: "It",
        context: "PERSON steps onto the PHRASE floor of a room."
    },
    // {
    //     stim_id: "16",
    //     author_id: "7",
    //     degree: "hardness",
    //     adj_positive: "hard",
    //     adj_negative: "soft",
    //     superordinate: "furniture",
    //     high: "chair",
    //     medium: "bed",
    //     low: "sofa",
    //     pronoun: "It",
    //     context: "PERSON sits down on a PHRASE."
    // },
    {
        stim_id: "12",
        author_id: "3",
        degree: "hardness",
        adj_positive: "hard",
        adj_negative: "soft",
        superordinate: "fruit",
        high: "melon",
        medium: "mango",
        low: "banana",
        pronoun: "It",
        context: "PERSON picks up a PHRASE."
    },
    {
        stim_id: "13",
        author_id: "11",
        degree: "hardness",
        adj_positive: "hard",
        adj_negative: "soft",
        superordinate: "materials",
        high: "wood",
        medium: "plastic",
        low: "cotton",
        pronoun: "It",
        context: "PERSON is at a hardware store and picks up a piece of PHRASE."
    },
    {
        stim_id: "14",
        author_id: "14",
        degree: "hardness",
        adj_positive: "hard",
        adj_negative: "soft",
        superordinate: "furniture",
        high: "bedboard",
        medium: "blanket",
        low: "pillow",
        pronoun: "It",
        context: "PERSON is in PRO bedroom and sits on a PHRASE."
    },
    // {
    //     stim_id: "20",
    //     author_id: "12",
    //     degree: "hardness",
    //     adj_positive: "hard",
    //     adj_negative: "soft",
    //     superordinate: "materials",
    //     high: "granite",
    //     medium: "wood",
    //     low: "fabric",
    //     pronoun: "It",
    //     context: "PERSON is examining building materials to renovate PRO place and touches some PHRASE."
    // },

// -------- HEIGHT : TALL - SHORT (9) -----------


    {
        stim_id: "15",
        author_id: "6",
        degree: "height",
        adj_positive: "tall",
        adj_negative: "short",
        superordinate: "animals",
        high: "giraffe",
        medium: "monkey",
        low: "penguin",
        pronoun: "It",
        context: "PERSON is at a zoo and looks at a PHRASE."
    },
    // {
    //     stim_id: "22",
    //     author_id: "2",
    //     degree: "height",
    //     adj_positive: "tall",
    //     adj_negative: "short",
    //     superordinate: "plants",
    //     high: "tree",
    //     medium: "bush",
    //     low: "flower",
    //     pronoun: "It",
    //     context: "PERSON takes a walk in a garden and sees a PHRASE."
    // },
    {
        stim_id: "16",
        author_id: "7",
        degree: "height",
        adj_positive: "tall",
        adj_negative: "short",
        superordinate: "buildings",
        high: "skyscraper",
        medium: "apartment building",
        low: "strip mall",
        pre_high: "a",
        pre_low: "a",
        pre_medium:"an",
        pronoun: "It",
        context: "PERSON is looking at PRE PHRASE."
    },
    { // MH: make sure this works
        stim_id: "17",
        author_id: "15",
        degree: "height",
        adj_positive: "tall",
        adj_negative: "short",
        superordinate: "people",
        high: "adult",
        medium: "teenager",
        low: "child",
        pre_high: "an",
        pre_medium: "a",
        pre_low:"a",
        pronoun: "They",
        context: "PERSON sees PRE PHRASE."
    },
    {
        stim_id: "18",
        author_id: "6",
        degree: "height",
        adj_positive: "tall",
        adj_negative: "short",
        superordinate: "flowers",
        high: "sunflower",
        medium: "tulip",
        low: "pansy",
        pronoun: "It",
        context: "PERSON is looking at a PHRASE."
    },
    // {
    //     stim_id: "26",
    //     author_id: "2",
    //     degree: "height",
    //     adj_positive: "tall",
    //     adj_negative: "short",
    //     superordinate: "plants",
    //     high: "pine tree",
    //     medium: "vine",
    //     low: "shrub",
    //     pronoun: "It",
    //     context: "PERSON is in a park and sees a PHRASE."
    // },
    {
        stim_id: "19",
        author_id: "8",
        degree: "height",
        adj_positive: "tall",
        adj_negative: "short",
        superordinate: "people",
        high: "basketball player",
        medium: "golfer",
        low: "jockey",
        pronoun: "They",
        context: "PERSON sees a PHRASE."
    },
    {
      stim_id: "20",
      author_id: "custom",
      degree: "height",
      high: "redwood tree",
      low: "bonsai tree",
      medium: "alpine tree",
      pre_high: "a",
      pre_low:"a",
      pre_medium: "an",
      superordinate: "trees",
      adj_positive: "tall",
      adj_negative: "short",
      pronoun: "It",
      context: "PERSON is walking in a botanical garden and sees PRE PHRASE."
    },
    // {
    //   stim_id: "29",
    //   author_id: "custom",
    //   degree: "height",
    //   high: "dinosaur skeleton",
    //   medium: "statue",
    //   low: "doll",
    //   superordinate: "exhibits",
    //   adj_positive: "tall",
    //   adj_negative: "short",
    //   pronoun: "It",
    //   context: "PERSON is at a museum and sees a PHRASE."
    // },


// ----------- DURATION / LENGTH : LONG - SHORT (10)----------

    // {
    //     stim_id: "30",
    //     author_id: "3",
    //     degree: "length_duration",
    //     adj_positive: "long",
    //     adj_negative: "short",
    //     superordinate: "pants",
    //     high: "slacks",
    //     medium: "capris",
    //     low: "shorts",
    //     pronoun: "They",
    //     context: "PERSON is shopping and looks at a pair of PHRASE."
    // },
    // {
    //     stim_id: "31",
    //     author_id: "3",
    //     degree: "length_duration",
    //     adj_positive: "long",
    //     adj_negative: "short",
    //     superordinate: "cars",
    //     high: "limousine",
    //     medium: "sedan",
    //     low: "compact car",
    //     pronoun: "It",
    //     context: "PERSON lives in a city and sees a PHRASE pass by."
    // },
    {
        stim_id: "21",
        author_id: "1",
        degree: "length_duration",
        adj_positive: "long",
        adj_negative: "short",
        superordinate: "dogs",
        high: "dachshund",
        medium: "bassett hound",
        low: "chihuahua",
        pronoun: "It",
        context: "PERSON is at a pet store and notices the length of a PHRASE."
    },
    {
        stim_id: "22",
        author_id: "15",
        degree: "length_duration",
        adj_positive: "long",
        adj_negative: "short",
        superordinate: "pets",
        high: "snake",
        medium: "hamster",
        low: "mouse",
        pronoun: "It",
        context: "PERSON is at a friend's house and notices the size of PRO pet PHRASE."
    },

    {
        stim_id: "23",
        author_id: "15",
        degree: "length_duration",
        adj_positive: "long",
        adj_negative: "short",
        superordinate: "readings",
        high: "novel",
        medium: "story",
        low: "poem",
        pronoun: "It",
        context: "PERSON thinks about reading PRO favorite PHRASE."
    },
    {
        stim_id: "24",
        author_id: "7",
        degree: "length_duration",
        adj_positive: "long",
        adj_negative: "short",
        superordinate: "vehicles",
        high: "limousine",
        medium: "pick-up truck",
        low: "smartcar",
        pronoun:"It",
        context: "PERSON sees a friend driving a PHRASE."
    },
    {
        stim_id: "25",
        author_id: "14",
        degree: "length_duration",
        adj_positive: "long",
        adj_negative: "short",
        superordinate: "entertainment",
        high: "movie",
        medium: "documentary",
        low: "sitcom",
        pronoun: "It",
        context: "PERSON thinks about watching PRO favorite PHRASE."
    },
    {
        stim_id: "26",
        author_id: "1",
        degree: "length_duration",
        adj_positive: "long",
        adj_negative: "short",
        superordinate: "roads",
        high: "highway",
        medium: "street",
        low: "alley",
        pre_medium: "a",
        pre_low: "an",
        pre_high: "a",
        pronoun: "It",
        context: "PERSON is looking at PRE PHRASE on Google Maps."
    },
    {
        stim_id: "27",
        author_id: "3",
        degree: "length_duration",
        adj_positive: "long",
        adj_negative: "short",
        superordinate: "races",
        high: "triathlon race",
        medium: "relay race",
        low: "sprinting race",
        pronoun: "It",
        context: "PERSON looks up information about an upcoming PHRASE."
    },
    {
      stim_id: "28",
      author_id: "custom",
      degree: "length_duration",
      high: "opera",
      low: "song",
      medium: "podcast episode",
      superordinate: "audios",
      pre_high: "an",
      pre_low: "a",
      pre_medium: "a",
      adj_positive: "long",
      adj_negative: "short",
      pronoun: "It",
      context: "PERSON is considering listening to PRO favorite PHRASE."
    },


// ------------ LOUDNESS : LOUD - / NOISY - QUIET (18) ----------

    // {
    //     stim_id: "41",
    //     author_id: "11",
    //     degree: "loudness",
    //     adj_positive: "loud",
    //     adj_negative: "quiet",
    //     superordinate: "animals",
    //     high: "donkey",
    //     medium: "dog",
    //     low: "cat",
    //     pronoun: "It",
    //     context: "PERSON walks by a courtyard and hears a PHRASE."
    // },
    {
        stim_id: "29",
        author_id: "7",
        degree: "loudness",
        adj_positive: "loud",
        adj_negative: "quiet",
        superordinate: "concerts",
        high: "rock concert",
        medium: "rap concert",
        low: "choral concert",
        pronoun: "It",
        context: "PERSON is listening to a PHRASE."
    },
    {
        stim_id: "30",
        author_id: "8",
        degree: "loudness_n",
        adj_positive: "noisy",
        adj_negative: "quiet",
        superordinate: "venue",
        high: "party",
        medium: "conference center",
        low: "church",
        pronoun: "It",
        context: "PERSON meets a friend at a PHRASE.",
        environment_mod: "in here"
    },
    {
        stim_id: "31",
        author_id: "7",
        degree: "loudness_n",
        adj_positive: "loud",
        adj_negative: "quiet",
        superordinate: "pets",
        high: "parrot",
        medium: "cat",
        low: "fish",
        pronoun: "It",
        context: "PERSON is at a friend's place and hears PRO pet PHRASE."
    },
    {
        stim_id: "32",
        author_id: "6",
        degree: "loudness_n",
        adj_positive: "noisy",
        adj_negative: "quiet",
        superordinate: "venues",
        high: "concert",
        medium: "restaurant",
        low: "library",
        pronoun: "It",
        context: "PERSON is spending PRO Saturday night at a PHRASE.",
        environment_mod: "in here"
    },
    {
        stim_id: "33",
        author_id: "1",
        degree: "loudness_n",
        adj_positive: "loud",
        adj_negative: "quiet",
        superordinate: "birds",
        high: "rooster",
        medium: "crow",
        low: "finch",
        pronoun: "It",
        context: "PERSON is taking a walk in a park and hears the cry of a PHRASE."
    },
    {
        stim_id: "34",
        author_id: "10",
        degree: "loudness_n",
        adj_positive: "loud",
        adj_negative: "quiet",
        superordinate: "instruments",
        high: "horn",
        medium: "guitar",
        low: "harp",
        pronoun: "It",
        context: "PERSON is listening to a friend playing the PHRASE."
    },
    {
        stim_id: "35",
        author_id: "2",
        degree: "loudness",
        adj_positive: "loud",
        adj_negative: "quiet",
        superordinate: "people",
        high: "baby",
        medium: "teenager",
        low: "adult",
        pre_high: "a",
        pre_medium: "a",
        pre_low: "an",
        pronoun: "They",
        context: "PERSON is in a room with PRE PHRASE."
    },
    {
        stim_id: "36",
        author_id: "15",
        degree: "loudness_n",
        adj_positive: "noisy",
        adj_negative: "quiet",
        superordinate: "places",
        high: "city",
        medium: "town",
        low: "village",
        pronoun: "It",
        context: "PERSON is planning to move and reads about a nearby PHRASE.",
        environment_mod: "there"
    },
    // {
    //     stim_id: "50",
    //     author_id: "13",
    //     degree: "loudness",
    //     adj_positive: "noisy",
    //     adj_negative: "quiet",
    //     superordinate: "rooms",
    //     high: "auditorium",
    //     medium: "classroom",
    //     low: "study hall",
    //     pronoun: "It",
    //     context: "PERSON walks into a school PHRASE.",
    //     environment_mod: "in here"
    // },
    // {
    //     stim_id: "51",
    //     author_id: "7",
    //     degree: "loudness",
    //     adj_positive: "loud",
    //     adj_negative: "quiet",
    //     superordinate: "animals",
    //     high: "elephant",
    //     medium: "flamingo",
    //     low: "snake",
    //     pre_medium: "a",
    //     pre_low: "a",
    //     pre_high: "an",
    //     pronoun: "It",
    //     context: "PERSON is at the zoo and walks by PRE PHRASE."
    // },
    // {
    //     stim_id: "52",
    //     author_id: "1",
    //     degree: "loudness",
    //     adj_positive: "loud",
    //     adj_negative: "quiet",
    //     superordinate: "instruments",
    //     high: "drum",
    //     medium: "violin",
    //     low: "flute",
    //     pronoun: "It",
    //     context: "PERSON hears a friend play the PHRASE."
    // },
    {
        stim_id: "37",
        author_id: "14",
        degree: "loudness_n",
        adj_positive: "loud",
        adj_negative: "quiet",
        superordinate: "vehicles",
        high: "tractor",
        medium: "car",
        low: "electric car",
        pre_high: "a",
        pre_medium: "a",
        pre_low: "an",
        pronoun: "It",
        context: "PERSON is on the sidewalk and hears PRE PHRASE drive by."
    },
    // {
    //     stim_id: "54",
    //     author_id: "2",
    //     degree: "loudness_n",
    //     adj_positive: "loud",
    //     adj_negative: "quiet",
    //     superordinate: "appliances",
    //     high: "vacuum cleaner",
    //     medium: "fan",
    //     low: "toaster",
    //     pronoun: "It",
    //     context: "PERSON is in PRO apartment and turns on a PHRASE."
    // },
    // {
    //     stim_id: "55",
    //     author_id: "11",
    //     degree: "loudness_n",
    //     adj_positive: "noisy",
    //     adj_negative: "quiet",
    //     superordinate: "rooms",
    //     high: "gymnasium",
    //     medium: "classroom",
    //     low: "library",
    //     pronoun: "It",
    //     context: "PERSON is sitting in a school PHRASE.",
    //     environment_mod: "in here"
    // },
    {
        stim_id: "38",
        author_id: "5",
        degree: "loudness",
        adj_positive: "loud",
        adj_negative: "quiet",
        superordinate: "birds",
        high: "mockingbird ",
        medium: "woodpecker",
        low: "owl",
        pre_high: "a",
        pre_medium: "a",
        pre_low: "an",
        pronoun: "It",
        context: "PERSON is in a forest and hears a PHRASE."
    },
    {
        stim_id: "39",
        author_id: "7",
        degree: "loudness_n",
        adj_positive: "loud",
        adj_negative: "quiet",
        superordinate: "boats",
        high: "powerboat",
        medium: "sailboat",
        low: "rowboat",
        pronoun: "It",
        context: "PERSON is at a lake and hears the sound of a PHRASE."
    },
    {
        stim_id: "40",
        author_id: "10",
        degree: "loudness",
        adj_positive: "loud",
        adj_negative: "quiet",
        superordinate: "guitars",
        high: "bass guitar",
        medium: "acoustic guitar",
        low: "ukelele",
        pre_high: "a",
        pre_medium: "an",
        pre_low: "an",
        pronoun: "It",
        context: "PERSON wants to play music and tries out PRE PHRASE."
    },



// ------------ PRICE: EXPENSIVE - CHEAP (12) -----------

    // {
    //     stim_id: "59",
    //     author_id: "3",
    //     degree: "price",
    //     adj_positive: "expensive",
    //     adj_negative: "cheap",
    //     superordinate: "vehicles",
    //     high: "car",
    //     medium: "motorcycle",
    //     low: "bike",
    //     pronoun: "It",
    //     context: "PERSON considers buying a PHRASE for PRO commute."
    // },
    {
        stim_id: "41",
        author_id: "5",
        degree: "price",
        adj_positive: "expensive",
        adj_negative: "cheap",
        superordinate: "statues",
        high: "platinum",
        medium: "bronze",
        low: "plastic",
        pronoun: "It",
        context: "PERSON is at a decoration shop and looks at a statue made of PHRASE."
    },
    {
        stim_id: "42",
        author_id: "6",
        degree: "price",
        adj_positive: "expensive",
        adj_negative: "cheap",
        superordinate: "rentals",
        high: "villa",
        medium: "house",
        low: "apartment",
        pre_high: "a",
        pre_medium: "a",
        pre_low: "an",
        pronoun: "It",
        context: "PERSON is looking to rent a new place and checks out PRE PHRASE."
    },
    // {
    //     stim_id: "62",
    //     author_id: "5",
    //     degree: "price",
    //     adj_positive: "expensive",
    //     adj_negative: "cheap",
    //     superordinate: "snacks",
    //     high: "berries",
    //     medium: "nuts",
    //     low: "candies",
    //     pronoun: "They",
    //     context: "PERSON is shopping for a snack and checks out some PHRASE."
    // },
    {
        stim_id: "43",
        author_id: "15",
        degree: "price",
        adj_positive: "expensive",
        adj_negative: "cheap",
        superordinate: "shoes",
        high: "boots",
        medium: "sneakers",
        low: "sandals",
        pronoun: "They",
        context: "PERSON is shopping for shoes and looks at a pair of PHRASE."
    },
    {
        stim_id: "44",
        author_id: "2",
        degree: "price",
        adj_positive: "expensive",
        adj_negative: "cheap",
        superordinate: "spices",
        high: "saffron",
        medium: "garlic",
        low: "salt",
        pronoun: "It",
        context: "PERSON is shopping for spices and looks at PHRASE."
    },
    {
        stim_id: "45",
        author_id: "7",
        degree: "price",
        adj_positive: "expensive",
        adj_negative: "cheap",
        superordinate: "bracelets",
        high: "gold",
        medium: "metal",
        low: "plastic",
        pronoun: "It",
        context: "PERSON wants to buy a bracelet and looks at one made of PHRASE."
    },
    {
        stim_id: "46",
        author_id: "7",
        degree: "price",
        adj_positive: "expensive",
        adj_negative: "cheap",
        superordinate: "clothes",
        high: "suit",
        medium: "coat",
        low: "shirt",
        pronoun: "It",
        context: "PERSON is clothing shopping and looks at a PHRASE."
    },
    {
        stim_id: "47",
        author_id: "15",
        degree: "price",
        adj_positive: "expensive",
        adj_negative: "cheap",
        superordinate: "berries",
        high: "boysenberries",
        medium: "raspberries",
        low: "strawberries",
        pronoun: "They",
        context: "PERSON is shopping for berries and looks at the price of PHRASE."
    },
    {
        stim_id: "48",
        author_id: "custom",
        degree: "price",
        high: "steak",
        low: "pork",
        medium: "chicken",
        superordinate: "meat",
        adj_positive: "expensive",
        adj_negative: "cheap",
        pronoun: "It",
        context: "PERSON is at the butchershop and looks at a piece of PHRASE."
    },
    {
         stim_id: "49",
         author_id: "custom",
         degree: "price",
         high: "bottle of top-shelf liquor",
         low: "six-pack of beer",
         medium: "bottle of wine",
         superordinate: "alcoholic drinks",
         adj_positive: "expensive",
         adj_negative: "cheap",
         pronoun: "It",
         context: "PERSON is at a liquor store and wants to buy a PHRASE."
     },
     {
          stim_id: "50",
          author_id: "custom",
          degree: "price",
          high: "Japanese restaurant",
          low: "Chinese restaurant",
          medium: "Korean restaurant",
          superordinate: "restaurants",
          adj_positive: "expensive",
          adj_negative: "cheap",
          pronoun: "It",
          context: "PERSON is considering different places for dinner and looks at the menu of a PHRASE."
      },



// -------------SIZE : BIG - SMALL (11) -------------

    {
        stim_id: "51",
        author_id: "5",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "plants",
        high: "tree",
        medium: "bush",
        low: "flower",
        pronoun: "It",
        context: "PERSON is at a gardening store and looks at a PHRASE."
    },
    {
        stim_id: "52",
        author_id: "4",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "animals",
        high: "elephant",
        medium: "monkey",
        low: "mouse",
        pre_high: "an",
        pre_medium: "a",
        pre_low: "a",
        pronoun: "It",
        context: "PERSON is at the zoo and sees PRE PHRASE."
    },
    {
        stim_id: "53",
        author_id: "10",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "insects",
        high: "spider",
        medium: "moth",
        low: "ant",
        pre_high: "a",
        pre_medium: "a",
        pre_low: "an",
        pronoun: "It",
        context: "PERSON is looking in an insect terrarium and sees PRE PHRASE."
    },
    // {
    //     stim_id: "74",
    //     author_id: "3",
    //     degree: "size",
    //     adj_positive: "big",
    //     adj_negative: "small",
    //     superordinate: "buildings",
    //     high: "skyscraper",
    //     medium: "townhouse",
    //     low: "doghouse",
    //     pronoun: "It",
    //     context: "PERSON is walking down the street and sees a PHRASE."
    // },
    {
        stim_id: "54",
        author_id: "3",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "fruit",
        high: "watermelon",
        medium: "peach",
        low: "kumquat",
        pronoun: "It",
        context: "PERSON is at a farmer's market and picks up a PHRASE."
    },
    {
        stim_id: "55",
        author_id: "2",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "fish",
        high: "shark",
        medium: "tuna",
        low: "herring",
        pronoun: "It",
        context: "PERSON is at an aquarium and sees a PHRASE."
    },
    {
        stim_id: "56",
        author_id: "3",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "vehicles",
        high: "truck",
        medium: "sedan",
        low: "smartcar",
        pronoun: "It",
        context: "PERSON sees PRO friend's new PHRASE."
    },
    {
        stim_id: "57",
        author_id: "7",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "appliances",
        high: "refrigerator",
        medium: "oven",
        low: "toaster",
        pre_high: "a",
        pre_medium: "an",
        pre_low: "a",
        pronoun: "It",
        context: "PERSON is shopping at an appliances store and looks at PRE PHRASE. "
    },
    {
        stim_id: "58",
        author_id: "12",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "dogs",
        high: "great dane",
        medium: "poodle",
        low: "chihuahua",
        pronoun: "It",
        context: "PERSON is taking a walk and sees a PHRASE."
    },
    // {
    //     stim_id: "80",
    //     author_id: "4",
    //     degree: "size",
    //     adj_positive: "big",
    //     adj_negative: "small",
    //     superordinate: "plants",
    //     high: "tree",
    //     medium: "cactus",
    //     low: "fern",
    //     pronoun: "It",
    //     context: "PERSON is at a botanical garden and sees a PHRASE."
    // },
    // {
    //     stim_id: "81",
    //     author_id: "11",
    //     degree: "size",
    //     adj_positive: "big",
    //     adj_negative: "small",
    //     superordinate: "vegetables",
    //     high: "pumpkin",
    //     medium: "squash",
    //     low: "zucchini",
    //     pronoun: "It",
    //     context: "PERSON is a grocery store and picks up a PHRASE."
    // },



// --------------- SPEED : QUICK (5) / FAST - SLOW (6) -------------

    {
        stim_id: "59",
        author_id: "11",
        degree: "speed",
        adj_positive: "fast",
        adj_negative: "slow",
        superordinate: "people",
        high: "runner",
        medium: "jogger",
        low: "walker",
        pronoun: "They",
        context: "PERSON is in the park and sees a PHRASE."
    },
    {
        stim_id: "60",
        author_id: "1",
        degree: "speed",
        adj_positive: "fast",
        adj_negative: "slow",
        superordinate: "animals",
        high: "cheetah",
        medium: "elephant",
        low: "sloth",
        pre_high: "a",
        pre_medium: "an",
        pre_low: "a",
        pronoun: "It",
        context: "PERSON is at the zoo and watches PRE PHRASE move."
    },
    {
        stim_id: "61",
        author_id: "3",
        degree: "speed",
        adj_positive: "quick",
        adj_negative: "slow",
        superordinate: "cookware",
        high: "instant pot",
        medium: "frying pan",
        low: "crockpot",
        pronoun: "It",
        pre_medium: "a",
        pre_high: "an",
        pre_low: "a",
        context: "PERSON wants to cook dinner and considers using PRE PHRASE."
    },
    {
        stim_id: "62",
        author_id: "1",
        degree: "speed_f",
        adj_positive: "fast",
        adj_negative: "slow",
        superordinate: "vehicles",
        high: "motorcycle",
        medium: "car",
        low: "truck",
        pronoun: "It",
        context: "PERSON sees a PHRASE on the highway."
    },
    {
        stim_id: "63",
        author_id: "12",
        degree: "speed_f",
        adj_positive: "fast",
        adj_negative: "slow",
        superordinate: "boats",
        high: "speedboat",
        medium: "sailboat",
        low: "rowboat",
        pronoun: "It",
        context: "PERSON is travelling on PRO friend's new PHRASE."
    },
    {
        stim_id: "64",
        author_id: "1",
        degree: "speed",
        adj_positive: "quick",
        adj_negative: "slow",
        superordinate: "pets",
        high: "rabbit",
        medium: "cat",
        low: "turtle",
        pronoun: "It",
        context: "PERSON is at a friend's house and sees their pet PHRASE come towards them."
    },
    // {
    //     stim_id: "88",
    //     author_id: "4",
    //     degree: "speed_f",
    //     adj_positive: "fast",
    //     adj_negative: "slow",
    //     superordinate: "reptiles",
    //     high: "snake",
    //     medium: "lizard",
    //     low: "turtle",
    //     pronoun: "It",
    //     context: "PERSON is at the zoo, watching a PHRASE."
    // },
    // {
    //     stim_id: "89",
    //     author_id: "12",
    //     degree: "speed_f",
    //     adj_positive: "fast",
    //     adj_negative: "slow",
    //     superordinate: "transportation",
    //     high: "plane",
    //     medium: "car",
    //     low: "bike",
    //     pronoun: "It",
    //     context: "PERSON want to go on vacation and thinks about travelling by PHRASE."
    // },
    // {
    //     stim_id: "90",
    //     author_id: "13",
    //     degree: "speed_f",
    //     adj_positive: "fast",
    //     adj_negative: "slow",
    //     superordinate: "athletes",
    //     high: "runner",
    //     medium: "skier",
    //     low: "weight lifter",
    //     pronoun: "They",
    //     context: "PERSON is watching a PHRASE jogging."
    // },
    {
        stim_id: "65",
        author_id: "14",
        degree: "speed",
        adj_positive: "quick",
        adj_negative: "slow",
        superordinate: "people",
        high: "adult",
        medium: "child",
        low: "elderly person",
        pre_high: "an",
        pre_medium: "a",
        pre_low: "a",
        pronoun: "They",
        context: "PERSON is taking a walk with PRE PHRASE."
    },
    {
        stim_id: "66",
        author_id: "10",
        degree: "speed_f",
        adj_positive: "fast",
        adj_negative: "slow",
        superordinate: "aircrafts",
        high: "plane",
        medium: "helicopter",
        low: "glider",
        pronoun: "It",
        context: "PERSON is at an airport and sees a PHRASE in the air."
    },



// -------------- STRENGTH : STRONG -WEAK (7)------------------

    {
        stim_id: "67",
        author_id: "4",
        degree: "strength",
        adj_positive: "strong",
        adj_negative: "weak",
        superordinate: "people",
        high: "adult",
        medium: "teenager",
        low: "child",
        pre_high: "an",
        pre_medium: "a",
        pre_low: "a",
        pronoun: "They",
        context: "PERSON watches PRE PHRASE lift up a box."
    },
    // {
    //     stim_id: "94",
    //     author_id: "10",
    //     degree: "strength",
    //     adj_positive: "strong",
    //     adj_negative: "weak",
    //     superordinate: "animals",
    //     high: "lion",
    //     medium: "dog",
    //     low: "mouse",
    //     pronoun: "It",
    //     context: "PERSON is at the zoo and looks at a PHRASE."
    // },
    {
        stim_id: "68",
        author_id: "3",
        degree: "strength",
        adj_positive: "strong",
        adj_negative: "weak",
        superordinate: "storms",
        high: "hurricane",
        medium: "thunderstorm",
        low: "rain shower",
        pronoun: "It",
        context: "PERSON is hearing about the PHRASE that is heading towards them."
    },
    {
        stim_id: "69",
        author_id: "14",
        degree: "strength",
        adj_positive: "strong",
        adj_negative: "weak",
        superordinate: "athletes",
        high: "wrestler",
        medium: "cyclist",
        low: "golfer",
        pronoun: "They",
        context: "PERSON is watching a PHRASE lift weights."
    },
    // {
    //     stim_id: "97",
    //     author_id: "9",
    //     degree: "strength",
    //     adj_positive: "strong",
    //     adj_negative: "weak",
    //     superordinate: "tree parts",
    //     high: "trunk",
    //     medium: "branch",
    //     low: "twig",
    //     pronoun: "It",
    //     context: "PERSON is in a forest and looks at a tree PHRASE."
    // },
    {
        stim_id:"70",
        author_id: "custom",
        degree: "strength",
        adj_positive: "strong",
        adj_negative: "weak",
        superordinate: "paints",
        high: "oil paint",
        medium: "wall paint",
        low: "watercolor",
        pronoun: "It",
        context: "PERSON is painting and tries a new PHRASE."
    },
    {
        stim_id: "71",
        author_id: "custom",
        degree: "strength",
        adj_positive: "strong",
        adj_negative: "weak",
        superordinate: "walls",
        high: "mansion",
        medium: "condo",
        low: "tent",
        pronoun: "They",
        context: "PERSON is examining the walls of a friend's new PHRASE."
    },


// ------------ TEMPERATURE : HOT / WARM - COLD (7) ---------
    {
        stim_id: "72",
        author_id: "3",
        degree: "temperature",
        adj_positive: "warm",
        adj_negative: "cold",
        superordinate: "food",
        high: "soup",
        medium: "salad",
        low: "ice cream",
        pronoun: "It",
        context: "PERSON takes the first bite of PRO PHRASE."
    },
    {
        stim_id: "73",
        author_id: "3",
        degree: "temperature_h",
        adj_positive: "hot",
        adj_negative: "cold",
        superordinate: "drinks",
        high: "coffee",
        medium: "juice",
        low: "milkshake",
        pronoun: "It",
        context: "PERSON takes the first sip from a PHRASE."
    },
    {
        stim_id: "74",
        author_id: "14",
        degree: "temperature",
        adj_positive: "warm",
        adj_negative: "cold",
        superordinate: "seasons",
        high: "summer",
        medium: "fall",
        low: "winter",
        pronoun: "It",
        context: "PERSON steps outside on a day in PHRASE."
    },

    {
        stim_id: "75",
        author_id: "12",
        degree: "temperature_h",
        adj_positive: "warm",
        adj_negative: "cold",
        superordinate: "locations",
        high: "oven",
        medium: "pantry",
        low: "freezer",
        pronoun: "It",
        context: "PERSON is in PRO kitchen and puts PRO hand in the PHRASE."
    },
    // {
    //     stim_id: "105",
    //     author_id: "15",
    //     degree: "temperature_h",
    //     adj_positive: "hot",
    //     adj_negative: "cold",
    //     superordinate: "drinks",
    //     high: "hot chocolate",
    //     medium: "tea",
    //     low: "soda",
    //     pronoun: "It",
    //     context: "PERSON takes the first sip of a PHRASE."
    // },
    {
        stim_id: "76",
        author_id: "custom",
        degree: "temperature_h",
        high: "sauna",
        low: "ice rink",
        medium: "shopping mall",
        pre_high: "a",
        pre_low: "an",
        pre_medium: "a",
        superordinate: "places",
        adj_positive: "hot",
        adj_negative: "cold",
        pronoun: "It",
        context: "PERSON is spending PRO Saturday at PRE PHRASE."
    },
    {
        stim_id: "77",
        author_id: "custom",
        degree: "temperature_h",
        high: "chocolate fondue",
        medium: "muffin",
        low: "smoothie",
        superordinate: "desserts",
        adj_positive: "hot",
        adj_negative: "cold",
        pronoun: "It",
        context: "PERSON is at a restaurant and takes a taste of a PHRASE. "
    },


// ------ WEIGHT: HEAVY - LIGHT (11)-------------
    {
        stim_id: "78",
        author_id: "4",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "animals",
        high: "elephant",
        medium: "monkey",
        low: "fish",
        pre_medium: "a",
        pre_high: "an",
        pre_low: "a",
        pronoun: "It",
        context: "PERSON is at the zoo and watches PRE PHRASE being lifted."
    },
    // {
    //     stim_id: "103",
    //     author_id: "4",
    //     degree: "weight",
    //     adj_positive: "heavy",
    //     adj_negative: "light",
    //     superordinate: "clothes",
    //     high: "sweater",
    //     medium: "flannel",
    //     low: "shirt",
    //     pronoun: "It",
    //     context: "PERSON is shopping for winter clothing and tries on a PHRASE."
    // },
    {
        stim_id: "79",
        author_id: "7",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "people",
        high: "adult",
        medium: "kid",
        low: "baby",
        pre_high: "an",
        pre_low: "a",
        pre_medium: "a",
        pronoun: "They",
        context: "PERSON lifts up PRE PHRASE."
    },
    {
        stim_id: "80",
        author_id: "1",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "electronic devices",
        high: "printer",
        medium: "laptop",
        low: "cell phone",
        pronoun: "It",
        context: "PERSON is at an electronics store and picks up a PHRASE."
    },
    {
        stim_id: "81",
        author_id: "12",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "furniture",
        high: "couch",
        medium: "chair",
        low: "trash can",
        pronoun: "It",
        context: "PERSON is helping a friend move and picks up their PHRASE."
    },
    {
        stim_id: "82",
        author_id: "1",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "objects",
        high: "rock",
        medium: "stick",
        low: "feather",
        pronoun: "It",
        context: "PERSON is walking outside and picks up a PHRASE."
    },
    // {
    //     stim_id: "113",
    //     author_id: "1",
    //     degree: "weight",
    //     adj_positive: "heavy",
    //     adj_negative: "light",
    //     superordinate: "materials",
    //     high: "wood",
    //     medium: "plastic",
    //     low: "paper",
    //     pronoun: "It",
    //     context: "PERSON is at a hardware store and picks up a piece of PHRASE."
    // },
    // {
    //     stim_id: "114",
    //     author_id: "12",
    //     degree: "weight",
    //     adj_positive: "heavy",
    //     adj_negative: "light",
    //     superordinate: "exercise equipment",
    //     high: "weight",
    //     medium: "kettle ball",
    //     low: "jump rope",
    //     pronoun: "It",
    //     context: "PERSON is at the gym and picks up a PHRASE."
    // },
    {
        stim_id: "83",
        author_id: "7",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "materials",
        high: "wool",
        medium: "cotton",
        low: "silk",
        pronoun: "It",
        context: "PERSON is at a craft shop and picks up a piece of PHRASE."
    },
    {
        stim_id: "84",
        author_id: "8",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "vehicles",
        high: "truck",
        medium: "motorcycle",
        low: "bike",
        pronoun: "It",
        context: "PERSON learns about the weight of a friend's new PHRASE."
    },
    {
        stim_id: "85",
        author_id: "10",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "fruit",
        high: "watermelon",
        medium: "orange",
        low: "plum",
        pronoun: "It",
        context: "PERSON is at a grocery store and picks up a PHRASE."
    },


// --------- WIDTH: WIDE - NARROW (6)

    {
        stim_id: "86",
        author_id: "9",
        degree: "width",
        adj_positive: "wide",
        adj_negative: "narrow",
        superordinate: "dens",
        high: "bear den",
        medium: "fox den",
        low: "mouse den",
        pronoun: "It",
        context: "PERSON is in a forest and sees a PHRASE."
    },
    {
        stim_id: "87",
        author_id: "2",
        degree: "width",
        adj_positive: "wide",
        adj_negative: "narrow",
        superordinate: "roads",
        high: "highway",
        medium: "downtown street",
        low: "side road",
        pronoun: "It",
        context: "PERSON is driving on a PHRASE."//,
        // environment_mod: "here"
    },
    {
        stim_id: "88",
        author_id: "10",
        degree: "width",
        adj_positive: "wide",
        adj_negative: "narrow",
        superordinate: "waterways",
        high: "river",
        medium: "stream",
        low: "creek",
        pronoun: "It",
        context: "PERSON is standing at the bank of a PHRASE."
    },
    {
        stim_id: "89",
        author_id: "4",
        degree: "width",
        adj_positive: "wide",
        adj_negative: "narrow",
        superordinate: "roads",
        high: "boulevard",
        medium: "street",
        low: "country lane",
        pre_high: "a",
        pre_medium: "a",
        pre_low: "a",
        pronoun: "It",
        context: "PERSON is walking on PRE PHRASE."//,
        // environment_mod: "out here"
    },
    // {
    //     stim_id: "122",
    //     author_id: "2",
    //     degree: "width",
    //     adj_positive: "wide",
    //     adj_negative: "narrow",
    //     superordinate: "vehicles",
    //     high: "truck",
    //     medium: "car",
    //     low: "golf cart",
    //     pronoun: "It",
    //     context: "PERSON sees a PHRASE on the road."
    // },
    {
      stim_id: "90",
      author_id: "custom",
      degree: "width",
      adj_positive: "wide",
      adj_negative: "narrow",
      superordinate: "doorways",
      high: "front gate",
      medium: "patio door",
      low: "back door",
      pronoun: "It",
      context: "PERSON is attempting to move furniture through the PHRASE of PRO house."
    }
]


var omitted_stimuli = [
  {
    "stim_id": "4",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 30
  },
  {
    "stim_id": "4",
    "np_expectations": "high",
    "adj_polarity": "positive",
    "n": 38
  },
  {
    "stim_id": "4",
    "np_expectations": "low",
    "adj_polarity": "negative",
    "n": 33
  },
  {
    "stim_id": "4",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 24
  },
  {
    "stim_id": "1",
    "np_expectations": "medium",
    "adj_polarity": "negative",
    "n": 36
  },
  {
    "stim_id": "5",
    "np_expectations": "high",
    "adj_polarity": "positive",
    "n": 39
  },
  {
    "stim_id": "8",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 36
  },
  {
    "stim_id": "8",
    "np_expectations": "medium",
    "adj_polarity": "positive",
    "n": 39
  },
  {
    "stim_id": "9",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 36
  },
  {
    "stim_id": "9",
    "np_expectations": "medium",
    "adj_polarity": "negative",
    "n": 33
  },
  {
    "stim_id": "9",
    "np_expectations": "medium",
    "adj_polarity": "positive",
    "n": 34
  },
  {
    "stim_id": "10",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 37
  },
  {
    "stim_id": "12",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 37
  },
  {
    "stim_id": "12",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 26
  },
  {
    "stim_id": "13",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 35
  },
  {
    "stim_id": "14",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 39
  },
  {
    "stim_id": "14",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 37
  },
  {
    "stim_id": "14",
    "np_expectations": "medium",
    "adj_polarity": "negative",
    "n": 41
  },
  {
    "stim_id": "15",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 38
  },
  {
    "stim_id": "15",
    "np_expectations": "medium",
    "adj_polarity": "positive",
    "n": 38
  },
  {
    "stim_id": "16",
    "np_expectations": "low",
    "adj_polarity": "negative",
    "n": 33
  },
  {
    "stim_id": "17",
    "np_expectations": "low",
    "adj_polarity": "negative",
    "n": 36
  },
  {
    "stim_id": "17",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 39
  },
  {
    "stim_id": "18",
    "np_expectations": "low",
    "adj_polarity": "negative",
    "n": 33
  },
  {
    "stim_id": "18",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 36
  },
  {
    "stim_id": "19",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 33
  },
  {
    "stim_id": "19",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 37
  },
  {
    "stim_id": "22",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 30
  },
  {
    "stim_id": "22",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 39
  },
  {
    "stim_id": "22",
    "np_expectations": "medium",
    "adj_polarity": "positive",
    "n": 37
  },
  {
    "stim_id": "23",
    "np_expectations": "low",
    "adj_polarity": "negative",
    "n": 39
  },
  {
    "stim_id": "23",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 41
  },
  {
    "stim_id": "23",
    "np_expectations": "medium",
    "adj_polarity": "negative",
    "n": 38
  },
  {
    "stim_id": "23",
    "np_expectations": "medium",
    "adj_polarity": "positive",
    "n": 30
  },
  {
    "stim_id": "24",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 37
  },
  {
    "stim_id": "25",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 38
  },
  {
    "stim_id": "25",
    "np_expectations": "high",
    "adj_polarity": "positive",
    "n": 42
  },
  {
    "stim_id": "25",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 32
  },
  {
    "stim_id": "28",
    "np_expectations": "low",
    "adj_polarity": "negative",
    "n": 34
  },
  {
    "stim_id": "28",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 32
  },
  {
    "stim_id": "28",
    "np_expectations": "medium",
    "adj_polarity": "negative",
    "n": 34
  },
  {
    "stim_id": "28",
    "np_expectations": "medium",
    "adj_polarity": "positive",
    "n": 41
  },
  {
    "stim_id": "29",
    "np_expectations": "medium",
    "adj_polarity": "positive",
    "n": 36
  },
  {
    "stim_id": "30",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 36
  },
  {
    "stim_id": "30",
    "np_expectations": "high",
    "adj_polarity": "positive",
    "n": 21
  },
  {
    "stim_id": "30",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 29
  },
  {
    "stim_id": "31",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 29
  },
  {
    "stim_id": "32",
    "np_expectations": "medium",
    "adj_polarity": "positive",
    "n": 32
  },
  {
    "stim_id": "36",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 35
  },
  {
    "stim_id": "36",
    "np_expectations": "high",
    "adj_polarity": "positive",
    "n": 33
  },
  {
    "stim_id": "36",
    "np_expectations": "medium",
    "adj_polarity": "negative",
    "n": 34
  },
  {
    "stim_id": "36",
    "np_expectations": "medium",
    "adj_polarity": "positive",
    "n": 35
  },
  {
    "stim_id": "40",
    "np_expectations": "medium",
    "adj_polarity": "negative",
    "n": 36
  },
  {
    "stim_id": "45",
    "np_expectations": "high",
    "adj_polarity": "positive",
    "n": 30
  },
  {
    "stim_id": "45",
    "np_expectations": "low",
    "adj_polarity": "negative",
    "n": 36
  },
  {
    "stim_id": "46",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 35
  },
  {
    "stim_id": "46",
    "np_expectations": "medium",
    "adj_polarity": "negative",
    "n": 33
  },
  {
    "stim_id": "49",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 36
  },
  {
    "stim_id": "49",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 35
  },
  {
    "stim_id": "49",
    "np_expectations": "medium",
    "adj_polarity": "positive",
    "n": 35
  },
  {
    "stim_id": "51",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 40
  },
  {
    "stim_id": "51",
    "np_expectations": "low",
    "adj_polarity": "negative",
    "n": 42
  },
  {
    "stim_id": "51",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 34
  },
  {
    "stim_id": "51",
    "np_expectations": "medium",
    "adj_polarity": "negative",
    "n": 36
  },
  {
    "stim_id": "54",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 45
  },
  {
    "stim_id": "54",
    "np_expectations": "medium",
    "adj_polarity": "negative",
    "n": 36
  },
  {
    "stim_id": "56",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 37
  },
  {
    "stim_id": "57",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 35
  },
  {
    "stim_id": "57",
    "np_expectations": "high",
    "adj_polarity": "positive",
    "n": 36
  },
  {
    "stim_id": "59",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 39
  },
  {
    "stim_id": "64",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 41
  },
  {
    "stim_id": "66",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 34
  },
  {
    "stim_id": "70",
    "np_expectations": "low",
    "adj_polarity": "negative",
    "n": 33
  },
  {
    "stim_id": "70",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 34
  },
  {
    "stim_id": "75",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 36
  },
  {
    "stim_id": "75",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 30
  },
  {
    "stim_id": "76",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 26
  },
  {
    "stim_id": "78",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 35
  },
  {
    "stim_id": "78",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 39
  },
  {
    "stim_id": "79",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 32
  },
  {
    "stim_id": "80",
    "np_expectations": "low",
    "adj_polarity": "negative",
    "n": 35
  },
  {
    "stim_id": "80",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 42
  },
  {
    "stim_id": "80",
    "np_expectations": "medium",
    "adj_polarity": "negative",
    "n": 34
  },
  {
    "stim_id": "80",
    "np_expectations": "medium",
    "adj_polarity": "positive",
    "n": 36
  },
  {
    "stim_id": "82",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 40
  },
  {
    "stim_id": "82",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 35
  },
  {
    "stim_id": "82",
    "np_expectations": "medium",
    "adj_polarity": "negative",
    "n": 40
  },
  {
    "stim_id": "82",
    "np_expectations": "medium",
    "adj_polarity": "positive",
    "n": 37
  },
  {
    "stim_id": "84",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 38
  },
  {
    "stim_id": "84",
    "np_expectations": "low",
    "adj_polarity": "negative",
    "n": 34
  },
  {
    "stim_id": "84",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 40
  },
  {
    "stim_id": "84",
    "np_expectations": "medium",
    "adj_polarity": "negative",
    "n": 35
  },
  {
    "stim_id": "87",
    "np_expectations": "low",
    "adj_polarity": "negative",
    "n": 36
  },
  {
    "stim_id": "87",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 41
  },
  {
    "stim_id": "87",
    "np_expectations": "medium",
    "adj_polarity": "negative",
    "n": 31
  },
  {
    "stim_id": "88",
    "np_expectations": "high",
    "adj_polarity": "negative",
    "n": 39
  },
  {
    "stim_id": "88",
    "np_expectations": "high",
    "adj_polarity": "positive",
    "n": 35
  },
  {
    "stim_id": "88",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 39
  },
  {
    "stim_id": "89",
    "np_expectations": "medium",
    "adj_polarity": "positive",
    "n": 33
  },
  {
    "stim_id": "90",
    "np_expectations": "low",
    "adj_polarity": "negative",
    "n": 35
  },
  {
    "stim_id": "90",
    "np_expectations": "low",
    "adj_polarity": "positive",
    "n": 39
  // },
  // {
  //   "stim_id": "28",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 42
  // },
  // {
  //   "stim_id": "29",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "29",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 42
  // },
  // {
  //   "stim_id": "29",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "29",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 37
  // },
  // {
  //   "stim_id": "29",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "3",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "3",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "3",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 37
  // },
  // {
  //   "stim_id": "3",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "3",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "3",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 45
  // },
  // {
  //   "stim_id": "30",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "30",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "30",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "30",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "31",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 41
  // },
  // {
  //   "stim_id": "31",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "31",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "31",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "31",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "32",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 45
  // },
  // {
  //   "stim_id": "32",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "32",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "32",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "32",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "33",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "33",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 37
  // },
  // {
  //   "stim_id": "33",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 40
  // },
  // {
  //   "stim_id": "33",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "34",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "34",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "34",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 42
  // },
  // {
  //   "stim_id": "34",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "34",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 42
  // },
  // {
  //   "stim_id": "35",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "35",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "35",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "35",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "35",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "35",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "36",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "36",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "36",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "36",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "37",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 40
  // },
  // {
  //   "stim_id": "37",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "37",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 40
  // },
  // {
  //   "stim_id": "37",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "38",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 41
  // },
  // {
  //   "stim_id": "38",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 37
  // },
  // {
  //   "stim_id": "38",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "38",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "39",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "39",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "39",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "39",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "4",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "4",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 43
  // },
  // {
  //   "stim_id": "4",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 37
  // },
  // {
  //   "stim_id": "4",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "4",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "40",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "40",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "40",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "40",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "41",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 41
  // },
  // {
  //   "stim_id": "41",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "41",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "41",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "41",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "41",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "42",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "42",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 41
  // },
  // {
  //   "stim_id": "42",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "42",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "42",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "43",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 41
  // },
  // {
  //   "stim_id": "43",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 43
  // },
  // {
  //   "stim_id": "43",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 41
  // },
  // {
  //   "stim_id": "43",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "44",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "44",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 39
  // },
  // {
  //   "stim_id": "44",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "45",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "45",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "45",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "45",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "45",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 40
  // },
  // {
  //   "stim_id": "46",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "46",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "46",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "46",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "46",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "47",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "47",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "47",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 41
  // },
  // {
  //   "stim_id": "47",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "47",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "48",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "48",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "48",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "48",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 42
  // },
  // {
  //   "stim_id": "49",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "49",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 42
  // },
  // {
  //   "stim_id": "49",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "49",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 50
  // },
  // {
  //   "stim_id": "49",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "5",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 41
  // },
  // {
  //   "stim_id": "5",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 39
  // },
  // {
  //   "stim_id": "5",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 41
  // },
  // {
  //   "stim_id": "5",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 39
  // },
  // {
  //   "stim_id": "5",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "5",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "50",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "50",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 41
  // },
  // {
  //   "stim_id": "50",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 41
  // },
  // {
  //   "stim_id": "50",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 39
  // },
  // {
  //   "stim_id": "50",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 42
  // },
  // {
  //   "stim_id": "50",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "51",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 40
  // },
  // {
  //   "stim_id": "51",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "51",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 42
  // },
  // {
  //   "stim_id": "51",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "51",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "52",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 40
  // },
  // {
  //   "stim_id": "52",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "52",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "52",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 39
  // },
  // {
  //   "stim_id": "52",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "52",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "53",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 40
  // },
  // {
  //   "stim_id": "53",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 41
  // },
  // {
  //   "stim_id": "53",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "53",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "53",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "54",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 45
  // },
  // {
  //   "stim_id": "54",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 41
  // },
  // {
  //   "stim_id": "54",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 37
  // },
  // {
  //   "stim_id": "54",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 37
  // },
  // {
  //   "stim_id": "55",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "55",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "55",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 45
  // },
  // {
  //   "stim_id": "56",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "56",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 40
  // },
  // {
  //   "stim_id": "56",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "56",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "56",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "57",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "57",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "57",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 37
  // },
  // {
  //   "stim_id": "57",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "57",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "58",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 44
  // },
  // {
  //   "stim_id": "58",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "58",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "58",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "59",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "59",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 42
  // },
  // {
  //   "stim_id": "59",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "59",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "59",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "6",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "6",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "6",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 39
  // },
  // {
  //   "stim_id": "6",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 37
  // },
  // {
  //   "stim_id": "60",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "60",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "60",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "60",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 40
  // },
  // {
  //   "stim_id": "60",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "61",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "61",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "61",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 37
  // },
  // {
  //   "stim_id": "61",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "61",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 41
  // },
  // {
  //   "stim_id": "62",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "62",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "62",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "63",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "63",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 41
  // },
  // {
  //   "stim_id": "63",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 41
  // },
  // {
  //   "stim_id": "63",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "63",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "64",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "64",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "64",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 41
  // },
  // {
  //   "stim_id": "64",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 41
  // },
  // {
  //   "stim_id": "64",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "65",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "65",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "65",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "65",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "65",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "66",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "66",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "66",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 40
  // },
  // {
  //   "stim_id": "67",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "67",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "67",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "67",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 37
  // },
  // {
  //   "stim_id": "67",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "68",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "68",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 37
  // },
  // {
  //   "stim_id": "68",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "68",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 41
  // },
  // {
  //   "stim_id": "69",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "69",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 44
  // },
  // {
  //   "stim_id": "69",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 41
  // },
  // {
  //   "stim_id": "69",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "7",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 40
  // },
  // {
  //   "stim_id": "7",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 40
  // },
  // {
  //   "stim_id": "7",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "7",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "7",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 39
  // },
  // {
  //   "stim_id": "70",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "70",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 39
  // },
  // {
  //   "stim_id": "70",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "71",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 40
  // },
  // {
  //   "stim_id": "71",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "71",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "71",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "72",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "72",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "72",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 41
  // },
  // {
  //   "stim_id": "72",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "72",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "73",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "73",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 40
  // },
  // {
  //   "stim_id": "73",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "73",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "73",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 40
  // },
  // {
  //   "stim_id": "74",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 44
  // },
  // {
  //   "stim_id": "74",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "74",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "74",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "74",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "74",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "75",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "75",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 42
  // },
  // {
  //   "stim_id": "75",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "75",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "75",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 41
  // },
  // {
  //   "stim_id": "76",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "76",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 41
  // },
  // {
  //   "stim_id": "76",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "76",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 43
  // },
  // {
  //   "stim_id": "76",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "77",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "77",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 39
  // },
  // {
  //   "stim_id": "77",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 44
  // },
  // {
  //   "stim_id": "77",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "77",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "77",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "78",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "78",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 41
  // },
  // {
  //   "stim_id": "78",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 39
  // },
  // {
  //   "stim_id": "78",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 37
  // },
  // {
  //   "stim_id": "78",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 42
  // },
  // {
  //   "stim_id": "79",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "79",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "79",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 37
  // },
  // {
  //   "stim_id": "79",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 40
  // },
  // {
  //   "stim_id": "79",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 41
  // },
  // {
  //   "stim_id": "8",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "8",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "8",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 37
  // },
  // {
  //   "stim_id": "8",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "8",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "8",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 39
  // },
  // {
  //   "stim_id": "80",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "80",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "80",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "80",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 42
  // },
  // {
  //   "stim_id": "80",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "81",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "81",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "81",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 39
  // },
  // {
  //   "stim_id": "81",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "82",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 40
  // },
  // {
  //   "stim_id": "82",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "82",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "82",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 40
  // },
  // {
  //   "stim_id": "82",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "83",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "83",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "83",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "83",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 41
  // },
  // {
  //   "stim_id": "83",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "83",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "84",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "84",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "84",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "84",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 40
  // },
  // {
  //   "stim_id": "84",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "84",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 40
  // },
  // {
  //   "stim_id": "85",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 37
  // },
  // {
  //   "stim_id": "85",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "85",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 44
  // },
  // {
  //   "stim_id": "85",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "86",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "86",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 38
  // },
  // {
  //   "stim_id": "86",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "86",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "86",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "87",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "87",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "87",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 36
  // },
  // {
  //   "stim_id": "87",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 41
  // },
  // {
  //   "stim_id": "88",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 40
  // },
  // {
  //   "stim_id": "88",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "88",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 42
  // },
  // {
  //   "stim_id": "88",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 39
  // },
  // {
  //   "stim_id": "88",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 38
  // },
  // {
  //   "stim_id": "89",
  //   "np_expectations": "high",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "89",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "89",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 45
  // },
  // {
  //   "stim_id": "89",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 39
  // },
  // {
  //   "stim_id": "9",
  //   "np_expectations": "high",
  //   "adj_polarity": "positive",
  //   "n": 35
  // },
  // {
  //   "stim_id": "9",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 41
  // },
  // {
  //   "stim_id": "9",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 37
  // },
  // {
  //   "stim_id": "9",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 36
  // },
  // {
  //   "stim_id": "90",
  //   "np_expectations": "low",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "90",
  //   "np_expectations": "low",
  //   "adj_polarity": "positive",
  //   "n": 40
  // },
  // {
  //   "stim_id": "90",
  //   "np_expectations": "medium",
  //   "adj_polarity": "negative",
  //   "n": 35
  // },
  // {
  //   "stim_id": "90",
  //   "np_expectations": "medium",
  //   "adj_polarity": "positive",
  //   "n": 40
  // }
]
