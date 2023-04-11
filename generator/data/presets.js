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
            technology: 0.0,
            species: 0.0,
            locations: 0.0,
            concepts: 0.0,
        },
        sentenceTemplates: [
            `{word1} ipsum {word2} {word3} dolor {word4}.`,
            `in {word3} lorem {word1} {word4} amet {word2}.`,
            `{word2} {word1}, consectetur {word4} {word3} adipiscing.`,
            `lacus {word3} {word1} eu {word4} elit ut {word2}.`,
            `sed {word4} or {word1}, {word2} vitae {word3} eiusmod.`,
            `from {word2} to {word1} tempor {word4} {word3} incididunt.`,
            `{word3} beyond {word1}, ut {word4} labore {word2}.`,
            `throughout {word4} {word2} {word3} {word1} et dolore.`,
            `magna {word1}, {word3} {word2} through {word4} aliqua.`,
            `interdum {word3} and {word1}, {word4} {word2} veniam.`,
            `in the {word2}, {word3} {word1} {word4} quis.`,
            `nostrud {word4} {word2}, dolor {word1} {word3} exercitation.`,
            `{word1}, {word4} magna {word3} {word2} ullamco.`,
            `{word3} {word2} {word1}, felis {word4} laboris.`,
            `{word2} and {word4} in {word1} and {word3} nisi.`,
            ]
    },
    spaceOpera: {
        categoryWeights: {
            technology: 3.5,
            species: 4.0,
            locations: 4.5,
            concepts: 2.0,
        },
        sentenceTemplates: [
            `aboard the {word1} ipsum starship, the {word2} species explored ut {word3} system dolor.`,
            `the {word3} conflict between enim lorem {word2} and ut {word2} took place near semper {word1} amet nebula.`,
            `in the {word2} consectetur system, the {word1} technology unlocked the secrets of {word4} space adipisicing travel.`,
            `the {word2} species built the {word1} space station in the orbit of {word3} elit planet.`,
            `a legendary {word1} artifact from the {word2} species was gravida on the {word3} moon eiusmod.`,
            `the {word2} species and {word2} formed rutrum alliance eu protect the {word3} system incididunt.`,
            `the {word1} wormhole connected turpis {word3} system, home to the {word2} labore species.`,
            `in {word3}, the {word2} species used vitae {word1} technology mi harness the power nec {word4} dolore.`,
            `the {word2} species colonized in {word3} planet using advanced {word1} terraforming aliqua techniques.`,
            `a space convoy sit amet {word2} species passed through elit {word1} asteroid field nulla their veniam way to the {word3} outpost.`,
            ]
    },
    cyberpunk: {
        categoryWeights: {
            technology: 4.5,
            species: 1.0,
            locations: 3.0,
            concepts: 3.5,
        },
        sentenceTemplates: [
            `the {word1} ipsum technology commodo hackers to breach ut {word2} {word3}, uncovering {word4} dolor secrets.`,
            `in the bustling city of {word2}, the streets praesent illuminated by {word1} lorem neon donec, where {word3} and {word4} thrived amet.`,
            `mega-corps like {word1} exerted rutrum control over {word2} through advanced {word3} consectetur technology and manipulation of {word4} adipisicing.`,
            `amid the {word1} skyline, {word2} agents lacus in covert {word3} operations to preserve their {word4} elit agenda.`,
            `hidden within the magna of {word1}, a {word2} underground lab was suspendisse cutting-edge {word3} technology for {word4} eiusmod purposes.`,
            `the cursus {word1} gang controlled the {word2} district, using their {word3} labore prowess to maintain a turpis on {word4} dolor.`,
            `in the volutpat of the {word1} city, {word2} dealers traded {word3} veniam tech for a taste of {word4} power.`,
            `the {word1} district eu ut dark reflection of {word2}, where the {word3} adipisicing underworld thrived amidst the chaos of {word4}.`,
            `a new form of {word1} technology was malesuada developed in the {word2} incididunt sector, promising to revolutionize {word3} and reshape {word4}.`,
            `the {word1} egestas enhancements enabled the {word2} to blur the interdum between {word3} and {word4}, redefining what odio meant enim tu human aliqua.`,
            ],
    },
    timeTravel: {
        categoryWeights: {
            technology: 3.5,
            species: 1.0,
            locations: 3.0,
            concepts: 4.5,
        },
        sentenceTemplates: [
            `the {word1} ipsum device transported {word2} back to the {word3} era, revealing the mysteries of {word4} dolor.`,
            `in the year {word3}, the {word1} lorem technology enabled {word2} to alter the course of {word4} amet.`,
            `the {word1} time machine granted {word2} a glimpse into the {word3} world, experiencing {word4} events consectetur firsthand.`,
            `time travelers hailing from {word3} introduced {word4} adipisicing concepts to the {word2} inhabitants, using {word1} technology.`,
            `a cryptic {word1} artifact transported {word2} to an alternate {word3} reality, where {word4} eiusmod possibilities awaited.`,
            `lost in the {word3} timeline, {word2} sought a {word1} labore solution to restore the balance of {word4} dolor.`,
            `the {word1} time experiment involving {word2} led to unforeseen {word3} consequences and unraveling {word4} veniam secrets.`,
            `in a last-ditch effort, {word2} harnessed the {word1} incididunt mechanism to avert the {word3} catastrophe and preserve {word4}.`,
            `by utilizing the {word1} technology, {word2} unlocked the enigmas of {word3} history and {word4} knowledge aliqua.`,
            `the {word3} epoch was characterized by groundbreaking {word1} advancements and the exploration of {word2} in relation to {word4} tempor.`,
        ],
    },
    postApocalyptic: {
        categoryWeights: {
            technology: 1.5,
            species: 2.0,
            locations: 4.0,
            concepts: 3.5,
        },
        sentenceTemplates: [
            `in the desolate remains of {word3} dolor, the {word2} survivors fought for the scarce {word4} resources ipsum.`,
            `the ravaged {word3} landscape was inhabited by resilient {word2} lorem and the struggle for {word4} survival amet.`,
            `amidst the wreckage of {word3} consectetur, survivors relied on their {word2} instincts to adapt and overcome {word4} adipisicing challenges.`,
            `the fall of {word3} civilization marked the end of the {word2} era and the emergence of new {word4} realities elit.`,
            `beyond the devastated {word3} region, the {word2} explorers discovered a safe haven in the midst of {word4} eiusmod adversity.`,
            `in the harsh {word3} environment, the {word2} survivors forged an uneasy alliance to face the {word4} labore threats.`,
            `the once-thriving {word3} metropolis, now a ghostly {word2} remnant, stood as a testament to the {word4} collapse dolor.`,
            `in a world ravaged by {word4} devastation, the {word2} survivors became the last beacon of hope in the desolate {word3} landscape veniam.`,
            `scavengers roamed the {word3} incididunt wasteland, seeking the remnants of {word2} society and clinging to the hope of {word4} redemption aliqua.`,
            `the {word2} survivors banded together in the desolate {word3} world, striving to rebuild their lives amidst the shattered {word4} dreams tempor.`,
            ],
    },
    steampunk: {
        categoryWeights: {
            technology: 3.0,
            species: 1.5,
            locations: 3.5,
            concepts: 4.0,
        },
        sentenceTemplates: [
            `the {word1} machinery powered the {word2} city of {word3}, filling the air with {word4} lorem wonder.`,
            `in the bustling metropolis of {word3} ipsum, steam-powered {word1} technology and {word2} inhabitants coexisted in a world of {word4} intrigue dolor.`,
            `the {word1} locomotive, a marvel of {word3} amet engineering, showcased the {word2} era's {word4} progress consectetur.`,
            `clockwork {word1} automatons and steam-driven {word2} contraptions populated the {word3} streets, bringing {word4} adipisicing fantasies to life.`,
            `the towering {word1} structure stood as a testament to the {word2} ingenuity and the {word3} city's {word4} elit aspirations.`,
            `amid the ornate {word3} skyline, {word2} adventurers soared on {word1} wings of {word4} labore imagination.`,
            `the development of {word1} technology in the {word3} society gave rise to {word2} innovation and {word4} dolore breakthroughs.`,
            `beneath the bustling {word3} cityscape, the {word2} underworld hid {word1} secrets and {word4} eiusmod mysteries.`,
            `the {word3} workshop, filled with {word1} gadgets and gizmos, was a hub for {word2} inventors seeking to unlock the potential of {word4} veniam.`,
            `the fusion of {word1} technology and {word2} craftsmanship defined the {word3} aesthetic, embracing a {word4} vision of the future aliqua.`,
        ],
    },
    dystopia: {
        categoryWeights: {
            technology: 2.5,
            species: 1.0,
            locations: 3.0,
            concepts: 4.5,
        },
        sentenceTemplates: [
            `in {word1} ipsum, {word2} struggled against {word3} {word4} dolor.`,
            `the rulers of {word1} amet used {word2} and {word3} to maintain control over {word4} consectetur.`,
            `amid the towering {word1} adipisicing buildings, the dilapidated {word2} sector embodied the {word3} {word4} elit divide.`,
            `the {word1} regime used {word2} surveillance and {word3} lorem propaganda to suppress {word4} rebellion against their adipisicing authority.`,
            `in {word1} labore, {word2} faced a bleak reality and the fleeting hope of {word3} revolution against the {word4} dolor system.`,
            `the {word1} world's iron grip on {word2} gave rise to a small but determined {word3} veniam resistance against the {word4} regime.`,
            `whispers of forbidden {word2} and a long-forgotten {word3} knowledge fueled the flames of {word4} rebellion in {word1} aliqua.`,
            `the {word1} military's ruthless tactics were a cruel reminder of the brutality that {word2} and {word3} endured under {word4} elit oppression.`,
            `in {word1} ipsum, the {word2} minority lived in constant fear of the {word3} majority and the pervasive influence of {word4} eiusmod propaganda.`,
            `the {word1} rebels planned their daring attack on the {word2} {word3} to ignite a larger revolution against {word4} labore rule.`,
        ],
    },
};