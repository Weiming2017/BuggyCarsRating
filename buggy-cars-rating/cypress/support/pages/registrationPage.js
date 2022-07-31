class RegistrationPage {
  #getUsername() {
    return cy.get("#username");
  }

  #getFirstName() {
    return cy.get("#firstName");
  }

  #getLastName() {
    return cy.get("#lastName");
  }

  #getPassword() {
    return cy.get("#password");
  }

  #getConfirmPassword() {
    return cy.get("#confirmPassword");
  }

  #getRegisterButton() {
    return cy.get("button[type=submit]").contains("Register");
  }

  getResult() {
    return cy.get("div[class^=result]");
  }

  registerAUser(userData) {
    this.#getUsername().type(userData.username);
    this.#getFirstName().type(userData.firstName);
    this.#getLastName().type(userData.lastName);
    this.#getPassword().type(userData.password);
    this.#getConfirmPassword().type(userData.password);
    this.#getRegisterButton().click();
  }
}

export default RegistrationPage;
