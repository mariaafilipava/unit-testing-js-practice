class SelectMenuPage {
  constructor() {
    this.url = 'https://demoqa.com/select-menu';
    this.selectValue = '#withOptGroup';
    this.groupOption = 'div';
    this.selectOne = '#selectOne';
    this.oldStyleMenu = '#oldSelectMenu';
    this.multiSelectContainer = '.css-2b097c-container';
  }

  visit() {
    cy.visit(this.url);
  }

  selectValueOption() {
    cy.get(this.selectValue).click();
    cy.contains(this.groupOption, 'Group 2, option 1').click();
  }

  selectOneOption() {
    cy.get(this.selectOne).click();
    cy.contains('div', 'Other').click();
  }

  selectOldStyleOption() {
    cy.get(this.oldStyleMenu).select('Green');
  }

  selectMultiOptions() {
    cy.get(this.multiSelectContainer).eq(2).click();
    cy.contains('div', 'Black').click();
    cy.get(this.multiSelectContainer).eq(2).click();
    cy.contains('div', 'Blue').click();
  }
}

export default new SelectMenuPage();
