// Imports
import { Word, wordsArray } from "./data";

// Global variables
export let currentWord : Word | null = null;

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

export const displayHint = (hintBox: HTMLOutputElement) => {
  hintBox.innerHTML = `${getHint()}`;
}

//handler for new game and info
// clear hint content and global vars 

//handler for keyboard click
// 1. When a button is clicked, check if the letter is in the selected word.
// 2. Disable the button after it's clicked to prevent repeated guesses of the same letter.

//update game status
// 1.     Keep track of correct and incorrect guesses.
// 2. Reveal correctly guessed letters in the game__word section.
// 3. Update the game__hangman-lives based on incorrect guesses.

// win / lose condition

//hint functionality

//game restart functionality
