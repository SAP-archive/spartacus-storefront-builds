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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQgYXMgbW9kZWwsIEZlYXR1cmVDb25maWdTZXJ2aWNlLCBQcm9kdWN0LCBQcm9kdWN0U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPG1vZGVsPjtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBmZWF0dXJlcz86IEZlYXR1cmVDb25maWdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBQUk9EVUNUX1NDT1BFOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjb21wb25lbnREYXRhJDtcbiAgICAvKipcbiAgICAgKiByZXR1cm5zIGFuIE9iZXJ2YWJsZSBzdHJpbmcgZm9yIHRoZSB0aXRsZS5cbiAgICAgKi9cbiAgICB0aXRsZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBPYmVydmFibGUgdGhhdCBob2xkcyBhbiBBcnJheSBvZiBPYnNlcnZhYmxlcy4gVGhpcyBpcyBkb25lLCBzbyB0aGF0XG4gICAgICogdGhlIGNvbXBvbmVudCBVSSBjb3VsZCBjb25zaWRlciB0byBsYXp5IGxvYWQgdGhlIFVJIGNvbXBvbmVudHMgd2hlbiB0aGV5J3JlXG4gICAgICogaW4gdGhlIHZpZXdwb2ludC5cbiAgICAgKi9cbiAgICBpdGVtcyQ6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxQcm9kdWN0PltdPjtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPG1vZGVsPiwgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLCBmZWF0dXJlcz86IEZlYXR1cmVDb25maWdTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAxLjRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPG1vZGVsPiwgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlKTtcbn1cbiJdfQ==