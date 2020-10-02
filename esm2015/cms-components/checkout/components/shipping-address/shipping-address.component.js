import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartService, CheckoutCostCenterService, CheckoutDeliveryService, PaymentTypeService, TranslationService, UserAddressService, UserCostCenterService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, map, switchMap, take, tap, } from 'rxjs/operators';
import { CheckoutStepService } from '../../services/checkout-step.service';
export class ShippingAddressComponent {
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
        return this.userAddressService.getAddresses();
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
}
ShippingAddressComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-shipping-address',
                template: "<ng-container *ngIf=\"cards$ | async as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutAddress.shippingAddress' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!forceLoader && !(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        isAccountPayment || (cards?.length && !addressFormOpened);\n        else newAddressForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'checkoutAddress.selectYourShippingAddress' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\" *ngIf=\"!isAccountPayment\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewAddressForm()\"\n          >\n            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-shipping-address-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div\n            class=\"cx-shipping-address-card-inner\"\n            (click)=\"selectAddress(card.address)\"\n          >\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.card\"\n              (sendCard)=\"selectAddress(card.address)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"cx-btn btn btn-block btn-action\" (click)=\"back()\">\n            {{ backBtnText | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-primary\"\n            [disabled]=\"!selectedAddress?.id\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newAddressForm>\n      <cx-address-form\n        *ngIf=\"cards.length; else initialAddressForm\"\n        [showTitleCode]=\"true\"\n        (backToAddress)=\"hideNewAddressForm(false)\"\n        (submitAddress)=\"addAddress($event)\"\n      ></cx-address-form>\n      <ng-template #initialAddressForm>\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          [setAsDefaultField]=\"!isGuestCheckout\"\n          [addressData]=\"selectedAddress\"\n          cancelBtnLabel=\"{{ backBtnText | cxTranslate }}\"\n          (backToAddress)=\"hideNewAddressForm(true)\"\n          (submitAddress)=\"addAddress($event)\"\n        ></cx-address-form>\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUNMLGlCQUFpQixFQUVqQix5QkFBeUIsRUFDekIsdUJBQXVCLEVBQ3ZCLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLHFCQUFxQixHQUN0QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixHQUFHLEVBQ0gsU0FBUyxFQUNULElBQUksRUFDSixHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQVkzRSxNQUFNLE9BQU8sd0JBQXdCO0lBT25DLFlBQ1ksa0JBQXNDLEVBQ3RDLHVCQUFnRCxFQUNoRCxjQUE4QixFQUM5QixXQUErQixFQUMvQixpQkFBb0MsRUFDcEMsbUJBQXdDLEVBQ3hDLGtCQUF1QyxFQUN2QyxxQkFBNkMsRUFDN0MseUJBQXFEO1FBUnJELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLHNCQUFp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QUFPLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsVUFBVSxDQUFDLE9BQWdCO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELGtCQUFrQixDQUFDLGFBQXNCLEtBQUs7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMvQixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7OztZQXZMRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsaTZGQUFnRDtnQkFDaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQXZCQyxrQkFBa0I7WUFIbEIsdUJBQXVCO1lBTGhCLGNBQWM7WUFPckIsa0JBQWtCO1lBTGxCLGlCQUFpQjtZQWtCVixtQkFBbUI7WUFkMUIsa0JBQWtCO1lBR2xCLHFCQUFxQjtZQUxyQix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICBBZGRyZXNzLFxuICBDaGVja291dENvc3RDZW50ZXJTZXJ2aWNlLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgUGF5bWVudFR5cGVTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFVzZXJBZGRyZXNzU2VydmljZSxcbiAgVXNlckNvc3RDZW50ZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIG1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC1zdGVwLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRXaXRoQWRkcmVzcyB7XG4gIGNhcmQ6IENhcmQ7XG4gIGFkZHJlc3M6IEFkZHJlc3M7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNoaXBwaW5nLWFkZHJlc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTaGlwcGluZ0FkZHJlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhZGRyZXNzRm9ybU9wZW5lZCA9IGZhbHNlO1xuICBmb3JjZUxvYWRlciA9IGZhbHNlOyAvLyB0aGlzIGhlbHBzIHdpdGggc21vb3RoZXIgc3RlcHMgdHJhbnNpdGlvblxuICBzZWxlY3RlZEFkZHJlc3M6IEFkZHJlc3M7XG4gIGRvbmVBdXRvU2VsZWN0ID0gZmFsc2U7XG4gIGlzQWNjb3VudFBheW1lbnQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RlcFNlcnZpY2U6IENoZWNrb3V0U3RlcFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHBheW1lbnRUeXBlU2VydmljZT86IFBheW1lbnRUeXBlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlckNvc3RDZW50ZXJTZXJ2aWNlPzogVXNlckNvc3RDZW50ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dENvc3RDZW50ZXJTZXJ2aWNlPzogQ2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZVxuICApIHt9XG5cbiAgZ2V0IGlzR3Vlc3RDaGVja291dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5pc0d1ZXN0Q2FydCgpO1xuICB9XG5cbiAgZ2V0IGJhY2tCdG5UZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5nZXRCYWNrQm50VGV4dCh0aGlzLmFjdGl2YXRlZFJvdXRlKTtcbiAgfVxuXG4gIGdldCBpc0xvYWRpbmckKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRBZGRyZXNzZXNMb2FkaW5nKCk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRBZGRyZXNzJCgpOiBPYnNlcnZhYmxlPEFkZHJlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXREZWxpdmVyeUFkZHJlc3MoKS5waXBlKFxuICAgICAgdGFwKChhZGRyZXNzKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBhZGRyZXNzICYmXG4gICAgICAgICAgKHRoaXMuc2VsZWN0ZWRBZGRyZXNzID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzLmlkICE9PSBhZGRyZXNzLmlkKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgICAgICAgaWYgKHRoaXMuZm9yY2VMb2FkZXIpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0IGNhcmRzJCgpOiBPYnNlcnZhYmxlPENhcmRXaXRoQWRkcmVzc1tdPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5nZXRTdXBwb3J0ZWRBZGRyZXNzZXMoKSxcbiAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzJCxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dEFkZHJlc3MuZGVmYXVsdFNoaXBwaW5nQWRkcmVzcycpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0QWRkcmVzcy5zaGlwVG9UaGlzQWRkcmVzcycpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2FkZHJlc3NDYXJkLnNlbGVjdGVkJyksXG4gICAgXSkucGlwZShcbiAgICAgIHRhcCgoW2FkZHJlc3Nlcywgc2VsZWN0ZWRdKSA9PlxuICAgICAgICB0aGlzLnNlbGVjdERlZmF1bHRBZGRyZXNzKGFkZHJlc3Nlcywgc2VsZWN0ZWQpXG4gICAgICApLFxuICAgICAgbWFwKChbYWRkcmVzc2VzLCBzZWxlY3RlZCwgdGV4dERlZmF1bHQsIHRleHRTaGlwVG8sIHRleHRTZWxlY3RlZF0pID0+XG4gICAgICAgICg8YW55PmFkZHJlc3NlcykubWFwKChhZGRyZXNzKSA9PiAoe1xuICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgY2FyZDogdGhpcy5nZXRDYXJkQ29udGVudChcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgIHRleHREZWZhdWx0LFxuICAgICAgICAgICAgdGV4dFNoaXBUbyxcbiAgICAgICAgICAgIHRleHRTZWxlY3RlZFxuICAgICAgICAgICksXG4gICAgICAgIH0pKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRTdXBwb3J0ZWRBZGRyZXNzZXMoKTogT2JzZXJ2YWJsZTxBZGRyZXNzW10+IHtcbiAgICBpZiAodGhpcy5pc0FjY291bnRQYXltZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dENvc3RDZW50ZXJTZXJ2aWNlLmdldENvc3RDZW50ZXIoKS5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICBzd2l0Y2hNYXAoKHNlbGVjdGVkKSA9PiB7XG4gICAgICAgICAgdGhpcy5kb25lQXV0b1NlbGVjdCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiB0aGlzLnVzZXJDb3N0Q2VudGVyU2VydmljZS5nZXRDb3N0Q2VudGVyQWRkcmVzc2VzKHNlbGVjdGVkKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRBZGRyZXNzZXMoKTtcbiAgfVxuXG4gIHNlbGVjdERlZmF1bHRBZGRyZXNzKGFkZHJlc3NlczogQWRkcmVzc1tdLCBzZWxlY3RlZDogQWRkcmVzcykge1xuICAgIGlmIChcbiAgICAgICF0aGlzLmRvbmVBdXRvU2VsZWN0ICYmXG4gICAgICBhZGRyZXNzZXMgJiZcbiAgICAgIGFkZHJlc3Nlcy5sZW5ndGggJiZcbiAgICAgICghc2VsZWN0ZWQgfHwgT2JqZWN0LmtleXMoc2VsZWN0ZWQpLmxlbmd0aCA9PT0gMClcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLmlzQWNjb3VudFBheW1lbnQpIHtcbiAgICAgICAgaWYgKGFkZHJlc3Nlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdEFkZHJlc3MoYWRkcmVzc2VzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0ZWQgPSBhZGRyZXNzZXMuZmluZCgoYWRkcmVzcykgPT4gYWRkcmVzcy5kZWZhdWx0QWRkcmVzcyk7XG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0QWRkcmVzcyhzZWxlY3RlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZG9uZUF1dG9TZWxlY3QgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMucGF5bWVudFR5cGVTZXJ2aWNlICYmXG4gICAgICB0aGlzLnVzZXJDb3N0Q2VudGVyU2VydmljZSAmJlxuICAgICAgdGhpcy5jaGVja291dENvc3RDZW50ZXJTZXJ2aWNlXG4gICAgKSB7XG4gICAgICB0aGlzLnBheW1lbnRUeXBlU2VydmljZVxuICAgICAgICAuaXNBY2NvdW50UGF5bWVudCgpXG4gICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKGlzQWNjb3VudCkgPT4gKHRoaXMuaXNBY2NvdW50UGF5bWVudCA9IGlzQWNjb3VudCkpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc0d1ZXN0Q2hlY2tvdXQgJiYgIXRoaXMuaXNBY2NvdW50UGF5bWVudCkge1xuICAgICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UubG9hZEFkZHJlc3NlcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldENhcmRDb250ZW50KFxuICAgIGFkZHJlc3M6IEFkZHJlc3MsXG4gICAgc2VsZWN0ZWQ6IGFueSxcbiAgICB0ZXh0RGVmYXVsdFNoaXBwaW5nQWRkcmVzczogc3RyaW5nLFxuICAgIHRleHRTaGlwVG9UaGlzQWRkcmVzczogc3RyaW5nLFxuICAgIHRleHRTZWxlY3RlZDogc3RyaW5nXG4gICk6IENhcmQge1xuICAgIGxldCByZWdpb24gPSAnJztcbiAgICBpZiAoYWRkcmVzcy5yZWdpb24gJiYgYWRkcmVzcy5yZWdpb24uaXNvY29kZSkge1xuICAgICAgcmVnaW9uID0gYWRkcmVzcy5yZWdpb24uaXNvY29kZSArICcsICc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBhZGRyZXNzLmRlZmF1bHRBZGRyZXNzID8gdGV4dERlZmF1bHRTaGlwcGluZ0FkZHJlc3MgOiAnJyxcbiAgICAgIHRleHRCb2xkOiBhZGRyZXNzLmZpcnN0TmFtZSArICcgJyArIGFkZHJlc3MubGFzdE5hbWUsXG4gICAgICB0ZXh0OiBbXG4gICAgICAgIGFkZHJlc3MubGluZTEsXG4gICAgICAgIGFkZHJlc3MubGluZTIsXG4gICAgICAgIGFkZHJlc3MudG93biArICcsICcgKyByZWdpb24gKyBhZGRyZXNzLmNvdW50cnkuaXNvY29kZSxcbiAgICAgICAgYWRkcmVzcy5wb3N0YWxDb2RlLFxuICAgICAgICBhZGRyZXNzLnBob25lLFxuICAgICAgXSxcbiAgICAgIGFjdGlvbnM6IFt7IG5hbWU6IHRleHRTaGlwVG9UaGlzQWRkcmVzcywgZXZlbnQ6ICdzZW5kJyB9XSxcbiAgICAgIGhlYWRlcjogc2VsZWN0ZWQgJiYgc2VsZWN0ZWQuaWQgPT09IGFkZHJlc3MuaWQgPyB0ZXh0U2VsZWN0ZWQgOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgc2VsZWN0QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5zZXREZWxpdmVyeUFkZHJlc3MoYWRkcmVzcyk7XG4gIH1cblxuICBhZGRBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLmZvcmNlTG9hZGVyID0gdHJ1ZTtcbiAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmNyZWF0ZUFuZFNldEFkZHJlc3MoYWRkcmVzcyk7XG4gIH1cblxuICBzaG93TmV3QWRkcmVzc0Zvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyZXNzRm9ybU9wZW5lZCA9IHRydWU7XG4gIH1cblxuICBoaWRlTmV3QWRkcmVzc0Zvcm0oZ29QcmV2aW91czogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyZXNzRm9ybU9wZW5lZCA9IGZhbHNlO1xuICAgIGlmIChnb1ByZXZpb3VzKSB7XG4gICAgICB0aGlzLmJhY2soKTtcbiAgICB9XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5uZXh0KHRoaXMuYWN0aXZhdGVkUm91dGUpO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2UuYmFjayh0aGlzLmFjdGl2YXRlZFJvdXRlKTtcbiAgfVxufVxuIl19