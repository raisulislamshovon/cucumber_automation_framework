const { Then } = require('@cucumber/cucumber');
const { getTextFromElement } = require(`../../../utils/getElements`);
const { expect } = require('chai');

Then(/^the '(.+)' text displays$/, async function (text) {
    const actualText = await getTextFromElement(
        this,
        this.pages.facebook.allText.replace('{text}', text)
    );
    expect(actualText).to.contains(text);
});
