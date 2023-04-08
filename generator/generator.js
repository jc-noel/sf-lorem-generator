import { getRandomInt, getRandomValue, getRandomWeightedCategory } from "./utils/randomUtils.js";
import { capitalizeFirstLetter } from "./utils/textUtils.js";
import { presets } from "./data/presets.js";

export const createSentence = (templates, capitalize = true) => {
    const [word1, word2, word3, word4] = Array(4).fill().map(() => getRandomValue(getRandomWeightedCategory()));

    if (templates) {
        templates = templates.map(
            template => template.replace(/{word1}/g, word1)
                .replace(/{word2}/g, word2)
                .replace(/{word3}/g, word3)
                .replace(/{word4}/g, word4))
    }

    const sentenceTemplates = templates.length > 0 ? templates : [
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

export const createParagraph = (numberOfSentences, templates, capitalizeFirstSentence = true) => {
    const sentences = Array(numberOfSentences).fill().map((_, index) => createSentence(templates, index === 0 ? capitalizeFirstSentence : true));
    return sentences.join(' ');
};

export const generateSciFiLoremIpsum = (numberOfParagraphs, numberOfSentences, startingSentence) => {
    const selectedPreset = presets[presetSelect.value];
    const templates = selectedPreset ? selectedPreset.sentenceTemplates : [];
    const paragraphs = Array(numberOfParagraphs).fill().map(() => createParagraph(numberOfSentences, templates));
    if (startingSentence) {
        const firstSentence = createSentence(templates, false);
        const remainingSentences = paragraphs[0].split('. ').slice(1).join('. ');
        paragraphs[0] = startingSentence + ' ' + firstSentence + ' ' + remainingSentences;
    }
    return paragraphs.join('\n\n');
};