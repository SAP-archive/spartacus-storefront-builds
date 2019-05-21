/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { CartDataService, CartService, CheckoutService, RoutingService, UserService, TranslationService, } from '@spartacus/core';
import { CheckoutStepType } from '../../model/checkout-step.model';
import { CheckoutConfigService } from '../../checkout-config.service';
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
    function ShippingAddressComponent(userService, cartData, cartService, routingService, checkoutService, checkoutConfigService, activatedRoute, translation) {
        this.userService = userService;
        this.cartData = cartData;
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
        this.userService.loadAddresses(this.cartData.userId);
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
            this.goTo = CheckoutStepType.deliveryMode;
            return;
        }
        if (this.setAddress &&
            this.selectedAddress &&
            this.setAddress.id === this.selectedAddress.id) {
            this.goNext();
        }
        else {
            this.goTo = CheckoutStepType.deliveryMode;
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
        { type: CartDataService },
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
    ShippingAddressComponent.prototype.cartData;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9zaGlwcGluZy1hZGRyZXNzL3NoaXBwaW5nLWFkZHJlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQTRCLE1BQU0sTUFBTSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUVMLGVBQWUsRUFDZixXQUFXLEVBQ1gsZUFBZSxFQUNmLGNBQWMsRUFDZCxXQUFXLEVBQ1gsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFHdEUscUNBR0M7OztJQUZDLCtCQUFXOztJQUNYLGtDQUFpQjs7QUFHbkI7SUFzQkUsa0NBQ1ksV0FBd0IsRUFDeEIsUUFBeUIsRUFDekIsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsZUFBZ0MsRUFDbEMscUJBQTRDLEVBQzVDLGNBQThCLEVBQzlCLFdBQStCO1FBUDdCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDbEMsMEJBQXFCLEdBQXJCLHFCQUFxQixD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RSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsOENBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbEM7UUFDRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDOztnQkF4TEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLHMyRkFBZ0Q7b0JBQ2hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFoQkMsV0FBVztnQkFKWCxlQUFlO2dCQUNmLFdBQVc7Z0JBRVgsY0FBYztnQkFEZCxlQUFlO2dCQU1SLHFCQUFxQjtnQkFackIsY0FBYztnQkFTckIsa0JBQWtCOztJQW9NcEIsK0JBQUM7Q0FBQSxBQXpMRCxJQXlMQztTQXBMWSx3QkFBd0I7OztJQUNuQyxzREFBMEM7O0lBQzFDLGdFQUFxQzs7SUFDckMseUNBQW1COztJQUNuQiw4Q0FBZ0M7O0lBQ2hDLG1EQUF5Qjs7SUFDekIsd0NBQXVCOztJQUN2Qiw4Q0FBb0I7O0lBQ3BCLGlEQUE0Qjs7SUFDNUIsc0RBQWlDOztJQUNqQyxvREFFRTs7SUFDRiwwQ0FBc0M7O0lBQ3RDLHVEQUE0Qjs7SUFDNUIsMkRBQWdDOzs7OztJQUc5QiwrQ0FBa0M7Ozs7O0lBQ2xDLDRDQUFtQzs7Ozs7SUFDbkMsK0NBQWtDOzs7OztJQUNsQyxrREFBd0M7Ozs7O0lBQ3hDLG1EQUEwQzs7Ozs7SUFDMUMseURBQW9EOzs7OztJQUNwRCxrREFBc0M7Ozs7O0lBQ3RDLCtDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIENhcnREYXRhU2VydmljZSxcbiAgQ2FydFNlcnZpY2UsXG4gIENoZWNrb3V0U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFVzZXJTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZFdpdGhBZGRyZXNzIHtcbiAgY2FyZDogQ2FyZDtcbiAgYWRkcmVzczogQWRkcmVzcztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc2hpcHBpbmctYWRkcmVzcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaGlwcGluZy1hZGRyZXNzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNoaXBwaW5nQWRkcmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgZXhpc3RpbmdBZGRyZXNzZXMkOiBPYnNlcnZhYmxlPEFkZHJlc3NbXT47XG4gIG5ld0FkZHJlc3NGb3JtTWFudWFsbHlPcGVuZWQgPSBmYWxzZTtcbiAgY2FyZHM6IENhcmRbXSA9IFtdO1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBzZWxlY3RlZEFkZHJlc3M6IEFkZHJlc3M7XG4gIGdvVG86IENoZWNrb3V0U3RlcFR5cGU7XG4gIHNldEFkZHJlc3M6IEFkZHJlc3M7XG4gIHNldEFkZHJlc3NTdWI6IFN1YnNjcmlwdGlvbjtcbiAgc2VsZWN0ZWRBZGRyZXNzU3ViOiBTdWJzY3JpcHRpb247XG4gIHNlbGVjdGVkQWRkcmVzcyQ6IEJlaGF2aW9yU3ViamVjdDxBZGRyZXNzPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QWRkcmVzcz4oXG4gICAgbnVsbFxuICApO1xuICBjYXJkcyQ6IE9ic2VydmFibGU8Q2FyZFdpdGhBZGRyZXNzW10+O1xuICBjaGVja291dFN0ZXBVcmxOZXh0OiBzdHJpbmc7XG4gIGNoZWNrb3V0U3RlcFVybFByZXZpb3VzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2FydERhdGE6IENhcnREYXRhU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdvVG8gPSBudWxsO1xuICAgIHRoaXMuY2hlY2tvdXRTdGVwVXJsTmV4dCA9IHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldE5leHRDaGVja291dFN0ZXBVcmwoXG4gICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlXG4gICAgKTtcbiAgICB0aGlzLmNoZWNrb3V0U3RlcFVybFByZXZpb3VzID0gJ2NhcnQnO1xuXG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy51c2VyU2VydmljZS5nZXRBZGRyZXNzZXNMb2FkaW5nKCk7XG4gICAgdGhpcy5leGlzdGluZ0FkZHJlc3NlcyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldEFkZHJlc3NlcygpO1xuICAgIHRoaXMuY2FyZHMkID0gY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMuZXhpc3RpbmdBZGRyZXNzZXMkLFxuICAgICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MkLmFzT2JzZXJ2YWJsZSgpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0QWRkcmVzcy5kZWZhdWx0U2hpcHBpbmdBZGRyZXNzJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRBZGRyZXNzLnNoaXBUb1RoaXNBZGRyZXNzJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnYWRkcmVzc0NhcmQuc2VsZWN0ZWQnKVxuICAgICkucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKFtcbiAgICAgICAgICBhZGRyZXNzZXMsXG4gICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgdGV4dERlZmF1bHRTaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgdGV4dFNoaXBUb1RoaXNBZGRyZXNzLFxuICAgICAgICAgIHRleHRTZWxlY3RlZCxcbiAgICAgICAgXSkgPT4ge1xuICAgICAgICAgIHJldHVybiBhZGRyZXNzZXMubWFwKGFkZHJlc3MgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuZ2V0Q2FyZENvbnRlbnQoXG4gICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgICAgICB0ZXh0RGVmYXVsdFNoaXBwaW5nQWRkcmVzcyxcbiAgICAgICAgICAgICAgdGV4dFNoaXBUb1RoaXNBZGRyZXNzLFxuICAgICAgICAgICAgICB0ZXh0U2VsZWN0ZWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICBjYXJkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG5cbiAgICB0aGlzLmNhcnRTZXJ2aWNlLmxvYWREZXRhaWxzKCk7XG4gICAgdGhpcy51c2VyU2VydmljZS5sb2FkQWRkcmVzc2VzKHRoaXMuY2FydERhdGEudXNlcklkKTtcblxuICAgIHRoaXMuc2V0QWRkcmVzc1N1YiA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlXG4gICAgICAuZ2V0RGVsaXZlcnlBZGRyZXNzKClcbiAgICAgIC5zdWJzY3JpYmUoYWRkcmVzcyA9PiB7XG4gICAgICAgIHRoaXMuc2V0QWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzJC5uZXh0KGFkZHJlc3MpO1xuICAgICAgICBpZiAodGhpcy5nb1RvKSB7XG4gICAgICAgICAgdGhpcy5nb05leHQoKTtcbiAgICAgICAgICB0aGlzLmdvVG8gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB0aGlzLnNlbGVjdGVkQWRkcmVzc1N1YiA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzJC5zdWJzY3JpYmUoYWRkcmVzcyA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDYXJkQ29udGVudChcbiAgICBhZGRyZXNzOiBBZGRyZXNzLFxuICAgIHNlbGVjdGVkOiBhbnksXG4gICAgdGV4dERlZmF1bHRTaGlwcGluZ0FkZHJlc3M6IHN0cmluZyxcbiAgICB0ZXh0U2hpcFRvVGhpc0FkZHJlc3M6IHN0cmluZyxcbiAgICB0ZXh0U2VsZWN0ZWQ6IHN0cmluZ1xuICApOiBDYXJkIHtcbiAgICBsZXQgcmVnaW9uID0gJyc7XG4gICAgaWYgKGFkZHJlc3MucmVnaW9uICYmIGFkZHJlc3MucmVnaW9uLmlzb2NvZGUpIHtcbiAgICAgIHJlZ2lvbiA9IGFkZHJlc3MucmVnaW9uLmlzb2NvZGUgKyAnLCAnO1xuICAgIH1cbiAgICBjb25zdCBjYXJkOiBDYXJkID0ge1xuICAgICAgdGl0bGU6IGFkZHJlc3MuZGVmYXVsdEFkZHJlc3MgPyB0ZXh0RGVmYXVsdFNoaXBwaW5nQWRkcmVzcyA6ICcnLFxuICAgICAgdGV4dEJvbGQ6IGFkZHJlc3MuZmlyc3ROYW1lICsgJyAnICsgYWRkcmVzcy5sYXN0TmFtZSxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgYWRkcmVzcy5saW5lMSxcbiAgICAgICAgYWRkcmVzcy5saW5lMixcbiAgICAgICAgYWRkcmVzcy50b3duICsgJywgJyArIHJlZ2lvbiArIGFkZHJlc3MuY291bnRyeS5pc29jb2RlLFxuICAgICAgICBhZGRyZXNzLnBvc3RhbENvZGUsXG4gICAgICAgIGFkZHJlc3MucGhvbmUsXG4gICAgICBdLFxuICAgICAgYWN0aW9uczogW3sgbmFtZTogdGV4dFNoaXBUb1RoaXNBZGRyZXNzLCBldmVudDogJ3NlbmQnIH1dLFxuICAgICAgaGVhZGVyOiBzZWxlY3RlZCAmJiBzZWxlY3RlZC5pZCA9PT0gYWRkcmVzcy5pZCA/IHRleHRTZWxlY3RlZCA6ICcnLFxuICAgIH07XG5cbiAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfVxuXG4gIGFkZHJlc3NTZWxlY3RlZChhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MkLm5leHQoYWRkcmVzcyk7XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkQWRkcmVzcyh7IGFkZHJlc3M6IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLCBuZXdBZGRyZXNzOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGFkZEFkZHJlc3Moe1xuICAgIG5ld0FkZHJlc3MsXG4gICAgYWRkcmVzcyxcbiAgfToge1xuICAgIG5ld0FkZHJlc3M6IGJvb2xlYW47XG4gICAgYWRkcmVzczogQWRkcmVzcztcbiAgfSk6IHZvaWQge1xuICAgIGlmIChuZXdBZGRyZXNzKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jcmVhdGVBbmRTZXRBZGRyZXNzKGFkZHJlc3MpO1xuICAgICAgdGhpcy5nb1RvID0gQ2hlY2tvdXRTdGVwVHlwZS5kZWxpdmVyeU1vZGU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRoaXMuc2V0QWRkcmVzcyAmJlxuICAgICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MgJiZcbiAgICAgIHRoaXMuc2V0QWRkcmVzcy5pZCA9PT0gdGhpcy5zZWxlY3RlZEFkZHJlc3MuaWRcbiAgICApIHtcbiAgICAgIHRoaXMuZ29OZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ29UbyA9IENoZWNrb3V0U3RlcFR5cGUuZGVsaXZlcnlNb2RlO1xuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2Uuc2V0RGVsaXZlcnlBZGRyZXNzKGFkZHJlc3MpO1xuICAgIH1cbiAgfVxuXG4gIGFkZE5ld0FkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMuYWRkQWRkcmVzcyh7IGFkZHJlc3MsIG5ld0FkZHJlc3M6IHRydWUgfSk7XG4gIH1cblxuICBzaG93TmV3QWRkcmVzc0Zvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5uZXdBZGRyZXNzRm9ybU1hbnVhbGx5T3BlbmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGhpZGVOZXdBZGRyZXNzRm9ybShnb0JhY2s6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMubmV3QWRkcmVzc0Zvcm1NYW51YWxseU9wZW5lZCA9IGZhbHNlO1xuICAgIGlmIChnb0JhY2spIHtcbiAgICAgIHRoaXMuYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIGdvTmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHRoaXMuY2hlY2tvdXRTdGVwVXJsTmV4dCk7XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28odGhpcy5jaGVja291dFN0ZXBVcmxQcmV2aW91cyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZXRBZGRyZXNzU3ViKSB7XG4gICAgICB0aGlzLnNldEFkZHJlc3NTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRBZGRyZXNzU3ViKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzc1N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19