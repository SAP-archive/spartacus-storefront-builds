/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
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
        if (changes.locations && this.locations) {
            this.renderMap();
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
     * @return {?}
     */
    StoreFinderMapComponent.prototype.renderMap = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.googleMapRendererService.renderMap(this.mapElement.nativeElement, this.locations, (/**
         * @param {?} markerIndex
         * @return {?}
         */
        function (markerIndex) {
            _this.selectStoreItemClickHandle(markerIndex);
        }));
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
                    template: "<div #mapElement class=\"cx-store-map\"></div>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderMapComponent.ctorParameters = function () { return [
        { type: GoogleMapRendererService }
    ]; };
    StoreFinderMapComponent.propDecorators = {
        mapElement: [{ type: ViewChild, args: ['mapElement', { static: true },] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1tYXAvc3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzRDtJQVlFLGlDQUFvQix3QkFBa0Q7UUFBbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUZ0RSxzQkFBaUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVZLENBQUM7Ozs7O0lBRTFFLDZDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN2QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILDJDQUFTOzs7Ozs7SUFBVCxVQUFVLFFBQWdCLEVBQUUsU0FBaUI7UUFDM0MsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7OztJQUVELDJDQUFTOzs7SUFBVDtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCLElBQUksQ0FBQyxTQUFTOzs7O1FBQ2QsVUFBQSxXQUFXO1lBQ1QsS0FBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sNERBQTBCOzs7OztJQUFsQyxVQUFtQyxXQUFtQjtRQUNwRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsNERBQWdEO2lCQUNqRDs7OztnQkFMUSx3QkFBd0I7Ozs2QkFPOUIsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NEJBRXhDLEtBQUs7b0NBRUwsTUFBTTs7SUFpQ1QsOEJBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXRDWSx1QkFBdUI7OztJQUNsQyw2Q0FDdUI7O0lBQ3ZCLDRDQUNpQjs7SUFDakIsb0RBQzZEOzs7OztJQUVqRCwyREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLW1hcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItbWFwLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdtYXBFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgbWFwRWxlbWVudDogRWxlbWVudFJlZjtcbiAgQElucHV0KClcbiAgbG9jYXRpb25zOiBhbnlbXTtcbiAgQE91dHB1dCgpXG4gIHNlbGVjdGVkU3RvcmVJdGVtOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdvb2dsZU1hcFJlbmRlcmVyU2VydmljZTogR29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5sb2NhdGlvbnMgJiYgdGhpcy5sb2NhdGlvbnMpIHtcbiAgICAgIHRoaXMucmVuZGVyTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNlbnRlciBvZiB0aGUgbWFwIHRvIHRoZSBnaXZlbiBsb2NhdGlvblxuICAgKiBAcGFyYW0gbGF0aXR1ZGUgbGF0aXR1ZGUgb2YgdGhlIG5ldyBjZW50ZXJcbiAgICogQHBhcmFtIGxvbmdpdHVkZSBsb25naXR1ZGUgb2YgdGhlIG5ldyBjZW50ZXJcbiAgICovXG4gIGNlbnRlck1hcChsYXRpdHVkZTogbnVtYmVyLCBsb25naXR1ZGU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZ29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlLmNlbnRlck1hcChsYXRpdHVkZSwgbG9uZ2l0dWRlKTtcbiAgfVxuXG4gIHJlbmRlck1hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmdvb2dsZU1hcFJlbmRlcmVyU2VydmljZS5yZW5kZXJNYXAoXG4gICAgICB0aGlzLm1hcEVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMubG9jYXRpb25zLFxuICAgICAgbWFya2VySW5kZXggPT4ge1xuICAgICAgICB0aGlzLnNlbGVjdFN0b3JlSXRlbUNsaWNrSGFuZGxlKG1hcmtlckluZGV4KTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RTdG9yZUl0ZW1DbGlja0hhbmRsZShtYXJrZXJJbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWxlY3RlZFN0b3JlSXRlbS5lbWl0KG1hcmtlckluZGV4KTtcbiAgfVxufVxuIl19