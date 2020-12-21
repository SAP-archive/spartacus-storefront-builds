import { CmsProductCarouselComponent as model, Product, ProductScope, ProductService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
export declare class ProductCarouselComponent {
    protected componentData: CmsComponentData<model>;
    protected productService: ProductService;
    protected readonly PRODUCT_SCOPE = ProductScope.LIST;
    private componentData$;
    /**
     * returns an Observable string for the title.
     */
    title$: Observable<string>;
    /**
     * Observable that holds an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     */
    items$: Observable<Observable<Product>[]>;
    constructor(componentData: CmsComponentData<model>, productService: ProductService);
}
