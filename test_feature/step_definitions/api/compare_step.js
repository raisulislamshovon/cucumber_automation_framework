const { Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const _ = require(`lodash`);
const { parseString } = require('../../../utils/parser');

Then(/^the response data path contains$/, async function (table) {
    const values = table.hashes();
    for (const { dataKey, condition, expectedResult } of values) {
        let actualValue = _.get(this.lastResponse, dataKey);
        const parsedExpectedResult = await parseString(this, expectedResult);

        expect(actualValue).to[condition](parsedExpectedResult);
    }
});
