/**
 * Created by jonlazarini on 03/02/17.
 */
var expect = require('chai').expect;
var starW = require('./index');

// global describe from mocha
describe('javascript-library', function() {

    describe('all', function() {

        it('should be an array of strings', function() {
            expect(starW.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                });
            }
        });

        it('should contain `Beta test`', function() {
           expect(starW.all).to.include('Beta test');
        });

    });


    describe('random', function() {

        it('should return a random item from starW.all', function() {
            var randItem = starW.random();
            expect(starW.all).to.include(randItem);
        });

    });

});
