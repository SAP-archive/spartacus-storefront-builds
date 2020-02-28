import { Cart, OrderEntry, WishListService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class WishListComponent {
    protected wishListService: WishListService;
    wishList$: Observable<Cart>;
    loading$: Observable<boolean>;
    constructor(wishListService: WishListService);
    removeEntry(item: OrderEntry): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<WishListComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<WishListComponent, "cx-wish-list", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ3aXNoLWxpc3QuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7OztBQU1BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcnQsIE9yZGVyRW50cnksIFdpc2hMaXN0U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBXaXNoTGlzdENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHdpc2hMaXN0U2VydmljZTogV2lzaExpc3RTZXJ2aWNlO1xuICAgIHdpc2hMaXN0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBjb25zdHJ1Y3Rvcih3aXNoTGlzdFNlcnZpY2U6IFdpc2hMaXN0U2VydmljZSk7XG4gICAgcmVtb3ZlRW50cnkoaXRlbTogT3JkZXJFbnRyeSk6IHZvaWQ7XG59XG4iXX0=