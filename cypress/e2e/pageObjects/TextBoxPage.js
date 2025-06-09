class TextBoxPage {
  constructor() {
    this.url = 'https://demoqa.com/text-box';
    this.nameInput = '#userName';
    this.emailInput = '#userEmail';
    this.currentAddressInput = '#currentAddress';
    this.permanentAddressInput = '#permanentAddress';
    this.submitButton = '#submit';

    this.outputName = '#output #name';
    this.outputEmail = '#output #email';
    this.outputCurrentAddress = '#output #currentAddress';
    this.outputPermanentAddress = '#output #permanentAddress';
  }

  visit() {
    cy.visit(this.url);
  }

  fillFormAndSubmit() {
    cy.get(this.nameInput).type('Maria Filipava');
    cy.get(this.emailInput).type('maria@example.com');
    cy.get(this.currentAddressInput).type('Vilnius, Gedimino pr. 1');
    cy.get(this.permanentAddressInput).type('Minsk, Nemiga 12');
    cy.get(this.submitButton).click();

    cy.get(this.outputName).should('contain', 'Maria Filipava');
    cy.get(this.outputEmail).should('contain', 'maria@example.com');
    cy.get(this.outputCurrentAddress).should('contain', 'Vilnius');
    cy.get(this.outputPermanentAddress).should('contain', 'Minsk');
  }
}

export default new TextBoxPage();