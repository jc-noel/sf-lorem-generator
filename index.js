import { data } from './data/categories.js';
import { categoryWeights } from './data/categoryWeights.js';
import { presets } from './data/presets.js';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const getRandomCategory = () => {
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

const getRandomValue = (category) => category.values[getRandomInt(category.values.length)];

const createSentence = (capitalize = true) => {
    const [word1, word2, word3, word4] = Array(4).fill().map(() => getRandomValue(getRandomCategory()));

    const sentenceTemplates = [
        `${word1} ${word2} ${word3} ${word4}.`,
        `in ${word3}, ${word1} ${word4} with ${word2}.`,
        `${word2} ${word1}, ${word4} ${word3}.`,
        `the ${word3} ${word1} is ${word4} by ${word2}.`,
        `${word4} or ${word1}, ${word2} is ${word3}.`,
        `from ${word2} to ${word1}, ${word4} ${word3}.`,
        `${word3} beyond ${word1}, ${word4} ${word2}.`,
        `throughout ${word4}, ${word2} ${word3} ${word1}.`,
        `${word1}, ${word3} ${word2} through ${word4}.`,
        `between ${word3} and ${word1}, ${word4} ${word2}.`,
        `in the ${word2}, ${word3} ${word1} ${word4}.`,
        `${word4} ${word2}, yet ${word1} ${word3}.`,
        `${word1}, ${word4} around ${word3} ${word2}.`,
        `${word3} ${word2} ${word1}, except ${word4}.`,
        `${word2} and ${word4} in ${word1} and ${word3}.`,
        `a ${word4} ${word1}, ${word2} the ${word3}.`,
    ];

    const sentence = sentenceTemplates[getRandomInt(sentenceTemplates.length)];

    return capitalize ? capitalizeFirstLetter(sentence) : sentence;
};

const createParagraph = (numberOfSentences, capitalizeFirstSentence = true) => {
    const sentences = Array(numberOfSentences).fill().map((_, index) => createSentence(index === 0 ? capitalizeFirstSentence : true));
    return sentences.join(' ');
};

const generateSciFiLoremIpsum = (numberOfParagraphs, numberOfSentences, startingSentence) => {
    const paragraphs = Array(numberOfParagraphs).fill().map(() => createParagraph(numberOfSentences));
    if (startingSentence) {
        const firstSentence = createSentence(false);
        const remainingSentences = paragraphs[0].split('. ').slice(1).join('. ');
        paragraphs[0] = startingSentence + ' ' + firstSentence + ' ' + remainingSentences;
    }
    return paragraphs.join('\n\n');
};

const output = document.getElementById('output');
const generate = document.getElementById('generate');
const numParagraphsInput = document.getElementById('numParagraphs');
const numSentencesInput = document.getElementById('numSentences');
const startSentenceInput = document.getElementById('startSentence');

const presetSelect = document.getElementById('presetSelect');
const weightTechnology = document.getElementById('weightTechnology');
const weightSpecies = document.getElementById('weightSpecies');
const weightLocations = document.getElementById('weightLocations');
const weightConcepts = document.getElementById('weightConcepts');

presetSelect.addEventListener('change', () => {
    const selectedPreset = presets[presetSelect.value];
    if (selectedPreset) {
        categoryWeights.technology = selectedPreset.categoryWeights.technology;
        categoryWeights.species = selectedPreset.categoryWeights.species;
        categoryWeights.locations = selectedPreset.categoryWeights.locations;
        categoryWeights.concepts = selectedPreset.categoryWeights.concepts;

        weightTechnology.value = categoryWeights.technology;
        weightSpecies.value = categoryWeights.species;
        weightLocations.value = categoryWeights.locations;
        weightConcepts.value = categoryWeights.concepts;

        // custom sentence templates here
    }

});

weightTechnology.addEventListener('change', () => categoryWeights.technology = parseFloat(weightTechnology.value));
weightSpecies.addEventListener('change', () => categoryWeights.species = parseFloat(weightSpecies.value));
weightLocations.addEventListener('change', () => categoryWeights.locations = parseFloat(weightLocations.value));
weightConcepts.addEventListener('change', () => categoryWeights.concepts = parseFloat(weightConcepts.value));

generate.addEventListener('click', () => {
    const numberOfParagraphs = parseInt(numParagraphsInput.value, 10);
    const numberOfSentences = parseInt(numSentencesInput.value, 10);
    const startingSentence = startSentenceInput.value;
    output.innerText = generateSciFiLoremIpsum(numberOfParagraphs, numberOfSentences, startingSentence);
});

const numberOfParagraphs = parseInt(numParagraphsInput.value, 10);
const numberOfSentences = parseInt(numSentencesInput.value, 10);
const startingSentence = startSentenceInput.value;
output.innerText = generateSciFiLoremIpsum(numberOfParagraphs, numberOfSentences, startingSentence);