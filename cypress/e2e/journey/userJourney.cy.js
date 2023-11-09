import { acceptedUser } from '../loginTesting/login.cy'

describe('user journey', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('user-accepted', () => {
    acceptedUser()
    cy.location('pathname').should('eq', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
  })
})
