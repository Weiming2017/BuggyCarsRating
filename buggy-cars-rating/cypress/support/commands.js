import HomePage from "./pages/homePage";
import RegistrationPage from "./pages/registrationPage";
import PopularMakePage from "./pages/popularMakePage";
import CarDetailsPage from "./pages/carDetailsPage";
import ProfilePage from "./pages/profilePage";

const homePage = new HomePage();
const registrationPage = new RegistrationPage();
const popularMakePage = new PopularMakePage();
const carDetailsPage = new CarDetailsPage();
const profilePage = new ProfilePage();

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

Cypress.Commands.add("updateProfile", (newFirstName) => {
  homePage.goToProfilePage();
  profilePage.updateFirstName(newFirstName);
  profilePage.submit();
});

Cypress.Commands.add("getResultMessage", (newFirstName) => {
  profilePage.getResultMessageField();
});

Cypress.Commands.add("registerAUser", (userData) => {
  registrationPage.registerAUser(userData);
  registrationPage
    .getResult()
    .invoke("text")
    .then((text) => {
      expect(text.trim()).equal("Registration is successful");
    });
});

Cypress.Commands.add("getModels", () => {
  popularMakePage.getModelTable();
});

Cypress.Commands.add("vote", (message) => {
  carDetailsPage.enterComment(message);
  carDetailsPage.clickOnVoteButton();
});

Cypress.Commands.add("confirmationMessage", () => {
  carDetailsPage.getConfirmationMessage();
});

Cypress.Commands.add("getFirstCommentFromHistory", () => {
  carDetailsPage.getFirstCommentFromHistoryTable();
});
