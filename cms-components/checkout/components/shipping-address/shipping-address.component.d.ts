import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address, CartService, CheckoutDeliveryService, RoutingService, TranslationService, UserAddressService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { Card } from '../../../../shared/components/card/card.component';
import { CheckoutConfigService } from '../../services/checkout-config.service';
import { CheckoutStepType } from '../..';
import * as ɵngcc0 from '@angular/core';
export interface CardWithAddress {
    card: Card;
    address: Address;
}
export declare class ShippingAddressComponent implements OnInit, OnDestroy {
    protected userAddressService: UserAddressService;
    protected cartService: CartService;
    protected routingService: RoutingService;
    protected checkoutDeliveryService: CheckoutDeliveryService;
    private checkoutConfigService;
    private activatedRoute;
    private translation;
    constructor(userAddressService: UserAddressService, cartService: CartService, routingService: RoutingService, checkoutDeliveryService: CheckoutDeliveryService, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute, translation: TranslationService);
    existingAddresses$: Observable<Address[]>;
    newAddressFormManuallyOpened: boolean;
    isLoading$: Observable<boolean>;
    cards$: Observable<CardWithAddress[]>;
    selectedAddress$: Observable<Address>;
    forceLoader: boolean;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use cards$ observable instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    cards: Card[];
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Avoid using it.
     * TODO(issue:#3921) deprecated since 1.3
     */
    goTo: CheckoutStepType;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use selectAddress(address: Address) instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    setAddress: Address;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Avoid using it.
     * TODO(issue:#3921) deprecated since 1.3
     */
    setAddressSub: Subscription;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use selectedAddress$ observable instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    selectedAddressSub: Subscription;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use CheckoutConfigService.getNextCheckoutStepUrl(this.activatedRoute) instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    checkoutStepUrlNext: string;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use CheckoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute) instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    checkoutStepUrlPrevious: string;
    isGuestCheckout: boolean;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use selectedAddress$ observable instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    selectedAddress: Address;
    ngOnInit(): void;
    getCardContent(address: Address, selected: any, textDefaultShippingAddress: string, textShipToThisAddress: string, textSelected: string): Card;
    selectAddress(address: Address): void;
    /**
     * @deprecated since version 1.3
     * Use addAddress(address: Address) instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    addAddress(address: {
        newAddress: boolean;
        address: Address;
    } | any): any;
    showNewAddressForm(): void;
    hideNewAddressForm(goPrevious?: boolean): void;
    goNext(): void;
    goPrevious(): void;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use selectAddress(address: Address) instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    addressSelected(address: Address): void;
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goPrevious() instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    back(): void;
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goNext() instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    next(): void;
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use addAddress(address: Address) instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    addNewAddress(address: Address): void;
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Remove.
     * TODO(issue:#3921) deprecated since 1.3
     */
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ShippingAddressComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ShippingAddressComponent, "cx-shipping-address", never, {}, {}, never>;
}

//# sourceMappingURL=shipping-address.component.d.ts.map