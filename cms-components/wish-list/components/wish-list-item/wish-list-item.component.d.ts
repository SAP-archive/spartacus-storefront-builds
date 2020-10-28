import { EventEmitter } from '@angular/core';
import { OrderEntry } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class WishListItemComponent {
    isLoading: boolean;
    cartEntry: OrderEntry;
    remove: EventEmitter<OrderEntry>;
    removeEntry(item: OrderEntry): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<WishListItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<WishListItemComponent, "cx-wish-list-item", never, { "isLoading": "isLoading"; "cartEntry": "cartEntry"; }, { "remove": "remove"; }, never, never>;
}

//# sourceMappingURL=wish-list-item.component.d.ts.map