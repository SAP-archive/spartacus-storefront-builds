import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartService, Address, CheckoutDeliveryService, RoutingService, TranslationService, UserAddressService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, take, filter } from 'rxjs/operators';
import { CheckoutConfigService } from '../../services/checkout-config.service';
let ShippingAddressComponent = class ShippingAddressComponent {
    constructor(userAddressService, routingService, checkoutDeliveryService, checkoutConfigService, activatedRoute, translation, activeCartService) {
        this.userAddressService = userAddressService;
        this.routingService = routingService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.translation = translation;
        this.activeCartService = activeCartService;
        this.newAddressFormManuallyOpened = false;
        this.forceLoader = false; // this helps with smoother steps transition
        this.isGuestCheckout = false;
    }
    ngOnInit() {
        this.isLoading$ = this.userAddressService.getAddressesLoading();
        this.existingAddresses$ = this.userAddressService.getAddresses();
        this.selectedAddress$ = this.checkoutDeliveryService.getDeliveryAddress();
        this.cards$ = combineLatest([
            this.existingAddresses$,
            this.selectedAddress$,
            this.translation.translate('checkoutAddress.defaultShippingAddress'),
            this.translation.translate('checkoutAddress.shipToThisAddress'),
            this.translation.translate('addressCard.selected'),
        ]).pipe(map(([addresses, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected,]) => {
            // Select default address if none selected
            if (addresses.length &&
                (!selected || Object.keys(selected).length === 0)) {
                const defaultAddress = addresses.find((address) => address.defaultAddress);
                selected = defaultAddress;
                this.selectAddress(defaultAddress);
            }
            return addresses.map((address) => {
                const card = this.getCardContent(address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected);
                return {
                    address,
                    card,
                };
            });
        }));
        if (!this.activeCartService.isGuestCart()) {
            this.userAddressService.loadAddresses();
        }
        else {
            this.isGuestCheckout = true;
        }
    }
    getCardContent(address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected) {
        let region = '';
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
    }
    selectAddress(address) {
        this.checkoutDeliveryService.setDeliveryAddress(address);
    }
    addAddress(address) {
        this.selectedAddress$
            .pipe(filter((selected) => !!(selected === null || selected === void 0 ? void 0 : selected.shippingAddress)), take(1))
            .subscribe(() => this.goNext());
        this.forceLoader = true;
        this.existingAddresses$.pipe(take(1)).subscribe((addresses) => {
            addresses.includes(address)
                ? this.selectAddress(address)
                : this.checkoutDeliveryService.createAndSetAddress(address);
        });
    }
    showNewAddressForm() {
        this.newAddressFormManuallyOpened = true;
    }
    hideNewAddressForm(goPrevious = false) {
        this.newAddressFormManuallyOpened = false;
        if (goPrevious) {
            this.goPrevious();
        }
    }
    goNext() {
        this.routingService.go(this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute));
    }
    goPrevious() {
        this.routingService.go(this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute) || 'cart');
    }
};
ShippingAddressComponent.ctorParameters = () => [
    { type: UserAddressService },
    { type: RoutingService },
    { type: CheckoutDeliveryService },
    { type: CheckoutConfigService },
    { type: ActivatedRoute },
    { type: TranslationService },
    { type: ActiveCartService }
];
ShippingAddressComponent = __decorate([
    Component({
        selector: 'cx-shipping-address',
        template: "<ng-container *ngIf=\"cards$ | async as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutAddress.shippingAddress' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!forceLoader && !(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        cards?.length && !newAddressFormManuallyOpened;\n        else newAddressForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'checkoutAddress.selectYourShippingAddress' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewAddressForm()\"\n          >\n            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-shipping-address-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div\n            class=\"cx-shipping-address-card-inner\"\n            (click)=\"selectAddress(card.address)\"\n          >\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.card\"\n              (sendCard)=\"selectAddress(card.address)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-action\"\n            (click)=\"goPrevious()\"\n          >\n            {{ 'checkout.backToCart' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-primary\"\n            [disabled]=\"!(selectedAddress$ | async)?.id\"\n            (click)=\"goNext()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newAddressForm>\n      <ng-container *ngIf=\"cards.length; else initialAddressForm\">\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          (backToAddress)=\"hideNewAddressForm(false)\"\n          (submitAddress)=\"addAddress($event)\"\n        ></cx-address-form>\n      </ng-container>\n      <ng-template #initialAddressForm>\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          [setAsDefaultField]=\"!isGuestCheckout\"\n          [addressData]=\"selectedAddress$ | async\"\n          cancelBtnLabel=\"{{ 'checkout.backToCart' | cxTranslate }}\"\n          (backToAddress)=\"hideNewAddressForm(true)\"\n          (submitAddress)=\"addAddress($event)\"\n        ></cx-address-form>\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ShippingAddressComponent);
export { ShippingAddressComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsT0FBTyxFQUNQLHVCQUF1QixFQUN2QixjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFZL0UsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFTbkMsWUFDWSxrQkFBc0MsRUFDdEMsY0FBOEIsRUFDOUIsdUJBQWdELEVBQ2hELHFCQUE0QyxFQUM1QyxjQUE4QixFQUM5QixXQUErQixFQUMvQixpQkFBb0M7UUFOcEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFDL0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQWRoRCxpQ0FBNEIsR0FBRyxLQUFLLENBQUM7UUFJckMsZ0JBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyw0Q0FBNEM7UUFDakUsb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFVckIsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTFFLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO1lBQzFCLElBQUksQ0FBQyxrQkFBa0I7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQjtZQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyx3Q0FBd0MsQ0FBQztZQUNwRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxtQ0FBbUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQztTQUNuRCxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FDRCxDQUFDLENBQ0MsU0FBUyxFQUNULFFBQVEsRUFDUiwwQkFBMEIsRUFDMUIscUJBQXFCLEVBQ3JCLFlBQVksRUFDYixFQUFFLEVBQUU7WUFDSCwwQ0FBMEM7WUFDMUMsSUFDRSxTQUFTLENBQUMsTUFBTTtnQkFDaEIsQ0FBQyxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFDakQ7Z0JBQ0EsTUFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FDbkMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQ3BDLENBQUM7Z0JBQ0YsUUFBUSxHQUFHLGNBQWMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNwQztZQUNELE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUMvQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUM5QixPQUFPLEVBQ1AsUUFBUSxFQUNSLDBCQUEwQixFQUMxQixxQkFBcUIsRUFDckIsWUFBWSxDQUNiLENBQUM7Z0JBQ0YsT0FBTztvQkFDTCxPQUFPO29CQUNQLElBQUk7aUJBQ0wsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUNGLENBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDekMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3pDO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxjQUFjLENBQ1osT0FBZ0IsRUFDaEIsUUFBYSxFQUNiLDBCQUFrQyxFQUNsQyxxQkFBNkIsRUFDN0IsWUFBb0I7UUFFcEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWhCLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUM1QyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3hDO1FBRUQsT0FBTztZQUNMLEtBQUssRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvRCxRQUFRLEVBQUUsT0FBTyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVE7WUFDcEQsSUFBSSxFQUFFO2dCQUNKLE9BQU8sQ0FBQyxLQUFLO2dCQUNiLE9BQU8sQ0FBQyxLQUFLO2dCQUNiLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQ3RELE9BQU8sQ0FBQyxVQUFVO2dCQUNsQixPQUFPLENBQUMsS0FBSzthQUNkO1lBQ0QsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO1lBQ3pELE1BQU0sRUFBRSxRQUFRLElBQUksUUFBUSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDbkUsQ0FBQztJQUNKLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxVQUFVLENBQUMsT0FBZ0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQjthQUNsQixJQUFJLENBQ0gsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUMsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLGVBQWUsQ0FBQSxDQUFDLEVBQ2pELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUjthQUNBLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzVELFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUM7SUFDM0MsQ0FBQztJQUVELGtCQUFrQixDQUFDLGFBQXNCLEtBQUs7UUFDNUMsSUFBSSxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQztRQUMxQyxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQ3ZFLENBQUM7SUFDSixDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUNwQixJQUFJLENBQUMscUJBQXFCLENBQUMsMEJBQTBCLENBQ25ELElBQUksQ0FBQyxjQUFjLENBQ3BCLElBQUksTUFBTSxDQUNaLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUF6SWlDLGtCQUFrQjtZQUN0QixjQUFjO1lBQ0wsdUJBQXVCO1lBQ3pCLHFCQUFxQjtZQUM1QixjQUFjO1lBQ2pCLGtCQUFrQjtZQUNaLGlCQUFpQjs7QUFoQnJDLHdCQUF3QjtJQUxwQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLDgvRkFBZ0Q7UUFDaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLHdCQUF3QixDQW1KcEM7U0FuSlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBY3RpdmVDYXJ0U2VydmljZSxcbiAgQWRkcmVzcyxcbiAgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFVzZXJBZGRyZXNzU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRXaXRoQWRkcmVzcyB7XG4gIGNhcmQ6IENhcmQ7XG4gIGFkZHJlc3M6IEFkZHJlc3M7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNoaXBwaW5nLWFkZHJlc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTaGlwcGluZ0FkZHJlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBleGlzdGluZ0FkZHJlc3NlcyQ6IE9ic2VydmFibGU8QWRkcmVzc1tdPjtcbiAgbmV3QWRkcmVzc0Zvcm1NYW51YWxseU9wZW5lZCA9IGZhbHNlO1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjYXJkcyQ6IE9ic2VydmFibGU8Q2FyZFdpdGhBZGRyZXNzW10+O1xuICBzZWxlY3RlZEFkZHJlc3MkOiBPYnNlcnZhYmxlPEFkZHJlc3M+O1xuICBmb3JjZUxvYWRlciA9IGZhbHNlOyAvLyB0aGlzIGhlbHBzIHdpdGggc21vb3RoZXIgc3RlcHMgdHJhbnNpdGlvblxuICBpc0d1ZXN0Q2hlY2tvdXQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldEFkZHJlc3Nlc0xvYWRpbmcoKTtcbiAgICB0aGlzLmV4aXN0aW5nQWRkcmVzc2VzJCA9IHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldEFkZHJlc3NlcygpO1xuICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzJCA9IHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0RGVsaXZlcnlBZGRyZXNzKCk7XG5cbiAgICB0aGlzLmNhcmRzJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5leGlzdGluZ0FkZHJlc3NlcyQsXG4gICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyQsXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRBZGRyZXNzLmRlZmF1bHRTaGlwcGluZ0FkZHJlc3MnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dEFkZHJlc3Muc2hpcFRvVGhpc0FkZHJlc3MnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdhZGRyZXNzQ2FyZC5zZWxlY3RlZCcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChbXG4gICAgICAgICAgYWRkcmVzc2VzLFxuICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgIHRleHREZWZhdWx0U2hpcHBpbmdBZGRyZXNzLFxuICAgICAgICAgIHRleHRTaGlwVG9UaGlzQWRkcmVzcyxcbiAgICAgICAgICB0ZXh0U2VsZWN0ZWQsXG4gICAgICAgIF0pID0+IHtcbiAgICAgICAgICAvLyBTZWxlY3QgZGVmYXVsdCBhZGRyZXNzIGlmIG5vbmUgc2VsZWN0ZWRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBhZGRyZXNzZXMubGVuZ3RoICYmXG4gICAgICAgICAgICAoIXNlbGVjdGVkIHx8IE9iamVjdC5rZXlzKHNlbGVjdGVkKS5sZW5ndGggPT09IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0QWRkcmVzcyA9IGFkZHJlc3Nlcy5maW5kKFxuICAgICAgICAgICAgICAoYWRkcmVzcykgPT4gYWRkcmVzcy5kZWZhdWx0QWRkcmVzc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNlbGVjdGVkID0gZGVmYXVsdEFkZHJlc3M7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFkZHJlc3MoZGVmYXVsdEFkZHJlc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWRkcmVzc2VzLm1hcCgoYWRkcmVzcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuZ2V0Q2FyZENvbnRlbnQoXG4gICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgICAgICB0ZXh0RGVmYXVsdFNoaXBwaW5nQWRkcmVzcyxcbiAgICAgICAgICAgICAgdGV4dFNoaXBUb1RoaXNBZGRyZXNzLFxuICAgICAgICAgICAgICB0ZXh0U2VsZWN0ZWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICBjYXJkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG5cbiAgICBpZiAoIXRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuaXNHdWVzdENhcnQoKSkge1xuICAgICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UubG9hZEFkZHJlc3NlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzR3Vlc3RDaGVja291dCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2FyZENvbnRlbnQoXG4gICAgYWRkcmVzczogQWRkcmVzcyxcbiAgICBzZWxlY3RlZDogYW55LFxuICAgIHRleHREZWZhdWx0U2hpcHBpbmdBZGRyZXNzOiBzdHJpbmcsXG4gICAgdGV4dFNoaXBUb1RoaXNBZGRyZXNzOiBzdHJpbmcsXG4gICAgdGV4dFNlbGVjdGVkOiBzdHJpbmdcbiAgKTogQ2FyZCB7XG4gICAgbGV0IHJlZ2lvbiA9ICcnO1xuXG4gICAgaWYgKGFkZHJlc3MucmVnaW9uICYmIGFkZHJlc3MucmVnaW9uLmlzb2NvZGUpIHtcbiAgICAgIHJlZ2lvbiA9IGFkZHJlc3MucmVnaW9uLmlzb2NvZGUgKyAnLCAnO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogYWRkcmVzcy5kZWZhdWx0QWRkcmVzcyA/IHRleHREZWZhdWx0U2hpcHBpbmdBZGRyZXNzIDogJycsXG4gICAgICB0ZXh0Qm9sZDogYWRkcmVzcy5maXJzdE5hbWUgKyAnICcgKyBhZGRyZXNzLmxhc3ROYW1lLFxuICAgICAgdGV4dDogW1xuICAgICAgICBhZGRyZXNzLmxpbmUxLFxuICAgICAgICBhZGRyZXNzLmxpbmUyLFxuICAgICAgICBhZGRyZXNzLnRvd24gKyAnLCAnICsgcmVnaW9uICsgYWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGUsXG4gICAgICAgIGFkZHJlc3MucG9zdGFsQ29kZSxcbiAgICAgICAgYWRkcmVzcy5waG9uZSxcbiAgICAgIF0sXG4gICAgICBhY3Rpb25zOiBbeyBuYW1lOiB0ZXh0U2hpcFRvVGhpc0FkZHJlc3MsIGV2ZW50OiAnc2VuZCcgfV0sXG4gICAgICBoZWFkZXI6IHNlbGVjdGVkICYmIHNlbGVjdGVkLmlkID09PSBhZGRyZXNzLmlkID8gdGV4dFNlbGVjdGVkIDogJycsXG4gICAgfTtcbiAgfVxuXG4gIHNlbGVjdEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2Uuc2V0RGVsaXZlcnlBZGRyZXNzKGFkZHJlc3MpO1xuICB9XG5cbiAgYWRkQWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChzZWxlY3RlZCkgPT4gISFzZWxlY3RlZD8uc2hpcHBpbmdBZGRyZXNzKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmdvTmV4dCgpKTtcblxuICAgIHRoaXMuZm9yY2VMb2FkZXIgPSB0cnVlO1xuXG4gICAgdGhpcy5leGlzdGluZ0FkZHJlc3NlcyQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKGFkZHJlc3NlcykgPT4ge1xuICAgICAgYWRkcmVzc2VzLmluY2x1ZGVzKGFkZHJlc3MpXG4gICAgICAgID8gdGhpcy5zZWxlY3RBZGRyZXNzKGFkZHJlc3MpXG4gICAgICAgIDogdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5jcmVhdGVBbmRTZXRBZGRyZXNzKGFkZHJlc3MpO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd05ld0FkZHJlc3NGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMubmV3QWRkcmVzc0Zvcm1NYW51YWxseU9wZW5lZCA9IHRydWU7XG4gIH1cblxuICBoaWRlTmV3QWRkcmVzc0Zvcm0oZ29QcmV2aW91czogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5uZXdBZGRyZXNzRm9ybU1hbnVhbGx5T3BlbmVkID0gZmFsc2U7XG4gICAgaWYgKGdvUHJldmlvdXMpIHtcbiAgICAgIHRoaXMuZ29QcmV2aW91cygpO1xuICAgIH1cbiAgfVxuXG4gIGdvTmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKFxuICAgICAgdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0TmV4dENoZWNrb3V0U3RlcFVybCh0aGlzLmFjdGl2YXRlZFJvdXRlKVxuICAgICk7XG4gIH1cblxuICBnb1ByZXZpb3VzKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oXG4gICAgICB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRQcmV2aW91c0NoZWNrb3V0U3RlcFVybChcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgKSB8fCAnY2FydCdcbiAgICApO1xuICB9XG59XG4iXX0=