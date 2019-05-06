import { ProductService, RoutingService, UIProduct } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CurrentProductService {
    private routingService;
    private productService;
    constructor(routingService: RoutingService, productService: ProductService);
    getProduct(): Observable<UIProduct>;
}
