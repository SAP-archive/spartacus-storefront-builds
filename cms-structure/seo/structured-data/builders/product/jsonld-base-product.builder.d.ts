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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<JsonLdBaseProductBuilder>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLWJhc2UtcHJvZHVjdC5idWlsZGVyLmQudHMiLCJzb3VyY2VzIjpbImpzb25sZC1iYXNlLXByb2R1Y3QuYnVpbGRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7QUFLQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSnNvbkxkQnVpbGRlciB9IGZyb20gJy4uL3NjaGVtYS5pbnRlcmZhY2UnO1xuLyoqXG4gKiBCdWlsZHMgdGhlIGJhc2ljIHN0cnVjdHVyZWQgZGF0YSBmb3IgdGhlIHByb2R1Y3QsIHNlZSBodHRwczovL3NjaGVtYS5vcmcvcHJvZHVjdC5cbiAqIFRoaXMgYnVpbGRlciBpbmNsdWRlcyBkYXRhIGZvciBza3UgbnVtYmVyLCBuYW1lLCBkZXNjcmlwdGlvbiwgYnJhbmQgYW5kIG1haW4gaW1hZ2UuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEpzb25MZEJhc2VQcm9kdWN0QnVpbGRlciBpbXBsZW1lbnRzIEpzb25MZEJ1aWxkZXI8UHJvZHVjdD4ge1xuICAgIGJ1aWxkKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgcHJpdmF0ZSBnZXRQcm9kdWN0QmFzZTtcbiAgICBwcml2YXRlIGdldFByb2R1Y3RJbWFnZTtcbiAgICBwcml2YXRlIGdldFByb2R1Y3RCcmFuZDtcbn1cbiJdfQ==