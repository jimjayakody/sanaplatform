import { spartiSuite } from "@spartify.io/spartify-engine";
//import { SpartifyLoginPage } from "../pages/SpartifyLoginPage";
import { PlatformLoginPage } from "../pages/platformLoginPage"

//const loginPage = new SpartifyLoginPage();
const loginPage = new PlatformLoginPage()

/*spartiSuite(
  "OrangeHRM Auth Sign-in - Test Suite",
  { tags: ["@reg", "@auth"] },
  () => {
    it("Test - Auth Sign-in with Valid Credentials", { tags: "@smk" }, () => {
      loginPage
        .visitUrl()
        .step_enterUsername("Admin")
        .step_enterPassword("admin123")
        .step_clickLogin();
    });

    it("Test - Auth Sign-in with In-Valid Credentials", () => {
      loginPage
        .visitUrl()
        .step_enterUsername("AdminX")
        .step_enterPassword("wrongPassword")
        .step_clickLogin();
    });
  }
);*/

spartiSuite("🚀 Login Page Testing", { tags: '@smoke' }, () => {

  beforeEach(() => {
      loginPage.visitUrl();
  })

      it("Click Login button,when fields are empty.", () => {

          loginPage.
          step_clickNext().
          step_verifyMessage("The Email field is required.")
      });
      it('Should not login with Empty password', () => {
          loginPage.
          step_enterUsername("apiautomationuser@gmail.com").
          step_clickNext().
          step_clickLogin().
          step_verifyPassworderror("The Password field is required.")         
      });
      it('Should login successfully with valid credentials', () => {
          loginPage.
          step_enterUsername("apiautomationuser@gmail.com").
          step_clickNext().
          step_enterPassword("abcAbc@123456").
          step_clickLogin().
          step_verify_loginPage().
          step_navigateAllInstallation()            
      });
      it('Home page Login with incorrect e-mail', () => {
          loginPage.
          step_enterUsername("xxxxxx@gmail.com").
          step_clickNext().
          step_enterPassword("xxx@123456").
          step_clickLogin().
          step_verify404Page()
      });
      it('When click Forget password redirect to correct page.', () => {
          loginPage.
          step_enterUsername("xxxxxx@gmail.com").
          step_clickNext().
          step_clickForgotPassword().
          step_urlInclude("Account/ForgotPassword")
      });
      it('When click Remember Me and login.', () => {
          loginPage.
          step_enterUsername("apiautomationuser@gmail.com").
          step_clickNext().
          step_enterPassword("abcAbc@123456").
          step_clickRemindMe().
          step_clickLogin().
          step_verify_loginPage()                            
      });
      it("When user type a email.", () => {
          loginPage.
          step_enterUsername("apiautomationuser@gmail.com").
          step_clickNext().
          step_clickForgotPassword().
          step_enterUsername("apiautomationuser@gmail.com").
          step_clickResetLink().
          step_verifyForgetPasswordMessage("Password reset link has been sent to your email.") 
    });
      it("When user type empty space and submit.", () => {
          loginPage.
          step_enterUsername(" ").
          step_clickNext().
          step_verifyMessage("The Email field is not a valid e-mail address.")
    });
      it("When user type incorrect email address.", () => {
          loginPage.
          step_enterUsername("Abcc").
          step_clickNext().
          step_verifyMessage("The Email field is not a valid e-mail address.")
    });
  })
