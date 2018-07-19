/*
 * Copyright vdeapps 2018
 */

'use strict';

require('../../dist/js/vdeapps-addons');

describe('myTests', function () {
    
    var addons = new vdeappsAddons();
    
});



describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
});



describe("A suite is just a function", function() {
    var a;
    
    it("and so is a spec", function() {
        a = true;
        
        expect(a).toBe(true);
    });
});



/*
describe("run", function() {
    var addons = new vdeappsAddons();
    
    
    jasmine.it("vdeappsAddons created", function() {
        expect(adoons.getParentName()).toBe('vdeappsAddonAbstract');
    });
    
});
*/