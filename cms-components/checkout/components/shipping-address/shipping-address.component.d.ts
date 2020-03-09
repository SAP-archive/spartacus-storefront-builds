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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrSEE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlLCBBZGRyZXNzLCBDaGVja291dERlbGl2ZXJ5U2VydmljZSwgUm91dGluZ1NlcnZpY2UsIFRyYW5zbGF0aW9uU2VydmljZSwgVXNlckFkZHJlc3NTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwVHlwZSB9IGZyb20gJy4uLy4uJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZFdpdGhBZGRyZXNzIHtcbiAgICBjYXJkOiBDYXJkO1xuICAgIGFkZHJlc3M6IEFkZHJlc3M7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTaGlwcGluZ0FkZHJlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlLCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSwgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSwgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlKTtcbiAgICBleGlzdGluZ0FkZHJlc3NlcyQ6IE9ic2VydmFibGU8QWRkcmVzc1tdPjtcbiAgICBuZXdBZGRyZXNzRm9ybU1hbnVhbGx5T3BlbmVkOiBib29sZWFuO1xuICAgIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgY2FyZHMkOiBPYnNlcnZhYmxlPENhcmRXaXRoQWRkcmVzc1tdPjtcbiAgICBzZWxlY3RlZEFkZHJlc3MkOiBPYnNlcnZhYmxlPEFkZHJlc3M+O1xuICAgIGZvcmNlTG9hZGVyOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAgICogVGhpcyB2YXJpYWJsZSB3aWxsIG5vIGxvbmdlciBiZSBpbiB1c2UuIFVzZSBjYXJkcyQgb2JzZXJ2YWJsZSBpbnN0ZWFkLlxuICAgICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAgICovXG4gICAgY2FyZHM6IENhcmRbXTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFRoaXMgdmFyaWFibGUgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBBdm9pZCB1c2luZyBpdC5cbiAgICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgICAqL1xuICAgIGdvVG86IENoZWNrb3V0U3RlcFR5cGU7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIHNlbGVjdEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcykgaW5zdGVhZC5cbiAgICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgICAqL1xuICAgIHNldEFkZHJlc3M6IEFkZHJlc3M7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gQXZvaWQgdXNpbmcgaXQuXG4gICAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICAgKi9cbiAgICBzZXRBZGRyZXNzU3ViOiBTdWJzY3JpcHRpb247XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIHNlbGVjdGVkQWRkcmVzcyQgb2JzZXJ2YWJsZSBpbnN0ZWFkLlxuICAgICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAgICovXG4gICAgc2VsZWN0ZWRBZGRyZXNzU3ViOiBTdWJzY3JpcHRpb247XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIENoZWNrb3V0Q29uZmlnU2VydmljZS5nZXROZXh0Q2hlY2tvdXRTdGVwVXJsKHRoaXMuYWN0aXZhdGVkUm91dGUpIGluc3RlYWQuXG4gICAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICAgKi9cbiAgICBjaGVja291dFN0ZXBVcmxOZXh0OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIENoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRQcmV2aW91c0NoZWNrb3V0U3RlcFVybCh0aGlzLmFjdGl2YXRlZFJvdXRlKSBpbnN0ZWFkLlxuICAgICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAgICovXG4gICAgY2hlY2tvdXRTdGVwVXJsUHJldmlvdXM6IHN0cmluZztcbiAgICBpc0d1ZXN0Q2hlY2tvdXQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIHNlbGVjdGVkQWRkcmVzcyQgb2JzZXJ2YWJsZSBpbnN0ZWFkLlxuICAgICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAgICovXG4gICAgc2VsZWN0ZWRBZGRyZXNzOiBBZGRyZXNzO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgZ2V0Q2FyZENvbnRlbnQoYWRkcmVzczogQWRkcmVzcywgc2VsZWN0ZWQ6IGFueSwgdGV4dERlZmF1bHRTaGlwcGluZ0FkZHJlc3M6IHN0cmluZywgdGV4dFNoaXBUb1RoaXNBZGRyZXNzOiBzdHJpbmcsIHRleHRTZWxlY3RlZDogc3RyaW5nKTogQ2FyZDtcbiAgICBzZWxlY3RBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAgICogVXNlIGFkZEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcykgaW5zdGVhZC5cbiAgICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgICAqL1xuICAgIGFkZEFkZHJlc3MoYWRkcmVzczoge1xuICAgICAgICBuZXdBZGRyZXNzOiBib29sZWFuO1xuICAgICAgICBhZGRyZXNzOiBBZGRyZXNzO1xuICAgIH0gfCBhbnkpOiBhbnk7XG4gICAgc2hvd05ld0FkZHJlc3NGb3JtKCk6IHZvaWQ7XG4gICAgaGlkZU5ld0FkZHJlc3NGb3JtKGdvUHJldmlvdXM/OiBib29sZWFuKTogdm9pZDtcbiAgICBnb05leHQoKTogdm9pZDtcbiAgICBnb1ByZXZpb3VzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIHNlbGVjdEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcykgaW5zdGVhZC5cbiAgICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgICAqL1xuICAgIGFkZHJlc3NTZWxlY3RlZChhZGRyZXNzOiBBZGRyZXNzKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIGdvUHJldmlvdXMoKSBpbnN0ZWFkLlxuICAgICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAgICovXG4gICAgYmFjaygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2UgZ29OZXh0KCkgaW5zdGVhZC5cbiAgICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgICAqL1xuICAgIG5leHQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIGFkZEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcykgaW5zdGVhZC5cbiAgICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgICAqL1xuICAgIGFkZE5ld0FkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIG5vIGxvbmdlciBiZSBpbiB1c2UuIFJlbW92ZS5cbiAgICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=