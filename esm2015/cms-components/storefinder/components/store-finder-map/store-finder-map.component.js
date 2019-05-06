/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1tYXAvc3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU0zRCxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBUWxDLFlBQW9CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBRnRFLHNCQUFpQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRVksQ0FBQzs7Ozs7SUFFMUUsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixJQUFJLENBQUMsU0FBUyxFQUNkLFdBQVcsQ0FBQyxFQUFFO2dCQUNaLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMvQyxDQUFDLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7OztJQU9ELFNBQVMsQ0FBQyxRQUFnQixFQUFFLFNBQWlCO1FBQzNDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7OztJQUVPLDBCQUEwQixDQUFDLFdBQW1CO1FBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7O1lBckNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiw0REFBZ0Q7YUFDakQ7Ozs7WUFMUSx3QkFBd0I7Ozt5QkFPOUIsU0FBUyxTQUFDLFlBQVk7d0JBRXRCLEtBQUs7Z0NBRUwsTUFBTTs7OztJQUpQLDZDQUN1Qjs7SUFDdkIsNENBQ2lCOztJQUNqQixvREFDNkQ7Ozs7O0lBRWpELDJEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHb29nbGVNYXBSZW5kZXJlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItbWFwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1tYXAuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlck1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ21hcEVsZW1lbnQnKVxuICBtYXBFbGVtZW50OiBFbGVtZW50UmVmO1xuICBASW5wdXQoKVxuICBsb2NhdGlvbnM6IGFueVtdO1xuICBAT3V0cHV0KClcbiAgc2VsZWN0ZWRTdG9yZUl0ZW06IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlOiBHb29nbGVNYXBSZW5kZXJlclNlcnZpY2UpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmxvY2F0aW9ucyAmJiB0aGlzLmxvY2F0aW9ucykge1xuICAgICAgdGhpcy5nb29nbGVNYXBSZW5kZXJlclNlcnZpY2UucmVuZGVyTWFwKFxuICAgICAgICB0aGlzLm1hcEVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5sb2NhdGlvbnMsXG4gICAgICAgIG1hcmtlckluZGV4ID0+IHtcbiAgICAgICAgICB0aGlzLnNlbGVjdFN0b3JlSXRlbUNsaWNrSGFuZGxlKG1hcmtlckluZGV4KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY2VudGVyIG9mIHRoZSBtYXAgdG8gdGhlIGdpdmVuIGxvY2F0aW9uXG4gICAqIEBwYXJhbSBsYXRpdHVkZSBsYXRpdHVkZSBvZiB0aGUgbmV3IGNlbnRlclxuICAgKiBAcGFyYW0gbG9uZ2l0dWRlIGxvbmdpdHVkZSBvZiB0aGUgbmV3IGNlbnRlclxuICAgKi9cbiAgY2VudGVyTWFwKGxhdGl0dWRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5nb29nbGVNYXBSZW5kZXJlclNlcnZpY2UuY2VudGVyTWFwKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RTdG9yZUl0ZW1DbGlja0hhbmRsZShtYXJrZXJJbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWxlY3RlZFN0b3JlSXRlbS5lbWl0KG1hcmtlckluZGV4KTtcbiAgfVxufVxuIl19