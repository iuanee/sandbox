const MainPage = require('../pages/main.page');
const EventValidator = require('../support/eventValidator');

describe('validate sent request', () => {
    it('should validate request is sent when button is clicked', async () => {
        await MainPage.open();
        await MainPage.landingElement.waitForDisplayed();
        EventValidator.enableCDP();
        EventValidator.addEventListener();
        await MainPage.requestOutputLink.scrollIntoView({ block: 'center', inline: 'center' });
        await MainPage.requestOutputLink.waitForDisplayed();
        await MainPage.requestOutputLink.click();
        await browser.pause(10000);
    });
});


