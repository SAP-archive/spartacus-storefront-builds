import { __decorate } from "tslib";
import { Component, ElementRef, HostBinding, HostListener, OnDestroy, OnInit, ViewChild, } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { EscapeFocusConfig, EscapeFocusService, } from '../a11y/keyboard-focus/index';
import { SkipLinkComponent } from '../a11y/skip-link/index';
import { HamburgerMenuService } from '../header/hamburger-menu/hamburger-menu.service';
var StorefrontComponent = /** @class */ (function () {
    function StorefrontComponent(hamburgerMenuService, routingService, elementRef, service) {
        this.hamburgerMenuService = hamburgerMenuService;
        this.routingService = routingService;
        this.elementRef = elementRef;
        this.service = service;
        this.isExpanded$ = this.hamburgerMenuService.isExpanded;
        // required by esc focus
        this.tabindex = '0';
        this.config = {
            focusOnEscape: true,
            focusOnDoubleEscape: true,
        };
    }
    StorefrontComponent.prototype.handleEscape = function (event) {
        this.service.handleEscape(this.elementRef.nativeElement, this.config, event);
    };
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
        { type: RoutingService },
        { type: ElementRef },
        { type: EscapeFocusService }
    ]; };
    __decorate([
        HostBinding('class.start-navigating')
    ], StorefrontComponent.prototype, "startNavigating", void 0);
    __decorate([
        HostBinding('class.stop-navigating')
    ], StorefrontComponent.prototype, "stopNavigating", void 0);
    __decorate([
        HostBinding('tabindex')
    ], StorefrontComponent.prototype, "tabindex", void 0);
    __decorate([
        ViewChild(SkipLinkComponent)
    ], StorefrontComponent.prototype, "child", void 0);
    __decorate([
        HostListener('keydown.escape', ['$event'])
    ], StorefrontComponent.prototype, "handleEscape", null);
    StorefrontComponent = __decorate([
        Component({
            selector: 'cx-storefront',
            template: "<ng-template cxOutlet=\"cx-storefront\">\n  <ng-template cxOutlet=\"cx-header\">\n    <header\n      cxSkipLink=\"cx-header\"\n      [cxFocus]=\"{ autofocus: true, disableMouseFocus: true }\"\n      [class.is-expanded]=\"isExpanded$ | async\"\n      (keydown.escape)=\"collapseMenu()\"\n      (click)=\"collapseMenuIfClickOutside($event)\"\n    >\n      <cx-page-layout section=\"header\"></cx-page-layout>\n      <cx-page-layout section=\"navigation\"></cx-page-layout>\n    </header>\n    <cx-page-slot position=\"BottomHeaderSlot\"></cx-page-slot>\n    <cx-global-message></cx-global-message>\n  </ng-template>\n\n  <main\n    cxSkipLink=\"cx-main\"\n    [cxFocus]=\"{ autofocus: true, disableMouseFocus: true }\"\n  >\n    <router-outlet></router-outlet>\n  </main>\n\n  <ng-template cxOutlet=\"cx-footer\">\n    <footer\n      cxSkipLink=\"cx-footer\"\n      [cxFocus]=\"{ autofocus: true, disableMouseFocus: true }\"\n    >\n      <cx-page-layout section=\"footer\"></cx-page-layout>\n    </footer>\n  </ng-template>\n</ng-template>\n"
        })
    ], StorefrontComponent);
    return StorefrontComponent;
}());
export { StorefrontComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbWFpbi9zdG9yZWZyb250LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixrQkFBa0IsR0FDbkIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQU12RjtJQTBCRSw2QkFDVSxvQkFBMEMsRUFDMUMsY0FBOEIsRUFDNUIsVUFBbUMsRUFDbkMsT0FBMkI7UUFIN0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDNUIsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUE1QnZDLGdCQUFXLEdBQXdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUM7UUFLeEUsd0JBQXdCO1FBQ0MsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUloQyxXQUFNLEdBQXNCO1lBQ2xDLGFBQWEsRUFBRSxJQUFJO1lBQ25CLG1CQUFtQixFQUFFLElBQUk7U0FDMUIsQ0FBQztJQWdCQyxDQUFDO0lBYkosMENBQVksR0FBWixVQUFhLEtBQW9CO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsSUFBSSxDQUFDLE1BQU0sRUFDWCxLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7SUFTRCxzQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGNBQWM7YUFDNUMsWUFBWSxFQUFFO2FBQ2QsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNaLEtBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQztZQUNwQyxLQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0RBQTBCLEdBQTFCLFVBQTJCLEtBQWlCO1FBQzFDLElBQWtCLEtBQUssQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUNqRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsMENBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDekM7SUFDSCxDQUFDOztnQkE3QitCLG9CQUFvQjtnQkFDMUIsY0FBYztnQkFDaEIsVUFBVTtnQkFDYixrQkFBa0I7O0lBMUJBO1FBQXRDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQztnRUFBaUI7SUFDakI7UUFBckMsV0FBVyxDQUFDLHVCQUF1QixDQUFDOytEQUFnQjtJQUc1QjtRQUF4QixXQUFXLENBQUMsVUFBVSxDQUFDO3lEQUFnQjtJQUVWO1FBQTdCLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztzREFBMEI7SUFRdkQ7UUFEQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzsyREFPMUM7SUF4QlUsbUJBQW1CO1FBSi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLDRoQ0FBMEM7U0FDM0MsQ0FBQztPQUNXLG1CQUFtQixDQXlEL0I7SUFBRCwwQkFBQztDQUFBLEFBekRELElBeURDO1NBekRZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEVzY2FwZUZvY3VzQ29uZmlnLFxuICBFc2NhcGVGb2N1c1NlcnZpY2UsXG59IGZyb20gJy4uL2ExMXkva2V5Ym9hcmQtZm9jdXMvaW5kZXgnO1xuaW1wb3J0IHsgU2tpcExpbmtDb21wb25lbnQgfSBmcm9tICcuLi9hMTF5L3NraXAtbGluay9pbmRleCc7XG5pbXBvcnQgeyBIYW1idXJnZXJNZW51U2VydmljZSB9IGZyb20gJy4uL2hlYWRlci9oYW1idXJnZXItbWVudS9oYW1idXJnZXItbWVudS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmVmcm9udCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZWZyb250LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVmcm9udENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgbmF2aWdhdGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgaXNFeHBhbmRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmhhbWJ1cmdlck1lbnVTZXJ2aWNlLmlzRXhwYW5kZWQ7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGFydC1uYXZpZ2F0aW5nJykgc3RhcnROYXZpZ2F0aW5nO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0b3AtbmF2aWdhdGluZycpIHN0b3BOYXZpZ2F0aW5nO1xuXG4gIC8vIHJlcXVpcmVkIGJ5IGVzYyBmb2N1c1xuICBASG9zdEJpbmRpbmcoJ3RhYmluZGV4JykgdGFiaW5kZXggPSAnMCc7XG5cbiAgQFZpZXdDaGlsZChTa2lwTGlua0NvbXBvbmVudCkgY2hpbGQ6IFNraXBMaW5rQ29tcG9uZW50O1xuXG4gIHByaXZhdGUgY29uZmlnOiBFc2NhcGVGb2N1c0NvbmZpZyA9IHtcbiAgICBmb2N1c09uRXNjYXBlOiB0cnVlLFxuICAgIGZvY3VzT25Eb3VibGVFc2NhcGU6IHRydWUsXG4gIH07XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lc2NhcGUnLCBbJyRldmVudCddKVxuICBoYW5kbGVFc2NhcGUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNlcnZpY2UuaGFuZGxlRXNjYXBlKFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLmNvbmZpZyxcbiAgICAgIGV2ZW50XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaGFtYnVyZ2VyTWVudVNlcnZpY2U6IEhhbWJ1cmdlck1lbnVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogRXNjYXBlRm9jdXNTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5hdmlnYXRlU3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmlzTmF2aWdhdGluZygpXG4gICAgICAuc3Vic2NyaWJlKHZhbCA9PiB7XG4gICAgICAgIHRoaXMuc3RhcnROYXZpZ2F0aW5nID0gdmFsID09PSB0cnVlO1xuICAgICAgICB0aGlzLnN0b3BOYXZpZ2F0aW5nID0gdmFsID09PSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY29sbGFwc2VNZW51SWZDbGlja091dHNpZGUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmNsYXNzTmFtZS5pbmNsdWRlcygnaXMtZXhwYW5kZWQnKSkge1xuICAgICAgdGhpcy5jb2xsYXBzZU1lbnUoKTtcbiAgICB9XG4gIH1cblxuICBjb2xsYXBzZU1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5oYW1idXJnZXJNZW51U2VydmljZS50b2dnbGUodHJ1ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uYXZpZ2F0ZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5uYXZpZ2F0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19