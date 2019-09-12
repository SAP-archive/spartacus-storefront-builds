/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { CheckoutService, TranslationService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
var OrderConfirmationOverviewComponent = /** @class */ (function () {
    function OrderConfirmationOverviewComponent(checkoutService, translation) {
        this.checkoutService = checkoutService;
        this.translation = translation;
    }
    /**
     * @return {?}
     */
    OrderConfirmationOverviewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.order$ = this.checkoutService.getOrderDetails();
    };
    /**
     * @return {?}
     */
    OrderConfirmationOverviewComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.checkoutService.clearCheckoutData();
    };
    /**
     * @param {?} deliveryAddress
     * @return {?}
     */
    OrderConfirmationOverviewComponent.prototype.getAddressCardContent = /**
     * @param {?} deliveryAddress
     * @return {?}
     */
    function (deliveryAddress) {
        return this.translation.translate('addressCard.shipTo').pipe(map((/**
         * @param {?} textTitle
         * @return {?}
         */
        function (textTitle) { return ({
            title: textTitle,
            textBold: deliveryAddress.firstName + " " + deliveryAddress.lastName,
            text: [
                deliveryAddress.line1,
                deliveryAddress.line2,
                deliveryAddress.town + ", " + deliveryAddress.country.isocode + ", " + deliveryAddress.postalCode,
                deliveryAddress.phone,
            ],
        }); })));
    };
    /**
     * @param {?} deliveryMode
     * @return {?}
     */
    OrderConfirmationOverviewComponent.prototype.getDeliveryModeCardContent = /**
     * @param {?} deliveryMode
     * @return {?}
     */
    function (deliveryMode) {
        return this.translation.translate('checkoutShipping.shippingMethod').pipe(map((/**
         * @param {?} textTitle
         * @return {?}
         */
        function (textTitle) { return ({
            title: textTitle,
            textBold: deliveryMode.name,
            text: [deliveryMode.description],
        }); })));
    };
    /**
     * @param {?} billingAddress
     * @return {?}
     */
    OrderConfirmationOverviewComponent.prototype.getBillingAddressCardContent = /**
     * @param {?} billingAddress
     * @return {?}
     */
    function (billingAddress) {
        return this.translation.translate('addressCard.billTo').pipe(map((/**
         * @param {?} textTitle
         * @return {?}
         */
        function (textTitle) { return ({
            title: textTitle,
            textBold: billingAddress.firstName + " " + billingAddress.lastName,
            text: [
                billingAddress.line1,
                billingAddress.line2,
                billingAddress.town + ", " + billingAddress.country.isocode + ", " + billingAddress.postalCode,
                billingAddress.phone,
            ],
        }); })));
    };
    /**
     * @param {?} payment
     * @return {?}
     */
    OrderConfirmationOverviewComponent.prototype.getPaymentInfoCardContent = /**
     * @param {?} payment
     * @return {?}
     */
    function (payment) {
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: payment.expiryMonth,
                year: payment.expiryYear,
            }),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), textTitle = _b[0], textExpires = _b[1];
            return ({
                title: textTitle,
                textBold: payment.accountHolderName,
                text: [payment.cardNumber, textExpires],
            });
        })));
    };
    OrderConfirmationOverviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-confirmation-overview',
                    template: "<div class=\"cx-order-review-summary\" *ngIf=\"order$ | async as order\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getAddressCardContent(order.deliveryAddress) | async\"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"\n              getBillingAddressCardContent(order.paymentInfo.billingAddress)\n                | async\n            \"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getDeliveryModeCardContent(order.deliveryMode) | async\"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getPaymentInfoCardContent(order.paymentInfo) | async\"\n          ></cx-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    OrderConfirmationOverviewComponent.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: TranslationService }
    ]; };
    return OrderConfirmationOverviewComponent;
}());
export { OrderConfirmationOverviewComponent };
if (false) {
    /** @type {?} */
    OrderConfirmationOverviewComponent.prototype.order$;
    /**
     * @type {?}
     * @protected
     */
    OrderConfirmationOverviewComponent.prototype.checkoutService;
    /**
     * @type {?}
     * @private
     */
    OrderConfirmationOverviewComponent.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLW92ZXJ2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi1vdmVydmlldy9vcmRlci1jb25maXJtYXRpb24tb3ZlcnZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLGVBQWUsRUFJZixrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWpELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQztJQVFFLDRDQUNZLGVBQWdDLEVBQ2xDLFdBQStCO1FBRDdCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7SUFDdEMsQ0FBQzs7OztJQUVKLHFEQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsd0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsa0VBQXFCOzs7O0lBQXJCLFVBQXNCLGVBQXdCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQzFELEdBQUc7Ozs7UUFBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLENBQUM7WUFDaEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFLLGVBQWUsQ0FBQyxTQUFTLFNBQUksZUFBZSxDQUFDLFFBQVU7WUFDcEUsSUFBSSxFQUFFO2dCQUNKLGVBQWUsQ0FBQyxLQUFLO2dCQUNyQixlQUFlLENBQUMsS0FBSztnQkFDbEIsZUFBZSxDQUFDLElBQUksVUFBSyxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sVUFBSyxlQUFlLENBQUMsVUFBWTtnQkFDNUYsZUFBZSxDQUFDLEtBQUs7YUFDdEI7U0FDRixDQUFDLEVBVGUsQ0FTZixFQUFDLENBQ0osQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsdUVBQTBCOzs7O0lBQTFCLFVBQTJCLFlBQTBCO1FBQ25ELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxJQUFJLENBQ3ZFLEdBQUc7Ozs7UUFBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLENBQUM7WUFDaEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFFLFlBQVksQ0FBQyxJQUFJO1lBQzNCLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7U0FDakMsQ0FBQyxFQUplLENBSWYsRUFBQyxDQUNKLENBQUM7SUFDSixDQUFDOzs7OztJQUVELHlFQUE0Qjs7OztJQUE1QixVQUE2QixjQUF1QjtRQUNsRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUMxRCxHQUFHOzs7O1FBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBSyxjQUFjLENBQUMsU0FBUyxTQUFJLGNBQWMsQ0FBQyxRQUFVO1lBQ2xFLElBQUksRUFBRTtnQkFDSixjQUFjLENBQUMsS0FBSztnQkFDcEIsY0FBYyxDQUFDLEtBQUs7Z0JBQ2pCLGNBQWMsQ0FBQyxJQUFJLFVBQUssY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLFVBQUssY0FBYyxDQUFDLFVBQVk7Z0JBQ3pGLGNBQWMsQ0FBQyxLQUFLO2FBQ3JCO1NBQ0YsQ0FBQyxFQVRlLENBU2YsRUFBQyxDQUNKLENBQUM7SUFDSixDQUFDOzs7OztJQUVELHNFQUF5Qjs7OztJQUF6QixVQUEwQixPQUF1QjtRQUMvQyxPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQztZQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRTtnQkFDaEQsS0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXO2dCQUMxQixJQUFJLEVBQUUsT0FBTyxDQUFDLFVBQVU7YUFDekIsQ0FBQztTQUNILENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztRQUFDLFVBQUMsRUFBd0I7Z0JBQXhCLDBCQUF3QixFQUF2QixpQkFBUyxFQUFFLG1CQUFXO1lBQU0sT0FBQSxDQUFDO2dCQUNqQyxLQUFLLEVBQUUsU0FBUztnQkFDaEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUI7Z0JBQ25DLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDO2FBQ3hDLENBQUM7UUFKZ0MsQ0FJaEMsRUFBQyxDQUNKLENBQUM7SUFDSixDQUFDOztnQkEzRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLDRyQ0FBMkQ7b0JBQzNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFkQyxlQUFlO2dCQUlmLGtCQUFrQjs7SUFrRnBCLHlDQUFDO0NBQUEsQUE1RUQsSUE0RUM7U0F2RVksa0NBQWtDOzs7SUFDN0Msb0RBQTBCOzs7OztJQUd4Qiw2REFBMEM7Ozs7O0lBQzFDLHlEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIENoZWNrb3V0U2VydmljZSxcbiAgRGVsaXZlcnlNb2RlLFxuICBPcmRlcixcbiAgUGF5bWVudERldGFpbHMsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItY29uZmlybWF0aW9uLW92ZXJ2aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWNvbmZpcm1hdGlvbi1vdmVydmlldy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNvbmZpcm1hdGlvbk92ZXJ2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBvcmRlciQ6IE9ic2VydmFibGU8T3JkZXI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3JkZXIkID0gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckNoZWNrb3V0RGF0YSgpO1xuICB9XG5cbiAgZ2V0QWRkcmVzc0NhcmRDb250ZW50KGRlbGl2ZXJ5QWRkcmVzczogQWRkcmVzcyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnYWRkcmVzc0NhcmQuc2hpcFRvJykucGlwZShcbiAgICAgIG1hcCh0ZXh0VGl0bGUgPT4gKHtcbiAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgdGV4dEJvbGQ6IGAke2RlbGl2ZXJ5QWRkcmVzcy5maXJzdE5hbWV9ICR7ZGVsaXZlcnlBZGRyZXNzLmxhc3ROYW1lfWAsXG4gICAgICAgIHRleHQ6IFtcbiAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MubGluZTEsXG4gICAgICAgICAgZGVsaXZlcnlBZGRyZXNzLmxpbmUyLFxuICAgICAgICAgIGAke2RlbGl2ZXJ5QWRkcmVzcy50b3dufSwgJHtkZWxpdmVyeUFkZHJlc3MuY291bnRyeS5pc29jb2RlfSwgJHtkZWxpdmVyeUFkZHJlc3MucG9zdGFsQ29kZX1gLFxuICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5waG9uZSxcbiAgICAgICAgXSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBnZXREZWxpdmVyeU1vZGVDYXJkQ29udGVudChkZWxpdmVyeU1vZGU6IERlbGl2ZXJ5TW9kZSk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRTaGlwcGluZy5zaGlwcGluZ01ldGhvZCcpLnBpcGUoXG4gICAgICBtYXAodGV4dFRpdGxlID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHRCb2xkOiBkZWxpdmVyeU1vZGUubmFtZSxcbiAgICAgICAgdGV4dDogW2RlbGl2ZXJ5TW9kZS5kZXNjcmlwdGlvbl0sXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgZ2V0QmlsbGluZ0FkZHJlc3NDYXJkQ29udGVudChiaWxsaW5nQWRkcmVzczogQWRkcmVzcyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnYWRkcmVzc0NhcmQuYmlsbFRvJykucGlwZShcbiAgICAgIG1hcCh0ZXh0VGl0bGUgPT4gKHtcbiAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgdGV4dEJvbGQ6IGAke2JpbGxpbmdBZGRyZXNzLmZpcnN0TmFtZX0gJHtiaWxsaW5nQWRkcmVzcy5sYXN0TmFtZX1gLFxuICAgICAgICB0ZXh0OiBbXG4gICAgICAgICAgYmlsbGluZ0FkZHJlc3MubGluZTEsXG4gICAgICAgICAgYmlsbGluZ0FkZHJlc3MubGluZTIsXG4gICAgICAgICAgYCR7YmlsbGluZ0FkZHJlc3MudG93bn0sICR7YmlsbGluZ0FkZHJlc3MuY291bnRyeS5pc29jb2RlfSwgJHtiaWxsaW5nQWRkcmVzcy5wb3N0YWxDb2RlfWAsXG4gICAgICAgICAgYmlsbGluZ0FkZHJlc3MucGhvbmUsXG4gICAgICAgIF0sXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgZ2V0UGF5bWVudEluZm9DYXJkQ29udGVudChwYXltZW50OiBQYXltZW50RGV0YWlscyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Rm9ybS5wYXltZW50JyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZXhwaXJlcycsIHtcbiAgICAgICAgbW9udGg6IHBheW1lbnQuZXhwaXJ5TW9udGgsXG4gICAgICAgIHllYXI6IHBheW1lbnQuZXhwaXJ5WWVhcixcbiAgICAgIH0pLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGUsIHRleHRFeHBpcmVzXSkgPT4gKHtcbiAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgdGV4dEJvbGQ6IHBheW1lbnQuYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICAgIHRleHQ6IFtwYXltZW50LmNhcmROdW1iZXIsIHRleHRFeHBpcmVzXSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==