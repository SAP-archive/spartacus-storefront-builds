import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart, OrderEntry, CartService } from '@spartacus/core';
export declare class CartTotalsComponent implements OnInit {
    protected cartService: CartService;
    cart$: Observable<Cart>;
    entries$: Observable<OrderEntry[]>;
    constructor(cartService: CartService);
    ngOnInit(): void;
}
