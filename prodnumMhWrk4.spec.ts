// **Run once before each test case**
beforeEach(function(){
    console.log('see.. this function is run EACH time');
})

// describe() are:
// - commonly known as test suites, which contains test cases
// - merely groups, and you can have groups within groups
describe('Check Number of products in category', () => {

    it('Login ok with initial check', () => {
      // var totalcnt: number =0;
        // how to use env variables
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type(Cypress.env('usar'));
        // use log false to hide password from cypress logs
        cy.get('#password').type(Cypress.env('pazz'), { log: false });

        cy.contains('Login').click();

        //cy.contains('Invalid credentials').should('not.be.visible');
        cy.contains('Billboard').click();
        cy.log("Logging started her");
     
     cy.get('.products li').eq(1).find('mark').then((elem) => {
          const prodcnt = Number(elem.text()[0]);
          console.log('console log prodcnt ' + prodcnt);
          cy.log('cY log prodcnt ' + prodcnt);

          cy.wrap(elem).click();
          cy.get('.products li').should('have.length', prodcnt);


      } 
      );
      
     
    })
   
    

});