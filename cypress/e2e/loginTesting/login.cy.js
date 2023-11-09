export const acceptedUser = () => cy.login('standard_user', 'secret_sauce')
export const unAcceptedUser = () => cy.login('', '')

describe('testing-login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('user-accepted', () => {
    acceptedUser()
    cy.location('pathname').should('eq', '/inventory.html')
  })

  // it('it shows error for empty space', () => {
  //   unAcceptedUser()
  // })
})
