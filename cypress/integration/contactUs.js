/// <reference types="Cypress" />

describe('Test Contact US form via WebdriverUni', () => {
    beforeEach(() => {
        cy.fixture('contactUs').as('contactUsData')

        cy.visit('/Contact-Us/contactus.html')
    })

    it('Should be able to submit a successful submission via contact us form', function () {
        cy.get('[name="first_name"]')
          .type(this.contactUsData.first_name),
        cy.get('[name="last_name"]')
          .type(this.contactUsData.last_name)
        cy.get('[name="email"]')
          .type(this.contactUsData.email)
        cy.get('textarea.feedback-input')
          .type(this.contactUsData.comment)
        cy.get('[type="submit"]')
          .click()
    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', function () {
        cy.get('[name="first_name"]')
          .type(this.contactUsData.first_name),
        cy.get('[name="last_name"]')
          .type(this.contactUsData.last_name)
        cy.get('textarea.feedback-input')
          .type(this.contactUsData.comment)
        cy.get('[type="submit"]')
          .click()
    })
});
