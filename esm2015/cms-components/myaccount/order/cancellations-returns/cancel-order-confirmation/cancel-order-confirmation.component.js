/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { tap, filter, map } from 'rxjs/operators';
import { OrderDetailsService } from '../../order-details/order-details.service';
import { OrderCancelOrReturnService } from '../cancel-or-return.service';
export class CancelOrderConfirmationComponent {
    /**
     * @param {?} orderDetailsService
     * @param {?} cancelOrReturnService
     */
    constructor(orderDetailsService, cancelOrReturnService) {
        this.orderDetailsService = orderDetailsService;
        this.cancelOrReturnService = cancelOrReturnService;
        this.isCancelling$ = this.cancelOrReturnService.isCancelling$;
        this.cancelledEntries$ = this.orderDetailsService.getOrderDetails().pipe(filter((/**
         * @param {?} order
         * @return {?}
         */
        order => Boolean(order.entries))), tap((/**
         * @param {?} order
         * @return {?}
         */
        order => (this.orderCode = order.code))), map((/**
         * @param {?} order
         * @return {?}
         */
        order => {
            /** @type {?} */
            const cancelledEntries = [];
            order.entries.forEach((/**
             * @param {?} entry
             * @return {?}
             */
            entry => {
                if (this.cancelOrReturnService.isEntryCancelledOrReturned(entry)) {
                    cancelledEntries.push(entry);
                }
            }));
            return cancelledEntries;
        })));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription = this.cancelOrReturnService.isCancelSuccess$.subscribe((/**
         * @param {?} success
         * @return {?}
         */
        success => {
            if (success) {
                this.cancelOrReturnService.cancelSuccess(this.orderCode);
            }
        }));
    }
    /**
     * @return {?}
     */
    submit() {
        this.cancelOrReturnService.cancelOrder(this.orderCode);
    }
    /**
     * @return {?}
     */
    back() {
        this.cancelOrReturnService.goToOrderCancelOrReturn('orderCancel', this.orderCode);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
CancelOrderConfirmationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cancel-order-confirmation',
                template: "<h4>\n  {{ 'orderDetails.cancellationAndReturn.cancelNote' | cxTranslate }}\n</h4>\n\n<div class=\"cx-nav row\">\n  <div class=\"col-xs-12 col-md-4 col-lg-3\">\n    <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n      {{ 'common.back' | cxTranslate }}\n    </button>\n  </div>\n  <div class=\"col-xs-12 col-md-4 col-lg-3\">\n    <button\n      class=\"btn btn-block btn-primary\"\n      (click)=\"submit()\"\n      [disabled]=\"isCancelling$ | async\"\n    >\n      {{ 'orderDetails.cancellationAndReturn.submit' | cxTranslate }}\n    </button>\n  </div>\n</div>\n\n<ng-container *ngIf=\"cancelledEntries$ | async as cancelledEntries\">\n  <cx-cancel-or-return-items\n    [entries]=\"cancelledEntries\"\n    [cancelOrder]=\"true\"\n    [confirmRequest]=\"true\"\n  >\n  </cx-cancel-or-return-items>\n</ng-container>\n\n<div class=\"cx-nav row\">\n  <div class=\"col-xs-12 col-md-4 col-lg-3\">\n    <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n      {{ 'common.back' | cxTranslate }}\n    </button>\n  </div>\n  <div class=\"col-xs-12 col-md-4 col-lg-3\">\n    <button\n      class=\"btn btn-block btn-primary\"\n      (click)=\"submit()\"\n      [disabled]=\"isCancelling$ | async\"\n    >\n      {{ 'orderDetails.cancellationAndReturn.submit' | cxTranslate }}\n    </button>\n  </div>\n</div>\n\n<h4>\n  {{ 'orderDetails.cancellationAndReturn.note' | cxTranslate }}\n</h4>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CancelOrderConfirmationComponent.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: OrderCancelOrReturnService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvY2FuY2VsbGF0aW9ucy1yZXR1cm5zL2NhbmNlbC1vcmRlci1jb25maXJtYXRpb24vY2FuY2VsLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEdBR3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBT3pFLE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7O0lBQzNDLFlBQ1ksbUJBQXdDLEVBQ3hDLHFCQUFpRDtRQURqRCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBNEI7UUFJN0Qsa0JBQWEsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDO1FBR3pELHNCQUFpQixHQUViLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQ2pELE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFDdkMsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUMzQyxHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7O2tCQUNKLGdCQUFnQixHQUFHLEVBQUU7WUFDM0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLDBCQUEwQixDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNoRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzlCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7WUFDSCxPQUFPLGdCQUFnQixDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUNILENBQUM7SUFwQkMsQ0FBQzs7OztJQXNCSixRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsU0FBUzs7OztRQUN2RSxPQUFPLENBQUMsRUFBRTtZQUNSLElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzFEO1FBQ0gsQ0FBQyxFQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixDQUNoRCxhQUFhLEVBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FDZixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7OztZQXhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsKzRDQUF5RDtnQkFDekQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFQUSxtQkFBbUI7WUFDbkIsMEJBQTBCOzs7O0lBYWpDLHFEQUFrQjs7SUFDbEIseURBQXlEOztJQUN6RCx3REFBMkI7O0lBRTNCLDZEQWNFOzs7OztJQXRCQSwrREFBa0Q7Ozs7O0lBQ2xELGlFQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJDYW5jZWxPclJldHVyblNlcnZpY2UgfSBmcm9tICcuLi9jYW5jZWwtb3ItcmV0dXJuLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYW5jZWwtb3JkZXItY29uZmlybWF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbmNlbC1vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FuY2VsT3JkZXJDb25maXJtYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYW5jZWxPclJldHVyblNlcnZpY2U6IE9yZGVyQ2FuY2VsT3JSZXR1cm5TZXJ2aWNlXG4gICkge31cblxuICBvcmRlckNvZGU6IHN0cmluZztcbiAgaXNDYW5jZWxsaW5nJCA9IHRoaXMuY2FuY2VsT3JSZXR1cm5TZXJ2aWNlLmlzQ2FuY2VsbGluZyQ7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNhbmNlbGxlZEVudHJpZXMkOiBPYnNlcnZhYmxlPFxuICAgIE9yZGVyRW50cnlbXVxuICA+ID0gdGhpcy5vcmRlckRldGFpbHNTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpLnBpcGUoXG4gICAgZmlsdGVyKG9yZGVyID0+IEJvb2xlYW4ob3JkZXIuZW50cmllcykpLFxuICAgIHRhcChvcmRlciA9PiAodGhpcy5vcmRlckNvZGUgPSBvcmRlci5jb2RlKSksXG4gICAgbWFwKG9yZGVyID0+IHtcbiAgICAgIGNvbnN0IGNhbmNlbGxlZEVudHJpZXMgPSBbXTtcbiAgICAgIG9yZGVyLmVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNhbmNlbE9yUmV0dXJuU2VydmljZS5pc0VudHJ5Q2FuY2VsbGVkT3JSZXR1cm5lZChlbnRyeSkpIHtcbiAgICAgICAgICBjYW5jZWxsZWRFbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjYW5jZWxsZWRFbnRyaWVzO1xuICAgIH0pXG4gICk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmNhbmNlbE9yUmV0dXJuU2VydmljZS5pc0NhbmNlbFN1Y2Nlc3MkLnN1YnNjcmliZShcbiAgICAgIHN1Y2Nlc3MgPT4ge1xuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgIHRoaXMuY2FuY2VsT3JSZXR1cm5TZXJ2aWNlLmNhbmNlbFN1Y2Nlc3ModGhpcy5vcmRlckNvZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHN1Ym1pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbE9yUmV0dXJuU2VydmljZS5jYW5jZWxPcmRlcih0aGlzLm9yZGVyQ29kZSk7XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsT3JSZXR1cm5TZXJ2aWNlLmdvVG9PcmRlckNhbmNlbE9yUmV0dXJuKFxuICAgICAgJ29yZGVyQ2FuY2VsJyxcbiAgICAgIHRoaXMub3JkZXJDb2RlXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==