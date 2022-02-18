const { Given } = require('@cucumber/cucumber');
const web_driver = require('selenium-webdriver');

Given(/^I open a browser$/, async function () {
    this.driver = new web_driver.Builder()
        .forBrowser(this.platform)
        .build();
    this.driver.manage().window().maximize();
    this.isBrowserOpen = true;
});
