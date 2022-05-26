/// <reference types="Cypress" />

const util = require('util')

describe('Test Contact US form via WebdriverUni', () => {
  beforeEach(() => {
    cy.fixture('./WebdriverUniversity/Selectors/ContactUsPageSelectors').as('SELECTORS')
    cy.fixture('./WebdriverUniversity/Constants').as('CONSTANTS')
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
  })

  it('Should check webpage charset, title and url', function () {
    cy.document().should('have.property', 'charset').and('eq', this.CONSTANTS.CONTACT_US_PAGE.WINDOW.CHARSET)
    cy.title().should('include', this.CONSTANTS.CONTACT_US_PAGE.WINDOW.TITLE)
    cy.url().should('include', this.CONSTANTS.CONTACT_US_PAGE.WINDOW.URL)
  })

  it('Should be able to submit a successful submission via contact us form', function () {
    cy.get(this.SELECTORS.CONTACT_US_PAGE.FIRST_NAME_FIELD).type(this.CONSTANTS.CONTACT_US_PAGE.FIRST_NAME),
    cy.get(this.SELECTORS.CONTACT_US_PAGE.LAST_NAME_FIELD).type(this.CONSTANTS.CONTACT_US_PAGE.LAST_NAME),
    cy.get(this.SELECTORS.CONTACT_US_PAGE.EMAIL_FIELD).type(this.CONSTANTS.CONTACT_US_PAGE.EMAIL)
    cy.get(this.SELECTORS.CONTACT_US_PAGE.COMMENTS_FIELD).type(this.CONSTANTS.CONTACT_US_PAGE.COMMENTS)
    cy.get(this.SELECTORS.CONTACT_US_PAGE.SUBMIT_CTA).click()
    cy.xpath(util.format(this.SELECTORS.CONTACT_US_SUCCESS_PAGE.SUCCESS_MESSAGE, this.CONSTANTS.CONTACT_US_SUCCESS_PAGE.SUCCESS_MESSAGE)).should('have.text', this.CONSTANTS.CONTACT_US_SUCCESS_PAGE.SUCCESS_MESSAGE)
  })

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function () {
    cy.get(this.SELECTORS.CONTACT_US_PAGE.FIRST_NAME_FIELD).type(this.CONSTANTS.CONTACT_US_PAGE.FIRST_NAME),
    cy.get(this.SELECTORS.CONTACT_US_PAGE.LAST_NAME_FIELD).type(this.CONSTANTS.CONTACT_US_PAGE.LAST_NAME),
    cy.get(this.SELECTORS.CONTACT_US_PAGE.COMMENTS_FIELD).type(this.CONSTANTS.CONTACT_US_PAGE.COMMENTS)
    cy.get(this.SELECTORS.CONTACT_US_PAGE.SUBMIT_CTA).click()
    cy.get(this.SELECTORS.CONTACT_US_ERROR_PAGE.ERROR_MESSAGE_CONTAINER).contains(this.CONSTANTS.CONTACT_US_ERROR_PAGE.ERROR_MESSAGE)
  })
})
