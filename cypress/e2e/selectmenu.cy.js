import SelectMenuPage from './pageObjects/SelectMenuPage';

Cypress.on('uncaught:exception', () => false);

describe('Select Menu Page Tests', () => {
  beforeEach(() => {
    SelectMenuPage.visit();
  });

  it('Selects Group 2, option 1 from Select Value', () => {
    SelectMenuPage.selectValueOption();
  });

  it('Selects "Other" from Select One', () => {
    SelectMenuPage.selectOneOption();
  });

  it('Selects "Green" from Old Style menu', () => {
    SelectMenuPage.selectOldStyleOption();
  });

  it('Selects "Black" and "Blue" from Multiselect', () => {
    SelectMenuPage.selectMultiOptions();
  });
});