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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1mb3ItbGF0ZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInNhdmUtZm9yLWxhdGVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VsZWN0aXZlQ2FydFNlcnZpY2UsIENhcnQsIE9yZGVyRW50cnksIEFjdGl2ZUNhcnRTZXJ2aWNlLCBDbXNQYXJhZ3JhcGhDb21wb25lbnQsIENtc1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uL2NhcnQtc2hhcmVkL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNhdmVGb3JMYXRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlO1xuICAgIHNhdmVGb3JMYXRlciQ6IE9ic2VydmFibGU8Q2FydD47XG4gICAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gICAgZW50cmllcyQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPjtcbiAgICBjYXJ0TG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBkYXRhJDogT2JzZXJ2YWJsZTxDbXNQYXJhZ3JhcGhDb21wb25lbnQ+O1xuICAgIGlzQ2FydEVtcHR5JDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBjb25zdHJ1Y3RvcihjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLCBjYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlOiBTZWxlY3RpdmVDYXJ0U2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBtb3ZlVG9DYXJ0KGl0ZW06IEl0ZW0pOiB2b2lkO1xufVxuIl19