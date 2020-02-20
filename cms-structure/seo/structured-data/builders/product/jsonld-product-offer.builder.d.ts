import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { JsonLdBuilder } from '../schema.interface';
/**
 * Builds the structured data for the product offer, see https://schema.org/offers.
 * The data includes the price, currency and availability level.
 */
import * as ɵngcc0 from '@angular/core';
export declare class JsonLdProductOfferBuilder implements JsonLdBuilder<Product> {
    build(product: Product): Observable<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<JsonLdProductOfferBuilder>;
}

//# sourceMappingURL=jsonld-product-offer.builder.d.ts.map