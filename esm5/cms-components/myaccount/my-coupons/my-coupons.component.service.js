/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { RoutingService, TranslationService, } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var MyCouponsComponentService = /** @class */ (function () {
    function MyCouponsComponentService(routingService, translation) {
        this.routingService = routingService;
        this.translation = translation;
        this.RELEVANCE = ':relevance';
        this.CUSTOMER_COUPON_CODE = ':customerCouponCode:';
    }
    /**
     * @param {?} coupon
     * @return {?}
     */
    MyCouponsComponentService.prototype.launchSearchPage = /**
     * @param {?} coupon
     * @return {?}
     */
    function (coupon) {
        this.routingService.go({
            cxRoute: 'search',
            params: { query: this.buildSearchParam(coupon) },
        }, { couponcode: coupon.couponId });
    };
    /**
     * @private
     * @param {?} coupon
     * @return {?}
     */
    MyCouponsComponentService.prototype.buildSearchParam = /**
     * @private
     * @param {?} coupon
     * @return {?}
     */
    function (coupon) {
        return coupon.allProductsApplicable
            ? this.RELEVANCE
            : this.RELEVANCE + this.CUSTOMER_COUPON_CODE + coupon.couponId;
    };
    /**
     * @return {?}
     */
    MyCouponsComponentService.prototype.getSortLabels = /**
     * @return {?}
     */
    function () {
        return combineLatest([
            this.translation.translate('myCoupons.startDateAsc'),
            this.translation.translate('myCoupons.startDateDesc'),
            this.translation.translate('myCoupons.endDateAsc'),
            this.translation.translate('myCoupons.endDateDesc'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 4), textByStartDateAsc = _b[0], textByStartDateDesc = _b[1], textByEndDateAsc = _b[2], textByEndDateDesc = _b[3];
            return {
                byStartDateAsc: textByStartDateAsc,
                byStartDateDesc: textByStartDateDesc,
                byEndDateAsc: textByEndDateAsc,
                byEndDateDesc: textByEndDateDesc,
            };
        })));
    };
    MyCouponsComponentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    MyCouponsComponentService.ctorParameters = function () { return [
        { type: RoutingService },
        { type: TranslationService }
    ]; };
    /** @nocollapse */ MyCouponsComponentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MyCouponsComponentService_Factory() { return new MyCouponsComponentService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.TranslationService)); }, token: MyCouponsComponentService, providedIn: "root" });
    return MyCouponsComponentService;
}());
export { MyCouponsComponentService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY291cG9ucy5jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9teS1jb3Vwb25zL215LWNvdXBvbnMuY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxjQUFjLEVBQ2Qsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUVyQztJQWNFLG1DQUNZLGNBQThCLEVBQzlCLFdBQStCO1FBRC9CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFMeEIsY0FBUyxHQUFHLFlBQVksQ0FBQztRQUN6Qix5QkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztJQUs5RCxDQUFDOzs7OztJQUVKLG9EQUFnQjs7OztJQUFoQixVQUFpQixNQUFzQjtRQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FDcEI7WUFDRSxPQUFPLEVBQUUsUUFBUTtZQUNqQixNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1NBQ2pELEVBQ0QsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUNoQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sb0RBQWdCOzs7OztJQUF4QixVQUF5QixNQUFzQjtRQUM3QyxPQUFPLE1BQU0sQ0FBQyxxQkFBcUI7WUFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFRCxpREFBYTs7O0lBQWI7UUFNRSxPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQztZQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQztZQUNyRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQztZQUNsRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQztTQUNwRCxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFDRCxVQUFDLEVBS0E7Z0JBTEEsMEJBS0EsRUFKQywwQkFBa0IsRUFDbEIsMkJBQW1CLEVBQ25CLHdCQUFnQixFQUNoQix5QkFBaUI7WUFFakIsT0FBTztnQkFDTCxjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxlQUFlLEVBQUUsbUJBQW1CO2dCQUNwQyxZQUFZLEVBQUUsZ0JBQWdCO2dCQUM5QixhQUFhLEVBQUUsaUJBQWlCO2FBQ2pDLENBQUM7UUFDSixDQUFDLEVBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBL0RGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVEMsY0FBYztnQkFDZCxrQkFBa0I7OztvQ0FKcEI7Q0EwRUMsQUFoRUQsSUFnRUM7U0E3RFkseUJBQXlCOzs7SUFDcEMsK0NBS0c7Ozs7O0lBRUgsOENBQTRDOzs7OztJQUM1Qyx5REFBaUU7Ozs7O0lBRy9ELG1EQUF3Qzs7Ozs7SUFDeEMsZ0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ3VzdG9tZXJDb3Vwb24sXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9PYnNlcnZhYmxlJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE15Q291cG9uc0NvbXBvbmVudFNlcnZpY2Uge1xuICBzb3J0TGFiZWxzOiBPYnNlcnZhYmxlPHtcbiAgICBieVN0YXJ0RGF0ZUFzYzogc3RyaW5nO1xuICAgIGJ5U3RhcnREYXRlRGVzYzogc3RyaW5nO1xuICAgIGJ5RW5kRGF0ZUFzYzogc3RyaW5nO1xuICAgIGJ5RW5kRGF0ZURlc2M6IHN0cmluZztcbiAgfT47XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IFJFTEVWQU5DRSA9ICc6cmVsZXZhbmNlJztcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IENVU1RPTUVSX0NPVVBPTl9DT0RFID0gJzpjdXN0b21lckNvdXBvbkNvZGU6JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBsYXVuY2hTZWFyY2hQYWdlKGNvdXBvbjogQ3VzdG9tZXJDb3Vwb24pOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKFxuICAgICAge1xuICAgICAgICBjeFJvdXRlOiAnc2VhcmNoJyxcbiAgICAgICAgcGFyYW1zOiB7IHF1ZXJ5OiB0aGlzLmJ1aWxkU2VhcmNoUGFyYW0oY291cG9uKSB9LFxuICAgICAgfSxcbiAgICAgIHsgY291cG9uY29kZTogY291cG9uLmNvdXBvbklkIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFNlYXJjaFBhcmFtKGNvdXBvbjogQ3VzdG9tZXJDb3Vwb24pOiBzdHJpbmcge1xuICAgIHJldHVybiBjb3Vwb24uYWxsUHJvZHVjdHNBcHBsaWNhYmxlXG4gICAgICA/IHRoaXMuUkVMRVZBTkNFXG4gICAgICA6IHRoaXMuUkVMRVZBTkNFICsgdGhpcy5DVVNUT01FUl9DT1VQT05fQ09ERSArIGNvdXBvbi5jb3Vwb25JZDtcbiAgfVxuXG4gIGdldFNvcnRMYWJlbHMoKTogT2JzZXJ2YWJsZTx7XG4gICAgYnlTdGFydERhdGVBc2M6IHN0cmluZztcbiAgICBieVN0YXJ0RGF0ZURlc2M6IHN0cmluZztcbiAgICBieUVuZERhdGVBc2M6IHN0cmluZztcbiAgICBieUVuZERhdGVEZXNjOiBzdHJpbmc7XG4gIH0+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnbXlDb3Vwb25zLnN0YXJ0RGF0ZUFzYycpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ215Q291cG9ucy5zdGFydERhdGVEZXNjJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnbXlDb3Vwb25zLmVuZERhdGVBc2MnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdteUNvdXBvbnMuZW5kRGF0ZURlc2MnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW1xuICAgICAgICAgIHRleHRCeVN0YXJ0RGF0ZUFzYyxcbiAgICAgICAgICB0ZXh0QnlTdGFydERhdGVEZXNjLFxuICAgICAgICAgIHRleHRCeUVuZERhdGVBc2MsXG4gICAgICAgICAgdGV4dEJ5RW5kRGF0ZURlc2MsXG4gICAgICAgIF0pID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnlTdGFydERhdGVBc2M6IHRleHRCeVN0YXJ0RGF0ZUFzYyxcbiAgICAgICAgICAgIGJ5U3RhcnREYXRlRGVzYzogdGV4dEJ5U3RhcnREYXRlRGVzYyxcbiAgICAgICAgICAgIGJ5RW5kRGF0ZUFzYzogdGV4dEJ5RW5kRGF0ZUFzYyxcbiAgICAgICAgICAgIGJ5RW5kRGF0ZURlc2M6IHRleHRCeUVuZERhdGVEZXNjLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=