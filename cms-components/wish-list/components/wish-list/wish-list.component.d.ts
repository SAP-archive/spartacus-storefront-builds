import { Cart, OrderEntry, WishListService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class WishListComponent {
    protected wishListService: WishListService;
    wishList$: Observable<Cart>;
    loading$: Observable<boolean>;
    constructor(wishListService: WishListService);
    removeEntry(item: OrderEntry): void;
}
