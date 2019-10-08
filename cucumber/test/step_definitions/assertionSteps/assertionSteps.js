'use strict';

let { Given, When, Then } = require('cucumber');
const expect = require('chai').expect;


Then(/^The title should be "([^"]*)"$/, function (text) {
   let pageTitle = basePage.getPageTitle();
   return expect(pageTitle).to.be.equal(text);
});



