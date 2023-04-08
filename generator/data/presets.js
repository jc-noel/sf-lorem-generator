/**
 * @fileoverview Presets for the generator
 * @author jcnoel
 * @version 1.0.0
 * 
 * This file contains the presets for the generator.
 * Presets are a set of category weights and sentence templates.
 * The category weights are used to determine the weight of each category when selecting a random category.
 * The sentence templates are used to generate the sentences.
 */

export const presets = {
    spaceOpera: {
        categoryWeights: {
            technology: 1,
            species: 2,
            locations: 1.5,
            concepts: 0.5,
        },
        sentenceTemplates: [
            `aboard the {word1}, {word2} {word3} the {word4}.`,
            `the {word3} {word1} was a symbol of {word4} for the {word2}.`,
            `in {word2} system, {word1} and {word4} shaped the {word3}.`,
            `starships like {word1} were key to the {word2}'s {word3} {word4}.`,
            `{word1} and {word2} clashed in an epic battle near the {word3} {word4}.`,
            `as the {word1} approached {word2}, {word3} prepared for a {word4} confrontation.`,
            `the {word1} {word2} was known for {word3} and {word4}.`,
            `using power of {word1}, {word2} unlocked the {word3} {word4}.`,
        ],
    },
    cyberpunk: {
        categoryWeights: {
            technology: 1.5,
            species: 0.5,
            locations: 1,
            concepts: 1,
        },
        sentenceTemplates: [
            `the {word1} hacked into the {word2} {word3}, revealing the {word4}.`,
            `{word1} roamed the neon-lit streets of {word2}, their {word3} pulsing with {word4}.`,
            `corporations like {word1} controlled the {word2}, turning {word3} into {word4}.`,
            `amidst the {word1}, {word2} {word3} fought for {word4}.`,
            `behind the {word1}, {word2} found a hidden {word3} filled with {word4}.`,
            `the {word1} {word2} was notorious in {word3} and {word4}.`,
            `in the heart of {word1}, {word2} exchanged {word3} for a taste of {word4}.`,
            `the {word1} district was {word2} and {word3}, haunted by {word4}.`,
        ],
    },
    timeTravel: {
        categoryWeights: {
            technology: 1.5,
            species: 0.5,
            locations: 1.5,
            concepts: 2,
        },
        sentenceTemplates: [
            `the {word1} activated the {word2}, sending them back to {word3} {word4}.`,
            `in the year {word1}, {word2} {word3} to change the {word4}.`,
            `the {word3} {word1} allowed {word2} to witness {word4} firsthand.`,
            `time travelers from {word1} brought {word4} to the {word2} {word3}.`,
            `a mysterious {word1} brought {word2} to a {word3} version of {word4}.`,
            `trapped in {word1}, {word2} searched for a {word3} to restore the {word4}.`,
            `the {word1} {word2} had unforeseen {word3} and {word4}.`,
            `in a desperate attempt, {word2} used the {word1} to prevent the {word3} {word4}.`,
        ],
    },
    postApocalyptic: {
        categoryWeights: {
            technology: 0.5,
            species: 1,
            locations: 1.5,
            concepts: 1,
        },
        sentenceTemplates: [
            `in the ruins of {word1}, {word2} {word3} the {word4}.`,
            `the {word1} wasteland was home to {word2} and {word3} {word4}.`,
            `survivors in {word1} relied on {word2} to {word3} {word4}.`,
            `the {word3} {word1} marked the end of {word2}'s {word4}.`,
            `beyond the {word1}, {word2} discovered a {word3} haven amidst the {word4}.`,
            `{word1} and {word2} formed an uneasy {word3} {word4}.`,
            `the {word1} {word2} was once a thriving hub, now {word4} and {word3}.`,
            `in a world {word3}, {word2} became the last {word1} {word4}.`,
        ],
    },
    steampunk: {
        categoryWeights: {
            technology: 1.5,
            species: 0.5,
            locations: 1,
            concepts: 1.5,
        },
        sentenceTemplates: [
            `the {word1} powered the {word2} {word3}, filling the air with {word4}.`,
            `in the city of {word1}, {word2} and {word3} {word4} coexisted.`,
            `the {word1} {word3} was a marvel of {word2} {word4} engineering.`,
            `clockwork {word1} and steam-driven {word2} populated the {word3} of {word4}.`,
            `the {word1} {word2} was a testament to {word3} and {word4}.`,
            `amid the {word1} skyline, {word2} soared on {word3} wings of {word4}.`,
            `the {word1} {word3} gave rise {word2} {word4} innovation.`,
            `underneath the bustling {word1}, the {word2} {word3} hid secrets of {word4}.`,
        ],
    },
    dystopia: {
        categoryWeights: {
            technology: 0.5,
            species: 1,
            locations: 2,
            concepts: 2,
        },
        sentenceTemplates: [
            `In the oppressive world of {word1}, {word2} struggled to {word3} {word4}.`,
            `The ruling class in {word1} controlled {word2} through {word3} and {word4}.`,
            `Amid the {word1} towers, the {word2} {word3} was a symbol of {word4}.`,
            `The {word1} regime used {word2} to monitor and suppress {word3} {word4}.`,
            `The citizens of {word1} were torn between {word2}'s oppressive {word3} {word4}.`,
            `{word1}'s iron grip on {word2} led to the rise of a {word3} {word4} resistance.`,
            `In the dark of {word1}, whispers of {word2} and {word3} fueled {word4}.`,
            `The {word1} {word2} was a cruel reminder {word3} and {word4} endured.`,
        ],
    },
};