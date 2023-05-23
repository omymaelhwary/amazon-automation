import selectors from '../support/selectors.js';

describe('template spec', () => {
  it('Visit', () => {

    //cy.visit('https://www.amazon.com/');
    cy.visit(selectors.amazon);
    cy.get(selectors.menu).click();
    cy.get(selectors.smartHomeIcon).click();
    cy.get(selectors.homeEntertainment).click();
    cy.get(selectors.televisions).should('be.visible').click();
    cy.get(selectors.countItems).should('have.length', 12);


  })


})