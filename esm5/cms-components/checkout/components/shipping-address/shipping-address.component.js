/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService, CheckoutDeliveryService, RoutingService, TranslationService, UserAddressService, } from '@spartacus/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { CheckoutConfigService } from '../../checkout-config.service';
import { CheckoutStepType } from '../../model/checkout-step.model';
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
        this.cards = [];
        this.selectedAddress$ = new BehaviorSubject(null);
    }
    /**
     * @return {?}
     */
    ShippingAddressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.goTo = null;
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = 'cart';
        this.isLoading$ = this.userAddressService.getAddressesLoading();
        this.existingAddresses$ = this.userAddressService.getAddresses();
        this.cards$ = combineLatest([
            this.existingAddresses$,
            this.selectedAddress$.asObservable(),
            this.translation.translate('checkoutAddress.defaultShippingAddress'),
            this.translation.translate('checkoutAddress.shipToThisAddress'),
            this.translation.translate('addressCard.selected'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 5), addresses = _b[0], selected = _b[1], textDefaultShippingAddress = _b[2], textShipToThisAddress = _b[3], textSelected = _b[4];
            return addresses.map((/**
             * @param {?} address
             * @return {?}
             */
            function (address) {
                /** @type {?} */
                var card = _this.getCardContent(address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected);
                return {
                    address: address,
                    card: card,
                };
            }));
        })));
        this.cartService.loadDetails();
        this.userAddressService.loadAddresses();
        this.setAddressSub = this.checkoutDeliveryService
            .getDeliveryAddress()
            .subscribe((/**
         * @param {?} address
         * @return {?}
         */
        function (address) {
            _this.setAddress = address;
            _this.selectedAddress$.next(address);
            if (_this.goTo) {
                _this.goNext();
                _this.goTo = null;
            }
        }));
        this.selectedAddressSub = this.selectedAddress$.subscribe((/**
         * @param {?} address
         * @return {?}
         */
        function (address) {
            _this.selectedAddress = address;
        }));
    };
    /**
     * @param {?} address
     * @param {?} selected
     * @param {?} textDefaultShippingAddress
     * @param {?} textShipToThisAddress
     * @param {?} textSelected
     * @return {?}
     */
    ShippingAddressComponent.prototype.getCardContent = /**
     * @param {?} address
     * @param {?} selected
     * @param {?} textDefaultShippingAddress
     * @param {?} textShipToThisAddress
     * @param {?} textSelected
     * @return {?}
     */
    function (address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected) {
        /** @type {?} */
        var region = '';
        if (address.region && address.region.isocode) {
            region = address.region.isocode + ', ';
        }
        /** @type {?} */
        var card = {
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
        this.cards.push(card);
        return card;
    };
    /**
     * @param {?} address
     * @return {?}
     */
    ShippingAddressComponent.prototype.addressSelected = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        this.selectedAddress$.next(address);
    };
    /**
     * @return {?}
     */
    ShippingAddressComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.addAddress({ address: this.selectedAddress, newAddress: false });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    ShippingAddressComponent.prototype.addAddress = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var newAddress = _a.newAddress, address = _a.address;
        if (newAddress) {
            this.checkoutDeliveryService.createAndSetAddress(address);
            this.goTo = CheckoutStepType.DELIVERY_MODE;
            return;
        }
        if (this.setAddress &&
            this.selectedAddress &&
            this.setAddress.id === this.selectedAddress.id) {
            this.goNext();
        }
        else {
            this.goTo = CheckoutStepType.DELIVERY_MODE;
            this.checkoutDeliveryService.setDeliveryAddress(address);
        }
    };
    /**
     * @param {?} address
     * @return {?}
     */
    ShippingAddressComponent.prototype.addNewAddress = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        this.addAddress({ address: address, newAddress: true });
    };
    /**
     * @return {?}
     */
    ShippingAddressComponent.prototype.showNewAddressForm = /**
     * @return {?}
     */
    function () {
        this.newAddressFormManuallyOpened = true;
    };
    /**
     * @param {?=} goBack
     * @return {?}
     */
    ShippingAddressComponent.prototype.hideNewAddressForm = /**
     * @param {?=} goBack
     * @return {?}
     */
    function (goBack) {
        if (goBack === void 0) { goBack = false; }
        this.newAddressFormManuallyOpened = false;
        if (goBack) {
            this.back();
        }
    };
    /**
     * @return {?}
     */
    ShippingAddressComponent.prototype.goNext = /**
     * @return {?}
     */
    function () {
        this.routingService.go(this.checkoutStepUrlNext);
    };
    /**
     * @return {?}
     */
    ShippingAddressComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.routingService.go(this.checkoutStepUrlPrevious);
    };
    /**
     * @return {?}
     */
    ShippingAddressComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.setAddressSub) {
            this.setAddressSub.unsubscribe();
        }
        if (this.selectedAddressSub) {
            this.selectedAddressSub.unsubscribe();
        }
    };
    ShippingAddressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-shipping-address',
                    template: "<ng-container *ngIf=\"(cards$ | async) as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutAddress.shippingAddress' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        cards?.length && !newAddressFormManuallyOpened;\n        else newAddressForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'checkoutAddress.selectYourShippingAddress' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewAddressForm()\"\n          >\n            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-shipping-address-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div\n            class=\"cx-shipping-address-card-inner\"\n            (click)=\"addressSelected(card.address)\"\n          >\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.card\"\n              (sendCard)=\"addressSelected(card.address)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"cx-btn btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'checkout.backToCart' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-primary\"\n            [disabled]=\"!selectedAddress || !selectedAddress.id\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newAddressForm>\n      <ng-container *ngIf=\"cards.length; else initialAddressForm\">\n        <cx-address-form\n          showTitleCode=\"true\"\n          (backToAddress)=\"hideNewAddressForm(false)\"\n          (submitAddress)=\"addNewAddress($event)\"\n        ></cx-address-form>\n      </ng-container>\n      <ng-template #initialAddressForm>\n        <cx-address-form\n          showTitleCode=\"true\"\n          cancelBtnLabel=\"{{ 'checkout.backToCart' | cxTranslate }}\"\n          (backToAddress)=\"hideNewAddressForm(true)\"\n          (submitAddress)=\"addNewAddress($event)\"\n        ></cx-address-form>\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ShippingAddressComponent.ctorParameters = function () { return [
        { type: UserAddressService },
        { type: CartService },
        { type: RoutingService },
        { type: CheckoutDeliveryService },
        { type: CheckoutConfigService },
        { type: ActivatedRoute },
        { type: TranslationService }
    ]; };
    return ShippingAddressComponent;
}());
export { ShippingAddressComponent };
if (false) {
    /** @type {?} */
    ShippingAddressComponent.prototype.existingAddresses$;
    /** @type {?} */
    ShippingAddressComponent.prototype.newAddressFormManuallyOpened;
    /** @type {?} */
    ShippingAddressComponent.prototype.cards;
    /** @type {?} */
    ShippingAddressComponent.prototype.isLoading$;
    /** @type {?} */
    ShippingAddressComponent.prototype.selectedAddress;
    /** @type {?} */
    ShippingAddressComponent.prototype.goTo;
    /** @type {?} */
    ShippingAddressComponent.prototype.setAddress;
    /** @type {?} */
    ShippingAddressComponent.prototype.setAddressSub;
    /** @type {?} */
    ShippingAddressComponent.prototype.selectedAddressSub;
    /** @type {?} */
    ShippingAddressComponent.prototype.selectedAddress$;
    /** @type {?} */
    ShippingAddressComponent.prototype.cards$;
    /** @type {?} */
    ShippingAddressComponent.prototype.checkoutStepUrlNext;
    /** @type {?} */
    ShippingAddressComponent.prototype.checkoutStepUrlPrevious;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUVMLFdBQVcsRUFDWCx1QkFBdUIsRUFDdkIsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDaEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBRW5FLHFDQUdDOzs7SUFGQywrQkFBVzs7SUFDWCxrQ0FBaUI7O0FBR25CO0lBc0JFLGtDQUNZLGtCQUFzQyxFQUN0QyxXQUF3QixFQUN4QixjQUE4QixFQUM5Qix1QkFBZ0QsRUFDbEQscUJBQTRDLEVBQzVDLGNBQThCLEVBQzlCLFdBQStCO1FBTjdCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDbEQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxtQkFBYyxHQUFk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Q0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELDhDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7Z0JBdkxGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixzMkZBQWdEO29CQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBakJDLGtCQUFrQjtnQkFKbEIsV0FBVztnQkFFWCxjQUFjO2dCQURkLHVCQUF1QjtnQkFRaEIscUJBQXFCO2dCQVpyQixjQUFjO2dCQU1yQixrQkFBa0I7O0lBc01wQiwrQkFBQztDQUFBLEFBeExELElBd0xDO1NBbkxZLHdCQUF3Qjs7O0lBQ25DLHNEQUEwQzs7SUFDMUMsZ0VBQXFDOztJQUNyQyx5Q0FBbUI7O0lBQ25CLDhDQUFnQzs7SUFDaEMsbURBQXlCOztJQUN6Qix3Q0FBdUI7O0lBQ3ZCLDhDQUFvQjs7SUFDcEIsaURBQTRCOztJQUM1QixzREFBaUM7O0lBQ2pDLG9EQUVFOztJQUNGLDBDQUFzQzs7SUFDdEMsdURBQTRCOztJQUM1QiwyREFBZ0M7Ozs7O0lBRzlCLHNEQUFnRDs7Ozs7SUFDaEQsK0NBQWtDOzs7OztJQUNsQyxrREFBd0M7Ozs7O0lBQ3hDLDJEQUEwRDs7Ozs7SUFDMUQseURBQW9EOzs7OztJQUNwRCxrREFBc0M7Ozs7O0lBQ3RDLCtDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIENhcnRTZXJ2aWNlLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlckFkZHJlc3NTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBDYXJkV2l0aEFkZHJlc3Mge1xuICBjYXJkOiBDYXJkO1xuICBhZGRyZXNzOiBBZGRyZXNzO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zaGlwcGluZy1hZGRyZXNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NoaXBwaW5nLWFkZHJlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2hpcHBpbmdBZGRyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBleGlzdGluZ0FkZHJlc3NlcyQ6IE9ic2VydmFibGU8QWRkcmVzc1tdPjtcbiAgbmV3QWRkcmVzc0Zvcm1NYW51YWxseU9wZW5lZCA9IGZhbHNlO1xuICBjYXJkczogQ2FyZFtdID0gW107XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHNlbGVjdGVkQWRkcmVzczogQWRkcmVzcztcbiAgZ29UbzogQ2hlY2tvdXRTdGVwVHlwZTtcbiAgc2V0QWRkcmVzczogQWRkcmVzcztcbiAgc2V0QWRkcmVzc1N1YjogU3Vic2NyaXB0aW9uO1xuICBzZWxlY3RlZEFkZHJlc3NTdWI6IFN1YnNjcmlwdGlvbjtcbiAgc2VsZWN0ZWRBZGRyZXNzJDogQmVoYXZpb3JTdWJqZWN0PEFkZHJlc3M+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBZGRyZXNzPihcbiAgICBudWxsXG4gICk7XG4gIGNhcmRzJDogT2JzZXJ2YWJsZTxDYXJkV2l0aEFkZHJlc3NbXT47XG4gIGNoZWNrb3V0U3RlcFVybE5leHQ6IHN0cmluZztcbiAgY2hlY2tvdXRTdGVwVXJsUHJldmlvdXM6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ29UbyA9IG51bGw7XG4gICAgdGhpcy5jaGVja291dFN0ZXBVcmxOZXh0ID0gdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0TmV4dENoZWNrb3V0U3RlcFVybChcbiAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGVcbiAgICApO1xuICAgIHRoaXMuY2hlY2tvdXRTdGVwVXJsUHJldmlvdXMgPSAnY2FydCc7XG5cbiAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRBZGRyZXNzZXNMb2FkaW5nKCk7XG4gICAgdGhpcy5leGlzdGluZ0FkZHJlc3NlcyQgPSB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRBZGRyZXNzZXMoKTtcbiAgICB0aGlzLmNhcmRzJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5leGlzdGluZ0FkZHJlc3NlcyQsXG4gICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyQuYXNPYnNlcnZhYmxlKCksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRBZGRyZXNzLmRlZmF1bHRTaGlwcGluZ0FkZHJlc3MnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dEFkZHJlc3Muc2hpcFRvVGhpc0FkZHJlc3MnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdhZGRyZXNzQ2FyZC5zZWxlY3RlZCcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChbXG4gICAgICAgICAgYWRkcmVzc2VzLFxuICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgIHRleHREZWZhdWx0U2hpcHBpbmdBZGRyZXNzLFxuICAgICAgICAgIHRleHRTaGlwVG9UaGlzQWRkcmVzcyxcbiAgICAgICAgICB0ZXh0U2VsZWN0ZWQsXG4gICAgICAgIF0pID0+IHtcbiAgICAgICAgICByZXR1cm4gYWRkcmVzc2VzLm1hcChhZGRyZXNzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmRDb250ZW50KFxuICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgdGV4dERlZmF1bHRTaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgICAgIHRleHRTaGlwVG9UaGlzQWRkcmVzcyxcbiAgICAgICAgICAgICAgdGV4dFNlbGVjdGVkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgY2FyZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuXG4gICAgdGhpcy5jYXJ0U2VydmljZS5sb2FkRGV0YWlscygpO1xuICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmxvYWRBZGRyZXNzZXMoKTtcblxuICAgIHRoaXMuc2V0QWRkcmVzc1N1YiA9IHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2VcbiAgICAgIC5nZXREZWxpdmVyeUFkZHJlc3MoKVxuICAgICAgLnN1YnNjcmliZShhZGRyZXNzID0+IHtcbiAgICAgICAgdGhpcy5zZXRBZGRyZXNzID0gYWRkcmVzcztcbiAgICAgICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MkLm5leHQoYWRkcmVzcyk7XG4gICAgICAgIGlmICh0aGlzLmdvVG8pIHtcbiAgICAgICAgICB0aGlzLmdvTmV4dCgpO1xuICAgICAgICAgIHRoaXMuZ29UbyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzU3ViID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MkLnN1YnNjcmliZShhZGRyZXNzID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzID0gYWRkcmVzcztcbiAgICB9KTtcbiAgfVxuXG4gIGdldENhcmRDb250ZW50KFxuICAgIGFkZHJlc3M6IEFkZHJlc3MsXG4gICAgc2VsZWN0ZWQ6IGFueSxcbiAgICB0ZXh0RGVmYXVsdFNoaXBwaW5nQWRkcmVzczogc3RyaW5nLFxuICAgIHRleHRTaGlwVG9UaGlzQWRkcmVzczogc3RyaW5nLFxuICAgIHRleHRTZWxlY3RlZDogc3RyaW5nXG4gICk6IENhcmQge1xuICAgIGxldCByZWdpb24gPSAnJztcbiAgICBpZiAoYWRkcmVzcy5yZWdpb24gJiYgYWRkcmVzcy5yZWdpb24uaXNvY29kZSkge1xuICAgICAgcmVnaW9uID0gYWRkcmVzcy5yZWdpb24uaXNvY29kZSArICcsICc7XG4gICAgfVxuICAgIGNvbnN0IGNhcmQ6IENhcmQgPSB7XG4gICAgICB0aXRsZTogYWRkcmVzcy5kZWZhdWx0QWRkcmVzcyA/IHRleHREZWZhdWx0U2hpcHBpbmdBZGRyZXNzIDogJycsXG4gICAgICB0ZXh0Qm9sZDogYWRkcmVzcy5maXJzdE5hbWUgKyAnICcgKyBhZGRyZXNzLmxhc3ROYW1lLFxuICAgICAgdGV4dDogW1xuICAgICAgICBhZGRyZXNzLmxpbmUxLFxuICAgICAgICBhZGRyZXNzLmxpbmUyLFxuICAgICAgICBhZGRyZXNzLnRvd24gKyAnLCAnICsgcmVnaW9uICsgYWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGUsXG4gICAgICAgIGFkZHJlc3MucG9zdGFsQ29kZSxcbiAgICAgICAgYWRkcmVzcy5waG9uZSxcbiAgICAgIF0sXG4gICAgICBhY3Rpb25zOiBbeyBuYW1lOiB0ZXh0U2hpcFRvVGhpc0FkZHJlc3MsIGV2ZW50OiAnc2VuZCcgfV0sXG4gICAgICBoZWFkZXI6IHNlbGVjdGVkICYmIHNlbGVjdGVkLmlkID09PSBhZGRyZXNzLmlkID8gdGV4dFNlbGVjdGVkIDogJycsXG4gICAgfTtcblxuICAgIHRoaXMuY2FyZHMucHVzaChjYXJkKTtcblxuICAgIHJldHVybiBjYXJkO1xuICB9XG5cbiAgYWRkcmVzc1NlbGVjdGVkKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyQubmV4dChhZGRyZXNzKTtcbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRBZGRyZXNzKHsgYWRkcmVzczogdGhpcy5zZWxlY3RlZEFkZHJlc3MsIG5ld0FkZHJlc3M6IGZhbHNlIH0pO1xuICB9XG5cbiAgYWRkQWRkcmVzcyh7XG4gICAgbmV3QWRkcmVzcyxcbiAgICBhZGRyZXNzLFxuICB9OiB7XG4gICAgbmV3QWRkcmVzczogYm9vbGVhbjtcbiAgICBhZGRyZXNzOiBBZGRyZXNzO1xuICB9KTogdm9pZCB7XG4gICAgaWYgKG5ld0FkZHJlc3MpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY3JlYXRlQW5kU2V0QWRkcmVzcyhhZGRyZXNzKTtcbiAgICAgIHRoaXMuZ29UbyA9IENoZWNrb3V0U3RlcFR5cGUuREVMSVZFUllfTU9ERTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgdGhpcy5zZXRBZGRyZXNzICYmXG4gICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyAmJlxuICAgICAgdGhpcy5zZXRBZGRyZXNzLmlkID09PSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5pZFxuICAgICkge1xuICAgICAgdGhpcy5nb05leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nb1RvID0gQ2hlY2tvdXRTdGVwVHlwZS5ERUxJVkVSWV9NT0RFO1xuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5zZXREZWxpdmVyeUFkZHJlc3MoYWRkcmVzcyk7XG4gICAgfVxuICB9XG5cbiAgYWRkTmV3QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5hZGRBZGRyZXNzKHsgYWRkcmVzcywgbmV3QWRkcmVzczogdHJ1ZSB9KTtcbiAgfVxuXG4gIHNob3dOZXdBZGRyZXNzRm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLm5ld0FkZHJlc3NGb3JtTWFudWFsbHlPcGVuZWQgPSB0cnVlO1xuICB9XG5cbiAgaGlkZU5ld0FkZHJlc3NGb3JtKGdvQmFjazogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5uZXdBZGRyZXNzRm9ybU1hbnVhbGx5T3BlbmVkID0gZmFsc2U7XG4gICAgaWYgKGdvQmFjaykge1xuICAgICAgdGhpcy5iYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgZ29OZXh0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28odGhpcy5jaGVja291dFN0ZXBVcmxOZXh0KTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh0aGlzLmNoZWNrb3V0U3RlcFVybFByZXZpb3VzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNldEFkZHJlc3NTdWIpIHtcbiAgICAgIHRoaXMuc2V0QWRkcmVzc1N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3RlZEFkZHJlc3NTdWIpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=