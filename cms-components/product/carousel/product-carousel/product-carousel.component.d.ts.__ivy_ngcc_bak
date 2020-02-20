import { CmsProductCarouselComponent as model, FeatureConfigService, Product, ProductService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
export declare class ProductCarouselComponent {
    protected componentData: CmsComponentData<model>;
    protected productService: ProductService;
    protected features?: FeatureConfigService;
    protected readonly PRODUCT_SCOPE: string;
    private componentData$;
    /**
     * returns an Obervable string for the title.
     */
    title$: Observable<string>;
    /**
     * Obervable that holds an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     */
    items$: Observable<Observable<Product>[]>;
    constructor(componentData: CmsComponentData<model>, productService: ProductService, features?: FeatureConfigService);
    /**
     * @deprecated since 1.4
     */
    constructor(componentData: CmsComponentData<model>, productService: ProductService);
}
