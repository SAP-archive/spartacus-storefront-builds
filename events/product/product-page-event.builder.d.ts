import { EventService, ProductSearchService, ProductService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CategoryPageResultsEvent, ProductDetailsPageEvent, SearchPageResultsEvent } from './product-page.events';
import * as ɵngcc0 from '@angular/core';
export declare class ProductPageEventBuilder {
    protected eventService: EventService;
    protected productService: ProductService;
    protected productSearchService: ProductSearchService;
    constructor(eventService: EventService, productService: ProductService, productSearchService: ProductSearchService);
    protected register(): void;
    protected buildProductDetailsPageEvent(): Observable<ProductDetailsPageEvent>;
    protected buildCategoryResultsPageEvent(): Observable<CategoryPageResultsEvent>;
    protected buildSearchPageResultsEvent(): Observable<SearchPageResultsEvent>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductPageEventBuilder, never>;
}

//# sourceMappingURL=product-page-event.builder.d.ts.map