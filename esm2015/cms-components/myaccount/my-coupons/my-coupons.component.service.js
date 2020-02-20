import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CustomerCoupon, RoutingService, TranslationService, } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
let MyCouponsComponentService = class MyCouponsComponentService {
    constructor(routingService, translation) {
        this.routingService = routingService;
        this.translation = translation;
        this.RELEVANCE = ':relevance';
        this.CUSTOMER_COUPON_CODE = ':customerCouponCode:';
    }
    launchSearchPage(coupon) {
        this.routingService.go({
            cxRoute: 'search',
            params: { query: this.buildSearchParam(coupon) },
        }, { couponcode: coupon.couponId });
    }
    buildSearchParam(coupon) {
        return coupon.allProductsApplicable
            ? this.RELEVANCE
            : this.RELEVANCE + this.CUSTOMER_COUPON_CODE + coupon.couponId;
    }
    getSortLabels() {
        return combineLatest([
            this.translation.translate('myCoupons.startDateAsc'),
            this.translation.translate('myCoupons.startDateDesc'),
            this.translation.translate('myCoupons.endDateAsc'),
            this.translation.translate('myCoupons.endDateDesc'),
        ]).pipe(map(([textByStartDateAsc, textByStartDateDesc, textByEndDateAsc, textByEndDateDesc,]) => {
            return {
                byStartDateAsc: textByStartDateAsc,
                byStartDateDesc: textByStartDateDesc,
                byEndDateAsc: textByEndDateAsc,
                byEndDateDesc: textByEndDateDesc,
            };
        }));
    }
};
MyCouponsComponentService.ctorParameters = () => [
    { type: RoutingService },
    { type: TranslationService }
];
MyCouponsComponentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MyCouponsComponentService_Factory() { return new MyCouponsComponentService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.TranslationService)); }, token: MyCouponsComponentService, providedIn: "root" });
MyCouponsComponentService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], MyCouponsComponentService);
export { MyCouponsComponentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY291cG9ucy5jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9teS1jb3Vwb25zL215LWNvdXBvbnMuY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLGNBQWMsRUFDZCxjQUFjLEVBQ2Qsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7OztBQUtqRCxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQVdwQyxZQUNZLGNBQThCLEVBQzlCLFdBQStCO1FBRC9CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFMeEIsY0FBUyxHQUFHLFlBQVksQ0FBQztRQUN6Qix5QkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztJQUs5RCxDQUFDO0lBRUosZ0JBQWdCLENBQUMsTUFBc0I7UUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQ3BCO1lBQ0UsT0FBTyxFQUFFLFFBQVE7WUFDakIsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtTQUNqRCxFQUNELEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FDaEMsQ0FBQztJQUNKLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxNQUFzQjtRQUM3QyxPQUFPLE1BQU0sQ0FBQyxxQkFBcUI7WUFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ25FLENBQUM7SUFFRCxhQUFhO1FBTVgsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUM7WUFDcEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMseUJBQXlCLENBQUM7WUFDckQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUM7WUFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUM7U0FDcEQsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHLENBQ0QsQ0FBQyxDQUNDLGtCQUFrQixFQUNsQixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNsQixFQUFFLEVBQUU7WUFDSCxPQUFPO2dCQUNMLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLGVBQWUsRUFBRSxtQkFBbUI7Z0JBQ3BDLFlBQVksRUFBRSxnQkFBZ0I7Z0JBQzlCLGFBQWEsRUFBRSxpQkFBaUI7YUFDakMsQ0FBQztRQUNKLENBQUMsQ0FDRixDQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUFqRDZCLGNBQWM7WUFDakIsa0JBQWtCOzs7QUFiaEMseUJBQXlCO0lBSHJDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyx5QkFBeUIsQ0E2RHJDO1NBN0RZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEN1c3RvbWVyQ291cG9uLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTXlDb3Vwb25zQ29tcG9uZW50U2VydmljZSB7XG4gIHNvcnRMYWJlbHM6IE9ic2VydmFibGU8e1xuICAgIGJ5U3RhcnREYXRlQXNjOiBzdHJpbmc7XG4gICAgYnlTdGFydERhdGVEZXNjOiBzdHJpbmc7XG4gICAgYnlFbmREYXRlQXNjOiBzdHJpbmc7XG4gICAgYnlFbmREYXRlRGVzYzogc3RyaW5nO1xuICB9PjtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgUkVMRVZBTkNFID0gJzpyZWxldmFuY2UnO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgQ1VTVE9NRVJfQ09VUE9OX0NPREUgPSAnOmN1c3RvbWVyQ291cG9uQ29kZTonO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIGxhdW5jaFNlYXJjaFBhZ2UoY291cG9uOiBDdXN0b21lckNvdXBvbik6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oXG4gICAgICB7XG4gICAgICAgIGN4Um91dGU6ICdzZWFyY2gnLFxuICAgICAgICBwYXJhbXM6IHsgcXVlcnk6IHRoaXMuYnVpbGRTZWFyY2hQYXJhbShjb3Vwb24pIH0sXG4gICAgICB9LFxuICAgICAgeyBjb3Vwb25jb2RlOiBjb3Vwb24uY291cG9uSWQgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkU2VhcmNoUGFyYW0oY291cG9uOiBDdXN0b21lckNvdXBvbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGNvdXBvbi5hbGxQcm9kdWN0c0FwcGxpY2FibGVcbiAgICAgID8gdGhpcy5SRUxFVkFOQ0VcbiAgICAgIDogdGhpcy5SRUxFVkFOQ0UgKyB0aGlzLkNVU1RPTUVSX0NPVVBPTl9DT0RFICsgY291cG9uLmNvdXBvbklkO1xuICB9XG5cbiAgZ2V0U29ydExhYmVscygpOiBPYnNlcnZhYmxlPHtcbiAgICBieVN0YXJ0RGF0ZUFzYzogc3RyaW5nO1xuICAgIGJ5U3RhcnREYXRlRGVzYzogc3RyaW5nO1xuICAgIGJ5RW5kRGF0ZUFzYzogc3RyaW5nO1xuICAgIGJ5RW5kRGF0ZURlc2M6IHN0cmluZztcbiAgfT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdteUNvdXBvbnMuc3RhcnREYXRlQXNjJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnbXlDb3Vwb25zLnN0YXJ0RGF0ZURlc2MnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdteUNvdXBvbnMuZW5kRGF0ZUFzYycpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ215Q291cG9ucy5lbmREYXRlRGVzYycpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChbXG4gICAgICAgICAgdGV4dEJ5U3RhcnREYXRlQXNjLFxuICAgICAgICAgIHRleHRCeVN0YXJ0RGF0ZURlc2MsXG4gICAgICAgICAgdGV4dEJ5RW5kRGF0ZUFzYyxcbiAgICAgICAgICB0ZXh0QnlFbmREYXRlRGVzYyxcbiAgICAgICAgXSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBieVN0YXJ0RGF0ZUFzYzogdGV4dEJ5U3RhcnREYXRlQXNjLFxuICAgICAgICAgICAgYnlTdGFydERhdGVEZXNjOiB0ZXh0QnlTdGFydERhdGVEZXNjLFxuICAgICAgICAgICAgYnlFbmREYXRlQXNjOiB0ZXh0QnlFbmREYXRlQXNjLFxuICAgICAgICAgICAgYnlFbmREYXRlRGVzYzogdGV4dEJ5RW5kRGF0ZURlc2MsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==