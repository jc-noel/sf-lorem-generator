import { categoryWeights } from '../data/categoryWeights.js';
import { data } from '../data/categories.js';

export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const getRandomWeightedCategory = () => {
    const totalWeight = Object.values(categoryWeights).reduce((a, b) => a + b, 0);
    const randomWeight = Math.random() * totalWeight;

    let currentWeight = 0;
    for (const category of data.categories) {
        currentWeight += categoryWeights[category.name];
        if (randomWeight < currentWeight) {
            return category;
        }
    }
    return data.categories[data.categories.length - 1];
}

export const getRandomValue = (category) => category.values[getRandomInt(category.values.length)];