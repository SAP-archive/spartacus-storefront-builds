import { CartService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../misc/icon/icon.model';
import * as ɵngcc0 from '@angular/core';
export declare class MiniCartComponent {
    protected cartService: CartService;
    iconTypes: typeof ICON_TYPE;
    quantity$: Observable<number>;
    total$: Observable<string>;
    constructor(cartService: CartService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MiniCartComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MiniCartComponent, "cx-mini-cart", never, {}, {}, never>;
}

//# sourceMappingURL=mini-cart.component.d.ts.map