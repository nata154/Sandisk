'use strict';

const GLOBAL_TIMEOUT = 40e3;

exports.config = {
   seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
   framework: 'jasmine',
   capabilities: {
      'browserName': 'chrome'
   },

   specs: [
      'test/spec/*.js'
   ],

   onPrepare: () => {
      global.GLOBAL_TIMEOUT = GLOBAL_TIMEOUT;
      global.ec = protractor.ExpectedConditions;

      const chai = require('chai');
      chai.use(require('chai-as-promised'));
      global.expect = chai.expect;

      browser.manage().window().maximize();
   }
};