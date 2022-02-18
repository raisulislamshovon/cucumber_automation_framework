const { Given } = require('@cucumber/cucumber');
const { waitForElement } = require(`../../../utils/wait`);
const { retry } = require('../../../utils/retry');

Given(/^I navigate to the '(.+)' page$/, async function (navPage) {
    const url = `${this.facebook_ui_url}/${navPage}`;

    await retry(async () => {
        await this.driver.get(url);
        await waitForElement(this, this.pages.facebook.loginButton);
    }, 30000, 2000);
});
