/// <reference types="Cypress" />

const util = require('util')

describe('Test Contact Us form via Automation Test Store', () => {
  beforeEach(() => {
    cy.fixture('./automation-test-store/selectors').as('selectors')
    cy.fixture('contact_us_data').as('contact_us_data')
    cy.visit('https://automationteststore.com/index.php?rt=content/contact')
  })

  it('Should be able to submit a successful submission via contact us form', function () {
    cy.get(this.selectors.contact_us_page.first_name_field)
      .type(this.contact_us_data.first_name),
    cy.get(this.selectors.contact_us_page.email_field)
      .type(this.contact_us_data.email)
    cy.get(this.selectors.contact_us_page.enquiry_field)
      .type(this.contact_us_data.comment)
    cy.get(this.selectors.contact_us_page.submit_cta)
      .click()
    cy.xpath(util.format(
        this.selectors.contact_success_page.success_text,
        this.contact_us_data.success_message))
      .should('have.text', this.contact_us_data.success_message)
  })
})