import cartPageElements from "../elements/cartPageElements"
const CartPageElements = new cartPageElements

Cypress.Commands.add('clickMakePurchase', () =>{
    cy.get(CartPageElements.buttomMakePurchase()).
    should('be.visible')
    .click()
});