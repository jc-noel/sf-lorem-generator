import { data } from './data/categories.js';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const getRandomCategory = () => data.categories[getRandomInt(data.categories.length)];

const getRandomValue = (category) => category.values[getRandomInt(category.values.length)];

const createSentence = () => {
    const [word1, word2, word3, word4] = Array(4).fill().map(() => getRandomValue(getRandomCategory()));

    const sentenceTemplates = [
        `${word1} ${word2} ${word3} ${word4}.`,
        `In ${word3}, ${word1} ${word4} with ${word2}.`,
        `${word2} ${word1}, ${word4} ${word3}.`,
        `The ${word3} ${word1} is ${word4} by ${word2}.`,
        `${word4} or ${word1}, ${word2} is ${word3}.`,
        `From ${word2} to ${word1}, ${word4} ${word3}.`,
        `${word3} beyond ${word1}, ${word4} ${word2}.`,
        `Throughout ${word4}, ${word2} ${word3} ${word1}.`,
        `${word1}, ${word3} ${word2} through ${word4}.`,
        `Between ${word3} and ${word1}, ${word4} ${word2}.`,
        `In the ${word2}, ${word3} ${word1} ${word4}.`,
        `${word4} ${word2}, yet ${word1} ${word3}.`,
        `${word1}, ${word4} around ${word3} ${word2}.`,
        `${word3} ${word2} ${word1}, except ${word4}.`,
        `${word2} and ${word4} in ${word1} and ${word3}.`,
        `A ${word4} ${word1}, ${word2} the ${word3}.`,
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

const output = document.getElementById('output');
const generate = document.getElementById('generate');
const numParagraphsInput = document.getElementById('numParagraphs');
const numSentencesInput = document.getElementById('numSentences');

const startingSentence = '';

generate.addEventListener('click', () => {
    const numberOfParagraphs = parseInt(numParagraphsInput.value, 10);
    const numberOfSentences = parseInt(numSentencesInput.value, 10);
    output.innerText = generateSciFiLoremIpsum(numberOfParagraphs, numberOfSentences, startingSentence);
});

const numberOfParagraphs = parseInt(numParagraphsInput.value, 10);
const numberOfSentences = parseInt(numSentencesInput.value, 10);
output.innerText = generateSciFiLoremIpsum(numberOfParagraphs, numberOfSentences, startingSentence);