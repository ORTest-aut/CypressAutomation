describe('My First Test Suite', function(){

    it('My First Test Case', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
       

        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //Cy.get = findElement of Selenium
        cy.get('.product:visible').should('have.length',4)
        //Parent child chaining
        cy.get('.products').as('productLocator')// Alias ou comment créé une sorte de variable sur Cypress -> const productLocator = cy.get('product')
        //Appeler l'Alias productLocator avec le "@" devant
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log('Test print console')// d'abord résoudre l'étape 15 pour passer manuellement le cosole.log sur Cypress
        })
        //Itérer à travers une structure de type tableau (tableaux ou objets avec une propriété de longueur).
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                
                $el.find('button').click() //or -> $el.find('button').click()
            }
        })

        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')

        //this is to print in logs
        cy.get('.brand').then(function(logoelement) {
            cy.log(logoelement.text())
    
        })

        /*
        Le code de dessous ne fonctionnera pas, car la méthode text n'est pas Cypress:
            const logo=cy.get('.brand')
            cy.log(cy.get('.brand').text())
            cy.log(logo.text())
        Du coup il faut d'abord résoudre la méthode comme ceci:
            cy.get('brand').then(function(logoelement) {
            cy.log(logoelement.text())
        })
        */

    })

})//END.