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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductReferencesComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductReferencesComponent, "cx-product-references", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXJlZmVyZW5jZXMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudCwgUHJvZHVjdCwgUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBjb21wb25lbnQ6IENtc0NvbXBvbmVudERhdGE8Q21zUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQ+O1xuICAgIHByb3RlY3RlZCBjdXJyZW50OiBDdXJyZW50UHJvZHVjdFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJlZmVyZW5jZVNlcnZpY2U6IFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlO1xuICAgIC8qKlxuICAgICAqIHJldHVybnMgYW4gT2JlcnZhYmxlIHN0cmluZyBmb3IgdGhlIHRpdGxlXG4gICAgICovXG4gICAgdGl0bGUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgcHJpdmF0ZSBjdXJyZW50UHJvZHVjdENvZGUkO1xuICAgIC8qKlxuICAgICAqIE9iZXJ2YWJsZSB3aXRoIGFuIEFycmF5IG9mIE9ic2VydmFibGVzLiBUaGlzIGlzIGRvbmUsIHNvIHRoYXRcbiAgICAgKiB0aGUgY29tcG9uZW50IFVJIGNvdWxkIGNvbnNpZGVyIHRvIGxhenkgbG9hZCB0aGUgVUkgY29tcG9uZW50cyB3aGVuIHRoZXkncmVcbiAgICAgKiBpbiB0aGUgdmlld3BvaW50LlxuICAgICAqL1xuICAgIGl0ZW1zJDogT2JzZXJ2YWJsZTxPYnNlcnZhYmxlPFByb2R1Y3Q+W10+O1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudDogQ21zQ29tcG9uZW50RGF0YTxDbXNQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudD4sIGN1cnJlbnQ6IEN1cnJlbnRQcm9kdWN0U2VydmljZSwgcmVmZXJlbmNlU2VydmljZTogUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UpO1xuICAgIHByaXZhdGUgZ2V0UHJvZHVjdFJlZmVyZW5jZXM7XG59XG4iXX0=