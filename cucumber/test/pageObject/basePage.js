const Header = require('D:\\JavaScript\\Module10-original\\Scandisk\\cucumber\\test\\pageObject\\common\\headerMenu.js');

class BasePage {
   constructor() {
      this.header = new Header();
   }

   open() {
      browser.get('http://www.sandisk.com' + this.url);
      return browser.wait(ec.elementToBeClickable(this.header.logo), GLOBAL_TIMEOUT);
   }

   checkPageTitle(pageTitle) {
      return this.getPageTitle().then(title => {
         return title === pageTitle;
      });
   }

   getPageTitle() {
      return browser.getTitle();
   }
}

module.exports = BasePage;