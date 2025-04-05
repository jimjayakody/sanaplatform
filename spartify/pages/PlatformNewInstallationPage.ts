import { spartiSuite, SpartiUI } from "@spartify.io/spartify-engine";
import { PlatformSidePanel } from "../pages/panels/PlatformSidePanel"
import {PlatformAllInstallationPage} from "../pages/PlatformAllInstallationPage"



export class PlatformNewInstallationPage {
    
   
   
    private sidePanel;
    private webstroreName = "Test";


    private lbl_menuTitle = '.InstallationTypeId > .control-label' // "label[for='InstallationTypeId']":not working 
    private drp_installationType = '#select2-InstallationTypeId-container';
    private txt_installationTypeSearch = "input[aria-controls='select2-InstallationTypeId-results']"// "input[role='searchbox']";
    private txt_partnerSearch = ".select2-search__field"

    private drp_partner = "#select2-PartnerId-container"
    private txt_customer = "#CustomerName"

    private drp_localTimeId = "#select2-LocalTime-container"
    private txt_localTimeSearch = "input[aria-controls='select2-LocalTime-results']"
    private txt_storeDefaultUsername = "#StoreDefaultUsername"
    private txt_storeDefaultPassword = "#StoreDefaultPassword"
    private txt_storeDefaultConfirmPassword = "#StoreDefaultConfirmPassword"
    //private ScheduledInstall = "#select2-IsScheduledInstall-container"
    //private ScheduledInstallSearch = "input[aria-controls='select2-IsScheduledInstall-results']"
    private drp_sanaPackageId = "#select2-SanaPackageId-container"
    private txt_sanaPackageDownSearch = "input[aria-controls='select2-SanaPackageId-results']"
    private drp_licenseOwnerId = "#select2-LicenceOwnerId-container"
    private txt_licenseOwnerIdSearch = "input[aria-controls='select2-LicenceOwnerId-results']"
    private drp_licenseOwnerIdCustomized = "#select2-LicenceOwnerId-container"
    private txt_licenseOwnerIdCustomizedSearch = "input[aria-controls='select2-LicenceOwnerId-results']"
    private drp_deploymentTypeId = "#select2-DeploymentTypeId-container"
    private txt_DeploymentTypeIdSearch = "input[aria-controls='select2-DeploymentTypeId-results']"
    private txt_maintenanceMail = "#MaintenanceMail"
    private drp_sanaReleasePackageId = "#select2-SanaReleasePackageId-container"
    private txt_sanaReleasePackageDownSearch = "input[aria-controls='select2-SanaReleasePackageId-results']"
    private drp_erpLanguageId = "#select2-ErpLanguageId-container"
    private txt_erpLanguageIdSearch = "input[aria-controls='select2-ErpLanguageId-results']"
    private drp_erpVersionId = "#select2-ErpVersionId-container"
    private txt_erpVersionIdSearch = "input[aria-controls='select2-ErpVersionId-results']"
    private drp_regionId = "#select2-RegionId-container"
    private txt_regionDownSearch = "input[aria-controls='select2-RegionId-results']"
    private drp_withTrialErp = "#select2-WithTrialErp-container"
    
    private drp_offlineMode = "#select2-OfflineModeSupportStatus-container"
    private txt_offlineModeSearch = "input[aria-controls='select2-OfflineModeSupportStatus-results']"
    
    //Project
    private drp_project = "#select2-Project-container"
    private txt_projectSearch = "input[aria-controls='select2-Project-results']"
    
    private txt_withTrialErpSearch = "input[aria-controls='select2-WithTrialErp-results']"
    private NextButton = ".btn-next > .Buttons-label"
    private FinishButton = ".btn-finish"


    private btn_allwebstores =".nav-link.nav-link-short-cut[href='/Webstore/AllWebstores']"



    // Load supporting re-usable panels to launch complete screen
    constructor() {
        this.sidePanel = new PlatformSidePanel();
        //this.allWebstoresPage = new PlatformAllInstallationPage()
    }

    public step_verifyMainTitle() {
        SpartiUI.wait(2000)
        SpartiUI.element(this.lbl_menuTitle).should('contain', 'Installation type');
        return this
    }

    //Fill installation 
    public step_enterInstallationType(name: string) {

        SpartiUI.button(this.drp_installationType).click()
        SpartiUI.textBox(this.txt_installationTypeSearch).typeAndPressEnter(name) 
        return this
    }

    public step_storeAdminUser(name: string) {
        SpartiUI.textBox(this.txt_storeDefaultUsername).enterText(name)
        return this;
    }

    public step_project(name: string) {  
        SpartiUI.element(this.drp_project).click()
        SpartiUI.textBox(this.txt_projectSearch).typeAndPressEnter(name)
        return this
    }

    public step_enterPartner (name: string) {  
        SpartiUI.element(this.drp_partner).click()
        SpartiUI.textBox(this.txt_partnerSearch).typeAndPressEnter(name)
        return this
    }

    public step_enterCustomerName(name:string) {

        name = this.generateUniqueWebstoreName(name);
        SpartiUI.textBox(this.txt_customer).enterText(name)
        Cypress.env('webstoreName', name);
        return this;
    }

    public step_enterMaintenanceEmail(name:string) {
        SpartiUI.textBox(this.txt_maintenanceMail).enterText(name)
        return this;
    }

    step_password(name: string) {
        SpartiUI.textBox(this.txt_storeDefaultPassword).enterText(name)
        return this;
    }

    step_ConfirmPassword(name: string) {
        SpartiUI.textBox(this.txt_storeDefaultConfirmPassword).enterText(name)
        return this;
    }

    public step_enterLocalTimeZone(name: string) {

        SpartiUI.button(this.drp_localTimeId).click()        
        SpartiUI.textBox(this.txt_localTimeSearch).typeAndPressEnter(name)
        return this
    }

    public step_enterSanaRelesePackage(name: string) {

        SpartiUI.button(this.drp_sanaReleasePackageId).click()        
        SpartiUI.textBox(this.txt_sanaReleasePackageDownSearch).typeAndPressEnter(name)
        return this
    }

    public step_enterPackage(name: string) {

        SpartiUI.button(this.drp_sanaPackageId).click()        
        SpartiUI.textBox(this.txt_sanaPackageDownSearch).typeAndPressEnter(name)
        return this
    }

    public step_enterLicenseOwner(name: string) {

        SpartiUI.button(this.drp_licenseOwnerId).click()        
        SpartiUI.textBox(this.txt_licenseOwnerIdSearch).typeAndPressEnter(name)
        return this
    }

    public step_enterDeploymentType(name: string) {

        SpartiUI.button(this.drp_deploymentTypeId).click()        
        SpartiUI.textBox(this.txt_DeploymentTypeIdSearch).typeAndPressEnter(name)
        return this
    }

    public step_enterErpLanuage(name: string) {
        SpartiUI.button(this.drp_erpLanguageId).click()        
        SpartiUI.textBox(this.txt_erpLanguageIdSearch).typeAndPressEnter(name)
        return this
    }

    public step_enterErpVersion(name: string) {
        SpartiUI.button(this.drp_erpVersionId).forceClick()       
        SpartiUI.textBox(this.txt_erpVersionIdSearch).typeAndPressEnter(name)
        return this
    }
    step_enterTrialErpVersion(name: string) {
        SpartiUI.button(this.drp_withTrialErp).forceClick()       
        SpartiUI.textBox(this.txt_withTrialErpSearch).typeAndPressEnter(name)
        return this
    }

    public step_enterRegion(name: string) {
        SpartiUI.button(this.drp_regionId).click()        
        SpartiUI.textBox(this.txt_regionDownSearch).typeAndPressEnter(name)
        return this
    }

    public step_enterOffLineMode(name: string) {
        SpartiUI.button(this.drp_offlineMode).click()        
        SpartiUI.textBox(this.txt_offlineModeSearch).typeAndPressEnter(name)
        return this
    }


    public step_clickSubmitButton() {
         SpartiUI.button(this.NextButton).click()
         SpartiUI.button(this.FinishButton).click()         
        return this
    }

    public step_navigateToAllWebstore() {
        SpartiUI.wait(2000)
        SpartiUI.button(this.btn_allwebstores).click()
        return new PlatformAllInstallationPage();
   }


    public generateUniqueWebstoreName(baseName: string): string {
        const timestamp = Date.now().toString(36); // Convert timestamp to base36 for compactness
        const randomString = Math.random().toString(36).substring(2, 8); // Random 6-character string
        return `${baseName}-${timestamp}-${randomString}`;
      }






}