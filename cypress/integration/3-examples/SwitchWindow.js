describe('My Ninth Test Suite', function(){

    it('My Ninth Test Case', function(){

        //Accès Url
        cy.visit(Cypress.env('baseUrl')+"/AutomationPractice/")

        
        //Switch Tab, Obtenir valeur de la propriété
        cy.get('#opentab').then(function(el){

            //1ere Méthod
            const url=el.prop('href')
            //2nd Méthod
            cy.visit(url)
        })
      

    })

})//END.