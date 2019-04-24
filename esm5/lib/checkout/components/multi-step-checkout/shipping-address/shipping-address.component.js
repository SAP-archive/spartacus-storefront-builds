/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Output, Input, EventEmitter, } from '@angular/core';
import { tap, filter } from 'rxjs/operators';
import { RoutingService, CartDataService, UserService, } from '@spartacus/core';
var ShippingAddressComponent = /** @class */ (function () {
    function ShippingAddressComponent(userService, cartData, routingService) {
        this.userService = userService;
        this.cartData = cartData;
        this.routingService = routingService;
        this.newAddressFormManuallyOpened = false;
        this.cards = [];
        this.addAddress = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ShippingAddressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isLoading$ = this.userService.getAddressesLoading();
        this.userService.loadAddresses(this.cartData.userId);
        this.existingAddresses$ = this.userService.getAddresses().pipe(tap(function (addresses) {
            if (_this.cards.length === 0 && addresses) {
                addresses.forEach(function (address) {
                    /** @type {?} */
                    var card = _this.getCardContent(address);
                    if (_this.selectedAddress &&
                        _this.selectedAddress.id === address.id) {
                        card.header = 'SELECTED';
                    }
                });
            }
        }), filter(Boolean));
    };
    /**
     * @param {?} address
     * @return {?}
     */
    ShippingAddressComponent.prototype.getCardContent = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
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
        };
        this.cards.push(card);
        return card;
    };
    /**
     * @param {?} address
     * @param {?} index
     * @return {?}
     */
    ShippingAddressComponent.prototype.addressSelected = /**
     * @param {?} address
     * @param {?} index
     * @return {?}
     */
    function (address, index) {
        this.selectedAddress = address;
        for (var i = 0; this.cards[i]; i++) {
            /** @type {?} */
            var card = this.cards[i];
            if (i === index) {
                card.header = 'SELECTED';
            }
            else {
                card.header = '';
            }
        }
    };
    /**
     * @return {?}
     */
    ShippingAddressComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.addAddress.emit({ address: this.selectedAddress, newAddress: false });
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
        this.addAddress.emit({ address: address, newAddress: true });
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
    ShippingAddressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-shipping-address',
                    template: "<ng-container *ngIf=\"(existingAddresses$ | async) as existingAddresses\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutAddress.shippingAddress' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        existingAddresses?.length && !newAddressFormManuallyOpened;\n        else newAddressForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'checkoutAddress.selectYourShippingAddress' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewAddressForm()\"\n          >\n            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-shipping-address-card col-md-12 col-lg-6\"\n          *ngFor=\"let address of existingAddresses; let i = index\"\n        >\n          <div\n            class=\"cx-shipping-address-card-inner\"\n            (click)=\"addressSelected(address, i)\"\n          >\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"cards[i]\"\n              (sendCard)=\"addressSelected(address, i)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"cx-btn btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'checkout.backToCart' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-primary\"\n            [disabled]=\"!selectedAddress\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newAddressForm>\n      <ng-container *ngIf=\"existingAddresses.length; else initialAddressForm\">\n        <cx-address-form\n          showTitleCode=\"true\"\n          (backToAddress)=\"hideNewAddressForm(false)\"\n          (submitAddress)=\"addNewAddress($event)\"\n        ></cx-address-form>\n      </ng-container>\n      <ng-template #initialAddressForm>\n        <cx-address-form\n          showTitleCode=\"true\"\n          cancelBtnLabel=\"{{ 'checkout.backToCart' | cxTranslate }}\"\n          (backToAddress)=\"hideNewAddressForm(true)\"\n          (submitAddress)=\"addNewAddress($event)\"\n        ></cx-address-form>\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:991.98px){:host{display:var(--cx-display,block);background-color:var(--cx-background-color,var(--cx-g-color-background))}.col-md-12{padding:var(--cx-padding,0 4.375rem)}.container{width:var(--cx-width,100%)}}@media (max-width:767.98px){.col-md-12{padding:var(--cx-padding,0 2.25rem)}}.cx-checkout-btns{padding:var(--cx-padding,1rem 0);justify-content:var(--cx-justify-content,flex-end)}@media (max-width:767.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}}@media (max-width:991.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}.cx-checkout-btns .btn-action{margin:var(--cx-margin,0 0 1rem)}.cx-checkout-body.row{padding:var(--cx-padding,0)}}.cx-checkout-title{text-transform:var(--cx-text-transform,capitalize);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.75rem 0)}.cx-checkout-body{display:var(--cx-display,flex);align-items:var(--cx-align-items,stretch)}.cx-checkout-text{margin-bottom:var(--cx-margin,1.25rem)}@media (max-width:991.98px){.cx-checkout-text{padding-left:var(--cx-padding,3.5rem)}}@media (max-width:767.98px){.cx-checkout-text{padding-left:var(--cx-padding,1.5rem)}}.cx-spinner{padding-top:var(--cx-padding,30px);padding-bottom:var(--cx-padding,30px)}.cx-shipping-address-card{padding-bottom:var(--cx-padding,30px)}.cx-shipping-address-card .cx-shipping-address-card-inner{height:var(--cx-height,100%);background-color:var(--cx-background-color,var(--cx-g-color-inverse));cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    ShippingAddressComponent.ctorParameters = function () { return [
        { type: UserService },
        { type: CartDataService },
        { type: RoutingService }
    ]; };
    ShippingAddressComponent.propDecorators = {
        selectedAddress: [{ type: Input }],
        addAddress: [{ type: Output }]
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
    ShippingAddressComponent.prototype.addAddress;
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
    ShippingAddressComponent.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBRXZCLE1BQU0sRUFDTixLQUFLLEVBQ0wsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUNMLGNBQWMsRUFFZCxlQUFlLEVBQ2YsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFHekI7SUFpQkUsa0NBQ1ksV0FBd0IsRUFDeEIsUUFBeUIsRUFDekIsY0FBOEI7UUFGOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBWjFDLGlDQUE0QixHQUFHLEtBQUssQ0FBQztRQUNyQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBTW5CLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBTWxDLENBQUM7Ozs7SUFFSiwyQ0FBUTs7O0lBQVI7UUFBQSxpQkFvQkM7UUFuQkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQzVELEdB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LElBQUksQ0FBQyw0QkFBNEIsR0FBRyxLQUFLLENBQUM7UUFDMUMsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7Ozs7SUFFRCx1Q0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2dCQXRHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IseTRGQUFnRDtvQkFFaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFUQyxXQUFXO2dCQURYLGVBQWU7Z0JBRmYsY0FBYzs7O2tDQW1CYixLQUFLOzZCQUVMLE1BQU07O0lBeUZULCtCQUFDO0NBQUEsQUF2R0QsSUF1R0M7U0FqR1ksd0JBQXdCOzs7SUFDbkMsc0RBQTBDOztJQUMxQyxnRUFBcUM7O0lBQ3JDLHlDQUFtQjs7SUFDbkIsOENBQWdDOztJQUVoQyxtREFDeUI7O0lBQ3pCLDhDQUNxQzs7Ozs7SUFHbkMsK0NBQWtDOzs7OztJQUNsQyw0Q0FBbUM7Ozs7O0lBQ25DLGtEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBSb3V0aW5nU2VydmljZSxcbiAgQWRkcmVzcyxcbiAgQ2FydERhdGFTZXJ2aWNlLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi91aS9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zaGlwcGluZy1hZGRyZXNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NoaXBwaW5nLWFkZHJlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaGlwcGluZy1hZGRyZXNzLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTaGlwcGluZ0FkZHJlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBleGlzdGluZ0FkZHJlc3NlcyQ6IE9ic2VydmFibGU8QWRkcmVzc1tdPjtcbiAgbmV3QWRkcmVzc0Zvcm1NYW51YWxseU9wZW5lZCA9IGZhbHNlO1xuICBjYXJkczogQ2FyZFtdID0gW107XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgQElucHV0KClcbiAgc2VsZWN0ZWRBZGRyZXNzOiBBZGRyZXNzO1xuICBAT3V0cHV0KClcbiAgYWRkQWRkcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy51c2VyU2VydmljZS5nZXRBZGRyZXNzZXNMb2FkaW5nKCk7XG4gICAgdGhpcy51c2VyU2VydmljZS5sb2FkQWRkcmVzc2VzKHRoaXMuY2FydERhdGEudXNlcklkKTtcblxuICAgIHRoaXMuZXhpc3RpbmdBZGRyZXNzZXMkID0gdGhpcy51c2VyU2VydmljZS5nZXRBZGRyZXNzZXMoKS5waXBlKFxuICAgICAgdGFwKGFkZHJlc3NlcyA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNhcmRzLmxlbmd0aCA9PT0gMCAmJiBhZGRyZXNzZXMpIHtcbiAgICAgICAgICBhZGRyZXNzZXMuZm9yRWFjaChhZGRyZXNzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmRDb250ZW50KGFkZHJlc3MpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyAmJlxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcy5pZCA9PT0gYWRkcmVzcy5pZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGNhcmQuaGVhZGVyID0gJ1NFTEVDVEVEJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBmaWx0ZXIoQm9vbGVhbilcbiAgICApO1xuICB9XG5cbiAgZ2V0Q2FyZENvbnRlbnQoYWRkcmVzczogQWRkcmVzcyk6IENhcmQge1xuICAgIGxldCByZWdpb24gPSAnJztcbiAgICBpZiAoYWRkcmVzcy5yZWdpb24gJiYgYWRkcmVzcy5yZWdpb24uaXNvY29kZSkge1xuICAgICAgcmVnaW9uID0gYWRkcmVzcy5yZWdpb24uaXNvY29kZSArICcsICc7XG4gICAgfVxuICAgIGNvbnN0IGNhcmQ6IENhcmQgPSB7XG4gICAgICB0aXRsZTogYWRkcmVzcy5kZWZhdWx0QWRkcmVzcyA/ICdEZWZhdWx0IFNoaXBwaW5nIEFkZHJlc3MnIDogJycsXG4gICAgICB0ZXh0Qm9sZDogYWRkcmVzcy5maXJzdE5hbWUgKyAnICcgKyBhZGRyZXNzLmxhc3ROYW1lLFxuICAgICAgdGV4dDogW1xuICAgICAgICBhZGRyZXNzLmxpbmUxLFxuICAgICAgICBhZGRyZXNzLmxpbmUyLFxuICAgICAgICBhZGRyZXNzLnRvd24gKyAnLCAnICsgcmVnaW9uICsgYWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGUsXG4gICAgICAgIGFkZHJlc3MucG9zdGFsQ29kZSxcbiAgICAgICAgYWRkcmVzcy5waG9uZSxcbiAgICAgIF0sXG4gICAgICBhY3Rpb25zOiBbeyBuYW1lOiAnU2hpcCB0byB0aGlzIGFkZHJlc3MnLCBldmVudDogJ3NlbmQnIH1dLFxuICAgIH07XG5cbiAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfVxuXG4gIGFkZHJlc3NTZWxlY3RlZChhZGRyZXNzOiBBZGRyZXNzLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MgPSBhZGRyZXNzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IHRoaXMuY2FyZHNbaV07IGkrKykge1xuICAgICAgY29uc3QgY2FyZCA9IHRoaXMuY2FyZHNbaV07XG4gICAgICBpZiAoaSA9PT0gaW5kZXgpIHtcbiAgICAgICAgY2FyZC5oZWFkZXIgPSAnU0VMRUNURUQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FyZC5oZWFkZXIgPSAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkQWRkcmVzcy5lbWl0KHsgYWRkcmVzczogdGhpcy5zZWxlY3RlZEFkZHJlc3MsIG5ld0FkZHJlc3M6IGZhbHNlIH0pO1xuICB9XG5cbiAgYWRkTmV3QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5hZGRBZGRyZXNzLmVtaXQoeyBhZGRyZXNzOiBhZGRyZXNzLCBuZXdBZGRyZXNzOiB0cnVlIH0pO1xuICB9XG5cbiAgc2hvd05ld0FkZHJlc3NGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMubmV3QWRkcmVzc0Zvcm1NYW51YWxseU9wZW5lZCA9IHRydWU7XG4gIH1cblxuICBoaWRlTmV3QWRkcmVzc0Zvcm0oZ29CYWNrOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLm5ld0FkZHJlc3NGb3JtTWFudWFsbHlPcGVuZWQgPSBmYWxzZTtcbiAgICBpZiAoZ29CYWNrKSB7XG4gICAgICB0aGlzLmJhY2soKTtcbiAgICB9XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyByb3V0ZTogJ2NhcnQnIH0pO1xuICB9XG59XG4iXX0=