/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input, Output, EventEmitter, } from '@angular/core';
import { GoogleMapRendererService } from '@spartacus/core';
export class StoreFinderMapComponent {
    /**
     * @param {?} googleMapRendererService
     */
    constructor(googleMapRendererService) {
        this.googleMapRendererService = googleMapRendererService;
        this.selectedStoreItem = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.locations && this.locations) {
            this.googleMapRendererService.renderMap(this.mapElement.nativeElement, this.locations, markerIndex => {
                this.selectStoreItemClickHandle(markerIndex);
            });
        }
    }
    /**
     * Sets the center of the map to the given location
     * @param {?} latitude latitude of the new center
     * @param {?} longitude longitude of the new center
     * @return {?}
     */
    centerMap(latitude, longitude) {
        this.googleMapRendererService.centerMap(latitude, longitude);
    }
    /**
     * @private
     * @param {?} markerIndex
     * @return {?}
     */
    selectStoreItemClickHandle(markerIndex) {
        this.selectedStoreItem.emit(markerIndex);
    }
}
StoreFinderMapComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-map',
                template: "<div #mapElement class=\"cx-store-map\"></div>\n"
            }] }
];
/** @nocollapse */
StoreFinderMapComponent.ctorParameters = () => [
    { type: GoogleMapRendererService }
];
StoreFinderMapComponent.propDecorators = {
    mapElement: [{ type: ViewChild, args: ['mapElement',] }],
    locations: [{ type: Input }],
    selectedStoreItem: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvc3RvcmUtZmluZGVyL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLW1hcC9zdG9yZS1maW5kZXItbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULEtBQUssRUFHTCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTTNELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFRbEMsWUFBb0Isd0JBQWtEO1FBQWxELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFGdEUsc0JBQWlCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFWSxDQUFDOzs7OztJQUUxRSxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdkMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCLElBQUksQ0FBQyxTQUFTLEVBQ2QsV0FBVyxDQUFDLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FDRixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7Ozs7O0lBT0QsU0FBUyxDQUFDLFFBQWdCLEVBQUUsU0FBaUI7UUFDM0MsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7O0lBRU8sMEJBQTBCLENBQUMsV0FBbUI7UUFDcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDREQUFnRDthQUNqRDs7OztZQUxRLHdCQUF3Qjs7O3lCQU85QixTQUFTLFNBQUMsWUFBWTt3QkFFdEIsS0FBSztnQ0FFTCxNQUFNOzs7O0lBSlAsNkNBQ3VCOztJQUN2Qiw0Q0FDaUI7O0lBQ2pCLG9EQUM2RDs7Ozs7SUFFakQsMkRBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdvb2dsZU1hcFJlbmRlcmVyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlLWZpbmRlci1tYXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyTWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnbWFwRWxlbWVudCcpXG4gIG1hcEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpXG4gIGxvY2F0aW9uczogYW55W107XG4gIEBPdXRwdXQoKVxuICBzZWxlY3RlZFN0b3JlSXRlbTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnb29nbGVNYXBSZW5kZXJlclNlcnZpY2U6IEdvb2dsZU1hcFJlbmRlcmVyU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubG9jYXRpb25zICYmIHRoaXMubG9jYXRpb25zKSB7XG4gICAgICB0aGlzLmdvb2dsZU1hcFJlbmRlcmVyU2VydmljZS5yZW5kZXJNYXAoXG4gICAgICAgIHRoaXMubWFwRWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLmxvY2F0aW9ucyxcbiAgICAgICAgbWFya2VySW5kZXggPT4ge1xuICAgICAgICAgIHRoaXMuc2VsZWN0U3RvcmVJdGVtQ2xpY2tIYW5kbGUobWFya2VySW5kZXgpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjZW50ZXIgb2YgdGhlIG1hcCB0byB0aGUgZ2l2ZW4gbG9jYXRpb25cbiAgICogQHBhcmFtIGxhdGl0dWRlIGxhdGl0dWRlIG9mIHRoZSBuZXcgY2VudGVyXG4gICAqIEBwYXJhbSBsb25naXR1ZGUgbG9uZ2l0dWRlIG9mIHRoZSBuZXcgY2VudGVyXG4gICAqL1xuICBjZW50ZXJNYXAobGF0aXR1ZGU6IG51bWJlciwgbG9uZ2l0dWRlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdvb2dsZU1hcFJlbmRlcmVyU2VydmljZS5jZW50ZXJNYXAobGF0aXR1ZGUsIGxvbmdpdHVkZSk7XG4gIH1cblxuICBwcml2YXRlIHNlbGVjdFN0b3JlSXRlbUNsaWNrSGFuZGxlKG1hcmtlckluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnNlbGVjdGVkU3RvcmVJdGVtLmVtaXQobWFya2VySW5kZXgpO1xuICB9XG59XG4iXX0=