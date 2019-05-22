import { OnInit } from '@angular/core';
import { CmsService, Page, Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../../current-product.service';
import { ProductDetailOutlets } from '../../product-outlets.model';
export declare class ProductDetailsComponent implements OnInit {
    protected currentPageService: CurrentProductService;
    private cmsService;
    static outlets: typeof ProductDetailOutlets;
    product$: Observable<Product>;
    page$: Observable<Page>;
    readonly outlets: any;
    constructor(currentPageService: CurrentProductService, cmsService: CmsService);
    ngOnInit(): void;
}
