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
        this.googleMapRendererService.renderMap(this.mapElement.nativeElement, this.locations, markerIndex => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1tYXAvc3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTTNELElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBUWxDLFlBQW9CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBRnRFLHNCQUFpQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRVksQ0FBQztJQUUxRSxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsUUFBZ0IsRUFBRSxTQUFpQjtRQUMzQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixJQUFJLENBQUMsU0FBUyxFQUNkLFdBQVcsQ0FBQyxFQUFFO1lBQ1osSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVPLDBCQUEwQixDQUFDLFdBQW1CO1FBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNGLENBQUE7O1lBOUIrQyx3QkFBd0I7O0FBTnRFO0lBREMsU0FBUyxDQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzsyREFDbkI7QUFFdkI7SUFEQyxLQUFLLEVBQUU7MERBQ1M7QUFFakI7SUFEQyxNQUFNLEVBQUU7a0VBQ29EO0FBTmxELHVCQUF1QjtJQUpuQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLDREQUFnRDtLQUNqRCxDQUFDO0dBQ1csdUJBQXVCLENBc0NuQztTQXRDWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLW1hcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItbWFwLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdtYXBFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgbWFwRWxlbWVudDogRWxlbWVudFJlZjtcbiAgQElucHV0KClcbiAgbG9jYXRpb25zOiBhbnlbXTtcbiAgQE91dHB1dCgpXG4gIHNlbGVjdGVkU3RvcmVJdGVtOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdvb2dsZU1hcFJlbmRlcmVyU2VydmljZTogR29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5sb2NhdGlvbnMgJiYgdGhpcy5sb2NhdGlvbnMpIHtcbiAgICAgIHRoaXMucmVuZGVyTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNlbnRlciBvZiB0aGUgbWFwIHRvIHRoZSBnaXZlbiBsb2NhdGlvblxuICAgKiBAcGFyYW0gbGF0aXR1ZGUgbGF0aXR1ZGUgb2YgdGhlIG5ldyBjZW50ZXJcbiAgICogQHBhcmFtIGxvbmdpdHVkZSBsb25naXR1ZGUgb2YgdGhlIG5ldyBjZW50ZXJcbiAgICovXG4gIGNlbnRlck1hcChsYXRpdHVkZTogbnVtYmVyLCBsb25naXR1ZGU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZ29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlLmNlbnRlck1hcChsYXRpdHVkZSwgbG9uZ2l0dWRlKTtcbiAgfVxuXG4gIHJlbmRlck1hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmdvb2dsZU1hcFJlbmRlcmVyU2VydmljZS5yZW5kZXJNYXAoXG4gICAgICB0aGlzLm1hcEVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMubG9jYXRpb25zLFxuICAgICAgbWFya2VySW5kZXggPT4ge1xuICAgICAgICB0aGlzLnNlbGVjdFN0b3JlSXRlbUNsaWNrSGFuZGxlKG1hcmtlckluZGV4KTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RTdG9yZUl0ZW1DbGlja0hhbmRsZShtYXJrZXJJbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWxlY3RlZFN0b3JlSXRlbS5lbWl0KG1hcmtlckluZGV4KTtcbiAgfVxufVxuIl19