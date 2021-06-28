describe('Application', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('allows to sum two numbers', () => {
    it('41 + 1 = 42', () => {
      cy.get('[aria-label=first-addend]').type('41');
      cy.get('[aria-label=second-addend]').type('1');
      // act
      cy.get('button').contains('Add').click();
      // assert
      cy.get('[aria-label=sum]').should('have.value', '42');
    });
    it('-3 + 9 = 6', () => {
      cy.get('[aria-label=first-addend]').type('-3');
      cy.get('[aria-label=second-addend]').type('9');
      // act
      cy.get('button').contains('Add').click();
      // assert
      cy.get('[aria-label=sum]').should('have.value', '6');
    });
    it('0 + 0 = 0', () => {
      cy.get('[aria-label=first-addend]').type('0');
      cy.get('[aria-label=second-addend]').type('0');
      // act
      cy.get('button').contains('Add').click();
      // assert
      cy.get('[aria-label=sum]').should('have.value', '0');
    });
    it('10 + 0.1 = 10.1', () => {
      cy.get('[aria-label=first-addend]').type('10');
      cy.get('[aria-label=second-addend]').type('0.1');
      // act
      cy.get('button').contains('Add').click();
      // assert
      cy.get('[aria-label=sum]').should('have.value', '10.1');
    });
  });

  describe('allows to clean entered numbers', () => {
    it('allows to clean entered numbers', () => {
      cy.get('[aria-label=first-addend]').type('42');
      cy.get('[aria-label=second-addend]').type('42');
      // act
      cy.get('button').contains('Clear').click();
      // assert
      cy.get('[aria-label=first-addend]').should('be.empty');
      cy.get('[aria-label=second-addend]').should('be.empty');
    });

    it('and sets sum to zero after', () => {
      cy.get('[aria-label=first-addend]').type('42');
      cy.get('[aria-label=second-addend]').type('42');
      // act
      cy.get('button').contains('Clear').click();
      // assert
      cy.get('[aria-label=sum]').should('have.value', '0');
    });

    it('and sets focus on first addend after', () => {
      cy.get('[aria-label=first-addend]').type('42');
      cy.get('[aria-label=second-addend]').type('42');
      // act
      cy.get('button').contains('Clear').click();
      // assert
      cy.get('[aria-label=first-addend]').should('have.focus');
    });
  });

  describe('has disabled "Clear button"', () => {
    it('if there is nothing to clean', () => {
      cy.get('button').contains('Clear').should('be.disabled');
    });
    it('if numbers have been just cleaned', () => {
      cy.get('[aria-label=first-addend]').type('42');
      cy.get('[aria-label=second-addend]').type('42');
      // act
      cy.get('button').contains('Clear').click();
      // assert
      cy.get('button').contains('Clear').should('be.disabled');
    });
  });

  describe('has disabled "Add button"', () => {
    it('if there is nothing to sum', () => {
      cy.get('button').contains('Add').should('be.disabled');
    });
    it('if only first addend have been entered', () => {
      cy.get('[aria-label=first-addend]').type('42');
      // assert
      cy.get('button').contains('Add').should('be.disabled');
    });
    it('if only second addend have been entered', () => {
      cy.get('[aria-label=second-addend]').type('42');
      // assert
      cy.get('button').contains('Add').should('be.disabled');
    });
  });
});
