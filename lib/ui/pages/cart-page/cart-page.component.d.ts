import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UICart, CartService } from '@spartacus/core';
export declare class CartPageComponent implements OnInit {
    protected cartService: CartService;
    cart$: Observable<UICart>;
    constructor(cartService: CartService);
    ngOnInit(): void;
}
