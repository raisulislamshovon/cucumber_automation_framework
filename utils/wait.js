const Promise = require(`bluebird`);
const { By } = require('selenium-webdriver');
const selenium = require('selenium-webdriver');

module.exports = {
  waitForElement: async (world, locator) => {
    await world.driver.wait(selenium.until.elementLocated(By.xpath(locator)), 30000);
  },

  waitForPageLoads: async (world, waitForMs = 2000) => {
    for (let i = 0; i < 100; i += 1) {
      const originalSource = await world.driver.getPageSource();
      await Promise.delay(waitForMs);
      const newSource = await world.driver.getPageSource();
      if (originalSource === newSource) {
        return;
      }
    }
  }
};
