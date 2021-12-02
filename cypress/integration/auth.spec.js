describe("Proper Login", () => {
  it("User redirected to / after proper /login", () => {
    cy.visit("/login");

    cy.get("input.user-input").type("marina");

    cy.get("input.password-input").type("pass");

    cy.contains("Continue").click();

    cy.url().should("eq", "http://localhost:3000/");
  });
});

describe("Attempt to get / while not logged in", () => {
  it("User redirected to /login after trying to get to /", () => {
    cy.visit("/");

    cy.url().should("include", "http://localhost:3000/login");
  });
});

describe("Incorrect login data", () => {
  it("User stays at /login after typing incorrect login data", () => {
    cy.visit("/login");

    cy.get("input.user-input").type("user");

    cy.get("input.password-input").type("wrong");

    cy.contains("Continue").click();

    cy.url().should("include", "http://localhost:3000/login");
  });
});
