
/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage{

  /**
   * Open site https://reqres.in/
   */
  async open() {
    browser.url('https://reqres.in/')
  }

  /**
   * define landingElement selector using getter methods
   */
  get landingElement () {
    return $('.key-sells');
  }
  
  /**
   * define output link selector using getter methods
   */
  get requestOutputLink () {
    return $('[data-key="request-output-link"]');
  }
}

module.exports = new MainPage();