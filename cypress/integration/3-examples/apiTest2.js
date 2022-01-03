/// <reference types="Cypress" />

import { readyException } from "cypress/types/jquery";

describe('My API Test', function(){

    

    it('My API Test Case', function(){

        cy.visit("https://www.rahulshettyacademy.com/angularAppdemo/");
        
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req) =>{

            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"

            req.continue((res) => {

                //except(res.statusCode).to.equal(403) -> enlever "//" pour faire vérification sécurité si pas de code 200
            })
        }

    ).as("dummyUrl")

    cy.get("button[class='btn btn-primary']").click()
    cy.wait('@dummyUrl')


    //length of the response array = rows of the table

    })

})//END.