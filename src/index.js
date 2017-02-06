/**
 * Created by jonlazarini on 03/02/17.
 */
import starWarsNames from './starwars-names.json';
import uniqueRandomArray from 'unique-random-array';

var getRandomItem = uniqueRandomArray(starWarsNames);

// Commonjs
/**
 *
 * @type {{all, random: random}}
 */
module.exports = {
    all: starWarsNames,
    random: random
};
/**
 *
 * @param number
 * @returns {Array}
 */
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
