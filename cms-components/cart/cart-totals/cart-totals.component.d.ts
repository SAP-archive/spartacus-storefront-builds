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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartTotalsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CartTotalsComponent, "cx-cart-totals", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC10b3RhbHMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhcnQtdG90YWxzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7O0FBTUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSwgQ2FydCwgT3JkZXJFbnRyeSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXJ0VG90YWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlO1xuICAgIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICAgIGVudHJpZXMkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG4gICAgY29uc3RydWN0b3IoYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xufVxuIl19