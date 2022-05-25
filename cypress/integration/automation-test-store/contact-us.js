/// <reference types="Cypress" />

describe('Test Contact Us form via Automation Test Store', () => {
  beforeEach(() => {
      cy.fixture('contactUs').as('contactUsData')

      cy.visit('https://www.automationteststore.com/')
      cy.get('.info_links_footer > :nth-child(5) > a').click()
  })

  it('Should be able to submit a successful submission via contact us form', function () {
    cy.get('#ContactUsFrm_first_name')
      .type(this.contactUsData.first_name),
    cy.get('#ContactUsFrm_email')
      .type(this.contactUsData.email)
    cy.get('#ContactUsFrm_enquiry')
      .type(this.contactUsData.comment)
    cy.get('.col-md-6 > .btn')
      .click()
  });
});