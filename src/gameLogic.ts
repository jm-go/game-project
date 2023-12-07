// Imports
import { Word, wordsArray, hangmanImages, OnScreenMessages } from "./data/data";

// Global variables
let currentWord: Word | null = null; // Holds the current word object from the words array.
let activeInfo = false; // Tracks whether the info overlay is active.
export let playerLives: number = 5; // Player's remaining lives, initialised to 5.
let mysteryWordTracker: string = ""; // Tracks the current state of the displayed mystery word.
let gameOver = false; // Flag to indicate if the game is over.
let playerWon = false; // Flag to indicate if the player has won.

/**
 * Generates a random word from the provided array of words.
 *
 * @param {Words[]} wordsArray - An array of word objects, each containing a 'word' and a 'hint'.
 * @returns {Words} An object containing a randomly selected word and its hint.
 */
export const getRandomWord = (wordsArray: Word[]): Word => {
  const randomIndex = Math.floor(Math.random() * wordsArray.length);
  return wordsArray[randomIndex];
};

/**
 * Generates a string representation of the mystery word with underscores for each letter.
 *
 * @param {Word} mysteryWord - An object containing the word to be hidden.
 * @returns {string} A string with underscores for each letter of the mystery word.
 */
export const generateMysteryWord = (mysteryWord: Word): string => {
  const wordAsArray = mysteryWord.word.split("");
  const hiddenArray = wordAsArray.map((letter) => {
    letter = "_";
    return letter;
  });
  return hiddenArray.join(" ");
};

/**
 * Updates the displayed mystery word in the game interface.
 * This function takes an HTML element, generates a random word using {@link getRandomWord},
 * replaces each letter with an underscore using {@link generateMysteryWord},
 * and updates the inner HTML of the element with this new string.
 *
 * @param {HTMLElement} wordBox - The HTML element where the mystery word is displayed.
 */
export const updateMysteryWord = (wordBox: HTMLElement) => {
  const randomWord = getRandomWord(wordsArray);
  currentWord = randomWord; // Update the global variable
  const hiddenWord = generateMysteryWord(randomWord);
  wordBox.innerHTML = hiddenWord;
  mysteryWordTracker = hiddenWord;
};

/**
 * Retrieves the hint for the current word.
 * This function checks if a current word is set and returns its hint as a hint.
 * Otherwise, it returns a default message indicating that no word is available.
 *
 * @returns {string} The hint for the current word, or a default message.
 */
export const getHint = (): string => {
  if (currentWord) {
    return currentWord.hint;
  } else {
    return "No word selected yet.";
  }
};

/**
 * Displays a hint in the hintBox element.
 * This function retrieves the current word's hint with {@link getHint} and updates the content of hintBox.
 * It deducts one life from the player, updates the lives display, and adjusts the hangman picture accordingly.
 * The hint button is disabled after use to prevent multiple uses in the same game.
 *
 * @param {HTMLOutputElement} hintBox - The HTML output element that displays hint.
 * @param {NodeListOf<HTMLElement>} livesContainer - Contains elements representing player's lives.
 * @param {HTMLButtonElement} hintButton - The button used to trigger the display of a hint.
 * @param {HTMLElement} hangmanPicture - The HTML element displaying the current state of the hangman.
 * @param {HTMLElement} wordBox - The HTML element displaying the current state of the mystery word.
 */
export const displayHint = (
  hintBox: HTMLOutputElement,
  livesContainer: NodeListOf<HTMLElement>,
  hintButton: HTMLButtonElement,
  hangmanPicture: HTMLElement,
  wordBox: HTMLElement
) => {
  hintBox.innerHTML = `${getHint()}`;
  if (currentWord !== null) {
    playerLives -= 1;
    livesContainer[playerLives].textContent = "";
    trackPlayerLives(playerLives, hangmanPicture, wordBox);
    hintButton.disabled = true;
    hintButton.style.opacity = "70%";
    hintButton.style.cursor = "default";
  }
};

/**
 * Initialises and starts a new game.
 * This function sets up a new mystery word, resets player lives and clears the hint box.
 * It also resets the state of the keyboard, player's lives display, and hint button.
 * The hangman picture is also reset to its initial state.
 *
 * @param {HTMLOutputElement} hintBox - The HTML output element where hints are displayed.
 * @param {NodeListOf<HTMLButtonElement>} keyboard - Contains all keyboard buttons.
 * @param {HTMLElement} wordBox - The HTML element where the mystery word is displayed.
 * @param {NodeListOf<HTMLElement>} livesContainer - Contains elements representing player's lives.
 * @param {HTMLElement} messageBox - The HTML element used to display end game messages.
 * @param {HTMLButtonElement} hintButton - The button element used to display a hint.
 * @param {HTMLElement} hangmanPicture - The HTML element displaying the hangman image.
 */
export const startGame = (
  hintBox: HTMLOutputElement,
  keyboard: NodeListOf<HTMLButtonElement>,
  wordBox: HTMLElement,
  livesContainer: NodeListOf<HTMLElement>,
  messageBox: HTMLElement,
  hintButton: HTMLButtonElement,
  hangmanPicture: HTMLElement
) => {
  updateMysteryWord(wordBox);
  playerLives = 5;
  hintBox.textContent = "";
  gameOver = false;
  playerWon = false;
  messageBox.textContent = "";
  resetKeyboard(keyboard);
  restartLives(livesContainer);
  hintButton.disabled = false;
  hintButton.style.removeProperty("opacity");
  hintButton.style.cursor = "pointer";
  hangmanPicture.innerHTML = `<img class="game__hangman-pic" src="${hangmanImages[playerLives]}" alt="Hangman" />`;
};

/**
 * Resets the lives display to the initial state.
 * It iterates over each element in livesContainer.
 *
 * @param {NodeListOf<HTMLElement>} livesContainer - HTMLElements representing the player's lives.
 */
const restartLives = (livesContainer: NodeListOf<HTMLElement>) => {
  livesContainer.forEach((element) => {
    element.textContent = `💚`;
  });
};

/**
 * Toggles the display of game instructions and keyboard buttons.
 * When activated, it displays the game instructions while hiding
 * the keyboard buttons and the end game message if such is being displayed.
 * When deactivated, it hides the instructions and displays both the keyboard buttons and the end game message.
 * The function uses the {@link activeInfo} flag to track the toggle status.
 *
 * @param {NodeListOf<HTMLButtonElement>} keyboardButtons - All keyboard button elements.
 * @param {HTMLElement} instructions - The HTML element containing the game instructions.
 * @param {HTMLElement} messageBox - The HTML element used for displaying the game message.
 */
export const displayInfo = (
  keyboardButtons: NodeListOf<HTMLButtonElement>,
  instructions: HTMLElement,
  messageBox: HTMLElement
) => {
  if (!activeInfo) {
    instructions.style.display = "flex";
    messageBox.style.display = "none";
    activeInfo = true;
    keyboardButtons.forEach((button) => {
      button.style.display = "none";
    });
  } else {
    instructions.style.display = "none";
    messageBox.style.display = "flex";
    keyboardButtons.forEach((button) => {
      button.style.display = "";
    });
    activeInfo = false;
  }
};

/**
 * Displays the end game message depending on the game's outcome.
 * If the player has won (playerWon is true), it displays a success message.
 * If the game is over (gameOver is true), it displays a failure message.
 * The message content is retrieved from the OnScreenMessages object.
 *
 * @param {HTMLElement} messageBox - The HTMLElement used for displaying end game messages.
 */
export const displayEndMessage = (messageBox: HTMLElement) => {
  if (playerWon) {
    messageBox.textContent = OnScreenMessages.SUCCESS;
  }
  if (gameOver) {
    messageBox.textContent = OnScreenMessages.FAILURE;
  }
};

/**
 * Handles the click event on the keyboard buttons.
 * It checks if the clicked letter is part of the current mystery word.
 * If it is, the letter is revealed in the wordBox.
 * If not, it deducts one life from the player, updates the hangman and lives display.
 * Once a button is clicked, it gets disabled to prevent repeated guesses.
 * The function also checks if the game has already been won or lost to prevent further interaction.
 *
 * @param {Event} event - The click event triggered by clicking a keyboard button.
 * @param {HTMLElement} wordBox - The HTML element where the mystery word is displayed.
 * @param {NodeListOf<HTMLElement>} livesContainer - HTMLElements representing the player's remaining lives.
 * @param {HTMLElement} messageBox - The HTMLElement where the end game message is displayed.
 * @param {HTMLElement} hangmanPicture - The HTMLElement where the hangman image is displayed.
 */
export const handleKeyboardClick = (
  event: Event,
  wordBox: HTMLElement,
  livesContainer: NodeListOf<HTMLElement>,
  messageBox: HTMLElement,
  hangmanPicture: HTMLElement
) => {
  if (playerWon || gameOver) {
    return;
  }
  const target = event.currentTarget as HTMLButtonElement;
  const letter = target.value.toLocaleLowerCase();

  if (currentWord !== null) {
    if (currentWord.word.includes(letter)) {
      revealGuessedLetter(letter, currentWord, wordBox);
      if (playerWon) {
        displayEndMessage(messageBox);
      }
    } else {
      playerLives--;
      livesContainer[playerLives].textContent = "";
      trackPlayerLives(playerLives, hangmanPicture, wordBox);
    }
    target.disabled = true;
    target.style.opacity = "0%";
    target.style.cursor = "default";
  } else {
    console.log("currentWord is null");
  }
};

/**
 * This function updates the displayed hidden word with the correctly guessed letter.
 * It also updates the mysteryWordTracker with the current state of the displayed word.
 * The {@link trackProgress} function checks if the player has successfully guessed the entire word.
 *
 * @param {string} guessedLetter - The letter guessed by the user.
 * @param {Word} currentWord - The current word object.
 * @param {HTMLElement} wordBox - The HTML element with the mystery word.
 */
export const revealGuessedLetter = (
  guessedLetter: string,
  currentWord: Word,
  wordBox: HTMLElement
) => {
  const word = currentWord.word;
  let displayedWord = wordBox.innerHTML.split(" ");
  // Replace the underscores with the guessed letter at the correct positions
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === guessedLetter.toLowerCase()) {
      displayedWord[i] = guessedLetter;
    }
  }
  wordBox.innerHTML = displayedWord.join(" ");
  mysteryWordTracker = wordBox.innerHTML;
  trackProgress();
};

/**
 * Resets the state of all keyboard buttons to their default.
 * This function iterates over each button in the provided NodeList and re-enables them.
 * It also removes any styles related applied when the buttons were disabled.
 *
 * @param {NodeListOf<HTMLButtonElement>} keyboard - A NodeList representing the keyboard buttons.
 */
export const resetKeyboard = (keyboard: NodeListOf<HTMLButtonElement>) => {
  keyboard.forEach((button) => {
    button.disabled = false;
    button.style.removeProperty("opacity");
    button.style.removeProperty("cursor");
  });
};

/**
 * Tracks the player's remaining lives and updates the hangman image accordingly.
 * The hangman image is changed based on the number of lives left.
 * It keeps track of player's remaining lives. If no lives are left, it sets the gameOver flag to true.
 * When the game is over, it reveals the full word in the wordBox.
 *
 * @param {number} life - The current number of player's lives.
 * @param {HTMLElement} hangmanPicture - The HTML element with the hangman image.
 * @param {HTMLElement} wordBox - The HTML element with the mystery word.
 */
const trackPlayerLives = (
  life: number,
  hangmanPicture: HTMLElement,
  wordBox: HTMLElement
) => {
  const imageNumber = hangmanImages[life];
  if (imageNumber) {
    hangmanPicture.innerHTML = `<img class="game__hangman-pic" src="${hangmanImages[life]}" alt="Hangman" />`;
  }

  if (life > 0) {
    trackProgress();
  } else {
    gameOver = true;
    if (currentWord !== null)
      wordBox.textContent = currentWord.word.split("").join(" ");
  }
};

/**
 * Checks if the player has successfully guessed the mystery word.
 * This function uses {@link mysteryWordTracker} to check if there are any underscores left.
 * If no, it sets playerWon to true.
 */
const trackProgress = () => {
  if (!mysteryWordTracker.includes("_") && mysteryWordTracker !== "") {
    playerWon = true;
  }
};
