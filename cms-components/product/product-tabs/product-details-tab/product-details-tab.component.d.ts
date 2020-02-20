import { OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../../current-product.service';
import * as ɵngcc0 from '@angular/core';
export declare class ProductDetailsTabComponent implements OnInit {
    protected currentProductService: CurrentProductService;
    product$: Observable<Product>;
    constructor(currentProductService: CurrentProductService);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductDetailsTabComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductDetailsTabComponent, "cx-product-details-tab", never, {}, {}, never>;
}

//# sourceMappingURL=product-details-tab.component.d.ts.map