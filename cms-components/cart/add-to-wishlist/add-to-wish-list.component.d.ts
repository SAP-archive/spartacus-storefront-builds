import { AuthService, OrderEntry, Product, WishListService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../cms-components/misc/icon/icon.model';
import { CurrentProductService } from '../../product/current-product.service';
import * as ɵngcc0 from '@angular/core';
export declare class AddToWishListComponent {
    protected wishListService: WishListService;
    protected currentProductService: CurrentProductService;
    protected authService: AuthService;
    product$: Observable<Product>;
    wishListEntries$: Observable<OrderEntry[]>;
    userLoggedIn$: Observable<boolean>;
    loading$: Observable<boolean>;
    hasStock: boolean;
    iconTypes: typeof ICON_TYPE;
    constructor(wishListService: WishListService, currentProductService: CurrentProductService, authService: AuthService);
    add(product: Product): void;
    remove(entry: OrderEntry): void;
    getProductInWishList(product: Product, entries: OrderEntry[]): OrderEntry;
    private setStockInfo;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddToWishListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AddToWishListComponent, "cx-add-to-wishlist", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLXdpc2gtbGlzdC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiYWRkLXRvLXdpc2gtbGlzdC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhTZXJ2aWNlLCBPcmRlckVudHJ5LCBQcm9kdWN0LCBXaXNoTGlzdFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBZGRUb1dpc2hMaXN0Q29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgd2lzaExpc3RTZXJ2aWNlOiBXaXNoTGlzdFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD47XG4gICAgd2lzaExpc3RFbnRyaWVzJDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICAgIHVzZXJMb2dnZWRJbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgaGFzU3RvY2s6IGJvb2xlYW47XG4gICAgaWNvblR5cGVzOiB0eXBlb2YgSUNPTl9UWVBFO1xuICAgIGNvbnN0cnVjdG9yKHdpc2hMaXN0U2VydmljZTogV2lzaExpc3RTZXJ2aWNlLCBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKTtcbiAgICBhZGQocHJvZHVjdDogUHJvZHVjdCk6IHZvaWQ7XG4gICAgcmVtb3ZlKGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZDtcbiAgICBnZXRQcm9kdWN0SW5XaXNoTGlzdChwcm9kdWN0OiBQcm9kdWN0LCBlbnRyaWVzOiBPcmRlckVudHJ5W10pOiBPcmRlckVudHJ5O1xuICAgIHByaXZhdGUgc2V0U3RvY2tJbmZvO1xufVxuIl19