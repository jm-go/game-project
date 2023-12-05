// Imports
import "./main.scss";
// "../style.css"; check later which import should stay here
import { updateMysteryWord, displayHint, startGame, displayInfo } from "./gameLogic";

// Selectors
const mysteryWord = document.querySelector<HTMLElement>(".game__word");
const newGame = document.querySelector<HTMLButtonElement>(
  ".navbar__button-start"
);
const hintButton =
  document.querySelector<HTMLButtonElement>(".game__hint-button");
const hintBox = document.querySelector<HTMLOutputElement>(".game__hint-text");
const infoButton = document.querySelector<HTMLButtonElement>(".navbar__button-info");
const keyboardContainer = document.querySelector<HTMLElement>(".game__keyboard");

// Handle errors for selectors
if (!mysteryWord || !newGame || !hintButton || !hintBox || !infoButton ||!keyboardContainer) {
  throw new Error("Issue with the selector.");
}

// Event listeners
newGame.addEventListener("click", () => updateMysteryWord(mysteryWord));

hintButton.addEventListener("click", () => {
  displayHint(hintBox);
});

newGame.addEventListener("click", () => {
  startGame(hintBox);
  // Add other functions necessary to run the game
});

infoButton.addEventListener("click", () => {
    displayInfo();
    // Finish implementation
  });
