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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreFinderMapComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StoreFinderMapComponent, "cx-store-finder-map", never, { "locations": "locations"; }, { "selectedStoreItem": "selectedStoreItem"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0b3JlRmluZGVyTWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBwcml2YXRlIGdvb2dsZU1hcFJlbmRlcmVyU2VydmljZTtcbiAgICBtYXBFbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIGxvY2F0aW9uczogYW55W107XG4gICAgc2VsZWN0ZWRTdG9yZUl0ZW06IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xuICAgIGNvbnN0cnVjdG9yKGdvb2dsZU1hcFJlbmRlcmVyU2VydmljZTogR29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlKTtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjZW50ZXIgb2YgdGhlIG1hcCB0byB0aGUgZ2l2ZW4gbG9jYXRpb25cbiAgICAgKiBAcGFyYW0gbGF0aXR1ZGUgbGF0aXR1ZGUgb2YgdGhlIG5ldyBjZW50ZXJcbiAgICAgKiBAcGFyYW0gbG9uZ2l0dWRlIGxvbmdpdHVkZSBvZiB0aGUgbmV3IGNlbnRlclxuICAgICAqL1xuICAgIGNlbnRlck1hcChsYXRpdHVkZTogbnVtYmVyLCBsb25naXR1ZGU6IG51bWJlcik6IHZvaWQ7XG4gICAgcmVuZGVyTWFwKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBzZWxlY3RTdG9yZUl0ZW1DbGlja0hhbmRsZTtcbn1cbiJdfQ==