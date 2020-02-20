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

//# sourceMappingURL=current-product.service.d.ts.map