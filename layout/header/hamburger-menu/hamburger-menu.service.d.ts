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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtYnVyZ2VyLW1lbnUuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJoYW1idXJnZXItbWVudS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7OztBQU9BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSGFtYnVyZ2VyTWVudVNlcnZpY2Uge1xuICAgIGlzRXhwYW5kZWQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPjtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlcik7XG4gICAgLyoqXG4gICAgICogdG9nZ2xlcyB0aGUgZXhwYW5kIHN0YXRlIG9mIHRoZSBoYW1idXJnZXIgbWVudVxuICAgICAqL1xuICAgIHRvZ2dsZShmb3JjZUNvbGxhcHNlPzogYm9vbGVhbik6IHZvaWQ7XG59XG4iXX0=