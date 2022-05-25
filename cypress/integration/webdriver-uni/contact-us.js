/// <reference types="Cypress" />

describe('Test Contact US form via WebdriverUni', () => {
  beforeEach(() => {
    cy.fixture('./web-driver-university/selectors').as('selectors')
    cy.fixture('contact_us_data').as('contact_us_data')
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
  })

  it('Should be able to submit a successful submission via contact us form', function () {
    cy.get(this.selectors.contact_us_page.first_name_field)
      .type(this.contact_us_data.first_name),
    cy.get(this.selectors.contact_us_page.last_name_field)
      .type(this.contact_us_data.last_name)
    cy.get(this.selectors.contact_us_page.email_field)
      .type(this.contact_us_data.email)
    cy.get(this.selectors.contact_us_page.comments_field)
      .type(this.contact_us_data.comment)
    cy.get(this.selectors.contact_us_page.submit_cta)
      .click()
  })

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function () {
    cy.get(this.selectors.contact_us_page.first_name_field)
      .type(this.contact_us_data.first_name),
    cy.get(this.selectors.contact_us_page.last_name_field)
      .type(this.contact_us_data.last_name)
    cy.get(this.selectors.contact_us_page.comments_field)
      .type(this.contact_us_data.comment)
    cy.get(this.selectors.contact_us_page.submit_cta)
      .click()
  })
})
