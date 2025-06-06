class FormPage {
  constructor() {
    this.url = 'https://demoqa.com/automation-practice-form';
    this.firstName = '#firstName';
    this.lastName = '#lastName';
    this.email = '#userEmail';
    this.genderRadio = 'label[for="gender-radio-2"]'; // Female
    this.phone = '#userNumber';
    this.submitButton = '#submit';
    this.modalTitle = '#example-modal-sizes-title-lg';
  }

  visit() {
    cy.visit(this.url);
  }
//TODO use random data for tests

  fillMandatoryFields() {
    cy.get(this.firstName).type('Maria');
    cy.get(this.lastName).type('Filipava');
    cy.get(this.email).type('maria@example.com');
    cy.get(this.genderRadio).click();
    cy.get(this.phone).type('1234567890');
  }

  submitForm() {
    cy.get(this.submitButton).click({ force: true });
  }

  checkSubmission() {
    cy.get(this.modalTitle).should('contain', 'Thanks for submitting the form');
  }
}

export default new FormPage();
