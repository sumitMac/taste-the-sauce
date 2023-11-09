import { acceptedUser } from './login.cy'

describe('logout', () => {
  it('log out', () => {
    cy.visit('/')
    acceptedUser()
    cy.location('pathname').should('equal', '/inventory.html')
    cy.contains('button', 'Open Menu').click()
    cy.get('.bm-menu-wrap')
      .should('be.visible')
      .contains('.menu-item', 'Logout')
      .click()
    cy.location('pathname').should('equal', '/')
  })
})
