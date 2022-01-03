describe('My Second Test Suite', function(){

    it('My Second Test Case', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
       
        //Parent child chaining
        cy.get('.products').as('productLocator')// Alias ou comment créé une sorte de variable sur Cypress -> const productLocator = cy.get('product')
        
        //Itérer à travers une structure de type tableau (tableaux ou objets avec une propriété de longueur).
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                
                $el.find('button').click() //or -> $el.find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get(':nth-child(14)').click()

    })

})//END. vfgb