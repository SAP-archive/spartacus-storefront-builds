import { CheckoutCostCenterService, CostCenter, PaymentTypeService, UserCostCenterService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CostCenterComponent {
    protected userCostCenterService: UserCostCenterService;
    protected checkoutCostCenterService: CheckoutCostCenterService;
    protected paymentTypeService: PaymentTypeService;
    costCenterId: string;
    constructor(userCostCenterService: UserCostCenterService, checkoutCostCenterService: CheckoutCostCenterService, paymentTypeService: PaymentTypeService);
    get isAccountPayment$(): Observable<boolean>;
    get costCenters$(): Observable<CostCenter[]>;
    setCostCenter(selectCostCenter: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CostCenterComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CostCenterComponent, "cx-cost-center", never, {}, {}, never, never>;
}

//# sourceMappingURL=cost-center.component.d.ts.map