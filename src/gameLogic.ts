// Imports
import { Word, wordsArray } from "./data";

// Global variables
let currentWord: Word | null = null;
let originalKeyboardContent = ""; // Variable to store original content
let activeInfo = false; // Flag to track the state

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

// Clear content of hintBox and global variables // extend comment
export const startGame = (hintBox: HTMLOutputElement) => {
  currentWord = null;
  hintBox.innerHTML = "";
  // Add other functionalities
  // keyboard's buttons status reset
};

// add comment
export const displayInfo = (infoBox: HTMLElement) => {
  if (!activeInfo) {
    // Save the original content if it's not already saved
    if (!originalKeyboardContent) {
      originalKeyboardContent = infoBox.innerHTML;
    }

    infoBox.innerHTML = `
      <p><strong>How to Play Hangman</strong></p><br>
      <ul>
        <li>Click a <strong>New Game</strong> to begin.</li>
        <li><strong>Guess Letters</strong> using on-screen keyboard. Each incorrect guess will deduct one life.</li>
        <li>If you're stuck, <strong>use the Hint.</strong> Be cautious! Using a hint will cost you one life.</li>
        <li>You <strong>win</strong> the game if you guess the word fully. Good luck!</li>
      </ul>`;

    infoBox.style.margin = "1.5rem 2rem";
    infoBox.style.color = "white";
    infoBox.style.fontSize = "0.65rem";
    infoBox.style.textAlign = "justify";
    activeInfo = true;
  } else {
    // Restore the original content
    infoBox.innerHTML = originalKeyboardContent;
    infoBox.style.removeProperty("margin");
    infoBox.style.removeProperty("color");
    infoBox.style.removeProperty("fontSize");
    infoBox.style.removeProperty("textAlign");
    activeInfo = false; // Reset the flag
  }
};

//handler for new game and info

//handler for keyboard click
// 1. When a button is clicked, check if the letter is in the selected word.
// 2. Disable the button after it's clicked to prevent repeated guesses of the same letter.

export const handleKeyboardClick = (event: Event, wordBox: HTMLElement) => {
  const target = event.currentTarget as HTMLButtonElement;
  if (currentWord !== null) {
    const letter = target.value.toLocaleLowerCase();
    if (currentWord.word.includes(letter)) {
      revealGuessedLetter(letter, currentWord, wordBox);
    } else {
      // incorrect guess - deduct one life
    }
    target.disabled = true;
    target.style.color = "grey";
    target.style.cursor = "default";
    target.style.backgroundColor = "black";
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
};

//update game status
// 1.     Keep track of correct and incorrect guesses.
// 2. Reveal correctly guessed letters in the game__word section.
// 3. Update the game__hangman-lives based on incorrect guesses.

// win / lose condition

//hint functionality

//game restart functionality
