describe('My Fifth Test Suite', function(){

    it('My Fifth Test Case', function(){

        //accès url
        cy.visit(Cypress.env('baseUrl')+"/AutomationPractice/")
        //Ouvrir Popup Alert et Popup Confim
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        
        //Capturer la Popup Alert manuellement
        cy.on('window:alert', (str) => {

            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
    
        })

        //Capturer la Popup Confirm (Ok or Annul) manuellement
        cy.on('window:confirm', (str) => {

            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
    
        })

            
        


    })

})//END.