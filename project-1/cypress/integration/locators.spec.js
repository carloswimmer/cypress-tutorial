/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/elements");
  });

  it("should locate elements with get", () => {
    cy.get("button");
    cy.get(".btn-with-class");
    cy.get("[class='Elements-btn btn-with-class']");
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']");
    cy.get("#btn-with-id");
    cy.get("[type='submit']");
    cy.get("button.Elements-btn[type='submit']");
    cy.get("[data-cy='btn-id-1']");
    cy.getByTestId("btn-id-1");
  });
});
