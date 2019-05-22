import { OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../../current-product.service';
import { ProductDetailOutlets } from '../../product-outlets.model';
export declare class ProductDetailsComponent implements OnInit {
    protected currentPageService: CurrentProductService;
    static outlets: typeof ProductDetailOutlets;
    product$: Observable<Product>;
    readonly outlets: any;
    constructor(currentPageService: CurrentProductService);
    ngOnInit(): void;
}
