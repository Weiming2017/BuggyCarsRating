const baseUrl = "https://buggy.justtestit.org";

class HomePage {
  #getLoginInput() {
    return cy.get("input[name=login]");
  }

  #getPassword() {
    return cy.get("input[name=password]");
  }

  #getLoginButton() {
    return cy.get("button[type=submit]");
  }

  #getPopularMakeLink() {
    return cy.get("h2[class^=card-header]").contains("Popular Make").next("a");
  }

  accessHomePage() {
    cy.visit(baseUrl);
  }

  goToRegistrationPage() {
    cy.get("a[href*=register]").click();
  }

  goToProfilePage() {
    cy.get("a[href*=profile]").click();
  }

  selectPopularMake() {
    this.#getPopularMakeLink().click();
  }

  login(userData) {
    this.#getLoginButton().type(userData.username);
    this.#getPassword().type(userData.password);
    this.#getLoginButton().click();
  }
}

export default HomePage;
