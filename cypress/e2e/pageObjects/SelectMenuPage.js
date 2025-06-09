class SelectMenuPage {
  constructor() {
    this.url = 'https://demoqa.com/select-menu';
    this.selectValue = '#withOptGroup';
    this.groupOption = 'div';
    this.selectOne = '#selectOne';
    this.oldStyleMenu = '#oldSelectMenu';
    this.multiSelectPlaceholder = '.css-1wa3eu0-placeholder';
  }

  visit() {
    cy.visit(this.url);
  }

  selectValueOption() {
    cy.get(this.selectValue).click();
    cy.contains(this.groupOption, 'Group 2, option 1').click();
    cy.get(this.selectValue).should('contain', 'Group 2, option 1');
  }

  selectOneOption() {
    cy.get(this.selectOne).click();
    cy.contains('div', 'Other').click();
    cy.get(this.selectOne).should('contain', 'Other');
  }

  selectOldStyleOption() {
    cy.get(this.oldStyleMenu).select('Green');
    cy.get(`${this.oldStyleMenu} option:selected`).should('have.text', 'Green');
  }

  selectMultiOptions() {
    cy.get(this.multiSelectPlaceholder).eq(2).click();
    cy.contains('div', 'Black').click();

    cy.get(this.multiSelectPlaceholder).eq(2).click();
    cy.contains('div', 'Blue').click();

    cy.contains('div', 'Black').should('exist');
    cy.contains('div', 'Blue').should('exist');
  }
}

export default new SelectMenuPage();