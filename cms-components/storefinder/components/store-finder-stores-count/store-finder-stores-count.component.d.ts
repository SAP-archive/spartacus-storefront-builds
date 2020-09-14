import { OnInit } from '@angular/core';
import { StoreFinderService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class StoreFinderStoresCountComponent implements OnInit {
    private storeFinderService;
    locations$: Observable<any>;
    isLoading$: Observable<boolean>;
    constructor(storeFinderService: StoreFinderService);
    ngOnInit(): void;
}
