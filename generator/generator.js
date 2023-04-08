/**
 * @fileoverview Sci-Fi Lorem Ipsum Generator
 * @author jcnoel
 * @version 1.0.0
 * 
 * This is the main generator file. 
 * It contains the main functions to generate sentences,
 * paragraphs, and take in templates based on selected presets.
 */

// import utils and presets object
import { getRandomInt, getRandomValue, getRandomWeightedCategory } from "./utils/randomUtils.js";
import { capitalizeFirstLetter } from "./utils/textUtils.js";
import { presets } from "./data/presets.js";

/**
 * 
 * @param {array} templates templates to use for the sentence
 * @param {boolean} capitalize capitalize the first letter of the sentence
 * @returns {string} sentence
 */
export const createSentence = (templates, capitalize = true) => {
    // get 4 random words from the weighted categories
    const [word1, word2, word3, word4] = Array(4).fill().map(() => getRandomValue(getRandomWeightedCategory()));

    // replace the placeholders in the templates with the random words
    const sentenceTemplates = templates.map(
        template => template.replace(/{word1}/g, word1)
            .replace(/{word2}/g, word2)
            .replace(/{word3}/g, word3)
            .replace(/{word4}/g, word4))

    // get a random sentence template
    const sentence = sentenceTemplates[getRandomInt(sentenceTemplates.length)];

    // capitalize the first letter if capitalize is true, otherwise return the sentence
    return capitalize ? capitalizeFirstLetter(sentence) : sentence;
};

/**
 * 
 * @param {int} numberOfSentences number of sentences to create
 * @param {array} templates templates to use for the sentence
 * @param {boolean} capitalizeFirstSentence capitalize the first sentence
 * @returns {string} paragraph of sentences
 */
export const createParagraph = (numberOfSentences, templates, capitalizeFirstSentence = true) => {
    // create an array of sentences by filling an array with undefined values and mapping over it to create a sentence, capitalizing the first sentence if capitalizeFirstSentence is true
    const sentences = Array(numberOfSentences).fill().map((_, index) => createSentence(templates, index === 0 ? capitalizeFirstSentence : true));
    // join the sentences with a space and return the paragraph
    return sentences.join(' ');
};

/**
 * 
 * @param {int} numberOfParagraphs number of paragraphs to create
 * @param {int} numberOfSentences number of sentences to create
 * @param {string} startingSentence starting sentence for the first paragraph
 * @returns {string} sci-fi lorem ipsum text
 */
export const generateSciFiLoremIpsum = (numberOfParagraphs, numberOfSentences, startingSentence) => {
    // get the selected preset from the presets object
    const selectedPreset = presets[presetSelect.value];
    // get the templates from the selected preset, or an empty array if no preset is selected
    const templates = selectedPreset ? selectedPreset.sentenceTemplates : [];
    // create an array of paragraphs by filling an array with undefined values and mapping over it to create a paragraph, passing in the templates and starting sentence if they exist
    const paragraphs = Array(numberOfParagraphs).fill().map(() => createParagraph(numberOfSentences, templates));
    // if a starting sentence is provided, add it to the first paragraph
    if (startingSentence) {
        // create a sentence from the templates, not capitalizing the first letter
        const firstSentence = createSentence(templates, false);
        // split the first paragraph into sentences, remove the first sentence, and join the remaining sentences back together
        const remainingSentences = paragraphs[0].split('. ').slice(1).join('. ');
        // add the starting sentence, first sentence, and remaining sentences back together and set the first paragraph to the new paragraph
        paragraphs[0] = startingSentence + ' ' + firstSentence + ' ' + remainingSentences;
    }
    // join the paragraphs with two new lines and return the text
    return paragraphs.join('\n\n');
};