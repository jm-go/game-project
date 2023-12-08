/* This file stores utility functions used across different parts of the game */

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
 * Resets the lives display to the initial state.
 * It iterates over each element in livesContainer.
 *
 * @param {NodeListOf<HTMLElement>} livesContainer - HTMLElements representing the player's lives.
 */
export const restartLives = (livesContainer: NodeListOf<HTMLElement>) => {
  livesContainer.forEach((element) => {
    element.textContent = `💚`;
  });
};
