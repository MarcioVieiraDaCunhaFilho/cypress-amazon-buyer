import searchPageResultsElements from "../elements/searchPageResultsElements"
const SearchPageResultsElements = new searchPageResultsElements


Cypress.Commands.add('selectFirstItem', () => {
    cy.get(SearchPageResultsElements.selectItem1).
    should('be.visible').
    click ()
});

