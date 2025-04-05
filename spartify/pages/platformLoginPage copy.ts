//import { SpartiNet, SpartiUI } from "@spartify.io/spartify-engine";
import { SpartiUI } from "@spartify.io/spartify-engine";
import { PlatformAllInstallationPage } from "../pages/PlatformAllInstallationPage"
import { PlatformNewInstallationPage } from "../pages/PlatformNewInstallationPage"
import { PlatformSidePanel } from "../pages/panels/PlatformSidePanel"
export class PlatformLoginPage {

  private sidePanel;

  constructor() {
    this.sidePanel = new PlatformSidePanel()
  }

  private txt_username = '#Email';
  private txt_password = '#Password';
  private btn_next = "button[type='submit']";
  private btn_forgotPassword = ".mb-1 .text-center";

  private btn_login = "button[type='submit']";
  private btn_rememberMe = ".icheck-primary";
  private btn_logout = "#logoutForm > a"
  private btn_RedirectWithCurrentSessionYes = ".Buttons-base.Buttons-primary.btn-block[href='/Account/RedirectWithCurrentSession']"
  private lbl_session_warning = "div[class='error-content'] h2"
  private lbl_homepage_logo = ".logo"
  private lbl_profileImage = ".image > .img-circle"

  private btn_resetLink = ".Buttons-label"


  private msg_pageNotFound = "div[class='error-content'] h3"
  private msg_errorMessage = ".validation-summary-errors > ul > li";
  private msg_errorEmailMessage = ".text-danger.field-validation-error > span";
  private msg_PasswordResetLinkSent = ".alert-message > p";
  private msg_error404HeadingMessage = ".headline.text-warning";

  private username = "apiautomationuser@gmail.com"
  private password = "abcAbc@123456"




  public visitUrl() {
    SpartiUI.visit("/"); // Visit the base URL defined in Cypress config
    return this;
  }

  public step_enterUsername(name: string) {
    SpartiUI.textBox(this.txt_username).enterText(name)
    return this;
  }

  public step_enterPassword(password: string) {
    SpartiUI.textBox(this.txt_password).enterText(password)
    return this;
  }

  public step_clickNext() {
    SpartiUI.button(this.btn_next).forceClick();
    return this;
  }

  public step_clickForgotPassword() {
    SpartiUI.button(this.btn_forgotPassword).forceClick();
    return this;
  }

  public step_urlInclude(pageName: string) {
    cy.url().should('include', pageName)
    return this;
  }

  public step_clickLogin() {
    SpartiUI.button(this.btn_login).forceClick(); // Locate and click the login button       
    return this;
  }

  public step_clickRemindMe() {
    SpartiUI.button(this.btn_rememberMe).click();
    return this;
  }

  public step_clickResetLink() {
    SpartiUI.button(this.btn_resetLink).click();
    return this;
  }

  public step_verify404Page() {
    SpartiUI.element(this.msg_error404HeadingMessage).should('have.text', "404")
    return this;
  }

  public step_verifyMessage(expectedText: string) {
    SpartiUI.element(this.msg_errorEmailMessage).should('have.text', expectedText)
    return this;
  }

  public step_verifyForgetPasswordMessage(expectedText: string) {
    SpartiUI.element(this.msg_PasswordResetLinkSent).should('have.text', expectedText)
    return this;
  }

  public step_verifyMessagVisible() {
    SpartiUI.element(".validation-summary-errors > ul > li").should('be.visible');
  }

  public step_verify_loginPage() {

    SpartiUI.element('body').then(($body) => {
      if ($body.find(this.lbl_session_warning).length > 0) {
        SpartiUI.button(this.btn_RedirectWithCurrentSessionYes).forceClick();
      }
      else {
        SpartiUI.element(this.lbl_homepage_logo).should('be.visible');
      }
    });
    return this;

  }

  public step_navigateAllInstallation() {
    this.sidePanel.step_click_AllInstallations()
    return new PlatformAllInstallationPage()
  }

  public step_navigateNewInstallation() {
    this.sidePanel.step_click_NewInstallations()
    return new PlatformNewInstallationPage()
  }

  public step_navigateAllWebstores() {
    this.sidePanel.step_click_AllInstallations()
    return new PlatformAllInstallationPage()
  }

  //Main Login 
  public step_login() {

    SpartiUI.visit("/"); // Visit the base URL defined in Cypress config
    SpartiUI.textBox(this.txt_username).enterText(this.username)
    SpartiUI.button(this.btn_next).forceClick()
    SpartiUI.textBox(this.txt_password).enterText(this.password)
    SpartiUI.button(this.btn_login).forceClick()

    SpartiUI.element('body').then(($body) => {
      if ($body.find(this.lbl_session_warning).length > 0) {
        SpartiUI.button(this.btn_RedirectWithCurrentSessionYes).forceClick()
      }
      else {
        SpartiUI.element(this.lbl_homepage_logo).should('be.visible');
      }
    });
    return this;

  }

  //Logout method
  public step_logout() {
    SpartiUI.button(this.lbl_profileImage).click()
    SpartiUI.button(this.btn_logout).click()
    cy.url().should('include', "Login")
  }
}
