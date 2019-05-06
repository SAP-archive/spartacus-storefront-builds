import { ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { GoogleMapRendererService } from '@spartacus/core';
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
    private selectStoreItemClickHandle;
}
