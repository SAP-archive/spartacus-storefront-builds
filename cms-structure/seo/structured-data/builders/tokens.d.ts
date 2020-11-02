import { InjectionToken } from '@angular/core';
/**
 * Injection token to extend schema builders for adding structural data (json-ld).
 *
 * Some builders (i.e. `JSONLD_PRODUCT_BUILDER`) might have additional
 * lower level builder to further extend the schema.
 */
export declare const SCHEMA_BUILDER: InjectionToken<unknown>;
/**
 * Injection token to add specific json-ld builders for product related schemas.
 * See see https://schema.org/product for more information.
 */
export declare const JSONLD_PRODUCT_BUILDER: InjectionToken<unknown>;
