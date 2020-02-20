import { __decorate, __read } from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { Address, CheckoutService, DeliveryMode, Order, PaymentDetails, TranslationService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
var OrderConfirmationOverviewComponent = /** @class */ (function () {
    function OrderConfirmationOverviewComponent(checkoutService, translation) {
        this.checkoutService = checkoutService;
        this.translation = translation;
    }
    OrderConfirmationOverviewComponent.prototype.ngOnInit = function () {
        this.order$ = this.checkoutService.getOrderDetails();
    };
    OrderConfirmationOverviewComponent.prototype.ngOnDestroy = function () {
        this.checkoutService.clearCheckoutData();
    };
    OrderConfirmationOverviewComponent.prototype.getAddressCardContent = function (deliveryAddress) {
        return this.translation.translate('addressCard.shipTo').pipe(filter(function (_) { return Boolean(deliveryAddress); }), map(function (textTitle) { return ({
            title: textTitle,
            textBold: deliveryAddress.firstName + " " + deliveryAddress.lastName,
            text: [
                deliveryAddress.line1,
                deliveryAddress.line2,
                deliveryAddress.town + ", " + deliveryAddress.country.isocode + ", " + deliveryAddress.postalCode,
                deliveryAddress.phone,
            ],
        }); }));
    };
    OrderConfirmationOverviewComponent.prototype.getDeliveryModeCardContent = function (deliveryMode) {
        return this.translation.translate('checkoutShipping.shippingMethod').pipe(filter(function (_) { return Boolean(deliveryMode); }), map(function (textTitle) { return ({
            title: textTitle,
            textBold: deliveryMode.name,
            text: [deliveryMode.description],
        }); }));
    };
    OrderConfirmationOverviewComponent.prototype.getBillingAddressCardContent = function (billingAddress) {
        return this.translation.translate('addressCard.billTo').pipe(filter(function (_) { return Boolean(billingAddress); }), map(function (textTitle) { return ({
            title: textTitle,
            textBold: billingAddress.firstName + " " + billingAddress.lastName,
            text: [
                billingAddress.line1,
                billingAddress.line2,
                billingAddress.town + ", " + billingAddress.country.isocode + ", " + billingAddress.postalCode,
                billingAddress.phone,
            ],
        }); }));
    };
    OrderConfirmationOverviewComponent.prototype.getPaymentInfoCardContent = function (payment) {
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: Boolean(payment) ? payment.expiryMonth : '',
                year: Boolean(payment) ? payment.expiryYear : '',
            }),
        ]).pipe(filter(function (_) { return Boolean(payment); }), map(function (_a) {
            var _b = __read(_a, 2), textTitle = _b[0], textExpires = _b[1];
            return ({
                title: textTitle,
                textBold: payment.accountHolderName,
                text: [payment.cardNumber, textExpires],
            });
        }));
    };
    OrderConfirmationOverviewComponent.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: TranslationService }
    ]; };
    OrderConfirmationOverviewComponent = __decorate([
        Component({
            selector: 'cx-order-confirmation-overview',
            template: "<div class=\"cx-order-review-summary\" *ngIf=\"order$ | async as order\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getAddressCardContent(order?.deliveryAddress) | async\"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"\n              getBillingAddressCardContent(order?.paymentInfo?.billingAddress)\n                | async\n            \"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getDeliveryModeCardContent(order?.deliveryMode) | async\"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getPaymentInfoCardContent(order?.paymentInfo) | async\"\n          ></cx-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], OrderConfirmationOverviewComponent);
    return OrderConfirmationOverviewComponent;
}());
export { OrderConfirmationOverviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLW92ZXJ2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi1vdmVydmlldy9vcmRlci1jb25maXJtYXRpb24tb3ZlcnZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsT0FBTyxFQUNQLGVBQWUsRUFDZixZQUFZLEVBQ1osS0FBSyxFQUNMLGNBQWMsRUFDZCxrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRN0M7SUFHRSw0Q0FDWSxlQUFnQyxFQUNsQyxXQUErQjtRQUQ3QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO0lBQ3RDLENBQUM7SUFFSixxREFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRCx3REFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxrRUFBcUIsR0FBckIsVUFBc0IsZUFBd0I7UUFDNUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FDMUQsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLGVB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QUloQyxDQUFDLENBQ0osQ0FBQztJQUNKLENBQUM7O2dCQXRFNEIsZUFBZTtnQkFDckIsa0JBQWtCOztJQUw5QixrQ0FBa0M7UUFMOUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdDQUFnQztZQUMxQyxpc0NBQTJEO1lBQzNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxrQ0FBa0MsQ0EyRTlDO0lBQUQseUNBQUM7Q0FBQSxBQTNFRCxJQTJFQztTQTNFWSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBDaGVja291dFNlcnZpY2UsXG4gIERlbGl2ZXJ5TW9kZSxcbiAgT3JkZXIsXG4gIFBheW1lbnREZXRhaWxzLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItY29uZmlybWF0aW9uLW92ZXJ2aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWNvbmZpcm1hdGlvbi1vdmVydmlldy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNvbmZpcm1hdGlvbk92ZXJ2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBvcmRlciQ6IE9ic2VydmFibGU8T3JkZXI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3JkZXIkID0gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckNoZWNrb3V0RGF0YSgpO1xuICB9XG5cbiAgZ2V0QWRkcmVzc0NhcmRDb250ZW50KGRlbGl2ZXJ5QWRkcmVzczogQWRkcmVzcyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnYWRkcmVzc0NhcmQuc2hpcFRvJykucGlwZShcbiAgICAgIGZpbHRlcihfID0+IEJvb2xlYW4oZGVsaXZlcnlBZGRyZXNzKSksXG4gICAgICBtYXAodGV4dFRpdGxlID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHRCb2xkOiBgJHtkZWxpdmVyeUFkZHJlc3MuZmlyc3ROYW1lfSAke2RlbGl2ZXJ5QWRkcmVzcy5sYXN0TmFtZX1gLFxuICAgICAgICB0ZXh0OiBbXG4gICAgICAgICAgZGVsaXZlcnlBZGRyZXNzLmxpbmUxLFxuICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5saW5lMixcbiAgICAgICAgICBgJHtkZWxpdmVyeUFkZHJlc3MudG93bn0sICR7ZGVsaXZlcnlBZGRyZXNzLmNvdW50cnkuaXNvY29kZX0sICR7ZGVsaXZlcnlBZGRyZXNzLnBvc3RhbENvZGV9YCxcbiAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MucGhvbmUsXG4gICAgICAgIF0sXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgZ2V0RGVsaXZlcnlNb2RlQ2FyZENvbnRlbnQoZGVsaXZlcnlNb2RlOiBEZWxpdmVyeU1vZGUpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0U2hpcHBpbmcuc2hpcHBpbmdNZXRob2QnKS5waXBlKFxuICAgICAgZmlsdGVyKF8gPT4gQm9vbGVhbihkZWxpdmVyeU1vZGUpKSxcbiAgICAgIG1hcCh0ZXh0VGl0bGUgPT4gKHtcbiAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgdGV4dEJvbGQ6IGRlbGl2ZXJ5TW9kZS5uYW1lLFxuICAgICAgICB0ZXh0OiBbZGVsaXZlcnlNb2RlLmRlc2NyaXB0aW9uXSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBnZXRCaWxsaW5nQWRkcmVzc0NhcmRDb250ZW50KGJpbGxpbmdBZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdhZGRyZXNzQ2FyZC5iaWxsVG8nKS5waXBlKFxuICAgICAgZmlsdGVyKF8gPT4gQm9vbGVhbihiaWxsaW5nQWRkcmVzcykpLFxuICAgICAgbWFwKHRleHRUaXRsZSA9PiAoe1xuICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICB0ZXh0Qm9sZDogYCR7YmlsbGluZ0FkZHJlc3MuZmlyc3ROYW1lfSAke2JpbGxpbmdBZGRyZXNzLmxhc3ROYW1lfWAsXG4gICAgICAgIHRleHQ6IFtcbiAgICAgICAgICBiaWxsaW5nQWRkcmVzcy5saW5lMSxcbiAgICAgICAgICBiaWxsaW5nQWRkcmVzcy5saW5lMixcbiAgICAgICAgICBgJHtiaWxsaW5nQWRkcmVzcy50b3dufSwgJHtiaWxsaW5nQWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGV9LCAke2JpbGxpbmdBZGRyZXNzLnBvc3RhbENvZGV9YCxcbiAgICAgICAgICBiaWxsaW5nQWRkcmVzcy5waG9uZSxcbiAgICAgICAgXSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBnZXRQYXltZW50SW5mb0NhcmRDb250ZW50KHBheW1lbnQ6IFBheW1lbnREZXRhaWxzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRGb3JtLnBheW1lbnQnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5leHBpcmVzJywge1xuICAgICAgICBtb250aDogQm9vbGVhbihwYXltZW50KSA/IHBheW1lbnQuZXhwaXJ5TW9udGggOiAnJyxcbiAgICAgICAgeWVhcjogQm9vbGVhbihwYXltZW50KSA/IHBheW1lbnQuZXhwaXJ5WWVhciA6ICcnLFxuICAgICAgfSksXG4gICAgXSkucGlwZShcbiAgICAgIGZpbHRlcihfID0+IEJvb2xlYW4ocGF5bWVudCkpLFxuICAgICAgbWFwKChbdGV4dFRpdGxlLCB0ZXh0RXhwaXJlc10pID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHRCb2xkOiBwYXltZW50LmFjY291bnRIb2xkZXJOYW1lLFxuICAgICAgICB0ZXh0OiBbcGF5bWVudC5jYXJkTnVtYmVyLCB0ZXh0RXhwaXJlc10sXG4gICAgICB9KSlcbiAgICApO1xuICB9XG59XG4iXX0=