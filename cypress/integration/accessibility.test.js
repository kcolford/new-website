/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe()
  })
  it("has no detectable accessibility violations", () => {
    cy.checkA11y()
  })
})
