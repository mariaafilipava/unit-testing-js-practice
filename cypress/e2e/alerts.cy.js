import AlertsPage from './pageObjects/AlertsPage';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Alerts Page Tests', () => {
  beforeEach(() => {
    AlertsPage.visit();
  });

  it('Handles simple alert', () => {
    AlertsPage.clickAlertButton();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('You clicked a button');
    });
  });

  it('Handles confirm alert - OK', () => {
    cy.window().then((win) => {
      cy.stub(win, 'confirm').returns(true);
    });
    AlertsPage.clickConfirmButton();
    cy.get('#confirmResult').should('contain', 'You selected Ok');
  });

  it('Handles confirm alert - Cancel', () => {
    cy.window().then((win) => {
      cy.stub(win, 'confirm').returns(false);
    });
    AlertsPage.clickConfirmButton();
    cy.get('#confirmResult').should('contain', 'You selected Cancel');
  });

  it('Handles prompt alert', () => {
    const inputText = 'Cypress Test';
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(inputText);
    });
    AlertsPage.clickPromptButton();
    cy.get('#promptResult').should('contain', inputText);
  });

  it('Handles delayed alert', () => {
    AlertsPage.clickTimerButton();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('This alert appeared after 5 seconds');
    });
  });
});