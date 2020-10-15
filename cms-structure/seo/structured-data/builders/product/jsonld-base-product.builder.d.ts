import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { JsonLdBuilder } from '../schema.interface';
/**
 * Builds the basic structured data for the product, see https://schema.org/product.
 * This builder includes data for sku number, name, description, brand and main image.
 */
import * as ɵngcc0 from '@angular/core';
export declare class JsonLdBaseProductBuilder implements JsonLdBuilder<Product> {
    build(product: Product): Observable<any>;
    private getProductBase;
    private getProductImage;
    private getProductBrand;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<JsonLdBaseProductBuilder, never>;
}

//# sourceMappingURL=jsonld-base-product.builder.d.ts.map