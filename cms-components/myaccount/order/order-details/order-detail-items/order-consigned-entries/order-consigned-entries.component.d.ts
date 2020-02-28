import { Consignment, Order, OrderEntry, PromotionLocation } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class OrderConsignedEntriesComponent {
    consignments: Consignment[];
    order: Order;
    promotionLocation: PromotionLocation;
    getConsignmentProducts(consignment: Consignment): OrderEntry[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderConsignedEntriesComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderConsignedEntriesComponent, "cx-order-consigned-entries", never, {
    "consignments": "consignments";
    "order": "order";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uc2lnbmVkLWVudHJpZXMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm9yZGVyLWNvbnNpZ25lZC1lbnRyaWVzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7O0FBS0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc2lnbm1lbnQsIE9yZGVyLCBPcmRlckVudHJ5LCBQcm9tb3Rpb25Mb2NhdGlvbiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPcmRlckNvbnNpZ25lZEVudHJpZXNDb21wb25lbnQge1xuICAgIGNvbnNpZ25tZW50czogQ29uc2lnbm1lbnRbXTtcbiAgICBvcmRlcjogT3JkZXI7XG4gICAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uO1xuICAgIGdldENvbnNpZ25tZW50UHJvZHVjdHMoY29uc2lnbm1lbnQ6IENvbnNpZ25tZW50KTogT3JkZXJFbnRyeVtdO1xufVxuIl19