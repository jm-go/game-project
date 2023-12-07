export type Word = {
  word: string;
  hint: string;
};

export const wordsArray: Word[] = [
  { word: "ocean", hint: "Vast blue expanse" },
  { word: "puzzle", hint: "Brain teaser" },
  { word: "guitar", hint: "String musical instrument" },
  { word: "jungle", hint: "Dense tropical forest" },
  { word: "castle", hint: "Medieval fortress" },
  { word: "wizard", hint: "Magic practitioner" },
  { word: "ballet", hint: "Classical dance form" },
  { word: "laptop", hint: "Electronic device" },
  { word: "volcano", hint: "Erupting mountain" },
  { word: "glacier", hint: "Slow-moving ice" },
  { word: "kitten", hint: "Young domestic cat" },
  { word: "museum", hint: "Historical site" },
  { word: "recipe", hint: "Cooking instructions" },
  { word: "comedy", hint: "Humorous entertainment" },
  { word: "pirate", hint: "Sea robber" },
  { word: "sphinx", hint: "Egyptian mythical creature" },
  { word: "jacket", hint: "Outerwear garment" },
  { word: "gadget", hint: "Small device or tool" },
  { word: "fossil", hint: "Preserved ancient remains" },
  { word: "harvest", hint: "Crop gathering" },
  { word: "metropolitan", hint: "Large urban city" },
  { word: "archaeology", hint: "Ancient artifact study" },
  { word: "conundrum", hint: "Difficult problem" },
  { word: "philosophy", hint: "Study of existence" },
  { word: "biotechnology", hint: "Biology-based technology" },
  { word: "antioxidant", hint: "Prevents oxidation" },
  { word: "cartography", hint: "Map making art" },
  { word: "microscope", hint: "Magnifies small objects" },
  { word: "revolutionary", hint: "Radical change agent" },
  { word: "sustainability", hint: "Eco-friendly practice" },
];

type HangmanImages = {
  [key: number]: string;
};

export const hangmanImages: HangmanImages = {
  5: "./src/assets/hangman-5.png",
  4: "./src/assets/hangman-4.png",
  3: "./src/assets/hangman-3.png",
  2: "./src/assets/hangman-2.png",
  1: "./src/assets/hangman-1.png",
  0: "./src/assets/hangman-0.png",
};