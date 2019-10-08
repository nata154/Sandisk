const BasePage = require('./../pageObject/basePage'),
   HomePage = require('./../pageObject/homePage'),
   Helper = require('./../support/helper.js');

describe('Primitive actions on page', () => {
   let basePage, homePage, helper;

   beforeAll(() => {
      basePage = new BasePage();
      homePage = new HomePage();
      helper = new Helper();
      return basePage.open();
   });

   it('should check page title of Home Page', () => {
      beforeAll();
      return expect(basePage.checkPageTitle('SanDisk | Global Leader in Flash Memory Storage Solutions')).to.eventually.be.true;
   });

});