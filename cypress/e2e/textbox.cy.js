import TextBoxPage from './pageObjects/TextBoxPage';

Cypress.on('uncaught:exception', () => false);

describe('Text Box Tests', () => {
  beforeEach(() => {
    TextBoxPage.visit();
  });

  it('Fills form and verifies displayed result', () => {
    TextBoxPage.fillFormAndSubmit();
  });
});