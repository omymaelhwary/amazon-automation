import selectors from '../support/selectors.js';

describe('template spec', () => {
  it('price' , () => {
    cy.visit(selectors.amazon);

    cy.get(selectors.language).should('be.visible').click();
    cy.get(selectors.currencyMenu).click();
   // cy.get(selectors.selectCurrency).type('AED').click();
    cy.get(selectors.AED).click();
    cy.get(selectors.save).click();
    cy.get(selectors.firstItem).click();
    cy.get(selectors.aedText).should($el => expect($el.text().trim()).to.equal('AED'));



  })
})