import { Component, ElementRef, HostBinding, HostListener, ViewChild, } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { KeyboardFocusService, } from '../a11y/keyboard-focus/index';
import { SkipLinkComponent } from '../a11y/skip-link/index';
import { HamburgerMenuService } from '../header/hamburger-menu/hamburger-menu.service';
export class StorefrontComponent {
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
        const element = event.target;
        if (element.nodeName.toLowerCase() === 'header' &&
            element.className.includes('is-expanded')) {
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
}
StorefrontComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-storefront',
                template: "<ng-template cxOutlet=\"cx-storefront\" cxPageTemplateStyle>\n  <ng-template cxOutlet=\"cx-header\">\n    <header\n      cxSkipLink=\"cx-header\"\n      [cxFocus]=\"{ disableMouseFocus: true }\"\n      [class.is-expanded]=\"isExpanded$ | async\"\n      (keydown.escape)=\"collapseMenu()\"\n      (click)=\"collapseMenuIfClickOutside($event)\"\n    >\n      <cx-page-layout section=\"header\"></cx-page-layout>\n      <cx-page-layout section=\"navigation\"></cx-page-layout>\n    </header>\n    <cx-page-slot position=\"BottomHeaderSlot\"></cx-page-slot>\n    <cx-global-message></cx-global-message>\n  </ng-template>\n\n  <main cxSkipLink=\"cx-main\" [cxFocus]=\"{ disableMouseFocus: true }\">\n    <router-outlet></router-outlet>\n  </main>\n\n  <ng-template cxOutlet=\"cx-footer\">\n    <footer cxSkipLink=\"cx-footer\" [cxFocus]=\"{ disableMouseFocus: true }\">\n      <cx-page-layout section=\"footer\"></cx-page-layout>\n    </footer>\n  </ng-template>\n</ng-template>\n"
            },] }
];
StorefrontComponent.ctorParameters = () => [
    { type: HamburgerMenuService },
    { type: RoutingService },
    { type: ElementRef },
    { type: KeyboardFocusService }
];
StorefrontComponent.propDecorators = {
    startNavigating: [{ type: HostBinding, args: ['class.start-navigating',] }],
    stopNavigating: [{ type: HostBinding, args: ['class.stop-navigating',] }],
    tabindex: [{ type: HostBinding, args: ['tabindex',] }],
    child: [{ type: ViewChild, args: [SkipLinkComponent,] }],
    handleEscape: [{ type: HostListener, args: ['keydown.escape', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9sYXlvdXQvbWFpbi9zdG9yZWZyb250LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUdaLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUVMLG9CQUFvQixHQUNyQixNQUFNLDhCQUE4QixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBTXZGLE1BQU0sT0FBTyxtQkFBbUI7SUEwQjlCLFlBQ1Usb0JBQTBDLEVBQzFDLGNBQThCLEVBQzVCLFVBQW1DLEVBQ25DLG9CQUEwQztRQUg1Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBNUJ0RCxnQkFBVyxHQUF3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDO1FBS3hFLHdCQUF3QjtRQUNDLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFJaEMsd0JBQW1CLEdBQWdCO1lBQ3pDLGFBQWEsRUFBRSxJQUFJO1lBQ25CLG1CQUFtQixFQUFFLElBQUk7U0FDMUIsQ0FBQztJQWdCQyxDQUFDO0lBYkosWUFBWSxDQUFDLEtBQW9CO1FBQy9CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixJQUFJLENBQUMsbUJBQW1CLEVBQ3hCLEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQztJQVNELFFBQVE7UUFDTixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGNBQWM7YUFDNUMsWUFBWSxFQUFFO2FBQ2QsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLEtBQUssSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwwQkFBMEIsQ0FBQyxLQUFVO1FBQ25DLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFDRSxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVE7WUFDM0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQ3pDO1lBQ0EsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7O1lBaEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsMjlCQUEwQzthQUMzQzs7O1lBTFEsb0JBQW9CO1lBUHBCLGNBQWM7WUFQckIsVUFBVTtZQVdWLG9CQUFvQjs7OzhCQWFuQixXQUFXLFNBQUMsd0JBQXdCOzZCQUNwQyxXQUFXLFNBQUMsdUJBQXVCO3VCQUduQyxXQUFXLFNBQUMsVUFBVTtvQkFFdEIsU0FBUyxTQUFDLGlCQUFpQjsyQkFPM0IsWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgRm9jdXNDb25maWcsXG4gIEtleWJvYXJkRm9jdXNTZXJ2aWNlLFxufSBmcm9tICcuLi9hMTF5L2tleWJvYXJkLWZvY3VzL2luZGV4JztcbmltcG9ydCB7IFNraXBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi4vYTExeS9za2lwLWxpbmsvaW5kZXgnO1xuaW1wb3J0IHsgSGFtYnVyZ2VyTWVudVNlcnZpY2UgfSBmcm9tICcuLi9oZWFkZXIvaGFtYnVyZ2VyLW1lbnUvaGFtYnVyZ2VyLW1lbnUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlZnJvbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmVmcm9udC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIG5hdmlnYXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGlzRXhwYW5kZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5oYW1idXJnZXJNZW51U2VydmljZS5pc0V4cGFuZGVkO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhcnQtbmF2aWdhdGluZycpIHN0YXJ0TmF2aWdhdGluZztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdG9wLW5hdmlnYXRpbmcnKSBzdG9wTmF2aWdhdGluZztcblxuICAvLyByZXF1aXJlZCBieSBlc2MgZm9jdXNcbiAgQEhvc3RCaW5kaW5nKCd0YWJpbmRleCcpIHRhYmluZGV4ID0gJzAnO1xuXG4gIEBWaWV3Q2hpbGQoU2tpcExpbmtDb21wb25lbnQpIGNoaWxkOiBTa2lwTGlua0NvbXBvbmVudDtcblxuICBwcml2YXRlIGtleWJvYXJkRm9jdXNDb25maWc6IEZvY3VzQ29uZmlnID0ge1xuICAgIGZvY3VzT25Fc2NhcGU6IHRydWUsXG4gICAgZm9jdXNPbkRvdWJsZUVzY2FwZTogdHJ1ZSxcbiAgfTtcblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVzY2FwZScsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUVzY2FwZShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMua2V5Ym9hcmRGb2N1c1NlcnZpY2UuaGFuZGxlRXNjYXBlKFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLmtleWJvYXJkRm9jdXNDb25maWcsXG4gICAgICBldmVudFxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGhhbWJ1cmdlck1lbnVTZXJ2aWNlOiBIYW1idXJnZXJNZW51U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJvdGVjdGVkIGtleWJvYXJkRm9jdXNTZXJ2aWNlOiBLZXlib2FyZEZvY3VzU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uYXZpZ2F0ZVN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5pc05hdmlnYXRpbmcoKVxuICAgICAgLnN1YnNjcmliZSgodmFsKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhcnROYXZpZ2F0aW5nID0gdmFsID09PSB0cnVlO1xuICAgICAgICB0aGlzLnN0b3BOYXZpZ2F0aW5nID0gdmFsID09PSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY29sbGFwc2VNZW51SWZDbGlja091dHNpZGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKFxuICAgICAgZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaGVhZGVyJyAmJlxuICAgICAgZWxlbWVudC5jbGFzc05hbWUuaW5jbHVkZXMoJ2lzLWV4cGFuZGVkJylcbiAgICApIHtcbiAgICAgIHRoaXMuY29sbGFwc2VNZW51KCk7XG4gICAgfVxuICB9XG5cbiAgY29sbGFwc2VNZW51KCk6IHZvaWQge1xuICAgIHRoaXMuaGFtYnVyZ2VyTWVudVNlcnZpY2UudG9nZ2xlKHRydWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmF2aWdhdGVTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMubmF2aWdhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==