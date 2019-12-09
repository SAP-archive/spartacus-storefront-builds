import { WishListService } from '@spartacus/core';
export declare class WishListItemComponent {
    protected wishListService: WishListService;
    cartEntry: any;
    constructor(wishListService: WishListService);
    remove(entry: any): void;
}
