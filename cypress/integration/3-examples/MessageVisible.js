describe('My Fourth Test Suite', function(){

    it('My Fourth Test Case', function(){

        //accès url
        cy.visit(Cypress.env('baseUrl')+"/AutomationPractice/")
        //Vérifier si message est visible
        cy.get('#displayed-text').should('be.visible')
        //après avoir cliquer sur le boutton "hide" vérifier que le message n'est plus visible
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        //Faire réaparaitre le texte et vérifier si le message est à nouveau visible
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //Radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')


    })

})//END.