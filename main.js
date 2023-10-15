/**
 * 
 * @fileoverview Sci-Fi Lorem Ipsum Generator Main Entry Point
 * @author jcnoel
 * @version 1.0.0
 * @date 2023-04-08
 * 
 * This is the main entry point for the application.
 * It is responsible for setting up the UI, updating
 * the weights, and calling the generator.
 */

// bring in weights, presets, and generator
import categoryWeights from './generator/data/categories.js';
import presets from './generator/data/presets.js';
import generateSciFiLoremIpsum from './generator/generator.js';

// get the DOM elements for the UI
const output = document.getElementById('output');
const generate = document.getElementById('generate');
const numParagraphsInput = document.getElementById('numParagraphs');
const numSentencesInput = document.getElementById('numSentences');
const startSentenceInput = document.getElementById('startSentence');

// including the preset select and the weight inputs
const presetSelect = document.getElementById('presetSelect');
const weightTechnology = document.getElementById('weightTechnology');
const weightSpecies = document.getElementById('weightSpecies');
const weightLocations = document.getElementById('weightLocations');
const weightConcepts = document.getElementById('weightConcepts');

// add listener to the preset select
presetSelect.addEventListener('change', () => {
    const selectedPreset = presets[presetSelect.value];
    // if there is a preset selected, update the weights
    if (selectedPreset) {
        // first update the weights object
        categoryWeights.technology = selectedPreset.categoryWeights.technology;
        categoryWeights.species = selectedPreset.categoryWeights.species;
        categoryWeights.locations = selectedPreset.categoryWeights.locations;
        categoryWeights.concepts = selectedPreset.categoryWeights.concepts;

        // then update the UI
        weightTechnology.value = categoryWeights.technology;
        weightSpecies.value = categoryWeights.species;
        weightLocations.value = categoryWeights.locations;
        weightConcepts.value = categoryWeights.concepts;
    }
});

// add listeners to the weight inputs
weightTechnology.addEventListener('change', () => categoryWeights.technology = parseFloat(weightTechnology.value));
weightSpecies.addEventListener('change', () => categoryWeights.species = parseFloat(weightSpecies.value));
weightLocations.addEventListener('change', () => categoryWeights.locations = parseFloat(weightLocations.value));
weightConcepts.addEventListener('change', () => categoryWeights.concepts = parseFloat(weightConcepts.value));

// add listener to the generate button
generate.addEventListener('click', (event) => {
    // prevent the default form submission
    event.preventDefault();
    // get the values from the UI
    const numberOfParagraphs = parseInt(numParagraphsInput.value, 10);
    const numberOfSentences = parseInt(numSentencesInput.value, 10);
    const startingSentence = startSentenceInput.value;
    // call the generator and update the output
    output.innerText = generateSciFiLoremIpsum(numberOfParagraphs, numberOfSentences, startingSentence);
});

// on first load, generate some text using the default values
const numberOfParagraphs = parseInt(numParagraphsInput.value, 10);
const numberOfSentences = parseInt(numSentencesInput.value, 10);
const startingSentence = startSentenceInput.value;
output.innerText = generateSciFiLoremIpsum(numberOfParagraphs, numberOfSentences, startingSentence);
