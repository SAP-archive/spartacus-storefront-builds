/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RoutingService, TranslationService, } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class MyCouponsComponentService {
    /**
     * @param {?} routingService
     * @param {?} translation
     */
    constructor(routingService, translation) {
        this.routingService = routingService;
        this.translation = translation;
        this.RELEVANCE = ':relevance';
        this.CUSTOMER_COUPON_CODE = ':customerCouponCode:';
    }
    /**
     * @param {?} coupon
     * @return {?}
     */
    launchSearchPage(coupon) {
        this.routingService.go({
            cxRoute: 'search',
            params: { query: this.buildSearchParam(coupon) },
        }, { couponcode: coupon.couponId });
    }
    /**
     * @private
     * @param {?} coupon
     * @return {?}
     */
    buildSearchParam(coupon) {
        return coupon.allProductsApplicable
            ? this.RELEVANCE
            : this.RELEVANCE + this.CUSTOMER_COUPON_CODE + coupon.couponId;
    }
    /**
     * @return {?}
     */
    getSortLabels() {
        return combineLatest([
            this.translation.translate('myCoupons.startDateAsc'),
            this.translation.translate('myCoupons.startDateDesc'),
            this.translation.translate('myCoupons.endDateAsc'),
            this.translation.translate('myCoupons.endDateDesc'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textByStartDateAsc, textByStartDateDesc, textByEndDateAsc, textByEndDateDesc,]) => {
            return {
                byStartDateAsc: textByStartDateAsc,
                byStartDateDesc: textByStartDateDesc,
                byEndDateAsc: textByEndDateAsc,
                byEndDateDesc: textByEndDateDesc,
            };
        })));
    }
}
MyCouponsComponentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
MyCouponsComponentService.ctorParameters = () => [
    { type: RoutingService },
    { type: TranslationService }
];
/** @nocollapse */ MyCouponsComponentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MyCouponsComponentService_Factory() { return new MyCouponsComponentService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.TranslationService)); }, token: MyCouponsComponentService, providedIn: "root" });
if (false) {
    /** @type {?} */
    MyCouponsComponentService.prototype.sortLabels;
    /**
     * @type {?}
     * @protected
     */
    MyCouponsComponentService.prototype.RELEVANCE;
    /**
     * @type {?}
     * @protected
     */
    MyCouponsComponentService.prototype.CUSTOMER_COUPON_CODE;
    /**
     * @type {?}
     * @protected
     */
    MyCouponsComponentService.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    MyCouponsComponentService.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY291cG9ucy5jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9teS1jb3Vwb25zL215LWNvdXBvbnMuY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLGNBQWMsRUFDZCxrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBS3JDLE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBV3BDLFlBQ1ksY0FBOEIsRUFDOUIsV0FBK0I7UUFEL0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUx4QixjQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ3pCLHlCQUFvQixHQUFHLHNCQUFzQixDQUFDO0lBSzlELENBQUM7Ozs7O0lBRUosZ0JBQWdCLENBQUMsTUFBc0I7UUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQ3BCO1lBQ0UsT0FBTyxFQUFFLFFBQVE7WUFDakIsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtTQUNqRCxFQUNELEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FDaEMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLGdCQUFnQixDQUFDLE1BQXNCO1FBQzdDLE9BQU8sTUFBTSxDQUFDLHFCQUFxQjtZQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbkUsQ0FBQzs7OztJQUVELGFBQWE7UUFNWCxPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQztZQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQztZQUNyRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQztZQUNsRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQztTQUNwRCxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFDRCxDQUFDLENBQ0Msa0JBQWtCLEVBQ2xCLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLEVBQUUsRUFBRTtZQUNILE9BQU87Z0JBQ0wsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsZUFBZSxFQUFFLG1CQUFtQjtnQkFDcEMsWUFBWSxFQUFFLGdCQUFnQjtnQkFDOUIsYUFBYSxFQUFFLGlCQUFpQjthQUNqQyxDQUFDO1FBQ0osQ0FBQyxFQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7OztZQS9ERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFUQyxjQUFjO1lBQ2Qsa0JBQWtCOzs7OztJQVVsQiwrQ0FLRzs7Ozs7SUFFSCw4Q0FBNEM7Ozs7O0lBQzVDLHlEQUFpRTs7Ozs7SUFHL0QsbURBQXdDOzs7OztJQUN4QyxnREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDdXN0b21lckNvdXBvbixcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL2ludGVybmFsL09ic2VydmFibGUnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTXlDb3Vwb25zQ29tcG9uZW50U2VydmljZSB7XG4gIHNvcnRMYWJlbHM6IE9ic2VydmFibGU8e1xuICAgIGJ5U3RhcnREYXRlQXNjOiBzdHJpbmc7XG4gICAgYnlTdGFydERhdGVEZXNjOiBzdHJpbmc7XG4gICAgYnlFbmREYXRlQXNjOiBzdHJpbmc7XG4gICAgYnlFbmREYXRlRGVzYzogc3RyaW5nO1xuICB9PjtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgUkVMRVZBTkNFID0gJzpyZWxldmFuY2UnO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgQ1VTVE9NRVJfQ09VUE9OX0NPREUgPSAnOmN1c3RvbWVyQ291cG9uQ29kZTonO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIGxhdW5jaFNlYXJjaFBhZ2UoY291cG9uOiBDdXN0b21lckNvdXBvbik6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oXG4gICAgICB7XG4gICAgICAgIGN4Um91dGU6ICdzZWFyY2gnLFxuICAgICAgICBwYXJhbXM6IHsgcXVlcnk6IHRoaXMuYnVpbGRTZWFyY2hQYXJhbShjb3Vwb24pIH0sXG4gICAgICB9LFxuICAgICAgeyBjb3Vwb25jb2RlOiBjb3Vwb24uY291cG9uSWQgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkU2VhcmNoUGFyYW0oY291cG9uOiBDdXN0b21lckNvdXBvbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGNvdXBvbi5hbGxQcm9kdWN0c0FwcGxpY2FibGVcbiAgICAgID8gdGhpcy5SRUxFVkFOQ0VcbiAgICAgIDogdGhpcy5SRUxFVkFOQ0UgKyB0aGlzLkNVU1RPTUVSX0NPVVBPTl9DT0RFICsgY291cG9uLmNvdXBvbklkO1xuICB9XG5cbiAgZ2V0U29ydExhYmVscygpOiBPYnNlcnZhYmxlPHtcbiAgICBieVN0YXJ0RGF0ZUFzYzogc3RyaW5nO1xuICAgIGJ5U3RhcnREYXRlRGVzYzogc3RyaW5nO1xuICAgIGJ5RW5kRGF0ZUFzYzogc3RyaW5nO1xuICAgIGJ5RW5kRGF0ZURlc2M6IHN0cmluZztcbiAgfT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdteUNvdXBvbnMuc3RhcnREYXRlQXNjJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnbXlDb3Vwb25zLnN0YXJ0RGF0ZURlc2MnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdteUNvdXBvbnMuZW5kRGF0ZUFzYycpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ215Q291cG9ucy5lbmREYXRlRGVzYycpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChbXG4gICAgICAgICAgdGV4dEJ5U3RhcnREYXRlQXNjLFxuICAgICAgICAgIHRleHRCeVN0YXJ0RGF0ZURlc2MsXG4gICAgICAgICAgdGV4dEJ5RW5kRGF0ZUFzYyxcbiAgICAgICAgICB0ZXh0QnlFbmREYXRlRGVzYyxcbiAgICAgICAgXSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBieVN0YXJ0RGF0ZUFzYzogdGV4dEJ5U3RhcnREYXRlQXNjLFxuICAgICAgICAgICAgYnlTdGFydERhdGVEZXNjOiB0ZXh0QnlTdGFydERhdGVEZXNjLFxuICAgICAgICAgICAgYnlFbmREYXRlQXNjOiB0ZXh0QnlFbmREYXRlQXNjLFxuICAgICAgICAgICAgYnlFbmREYXRlRGVzYzogdGV4dEJ5RW5kRGF0ZURlc2MsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==