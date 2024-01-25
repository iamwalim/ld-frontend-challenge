/**
 * Calculates the total power of a Pokemon based on its individual stats.
 *
 * @param {Object} pokemon - The Pokemon object containing individual stats.
 * @returns {number} The total power of the Pokemon.
 */
export const calculatePower = (pokemon) => {
    return (
        pokemon.hp +
        pokemon.attack +
        pokemon.defense +
        pokemon.special_attack +
        pokemon.special_defense +
        pokemon.speed
    );
};

/**
 * Debounces a function, ensuring it is not called more frequently than specified milliseconds.
 *
 * @param {Function} fn - The function to be debounced.
 * @param {number} ms - The debounce interval in milliseconds.
 * @returns {Function} The debounced version of the function.
 */
export const debounce = (fn, ms) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(context, args);
      }, ms);
    };
};

/**
 * Delays the execution of a Promise, simulating a delay in asynchronous operations.
 *
 * @param {number} ms - The delay duration in milliseconds.
 * @returns {Promise<void>} A Promise that resolves after the specified delay.
 */
export const delaySimulation = (ms) => new Promise(resolve => setTimeout(resolve, ms));