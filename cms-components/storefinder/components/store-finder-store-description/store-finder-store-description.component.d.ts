import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreDataService, StoreFinderService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { AbstractStoreItemComponent } from '../abstract-store-item/abstract-store-item.component';
export declare class StoreFinderStoreDescriptionComponent extends AbstractStoreItemComponent implements OnInit {
    protected storeDataService: StoreDataService;
    protected storeFinderService: StoreFinderService;
    private route;
    location$: Observable<any>;
    isLoading$: Observable<any>;
    constructor(storeDataService: StoreDataService, storeFinderService: StoreFinderService, route: ActivatedRoute);
    ngOnInit(): void;
    requestStoresData(): void;
}
