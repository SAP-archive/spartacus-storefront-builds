/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
export class AbstractStoreItemComponent {
    /**
     * @param {?} storeDataService
     */
    constructor(storeDataService) {
        this.storeDataService = storeDataService;
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
     * @param {?} addressParts
     * @return {?}
     */
    getFormattedStoreAddress(addressParts) {
        return addressParts.filter(Boolean).join(', ');
    }
}
AbstractStoreItemComponent.propDecorators = {
    location: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AbstractStoreItemComponent.prototype.location;
    /**
     * @type {?}
     * @protected
     */
    AbstractStoreItemComponent.prototype.storeDataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL2Fic3RyYWN0LXN0b3JlLWl0ZW0vYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEMsTUFBTSxPQUFPLDBCQUEwQjs7OztJQUlyQyxZQUFzQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7Ozs7O0lBRTVELGFBQWEsQ0FBQyxRQUFhOztjQUNuQixjQUFjLEdBQUcsbURBQW1EOztjQUNwRSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQzs7Y0FDM0QsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7UUFDbkUsT0FBTyxjQUFjLEdBQUcsUUFBUSxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCx3QkFBd0IsQ0FBQyxZQUFzQjtRQUM3QyxPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozt1QkFkQSxLQUFLOzs7O0lBQU4sOENBQ1M7Ozs7O0lBRUcsc0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlRGF0YVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RTdG9yZUl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKVxuICBsb2NhdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZSkge31cblxuICBnZXREaXJlY3Rpb25zKGxvY2F0aW9uOiBhbnkpOiBzdHJpbmcge1xuICAgIGNvbnN0IGdvb2dsZV9tYXBfdXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9kaXIvQ3VycmVudCtMb2NhdGlvbi8nO1xuICAgIGNvbnN0IGxhdGl0dWRlID0gdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlTGF0aXR1ZGUobG9jYXRpb24pO1xuICAgIGNvbnN0IGxvbmdpdHVkZSA9IHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUxvbmdpdHVkZShsb2NhdGlvbik7XG4gICAgcmV0dXJuIGdvb2dsZV9tYXBfdXJsICsgbGF0aXR1ZGUgKyAnLCcgKyBsb25naXR1ZGU7XG4gIH1cblxuICBnZXRGb3JtYXR0ZWRTdG9yZUFkZHJlc3MoYWRkcmVzc1BhcnRzOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGFkZHJlc3NQYXJ0cy5maWx0ZXIoQm9vbGVhbikuam9pbignLCAnKTtcbiAgfVxufVxuIl19