class ToolTipsPage {
  constructor() {
    this.url = 'https://demoqa.com/tool-tips';
    this.button = '#toolTipButton';
    this.textField = '#toolTipTextField';
    this.contraryLinkText = 'Contrary';
    this.sectionLinkText = '1.10.32';
    this.tooltip = '.tooltip-inner';
  }

  visit() {
    cy.visit(this.url);
  }

  hoverOnButton() {
    cy.get(this.button).trigger('mouseover');
  }

  hoverOnTextField() {
    cy.get(this.textField).trigger('mouseover');
  }

  hoverOnContraryLink() {
    cy.contains('a', this.contraryLinkText).trigger('mouseover');
  }

  hoverOnSectionLink() {
    cy.contains('a', this.sectionLinkText).trigger('mouseover');
  }

  checkTooltip(expectedText) {
    cy.get(this.tooltip).should('contain', expectedText);
  }
}

export default new ToolTipsPage();