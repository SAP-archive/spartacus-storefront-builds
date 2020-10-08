import { CheckoutCostCenterService, CostCenter, PaymentTypeService, UserCostCenterService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CostCenterComponent {
    protected userCostCenterService: UserCostCenterService;
    protected checkoutCostCenterService: CheckoutCostCenterService;
    protected paymentTypeService: PaymentTypeService;
    protected costCenterId: string;
    cartCostCenter$: Observable<string>;
    isAccountPayment$: Observable<boolean>;
    costCenters$: Observable<CostCenter[]>;
    constructor(userCostCenterService: UserCostCenterService, checkoutCostCenterService: CheckoutCostCenterService, paymentTypeService: PaymentTypeService);
    setCostCenter(selectCostCenter: string): void;
}
