import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
import { ProductDetailOutlets } from '../product-outlets.model';
export declare class ProductSummaryComponent {
    protected currentProductService: CurrentProductService;
    outlets: typeof ProductDetailOutlets;
    product$: Observable<Product>;
    constructor(currentProductService: CurrentProductService);
}
