import { ActiveCartService, SelectiveCartService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PageLayoutHandler } from '../../cms-structure/page/page-layout/page-layout-handler';
import * as ɵngcc0 from '@angular/core';
export declare class CartPageLayoutHandler implements PageLayoutHandler {
    protected activeCartService: ActiveCartService;
    protected selectiveCartService: SelectiveCartService;
    constructor(activeCartService: ActiveCartService, selectiveCartService: SelectiveCartService);
    handle(slots$: Observable<string[]>, pageTemplate?: string, section?: string): Observable<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartPageLayoutHandler, never>;
}

//# sourceMappingURL=cart-page-layout-handler.d.ts.map