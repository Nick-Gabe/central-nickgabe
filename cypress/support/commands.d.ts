/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    clipboardContains(value: string): Chainable<void>;
  }
}
