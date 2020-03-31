import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { GoogleMapRendererService } from '@spartacus/core';
let StoreFinderMapComponent = class StoreFinderMapComponent {
    constructor(googleMapRendererService) {
        this.googleMapRendererService = googleMapRendererService;
        this.selectedStoreItem = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.locations && this.locations) {
            this.renderMap();
        }
    }
    /**
     * Sets the center of the map to the given location
     * @param latitude latitude of the new center
     * @param longitude longitude of the new center
     */
    centerMap(latitude, longitude) {
        this.googleMapRendererService.centerMap(latitude, longitude);
    }
    renderMap() {
        this.googleMapRendererService.renderMap(this.mapElement.nativeElement, this.locations, (markerIndex) => {
            this.selectStoreItemClickHandle(markerIndex);
        });
    }
    selectStoreItemClickHandle(markerIndex) {
        this.selectedStoreItem.emit(markerIndex);
    }
};
StoreFinderMapComponent.ctorParameters = () => [
    { type: GoogleMapRendererService }
];
__decorate([
    ViewChild('mapElement', { static: true })
], StoreFinderMapComponent.prototype, "mapElement", void 0);
__decorate([
    Input()
], StoreFinderMapComponent.prototype, "locations", void 0);
__decorate([
    Output()
], StoreFinderMapComponent.prototype, "selectedStoreItem", void 0);
StoreFinderMapComponent = __decorate([
    Component({
        selector: 'cx-store-finder-map',
        template: "<div #mapElement class=\"cx-store-map\"></div>\n"
    })
], StoreFinderMapComponent);
export { StoreFinderMapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1tYXAvc3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTTNELElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBUWxDLFlBQW9CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBRnRFLHNCQUFpQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRVksQ0FBQztJQUUxRSxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsUUFBZ0IsRUFBRSxTQUFpQjtRQUMzQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixJQUFJLENBQUMsU0FBUyxFQUNkLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDZCxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRU8sMEJBQTBCLENBQUMsV0FBbUI7UUFDcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0YsQ0FBQTs7WUE5QitDLHdCQUF3Qjs7QUFOdEU7SUFEQyxTQUFTLENBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzJEQUNuQjtBQUV2QjtJQURDLEtBQUssRUFBRTswREFDUztBQUVqQjtJQURDLE1BQU0sRUFBRTtrRUFDb0Q7QUFObEQsdUJBQXVCO0lBSm5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsNERBQWdEO0tBQ2pELENBQUM7R0FDVyx1QkFBdUIsQ0FzQ25DO1NBdENZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHb29nbGVNYXBSZW5kZXJlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItbWFwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1tYXAuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlck1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ21hcEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBtYXBFbGVtZW50OiBFbGVtZW50UmVmO1xuICBASW5wdXQoKVxuICBsb2NhdGlvbnM6IGFueVtdO1xuICBAT3V0cHV0KClcbiAgc2VsZWN0ZWRTdG9yZUl0ZW06IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlOiBHb29nbGVNYXBSZW5kZXJlclNlcnZpY2UpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmxvY2F0aW9ucyAmJiB0aGlzLmxvY2F0aW9ucykge1xuICAgICAgdGhpcy5yZW5kZXJNYXAoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY2VudGVyIG9mIHRoZSBtYXAgdG8gdGhlIGdpdmVuIGxvY2F0aW9uXG4gICAqIEBwYXJhbSBsYXRpdHVkZSBsYXRpdHVkZSBvZiB0aGUgbmV3IGNlbnRlclxuICAgKiBAcGFyYW0gbG9uZ2l0dWRlIGxvbmdpdHVkZSBvZiB0aGUgbmV3IGNlbnRlclxuICAgKi9cbiAgY2VudGVyTWFwKGxhdGl0dWRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5nb29nbGVNYXBSZW5kZXJlclNlcnZpY2UuY2VudGVyTWFwKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xuICB9XG5cbiAgcmVuZGVyTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuZ29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlLnJlbmRlck1hcChcbiAgICAgIHRoaXMubWFwRWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5sb2NhdGlvbnMsXG4gICAgICAobWFya2VySW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RTdG9yZUl0ZW1DbGlja0hhbmRsZShtYXJrZXJJbmRleCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0U3RvcmVJdGVtQ2xpY2tIYW5kbGUobWFya2VySW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0ZWRTdG9yZUl0ZW0uZW1pdChtYXJrZXJJbmRleCk7XG4gIH1cbn1cbiJdfQ==