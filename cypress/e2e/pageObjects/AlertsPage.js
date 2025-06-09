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

  handleSimpleAlert() {
    cy.window().then((win) => {
      cy.on('window:alert', (str) => {
        expect(str).to.equal('You clicked a button');
      });
    });
    cy.get(this.alertButton).click();
  }

  handleConfirmAlert(accept = true) {
    cy.window().then((win) => {
      cy.stub(win, 'confirm').returns(accept);
    });
    cy.get(this.confirmButton).click();
    const expectedText = accept ? 'You selected Ok' : 'You selected Cancel';
    cy.get('#confirmResult').should('contain', expectedText);
  }

  handlePromptAlert(text) {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(text);
    });
    cy.get(this.promptButton).click();
    cy.get('#promptResult').should('contain', text);
  }

  handleDelayedAlert() {
    cy.window().then(() => {
      cy.on('window:alert', (str) => {
        expect(str).to.equal('This alert appeared after 5 seconds');
      });
    });
    cy.get(this.timerButton).click();
  }
}

export default new AlertsPage();