import { OnInit } from '@angular/core';
import { Product, BaseOption, VariantType } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
export declare class ProductVariantSelectorComponent implements OnInit {
    private currentProductService;
    constructor(currentProductService: CurrentProductService);
    variants: BaseOption[];
    variantType: typeof VariantType;
    product$: Observable<Product>;
    ngOnInit(): void;
}
