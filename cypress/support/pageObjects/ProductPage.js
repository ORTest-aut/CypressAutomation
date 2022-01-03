class ProductPage {

    //WebElement par une Méthode (Champ name)
    checkOutButton(){

        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

}



//Rendre la class disponible pour tous les autres fichiers
export default ProductPage