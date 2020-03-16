import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkipLinkService } from '../service/skip-link.service';
let SkipLinkComponent = class SkipLinkComponent {
    constructor(skipLinkService) {
        this.skipLinkService = skipLinkService;
        this.skipLinks$ = this.skipLinkService.getSkipLinks();
    }
    scrollToTarget(skipLink) {
        this.skipLinkService.scrollToTarget(skipLink);
    }
};
SkipLinkComponent.ctorParameters = () => [
    { type: SkipLinkService }
];
SkipLinkComponent = __decorate([
    Component({
        selector: 'cx-skip-link',
        template: "<div [cxFocus]=\"{ tab: true }\" *ngIf=\"skipLinks$ | async as links\">\n  <button *ngFor=\"let link of links\" (click)=\"scrollToTarget(link)\">\n    {{ 'skipLink.skipTo' | cxTranslate }}\n    {{ link.i18nKey | cxTranslate }}\n  </button>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], SkipLinkComponent);
export { SkipLinkComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9jb21wb25lbnQvc2tpcC1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFPL0QsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFHNUIsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRnBELGVBQVUsR0FBMkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUVsQixDQUFDO0lBRXhELGNBQWMsQ0FBQyxRQUFrQjtRQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0YsQ0FBQTs7WUFMc0MsZUFBZTs7QUFIekMsaUJBQWlCO0lBTDdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLHFRQUF5QztRQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csaUJBQWlCLENBUTdCO1NBUlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2tpcExpbmsgfSBmcm9tICcuLi9jb25maWcvc2tpcC1saW5rLmNvbmZpZyc7XG5pbXBvcnQgeyBTa2lwTGlua1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3NraXAtbGluay5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc2tpcC1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NraXAtbGluay5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTa2lwTGlua0NvbXBvbmVudCB7XG4gIHNraXBMaW5rcyQ6IE9ic2VydmFibGU8U2tpcExpbmtbXT4gPSB0aGlzLnNraXBMaW5rU2VydmljZS5nZXRTa2lwTGlua3MoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNraXBMaW5rU2VydmljZTogU2tpcExpbmtTZXJ2aWNlKSB7fVxuXG4gIHNjcm9sbFRvVGFyZ2V0KHNraXBMaW5rOiBTa2lwTGluayk6IHZvaWQge1xuICAgIHRoaXMuc2tpcExpbmtTZXJ2aWNlLnNjcm9sbFRvVGFyZ2V0KHNraXBMaW5rKTtcbiAgfVxufVxuIl19