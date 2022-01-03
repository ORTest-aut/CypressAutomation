beforeEach(function(){

    //Call fixture file for externe data (Data driven testing)
    cy.fixture('example Test8Framework').then(function(data){
            
        this.data=data
    })
    
})