import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { ProductSearchService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { RoutingService, CmsSearchBoxComponent } from '@spartacus/core';
export interface SearchBoxConfig {
    maxProducts: number;
    displaySuggestions: boolean;
    maxSuggestions: number;
    minCharactersBeforeRequest: number;
    displayProducts: boolean;
}
export declare class SearchBoxComponentService {
    protected componentData: CmsComponentData<CmsSearchBoxComponent>;
    searchService: ProductSearchService;
    protected routingService: RoutingService;
    defaultConfig: SearchBoxConfig;
    config$: Observable<SearchBoxConfig>;
    queryParam$: Observable<string>;
    constructor(componentData: CmsComponentData<CmsSearchBoxComponent>, searchService: ProductSearchService, routingService: RoutingService);
    typeahead: (text$: Observable<string>) => Observable<any[]>;
    launchSearchPage(query: string): void;
    private fetch;
    private executeSearch;
}
