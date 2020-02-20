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

//# sourceMappingURL=wish-list.component.d.ts.map