/// <reference types="Cypress" />

const util = require('util')

describe('Test Contact Us form via Automation Test Store', () => {
  beforeEach(() => {
    cy.fixture('./AutomationTestStore/Selectors/ContactUsPageSelectors').as('SELECTORS')
    cy.fixture('./AutomationTestStore/Constants').as('CONSTANTS')
    cy.visit('https://automationteststore.com/index.php?rt=content/contact')
  })

  it('Should be able to submit a successful submission via contact us form', function () {
    cy.get(this.SELECTORS.CONTACT_US_PAGE.FIRST_NAME_FIELD).type(this.CONSTANTS.CONTACT_US_PAGE.FIRST_NAME),
    cy.get(this.SELECTORS.CONTACT_US_PAGE.EMAIL_FIELD).type(this.CONSTANTS.CONTACT_US_PAGE.EMAIL)
    cy.get(this.SELECTORS.CONTACT_US_PAGE.EMAIL_FIELD).should('have.attr', 'name', 'email')
    cy.get(this.SELECTORS.CONTACT_US_PAGE.ENQUIRY_FIELD).type(this.CONSTANTS.CONTACT_US_PAGE.ENQUIRY)
    cy.get(this.SELECTORS.CONTACT_US_PAGE.SUBMIT_CTA).click()
    cy.xpath(util.format(this.SELECTORS.CONTACT_US_SUCCESS_PAGE.SUCCESS_MESSAGE, this.CONSTANTS.CONTACT_US_SUCCESS_PAGE.SUCCESS_MESSAGE)).should('have.text', this.CONSTANTS.CONTACT_US_SUCCESS_PAGE.SUCCESS_MESSAGE)
  })
})