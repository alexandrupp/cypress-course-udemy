/// <reference types="Cypress" />

describe('Selector examples', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('Examples of Selectors via WebdriverUni Contact Us Page', () => {
        cy.get('input') //By tag name
        cy.get('input[name=\'first_name\']') //By attribute name and value
        cy.get('#contact_me') //By id
        cy.get('.feedback-input') //By class
        cy.get('[class=\'navbar navbar-inverse navbar-fixed-top\']') //By multiple classes
        cy.get('[name=\'email\'][placeholder=\'Email Address\']') //By two different attributes
        cy.xpath('//input[@name=\'first_name\']') //By xpath
    })
})