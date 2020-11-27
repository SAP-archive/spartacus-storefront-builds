import { Consignment, Order, OrderEntry, PromotionLocation } from '@spartacus/core';
export declare class OrderConsignedEntriesComponent {
    consignments: Consignment[];
    order: Order;
    promotionLocation: PromotionLocation;
    getConsignmentProducts(consignment: Consignment): OrderEntry[];
}
