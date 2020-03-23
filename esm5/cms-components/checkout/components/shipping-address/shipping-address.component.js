import { __decorate, __read } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartService, Address, CheckoutDeliveryService, RoutingService, TranslationService, UserAddressService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CheckoutConfigService } from '../../services/checkout-config.service';
var ShippingAddressComponent = /** @class */ (function () {
    function ShippingAddressComponent(userAddressService, routingService, checkoutDeliveryService, checkoutConfigService, activatedRoute, translation, activeCartService) {
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
    ShippingAddressComponent.prototype.ngOnInit = function () {
        var _this = this;
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
                (!selected || Object.keys(selected).length === 0)) {
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
        if (!this.activeCartService.isGuestCart()) {
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
        this.checkoutDeliveryService.setDeliveryAddress(address);
    };
    ShippingAddressComponent.prototype.addAddress = function (address) {
        var _this = this;
        var selectedSub = this.selectedAddress$.subscribe(function (selected) {
            if (selected && selected.shippingAddress) {
                _this.goNext();
                selectedSub.unsubscribe();
            }
        });
        this.forceLoader = true;
        this.existingAddresses$.pipe(take(1)).subscribe(function (addresses) {
            addresses.includes(address)
                ? _this.selectAddress(address)
                : _this.checkoutDeliveryService.createAndSetAddress(address);
        });
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
    ShippingAddressComponent.ctorParameters = function () { return [
        { type: UserAddressService },
        { type: RoutingService },
        { type: CheckoutDeliveryService },
        { type: CheckoutConfigService },
        { type: ActivatedRoute },
        { type: TranslationService },
        { type: ActiveCartService }
    ]; };
    ShippingAddressComponent = __decorate([
        Component({
            selector: 'cx-shipping-address',
            template: "<ng-container *ngIf=\"cards$ | async as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutAddress.shippingAddress' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!forceLoader && !(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        cards?.length && !newAddressFormManuallyOpened;\n        else newAddressForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'checkoutAddress.selectYourShippingAddress' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewAddressForm()\"\n          >\n            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-shipping-address-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div\n            class=\"cx-shipping-address-card-inner\"\n            (click)=\"selectAddress(card.address)\"\n          >\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.card\"\n              (sendCard)=\"selectAddress(card.address)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-action\"\n            (click)=\"goPrevious()\"\n          >\n            {{ 'checkout.backToCart' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-primary\"\n            [disabled]=\"!(selectedAddress$ | async)?.id\"\n            (click)=\"goNext()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newAddressForm>\n      <ng-container *ngIf=\"cards.length; else initialAddressForm\">\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          (backToAddress)=\"hideNewAddressForm(false)\"\n          (submitAddress)=\"addAddress($event)\"\n        ></cx-address-form>\n      </ng-container>\n      <ng-template #initialAddressForm>\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          [setAsDefaultField]=\"!isGuestCheckout\"\n          [addressData]=\"selectedAddress$ | async\"\n          cancelBtnLabel=\"{{ 'checkout.backToCart' | cxTranslate }}\"\n          (backToAddress)=\"hideNewAddressForm(true)\"\n          (submitAddress)=\"addAddress($event)\"\n        ></cx-address-form>\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ShippingAddressComponent);
    return ShippingAddressComponent;
}());
export { ShippingAddressComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsT0FBTyxFQUNQLHVCQUF1QixFQUN2QixjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQVkvRTtJQVNFLGtDQUNZLGtCQUFzQyxFQUN0QyxjQUE4QixFQUM5Qix1QkFBZ0QsRUFDaEQscUJBQTRDLEVBQzVDLGNBQThCLEVBQzlCLFdBQStCLEVBQy9CLGlCQUFvQztRQU5wQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBZGhELGlDQUE0QixHQUFHLEtBQUssQ0FBQztRQUlyQyxnQkFBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLDRDQUE0QztRQUNqRSxvQkFBZSxHQUFHLEtBQUssQ0FBQztJQVVyQixDQUFDO0lBRUosMkNBQVEsR0FBUjtRQUFBLGlCQXFEQztRQXBEQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTFFLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO1lBQzFCLElBQUksQ0FBQyxrQkFBa0I7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQjtZQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyx3Q0FBd0MsQ0FBQztZQUNwRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxtQ0FBbUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQztTQUNuRCxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FDRCxVQUFDLEVBTUE7Z0JBTkEsa0JBTUEsRUFMQyxpQkFBUyxFQUNULGdCQUFRLEVBQ1Isa0NBQTBCLEVBQzFCLDZCQUFxQixFQUNyQixvQkFBWTtZQUVaLDBDQUEwQztZQUMxQyxJQUNFLFNBQVMsQ0FBQyxNQUFNO2dCQUNoQixDQUFDLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxFQUNqRDtnQkFDQSxJQUFNLGNBQWMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUNuQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxjQUFjLEVBQXRCLENBQXNCLENBQ2xDLENBQUM7Z0JBQ0YsUUFBUSxHQUFHLGNBQWMsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNwQztZQUNELE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU87Z0JBQzFCLElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQzlCLE9BQU8sRUFDUCxRQUFRLEVBQ1IsMEJBQTBCLEVBQzFCLHFCQUFxQixFQUNyQixZQUFZLENBQ2IsQ0FBQztnQkFDRixPQUFPO29CQUNMLE9BQU8sU0FBQTtvQkFDUCxJQUFJLE1BQUE7aUJBQ0wsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUNGLENBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDekMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3pDO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxpREFBYyxHQUFkLFVBQ0UsT0FBZ0IsRUFDaEIsUUFBYSxFQUNiLDBCQUFrQyxFQUNsQyxxQkFBNkIsRUFDN0IsWUFBb0I7UUFFcEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWhCLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUM1QyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3hDO1FBRUQsT0FBTztZQUNMLEtBQUssRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvRCxRQUFRLEVBQUUsT0FBTyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVE7WUFDcEQsSUFBSSxFQUFFO2dCQUNKLE9BQU8sQ0FBQyxLQUFLO2dCQUNiLE9BQU8sQ0FBQyxLQUFLO2dCQUNiLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQ3RELE9BQU8sQ0FBQyxVQUFVO2dCQUNsQixPQUFPLENBQUMsS0FBSzthQUNkO1lBQ0QsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO1lBQ3pELE1BQU0sRUFBRSxRQUFRLElBQUksUUFBUSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDbkUsQ0FBQztJQUNKLENBQUM7SUFFRCxnREFBYSxHQUFiLFVBQWMsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCw2Q0FBVSxHQUFWLFVBQVcsT0FBZ0I7UUFBM0IsaUJBZUM7UUFkQyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUMxRCxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsZUFBZSxFQUFFO2dCQUN4QyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2QsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzNCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFNBQVM7WUFDdkQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxxREFBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDO0lBQzNDLENBQUM7SUFFRCxxREFBa0IsR0FBbEIsVUFBbUIsVUFBMkI7UUFBM0IsMkJBQUEsRUFBQSxrQkFBMkI7UUFDNUMsSUFBSSxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQztRQUMxQyxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFRCx5Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQ3ZFLENBQUM7SUFDSixDQUFDO0lBRUQsNkNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUNwQixJQUFJLENBQUMscUJBQXFCLENBQUMsMEJBQTBCLENBQ25ELElBQUksQ0FBQyxjQUFjLENBQ3BCLElBQUksTUFBTSxDQUNaLENBQUM7SUFDSixDQUFDOztnQkF4SStCLGtCQUFrQjtnQkFDdEIsY0FBYztnQkFDTCx1QkFBdUI7Z0JBQ3pCLHFCQUFxQjtnQkFDNUIsY0FBYztnQkFDakIsa0JBQWtCO2dCQUNaLGlCQUFpQjs7SUFoQnJDLHdCQUF3QjtRQUxwQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLDgvRkFBZ0Q7WUFDaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLHdCQUF3QixDQW1KcEM7SUFBRCwrQkFBQztDQUFBLEFBbkpELElBbUpDO1NBbkpZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQWN0aXZlQ2FydFNlcnZpY2UsXG4gIEFkZHJlc3MsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VyQWRkcmVzc1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZFdpdGhBZGRyZXNzIHtcbiAgY2FyZDogQ2FyZDtcbiAgYWRkcmVzczogQWRkcmVzcztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc2hpcHBpbmctYWRkcmVzcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaGlwcGluZy1hZGRyZXNzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNoaXBwaW5nQWRkcmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGV4aXN0aW5nQWRkcmVzc2VzJDogT2JzZXJ2YWJsZTxBZGRyZXNzW10+O1xuICBuZXdBZGRyZXNzRm9ybU1hbnVhbGx5T3BlbmVkID0gZmFsc2U7XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGNhcmRzJDogT2JzZXJ2YWJsZTxDYXJkV2l0aEFkZHJlc3NbXT47XG4gIHNlbGVjdGVkQWRkcmVzcyQ6IE9ic2VydmFibGU8QWRkcmVzcz47XG4gIGZvcmNlTG9hZGVyID0gZmFsc2U7IC8vIHRoaXMgaGVscHMgd2l0aCBzbW9vdGhlciBzdGVwcyB0cmFuc2l0aW9uXG4gIGlzR3Vlc3RDaGVja291dCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuZ2V0QWRkcmVzc2VzTG9hZGluZygpO1xuICAgIHRoaXMuZXhpc3RpbmdBZGRyZXNzZXMkID0gdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuZ2V0QWRkcmVzc2VzKCk7XG4gICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MkID0gdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXREZWxpdmVyeUFkZHJlc3MoKTtcblxuICAgIHRoaXMuY2FyZHMkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmV4aXN0aW5nQWRkcmVzc2VzJCxcbiAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzJCxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dEFkZHJlc3MuZGVmYXVsdFNoaXBwaW5nQWRkcmVzcycpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0QWRkcmVzcy5zaGlwVG9UaGlzQWRkcmVzcycpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2FkZHJlc3NDYXJkLnNlbGVjdGVkJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKFtcbiAgICAgICAgICBhZGRyZXNzZXMsXG4gICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgdGV4dERlZmF1bHRTaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgdGV4dFNoaXBUb1RoaXNBZGRyZXNzLFxuICAgICAgICAgIHRleHRTZWxlY3RlZCxcbiAgICAgICAgXSkgPT4ge1xuICAgICAgICAgIC8vIFNlbGVjdCBkZWZhdWx0IGFkZHJlc3MgaWYgbm9uZSBzZWxlY3RlZFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGFkZHJlc3Nlcy5sZW5ndGggJiZcbiAgICAgICAgICAgICghc2VsZWN0ZWQgfHwgT2JqZWN0LmtleXMoc2VsZWN0ZWQpLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRBZGRyZXNzID0gYWRkcmVzc2VzLmZpbmQoXG4gICAgICAgICAgICAgIGFkZHJlc3MgPT4gYWRkcmVzcy5kZWZhdWx0QWRkcmVzc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNlbGVjdGVkID0gZGVmYXVsdEFkZHJlc3M7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFkZHJlc3MoZGVmYXVsdEFkZHJlc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWRkcmVzc2VzLm1hcChhZGRyZXNzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmRDb250ZW50KFxuICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgdGV4dERlZmF1bHRTaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgICAgIHRleHRTaGlwVG9UaGlzQWRkcmVzcyxcbiAgICAgICAgICAgICAgdGV4dFNlbGVjdGVkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgY2FyZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuXG4gICAgaWYgKCF0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmlzR3Vlc3RDYXJ0KCkpIHtcbiAgICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmxvYWRBZGRyZXNzZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0d1ZXN0Q2hlY2tvdXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdldENhcmRDb250ZW50KFxuICAgIGFkZHJlc3M6IEFkZHJlc3MsXG4gICAgc2VsZWN0ZWQ6IGFueSxcbiAgICB0ZXh0RGVmYXVsdFNoaXBwaW5nQWRkcmVzczogc3RyaW5nLFxuICAgIHRleHRTaGlwVG9UaGlzQWRkcmVzczogc3RyaW5nLFxuICAgIHRleHRTZWxlY3RlZDogc3RyaW5nXG4gICk6IENhcmQge1xuICAgIGxldCByZWdpb24gPSAnJztcblxuICAgIGlmIChhZGRyZXNzLnJlZ2lvbiAmJiBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlKSB7XG4gICAgICByZWdpb24gPSBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlICsgJywgJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IGFkZHJlc3MuZGVmYXVsdEFkZHJlc3MgPyB0ZXh0RGVmYXVsdFNoaXBwaW5nQWRkcmVzcyA6ICcnLFxuICAgICAgdGV4dEJvbGQ6IGFkZHJlc3MuZmlyc3ROYW1lICsgJyAnICsgYWRkcmVzcy5sYXN0TmFtZSxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgYWRkcmVzcy5saW5lMSxcbiAgICAgICAgYWRkcmVzcy5saW5lMixcbiAgICAgICAgYWRkcmVzcy50b3duICsgJywgJyArIHJlZ2lvbiArIGFkZHJlc3MuY291bnRyeS5pc29jb2RlLFxuICAgICAgICBhZGRyZXNzLnBvc3RhbENvZGUsXG4gICAgICAgIGFkZHJlc3MucGhvbmUsXG4gICAgICBdLFxuICAgICAgYWN0aW9uczogW3sgbmFtZTogdGV4dFNoaXBUb1RoaXNBZGRyZXNzLCBldmVudDogJ3NlbmQnIH1dLFxuICAgICAgaGVhZGVyOiBzZWxlY3RlZCAmJiBzZWxlY3RlZC5pZCA9PT0gYWRkcmVzcy5pZCA/IHRleHRTZWxlY3RlZCA6ICcnLFxuICAgIH07XG4gIH1cblxuICBzZWxlY3RBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLnNldERlbGl2ZXJ5QWRkcmVzcyhhZGRyZXNzKTtcbiAgfVxuXG4gIGFkZEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGVjdGVkU3ViID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MkLnN1YnNjcmliZShzZWxlY3RlZCA9PiB7XG4gICAgICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQuc2hpcHBpbmdBZGRyZXNzKSB7XG4gICAgICAgIHRoaXMuZ29OZXh0KCk7XG4gICAgICAgIHNlbGVjdGVkU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcmNlTG9hZGVyID0gdHJ1ZTtcblxuICAgIHRoaXMuZXhpc3RpbmdBZGRyZXNzZXMkLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKGFkZHJlc3NlcyA9PiB7XG4gICAgICBhZGRyZXNzZXMuaW5jbHVkZXMoYWRkcmVzcylcbiAgICAgICAgPyB0aGlzLnNlbGVjdEFkZHJlc3MoYWRkcmVzcylcbiAgICAgICAgOiB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmNyZWF0ZUFuZFNldEFkZHJlc3MoYWRkcmVzcyk7XG4gICAgfSk7XG4gIH1cblxuICBzaG93TmV3QWRkcmVzc0Zvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5uZXdBZGRyZXNzRm9ybU1hbnVhbGx5T3BlbmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGhpZGVOZXdBZGRyZXNzRm9ybShnb1ByZXZpb3VzOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLm5ld0FkZHJlc3NGb3JtTWFudWFsbHlPcGVuZWQgPSBmYWxzZTtcbiAgICBpZiAoZ29QcmV2aW91cykge1xuICAgICAgdGhpcy5nb1ByZXZpb3VzKCk7XG4gICAgfVxuICB9XG5cbiAgZ29OZXh0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oXG4gICAgICB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXROZXh0Q2hlY2tvdXRTdGVwVXJsKHRoaXMuYWN0aXZhdGVkUm91dGUpXG4gICAgKTtcbiAgfVxuXG4gIGdvUHJldmlvdXMoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyhcbiAgICAgIHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldFByZXZpb3VzQ2hlY2tvdXRTdGVwVXJsKFxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlXG4gICAgICApIHx8ICdjYXJ0J1xuICAgICk7XG4gIH1cbn1cbiJdfQ==