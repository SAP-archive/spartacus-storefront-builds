import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../../../../../cms-components/product/current-product.service';
import { JsonLdBuilder, SchemaBuilder } from '../schema.interface';
/**
 * Adds the minimal structured data for the product, see https://schema.org/product.
 * The actual data collection is delegated to `JsonLdBuilder`s, which can be injected
 * using the `JSONLD_PRODUCT_BUILDER` token.
 */
import * as ɵngcc0 from '@angular/core';
export declare class ProductSchemaBuilder implements SchemaBuilder {
    private currentProduct;
    protected builders: JsonLdBuilder<Product>[];
    constructor(currentProduct: CurrentProductService, builders: JsonLdBuilder<Product>[]);
    build(): Observable<any>;
    protected collect(product: Product): Observable<any>[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductSchemaBuilder>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zY2hlbWEuYnVpbGRlci5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXNjaGVtYS5idWlsZGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7OztBQU1BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvcHJvZHVjdC9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyBKc29uTGRCdWlsZGVyLCBTY2hlbWFCdWlsZGVyIH0gZnJvbSAnLi4vc2NoZW1hLmludGVyZmFjZSc7XG4vKipcbiAqIEFkZHMgdGhlIG1pbmltYWwgc3RydWN0dXJlZCBkYXRhIGZvciB0aGUgcHJvZHVjdCwgc2VlIGh0dHBzOi8vc2NoZW1hLm9yZy9wcm9kdWN0LlxuICogVGhlIGFjdHVhbCBkYXRhIGNvbGxlY3Rpb24gaXMgZGVsZWdhdGVkIHRvIGBKc29uTGRCdWlsZGVyYHMsIHdoaWNoIGNhbiBiZSBpbmplY3RlZFxuICogdXNpbmcgdGhlIGBKU09OTERfUFJPRFVDVF9CVUlMREVSYCB0b2tlbi5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdFNjaGVtYUJ1aWxkZXIgaW1wbGVtZW50cyBTY2hlbWFCdWlsZGVyIHtcbiAgICBwcml2YXRlIGN1cnJlbnRQcm9kdWN0O1xuICAgIHByb3RlY3RlZCBidWlsZGVyczogSnNvbkxkQnVpbGRlcjxQcm9kdWN0PltdO1xuICAgIGNvbnN0cnVjdG9yKGN1cnJlbnRQcm9kdWN0OiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsIGJ1aWxkZXJzOiBKc29uTGRCdWlsZGVyPFByb2R1Y3Q+W10pO1xuICAgIGJ1aWxkKCk6IE9ic2VydmFibGU8YW55PjtcbiAgICBwcm90ZWN0ZWQgY29sbGVjdChwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxhbnk+W107XG59XG4iXX0=