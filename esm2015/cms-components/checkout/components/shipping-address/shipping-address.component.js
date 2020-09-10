import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartService, Address, B2BAddress, CheckoutCostCenterService, CheckoutDeliveryService, PaymentTypeService, TranslationService, UserAddressService, UserCostCenterService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, map, switchMap, take, tap, } from 'rxjs/operators';
import { CheckoutStepService } from '../../services/checkout-step.service';
let ShippingAddressComponent = class ShippingAddressComponent {
    constructor(userAddressService, checkoutDeliveryService, activatedRoute, translation, activeCartService, checkoutStepService, paymentTypeService, userCostCenterService, checkoutCostCenterService) {
        this.userAddressService = userAddressService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.activatedRoute = activatedRoute;
        this.translation = translation;
        this.activeCartService = activeCartService;
        this.checkoutStepService = checkoutStepService;
        this.paymentTypeService = paymentTypeService;
        this.userCostCenterService = userCostCenterService;
        this.checkoutCostCenterService = checkoutCostCenterService;
        this.addressFormOpened = false;
        this.forceLoader = false; // this helps with smoother steps transition
        this.doneAutoSelect = false;
        this.isAccountPayment = false;
    }
    get isGuestCheckout() {
        return this.activeCartService.isGuestCart();
    }
    get backBtnText() {
        return this.checkoutStepService.getBackBntText(this.activatedRoute);
    }
    get isLoading$() {
        return this.userAddressService.getAddressesLoading();
    }
    get selectedAddress$() {
        return this.checkoutDeliveryService.getDeliveryAddress().pipe(tap((address) => {
            if (address &&
                (this.selectedAddress === undefined ||
                    this.selectedAddress.id !== address.id)) {
                this.selectedAddress = address;
                if (this.forceLoader) {
                    this.next();
                }
            }
        }));
    }
    get cards$() {
        return combineLatest([
            this.getSupportedAddresses(),
            this.selectedAddress$,
            this.translation.translate('checkoutAddress.defaultShippingAddress'),
            this.translation.translate('checkoutAddress.shipToThisAddress'),
            this.translation.translate('addressCard.selected'),
        ]).pipe(tap(([addresses, selected]) => this.selectDefaultAddress(addresses, selected)), map(([addresses, selected, textDefault, textShipTo, textSelected]) => addresses.map((address) => ({
            address,
            card: this.getCardContent(address, selected, textDefault, textShipTo, textSelected),
        }))));
    }
    getSupportedAddresses() {
        if (this.isAccountPayment) {
            return this.checkoutCostCenterService.getCostCenter().pipe(distinctUntilChanged(), switchMap((selected) => {
                this.doneAutoSelect = false;
                return this.userCostCenterService.getCostCenterAddresses(selected);
            }));
        }
        else {
            return this.userAddressService.getAddresses();
        }
    }
    selectDefaultAddress(addresses, selected) {
        if (!this.doneAutoSelect &&
            addresses &&
            addresses.length &&
            (!selected || Object.keys(selected).length === 0)) {
            if (this.isAccountPayment) {
                if (addresses.length === 1) {
                    this.selectAddress(addresses[0]);
                }
            }
            else {
                selected = addresses.find((address) => address.defaultAddress);
                if (selected) {
                    this.selectAddress(selected);
                }
            }
            this.doneAutoSelect = true;
        }
    }
    ngOnInit() {
        if (this.paymentTypeService &&
            this.userCostCenterService &&
            this.checkoutCostCenterService) {
            this.paymentTypeService
                .isAccountPayment()
                .pipe(take(1))
                .subscribe((isAccount) => (this.isAccountPayment = isAccount));
        }
        if (!this.isGuestCheckout && !this.isAccountPayment) {
            this.userAddressService.loadAddresses();
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
        this.forceLoader = true;
        this.checkoutDeliveryService.createAndSetAddress(address);
    }
    showNewAddressForm() {
        this.addressFormOpened = true;
    }
    hideNewAddressForm(goPrevious = false) {
        this.addressFormOpened = false;
        if (goPrevious) {
            this.back();
        }
    }
    next() {
        this.checkoutStepService.next(this.activatedRoute);
    }
    back() {
        this.checkoutStepService.back(this.activatedRoute);
    }
};
ShippingAddressComponent.ctorParameters = () => [
    { type: UserAddressService },
    { type: CheckoutDeliveryService },
    { type: ActivatedRoute },
    { type: TranslationService },
    { type: ActiveCartService },
    { type: CheckoutStepService },
    { type: PaymentTypeService },
    { type: UserCostCenterService },
    { type: CheckoutCostCenterService }
];
ShippingAddressComponent = __decorate([
    Component({
        selector: 'cx-shipping-address',
        template: "<ng-container *ngIf=\"cards$ | async as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutAddress.shippingAddress' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!forceLoader && !(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        isAccountPayment || (cards?.length && !addressFormOpened);\n        else newAddressForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'checkoutAddress.selectYourShippingAddress' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\" *ngIf=\"!isAccountPayment\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewAddressForm()\"\n          >\n            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-shipping-address-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div\n            class=\"cx-shipping-address-card-inner\"\n            (click)=\"selectAddress(card.address)\"\n          >\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.card\"\n              (sendCard)=\"selectAddress(card.address)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"cx-btn btn btn-block btn-action\" (click)=\"back()\">\n            {{ backBtnText | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-primary\"\n            [disabled]=\"!selectedAddress?.id\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newAddressForm>\n      <cx-address-form\n        *ngIf=\"cards.length; else initialAddressForm\"\n        [showTitleCode]=\"true\"\n        (backToAddress)=\"hideNewAddressForm(false)\"\n        (submitAddress)=\"addAddress($event)\"\n      ></cx-address-form>\n      <ng-template #initialAddressForm>\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          [setAsDefaultField]=\"!isGuestCheckout\"\n          [addressData]=\"selectedAddress\"\n          cancelBtnLabel=\"{{ backBtnText | cxTranslate }}\"\n          (backToAddress)=\"hideNewAddressForm(true)\"\n          (submitAddress)=\"addAddress($event)\"\n        ></cx-address-form>\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ShippingAddressComponent);
export { ShippingAddressComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsT0FBTyxFQUNQLFVBQVUsRUFDVix5QkFBeUIsRUFDekIsdUJBQXVCLEVBQ3ZCLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLHFCQUFxQixHQUN0QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixHQUFHLEVBQ0gsU0FBUyxFQUNULElBQUksRUFDSixHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQVkzRSxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQU9uQyxZQUNZLGtCQUFzQyxFQUN0Qyx1QkFBZ0QsRUFDaEQsY0FBOEIsRUFDOUIsV0FBK0IsRUFDL0IsaUJBQW9DLEVBQ3BDLG1CQUF3QyxFQUN4QyxrQkFBdUMsRUFDdkMscUJBQTZDLEVBQzdDLHlCQUFxRDtRQVJyRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFxQjtRQUN2QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXdCO1FBQzdDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBNEI7UUFmakUsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGdCQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsNENBQTRDO1FBRWpFLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztJQVl0QixDQUFDO0lBRUosSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLElBQUksQ0FDM0QsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDZCxJQUNFLE9BQU87Z0JBQ1AsQ0FBQyxJQUFJLENBQUMsZUFBZSxLQUFLLFNBQVM7b0JBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFDekM7Z0JBQ0EsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7Z0JBQy9CLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDcEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNiO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sYUFBYSxDQUFDO1lBQ25CLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM1QixJQUFJLENBQUMsZ0JBQWdCO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLHdDQUF3QyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLG1DQUFtQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDO1NBQ25ELENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUM1QixJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUMvQyxFQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQyxFQUFFLEVBQUUsQ0FDN0QsU0FBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNqQyxPQUFPO1lBQ1AsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQ3ZCLE9BQU8sRUFDUCxRQUFRLEVBQ1IsV0FBVyxFQUNYLFVBQVUsRUFDVixZQUFZLENBQ2I7U0FDRixDQUFDLENBQUMsQ0FDSixDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQscUJBQXFCO1FBQ25CLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FDeEQsb0JBQW9CLEVBQUUsRUFDdEIsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyRSxDQUFDLENBQUMsQ0FDSCxDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUVELG9CQUFvQixDQUFDLFNBQW9CLEVBQUUsUUFBaUI7UUFDMUQsSUFDRSxDQUFDLElBQUksQ0FBQyxjQUFjO1lBQ3BCLFNBQVM7WUFDVCxTQUFTLENBQUMsTUFBTTtZQUNoQixDQUFDLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxFQUNqRDtZQUNBLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN6QixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNsQzthQUNGO2lCQUFNO2dCQUNMLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQy9ELElBQUksUUFBUSxFQUFFO29CQUNaLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzlCO2FBQ0Y7WUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFDRSxJQUFJLENBQUMsa0JBQWtCO1lBQ3ZCLElBQUksQ0FBQyxxQkFBcUI7WUFDMUIsSUFBSSxDQUFDLHlCQUF5QixFQUM5QjtZQUNBLElBQUksQ0FBQyxrQkFBa0I7aUJBQ3BCLGdCQUFnQixFQUFFO2lCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNiLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUNsRTtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ25ELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFRCxjQUFjLENBQ1osT0FBZ0IsRUFDaEIsUUFBYSxFQUNiLDBCQUFrQyxFQUNsQyxxQkFBNkIsRUFDN0IsWUFBb0I7UUFFcEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUM1QyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3hDO1FBRUQsT0FBTztZQUNMLEtBQUssRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvRCxRQUFRLEVBQUUsT0FBTyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVE7WUFDcEQsSUFBSSxFQUFFO2dCQUNKLE9BQU8sQ0FBQyxLQUFLO2dCQUNiLE9BQU8sQ0FBQyxLQUFLO2dCQUNiLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQ3RELE9BQU8sQ0FBQyxVQUFVO2dCQUNsQixPQUFPLENBQUMsS0FBSzthQUNkO1lBQ0QsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO1lBQ3pELE1BQU0sRUFBRSxRQUFRLElBQUksUUFBUSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDbkUsQ0FBQztJQUNKLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxVQUFVLENBQUMsT0FBZ0I7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsYUFBc0IsS0FBSztRQUM1QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNGLENBQUE7O1lBNUtpQyxrQkFBa0I7WUFDYix1QkFBdUI7WUFDaEMsY0FBYztZQUNqQixrQkFBa0I7WUFDWixpQkFBaUI7WUFDZixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2YscUJBQXFCO1lBQ2pCLHlCQUF5Qjs7QUFoQnRELHdCQUF3QjtJQUxwQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLGk2RkFBZ0Q7UUFDaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLHdCQUF3QixDQW9McEM7U0FwTFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBY3RpdmVDYXJ0U2VydmljZSxcbiAgQWRkcmVzcyxcbiAgQjJCQWRkcmVzcyxcbiAgQ2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZSxcbiAgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gIFBheW1lbnRUeXBlU2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gIFVzZXJDb3N0Q2VudGVyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBtYXAsXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2hlY2tvdXQtc3RlcC5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBDYXJkV2l0aEFkZHJlc3Mge1xuICBjYXJkOiBDYXJkO1xuICBhZGRyZXNzOiBBZGRyZXNzO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zaGlwcGluZy1hZGRyZXNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NoaXBwaW5nLWFkZHJlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2hpcHBpbmdBZGRyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYWRkcmVzc0Zvcm1PcGVuZWQgPSBmYWxzZTtcbiAgZm9yY2VMb2FkZXIgPSBmYWxzZTsgLy8gdGhpcyBoZWxwcyB3aXRoIHNtb290aGVyIHN0ZXBzIHRyYW5zaXRpb25cbiAgc2VsZWN0ZWRBZGRyZXNzOiBBZGRyZXNzO1xuICBkb25lQXV0b1NlbGVjdCA9IGZhbHNlO1xuICBpc0FjY291bnRQYXltZW50ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFN0ZXBTZXJ2aWNlOiBDaGVja291dFN0ZXBTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwYXltZW50VHlwZVNlcnZpY2U/OiBQYXltZW50VHlwZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJDb3N0Q2VudGVyU2VydmljZT86IFVzZXJDb3N0Q2VudGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZT86IENoZWNrb3V0Q29zdENlbnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGdldCBpc0d1ZXN0Q2hlY2tvdXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuaXNHdWVzdENhcnQoKTtcbiAgfVxuXG4gIGdldCBiYWNrQnRuVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2UuZ2V0QmFja0JudFRleHQodGhpcy5hY3RpdmF0ZWRSb3V0ZSk7XG4gIH1cblxuICBnZXQgaXNMb2FkaW5nJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuZ2V0QWRkcmVzc2VzTG9hZGluZygpO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkQWRkcmVzcyQoKTogT2JzZXJ2YWJsZTxBZGRyZXNzPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0RGVsaXZlcnlBZGRyZXNzKCkucGlwZShcbiAgICAgIHRhcCgoYWRkcmVzcykgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYWRkcmVzcyAmJlxuICAgICAgICAgICh0aGlzLnNlbGVjdGVkQWRkcmVzcyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcy5pZCAhPT0gYWRkcmVzcy5pZClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MgPSBhZGRyZXNzO1xuICAgICAgICAgIGlmICh0aGlzLmZvcmNlTG9hZGVyKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldCBjYXJkcyQoKTogT2JzZXJ2YWJsZTxDYXJkV2l0aEFkZHJlc3NbXT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuZ2V0U3VwcG9ydGVkQWRkcmVzc2VzKCksXG4gICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyQsXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRBZGRyZXNzLmRlZmF1bHRTaGlwcGluZ0FkZHJlc3MnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dEFkZHJlc3Muc2hpcFRvVGhpc0FkZHJlc3MnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdhZGRyZXNzQ2FyZC5zZWxlY3RlZCcpLFxuICAgIF0pLnBpcGUoXG4gICAgICB0YXAoKFthZGRyZXNzZXMsIHNlbGVjdGVkXSkgPT5cbiAgICAgICAgdGhpcy5zZWxlY3REZWZhdWx0QWRkcmVzcyhhZGRyZXNzZXMsIHNlbGVjdGVkKVxuICAgICAgKSxcbiAgICAgIG1hcCgoW2FkZHJlc3Nlcywgc2VsZWN0ZWQsIHRleHREZWZhdWx0LCB0ZXh0U2hpcFRvLCB0ZXh0U2VsZWN0ZWRdKSA9PlxuICAgICAgICAoPGFueT5hZGRyZXNzZXMpLm1hcCgoYWRkcmVzcykgPT4gKHtcbiAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgIGNhcmQ6IHRoaXMuZ2V0Q2FyZENvbnRlbnQoXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgICB0ZXh0RGVmYXVsdCxcbiAgICAgICAgICAgIHRleHRTaGlwVG8sXG4gICAgICAgICAgICB0ZXh0U2VsZWN0ZWRcbiAgICAgICAgICApLFxuICAgICAgICB9KSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0U3VwcG9ydGVkQWRkcmVzc2VzKCk6IE9ic2VydmFibGU8QWRkcmVzc1tdIHwgQjJCQWRkcmVzc1tdPiB7XG4gICAgaWYgKHRoaXMuaXNBY2NvdW50UGF5bWVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZS5nZXRDb3N0Q2VudGVyKCkucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgc3dpdGNoTWFwKChzZWxlY3RlZCkgPT4ge1xuICAgICAgICAgIHRoaXMuZG9uZUF1dG9TZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gdGhpcy51c2VyQ29zdENlbnRlclNlcnZpY2UuZ2V0Q29zdENlbnRlckFkZHJlc3NlcyhzZWxlY3RlZCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuZ2V0QWRkcmVzc2VzKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0RGVmYXVsdEFkZHJlc3MoYWRkcmVzc2VzOiBBZGRyZXNzW10sIHNlbGVjdGVkOiBBZGRyZXNzKSB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuZG9uZUF1dG9TZWxlY3QgJiZcbiAgICAgIGFkZHJlc3NlcyAmJlxuICAgICAgYWRkcmVzc2VzLmxlbmd0aCAmJlxuICAgICAgKCFzZWxlY3RlZCB8fCBPYmplY3Qua2V5cyhzZWxlY3RlZCkubGVuZ3RoID09PSAwKVxuICAgICkge1xuICAgICAgaWYgKHRoaXMuaXNBY2NvdW50UGF5bWVudCkge1xuICAgICAgICBpZiAoYWRkcmVzc2VzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0QWRkcmVzcyhhZGRyZXNzZXNbMF0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3RlZCA9IGFkZHJlc3Nlcy5maW5kKChhZGRyZXNzKSA9PiBhZGRyZXNzLmRlZmF1bHRBZGRyZXNzKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RBZGRyZXNzKHNlbGVjdGVkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5kb25lQXV0b1NlbGVjdCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5wYXltZW50VHlwZVNlcnZpY2UgJiZcbiAgICAgIHRoaXMudXNlckNvc3RDZW50ZXJTZXJ2aWNlICYmXG4gICAgICB0aGlzLmNoZWNrb3V0Q29zdENlbnRlclNlcnZpY2VcbiAgICApIHtcbiAgICAgIHRoaXMucGF5bWVudFR5cGVTZXJ2aWNlXG4gICAgICAgIC5pc0FjY291bnRQYXltZW50KClcbiAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgLnN1YnNjcmliZSgoaXNBY2NvdW50KSA9PiAodGhpcy5pc0FjY291bnRQYXltZW50ID0gaXNBY2NvdW50KSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzR3Vlc3RDaGVja291dCAmJiAhdGhpcy5pc0FjY291bnRQYXltZW50KSB7XG4gICAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5sb2FkQWRkcmVzc2VzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2FyZENvbnRlbnQoXG4gICAgYWRkcmVzczogQWRkcmVzcyxcbiAgICBzZWxlY3RlZDogYW55LFxuICAgIHRleHREZWZhdWx0U2hpcHBpbmdBZGRyZXNzOiBzdHJpbmcsXG4gICAgdGV4dFNoaXBUb1RoaXNBZGRyZXNzOiBzdHJpbmcsXG4gICAgdGV4dFNlbGVjdGVkOiBzdHJpbmdcbiAgKTogQ2FyZCB7XG4gICAgbGV0IHJlZ2lvbiA9ICcnO1xuICAgIGlmIChhZGRyZXNzLnJlZ2lvbiAmJiBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlKSB7XG4gICAgICByZWdpb24gPSBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlICsgJywgJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IGFkZHJlc3MuZGVmYXVsdEFkZHJlc3MgPyB0ZXh0RGVmYXVsdFNoaXBwaW5nQWRkcmVzcyA6ICcnLFxuICAgICAgdGV4dEJvbGQ6IGFkZHJlc3MuZmlyc3ROYW1lICsgJyAnICsgYWRkcmVzcy5sYXN0TmFtZSxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgYWRkcmVzcy5saW5lMSxcbiAgICAgICAgYWRkcmVzcy5saW5lMixcbiAgICAgICAgYWRkcmVzcy50b3duICsgJywgJyArIHJlZ2lvbiArIGFkZHJlc3MuY291bnRyeS5pc29jb2RlLFxuICAgICAgICBhZGRyZXNzLnBvc3RhbENvZGUsXG4gICAgICAgIGFkZHJlc3MucGhvbmUsXG4gICAgICBdLFxuICAgICAgYWN0aW9uczogW3sgbmFtZTogdGV4dFNoaXBUb1RoaXNBZGRyZXNzLCBldmVudDogJ3NlbmQnIH1dLFxuICAgICAgaGVhZGVyOiBzZWxlY3RlZCAmJiBzZWxlY3RlZC5pZCA9PT0gYWRkcmVzcy5pZCA/IHRleHRTZWxlY3RlZCA6ICcnLFxuICAgIH07XG4gIH1cblxuICBzZWxlY3RBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLnNldERlbGl2ZXJ5QWRkcmVzcyhhZGRyZXNzKTtcbiAgfVxuXG4gIGFkZEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMuZm9yY2VMb2FkZXIgPSB0cnVlO1xuICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY3JlYXRlQW5kU2V0QWRkcmVzcyhhZGRyZXNzKTtcbiAgfVxuXG4gIHNob3dOZXdBZGRyZXNzRm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZHJlc3NGb3JtT3BlbmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGhpZGVOZXdBZGRyZXNzRm9ybShnb1ByZXZpb3VzOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLmFkZHJlc3NGb3JtT3BlbmVkID0gZmFsc2U7XG4gICAgaWYgKGdvUHJldmlvdXMpIHtcbiAgICAgIHRoaXMuYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLm5leHQodGhpcy5hY3RpdmF0ZWRSb3V0ZSk7XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5iYWNrKHRoaXMuYWN0aXZhdGVkUm91dGUpO1xuICB9XG59XG4iXX0=