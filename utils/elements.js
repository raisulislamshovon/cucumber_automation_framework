const { By } = require('selenium-webdriver');
const Promise = require(`bluebird`);
const selenium = require('selenium-webdriver');

module.exports = {
  clickOnElement: async (world, locator) => {
    await world.driver.wait(selenium.until.elementLocated(By.xpath(locator)), 30000);
    const element = await world.driver.findElement(By.xpath(locator));
    await element.click();
  },

  setTextBox: async (world, locator, value, postKeyAction = null) => {
    const element = await world.driver.findElement(By.xpath(locator), 30000);

    await element.clear();
    await Promise.delay(500);
    await element.sendKeys(value);

    if (postKeyAction) {
      await element.sendKeys(postKeyAction);
    }
  }
};
