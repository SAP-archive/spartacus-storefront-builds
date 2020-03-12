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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC10b3RhbHMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhcnQtdG90YWxzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7O0FBTUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlLCBDYXJ0LCBPcmRlckVudHJ5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhcnRUb3RhbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2U7XG4gICAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gICAgZW50cmllcyQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPjtcbiAgICBjb25zdHJ1Y3RvcihhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG59XG4iXX0=