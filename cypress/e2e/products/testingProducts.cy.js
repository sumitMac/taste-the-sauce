describe('products and functionality', () => {
  beforeEach(() => {
    cy.visit('/')
    acceptedUser()
  })

  it('checking item price', () => {
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
