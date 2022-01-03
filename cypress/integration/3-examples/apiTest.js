/// <reference types="Cypress" />

describe('My API Test', function(){

    

    it('My API Test Case', function(){

        cy.visit("https://www.rahulshettyacademy.com/angularAppdemo/")
        
        cy.intercept({
            method : 'GET,',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, 
    
    {
        statusCode: 200,
        body:[{
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301" },{
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": "2301" }]
        
    }).as('booktrievals')//Ref de la réponse sous une variable
    cy.get("button[class='btn btn-primary']").click()
    
    //Testing front end and back end response validation
    cy.wait('@booktrievals').should(({request,reponse}) => {

        cy.get('tr').should('have.lenght',response.body.length+5)
    })

    //Vérifier l'affichag=e du texte
    cy.get('p').should('have.text','Sorry we have only one book available')

    //length of the response array = rows of the table

    })

})//END.