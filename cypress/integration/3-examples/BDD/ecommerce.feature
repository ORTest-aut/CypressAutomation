Feature: End to end ecommerce validation

    Application Regression

    @Regression
    Scenario: Ecommerce products delivery
    Given I open Ecommerce Page
    When I add items to Cart
    And Validate the total prices
    Then select the country submit and verify Thankyou

    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce Page
    When I fill the form details
        |name | gender |
        |Tobby | Male  |
    Then Validate the forms behaviour
    And select the shop page