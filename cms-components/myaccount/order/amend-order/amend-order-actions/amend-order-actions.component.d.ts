import { RoutingService } from '@spartacus/core';
import { FormGroup } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class AmendOrderActionsComponent {
    protected routingService: RoutingService;
    orderCode: string;
    amendOrderForm: FormGroup;
    backRoute: string;
    forwardRoute: string;
    styles: string;
    constructor(routingService: RoutingService);
    continue(event: Event): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AmendOrderActionsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AmendOrderActionsComponent, "cx-amend-order-actions", never, { "orderCode": "orderCode"; "amendOrderForm": "amendOrderForm"; "backRoute": "backRoute"; "forwardRoute": "forwardRoute"; }, {}, never, never>;
}

//# sourceMappingURL=amend-order-actions.component.d.ts.map