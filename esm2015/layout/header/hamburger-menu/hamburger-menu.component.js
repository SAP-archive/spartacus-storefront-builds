import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HamburgerMenuService } from './hamburger-menu.service';
let HamburgerMenuComponent = class HamburgerMenuComponent {
    constructor(hamburgerMenuService) {
        this.hamburgerMenuService = hamburgerMenuService;
    }
    toggle() {
        this.hamburgerMenuService.toggle();
    }
    get isExpanded() {
        return this.hamburgerMenuService.isExpanded;
    }
};
HamburgerMenuComponent.ctorParameters = () => [
    { type: HamburgerMenuService }
];
HamburgerMenuComponent = __decorate([
    Component({
        selector: 'cx-hamburger-menu',
        template: "<button\n  class=\"cx-hamburger\"\n  type=\"button\"\n  (click)=\"toggle()\"\n  [class.is-active]=\"isExpanded | async\"\n  [attr.aria-expanded]=\"isExpanded | async\"\n  aria-label=\"Menu\"\n  aria-controls=\"header-account-container, header-categories-container, header-locale-container\"\n>\n  <span class=\"hamburger-box\">\n    <span class=\"hamburger-inner\"></span>\n  </span>\n</button>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], HamburgerMenuComponent);
export { HamburgerMenuComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtYnVyZ2VyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2hlYWRlci9oYW1idXJnZXItbWVudS9oYW1idXJnZXItbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPaEUsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFDakMsWUFBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFBRyxDQUFDO0lBRWxFLE1BQU07UUFDSixJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQztJQUM5QyxDQUFDO0NBQ0YsQ0FBQTs7WUFUMkMsb0JBQW9COztBQURuRCxzQkFBc0I7SUFMbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3Qix3WkFBOEM7UUFDOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLHNCQUFzQixDQVVsQztTQVZZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEhhbWJ1cmdlck1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9oYW1idXJnZXItbWVudS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtaGFtYnVyZ2VyLW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaGFtYnVyZ2VyLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgSGFtYnVyZ2VyTWVudUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaGFtYnVyZ2VyTWVudVNlcnZpY2U6IEhhbWJ1cmdlck1lbnVTZXJ2aWNlKSB7fVxuXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmhhbWJ1cmdlck1lbnVTZXJ2aWNlLnRvZ2dsZSgpO1xuICB9XG5cbiAgZ2V0IGlzRXhwYW5kZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuaGFtYnVyZ2VyTWVudVNlcnZpY2UuaXNFeHBhbmRlZDtcbiAgfVxufVxuIl19