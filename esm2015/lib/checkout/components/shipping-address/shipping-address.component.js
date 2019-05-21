/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class ShippingAddressComponent {
    /**
     * @param {?} userService
     * @param {?} cartData
     * @param {?} cartService
     * @param {?} routingService
     * @param {?} checkoutService
     * @param {?} checkoutConfigService
     * @param {?} activatedRoute
     * @param {?} translation
     */
    constructor(userService, cartData, cartService, routingService, checkoutService, checkoutConfigService, activatedRoute, translation) {
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
    ngOnInit() {
        this.goTo = null;
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = 'cart';
        this.isLoading$ = this.userService.getAddressesLoading();
        this.existingAddresses$ = this.userService.getAddresses();
        this.cards$ = combineLatest(this.existingAddresses$, this.selectedAddress$.asObservable(), this.translation.translate('checkoutAddress.defaultShippingAddress'), this.translation.translate('checkoutAddress.shipToThisAddress'), this.translation.translate('addressCard.selected')).pipe(map(([addresses, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected,]) => {
            return addresses.map(address => {
                /** @type {?} */
                const card = this.getCardContent(address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected);
                return {
                    address,
                    card,
                };
            });
        }));
        this.cartService.loadDetails();
        this.userService.loadAddresses(this.cartData.userId);
        this.setAddressSub = this.checkoutService
            .getDeliveryAddress()
            .subscribe(address => {
            this.setAddress = address;
            this.selectedAddress$.next(address);
            if (this.goTo) {
                this.goNext();
                this.goTo = null;
            }
        });
        this.selectedAddressSub = this.selectedAddress$.subscribe(address => {
            this.selectedAddress = address;
        });
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
        /** @type {?} */
        const card = {
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
    }
    /**
     * @param {?} address
     * @return {?}
     */
    addressSelected(address) {
        this.selectedAddress$.next(address);
    }
    /**
     * @return {?}
     */
    next() {
        this.addAddress({ address: this.selectedAddress, newAddress: false });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    addAddress({ newAddress, address, }) {
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
    }
    /**
     * @param {?} address
     * @return {?}
     */
    addNewAddress(address) {
        this.addAddress({ address, newAddress: true });
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
    goNext() {
        this.routingService.go(this.checkoutStepUrlNext);
    }
    /**
     * @return {?}
     */
    back() {
        this.routingService.go(this.checkoutStepUrlPrevious);
    }
    /**
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
                template: "<ng-container *ngIf=\"(cards$ | async) as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutAddress.shippingAddress' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        cards?.length && !newAddressFormManuallyOpened;\n        else newAddressForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'checkoutAddress.selectYourShippingAddress' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewAddressForm()\"\n          >\n            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-shipping-address-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div\n            class=\"cx-shipping-address-card-inner\"\n            (click)=\"addressSelected(card.address)\"\n          >\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.card\"\n              (sendCard)=\"addressSelected(card.address)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"cx-btn btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'checkout.backToCart' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-primary\"\n            [disabled]=\"!selectedAddress || !selectedAddress.id\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newAddressForm>\n      <ng-container *ngIf=\"cards.length; else initialAddressForm\">\n        <cx-address-form\n          showTitleCode=\"true\"\n          (backToAddress)=\"hideNewAddressForm(false)\"\n          (submitAddress)=\"addNewAddress($event)\"\n        ></cx-address-form>\n      </ng-container>\n      <ng-template #initialAddressForm>\n        <cx-address-form\n          showTitleCode=\"true\"\n          cancelBtnLabel=\"{{ 'checkout.backToCart' | cxTranslate }}\"\n          (backToAddress)=\"hideNewAddressForm(true)\"\n          (submitAddress)=\"addNewAddress($event)\"\n        ></cx-address-form>\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ShippingAddressComponent.ctorParameters = () => [
    { type: UserService },
    { type: CartDataService },
    { type: CartService },
    { type: RoutingService },
    { type: CheckoutService },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9zaGlwcGluZy1hZGRyZXNzL3NoaXBwaW5nLWFkZHJlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDaEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBRUwsZUFBZSxFQUNmLFdBQVcsRUFDWCxlQUFlLEVBQ2YsY0FBYyxFQUNkLFdBQVcsRUFDWCxrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7OztBQUd0RSxxQ0FHQzs7O0lBRkMsK0JBQVc7O0lBQ1gsa0NBQWlCOztBQVFuQixNQUFNLE9BQU8sd0JBQXdCOzs7Ozs7Ozs7OztJQWlCbkMsWUFDWSxXQUF3QixFQUN4QixRQUF5QixFQUN6QixXQUF3QixFQUN4QixjQUE4QixFQUM5QixlQUFnQyxFQUNsQyxxQkFBNEMsRUFDNUMsY0FBOEIsRUFDOUIsV0FBK0I7UUFQN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtR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LGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7O1lBeExGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixzMkZBQWdEO2dCQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWhCQyxXQUFXO1lBSlgsZUFBZTtZQUNmLFdBQVc7WUFFWCxjQUFjO1lBRGQsZUFBZTtZQU1SLHFCQUFxQjtZQVpyQixjQUFjO1lBU3JCLGtCQUFrQjs7OztJQWlCbEIsc0RBQTBDOztJQUMxQyxnRUFBcUM7O0lBQ3JDLHlDQUFtQjs7SUFDbkIsOENBQWdDOztJQUNoQyxtREFBeUI7O0lBQ3pCLHdDQUF1Qjs7SUFDdkIsOENBQW9COztJQUNwQixpREFBNEI7O0lBQzVCLHNEQUFpQzs7SUFDakMsb0RBRUU7O0lBQ0YsMENBQXNDOztJQUN0Qyx1REFBNEI7O0lBQzVCLDJEQUFnQzs7Ozs7SUFHOUIsK0NBQWtDOzs7OztJQUNsQyw0Q0FBbUM7Ozs7O0lBQ25DLCtDQUFrQzs7Ozs7SUFDbEMsa0RBQXdDOzs7OztJQUN4QyxtREFBMEM7Ozs7O0lBQzFDLHlEQUFvRDs7Ozs7SUFDcEQsa0RBQXNDOzs7OztJQUN0QywrQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBDYXJ0RGF0YVNlcnZpY2UsXG4gIENhcnRTZXJ2aWNlLFxuICBDaGVja291dFNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBVc2VyU2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRXaXRoQWRkcmVzcyB7XG4gIGNhcmQ6IENhcmQ7XG4gIGFkZHJlc3M6IEFkZHJlc3M7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNoaXBwaW5nLWFkZHJlc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTaGlwcGluZ0FkZHJlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGV4aXN0aW5nQWRkcmVzc2VzJDogT2JzZXJ2YWJsZTxBZGRyZXNzW10+O1xuICBuZXdBZGRyZXNzRm9ybU1hbnVhbGx5T3BlbmVkID0gZmFsc2U7XG4gIGNhcmRzOiBDYXJkW10gPSBbXTtcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgc2VsZWN0ZWRBZGRyZXNzOiBBZGRyZXNzO1xuICBnb1RvOiBDaGVja291dFN0ZXBUeXBlO1xuICBzZXRBZGRyZXNzOiBBZGRyZXNzO1xuICBzZXRBZGRyZXNzU3ViOiBTdWJzY3JpcHRpb247XG4gIHNlbGVjdGVkQWRkcmVzc1N1YjogU3Vic2NyaXB0aW9uO1xuICBzZWxlY3RlZEFkZHJlc3MkOiBCZWhhdmlvclN1YmplY3Q8QWRkcmVzcz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFkZHJlc3M+KFxuICAgIG51bGxcbiAgKTtcbiAgY2FyZHMkOiBPYnNlcnZhYmxlPENhcmRXaXRoQWRkcmVzc1tdPjtcbiAgY2hlY2tvdXRTdGVwVXJsTmV4dDogc3RyaW5nO1xuICBjaGVja291dFN0ZXBVcmxQcmV2aW91czogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nb1RvID0gbnVsbDtcbiAgICB0aGlzLmNoZWNrb3V0U3RlcFVybE5leHQgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXROZXh0Q2hlY2tvdXRTdGVwVXJsKFxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZVxuICAgICk7XG4gICAgdGhpcy5jaGVja291dFN0ZXBVcmxQcmV2aW91cyA9ICdjYXJ0JztcblxuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0QWRkcmVzc2VzTG9hZGluZygpO1xuICAgIHRoaXMuZXhpc3RpbmdBZGRyZXNzZXMkID0gdGhpcy51c2VyU2VydmljZS5nZXRBZGRyZXNzZXMoKTtcbiAgICB0aGlzLmNhcmRzJCA9IGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLmV4aXN0aW5nQWRkcmVzc2VzJCxcbiAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzJC5hc09ic2VydmFibGUoKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dEFkZHJlc3MuZGVmYXVsdFNoaXBwaW5nQWRkcmVzcycpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0QWRkcmVzcy5zaGlwVG9UaGlzQWRkcmVzcycpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2FkZHJlc3NDYXJkLnNlbGVjdGVkJylcbiAgICApLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChbXG4gICAgICAgICAgYWRkcmVzc2VzLFxuICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgIHRleHREZWZhdWx0U2hpcHBpbmdBZGRyZXNzLFxuICAgICAgICAgIHRleHRTaGlwVG9UaGlzQWRkcmVzcyxcbiAgICAgICAgICB0ZXh0U2VsZWN0ZWQsXG4gICAgICAgIF0pID0+IHtcbiAgICAgICAgICByZXR1cm4gYWRkcmVzc2VzLm1hcChhZGRyZXNzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmRDb250ZW50KFxuICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgdGV4dERlZmF1bHRTaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgICAgIHRleHRTaGlwVG9UaGlzQWRkcmVzcyxcbiAgICAgICAgICAgICAgdGV4dFNlbGVjdGVkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgY2FyZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuXG4gICAgdGhpcy5jYXJ0U2VydmljZS5sb2FkRGV0YWlscygpO1xuICAgIHRoaXMudXNlclNlcnZpY2UubG9hZEFkZHJlc3Nlcyh0aGlzLmNhcnREYXRhLnVzZXJJZCk7XG5cbiAgICB0aGlzLnNldEFkZHJlc3NTdWIgPSB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgLmdldERlbGl2ZXJ5QWRkcmVzcygpXG4gICAgICAuc3Vic2NyaWJlKGFkZHJlc3MgPT4ge1xuICAgICAgICB0aGlzLnNldEFkZHJlc3MgPSBhZGRyZXNzO1xuICAgICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyQubmV4dChhZGRyZXNzKTtcbiAgICAgICAgaWYgKHRoaXMuZ29Ubykge1xuICAgICAgICAgIHRoaXMuZ29OZXh0KCk7XG4gICAgICAgICAgdGhpcy5nb1RvID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgdGhpcy5zZWxlY3RlZEFkZHJlc3NTdWIgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcyQuc3Vic2NyaWJlKGFkZHJlc3MgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MgPSBhZGRyZXNzO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q2FyZENvbnRlbnQoXG4gICAgYWRkcmVzczogQWRkcmVzcyxcbiAgICBzZWxlY3RlZDogYW55LFxuICAgIHRleHREZWZhdWx0U2hpcHBpbmdBZGRyZXNzOiBzdHJpbmcsXG4gICAgdGV4dFNoaXBUb1RoaXNBZGRyZXNzOiBzdHJpbmcsXG4gICAgdGV4dFNlbGVjdGVkOiBzdHJpbmdcbiAgKTogQ2FyZCB7XG4gICAgbGV0IHJlZ2lvbiA9ICcnO1xuICAgIGlmIChhZGRyZXNzLnJlZ2lvbiAmJiBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlKSB7XG4gICAgICByZWdpb24gPSBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlICsgJywgJztcbiAgICB9XG4gICAgY29uc3QgY2FyZDogQ2FyZCA9IHtcbiAgICAgIHRpdGxlOiBhZGRyZXNzLmRlZmF1bHRBZGRyZXNzID8gdGV4dERlZmF1bHRTaGlwcGluZ0FkZHJlc3MgOiAnJyxcbiAgICAgIHRleHRCb2xkOiBhZGRyZXNzLmZpcnN0TmFtZSArICcgJyArIGFkZHJlc3MubGFzdE5hbWUsXG4gICAgICB0ZXh0OiBbXG4gICAgICAgIGFkZHJlc3MubGluZTEsXG4gICAgICAgIGFkZHJlc3MubGluZTIsXG4gICAgICAgIGFkZHJlc3MudG93biArICcsICcgKyByZWdpb24gKyBhZGRyZXNzLmNvdW50cnkuaXNvY29kZSxcbiAgICAgICAgYWRkcmVzcy5wb3N0YWxDb2RlLFxuICAgICAgICBhZGRyZXNzLnBob25lLFxuICAgICAgXSxcbiAgICAgIGFjdGlvbnM6IFt7IG5hbWU6IHRleHRTaGlwVG9UaGlzQWRkcmVzcywgZXZlbnQ6ICdzZW5kJyB9XSxcbiAgICAgIGhlYWRlcjogc2VsZWN0ZWQgJiYgc2VsZWN0ZWQuaWQgPT09IGFkZHJlc3MuaWQgPyB0ZXh0U2VsZWN0ZWQgOiAnJyxcbiAgICB9O1xuXG4gICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG4gIH1cblxuICBhZGRyZXNzU2VsZWN0ZWQoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzJC5uZXh0KGFkZHJlc3MpO1xuICB9XG5cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEFkZHJlc3MoeyBhZGRyZXNzOiB0aGlzLnNlbGVjdGVkQWRkcmVzcywgbmV3QWRkcmVzczogZmFsc2UgfSk7XG4gIH1cblxuICBhZGRBZGRyZXNzKHtcbiAgICBuZXdBZGRyZXNzLFxuICAgIGFkZHJlc3MsXG4gIH06IHtcbiAgICBuZXdBZGRyZXNzOiBib29sZWFuO1xuICAgIGFkZHJlc3M6IEFkZHJlc3M7XG4gIH0pOiB2b2lkIHtcbiAgICBpZiAobmV3QWRkcmVzcykge1xuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY3JlYXRlQW5kU2V0QWRkcmVzcyhhZGRyZXNzKTtcbiAgICAgIHRoaXMuZ29UbyA9IENoZWNrb3V0U3RlcFR5cGUuZGVsaXZlcnlNb2RlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0aGlzLnNldEFkZHJlc3MgJiZcbiAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzICYmXG4gICAgICB0aGlzLnNldEFkZHJlc3MuaWQgPT09IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLmlkXG4gICAgKSB7XG4gICAgICB0aGlzLmdvTmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdvVG8gPSBDaGVja291dFN0ZXBUeXBlLmRlbGl2ZXJ5TW9kZTtcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLnNldERlbGl2ZXJ5QWRkcmVzcyhhZGRyZXNzKTtcbiAgICB9XG4gIH1cblxuICBhZGROZXdBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEFkZHJlc3MoeyBhZGRyZXNzLCBuZXdBZGRyZXNzOiB0cnVlIH0pO1xuICB9XG5cbiAgc2hvd05ld0FkZHJlc3NGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMubmV3QWRkcmVzc0Zvcm1NYW51YWxseU9wZW5lZCA9IHRydWU7XG4gIH1cblxuICBoaWRlTmV3QWRkcmVzc0Zvcm0oZ29CYWNrOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLm5ld0FkZHJlc3NGb3JtTWFudWFsbHlPcGVuZWQgPSBmYWxzZTtcbiAgICBpZiAoZ29CYWNrKSB7XG4gICAgICB0aGlzLmJhY2soKTtcbiAgICB9XG4gIH1cblxuICBnb05leHQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh0aGlzLmNoZWNrb3V0U3RlcFVybE5leHQpO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHRoaXMuY2hlY2tvdXRTdGVwVXJsUHJldmlvdXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2V0QWRkcmVzc1N1Yikge1xuICAgICAgdGhpcy5zZXRBZGRyZXNzU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdGVkQWRkcmVzc1N1Yikge1xuICAgICAgdGhpcy5zZWxlY3RlZEFkZHJlc3NTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==