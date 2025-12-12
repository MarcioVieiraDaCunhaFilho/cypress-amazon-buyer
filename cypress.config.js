const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  on('before:browser:launch',(browser, launchOptions) =>{
    console.log("launchOptions:", launchOptions.args)
    if (browser.name == 'chrome'){
      launchOptions.args.push('--disable-gpu')
    }

    return launchOptions
  });
  return config;
}

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  downloadsFolder: 'cypress/downloads',
  chromeWebSecurity:false,
  waitForAnimations:true,
  e2e: {
    specPattern: 'cypress/e2e/*.feature',
    experimentalRunAllSpecs: true,
    hideXhr : true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents,
  },
});