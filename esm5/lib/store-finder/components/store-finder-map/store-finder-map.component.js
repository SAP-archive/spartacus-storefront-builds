/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input, Output, EventEmitter, } from '@angular/core';
import { GoogleMapRendererService } from '@spartacus/core';
var StoreFinderMapComponent = /** @class */ (function () {
    function StoreFinderMapComponent(googleMapRendererService) {
        this.googleMapRendererService = googleMapRendererService;
        this.selectedStoreItem = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StoreFinderMapComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes.locations && this.locations) {
            this.googleMapRendererService.renderMap(this.mapElement.nativeElement, this.locations, function (markerIndex) {
                _this.selectStoreItemClickHandle(markerIndex);
            });
        }
    };
    /**
     * Sets the center of the map to the given location
     * @param latitude latitude of the new center
     * @param longitude longitude of the new center
     */
    /**
     * Sets the center of the map to the given location
     * @param {?} latitude latitude of the new center
     * @param {?} longitude longitude of the new center
     * @return {?}
     */
    StoreFinderMapComponent.prototype.centerMap = /**
     * Sets the center of the map to the given location
     * @param {?} latitude latitude of the new center
     * @param {?} longitude longitude of the new center
     * @return {?}
     */
    function (latitude, longitude) {
        this.googleMapRendererService.centerMap(latitude, longitude);
    };
    /**
     * @private
     * @param {?} markerIndex
     * @return {?}
     */
    StoreFinderMapComponent.prototype.selectStoreItemClickHandle = /**
     * @private
     * @param {?} markerIndex
     * @return {?}
     */
    function (markerIndex) {
        this.selectedStoreItem.emit(markerIndex);
    };
    StoreFinderMapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-map',
                    template: "<div #mapElement class=\"cx-store-map\"></div>\n",
                    styles: [".cx-store-map{width:var(--cx-width,45.5rem);height:var(--cx-height,31.25rem)}"]
                }] }
    ];
    /** @nocollapse */
    StoreFinderMapComponent.ctorParameters = function () { return [
        { type: GoogleMapRendererService }
    ]; };
    StoreFinderMapComponent.propDecorators = {
        mapElement: [{ type: ViewChild, args: ['mapElement',] }],
        locations: [{ type: Input }],
        selectedStoreItem: [{ type: Output }]
    };
    return StoreFinderMapComponent;
}());
export { StoreFinderMapComponent };
if (false) {
    /** @type {?} */
    StoreFinderMapComponent.prototype.mapElement;
    /** @type {?} */
    StoreFinderMapComponent.prototype.locations;
    /** @type {?} */
    StoreFinderMapComponent.prototype.selectedStoreItem;
    /**
     * @type {?}
     * @private
     */
    StoreFinderMapComponent.prototype.googleMapRendererService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvc3RvcmUtZmluZGVyL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLW1hcC9zdG9yZS1maW5kZXItbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULEtBQUssRUFHTCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNEO0lBYUUsaUNBQW9CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBRnRFLHNCQUFpQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRVksQ0FBQzs7Ozs7SUFFMUUsNkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQVVDO1FBVEMsSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdkMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCLElBQUksQ0FBQyxTQUFTLEVBQ2QsVUFBQSxXQUFXO2dCQUNULEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMvQyxDQUFDLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCwyQ0FBUzs7Ozs7O0lBQVQsVUFBVSxRQUFnQixFQUFFLFNBQWlCO1FBQzNDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7OztJQUVPLDREQUEwQjs7Ozs7SUFBbEMsVUFBbUMsV0FBbUI7UUFDcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDOztnQkF0Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLDREQUFnRDs7aUJBRWpEOzs7O2dCQU5RLHdCQUF3Qjs7OzZCQVE5QixTQUFTLFNBQUMsWUFBWTs0QkFFdEIsS0FBSztvQ0FFTCxNQUFNOztJQTZCVCw4QkFBQztDQUFBLEFBdkNELElBdUNDO1NBbENZLHVCQUF1Qjs7O0lBQ2xDLDZDQUN1Qjs7SUFDdkIsNENBQ2lCOztJQUNqQixvREFDNkQ7Ozs7O0lBRWpELDJEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHb29nbGVNYXBSZW5kZXJlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItbWFwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1tYXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdG9yZS1maW5kZXItbWFwLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyTWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnbWFwRWxlbWVudCcpXG4gIG1hcEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpXG4gIGxvY2F0aW9uczogYW55W107XG4gIEBPdXRwdXQoKVxuICBzZWxlY3RlZFN0b3JlSXRlbTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnb29nbGVNYXBSZW5kZXJlclNlcnZpY2U6IEdvb2dsZU1hcFJlbmRlcmVyU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubG9jYXRpb25zICYmIHRoaXMubG9jYXRpb25zKSB7XG4gICAgICB0aGlzLmdvb2dsZU1hcFJlbmRlcmVyU2VydmljZS5yZW5kZXJNYXAoXG4gICAgICAgIHRoaXMubWFwRWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLmxvY2F0aW9ucyxcbiAgICAgICAgbWFya2VySW5kZXggPT4ge1xuICAgICAgICAgIHRoaXMuc2VsZWN0U3RvcmVJdGVtQ2xpY2tIYW5kbGUobWFya2VySW5kZXgpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjZW50ZXIgb2YgdGhlIG1hcCB0byB0aGUgZ2l2ZW4gbG9jYXRpb25cbiAgICogQHBhcmFtIGxhdGl0dWRlIGxhdGl0dWRlIG9mIHRoZSBuZXcgY2VudGVyXG4gICAqIEBwYXJhbSBsb25naXR1ZGUgbG9uZ2l0dWRlIG9mIHRoZSBuZXcgY2VudGVyXG4gICAqL1xuICBjZW50ZXJNYXAobGF0aXR1ZGU6IG51bWJlciwgbG9uZ2l0dWRlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdvb2dsZU1hcFJlbmRlcmVyU2VydmljZS5jZW50ZXJNYXAobGF0aXR1ZGUsIGxvbmdpdHVkZSk7XG4gIH1cblxuICBwcml2YXRlIHNlbGVjdFN0b3JlSXRlbUNsaWNrSGFuZGxlKG1hcmtlckluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnNlbGVjdGVkU3RvcmVJdGVtLmVtaXQobWFya2VySW5kZXgpO1xuICB9XG59XG4iXX0=