import { SpartiUI } from "@spartify.io/spartify-engine";
import {PlatformSidePanel} from "../pages/panels/PlatformSidePanel"
import { PlatformOverview } from "../pages/PlatformOverview";



export class PlatformAllInstallationPage{

        private sidePanel;
        private lbl_menuTitle = ".card-title"
        private url_allWebStores= "/Webstore/AllWebstores"
        private lbl_title="div[id='AllwebstoresActionPopUp'] h4[class='modal-title']"
   

    private txt_searchBox = "input[type='search']"
    private lnk_gricustomername = "tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)"

    private btn_deactivate = "#allwbstores a[title='Deactivate the webstore.']";
    private lbl_deactivateTitle = "div[id='AllwebstoresActionPopUp'] h4[class='modal-title']";
    private lbl_deactivateDesc = "div[id='AllwebstoresActionPopUp'] p";
    private btn_deactivateNo = "div[id='AllwebstoresActionPopUp'] div[class='modal-footer'] .popup-action-no";

    private btn_restartApplication = "a[title='Restart Application']";
    private lbl_restartApplicationTitle = "div[id='AllwebstoresActionPopUp'] h4[class='modal-title']";
    private lbl_restartApplicationDesc = "div[id='AllwebstoresActionPopUp'] p";
    private btn_restartApplicationNo = "div[id='AllwebstoresActionPopUp'] div[class='modal-footer'] >.popup-action-no";

    private btn_delete = "a[title='Delete']";
    private lbl_deleteTitle = "div[id='UninstallationActionPopUp'] h4[class='modal-title']";
    private lbl_deleteDesc = ".warning-msg";
    private btn_deleteNo = "div[id='UninstallationActionPopUp'] div[class='modal-footer'] >button[class='btn btn-primary popup-action-no']";

    private btn_sendWebstoreInfo = "a[title='Send webstore information']";
    private lbl_sendWebstoreInfoTitle = "div[id='sendWebStoreInfoActionPopUp'] h4[class='modal-title']";
    private lbl_sendWebstoreInfoCommentLabel = "label[for='Comment']";
    private lbl_sendWebstoreInfoCommentText = "#Comment";
    private btn_sendWebstoreInfoSend = "button[class='btn btn-primary popup-action-send']";
    private lbl_toastMessagePath = ".toast-message";

    private btn_lifeCycle = "a[title='Life cycle']";
    private lbl_lifeCycleTitle = "div[id='webstoreLifeCyclePopUp'] h4[class='modal-title']";
    private lbl_lifeCycleWebstoreState = "#lifeCycleGrid th[aria-label='Webstore state']";
    private lbl_lifeCycleUser = "th[aria-label='User']";
    private lbl_lifeCycleDate = "th[aria-label='Date: activate to sort column ascending']";
    private lbl_lifeCycleRemark = "th[aria-label='Remarks']";
    private lbl_lifeCycleSearchLabel = "div[id='lifeCycleGrid_filter'] label";
    private lbl_lifeCycleSearchText = "input[aria-controls='lifeCycleGrid']";

    private btn_view = "a[title='View'][target='_blank']";

    
        // Load supporting re-usable panels to launch complete screen
        constructor() {
            this.sidePanel = new PlatformSidePanel();
        }

        public step_verifyMainTitle(){
            SpartiUI.element(this.lbl_menuTitle).should('contain','All installations');
            return this
        }

        public step_searchStoreName(name:string = ""){
            SpartiUI.visit(this.url_allWebStores); 
            SpartiUI.wait(2000);
            cy.log("name from get : "+ Cypress.env("webstoreName"))
            if(name ==""){                
                name = Cypress.env("webstoreName");
            }
            SpartiUI.textBox(this.txt_searchBox).typeAndPressEnter(name)
            SpartiUI.wait(2000);
            return this;
        }

        public step_clickFirstGridRecord(){
            SpartiUI.element(this.lnk_gricustomername).click()             
            return new PlatformOverview();
        }

        // public step_clickDeactivate(){
        //     //SpartiUI.element(this.btn_deactivateNo).click({force:true})     
            
        //     SpartiUI.element(this.btn_deactivate).click({ force: true });
        //     SpartiUI.element(this.allWebstoreOperations.Deactivate.Title).should('contain', this.allWebstoreOperationsData.Deactivate.Title);
        //     SpartiUI.element(this.allWebstoreOperations.Deactivate.Desc).should('contain', this.allWebstoreOperationsData.Deactivate.Desc);
        //     SpartiUI.wait(2000);
        //     SpartiUI.element(this.allWebstoreOperations.Deactivate.ActionNo).click({ force: true });
        //     return this;

        // }

        public step_clickDeactivate() {
            SpartiUI.element(this.btn_deactivate).click({ force: true });
            SpartiUI.element(this.lbl_deactivateTitle).should('contain', "Deactivate confirmation");
            SpartiUI.element(this.lbl_deactivateDesc).should('contain', "Are you sure want to deactivate?");
            SpartiUI.wait(2000);
            SpartiUI.element(this.btn_deactivateNo).click({ force: true });
            return this;
        }

        public step_clickRestartApplication() {
            SpartiUI.element(this.btn_restartApplication).click({ force: true });
            SpartiUI.element(this.lbl_restartApplicationTitle).should('contain', "Restart confirmation");
            SpartiUI.element(this.lbl_restartApplicationDesc).should('contain', "Are you sure want to restart?");
            SpartiUI.wait(2000);
            SpartiUI.element(this.btn_restartApplicationNo).click({ force: true });
            return this;
        }
    
        public step_clickDelete() {
            const webStoreName = ""//common.GetDefaultStoreName();
            SpartiUI.element(this.btn_delete).click({ force: true });
            SpartiUI.element(this.lbl_deleteTitle).should('contain', "Are you sure you want to delete?");
            const desc = "Warning!.Deleting " + webStoreName + " is irreversible. The action you are about to take cannot be undone.";
            SpartiUI.element(this.lbl_deleteDesc).should('contain', desc);
            SpartiUI.wait(2000);
            SpartiUI.element(this.btn_deleteNo).click({ force: true });
            return this;
        }
    
        public step_clickSendWebstoreInformation() {
            SpartiUI.element(this.btn_sendWebstoreInfo).click({ force: true });
            SpartiUI.element(this.lbl_sendWebstoreInfoTitle).should('contain', "Send webstore information");
            SpartiUI.element(this.lbl_sendWebstoreInfoCommentLabel).should('contain', "Comment (Optional)");
            SpartiUI.element(this.lbl_sendWebstoreInfoCommentText).should('contain', "");
            SpartiUI.wait(2000);
            SpartiUI.element(this.btn_sendWebstoreInfoSend).click({ force: true });
            SpartiUI.wait(1000);
            SpartiUI.element(this.lbl_toastMessagePath).should('contain', "Email sent successfully");
            return this;
        }
    
        public step_clickLifeCycle() {
            SpartiUI.element(this.btn_lifeCycle).click({ force: true });
            const webStoreName ="" // common.GetDefaultStoreName();
            const title = "Life cycle information -[" + webStoreName + "]";
            SpartiUI.element(this.lbl_lifeCycleTitle).should('contain', title);
            SpartiUI.element(this.lbl_lifeCycleWebstoreState).should('contain', "Webstore state");
            SpartiUI.element(this.lbl_lifeCycleUser).should('contain', "User");
            SpartiUI.element(this.lbl_lifeCycleDate).should('contain', "Date");
            SpartiUI.element(this.lbl_lifeCycleRemark).should('contain', "Remarks");
            SpartiUI.element(this.lbl_lifeCycleSearchLabel).should('contain', "Search:");
            SpartiUI.element(this.lbl_lifeCycleSearchText).should('contain', "");
            SpartiUI.wait(2000);
            return this;
        }
    
        public step_clickView() {
            SpartiUI.wait(2000);
            SpartiUI.element(this.btn_view).should('have.attr', 'href').and('contain', '/webstore/Index?webstoreId=');
            return this;
        }


}
