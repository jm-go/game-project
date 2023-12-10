/* This file stores some of the UI-related functions */

import { OnScreenMessages } from "../data/data";
import { gameOver, playerWon } from "./gameLogic";

// Global variables
let activeInfo = false; // Tracks whether the info overlay is active.

/**
 * Toggles the display of game instructions and keyboard buttons.
 * When activated, it displays the game instructions while hiding
 * the keyboard and the end game message.
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
