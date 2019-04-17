import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreFinderService } from '@spartacus/core';
export declare class StoreFinderStoresCountComponent implements OnInit {
    private storeFinderService;
    locations$: Observable<any>;
    isLoading$: Observable<boolean>;
    constructor(storeFinderService: StoreFinderService);
    ngOnInit(): void;
}
