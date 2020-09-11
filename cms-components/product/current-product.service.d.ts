import { Product, ProductScope, ProductService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CurrentProductService {
    private routingService;
    private productService;
    constructor(routingService: RoutingService, productService: ProductService);
    protected readonly DEFAULT_PRODUCT_SCOPE = ProductScope.DETAILS;
    /**
     * Will emit current product or null, if there is no current product (i.e. we are not on PDP)
     *
     * @param scopes
     */
    getProduct(scopes?: (ProductScope | string)[] | ProductScope | string): Observable<Product | null>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CurrentProductService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1wcm9kdWN0LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY3VycmVudC1wcm9kdWN0LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7OztBQVdBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdCwgUHJvZHVjdFNjb3BlLCBQcm9kdWN0U2VydmljZSwgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3Iocm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UpO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBERUZBVUxUX1BST0RVQ1RfU0NPUEUgPSBQcm9kdWN0U2NvcGUuREVUQUlMUztcbiAgICAvKipcbiAgICAgKiBXaWxsIGVtaXQgY3VycmVudCBwcm9kdWN0IG9yIG51bGwsIGlmIHRoZXJlIGlzIG5vIGN1cnJlbnQgcHJvZHVjdCAoaS5lLiB3ZSBhcmUgbm90IG9uIFBEUClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZXNcbiAgICAgKi9cbiAgICBnZXRQcm9kdWN0KHNjb3Blcz86IChQcm9kdWN0U2NvcGUgfCBzdHJpbmcpW10gfCBQcm9kdWN0U2NvcGUgfCBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3QgfCBudWxsPjtcbn1cbiJdfQ==