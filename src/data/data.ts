export type Word = {
  word: string;
  hint: string;
};

export const wordsArray: Word[] = [
  { word: "ocean", hint: "Vast blue expanse" },
  { word: "puzzle", hint: "Brain teaser" },
  { word: "guitar", hint: "String musical instrument" },
  { word: "jungle", hint: "Home to diverse species" }, 
  { word: "castle", hint: "Royalty's stronghold" }, 
  { word: "wizard", hint: "Fantasy spell-caster" }, 
  { word: "ballet", hint: "Classical dance form" },
  { word: "smartphone", hint: "Handheld digital gateway" },
  { word: "geyser", hint: "Natural hot spring" }, 
  { word: "tundra", hint: "Arctic biome" },
  { word: "kitten", hint: "Feline baby" }, 
  { word: "museum", hint: "Cultural treasure trove" }, 
  { word: "blueprint", hint: "Design plan" }, 
  { word: "comedy", hint: "Humorous entertainment" },
  { word: "pirate", hint: "Treasure hunter at sea" }, 
  { word: "sphinx", hint: "Mythical creature" },
  { word: "gadget", hint: "Modern convenience item" },
  { word: "fossil", hint: "Preserved ancient remains" },
  { word: "harvest", hint: "Farmer's payoff" }, 
  { word: "metropolitan", hint: "Large urban city" },
  { word: "archaeology", hint: "Ancient artifact study" },
  { word: "conundrum", hint: "Difficult problem" },
  { word: "philosophy", hint: "Wisdom's pursuit" }, 
  { word: "biotechnology", hint: "Science meets nature" }, 
  { word: "antioxidant", hint: "Prevents oxidation" },
  { word: "marathon", hint: "Long race" }, 
  { word: "zephyr", hint: "Gentle breeze" },
  { word: "revolutionary", hint: "Radical change agent" }, 
  { word: "sustainability", hint: "Eco-friendly practice" },
  { word: "dandelion", hint: "Wishful wildflower" },
  { word: "kaleidoscope", hint: "Prism of colors" },
  { word: "telescope", hint: "Stargazer's tool" },
];

type HangmanImages = {
  [key: number]: string;
};

export const hangmanImages: HangmanImages = {
  5: "/game-project/src/assets/hangman-5.png",
  4: "/game-project/src/assets/hangman-4.png",
  3: "/game-project/src/assets/hangman-3.png",
  2: "/game-project/src/assets/hangman-2.png",
  1: "/game-project/src/assets/hangman-1.png",
  0: "/game-project/src/assets/hangman-0.png",
};

export enum OnScreenMessages {
  SUCCESS = "Congratulations, you won!",
  FAILURE = "You lost!",
}
