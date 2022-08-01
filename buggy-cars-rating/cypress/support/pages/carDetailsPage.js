class CarDetailsPage {
  #getCommentField() {
    return cy.get("#comment");
  }

  #getVoteButton() {
    return cy.get(".btn-success").contains("Vote!");
  }

  #getCommentTable() {
    return cy.get(".table tr");
  }

  getConfirmationMessage() {
    return cy.get(".card-text");
  }

  enterComment(comment) {
    this.#getCommentField().type(comment);
  }

  clickOnVoteButton() {
    this.#getVoteButton().click();
  }

  getFirstCommentFromHistoryTable() {
    this.#getCommentTable().first();
  }
}

export default CarDetailsPage;
