//TODO remove locators to the constructor
class AlertsPage {
  visit() {
    cy.visit('https://demoqa.com/alerts');
  }

  clickAlertButton() {
    cy.get('#alertButton').click();
  }

  clickConfirmButton() {
    cy.get('#confirmButton').click();
  }

  clickPromptButton() {
    cy.get('#promtButton').click();
  }

  clickTimerButton() {
    cy.get('#timerAlertButton').click();
  }
}

export default new AlertsPage();
