import { ProductService, RoutingService, Product } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CurrentProductService {
    private routingService;
    private productService;
    constructor(routingService: RoutingService, productService: ProductService);
    getProduct(): Observable<Product>;
}
