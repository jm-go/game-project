// Imports
import { Word, wordsArray } from "./data";

// Global variables
let currentWord: Word | null = null;
let activeInfo = false; // Flag to track the state
export let playerLives: number = 5;
let mysteryWordTracker: string = "";
let gameOver = false;
let playerWon = false;

/**
 * Generates a random word from the provided array of words.
 *
 * @param {Words[]} wordsArray - An array of word objects, each containing a 'word' and a 'category'.
 * @returns {Words} An object containing a randomly selected word and its category.
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
 * @param {HTMLElement} wordBox - The HTML element where the mystery word is to be displayed.
 */
export const updateMysteryWord = (wordBox: HTMLElement) => {
  const randomWord = getRandomWord(wordsArray);
  currentWord = randomWord; // Update the global variable
  const hiddenWord = generateMysteryWord(randomWord);
  wordBox.innerHTML = hiddenWord;
  mysteryWordTracker = hiddenWord;
};

/**
 * Retrieves the category of the current word as a hint.
 * This function checks if a current word is set and returns its category as a hint.
 * Otherwise, it returns a default message indicating that no word is available.
 *
 * @returns {string} The category of the current word as a hint, or a default message.
 */
export const getHint = (): string => {
  if (currentWord) {
    return currentWord.category;
  } else {
    return "No word selected yet.";
  }
};

/**
 * Displays a hint in the hintBox element.
 * This function calls {@link getHint} to retrieve the current word's category
 * and updates the innerHTML of the hint output element.
 *
 * @param {HTMLOutputElement} hintBox - The HTML output element where the hint is to be displayed.
 */
export const displayHint = (hintBox: HTMLOutputElement) => {
  hintBox.innerHTML = `${getHint()}`;
};

// TO DO!!
export const startGame = (
  hintBox: HTMLOutputElement,
  keyboard: NodeListOf<HTMLButtonElement>,
  wordBox: HTMLElement,
  livesContainer: NodeListOf<HTMLElement>
) => {
  updateMysteryWord(wordBox);
  playerLives = 5;
  hintBox.textContent = "";
  gameOver = false;
  playerWon = false;
  resetKeyboard(keyboard);
  restartLives(livesContainer);

  // Add other functionalities
  // keyboard's buttons status reset - function done
};

const restartLives = (livesContainer: NodeListOf<HTMLElement>) => {
  livesContainer.forEach((element) => {
    element.textContent = `💚`;
  });
};

/**
 * Toggles the display of game instructions and keyboard buttons.
 * When active, it shows the instructions and hides the keyboard buttons.
 * When not, it hides the instructions and shows the keyboard buttons.
 * The function uses the {@link activeInfo} flag to track the toggle state.
 *
 * @param {NodeListOf<HTMLButtonElement>} keyboardButtons - All keyboard button elements.
 * @param {HTMLElement} instructions - The HTML element with game instructions.
 */
export const displayInfo = (
  keyboardButtons: NodeListOf<HTMLButtonElement>,
  instructions: HTMLElement
) => {
  if (!activeInfo) {
    instructions.style.display = "flex";
    activeInfo = true;
    keyboardButtons.forEach((button) => {
      button.style.display = "none";
    });
  } else {
    instructions.style.display = "none";
    keyboardButtons.forEach((button) => {
      button.style.display = "";
    });
    activeInfo = false;
  }
};

export const displayWinOrLoseMessage = (
  keyboardButtons: NodeListOf<HTMLButtonElement>,
  displayBox: HTMLElement
) => {
  if (gameOver) {
    // displayBox.innerHTML = `You lost!`;
    displayBox.style.display = "flex";
    keyboardButtons.forEach((button) => {
      button.style.display = "none";
    });
  } else if (playerWon) {
    // displayBox.innerHTML = `Congratulations, you won!`;
    displayBox.style.display = "flex";
    keyboardButtons.forEach((button) => {
      button.style.display = "none";
    });
  } else {
    displayBox.style.display = "none";
  }
};

/**
 * Handles the click event on the keyboard buttons.
 * When button is clicked, it checks if the currentWord contains the clicked letter.
 * If it does, the letter is revealed in the wordBox.
 * Otherwise, it handles the incorrect guess (e.g., deducting a life).
 * It also disables the clicked button and modifies its appearance to indicate it's been used.
 *
 * @param {Event} event - The click event triggered by clicking a keyboard button.
 * @param {HTMLElement} wordBox - The HTML element where the mystery word is displayed.
 */
export const handleKeyboardClick = (
  event: Event,
  wordBox: HTMLElement,
  livesContainer: NodeListOf<HTMLElement>
) => {
  const target = event.currentTarget as HTMLButtonElement;
  if (currentWord !== null) {
    const letter = target.value.toLocaleLowerCase();
    if (currentWord.word.includes(letter)) {
      revealGuessedLetter(letter, currentWord, wordBox);
    } else {
      playerLives -= 1;
      livesContainer[playerLives].textContent = ""; //this is broken, I can't use innerHTML
      trackGameStatus(playerLives);
    }
    target.disabled = true;
    target.style.opacity = "0%";
    target.style.cursor = "default";
  } else {
    console.log("currentWord is null");
  }
};

/**
 * Updates the displayed hidden word with the correctly guessed letter.
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

const trackGameStatus = (life: number) => {
  if (life === 5) {
    //hangman pic 1
  }
  if (life === 4) {
    //hangman pic 1
  }
  if (life === 3) {
    //hangman pic 1
  }
  if (life === 2) {
    //hangman pic 1
  }
  if (life === 1) {
    //hangman pic 1
  }
  if (life === 0) {
    gameOver = true;
  } else {
    trackProgress();
  }
};

const trackProgress = () => {
  if (!mysteryWordTracker.includes("_")) {
    playerWon = true;
  }
};

//update game status
// 1.     Keep track of correct and incorrect guesses.
// 3. Update the game__hangman-lives based on incorrect guesses.

// win / lose condition

//game restart functionality
