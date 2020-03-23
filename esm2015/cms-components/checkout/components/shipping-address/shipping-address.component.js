import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartService, Address, CheckoutDeliveryService, RoutingService, TranslationService, UserAddressService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
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
                const defaultAddress = addresses.find(address => address.defaultAddress);
                selected = defaultAddress;
                this.selectAddress(defaultAddress);
            }
            return addresses.map(address => {
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
        const selectedSub = this.selectedAddress$.subscribe(selected => {
            if (selected && selected.shippingAddress) {
                this.goNext();
                selectedSub.unsubscribe();
            }
        });
        this.forceLoader = true;
        this.existingAddresses$.pipe(take(1)).subscribe(addresses => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsT0FBTyxFQUNQLHVCQUF1QixFQUN2QixjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQVkvRSxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQVNuQyxZQUNZLGtCQUFzQyxFQUN0QyxjQUE4QixFQUM5Qix1QkFBZ0QsRUFDaEQscUJBQTRDLEVBQzVDLGNBQThCLEVBQzlCLFdBQStCLEVBQy9CLGlCQUFvQztRQU5wQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBZGhE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SSxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQztJQUMzQyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsYUFBc0IsS0FBSztRQUM1QyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsS0FBSyxDQUFDO1FBQzFDLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FDcEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FDdkUsQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQywwQkFBMEIsQ0FDbkQsSUFBSSxDQUFDLGNBQWMsQ0FDcEIsSUFBSSxNQUFNLENBQ1osQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQXpJaUMsa0JBQWtCO1lBQ3RCLGNBQWM7WUFDTCx1QkFBdUI7WUFDekIscUJBQXFCO1lBQzVCLGNBQWM7WUFDakIsa0JBQWtCO1lBQ1osaUJBQWlCOztBQWhCckMsd0JBQXdCO0lBTHBDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsOC9GQUFnRDtRQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csd0JBQXdCLENBbUpwQztTQW5KWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICBBZGRyZXNzLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlckFkZHJlc3NTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRXaXRoQWRkcmVzcyB7XG4gIGNhcmQ6IENhcmQ7XG4gIGFkZHJlc3M6IEFkZHJlc3M7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNoaXBwaW5nLWFkZHJlc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTaGlwcGluZ0FkZHJlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBleGlzdGluZ0FkZHJlc3NlcyQ6IE9ic2VydmFibGU8QWRkcmVzc1tdPjtcbiAgbmV3QWRkcmVzc0Zvcm1NYW51YWxseU9wZW5lZCA9IGZhbHNlO1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjYXJkcyQ6IE9ic2VydmFibGU8Q2FyZFdpdGhBZGRyZXNzW10+O1xuICBzZWxlY3RlZEFkZHJlc3MkOiBPYnNlcnZhYmxlPEFkZHJlc3M+O1xuICBmb3JjZUxvYWRlciA9IGZhbHNlOyAvLyB0aGlzIGhlbHBzIHdpdGggc21vb3RoZXIgc3RlcHMgdHJhbnNpdGlvblxuICBpc0d1ZXN0Q2hlY2tvdXQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldEFkZHJlc3Nlc0xvYWRpbmcoKTtcbiAgICB0aGlzLmV4aXN0aW5nQWRkcmVzc2VzJCA9IHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldEFkZHJlc3NlcygpO1xuICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzJCA9IHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0RGVsaXZlcnlBZGRyZXNzKCk7XG5cbiAgICB0aGlzLmNhcmRzJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5leGlzdGluZ0FkZHJlc3NlcyQsXG4gICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyQsXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRBZGRyZXNzLmRlZmF1bHRTaGlwcGluZ0FkZHJlc3MnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dEFkZHJlc3Muc2hpcFRvVGhpc0FkZHJlc3MnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdhZGRyZXNzQ2FyZC5zZWxlY3RlZCcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChbXG4gICAgICAgICAgYWRkcmVzc2VzLFxuICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgIHRleHREZWZhdWx0U2hpcHBpbmdBZGRyZXNzLFxuICAgICAgICAgIHRleHRTaGlwVG9UaGlzQWRkcmVzcyxcbiAgICAgICAgICB0ZXh0U2VsZWN0ZWQsXG4gICAgICAgIF0pID0+IHtcbiAgICAgICAgICAvLyBTZWxlY3QgZGVmYXVsdCBhZGRyZXNzIGlmIG5vbmUgc2VsZWN0ZWRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBhZGRyZXNzZXMubGVuZ3RoICYmXG4gICAgICAgICAgICAoIXNlbGVjdGVkIHx8IE9iamVjdC5rZXlzKHNlbGVjdGVkKS5sZW5ndGggPT09IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0QWRkcmVzcyA9IGFkZHJlc3Nlcy5maW5kKFxuICAgICAgICAgICAgICBhZGRyZXNzID0+IGFkZHJlc3MuZGVmYXVsdEFkZHJlc3NcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZWxlY3RlZCA9IGRlZmF1bHRBZGRyZXNzO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBZGRyZXNzKGRlZmF1bHRBZGRyZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFkZHJlc3Nlcy5tYXAoYWRkcmVzcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkQ29udGVudChcbiAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgICAgIHRleHREZWZhdWx0U2hpcHBpbmdBZGRyZXNzLFxuICAgICAgICAgICAgICB0ZXh0U2hpcFRvVGhpc0FkZHJlc3MsXG4gICAgICAgICAgICAgIHRleHRTZWxlY3RlZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgIGNhcmQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcblxuICAgIGlmICghdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5pc0d1ZXN0Q2FydCgpKSB7XG4gICAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5sb2FkQWRkcmVzc2VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNHdWVzdENoZWNrb3V0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBnZXRDYXJkQ29udGVudChcbiAgICBhZGRyZXNzOiBBZGRyZXNzLFxuICAgIHNlbGVjdGVkOiBhbnksXG4gICAgdGV4dERlZmF1bHRTaGlwcGluZ0FkZHJlc3M6IHN0cmluZyxcbiAgICB0ZXh0U2hpcFRvVGhpc0FkZHJlc3M6IHN0cmluZyxcbiAgICB0ZXh0U2VsZWN0ZWQ6IHN0cmluZ1xuICApOiBDYXJkIHtcbiAgICBsZXQgcmVnaW9uID0gJyc7XG5cbiAgICBpZiAoYWRkcmVzcy5yZWdpb24gJiYgYWRkcmVzcy5yZWdpb24uaXNvY29kZSkge1xuICAgICAgcmVnaW9uID0gYWRkcmVzcy5yZWdpb24uaXNvY29kZSArICcsICc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBhZGRyZXNzLmRlZmF1bHRBZGRyZXNzID8gdGV4dERlZmF1bHRTaGlwcGluZ0FkZHJlc3MgOiAnJyxcbiAgICAgIHRleHRCb2xkOiBhZGRyZXNzLmZpcnN0TmFtZSArICcgJyArIGFkZHJlc3MubGFzdE5hbWUsXG4gICAgICB0ZXh0OiBbXG4gICAgICAgIGFkZHJlc3MubGluZTEsXG4gICAgICAgIGFkZHJlc3MubGluZTIsXG4gICAgICAgIGFkZHJlc3MudG93biArICcsICcgKyByZWdpb24gKyBhZGRyZXNzLmNvdW50cnkuaXNvY29kZSxcbiAgICAgICAgYWRkcmVzcy5wb3N0YWxDb2RlLFxuICAgICAgICBhZGRyZXNzLnBob25lLFxuICAgICAgXSxcbiAgICAgIGFjdGlvbnM6IFt7IG5hbWU6IHRleHRTaGlwVG9UaGlzQWRkcmVzcywgZXZlbnQ6ICdzZW5kJyB9XSxcbiAgICAgIGhlYWRlcjogc2VsZWN0ZWQgJiYgc2VsZWN0ZWQuaWQgPT09IGFkZHJlc3MuaWQgPyB0ZXh0U2VsZWN0ZWQgOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgc2VsZWN0QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5zZXREZWxpdmVyeUFkZHJlc3MoYWRkcmVzcyk7XG4gIH1cblxuICBhZGRBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxlY3RlZFN1YiA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzJC5zdWJzY3JpYmUoc2VsZWN0ZWQgPT4ge1xuICAgICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkLnNoaXBwaW5nQWRkcmVzcykge1xuICAgICAgICB0aGlzLmdvTmV4dCgpO1xuICAgICAgICBzZWxlY3RlZFN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5mb3JjZUxvYWRlciA9IHRydWU7XG5cbiAgICB0aGlzLmV4aXN0aW5nQWRkcmVzc2VzJC5waXBlKHRha2UoMSkpLnN1YnNjcmliZShhZGRyZXNzZXMgPT4ge1xuICAgICAgYWRkcmVzc2VzLmluY2x1ZGVzKGFkZHJlc3MpXG4gICAgICAgID8gdGhpcy5zZWxlY3RBZGRyZXNzKGFkZHJlc3MpXG4gICAgICAgIDogdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5jcmVhdGVBbmRTZXRBZGRyZXNzKGFkZHJlc3MpO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd05ld0FkZHJlc3NGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMubmV3QWRkcmVzc0Zvcm1NYW51YWxseU9wZW5lZCA9IHRydWU7XG4gIH1cblxuICBoaWRlTmV3QWRkcmVzc0Zvcm0oZ29QcmV2aW91czogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5uZXdBZGRyZXNzRm9ybU1hbnVhbGx5T3BlbmVkID0gZmFsc2U7XG4gICAgaWYgKGdvUHJldmlvdXMpIHtcbiAgICAgIHRoaXMuZ29QcmV2aW91cygpO1xuICAgIH1cbiAgfVxuXG4gIGdvTmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKFxuICAgICAgdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0TmV4dENoZWNrb3V0U3RlcFVybCh0aGlzLmFjdGl2YXRlZFJvdXRlKVxuICAgICk7XG4gIH1cblxuICBnb1ByZXZpb3VzKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oXG4gICAgICB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRQcmV2aW91c0NoZWNrb3V0U3RlcFVybChcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgKSB8fCAnY2FydCdcbiAgICApO1xuICB9XG59XG4iXX0=