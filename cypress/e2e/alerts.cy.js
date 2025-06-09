import AlertsPage from './pageObjects/AlertsPage';

Cypress.on('uncaught:exception', () => false);

describe('Alerts Page Tests', () => {
  beforeEach(() => {
    AlertsPage.visit();
  });

  it('Handles simple alert', () => {
    AlertsPage.handleSimpleAlert();
  });

  it('Handles confirm alert - OK', () => {
    AlertsPage.handleConfirmAlert(true);
  });

  it('Handles confirm alert - Cancel', () => {
    AlertsPage.handleConfirmAlert(false);
  });

  it('Handles prompt alert', () => {
    AlertsPage.handlePromptAlert('Cypress Test');
  });

  it('Handles delayed alert', () => {
    AlertsPage.handleDelayedAlert();
  });
});