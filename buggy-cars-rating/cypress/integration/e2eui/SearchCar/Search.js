import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let userData;

before(function () {
  cy.fixture("userData").then(function (data) {
    userData = data.existingUser;
  });
});

Given(`I login Buggy Car Rating`, () => {
  cy.login(userData);
});

When(`searching for the popular make`, () => {
  cy.searchPopularMake();
});

Then(`I can find {word} from the list`, (model) => {
  cy.getModels()
    .within(() => {
      return cy.contains(model);
    })
    .should("be.visible");
});
