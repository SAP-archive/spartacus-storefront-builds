/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { tap, filter, map } from 'rxjs/operators';
import { OrderDetailsService } from '../../order-details/order-details.service';
import { OrderCancelOrReturnService } from '../cancel-or-return.service';
var ReturnOrderConfirmationComponent = /** @class */ (function () {
    function ReturnOrderConfirmationComponent(orderDetailsService, cancelOrReturnService) {
        var _this = this;
        this.orderDetailsService = orderDetailsService;
        this.cancelOrReturnService = cancelOrReturnService;
        this.isReturning$ = this.cancelOrReturnService.isReturning$;
        this.returnedEntries$ = this.orderDetailsService.getOrderDetails().pipe(filter((/**
         * @param {?} order
         * @return {?}
         */
        function (order) { return Boolean(order.entries); })), tap((/**
         * @param {?} order
         * @return {?}
         */
        function (order) { return (_this.orderCode = order.code); })), map((/**
         * @param {?} order
         * @return {?}
         */
        function (order) {
            /** @type {?} */
            var returnedEntries = [];
            order.entries.forEach((/**
             * @param {?} entry
             * @return {?}
             */
            function (entry) {
                if (_this.cancelOrReturnService.isEntryCancelledOrReturned(entry)) {
                    returnedEntries.push(entry);
                }
            }));
            return returnedEntries;
        })));
    }
    /**
     * @return {?}
     */
    ReturnOrderConfirmationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.cancelOrReturnService.clearReturnRequest();
        this.subscription = this.cancelOrReturnService.isReturnSuccess$.subscribe((/**
         * @param {?} success
         * @return {?}
         */
        function (success) {
            if (success) {
                _this.cancelOrReturnService.returnSuccess();
            }
        }));
    };
    /**
     * @return {?}
     */
    ReturnOrderConfirmationComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        this.cancelOrReturnService.returnOrder(this.orderCode);
    };
    /**
     * @return {?}
     */
    ReturnOrderConfirmationComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.cancelOrReturnService.goToOrderCancelOrReturn('orderReturn', this.orderCode);
    };
    /**
     * @return {?}
     */
    ReturnOrderConfirmationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ReturnOrderConfirmationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-return-order-confirmation',
                    template: "<h4>\n  {{ 'orderDetails.cancellationAndReturn.returnNote' | cxTranslate }}\n</h4>\n<div class=\"cx-nav row\">\n  <div class=\"col-xs-12 col-md-4 col-lg-3\">\n    <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n      {{ 'common.back' | cxTranslate }}\n    </button>\n  </div>\n  <div class=\"ol-xs-12 col-md-4 col-lg-3\">\n    <button\n      class=\"btn btn-block btn-primary\"\n      (click)=\"submit()\"\n      [disabled]=\"isReturning$ | async\"\n    >\n      {{ 'orderDetails.cancellationAndReturn.submit' | cxTranslate }}\n    </button>\n  </div>\n</div>\n\n<ng-container *ngIf=\"returnedEntries$ | async as returnedEntries\">\n  <cx-cancel-or-return-items\n    [entries]=\"returnedEntries\"\n    [cancelOrder]=\"false\"\n    [confirmRequest]=\"true\"\n  >\n  </cx-cancel-or-return-items>\n</ng-container>\n\n<div class=\"cx-nav row\">\n  <div class=\"col-xs-12 col-md-4 col-lg-3\">\n    <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n      {{ 'common.back' | cxTranslate }}\n    </button>\n  </div>\n  <div class=\"col-xs-12 col-md-4 col-lg-3\">\n    <button\n      class=\"btn btn-block btn-primary\"\n      (click)=\"submit()\"\n      [disabled]=\"isReturning$ | async\"\n    >\n      {{ 'orderDetails.cancellationAndReturn.submit' | cxTranslate }}\n    </button>\n  </div>\n</div>\n\n<h4>\n  {{ 'orderDetails.cancellationAndReturn.note' | cxTranslate }}\n</h4>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ReturnOrderConfirmationComponent.ctorParameters = function () { return [
        { type: OrderDetailsService },
        { type: OrderCancelOrReturnService }
    ]; };
    return ReturnOrderConfirmationComponent;
}());
export { ReturnOrderConfirmationComponent };
if (false) {
    /** @type {?} */
    ReturnOrderConfirmationComponent.prototype.orderCode;
    /** @type {?} */
    ReturnOrderConfirmationComponent.prototype.isReturning$;
    /** @type {?} */
    ReturnOrderConfirmationComponent.prototype.subscription;
    /** @type {?} */
    ReturnOrderConfirmationComponent.prototype.returnedEntries$;
    /**
     * @type {?}
     * @protected
     */
    ReturnOrderConfirmationComponent.prototype.orderDetailsService;
    /**
     * @type {?}
     * @protected
     */
    ReturnOrderConfirmationComponent.prototype.cancelOrReturnService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvY2FuY2VsbGF0aW9ucy1yZXR1cm5zL3JldHVybi1vcmRlci1jb25maXJtYXRpb24vcmV0dXJuLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEdBR3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXpFO0lBTUUsMENBQ1ksbUJBQXdDLEVBQ3hDLHFCQUFpRDtRQUY3RCxpQkFHSTtRQUZRLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUE0QjtRQUk3RCxpQkFBWSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUM7UUFHdkQscUJBQWdCLEdBRVosSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FDakQsTUFBTTs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxFQUN2QyxHQUFHOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUE3QixDQUE2QixFQUFDLEVBQzNDLEdBQUc7Ozs7UUFBQyxVQUFBLEtBQUs7O2dCQUNELGVBQWUsR0FBRyxFQUFFO1lBQzFCLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsS0FBSztnQkFDekIsSUFBSSxLQUFJLENBQUMscUJBQXFCLENBQUMsMEJBQTBCLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ2hFLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzdCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7WUFDSCxPQUFPLGVBQWUsQ0FBQztRQUN6QixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBcEJDLENBQUM7Ozs7SUFzQkosbURBQVE7OztJQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7O1FBQ3ZFLFVBQUEsT0FBTztZQUNMLElBQUksT0FBTyxFQUFFO2dCQUNYLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUM1QztRQUNILENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGlEQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7SUFFRCwrQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsdUJBQXVCLENBQ2hELGFBQWEsRUFDYixJQUFJLENBQUMsU0FBUyxDQUNmLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsc0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOztnQkF6REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLHc0Q0FBeUQ7b0JBQ3pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFQUSxtQkFBbUI7Z0JBQ25CLDBCQUEwQjs7SUE0RG5DLHVDQUFDO0NBQUEsQUExREQsSUEwREM7U0FyRFksZ0NBQWdDOzs7SUFNM0MscURBQWtCOztJQUNsQix3REFBdUQ7O0lBQ3ZELHdEQUEyQjs7SUFFM0IsNERBY0U7Ozs7O0lBdEJBLCtEQUFrRDs7Ozs7SUFDbEQsaUVBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlckNhbmNlbE9yUmV0dXJuU2VydmljZSB9IGZyb20gJy4uL2NhbmNlbC1vci1yZXR1cm4uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXJldHVybi1vcmRlci1jb25maXJtYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV0dXJuLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBSZXR1cm5PcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhbmNlbE9yUmV0dXJuU2VydmljZTogT3JkZXJDYW5jZWxPclJldHVyblNlcnZpY2VcbiAgKSB7fVxuXG4gIG9yZGVyQ29kZTogc3RyaW5nO1xuICBpc1JldHVybmluZyQgPSB0aGlzLmNhbmNlbE9yUmV0dXJuU2VydmljZS5pc1JldHVybmluZyQ7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHJldHVybmVkRW50cmllcyQ6IE9ic2VydmFibGU8XG4gICAgT3JkZXJFbnRyeVtdXG4gID4gPSB0aGlzLm9yZGVyRGV0YWlsc1NlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCkucGlwZShcbiAgICBmaWx0ZXIob3JkZXIgPT4gQm9vbGVhbihvcmRlci5lbnRyaWVzKSksXG4gICAgdGFwKG9yZGVyID0+ICh0aGlzLm9yZGVyQ29kZSA9IG9yZGVyLmNvZGUpKSxcbiAgICBtYXAob3JkZXIgPT4ge1xuICAgICAgY29uc3QgcmV0dXJuZWRFbnRyaWVzID0gW107XG4gICAgICBvcmRlci5lbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jYW5jZWxPclJldHVyblNlcnZpY2UuaXNFbnRyeUNhbmNlbGxlZE9yUmV0dXJuZWQoZW50cnkpKSB7XG4gICAgICAgICAgcmV0dXJuZWRFbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXR1cm5lZEVudHJpZXM7XG4gICAgfSlcbiAgKTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbE9yUmV0dXJuU2VydmljZS5jbGVhclJldHVyblJlcXVlc3QoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuY2FuY2VsT3JSZXR1cm5TZXJ2aWNlLmlzUmV0dXJuU3VjY2VzcyQuc3Vic2NyaWJlKFxuICAgICAgc3VjY2VzcyA9PiB7XG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgdGhpcy5jYW5jZWxPclJldHVyblNlcnZpY2UucmV0dXJuU3VjY2VzcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHN1Ym1pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbE9yUmV0dXJuU2VydmljZS5yZXR1cm5PcmRlcih0aGlzLm9yZGVyQ29kZSk7XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsT3JSZXR1cm5TZXJ2aWNlLmdvVG9PcmRlckNhbmNlbE9yUmV0dXJuKFxuICAgICAgJ29yZGVyUmV0dXJuJyxcbiAgICAgIHRoaXMub3JkZXJDb2RlXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==