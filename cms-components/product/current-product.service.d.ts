import { FeatureConfigService, Product, ProductService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CurrentProductService {
    private routingService;
    private productService;
    protected features?: FeatureConfigService;
    constructor(routingService: RoutingService, productService: ProductService, features?: FeatureConfigService);
    protected readonly PRODUCT_SCOPE: string;
    getProduct(): Observable<Product>;
}
