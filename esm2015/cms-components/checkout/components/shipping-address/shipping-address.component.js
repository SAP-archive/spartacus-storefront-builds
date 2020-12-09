import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartService, CheckoutCostCenterService, CheckoutDeliveryService, PaymentTypeService, TranslationService, UserAddressService, UserCostCenterService, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
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
        this.subscriptions = new Subscription();
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
            this.subscriptions.add(this.paymentTypeService
                .isAccountPayment()
                .pipe(distinctUntilChanged())
                .subscribe((isAccount) => (this.isAccountPayment = isAccount)));
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
        if (Boolean(address)) {
            this.checkoutDeliveryService.createAndSetAddress(address);
        }
        else {
            this.forceLoader = false;
            this.next();
        }
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
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFDTCxpQkFBaUIsRUFFakIseUJBQXlCLEVBQ3pCLHVCQUF1QixFQUN2QixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixxQkFBcUIsR0FDdEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQVkzRSxNQUFNLE9BQU8sd0JBQXdCO0lBU25DLFlBQ1ksa0JBQXNDLEVBQ3RDLHVCQUFnRCxFQUNoRCxjQUE4QixFQUM5QixXQUErQixFQUMvQixpQkFBb0MsRUFDcEMsbUJBQXdDLEVBQ3hDLGtCQUF1QyxFQUN2QyxxQkFBNkMsRUFDN0MseUJBQXFEO1FBUnJELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLHNCQUFp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QUxsQixpQkFBaUI7WUFZVixtQkFBbUI7WUFSMUIsa0JBQWtCO1lBR2xCLHFCQUFxQjtZQUxyQix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBY3RpdmVDYXJ0U2VydmljZSxcbiAgQWRkcmVzcyxcbiAgQ2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZSxcbiAgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gIFBheW1lbnRUeXBlU2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gIFVzZXJDb3N0Q2VudGVyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2hlY2tvdXQtc3RlcC5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBDYXJkV2l0aEFkZHJlc3Mge1xuICBjYXJkOiBDYXJkO1xuICBhZGRyZXNzOiBBZGRyZXNzO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zaGlwcGluZy1hZGRyZXNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NoaXBwaW5nLWFkZHJlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2hpcHBpbmdBZGRyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBhZGRyZXNzRm9ybU9wZW5lZCA9IGZhbHNlO1xuICBmb3JjZUxvYWRlciA9IGZhbHNlOyAvLyB0aGlzIGhlbHBzIHdpdGggc21vb3RoZXIgc3RlcHMgdHJhbnNpdGlvblxuICBzZWxlY3RlZEFkZHJlc3M6IEFkZHJlc3M7XG4gIGRvbmVBdXRvU2VsZWN0ID0gZmFsc2U7XG4gIGlzQWNjb3VudFBheW1lbnQgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RlcFNlcnZpY2U6IENoZWNrb3V0U3RlcFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHBheW1lbnRUeXBlU2VydmljZT86IFBheW1lbnRUeXBlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlckNvc3RDZW50ZXJTZXJ2aWNlPzogVXNlckNvc3RDZW50ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dENvc3RDZW50ZXJTZXJ2aWNlPzogQ2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZVxuICApIHt9XG5cbiAgZ2V0IGlzR3Vlc3RDaGVja291dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5pc0d1ZXN0Q2FydCgpO1xuICB9XG5cbiAgZ2V0IGJhY2tCdG5UZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5nZXRCYWNrQm50VGV4dCh0aGlzLmFjdGl2YXRlZFJvdXRlKTtcbiAgfVxuXG4gIGdldCBpc0xvYWRpbmckKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRBZGRyZXNzZXNMb2FkaW5nKCk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRBZGRyZXNzJCgpOiBPYnNlcnZhYmxlPEFkZHJlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXREZWxpdmVyeUFkZHJlc3MoKS5waXBlKFxuICAgICAgdGFwKChhZGRyZXNzKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBhZGRyZXNzICYmXG4gICAgICAgICAgKHRoaXMuc2VsZWN0ZWRBZGRyZXNzID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzLmlkICE9PSBhZGRyZXNzLmlkKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgICAgICAgaWYgKHRoaXMuZm9yY2VMb2FkZXIpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0IGNhcmRzJCgpOiBPYnNlcnZhYmxlPENhcmRXaXRoQWRkcmVzc1tdPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5nZXRTdXBwb3J0ZWRBZGRyZXNzZXMoKSxcbiAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzJCxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dEFkZHJlc3MuZGVmYXVsdFNoaXBwaW5nQWRkcmVzcycpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0QWRkcmVzcy5zaGlwVG9UaGlzQWRkcmVzcycpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2FkZHJlc3NDYXJkLnNlbGVjdGVkJyksXG4gICAgXSkucGlwZShcbiAgICAgIHRhcCgoW2FkZHJlc3Nlcywgc2VsZWN0ZWRdKSA9PlxuICAgICAgICB0aGlzLnNlbGVjdERlZmF1bHRBZGRyZXNzKGFkZHJlc3Nlcywgc2VsZWN0ZWQpXG4gICAgICApLFxuICAgICAgbWFwKChbYWRkcmVzc2VzLCBzZWxlY3RlZCwgdGV4dERlZmF1bHQsIHRleHRTaGlwVG8sIHRleHRTZWxlY3RlZF0pID0+XG4gICAgICAgICg8YW55PmFkZHJlc3NlcykubWFwKChhZGRyZXNzKSA9PiAoe1xuICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgY2FyZDogdGhpcy5nZXRDYXJkQ29udGVudChcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgIHRleHREZWZhdWx0LFxuICAgICAgICAgICAgdGV4dFNoaXBUbyxcbiAgICAgICAgICAgIHRleHRTZWxlY3RlZFxuICAgICAgICAgICksXG4gICAgICAgIH0pKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRTdXBwb3J0ZWRBZGRyZXNzZXMoKTogT2JzZXJ2YWJsZTxBZGRyZXNzW10+IHtcbiAgICBpZiAodGhpcy5pc0FjY291bnRQYXltZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dENvc3RDZW50ZXJTZXJ2aWNlLmdldENvc3RDZW50ZXIoKS5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICBzd2l0Y2hNYXAoKHNlbGVjdGVkKSA9PiB7XG4gICAgICAgICAgdGhpcy5kb25lQXV0b1NlbGVjdCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiB0aGlzLnVzZXJDb3N0Q2VudGVyU2VydmljZS5nZXRDb3N0Q2VudGVyQWRkcmVzc2VzKHNlbGVjdGVkKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRBZGRyZXNzZXMoKTtcbiAgfVxuXG4gIHNlbGVjdERlZmF1bHRBZGRyZXNzKGFkZHJlc3NlczogQWRkcmVzc1tdLCBzZWxlY3RlZDogQWRkcmVzcykge1xuICAgIGlmIChcbiAgICAgICF0aGlzLmRvbmVBdXRvU2VsZWN0ICYmXG4gICAgICBhZGRyZXNzZXMgJiZcbiAgICAgIGFkZHJlc3Nlcy5sZW5ndGggJiZcbiAgICAgICghc2VsZWN0ZWQgfHwgT2JqZWN0LmtleXMoc2VsZWN0ZWQpLmxlbmd0aCA9PT0gMClcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLmlzQWNjb3VudFBheW1lbnQpIHtcbiAgICAgICAgaWYgKGFkZHJlc3Nlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdEFkZHJlc3MoYWRkcmVzc2VzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0ZWQgPSBhZGRyZXNzZXMuZmluZCgoYWRkcmVzcykgPT4gYWRkcmVzcy5kZWZhdWx0QWRkcmVzcyk7XG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0QWRkcmVzcyhzZWxlY3RlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZG9uZUF1dG9TZWxlY3QgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMucGF5bWVudFR5cGVTZXJ2aWNlICYmXG4gICAgICB0aGlzLnVzZXJDb3N0Q2VudGVyU2VydmljZSAmJlxuICAgICAgdGhpcy5jaGVja291dENvc3RDZW50ZXJTZXJ2aWNlXG4gICAgKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgICB0aGlzLnBheW1lbnRUeXBlU2VydmljZVxuICAgICAgICAgIC5pc0FjY291bnRQYXltZW50KClcbiAgICAgICAgICAucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKGlzQWNjb3VudCkgPT4gKHRoaXMuaXNBY2NvdW50UGF5bWVudCA9IGlzQWNjb3VudCkpXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc0d1ZXN0Q2hlY2tvdXQgJiYgIXRoaXMuaXNBY2NvdW50UGF5bWVudCkge1xuICAgICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UubG9hZEFkZHJlc3NlcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldENhcmRDb250ZW50KFxuICAgIGFkZHJlc3M6IEFkZHJlc3MsXG4gICAgc2VsZWN0ZWQ6IGFueSxcbiAgICB0ZXh0RGVmYXVsdFNoaXBwaW5nQWRkcmVzczogc3RyaW5nLFxuICAgIHRleHRTaGlwVG9UaGlzQWRkcmVzczogc3RyaW5nLFxuICAgIHRleHRTZWxlY3RlZDogc3RyaW5nXG4gICk6IENhcmQge1xuICAgIGxldCByZWdpb24gPSAnJztcbiAgICBpZiAoYWRkcmVzcy5yZWdpb24gJiYgYWRkcmVzcy5yZWdpb24uaXNvY29kZSkge1xuICAgICAgcmVnaW9uID0gYWRkcmVzcy5yZWdpb24uaXNvY29kZSArICcsICc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBhZGRyZXNzLmRlZmF1bHRBZGRyZXNzID8gdGV4dERlZmF1bHRTaGlwcGluZ0FkZHJlc3MgOiAnJyxcbiAgICAgIHRleHRCb2xkOiBhZGRyZXNzLmZpcnN0TmFtZSArICcgJyArIGFkZHJlc3MubGFzdE5hbWUsXG4gICAgICB0ZXh0OiBbXG4gICAgICAgIGFkZHJlc3MubGluZTEsXG4gICAgICAgIGFkZHJlc3MubGluZTIsXG4gICAgICAgIGFkZHJlc3MudG93biArICcsICcgKyByZWdpb24gKyBhZGRyZXNzLmNvdW50cnkuaXNvY29kZSxcbiAgICAgICAgYWRkcmVzcy5wb3N0YWxDb2RlLFxuICAgICAgICBhZGRyZXNzLnBob25lLFxuICAgICAgXSxcbiAgICAgIGFjdGlvbnM6IFt7IG5hbWU6IHRleHRTaGlwVG9UaGlzQWRkcmVzcywgZXZlbnQ6ICdzZW5kJyB9XSxcbiAgICAgIGhlYWRlcjogc2VsZWN0ZWQgJiYgc2VsZWN0ZWQuaWQgPT09IGFkZHJlc3MuaWQgPyB0ZXh0U2VsZWN0ZWQgOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgc2VsZWN0QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5zZXREZWxpdmVyeUFkZHJlc3MoYWRkcmVzcyk7XG4gIH1cblxuICBhZGRBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLmZvcmNlTG9hZGVyID0gdHJ1ZTtcbiAgICBpZiAoQm9vbGVhbihhZGRyZXNzKSkge1xuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5jcmVhdGVBbmRTZXRBZGRyZXNzKGFkZHJlc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcmNlTG9hZGVyID0gZmFsc2U7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBzaG93TmV3QWRkcmVzc0Zvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyZXNzRm9ybU9wZW5lZCA9IHRydWU7XG4gIH1cblxuICBoaWRlTmV3QWRkcmVzc0Zvcm0oZ29QcmV2aW91czogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyZXNzRm9ybU9wZW5lZCA9IGZhbHNlO1xuICAgIGlmIChnb1ByZXZpb3VzKSB7XG4gICAgICB0aGlzLmJhY2soKTtcbiAgICB9XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5uZXh0KHRoaXMuYWN0aXZhdGVkUm91dGUpO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2UuYmFjayh0aGlzLmFjdGl2YXRlZFJvdXRlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=