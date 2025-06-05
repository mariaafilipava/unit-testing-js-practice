import TextBoxPage from './pageObjects/TextBoxPage';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Text Box Tests', () => {
  beforeEach(() => {
    TextBoxPage.visit();
  });

  it('Fills form and checks displayed result', () => {
    TextBoxPage.fillForm();
    TextBoxPage.checkResult();
  });
});