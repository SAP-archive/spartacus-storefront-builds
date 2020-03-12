import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartService, Address, CheckoutDeliveryService, RoutingService, TranslationService, UserAddressService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { CheckoutStepType } from '../..';
import { Card } from '../../../../shared/components/card/card.component';
import { CheckoutConfigService } from '../../services/checkout-config.service';
import * as ɵngcc0 from '@angular/core';
export interface CardWithAddress {
    card: Card;
    address: Address;
}
export declare class ShippingAddressComponent implements OnInit, OnDestroy {
    protected userAddressService: UserAddressService;
    protected routingService: RoutingService;
    protected checkoutDeliveryService: CheckoutDeliveryService;
    protected checkoutConfigService: CheckoutConfigService;
    protected activatedRoute: ActivatedRoute;
    protected translation: TranslationService;
    protected activeCartService: ActiveCartService;
    constructor(userAddressService: UserAddressService, routingService: RoutingService, checkoutDeliveryService: CheckoutDeliveryService, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute, translation: TranslationService, activeCartService: ActiveCartService);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrSEEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UsIEFkZHJlc3MsIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSwgVHJhbnNsYXRpb25TZXJ2aWNlLCBVc2VyQWRkcmVzc1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuZXhwb3J0IGludGVyZmFjZSBDYXJkV2l0aEFkZHJlc3Mge1xuICAgIGNhcmQ6IENhcmQ7XG4gICAgYWRkcmVzczogQWRkcmVzcztcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNoaXBwaW5nQWRkcmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlO1xuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IodXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSwgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLCBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSwgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UpO1xuICAgIGV4aXN0aW5nQWRkcmVzc2VzJDogT2JzZXJ2YWJsZTxBZGRyZXNzW10+O1xuICAgIG5ld0FkZHJlc3NGb3JtTWFudWFsbHlPcGVuZWQ6IGJvb2xlYW47XG4gICAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBjYXJkcyQ6IE9ic2VydmFibGU8Q2FyZFdpdGhBZGRyZXNzW10+O1xuICAgIHNlbGVjdGVkQWRkcmVzcyQ6IE9ic2VydmFibGU8QWRkcmVzcz47XG4gICAgZm9yY2VMb2FkZXI6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIGNhcmRzJCBvYnNlcnZhYmxlIGluc3RlYWQuXG4gICAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICAgKi9cbiAgICBjYXJkczogQ2FyZFtdO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAgICogVGhpcyB2YXJpYWJsZSB3aWxsIG5vIGxvbmdlciBiZSBpbiB1c2UuIEF2b2lkIHVzaW5nIGl0LlxuICAgICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAgICovXG4gICAgZ29UbzogQ2hlY2tvdXRTdGVwVHlwZTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFRoaXMgdmFyaWFibGUgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2Ugc2VsZWN0QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKSBpbnN0ZWFkLlxuICAgICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAgICovXG4gICAgc2V0QWRkcmVzczogQWRkcmVzcztcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFRoaXMgdmFyaWFibGUgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBBdm9pZCB1c2luZyBpdC5cbiAgICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgICAqL1xuICAgIHNldEFkZHJlc3NTdWI6IFN1YnNjcmlwdGlvbjtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFRoaXMgdmFyaWFibGUgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2Ugc2VsZWN0ZWRBZGRyZXNzJCBvYnNlcnZhYmxlIGluc3RlYWQuXG4gICAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICAgKi9cbiAgICBzZWxlY3RlZEFkZHJlc3NTdWI6IFN1YnNjcmlwdGlvbjtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFRoaXMgdmFyaWFibGUgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2UgQ2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldE5leHRDaGVja291dFN0ZXBVcmwodGhpcy5hY3RpdmF0ZWRSb3V0ZSkgaW5zdGVhZC5cbiAgICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgICAqL1xuICAgIGNoZWNrb3V0U3RlcFVybE5leHQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFRoaXMgdmFyaWFibGUgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2UgQ2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldFByZXZpb3VzQ2hlY2tvdXRTdGVwVXJsKHRoaXMuYWN0aXZhdGVkUm91dGUpIGluc3RlYWQuXG4gICAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICAgKi9cbiAgICBjaGVja291dFN0ZXBVcmxQcmV2aW91czogc3RyaW5nO1xuICAgIGlzR3Vlc3RDaGVja291dDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFRoaXMgdmFyaWFibGUgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2Ugc2VsZWN0ZWRBZGRyZXNzJCBvYnNlcnZhYmxlIGluc3RlYWQuXG4gICAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICAgKi9cbiAgICBzZWxlY3RlZEFkZHJlc3M6IEFkZHJlc3M7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBnZXRDYXJkQ29udGVudChhZGRyZXNzOiBBZGRyZXNzLCBzZWxlY3RlZDogYW55LCB0ZXh0RGVmYXVsdFNoaXBwaW5nQWRkcmVzczogc3RyaW5nLCB0ZXh0U2hpcFRvVGhpc0FkZHJlc3M6IHN0cmluZywgdGV4dFNlbGVjdGVkOiBzdHJpbmcpOiBDYXJkO1xuICAgIHNlbGVjdEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBVc2UgYWRkQWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKSBpbnN0ZWFkLlxuICAgICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAgICovXG4gICAgYWRkQWRkcmVzcyhhZGRyZXNzOiB7XG4gICAgICAgIG5ld0FkZHJlc3M6IGJvb2xlYW47XG4gICAgICAgIGFkZHJlc3M6IEFkZHJlc3M7XG4gICAgfSB8IGFueSk6IGFueTtcbiAgICBzaG93TmV3QWRkcmVzc0Zvcm0oKTogdm9pZDtcbiAgICBoaWRlTmV3QWRkcmVzc0Zvcm0oZ29QcmV2aW91cz86IGJvb2xlYW4pOiB2b2lkO1xuICAgIGdvTmV4dCgpOiB2b2lkO1xuICAgIGdvUHJldmlvdXMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFRoaXMgdmFyaWFibGUgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2Ugc2VsZWN0QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKSBpbnN0ZWFkLlxuICAgICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAgICovXG4gICAgYWRkcmVzc1NlbGVjdGVkKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2UgZ29QcmV2aW91cygpIGluc3RlYWQuXG4gICAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICAgKi9cbiAgICBiYWNrKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIG5vIGxvbmdlciBiZSBpbiB1c2UuIFVzZSBnb05leHQoKSBpbnN0ZWFkLlxuICAgICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAgICovXG4gICAgbmV4dCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2UgYWRkQWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKSBpbnN0ZWFkLlxuICAgICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAgICovXG4gICAgYWRkTmV3QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gUmVtb3ZlLlxuICAgICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAgICovXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==