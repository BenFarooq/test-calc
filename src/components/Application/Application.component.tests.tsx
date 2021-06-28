import * as React from 'react';
import { mount } from '@cypress/react';

import { Application } from './Application';

describe('Application component', () => {
  it('passes structure test', () => {
    mount(<Application />);
    cy.get('[aria-label=first-addend]').should('be.visible');
    cy.contains('+').should('be.visible');
    cy.get('[aria-label=second-addend]').should('be.visible');
    cy.contains('=').should('be.visible');
    cy.get('[aria-label=sum]').should('be.visible');
    cy.get('[aria-label=sum]').should('have.attr', 'readonly')
    cy.contains('Clear').should('be.visible');
    cy.contains('Add').should('be.visible');
  });
});
