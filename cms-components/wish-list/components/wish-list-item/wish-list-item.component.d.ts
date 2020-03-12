import { EventEmitter } from '@angular/core';
import { OrderEntry } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class WishListItemComponent {
    isLoading: boolean;
    cartEntry: OrderEntry;
    remove: EventEmitter<OrderEntry>;
    removeEntry(item: OrderEntry): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<WishListItemComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<WishListItemComponent, "cx-wish-list-item", never, {
    "isLoading": "isLoading";
    "cartEntry": "cartEntry";
}, {
    "remove": "remove";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LWl0ZW0uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIndpc2gtbGlzdC1pdGVtLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7O0FBS0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgV2lzaExpc3RJdGVtQ29tcG9uZW50IHtcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gICAgY2FydEVudHJ5OiBPcmRlckVudHJ5O1xuICAgIHJlbW92ZTogRXZlbnRFbWl0dGVyPE9yZGVyRW50cnk+O1xuICAgIHJlbW92ZUVudHJ5KGl0ZW06IE9yZGVyRW50cnkpOiB2b2lkO1xufVxuIl19