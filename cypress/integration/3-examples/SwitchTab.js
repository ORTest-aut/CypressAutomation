describe('My SixthTest Suite', function(){

    it('My Sixth Test Case', function(){

        //accès url
        cy.visit(Cypress.env('baseUrl')+"/AutomationPractice/")

        
        //Ouvrir un nouvelle onglet et remplacer ancienne sur le navigateur Cypress en utilisant Méthode JQuery 
        //On ouvre pas une fenetre enfant
        cy.get('#opentab').invoke('removeAttr','target').click()//'removeAttr'= ouvre new window; 'target'= supprime old window
        
        //Affirmer qu'on accède bien à la nouvelle page
        cy.url().should('include','rahulshettyacademy')//->Vérifier sur la nouvelle page que l'url contient bien le mot rahulshettyacademy
        
        //Revenir sur l'ancienne page (onglet)
        cy.go('back')


    })

})//END.