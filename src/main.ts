// Imports
import "./main.scss";
// "../style.css"; check later which import should stay here
import { updateMysteryWord, displayHint, currentWord } from "./gameLogic";

// Selectors
const mysteryWord = document.querySelector<HTMLElement>(".game__word");
const newGame = document.querySelector<HTMLButtonElement>(
  ".navbar__button-start"
);
const hintButton =
  document.querySelector<HTMLButtonElement>(".game__hint-button");
const hintBox = document.querySelector<HTMLOutputElement>(".game__hint-text");

// Handle errors for selectors
if (!mysteryWord || !newGame || !hintButton || !hintBox) {
  throw new Error("Issue with the selector.");
}

// Event listeners
newGame.addEventListener("click", () => updateMysteryWord(mysteryWord));
hintButton.addEventListener("click", () => {
    displayHint(hintBox);
});
