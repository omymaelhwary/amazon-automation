import selectors from '../support/selectors.js';

describe('template spec', () => {
  it('Today Deals' , () => {
    cy.visit(selectors.amazon);
     cy.get(selectors.location).click();
    cy.get(selectors.todayDealsIcon).click();
    cy.get(selectors.software).should('be.visible').first().click();
    cy.get(selectors.softwareItem).should('be.visible').first().click();
    //cy.get(selectors.softwareTitle).should('be.visible').first().invoke('text').should('have.text', 'Software');
    cy.get(selectors.softwareTitle).should($el => expect($el.text().trim()).to.equal(selectors.softwareText));
  })
})