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
        this.routingService.go({ route: ['cart'] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBRXZCLE1BQU0sRUFDTixLQUFLLEVBQ0wsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUNMLGNBQWMsRUFFZCxlQUFlLEVBQ2YsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFTekIsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBV25DLFlBQ1ksV0FBd0IsRUFDeEIsUUFBeUIsRUFDekIsY0FBOEI7UUFGOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBWjFDLGlDQUE0QixHQUFHLEtBQUssQ0FBQztRQUNyQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBTW5CLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBTWxDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQzVELEdB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SSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OztZQXRHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IseTRGQUFnRDtnQkFFaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBVEMsV0FBVztZQURYLGVBQWU7WUFGZixjQUFjOzs7OEJBbUJiLEtBQUs7eUJBRUwsTUFBTTs7OztJQVBQLHNEQUEwQzs7SUFDMUMsZ0VBQXFDOztJQUNyQyx5Q0FBbUI7O0lBQ25CLDhDQUFnQzs7SUFFaEMsbURBQ3lCOztJQUN6Qiw4Q0FDcUM7Ozs7O0lBR25DLCtDQUFrQzs7Ozs7SUFDbEMsNENBQW1DOzs7OztJQUNuQyxrREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgSW5wdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgUm91dGluZ1NlcnZpY2UsXG4gIEFkZHJlc3MsXG4gIENhcnREYXRhU2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc2hpcHBpbmctYWRkcmVzcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaGlwcGluZy1hZGRyZXNzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2hpcHBpbmdBZGRyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZXhpc3RpbmdBZGRyZXNzZXMkOiBPYnNlcnZhYmxlPEFkZHJlc3NbXT47XG4gIG5ld0FkZHJlc3NGb3JtTWFudWFsbHlPcGVuZWQgPSBmYWxzZTtcbiAgY2FyZHM6IENhcmRbXSA9IFtdO1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIEBJbnB1dCgpXG4gIHNlbGVjdGVkQWRkcmVzczogQWRkcmVzcztcbiAgQE91dHB1dCgpXG4gIGFkZEFkZHJlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0QWRkcmVzc2VzTG9hZGluZygpO1xuICAgIHRoaXMudXNlclNlcnZpY2UubG9hZEFkZHJlc3Nlcyh0aGlzLmNhcnREYXRhLnVzZXJJZCk7XG5cbiAgICB0aGlzLmV4aXN0aW5nQWRkcmVzc2VzJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0QWRkcmVzc2VzKCkucGlwZShcbiAgICAgIHRhcChhZGRyZXNzZXMgPT4ge1xuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPT09IDAgJiYgYWRkcmVzc2VzKSB7XG4gICAgICAgICAgYWRkcmVzc2VzLmZvckVhY2goYWRkcmVzcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkQ29udGVudChhZGRyZXNzKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MgJiZcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MuaWQgPT09IGFkZHJlc3MuaWRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjYXJkLmhlYWRlciA9ICdTRUxFQ1RFRCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgKTtcbiAgfVxuXG4gIGdldENhcmRDb250ZW50KGFkZHJlc3M6IEFkZHJlc3MpOiBDYXJkIHtcbiAgICBsZXQgcmVnaW9uID0gJyc7XG4gICAgaWYgKGFkZHJlc3MucmVnaW9uICYmIGFkZHJlc3MucmVnaW9uLmlzb2NvZGUpIHtcbiAgICAgIHJlZ2lvbiA9IGFkZHJlc3MucmVnaW9uLmlzb2NvZGUgKyAnLCAnO1xuICAgIH1cbiAgICBjb25zdCBjYXJkOiBDYXJkID0ge1xuICAgICAgdGl0bGU6IGFkZHJlc3MuZGVmYXVsdEFkZHJlc3MgPyAnRGVmYXVsdCBTaGlwcGluZyBBZGRyZXNzJyA6ICcnLFxuICAgICAgdGV4dEJvbGQ6IGFkZHJlc3MuZmlyc3ROYW1lICsgJyAnICsgYWRkcmVzcy5sYXN0TmFtZSxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgYWRkcmVzcy5saW5lMSxcbiAgICAgICAgYWRkcmVzcy5saW5lMixcbiAgICAgICAgYWRkcmVzcy50b3duICsgJywgJyArIHJlZ2lvbiArIGFkZHJlc3MuY291bnRyeS5pc29jb2RlLFxuICAgICAgICBhZGRyZXNzLnBvc3RhbENvZGUsXG4gICAgICAgIGFkZHJlc3MucGhvbmUsXG4gICAgICBdLFxuICAgICAgYWN0aW9uczogW3sgbmFtZTogJ1NoaXAgdG8gdGhpcyBhZGRyZXNzJywgZXZlbnQ6ICdzZW5kJyB9XSxcbiAgICB9O1xuXG4gICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG4gIH1cblxuICBhZGRyZXNzU2VsZWN0ZWQoYWRkcmVzczogQWRkcmVzcywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzID0gYWRkcmVzcztcblxuICAgIGZvciAobGV0IGkgPSAwOyB0aGlzLmNhcmRzW2ldOyBpKyspIHtcbiAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmNhcmRzW2ldO1xuICAgICAgaWYgKGkgPT09IGluZGV4KSB7XG4gICAgICAgIGNhcmQuaGVhZGVyID0gJ1NFTEVDVEVEJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcmQuaGVhZGVyID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEFkZHJlc3MuZW1pdCh7IGFkZHJlc3M6IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLCBuZXdBZGRyZXNzOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGFkZE5ld0FkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMuYWRkQWRkcmVzcy5lbWl0KHsgYWRkcmVzczogYWRkcmVzcywgbmV3QWRkcmVzczogdHJ1ZSB9KTtcbiAgfVxuXG4gIHNob3dOZXdBZGRyZXNzRm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLm5ld0FkZHJlc3NGb3JtTWFudWFsbHlPcGVuZWQgPSB0cnVlO1xuICB9XG5cbiAgaGlkZU5ld0FkZHJlc3NGb3JtKGdvQmFjazogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5uZXdBZGRyZXNzRm9ybU1hbnVhbGx5T3BlbmVkID0gZmFsc2U7XG4gICAgaWYgKGdvQmFjaykge1xuICAgICAgdGhpcy5iYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgcm91dGU6IFsnY2FydCddIH0pO1xuICB9XG59XG4iXX0=