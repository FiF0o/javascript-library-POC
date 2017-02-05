/**
 * Created by jonlazarini on 03/02/17.
 */
var starWarsNames = require('./starwars-names.json');
var uniqueRandomArray = require('unique-random-array');

var getRandomItem = uniqueRandomArray(starWarsNames)

// Commonjs
module.exports = {
    all: starWarsNames,
    random: random
};

function random(number) {
    if (number === undefined) {
        return getRandomItem();
    } else {
        var randomItems = [];
        for (var i = 0; i < number; i++) {
            randomItems.push(getRandomItem());
        }
        return randomItems
    }
}

// // check code coverage - debug purpose only
// function debugIstanbul() {
//     console.log('debug');
// }

/**
    Node REPL
 `node`
 require module and test exports
 */
