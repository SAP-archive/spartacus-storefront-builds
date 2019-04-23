import { Observable } from 'rxjs';
import { ProductService, RoutingService, UIProduct } from '@spartacus/core';
export declare class CurrentProductService {
    private routingService;
    private productService;
    constructor(routingService: RoutingService, productService: ProductService);
    getProduct(): Observable<UIProduct>;
}
