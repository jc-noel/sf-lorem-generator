import { data } from './data/categories.js';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const getRandomCategory = () => data.categories[getRandomInt(data.categories.length)];

const getRandomValue = (category) => category.values[getRandomInt(category.values.length)];

const createSentence = () => {
    const [word1, word2, word3, word4] = Array(4).fill().map(() => getRandomValue(getRandomCategory()));

    const sentenceTemplates = [
        `${word1} ${word2} ${word3} ${word4}.`,
        `${word1} and ${word2} in ${word3} and ${word4}.`,
        `The ${word1} ${word2} is ${word3} by ${word4}.`,
        `A ${word1} ${word2}, ${word3} the ${word4}.`,
        `${word3} ${word1} for ${word2} ${word4}.`,
    ];

    return capitalizeFirstLetter(sentenceTemplates[getRandomInt(sentenceTemplates.length)]);
};

const createParagraph = (numberOfSentences) => Array(numberOfSentences).fill().map(createSentence).join(' ');

const generateSciFiLoremIpsum = (numberOfParagraphs, numberOfSentences, startingSentence) => {
    const paragraphs = Array(numberOfParagraphs).fill().map(() => createParagraph(numberOfSentences));
    if (startingSentence) {
        paragraphs[0] = startingSentence + ' ' + paragraphs[0];
    }
    return paragraphs.join('\n\n');
};

const numberOfParagraphs = 5;
const numberOfSentences = 4;
const startingSentence = '';
const sciFiLoremIpsum = generateSciFiLoremIpsum(numberOfParagraphs, numberOfSentences, startingSentence);

const output = document.getElementById('output');
const generate = document.getElementById('generate');

generate.addEventListener('click', () => {
    output.innerText = generateSciFiLoremIpsum(numberOfParagraphs, numberOfSentences, startingSentence);
});

output.innerText = sciFiLoremIpsum;