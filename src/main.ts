// Imports
import './main.scss'
// "../style.css"; check later which import should stay here
import { Word, wordsArray } from "./data";
import { getRandomWord, generateMysteryWord, updateMysteryWord } from "./gameLogic";

// Selectors
const mysteryWord = document.querySelector<HTMLElement>(".game__word");
const newGame = document.querySelector<HTMLButtonElement>(
  ".navbar__button-start"
);

// Handle errors for selectors

if (!mysteryWord || !newGame) {
  throw new Error("Issue with the selector.");
}

newGame.addEventListener("click", () => updateMysteryWord(mysteryWord));