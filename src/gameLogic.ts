// Imports
import { Words, wordsArray } from "./data";

/**
 * Generates a random word from the provided array of words.
 *
 * @param {Words[]} wordsArray - An array of word objects, each containing a 'word' and a 'category'.
 * @returns {Words} An object containing a randomly selected word and its category.
 */
export const getRandomWord = (wordsArray: Words[]): Words => {
  const randomIndex = Math.floor(Math.random() * wordsArray.length);
  return wordsArray[randomIndex];
};

//function to display the word with underscores for each letter

//handler for new game and info

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
