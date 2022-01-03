/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage';
import ProductPage from '../../support/pageObjects/ProductPage';

describe('Test8Framework Test', function() {

    // runs once before all tests
    before(function() {

        //Call fixture file for externe data (Data driven testing)
        cy.fixture('example Test8Framework').then(function(data){
            
            this.data=data
        })
      
    })//END Before.
 
    it('Test8Framework Test',function() {
    //Créé Objet pour faire appel aux WebElement PageObjects
    const homePage=new HomePage();
    const productPage=new ProductPage();

    //Accès URL -> Base url indiqué sur cypress.json "env"
    cy.visit(Cypress.env('baseUrl')+"/angularpractice/")

    //Rechercher champ Name et écrire "Bob"
    homePage.getEditBox().type(this.data.name)

    //Select "Female" sur la liste déroulante
    homePage.getGender().select(this.data.gender)

    //Vérifier si l'attribut dans champ name est = à l'attribut dans champ Two way data
    homePage.getTwoWayDataBinding().should('have.value',this.data.name)
    
    //Vérifier si la propriété en logueur Is True or Not
    //Minlength se trouve dans l'inspection de console du navigateur du champ Name inspecté
    homePage.getEditBox().should('have.attr','minlength','2')

    //Vérifier si la checkbox est disable ou pas
    homePage.getEnterpreneur().should('be.disabled')

    //Explicite Timeout
    Cypress.config('defaultCommandTimeout', 8000)

    //Cliquer sur l'onglet Shop
    homePage.getShopTab().click()

    //Appeller les produits via une boucle
    this.data.productName.forEach(function(element){

        //ADD produit selectionné (voir file commands.js dans support)
        cy.selectProduct(element)
    });
    
    //Cliquer sur le boutton Checkout après avoir mis les produit au panier
    productPage.checkOutButton().click()

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

    })//END it.



})//END.