describe('Star Wars API Test', () => {
    it('should open swapi.dev, click request button and verify Luke Skywalker details', () => {
        cy.visit('https://swapi.dev/')
        cy.get('.btn.btn-primary').click()
        cy.get('#interactive_output').should('contain', '"name": "Luke Skywalker"')
        cy.get('#interactive_output').should('contain', '"height": "172"')
        cy.get('#interactive_output').should('contain', '"mass": "77"')
        cy.get('#interactive_output').should('contain', '"hair_color": "blond"')
        cy.get('#interactive_output').should('contain', '"skin_color": "fair"')
        cy.get('#interactive_output').should('contain', '"eye_color": "blue"')
        cy.get('#interactive_output').should('contain', '"birth_year": "19BBY"')
        cy.get('#interactive_output').should('contain', '"gender": "male"')
        cy.get('#interactive_output').should('contain', '"homeworld": "https://swapi.dev/api/planets/1/"')
        cy.get('#interactive_output').should('contain', '"films": [')
        cy.get('#interactive_output').should('contain', '"species": [],')
        cy.get('#interactive_output').should('contain', '"vehicles": [')
        cy.get('#interactive_output').should('contain', '"starships": [')
        cy.get('#interactive_output').should('contain', '"created": "2014-12-09T13:50:51.644000Z",')
        cy.get('#interactive_output').should('contain', '"edited": "2014-12-20T21:17:56.891000Z",')
        cy.get('#interactive_output').should('contain', '"url": "https://swapi.dev/api/people/1/"')
    })
})
