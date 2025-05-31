class FormPage {
  visit() {
    cy.visit('https://demoqa.com/automation-practice-form');
  }

  fillMandatoryFields() {
    cy.get('#firstName').type('Maria');
    cy.get('#lastName').type('Filipava');
    cy.get('#userEmail').type('maria@example.com');
    cy.get('label[for="gender-radio-2"]').click(); // Female
    cy.get('#userNumber').type('1234567890');
  }

  submitForm() {
    cy.get('#submit').click({ force: true });
  }

  checkSubmission() {
    cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form');
  }
}

export default new FormPage();
