import { __decorate, __read } from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address, CartService, CheckoutDeliveryService, RoutingService, TranslationService, UserAddressService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CheckoutConfigService } from '../../services/checkout-config.service';
var ShippingAddressComponent = /** @class */ (function () {
    function ShippingAddressComponent(userAddressService, cartService, routingService, checkoutDeliveryService, checkoutConfigService, activatedRoute, translation) {
        this.userAddressService = userAddressService;
        this.cartService = cartService;
        this.routingService = routingService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.translation = translation;
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
        if (!this.cartService.isGuestCart()) {
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
        { type: CartService },
        { type: RoutingService },
        { type: CheckoutDeliveryService },
        { type: CheckoutConfigService },
        { type: ActivatedRoute },
        { type: TranslationService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsT0FBTyxFQUNQLFdBQVcsRUFDWCx1QkFBdUIsRUFDdkIsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBYS9FO0lBQ0Usa0NBQ1ksa0JBQXNDLEVBQ3RDLFdBQXdCLEVBQ3hCLGNBQThCLEVBQzlCLHVCQUFnRCxFQUNsRCxxQkFBNEMsRUFDNUMsY0FBOEIsRUFDOUIsV0FBK0I7UUFON0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNsRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFHekMsaUNBQTRCLEdBQUcsS0FBSyxDQUFDO1FBSXJDLGdCQUFXLEdB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O0lBQ0gsQ0FBQzs7Z0JBblIrQixrQkFBa0I7Z0JBQ3pCLFdBQVc7Z0JBQ1IsY0FBYztnQkFDTCx1QkFBdUI7Z0JBQzNCLHFCQUFxQjtnQkFDNUIsY0FBYztnQkFDakIsa0JBQWtCOztJQVI5Qix3QkFBd0I7UUFMcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQiw2aUdBQWdEO1lBQ2hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyx3QkFBd0IsQ0FzUnBDO0lBQUQsK0JBQUM7Q0FBQSxBQXRSRCxJQXNSQztTQXRSWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBDYXJ0U2VydmljZSxcbiAgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFVzZXJBZGRyZXNzU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwVHlwZSB9IGZyb20gJy4uLy4uJztcblxuZXhwb3J0IGludGVyZmFjZSBDYXJkV2l0aEFkZHJlc3Mge1xuICBjYXJkOiBDYXJkO1xuICBhZGRyZXNzOiBBZGRyZXNzO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zaGlwcGluZy1hZGRyZXNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NoaXBwaW5nLWFkZHJlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2hpcHBpbmdBZGRyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuICBleGlzdGluZ0FkZHJlc3NlcyQ6IE9ic2VydmFibGU8QWRkcmVzc1tdPjtcbiAgbmV3QWRkcmVzc0Zvcm1NYW51YWxseU9wZW5lZCA9IGZhbHNlO1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjYXJkcyQ6IE9ic2VydmFibGU8Q2FyZFdpdGhBZGRyZXNzW10+O1xuICBzZWxlY3RlZEFkZHJlc3MkOiBPYnNlcnZhYmxlPEFkZHJlc3M+O1xuICBmb3JjZUxvYWRlciA9IGZhbHNlOyAvLyB0aGlzIGhlbHBzIHdpdGggc21vb3RoZXIgc3RlcHMgdHJhbnNpdGlvblxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIGNhcmRzJCBvYnNlcnZhYmxlIGluc3RlYWQuXG4gICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAqL1xuICBjYXJkczogQ2FyZFtdID0gW107XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gQXZvaWQgdXNpbmcgaXQuXG4gICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAqL1xuICBnb1RvOiBDaGVja291dFN0ZXBUeXBlID0gbnVsbDtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFRoaXMgdmFyaWFibGUgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2Ugc2VsZWN0QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKSBpbnN0ZWFkLlxuICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgKi9cbiAgc2V0QWRkcmVzczogQWRkcmVzcztcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFRoaXMgdmFyaWFibGUgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBBdm9pZCB1c2luZyBpdC5cbiAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICovXG4gIHNldEFkZHJlc3NTdWI6IFN1YnNjcmlwdGlvbjtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFRoaXMgdmFyaWFibGUgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2Ugc2VsZWN0ZWRBZGRyZXNzJCBvYnNlcnZhYmxlIGluc3RlYWQuXG4gICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAqL1xuICBzZWxlY3RlZEFkZHJlc3NTdWI6IFN1YnNjcmlwdGlvbjtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFRoaXMgdmFyaWFibGUgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2UgQ2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldE5leHRDaGVja291dFN0ZXBVcmwodGhpcy5hY3RpdmF0ZWRSb3V0ZSkgaW5zdGVhZC5cbiAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICovXG4gIGNoZWNrb3V0U3RlcFVybE5leHQgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXROZXh0Q2hlY2tvdXRTdGVwVXJsKFxuICAgIHRoaXMuYWN0aXZhdGVkUm91dGVcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFRoaXMgdmFyaWFibGUgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2UgQ2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldFByZXZpb3VzQ2hlY2tvdXRTdGVwVXJsKHRoaXMuYWN0aXZhdGVkUm91dGUpIGluc3RlYWQuXG4gICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAqL1xuICBjaGVja291dFN0ZXBVcmxQcmV2aW91cyA9ICdjYXJ0JztcblxuICBpc0d1ZXN0Q2hlY2tvdXQgPSBmYWxzZTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVGhpcyB2YXJpYWJsZSB3aWxsIG5vIGxvbmdlciBiZSBpbiB1c2UuIFVzZSBzZWxlY3RlZEFkZHJlc3MkIG9ic2VydmFibGUgaW5zdGVhZC5cbiAgICogVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICovXG4gIHNlbGVjdGVkQWRkcmVzczogQWRkcmVzcztcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdvVG8gPSBudWxsO1xuICAgIHRoaXMuY2hlY2tvdXRTdGVwVXJsTmV4dCA9IHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldE5leHRDaGVja291dFN0ZXBVcmwoXG4gICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlXG4gICAgKTtcbiAgICB0aGlzLmNoZWNrb3V0U3RlcFVybFByZXZpb3VzID0gJ2NhcnQnO1xuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldEFkZHJlc3Nlc0xvYWRpbmcoKTtcbiAgICB0aGlzLmV4aXN0aW5nQWRkcmVzc2VzJCA9IHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldEFkZHJlc3NlcygpO1xuICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzJCA9IHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0RGVsaXZlcnlBZGRyZXNzKCk7XG5cbiAgICB0aGlzLmNhcmRzJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5leGlzdGluZ0FkZHJlc3NlcyQsXG4gICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyQsXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRBZGRyZXNzLmRlZmF1bHRTaGlwcGluZ0FkZHJlc3MnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dEFkZHJlc3Muc2hpcFRvVGhpc0FkZHJlc3MnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdhZGRyZXNzQ2FyZC5zZWxlY3RlZCcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChbXG4gICAgICAgICAgYWRkcmVzc2VzLFxuICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgIHRleHREZWZhdWx0U2hpcHBpbmdBZGRyZXNzLFxuICAgICAgICAgIHRleHRTaGlwVG9UaGlzQWRkcmVzcyxcbiAgICAgICAgICB0ZXh0U2VsZWN0ZWQsXG4gICAgICAgIF0pID0+IHtcbiAgICAgICAgICAvLyBTZWxlY3QgZGVmYXVsdCBhZGRyZXNzIGlmIG5vbmUgc2VsZWN0ZWRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBhZGRyZXNzZXMubGVuZ3RoICYmXG4gICAgICAgICAgICAoIXNlbGVjdGVkIHx8XG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNlbGVjdGVkKS5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgICAgICAgIXRoaXMuc2VsZWN0ZWRBZGRyZXNzKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdEFkZHJlc3MgPSBhZGRyZXNzZXMuZmluZChcbiAgICAgICAgICAgICAgYWRkcmVzcyA9PiBhZGRyZXNzLmRlZmF1bHRBZGRyZXNzXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2VsZWN0ZWQgPSBkZWZhdWx0QWRkcmVzcztcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QWRkcmVzcyhkZWZhdWx0QWRkcmVzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhZGRyZXNzZXMubWFwKGFkZHJlc3MgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuZ2V0Q2FyZENvbnRlbnQoXG4gICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgICAgICB0ZXh0RGVmYXVsdFNoaXBwaW5nQWRkcmVzcyxcbiAgICAgICAgICAgICAgdGV4dFNoaXBUb1RoaXNBZGRyZXNzLFxuICAgICAgICAgICAgICB0ZXh0U2VsZWN0ZWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICBjYXJkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG5cbiAgICBpZiAoIXRoaXMuY2FydFNlcnZpY2UuaXNHdWVzdENhcnQoKSkge1xuICAgICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UubG9hZEFkZHJlc3NlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzR3Vlc3RDaGVja291dCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2FyZENvbnRlbnQoXG4gICAgYWRkcmVzczogQWRkcmVzcyxcbiAgICBzZWxlY3RlZDogYW55LFxuICAgIHRleHREZWZhdWx0U2hpcHBpbmdBZGRyZXNzOiBzdHJpbmcsXG4gICAgdGV4dFNoaXBUb1RoaXNBZGRyZXNzOiBzdHJpbmcsXG4gICAgdGV4dFNlbGVjdGVkOiBzdHJpbmdcbiAgKTogQ2FyZCB7XG4gICAgbGV0IHJlZ2lvbiA9ICcnO1xuXG4gICAgaWYgKGFkZHJlc3MucmVnaW9uICYmIGFkZHJlc3MucmVnaW9uLmlzb2NvZGUpIHtcbiAgICAgIHJlZ2lvbiA9IGFkZHJlc3MucmVnaW9uLmlzb2NvZGUgKyAnLCAnO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogYWRkcmVzcy5kZWZhdWx0QWRkcmVzcyA/IHRleHREZWZhdWx0U2hpcHBpbmdBZGRyZXNzIDogJycsXG4gICAgICB0ZXh0Qm9sZDogYWRkcmVzcy5maXJzdE5hbWUgKyAnICcgKyBhZGRyZXNzLmxhc3ROYW1lLFxuICAgICAgdGV4dDogW1xuICAgICAgICBhZGRyZXNzLmxpbmUxLFxuICAgICAgICBhZGRyZXNzLmxpbmUyLFxuICAgICAgICBhZGRyZXNzLnRvd24gKyAnLCAnICsgcmVnaW9uICsgYWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGUsXG4gICAgICAgIGFkZHJlc3MucG9zdGFsQ29kZSxcbiAgICAgICAgYWRkcmVzcy5waG9uZSxcbiAgICAgIF0sXG4gICAgICBhY3Rpb25zOiBbeyBuYW1lOiB0ZXh0U2hpcFRvVGhpc0FkZHJlc3MsIGV2ZW50OiAnc2VuZCcgfV0sXG4gICAgICBoZWFkZXI6IHNlbGVjdGVkICYmIHNlbGVjdGVkLmlkID09PSBhZGRyZXNzLmlkID8gdGV4dFNlbGVjdGVkIDogJycsXG4gICAgfTtcbiAgfVxuXG4gIHNlbGVjdEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzID0gYWRkcmVzcztcbiAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLnNldERlbGl2ZXJ5QWRkcmVzcyhhZGRyZXNzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBVc2UgYWRkQWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKSBpbnN0ZWFkLlxuICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgKi9cbiAgYWRkQWRkcmVzcyhhZGRyZXNzOiB7IG5ld0FkZHJlc3M6IGJvb2xlYW47IGFkZHJlc3M6IEFkZHJlc3MgfSB8IGFueSk7XG4gIGFkZEFkZHJlc3MoXG4gICAgYWRkcmVzczogQWRkcmVzcyB8IHsgbmV3QWRkcmVzczogYm9vbGVhbjsgYWRkcmVzczogQWRkcmVzcyB9XG4gICk6IHZvaWQge1xuICAgIC8vIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zIC0gUmVtb3ZlIHRlbXAgYWRkcmVzc1xuICAgIGNvbnN0IHRlbXBBZGRyZXNzOiBBZGRyZXNzID0gYWRkcmVzc1snYWRkcmVzcyddXG4gICAgICA/IGFkZHJlc3NbJ2FkZHJlc3MnXVxuICAgICAgOiBhZGRyZXNzO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRTdWIgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcyQuc3Vic2NyaWJlKHNlbGVjdGVkID0+IHtcbiAgICAgIGlmIChzZWxlY3RlZCAmJiBzZWxlY3RlZC5zaGlwcGluZ0FkZHJlc3MpIHtcbiAgICAgICAgdGhpcy5nb05leHQoKTtcbiAgICAgICAgc2VsZWN0ZWRTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZm9yY2VMb2FkZXIgPSB0cnVlO1xuXG4gICAgLy8gVE9ETyhpc3N1ZTojMzkyMSkgZGVwcmVjYXRlZCBzaW5jZSAxLjMgLSBSZW1vdmUgdGhpcyBjb25kaXRpb25cbiAgICBpZiAoYWRkcmVzc1snYWRkcmVzcyddIHx8IGFkZHJlc3NbJ25ld0FkZHJlc3MnXSkge1xuICAgICAgYWRkcmVzc1snbmV3QWRkcmVzcyddXG4gICAgICAgID8gdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5jcmVhdGVBbmRTZXRBZGRyZXNzKHRlbXBBZGRyZXNzKVxuICAgICAgICA6IHRoaXMuc2VsZWN0QWRkcmVzcyh0ZW1wQWRkcmVzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zIC0gVXNlIGluc3RlYWQgb2YgY29uZGl0aW9uXG4gICAgICB0aGlzLmV4aXN0aW5nQWRkcmVzc2VzJC5waXBlKHRha2UoMSkpLnN1YnNjcmliZShhZGRyZXNzZXMgPT4ge1xuICAgICAgICBhZGRyZXNzZXMuaW5jbHVkZXModGVtcEFkZHJlc3MpXG4gICAgICAgICAgPyB0aGlzLnNlbGVjdEFkZHJlc3ModGVtcEFkZHJlc3MpXG4gICAgICAgICAgOiB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmNyZWF0ZUFuZFNldEFkZHJlc3ModGVtcEFkZHJlc3MpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2hvd05ld0FkZHJlc3NGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMubmV3QWRkcmVzc0Zvcm1NYW51YWxseU9wZW5lZCA9IHRydWU7XG4gIH1cblxuICBoaWRlTmV3QWRkcmVzc0Zvcm0oZ29QcmV2aW91czogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5uZXdBZGRyZXNzRm9ybU1hbnVhbGx5T3BlbmVkID0gZmFsc2U7XG4gICAgaWYgKGdvUHJldmlvdXMpIHtcbiAgICAgIHRoaXMuZ29QcmV2aW91cygpO1xuICAgIH1cbiAgfVxuXG4gIGdvTmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKFxuICAgICAgdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0TmV4dENoZWNrb3V0U3RlcFVybCh0aGlzLmFjdGl2YXRlZFJvdXRlKVxuICAgICk7XG4gIH1cblxuICBnb1ByZXZpb3VzKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oXG4gICAgICB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRQcmV2aW91c0NoZWNrb3V0U3RlcFVybChcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgKSB8fCAnY2FydCdcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFRoaXMgdmFyaWFibGUgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2Ugc2VsZWN0QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKSBpbnN0ZWFkLlxuICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgKi9cbiAgYWRkcmVzc1NlbGVjdGVkKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdEFkZHJlc3MoYWRkcmVzcyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2UgZ29QcmV2aW91cygpIGluc3RlYWQuXG4gICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAqL1xuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZ29QcmV2aW91cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIGdvTmV4dCgpIGluc3RlYWQuXG4gICAqIFRPRE8oaXNzdWU6IzM5MjEpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAqL1xuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuZ29OZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2UgYWRkQWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKSBpbnN0ZWFkLlxuICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgKi9cbiAgYWRkTmV3QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5hZGRBZGRyZXNzKGFkZHJlc3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gUmVtb3ZlLlxuICAgKiBUT0RPKGlzc3VlOiMzOTIxKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2V0QWRkcmVzc1N1Yikge1xuICAgICAgdGhpcy5zZXRBZGRyZXNzU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdGVkQWRkcmVzc1N1Yikge1xuICAgICAgdGhpcy5zZWxlY3RlZEFkZHJlc3NTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==