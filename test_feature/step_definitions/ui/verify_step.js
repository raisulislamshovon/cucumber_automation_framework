const { Then } = require('@cucumber/cucumber');
const { getTextFromElement } = require(`../../../utils/getElements`);
const { expect } = require('chai');
const { retry } = require('../../../utils/retry');

Then(/^the '(.+)' text displays$/, async function (text) {
    await retry(async () => {
        const actualText = await getTextFromElement(
            this,
            this.pages.facebook.allText.replace('{text}', text)
        );
        console.log("Hi I am there : "+actualText);
        expect(actualText).to.contains(text);
    }, 30000, 2000);
});
