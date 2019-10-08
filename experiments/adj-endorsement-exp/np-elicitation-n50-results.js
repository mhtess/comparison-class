// adjective endorsement stimuli built from n = 50 NP free production experiment,
// trial viee context created for comparison class expt and adjusted accrodingly

const trials = function(domain) {
  var trial_list = []
  for( var x = 0; x < domain.length; x++) {
    trial_list[x] = x
  }
// take 6 trials of each domain
// ------ ADJUST FOR MORE ITEMS ---------
  var num_trials = 5
  return _.shuffle(trial_list).slice(0, num_trials)
}

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
  const np_seq = _.shuffle(["positive", "negative", "neutral", "positive", "negative", "neutral"])
  const adj_seq = _.shuffle(["adj_positive", "adj_negative", "adj_positive", "adj_negative", "adj_positive", "adj_negative"])

  for (i=0; i < sequence.length ; i++) {
    // in each domain, there are 6 Trials
    // 3 positive adj, 3 negative adj trials
    // 2 trials with each positive, negative and neutral NP


    // sample a positive, neutral or negative item
    // const current_item = item()
    const current_item = np_seq[i]
    var x = sequence[i]
    // return the one current domain item of the five
    const single_item = domain[x]
    // sample an adjective (positive or negative)
    // const adjective = adj()
    const adjective = adj_seq[i]
    // return the view data
    const view = {
      context: context_sent(current_item, single_item),
      question: "Do you think " + domain[x].pronoun + " would be " + domain[x][adjective] + "?",
      item_cond: current_item,
      item: domain[x][current_item],
      adjective_cond: adjective,
      id: domain[x].worker_id,
      degree: domain[x].degree,
      adjective: domain[x][adjective]
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
        worker_id: "1",
        stim_id: "9",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "birds",
        positive: "seagull",
        neutral: "parrot",
        negative: "crow",
        pronoun: "it",
        context: "You are going for a walk and notice the color of a PHRASE.",

    },
    {
        worker_id: "2",
        stim_id: "9",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "paint",
        positive: "white paint",
        neutral: "blue paint",
        negative: "black paint",
        pronoun: "it",
        context: "You have bought a can of PHRASE and you are testing it for the first time."
    },
    {
        worker_id: "3",
        stim_id: "15",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "desserts",
        positive: "sugar cookie",
        neutral: "fruit pie",
        negative: "chocolate cake",
        pronoun: "it",
        context: "You are at a bakery and look at the color of a PHRASE."
    },
    {
        worker_id: "4",
        stim_id: "6",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "fruit",
        positive: "orange",
        neutral: "apple",
        negative: "plum",
        pre_positive: "an",
        pre_negative: "a",
        pre_neutral: "an",
        pronoun: "it",
        context: "You are at a grocery store and pick up PRE PHRASE."
    },
    {
        worker_id: "5",
        stim_id: "13",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "times of day",
        positive: "day",
        neutral: "dusk",
        negative: "night",
        pronoun: "it",
        context: "You step outside during the PHRASE.",
        environment_mod: "out here"
    },
    {
        worker_id: "6",
        stim_id: "3",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "writing tools",
        positive: "chalk",
        neutral: "pen",
        negative: "pencil",
        pronoun: "it",
        context: "You write a sentence with a PHRASE and notice the color of the script."
    },
    {
        worker_id: "7",
        stim_id: "2",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "roads",
        positive: "highway",
        neutral: "main road",
        negative: "back road",
        pronoun: "it",
        context: "You are driving on a PHRASE in the evening.",
        environment_mod: "out here"
    },
    {
        worker_id: "8",
        stim_id: "9",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "flowers",
        positive: "daisy",
        neutral: "rose",
        negative: "dahlia",
        pronoun: "it",
        context: "You are creating a flower bouquet and pick out a PHRASE."
    },
    {
        worker_id: "9",
        stim_id: "2",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "dogs",
        positive: "poodle",
        neutral: "spaniel",
        negative: "pitbull",
        pronoun: "it",
        context: "You take a walk and notices the color of a PHRASE."
    },
    {
        worker_id: "10",
        stim_id: "3",
        degree: "darkness",
        adj_positive: "light",
        adj_negative: "dark",
        superordinate: "cats",
        positive: "jaguar",
        neutral: "tiger",
        negative: "panther",
        pronoun: "it",
        context: "You notice the fur of a PHRASE at the zoo."
    }],

// --------- HARDNESS : HARD -SOFT (10) -----------

    hardness: [
      {
        worker_id: "11",
        stim_id: "3",
        degree: "hardness",
        adj_positive: "hard",
        adj_negative: "soft",
        superordinate: "food",
        positive: "cucumber",
        neutral: "tomato",
        negative: "mushroom",
        pronoun: "it",
        context: "You pick up a PHRASE at the grocery store."
    },
    {
        worker_id: "12",
        stim_id: "6",
        degree: "hardness",
        adj_positive: "hard",
        adj_negative: "soft",
        superordinate: "fruit",
        positive: "watermelon",
        neutral: "plum",
        negative: "grape",
        pronoun: "it",
        context: "You pick up a PHRASE at a farmers' market."
    },
    {
        worker_id: "13",
        stim_id: "10",
        degree: "hardness",
        adj_positive: "hard",
        adj_negative: "soft",
        superordinate: "food",
        positive: "apple",
        neutral: "bread",
        negative: "ice cream",
        pre_positive: "an",
        pre_neutral: "",
        pre_negative: "",
        pronoun: "it",
        context: "You take a bite of PRE PHRASE."
    },
    {
        worker_id: "14",
        stim_id: "5",
        degree: "hardness",
        adj_positive: "hard",
        adj_negative: "soft",
        superordinate: "desserts",
        positive: "jolly rancher",
        neutral: "chocolate",
        negative: "marshmallow",
        pronoun: "it",
        context: "You are eating a piece of PHRASE."
    },
    {
        worker_id: "15",
        stim_id: "3",
        degree: "hardness",
        adj_positive: "hard",
        adj_negative: "soft",
        superordinate: "materials for floors",
        positive: "tile",
        neutral: "wood",
        negative: "carpet",
        pronoun: "it",
        context: "You step in a room with a PHRASE floor."
    },
    {
        worker_id: "16",
        stim_id: "7",
        degree: "hardness",
        adj_positive: "hard",
        adj_negative: "soft",
        superordinate: "furniture",
        positive: "chair",
        neutral: "bed",
        negative: "sofa",
        pronoun: "it",
        context: "You sit down on a PHRASE."
    },
    {
        worker_id: "17",
        stim_id: "3",
        degree: "hardness",
        adj_positive: "hard",
        adj_negative: "soft",
        superordinate: "fruit",
        positive: "pear",
        neutral: "mango",
        negative: "banana",
        pronoun: "it",
        context: "You pick up a PHRASE."
    },
    {
        worker_id: "18",
        stim_id: "11",
        degree: "hardness",
        adj_positive: "hard",
        adj_negative: "soft",
        superordinate: "materials",
        positive: "wood",
        neutral: "plastic",
        negative: "cotton",
        pronoun: "it",
        context: "You pick up a piece of PHRASE at a hardware store."
    },
    {
        worker_id: "19",
        stim_id: "14",
        degree: "hardness",
        adj_positive: "hard",
        adj_negative: "soft",
        superordinate: "furniture",
        positive: "bedboard",
        neutral: "pillow",
        negative: "blanket",
        pronoun: "it",
        context: "You sit down on a PHRASE in your bedroom."
    },
    {
        worker_id: "20",
        stim_id: "12",
        degree: "hardness",
        adj_positive: "hard",
        adj_negative: "soft",
        superordinate: "materials",
        positive: "concrete",
        neutral: "wood",
        negative: "fabric",
        pronoun: "it",
        context: "You are renovating your place and consider PHRASE at a building supplies store."
    }],

// -------- HEIGHT : TALL - SHORT (9) -----------

    height: [
      {
        worker_id: "21",
        stim_id: "6",
        degree: "height",
        adj_positive: "tall",
        adj_negative: "short",
        superordinate: "animals",
        positive: "giraffe",
        neutral: "monkey",
        negative: "bird",
        pronoun: "it",
        context: "You see a PHRASE at the zoo."
    },
    {
        worker_id: "22",
        stim_id: "2",
        degree: "height",
        adj_positive: "tall",
        adj_negative: "short",
        superordinate: "plants",
        positive: "tree",
        neutral: "bush",
        negative: "flower",
        pronoun: "it",
        context: "You walk in a garden and see a PHRASE."
    },
    {
        worker_id: "23",
        stim_id: "7",
        degree: "height",
        adj_positive: "tall",
        adj_negative: "short",
        superordinate: "buildings",
        positive: "skyscraper",
        neutral: "apartment building",
        negative: "srip mall",
        pre_positive: "a",
        pre_negative: "a",
        pre_neutral:"an",
        pronoun: "it",
        context: "You look at PRE PHRASE in a city."
    },
    {
        worker_id: "24",
        stim_id: "15",
        degree: "height",
        adj_positive: "tall",
        adj_negative: "short",
        superordinate: "people",
        positive: "adults",
        neutral: "teenagers",
        negative: "children",
        pre_positive: "an",
        pre_neutral: "a",
        pre_negative:"a",
        pronoun: "they",
        context: "You see PHRASE outside."
    },
    {
        worker_id: "25",
        stim_id: "6",
        degree: "height",
        adj_positive: "tall",
        adj_negative: "short",
        superordinate: "flowers",
        positive: "sunflower",
        neutral: "tulip",
        negative: "pansy",
        pronoun: "it",
        context: "You look at a PHRASE in a flowerbed."
    },
    {
        worker_id: "26",
        stim_id: "2",
        degree: "height",
        adj_positive: "tall",
        adj_negative: "short",
        superordinate: "plants",
        positive: "pine tree",
        neutral: "vine",
        negative: "shrub",
        pronoun: "it",
        context: "You see a PHRASE in a park."
    },
    {
        worker_id: "27",
        stim_id: "8",
        degree: "height",
        adj_positive: "tall",
        adj_negative: "short",
        superordinate: "athletes ",
        positive: "basketball player",
        neutral: "golfer",
        negative: "jockey",
        pronoun: "he",
        context: "You see a PHRASE called Jack."
    },
    {
      worjer_id: "28",
      stim_id: "custom",
      degree: "height",
      positive: "redwood tree",
      negative: "bonsai tree",
      neutral: "alpine tree",
      pre_positive: "a",
      pre_negative:"a",
      pre_neutral: "an",
      superordinate: "trees",
      adj_positive: "tall",
      adj_negative: "short",
      pronoun: "it",
      context: "You are walking in a forest and see PRE PHRASE."
    },
    {
      worker_id: "29",
      stim_id: "custom",
      degree: "height",
      positive: "dinosaur skeleton",
      neutral: "statue",
      negative: "doll",
      superordinate: "exihibits",
      adj_positive: "tall",
      adj_negative: "short",
      pronoun: "it",
      context: "You are at a museum and see a PHRASE."
    }],


// ----------- DURATION / LENGTH : LONG - SHORT (11)----------

    length: [
      {
        worker_id: "30",
        stim_id: "3",
        degree: "length_duration",
        adj_positive: "long",
        adj_negative: "short",
        superordinate: "clothes",
        positive: "dress pants",
        neutral: "capris",
        negative: "shorts",
        pronoun: "they",
        context: "You are shopping and look at a pair of PHRASE."
    },
    {
        worker_id: "31",
        stim_id: "3",
        degree: "length_duration",
        adj_positive: "long",
        adj_negative: "short",
        superordinate: "vehicles",
        positive: "train",
        neutral: "bus",
        negative: "car",
        prnoun: "it",
        context: "You live in a city and watch a PHRASE pass by."
    },
    {
        worker_id: "32",
        stim_id: "1",
        degree: "length_duration",
        adj_positive: "long",
        adj_negative: "short",
        superordinate: "dogs",
        positive: "dachshund",
        neutral: "bassett hound",
        negative: "chihuahua",
        pronoun: "it",
        context: "You are at a pet store and notice the length of a PHRASE."
    },
    {
        worker_id: "33",
        stim_id: "15",
        degree: "length_duration",
        adj_positive: "long",
        adj_negative: "short",
        superordinate: "animals",
        positive: "snake",
        neutral: "hamster",
        negative: "mouse",
        pronoun: "it",
        context: "You are at a friend's house and notice their pet PHRASE."
    },
    {
        worker_id: "34",
        stim_id: "12",
        degree: "length_duration",
        adj_positive: "long",
        adj_negative: "short",
        superordinate: "moving items",
        positive: "yardstick",
        neutral: "tape measure",
        negative: "ruler",
        pronoun: "it",
        context: "You rearrange your apartment and buy a PHRASE."
    },
    {
        worker_id: "35",
        stim_id: "15",
        degree: "length_duration",
        adj_positive: "long",
        adj_negative: "short",
        superordinate: "reading",
        positive: "novel",
        neutral: "story",
        negative: "poem",
        pronoun: "it",
        context: "You think about reading a PHRASE."
    },
    {
        worker_id: "36",
        stim_id: "7",
        degree: "length_duration",
        adj_positive: "long",
        adj_negative: "short",
        superordinate: "vehicles",
        positive: "limo",
        neutral: "pick up",
        negative: "smartcar",
        pronoun:"it",
        context: "You see a friend driving a PHRASE around the corner."
    },
    {
        worker_id: "37",
        stim_id: "14",
        degree: "length_duration",
        adj_positive: "long",
        adj_negative: "short",
        superordinate: "entertainment",
        positive: "movie",
        neutral: "documentary",
        negative: "sitcom",
        pronoun: "it",
        context: "You think about watching a PHRASE."
    },
    {
        worker_id: "38",
        stim_id: "1",
        degree: "length_duration",
        adj_positive: "long",
        adj_negative: "short",
        superordinate: "roads",
        positive: "highway",
        neutral: "street",
        negative: "alley",
        pre_neutral: "a",
        pre_negative: "an",
        pre_positive: "a",
        pronoun: "it",
        context: "You look up the length of PRE PHRASE on a map."
    },
    {
        worker_id: "39",
        stim_id: "3",
        degree: "length_duration",
        adj_positive: "long",
        adj_negative: "short",
        superordinate: "races",
        positive: "marathon",
        neutral: "relay",
        negative: "sprint",
        pronoun: "it",
        context: "You want to participate in a PHRASE."
    },
    {
      worker_id: "40",
      stim_id: "custom",
      degree: "length_duration",
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
    } ],


// ------------ LOUDNESS : LOUD - / NOareY - QUIET (18) ----------

    loudness: [
      {
        worker_id: "41",
        stim_id: "11",
        degree: "loudness",
        adj_positive: "loud",
        adj_negative: "quiet",
        superordinate: "animals",
        positive: "donkey",
        neutral: "dog",
        negative: "cat",
        pronoun: "it",
        context: "You walk by a courtyard and hear a PHRASE."
    },
    {
        worker_id: "42",
        stim_id: "7",
        degree: "loudness",
        adj_positive: "loud",
        adj_negative: "quiet",
        superordinate: "entertainment",
        positive: "rap concert",
        neutral: "rock concert",
        negative: "Baroque clasical concert",
        pronoun: "it",
        context: "You are at a PHRASE."
    },
    {
        worker_id: "43",
        stim_id: "8",
        degree: "loudness",
        adj_positive: "noisy",
        adj_negative: "quiet",
        superordinate: "venue",
        positive: "party",
        neutral: "meeting hall",
        negative: "church",
        pronoun: "it",
        context: "You are meeting a friend at a PHRASE.",
        environment_mod: "in here"
    },
    {
        worker_id: "44",
        stim_id: "7",
        degree: "loudness",
        adj_positive: "noisy",
        adj_negative: "quiet",
        superordinate: "pets",
        positive: "parrot",
        neutral: "cat",
        negative: "fish",
        pronoun: "it",
        context: "You are at a friend's place and see their pet PHRASE."
    },
    {
        worker_id: "45",
        stim_id: "6",
        degree: "loudness",
        adj_positive: "noisy",
        adj_negative: "quiet",
        superordinate: "venues",
        positive: "concert",
        neutral: "restaurant",
        negative: "library",
        pronoun: "it",
        context: "You are spending Saturday night at a PHRASE.",
        environment_mod: "in here"
    },
    {
        worker_id: "46",
        stim_id: "1",
        degree: "loudness",
        adj_positive: "noisy",
        adj_negative: "quiet",
        superordinate: "birds",
        positive: "rooster",
        neutral: "crow",
        negative: "finch",
        pronoun: "it",
        context: "You hear a PHRASE cry in a park."
    },
    {
        worker_id: "47",
        stim_id: "10",
        degree: "loudness",
        adj_positive: "noisy",
        adj_negative: "quiet",
        superordinate: "instruments",
        positive: "horn",
        neutral: "guitar",
        negative: "harp",
        pronoun: "it",
        context: "You are listening to a friend playing the PHRASE."
    },
    {
        worker_id: "48",
        stim_id: "2",
        degree: "loudness",
        adj_positive: "loud",
        adj_negative: "quiet",
        superordinate: "people",
        positive: "babies",
        neutral: "teenagers",
        negative: "adults",
        pre_positive: "a",
        pre_neutral: "a",
        pre_negative: "an",
        pronoun: "they",
        context: "You are in a room with PHRASE."
    },
    {
        worker_id: "49",
        stim_id: "15",
        degree: "loudness",
        adj_positive: "noisy",
        adj_negative: "quiet",
        superordinate: "places",
        positive: "city",
        neutral: "town",
        negative: "village",
        pronoun: "it",
        context: "You think about moving to a PHRASE.",
        environment_mod: "there"
    },
    {
        worker_id: "50",
        stim_id: "13",
        degree: "loudness",
        adj_positive: "loud",
        adj_negative: "quiet",
        superordinate: "rooms",
        positive: "audtorium",
        neutral: "classroom",
        negative: "study hall",
        pronoun: "it",
        context: "You walk into a school PHRASE.",
        environment_mod: "in here"
    },
    {
        worker_id: "51",
        stim_id: "7",
        degree: "loudness",
        adj_positive: "loud",
        adj_negative: "quiet",
        superordinate: "animals",
        positive: "elephant",
        neutral: "bird",
        negative: "snake",
        pre_neutral: "a",
        pre_negative: "a",
        pre_positive: "an",
        pronoun: "it",
        context: "You are watching PRE PHRASE at a zoo."
    },
    {
        worker_id: "52",
        stim_id: "1",
        degree: "loudness",
        adj_positive: "loud",
        adj_negative: "quiet",
        superordinate: "instruments",
        positive: "drum",
        neutral: "violin",
        negative: "flute",
        pronoun: "it",
        context: "You hear your friend play a PHRASE."
    },
    {
        worker_id: "53",
        stim_id: "14",
        degree: "loudness",
        adj_positive: "noisy",
        adj_negative: "quiet",
        superordinate: "vehicles",
        positive: "tractor",
        neutral: "car",
        negative: "electric car",
        pre_positive: "a",
        pre_neutral: "a",
        pre_negative: "an",
        pronoun: "it",
        context: "You are on a sidewalk and hear PRE PHRASE driving on the street."
    },
    {
        worker_id: "54",
        stim_id: "2",
        degree: "loudness",
        adj_positive: "noisy",
        adj_negative: "quiet",
        superordinate: "appliances",
        positive: "vacuum cleaner",
        neutral: "fan",
        negative: "toaster",
        pronoun: "it",
        context: "You turn on a PHRASE in your appartment."
    },
    {
        worker_id: "55",
        stim_id: "11",
        degree: "loudness",
        adj_positive: "noisy",
        adj_negative: "quiet",
        superordinate: "rooms",
        positive: "gymnasium",
        neutral: "classroom",
        negative: "library",
        pronoun: "it",
        context: "You sit in a school PHRASE.",
        environment_mod: "in here"
    },
    {
        worker_id: "56",
        stim_id: "5",
        degree: "loudness",
        adj_positive: "loud",
        adj_negative: "quiet",
        superordinate: "birds",
        positive: "mockingbird ",
        neutral: "woodpecker",
        negative: "owl",
        pre_positive: "a",
        pre_neutral: "a",
        pre_negative: "an",
        pronoun: "it",
        context: "You hear a PHRASE in a forest."
    },
    {
        worker_id: "57",
        stim_id: "7",
        degree: "loudness",
        adj_positive: "noisy",
        adj_negative: "quiet",
        superordinate: "boats",
        positive: "powerboat",
        neutral: "sailboat",
        negative: "row boat",
        pronoun: "it",
        context: "You are watching a PHRASE on a lake."
    },
    {
        worker_id: "58",
        stim_id: "10",
        degree: "loudness",
        adj_positive: "loud",
        adj_negative: "quiet",
        superordinate: "guitars",
        positive: "bass guitar",
        neutral: "acoustic guitar",
        negative: "ukelele",
        pre_positive: "a",
        pre_neutral: "an",
        pre_negative: "an",
        pronoun: "it",
        context: "You want to play music and try out PRE PHRASE."
    }
],

// ------------ PRICE: EXPENSIVE - CHEAP (12) -----------

    price: [
      {
        worker_id: "59",
        stim_id: "3",
        degree: "price",
        adj_positive: "expensive",
        adj_negative: "cheap",
        superordinate: "vehicles",
        positive: "car",
        neutral: "motorcycle",
        negative: "bicycle",
        pronoun: "it",
        context: "You consider buying a PHRASE for your commute."
    },
    {
        worker_id: "60",
        stim_id: "5",
        degree: "price",
        adj_positive: "expensive",
        adj_negative: "cheap",
        superordinate: "materials",
        positive: "platinum",
        neutral: "bronze",
        negative: "plastic",
        pronoun: "it",
        context: "You look at a statue made of PHRASE at a decoration shop."
    },
    {
        worker_id: "61",
        stim_id: "6",
        degree: "price",
        adj_positive: "expensive",
        adj_negative: "cheap",
        superordinate: "buildings",
        positive: "villa",
        neutral: "condo",
        negative: "apartment",
        pre_positive: "a",
        pre_neutral: "a",
        pre_negative: "an",
        pronoun: "it",
        context: "You are looking for a new place and check out PRE PHRASE."
    },
    {
        worker_id: "62",
        stim_id: "5",
        degree: "price",
        adj_positive: "expensive",
        adj_negative: "cheap",
        superordinate: "food",
        positive: "berries",
        neutral: "nuts",
        negative: "candies",
        pronoun: "they",
        context: "You are buying some PHRASE at a grocery store."
    },
    {
        worker_id: "63",
        stim_id: "15",
        degree: "price",
        adj_positive: "expensive",
        adj_negative: "cheap",
        superordinate: "shoes",
        positive: "boots",
        neutral: "sneakers",
        negative: "sandals",
        pronoun: "they",
        context: "You are shopping for a pair of PHRASE."
    },
    {
        worker_id: "64",
        stim_id: "2",
        degree: "price",
        adj_positive: "expensive",
        adj_negative: "cheap",
        superordinate: "spices",
        positive: "saffron",
        neutral: "garlic",
        negative: "salt",
        pronoun: "it",
        context: "You are shopping for spices and look at PHRASE."
    },
    {
        worker_id: "65",
        stim_id: "7",
        degree: "price",
        adj_positive: "expensive",
        adj_negative: "cheap",
        superordinate: "jewelery",
        positive: "gold jewelery",
        neutral: "metal jewelery",
        negative: "plastic jewelery",
        pronoun: "it",
        context: "You think about buying PHRASE."
    },
    {
        worker_id: "66",
        stim_id: "7",
        degree: "price",
        adj_positive: "expensive",
        adj_negative: "cheap",
        superordinate: "clothes",
        positive: "suit",
        neutral: "coat",
        negative: "shirt",
        pronoun: "it",
        context: "You are shopping and look at a PHRASE."
    },
    {
        worker_id: "67",
        stim_id: "15",
        degree: "price",
        adj_positive: "expensive",
        adj_negative: "cheap",
        superordinate: "fruit",
        positive: "raspberries",
        neutral: "strawberries",
        negative: "bananas",
        pronoun: "they",
        context: "You look at the price of PHRASE at a grocery store."
    },
    {
        worker_id: "68",
        stim_id: "custom",
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
         worker_id: "69",
         stim_id: "custom",
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
          worker_id: "70",
          stim_id: "custom",
          degree: "price",
          positive: "steak house",
          negative: "diner",
          neutral: "buffet",
          superordinate: "restaurants",
          adj_positive: "expensive",
          adj_negative: "cheap",
          pronoun: "it",
          context: "You are considering different places for dinner and look at the menu of a PHRASE."
      } ],



// -------------SIZE : BIG - SMALL (11) -------------

    size: [
      {
        worker_id: "71",
        stim_id: "5",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "plants",
        positive: "tree",
        neutral: "bush",
        negative: "flower",
        pronoun: "it",
        context: "You want to do some landscaping and look at a PHRASE."
    },
    {
        worker_id: "72",
        stim_id: "4",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "animals",
        positive: "elephant",
        neutral: "monkey",
        negative: "mouse",
        pre_positive: "an",
        pre_neutral: "a",
        pre_negative: "a",
        pronoun: "it",
        context: "You are at the zoo and see PRE PHRASE."
    },
    {
        worker_id: "73",
        stim_id: "10",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "insects",
        positive: "spider",
        neutral: "moth",
        negative: "ant",
        pre_positive: "a",
        pre_neutral: "a",
        pre_negative: "an",
        pronoun: "it",
        context: "You are at the zoo and see PRE PHRASE in a terrarium."
    },
    {
        worker_id: "74",
        stim_id: "3",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "buildings",
        positive: "skyscraper",
        neutral: "house",
        negative: "doghouse",
        pronoun: "it",
        context: "You walk on the street and see a PHRASE."
    },
    {
        worker_id: "75",
        stim_id: "3",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "fruit",
        positive: "watermelon",
        neutral: "peach",
        negative: "kumquat",
        pronoun: "it",
        context: "You pick up a PHRASE at a farmers' market."
    },
    {
        worker_id: "76",
        stim_id: "2",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "fareh",
        positive: "shark",
        neutral: "tuna",
        negative: "herring",
        pronoun: "it",
        context: "You ia at an aquarium and see a PHRASE."
    },
    {
        worker_id: "77",
        stim_id: "3",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "vehicles",
        positive: "truck",
        neutral: "sedan",
        negative: "smart car",
        pronoun: "it",
        context: "You see your friend's new PHRASE."
    },
    {
        worker_id: "78",
        stim_id: "7",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "appliances",
        positive: "refrigerator",
        neutral: "oven",
        negative: "toaster",
        pre_positive: "a",
        pre_neutral: "an",
        pre_negative: "a",
        pronoun: "it",
        context: "You are shopping at an appliances store and look at PRE PHRASE. "
    },
    {
        worker_id: "79",
        stim_id: "12",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "dogs",
        positive: "great dane",
        neutral: "poodle",
        negative: "chihuahua",
        pronoun: "it",
        context: "You are taking a walk and see a PHRASE."
    },
    {
        worker_id: "80",
        stim_id: "4",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "plants",
        positive: "tree",
        neutral: "cactus",
        negative: "fern",
        pronoun: "it",
        context: "You are at a botanic garden and see a PHRASE."
    },
    {
        worker_id: "81",
        stim_id: "11",
        degree: "size",
        adj_positive: "big",
        adj_negative: "small",
        superordinate: "vegetables",
        positive: "pumpkin",
        neutral: "squash",
        negative: "zucchini",
        pronoun: "it",
        context: "You pick up a PHRASE at a grocery store."
    } ],



// --------------- SPEED : QUICK / FAST - SLOW (1) -------------

    speed: [
      {
        worker_id: "82",
        stim_id: "11",
        degree: "speed",
        adj_positive: "quick",
        adj_negative: "slow",
        superordinate: "athletes",
        positive: "runner",
        neutral: "jogger",
        negative: "walker",
        pronoun: "she",
        context: "You are in the park and see a PHRASE called Anne."
    },
    {
        worker_id: "83",
        stim_id: "1",
        degree: "speed",
        adj_positive: "quick",
        adj_negative: "slow",
        superordinate: "animals",
        positive: "cheetah",
        neutral: "elephant",
        negative: "sloth",
        pre_positive: "a",
        pre_neutral: "an",
        pre_negative: "a",
        pronoun: "it",
        context: "You are at the zoo and watch PRE PHRASE move."
    },
    {
        worker_id: "84",
        stim_id: "3",
        degree: "speed",
        adj_positive: "quick",
        adj_negative: "slow",
        superordinate: "ways of cooking",
        positive: "instant pot",
        neutral: "pan",
        negative: "crockpot",
        pronoun: "it",
        pre_neutral: "a",
        pre_positive: "an",
        pre_negative: "a",
        context: "You want to cook dinner and considers using PRE PHRASE."
    },
    {
        worker_id: "85",
        stim_id: "1",
        degree: "speed",
        adj_positive: "fast",
        adj_negative: "slow",
        superordinate: "vehicles",
        positive: "motorcycle",
        neutral: "car",
        negative: "truck",
        pronoun: "it",
        context: "You see a PHRASE drive on the highway."
    },
    {
        worker_id: "86",
        stim_id: "12",
        degree: "speed",
        adj_positive: "fast",
        adj_negative: "slow",
        superordinate: "boats",
        positive: "speedboat",
        neutral: "sailboat",
        negative: "rowboat",
        pronoun: "it",
        context: "You learn about your friend's new PHRASE."
    },
    {
        worker_id: "87",
        stim_id: "1",
        degree: "speed",
        adj_positive: "quick",
        adj_negative: "slow",
        superordinate: "pets",
        positive: "rabbit",
        neutral: "cat",
        negative: "turtle",
        pronoun: "it",
        context: "You are at a friend's house and see their pet PHRASE move."
    },
    {
        worker_id: "88",
        stim_id: "4",
        degree: "speed",
        adj_positive: "fast",
        adj_negative: "slow",
        superordinate: "reptiles",
        positive: "snake",
        neutral: "lizard",
        negative: "turtle",
        pronoun: "it",
        context: "You are at the zoo and watch a PHRASE."
    },
    {
        worker_id: "89",
        stim_id: "12",
        degree: "speed",
        adj_positive: "fast",
        adj_negative: "slow",
        superordinate: "transportation",
        positive: "plane",
        neutral: "car",
        negative: "bike",
        pronoun: "it",
        context: "You want to go on holidays and think about travelling by PHRASE."
    },
    {
        worker_id: "90",
        stim_id: "13",
        degree: "speed",
        adj_positive: "fast",
        adj_negative: "slow",
        superordinate: "athletes",
        positive: "runner",
        neutral: "skiier",
        negative: "weight lifter",
        pronoun: "he",
        context: "You watch a PHRASE called Matt jog."
    },
    {
        worker_id: "91",
        stim_id: "14",
        degree: "speed",
        adj_positive: "quick",
        adj_negative: "slow",
        superordinate: "people",
        positive: "adults",
        neutral: "children",
        negative: "elderly people",
        pre_positive: "an",
        pre_neutral: "a",
        pre_negative: "a",
        pronoun: "they",
        context: "You are taking a walk with PHRASE."
    },
    {
        worker_id: "92",
        stim_id: "10",
        degree: "speed",
        adj_positive: "fast",
        adj_negative: "slow",
        superordinate: "aircrafts",
        positive: "plane",
        neutral: "helicopter",
        negative: "glider",
        pronoun: "it",
        context: "You are at an airport and watch a PHRASE in the air."
    } ],



// -------------- STRENGTH : STRONG -WEAK (7)------------------

    strength: [
      {
        worker_id: "93",
        stim_id: "4",
        degree: "strength",
        adj_positive: "strong",
        adj_negative: "weak",
        superordinate: "people",
        positive: "adults",
        neutral: "teenagers",
        negative: "children",
        pre_positive: "an",
        pre_neutral: "a",
        pre_negative: "a",
        pronoun: "they",
        context: "You watch two PHRASE lift up boxes."
    },
    {
        worker_id: "94",
        stim_id: "10",
        degree: "strength",
        adj_positive: "strong",
        adj_negative: "weak",
        superordinate: "animals",
        positive: "lion",
        neutral: "dog",
        negative: "mouse",
        pronoun: "it",
        context: "You look at a PHRASE at the zoo."
    },
    {
        worker_id: "95",
        stim_id: "3",
        degree: "strength",
        adj_positive: "strong",
        adj_negative: "weak",
        superordinate: "storms",
        positive: "tornado",
        neutral: "thunderstorm",
        negative: "rain",
        pronoun: "it",
        context: "You learn about a PHRASE that happened in another city."
    },
    {
        worker_id: "96",
        stim_id: "14",
        degree: "strength",
        adj_positive: "strong",
        adj_negative: "weak",
        superordinate: "athletes",
        positive: "wrestler",
        neutral: "cyclist",
        negative: "golf player",
        pronoun: "he",
        context: "You watch a PHRASE called Jeff lift up weights."
    },
    {
        worker_id: "97",
        stim_id: "9",
        degree: "strength",
        adj_positive: "strong",
        adj_negative: "weak",
        superordinate: "trees",
        positive: "trunk",
        neutral: "branch",
        negative: "leaf",
        pronoun: "it",
        context: "You are in a forest and look at a tree PHRASE."
    },
    {
        worker_id:"98",
        stim_id: "custom",
        degree: "strength",
        adj_positive: "strong",
        adj_negative: "weak",
        superordinate: "paints",
        positive: "oil paint",
        neutral: "wall paint",
        negative: "watercolor",
        pronoun: "it",
        context: "You are painting and try new PHRASE for the first time."
    },
    {
        worker_id: "99",
        stim_id: "custom",
        degree: "strength",
        adj_positive: "strong",
        adj_negative: "weak",
        superordinate: "buildings",
        positive: "mansion",
        neutral: "condo",
        negative: "cabin",
        pronoun: "it",
        context: "You notice the construction of a friend's new PHRASE."
    } ],


// ------------ TEMPERATURE : HOT / WARM - COLD (8) ---------
    temp: [
      {
        worker_id: "100",
        stim_id: "3",
        degree: "temperature",
        adj_positive: "warm",
        adj_negative: "cold",
        superordinate: "food",
        positive: "soup",
        neutral: "salad",
        negative: "ice cream",
        pronoun: "it",
        context: "You take the first bite of your PHRASE."
    },
    {
        worker_id: "101",
        stim_id: "3",
        degree: "temperature",
        adj_positive: "hot",
        adj_negative: "cold",
        superordinate: "drinks",
        positive: "coffee",
        neutral: "juice",
        negative: "milkshake",
        pronoun: "it",
        context: "You take a first sip from a PHRASE."
    },
    {
        worker_id: "102",
        stim_id: "14",
        degree: "temperature",
        adj_positive: "warm",
        adj_negative: "cold",
        superordinate: "seasons",
        positive: "summer",
        neutral: "fall",
        negative: "winter",
        pronoun: "it",
        context: "You step outside on a day in PHRASE."
    },
    {
        worker_id: "103",
        stim_id: "4",
        degree: "temperature",
        adj_positive: "warm",
        adj_negative: "cold",
        superordinate: "clothes",
        positive: "sweater",
        neutral: "flannel",
        negative: "shirt",
        pronoun: "it",
        context: "You consider buying a PHRASE and wearing it in the winter."
    },
    {
        worker_id: "104",
        stim_id: "12",
        degree: "temperature",
        adj_positive: "hot",
        adj_negative: "cold",
        superordinate: "appliances",
        positive: "stove",
        neutral: "pantry",
        negative: "freezer",
        pronoun: "it",
        context: "You are in your kitchen and touch the PHRASE."
    },
    {
        worker_id: "105",
        stim_id: "15",
        degree: "temperature",
        adj_positive: "hot",
        adj_negative: "cold",
        superordinate: "drinks",
        positive: "hot chocolate",
        neutral: "tea",
        negative: "soda",
        pronoun: "it",
        context: "You buy a PHRASE and take the first sip."
    },
    {
        worker_id: "106",
        stim_id: "custom",
        degree: "temperature",
        positive: "sauna",
        negative: "ice rink",
        neutral: "shopping mall",
        pre_positive: "a",
        pre_negative: "an",
        pre_neutral: "a",
        superordinate: "leareure places",
        adj_positive: "hot",
        adj_negative: "cold",
        pronoun: "it",
        context: "You are spending your Saturday at PRE PHRASE."
    },
    {
        worker_id: "107",
        stim_id: "custom",
        degree: "temperature",
        positive: "fudge cake",
        neutral: "muffin",
        negative: "smoothie",
        superordinate: "desserts",
        adj_positive: "hot",
        adj_negative: "cold",
        pronoun: "it",
        context: "You are at a restaurant and try a PHRASE after finishing your dinner. "
    }],


// ------ WEIGHT: HEAVY - LIGHT (10)-------------
    weight: [
      {
        worker_id: "108",
        stim_id: "4",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "animals",
        positive: "elephant",
        neutral: "dog",
        negative: "fish",
        pre_positive: "an",
        pre_neutral: "a",
        pre_negative: "a",
        pronoun: "it",
        context: "You are at the zoo and watch a PHRASE being lifted."
    },
    {
        worker_id: "109",
        stim_id: "7",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "people",
        positive: "adult",
        neutral: "kid",
        negative: "baby",
        pre_positive: "an",
        pre_negative: "a",
        pre_neutral: "a",
        pronoun: "she",
        context: "You lift up PRE PHRASE called Pat."
    },
    {
        worker_id: "110",
        stim_id: "1",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "electronic devices",
        positive: "laptop",
        neutral: "tablet",
        negative: "phone",
        pronoun: "it",
        context: "You are at a tech store and pick up a PHRASE."
    },
    {
        worker_id: "111",
        stim_id: "12",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "furniture",
        positive: "couch",
        neutral: "chair",
        negative: "coffee table",
        pronoun: "it",
        context: "You help a friend move and pick up a PHRASE."
    },
    {
        worker_id: "112",
        stim_id: "1",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "objects",
        positive: "rock",
        neutral: "stick",
        negative: "feather",
        pronoun: "it",
        context: "You pick up a PHRASE."
    },
    {
        worker_id: "113",
        stim_id: "1",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "materials",
        positive: "wood",
        neutral: "plastic ",
        negative: "paper",
        pronoun: "it",
        context: "You are at a material shop and pick up a piece of PHRASE."
    },
    {
        worker_id: "114",
        stim_id: "12",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "exercaree equipment",
        positive: "weight",
        neutral: "kettle ball",
        negative: "jump rope",
        pronoun: "it",
        context: "You are at the gym and take a PHRASE."
    },
    {
        worker_id: "115",
        stim_id: "7",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "materials",
        positive: "wool",
        neutral: "cotton",
        negative: "silk",
        pronoun: "it",
        context: "You are at a craft shop and pick up a piece of PHRASE."
    },
    {
        worker_id: "116",
        stim_id: "8",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "vehicles",
        positive: "car",
        neutral: "motorcycle",
        negative: "bike",
        pronoun: "it",
        context: "You learn about the weight of a friend's PHRASE."
    },
    {
        worker_id: "117",
        stim_id: "10",
        degree: "weight",
        adj_positive: "heavy",
        adj_negative: "light",
        superordinate: "fruit",
        positive: "watermelon",
        neutral: "squash",
        negative: "plum",
        pronoun: "it",
        context: "You pick up a PHRASE at a grocery store."
    } ],


// --------- WIDTH: WIDE - NARROW (6)

    width : [
      {
        worker_id: "118",
        stim_id: "9",
        degree: "width",
        adj_positive: "wide",
        adj_negative: "narrow",
        superordinate: "nature formations",
        positive: "cave",
        neutral: "cavern",
        negative: "fox hole",
        pronoun: "it",
        context: "You are in a forest and see a PHRASE."
    },
    {
        worker_id: "119",
        stim_id: "2",
        degree: "width",
        adj_positive: "wide",
        adj_negative: "narrow",
        superordinate: "roads",
        positive: "highway",
        neutral: "downtown street",
        negative: "side road",
        pronoun: "it",
        context: "You drive on a PHRASE."
    },
    {
        worker_id: "120",
        stim_id: "10",
        degree: "width",
        adj_positive: "wide",
        adj_negative: "narrow",
        superordinate: "waterways",
        positive: "river",
        neutral: "stream",
        negative: "creek",
        pronoun: "it",
        context: "You are at a PHRASE bank."
    },
    {
        worker_id: "121",
        stim_id: "4",
        degree: "width",
        adj_positive: "wide",
        adj_negative: "narrow",
        superordinate: "roads",
        positive: "avenue",
        neutral: "street",
        negative: "lane",
        pre_positive: "an",
        pre_neutral: "a",
        pre_negative: "a",
        pronoun: "it",
        context: "You walk on PRE PHRASE."
    },
    {
        worker_id: "122",
        stim_id: "2",
        degree: "width",
        adj_positive: "wide",
        adj_negative: "narrow",
        superordinate: "vehicles",
        positive: "truck",
        neutral: "car",
        negative: "golf cart",
        pronoun: "it",
        context: "You see a PHRASE on a road."
    },
    {
      worker_id: "123",
      stim_id: "custom",
      degree: "width",
      adj_positive: "wide",
      adj_negative: "narrow",
      superordinate: "doors",
      positive: "gate",
      neutral: "patio door",
      negative: "back door",
      pronoun: "it",
      context: "You are moving and consider carrying your furniture through the PHRASE."
    }]
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
