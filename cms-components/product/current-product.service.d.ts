import { FeatureConfigService, Product, ProductScope, ProductService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
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
}
