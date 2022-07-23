Given("User navigate to the Website", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/");
});

When("User enter valid username and password", () => {
  cy.get("#txtUsername").clear();
  cy.get("#txtUsername").type("Admin");
  cy.get("#txtPassword").clear();
  cy.get("#txtPassword").type("admin123");
});

When("User clicks on login button", () => {
  cy.get("#btnLogin").click();
});

Then("validate the title after login", () => {
  cy.url().should("contains", "dashboard");
});
