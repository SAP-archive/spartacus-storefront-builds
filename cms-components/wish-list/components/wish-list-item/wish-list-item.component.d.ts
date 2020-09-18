import { EventEmitter } from '@angular/core';
import { OrderEntry } from '@spartacus/core';
export declare class WishListItemComponent {
    isLoading: boolean;
    cartEntry: OrderEntry;
    remove: EventEmitter<OrderEntry>;
    removeEntry(item: OrderEntry): void;
}
