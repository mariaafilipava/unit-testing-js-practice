//TODO remove locators to the constructor
class SelectMenuPage {
  visit() {
    cy.visit('https://demoqa.com/select-menu');
  }
//TODO create function selectValueOption(value)
  selectValueOption() {
    cy.get('#withOptGroup').click();
    cy.contains('div', 'Group 2, option 1').click();
  }

  selectOneOption() {
    cy.get('#selectOne').click();
    cy.contains('div', 'Other').click();
  }

  selectOldStyleOption() {
    cy.get('#oldSelectMenu').select('Green');
  }

  selectMultiOptions() {
    cy.get('.css-2b097c-container').eq(2).click();
    cy.contains('div', 'Black').click();
    cy.get('.css-2b097c-container').eq(2).click();
    cy.contains('div', 'Blue').click();
  }
}

export default new SelectMenuPage();


