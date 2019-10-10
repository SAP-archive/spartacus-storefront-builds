/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService, CheckoutDeliveryService, RoutingService, TranslationService, UserAddressService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CheckoutConfigService } from '../../services/checkout-config.service';
/**
 * @record
 */
export function CardWithAddress() { }
if (false) {
    /** @type {?} */
    CardWithAddress.prototype.card;
    /** @type {?} */
    CardWithAddress.prototype.address;
}
export class ShippingAddressComponent {
    /**
     * @param {?} userAddressService
     * @param {?} cartService
     * @param {?} routingService
     * @param {?} checkoutDeliveryService
     * @param {?} checkoutConfigService
     * @param {?} activatedRoute
     * @param {?} translation
     */
    constructor(userAddressService, cartService, routingService, checkoutDeliveryService, checkoutConfigService, activatedRoute, translation) {
        this.userAddressService = userAddressService;
        this.cartService = cartService;
        this.routingService = routingService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.translation = translation;
        this.newAddressFormManuallyOpened = false;
        this.forceLoader = false; // this helps with smoother steps transition
        // this helps with smoother steps transition
        /**
         * @deprecated since version 1.3
         * This variable will no longer be in use. Use cards$ observable instead.
         * TODO(issue:#3921) deprecated since 1.3
         */
        this.cards = [];
        /**
         * @deprecated since version 1.3
         * This variable will no longer be in use. Avoid using it.
         * TODO(issue:#3921) deprecated since 1.3
         */
        this.goTo = null;
        /**
         * @deprecated since version 1.3
         * This variable will no longer be in use. Use CheckoutConfigService.getNextCheckoutStepUrl(this.activatedRoute) instead.
         * TODO(issue:#3921) deprecated since 1.3
         */
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        /**
         * @deprecated since version 1.3
         * This variable will no longer be in use. Use CheckoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute) instead.
         * TODO(issue:#3921) deprecated since 1.3
         */
        this.checkoutStepUrlPrevious = 'cart';
        this.isGuestCheckout = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.goTo = null;
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = 'cart';
        this.isLoading$ = this.userAddressService.getAddressesLoading();
        this.existingAddresses$ = this.userAddressService.getAddresses();
        this.selectedAddress$ = this.checkoutDeliveryService.getDeliveryAddress();
        this.cards$ = combineLatest([
            this.existingAddresses$,
            this.selectedAddress$,
            this.translation.translate('checkoutAddress.defaultShippingAddress'),
            this.translation.translate('checkoutAddress.shipToThisAddress'),
            this.translation.translate('addressCard.selected'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([addresses, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected,]) => {
            // Select default address if none selected
            if (addresses.length &&
                (!selected ||
                    Object.keys(selected).length === 0 ||
                    !this.selectedAddress)) {
                /** @type {?} */
                const defaultAddress = addresses.find((/**
                 * @param {?} address
                 * @return {?}
                 */
                address => address.defaultAddress));
                selected = defaultAddress;
                this.selectAddress(defaultAddress);
            }
            return addresses.map((/**
             * @param {?} address
             * @return {?}
             */
            address => {
                /** @type {?} */
                const card = this.getCardContent(address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected);
                return {
                    address,
                    card,
                };
            }));
        })));
        if (!this.cartService.isGuestCart()) {
            this.userAddressService.loadAddresses();
        }
        else {
            this.isGuestCheckout = true;
        }
    }
    /**
     * @param {?} address
     * @param {?} selected
     * @param {?} textDefaultShippingAddress
     * @param {?} textShipToThisAddress
     * @param {?} textSelected
     * @return {?}
     */
    getCardContent(address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected) {
        /** @type {?} */
        let region = '';
        if (address.region && address.region.isocode) {
            region = address.region.isocode + ', ';
        }
        return {
            title: address.defaultAddress ? textDefaultShippingAddress : '',
            textBold: address.firstName + ' ' + address.lastName,
            text: [
                address.line1,
                address.line2,
                address.town + ', ' + region + address.country.isocode,
                address.postalCode,
                address.phone,
            ],
            actions: [{ name: textShipToThisAddress, event: 'send' }],
            header: selected && selected.id === address.id ? textSelected : '',
        };
    }
    /**
     * @param {?} address
     * @return {?}
     */
    selectAddress(address) {
        this.selectedAddress = address;
        this.checkoutDeliveryService.setDeliveryAddress(address);
    }
    /**
     * @param {?} address
     * @return {?}
     */
    addAddress(address) {
        // TODO(issue:#3921) deprecated since 1.3 - Remove temp address
        /** @type {?} */
        const tempAddress = address['address']
            ? address['address']
            : address;
        /** @type {?} */
        const selectedSub = this.selectedAddress$.subscribe((/**
         * @param {?} selected
         * @return {?}
         */
        selected => {
            if (selected && selected.shippingAddress) {
                this.goNext();
                selectedSub.unsubscribe();
            }
        }));
        this.forceLoader = true;
        // TODO(issue:#3921) deprecated since 1.3 - Remove this condition
        if (address['address'] || address['newAddress']) {
            address['newAddress']
                ? this.checkoutDeliveryService.createAndSetAddress(tempAddress)
                : this.selectAddress(tempAddress);
        }
        else {
            // TODO(issue:#3921) deprecated since 1.3 - Use instead of condition
            this.existingAddresses$.pipe(take(1)).subscribe((/**
             * @param {?} addresses
             * @return {?}
             */
            addresses => {
                addresses.includes(tempAddress)
                    ? this.selectAddress(tempAddress)
                    : this.checkoutDeliveryService.createAndSetAddress(tempAddress);
            }));
        }
    }
    /**
     * @return {?}
     */
    showNewAddressForm() {
        this.newAddressFormManuallyOpened = true;
    }
    /**
     * @param {?=} goPrevious
     * @return {?}
     */
    hideNewAddressForm(goPrevious = false) {
        this.newAddressFormManuallyOpened = false;
        if (goPrevious) {
            this.goPrevious();
        }
    }
    /**
     * @return {?}
     */
    goNext() {
        this.routingService.go(this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute));
    }
    /**
     * @return {?}
     */
    goPrevious() {
        this.routingService.go(this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute) || 'cart');
    }
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use selectAddress(address: Address) instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @param {?} address
     * @return {?}
     */
    addressSelected(address) {
        this.selectAddress(address);
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goPrevious() instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @return {?}
     */
    back() {
        this.goPrevious();
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goNext() instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @return {?}
     */
    next() {
        this.goNext();
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use addAddress(address: Address) instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @param {?} address
     * @return {?}
     */
    addNewAddress(address) {
        this.addAddress(address);
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Remove.
     * TODO(issue:#3921) deprecated since 1.3
     * @return {?}
     */
    ngOnDestroy() {
        if (this.setAddressSub) {
            this.setAddressSub.unsubscribe();
        }
        if (this.selectedAddressSub) {
            this.selectedAddressSub.unsubscribe();
        }
    }
}
ShippingAddressComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-shipping-address',
                template: "<ng-container *ngIf=\"cards$ | async as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutAddress.shippingAddress' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!forceLoader && !(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        cards?.length && !newAddressFormManuallyOpened;\n        else newAddressForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'checkoutAddress.selectYourShippingAddress' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewAddressForm()\"\n          >\n            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-shipping-address-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div\n            class=\"cx-shipping-address-card-inner\"\n            (click)=\"addressSelected(card.address)\"\n          >\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.card\"\n              (sendCard)=\"addressSelected(card.address)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"cx-btn btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'checkout.backToCart' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-primary\"\n            [disabled]=\"\n              (!selectedAddress || !selectedAddress.id) &&\n              !(selectedAddress$ | async)?.shippingAddress\n            \"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newAddressForm>\n      <ng-container *ngIf=\"cards.length; else initialAddressForm\">\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          (backToAddress)=\"hideNewAddressForm(false)\"\n          (submitAddress)=\"addAddress($event)\"\n        ></cx-address-form>\n      </ng-container>\n      <ng-template #initialAddressForm>\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          [setAsDefaultField]=\"!isGuestCheckout\"\n          [addressData]=\"setAddress\"\n          cancelBtnLabel=\"{{ 'checkout.backToCart' | cxTranslate }}\"\n          (backToAddress)=\"hideNewAddressForm(true)\"\n          (submitAddress)=\"addAddress($event)\"\n        ></cx-address-form>\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ShippingAddressComponent.ctorParameters = () => [
    { type: UserAddressService },
    { type: CartService },
    { type: RoutingService },
    { type: CheckoutDeliveryService },
    { type: CheckoutConfigService },
    { type: ActivatedRoute },
    { type: TranslationService }
];
if (false) {
    /** @type {?} */
    ShippingAddressComponent.prototype.existingAddresses$;
    /** @type {?} */
    ShippingAddressComponent.prototype.newAddressFormManuallyOpened;
    /** @type {?} */
    ShippingAddressComponent.prototype.isLoading$;
    /** @type {?} */
    ShippingAddressComponent.prototype.cards$;
    /** @type {?} */
    ShippingAddressComponent.prototype.selectedAddress$;
    /** @type {?} */
    ShippingAddressComponent.prototype.forceLoader;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use cards$ observable instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @type {?}
     */
    ShippingAddressComponent.prototype.cards;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Avoid using it.
     * TODO(issue:#3921) deprecated since 1.3
     * @type {?}
     */
    ShippingAddressComponent.prototype.goTo;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use selectAddress(address: Address) instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @type {?}
     */
    ShippingAddressComponent.prototype.setAddress;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Avoid using it.
     * TODO(issue:#3921) deprecated since 1.3
     * @type {?}
     */
    ShippingAddressComponent.prototype.setAddressSub;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use selectedAddress$ observable instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @type {?}
     */
    ShippingAddressComponent.prototype.selectedAddressSub;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use CheckoutConfigService.getNextCheckoutStepUrl(this.activatedRoute) instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @type {?}
     */
    ShippingAddressComponent.prototype.checkoutStepUrlNext;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use CheckoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute) instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @type {?}
     */
    ShippingAddressComponent.prototype.checkoutStepUrlPrevious;
    /** @type {?} */
    ShippingAddressComponent.prototype.isGuestCheckout;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use selectedAddress$ observable instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @type {?}
     */
    ShippingAddressComponent.prototype.selectedAddress;
    /**
     * @type {?}
     * @protected
     */
    ShippingAddressComponent.prototype.userAddressService;
    /**
     * @type {?}
     * @protected
     */
    ShippingAddressComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    ShippingAddressComponent.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    ShippingAddressComponent.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @private
     */
    ShippingAddressComponent.prototype.checkoutConfigService;
    /**
     * @type {?}
     * @private
     */
    ShippingAddressComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    ShippingAddressComponent.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsV0FBVyxFQUNYLHVCQUF1QixFQUN2QixjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQTRCLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7Ozs7QUFHL0UscUNBR0M7OztJQUZDLCtCQUFXOztJQUNYLGtDQUFpQjs7QUFRbkIsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7Ozs7OztJQUNuQyxZQUNZLGtCQUFzQyxFQUN0QyxXQUF3QixFQUN4QixjQUE4QixFQUM5Qix1QkFBZ0QsRUFDbEQscUJBQTRDLEVBQzVDLGNBQThCLEVBQzlCLFdBQStCO1FBTjdCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDbEQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JB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dUJBQXVCO1lBUWhCLHFCQUFxQjtZQVpyQixjQUFjO1lBTXJCLGtCQUFrQjs7OztJQTZCbEIsc0RBQTBDOztJQUMxQyxnRUFBcUM7O0lBQ3JDLDhDQUFnQzs7SUFDaEMsMENBQXNDOztJQUN0QyxvREFBc0M7O0lBQ3RDLCtDQUFvQjs7Ozs7OztJQU9wQix5Q0FBbUI7Ozs7Ozs7SUFNbkIsd0NBQThCOzs7Ozs7O0lBTTlCLDhDQUFvQjs7Ozs7OztJQU1wQixpREFBNEI7Ozs7Ozs7SUFNNUIsc0RBQWlDOzs7Ozs7O0lBTWpDLHVEQUVFOzs7Ozs7O0lBTUYsMkRBQWlDOztJQUVqQyxtREFBd0I7Ozs7Ozs7SUFPeEIsbURBQXlCOzs7OztJQW5FdkIsc0RBQWdEOzs7OztJQUNoRCwrQ0FBa0M7Ozs7O0lBQ2xDLGtEQUF3Qzs7Ozs7SUFDeEMsMkRBQTBEOzs7OztJQUMxRCx5REFBb0Q7Ozs7O0lBQ3BELGtEQUFzQzs7Ozs7SUFDdEMsK0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ2FydFNlcnZpY2UsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VyQWRkcmVzc1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi8uLic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZFdpdGhBZGRyZXNzIHtcbiAgY2FyZDogQ2FyZDtcbiAgYWRkcmVzczogQWRkcmVzcztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc2hpcHBpbmctYWRkcmVzcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaGlwcGluZy1hZGRyZXNzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNoaXBwaW5nQWRkcmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cbiAgZXhpc3RpbmdBZGRyZXNzZXMkOiBPYnNlcnZhYmxlPEFkZHJlc3NbXT47XG4gIG5ld0FkZHJlc3NGb3JtTWFudWFsbHlPcGVuZWQgPSBmYWxzZTtcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgY2FyZHMkOiBPYnNlcnZhYmxlPENhcmRXaXRoQWRkcmVzc1tdPjtcbiAgc2VsZWN0ZWRBZGRyZXNzJDogT2JzZXJ2YWJsZTxBZGRyZXNzPjtcbiAgZm9yY2VMb2FkZXIgPSBmYWxzZTsgLy8gdGhpcyBoZWxwcyB3aXRoIHNtb290aGVyIHN0ZXBzIHRyYW5zaXRpb25cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVGhpcyB2YXJpYWJsZSB3aWxsIG5vIGxvbmdlciBiZSBpbiB1c2UuIFVzZSBjYXJkcyQgb2JzZXJ2YWJsZSBpbnN0ZWFkLlxuICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgKi9cbiAgY2FyZHM6IENhcmRbXSA9IFtdO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVGhpcyB2YXJpYWJsZSB3aWxsIG5vIGxvbmdlciBiZSBpbiB1c2UuIEF2b2lkIHVzaW5nIGl0LlxuICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgKi9cbiAgZ29UbzogQ2hlY2tvdXRTdGVwVHlwZSA9IG51bGw7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIHNlbGVjdEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcykgaW5zdGVhZC5cbiAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICovXG4gIHNldEFkZHJlc3M6IEFkZHJlc3M7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gQXZvaWQgdXNpbmcgaXQuXG4gICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAqL1xuICBzZXRBZGRyZXNzU3ViOiBTdWJzY3JpcHRpb247XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIHNlbGVjdGVkQWRkcmVzcyQgb2JzZXJ2YWJsZSBpbnN0ZWFkLlxuICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgKi9cbiAgc2VsZWN0ZWRBZGRyZXNzU3ViOiBTdWJzY3JpcHRpb247XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIENoZWNrb3V0Q29uZmlnU2VydmljZS5nZXROZXh0Q2hlY2tvdXRTdGVwVXJsKHRoaXMuYWN0aXZhdGVkUm91dGUpIGluc3RlYWQuXG4gICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAqL1xuICBjaGVja291dFN0ZXBVcmxOZXh0ID0gdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0TmV4dENoZWNrb3V0U3RlcFVybChcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIENoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRQcmV2aW91c0NoZWNrb3V0U3RlcFVybCh0aGlzLmFjdGl2YXRlZFJvdXRlKSBpbnN0ZWFkLlxuICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgKi9cbiAgY2hlY2tvdXRTdGVwVXJsUHJldmlvdXMgPSAnY2FydCc7XG5cbiAgaXNHdWVzdENoZWNrb3V0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFRoaXMgdmFyaWFibGUgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2Ugc2VsZWN0ZWRBZGRyZXNzJCBvYnNlcnZhYmxlIGluc3RlYWQuXG4gICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAqL1xuICBzZWxlY3RlZEFkZHJlc3M6IEFkZHJlc3M7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nb1RvID0gbnVsbDtcbiAgICB0aGlzLmNoZWNrb3V0U3RlcFVybE5leHQgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXROZXh0Q2hlY2tvdXRTdGVwVXJsKFxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZVxuICAgICk7XG4gICAgdGhpcy5jaGVja291dFN0ZXBVcmxQcmV2aW91cyA9ICdjYXJ0JztcbiAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRBZGRyZXNzZXNMb2FkaW5nKCk7XG4gICAgdGhpcy5leGlzdGluZ0FkZHJlc3NlcyQgPSB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRBZGRyZXNzZXMoKTtcbiAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyQgPSB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmdldERlbGl2ZXJ5QWRkcmVzcygpO1xuXG4gICAgdGhpcy5jYXJkcyQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuZXhpc3RpbmdBZGRyZXNzZXMkLFxuICAgICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MkLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0QWRkcmVzcy5kZWZhdWx0U2hpcHBpbmdBZGRyZXNzJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRBZGRyZXNzLnNoaXBUb1RoaXNBZGRyZXNzJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnYWRkcmVzc0NhcmQuc2VsZWN0ZWQnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW1xuICAgICAgICAgIGFkZHJlc3NlcyxcbiAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICB0ZXh0RGVmYXVsdFNoaXBwaW5nQWRkcmVzcyxcbiAgICAgICAgICB0ZXh0U2hpcFRvVGhpc0FkZHJlc3MsXG4gICAgICAgICAgdGV4dFNlbGVjdGVkLFxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgLy8gU2VsZWN0IGRlZmF1bHQgYWRkcmVzcyBpZiBub25lIHNlbGVjdGVkXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgYWRkcmVzc2VzLmxlbmd0aCAmJlxuICAgICAgICAgICAgKCFzZWxlY3RlZCB8fFxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzZWxlY3RlZCkubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICAgICAgICF0aGlzLnNlbGVjdGVkQWRkcmVzcylcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRBZGRyZXNzID0gYWRkcmVzc2VzLmZpbmQoXG4gICAgICAgICAgICAgIGFkZHJlc3MgPT4gYWRkcmVzcy5kZWZhdWx0QWRkcmVzc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNlbGVjdGVkID0gZGVmYXVsdEFkZHJlc3M7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFkZHJlc3MoZGVmYXVsdEFkZHJlc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWRkcmVzc2VzLm1hcChhZGRyZXNzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmRDb250ZW50KFxuICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgdGV4dERlZmF1bHRTaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgICAgIHRleHRTaGlwVG9UaGlzQWRkcmVzcyxcbiAgICAgICAgICAgICAgdGV4dFNlbGVjdGVkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgY2FyZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuXG4gICAgaWYgKCF0aGlzLmNhcnRTZXJ2aWNlLmlzR3Vlc3RDYXJ0KCkpIHtcbiAgICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmxvYWRBZGRyZXNzZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0d1ZXN0Q2hlY2tvdXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdldENhcmRDb250ZW50KFxuICAgIGFkZHJlc3M6IEFkZHJlc3MsXG4gICAgc2VsZWN0ZWQ6IGFueSxcbiAgICB0ZXh0RGVmYXVsdFNoaXBwaW5nQWRkcmVzczogc3RyaW5nLFxuICAgIHRleHRTaGlwVG9UaGlzQWRkcmVzczogc3RyaW5nLFxuICAgIHRleHRTZWxlY3RlZDogc3RyaW5nXG4gICk6IENhcmQge1xuICAgIGxldCByZWdpb24gPSAnJztcblxuICAgIGlmIChhZGRyZXNzLnJlZ2lvbiAmJiBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlKSB7XG4gICAgICByZWdpb24gPSBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlICsgJywgJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IGFkZHJlc3MuZGVmYXVsdEFkZHJlc3MgPyB0ZXh0RGVmYXVsdFNoaXBwaW5nQWRkcmVzcyA6ICcnLFxuICAgICAgdGV4dEJvbGQ6IGFkZHJlc3MuZmlyc3ROYW1lICsgJyAnICsgYWRkcmVzcy5sYXN0TmFtZSxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgYWRkcmVzcy5saW5lMSxcbiAgICAgICAgYWRkcmVzcy5saW5lMixcbiAgICAgICAgYWRkcmVzcy50b3duICsgJywgJyArIHJlZ2lvbiArIGFkZHJlc3MuY291bnRyeS5pc29jb2RlLFxuICAgICAgICBhZGRyZXNzLnBvc3RhbENvZGUsXG4gICAgICAgIGFkZHJlc3MucGhvbmUsXG4gICAgICBdLFxuICAgICAgYWN0aW9uczogW3sgbmFtZTogdGV4dFNoaXBUb1RoaXNBZGRyZXNzLCBldmVudDogJ3NlbmQnIH1dLFxuICAgICAgaGVhZGVyOiBzZWxlY3RlZCAmJiBzZWxlY3RlZC5pZCA9PT0gYWRkcmVzcy5pZCA/IHRleHRTZWxlY3RlZCA6ICcnLFxuICAgIH07XG4gIH1cblxuICBzZWxlY3RBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5zZXREZWxpdmVyeUFkZHJlc3MoYWRkcmVzcyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVXNlIGFkZEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcykgaW5zdGVhZC5cbiAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICovXG4gIGFkZEFkZHJlc3MoYWRkcmVzczogeyBuZXdBZGRyZXNzOiBib29sZWFuOyBhZGRyZXNzOiBBZGRyZXNzIH0gfCBhbnkpO1xuICBhZGRBZGRyZXNzKFxuICAgIGFkZHJlc3M6IEFkZHJlc3MgfCB7IG5ld0FkZHJlc3M6IGJvb2xlYW47IGFkZHJlc3M6IEFkZHJlc3MgfVxuICApOiB2b2lkIHtcbiAgICAvLyBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuMyAtIFJlbW92ZSB0ZW1wIGFkZHJlc3NcbiAgICBjb25zdCB0ZW1wQWRkcmVzczogQWRkcmVzcyA9IGFkZHJlc3NbJ2FkZHJlc3MnXVxuICAgICAgPyBhZGRyZXNzWydhZGRyZXNzJ11cbiAgICAgIDogYWRkcmVzcztcblxuICAgIGNvbnN0IHNlbGVjdGVkU3ViID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MkLnN1YnNjcmliZShzZWxlY3RlZCA9PiB7XG4gICAgICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQuc2hpcHBpbmdBZGRyZXNzKSB7XG4gICAgICAgIHRoaXMuZ29OZXh0KCk7XG4gICAgICAgIHNlbGVjdGVkU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcmNlTG9hZGVyID0gdHJ1ZTtcblxuICAgIC8vIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zIC0gUmVtb3ZlIHRoaXMgY29uZGl0aW9uXG4gICAgaWYgKGFkZHJlc3NbJ2FkZHJlc3MnXSB8fCBhZGRyZXNzWyduZXdBZGRyZXNzJ10pIHtcbiAgICAgIGFkZHJlc3NbJ25ld0FkZHJlc3MnXVxuICAgICAgICA/IHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY3JlYXRlQW5kU2V0QWRkcmVzcyh0ZW1wQWRkcmVzcylcbiAgICAgICAgOiB0aGlzLnNlbGVjdEFkZHJlc3ModGVtcEFkZHJlc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuMyAtIFVzZSBpbnN0ZWFkIG9mIGNvbmRpdGlvblxuICAgICAgdGhpcy5leGlzdGluZ0FkZHJlc3NlcyQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoYWRkcmVzc2VzID0+IHtcbiAgICAgICAgYWRkcmVzc2VzLmluY2x1ZGVzKHRlbXBBZGRyZXNzKVxuICAgICAgICAgID8gdGhpcy5zZWxlY3RBZGRyZXNzKHRlbXBBZGRyZXNzKVxuICAgICAgICAgIDogdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5jcmVhdGVBbmRTZXRBZGRyZXNzKHRlbXBBZGRyZXNzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNob3dOZXdBZGRyZXNzRm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLm5ld0FkZHJlc3NGb3JtTWFudWFsbHlPcGVuZWQgPSB0cnVlO1xuICB9XG5cbiAgaGlkZU5ld0FkZHJlc3NGb3JtKGdvUHJldmlvdXM6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMubmV3QWRkcmVzc0Zvcm1NYW51YWxseU9wZW5lZCA9IGZhbHNlO1xuICAgIGlmIChnb1ByZXZpb3VzKSB7XG4gICAgICB0aGlzLmdvUHJldmlvdXMoKTtcbiAgICB9XG4gIH1cblxuICBnb05leHQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyhcbiAgICAgIHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldE5leHRDaGVja291dFN0ZXBVcmwodGhpcy5hY3RpdmF0ZWRSb3V0ZSlcbiAgICApO1xuICB9XG5cbiAgZ29QcmV2aW91cygpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKFxuICAgICAgdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0UHJldmlvdXNDaGVja291dFN0ZXBVcmwoXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGVcbiAgICAgICkgfHwgJ2NhcnQnXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIHNlbGVjdEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcykgaW5zdGVhZC5cbiAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICovXG4gIGFkZHJlc3NTZWxlY3RlZChhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RBZGRyZXNzKGFkZHJlc3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIGdvUHJldmlvdXMoKSBpbnN0ZWFkLlxuICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgKi9cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmdvUHJldmlvdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIG1ldGhvZCB3aWxsIG5vIGxvbmdlciBiZSBpbiB1c2UuIFVzZSBnb05leHQoKSBpbnN0ZWFkLlxuICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgKi9cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLmdvTmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIGFkZEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcykgaW5zdGVhZC5cbiAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICovXG4gIGFkZE5ld0FkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMuYWRkQWRkcmVzcyhhZGRyZXNzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIG1ldGhvZCB3aWxsIG5vIGxvbmdlciBiZSBpbiB1c2UuIFJlbW92ZS5cbiAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNldEFkZHJlc3NTdWIpIHtcbiAgICAgIHRoaXMuc2V0QWRkcmVzc1N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3RlZEFkZHJlc3NTdWIpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=