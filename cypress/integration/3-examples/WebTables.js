describe('My Seventh Test Suite', function(){

    it('My Seventh Test Case', function(){

        //Accès URL
        cy.visit(Cypress.env('baseUrl')+"/AutomationPractice/")

        //Scanner le tableau Web (2nd colonne, 8ème ligne)
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

           const text=$e1.text()
           if(text.includes("Python")) {

                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){

                    const priceText = price.text()
                    //Compare to string
                    expect(priceText).to.equal('25')
                })
           }

        })
        
    })

})//END.