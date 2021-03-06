/**
 * Created by jonlazarini on 03/02/17.
 */
import 'babel-polyfill';
import {expect} from 'chai';
import starW from './index';

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

        it('should return an array of random items if passed a value', function() {
            var randItems = starW.random(3);
            expect(randItems).to.have.length(3);
            randItems.forEach(function(item) {
               expect(starW.all).to.include(item);
            });
        });

    });

});
