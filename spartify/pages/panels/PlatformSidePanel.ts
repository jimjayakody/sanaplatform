import {SpartiUI} from "@spartify.io/spartify-engine";
import {PlatformAllInstallationPage} from "../PlatformAllInstallationPage"
import {PlatformNewInstallationPage} from "../PlatformNewInstallationPage"
 
export class PlatformSidePanel{

     private btn_menu_installation = "ul[role='menu'] >li:nth-child(1) > a";
     private btn_allInstallation = "ul[role='menu'] >li:nth-child(1) > ul > li:nth-child(1) > a[href='/Webstore/AllWebstores']";
     private btn_newInstallation = "ul[role='menu'] >li:nth-child(1) > ul > li:nth-child(2) > a[href='/Webstore/Install']";

       
   
    // public step_searchOption(options: string) {
    //     SpartiUI.textBox(this.txt_search).enterText(options);
    //     SpartiUI.wait(3000)
    //     // @ts-ignore - sample usage of cypress pure scripting
    //     spartify.button(this.btn_menu).clickFirst();
    // }

    public step_click_AllInstallations(){
      SpartiUI.wait(6000)
      SpartiUI.button(this.btn_menu_installation).forceClick()     
      SpartiUI.button(this.btn_allInstallation).forceClick();
      return new PlatformAllInstallationPage()
     }

     public step_click_NewInstallations(){
      SpartiUI.button(this.btn_menu_installation).click()
      SpartiUI.button(this.btn_newInstallation).click();
          return new PlatformNewInstallationPage()
       }



}