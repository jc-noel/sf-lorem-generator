/**
 * @fileoverview random utilities
 * @author jcnoel
 * @version 1.0.0
 * 
 * This file contains the random utilities used by the generator.
 * It contains functions to get a random integer, a random value from a category,
 * and a random weighted category.
 */

// import the category weights and categories data
import { data, categoryWeights } from '../data/categories.js';

/**
 * 
 * @param {int} max max number to generate
 * @returns {int} random integer between 0 and max
 */
export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

/**
 * 
 * @returns {object} random category from the categories data based on the category weights
 */
export const getRandomWeightedCategory = () => {
    // get the total weight of all categories
    const totalWeight = Object.values(categoryWeights).reduce((a, b) => a + b, 0);
    // get a random number between 0 and the total weight
    const randomWeight = Math.random() * totalWeight;

    let currentWeight = 0;
    // loop through the categories and add the weight of each category to the current weight
    for (const category of data.categories) {
        currentWeight += categoryWeights[category.name];
        // if the random weight is less than the current weight, return the category
        if (randomWeight < currentWeight) {
            return category;
        }
    }
    // if no category is found, return the last category
    return data.categories[data.categories.length - 1];
}

/**
 * 
 * @param {string} category category to get a random value from
 * @returns {string} random value from the category
 */
export const getRandomValue = (category) => category.values[getRandomInt(category.values.length)];