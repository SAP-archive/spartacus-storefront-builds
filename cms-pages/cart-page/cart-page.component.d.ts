import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart, CartService } from '@spartacus/core';
export declare class CartPageComponent implements OnInit {
    protected cartService: CartService;
    cart$: Observable<Cart>;
    constructor(cartService: CartService);
    ngOnInit(): void;
}
