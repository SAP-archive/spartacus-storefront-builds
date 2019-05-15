import { CmsProductCarouselComponent, Product, ProductService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
export declare class ProductCarouselService {
    protected component: CmsComponentData<CmsProductCarouselComponent>;
    private productService;
    private items$;
    private title$;
    constructor(component: CmsComponentData<CmsProductCarouselComponent>, productService: ProductService);
    getTitle(): Observable<string>;
    fetchTitle(): void;
    getItems(): Observable<Observable<Product>[]>;
    /**
     * Maps the item codes from CMS component to an array of `Product` observables.
     */
    fetchItems(): void;
}
