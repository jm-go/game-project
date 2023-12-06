// Imports
import "./main.scss";
// "../style.css"; check later which import should stay here
import {
  updateMysteryWord,
  displayHint,
  startGame,
  displayInfo,
  handleKeyboardClick,
  resetKeyboard
} from "./gameLogic";

// Selectors
const mysteryWord = document.querySelector<HTMLElement>(".game__word");
const newGame = document.querySelector<HTMLButtonElement>(
  ".navbar__button-start"
);
const hintButton =
  document.querySelector<HTMLButtonElement>(".game__hint-button");
const hintBox = document.querySelector<HTMLOutputElement>(".game__hint-text");
const infoButton = document.querySelector<HTMLButtonElement>(
  ".navbar__button-info"
);
const keyboardContainer =
  document.querySelector<HTMLElement>(".game__keyboard");
const keyboardButtons = document.querySelectorAll<HTMLButtonElement>(".game__keyboard-button");
const wordBox = document.querySelector<HTMLElement>(".game__word");

// Handle errors for selectors
if (
  !mysteryWord ||
  !newGame ||
  !hintButton ||
  !hintBox ||
  !infoButton ||
  !keyboardContainer ||
  !keyboardButtons ||
  !wordBox
) {
  throw new Error("Issue with the selector.");
}

// Event listeners
newGame.addEventListener("click", () => updateMysteryWord(mysteryWord)); // Change it later to one listener

hintButton.addEventListener("click", () => {
  displayHint(hintBox);
});

newGame.addEventListener("click", () => {
  //startGame(hintBox);
  resetKeyboard(keyboardButtons);
  // Add other functions necessary to run the game
});

infoButton.addEventListener("click", () => {
  displayInfo(keyboardContainer);
  // Finish implementation
});

keyboardButtons.forEach((button) => {
  button.addEventListener("click", (event) => handleKeyboardClick(event, wordBox));
});
