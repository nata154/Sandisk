'use strict';

const basePage = require('D:\\JavaScript\\Module10-original\\Scandisk\\cucumber\\test\\pageObject\\basePage');
const provider = require('D:\\JavaScript\\Module10-original\\Scandisk\\cucumber\\test\\pageObject\\pageObjectProvider.js');

let { Given, When, Then } = require('cucumber');
const expect = require('chai').expect;
const helper = require('D: /JavaScript/Module10 - original/Scandisk/cucumber/test/support/helper.js')


Given(/^I am on "([^"]*)" page$/, async (pageName) => {
   return provider.getPageObjects(pageName).open();
});


When(/^I get title of current page$/, async () => {
   return basePage.getPageTitle().open();
});




