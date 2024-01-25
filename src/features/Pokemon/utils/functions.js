import { calculatePower } from "../../../common/helpers";

/**
 * Finds the minimum and maximum power values among a list of Pokemon data.
 *
 * @param {Array} data - The array of Pokemon data.
 * @returns {Object} An object containing the minimum and maximum power values.
 */
export const findMinMaxPower = (data) => {
    if (!data || data.length === 0) {
        return { min: 0, max: 0 };
    }

    const minPower = Math.min(...data.map((d) => calculatePower(d)));
    const maxPower = Math.max(...data.map((d) => calculatePower(d)));

    return { min: minPower, max: maxPower };
};

/**
 * Filters data by name based on a case-insensitive search term.
 *
 * @param {Object} data - The data object to be filtered.
 * @param {string} searchTerm - The search term to filter by.
 * @returns {boolean} True if the data's name includes the search term; otherwise, false.
 */
export const filterByName = (data, searchTerm) =>
    data.name.toLowerCase().includes(searchTerm.toLowerCase());

/**
 * Filters data by power based on a threshold value.
 *
 * @param {Object} data - The data object to be filtered.
 * @param {string} threshold - The power threshold to filter by.
 * @returns {boolean} True if the data's power is greater than or equal to the threshold; otherwise, false.
 */
export const filterByPower = (data, threshold) =>
    calculatePower(data) >= parseInt(threshold) || threshold === "";
