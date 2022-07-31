import HomePage from "./pages/homePage";
import RegistrationPage from "./pages/registrationPage";
import PopularMakePage from "./pages/popularMakePage";

const homePage = new HomePage();
const registrationPage = new RegistrationPage();
const popularMakePage = new PopularMakePage();

Cypress.Commands.add("accessHomePage", () => {
  homePage.accessHomePage();
});

Cypress.Commands.add("navigateToRegistrationPage", () => {
  homePage.goToRegistrationPage();
});

Cypress.Commands.add("login", (userData) => {
  homePage.login(userData);
});

Cypress.Commands.add("searchPopularMake", () => {
  homePage.selectPopularMake();
});

Cypress.Commands.add("registerAUser", (userData) => {
  registrationPage.registerAUser(userData);
});

Cypress.Commands.add("registrationResult", () => {
  registrationPage.getResult();
});

Cypress.Commands.add("getModels", () => {
  popularMakePage.getModelTable();
});
