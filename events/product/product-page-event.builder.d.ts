import { EventService, ProductSearchService, ProductService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CategoryPageResultsEvent, ProductDetailsPageEvent, SearchPageResultsEvent } from './product-page.events';
export declare class ProductPageEventBuilder {
    protected eventService: EventService;
    protected productService: ProductService;
    protected productSearchService: ProductSearchService;
    constructor(eventService: EventService, productService: ProductService, productSearchService: ProductSearchService);
    protected register(): void;
    protected buildProductDetailsPageEvent(): Observable<ProductDetailsPageEvent>;
    protected buildCategoryResultsPageEvent(): Observable<CategoryPageResultsEvent>;
    protected buildSearchPageResultsEvent(): Observable<SearchPageResultsEvent>;
}
