import ToolTipsPage from './pageObjects/ToolTipsPage';

Cypress.on('uncaught:exception', () => false);

describe('Tooltips Page Tests', () => {
  beforeEach(() => {
    ToolTipsPage.visit();
  });

  it('Shows tooltip on hover over button', () => {
    ToolTipsPage.hoverOnButton();
    ToolTipsPage.checkTooltip('You hovered over the Button');
  });

  it('Shows tooltip on hover over text field', () => {
    ToolTipsPage.hoverOnTextField();
    ToolTipsPage.checkTooltip('You hovered over the text field');
  });

  it('Shows tooltip on hover over "Contrary" link', () => {
    ToolTipsPage.hoverOnContraryLink();
    ToolTipsPage.checkTooltip('You hovered over the Contrary');
  });

  it('Shows tooltip on hover over "1.10.32" link', () => {
    ToolTipsPage.hoverOnSectionLink();
    ToolTipsPage.checkTooltip('You hovered over the 1.10.32');
  });
});
