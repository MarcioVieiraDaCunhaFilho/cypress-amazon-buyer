Feature: Comprador
    Background: acess homepage amazon
    Given the user acesses the amazon homepage

Scenario: Search to purchase
    When makes the item search
    Then adds the product to the cart
    Then concludes the purchase 

Scenario: Search to purchase multiple quantities
    When makes the item search
    Then adds the product to the cart
    And edits the item amount
    Then concludes the purchase

Scenario: Search to purchase different items
    When makes the item search
    Then adds the product to the cart
    And clicks on keep buying
    Then goes back to item search