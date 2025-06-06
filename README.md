# Practice 3: UI Testing with Cypress

This project contains automated UI tests for the web application [demoqa.com](https://demoqa.com), implemented using the Cypress framework and the Page Object Model (POM) structure.

## Test Scenarios

1. Alerts- covers all types of alert popups.
2. Practice Form- fills and submits mandatory fields.
3. Text Box- inputs and verifies form data.
4. Tool Tips- verifies tooltips on hover actions.
5. Select Menu- tests all dropdown types including multiselect.

## Technologies Used

- Cypress 14.4.0
- Mochawesome for test reporting

## Project Structure

cypress/
e2e/
pageObjects/
alerts.cy.js
form.cy.js
selectmenu.cy.js
textbox.cy.js
tooltips.cy.js
reports/
mochawesome/
screenshots/
support/
package.json
cypress.config.js
README.md

## How to Run Tests

1. Install all project dependencies: npm install
2. Run all Cypress tests with JSON report generation: npm run test
3. Merge all test report JSON files into one: npm run merge-reports
4. Generate the final HTML report: npm run generate-report
5. The final report will be saved in: cypress/reports/mochawesome/mochawesome.html

## CI/CD Setup (GitHub Actions)

Cypress tests run automatically via GitHub Actions:

- On every push to `main`
- On every pull request to `main`
- Daily at 03:00 UTC (cron job)

Config file: `.github/workflows/cypress.yml`

Test reports are uploaded as artifacts after each run.

## Additional Information

- All tests follow the Page Object Model structure.
- Tests were executed in both Chrome and Firefox browsers.
- Screenshots are saved automatically in case of test failures.
- The project was also tested at screen resolutions: 1920×1080 and 1366×768.

## Author

Maria Filipava

# Review 
* Is parallel test execution implemented?
* Is automatic data generation used?
* How runs separate test (with key word)?
* It has been observed that there is inconsistency in the structure of the tests. While some validations and assertions are implemented within the Page Object Model (POM), others are directly written in the test files. This inconsistency can lead to confusion, reduced maintainability, and difficulty in scaling the test suite.
