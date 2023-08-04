const { defineConfig } = require("cypress")
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  require('cypress-mochawesome-reporter/plugin')(on)
  return config;
}

module.exports = defineConfig({
reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents,
    baseUrl: 'https://admin-demo.nopcommerce.com/',
    specPattern: "**/*.feature",
    watchForFileChanges:false,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000
    
  },

  
});
