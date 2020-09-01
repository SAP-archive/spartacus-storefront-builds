import { __decorate } from "tslib";
import { Component, ElementRef, HostBinding, HostListener, OnDestroy, OnInit, ViewChild, } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { FocusConfig, KeyboardFocusService, } from '../a11y/keyboard-focus/index';
import { SkipLinkComponent } from '../a11y/skip-link/index';
import { HamburgerMenuService } from '../header/hamburger-menu/hamburger-menu.service';
let StorefrontComponent = class StorefrontComponent {
    constructor(hamburgerMenuService, routingService, elementRef, keyboardFocusService) {
        this.hamburgerMenuService = hamburgerMenuService;
        this.routingService = routingService;
        this.elementRef = elementRef;
        this.keyboardFocusService = keyboardFocusService;
        this.isExpanded$ = this.hamburgerMenuService.isExpanded;
        // required by esc focus
        this.tabindex = '0';
        this.keyboardFocusConfig = {
            focusOnEscape: true,
            focusOnDoubleEscape: true,
        };
    }
    handleEscape(event) {
        this.keyboardFocusService.handleEscape(this.elementRef.nativeElement, this.keyboardFocusConfig, event);
    }
    ngOnInit() {
        this.navigateSubscription = this.routingService
            .isNavigating()
            .subscribe((val) => {
            this.startNavigating = val === true;
            this.stopNavigating = val === false;
        });
    }
    collapseMenuIfClickOutside(event) {
        if (event.currentTarget.className.includes('is-expanded')) {
            this.collapseMenu();
        }
    }
    collapseMenu() {
        this.hamburgerMenuService.toggle(true);
    }
    ngOnDestroy() {
        if (this.navigateSubscription) {
            this.navigateSubscription.unsubscribe();
        }
    }
};
StorefrontComponent.ctorParameters = () => [
    { type: HamburgerMenuService },
    { type: RoutingService },
    { type: ElementRef },
    { type: KeyboardFocusService }
];
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
        template: "<ng-template cxOutlet=\"cx-storefront\">\n  <ng-template cxOutlet=\"cx-header\">\n    <header\n      cxSkipLink=\"cx-header\"\n      [cxFocus]=\"{ disableMouseFocus: true }\"\n      [class.is-expanded]=\"isExpanded$ | async\"\n      (keydown.escape)=\"collapseMenu()\"\n      (click)=\"collapseMenuIfClickOutside($event)\"\n    >\n      <cx-page-layout section=\"header\"></cx-page-layout>\n      <cx-page-layout section=\"navigation\"></cx-page-layout>\n    </header>\n    <cx-page-slot position=\"BottomHeaderSlot\"></cx-page-slot>\n    <cx-global-message></cx-global-message>\n  </ng-template>\n\n  <main cxSkipLink=\"cx-main\" [cxFocus]=\"{ disableMouseFocus: true }\">\n    <router-outlet></router-outlet>\n  </main>\n\n  <ng-template cxOutlet=\"cx-footer\">\n    <footer cxSkipLink=\"cx-footer\" [cxFocus]=\"{ disableMouseFocus: true }\">\n      <cx-page-layout section=\"footer\"></cx-page-layout>\n    </footer>\n  </ng-template>\n</ng-template>\n"
    })
], StorefrontComponent);
export { StorefrontComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbWFpbi9zdG9yZWZyb250LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUNMLFdBQVcsRUFDWCxvQkFBb0IsR0FDckIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQU12RixJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQTBCOUIsWUFDVSxvQkFBMEMsRUFDMUMsY0FBOEIsRUFDNUIsVUFBbUMsRUFDbkMsb0JBQTBDO1FBSDVDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzVCLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUE1QnRELGdCQUFXLEdBQXdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUM7UUFLeEUsd0JBQXdCO1FBQ0MsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUloQyx3QkFBbUIsR0FBZ0I7WUFDekMsYUFBYSxFQUFFLElBQUk7WUFDbkIsbUJBQW1CLEVBQUUsSUFBSTtTQUMxQixDQUFDO0lBZ0JDLENBQUM7SUFiSixZQUFZLENBQUMsS0FBb0I7UUFDL0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCLElBQUksQ0FBQyxtQkFBbUIsRUFDeEIsS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDO0lBU0QsUUFBUTtRQUNOLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsY0FBYzthQUM1QyxZQUFZLEVBQUU7YUFDZCxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUM7WUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDBCQUEwQixDQUFDLEtBQWlCO1FBQzFDLElBQWtCLEtBQUssQ0FBQyxhQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUN4RSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDekM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUE5QmlDLG9CQUFvQjtZQUMxQixjQUFjO1lBQ2hCLFVBQVU7WUFDQSxvQkFBb0I7O0FBMUJmO0lBQXRDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQzs0REFBaUI7QUFDakI7SUFBckMsV0FBVyxDQUFDLHVCQUF1QixDQUFDOzJEQUFnQjtBQUc1QjtJQUF4QixXQUFXLENBQUMsVUFBVSxDQUFDO3FEQUFnQjtBQUVWO0lBQTdCLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztrREFBMEI7QUFRdkQ7SUFEQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt1REFPMUM7QUF4QlUsbUJBQW1CO0lBSi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLHU4QkFBMEM7S0FDM0MsQ0FBQztHQUNXLG1CQUFtQixDQXlEL0I7U0F6RFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgRm9jdXNDb25maWcsXG4gIEtleWJvYXJkRm9jdXNTZXJ2aWNlLFxufSBmcm9tICcuLi9hMTF5L2tleWJvYXJkLWZvY3VzL2luZGV4JztcbmltcG9ydCB7IFNraXBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi4vYTExeS9za2lwLWxpbmsvaW5kZXgnO1xuaW1wb3J0IHsgSGFtYnVyZ2VyTWVudVNlcnZpY2UgfSBmcm9tICcuLi9oZWFkZXIvaGFtYnVyZ2VyLW1lbnUvaGFtYnVyZ2VyLW1lbnUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlZnJvbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmVmcm9udC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIG5hdmlnYXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGlzRXhwYW5kZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5oYW1idXJnZXJNZW51U2VydmljZS5pc0V4cGFuZGVkO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhcnQtbmF2aWdhdGluZycpIHN0YXJ0TmF2aWdhdGluZztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdG9wLW5hdmlnYXRpbmcnKSBzdG9wTmF2aWdhdGluZztcblxuICAvLyByZXF1aXJlZCBieSBlc2MgZm9jdXNcbiAgQEhvc3RCaW5kaW5nKCd0YWJpbmRleCcpIHRhYmluZGV4ID0gJzAnO1xuXG4gIEBWaWV3Q2hpbGQoU2tpcExpbmtDb21wb25lbnQpIGNoaWxkOiBTa2lwTGlua0NvbXBvbmVudDtcblxuICBwcml2YXRlIGtleWJvYXJkRm9jdXNDb25maWc6IEZvY3VzQ29uZmlnID0ge1xuICAgIGZvY3VzT25Fc2NhcGU6IHRydWUsXG4gICAgZm9jdXNPbkRvdWJsZUVzY2FwZTogdHJ1ZSxcbiAgfTtcblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVzY2FwZScsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUVzY2FwZShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMua2V5Ym9hcmRGb2N1c1NlcnZpY2UuaGFuZGxlRXNjYXBlKFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLmtleWJvYXJkRm9jdXNDb25maWcsXG4gICAgICBldmVudFxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGhhbWJ1cmdlck1lbnVTZXJ2aWNlOiBIYW1idXJnZXJNZW51U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJvdGVjdGVkIGtleWJvYXJkRm9jdXNTZXJ2aWNlOiBLZXlib2FyZEZvY3VzU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uYXZpZ2F0ZVN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5pc05hdmlnYXRpbmcoKVxuICAgICAgLnN1YnNjcmliZSgodmFsKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhcnROYXZpZ2F0aW5nID0gdmFsID09PSB0cnVlO1xuICAgICAgICB0aGlzLnN0b3BOYXZpZ2F0aW5nID0gdmFsID09PSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY29sbGFwc2VNZW51SWZDbGlja091dHNpZGUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoKDxIVE1MRWxlbWVudD5ldmVudC5jdXJyZW50VGFyZ2V0KS5jbGFzc05hbWUuaW5jbHVkZXMoJ2lzLWV4cGFuZGVkJykpIHtcbiAgICAgIHRoaXMuY29sbGFwc2VNZW51KCk7XG4gICAgfVxuICB9XG5cbiAgY29sbGFwc2VNZW51KCk6IHZvaWQge1xuICAgIHRoaXMuaGFtYnVyZ2VyTWVudVNlcnZpY2UudG9nZ2xlKHRydWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmF2aWdhdGVTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMubmF2aWdhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==