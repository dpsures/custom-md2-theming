import { MediaChange } from "@angular/flex-layout";

export class Device {

    isMobile : boolean = false;
    isTablet : boolean = false;
    isDesktop : boolean = false;
    activeMedia : MediaChange;

    constructor(isMobile : boolean, isTablet : boolean, isDesktop : boolean, activeMedia : MediaChange){
        this.isMobile = isMobile;
        this.isTablet = isTablet;
        this.isDesktop = isDesktop;
        this.activeMedia = activeMedia;
    }
}