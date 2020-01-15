// adjective endorsement stimuli built from n = 50 NP free yourduction experiment,
// trial viee context created for comparison class expt and adjusted accrodingly


const trials = function(domain) {
  var trial_list = []
  for( var x = 0; x < domain.length; x++) {
    trial_list[x] = x
  }
// take 5 trials of each domain
// ------ ADJUST FOR MORE ITEMS ---------
  var num_trials = 5
  return _.shuffle(trial_list).slice(0, num_trials)
}

const fc_order = _.shuffle(["adj_positive", "adj_negative"])
// these functions can be used for trials with randomly sampled adjective and noun phrase conditions
// sample an example for the item
// const item = function() {
//   return _.sample(["positive", "negative", "neutral"])
// }

// sample a positive or negative adjective
// const adj = function() {
//   return "adj_" + String(_.sample(["positive", "negative"]))
// }

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
  const np_seq = _.shuffle(["high", "low", "medium", "high", "low", "medium"])
  const adj_seq = _.shuffle(["adj_positive", "adj_negative", "adj_positive", "adj_negative", "adj_positive", "adj_negative"])

  for (i=0; i < sequence.length ; i++) {
    // in each domain, there are 6 Trials
    // 3 positive adj, 3 negative adj trials
    // 2 trials with each positive, negative and neutral NP


    // sample a positive, neutral or negative item
    // const current_item = item()
    const current_item = np_seq[i]
    // const questions = ["<b>" + domain[x].adj_positive + "</b> relative to other <b>" + domain[x].superordinate + "?</b>",
    //                     "<b>" + domain[x].adj_negative + "</b> relative to other <b>" + domain[x].superordinate + "?</b>"]
    var x = sequence[i]
    // return the one current domain item of the five
    const single_item = domain[x]
    // sample an adjective (positive or negative)
    // const adjective = adj()
    const adjective = adj_seq[i]
    // construct condition of first question
    // return the view data
    var text_1 = {pos: "<b>" + domain[x].adj_positive + "</b> relative to other <b>" + domain[x].superordinate + "?</b>", neg: "<b>" + domain[x].adj_negative + "</b> relative to other <b>" + domain[x].superordinate + "?</b>"}
    const view = {
      context: context_sent(current_item, single_item),
      question: "Do you think " + domain[x].pronoun + " would be:" ,
      // text_pos:  "<b>" + domain[x].adj_positive + "</b> relative to other <b>" + domain[x].superordinate + "?</b>",
      // text_neg: "<b>" + domain[x].adj_negative + "</b> relative to other <b>" + domain[x].superordinate + "?</b>",
      sentence_1: "<b>" + domain[x][fc_order[0]] + "</b> relative to other <b>" + domain[x].superordinate + "?</b>",
      sentence_2: "<b>" + domain[x][fc_order[1]] + "</b> relative to other <b>" + domain[x].superordinate + "?</b>",
      condition_1: fc_order[0],
      condition_2: fc_order[1],
      item_cond: current_item,
      item: domain[x][current_item],
      stim_id: domain[x].stim_id,
      degree: domain[x].degree,
      adj_positive: domain[x].adj_positive,
      adj_negative: domain[x].adj_negative,
      superordinate: domain[x].superordinate
    }
// add view data to list of views for the chosen domain
    domain_views.push(view)

  }

  return domain_views
}

const items = {

  // ---------  DARKNESS: DARK - LIGHT (10) -----------

    darkness: [
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
          pronoun: "it",
          context: "You are going for a walk and notice the color of a PHRASE.",

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
          pronoun: "it",
          context: "You bought a can of PHRASE and are testing it for the first time."
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
          pronoun: "it",
          context: "You are at a bakery and look at the color of a PHRASE."
      },

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
          pronoun: "it",
          context: "You step outside during the PHRASE.",
          environment_mod: "out here"
      },
      {
          stim_id: "5",
          author_id: "3",
          degree: "darkness",
          adj_positive: "light",
          adj_negative: "dark",
          superordinate: "scripts",
          high: "piece of chalk",
          medium: "pen",
          low: "pencil",
          pronoun: "it",
          context: "You are writing with a PHRASE and notice the color of the script."
      },

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
          pronoun: "it",
          context: "You are creating a flower bouquet and pick out a PHRASE."
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
          pronoun: "it",
          context: "You take a walk and notice the coat of a PHRASE."
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
          pronoun: "it",
          context: "You are at a zoo and notice the fur color of a PHRASE."
      },

  ],

// --------- HARDNESS : HARD -SOFT (6) -----------

    hardness: [

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
        pronoun: "it",
        context: "You are at a vegetable market and pick up a PHRASE."
    },

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
        pronoun: "it",
        context: "You are eating a PHRASE."
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
        pronoun: "it",
        context: "You step onto the PHRASE floor of a room."
    },

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
        pronoun: "it",
        context: "You pick up a PHRASE."
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
        pronoun: "it",
        context: "You are at a hardware store and pick up a piece of PHRASE."
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
        pronoun: "it",
        context: "You are in your bedroom and sit on a PHRASE."
    }
  ],

// -------- HEIGHT : TALL - SHORT (6) -----------


    height: [
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
          pronoun: "it",
          context: "You are at a zoo and look at a PHRASE."
      },

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
          pronoun: "it",
          context: "You are looking at PRE PHRASE."
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
          pronoun: "they",
          context: "You see PRE PHRASE."
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
          pronoun: "it",
          context: "You are looking at a PHRASE."
      },

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
          pronoun: "they",
          context: "You see a PHRASE."
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
        pronoun: "it",
        context: "You are walking in a botanical garden and see PRE PHRASE."
      }
  ],


// ----------- DURATION / LENGTH : LONG - SHORT (8)----------

    length: [

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
        pronoun: "it",
        context: "You are at a pet store and notice the length of a PHRASE."
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
        pronoun: "it",
        context: "You are at a friend's house and notice the size of their pet PHRASE."
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
        pronoun: "it",
        context: "You think about reading your favorite PHRASE."
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
        pronoun:"it",
        context: "You see a friend driving a PHRASE."
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
        pronoun: "it",
        context: "You think about watching your favorite PHRASE."
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
        pronoun: "it",
        context: "You are looking at PRE PHRASE on Google Maps."
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
        pronoun: "it",
        context: "You look up information about an upcoming PHRASE."
    },
    {
      stim_id: "28",
      author_id: "custom",
      degree: "length_duration",
      high: "opera",
      low: "song",
      medium: "podcast episode",
      superordinate: "audio recordings",
      pre_high: "an",
      pre_low: "a",
      pre_medium: "a",
      adj_positive: "long",
      adj_negative: "short",
      pronoun: "it",
      context: "You are considering listening to your favorite PHRASE."
    }
  ],


// ------------ LOUDNESS : LOUD - / NOISY - QUIET (12) ----------

    loudness: [
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
          pronoun: "it",
          context: "You are listening to a PHRASE."
      },
      {
          stim_id: "30",
          author_id: "8",
          degree: "loudness_n",
          adj_positive: "noisy",
          adj_negative: "quiet",
          superordinate: "venues",
          high: "party",
          medium: "conference center",
          low: "church",
          pronoun: "it",
          context: "You meet a friend at a PHRASE.",
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
          pronoun: "it",
          context: "You are at a friend's place and hear their pet PHRASE."
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
          pronoun: "it",
          context: "You are spending your Saturday night at a PHRASE.",
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
          pronoun: "it",
          context: "You are taking a walk in a park and hear the cry of a PHRASE."
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
          pronoun: "it",
          context: "You are listening to a friend playing the PHRASE."
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
          pronoun: "they",
          context: "You are in a room with PRE PHRASE."
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
          pronoun: "it",
          context: "You are planning to move and read about a nearby PHRASE.",
          environment_mod: "there"
      },

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
          pronoun: "it",
          context: "You are on the sidewalk and hear PRE PHRASE drive by."
      },

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
          pronoun: "it",
          context: "You are in a forest and hear a PHRASE."
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
          pronoun: "it",
          context: "You are at a lake and hear the sound of a PHRASE."
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
          pronoun: "it",
          context: "You want to play music and try out PRE PHRASE."
      }
  ],


// ------------ PRICE: EXPENSIVE - CHEAP (12) -----------

    price: [
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
          pronoun: "it",
          context: "You are at a decoration shop and look at a statue made of PHRASE."
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
          pronoun: "it",
          context: "You are looking to rent a new place and checks out PRE PHRASE."
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
      //     pronoun: "they",
      //     context: "You are shopping for a snack and checks out some PHRASE."
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
          pronoun: "they",
          context: "You are shopping for shoes and look at a pair of PHRASE."
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
          pronoun: "it",
          context: "You are shopping for spices and look at PHRASE."
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
          pronoun: "it",
          context: "You want to buy a bracelet and look at one made of PHRASE."
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
          pronoun: "it",
          context: "You are clothing shopping and look at a PHRASE."
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
          pronoun: "they",
          context: "You are shopping for berries and look at the price of PHRASE."
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
          pronoun: "it",
          context: "You are at the butchershop and look at a piece of PHRASE."
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
           pronoun: "it",
           context: "You are at a liquor store and want to buy a PHRASE."
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
            pronoun: "it",
            context: "You are considering different places for dinner and look at the menu of a PHRASE."
        }

   ],

// -------------SIZE : BIG - SMALL (11) -------------

    size: [
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
          pronoun: "it",
          context: "You are at a gardening store and look at a PHRASE."
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
          pronoun: "it",
          context: "You are at the zoo and see PRE PHRASE."
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
          pronoun: "it",
          context: "You are looking in an insect terrarium and see PRE PHRASE."
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
      //     pronoun: "it",
      //     context: "You are walking down the street and see a PHRASE."
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
          pronoun: "it",
          context: "You are at a farmer's market and pick up a PHRASE."
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
          pronoun: "it",
          context: "You are at an aquarium and see a PHRASE."
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
          pronoun: "it",
          context: "You see your friend's new PHRASE."
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
          pronoun: "it",
          context: "You are shopping at an appliances store and look at PRE PHRASE. "
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
          pronoun: "it",
          context: "You are taking a walk and see a PHRASE."
      }
  ],

// --------------- SPEED : QUICK / FAST - SLOW (8) -------------

    speed: [
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
          pronoun: "they",
          context: "You are in the park and see a PHRASE."
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
          pronoun: "it",
          context: "You are at the zoo and watch PRE PHRASE move."
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
          pronoun: "it",
          pre_medium: "a",
          pre_high: "an",
          pre_low: "a",
          context: "You want to cook dinner and consider using PRE PHRASE."
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
          pronoun: "it",
          context: "You see a PHRASE on the highway."
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
          pronoun: "it",
          context: "You are travelling on your friend's new PHRASE."
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
          pronoun: "it",
          context: "You are at a friend's house and see their pet PHRASE come towards them."
      },

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
          pronoun: "they",
          context: "You are taking a walk with PRE PHRASE."
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
          pronoun: "it",
          context: "You are at an airport and see a PHRASE in the air."
      }
  ],

// -------------- STRENGTH : STRONG -WEAK (7)------------------

    strength: [
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
          pronoun: "they",
          context: "You watch PRE PHRASE lift up a box."
      },

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
          pronoun: "it",
          context: "You are hearing about the PHRASE that is heading towards you."
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
          pronoun: "they",
          context: "You are watching a PHRASE lift weights."
      },

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
          pronoun: "it",
          context: "You are painting and try a new PHRASE."
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
          pronoun: "they",
          context: "You are examining the walls of a friend's new PHRASE."
      }
  ],

// ------------ TEMPERATURE : HOT / WARM - COLD (8) ---------
    temp: [
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
          pronoun: "it",
          context: "You take the first bite of your PHRASE."
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
          pronoun: "it",
          context: "You take the first sip from a PHRASE."
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
          pronoun: "it",
          context: "You step outside on a day in PHRASE."
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
          pronoun: "it",
          context: "You are in your kitchen and put your hand in the PHRASE."
      },

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
          pronoun: "it",
          context: "You are spending your Saturday at PRE PHRASE."
      },
      {
          stim_id: "77",
          author_id: "custom",
          degree: "temperature_h",
          high: "chocolate fondue",
          medium: "muffin",
          low: "smoothie",
          superordinate: "food",
          adj_positive: "hot",
          adj_negative: "cold",
          pronoun: "it",
          context: "You are at a restaurant and take a taste of a PHRASE. "
      }
  ],

// ------ WEIGHT: HEAVY - LIGHT (8)-------------
    weight: [
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
          pronoun: "it",
          context: "You are at the zoo and watch PRE PHRASE being lifted."
      },

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
          pronoun: "they",
          context: "You lift up PRE PHRASE."
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
          pronoun: "it",
          context: "You are at an electronics store and pick up a PHRASE."
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
          pronoun: "it",
          context: "You are helping a friend move and pick up their PHRASE."
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
          pronoun: "it",
          context: "You are walking outside and pick up a PHRASE."
      },

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
          pronoun: "it",
          context: "You are at a craft shop and pick up a piece of PHRASE."
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
          pronoun: "it",
          context: "You learn about the weight of a friend's new PHRASE."
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
          pronoun: "it",
          context: "You are at a grocery store and pick up a PHRASE."
      }
  ],

// --------- WIDTH: WIDE - NARROW (5)

    width: [
      {
          stim_id: "86",
          author_id: "9",
          degree: "width",
          adj_positive: "wide",
          adj_negative: "narrow",
          superordinate: "animal dens",
          high: "bear den",
          medium: "fox den",
          low: "mouse den",
          pronoun: "it",
          context: "You are in a forest and see a PHRASE."
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
          pronoun: "it",
          context: "You are driving on a PHRASE."//,
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
          pronoun: "it",
          context: "You are standing at the bank of a PHRASE."
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
          pronoun: "it",
          context: "You are walking on PRE PHRASE."//,
          // environment_mod: "out here"
      },

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
        pronoun: "it",
        context: "You are attempting to move furniture through the PHRASE of a house."
      }
  ]
}

// joining the lists of views for single dimensions together into one list of all trial views, shuffled in 05_view.js
const trial_info = {
  main:  create_view(items.size).concat(
    create_view(items.length).concat(create_view(items.price).concat(
      create_view(items.weight).concat(create_view(items.loudness).concat(
        create_view(items.darkness).concat(create_view(items.height).concat(
          create_view(items.temp).concat(create_view(items.speed).concat(
            create_view(items.hardness).concat(create_view(items.strength).concat(
              create_view(items.width)
            )))))))))))

}

const random_adj = _.shuffle(["beautiful", "purple", "wild", "green", "shiny"])
const mem_check_items = _.shuffle(trial_info.main).slice(0,10)
const memory_check = {
  catch: [
  { memory1: mem_check_items[0].adj_positive + " " + mem_check_items[0].item,
    memory2: mem_check_items[1].adj_negative + " " + mem_check_items[1].item,
    memory3: mem_check_items[2].adj_positive + " " + mem_check_items[2].item,
    memory4: random_adj[0] + " " + mem_check_items[3].item,
    memory5: random_adj[1] + " " + mem_check_items[4].item,
    memory6: random_adj[2] + " " + mem_check_items[5].item,
    memory7: mem_check_items[6].adj_positive + " " + mem_check_items[6].item ,
    memory8: random_adj[3] + " " + mem_check_items[7].item,
    memory9: random_adj[4] + " " + mem_check_items[8].item,
    memory10: mem_check_items[9].adj_negative + " " + mem_check_items[9].item}
  ]
}
