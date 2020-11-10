import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
export declare class HamburgerMenuService {
    isExpanded: BehaviorSubject<boolean>;
    constructor(router: Router);
    /**
     * toggles the expand state of the hamburger menu
     */
    toggle(forceCollapse?: boolean): void;
}
