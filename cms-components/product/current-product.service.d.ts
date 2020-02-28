import { FeatureConfigService, Product, ProductScope, ProductService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CurrentProductService {
    private routingService;
    private productService;
    protected features?: FeatureConfigService;
    constructor(routingService: RoutingService, productService: ProductService, features?: FeatureConfigService);
    /**
     * @deprecated since 1.4
     */
    constructor(routingService: RoutingService, productService: ProductService);
    protected readonly DEFAULT_PRODUCT_SCOPE: string;
    getProduct(scopes?: (ProductScope | string)[] | ProductScope | string): Observable<Product>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CurrentProductService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1wcm9kdWN0LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY3VycmVudC1wcm9kdWN0LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7OztBQVdBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlLCBQcm9kdWN0LCBQcm9kdWN0U2NvcGUsIFByb2R1Y3RTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDdXJyZW50UHJvZHVjdFNlcnZpY2Uge1xuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZXM/OiBGZWF0dXJlQ29uZmlnU2VydmljZTtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSwgZmVhdHVyZXM/OiBGZWF0dXJlQ29uZmlnU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgMS40XG4gICAgICovXG4gICAgY29uc3RydWN0b3Iocm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UpO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBERUZBVUxUX1BST0RVQ1RfU0NPUEU6IHN0cmluZztcbiAgICBnZXRQcm9kdWN0KHNjb3Blcz86IChQcm9kdWN0U2NvcGUgfCBzdHJpbmcpW10gfCBQcm9kdWN0U2NvcGUgfCBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3Q+O1xufVxuIl19