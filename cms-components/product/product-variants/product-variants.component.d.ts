import { OnInit } from '@angular/core';
import { Product, BaseOption, VariantType } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
import * as ɵngcc0 from '@angular/core';
export declare class ProductVariantsComponent implements OnInit {
    private currentProductService;
    constructor(currentProductService: CurrentProductService);
    variants: BaseOption[];
    variantType: typeof VariantType;
    product$: Observable<Product>;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductVariantsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductVariantsComponent, "cx-product-variants", never, {}, {}, never, never>;
}

//# sourceMappingURL=product-variants.component.d.ts.map