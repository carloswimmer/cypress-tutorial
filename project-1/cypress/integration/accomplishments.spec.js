/// <reference types="cypress" />

describe("Accomplishment dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  it("should showcase error if information is missing", () => {
    cy.get("[data-cy='accomplishment-title-input']").type(
      "My basketball accomplishment"
    );
    cy.get("[data-cy='accomplishment-input']").type(
      "I made 10 threes in a row"
    );
    cy.contains("Submit Accomplishment").click();
    cy.get("p")
      .contains("Complete the items above to continue")
      .should("be.visible");
  });

  it("should display validation component if all information is input", () => {
    cy.get("[data-cy='accomplishment-title-input']").type(
      "My basketball accomplishment"
    );
    cy.get("[data-cy='accomplishment-input']").type(
      "I made 10 threes in a row"
    );
    cy.get("[type='checkbox']").click();
    cy.contains("Submit Accomplishment").click();
    cy.get("h1")
      .contains("This Accomplishment was Successfully Submitted")
      .should("be.visible");
  });

  it("should return back to accomplishment dashboard with empty inputs", () => {
    cy.get("[data-cy='accomplishment-title-input']").type(
      "My basketball accomplishment"
    );
    cy.get("[data-cy='accomplishment-input']").type(
      "I made 10 threes in a row"
    );
    cy.get("[type='checkbox']").click();
    cy.contains("Submit Accomplishment").click();
    cy.contains("button", "Go Back").click();
    cy.contains("h2", "Accomplishment").should("be.visible");
    cy.get("[data-cy='accomplishment-title-input']").should("be.empty");
    cy.get("[data-cy='accomplishment-input']").should("be.empty");
    cy.get("[type='checkbox']").should("not.be.checked");
  });
});
