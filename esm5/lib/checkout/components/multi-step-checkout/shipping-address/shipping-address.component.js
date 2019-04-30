/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, Output, EventEmitter, } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { RoutingService, CartDataService, UserService, CheckoutService, CartService, } from '@spartacus/core';
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
    function ShippingAddressComponent(userService, cartData, cartService, routingService, checkoutService) {
        this.userService = userService;
        this.cartData = cartData;
        this.cartService = cartService;
        this.routingService = routingService;
        this.checkoutService = checkoutService;
        this.newAddressFormManuallyOpened = false;
        this.cards = [];
        this.selectedAddress$ = new BehaviorSubject(null);
        this.goToStep = new EventEmitter();
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
        this.cartService.loadDetails();
        this.isLoading$ = this.userService.getAddressesLoading();
        this.userService.loadAddresses(this.cartData.userId);
        this.setAddressSub = this.checkoutService
            .getDeliveryAddress()
            .subscribe(function (address) {
            _this.setAddress = address;
            _this.selectedAddress$.next(address);
            if (_this.goTo) {
                _this.goToStep.emit(_this.goTo);
                _this.goTo = null;
            }
        });
        this.selectedAddressSub = this.selectedAddress$.subscribe(function (address) {
            _this.selectedAddress = address;
        });
        this.existingAddresses$ = this.userService.getAddresses();
        this.cards$ = combineLatest(this.existingAddresses$, this.selectedAddress$.asObservable()).pipe(map(function (_a) {
            var _b = tslib_1.__read(_a, 2), addresses = _b[0], selected = _b[1];
            return addresses.map(function (address) {
                /** @type {?} */
                var card = _this.getCardContent(address, selected);
                return {
                    address: address,
                    card: card,
                };
            });
        }));
    };
    /**
     * @param {?} address
     * @param {?} selected
     * @return {?}
     */
    ShippingAddressComponent.prototype.getCardContent = /**
     * @param {?} address
     * @param {?} selected
     * @return {?}
     */
    function (address, selected) {
        /** @type {?} */
        var region = '';
        if (address.region && address.region.isocode) {
            region = address.region.isocode + ', ';
        }
        /** @type {?} */
        var card = {
            title: address.defaultAddress ? 'Default Shipping Address' : '',
            textBold: address.firstName + ' ' + address.lastName,
            text: [
                address.line1,
                address.line2,
                address.town + ', ' + region + address.country.isocode,
                address.postalCode,
                address.phone,
            ],
            actions: [{ name: 'Ship to this address', event: 'send' }],
            header: selected && selected.id === address.id ? 'SELECTED' : '',
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
            this.goTo = 2;
            return;
        }
        if (this.setAddress &&
            this.selectedAddress &&
            this.setAddress.id === this.selectedAddress.id) {
            this.goToStep.emit(2);
        }
        else {
            this.goTo = 2;
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
    ShippingAddressComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.routingService.go({ route: 'cart' });
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
        { type: CheckoutService }
    ]; };
    ShippingAddressComponent.propDecorators = {
        goToStep: [{ type: Output }]
    };
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
    ShippingAddressComponent.prototype.goToStep;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUd2QixNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBYyxlQUFlLEVBQUUsYUFBYSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNoRixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUNMLGNBQWMsRUFFZCxlQUFlLEVBQ2YsV0FBVyxFQUNYLGVBQWUsRUFDZixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUd6QixxQ0FHQzs7O0lBRkMsK0JBQVc7O0lBQ1gsa0NBQWlCOztBQUduQjtJQXVCRSxrQ0FDWSxXQUF3QixFQUN4QixRQUF5QixFQUN6QixXQUF3QixFQUN4QixjQUE4QixFQUM5QixlQUFnQztRQUpoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBckI1QyxpQ0FBNEIsR0FBRyxLQUFLLENBQUM7UUFDckMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQU9uQixxQkFBZ0IsR0FBNkIsSUFBSSxlQUFlLENBQzlELElBQUksQ0FDTCxDQUFDO1FBSUYsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFRaEMsQ0FBQzs7OztJQUVKLDJDQUFROzs7SUFB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Ozs7SUFHakMsK0NBQWtDOzs7OztJQUNsQyw0Q0FBbUM7Ozs7O0lBQ25DLCtDQUFrQzs7Ozs7SUFDbEMsa0RBQXdDOzs7OztJQUN4QyxtREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgUm91dGluZ1NlcnZpY2UsXG4gIEFkZHJlc3MsXG4gIENhcnREYXRhU2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG4gIENoZWNrb3V0U2VydmljZSxcbiAgQ2FydFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBDYXJkV2l0aEFkZHJlc3Mge1xuICBjYXJkOiBDYXJkO1xuICBhZGRyZXNzOiBBZGRyZXNzO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zaGlwcGluZy1hZGRyZXNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NoaXBwaW5nLWFkZHJlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2hpcHBpbmdBZGRyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBleGlzdGluZ0FkZHJlc3NlcyQ6IE9ic2VydmFibGU8QWRkcmVzc1tdPjtcbiAgbmV3QWRkcmVzc0Zvcm1NYW51YWxseU9wZW5lZCA9IGZhbHNlO1xuICBjYXJkczogQ2FyZFtdID0gW107XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHNlbGVjdGVkQWRkcmVzczogQWRkcmVzcztcbiAgZ29UbzogbnVtYmVyO1xuICBzZXRBZGRyZXNzOiBBZGRyZXNzO1xuICBzZXRBZGRyZXNzU3ViOiBTdWJzY3JpcHRpb247XG4gIHNlbGVjdGVkQWRkcmVzc1N1YjogU3Vic2NyaXB0aW9uO1xuICBzZWxlY3RlZEFkZHJlc3MkOiBCZWhhdmlvclN1YmplY3Q8QWRkcmVzcz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFkZHJlc3M+KFxuICAgIG51bGxcbiAgKTtcbiAgY2FyZHMkOiBPYnNlcnZhYmxlPENhcmRXaXRoQWRkcmVzc1tdPjtcblxuICBAT3V0cHV0KClcbiAgZ29Ub1N0ZXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ29UbyA9IG51bGw7XG4gICAgdGhpcy5jYXJ0U2VydmljZS5sb2FkRGV0YWlscygpO1xuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0QWRkcmVzc2VzTG9hZGluZygpO1xuICAgIHRoaXMudXNlclNlcnZpY2UubG9hZEFkZHJlc3Nlcyh0aGlzLmNhcnREYXRhLnVzZXJJZCk7XG4gICAgdGhpcy5zZXRBZGRyZXNzU3ViID0gdGhpcy5jaGVja291dFNlcnZpY2VcbiAgICAgIC5nZXREZWxpdmVyeUFkZHJlc3MoKVxuICAgICAgLnN1YnNjcmliZShhZGRyZXNzID0+IHtcbiAgICAgICAgdGhpcy5zZXRBZGRyZXNzID0gYWRkcmVzcztcbiAgICAgICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MkLm5leHQoYWRkcmVzcyk7XG4gICAgICAgIGlmICh0aGlzLmdvVG8pIHtcbiAgICAgICAgICB0aGlzLmdvVG9TdGVwLmVtaXQodGhpcy5nb1RvKTtcbiAgICAgICAgICB0aGlzLmdvVG8gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB0aGlzLnNlbGVjdGVkQWRkcmVzc1N1YiA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzJC5zdWJzY3JpYmUoYWRkcmVzcyA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgfSk7XG5cbiAgICB0aGlzLmV4aXN0aW5nQWRkcmVzc2VzJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0QWRkcmVzc2VzKCk7XG5cbiAgICB0aGlzLmNhcmRzJCA9IGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLmV4aXN0aW5nQWRkcmVzc2VzJCxcbiAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzJC5hc09ic2VydmFibGUoKVxuICAgICkucGlwZShcbiAgICAgIG1hcCgoW2FkZHJlc3Nlcywgc2VsZWN0ZWRdKSA9PiB7XG4gICAgICAgIHJldHVybiBhZGRyZXNzZXMubWFwKGFkZHJlc3MgPT4ge1xuICAgICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmRDb250ZW50KGFkZHJlc3MsIHNlbGVjdGVkKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGNhcmQsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRDYXJkQ29udGVudChhZGRyZXNzOiBBZGRyZXNzLCBzZWxlY3RlZDogYW55KTogQ2FyZCB7XG4gICAgbGV0IHJlZ2lvbiA9ICcnO1xuICAgIGlmIChhZGRyZXNzLnJlZ2lvbiAmJiBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlKSB7XG4gICAgICByZWdpb24gPSBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlICsgJywgJztcbiAgICB9XG4gICAgY29uc3QgY2FyZDogQ2FyZCA9IHtcbiAgICAgIHRpdGxlOiBhZGRyZXNzLmRlZmF1bHRBZGRyZXNzID8gJ0RlZmF1bHQgU2hpcHBpbmcgQWRkcmVzcycgOiAnJyxcbiAgICAgIHRleHRCb2xkOiBhZGRyZXNzLmZpcnN0TmFtZSArICcgJyArIGFkZHJlc3MubGFzdE5hbWUsXG4gICAgICB0ZXh0OiBbXG4gICAgICAgIGFkZHJlc3MubGluZTEsXG4gICAgICAgIGFkZHJlc3MubGluZTIsXG4gICAgICAgIGFkZHJlc3MudG93biArICcsICcgKyByZWdpb24gKyBhZGRyZXNzLmNvdW50cnkuaXNvY29kZSxcbiAgICAgICAgYWRkcmVzcy5wb3N0YWxDb2RlLFxuICAgICAgICBhZGRyZXNzLnBob25lLFxuICAgICAgXSxcbiAgICAgIGFjdGlvbnM6IFt7IG5hbWU6ICdTaGlwIHRvIHRoaXMgYWRkcmVzcycsIGV2ZW50OiAnc2VuZCcgfV0sXG4gICAgICBoZWFkZXI6IHNlbGVjdGVkICYmIHNlbGVjdGVkLmlkID09PSBhZGRyZXNzLmlkID8gJ1NFTEVDVEVEJyA6ICcnLFxuICAgIH07XG5cbiAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfVxuXG4gIGFkZHJlc3NTZWxlY3RlZChhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MkLm5leHQoYWRkcmVzcyk7XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkQWRkcmVzcyh7IGFkZHJlc3M6IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLCBuZXdBZGRyZXNzOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGFkZEFkZHJlc3Moe1xuICAgIG5ld0FkZHJlc3MsXG4gICAgYWRkcmVzcyxcbiAgfToge1xuICAgIG5ld0FkZHJlc3M6IGJvb2xlYW47XG4gICAgYWRkcmVzczogQWRkcmVzcztcbiAgfSk6IHZvaWQge1xuICAgIGlmIChuZXdBZGRyZXNzKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jcmVhdGVBbmRTZXRBZGRyZXNzKGFkZHJlc3MpO1xuICAgICAgdGhpcy5nb1RvID0gMjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgdGhpcy5zZXRBZGRyZXNzICYmXG4gICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyAmJlxuICAgICAgdGhpcy5zZXRBZGRyZXNzLmlkID09PSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5pZFxuICAgICkge1xuICAgICAgdGhpcy5nb1RvU3RlcC5lbWl0KDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdvVG8gPSAyO1xuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2Uuc2V0RGVsaXZlcnlBZGRyZXNzKGFkZHJlc3MpO1xuICAgIH1cbiAgfVxuXG4gIGFkZE5ld0FkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMuYWRkQWRkcmVzcyh7IGFkZHJlc3MsIG5ld0FkZHJlc3M6IHRydWUgfSk7XG4gIH1cblxuICBzaG93TmV3QWRkcmVzc0Zvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5uZXdBZGRyZXNzRm9ybU1hbnVhbGx5T3BlbmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGhpZGVOZXdBZGRyZXNzRm9ybShnb0JhY2s6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMubmV3QWRkcmVzc0Zvcm1NYW51YWxseU9wZW5lZCA9IGZhbHNlO1xuICAgIGlmIChnb0JhY2spIHtcbiAgICAgIHRoaXMuYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IHJvdXRlOiAnY2FydCcgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZXRBZGRyZXNzU3ViKSB7XG4gICAgICB0aGlzLnNldEFkZHJlc3NTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRBZGRyZXNzU3ViKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzc1N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19