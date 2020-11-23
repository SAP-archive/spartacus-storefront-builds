import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
import { ProductDetailOutlets } from '../product-outlets.model';
import * as ɵngcc0 from '@angular/core';
export declare class ProductSummaryComponent {
    protected currentProductService: CurrentProductService;
    outlets: typeof ProductDetailOutlets;
    product$: Observable<Product>;
    constructor(currentProductService: CurrentProductService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductSummaryComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductSummaryComponent, "cx-product-summary", never, {}, {}, never, never>;
}

//# sourceMappingURL=product-summary.component.d.ts.map