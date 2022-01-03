describe('My Eighth Test Suite', function(){

    it('My Eighth Test Case', function(){

        //Mouse hover popup
        cy.visit(Cypress.env('baseUrl')+"/AutomationPractice/")

        //Montrer et afficher la liste deroulante du mouse hover
        cy.get('.mouse-hover-content').invoke('show')
        //Cliquer sur l'onglet "Top" de la liste déroulante
        cy.contains('Top').click({force:true})
        //Vérifier sur l'url, si le mot top est inclus
        cy.url().should('include','top')

    })

})//END.