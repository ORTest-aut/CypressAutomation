class HomePage {

    //WebElement par une Méthode (Champ name)
    getEditBox(){

        return cy.get('input[name="name"]:nth-child(2)')

    }

    //WebElement
    getTwoWayDataBinding(){

        return cy.get(':nth-child(4) > .ng-untouched')
    }

    //WebElement
    getGender(){

        return cy.get('select')
    }

    //WebElement
    getEnterpreneur(){

        return cy.get('#inlineRadio3')
    }

    //WebElement
    getShopTab(){

        return cy.get(':nth-child(2) > .nav-link')
    }

    
}

//Rendre la class disponible pour tous les autres fichiers
export default HomePage