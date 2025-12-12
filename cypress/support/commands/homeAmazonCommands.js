import homeAmazonElements from "../elements/homeAmazonElements"
const HomeAmazonElements = new homeAmazonElements

Cypress.Commands.add('acessHomepage', () =>{
    cy.visit(Cypress.env("baseUrl"))
    cy.verifyLoadAmazonPage()
});

Cypress.Commands.add('verifyLoadAmazonPage', () => {
    cy.get(HomeAmazonElements.headerAmazon()).
    should('exist')
});

Cypress.Commands.add('makeSearch', (item1 = 'kindle') => {
    cy.get(HomeAmazonElements.fieldSearch()).
    should('be.visible')
    .type(item1)
    cy.get(HomeAmazonElements.buttomSearch()).
    should('be.visible')
    .click()
    .wait(1500)
});

Cypress.Commands.add('clickButtomCart', () =>{
    cy.get(HomeAmazonElements.buttomCart).
    should('be.visible').
    click ()
});