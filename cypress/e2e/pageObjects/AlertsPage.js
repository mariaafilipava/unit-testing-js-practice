class AlertsPage {
  constructor() {
    this.url = 'https://demoqa.com/alerts';
    this.alertButton = '#alertButton';
    this.confirmButton = '#confirmButton';
    this.promptButton = '#promtButton';
    this.timerButton = '#timerAlertButton';
  }

  visit() {
    cy.visit(this.url);
  }

  clickAlertButton() {
    cy.get(this.alertButton).click();
  }

  clickConfirmButton() {
    cy.get(this.confirmButton).click();
  }

  clickPromptButton() {
    cy.get(this.promptButton).click();
  }

  clickTimerButton() {
    cy.get(this.timerButton).click();
  }
}

export default new AlertsPage();
