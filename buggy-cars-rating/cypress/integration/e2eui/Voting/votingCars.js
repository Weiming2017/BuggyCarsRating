import { expect } from "chai";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let userData;
let comment;

before(function () {
  cy.fixture("data").then(function (data) {
    userData = data.newUser;
    comment = data.comment;
  });
});

Given("I register as a new user", () => {
  cy.navigateToRegistrationPage();
  cy.registerAUser(userData);
});

Given("I login as the user", () => {
  cy.accessHomePage();
  cy.login(userData);
});

When(`I navigate to the popular make {word} details page`, (model) => {
  cy.searchPopularMake();
  cy.getModels()
    .within(() => {
      return cy.contains(model);
    })
    .click();
});

When(`I vote for it`, () => {
  cy.vote(comment);
});

Then("voting is successful", () => {
  cy.confirmationMessage()
    .invoke("text")
    .then((text) => {
      expect(text.trim()).equal("Thank you for your vote!");
    });
});

Then("comment is added to the history", () => {
  cy.getFirstCommentFromHistory()
    .within(() => {
      return cy.contains("td", comment);
    })
    .should("be.visible");
});
