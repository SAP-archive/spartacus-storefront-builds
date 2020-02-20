import { OnInit } from '@angular/core';
import { Cart, CartService, OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CartTotalsComponent implements OnInit {
    protected cartService: CartService;
    cart$: Observable<Cart>;
    entries$: Observable<OrderEntry[]>;
    constructor(cartService: CartService);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartTotalsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CartTotalsComponent, "cx-cart-totals", never, {}, {}, never>;
}

//# sourceMappingURL=cart-totals.component.d.ts.map