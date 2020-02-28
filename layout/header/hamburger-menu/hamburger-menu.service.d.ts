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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HamburgerMenuService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtYnVyZ2VyLW1lbnUuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJoYW1idXJnZXItbWVudS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7OztBQU9BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEhhbWJ1cmdlck1lbnVTZXJ2aWNlIHtcbiAgICBpc0V4cGFuZGVkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG4gICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpO1xuICAgIC8qKlxuICAgICAqIHRvZ2dsZXMgdGhlIGV4cGFuZCBzdGF0ZSBvZiB0aGUgaGFtYnVyZ2VyIG1lbnVcbiAgICAgKi9cbiAgICB0b2dnbGUoZm9yY2VDb2xsYXBzZT86IGJvb2xlYW4pOiB2b2lkO1xufVxuIl19