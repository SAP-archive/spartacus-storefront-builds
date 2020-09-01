import { __decorate } from "tslib";
import { Component, ElementRef, HostBinding, HostListener, OnDestroy, OnInit, ViewChild, } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { FocusConfig, KeyboardFocusService, } from '../a11y/keyboard-focus/index';
import { SkipLinkComponent } from '../a11y/skip-link/index';
import { HamburgerMenuService } from '../header/hamburger-menu/hamburger-menu.service';
var StorefrontComponent = /** @class */ (function () {
    function StorefrontComponent(hamburgerMenuService, routingService, elementRef, keyboardFocusService) {
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
    StorefrontComponent.prototype.handleEscape = function (event) {
        this.keyboardFocusService.handleEscape(this.elementRef.nativeElement, this.keyboardFocusConfig, event);
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
        if (event.currentTarget.className.includes('is-expanded')) {
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
        { type: KeyboardFocusService }
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
            template: "<ng-template cxOutlet=\"cx-storefront\">\n  <ng-template cxOutlet=\"cx-header\">\n    <header\n      cxSkipLink=\"cx-header\"\n      [cxFocus]=\"{ disableMouseFocus: true }\"\n      [class.is-expanded]=\"isExpanded$ | async\"\n      (keydown.escape)=\"collapseMenu()\"\n      (click)=\"collapseMenuIfClickOutside($event)\"\n    >\n      <cx-page-layout section=\"header\"></cx-page-layout>\n      <cx-page-layout section=\"navigation\"></cx-page-layout>\n    </header>\n    <cx-page-slot position=\"BottomHeaderSlot\"></cx-page-slot>\n    <cx-global-message></cx-global-message>\n  </ng-template>\n\n  <main cxSkipLink=\"cx-main\" [cxFocus]=\"{ disableMouseFocus: true }\">\n    <router-outlet></router-outlet>\n  </main>\n\n  <ng-template cxOutlet=\"cx-footer\">\n    <footer cxSkipLink=\"cx-footer\" [cxFocus]=\"{ disableMouseFocus: true }\">\n      <cx-page-layout section=\"footer\"></cx-page-layout>\n    </footer>\n  </ng-template>\n</ng-template>\n"
        })
    ], StorefrontComponent);
    return StorefrontComponent;
}());
export { StorefrontComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbWFpbi9zdG9yZWZyb250LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUNMLFdBQVcsRUFDWCxvQkFBb0IsR0FDckIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQU12RjtJQTBCRSw2QkFDVSxvQkFBMEMsRUFDMUMsY0FBOEIsRUFDNUIsVUFBbUMsRUFDbkMsb0JBQTBDO1FBSDVDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzVCLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUE1QnRELGdCQUFXLEdBQXdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUM7UUFLeEUsd0JBQXdCO1FBQ0MsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUloQyx3QkFBbUIsR0FBZ0I7WUFDekMsYUFBYSxFQUFFLElBQUk7WUFDbkIsbUJBQW1CLEVBQUUsSUFBSTtTQUMxQixDQUFDO0lBZ0JDLENBQUM7SUFiSiwwQ0FBWSxHQUFaLFVBQWEsS0FBb0I7UUFDL0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCLElBQUksQ0FBQyxtQkFBbUIsRUFDeEIsS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDO0lBU0Qsc0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxjQUFjO2FBQzVDLFlBQVksRUFBRTthQUNkLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDYixLQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUM7WUFDcEMsS0FBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdEQUEwQixHQUExQixVQUEyQixLQUFpQjtRQUMxQyxJQUFrQixLQUFLLENBQUMsYUFBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDeEUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELDBDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7Z0JBN0IrQixvQkFBb0I7Z0JBQzFCLGNBQWM7Z0JBQ2hCLFVBQVU7Z0JBQ0Esb0JBQW9COztJQTFCZjtRQUF0QyxXQUFXLENBQUMsd0JBQXdCLENBQUM7Z0VBQWlCO0lBQ2pCO1FBQXJDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQzsrREFBZ0I7SUFHNUI7UUFBeEIsV0FBVyxDQUFDLFVBQVUsQ0FBQzt5REFBZ0I7SUFFVjtRQUE3QixTQUFTLENBQUMsaUJBQWlCLENBQUM7c0RBQTBCO0lBUXZEO1FBREMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7MkRBTzFDO0lBeEJVLG1CQUFtQjtRQUovQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6Qix1OEJBQTBDO1NBQzNDLENBQUM7T0FDVyxtQkFBbUIsQ0F5RC9CO0lBQUQsMEJBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXpEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBGb2N1c0NvbmZpZyxcbiAgS2V5Ym9hcmRGb2N1c1NlcnZpY2UsXG59IGZyb20gJy4uL2ExMXkva2V5Ym9hcmQtZm9jdXMvaW5kZXgnO1xuaW1wb3J0IHsgU2tpcExpbmtDb21wb25lbnQgfSBmcm9tICcuLi9hMTF5L3NraXAtbGluay9pbmRleCc7XG5pbXBvcnQgeyBIYW1idXJnZXJNZW51U2VydmljZSB9IGZyb20gJy4uL2hlYWRlci9oYW1idXJnZXItbWVudS9oYW1idXJnZXItbWVudS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmVmcm9udCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZWZyb250LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVmcm9udENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgbmF2aWdhdGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgaXNFeHBhbmRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmhhbWJ1cmdlck1lbnVTZXJ2aWNlLmlzRXhwYW5kZWQ7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGFydC1uYXZpZ2F0aW5nJykgc3RhcnROYXZpZ2F0aW5nO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0b3AtbmF2aWdhdGluZycpIHN0b3BOYXZpZ2F0aW5nO1xuXG4gIC8vIHJlcXVpcmVkIGJ5IGVzYyBmb2N1c1xuICBASG9zdEJpbmRpbmcoJ3RhYmluZGV4JykgdGFiaW5kZXggPSAnMCc7XG5cbiAgQFZpZXdDaGlsZChTa2lwTGlua0NvbXBvbmVudCkgY2hpbGQ6IFNraXBMaW5rQ29tcG9uZW50O1xuXG4gIHByaXZhdGUga2V5Ym9hcmRGb2N1c0NvbmZpZzogRm9jdXNDb25maWcgPSB7XG4gICAgZm9jdXNPbkVzY2FwZTogdHJ1ZSxcbiAgICBmb2N1c09uRG91YmxlRXNjYXBlOiB0cnVlLFxuICB9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZXNjYXBlJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlRXNjYXBlKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5rZXlib2FyZEZvY3VzU2VydmljZS5oYW5kbGVFc2NhcGUoXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMua2V5Ym9hcmRGb2N1c0NvbmZpZyxcbiAgICAgIGV2ZW50XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaGFtYnVyZ2VyTWVudVNlcnZpY2U6IEhhbWJ1cmdlck1lbnVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQga2V5Ym9hcmRGb2N1c1NlcnZpY2U6IEtleWJvYXJkRm9jdXNTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5hdmlnYXRlU3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmlzTmF2aWdhdGluZygpXG4gICAgICAuc3Vic2NyaWJlKCh2YWwpID0+IHtcbiAgICAgICAgdGhpcy5zdGFydE5hdmlnYXRpbmcgPSB2YWwgPT09IHRydWU7XG4gICAgICAgIHRoaXMuc3RvcE5hdmlnYXRpbmcgPSB2YWwgPT09IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBjb2xsYXBzZU1lbnVJZkNsaWNrT3V0c2lkZShldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICgoPEhUTUxFbGVtZW50PmV2ZW50LmN1cnJlbnRUYXJnZXQpLmNsYXNzTmFtZS5pbmNsdWRlcygnaXMtZXhwYW5kZWQnKSkge1xuICAgICAgdGhpcy5jb2xsYXBzZU1lbnUoKTtcbiAgICB9XG4gIH1cblxuICBjb2xsYXBzZU1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5oYW1idXJnZXJNZW51U2VydmljZS50b2dnbGUodHJ1ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uYXZpZ2F0ZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5uYXZpZ2F0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19