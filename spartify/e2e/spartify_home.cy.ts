import { spartiSuite } from "@spartify.io/spartify-engine";
import { SpartifyLoginPage } from "../pages/SpartifyLoginPage";

const loginPage = new SpartifyLoginPage();

spartiSuite(
  "OrangeHRM Home Dashboard - Test Suite",
  { tags: ["@reg", "@home"] },
  () => {
  }
);
