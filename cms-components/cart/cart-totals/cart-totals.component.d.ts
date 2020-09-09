import { OnInit } from '@angular/core';
import { ActiveCartService, Cart, OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CartTotalsComponent implements OnInit {
    protected activeCartService: ActiveCartService;
    cart$: Observable<Cart>;
    entries$: Observable<OrderEntry[]>;
    constructor(activeCartService: ActiveCartService);
    ngOnInit(): void;
}
