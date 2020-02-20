import { __decorate } from "tslib";
import { Component, HostBinding } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { HamburgerMenuService } from '../header/hamburger-menu/hamburger-menu.service';
var StorefrontComponent = /** @class */ (function () {
    function StorefrontComponent(hamburgerMenuService, routingService) {
        this.hamburgerMenuService = hamburgerMenuService;
        this.routingService = routingService;
        this.isExpanded$ = this.hamburgerMenuService.isExpanded;
    }
    StorefrontComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigateSubscription = this.routingService
            .isNavigating()
            .subscribe(function (val) {
            _this.startNavigating = val === true;
            _this.stopNavigating = val === false;
        });
    };
    StorefrontComponent.prototype.collapseMenuIfClickOutside = function (event) {
        if (event.target.className.includes('is-expanded')) {
            this.collapseMenu();
        }
    };
    StorefrontComponent.prototype.collapseMenu = function () {
        this.hamburgerMenuService.toggle(true);
    };
    StorefrontComponent.prototype.ngOnDestroy = function () {
        if (this.navigateSubscription) {
            this.navigateSubscription.unsubscribe();
        }
    };
    StorefrontComponent.ctorParameters = function () { return [
        { type: HamburgerMenuService },
        { type: RoutingService }
    ]; };
    __decorate([
        HostBinding('class.start-navigating')
    ], StorefrontComponent.prototype, "startNavigating", void 0);
    __decorate([
        HostBinding('class.stop-navigating')
    ], StorefrontComponent.prototype, "stopNavigating", void 0);
    StorefrontComponent = __decorate([
        Component({
            selector: 'cx-storefront',
            template: "<ng-template cxOutlet=\"cx-storefront\">\n  <ng-template cxOutlet=\"cx-header\">\n    <header\n      [class.is-expanded]=\"isExpanded$ | async\"\n      (keydown.escape)=\"collapseMenu()\"\n      (click)=\"collapseMenuIfClickOutside($event)\"\n    >\n      <cx-page-layout section=\"header\"></cx-page-layout>\n      <cx-page-layout section=\"navigation\"></cx-page-layout>\n    </header>\n    <cx-page-slot position=\"BottomHeaderSlot\"></cx-page-slot>\n    <cx-global-message></cx-global-message>\n  </ng-template>\n\n  <router-outlet></router-outlet>\n\n  <ng-template cxOutlet=\"cx-footer\">\n    <footer>\n      <cx-page-layout section=\"footer\"></cx-page-layout>\n    </footer>\n  </ng-template>\n</ng-template>\n"
        })
    ], StorefrontComponent);
    return StorefrontComponent;
}());
export { StorefrontComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbWFpbi9zdG9yZWZyb250LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQU12RjtJQU9FLDZCQUNVLG9CQUEwQyxFQUMxQyxjQUE4QjtRQUQ5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVB4QyxnQkFBVyxHQUF3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDO0lBUXJFLENBQUM7SUFFSixzQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGNBQWM7YUFDNUMsWUFBWSxFQUFFO2FBQ2QsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNaLEtBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQztZQUNwQyxLQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0RBQTBCLEdBQTFCLFVBQTJCLEtBQWlCO1FBQzFDLElBQWtCLEtBQUssQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUNqRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsMENBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDekM7SUFDSCxDQUFDOztnQkEzQitCLG9CQUFvQjtnQkFDMUIsY0FBYzs7SUFMRDtRQUF0QyxXQUFXLENBQUMsd0JBQXdCLENBQUM7Z0VBQWlCO0lBQ2pCO1FBQXJDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQzsrREFBZ0I7SUFMMUMsbUJBQW1CO1FBSi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLDJ0QkFBMEM7U0FDM0MsQ0FBQztPQUNXLG1CQUFtQixDQW9DL0I7SUFBRCwwQkFBQztDQUFBLEFBcENELElBb0NDO1NBcENZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEhhbWJ1cmdlck1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vaGVhZGVyL2hhbWJ1cmdlci1tZW51L2hhbWJ1cmdlci1tZW51LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZWZyb250JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlZnJvbnQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZWZyb250Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBuYXZpZ2F0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBpc0V4cGFuZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuaGFtYnVyZ2VyTWVudVNlcnZpY2UuaXNFeHBhbmRlZDtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXJ0LW5hdmlnYXRpbmcnKSBzdGFydE5hdmlnYXRpbmc7XG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RvcC1uYXZpZ2F0aW5nJykgc3RvcE5hdmlnYXRpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBoYW1idXJnZXJNZW51U2VydmljZTogSGFtYnVyZ2VyTWVudVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmF2aWdhdGVTdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuaXNOYXZpZ2F0aW5nKClcbiAgICAgIC5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgICAgdGhpcy5zdGFydE5hdmlnYXRpbmcgPSB2YWwgPT09IHRydWU7XG4gICAgICAgIHRoaXMuc3RvcE5hdmlnYXRpbmcgPSB2YWwgPT09IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBjb2xsYXBzZU1lbnVJZkNsaWNrT3V0c2lkZShldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICgoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkuY2xhc3NOYW1lLmluY2x1ZGVzKCdpcy1leHBhbmRlZCcpKSB7XG4gICAgICB0aGlzLmNvbGxhcHNlTWVudSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbGxhcHNlTWVudSgpOiB2b2lkIHtcbiAgICB0aGlzLmhhbWJ1cmdlck1lbnVTZXJ2aWNlLnRvZ2dsZSh0cnVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5hdmlnYXRlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm5hdmlnYXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=