import { CmsProductCarouselComponent as model, FeatureConfigService, Product, ProductService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductCarouselComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductCarouselComponent, "cx-product-carousel", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENtc1Byb2R1Y3RDYXJvdXNlbENvbXBvbmVudCBhcyBtb2RlbCwgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsIFByb2R1Y3QsIFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RDYXJvdXNlbENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8bW9kZWw+O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGZlYXR1cmVzPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IFBST0RVQ1RfU0NPUEU6IHN0cmluZztcbiAgICBwcml2YXRlIGNvbXBvbmVudERhdGEkO1xuICAgIC8qKlxuICAgICAqIHJldHVybnMgYW4gT2JlcnZhYmxlIHN0cmluZyBmb3IgdGhlIHRpdGxlLlxuICAgICAqL1xuICAgIHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIC8qKlxuICAgICAqIE9iZXJ2YWJsZSB0aGF0IGhvbGRzIGFuIEFycmF5IG9mIE9ic2VydmFibGVzLiBUaGlzIGlzIGRvbmUsIHNvIHRoYXRcbiAgICAgKiB0aGUgY29tcG9uZW50IFVJIGNvdWxkIGNvbnNpZGVyIHRvIGxhenkgbG9hZCB0aGUgVUkgY29tcG9uZW50cyB3aGVuIHRoZXkncmVcbiAgICAgKiBpbiB0aGUgdmlld3BvaW50LlxuICAgICAqL1xuICAgIGl0ZW1zJDogT2JzZXJ2YWJsZTxPYnNlcnZhYmxlPFByb2R1Y3Q+W10+O1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8bW9kZWw+LCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsIGZlYXR1cmVzPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIDEuNFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8bW9kZWw+LCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UpO1xufVxuIl19