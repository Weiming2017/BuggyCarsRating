import { expect } from "chai";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let userData;

before(function () {
  cy.fixture("userData").then(function (data) {
    userData = data.newUser;
  });
});

Given(`I open Buggy Car Rating page`, () => {});

When("I register as a new user", () => {
  cy.navigateToRegistrationPage();
  cy.registerAUser(userData);
});

Then("the registration is successful", () => {
  cy.registrationResult()
    .invoke("text")
    .then((text) => {
      expect(text.trim()).equal("Registration is successful");
    });
});
