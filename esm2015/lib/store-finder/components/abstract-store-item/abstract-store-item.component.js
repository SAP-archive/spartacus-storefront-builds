/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
export class AbstractStoreItemComponent {
    /**
     * @param {?} storeDataService
     */
    constructor(storeDataService) {
        this.storeDataService = storeDataService;
        this.current_date = new Date();
    }
    /**
     * @param {?} location
     * @return {?}
     */
    getDirections(location) {
        /** @type {?} */
        const google_map_url = 'https://www.google.com/maps/dir/Current+Location/';
        /** @type {?} */
        const latitude = this.storeDataService.getStoreLatitude(location);
        /** @type {?} */
        const longitude = this.storeDataService.getStoreLongitude(location);
        return google_map_url + latitude + ',' + longitude;
    }
    /**
     * @param {?} location
     * @return {?}
     */
    getClosingTime(location) {
        return this.storeDataService.getStoreClosingTime(location, this.current_date);
    }
    /**
     * @param {?} location
     * @return {?}
     */
    getOpeningTime(location) {
        return this.storeDataService.getStoreOpeningTime(location, this.current_date);
    }
    /**
     * @param {?} location
     * @return {?}
     */
    isOpen(location) {
        return this.storeDataService.isStoreOpen(location, this.current_date);
    }
}
AbstractStoreItemComponent.propDecorators = {
    location: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AbstractStoreItemComponent.prototype.location;
    /** @type {?} */
    AbstractStoreItemComponent.prototype.current_date;
    /**
     * @type {?}
     * @protected
     */
    AbstractStoreItemComponent.prototype.storeDataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvc3RvcmUtZmluZGVyL2NvbXBvbmVudHMvYWJzdHJhY3Qtc3RvcmUtaXRlbS9hYnN0cmFjdC1zdG9yZS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd0QyxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBS3JDLFlBQXNCLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRi9DLGlCQUFZLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUV3QixDQUFDOzs7OztJQUU1RCxhQUFhLENBQUMsUUFBYTs7Y0FDbkIsY0FBYyxHQUFHLG1EQUFtRDs7Y0FDcEUsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7O2NBQzNELFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDO1FBQ25FLE9BQU8sY0FBYyxHQUFHLFFBQVEsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFFBQWE7UUFDMUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQzlDLFFBQVEsRUFDUixJQUFJLENBQUMsWUFBWSxDQUNsQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsUUFBYTtRQUMxQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FDOUMsUUFBUSxFQUNSLElBQUksQ0FBQyxZQUFZLENBQ2xCLENBQUM7SUFDSixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxRQUFhO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozt1QkE3QkEsS0FBSzs7OztJQUFOLDhDQUNTOztJQUNULGtEQUFtQzs7Ozs7SUFFdkIsc0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlRGF0YVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RTdG9yZUl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKVxuICBsb2NhdGlvbjtcbiAgcmVhZG9ubHkgY3VycmVudF9kYXRlID0gbmV3IERhdGUoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZSkge31cblxuICBnZXREaXJlY3Rpb25zKGxvY2F0aW9uOiBhbnkpOiBzdHJpbmcge1xuICAgIGNvbnN0IGdvb2dsZV9tYXBfdXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9kaXIvQ3VycmVudCtMb2NhdGlvbi8nO1xuICAgIGNvbnN0IGxhdGl0dWRlID0gdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlTGF0aXR1ZGUobG9jYXRpb24pO1xuICAgIGNvbnN0IGxvbmdpdHVkZSA9IHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUxvbmdpdHVkZShsb2NhdGlvbik7XG4gICAgcmV0dXJuIGdvb2dsZV9tYXBfdXJsICsgbGF0aXR1ZGUgKyAnLCcgKyBsb25naXR1ZGU7XG4gIH1cblxuICBnZXRDbG9zaW5nVGltZShsb2NhdGlvbjogYW55KTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUNsb3NpbmdUaW1lKFxuICAgICAgbG9jYXRpb24sXG4gICAgICB0aGlzLmN1cnJlbnRfZGF0ZVxuICAgICk7XG4gIH1cblxuICBnZXRPcGVuaW5nVGltZShsb2NhdGlvbjogYW55KTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZU9wZW5pbmdUaW1lKFxuICAgICAgbG9jYXRpb24sXG4gICAgICB0aGlzLmN1cnJlbnRfZGF0ZVxuICAgICk7XG4gIH1cblxuICBpc09wZW4obG9jYXRpb246IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuaXNTdG9yZU9wZW4obG9jYXRpb24sIHRoaXMuY3VycmVudF9kYXRlKTtcbiAgfVxufVxuIl19