/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService, CheckoutService, RoutingService, TranslationService, UserService, } from '@spartacus/core';
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
    function ShippingAddressComponent(userService, cartService, routingService, checkoutService, checkoutConfigService, activatedRoute, translation) {
        this.userService = userService;
        this.cartService = cartService;
        this.routingService = routingService;
        this.checkoutService = checkoutService;
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
        this.isLoading$ = this.userService.getAddressesLoading();
        this.existingAddresses$ = this.userService.getAddresses();
        this.cards$ = combineLatest(this.existingAddresses$, this.selectedAddress$.asObservable(), this.translation.translate('checkoutAddress.defaultShippingAddress'), this.translation.translate('checkoutAddress.shipToThisAddress'), this.translation.translate('addressCard.selected')).pipe(map(function (_a) {
            var _b = tslib_1.__read(_a, 5), addresses = _b[0], selected = _b[1], textDefaultShippingAddress = _b[2], textShipToThisAddress = _b[3], textSelected = _b[4];
            return addresses.map(function (address) {
                /** @type {?} */
                var card = _this.getCardContent(address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected);
                return {
                    address: address,
                    card: card,
                };
            });
        }));
        this.cartService.loadDetails();
        this.userService.loadAddresses();
        this.setAddressSub = this.checkoutService
            .getDeliveryAddress()
            .subscribe(function (address) {
            _this.setAddress = address;
            _this.selectedAddress$.next(address);
            if (_this.goTo) {
                _this.goNext();
                _this.goTo = null;
            }
        });
        this.selectedAddressSub = this.selectedAddress$.subscribe(function (address) {
            _this.selectedAddress = address;
        });
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
            this.checkoutService.createAndSetAddress(address);
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
            this.checkoutService.setDeliveryAddress(address);
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
        { type: UserService },
        { type: CartService },
        { type: RoutingService },
        { type: CheckoutService },
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
    ShippingAddressComponent.prototype.userService;
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
    ShippingAddressComponent.prototype.checkoutService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUVMLFdBQVcsRUFDWCxlQUFlLEVBQ2YsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDaEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBRW5FLHFDQUdDOzs7SUFGQywrQkFBVzs7SUFDWCxrQ0FBaUI7O0FBR25CO0lBc0JFLGtDQUNZLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGNBQThCLEVBQzlCLGVBQWdDLEVBQ2xDLHFCQUE0QyxFQUM1QyxjQUE4QixFQUM5QixXQUErQjtRQU43QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2xDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlC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Qzs7OztJQUVELDhDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7Z0JBdkxGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixzMkZBQWdEO29CQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBakJDLFdBQVc7Z0JBSlgsV0FBVztnQkFFWCxjQUFjO2dCQURkLGVBQWU7Z0JBUVIscUJBQXFCO2dCQVpyQixjQUFjO2dCQU1yQixrQkFBa0I7O0lBc01wQiwrQkFBQztDQUFBLEFBeExELElBd0xDO1NBbkxZLHdCQUF3Qjs7O0lBQ25DLHNEQUEwQzs7SUFDMUMsZ0VBQXFDOztJQUNyQyx5Q0FBbUI7O0lBQ25CLDhDQUFnQzs7SUFDaEMsbURBQXlCOztJQUN6Qix3Q0FBdUI7O0lBQ3ZCLDhDQUFvQjs7SUFDcEIsaURBQTRCOztJQUM1QixzREFBaUM7O0lBQ2pDLG9EQUVFOztJQUNGLDBDQUFzQzs7SUFDdEMsdURBQTRCOztJQUM1QiwyREFBZ0M7Ozs7O0lBRzlCLCtDQUFrQzs7Ozs7SUFDbEMsK0NBQWtDOzs7OztJQUNsQyxrREFBd0M7Ozs7O0lBQ3hDLG1EQUEwQzs7Ozs7SUFDMUMseURBQW9EOzs7OztJQUNwRCxrREFBc0M7Ozs7O0lBQ3RDLCtDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIENhcnRTZXJ2aWNlLFxuICBDaGVja291dFNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFVzZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBDYXJkV2l0aEFkZHJlc3Mge1xuICBjYXJkOiBDYXJkO1xuICBhZGRyZXNzOiBBZGRyZXNzO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zaGlwcGluZy1hZGRyZXNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NoaXBwaW5nLWFkZHJlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2hpcHBpbmdBZGRyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBleGlzdGluZ0FkZHJlc3NlcyQ6IE9ic2VydmFibGU8QWRkcmVzc1tdPjtcbiAgbmV3QWRkcmVzc0Zvcm1NYW51YWxseU9wZW5lZCA9IGZhbHNlO1xuICBjYXJkczogQ2FyZFtdID0gW107XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHNlbGVjdGVkQWRkcmVzczogQWRkcmVzcztcbiAgZ29UbzogQ2hlY2tvdXRTdGVwVHlwZTtcbiAgc2V0QWRkcmVzczogQWRkcmVzcztcbiAgc2V0QWRkcmVzc1N1YjogU3Vic2NyaXB0aW9uO1xuICBzZWxlY3RlZEFkZHJlc3NTdWI6IFN1YnNjcmlwdGlvbjtcbiAgc2VsZWN0ZWRBZGRyZXNzJDogQmVoYXZpb3JTdWJqZWN0PEFkZHJlc3M+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBZGRyZXNzPihcbiAgICBudWxsXG4gICk7XG4gIGNhcmRzJDogT2JzZXJ2YWJsZTxDYXJkV2l0aEFkZHJlc3NbXT47XG4gIGNoZWNrb3V0U3RlcFVybE5leHQ6IHN0cmluZztcbiAgY2hlY2tvdXRTdGVwVXJsUHJldmlvdXM6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ29UbyA9IG51bGw7XG4gICAgdGhpcy5jaGVja291dFN0ZXBVcmxOZXh0ID0gdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0TmV4dENoZWNrb3V0U3RlcFVybChcbiAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGVcbiAgICApO1xuICAgIHRoaXMuY2hlY2tvdXRTdGVwVXJsUHJldmlvdXMgPSAnY2FydCc7XG5cbiAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldEFkZHJlc3Nlc0xvYWRpbmcoKTtcbiAgICB0aGlzLmV4aXN0aW5nQWRkcmVzc2VzJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0QWRkcmVzc2VzKCk7XG4gICAgdGhpcy5jYXJkcyQgPSBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5leGlzdGluZ0FkZHJlc3NlcyQsXG4gICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyQuYXNPYnNlcnZhYmxlKCksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRBZGRyZXNzLmRlZmF1bHRTaGlwcGluZ0FkZHJlc3MnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dEFkZHJlc3Muc2hpcFRvVGhpc0FkZHJlc3MnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdhZGRyZXNzQ2FyZC5zZWxlY3RlZCcpXG4gICAgKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW1xuICAgICAgICAgIGFkZHJlc3NlcyxcbiAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICB0ZXh0RGVmYXVsdFNoaXBwaW5nQWRkcmVzcyxcbiAgICAgICAgICB0ZXh0U2hpcFRvVGhpc0FkZHJlc3MsXG4gICAgICAgICAgdGV4dFNlbGVjdGVkLFxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGFkZHJlc3Nlcy5tYXAoYWRkcmVzcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkQ29udGVudChcbiAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgICAgIHRleHREZWZhdWx0U2hpcHBpbmdBZGRyZXNzLFxuICAgICAgICAgICAgICB0ZXh0U2hpcFRvVGhpc0FkZHJlc3MsXG4gICAgICAgICAgICAgIHRleHRTZWxlY3RlZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgIGNhcmQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcblxuICAgIHRoaXMuY2FydFNlcnZpY2UubG9hZERldGFpbHMoKTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRBZGRyZXNzZXMoKTtcblxuICAgIHRoaXMuc2V0QWRkcmVzc1N1YiA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlXG4gICAgICAuZ2V0RGVsaXZlcnlBZGRyZXNzKClcbiAgICAgIC5zdWJzY3JpYmUoYWRkcmVzcyA9PiB7XG4gICAgICAgIHRoaXMuc2V0QWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzJC5uZXh0KGFkZHJlc3MpO1xuICAgICAgICBpZiAodGhpcy5nb1RvKSB7XG4gICAgICAgICAgdGhpcy5nb05leHQoKTtcbiAgICAgICAgICB0aGlzLmdvVG8gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB0aGlzLnNlbGVjdGVkQWRkcmVzc1N1YiA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzJC5zdWJzY3JpYmUoYWRkcmVzcyA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDYXJkQ29udGVudChcbiAgICBhZGRyZXNzOiBBZGRyZXNzLFxuICAgIHNlbGVjdGVkOiBhbnksXG4gICAgdGV4dERlZmF1bHRTaGlwcGluZ0FkZHJlc3M6IHN0cmluZyxcbiAgICB0ZXh0U2hpcFRvVGhpc0FkZHJlc3M6IHN0cmluZyxcbiAgICB0ZXh0U2VsZWN0ZWQ6IHN0cmluZ1xuICApOiBDYXJkIHtcbiAgICBsZXQgcmVnaW9uID0gJyc7XG4gICAgaWYgKGFkZHJlc3MucmVnaW9uICYmIGFkZHJlc3MucmVnaW9uLmlzb2NvZGUpIHtcbiAgICAgIHJlZ2lvbiA9IGFkZHJlc3MucmVnaW9uLmlzb2NvZGUgKyAnLCAnO1xuICAgIH1cbiAgICBjb25zdCBjYXJkOiBDYXJkID0ge1xuICAgICAgdGl0bGU6IGFkZHJlc3MuZGVmYXVsdEFkZHJlc3MgPyB0ZXh0RGVmYXVsdFNoaXBwaW5nQWRkcmVzcyA6ICcnLFxuICAgICAgdGV4dEJvbGQ6IGFkZHJlc3MuZmlyc3ROYW1lICsgJyAnICsgYWRkcmVzcy5sYXN0TmFtZSxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgYWRkcmVzcy5saW5lMSxcbiAgICAgICAgYWRkcmVzcy5saW5lMixcbiAgICAgICAgYWRkcmVzcy50b3duICsgJywgJyArIHJlZ2lvbiArIGFkZHJlc3MuY291bnRyeS5pc29jb2RlLFxuICAgICAgICBhZGRyZXNzLnBvc3RhbENvZGUsXG4gICAgICAgIGFkZHJlc3MucGhvbmUsXG4gICAgICBdLFxuICAgICAgYWN0aW9uczogW3sgbmFtZTogdGV4dFNoaXBUb1RoaXNBZGRyZXNzLCBldmVudDogJ3NlbmQnIH1dLFxuICAgICAgaGVhZGVyOiBzZWxlY3RlZCAmJiBzZWxlY3RlZC5pZCA9PT0gYWRkcmVzcy5pZCA/IHRleHRTZWxlY3RlZCA6ICcnLFxuICAgIH07XG5cbiAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfVxuXG4gIGFkZHJlc3NTZWxlY3RlZChhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MkLm5leHQoYWRkcmVzcyk7XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkQWRkcmVzcyh7IGFkZHJlc3M6IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLCBuZXdBZGRyZXNzOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGFkZEFkZHJlc3Moe1xuICAgIG5ld0FkZHJlc3MsXG4gICAgYWRkcmVzcyxcbiAgfToge1xuICAgIG5ld0FkZHJlc3M6IGJvb2xlYW47XG4gICAgYWRkcmVzczogQWRkcmVzcztcbiAgfSk6IHZvaWQge1xuICAgIGlmIChuZXdBZGRyZXNzKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jcmVhdGVBbmRTZXRBZGRyZXNzKGFkZHJlc3MpO1xuICAgICAgdGhpcy5nb1RvID0gQ2hlY2tvdXRTdGVwVHlwZS5ERUxJVkVSWV9NT0RFO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0aGlzLnNldEFkZHJlc3MgJiZcbiAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzICYmXG4gICAgICB0aGlzLnNldEFkZHJlc3MuaWQgPT09IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLmlkXG4gICAgKSB7XG4gICAgICB0aGlzLmdvTmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdvVG8gPSBDaGVja291dFN0ZXBUeXBlLkRFTElWRVJZX01PREU7XG4gICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5zZXREZWxpdmVyeUFkZHJlc3MoYWRkcmVzcyk7XG4gICAgfVxuICB9XG5cbiAgYWRkTmV3QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5hZGRBZGRyZXNzKHsgYWRkcmVzcywgbmV3QWRkcmVzczogdHJ1ZSB9KTtcbiAgfVxuXG4gIHNob3dOZXdBZGRyZXNzRm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLm5ld0FkZHJlc3NGb3JtTWFudWFsbHlPcGVuZWQgPSB0cnVlO1xuICB9XG5cbiAgaGlkZU5ld0FkZHJlc3NGb3JtKGdvQmFjazogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5uZXdBZGRyZXNzRm9ybU1hbnVhbGx5T3BlbmVkID0gZmFsc2U7XG4gICAgaWYgKGdvQmFjaykge1xuICAgICAgdGhpcy5iYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgZ29OZXh0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28odGhpcy5jaGVja291dFN0ZXBVcmxOZXh0KTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh0aGlzLmNoZWNrb3V0U3RlcFVybFByZXZpb3VzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNldEFkZHJlc3NTdWIpIHtcbiAgICAgIHRoaXMuc2V0QWRkcmVzc1N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3RlZEFkZHJlc3NTdWIpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=