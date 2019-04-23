import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UIProduct } from '@spartacus/core';
import { CurrentProductService } from '../../../../ui/pages/product-page/current-product.service';
import { ProductDetailOutlets } from '../../../product-outlets.model';
export declare class ProductDetailsComponent implements OnInit {
    protected currentPageService: CurrentProductService;
    static outlets: typeof ProductDetailOutlets;
    product$: Observable<UIProduct>;
    readonly outlets: any;
    constructor(currentPageService: CurrentProductService);
    ngOnInit(): void;
}
