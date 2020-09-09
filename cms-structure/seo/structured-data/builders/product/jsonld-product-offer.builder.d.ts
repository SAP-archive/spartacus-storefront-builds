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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<JsonLdProductOfferBuilder, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLXByb2R1Y3Qtb2ZmZXIuYnVpbGRlci5kLnRzIiwic291cmNlcyI6WyJqc29ubGQtcHJvZHVjdC1vZmZlci5idWlsZGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7OztBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBKc29uTGRCdWlsZGVyIH0gZnJvbSAnLi4vc2NoZW1hLmludGVyZmFjZSc7XG4vKipcbiAqIEJ1aWxkcyB0aGUgc3RydWN0dXJlZCBkYXRhIGZvciB0aGUgcHJvZHVjdCBvZmZlciwgc2VlIGh0dHBzOi8vc2NoZW1hLm9yZy9vZmZlcnMuXG4gKiBUaGUgZGF0YSBpbmNsdWRlcyB0aGUgcHJpY2UsIGN1cnJlbmN5IGFuZCBhdmFpbGFiaWxpdHkgbGV2ZWwuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEpzb25MZFByb2R1Y3RPZmZlckJ1aWxkZXIgaW1wbGVtZW50cyBKc29uTGRCdWlsZGVyPFByb2R1Y3Q+IHtcbiAgICBidWlsZChwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxhbnk+O1xufVxuIl19