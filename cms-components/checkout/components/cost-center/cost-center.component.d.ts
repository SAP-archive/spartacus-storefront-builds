import { CheckoutCostCenterService, CostCenter, PaymentTypeService, UserCostCenterService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CostCenterComponent {
    protected userCostCenterService: UserCostCenterService;
    protected checkoutCostCenterService: CheckoutCostCenterService;
    protected paymentTypeService: PaymentTypeService;
    costCenterId: string;
    constructor(userCostCenterService: UserCostCenterService, checkoutCostCenterService: CheckoutCostCenterService, paymentTypeService: PaymentTypeService);
    get isAccountPayment$(): Observable<boolean>;
    get costCenters$(): Observable<CostCenter[]>;
    setCostCenter(selectCostCenter: string): void;
}
