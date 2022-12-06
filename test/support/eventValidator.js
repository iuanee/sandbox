class EventValidator {

  enableCDP() {
    browser.cdp('Network', 'enable');
  }

  addEventListener() {
    browser.on('Network.requestWillBeSent', (params) => {
      const { url } = params.request;
      console.log(`request sent: url - ${url}`);    
    });
  }

}

module.exports = new EventValidator();