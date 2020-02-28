import { CmsProductReferencesComponent, Product, ProductReferenceService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
import { CurrentProductService } from '../../current-product.service';
import * as ɵngcc0 from '@angular/core';
export declare class ProductReferencesComponent {
    protected component: CmsComponentData<CmsProductReferencesComponent>;
    protected current: CurrentProductService;
    protected referenceService: ProductReferenceService;
    /**
     * returns an Obervable string for the title
     */
    title$: Observable<string>;
    private currentProductCode$;
    /**
     * Obervable with an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     */
    items$: Observable<Observable<Product>[]>;
    constructor(component: CmsComponentData<CmsProductReferencesComponent>, current: CurrentProductService, referenceService: ProductReferenceService);
    private getProductReferences;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductReferencesComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductReferencesComponent, "cx-product-references", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXJlZmVyZW5jZXMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ21zUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQsIFByb2R1Y3QsIFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc1Byb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50PjtcbiAgICBwcm90ZWN0ZWQgY3VycmVudDogQ3VycmVudFByb2R1Y3RTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByZWZlcmVuY2VTZXJ2aWNlOiBQcm9kdWN0UmVmZXJlbmNlU2VydmljZTtcbiAgICAvKipcbiAgICAgKiByZXR1cm5zIGFuIE9iZXJ2YWJsZSBzdHJpbmcgZm9yIHRoZSB0aXRsZVxuICAgICAqL1xuICAgIHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHByaXZhdGUgY3VycmVudFByb2R1Y3RDb2RlJDtcbiAgICAvKipcbiAgICAgKiBPYmVydmFibGUgd2l0aCBhbiBBcnJheSBvZiBPYnNlcnZhYmxlcy4gVGhpcyBpcyBkb25lLCBzbyB0aGF0XG4gICAgICogdGhlIGNvbXBvbmVudCBVSSBjb3VsZCBjb25zaWRlciB0byBsYXp5IGxvYWQgdGhlIFVJIGNvbXBvbmVudHMgd2hlbiB0aGV5J3JlXG4gICAgICogaW4gdGhlIHZpZXdwb2ludC5cbiAgICAgKi9cbiAgICBpdGVtcyQ6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxQcm9kdWN0PltdPjtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQ6IENtc0NvbXBvbmVudERhdGE8Q21zUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQ+LCBjdXJyZW50OiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsIHJlZmVyZW5jZVNlcnZpY2U6IFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlKTtcbiAgICBwcml2YXRlIGdldFByb2R1Y3RSZWZlcmVuY2VzO1xufVxuIl19