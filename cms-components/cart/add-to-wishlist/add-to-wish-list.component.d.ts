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

//# sourceMappingURL=add-to-wish-list.component.d.ts.map