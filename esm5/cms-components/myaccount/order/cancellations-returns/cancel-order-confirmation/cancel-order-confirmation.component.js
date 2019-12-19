/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { tap, filter, map } from 'rxjs/operators';
import { OrderDetailsService } from '../../order-details/order-details.service';
import { OrderCancelOrReturnService } from '../cancel-or-return.service';
var CancelOrderConfirmationComponent = /** @class */ (function () {
    function CancelOrderConfirmationComponent(orderDetailsService, cancelOrReturnService) {
        var _this = this;
        this.orderDetailsService = orderDetailsService;
        this.cancelOrReturnService = cancelOrReturnService;
        this.isCancelling$ = this.cancelOrReturnService.isCancelling$;
        this.cancelledEntries$ = this.orderDetailsService.getOrderDetails().pipe(filter((/**
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
            var cancelledEntries = [];
            order.entries.forEach((/**
             * @param {?} entry
             * @return {?}
             */
            function (entry) {
                if (_this.cancelOrReturnService.isEntryCancelledOrReturned(entry)) {
                    cancelledEntries.push(entry);
                }
            }));
            return cancelledEntries;
        })));
    }
    /**
     * @return {?}
     */
    CancelOrderConfirmationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription = this.cancelOrReturnService.isCancelSuccess$.subscribe((/**
         * @param {?} success
         * @return {?}
         */
        function (success) {
            if (success) {
                _this.cancelOrReturnService.cancelSuccess(_this.orderCode);
            }
        }));
    };
    /**
     * @return {?}
     */
    CancelOrderConfirmationComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        this.cancelOrReturnService.cancelOrder(this.orderCode);
    };
    /**
     * @return {?}
     */
    CancelOrderConfirmationComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.cancelOrReturnService.goToOrderCancelOrReturn('orderCancel', this.orderCode);
    };
    /**
     * @return {?}
     */
    CancelOrderConfirmationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    CancelOrderConfirmationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-cancel-order-confirmation',
                    template: "<h4>\n  {{ 'orderDetails.cancellationAndReturn.cancelNote' | cxTranslate }}\n</h4>\n\n<div class=\"cx-nav row\">\n  <div class=\"col-xs-12 col-md-4 col-lg-3\">\n    <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n      {{ 'common.back' | cxTranslate }}\n    </button>\n  </div>\n  <div class=\"col-xs-12 col-md-4 col-lg-3\">\n    <button\n      class=\"btn btn-block btn-primary\"\n      (click)=\"submit()\"\n      [disabled]=\"isCancelling$ | async\"\n    >\n      {{ 'orderDetails.cancellationAndReturn.submit' | cxTranslate }}\n    </button>\n  </div>\n</div>\n\n<ng-container *ngIf=\"cancelledEntries$ | async as cancelledEntries\">\n  <cx-cancel-or-return-items\n    [entries]=\"cancelledEntries\"\n    [cancelOrder]=\"true\"\n    [confirmRequest]=\"true\"\n  >\n  </cx-cancel-or-return-items>\n</ng-container>\n\n<div class=\"cx-nav row\">\n  <div class=\"col-xs-12 col-md-4 col-lg-3\">\n    <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n      {{ 'common.back' | cxTranslate }}\n    </button>\n  </div>\n  <div class=\"col-xs-12 col-md-4 col-lg-3\">\n    <button\n      class=\"btn btn-block btn-primary\"\n      (click)=\"submit()\"\n      [disabled]=\"isCancelling$ | async\"\n    >\n      {{ 'orderDetails.cancellationAndReturn.submit' | cxTranslate }}\n    </button>\n  </div>\n</div>\n\n<h4>\n  {{ 'orderDetails.cancellationAndReturn.note' | cxTranslate }}\n</h4>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CancelOrderConfirmationComponent.ctorParameters = function () { return [
        { type: OrderDetailsService },
        { type: OrderCancelOrReturnService }
    ]; };
    return CancelOrderConfirmationComponent;
}());
export { CancelOrderConfirmationComponent };
if (false) {
    /** @type {?} */
    CancelOrderConfirmationComponent.prototype.orderCode;
    /** @type {?} */
    CancelOrderConfirmationComponent.prototype.isCancelling$;
    /** @type {?} */
    CancelOrderConfirmationComponent.prototype.subscription;
    /** @type {?} */
    CancelOrderConfirmationComponent.prototype.cancelledEntries$;
    /**
     * @type {?}
     * @protected
     */
    CancelOrderConfirmationComponent.prototype.orderDetailsService;
    /**
     * @type {?}
     * @protected
     */
    CancelOrderConfirmationComponent.prototype.cancelOrReturnService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvY2FuY2VsbGF0aW9ucy1yZXR1cm5zL2NhbmNlbC1vcmRlci1jb25maXJtYXRpb24vY2FuY2VsLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEdBR3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXpFO0lBTUUsMENBQ1ksbUJBQXdDLEVBQ3hDLHFCQUFpRDtRQUY3RCxpQkFHSTtRQUZRLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUE0QjtRQUk3RCxrQkFBYSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUM7UUFHekQsc0JBQWlCLEdBRWIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FDakQsTUFBTTs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxFQUN2QyxHQUFHOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUE3QixDQUE2QixFQUFDLEVBQzNDLEdBQUc7Ozs7UUFBQyxVQUFBLEtBQUs7O2dCQUNELGdCQUFnQixHQUFHLEVBQUU7WUFDM0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUN6QixJQUFJLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDaEUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM5QjtZQUNILENBQUMsRUFBQyxDQUFDO1lBQ0gsT0FBTyxnQkFBZ0IsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBcEJDLENBQUM7Ozs7SUFzQkosbURBQVE7OztJQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7O1FBQ3ZFLFVBQUEsT0FBTztZQUNMLElBQUksT0FBTyxFQUFFO2dCQUNYLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzFEO1FBQ0gsQ0FBQyxFQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsaURBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELCtDQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyx1QkFBdUIsQ0FDaEQsYUFBYSxFQUNiLElBQUksQ0FBQyxTQUFTLENBQ2YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxzREFBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7O2dCQXhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsKzRDQUF5RDtvQkFDekQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVBRLG1CQUFtQjtnQkFDbkIsMEJBQTBCOztJQTJEbkMsdUNBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXBEWSxnQ0FBZ0M7OztJQU0zQyxxREFBa0I7O0lBQ2xCLHlEQUF5RDs7SUFDekQsd0RBQTJCOztJQUUzQiw2REFjRTs7Ozs7SUF0QkEsK0RBQWtEOzs7OztJQUNsRCxpRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4uLy4uL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyQ2FuY2VsT3JSZXR1cm5TZXJ2aWNlIH0gZnJvbSAnLi4vY2FuY2VsLW9yLXJldHVybi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FuY2VsLW9yZGVyLWNvbmZpcm1hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYW5jZWwtb3JkZXItY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhbmNlbE9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgb3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2FuY2VsT3JSZXR1cm5TZXJ2aWNlOiBPcmRlckNhbmNlbE9yUmV0dXJuU2VydmljZVxuICApIHt9XG5cbiAgb3JkZXJDb2RlOiBzdHJpbmc7XG4gIGlzQ2FuY2VsbGluZyQgPSB0aGlzLmNhbmNlbE9yUmV0dXJuU2VydmljZS5pc0NhbmNlbGxpbmckO1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjYW5jZWxsZWRFbnRyaWVzJDogT2JzZXJ2YWJsZTxcbiAgICBPcmRlckVudHJ5W11cbiAgPiA9IHRoaXMub3JkZXJEZXRhaWxzU2VydmljZS5nZXRPcmRlckRldGFpbHMoKS5waXBlKFxuICAgIGZpbHRlcihvcmRlciA9PiBCb29sZWFuKG9yZGVyLmVudHJpZXMpKSxcbiAgICB0YXAob3JkZXIgPT4gKHRoaXMub3JkZXJDb2RlID0gb3JkZXIuY29kZSkpLFxuICAgIG1hcChvcmRlciA9PiB7XG4gICAgICBjb25zdCBjYW5jZWxsZWRFbnRyaWVzID0gW107XG4gICAgICBvcmRlci5lbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jYW5jZWxPclJldHVyblNlcnZpY2UuaXNFbnRyeUNhbmNlbGxlZE9yUmV0dXJuZWQoZW50cnkpKSB7XG4gICAgICAgICAgY2FuY2VsbGVkRW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2FuY2VsbGVkRW50cmllcztcbiAgICB9KVxuICApO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jYW5jZWxPclJldHVyblNlcnZpY2UuaXNDYW5jZWxTdWNjZXNzJC5zdWJzY3JpYmUoXG4gICAgICBzdWNjZXNzID0+IHtcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICB0aGlzLmNhbmNlbE9yUmV0dXJuU2VydmljZS5jYW5jZWxTdWNjZXNzKHRoaXMub3JkZXJDb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBzdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxPclJldHVyblNlcnZpY2UuY2FuY2VsT3JkZXIodGhpcy5vcmRlckNvZGUpO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbE9yUmV0dXJuU2VydmljZS5nb1RvT3JkZXJDYW5jZWxPclJldHVybihcbiAgICAgICdvcmRlckNhbmNlbCcsXG4gICAgICB0aGlzLm9yZGVyQ29kZVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=