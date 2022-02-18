const { When } = require('@cucumber/cucumber');
const { setTextBox, clickOnElement } = require('../../../utils/elements');

When(/^I login as :$/, async function (table) {
    const values = table.rowsHash();
    if(values.userName) {
        await setTextBox(this, this.pages.facebook.userName, values.userName);
    }
    if(values.password) {
        await setTextBox(this, this.pages.facebook.password, values.password);
    }
    await clickOnElement(this, this.pages.facebook.loginButton);
});
