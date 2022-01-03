//Handling API call directly with out involving browser with cypress
describe('My First APITest Suite', function(){

    it('My First APITest Case', function(){

        //cy.request(method, url, body)
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name":"Learn Appium Automation with Java",
            "isbn":"bcdsss",
            "aisle":"22s7",
            "author":"John doe"
        }).then(function(response){

        expect(response.body).to.have.property("Msg","successfully added")
        expect(response.status).to.eq(200)
        })

    })

})//END.