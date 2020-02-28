import { ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { GoogleMapRendererService } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class StoreFinderMapComponent implements OnChanges {
    private googleMapRendererService;
    mapElement: ElementRef;
    locations: any[];
    selectedStoreItem: EventEmitter<number>;
    constructor(googleMapRendererService: GoogleMapRendererService);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Sets the center of the map to the given location
     * @param latitude latitude of the new center
     * @param longitude longitude of the new center
     */
    centerMap(latitude: number, longitude: number): void;
    renderMap(): void;
    private selectStoreItemClickHandle;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreFinderMapComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StoreFinderMapComponent, "cx-store-finder-map", never, {
    "locations": "locations";
}, {
    "selectedStoreItem": "selectedStoreItem";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHb29nbGVNYXBSZW5kZXJlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3RvcmVGaW5kZXJNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIHByaXZhdGUgZ29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlO1xuICAgIG1hcEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gICAgbG9jYXRpb25zOiBhbnlbXTtcbiAgICBzZWxlY3RlZFN0b3JlSXRlbTogRXZlbnRFbWl0dGVyPG51bWJlcj47XG4gICAgY29uc3RydWN0b3IoZ29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlOiBHb29nbGVNYXBSZW5kZXJlclNlcnZpY2UpO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNlbnRlciBvZiB0aGUgbWFwIHRvIHRoZSBnaXZlbiBsb2NhdGlvblxuICAgICAqIEBwYXJhbSBsYXRpdHVkZSBsYXRpdHVkZSBvZiB0aGUgbmV3IGNlbnRlclxuICAgICAqIEBwYXJhbSBsb25naXR1ZGUgbG9uZ2l0dWRlIG9mIHRoZSBuZXcgY2VudGVyXG4gICAgICovXG4gICAgY2VudGVyTWFwKGxhdGl0dWRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyKTogdm9pZDtcbiAgICByZW5kZXJNYXAoKTogdm9pZDtcbiAgICBwcml2YXRlIHNlbGVjdFN0b3JlSXRlbUNsaWNrSGFuZGxlO1xufVxuIl19