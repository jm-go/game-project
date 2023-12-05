// Imports
import './main.scss'
// "../style.css"; check later which import should stay here
import { Word, wordsArray } from "./data";
import { getRandomWord, generateMysteryWord } from "./gameLogic";

const word = getRandomWord(wordsArray);
console.log(generateMysteryWord(word));
