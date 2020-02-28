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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddToWishListComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AddToWishListComponent, "cx-add-to-wishlist", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLXdpc2gtbGlzdC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiYWRkLXRvLXdpc2gtbGlzdC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoU2VydmljZSwgT3JkZXJFbnRyeSwgUHJvZHVjdCwgV2lzaExpc3RTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZGVsJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uL3Byb2R1Y3QvY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWRkVG9XaXNoTGlzdENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHdpc2hMaXN0U2VydmljZTogV2lzaExpc3RTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICAgIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+O1xuICAgIHdpc2hMaXN0RW50cmllcyQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPjtcbiAgICB1c2VyTG9nZ2VkSW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGhhc1N0b2NrOiBib29sZWFuO1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICBjb25zdHJ1Y3Rvcih3aXNoTGlzdFNlcnZpY2U6IFdpc2hMaXN0U2VydmljZSwgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSk7XG4gICAgYWRkKHByb2R1Y3Q6IFByb2R1Y3QpOiB2b2lkO1xuICAgIHJlbW92ZShlbnRyeTogT3JkZXJFbnRyeSk6IHZvaWQ7XG4gICAgZ2V0UHJvZHVjdEluV2lzaExpc3QocHJvZHVjdDogUHJvZHVjdCwgZW50cmllczogT3JkZXJFbnRyeVtdKTogT3JkZXJFbnRyeTtcbiAgICBwcml2YXRlIHNldFN0b2NrSW5mbztcbn1cbiJdfQ==