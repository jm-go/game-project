// Imports
import './main.scss'
// "../style.css"; check later which import should stay here
import { Words, wordsArray } from "./data";
import { getRandomWord } from "./gameLogic";

console.log(getRandomWord(wordsArray));
