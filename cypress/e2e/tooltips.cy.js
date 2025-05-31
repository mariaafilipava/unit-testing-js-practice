import ToolTipsPage from './pageObjects/ToolTipsPage';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Tooltips Page Tests', () => {
  beforeEach(() => {
    ToolTipsPage.visit();
  });

  it('Shows tooltip on hover over button', () => {
    ToolTipsPage.hoverOnButton();
    ToolTipsPage.getTooltip().should('contain', 'You hovered over the Button');
  });

  it('Shows tooltip on hover over text field', () => {
    ToolTipsPage.hoverOnTextField();
    ToolTipsPage.getTooltip().should('contain', 'You hovered over the text field');
  });

  it('Shows tooltip on hover over "Contrary" link', () => {
    ToolTipsPage.hoverOnContraryLink();
    ToolTipsPage.getTooltip().should('contain', 'You hovered over the Contrary');
  });

  it('Shows tooltip on hover over "1.10.32" link', () => {
    ToolTipsPage.hoverOnSectionLink();
    ToolTipsPage.getTooltip().should('contain', 'You hovered over the 1.10.32');
  });
});
