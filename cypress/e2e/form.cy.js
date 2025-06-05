import FormPage from './pageObjects/FormPage';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Practice Form Tests', () => {
  beforeEach(() => {
    FormPage.visit();
  });

  it('Fills and submits mandatory fields', () => {
    FormPage.fillMandatoryFields();
    FormPage.submitForm();
    FormPage.checkSubmission();
  });
});
