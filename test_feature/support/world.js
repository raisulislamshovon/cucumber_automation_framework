const { setWorldConstructor } = require('@cucumber/cucumber');
const requireDir = require('require-dir');
const Promise = require(`bluebird`);
const Screenshot = require('./Screenshot');

class World {

    constructor({ attach }) {

        this.platform = process.env.PLATFORM || "chrome";
        this.facebook_ui_url = process.env.FACEBOOK_UI_URL || "https://www.facebook.com";

        this.attach = attach;
        this.screenshot = new Screenshot(this);

        this.pages = requireDir('../../fileResources/pages', { recurse: true });
    }

    get url() {
        if (!this.host.includes('https://')) {
            this.facebook_ui_url = "https://" + this.facebook_ui_url;
        }
        return this.facebook_ui_url;
    }

    sleep(milliseconds) {
        return Promise.delay(milliseconds);
    }
}

setWorldConstructor(World);