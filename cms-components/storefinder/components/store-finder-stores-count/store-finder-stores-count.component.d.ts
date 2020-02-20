import { OnInit } from '@angular/core';
import { StoreFinderService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class StoreFinderStoresCountComponent implements OnInit {
    private storeFinderService;
    locations$: Observable<any>;
    isLoading$: Observable<boolean>;
    constructor(storeFinderService: StoreFinderService);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreFinderStoresCountComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StoreFinderStoresCountComponent, "cx-store-finder-stores-count", never, {}, {}, never>;
}

//# sourceMappingURL=store-finder-stores-count.component.d.ts.map