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

//# sourceMappingURL=current-product.service.d.ts.map