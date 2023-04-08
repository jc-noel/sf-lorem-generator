import { categoryWeights } from './data/categoryWeights.js';
import { presets } from './data/presets.js';
import { generateSciFiLoremIpsum } from './generator.js';

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