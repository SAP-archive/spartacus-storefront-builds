import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HamburgerMenuService } from './hamburger-menu.service';
var HamburgerMenuComponent = /** @class */ (function () {
    function HamburgerMenuComponent(hamburgerMenuService) {
        this.hamburgerMenuService = hamburgerMenuService;
    }
    HamburgerMenuComponent.prototype.toggle = function () {
        this.hamburgerMenuService.toggle();
    };
    Object.defineProperty(HamburgerMenuComponent.prototype, "isExpanded", {
        get: function () {
            return this.hamburgerMenuService.isExpanded;
        },
        enumerable: true,
        configurable: true
    });
    HamburgerMenuComponent.ctorParameters = function () { return [
        { type: HamburgerMenuService }
    ]; };
    HamburgerMenuComponent = __decorate([
        Component({
            selector: 'cx-hamburger-menu',
            template: "<button\n  class=\"cx-hamburger\"\n  type=\"button\"\n  (click)=\"toggle()\"\n  [class.is-active]=\"isExpanded | async\"\n  [attr.aria-expanded]=\"isExpanded | async\"\n  aria-label=\"Menu\"\n  aria-controls=\"header-account-container, header-categories-container, header-locale-container\"\n>\n  <span class=\"hamburger-box\">\n    <span class=\"hamburger-inner\"></span>\n  </span>\n</button>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], HamburgerMenuComponent);
    return HamburgerMenuComponent;
}());
export { HamburgerMenuComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtYnVyZ2VyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2hlYWRlci9oYW1idXJnZXItbWVudS9oYW1idXJnZXItbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPaEU7SUFDRSxnQ0FBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFBRyxDQUFDO0lBRWxFLHVDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELHNCQUFJLDhDQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUM7UUFDOUMsQ0FBQzs7O09BQUE7O2dCQVJ5QyxvQkFBb0I7O0lBRG5ELHNCQUFzQjtRQUxsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLHdaQUE4QztZQUM5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csc0JBQXNCLENBVWxDO0lBQUQsNkJBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIYW1idXJnZXJNZW51U2VydmljZSB9IGZyb20gJy4vaGFtYnVyZ2VyLW1lbnUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWhhbWJ1cmdlci1tZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hhbWJ1cmdlci1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEhhbWJ1cmdlck1lbnVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhbWJ1cmdlck1lbnVTZXJ2aWNlOiBIYW1idXJnZXJNZW51U2VydmljZSkge31cblxuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5oYW1idXJnZXJNZW51U2VydmljZS50b2dnbGUoKTtcbiAgfVxuXG4gIGdldCBpc0V4cGFuZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmhhbWJ1cmdlck1lbnVTZXJ2aWNlLmlzRXhwYW5kZWQ7XG4gIH1cbn1cbiJdfQ==