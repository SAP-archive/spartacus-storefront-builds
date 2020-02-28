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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLXByb2R1Y3Qtb2ZmZXIuYnVpbGRlci5kLnRzIiwic291cmNlcyI6WyJqc29ubGQtcHJvZHVjdC1vZmZlci5idWlsZGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7OztBQUVBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSnNvbkxkQnVpbGRlciB9IGZyb20gJy4uL3NjaGVtYS5pbnRlcmZhY2UnO1xuLyoqXG4gKiBCdWlsZHMgdGhlIHN0cnVjdHVyZWQgZGF0YSBmb3IgdGhlIHByb2R1Y3Qgb2ZmZXIsIHNlZSBodHRwczovL3NjaGVtYS5vcmcvb2ZmZXJzLlxuICogVGhlIGRhdGEgaW5jbHVkZXMgdGhlIHByaWNlLCBjdXJyZW5jeSBhbmQgYXZhaWxhYmlsaXR5IGxldmVsLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBKc29uTGRQcm9kdWN0T2ZmZXJCdWlsZGVyIGltcGxlbWVudHMgSnNvbkxkQnVpbGRlcjxQcm9kdWN0PiB7XG4gICAgYnVpbGQocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8YW55Pjtcbn1cbiJdfQ==