import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let userData;

before(function () {
  cy.fixture("data").then(function (data) {
    userData = data.existingUser;
  });
});

Given(`I am existing customer`, () => {
  cy.login(userData);
});

When(`I update my first name`, () => {
  cy.updateProfile(userData.updatedFirstName);
});

Then(`my profile can be updated successfully`, () => {
  cy.getResultMessage()
    .invoke("text")
    .then((text) => {
      console.log(text.trim());
      expect(text.trim()).equal("The profile has been saved successful");
    });
});
