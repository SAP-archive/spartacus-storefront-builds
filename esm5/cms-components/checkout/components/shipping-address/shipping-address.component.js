import { __decorate, __read } from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartService, Address, CheckoutDeliveryService, RoutingService, TranslationService, UserAddressService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CheckoutConfigService } from '../../services/checkout-config.service';
var ShippingAddressComponent = /** @class */ (function () {
    function ShippingAddressComponent(userAddressService, routingService, checkoutDeliveryService, checkoutConfigService, activatedRoute, translation, activeCartService) {
        this.userAddressService = userAddressService;
        this.routingService = routingService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.translation = translation;
        this.activeCartService = activeCartService;
        this.newAddressFormManuallyOpened = false;
        this.forceLoader = false; // this helps with smoother steps transition
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
    ShippingAddressComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 5), addresses = _b[0], selected = _b[1], textDefaultShippingAddress = _b[2], textShipToThisAddress = _b[3], textSelected = _b[4];
            // Select default address if none selected
            if (addresses.length &&
                (!selected ||
                    Object.keys(selected).length === 0 ||
                    !_this.selectedAddress)) {
                var defaultAddress = addresses.find(function (address) { return address.defaultAddress; });
                selected = defaultAddress;
                _this.selectAddress(defaultAddress);
            }
            return addresses.map(function (address) {
                var card = _this.getCardContent(address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected);
                return {
                    address: address,
                    card: card,
                };
            });
        }));
        if (!this.activeCartService.isGuestCart()) {
            this.userAddressService.loadAddresses();
        }
        else {
            this.isGuestCheckout = true;
        }
    };
    ShippingAddressComponent.prototype.getCardContent = function (address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected) {
        var region = '';
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
    };
    ShippingAddressComponent.prototype.selectAddress = function (address) {
        this.selectedAddress = address;
        this.checkoutDeliveryService.setDeliveryAddress(address);
    };
    ShippingAddressComponent.prototype.addAddress = function (address) {
        var _this = this;
        // TODO(issue:#3921) deprecated since 1.3 - Remove temp address
        var tempAddress = address['address']
            ? address['address']
            : address;
        var selectedSub = this.selectedAddress$.subscribe(function (selected) {
            if (selected && selected.shippingAddress) {
                _this.goNext();
                selectedSub.unsubscribe();
            }
        });
        this.forceLoader = true;
        // TODO(issue:#3921) deprecated since 1.3 - Remove this condition
        if (address['address'] || address['newAddress']) {
            address['newAddress']
                ? this.checkoutDeliveryService.createAndSetAddress(tempAddress)
                : this.selectAddress(tempAddress);
        }
        else {
            // TODO(issue:#3921) deprecated since 1.3 - Use instead of condition
            this.existingAddresses$.pipe(take(1)).subscribe(function (addresses) {
                addresses.includes(tempAddress)
                    ? _this.selectAddress(tempAddress)
                    : _this.checkoutDeliveryService.createAndSetAddress(tempAddress);
            });
        }
    };
    ShippingAddressComponent.prototype.showNewAddressForm = function () {
        this.newAddressFormManuallyOpened = true;
    };
    ShippingAddressComponent.prototype.hideNewAddressForm = function (goPrevious) {
        if (goPrevious === void 0) { goPrevious = false; }
        this.newAddressFormManuallyOpened = false;
        if (goPrevious) {
            this.goPrevious();
        }
    };
    ShippingAddressComponent.prototype.goNext = function () {
        this.routingService.go(this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute));
    };
    ShippingAddressComponent.prototype.goPrevious = function () {
        this.routingService.go(this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute) || 'cart');
    };
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use selectAddress(address: Address) instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    ShippingAddressComponent.prototype.addressSelected = function (address) {
        this.selectAddress(address);
    };
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goPrevious() instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    ShippingAddressComponent.prototype.back = function () {
        this.goPrevious();
    };
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goNext() instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    ShippingAddressComponent.prototype.next = function () {
        this.goNext();
    };
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use addAddress(address: Address) instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    ShippingAddressComponent.prototype.addNewAddress = function (address) {
        this.addAddress(address);
    };
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Remove.
     * TODO(issue:#3921) deprecated since 1.3
     */
    ShippingAddressComponent.prototype.ngOnDestroy = function () {
        if (this.setAddressSub) {
            this.setAddressSub.unsubscribe();
        }
        if (this.selectedAddressSub) {
            this.selectedAddressSub.unsubscribe();
        }
    };
    ShippingAddressComponent.ctorParameters = function () { return [
        { type: UserAddressService },
        { type: RoutingService },
        { type: CheckoutDeliveryService },
        { type: CheckoutConfigService },
        { type: ActivatedRoute },
        { type: TranslationService },
        { type: ActiveCartService }
    ]; };
    ShippingAddressComponent = __decorate([
        Component({
            selector: 'cx-shipping-address',
            template: "<ng-container *ngIf=\"cards$ | async as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutAddress.shippingAddress' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!forceLoader && !(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        cards?.length && !newAddressFormManuallyOpened;\n        else newAddressForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'checkoutAddress.selectYourShippingAddress' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewAddressForm()\"\n          >\n            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-shipping-address-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div\n            class=\"cx-shipping-address-card-inner\"\n            (click)=\"addressSelected(card.address)\"\n          >\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.card\"\n              (sendCard)=\"addressSelected(card.address)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"cx-btn btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'checkout.backToCart' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-primary\"\n            [disabled]=\"\n              (!selectedAddress || !selectedAddress.id) &&\n              !(selectedAddress$ | async)?.shippingAddress\n            \"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newAddressForm>\n      <ng-container *ngIf=\"cards.length; else initialAddressForm\">\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          (backToAddress)=\"hideNewAddressForm(false)\"\n          (submitAddress)=\"addAddress($event)\"\n        ></cx-address-form>\n      </ng-container>\n      <ng-template #initialAddressForm>\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          [setAsDefaultField]=\"!isGuestCheckout\"\n          [addressData]=\"setAddress\"\n          cancelBtnLabel=\"{{ 'checkout.backToCart' | cxTranslate }}\"\n          (backToAddress)=\"hideNewAddressForm(true)\"\n          (submitAddress)=\"addAddress($event)\"\n        ></cx-address-form>\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ShippingAddressComponent);
    return ShippingAddressComponent;
}());
export { ShippingAddressComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLE9BQU8sRUFDUCx1QkFBdUIsRUFDdkIsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBWS9FO0lBQ0Usa0NBQ1ksa0JBQXNDLEVBQ3RDLGNBQThCLEVBQzlCLHVCQUFnRCxFQUNoRCxxQkFBNEMsRUFDNUMsY0FBOEIsRUFDOUIsV0FBK0IsRUFDL0IsaUJBQW9DO1FBTnBDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFHaEQsaUNBQTRCLEdBQUcsS0FBSyxDQUFDO1FBSXJD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LENBQUM7U0FDdkM7SUFDSCxDQUFDOztnQkFuUitCLGtCQUFrQjtnQkFDdEIsY0FBYztnQkFDTCx1QkFBdUI7Z0JBQ3pCLHFCQUFxQjtnQkFDNUIsY0FBYztnQkFDakIsa0JBQWtCO2dCQUNaLGlCQUFpQjs7SUFSckMsd0JBQXdCO1FBTHBDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsNmlHQUFnRDtZQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csd0JBQXdCLENBc1JwQztJQUFELCtCQUFDO0NBQUEsQUF0UkQsSUFzUkM7U0F0Ulksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQWN0aXZlQ2FydFNlcnZpY2UsXG4gIEFkZHJlc3MsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VyQWRkcmVzc1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi8uLic7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZFdpdGhBZGRyZXNzIHtcbiAgY2FyZDogQ2FyZDtcbiAgYWRkcmVzczogQWRkcmVzcztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc2hpcHBpbmctYWRkcmVzcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaGlwcGluZy1hZGRyZXNzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNoaXBwaW5nQWRkcmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge31cbiAgZXhpc3RpbmdBZGRyZXNzZXMkOiBPYnNlcnZhYmxlPEFkZHJlc3NbXT47XG4gIG5ld0FkZHJlc3NGb3JtTWFudWFsbHlPcGVuZWQgPSBmYWxzZTtcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgY2FyZHMkOiBPYnNlcnZhYmxlPENhcmRXaXRoQWRkcmVzc1tdPjtcbiAgc2VsZWN0ZWRBZGRyZXNzJDogT2JzZXJ2YWJsZTxBZGRyZXNzPjtcbiAgZm9yY2VMb2FkZXIgPSBmYWxzZTsgLy8gdGhpcyBoZWxwcyB3aXRoIHNtb290aGVyIHN0ZXBzIHRyYW5zaXRpb25cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVGhpcyB2YXJpYWJsZSB3aWxsIG5vIGxvbmdlciBiZSBpbiB1c2UuIFVzZSBjYXJkcyQgb2JzZXJ2YWJsZSBpbnN0ZWFkLlxuICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgKi9cbiAgY2FyZHM6IENhcmRbXSA9IFtdO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVGhpcyB2YXJpYWJsZSB3aWxsIG5vIGxvbmdlciBiZSBpbiB1c2UuIEF2b2lkIHVzaW5nIGl0LlxuICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgKi9cbiAgZ29UbzogQ2hlY2tvdXRTdGVwVHlwZSA9IG51bGw7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIHNlbGVjdEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcykgaW5zdGVhZC5cbiAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICovXG4gIHNldEFkZHJlc3M6IEFkZHJlc3M7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gQXZvaWQgdXNpbmcgaXQuXG4gICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAqL1xuICBzZXRBZGRyZXNzU3ViOiBTdWJzY3JpcHRpb247XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIHNlbGVjdGVkQWRkcmVzcyQgb2JzZXJ2YWJsZSBpbnN0ZWFkLlxuICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgKi9cbiAgc2VsZWN0ZWRBZGRyZXNzU3ViOiBTdWJzY3JpcHRpb247XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIENoZWNrb3V0Q29uZmlnU2VydmljZS5nZXROZXh0Q2hlY2tvdXRTdGVwVXJsKHRoaXMuYWN0aXZhdGVkUm91dGUpIGluc3RlYWQuXG4gICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAqL1xuICBjaGVja291dFN0ZXBVcmxOZXh0ID0gdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0TmV4dENoZWNrb3V0U3RlcFVybChcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIENoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRQcmV2aW91c0NoZWNrb3V0U3RlcFVybCh0aGlzLmFjdGl2YXRlZFJvdXRlKSBpbnN0ZWFkLlxuICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgKi9cbiAgY2hlY2tvdXRTdGVwVXJsUHJldmlvdXMgPSAnY2FydCc7XG5cbiAgaXNHdWVzdENoZWNrb3V0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFRoaXMgdmFyaWFibGUgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2Ugc2VsZWN0ZWRBZGRyZXNzJCBvYnNlcnZhYmxlIGluc3RlYWQuXG4gICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAqL1xuICBzZWxlY3RlZEFkZHJlc3M6IEFkZHJlc3M7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nb1RvID0gbnVsbDtcbiAgICB0aGlzLmNoZWNrb3V0U3RlcFVybE5leHQgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXROZXh0Q2hlY2tvdXRTdGVwVXJsKFxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZVxuICAgICk7XG4gICAgdGhpcy5jaGVja291dFN0ZXBVcmxQcmV2aW91cyA9ICdjYXJ0JztcbiAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRBZGRyZXNzZXNMb2FkaW5nKCk7XG4gICAgdGhpcy5leGlzdGluZ0FkZHJlc3NlcyQgPSB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRBZGRyZXNzZXMoKTtcbiAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyQgPSB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmdldERlbGl2ZXJ5QWRkcmVzcygpO1xuXG4gICAgdGhpcy5jYXJkcyQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuZXhpc3RpbmdBZGRyZXNzZXMkLFxuICAgICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MkLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0QWRkcmVzcy5kZWZhdWx0U2hpcHBpbmdBZGRyZXNzJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRBZGRyZXNzLnNoaXBUb1RoaXNBZGRyZXNzJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnYWRkcmVzc0NhcmQuc2VsZWN0ZWQnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW1xuICAgICAgICAgIGFkZHJlc3NlcyxcbiAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICB0ZXh0RGVmYXVsdFNoaXBwaW5nQWRkcmVzcyxcbiAgICAgICAgICB0ZXh0U2hpcFRvVGhpc0FkZHJlc3MsXG4gICAgICAgICAgdGV4dFNlbGVjdGVkLFxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgLy8gU2VsZWN0IGRlZmF1bHQgYWRkcmVzcyBpZiBub25lIHNlbGVjdGVkXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgYWRkcmVzc2VzLmxlbmd0aCAmJlxuICAgICAgICAgICAgKCFzZWxlY3RlZCB8fFxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzZWxlY3RlZCkubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICAgICAgICF0aGlzLnNlbGVjdGVkQWRkcmVzcylcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRBZGRyZXNzID0gYWRkcmVzc2VzLmZpbmQoXG4gICAgICAgICAgICAgIGFkZHJlc3MgPT4gYWRkcmVzcy5kZWZhdWx0QWRkcmVzc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNlbGVjdGVkID0gZGVmYXVsdEFkZHJlc3M7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFkZHJlc3MoZGVmYXVsdEFkZHJlc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWRkcmVzc2VzLm1hcChhZGRyZXNzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmRDb250ZW50KFxuICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgdGV4dERlZmF1bHRTaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgICAgIHRleHRTaGlwVG9UaGlzQWRkcmVzcyxcbiAgICAgICAgICAgICAgdGV4dFNlbGVjdGVkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgY2FyZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuXG4gICAgaWYgKCF0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmlzR3Vlc3RDYXJ0KCkpIHtcbiAgICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmxvYWRBZGRyZXNzZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0d1ZXN0Q2hlY2tvdXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdldENhcmRDb250ZW50KFxuICAgIGFkZHJlc3M6IEFkZHJlc3MsXG4gICAgc2VsZWN0ZWQ6IGFueSxcbiAgICB0ZXh0RGVmYXVsdFNoaXBwaW5nQWRkcmVzczogc3RyaW5nLFxuICAgIHRleHRTaGlwVG9UaGlzQWRkcmVzczogc3RyaW5nLFxuICAgIHRleHRTZWxlY3RlZDogc3RyaW5nXG4gICk6IENhcmQge1xuICAgIGxldCByZWdpb24gPSAnJztcblxuICAgIGlmIChhZGRyZXNzLnJlZ2lvbiAmJiBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlKSB7XG4gICAgICByZWdpb24gPSBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlICsgJywgJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IGFkZHJlc3MuZGVmYXVsdEFkZHJlc3MgPyB0ZXh0RGVmYXVsdFNoaXBwaW5nQWRkcmVzcyA6ICcnLFxuICAgICAgdGV4dEJvbGQ6IGFkZHJlc3MuZmlyc3ROYW1lICsgJyAnICsgYWRkcmVzcy5sYXN0TmFtZSxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgYWRkcmVzcy5saW5lMSxcbiAgICAgICAgYWRkcmVzcy5saW5lMixcbiAgICAgICAgYWRkcmVzcy50b3duICsgJywgJyArIHJlZ2lvbiArIGFkZHJlc3MuY291bnRyeS5pc29jb2RlLFxuICAgICAgICBhZGRyZXNzLnBvc3RhbENvZGUsXG4gICAgICAgIGFkZHJlc3MucGhvbmUsXG4gICAgICBdLFxuICAgICAgYWN0aW9uczogW3sgbmFtZTogdGV4dFNoaXBUb1RoaXNBZGRyZXNzLCBldmVudDogJ3NlbmQnIH1dLFxuICAgICAgaGVhZGVyOiBzZWxlY3RlZCAmJiBzZWxlY3RlZC5pZCA9PT0gYWRkcmVzcy5pZCA/IHRleHRTZWxlY3RlZCA6ICcnLFxuICAgIH07XG4gIH1cblxuICBzZWxlY3RBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5zZXREZWxpdmVyeUFkZHJlc3MoYWRkcmVzcyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVXNlIGFkZEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcykgaW5zdGVhZC5cbiAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICovXG4gIGFkZEFkZHJlc3MoYWRkcmVzczogeyBuZXdBZGRyZXNzOiBib29sZWFuOyBhZGRyZXNzOiBBZGRyZXNzIH0gfCBhbnkpO1xuICBhZGRBZGRyZXNzKFxuICAgIGFkZHJlc3M6IEFkZHJlc3MgfCB7IG5ld0FkZHJlc3M6IGJvb2xlYW47IGFkZHJlc3M6IEFkZHJlc3MgfVxuICApOiB2b2lkIHtcbiAgICAvLyBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuMyAtIFJlbW92ZSB0ZW1wIGFkZHJlc3NcbiAgICBjb25zdCB0ZW1wQWRkcmVzczogQWRkcmVzcyA9IGFkZHJlc3NbJ2FkZHJlc3MnXVxuICAgICAgPyBhZGRyZXNzWydhZGRyZXNzJ11cbiAgICAgIDogYWRkcmVzcztcblxuICAgIGNvbnN0IHNlbGVjdGVkU3ViID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MkLnN1YnNjcmliZShzZWxlY3RlZCA9PiB7XG4gICAgICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQuc2hpcHBpbmdBZGRyZXNzKSB7XG4gICAgICAgIHRoaXMuZ29OZXh0KCk7XG4gICAgICAgIHNlbGVjdGVkU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcmNlTG9hZGVyID0gdHJ1ZTtcblxuICAgIC8vIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zIC0gUmVtb3ZlIHRoaXMgY29uZGl0aW9uXG4gICAgaWYgKGFkZHJlc3NbJ2FkZHJlc3MnXSB8fCBhZGRyZXNzWyduZXdBZGRyZXNzJ10pIHtcbiAgICAgIGFkZHJlc3NbJ25ld0FkZHJlc3MnXVxuICAgICAgICA/IHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY3JlYXRlQW5kU2V0QWRkcmVzcyh0ZW1wQWRkcmVzcylcbiAgICAgICAgOiB0aGlzLnNlbGVjdEFkZHJlc3ModGVtcEFkZHJlc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuMyAtIFVzZSBpbnN0ZWFkIG9mIGNvbmRpdGlvblxuICAgICAgdGhpcy5leGlzdGluZ0FkZHJlc3NlcyQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoYWRkcmVzc2VzID0+IHtcbiAgICAgICAgYWRkcmVzc2VzLmluY2x1ZGVzKHRlbXBBZGRyZXNzKVxuICAgICAgICAgID8gdGhpcy5zZWxlY3RBZGRyZXNzKHRlbXBBZGRyZXNzKVxuICAgICAgICAgIDogdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5jcmVhdGVBbmRTZXRBZGRyZXNzKHRlbXBBZGRyZXNzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNob3dOZXdBZGRyZXNzRm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLm5ld0FkZHJlc3NGb3JtTWFudWFsbHlPcGVuZWQgPSB0cnVlO1xuICB9XG5cbiAgaGlkZU5ld0FkZHJlc3NGb3JtKGdvUHJldmlvdXM6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMubmV3QWRkcmVzc0Zvcm1NYW51YWxseU9wZW5lZCA9IGZhbHNlO1xuICAgIGlmIChnb1ByZXZpb3VzKSB7XG4gICAgICB0aGlzLmdvUHJldmlvdXMoKTtcbiAgICB9XG4gIH1cblxuICBnb05leHQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyhcbiAgICAgIHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldE5leHRDaGVja291dFN0ZXBVcmwodGhpcy5hY3RpdmF0ZWRSb3V0ZSlcbiAgICApO1xuICB9XG5cbiAgZ29QcmV2aW91cygpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKFxuICAgICAgdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0UHJldmlvdXNDaGVja291dFN0ZXBVcmwoXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGVcbiAgICAgICkgfHwgJ2NhcnQnXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIHNlbGVjdEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcykgaW5zdGVhZC5cbiAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICovXG4gIGFkZHJlc3NTZWxlY3RlZChhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RBZGRyZXNzKGFkZHJlc3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIGdvUHJldmlvdXMoKSBpbnN0ZWFkLlxuICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgKi9cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmdvUHJldmlvdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIG1ldGhvZCB3aWxsIG5vIGxvbmdlciBiZSBpbiB1c2UuIFVzZSBnb05leHQoKSBpbnN0ZWFkLlxuICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgKi9cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLmdvTmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIGFkZEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcykgaW5zdGVhZC5cbiAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICovXG4gIGFkZE5ld0FkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMuYWRkQWRkcmVzcyhhZGRyZXNzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIG1ldGhvZCB3aWxsIG5vIGxvbmdlciBiZSBpbiB1c2UuIFJlbW92ZS5cbiAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNldEFkZHJlc3NTdWIpIHtcbiAgICAgIHRoaXMuc2V0QWRkcmVzc1N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3RlZEFkZHJlc3NTdWIpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=