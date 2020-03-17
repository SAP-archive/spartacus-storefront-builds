import { __decorate } from "tslib";
import { Component, ElementRef, HostBinding, HostListener, OnDestroy, OnInit, ViewChild, } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { EscapeFocusConfig, EscapeFocusService, } from '../a11y/keyboard-focus/index';
import { SkipLinkComponent } from '../a11y/skip-link/index';
import { HamburgerMenuService } from '../header/hamburger-menu/hamburger-menu.service';
let StorefrontComponent = class StorefrontComponent {
    constructor(hamburgerMenuService, routingService, elementRef, service) {
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
    handleEscape(event) {
        this.service.handleEscape(this.elementRef.nativeElement, this.config, event);
    }
    ngOnInit() {
        this.navigateSubscription = this.routingService
            .isNavigating()
            .subscribe(val => {
            this.startNavigating = val === true;
            this.stopNavigating = val === false;
        });
    }
    collapseMenuIfClickOutside(event) {
        if (event.target.className.includes('is-expanded')) {
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
    { type: EscapeFocusService }
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
        template: "<ng-template cxOutlet=\"cx-storefront\">\n  <ng-template cxOutlet=\"cx-header\">\n    <header\n      cxSkipLink=\"cx-header\"\n      [cxFocus]=\"{ autofocus: true, disableMouseFocus: true }\"\n      [class.is-expanded]=\"isExpanded$ | async\"\n      (keydown.escape)=\"collapseMenu()\"\n      (click)=\"collapseMenuIfClickOutside($event)\"\n    >\n      <cx-page-layout section=\"header\"></cx-page-layout>\n      <cx-page-layout section=\"navigation\"></cx-page-layout>\n    </header>\n    <cx-page-slot position=\"BottomHeaderSlot\"></cx-page-slot>\n    <cx-global-message></cx-global-message>\n  </ng-template>\n\n  <main\n    cxSkipLink=\"cx-main\"\n    [cxFocus]=\"{ autofocus: true, disableMouseFocus: true }\"\n  >\n    <router-outlet></router-outlet>\n  </main>\n\n  <ng-template cxOutlet=\"cx-footer\">\n    <footer\n      cxSkipLink=\"cx-footer\"\n      [cxFocus]=\"{ autofocus: true, disableMouseFocus: true }\"\n    >\n      <cx-page-layout section=\"footer\"></cx-page-layout>\n    </footer>\n  </ng-template>\n</ng-template>\n"
    })
], StorefrontComponent);
export { StorefrontComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbWFpbi9zdG9yZWZyb250LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixrQkFBa0IsR0FDbkIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQU12RixJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQTBCOUIsWUFDVSxvQkFBMEMsRUFDMUMsY0FBOEIsRUFDNUIsVUFBbUMsRUFDbkMsT0FBMkI7UUFIN0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDNUIsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUE1QnZDLGdCQUFXLEdBQXdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUM7UUFLeEUsd0JBQXdCO1FBQ0MsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUloQyxXQUFNLEdBQXNCO1lBQ2xDLGFBQWEsRUFBRSxJQUFJO1lBQ25CLG1CQUFtQixFQUFFLElBQUk7U0FDMUIsQ0FBQztJQWdCQyxDQUFDO0lBYkosWUFBWSxDQUFDLEtBQW9CO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsSUFBSSxDQUFDLE1BQU0sRUFDWCxLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7SUFTRCxRQUFRO1FBQ04sSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxjQUFjO2FBQzVDLFlBQVksRUFBRTthQUNkLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQztZQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMEJBQTBCLENBQUMsS0FBaUI7UUFDMUMsSUFBa0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7Q0FDRixDQUFBOztZQTlCaUMsb0JBQW9CO1lBQzFCLGNBQWM7WUFDaEIsVUFBVTtZQUNiLGtCQUFrQjs7QUExQkE7SUFBdEMsV0FBVyxDQUFDLHdCQUF3QixDQUFDOzREQUFpQjtBQUNqQjtJQUFyQyxXQUFXLENBQUMsdUJBQXVCLENBQUM7MkRBQWdCO0FBRzVCO0lBQXhCLFdBQVcsQ0FBQyxVQUFVLENBQUM7cURBQWdCO0FBRVY7SUFBN0IsU0FBUyxDQUFDLGlCQUFpQixDQUFDO2tEQUEwQjtBQVF2RDtJQURDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3VEQU8xQztBQXhCVSxtQkFBbUI7SUFKL0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7UUFDekIsNGhDQUEwQztLQUMzQyxDQUFDO0dBQ1csbUJBQW1CLENBeUQvQjtTQXpEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBFc2NhcGVGb2N1c0NvbmZpZyxcbiAgRXNjYXBlRm9jdXNTZXJ2aWNlLFxufSBmcm9tICcuLi9hMTF5L2tleWJvYXJkLWZvY3VzL2luZGV4JztcbmltcG9ydCB7IFNraXBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi4vYTExeS9za2lwLWxpbmsvaW5kZXgnO1xuaW1wb3J0IHsgSGFtYnVyZ2VyTWVudVNlcnZpY2UgfSBmcm9tICcuLi9oZWFkZXIvaGFtYnVyZ2VyLW1lbnUvaGFtYnVyZ2VyLW1lbnUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlZnJvbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmVmcm9udC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIG5hdmlnYXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGlzRXhwYW5kZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5oYW1idXJnZXJNZW51U2VydmljZS5pc0V4cGFuZGVkO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhcnQtbmF2aWdhdGluZycpIHN0YXJ0TmF2aWdhdGluZztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdG9wLW5hdmlnYXRpbmcnKSBzdG9wTmF2aWdhdGluZztcblxuICAvLyByZXF1aXJlZCBieSBlc2MgZm9jdXNcbiAgQEhvc3RCaW5kaW5nKCd0YWJpbmRleCcpIHRhYmluZGV4ID0gJzAnO1xuXG4gIEBWaWV3Q2hpbGQoU2tpcExpbmtDb21wb25lbnQpIGNoaWxkOiBTa2lwTGlua0NvbXBvbmVudDtcblxuICBwcml2YXRlIGNvbmZpZzogRXNjYXBlRm9jdXNDb25maWcgPSB7XG4gICAgZm9jdXNPbkVzY2FwZTogdHJ1ZSxcbiAgICBmb2N1c09uRG91YmxlRXNjYXBlOiB0cnVlLFxuICB9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZXNjYXBlJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlRXNjYXBlKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLmhhbmRsZUVzY2FwZShcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5jb25maWcsXG4gICAgICBldmVudFxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGhhbWJ1cmdlck1lbnVTZXJ2aWNlOiBIYW1idXJnZXJNZW51U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IEVzY2FwZUZvY3VzU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uYXZpZ2F0ZVN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5pc05hdmlnYXRpbmcoKVxuICAgICAgLnN1YnNjcmliZSh2YWwgPT4ge1xuICAgICAgICB0aGlzLnN0YXJ0TmF2aWdhdGluZyA9IHZhbCA9PT0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdG9wTmF2aWdhdGluZyA9IHZhbCA9PT0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNvbGxhcHNlTWVudUlmQ2xpY2tPdXRzaWRlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5jbGFzc05hbWUuaW5jbHVkZXMoJ2lzLWV4cGFuZGVkJykpIHtcbiAgICAgIHRoaXMuY29sbGFwc2VNZW51KCk7XG4gICAgfVxuICB9XG5cbiAgY29sbGFwc2VNZW51KCk6IHZvaWQge1xuICAgIHRoaXMuaGFtYnVyZ2VyTWVudVNlcnZpY2UudG9nZ2xlKHRydWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmF2aWdhdGVTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMubmF2aWdhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==