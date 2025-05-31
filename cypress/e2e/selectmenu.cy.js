import SelectMenuPage from './pageObjects/SelectMenuPage';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Select Menu Page Tests', () => {
  beforeEach(() => {
    SelectMenuPage.visit();
  });

  it('Selects Group 2, option 1 from Select Value', () => {
    SelectMenuPage.selectValueOption();
    cy.get('#withOptGroup').should('contain', 'Group 2, option 1');
  });

  it('Selects "Other" from Select One', () => {
    SelectMenuPage.selectOneOption();
    cy.get('#selectOne').should('contain', 'Other');
  });

  it('Selects "Green" from Old Style menu', () => {
    SelectMenuPage.selectOldStyleOption();
    cy.get('#oldSelectMenu').find('option:selected').should('contain', 'Green');
  });

  it('Selects "Black" and "Blue" from Multiselect', () => {
    SelectMenuPage.selectMultiOptions();
    cy.contains('div', 'Black').should('exist');
    cy.contains('div', 'Blue').should('exist');
  });
});

