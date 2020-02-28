import { OnInit } from '@angular/core';
import { SelectiveCartService, Cart, OrderEntry, ActiveCartService, CmsParagraphComponent, CmsService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Item } from '../cart-shared/cart-item/cart-item.component';
import * as ɵngcc0 from '@angular/core';
export declare class SaveForLaterComponent implements OnInit {
    protected cmsService: CmsService;
    protected cartService: ActiveCartService;
    protected selectiveCartService: SelectiveCartService;
    saveForLater$: Observable<Cart>;
    cart$: Observable<Cart>;
    entries$: Observable<OrderEntry[]>;
    cartLoaded$: Observable<boolean>;
    data$: Observable<CmsParagraphComponent>;
    isCartEmpty$: Observable<boolean>;
    constructor(cmsService: CmsService, cartService: ActiveCartService, selectiveCartService: SelectiveCartService);
    ngOnInit(): void;
    moveToCart(item: Item): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SaveForLaterComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SaveForLaterComponent, "cx-save-for-later", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1mb3ItbGF0ZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInNhdmUtZm9yLWxhdGVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLCBDYXJ0LCBPcmRlckVudHJ5LCBBY3RpdmVDYXJ0U2VydmljZSwgQ21zUGFyYWdyYXBoQ29tcG9uZW50LCBDbXNTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTYXZlRm9yTGF0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlOiBTZWxlY3RpdmVDYXJ0U2VydmljZTtcbiAgICBzYXZlRm9yTGF0ZXIkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICAgIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICAgIGVudHJpZXMkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG4gICAgY2FydExvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgZGF0YSQ6IE9ic2VydmFibGU8Q21zUGFyYWdyYXBoQ29tcG9uZW50PjtcbiAgICBpc0NhcnRFbXB0eSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgY29uc3RydWN0b3IoY21zU2VydmljZTogQ21zU2VydmljZSwgY2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlLCBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbW92ZVRvQ2FydChpdGVtOiBJdGVtKTogdm9pZDtcbn1cbiJdfQ==