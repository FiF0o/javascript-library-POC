/**
 * Created by jonlazarini on 03/02/17.
 */
var starWarsNames = require('./starwars-names.json');
var uniqueRandomArray = require('unique-random-array');

// Commonjs
module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
};

/**
    Node REPL
 `node`
 require module and test exports
 */
