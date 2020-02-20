import { CartService, SelectiveCartService, FeatureConfigService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PageLayoutHandler } from '../../cms-structure/page/page-layout/page-layout-handler';
import * as ɵngcc0 from '@angular/core';
export declare class CartPageLayoutHandler implements PageLayoutHandler {
    private cartService;
    private selectiveCartService?;
    private featureConfig?;
    constructor(cartService: CartService, selectiveCartService: SelectiveCartService, featureConfig: FeatureConfigService);
    /**
     * @deprecated Since 1.5
     * Add selectiveCartService and featureConfig for save for later.
     * Remove issue: #5958
     */
    constructor(cartService: CartService);
    handle(slots$: Observable<string[]>, pageTemplate?: string, section?: string): Observable<string[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartPageLayoutHandler>;
}

//# sourceMappingURL=cart-page-layout-handler.d.ts.map