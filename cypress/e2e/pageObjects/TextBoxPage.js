class TextBoxPage {
  visit() {
    cy.visit('https://demoqa.com/text-box');
  }

  fillForm() {
    cy.get('#userName').type('Maria Filipava');
    cy.get('#userEmail').type('maria@example.com');
    cy.get('#currentAddress').type('Vilnius, Gedimino pr. 1');
    cy.get('#permanentAddress').type('Minsk, Nemiga 12');
    cy.get('#submit').click();
  }

  checkResult() {
    cy.get('#output #name').should('contain', 'Maria Filipava');
    cy.get('#output #email').should('contain', 'maria@example.com');
    cy.get('#output #currentAddress').should('contain', 'Vilnius');
    cy.get('#output #permanentAddress').should('contain', 'Minsk');
  }
}

export default new TextBoxPage();

