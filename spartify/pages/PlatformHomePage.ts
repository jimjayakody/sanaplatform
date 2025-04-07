import { SpartiNet, SpartiUI } from "@spartify.io/spartify-engine";
import {PlatformSidePanel} from "../pages/panels/PlatformSidePanel"


export class PlatformHomePage{
    private sidePanel;
    constructor(){
            this.sidePanel = new PlatformSidePanel()
        }
}