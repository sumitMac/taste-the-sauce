import 'cypress-map'

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('testing-login', () => {
    cy.get('.login_wrapper')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.location('pathname').should('eq', '/inventory.html')
    cy.get('.inventory_list')
      .should('be.visible')
      .find('.inventory_item_price')
      .should('have.length.greaterThan', 2)
      .map('innerText')
      .print()
      .mapInvoke('slice', 1)
      .print()
      .map(Number)
      .print()
      .apply(Cypress._.min)
      .print()
      .should('equal', 7.99)
  })
})
