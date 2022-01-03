/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe('Frames Test', function() {
 
    it('My Frames case',function() {
    
    //Accès URL
    cy.visit(Cypress.env('baseUrl')+"/AutomationPractice/")
    
    //I-Frame
    cy.frameLoaded("#courses-iframe")

    //Switch to iFrame mode
    cy.iframe().find("a[href*='mentorship']").eq(0).click()

    cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)


    })
 
 
})//END.