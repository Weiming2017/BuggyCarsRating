class PopularMakePage {
  getModelTable() {
    return cy.get("table[class^=cars]");
  }
}

export default PopularMakePage;
