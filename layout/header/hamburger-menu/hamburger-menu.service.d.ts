import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class HamburgerMenuService {
    isExpanded: BehaviorSubject<boolean>;
    constructor(router: Router);
    /**
     * toggles the expand state of the hamburger menu
     */
    toggle(forceCollapse?: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HamburgerMenuService, never>;
}

//# sourceMappingURL=hamburger-menu.service.d.ts.map