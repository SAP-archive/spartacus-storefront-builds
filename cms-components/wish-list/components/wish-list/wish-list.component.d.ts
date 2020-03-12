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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ3aXNoLWxpc3QuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FydCwgT3JkZXJFbnRyeSwgV2lzaExpc3RTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFdpc2hMaXN0Q29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgd2lzaExpc3RTZXJ2aWNlOiBXaXNoTGlzdFNlcnZpY2U7XG4gICAgd2lzaExpc3QkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGNvbnN0cnVjdG9yKHdpc2hMaXN0U2VydmljZTogV2lzaExpc3RTZXJ2aWNlKTtcbiAgICByZW1vdmVFbnRyeShpdGVtOiBPcmRlckVudHJ5KTogdm9pZDtcbn1cbiJdfQ==