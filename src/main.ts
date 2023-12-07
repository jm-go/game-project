// Imports
import "./main.scss";
// "../style.css"; check later which import should stay here
import {
  displayHint,
  displayInfo,
  handleKeyboardClick,
  startGame,
  displayEndMessage,
  playerLives,
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
const keyboardButtons = document.querySelectorAll<HTMLButtonElement>(
  ".game__keyboard-button"
);
const wordBox = document.querySelector<HTMLElement>(".game__word");
const instructions = document.querySelector<HTMLElement>(".game__instructions");
const livesContainer = document.querySelectorAll<HTMLElement>(
  ".game__hangman-lives"
);
const singleLife = document.querySelectorAll<HTMLElement>(
  ".game__hangman-life"
);
const messageBox = document.querySelector<HTMLElement>(
  ".game__message"
);

// Handle errors for selectors
if (
  !mysteryWord ||
  !newGame ||
  !hintButton ||
  !hintBox ||
  !infoButton ||
  !keyboardContainer ||
  !keyboardButtons ||
  !wordBox ||
  !instructions ||
  !livesContainer ||
  !singleLife ||
  !messageBox
) {
  throw new Error("Issue with the selector.");
}

// Event listeners
hintButton.addEventListener("click", () => {
  displayHint(hintBox, singleLife);
});

newGame.addEventListener("click", () => {
  startGame(hintBox, keyboardButtons, wordBox, singleLife, messageBox);
});

infoButton.addEventListener("click", () => {
  displayInfo(keyboardButtons, instructions);
});

keyboardButtons.forEach((button) => {
  button.addEventListener("click", (event) =>
    handleKeyboardClick(event, wordBox, singleLife)
  );
});

keyboardButtons.forEach((button) => {
  button.addEventListener("click", () =>
    displayEndMessage(messageBox));
});

hintButton.addEventListener("click", () => displayEndMessage(messageBox));
