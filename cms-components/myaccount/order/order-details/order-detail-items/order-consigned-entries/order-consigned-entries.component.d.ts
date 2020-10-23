import { Consignment, Order, OrderEntry, PromotionLocation } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class OrderConsignedEntriesComponent {
    consignments: Consignment[];
    order: Order;
    promotionLocation: PromotionLocation;
    getConsignmentProducts(consignment: Consignment): OrderEntry[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderConsignedEntriesComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderConsignedEntriesComponent, "cx-order-consigned-entries", never, { "consignments": "consignments"; "order": "order"; }, {}, never, never>;
}

//# sourceMappingURL=order-consigned-entries.component.d.ts.map