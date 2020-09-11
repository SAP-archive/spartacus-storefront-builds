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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductSchemaBuilder, [null, { optional: true; }]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zY2hlbWEuYnVpbGRlci5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXNjaGVtYS5idWlsZGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9wcm9kdWN0L2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IEpzb25MZEJ1aWxkZXIsIFNjaGVtYUJ1aWxkZXIgfSBmcm9tICcuLi9zY2hlbWEuaW50ZXJmYWNlJztcbi8qKlxuICogQWRkcyB0aGUgbWluaW1hbCBzdHJ1Y3R1cmVkIGRhdGEgZm9yIHRoZSBwcm9kdWN0LCBzZWUgaHR0cHM6Ly9zY2hlbWEub3JnL3Byb2R1Y3QuXG4gKiBUaGUgYWN0dWFsIGRhdGEgY29sbGVjdGlvbiBpcyBkZWxlZ2F0ZWQgdG8gYEpzb25MZEJ1aWxkZXJgcywgd2hpY2ggY2FuIGJlIGluamVjdGVkXG4gKiB1c2luZyB0aGUgYEpTT05MRF9QUk9EVUNUX0JVSUxERVJgIHRva2VuLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm9kdWN0U2NoZW1hQnVpbGRlciBpbXBsZW1lbnRzIFNjaGVtYUJ1aWxkZXIge1xuICAgIHByaXZhdGUgY3VycmVudFByb2R1Y3Q7XG4gICAgcHJvdGVjdGVkIGJ1aWxkZXJzOiBKc29uTGRCdWlsZGVyPFByb2R1Y3Q+W107XG4gICAgY29uc3RydWN0b3IoY3VycmVudFByb2R1Y3Q6IEN1cnJlbnRQcm9kdWN0U2VydmljZSwgYnVpbGRlcnM6IEpzb25MZEJ1aWxkZXI8UHJvZHVjdD5bXSk7XG4gICAgYnVpbGQoKTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHByb3RlY3RlZCBjb2xsZWN0KHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPGFueT5bXTtcbn1cbiJdfQ==