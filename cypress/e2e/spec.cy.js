describe('template spec', () => {
  it('passes', () => {
    cy.visit('/asdfadsfadsfasdf')
    throw new Error('break');
  })
})
