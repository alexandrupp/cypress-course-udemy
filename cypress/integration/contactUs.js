/// <reference types="Cypress" />

describe('Test Contact US form via WebdriverUni', () => {
    it('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('http://webdriveruniversity.com')
    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
        
    });
});
