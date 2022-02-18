const { When } = require('@cucumber/cucumber');
const { expect } = require('chai');
const fs = require(`fs`);
const axios = require(`axios`);


When(/^I get user authentication with payload '(\S+)'$/, async function (payload) {
    const filePayh = `./fileResources/api/${payload}`
    const data = await fs.readFileSync(filePayh, 'utf8');
    const parseData = await JSON.parse(data);
    const endpoint = `https://test/endpoint`;
    this.lastResponse = await axios.post(endpoint, parseData);
    expect(this.lastResponse.status).to.equal(200);
});
