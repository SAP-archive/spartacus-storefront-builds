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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLWJhc2UtcHJvZHVjdC5idWlsZGVyLmQudHMiLCJzb3VyY2VzIjpbImpzb25sZC1iYXNlLXByb2R1Y3QuYnVpbGRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7QUFLQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEpzb25MZEJ1aWxkZXIgfSBmcm9tICcuLi9zY2hlbWEuaW50ZXJmYWNlJztcbi8qKlxuICogQnVpbGRzIHRoZSBiYXNpYyBzdHJ1Y3R1cmVkIGRhdGEgZm9yIHRoZSBwcm9kdWN0LCBzZWUgaHR0cHM6Ly9zY2hlbWEub3JnL3Byb2R1Y3QuXG4gKiBUaGlzIGJ1aWxkZXIgaW5jbHVkZXMgZGF0YSBmb3Igc2t1IG51bWJlciwgbmFtZSwgZGVzY3JpcHRpb24sIGJyYW5kIGFuZCBtYWluIGltYWdlLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBKc29uTGRCYXNlUHJvZHVjdEJ1aWxkZXIgaW1wbGVtZW50cyBKc29uTGRCdWlsZGVyPFByb2R1Y3Q+IHtcbiAgICBidWlsZChwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHByaXZhdGUgZ2V0UHJvZHVjdEJhc2U7XG4gICAgcHJpdmF0ZSBnZXRQcm9kdWN0SW1hZ2U7XG4gICAgcHJpdmF0ZSBnZXRQcm9kdWN0QnJhbmQ7XG59XG4iXX0=