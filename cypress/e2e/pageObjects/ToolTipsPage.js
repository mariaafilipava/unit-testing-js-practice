//TODO remove locators to the constructor
class ToolTipsPage {
  visit() {
    cy.visit('https://demoqa.com/tool-tips');
  }

  hoverOnButton() {
    cy.get('#toolTipButton').trigger('mouseover');
  }

  hoverOnTextField() {
    cy.get('#toolTipTextField').trigger('mouseover');
  }

  hoverOnContraryLink() {
    cy.contains('a', 'Contrary').trigger('mouseover');
  }

  hoverOnSectionLink() {
    cy.contains('a', '1.10.32').trigger('mouseover');
  }

  getTooltip() {
    return cy.get('.tooltip-inner');
  }
}

export default new ToolTipsPage();
