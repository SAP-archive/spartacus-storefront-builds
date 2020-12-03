import { OnInit } from '@angular/core';
import { ActiveCartService, Cart, OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CartTotalsComponent implements OnInit {
    protected activeCartService: ActiveCartService;
    cart$: Observable<Cart>;
    entries$: Observable<OrderEntry[]>;
    constructor(activeCartService: ActiveCartService);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartTotalsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CartTotalsComponent, "cx-cart-totals", never, {}, {}, never, never>;
}

//# sourceMappingURL=cart-totals.component.d.ts.map