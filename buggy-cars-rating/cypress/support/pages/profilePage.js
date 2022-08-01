class ProfilePage {
  #getFirstName() {
    return cy.get("#firstName");
  }

  getResultMessageField() {
    cy.get("div.result.alert").first();
  }

  updateFirstName(newFirstName) {
    this.#getFirstName().clear().type(newFirstName);
  }

  submit() {
    cy.get("button[type=submit]").click();
  }
}

export default ProfilePage;
