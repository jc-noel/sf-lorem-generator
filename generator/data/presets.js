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
    none: {
        categoryWeights: {
            technology: 1,
            species: 1,
            locations: 1,
            concepts: 1,
        },
        sentenceTemplates: [
            `{word1} {word2} {word3} {word4}.`,
            `in {word3}, {word1} {word4} with {word2}.`,
            `{word2} {word1}, {word4} {word3}.`,
            `the {word3} {word1} is {word4} by {word2}.`,
            `{word4} or {word1}, {word2} is {word3}.`,
            `from {word2} to {word1}, {word4} {word3}.`,
            `{word3} beyond {word1}, {word4} {word2}.`,
            `throughout {word4}, {word2} {word3} {word1}.`,
            `{word1}, {word3} {word2} through {word4}.`,
            `between {word3} and {word1}, {word4} {word2}.`,
            `in the {word2}, {word3} {word1} {word4}.`,
            `{word4} {word2}, yet {word1} {word3}.`,
            `{word1}, {word4} around {word3} {word2}.`,
            `{word3} {word2} {word1}, except {word4}.`,
            `{word2} and {word4} in {word1} and {word3}.`,
        ]
    },
    spaceOpera: {
        categoryWeights: {
            technology: 1,
            species: 2,
            locations: 2,
            concepts: 1,
        },
        sentenceTemplates: [
            `aboard the {word1} starship, the {word2} species explored the {word3} system.`,
            `the {word3} conflict between the {word2} and the {word2} took place near the {word1} nebula.`,
            `in the {word2} system, the {word1} technology unlocked the secrets of {word4} space travel.`,
            `the {word2} species built the {word1} space station in the orbit of {word3} planet.`,
            `a legendary {word1} artifact from the {word2} species was discovered on the {word3} moon.`,
            `the {word2} species and {word2} formed an alliance to protect the {word3} system.`,
            `the {word1} wormhole connected the {word3} system, home to the {word2} species.`,
            `in {word3}, the {word2} species used the {word1} technology to harness the power of {word4}.`,
            `the {word2} species colonized the {word3} planet using advanced {word1} terraforming techniques.`,
            `a space convoy from the {word2} species passed through the {word1} asteroid field on their way to the {word3} outpost.`,
        ]
    },
    cyberpunk: {
        categoryWeights: {
            technology: 2,
            species: 0.5,
            locations: 1.5,
            concepts: 2,
        },
        sentenceTemplates: [
            `the {word1} technology allowed hackers to breach the {word2} {word3}, uncovering {word4} secrets.`,
            `in the bustling city of {word2}, the streets were illuminated by {word1} neon signs, where {word3} and {word4} thrived.`,
            `mega-corporations like {word1} exerted their control over {word2} through advanced {word3} technology and manipulation of {word4}.`,
            `amid the {word1} skyline, {word2} agents engaged in covert {word3} operations to preserve their {word4} agenda.`,
            `hidden within the depths of {word1}, a {word2} underground lab was developing cutting-edge {word3} technology for {word4} purposes.`,
            `the notorious {word1} gang controlled the {word2} district, using their {word3} prowess to maintain a grip on {word4}.`,
            `in the heart of the {word1} city, {word2} dealers traded {word3} tech for a taste of {word4} power.`,
            `the {word1} district was a dark reflection of {word2}, where the {word3} underworld thrived amidst the chaos of {word4}.`,
            `a new form of {word1} technology was being developed in the {word2} sector, promising to revolutionize {word3} and reshape {word4}.`,
            `the {word1} cybernetic enhancements enabled the {word2} to blur the line between {word3} and {word4}, redefining what it meant to be human.`,
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
            `the {word1} device transported {word2} back to the {word3} era, revealing the mysteries of {word4}.`,
            `in the year {word3}, the {word1} technology enabled {word2} to alter the course of {word4}.`,
            `the {word1} time machine granted {word2} a glimpse into the {word3} world, experiencing {word4} events firsthand.`,
            `time travelers hailing from {word3} introduced {word4} concepts to the {word2} inhabitants, using {word1} technology.`,
            `a cryptic {word1} artifact transported {word2} to an alternate {word3} reality, where {word4} possibilities awaited.`,
            `lost in the {word3} timeline, {word2} sought a {word1} solution to restore the balance of {word4}.`,
            `the {word1} time experiment involving {word2} led to unforeseen {word3} consequences and unraveling {word4} secrets.`,
            `in a last-ditch effort, {word2} harnessed the {word1} mechanism to avert the {word3} catastrophe and preserve {word4}.`,
            `by utilizing the {word1} technology, {word2} unlocked the enigmas of {word3} history and {word4} knowledge.`,
            `the {word3} epoch was characterized by groundbreaking {word1} advancements and the exploration of {word2} in relation to {word4}.`,
        ],
    },
    postApocalyptic: {
        categoryWeights: {
            technology: 0.5,
            species: 1,
            locations: 2,
            concepts: 1.5,
        },
        sentenceTemplates: [
            `in the desolate remains of {word3}, the {word2} survivors fought for the scarce {word4} resources.`,
            `the ravaged {word3} landscape was inhabited by resilient {word2} and the struggle for {word4} survival.`,
            `amidst the wreckage of {word3}, survivors relied on their {word2} instincts to adapt and overcome {word4} challenges.`,
            `the fall of {word3} civilization marked the end of the {word2} era and the emergence of new {word4} realities.`,
            `beyond the devastated {word3} region, the {word2} explorers discovered a safe haven in the midst of {word4} adversity.`,
            `in the harsh {word3} environment, the {word2} survivors forged an uneasy alliance to face the {word4} threats.`,
            `the once-thriving {word3} metropolis, now a ghostly {word2} remnant, stood as a testament to the {word4} collapse.`,
            `in a world ravaged by {word4} devastation, the {word2} survivors became the last beacon of hope in the desolate {word3} landscape.`,
            `scavengers roamed the {word3} wasteland, seeking the remnants of {word2} society and clinging to the hope of {word4} redemption.`,
            `the {word2} survivors banded together in the desolate {word3} world, striving to rebuild their lives amidst the shattered {word4} dreams.`,
        ],
    },
    steampunk: {
        categoryWeights: {
            technology: 2,
            species: 0.5,
            locations: 1,
            concepts: 1.5,
        },
        sentenceTemplates: [
            `the {word1} machinery powered the {word2} city of {word3}, filling the air with {word4} wonder.`,
            `in the bustling metropolis of {word3}, steam-powered {word1} technology and {word2} inhabitants coexisted in a world of {word4} intrigue.`,
            `the {word1} locomotive, a marvel of {word3} engineering, showcased the {word2} era's {word4} progress.`,
            `clockwork {word1} automatons and steam-driven {word2} contraptions populated the {word3} streets, bringing {word4} fantasies to life.`,
            `the towering {word1} structure stood as a testament to the {word2} ingenuity and the {word3} city's {word4} aspirations.`,
            `amid the ornate {word3} skyline, {word2} adventurers soared on {word1} wings of {word4} imagination.`,
            `the development of {word1} technology in the {word3} society gave rise to {word2} innovation and {word4} breakthroughs.`,
            `beneath the bustling {word3} cityscape, the {word2} underworld hid {word1} secrets and {word4} mysteries.`,
            `the {word3} workshop, filled with {word1} gadgets and gizmos, was a hub for {word2} inventors seeking to unlock the potential of {word4}.`,
            `the fusion of {word1} technology and {word2} craftsmanship defined the {word3} aesthetic, embracing a {word4} vision of the future.`,
        ],
    },
    dystopia: {
        categoryWeights: {
            technology: 1,
            species: 0.5,
            locations: 2,
            concepts: 2.5,
        },
        sentenceTemplates: [
            `in {word1}, {word2} struggled against {word3} {word4}.`,
            `the rulers of {word1} used {word2} and {word3} to maintain control over {word4}.`,
            `amid the towering {word1} buildings, the dilapidated {word2} sector embodied the {word3} {word4} divide.`,
            `the {word1} regime used {word2} surveillance and propaganda to suppress {word3} rebellion against their {word4} authority.`,
            `in {word1}, {word2} faced a bleak reality and the fleeting hope of {word3} revolution against the {word4} system.`,
            `the {word1} world's iron grip on {word2} gave rise to a small but determined {word3} resistance against the {word4} regime.`,
            `whispers of forbidden {word2} and a long-forgotten {word3} knowledge fueled the flames of {word4} rebellion in {word1}.`,
            `the {word1} military's ruthless tactics were a cruel reminder of the brutality that {word2} and {word3} endured under {word4} oppression.`,
            `in {word1}, the {word2} minority lived in constant fear of the {word3} majority and the pervasive influence of {word4} propaganda.`,
            `the {word1} rebels planned their daring attack on the {word2} {word3} to ignite a larger revolution against {word4} rule.`,
        ],
    },
};