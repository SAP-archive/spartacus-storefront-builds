import { AuthService, Cart, WishListService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class WishListComponent {
    protected wishListService: WishListService;
    protected authService: AuthService;
    wishList$: Observable<Cart>;
    userLoggedIn$: Observable<boolean>;
    loading$: Observable<boolean>;
    constructor(wishListService: WishListService, authService: AuthService);
}
