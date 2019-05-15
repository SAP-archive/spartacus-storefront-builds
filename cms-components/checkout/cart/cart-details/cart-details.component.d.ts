import { OnInit } from '@angular/core';
import { CartService, Cart, OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CartDetailsComponent implements OnInit {
    protected cartService: CartService;
    cart$: Observable<Cart>;
    entries$: Observable<OrderEntry[]>;
    cartLoaded$: Observable<boolean>;
    constructor(cartService: CartService);
    ngOnInit(): void;
    getAllPromotionsForCart(cart: Cart): Cart[];
}
