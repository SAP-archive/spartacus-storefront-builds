import { Observable } from 'rxjs';
import { Product, ProductService, RoutingService } from '@spartacus/core';
export declare class CurrentProductService {
    private routingService;
    private productService;
    constructor(routingService: RoutingService, productService: ProductService);
    getProduct(): Observable<Product>;
}
