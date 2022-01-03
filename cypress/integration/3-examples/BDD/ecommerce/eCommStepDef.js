import HomePage from '../../../../support/pageObjects/HomePage';
import ProductPage from '../../../../support/pageObjects/ProductPage';
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";
//node_modules\.bin\cypress run --spec cypress/integration/3-examples/BDD/*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
//add cucumber report options in package.json -> output.json
//use html report plugin/create js file (pass the details of output.json)
//run js file



//Créé Objet pour faire appel aux WebElement PageObjects
const homePage=new HomePage();
const productPage=new ProductPage();
//Déclarer variable avec porter exterieur
let name

/*
    Scenario: Ecommerce products delivery
*/
Given('I open Ecommerce Page',() => {

    cy.visit(Cypress.env('baseUrl')+"/angularpractice/")
})

When('I add items to Cart',function(){

    //Cliquer sur l'onglet Shop
    homePage.getShopTab().click()

    //Appeller les produits via une boucle
    this.data.productName.forEach(function(element){

        //ADD produit selectionné (voir file commands.js dans support)
        cy.selectProduct(element)
    });
    
    //Cliquer sur le boutton Checkout après avoir mis les produit au panier
    productPage.checkOutButton().click()
})

And('Validate the total prices',() => {

    //Vérifier (extraire puis récapituler) le prix de CHAQUE des produits dans le panier Checkout
    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

        //Séparer le sigle du nombre par l'espace (₹. 65000 > ₹./6500) pour en extraire que le nombre par la suite/
        const amount=$el.text()
        var res = amount.split(" ")
        res= res[1].trim()
        sum=Number(sum)+Number(res)
        
    }).then(function(){+

        cy.log(sum)
    })
    
    //Comparer résultat à à resultat total affiché
    cy.get('h3 strong').then(function(element){

        const amount=element.text()
        var res= amount.split(" ")
        var total= res[1].trim()
        expect(Number(total)).to.equal(sum)
    })
})

Then ('select the country submit and verify Thankyou',() => {

    //Cliquer sur le bouton "Checkout"
    cy.contains('Checkout').click()

    //Ecrire "India" dans le champ delivery location
    cy.get('#country').type('India')

    //Cliquer sur le pays proposé
    cy.get('.suggestions > ul > li > a').click()

    //Cocher I agree
    cy.get('#checkbox2').click({force: true})

    //Cliquer sur boutton Purchase
    cy.get('input[type="submit"]').click()

    //Vérifier l'affichage du texte
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function(element){
 
        //Vérifier si argument est true
        const actualText=element.text()
        expect(actualText.includes('Success')).to.be.true
      
    })
})

/*
    Scenario: Filling the form to shop
*/
When ('I fill the form details', function(dataTable){ //dataTable pour récupérer les valeur sur le fichier feature

    name = dataTable.rawTable[1][0]
    
    /*Rechercher champ Name et écrire "Bob"
    homePage.getEditBox().type(this.data.name) -> 1st method with example Test8Framework.js file*/
    //[name, gender][Tobby, male] -> 2nd method with feature file
    homePage.getEditBox().type(dataTable.rawTable[1][0])

    /*Select "Female" sur la liste déroulante
    homePage.getGender().select(this.data.gender) -> 1st method with example Test8Framework.js file*/
    //[name, gender][Tobby, male] -> 2nd method with  feature file
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then ('Validate the forms behaviour', function(){
    
    //Vérifier si l'attribut dans champ name est = à l'attribut dans champ Two way data
    //homePage.getTwoWayDataBinding().should('have.value',this.data.name) -> 1st method wt Example.js file
    homePage.getTwoWayDataBinding().should('have.value',name) //-> 2nd method wt feature file
    
    //Vérifier si la propriété en logueur Is True or Not
    //Minlength se trouve dans l'inspection de console du navigateur du champ Name inspecté
    homePage.getEditBox().should('have.attr','minlength','2')

    //Vérifier si la checkbox est disable ou pas
    homePage.getEnterpreneur().should('be.disabled')

    //Explicite Timeout
    Cypress.config('defaultCommandTimeout', 8000)
})

And ('select the shop page', function(){
    
    //Cliquer sur l'onglet Shop
    homePage.getShopTab().click()
})
