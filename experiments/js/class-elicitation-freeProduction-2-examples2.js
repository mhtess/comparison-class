var examples = [
  {
    "degree": "size",
    "target": "big",
    "phrase": "chimpanzees",
    "supercategory": "animals",
    "subcategory": "chimpanzee",
    "type": "subcategory"
  },
  {
    "degree": "size",
    "target": "big",
    "phrase": "monkeys",
    "supercategory": "animals",
    "subcategory": "chimpanzee",
    "type": "in between"
  },
  {
    "degree": "size",
    "target": "small",
    "phrase": "chimpanzees",
    "supercategory": "animals",
    "subcategory": "chimpanzee",
    "type": "subcategory"
  },
  {
    "degree": "size",
    "target": "small",
    "phrase": "monkeys",
    "supercategory": "animals",
    "subcategory": "chimpanzee",
    "type": "in between"
  },
  {
    "degree": "size",
    "target": "small",
    "phrase": "primates",
    "supercategory": "animals",
    "subcategory": "chimpanzee",
    "type": "in between"
  },
  {
    "degree": "size",
    "target": "big",
    "phrase": "elephants",
    "supercategory": "animals",
    "subcategory": "elephant",
    "type": "subcategory"
  },
  {
    "degree": "size",
    "target": "big",
    "phrase": "vegetables",
    "supercategory": "animals",
    "subcategory": "elephant",
    "type": "not relevant"
  },
  {
    "degree": "size",
    "target": "small",
    "phrase": "elephants",
    "supercategory": "animals",
    "subcategory": "elephant",
    "type": "subcategory"
  },
  {
    "degree": "size",
    "target": "small",
    "phrase": "giraffes",
    "supercategory": "animals",
    "subcategory": "elephant",
    "type": "different subcategory"
  },
  {
    "degree": "size",
    "target": "big",
    "phrase": "porcupines",
    "supercategory": "animals",
    "subcategory": "porcupine",
    "type": "subcategory"
  },
  {
    "degree": "size",
    "target": "big",
    "phrase": "critters",
    "supercategory": "animals",
    "subcategory": "porcupine",
    "type": "in between"
  },
  {
    "degree": "size",
    "target": "small",
    "phrase": "porcupines",
    "supercategory": "animals",
    "subcategory": "porcupine",
    "type": "subcategory"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "coffee",
    "supercategory": "beverages",
    "subcategory": "cup of coffee",
    "type": "subcategory"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "hot beverages",
    "supercategory": "beverages",
    "subcategory": "cup of coffee",
    "type": "in between"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "warm coffee",
    "supercategory": "beverages",
    "subcategory": "cup of coffee",
    "type": "in between"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "warm drinks",
    "supercategory": "beverages",
    "subcategory": "cup of coffee",
    "type": "in between"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "coffee",
    "supercategory": "beverages",
    "subcategory": "cup of coffee",
    "type": "subcategory"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "tea",
    "supercategory": "beverages",
    "subcategory": "cup of iced tea",
    "type": "in between"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "iced tea",
    "supercategory": "beverages",
    "subcategory": "cup of iced tea",
    "type": "subcategory"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "tea",
    "supercategory": "beverages",
    "subcategory": "cup of iced tea",
    "type": "in between"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "cold drinks",
    "supercategory": "beverages",
    "subcategory": "cup of iced tea",
    "type": "in between"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "iced tea",
    "supercategory": "beverages",
    "subcategory": "cup of iced tea",
    "type": "subcategory"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "days",
    "supercategory": "beverages",
    "subcategory": "cup of iced tea",
    "type": "not relevant"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "iced beverages",
    "supercategory": "beverages",
    "subcategory": "cup of iced tea",
    "type": "in between"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "water",
    "supercategory": "beverages",
    "subcategory": "cup of water",
    "type": "subcategory"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "cities",
    "supercategory": "beverages",
    "subcategory": "cup of water",
    "type": "not relevant"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "cities",
    "supercategory": "days of the year",
    "subcategory": "day in Fall",
    "type": "different category"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "cities",
    "supercategory": "days of the year",
    "subcategory": "day in Summer",
    "type": "different category"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "cities",
    "supercategory": "days of the year",
    "subcategory": "day in Winter",
    "type": "different category"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "water",
    "supercategory": "beverages",
    "subcategory": "cup of water",
    "type": "subcategory"
  },
  {
    "degree": "price",
    "target": "cheap",
    "phrase": "city bikes",
    "supercategory": "bikes",
    "subcategory": "city bike",
    "type": "subcategory"
  },
  {
    "degree": "price",
    "target": "cheap",
    "phrase": "bike prices",
    "supercategory": "bikes",
    "subcategory": "city bike",
    "type": "degree reference"
  },
  {
    "degree": "price",
    "target": "cheap",
    "phrase": "transportation",
    "supercategory": "bikes",
    "subcategory": "city bike",
    "type": "functional reference"
  },
  {
    "degree": "price",
    "target": "expensive",
    "phrase": "city bikes",
    "supercategory": "bikes",
    "subcategory": "city bike",
    "type": "subcategory"
  },
  {
    "degree": "price",
    "target": "cheap",
    "phrase": "electric bikes",
    "supercategory": "bikes",
    "subcategory": "electric bike",
    "type": "subcategory"
  },
  {
    "degree": "price",
    "target": "expensive",
    "phrase": "electric bikes",
    "supercategory": "bikes",
    "subcategory": "electric bike",
    "type": "subcategory"
  },
  {
    "degree": "price",
    "target": "cheap",
    "phrase": "bike costs",
    "supercategory": "bikes",
    "subcategory": "kids bike",
    "type": "degree reference"
  },
  {
    "degree": "price",
    "target": "cheap",
    "phrase": "kids bikes",
    "supercategory": "bikes",
    "subcategory": "kids bike",
    "type": "subcategory"
  },
  {
    "degree": "price",
    "target": "expensive",
    "phrase": "kids bikes",
    "supercategory": "bikes",
    "subcategory": "kids bike",
    "type": "subcategory"
  },
  {
    "degree": "sound",
    "target": "loud",
    "phrase": "electric cars",
    "supercategory": "cars",
    "subcategory": "electric car",
    "type": "subcategory"
  },
  {
    "degree": "sound",
    "target": "loud",
    "phrase": "car engines",
    "supercategory": "cars",
    "subcategory": "electric car",
    "type": "below subcategory"
  },
  {
    "degree": "sound",
    "target": "loud",
    "phrase": "car engines",
    "supercategory": "cars",
    "subcategory": "family car",
    "type": "below subcategory"
  },
  {
    "degree": "sound",
    "target": "quiet",
    "phrase": "electric cars",
    "supercategory": "cars",
    "subcategory": "electric car",
    "type": "subcategory"
  },
  {
    "degree": "sound",
    "target": "quiet",
    "phrase": "gas powered cars",
    "supercategory": "cars",
    "subcategory": "electric car",
    "type": "different subcategory"
  },
  {
    "degree": "sound",
    "target": "loud",
    "phrase": "engines",
    "supercategory": "cars",
    "subcategory": "family car",
    "type": "below subcategory"
  },
  {
    "degree": "sound",
    "target": "loud",
    "phrase": "engines",
    "supercategory": "cars",
    "subcategory": "muscle car",
    "type": "below subcategory"
  },
  {
    "degree": "sound",
    "target": "loud",
    "phrase": "family cars",
    "supercategory": "cars",
    "subcategory": "family car",
    "type": "subcategory"
  },
  {
    "degree": "sound",
    "target": "quiet",
    "phrase": "family cars",
    "supercategory": "cars",
    "subcategory": "family car",
    "type": "subcategory"
  },
  {
    "degree": "sound",
    "target": "quiet",
    "phrase": "loud",
    "supercategory": "cars",
    "subcategory": "family car",
    "type": "target reference"
  },
  {
    "degree": "sound",
    "target": "loud",
    "phrase": "muscle cars",
    "supercategory": "cars",
    "subcategory": "muscle car",
    "type": "subcategory"
  },
  {
    "degree": "sound",
    "target": "quiet",
    "phrase": "muscle cars",
    "supercategory": "cars",
    "subcategory": "muscle car",
    "type": "subcategory"
  },
  {
    "degree": "sound",
    "target": "quiet",
    "phrase": "engines",
    "supercategory": "cars",
    "subcategory": "family car",
    "type": "below subcategory"
  },
  {
    "degree": "sound",
    "target": "quiet",
    "phrase": "engines",
    "supercategory": "cars",
    "subcategory": "muscle car",
    "type": "below subcategory"
  },
  {
    "degree": "size",
    "target": "big",
    "phrase": "sedans",
    "supercategory": "cars",
    "subcategory": "sedan",
    "type": "subcategory"
  },
  {
    "degree": "size",
    "target": "small",
    "phrase": "sedans",
    "supercategory": "cars",
    "subcategory": "sedan",
    "type": "subcategory"
  },
  {
    "degree": "size",
    "target": "big",
    "phrase": "sports cars",
    "supercategory": "cars",
    "subcategory": "sports car",
    "type": "subcategory"
  },
  {
    "degree": "size",
    "target": "small",
    "phrase": "sports cars",
    "supercategory": "cars",
    "subcategory": "sports car",
    "type": "subcategory"
  },
  {
    "degree": "size",
    "target": "big",
    "phrase": "SUVs",
    "supercategory": "cars",
    "subcategory": "SUV",
    "type": "subcategory"
  },
  {
    "degree": "size",
    "target": "small",
    "phrase": "SUVs",
    "supercategory": "cars",
    "subcategory": "SUV",
    "type": "subcategory"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "days",
    "supercategory": "beverages",
    "subcategory": "cup of iced tea",
    "type": "not relevant"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "seasons",
    "supercategory": "days of the year",
    "subcategory": "day in Fall",
    "type": "in between"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "seasons",
    "supercategory": "days of the year",
    "subcategory": "day in Summer",
    "type": "in between"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "seasons",
    "supercategory": "days of the year",
    "subcategory": "day in Winter",
    "type": "in between"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "days in Fall",
    "supercategory": "days of the year",
    "subcategory": "day in Fall",
    "type": "subcategory"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "days in Fall in Maryland",
    "supercategory": "days of the year",
    "subcategory": "day in Fall",
    "type": "subcategory specific"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "Falls",
    "supercategory": "days of the year",
    "subcategory": "day in Fall",
    "type": "subcategory"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "seasons in Maryland",
    "supercategory": "days of the year",
    "subcategory": "day in Fall",
    "type": "in between specific"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "days in Fall",
    "supercategory": "days of the year",
    "subcategory": "day in Fall",
    "type": "subcategory"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "cities",
    "supercategory": "beverages",
    "subcategory": "cup of water",
    "type": "not relevant"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "cities",
    "supercategory": "days of the year",
    "subcategory": "day in Fall",
    "type": "different category"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "cities",
    "supercategory": "days of the year",
    "subcategory": "day in Summer",
    "type": "different category"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "cities",
    "supercategory": "days of the year",
    "subcategory": "day in Winter",
    "type": "different category"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "Falls",
    "supercategory": "days of the year",
    "subcategory": "day in Fall",
    "type": "subcategory"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "days in Summer",
    "supercategory": "days of the year",
    "subcategory": "day in Summer",
    "type": "subcategory"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "days in Summer in Maryland",
    "supercategory": "days of the year",
    "subcategory": "day in Summer",
    "type": "subcategory specific"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "Summers",
    "supercategory": "days of the year",
    "subcategory": "day in Summer",
    "type": "different category"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "seasons",
    "supercategory": "days of the year",
    "subcategory": "day in Fall",
    "type": "in between"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "seasons",
    "supercategory": "days of the year",
    "subcategory": "day in Summer",
    "type": "in between"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "seasons",
    "supercategory": "days of the year",
    "subcategory": "day in Winter",
    "type": "in between"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "months",
    "supercategory": "days of the year",
    "subcategory": "day in Summer",
    "type": "different category"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "days in Summer",
    "supercategory": "days of the year",
    "subcategory": "day in Summer",
    "type": "subcategory"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "temperatures",
    "supercategory": "days of the year",
    "subcategory": "day in Summer",
    "type": "degree reference"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "times",
    "supercategory": "days of the year",
    "subcategory": "day in Summer",
    "type": "different degree reference"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "times",
    "supercategory": "days of the year",
    "subcategory": "day in Winter",
    "type": "different category"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "Winter",
    "supercategory": "days of the year",
    "subcategory": "day in Winter",
    "type": "subcategory"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "times",
    "supercategory": "days of the year",
    "subcategory": "day in Summer",
    "type": "different degree reference"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "times",
    "supercategory": "days of the year",
    "subcategory": "day in Winter",
    "type": "different category"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "weather",
    "supercategory": "days of the year",
    "subcategory": "day in Winter",
    "type": "target reference"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "days in Winter in Maryland",
    "supercategory": "days of the year",
    "subcategory": "day in Winter",
    "type": "subcategory specific"
  },
  {
    "degree": "temperature",
    "target": "cold",
    "phrase": "Winters",
    "supercategory": "days of the year",
    "subcategory": "day in Winter",
    "type": "subcategory"
  },
  {
    "degree": "temperature",
    "target": "warm",
    "phrase": "days in Winter",
    "supercategory": "days of the year",
    "subcategory": "day in Winter",
    "type": "subcategory"
  },
  {
    "degree": "price",
    "target": "cheap",
    "phrase": "crystal vases",
    "supercategory": "flower vases",
    "subcategory": "crystal flower vase",
    "type": "subcategory"
  },
  {
    "degree": "price",
    "target": "cheap",
    "phrase": "materials",
    "supercategory": "flower vases",
    "subcategory": "crystal flower vase",
    "type": "different category"
  },
  {
    "degree": "price",
    "target": "expensive",
    "phrase": "crystal",
    "supercategory": "flower vases",
    "subcategory": "crystal flower vase",
    "type": "different category"
  },
  {
    "degree": "price",
    "target": "expensive",
    "phrase": "gifts",
    "supercategory": "flower vases",
    "subcategory": "crystal flower vase",
    "type": "different category"
  },
  {
    "degree": "price",
    "target": "cheap",
    "phrase": "glass vases",
    "supercategory": "flower vases",
    "subcategory": "glass flower vase",
    "type": "subcategory"
  },
  {
    "degree": "price",
    "target": "cheap",
    "phrase": "glass items",
    "supercategory": "flower vases",
    "subcategory": "glass flower vase",
    "type": "different category"
  },
  {
    "degree": "price",
    "target": "cheap",
    "phrase": "glass pieces",
    "supercategory": "flower vases",
    "subcategory": "glass flower vase",
    "type": "different category"
  },
  {
    "degree": "price",
    "target": "expensive",
    "phrase": "glass vases",
    "supercategory": "flower vases",
    "subcategory": "glass flower vase",
    "type": "subcategory"
  },
  {
    "degree": "price",
    "target": "cheap",
    "phrase": "plastic vases",
    "supercategory": "flower vases",
    "subcategory": "plastic flower vase",
    "type": "subcategory"
  },
  {
    "degree": "price",
    "target": "expensive",
    "phrase": "plastic vases",
    "supercategory": "flower vases",
    "subcategory": "plastic flower vase",
    "type": "subcategory"
  },
  {
    "degree": "weight",
    "target": "heavy",
    "phrase": "apples",
    "supercategory": "fruit",
    "subcategory": "apple",
    "type": "subcategory"
  },
  {
    "degree": "weight",
    "target": "light",
    "phrase": "apples",
    "supercategory": "fruit",
    "subcategory": "apple",
    "type": "subcategory"
  },
  {
    "degree": "weight",
    "target": "heavy",
    "phrase": "grapes",
    "supercategory": "fruit",
    "subcategory": "grape",
    "type": "subcategory"
  },
  {
    "degree": "weight",
    "target": "light",
    "phrase": "grapes",
    "supercategory": "fruit",
    "subcategory": "grape",
    "type": "subcategory"
  },
  {
    "degree": "weight",
    "target": "heavy",
    "phrase": "watermelons",
    "supercategory": "fruit",
    "subcategory": "watermelon",
    "type": "subcategory"
  },
  {
    "degree": "weight",
    "target": "light",
    "phrase": "watermelons",
    "supercategory": "fruit",
    "subcategory": "watermelon",
    "type": "subcategory"
  },
  {
    "degree": "weight",
    "target": "light",
    "phrase": "melons",
    "supercategory": "fruit",
    "subcategory": "watermelon",
    "type": "in between"
  },
  {
    "degree": "weight",
    "target": "heavy",
    "phrase": "coffee tables",
    "supercategory": "furniture",
    "subcategory": "coffee table",
    "type": "subcategory"
  },
  {
    "degree": "weight",
    "target": "heavy",
    "phrase": "tables",
    "supercategory": "furniture",
    "subcategory": "coffee table",
    "type": "in between"
  },
  {
    "degree": "weight",
    "target": "light",
    "phrase": "coffee tables",
    "supercategory": "furniture",
    "subcategory": "coffee table",
    "type": "subcategory"
  },
  {
    "degree": "weight",
    "target": "light",
    "phrase": "tables",
    "supercategory": "furniture",
    "subcategory": "coffee table",
    "type": "in between"
  },
  {
    "degree": "weight",
    "target": "light",
    "phrase": "tables size",
    "supercategory": "furniture",
    "subcategory": "coffee table",
    "type": "degree reference"
  },
  {
    "degree": "weight",
    "target": "heavy",
    "phrase": "lamps",
    "supercategory": "furniture",
    "subcategory": "reading lamp",
    "type": "subcategory"
  },
  {
    "degree": "weight",
    "target": "heavy",
    "phrase": "reading lamps",
    "supercategory": "furniture",
    "subcategory": "reading lamp",
    "type": "subcategory"
  },
  {
    "degree": "weight",
    "target": "heavy",
    "phrase": "size",
    "supercategory": "furniture",
    "subcategory": "reading lamp",
    "type": "degree reference"
  },
  {
    "degree": "weight",
    "target": "light",
    "phrase": "lamps",
    "supercategory": "furniture",
    "subcategory": "reading lamp",
    "type": "subcategory"
  },
  {
    "degree": "weight",
    "target": "light",
    "phrase": "reading lamps",
    "supercategory": "furniture",
    "subcategory": "reading lamp",
    "type": "subcategory"
  },
  {
    "degree": "weight",
    "target": "light",
    "phrase": "lights",
    "supercategory": "furniture",
    "subcategory": "reading lamp",
    "type": "in between"
  },
  {
    "degree": "weight",
    "target": "heavy",
    "phrase": "wardrobes",
    "supercategory": "furniture",
    "subcategory": "wardrobe",
    "type": "subcategory"
  },
  {
    "degree": "weight",
    "target": "heavy",
    "phrase": "clothes",
    "supercategory": "furniture",
    "subcategory": "wardrobe",
    "type": "different category"
  },
  {
    "degree": "weight",
    "target": "heavy",
    "phrase": "dressers",
    "supercategory": "furniture",
    "subcategory": "wardrobe",
    "type": "in between"
  },
  {
    "degree": "weight",
    "target": "heavy",
    "phrase": "furniture size",
    "supercategory": "furniture",
    "subcategory": "wardrobe",
    "type": "degree reference"
  },
  {
    "degree": "weight",
    "target": "heavy",
    "phrase": "luggage",
    "supercategory": "furniture",
    "subcategory": "wardrobe",
    "type": "different category"
  },
  {
    "degree": "weight",
    "target": "heavy",
    "phrase": "outfits",
    "supercategory": "furniture",
    "subcategory": "wardrobe",
    "type": "different category"
  },
  {
    "degree": "weight",
    "target": "light",
    "phrase": "wardrobes",
    "supercategory": "furniture",
    "subcategory": "wardrobe",
    "type": "subcategory"
  },
  {
    "degree": "weight",
    "target": "light",
    "phrase": "bedroom furniture",
    "supercategory": "furniture",
    "subcategory": "wardrobe",
    "type": "in between"
  },
  {
    "degree": "weight",
    "target": "light",
    "phrase": "dressers",
    "supercategory": "furniture",
    "subcategory": "wardrobe",
    "type": "in between"
  },
  {
    "degree": "height",
    "target": "short",
    "phrase": "basketball players",
    "supercategory": "people",
    "subcategory": "basketball player",
    "type": "subcategory"
  },
  {
    "degree": "height",
    "target": "short",
    "phrase": "players",
    "supercategory": "people",
    "subcategory": "basketball player",
    "type": "in between"
  },
  {
    "degree": "height",
    "target": "tall",
    "phrase": "basketball players",
    "supercategory": "people",
    "subcategory": "basketball player",
    "type": "subcategory"
  },
  {
    "degree": "height",
    "target": "tall",
    "phrase": "players",
    "supercategory": "people",
    "subcategory": "basketball player",
    "type": "in between"
  },
  {
    "degree": "height",
    "target": "short",
    "phrase": "gymnasts",
    "supercategory": "people",
    "subcategory": "gymnast",
    "type": "subcategory"
  },
  {
    "degree": "height",
    "target": "short",
    "phrase": "athletes",
    "supercategory": "people",
    "subcategory": "gymnast",
    "type": "in between"
  },
  {
    "degree": "height",
    "target": "short",
    "phrase": "male gymnasts",
    "supercategory": "people",
    "subcategory": "gymnast",
    "type": "subcategory specific"
  },
  {
    "degree": "height",
    "target": "tall",
    "phrase": "gymnasts",
    "supercategory": "people",
    "subcategory": "gymnast",
    "type": "subcategory"
  },
  {
    "degree": "height",
    "target": "tall",
    "phrase": "guys",
    "supercategory": "people",
    "subcategory": "gymnast",
    "type": "in between"
  },
  {
    "degree": "height",
    "target": "short",
    "phrase": "runners",
    "supercategory": "people",
    "subcategory": "runner",
    "type": "subcategory"
  },
  {
    "degree": "height",
    "target": "tall",
    "phrase": "runners",
    "supercategory": "people",
    "subcategory": "runner",
    "type": "subcategory"
  },
  {
    "degree": "height",
    "target": "tall",
    "phrase": "male runners",
    "supercategory": "people",
    "subcategory": "runner",
    "type": "subcategory specific"
  },
  {
    "degree": "light",
    "target": "dark",
    "phrase": "basements",
    "supercategory": "rooms",
    "subcategory": "basement",
    "type": "subcategory"
  },
  {
    "degree": "light",
    "target": "dark",
    "phrase": "days",
    "supercategory": "rooms",
    "subcategory": "basement",
    "type": "degree reference"
  },
  {
    "degree": "light",
    "target": "dark",
    "phrase": "days",
    "supercategory": "rooms",
    "subcategory": "living room",
    "type": "degree reference"
  },
  {
    "degree": "light",
    "target": "light",
    "phrase": "basements",
    "supercategory": "rooms",
    "subcategory": "basement",
    "type": "subcategory"
  },
  {
    "degree": "light",
    "target": "light",
    "phrase": "days",
    "supercategory": "rooms",
    "subcategory": "basement",
    "type": "degree reference"
  },
  {
    "degree": "light",
    "target": "light",
    "phrase": "days",
    "supercategory": "rooms",
    "subcategory": "living room",
    "type": "degree reference"
  },
  {
    "degree": "light",
    "target": "light",
    "phrase": "times day",
    "supercategory": "rooms",
    "subcategory": "basement",
    "type": "degree reference"
  },
  {
    "degree": "light",
    "target": "light",
    "phrase": "times day",
    "supercategory": "rooms",
    "subcategory": "living room",
    "type": "degree reference"
  },
  {
    "degree": "light",
    "target": "dark",
    "phrase": "living rooms",
    "supercategory": "rooms",
    "subcategory": "living room",
    "type": "subcategory"
  },
  {
    "degree": "light",
    "target": "dark",
    "phrase": "daytimes",
    "supercategory": "rooms",
    "subcategory": "living room",
    "type": "degree reference"
  },
  {
    "degree": "light",
    "target": "dark",
    "phrase": "times",
    "supercategory": "rooms",
    "subcategory": "living room",
    "type": "degree reference"
  },
  {
    "degree": "light",
    "target": "dark",
    "phrase": "times day",
    "supercategory": "rooms",
    "subcategory": "basement",
    "type": "degree reference"
  },
  {
    "degree": "light",
    "target": "dark",
    "phrase": "times day",
    "supercategory": "rooms",
    "subcategory": "living room",
    "type": "degree reference"
  },
  {
    "degree": "light",
    "target": "light",
    "phrase": "living rooms",
    "supercategory": "rooms",
    "subcategory": "living room",
    "type": "subcategory"
  },
  {
    "degree": "light",
    "target": "light",
    "phrase": "middays",
    "supercategory": "rooms",
    "subcategory": "living room",
    "type": "degree reference"
  },
  {
    "degree": "light",
    "target": "dark",
    "phrase": "sunrooms",
    "supercategory": "rooms",
    "subcategory": "sunroom",
    "type": "subcategory"
  },
  {
    "degree": "light",
    "target": "dark",
    "phrase": "times of day",
    "supercategory": "rooms",
    "subcategory": "sunroom",
    "type": "degree reference"
  },
  {
    "degree": "light",
    "target": "light",
    "phrase": "sunrooms",
    "supercategory": "rooms",
    "subcategory": "sunroom",
    "type": "subcategory"
  },
  {
    "degree": "light",
    "target": "light",
    "phrase": "times of day",
    "supercategory": "rooms",
    "subcategory": "sunroom",
    "type": "degree reference"
  },
  {
    "degree": "time",
    "target": "long",
    "phrase": "bike routes",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "bike route from Los Angeles to San Francisco",
    "type": "subcategory"
  },
  {
    "degree": "time",
    "target": "long",
    "phrase": "routes",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "bike route from Los Angeles to San Francisco",
    "type": "subcategory"
  },
  {
    "degree": "time",
    "target": "long",
    "phrase": "routes",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "bike route from Los Angeles to San Francisco",
    "type": "in between"
  },
  {
    "degree": "time",
    "target": "long",
    "phrase": "routes",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "driving route from Los Angeles to San Francisco",
    "type": "in between"
  },
  {
    "degree": "time",
    "target": "long",
    "phrase": "routes",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "driving route from Los Angeles to San Francisco",
    "type": "subcategory"
  },
  {
    "degree": "time",
    "target": "long",
    "phrase": "distances",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "bike route from Los Angeles to San Francisco",
    "type": "degree reference"
  },
  {
    "degree": "time",
    "target": "long",
    "phrase": "distances",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "driving route from Los Angeles to San Francisco",
    "type": "different degree reference"
  },
  {
    "degree": "time",
    "target": "long",
    "phrase": "workouts",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "bike route from Los Angeles to San Francisco",
    "type": "different category"
  },
  {
    "degree": "time",
    "target": "short",
    "phrase": "routes",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "bike route from Los Angeles to San Francisco",
    "type": "subcategory"
  },
  {
    "degree": "time",
    "target": "short",
    "phrase": "routes",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "bike route from Los Angeles to San Francisco",
    "type": "in between"
  },
  {
    "degree": "time",
    "target": "short",
    "phrase": "routes",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "driving route from Los Angeles to San Francisco",
    "type": "in between"
  },
  {
    "degree": "time",
    "target": "short",
    "phrase": "routes",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "driving route from Los Angeles to San Francisco",
    "type": "subcategory"
  },
  {
    "degree": "time",
    "target": "short",
    "phrase": "bike routes",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "bike route from Los Angeles to San Francisco",
    "type": "subcategory"
  },
  {
    "degree": "time",
    "target": "short",
    "phrase": "bike trips",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "bike route from Los Angeles to San Francisco",
    "type": "different category"
  },
  {
    "degree": "time",
    "target": "short",
    "phrase": "flights",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "bike route from Los Angeles to San Francisco",
    "type": "in between"
  },
  {
    "degree": "time",
    "target": "short",
    "phrase": "flights",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "driving route from Los Angeles to San Francisco",
    "type": "in between"
  },
  {
    "degree": "time",
    "target": "short",
    "phrase": "flights",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "flight from Los Angeles to San Francisco",
    "type": "in between"
  },
  {
    "degree": "time",
    "target": "long",
    "phrase": "drives",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "driving route from Los Angeles to San Francisco",
    "type": "subcategory"
  },
  {
    "degree": "time",
    "target": "long",
    "phrase": "drives",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "driving route from Los Angeles to San Francisco",
    "type": "different category"
  },
  {
    "degree": "time",
    "target": "long",
    "phrase": "driving routes",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "driving route from Los Angeles to San Francisco",
    "type": "subcategory"
  },
  {
    "degree": "time",
    "target": "long",
    "phrase": "flights",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "bike route from Los Angeles to San Francisco",
    "type": "in between"
  },
  {
    "degree": "time",
    "target": "long",
    "phrase": "flights",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "driving route from Los Angeles to San Francisco",
    "type": "in between"
  },
  {
    "degree": "time",
    "target": "long",
    "phrase": "flights",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "flight from Los Angeles to San Francisco",
    "type": "in between"
  },
  {
    "degree": "time",
    "target": "long",
    "phrase": "routes locations",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "driving route from Los Angeles to San Francisco",
    "type": "in between"
  },
  {
    "degree": "time",
    "target": "long",
    "phrase": "trips",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "driving route from Los Angeles to San Francisco",
    "type": "different category"
  },
  {
    "degree": "time",
    "target": "short",
    "phrase": "driving routes",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "driving route from Los Angeles to San Francisco",
    "type": "subcategory"
  },
  {
    "degree": "time",
    "target": "short",
    "phrase": "car trips",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "driving route from Los Angeles to San Francisco",
    "type": "different category"
  },
  {
    "degree": "time",
    "target": "short",
    "phrase": "distances",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "bike route from Los Angeles to San Francisco",
    "type": "degree reference"
  },
  {
    "degree": "time",
    "target": "short",
    "phrase": "distances",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "driving route from Los Angeles to San Francisco",
    "type": "different degree reference"
  },
  {
    "degree": "time",
    "target": "short",
    "phrase": "drives",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "driving route from Los Angeles to San Francisco",
    "type": "subcategory"
  },
  {
    "degree": "time",
    "target": "short",
    "phrase": "drives",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "driving route from Los Angeles to San Francisco",
    "type": "different category"
  },
  {
    "degree": "time",
    "target": "short",
    "phrase": "routes los angeles san francisco",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "driving route from Los Angeles to San Francisco",
    "type": "subcategory"
  },
  {
    "degree": "time",
    "target": "long",
    "phrase": "flights la sf",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "flight from Los Angeles to San Francisco",
    "type": "in between"
  },
  {
    "degree": "time",
    "target": "long",
    "phrase": "short flights",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "flight from Los Angeles to San Francisco",
    "type": "in between"
  },
  {
    "degree": "time",
    "target": "short",
    "phrase": "travels",
    "supercategory": "ways of getting from Los Angeles to San Francisco",
    "subcategory": "flight from Los Angeles to San Francisco",
    "type": "different category"
  }
]
