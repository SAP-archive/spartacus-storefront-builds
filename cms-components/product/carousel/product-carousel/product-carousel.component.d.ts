import { CmsProductCarouselComponent as model, Product, ProductScope, ProductService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
import * as ɵngcc0 from '@angular/core';
export declare class ProductCarouselComponent {
    protected componentData: CmsComponentData<model>;
    protected productService: ProductService;
    protected readonly PRODUCT_SCOPE = ProductScope.LIST;
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
    constructor(componentData: CmsComponentData<model>, productService: ProductService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductCarouselComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductCarouselComponent, "cx-product-carousel", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQgYXMgbW9kZWwsIFByb2R1Y3QsIFByb2R1Y3RTY29wZSwgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdENhcm91c2VsQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxtb2RlbD47XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgUFJPRFVDVF9TQ09QRSA9IFByb2R1Y3RTY29wZS5MSVNUO1xuICAgIHByaXZhdGUgY29tcG9uZW50RGF0YSQ7XG4gICAgLyoqXG4gICAgICogcmV0dXJucyBhbiBPYmVydmFibGUgc3RyaW5nIGZvciB0aGUgdGl0bGUuXG4gICAgICovXG4gICAgdGl0bGUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgLyoqXG4gICAgICogT2JlcnZhYmxlIHRoYXQgaG9sZHMgYW4gQXJyYXkgb2YgT2JzZXJ2YWJsZXMuIFRoaXMgaXMgZG9uZSwgc28gdGhhdFxuICAgICAqIHRoZSBjb21wb25lbnQgVUkgY291bGQgY29uc2lkZXIgdG8gbGF6eSBsb2FkIHRoZSBVSSBjb21wb25lbnRzIHdoZW4gdGhleSdyZVxuICAgICAqIGluIHRoZSB2aWV3cG9pbnQuXG4gICAgICovXG4gICAgaXRlbXMkOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8UHJvZHVjdD5bXT47XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxtb2RlbD4sIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSk7XG59XG4iXX0=