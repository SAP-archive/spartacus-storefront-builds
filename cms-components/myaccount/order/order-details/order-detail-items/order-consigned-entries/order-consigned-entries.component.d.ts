import { Consignment, Order, OrderEntry } from '@spartacus/core';
export declare class OrderConsignedEntriesComponent {
    consignments: Consignment[];
    order: Order;
    getConsignmentProducts(consignment: Consignment): OrderEntry[];
}
