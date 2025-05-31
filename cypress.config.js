const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    screenshotsFolder: 'cypress/screenshots',
    video: false,
    screenshotOnRunFailure: true
  },
});

