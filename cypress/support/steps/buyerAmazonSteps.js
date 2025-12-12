import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor"
import homeAmazonElements from "../elements/homeAmazonElements"
const HomeAmazonElements = new homeAmazonElements
import itemPageElements from "../elements/itemPageElements"
const ItemPageElements = new itemPageElements
import searchPageResultsElements from "../elements/searchPageResultsElements"
const SearchPageResultsElements = new searchPageResultsElements
import cartPageElements from "../elements/cartPageElements"
const CartPageElements = new cartPageElements

Given ("the user acesses the amazon homepage", () => {
    cy.acessHomepage();

})

Given ("makes the item search", () => {
    cy.makeSearch();

})

Given ("adds the product to the cart", () =>{
    cy.get(['data-cel-widget="search_result_1"']).
    should('be.visible').click()

})

Then ("concludes the purchase", () =>{
    cy.clickButtomCart();
    
})