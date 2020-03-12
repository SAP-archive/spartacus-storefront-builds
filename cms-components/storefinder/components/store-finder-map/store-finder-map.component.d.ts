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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdvb2dsZU1hcFJlbmRlcmVyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdG9yZUZpbmRlck1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgcHJpdmF0ZSBnb29nbGVNYXBSZW5kZXJlclNlcnZpY2U7XG4gICAgbWFwRWxlbWVudDogRWxlbWVudFJlZjtcbiAgICBsb2NhdGlvbnM6IGFueVtdO1xuICAgIHNlbGVjdGVkU3RvcmVJdGVtOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcbiAgICBjb25zdHJ1Y3Rvcihnb29nbGVNYXBSZW5kZXJlclNlcnZpY2U6IEdvb2dsZU1hcFJlbmRlcmVyU2VydmljZSk7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY2VudGVyIG9mIHRoZSBtYXAgdG8gdGhlIGdpdmVuIGxvY2F0aW9uXG4gICAgICogQHBhcmFtIGxhdGl0dWRlIGxhdGl0dWRlIG9mIHRoZSBuZXcgY2VudGVyXG4gICAgICogQHBhcmFtIGxvbmdpdHVkZSBsb25naXR1ZGUgb2YgdGhlIG5ldyBjZW50ZXJcbiAgICAgKi9cbiAgICBjZW50ZXJNYXAobGF0aXR1ZGU6IG51bWJlciwgbG9uZ2l0dWRlOiBudW1iZXIpOiB2b2lkO1xuICAgIHJlbmRlck1hcCgpOiB2b2lkO1xuICAgIHByaXZhdGUgc2VsZWN0U3RvcmVJdGVtQ2xpY2tIYW5kbGU7XG59XG4iXX0=