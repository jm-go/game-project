// Imports
import { Word, wordsArray } from "./data";

const mysteryWord = document.querySelector<HTMLSelectElement>(".game__word");

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
 * This function takes a 'Word' object and returns a string where each letter is replaced
 *  by an underscore.
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
