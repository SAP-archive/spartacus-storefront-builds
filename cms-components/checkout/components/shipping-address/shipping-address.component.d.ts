import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartService, Address, B2BAddress, CheckoutCostCenterService, CheckoutDeliveryService, PaymentTypeService, TranslationService, UserAddressService, UserCostCenterService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../shared/components/card/card.component';
import { CheckoutStepService } from '../../services/checkout-step.service';
import * as ɵngcc0 from '@angular/core';
export interface CardWithAddress {
    card: Card;
    address: Address;
}
export declare class ShippingAddressComponent implements OnInit {
    protected userAddressService: UserAddressService;
    protected checkoutDeliveryService: CheckoutDeliveryService;
    protected activatedRoute: ActivatedRoute;
    protected translation: TranslationService;
    protected activeCartService: ActiveCartService;
    protected checkoutStepService: CheckoutStepService;
    protected paymentTypeService?: PaymentTypeService;
    protected userCostCenterService?: UserCostCenterService;
    protected checkoutCostCenterService?: CheckoutCostCenterService;
    addressFormOpened: boolean;
    forceLoader: boolean;
    selectedAddress: Address;
    doneAutoSelect: boolean;
    isAccountPayment: boolean;
    constructor(userAddressService: UserAddressService, checkoutDeliveryService: CheckoutDeliveryService, activatedRoute: ActivatedRoute, translation: TranslationService, activeCartService: ActiveCartService, checkoutStepService: CheckoutStepService, paymentTypeService?: PaymentTypeService, userCostCenterService?: UserCostCenterService, checkoutCostCenterService?: CheckoutCostCenterService);
    get isGuestCheckout(): boolean;
    get backBtnText(): string;
    get isLoading$(): Observable<boolean>;
    get selectedAddress$(): Observable<Address>;
    get cards$(): Observable<CardWithAddress[]>;
    getSupportedAddresses(): Observable<Address[] | B2BAddress[]>;
    selectDefaultAddress(addresses: Address[], selected: Address): void;
    ngOnInit(): void;
    getCardContent(address: Address, selected: any, textDefaultShippingAddress: string, textShipToThisAddress: string, textSelected: string): Card;
    selectAddress(address: Address): void;
    addAddress(address: Address): void;
    showNewAddressForm(): void;
    hideNewAddressForm(goPrevious?: boolean): void;
    next(): void;
    back(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ShippingAddressComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ShippingAddressComponent, "cx-shipping-address", never, {}, {}, never, never>;
}

//# sourceMappingURL=shipping-address.component.d.ts.map