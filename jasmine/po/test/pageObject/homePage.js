const BasePage = require('./basePage');
const provider = require('./pageObjectProvider');

class HomePage extends BasePage {

   constructor() {
      super();
      this.mainImage = element(by.css(img[src *= "sandisk-main"]));
   }

   homePageShouldBeFullyDisplayed() {
      return this.mainImage.isDisplayed().then(function (isDisplayed) {
         return expect(isDisplayed).to.be.true;
      })
   };

}
module.exports = HomePage;