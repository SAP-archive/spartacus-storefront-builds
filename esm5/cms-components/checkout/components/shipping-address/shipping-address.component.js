import { __decorate, __read } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartService, Address, B2BAddress, CheckoutCostCenterService, CheckoutDeliveryService, PaymentTypeService, TranslationService, UserAddressService, UserCostCenterService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, map, switchMap, take, tap, } from 'rxjs/operators';
import { CheckoutStepService } from '../../services/checkout-step.service';
var ShippingAddressComponent = /** @class */ (function () {
    function ShippingAddressComponent(userAddressService, checkoutDeliveryService, activatedRoute, translation, activeCartService, checkoutStepService, paymentTypeService, userCostCenterService, checkoutCostCenterService) {
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
    Object.defineProperty(ShippingAddressComponent.prototype, "isGuestCheckout", {
        get: function () {
            return this.activeCartService.isGuestCart();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingAddressComponent.prototype, "backBtnText", {
        get: function () {
            return this.checkoutStepService.getBackBntText(this.activatedRoute);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingAddressComponent.prototype, "isLoading$", {
        get: function () {
            return this.userAddressService.getAddressesLoading();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingAddressComponent.prototype, "selectedAddress$", {
        get: function () {
            var _this = this;
            return this.checkoutDeliveryService.getDeliveryAddress().pipe(tap(function (address) {
                if (address &&
                    (_this.selectedAddress === undefined ||
                        _this.selectedAddress.id !== address.id)) {
                    _this.selectedAddress = address;
                    if (_this.forceLoader) {
                        _this.next();
                    }
                }
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingAddressComponent.prototype, "cards$", {
        get: function () {
            var _this = this;
            return combineLatest([
                this.getSupportedAddresses(),
                this.selectedAddress$,
                this.translation.translate('checkoutAddress.defaultShippingAddress'),
                this.translation.translate('checkoutAddress.shipToThisAddress'),
                this.translation.translate('addressCard.selected'),
            ]).pipe(tap(function (_a) {
                var _b = __read(_a, 2), addresses = _b[0], selected = _b[1];
                return _this.selectDefaultAddress(addresses, selected);
            }), map(function (_a) {
                var _b = __read(_a, 5), addresses = _b[0], selected = _b[1], textDefault = _b[2], textShipTo = _b[3], textSelected = _b[4];
                return addresses.map(function (address) { return ({
                    address: address,
                    card: _this.getCardContent(address, selected, textDefault, textShipTo, textSelected),
                }); });
            }));
        },
        enumerable: true,
        configurable: true
    });
    ShippingAddressComponent.prototype.getSupportedAddresses = function () {
        var _this = this;
        if (this.isAccountPayment) {
            return this.checkoutCostCenterService.getCostCenter().pipe(distinctUntilChanged(), switchMap(function (selected) {
                _this.doneAutoSelect = false;
                return _this.userCostCenterService.getCostCenterAddresses(selected);
            }));
        }
        else {
            return this.userAddressService.getAddresses();
        }
    };
    ShippingAddressComponent.prototype.selectDefaultAddress = function (addresses, selected) {
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
                selected = addresses.find(function (address) { return address.defaultAddress; });
                if (selected) {
                    this.selectAddress(selected);
                }
            }
            this.doneAutoSelect = true;
        }
    };
    ShippingAddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.paymentTypeService &&
            this.userCostCenterService &&
            this.checkoutCostCenterService) {
            this.paymentTypeService
                .isAccountPayment()
                .pipe(take(1))
                .subscribe(function (isAccount) { return (_this.isAccountPayment = isAccount); });
        }
        if (!this.isGuestCheckout && !this.isAccountPayment) {
            this.userAddressService.loadAddresses();
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
        this.forceLoader = true;
        this.checkoutDeliveryService.createAndSetAddress(address);
    };
    ShippingAddressComponent.prototype.showNewAddressForm = function () {
        this.addressFormOpened = true;
    };
    ShippingAddressComponent.prototype.hideNewAddressForm = function (goPrevious) {
        if (goPrevious === void 0) { goPrevious = false; }
        this.addressFormOpened = false;
        if (goPrevious) {
            this.back();
        }
    };
    ShippingAddressComponent.prototype.next = function () {
        this.checkoutStepService.next(this.activatedRoute);
    };
    ShippingAddressComponent.prototype.back = function () {
        this.checkoutStepService.back(this.activatedRoute);
    };
    ShippingAddressComponent.ctorParameters = function () { return [
        { type: UserAddressService },
        { type: CheckoutDeliveryService },
        { type: ActivatedRoute },
        { type: TranslationService },
        { type: ActiveCartService },
        { type: CheckoutStepService },
        { type: PaymentTypeService },
        { type: UserCostCenterService },
        { type: CheckoutCostCenterService }
    ]; };
    ShippingAddressComponent = __decorate([
        Component({
            selector: 'cx-shipping-address',
            template: "<ng-container *ngIf=\"cards$ | async as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutAddress.shippingAddress' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!forceLoader && !(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        isAccountPayment || (cards?.length && !addressFormOpened);\n        else newAddressForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'checkoutAddress.selectYourShippingAddress' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\" *ngIf=\"!isAccountPayment\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewAddressForm()\"\n          >\n            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-shipping-address-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div\n            class=\"cx-shipping-address-card-inner\"\n            (click)=\"selectAddress(card.address)\"\n          >\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.card\"\n              (sendCard)=\"selectAddress(card.address)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"cx-btn btn btn-block btn-action\" (click)=\"back()\">\n            {{ backBtnText | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-primary\"\n            [disabled]=\"!selectedAddress?.id\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newAddressForm>\n      <cx-address-form\n        *ngIf=\"cards.length; else initialAddressForm\"\n        [showTitleCode]=\"true\"\n        (backToAddress)=\"hideNewAddressForm(false)\"\n        (submitAddress)=\"addAddress($event)\"\n      ></cx-address-form>\n      <ng-template #initialAddressForm>\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          [setAsDefaultField]=\"!isGuestCheckout\"\n          [addressData]=\"selectedAddress\"\n          cancelBtnLabel=\"{{ backBtnText | cxTranslate }}\"\n          (backToAddress)=\"hideNewAddressForm(true)\"\n          (submitAddress)=\"addAddress($event)\"\n        ></cx-address-form>\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ShippingAddressComponent);
    return ShippingAddressComponent;
}());
export { ShippingAddressComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsT0FBTyxFQUNQLFVBQVUsRUFDVix5QkFBeUIsRUFDekIsdUJBQXVCLEVBQ3ZCLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLHFCQUFxQixHQUN0QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixHQUFHLEVBQ0gsU0FBUyxFQUNULElBQUksRUFDSixHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQVkzRTtJQU9FLGtDQUNZLGtCQUFzQyxFQUN0Qyx1QkFBZ0QsRUFDaEQsY0FBOEIsRUFDOUIsV0FBK0IsRUFDL0IsaUJBQW9DLEVBQ3BDLG1CQUF3QyxFQUN4QyxrQkFBdUMsRUFDdkMscUJBQTZDLEVBQzdDLHlCQUFxRDtRQVJyRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENB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UUFMcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixpNkZBQWdEO1lBQ2hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyx3QkFBd0IsQ0FvTHBDO0lBQUQsK0JBQUM7Q0FBQSxBQXBMRCxJQW9MQztTQXBMWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICBBZGRyZXNzLFxuICBCMkJBZGRyZXNzLFxuICBDaGVja291dENvc3RDZW50ZXJTZXJ2aWNlLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgUGF5bWVudFR5cGVTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFVzZXJBZGRyZXNzU2VydmljZSxcbiAgVXNlckNvc3RDZW50ZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIG1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC1zdGVwLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRXaXRoQWRkcmVzcyB7XG4gIGNhcmQ6IENhcmQ7XG4gIGFkZHJlc3M6IEFkZHJlc3M7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNoaXBwaW5nLWFkZHJlc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTaGlwcGluZ0FkZHJlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhZGRyZXNzRm9ybU9wZW5lZCA9IGZhbHNlO1xuICBmb3JjZUxvYWRlciA9IGZhbHNlOyAvLyB0aGlzIGhlbHBzIHdpdGggc21vb3RoZXIgc3RlcHMgdHJhbnNpdGlvblxuICBzZWxlY3RlZEFkZHJlc3M6IEFkZHJlc3M7XG4gIGRvbmVBdXRvU2VsZWN0ID0gZmFsc2U7XG4gIGlzQWNjb3VudFBheW1lbnQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RlcFNlcnZpY2U6IENoZWNrb3V0U3RlcFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHBheW1lbnRUeXBlU2VydmljZT86IFBheW1lbnRUeXBlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlckNvc3RDZW50ZXJTZXJ2aWNlPzogVXNlckNvc3RDZW50ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dENvc3RDZW50ZXJTZXJ2aWNlPzogQ2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZVxuICApIHt9XG5cbiAgZ2V0IGlzR3Vlc3RDaGVja291dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5pc0d1ZXN0Q2FydCgpO1xuICB9XG5cbiAgZ2V0IGJhY2tCdG5UZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5nZXRCYWNrQm50VGV4dCh0aGlzLmFjdGl2YXRlZFJvdXRlKTtcbiAgfVxuXG4gIGdldCBpc0xvYWRpbmckKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRBZGRyZXNzZXNMb2FkaW5nKCk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRBZGRyZXNzJCgpOiBPYnNlcnZhYmxlPEFkZHJlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXREZWxpdmVyeUFkZHJlc3MoKS5waXBlKFxuICAgICAgdGFwKChhZGRyZXNzKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBhZGRyZXNzICYmXG4gICAgICAgICAgKHRoaXMuc2VsZWN0ZWRBZGRyZXNzID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzLmlkICE9PSBhZGRyZXNzLmlkKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgICAgICAgaWYgKHRoaXMuZm9yY2VMb2FkZXIpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0IGNhcmRzJCgpOiBPYnNlcnZhYmxlPENhcmRXaXRoQWRkcmVzc1tdPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5nZXRTdXBwb3J0ZWRBZGRyZXNzZXMoKSxcbiAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzJCxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dEFkZHJlc3MuZGVmYXVsdFNoaXBwaW5nQWRkcmVzcycpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0QWRkcmVzcy5zaGlwVG9UaGlzQWRkcmVzcycpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2FkZHJlc3NDYXJkLnNlbGVjdGVkJyksXG4gICAgXSkucGlwZShcbiAgICAgIHRhcCgoW2FkZHJlc3Nlcywgc2VsZWN0ZWRdKSA9PlxuICAgICAgICB0aGlzLnNlbGVjdERlZmF1bHRBZGRyZXNzKGFkZHJlc3Nlcywgc2VsZWN0ZWQpXG4gICAgICApLFxuICAgICAgbWFwKChbYWRkcmVzc2VzLCBzZWxlY3RlZCwgdGV4dERlZmF1bHQsIHRleHRTaGlwVG8sIHRleHRTZWxlY3RlZF0pID0+XG4gICAgICAgICg8YW55PmFkZHJlc3NlcykubWFwKChhZGRyZXNzKSA9PiAoe1xuICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgY2FyZDogdGhpcy5nZXRDYXJkQ29udGVudChcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgIHRleHREZWZhdWx0LFxuICAgICAgICAgICAgdGV4dFNoaXBUbyxcbiAgICAgICAgICAgIHRleHRTZWxlY3RlZFxuICAgICAgICAgICksXG4gICAgICAgIH0pKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRTdXBwb3J0ZWRBZGRyZXNzZXMoKTogT2JzZXJ2YWJsZTxBZGRyZXNzW10gfCBCMkJBZGRyZXNzW10+IHtcbiAgICBpZiAodGhpcy5pc0FjY291bnRQYXltZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dENvc3RDZW50ZXJTZXJ2aWNlLmdldENvc3RDZW50ZXIoKS5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICBzd2l0Y2hNYXAoKHNlbGVjdGVkKSA9PiB7XG4gICAgICAgICAgdGhpcy5kb25lQXV0b1NlbGVjdCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiB0aGlzLnVzZXJDb3N0Q2VudGVyU2VydmljZS5nZXRDb3N0Q2VudGVyQWRkcmVzc2VzKHNlbGVjdGVkKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRBZGRyZXNzZXMoKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3REZWZhdWx0QWRkcmVzcyhhZGRyZXNzZXM6IEFkZHJlc3NbXSwgc2VsZWN0ZWQ6IEFkZHJlc3MpIHtcbiAgICBpZiAoXG4gICAgICAhdGhpcy5kb25lQXV0b1NlbGVjdCAmJlxuICAgICAgYWRkcmVzc2VzICYmXG4gICAgICBhZGRyZXNzZXMubGVuZ3RoICYmXG4gICAgICAoIXNlbGVjdGVkIHx8IE9iamVjdC5rZXlzKHNlbGVjdGVkKS5sZW5ndGggPT09IDApXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5pc0FjY291bnRQYXltZW50KSB7XG4gICAgICAgIGlmIChhZGRyZXNzZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RBZGRyZXNzKGFkZHJlc3Nlc1swXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdGVkID0gYWRkcmVzc2VzLmZpbmQoKGFkZHJlc3MpID0+IGFkZHJlc3MuZGVmYXVsdEFkZHJlc3MpO1xuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdEFkZHJlc3Moc2VsZWN0ZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmRvbmVBdXRvU2VsZWN0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnBheW1lbnRUeXBlU2VydmljZSAmJlxuICAgICAgdGhpcy51c2VyQ29zdENlbnRlclNlcnZpY2UgJiZcbiAgICAgIHRoaXMuY2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZVxuICAgICkge1xuICAgICAgdGhpcy5wYXltZW50VHlwZVNlcnZpY2VcbiAgICAgICAgLmlzQWNjb3VudFBheW1lbnQoKVxuICAgICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgICAuc3Vic2NyaWJlKChpc0FjY291bnQpID0+ICh0aGlzLmlzQWNjb3VudFBheW1lbnQgPSBpc0FjY291bnQpKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNHdWVzdENoZWNrb3V0ICYmICF0aGlzLmlzQWNjb3VudFBheW1lbnQpIHtcbiAgICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmxvYWRBZGRyZXNzZXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXRDYXJkQ29udGVudChcbiAgICBhZGRyZXNzOiBBZGRyZXNzLFxuICAgIHNlbGVjdGVkOiBhbnksXG4gICAgdGV4dERlZmF1bHRTaGlwcGluZ0FkZHJlc3M6IHN0cmluZyxcbiAgICB0ZXh0U2hpcFRvVGhpc0FkZHJlc3M6IHN0cmluZyxcbiAgICB0ZXh0U2VsZWN0ZWQ6IHN0cmluZ1xuICApOiBDYXJkIHtcbiAgICBsZXQgcmVnaW9uID0gJyc7XG4gICAgaWYgKGFkZHJlc3MucmVnaW9uICYmIGFkZHJlc3MucmVnaW9uLmlzb2NvZGUpIHtcbiAgICAgIHJlZ2lvbiA9IGFkZHJlc3MucmVnaW9uLmlzb2NvZGUgKyAnLCAnO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogYWRkcmVzcy5kZWZhdWx0QWRkcmVzcyA/IHRleHREZWZhdWx0U2hpcHBpbmdBZGRyZXNzIDogJycsXG4gICAgICB0ZXh0Qm9sZDogYWRkcmVzcy5maXJzdE5hbWUgKyAnICcgKyBhZGRyZXNzLmxhc3ROYW1lLFxuICAgICAgdGV4dDogW1xuICAgICAgICBhZGRyZXNzLmxpbmUxLFxuICAgICAgICBhZGRyZXNzLmxpbmUyLFxuICAgICAgICBhZGRyZXNzLnRvd24gKyAnLCAnICsgcmVnaW9uICsgYWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGUsXG4gICAgICAgIGFkZHJlc3MucG9zdGFsQ29kZSxcbiAgICAgICAgYWRkcmVzcy5waG9uZSxcbiAgICAgIF0sXG4gICAgICBhY3Rpb25zOiBbeyBuYW1lOiB0ZXh0U2hpcFRvVGhpc0FkZHJlc3MsIGV2ZW50OiAnc2VuZCcgfV0sXG4gICAgICBoZWFkZXI6IHNlbGVjdGVkICYmIHNlbGVjdGVkLmlkID09PSBhZGRyZXNzLmlkID8gdGV4dFNlbGVjdGVkIDogJycsXG4gICAgfTtcbiAgfVxuXG4gIHNlbGVjdEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2Uuc2V0RGVsaXZlcnlBZGRyZXNzKGFkZHJlc3MpO1xuICB9XG5cbiAgYWRkQWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5mb3JjZUxvYWRlciA9IHRydWU7XG4gICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5jcmVhdGVBbmRTZXRBZGRyZXNzKGFkZHJlc3MpO1xuICB9XG5cbiAgc2hvd05ld0FkZHJlc3NGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkcmVzc0Zvcm1PcGVuZWQgPSB0cnVlO1xuICB9XG5cbiAgaGlkZU5ld0FkZHJlc3NGb3JtKGdvUHJldmlvdXM6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMuYWRkcmVzc0Zvcm1PcGVuZWQgPSBmYWxzZTtcbiAgICBpZiAoZ29QcmV2aW91cykge1xuICAgICAgdGhpcy5iYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2UubmV4dCh0aGlzLmFjdGl2YXRlZFJvdXRlKTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLmJhY2sodGhpcy5hY3RpdmF0ZWRSb3V0ZSk7XG4gIH1cbn1cbiJdfQ==