import selectors from '../support/selectors.js';

describe('template spec', () => {
   it('price' , () => {
     cy.visit(selectors.amazon);
     cy.get(selectors.location).click();
     cy.get(selectors.electronics)
       .click()
       .get(selectors.DDL)
       .select('Electronics', {force: true});
    cy.get(selectors.electronics).type('Apple');
    cy.get(selectors.search).click();
   cy.get(selectors.appleItem).click();
   cy.get(selectors.ratting).should('be.visible');
   cy.get(selectors.price).should('be.visible');
   cy.get(selectors.shipping).should('be.visible');
   cy.get(selectors.stock).should('be.visible');
   cy.get(selectors.addToCard).click();
   cy.get(selectors.addSuccess).should('be.visible');





   })
})