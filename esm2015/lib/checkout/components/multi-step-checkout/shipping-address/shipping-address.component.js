/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Output, Input, EventEmitter, } from '@angular/core';
import { tap, filter } from 'rxjs/operators';
import { RoutingService, CartDataService, UserService, } from '@spartacus/core';
export class ShippingAddressComponent {
    /**
     * @param {?} userService
     * @param {?} cartData
     * @param {?} routingService
     */
    constructor(userService, cartData, routingService) {
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
    ngOnInit() {
        this.isLoading$ = this.userService.getAddressesLoading();
        this.userService.loadAddresses(this.cartData.userId);
        this.existingAddresses$ = this.userService.getAddresses().pipe(tap(addresses => {
            if (this.cards.length === 0 && addresses) {
                addresses.forEach(address => {
                    /** @type {?} */
                    const card = this.getCardContent(address);
                    if (this.selectedAddress &&
                        this.selectedAddress.id === address.id) {
                        card.header = 'SELECTED';
                    }
                });
            }
        }), filter(Boolean));
    }
    /**
     * @param {?} address
     * @return {?}
     */
    getCardContent(address) {
        /** @type {?} */
        let region = '';
        if (address.region && address.region.isocode) {
            region = address.region.isocode + ', ';
        }
        /** @type {?} */
        const card = {
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
    }
    /**
     * @param {?} address
     * @param {?} index
     * @return {?}
     */
    addressSelected(address, index) {
        this.selectedAddress = address;
        for (let i = 0; this.cards[i]; i++) {
            /** @type {?} */
            const card = this.cards[i];
            if (i === index) {
                card.header = 'SELECTED';
            }
            else {
                card.header = '';
            }
        }
    }
    /**
     * @return {?}
     */
    next() {
        this.addAddress.emit({ address: this.selectedAddress, newAddress: false });
    }
    /**
     * @param {?} address
     * @return {?}
     */
    addNewAddress(address) {
        this.addAddress.emit({ address: address, newAddress: true });
    }
    /**
     * @return {?}
     */
    showNewAddressForm() {
        this.newAddressFormManuallyOpened = true;
    }
    /**
     * @param {?=} goBack
     * @return {?}
     */
    hideNewAddressForm(goBack = false) {
        this.newAddressFormManuallyOpened = false;
        if (goBack) {
            this.back();
        }
    }
    /**
     * @return {?}
     */
    back() {
        this.routingService.go({ route: 'cart' });
    }
}
ShippingAddressComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-shipping-address',
                template: "<ng-container *ngIf=\"(existingAddresses$ | async) as existingAddresses\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutAddress.shippingAddress' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        existingAddresses?.length && !newAddressFormManuallyOpened;\n        else newAddressForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'checkoutAddress.selectYourShippingAddress' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewAddressForm()\"\n          >\n            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-shipping-address-card col-md-12 col-lg-6\"\n          *ngFor=\"let address of existingAddresses; let i = index\"\n        >\n          <div\n            class=\"cx-shipping-address-card-inner\"\n            (click)=\"addressSelected(address, i)\"\n          >\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"cards[i]\"\n              (sendCard)=\"addressSelected(address, i)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"cx-btn btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'checkout.backToCart' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-primary\"\n            [disabled]=\"!selectedAddress\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newAddressForm>\n      <ng-container *ngIf=\"existingAddresses.length; else initialAddressForm\">\n        <cx-address-form\n          showTitleCode=\"true\"\n          (backToAddress)=\"hideNewAddressForm(false)\"\n          (submitAddress)=\"addNewAddress($event)\"\n        ></cx-address-form>\n      </ng-container>\n      <ng-template #initialAddressForm>\n        <cx-address-form\n          showTitleCode=\"true\"\n          cancelBtnLabel=\"{{ 'checkout.backToCart' | cxTranslate }}\"\n          (backToAddress)=\"hideNewAddressForm(true)\"\n          (submitAddress)=\"addNewAddress($event)\"\n        ></cx-address-form>\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:991.98px){:host{display:var(--cx-display,block);background-color:var(--cx-background-color,var(--cx-g-color-background))}.col-md-12{padding:var(--cx-padding,0 4.375rem)}.container{width:var(--cx-width,100%)}}@media (max-width:767.98px){.col-md-12{padding:var(--cx-padding,0 2.25rem)}}.cx-checkout-btns{padding:var(--cx-padding,1rem 0);justify-content:var(--cx-justify-content,flex-end)}@media (max-width:767.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}}@media (max-width:991.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}.cx-checkout-btns .btn-action{margin:var(--cx-margin,0 0 1rem)}.cx-checkout-body.row{padding:var(--cx-padding,0)}}.cx-checkout-title{text-transform:var(--cx-text-transform,capitalize);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.75rem 0)}.cx-checkout-body{display:var(--cx-display,flex);align-items:var(--cx-align-items,stretch)}.cx-checkout-text{margin-bottom:var(--cx-margin,1.25rem)}@media (max-width:991.98px){.cx-checkout-text{padding-left:var(--cx-padding,3.5rem)}}@media (max-width:767.98px){.cx-checkout-text{padding-left:var(--cx-padding,1.5rem)}}.cx-spinner{padding-top:var(--cx-padding,30px);padding-bottom:var(--cx-padding,30px)}.cx-shipping-address-card{padding-bottom:var(--cx-padding,30px)}.cx-shipping-address-card .cx-shipping-address-card-inner{height:var(--cx-height,100%);background-color:var(--cx-background-color,var(--cx-g-color-inverse));cursor:pointer}"]
            }] }
];
/** @nocollapse */
ShippingAddressComponent.ctorParameters = () => [
    { type: UserService },
    { type: CartDataService },
    { type: RoutingService }
];
ShippingAddressComponent.propDecorators = {
    selectedAddress: [{ type: Input }],
    addAddress: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBRXZCLE1BQU0sRUFDTixLQUFLLEVBQ0wsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUNMLGNBQWMsRUFFZCxlQUFlLEVBQ2YsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFTekIsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBV25DLFlBQ1ksV0FBd0IsRUFDeEIsUUFBeUIsRUFDekIsY0FBOEI7UUFGOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBWjFDLGlDQUE0QixHQUFHLEtBQUssQ0FBQztRQUNyQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBTW5CLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBTWxDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQzVELEdB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SSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7O1lBdEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQix5NEZBQWdEO2dCQUVoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFUQyxXQUFXO1lBRFgsZUFBZTtZQUZmLGNBQWM7Ozs4QkFtQmIsS0FBSzt5QkFFTCxNQUFNOzs7O0lBUFAsc0RBQTBDOztJQUMxQyxnRUFBcUM7O0lBQ3JDLHlDQUFtQjs7SUFDbkIsOENBQWdDOztJQUVoQyxtREFDeUI7O0lBQ3pCLDhDQUNxQzs7Ozs7SUFHbkMsK0NBQWtDOzs7OztJQUNsQyw0Q0FBbUM7Ozs7O0lBQ25DLGtEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBSb3V0aW5nU2VydmljZSxcbiAgQWRkcmVzcyxcbiAgQ2FydERhdGFTZXJ2aWNlLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi91aS9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zaGlwcGluZy1hZGRyZXNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NoaXBwaW5nLWFkZHJlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaGlwcGluZy1hZGRyZXNzLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTaGlwcGluZ0FkZHJlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBleGlzdGluZ0FkZHJlc3NlcyQ6IE9ic2VydmFibGU8QWRkcmVzc1tdPjtcbiAgbmV3QWRkcmVzc0Zvcm1NYW51YWxseU9wZW5lZCA9IGZhbHNlO1xuICBjYXJkczogQ2FyZFtdID0gW107XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgQElucHV0KClcbiAgc2VsZWN0ZWRBZGRyZXNzOiBBZGRyZXNzO1xuICBAT3V0cHV0KClcbiAgYWRkQWRkcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy51c2VyU2VydmljZS5nZXRBZGRyZXNzZXNMb2FkaW5nKCk7XG4gICAgdGhpcy51c2VyU2VydmljZS5sb2FkQWRkcmVzc2VzKHRoaXMuY2FydERhdGEudXNlcklkKTtcblxuICAgIHRoaXMuZXhpc3RpbmdBZGRyZXNzZXMkID0gdGhpcy51c2VyU2VydmljZS5nZXRBZGRyZXNzZXMoKS5waXBlKFxuICAgICAgdGFwKGFkZHJlc3NlcyA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNhcmRzLmxlbmd0aCA9PT0gMCAmJiBhZGRyZXNzZXMpIHtcbiAgICAgICAgICBhZGRyZXNzZXMuZm9yRWFjaChhZGRyZXNzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmRDb250ZW50KGFkZHJlc3MpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyAmJlxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcy5pZCA9PT0gYWRkcmVzcy5pZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGNhcmQuaGVhZGVyID0gJ1NFTEVDVEVEJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBmaWx0ZXIoQm9vbGVhbilcbiAgICApO1xuICB9XG5cbiAgZ2V0Q2FyZENvbnRlbnQoYWRkcmVzczogQWRkcmVzcyk6IENhcmQge1xuICAgIGxldCByZWdpb24gPSAnJztcbiAgICBpZiAoYWRkcmVzcy5yZWdpb24gJiYgYWRkcmVzcy5yZWdpb24uaXNvY29kZSkge1xuICAgICAgcmVnaW9uID0gYWRkcmVzcy5yZWdpb24uaXNvY29kZSArICcsICc7XG4gICAgfVxuICAgIGNvbnN0IGNhcmQ6IENhcmQgPSB7XG4gICAgICB0aXRsZTogYWRkcmVzcy5kZWZhdWx0QWRkcmVzcyA/ICdEZWZhdWx0IFNoaXBwaW5nIEFkZHJlc3MnIDogJycsXG4gICAgICB0ZXh0Qm9sZDogYWRkcmVzcy5maXJzdE5hbWUgKyAnICcgKyBhZGRyZXNzLmxhc3ROYW1lLFxuICAgICAgdGV4dDogW1xuICAgICAgICBhZGRyZXNzLmxpbmUxLFxuICAgICAgICBhZGRyZXNzLmxpbmUyLFxuICAgICAgICBhZGRyZXNzLnRvd24gKyAnLCAnICsgcmVnaW9uICsgYWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGUsXG4gICAgICAgIGFkZHJlc3MucG9zdGFsQ29kZSxcbiAgICAgICAgYWRkcmVzcy5waG9uZSxcbiAgICAgIF0sXG4gICAgICBhY3Rpb25zOiBbeyBuYW1lOiAnU2hpcCB0byB0aGlzIGFkZHJlc3MnLCBldmVudDogJ3NlbmQnIH1dLFxuICAgIH07XG5cbiAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfVxuXG4gIGFkZHJlc3NTZWxlY3RlZChhZGRyZXNzOiBBZGRyZXNzLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MgPSBhZGRyZXNzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IHRoaXMuY2FyZHNbaV07IGkrKykge1xuICAgICAgY29uc3QgY2FyZCA9IHRoaXMuY2FyZHNbaV07XG4gICAgICBpZiAoaSA9PT0gaW5kZXgpIHtcbiAgICAgICAgY2FyZC5oZWFkZXIgPSAnU0VMRUNURUQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FyZC5oZWFkZXIgPSAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkQWRkcmVzcy5lbWl0KHsgYWRkcmVzczogdGhpcy5zZWxlY3RlZEFkZHJlc3MsIG5ld0FkZHJlc3M6IGZhbHNlIH0pO1xuICB9XG5cbiAgYWRkTmV3QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5hZGRBZGRyZXNzLmVtaXQoeyBhZGRyZXNzOiBhZGRyZXNzLCBuZXdBZGRyZXNzOiB0cnVlIH0pO1xuICB9XG5cbiAgc2hvd05ld0FkZHJlc3NGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMubmV3QWRkcmVzc0Zvcm1NYW51YWxseU9wZW5lZCA9IHRydWU7XG4gIH1cblxuICBoaWRlTmV3QWRkcmVzc0Zvcm0oZ29CYWNrOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLm5ld0FkZHJlc3NGb3JtTWFudWFsbHlPcGVuZWQgPSBmYWxzZTtcbiAgICBpZiAoZ29CYWNrKSB7XG4gICAgICB0aGlzLmJhY2soKTtcbiAgICB9XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyByb3V0ZTogJ2NhcnQnIH0pO1xuICB9XG59XG4iXX0=