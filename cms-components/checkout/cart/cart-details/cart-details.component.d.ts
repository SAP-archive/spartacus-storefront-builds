import { OnInit } from '@angular/core';
import { CartService, UICart, UIOrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CartDetailsComponent implements OnInit {
    protected cartService: CartService;
    cart$: Observable<UICart>;
    entries$: Observable<UIOrderEntry[]>;
    cartLoaded$: Observable<boolean>;
    constructor(cartService: CartService);
    ngOnInit(): void;
    getAllPromotionsForCart(cart: UICart): UICart[];
}
