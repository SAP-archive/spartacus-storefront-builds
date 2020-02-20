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

//# sourceMappingURL=store-finder-map.component.d.ts.map