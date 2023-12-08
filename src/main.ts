// Imports
import "./main.scss";
import { handleKeyboardClick, startGame, displayHint} from "./game/gameLogic";

import { displayInfo, displayEndMessage } from "./game/ui";

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
const messageBox = document.querySelector<HTMLElement>(".game__message");
const hangmanPicture = document.querySelector<HTMLImageElement>(
  ".game__hangman-pic"
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
  !messageBox ||
  !hangmanPicture
) {
  throw new Error("Issue with the selector.");
}

// Event listeners

// Shows hint, deducts a life, updates hangman picture, and disables hint button.
hintButton.addEventListener("click", () => {
  displayHint(hintBox, singleLife, hintButton, hangmanPicture, wordBox);
});

// Resets the game to its initial state.
newGame.addEventListener("click", () => {
  startGame(
    hintBox,
    keyboardButtons,
    wordBox,
    singleLife,
    messageBox,
    hintButton,
    hangmanPicture
  );
});

// Toggles display of instructions and hide/show keyboard and message box.
infoButton.addEventListener("click", () => {
  displayInfo(keyboardButtons, instructions, messageBox);
});

// Handles keyboard button click.
keyboardButtons.forEach((button) => {
  button.addEventListener("click", (event) =>
    handleKeyboardClick(event, wordBox, singleLife, messageBox, hangmanPicture)
  );
});

// Displays end game message when a keyboard button is clicked and conditions met.
keyboardButtons.forEach((button) => {
  button.addEventListener("click", () => displayEndMessage(messageBox));
});

// Displays end game message when hint button is clicked and player loses the game.
hintButton.addEventListener("click", () => displayEndMessage(messageBox));
