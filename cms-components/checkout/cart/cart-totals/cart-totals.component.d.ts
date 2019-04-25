import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UICart, UIOrderEntry, CartService } from '@spartacus/core';
export declare class CartTotalsComponent implements OnInit {
    protected cartService: CartService;
    cart$: Observable<UICart>;
    entries$: Observable<UIOrderEntry[]>;
    constructor(cartService: CartService);
    ngOnInit(): void;
}
