/**
 * @fileoverview text utilities
 * @author jcnoel
 * @version 1.0.0
 * 
 * This file contains the text utilities used by the generator.
 * It contains a function to capitalize the first letter of a string.
 */

/**
 * @param {string} string string to capitalize
 * @returns {string} string with the first letter capitalized
 */
export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
