// In this file you can specify the trial data for your experiment
// get five random trials in each dimension
const trials = function(domain) {
  var trial_list = []
  for( var x = 0; x < domain.length; x++) {
    trial_list[x] = x
  }

  return _.shuffle(trial_list).slice(0,3)
}

// sample an item for the item
const item = function() {
  return _.sample(["positive", "negative", "neutral"])
}

// sample a positive or negative adjective
const adj = function() {
  return "adj_" + String(_.sample(["positive", "negative"]))
}

// create the context sentence for chosen item (positive, neutral or negative example on the relevant scale)
// insert the correct article if needed
// insert the item
const context_sent = function(item, domain) {
  if(domain.context.includes("PRE")) {
    var det = "pre_" + item
    var context_sent = domain.context.replace("PHRASE", domain[item]).replace("PRE", domain[det])
    return context_sent
  } else {
    var context_sent = domain.context.replace("PHRASE", domain[item])
    return context_sent
  }
}

// create the data for the trial view
const create_view = function(domain) {
// get the numbers of the 5 chosen items for the domain (size, temperature etc...)
  const sequence = trials(domain)
  var i;
  const domain_views = []

  for (i=0; i < sequence.length ; i++) {
    // sample a positive, neutral or negative item
    const current_item = item()
    var x = sequence[i]
    // return the one current domain item of the five
    const single_item = domain[x]
    // sample an adjective (positive or negative)
    const adjective = adj()
    // return the view data
    const view = {
      context: context_sent(current_item, single_item),
      question: "Do you think " + domain[x].pronoun + " would be " + domain[x][adjective] + "?",
      item_cond: current_item,
      item: domain[x][current_item],
      adjective_cond: adjective,
      id: domain[x].id,
      degree: domain[x].degree
    }
// add view data to list of views for the chosen domain
    domain_views.push(view)

  }

  return domain_views

}

// this object contains the following continuous dimensions: size, length, price, weight, sound (loudness),
// darkness, height, temperature, speed

// goal is to have 10 items per dimension, but some are more difficult than others
// in the context sentences, we try to avoid mentioning the dimension (scale) where possible
// positive examples denote referents that have a high probability of having the property in question,
// neutral ones are somewhat ambiguos, the negative ones are expected to be low on the respective scale
const items =  {
      size: [
        {
          id: 0,
          degree: "size",
          positive: "dog",
          negative: "hamster",
          neutral: "cat",
          superordinate: "pets",
          adj_positive: "big",
          adj_negative: "small",
          pronoun: "it",
          context: "You look at your friend's pet PHRASE."
        },
        {
          id: 1,
          degree: "size",
          positive: "wedding party",
          negative: "birthday party",
          neutral: "office party",
          pre_positive: "a",
          pre_negative: "a",
          pre_neutral: "an",
          superordinate: "parties",
          adj_positive: "large",
          adj_negative: "small",
          pronoun: "it",
          context: "You attend PRE PHRASE."
        },
        {
          id: 2,
          degree: "size",
          positive: "villa",
          negative: "apartment",
          neutral: "townhouse",
          pre_positive: "a",
          pre_negative: "an",
          pre_neutral: "a",
          superordinate: "houses",
          adj_positive: "large",
          adj_negative: "small",
          pronoun: "it",
          context: "You are looking for a place to live and check out PRE PHRASE."
        },
        {
          id: 3,
          degree: "size",
          positive: "tree",
          negative: "rose bush",
          neutral: "hedge",
          superordinate: "lawn plants",
          adj_positive: "big",
          adj_negative: "small",
          pronoun: "it",
          context: "You are thinking about doing some landscaping and look at a PHRASE."
        },
        {
          id: 4,
          degree: "size",
          positive: "SUV",
          negative: "subcompact",
          neutral: "sedan",
          superordinate: "cars",
          adj_positive: "big",
          adj_negative: "small",
          pronoun: "it",
          context: "You look at a PHRASE."
        },
        {
          id: 5,
          degree: "size",
          positive: "great dane",
          negative: "chihuahua",
          neutral: "poodle",
          superordinate: "dogs",
          adj_positive: "big",
          adj_negative: "small",
          pronoun: "it",
          context: "You look at a PHRASE."
        },
        {
          id: 6,
          degree: "size",
          positive: "sunflower",
          negative: "rose",
          neutral: "daisy",
          superordinate: "flowers",
          adj_positive: "big",
          adj_negative: "small",
          pronoun: "it",
          context: "You look at a PHRASE in a garden."
        },
        {
          id: 7,
          degree: "size",
          positive: "swordfish",
          negative: "goldfish",
          neutral: "salmon",
          superordinate: "fish",
          adj_positive: "big",
          adj_negative: "small",
          pronoun: "it",
          context: "You look at a PHRASE at a zoo."
        },
        {
          id: 8,
          degree: "size",
          positive: "swan",
          negative: "sparrow",
          neutral: "crow",
          superordinate: "birds",
          adj_positive: "big",
          adj_negative: "small",
          pronoun: "it",
          context: "You see a PHRASE in a park."
        },
        {
          id: 9,
          degree: "size",
          positive: "elephant",
          negative: "hedgehog",
          neutral: "chimpanzee",
          superordinate: "animals",
          adj_positive: "big",
          adj_small: "small",
          pronoun: "it",
          context: "You are at the zoo and see a PHRASE."
        },
        {
          id: 9.1,
          degree: "size",
          positive: "pumpkin",
          negative: "potato",
          neutral: "eggplant",
          superordinate: "vegetables",
          pre_positive: "a",
          pre_negative: "a",
          pre_neutral: "an",
          adj_positive: "big",
          adj_negative: "small",
          pronoun: "it",
          context: "You see PRE PHRASE at a farmer's market."
        }
      ],
      len: [
        {
          id: 10,
          degree: "length",
          positive: "yacht",
          negative: "rubber dingy",
          neutral: "sailboat",
          superordinate: "boats",
          adj_positive: "long",
          adj_negative: "short",
          pronoun: "it",
          context: "You look at your friend's PHRASE."
        },
        {
          id: 11,
          degree: "length",
          positive: "novel",
          negative: "magazine",
          neutral: "article",
          superordinate: "reading materials",
          pre_positive: "a",
          pre_neutral: "an",
          pre_negative: "a",
          adj_positive: "long",
          adj_negative: "short",
          pronoun: "it",
          context: "You are thinking about reading PRE PHRASE."
        },
        {
          id: 12,
          degree: "length",
          positive: "opera",
          negative: "lullaby",
          neutral: "podcast",
          superordinate: "audios",
          pre_positive: "an",
          pre_negative: "a",
          pre_neutral: "a",
          adj_positive: "long",
          adj_negative: "short",
          pronoun: "it",
          context: "You listen to the recording of PRE PHRASE."
        },
        {
          id: 13,
          degree: "length",
          positive: "class",
          negative: "break",
          neutral: "lecture",
          superordinate: "school events",
          adj_positive: "long",
          adj_negative: "short",
          pronoun: "it",
          context: "You are going to attend a PHRASE at school."
        },
        {
          id: 14,
          degree: "length",
          positive: "movie",
          negative: "TV show",
          neutral: "documentary",
          superordinate: "entertainment",
          adj_positive: "long",
          adj_negative: "short",
          pronoun: "it",
          context: "You are thinking about watching a PHRASE on Netflix."
        },
        {
          id: 15,
          degree: "length",
          positive: "gown",
          negative: "miniskirt",
          neutral: "office dress",
          superordinate: "skirt",
          pre_positive: "a",
          pre_negative: "a",
          pre_neutral: "an",
          adj_positive: "long",
          adj_negative: "short",
          pronoun: "it",
          context: "You see PRE PHRASE at a shopping center."
        },
        {
          id: 16,
          degree: "length",
          positive: "bike",
          negative: "plain",
          neutral: "train",
          superordinate: "transportation",
          adj_positive: "long",
          adj_negative: "short",
          pronoun: "it",
          context: "You want to take a trip from Boston to New York City by PHRASE."
        },
        {
          id: 17,
          degree: "length",
          positive: "pie",
          negative: "ramen",
          neutral: "potatoes",
          superordinate: "cooking time",
          adj_positive: "long",
          adj_negative: "short",
          pronoun: "it",
          context: "You look up a recipe for making PHRASE."
        },
        // {
        //   id: 18,
        //   degree: "length",
        //   positive: "solve a crossword",
        //   negative: "look at",
        //   neutral: "article",
        //   superordinate: "",
        //   adj_positive: "",
        //   adj_negative: "",
        //   pronoun: "",
        //   context: ""
        // },
        // {
        //   id: 19,
        //   degree: "length",
        //   positive: "Alaska",
        //   negative: "Hawaii",
        //   neutral: "Washington D. C.",
        //   superordinate: "different areas",
        //   adj_positive: "long",
        //   adj_negative: "short",
        //   pronoun: "them",
        //   context: "You are studying geography and learn about the winters in PHRASE."
        // }
      ],
      price: [
        {
          id: 20,
          degree: "price",
          positive: "steak",
          negative: "pork",
          neutral: "chicken",
          superordinate: "meat",
          adj_positive: "expensive",
          adj_negative: "cheap",
          pronoun: "it",
          context: "You are at the butchershop and look at a piece of PHRASE."
        },
        {
           id: 21,
           degree: "price",
           positive: "bottle of top-shelf liquor",
           negative: "sixpack of beer",
           neutral: "bottle of wine",
           superordinate: "alcoholic drinks",
           adj_positive: "expensive",
           adj_negative: "cheap",
           pronoun: "it",
           context: "You want to buy a PHRASE at a liquor store."
         },
         {
            id: 22,
            degree: "price",
            positive: "Apple phone",
            negative: "Nokia phone",
            neutral: "Samsung phone",
            pre_positive: "an",
            pre_negative: "a",
            pre_neutral: "a",
            superordinate: "cell phones",
            adj_positive: "expensive",
            adj_negative: "cheap",
            pronoun: "it",
            context: "You are shopping and look at PRE PHRASE."
          },
          {
             id: 23,
             degree: "price",
             positive: "rose",
             negative: "daisy",
             neutral: "tulip",
             pre_positive: "a",
             pre_negative: "a",
             pre_neutral: "an",
             superordinate: "flowers",
             adj_positive: "expensive",
             adj_negative: "cheap",
             pronoun: "it",
             context: "You are shopping for flowers and look at PRE PHRASE."
           },
           {
              id: 24,
              degree: "price",
              positive: "steak house",
              negative: "diner",
              neutral: "buffet",
              superordinate: "restaurants",
              adj_positive: "expensive",
              adj_negative: "cheap",
              pronoun: "it",
              context: "You are considering different places for dinner and look at the menu of a PHRASE."
            },
            {
              id: 25,
              degree: "price",
              positive: "gold",
              negative: "plastic",
              neutral: "silver",
              superordinate: "jewlery",
              adj_positive: "expensive",
              adj_negative: "cheap",
              pronoun: "it",
              context: "You are at the jewlery store and look at at a ring made of PHRASE."
            },
            {
              id: 26,
              degree: "price",
              positive: "car",
              negative: "bike",
              neutral: "motorcycle",
              superordinate: "vehicles",
              adj_positive: "expensive",
              adj_negative: "cheap",
              pronoun: "it",
              context: "You are shopping for a PHRASE to ride on your commute."
            },
            {
              id: 27,
              degree: "price",
              positive: "meat",
              negative: "candy",
              neutral: "vegetables",
              superordinate: "food",
              adj_positive: "expensive",
              adj_negative: "cheap",
              pronoun: "it",
              context: "You are shopping groceries and want to buy some PHRASE."
            },
            {
              id: 28,
              degree: "price",
              positive: "fridge",
              negative: "microwave",
              neutral: "dishwasher",
              superordinate: "appliances",
              adj_positive: "expensive",
              adj_negative: "cheap",
              pronoun: "it",
              context: "You are shopping and look at a PHRASE."
            },
            {
              id: 29,
              degree: "price",
              positive: "resort",
              negative: "hostel",
              neutral: "hotel",
              superordinate: "vacation rentals",
              adj_positive: "expensive",
              adj_negative: "cheap",
              pronoun: "it",
              context: "You want to go on vacation and think about staying at a PHRASE."
            },
            {
              id: 29.1,
              degree: "price",
              positive: "suit",
              negative: "tshirt",
              neutral: "pair of jeans",
              superordinate: "clothes",
              adj_positive: "expensive",
              adj_negative: "cheap",
              pronoun: "it",
              context: "You are shopping and want to buy a PHRASE."
            },
            {
              id: 29.2,
              degree: "price",
              positive: "leather shoes",
              negative: "flip-flops",
              neutral: "sneakers",
              superordinate: "footwear",
              adj_positive: "expensive",
              adj_negative: "cheap",
              pronoun: "it",
              context: "You want to buy a pair of PHRASE."
            },
      ],
      weight: [
        {
          id: 30,
          degree: "weight",
          positive: "box",
          negative: "envelope",
          neutral: "package",
          pre_positive: "a",
          pre_negative: "an",
          pre_neutral: "a",
          superordinate: "mail",
          adj_positive: "heavy",
          adj_negative: "light",
          pronoun: "it",
          context: "The mailman drops off PRE PHRASE for you. You pick it up."
        },
        {
          id: 31,
          degree: "weight",
          positive: "piece of furniture",
          negative: "piece of clothing",
          neutral: "box",
          superordinate: "things you carry when moving",
          adj_positive: "heavy",
          adj_negative: "light",
          pronoun: "it",
          context: "You are helping a friend move and pick up a PHRASE."
        },
        {
         id: 32,
         degree: "weight",
         positive: "couch",
         negative: "dining chair",
         neutral: "table",
         pre_positive: "a",
         pre_negative: "a",
         pre_neutral: "an",
         superordinate: "furniture",
         adj_positive: "heavy",
         adj_negative: "light",
         pronoun: "it",
         context: "You are rearranging your room and move PRE PHRASE."
       },
        {
          id: 33,
          degree: "weight",
          positive: "truck",
          negative: "motorcycle",
          neutral: "car",
          superordinate: "vehicles",
          adj_positive: "heavy",
          adj_negative: "light",
          pronoun: "it",
          context: "You are learning about different vehicles and think about a PHRASE."
        },
        {
          id: 34,
          degree: "weight",
          positive: "adult",
          negative: "baby",
          neutral: "child",
          pre_positive: "an",
          pre_negative: "a",
          pre_neutral: "a",
          superordinate: "human",
          adj_positive: "heavy",
          adj_negative: "light",
          pronoun: "he",
          context: "You lift up PRE PHRASE named Pat."
        },
        {
          id: 35,
          degree: "weight",
          positive: "brick",
          negative: "feather",
          neutral: "rock",
          superordinate: "objects",
          adj_positive: "heavy",
          adj_negative: "light",
          pronoun: "it",
          context: "You pick up a PHRASE."
        },
        {
          id: 36,
          degree: "weight",
          positive: "watermelon",
          negative: "apple",
          neutral: "honey melon",
          superordinate: "fruit",
          pre_positive: "a",
          pre_neutral: "a",
          pre_negative: "an",
          adj_positive: "heavy",
          adj_negative: "light",
          pronoun: "it",
          context: "You are at the grocery store and pick up PRE PHRASE."
        },
        {
          id: 37,
          degree: "weight",
          positive: "steel",
          negative: "styrofoam",
          neutral: "wood",
          superordinate: "materials",
          adj_positive: "heavy",
          adj_negative: "light",
          pronoun: "it",
          context: "You are working at a machine shop and pick up a piece of PHRASE."
        },
        {
          id: 38,
          degree: "weight",
          positive: "encyclopedia",
          negative: "notebook",
          neutral: "poetry book",
          superordinate: "weight",
          pre_positive: "an",
          pre_neutral: "a",
          pre_negative: "a",
          adj_positive: "heavy",
          adj_negative: "light",
          pronoun: "it",
          context: "You are at a library and pick up PRE PHRASE."
        },
        {
          id: 39,
          degree: "weight",
          positive: "dog",
          negative: "mouse",
          neutral: "cat",
          superordinate: "pets",
          adj_positive: "heavy",
          adj_negative: "light",
          pronoun: "it",
          context: "You pick up your friend's pet PHRASE."
        }
      ],
      sound: [
        {
           id: 40,
           degree: "sound",
           positive: "drums",
           negative: "violin",
           neutral: "piano",
           superordinate: "instruments",
           adj_positive: "loud",
           adj_negative: "quiet",
           pronoun: "it",
           context: "You hear somebody playing the PHRASE at a concert."
         },
         {
           id: 41,
           degree: "sound",
           positive: "gymnasium",
           negative: "library",
           neutral: "classroom",
           superordinate: "places in schools",
           adj_positive: "loud",
           adj_negative: "quiet",
           pronoun: "it",
           context: "You are sitting in a PHRASE.",
           environment_mod: "in here"
         },
         {
            id: 42,
            degree: "sound",
            positive: "restaurant",
            negative: "library",
            neutral: "store",
            superordinate: "venues",
            adj_positive: "loud",
            adj_negative: "quiet",
            pronoun: "it",
            environment_mod: "in here",
            context: "You are having a meeting in a PHRASE."
          },
          {
            id: 43,
            degree: "sound",
            positive: "concert",
            negative: "library",
            neutral: "sporting event",
            superordinate: "places to go",
            adj_positive: "loud",
            adj_negative: "quiet",
            pronoun: "it",
            environment_mod: "in here",
            context: "You are at a PHRASE on a Saturday night."
          },
          {
             id: 44,
             degree: "sound",
             positive: "rooster",
             negative: "hummingbird",
             neutral: "parrot",
             superordinate: "birds",
             adj_positive: "loud",
             adj_negative: "quiet",
             pronoun: "it",
             context: "You are at a zoo and hear the cry of a PHRASE."
           },
           {
             id: 45,
             degree: "sound",
             positive: "city square",
             negative: "forest path",
             neutral: "sidewalk",
             superordinate: "envirnoments",
             adj_positive: "loud",
             adj_negative: "quiet",
             pronoun: "it",
             context: "You walk on a PHRASE."
           },
           {
             id: 46,
             degree: "sound",
             positive: "infant",
             negative: "adult",
             neutral: "teenager",
             superordinate: "humans",
             pre_positive: "an",
             pre_neutral: "a",
             pre_negative: "an",
             adj_positive: "loud",
             adj_negative: "quiet",
             pronoun: "she",
             context: "You are at your friend's house and PRE PHRASE called Mary comes in."
           },
           {
             id: 47,
             degree: "sound",
             positive: "dog",
             negative: "goldfish",
             neutral: "cat",
             superordinate: "pets",
             adj_positive: "loud",
             adj_negative: "quiet",
             pronoun: "it",
             context: "Your friend has a pet PHRASE."
           },
           // {
           //   id: 48,
           //
           // },
           // {
           //   id: 49,
           // }
      ],
      darkness: [
        {
          id: 50,
          degree: "darkness",
          positive: "the day",
          negative: "the night",
          neutral: "dusk",
          superordinate: "times of day",
          adj_positive: "dark",
          adj_negative: "bright",
          pronoun: "it",
          context: "Imagine you step outside during PHRASE."
        },
        {
          id: 51,
          degree: "darkness",
          positive: "dress slacks",
          negative: "khakis",
          neutral: "jeans",
          superordinate: "pants",
          adj_positive: "dark",
          adj_negative: "light",
          pronoun: "they",
          context: "You try on a pair of PHRASE."
        },
        {
           id: 52,
           degree: "darkness",
           positive: "night club",
           negative: "office building",
           neutral: "townhouse",
           superordinate: "buildings ",
           pre_positive: "a",
           pre_negative: "an",
           pre_neutral: "a",
           adj_positive: "dark",
           adj_negative: "bright",
           pronoun: "it",
           environment_mod: "in here",
           context: "You are at PRE PHRASE with a friend."
         },
         {
          id: 53,
          degree: "darkness",
          positive: "basement",
          negative: "living room",
          neutral: "kitchen",
          superordinate: "rooms",
          adj_positive: "dark",
          adj_negative: "bright",
          pronoun: "it",
          context: "You are in the PHRASE at your friend's house."
        },
        {
          // what is the opposite of bright in terms of light sources?
          id: 54,
          degree: "darkness",
          superordinate: "light sources",
          adj_positive: "dark",
          adj_negative: "bright",

        },
        {
          id: 55,
          degree: "darkness",
          positive: "tuxido",
          negative: "wedding dress",
          neutral: "cocktail dress",
          superordinate: "clothes",
          adj_positive: "dark",
          adj_negative: "light",
          pronoun: "it",
          context: "You are walking by a store wondow and see a PHRASE."
        }
        // {
        //   id: 55,
        // },
        // {
        //   id: 56,
        //
        // },
        // {
        //   id: 57,
        // },
        // {
        //   id: 58,
        // },
        // {
        //   id: 59,
        // }
      ],
      height: [
        {
          id: 60,
          degree: "height",
          positive: "adult",
          negative: "child",
          neutral: "teenager",
          pre_positive: "an",
          pre_negative: "a",
          pre_neutral: "a",
          superordinate: "people",
          adj_positive: "tall",
          adj_negative: "short",
          pronoun: "he",
          context: "Imagine you see PRE PHRASE named John."
        },
        {
          id: 61,
          degree: "height",
          positive: "basketball player",
          negative: "jockey",
          neutral: "baseball player",
          superordinate: "athletes",
          adj_positive: "tall",
          adj_negative: "short",
          pronoun: "he",
          context: "You see a PHRASE."
        },
        {
          id: 62,
          degree: "height",
          positive: "redwood tree",
          negative: "bonsai tree",
          neutral: "alpine tree",
          superordinate: "trees",
          adj_positive: "tall",
          adj_negative: "short",
          pronoun: "it",
          context: "You look at a PHRASE."
        },
        {
          id: 63,
          degree: "height",
          positive: "giraffe",
          negative: "frog",
          neutral: "tiger",
          superordinate: "animals",
          adj_positive: "tall",
          adj_negative: "short",
          pronoun: "it",
          context: "You see a PHRASE at the zoo."
        },
        {
          id: 64,
          degree: "height",
          positive: "dinosaur skeleton",
          neutral: "Greek statue",
          negative: "doll",
          superordinate: "exihibits",
          adj_positive: "tall",
          adj_negative: "short",
          pronoun: "it",
          context: "You are in a museum and see a PHRASE."
        },
        {
          id: 65,
          degree: "height",
          positive: "scyscraper",
          negative: "doghouse",
          neutral: "condo",
          superordinate: "buildings",
          adj_positive: "tall",
          adj_negative: "short",
          pronoun: "it",
          context: "You are in a city and see a PHRASE."
        }
      ],
      temperature: [
        {
          id: 70,
          degree: "temperature",
          positive: "coffee",
          negative: "ice tea",
          neutral: "water",
          superordinate: "drinks",
          adj_positive: "hot",
          adj_negative: "cold",
          pronoun: "it",
          context: "You take a first sip from a cup of PHRASE."
        },
        {
          id: 71,
          degree: "temperature",
          positive: "burger",
          negative: "ice cream",
          neutral: "salad",
          superordinate: "foods",
          adj_positive: "hot",
          adj_negative: "cold",
          pronoun: "it",
          context: "The waitress brings you your food. You take the first bite of your PHRASE."
        },
        {
          id: 72,
          degree: "temperature",
          positive: "summer",
          negative: "winter",
          neutral: "fall",
          superordinate: "seasons",
          adj_positive: "warm",
          adj_negative: "cold",
          pronoun: "it",
          environment_mod: "out here",
          context: "You step outside on a day in PHRASE."
        },
        {
          id: 73,
          degree: "temperature",
          positive: "stove",
          negative: "counter",
          neutral: "cupboard",
          superordinate: "kitchen furniture",
          adj_positive: "hot",
          adj_negative: "cold",
          pronoun: "it",
          context: "You are in your kitchen and touch the PHRASE."
        },
        {
          id: 74,
          degree: "temperature",
          positive: "sauna",
          negative: "ice rink",
          neutral: "shopping mall",
          superordinate: "leisure places",
          adj_positive: "hot",
          adj_negative: "cold",
          pronoun: "it",
          context: "You and your friend decide to go to the PHRASE on a Saturday."
        },
        {
          id: 75,
          degree: "temperature",
          positive: "a fur coat",
          negative: "shorts",
          neutral: "a trench coat",
          superordinate: "clothes",
          adj_positive: "hot",
          adj_negative: "cold",
          pronoun: "it",
          context: "You are walking on the street on a fall day wearing PHRASE."
        },
        {
          id: 76,
          degree: "temperature",
          positive: "fudge cake",
          neutral: "muffin",
          negative: "ice cream",
          superordinate: "desserts",
          adj_positive: "hot",
          adj_negative: "cold",
          pronoun: "it",
          context: "You finish dinner at a restaurant and order PHRASE."
        },
      ],
      speed: [
        {
          id: 80,
          degree: "speed",
          positive: "leopard",
          negative: "slug",
          neutral: "horse",
          superordinate: "animals",
          adj_positive: "fast",
          adj_negative: "slow",
          pronoun: "it",
          context: "You are at the zoo watching a PHRASE move."
        },
        {
          id: 81,
          degree: "speed",
          positive: "sports car",
          negative: "moped",
          neutral: "truck",
          superordinate: "vehicles",
          adj_positive: "fast",
          adj_negative: "slow",
          pronoun: "it",
          context: "You stand near a highway and see a PHRASE."
        },
        {
          id: 82,
          degree: "speed",
          positive: "plain",
          negative: "bike",
          neutral: "train",
          superordinate: "transportation",
          adj_positive: "fast",
          adj_negative: "slow",
          pronoun: "it",
          context: "You want to visit your friends in another city and think about travelling by PHRASE."
        },
        {
          id: 84,
          degree: "speed",
          positive: "college student",
          negative: "infant",
          neutral: "woman",
          superordinate: "people",
          pre_positive: "a",
          pre_negative: "an",
          pre_neutral: "a",
          adj_positive: "fast",
          adj_negative: "slow",
          pronoun: "she",
          context: "You are watching a PHRASE called Anna take a walk."
        },
        {
          id: 85,
          degree: "speed",
          positive: "sprinter",
          negative: "weight lifter",
          neutral: "baseball player",
          superordinate: "athletes",
          adj_positive: "fast",
          adj_negative: "slow",
          pronoun: "he",
          context: "You watch a PHRASE run 50 yards."
        },
        {
          id: 86,
          degree: "speed",
          positive: "speed boat",
          negative: "rowing boat",
          neutral: "dinghy",
          superordinate: "boats",
          adj_positive: "fast",
          adj_negative: "slow",
          pronoun: "it",
          context: "You see a PHRASE on a river."
        }

      ]
}

// joining the lists of views for single dimensions together into one list of all trial views, shuffled in 05_view.js
const trial_info = {
  main:  create_view(items.size).concat(
    create_view(items.len).concat(create_view(items.price).concat(
      create_view(items.weight).concat(create_view(items.sound).concat(
        create_view(items.darkness).concat(create_view(items.height).concat(
          create_view(items.temperature).concat(create_view(items.speed)))))))))

}
