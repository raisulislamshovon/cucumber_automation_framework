# UI AND API TEST AUTOMATION FRAMWORK USING CUCUMBER, NODEJS

Follow to Run Tests
-------------------

Clone this repository and open it to a terminal.
```shell
Run: `npm install`
```
```shell
Run: `npm test` to run all tests.
```
You can run only one test scenario using any tag. Just add a tag (like @test1) above a scenario name and
```shell
Run: `npm run test-only @test1` to run 1 test scenario.
```

You can run the test using mozilla firefox browser and any environment
```shell
Run: `PLATFORM="firefox" FACEBOOK_UI_URL="https://www.facebook.com" npm run test-only @test1` to run 1 test scenario.
```

Note :
------
If you want to run the test using chrome then make sure you have installed chrome browser in your local machine and browser version should be matched with provided chromedriver version in package.json file. You can put your suitable version of the chromedriver in package.json file. For running test in your local machine, chrome/firefox browser is needed.
