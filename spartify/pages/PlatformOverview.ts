import { SpartiUI } from "@spartify.io/spartify-engine";
import { PlatformSidePanel } from "../pages/panels/PlatformSidePanel"
import { PlatformAllInstallationPage } from "../pages/PlatformAllInstallationPage";

export class PlatformOverview {
    private sidePanel;

    private lbl_webstoreName = "div[class='webstore-overview-content-header'] h4:nth-child(1)"
    private lbl_detailsCardHeaderPath = ".card-columns > .card:nth-child(1) > .card-header > .card-title";
    private lbl_customerNameKeyPath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(1) > span";
    private lbl_customerNameValuePath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(1) > span > label:nth-child(1)";
    private lbl_appNameKeyPath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(2) > span";
    private lbl_appNameValuePath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(2) > span > label:nth-child(1)";


    private lbl_licenseOwnerKeyPath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(3) > span";
    private lbl_licenseOwnerValuePath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(3) > span > label:nth-child(1)";
    private lbl_contractEndDateKeyPath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(4) > span";
    private lbl_contractEndDateValuePath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(4) > span > label:nth-child(1)";
    private lbl_sanaSubscriptionKeyPath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(5) > span";
    private lbl_sanaSubscriptionValuePath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(5) > span > label:nth-child(1)";
    private lbl_installationTypeKeyPath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(6) > span";
    private lbl_installationTypeValuePath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(6) > span > label:nth-child(1)";
    private lbl_packageTypeKeyPath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(7) > span";
    private lbl_packageTypeValuePath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(7) > span > label:nth-child(1)";
    private lbl_trialExpireDateKeyPath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(8) > span";
    private lbl_maximumShopsKeyPath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(8) > span";
    private lbl_actualShopsKeyPath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(9) > span";
    private lbl_stateKeyPath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(10) > span";
    private lbl_createdDateKeyPath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(11) > span";
    private lbl_belongsToKeyPath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(13) > span";
    private lbl_belongsToValuePath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(13) > span > label:nth-child(1)";

    private lbl_isSDKReadyKeyPath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(13) > span";
    private lbl_isSDKReadyValuePath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(13) > span > label:nth-child(1)";
    private lbl_repositoryTagKeyPath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(8) > span";
    private lbl_repositoryTagValuePath = ".card-columns > .card:nth-child(1) > .card-body > .row > div > ul[class='nav flex-column'] > li:nth-child(8) > span > label:nth-child(1)";
    private lbl_sanaDetailsCardHeaderPath = ".card-columns > .card:nth-child(2) > .card-header > .card-title";
    private lbl_sanaReleasePackageKeyPath = ".card-columns > .card:nth-child(2) > .card-body > ul[class='nav flex-column'] > li:nth-child(1) > span";
    private lbl_erpDetailsCardHeaderPath = ".card-columns > .card:nth-child(3) > .card-header > .card-title";
    private lbl_erpSystemKeyPath = ".card-columns > .card:nth-child(3) > .card-body > ul[class='nav flex-column'] > li:nth-child(1) > span";
    private lbl_erpSystemValuePath = ".card-columns > .card:nth-child(3) > .card-body > ul[class='nav flex-column'] > li:nth-child(1) > span > label:nth-child(1)";
    private lbl_erpLanguageKeyPath = ".card-columns > .card:nth-child(3) > .card-body > ul[class='nav flex-column'] > li:nth-child(2) > span";
    private lbl_erpLanguageValuePath = ".card-columns > .card:nth-child(3) > .card-body > ul[class='nav flex-column'] > li:nth-child(2) > span > label:nth-child(1)";
    private lbl_erpTenantUrlKeyPath = ".card-columns > .card:nth-child(3) > .card-body > ul[class='nav flex-column'] > li:nth-child(3) > span";
    private lbl_erpTenantUrlValuePath = ".card-columns > .card:nth-child(3) > .card-body > ul[class='nav flex-column'] > li:nth-child(3) > span > label:nth-child(1)";
    private lbl_otherDetailsCardHeaderPath = ".card-columns > .card:nth-child(4) > .card-header > .card-title";
    private lbl_deleteProtectedKeyPath = ".card-columns > .card:nth-child(4) > .card-body > ul[class='nav flex-column'] > li:nth-child(1) > span";
    private lbl_deleteProtectedValuePath = ".card-columns > .card:nth-child(4) > .card-body > ul[class='nav flex-column'] > li:nth-child(1) > span > label:nth-child(1)";
    private lbl_propertiesCardHeaderPath = ".card-columns > .card:nth-child(5) > .card-header > .card-title";
    private lbl_hostingDetailsCardHeaderPath = ".card-columns > .card:nth-child(6) > .card-header > .card-title";
    private lbl_currentTimeKeyPath = ".card-columns > .card:nth-child(6) > .card-body > ul[class='nav flex-column'] > li:nth-child(1) > span";
    private lbl_currentTimeValuePath = ".card-columns > .card:nth-child(6) > .card-body > ul[class='nav flex-column'] > li:nth-child(1) > span > label > span";
    private lbl_localTimeKeyPath = ".card-columns > .card:nth-child(6) > .card-body > ul[class='nav flex-column'] > li:nth-child(2) > span";
    private lbl_localTimeValuePath = ".card-columns > .card:nth-child(6) > .card-body > ul[class='nav flex-column'] > li:nth-child(2) > span > label:nth-child(1)";
    private lbl_regionKeyPath = ".card-columns > .card:nth-child(6) > .card-body > ul[class='nav flex-column'] > li:nth-child(3) > span";
    private lbl_regionValuePath = ".card-columns > .card:nth-child(6) > .card-body > ul[class='nav flex-column'] > li:nth-child(3) > span > label:nth-child(1)";
    private lbl_upgradeRingNameKeyPath = ".card-columns > .card:nth-child(6) > .card-body > ul[class='nav flex-column'] > li:nth-child(4) > span";
    private lbl_upgradeRingNameValuePath = ".card-columns > .card:nth-child(6) > .card-body > ul[class='nav flex-column'] > li:nth-child(4) > span > label:nth-child(1)";
    private lbl_azureHostingLevelKeyPath = ".card-columns > .card:nth-child(6) > .card-body > ul[class='nav flex-column'] > li:nth-child(5) > span";
    private lbl_azureHostingLevelValuePath = ".card-columns > .card:nth-child(6) > .card-body > ul[class='nav flex-column'] > li:nth-child(5) > span > label:nth-child(1)";
    private lbl_webDomainKeyPath = ".card-columns > .card:nth-child(6) > .card-body > ul[class='nav flex-column'] > li:nth-child(6) > div";
    private lbl_webDomainValuePath = ".card-columns > .card:nth-child(6) > .card-body > ul[class='nav flex-column'] > li:nth-child(6) > span > label:nth-child(1) > a";
    private lbl_storeConfigurationCardHeaderPath = ".card-columns > .card:nth-child(7) > .card-header > .card-title";
    private lbl_maintenanceEmailKeyPath = "label[for='MaintenanceAddress']";
    private lbl_maintenanceEmailValuePath = ".m-2.p1.mr-4.maintaince-email";
      private btn_allwebstores =".nav-link.nav-link-short-cut[href='/Webstore/AllWebstores']"


    constructor() {
        this.sidePanel = new PlatformSidePanel();
    }

    public step_verifywebstoreName() {
        SpartiUI.label(this.lbl_webstoreName).assertText(Cypress.env("webstoreName"))
        cy.wait(5000)
        return this;
    }

    public step_navigateToAllWebstore() {
        SpartiUI.wait(2000)
        SpartiUI.button(this.btn_allwebstores).click()
        return new PlatformAllInstallationPage();
   }


    public step_verifyOverview() {

        // 1 Details (Main card)
        SpartiUI.label(this.lbl_detailsCardHeaderPath).assertPartialText("Details");

        // 1.1 Customer Name
        SpartiUI.label(this.lbl_customerNameKeyPath).assertPartialText("Customer Name");
        SpartiUI.label(this.lbl_customerNameValuePath).assertPartialText(Cypress.env("webstoreName"));

        // 1.2 App Name
        SpartiUI.label(this.lbl_appNameKeyPath).assertPartialText("App Name");
        SpartiUI.label(this.lbl_appNameValuePath).assertPartialText("scc");

        // 1.3 License Owner
        SpartiUI.label(this.lbl_licenseOwnerKeyPath).assertPartialText("License Owner");
        //SpartiUI.label(this.lbl_licenseOwnerValuePath).assertPartialText(licenseOwnerValue);       

        return this;
    }

    public step_verifyOverview2() {
        

        // 1.4 Contract End Date
        SpartiUI.label(this.lbl_contractEndDateKeyPath).assertPartialText("Contract End Date");
        SpartiUI.label(this.lbl_contractEndDateValuePath).assertPartialText("No contract end date determined");

        // 1.4 Sana Subscription
        SpartiUI.label(this.lbl_sanaSubscriptionKeyPath).assertPartialText("Sana Subscription");
        SpartiUI.label(this.lbl_sanaSubscriptionValuePath).assertPartialText("N/A");

        // 1.5 Installation Type
        SpartiUI.label(this.lbl_installationTypeKeyPath).assertPartialText("Installation Type");
        SpartiUI.label(this.lbl_installationTypeValuePath).assertPartialText("SaaS");

        // 1.7 Package
        SpartiUI.label(this.lbl_packageTypeKeyPath).assertPartialText("Package");
        SpartiUI.label(this.lbl_packageTypeValuePath).assertPartialText("Pro");

        // 1.8 Trial Expire Date
        //SpartiUI.label(this.lbl_trialExpireDateKeyPath).assertPartialText("Trial Expire Date");

        // 1.9 Maximum No of Shops
        SpartiUI.label(this.lbl_maximumShopsKeyPath).assertPartialText("Licensed Webshops");

        // 1.10 Actual No of Shops
        SpartiUI.label(this.lbl_actualShopsKeyPath).assertPartialText("Actual No of Shops");

        // 1.11 State
        SpartiUI.label(this.lbl_stateKeyPath).assertPartialText("State");

        // 1.12 Created Date
        SpartiUI.label(this.lbl_createdDateKeyPath).assertPartialText("Created Date");

        // 1.13 Belongs To
        SpartiUI.label(this.lbl_belongsToKeyPath).assertPartialText("Belongs To");
        //SpartiUI.label(this.lbl_belongsToValuePath).assertPartialText(testData.PartnerIdSearch);

        // 1.14 Is SDK Ready
        //SpartiUI.label(this.lbl_isSDKReadyKeyPath).assertPartialText("Is SDK Ready");
        //SpartiUI.label(this.lbl_isSDKReadyValuePath).assertPartialText(isSdkValue);

        // 1.15 Repository Tag
        // if (insType === insShort.Customized) {
        //     SpartiUI.label(this.lbl_repositoryTagKeyPath).assertPartialText("Repository/Tag");
        //     SpartiUI.label(this.lbl_repositoryTagValuePath).assertPartialText("scc");
        // }

        // 2.0 Sana details (Main card)
        SpartiUI.label(this.lbl_sanaDetailsCardHeaderPath).assertPartialText("Sana details");

        // 2.1 Sana Release Package
        SpartiUI.label(this.lbl_sanaReleasePackageKeyPath).assertPartialText("Sana release package");

        // 3.0 ERP details (Main card)
        SpartiUI.label(this.lbl_erpDetailsCardHeaderPath).assertPartialText("ERP details");

        // 3.1 Erp System
        SpartiUI.label(this.lbl_erpSystemKeyPath).assertPartialText("Erp System");
        SpartiUI.label(this.lbl_erpSystemValuePath).assertPartialText("Dynamics NAV");

        // 3.2 Erp Language
        SpartiUI.label(this.lbl_erpLanguageKeyPath).assertPartialText("Erp Language");
        //SpartiUI.label(this.lbl_erpLanguageValuePath).assertPartialText(testData.ErpLanguageId);

        // 3.3 Erp Tenant Url
        // let erpTenantUrlValue = (insType === insShort.Internal || insType === insShort.Saas) ? "N/A" : 
        //                         (insType === insShort.Customized) ? "N/A" : "staging-navision.sana-test-cloud.net";
        // SpartiUI.label(this.lbl_erpTenantUrlKeyPath).assertPartialText("Erp Tenant Url");
        // SpartiUI.label(this.lbl_erpTenantUrlValuePath).assertPartialText(erpTenantUrlValue);

        // 4.0 Other Details (Main card)
        SpartiUI.label(this.lbl_otherDetailsCardHeaderPath).assertPartialText("Other details");

        // 4.1 Delete Protected
        SpartiUI.label(this.lbl_deleteProtectedKeyPath).assertPartialText("Delete Protected");
        SpartiUI.label(this.lbl_deleteProtectedValuePath).assertPartialText("No");

        // 5.0 Properties (Main card)
        SpartiUI.label(this.lbl_propertiesCardHeaderPath).assertPartialText("Properties");

        // 6.0 Hosting Details (Main card)
        SpartiUI.label(this.lbl_hostingDetailsCardHeaderPath).assertPartialText("Hosting details");

        // 6.1 Current Time
        SpartiUI.label(this.lbl_currentTimeKeyPath).assertPartialText("Current Time");
        //SpartiUI.label(this.lbl_currentTimeValuePath).assertPartialText(common.GetMonthNameAndYear());

        // 6.2 Local Time
        SpartiUI.label(this.lbl_localTimeKeyPath).assertPartialText("Local Time");
        //SpartiUI.label(this.lbl_localTimeValuePath).assertPartialText(testData.LocalTimeSearch);

        // 6.3 Region
        SpartiUI.label(this.lbl_regionKeyPath).assertPartialText("Region");
        SpartiUI.label(this.lbl_regionValuePath).assertPartialText("West");

        // 6.4 Upgrade Ring Name
        SpartiUI.label(this.lbl_upgradeRingNameKeyPath).assertPartialText("Upgrade Ring Name");
        //SpartiUI.label(this.lbl_upgradeRingNameValuePath).assertPartialText(ringValue);

        // 6.5 Azure Hosting Level
        //let deploymentTypeId = (testData.DeploymentTypeId === deployment.Beta) ? overviewData.Beta : overviewData.Live;
        SpartiUI.label(this.lbl_azureHostingLevelKeyPath).assertPartialText("Azure Hosting Level");
        //SpartiUI.label(this.lbl_azureHostingLevelValuePath).assertPartialText(deploymentTypeId);

        // 6.7 Web Domain
        SpartiUI.label(this.lbl_webDomainKeyPath).assertPartialText("Web Domain(s)");
        //SpartiUI.label(this.lbl_webDomainValuePath).assertPartialText(newSiteName);

        // 7.0 Store Configuration (Main card)
        SpartiUI.label(this.lbl_storeConfigurationCardHeaderPath).assertPartialText("Store configuration");

        // 7.1 Maintenance Email
        SpartiUI.label(this.lbl_maintenanceEmailKeyPath).assertPartialText("Maintenance email address");
        //SpartiUI.label(this.lbl_maintenanceEmailValuePath).assertPartialText(testData.MaintenanceMail);

        return this;
    }




}