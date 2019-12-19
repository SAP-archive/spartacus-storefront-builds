/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { tap, filter, map } from 'rxjs/operators';
import { OrderDetailsService } from '../../order-details/order-details.service';
import { OrderCancelOrReturnService } from '../cancel-or-return.service';
export class ReturnOrderConfirmationComponent {
    /**
     * @param {?} orderDetailsService
     * @param {?} cancelOrReturnService
     */
    constructor(orderDetailsService, cancelOrReturnService) {
        this.orderDetailsService = orderDetailsService;
        this.cancelOrReturnService = cancelOrReturnService;
        this.isReturning$ = this.cancelOrReturnService.isReturning$;
        this.returnedEntries$ = this.orderDetailsService.getOrderDetails().pipe(filter((/**
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
            const returnedEntries = [];
            order.entries.forEach((/**
             * @param {?} entry
             * @return {?}
             */
            entry => {
                if (this.cancelOrReturnService.isEntryCancelledOrReturned(entry)) {
                    returnedEntries.push(entry);
                }
            }));
            return returnedEntries;
        })));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cancelOrReturnService.clearReturnRequest();
        this.subscription = this.cancelOrReturnService.isReturnSuccess$.subscribe((/**
         * @param {?} success
         * @return {?}
         */
        success => {
            if (success) {
                this.cancelOrReturnService.returnSuccess();
            }
        }));
    }
    /**
     * @return {?}
     */
    submit() {
        this.cancelOrReturnService.returnOrder(this.orderCode);
    }
    /**
     * @return {?}
     */
    back() {
        this.cancelOrReturnService.goToOrderCancelOrReturn('orderReturn', this.orderCode);
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
ReturnOrderConfirmationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-return-order-confirmation',
                template: "<h4>\n  {{ 'orderDetails.cancellationAndReturn.returnNote' | cxTranslate }}\n</h4>\n<div class=\"cx-nav row\">\n  <div class=\"col-xs-12 col-md-4 col-lg-3\">\n    <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n      {{ 'common.back' | cxTranslate }}\n    </button>\n  </div>\n  <div class=\"ol-xs-12 col-md-4 col-lg-3\">\n    <button\n      class=\"btn btn-block btn-primary\"\n      (click)=\"submit()\"\n      [disabled]=\"isReturning$ | async\"\n    >\n      {{ 'orderDetails.cancellationAndReturn.submit' | cxTranslate }}\n    </button>\n  </div>\n</div>\n\n<ng-container *ngIf=\"returnedEntries$ | async as returnedEntries\">\n  <cx-cancel-or-return-items\n    [entries]=\"returnedEntries\"\n    [cancelOrder]=\"false\"\n    [confirmRequest]=\"true\"\n  >\n  </cx-cancel-or-return-items>\n</ng-container>\n\n<div class=\"cx-nav row\">\n  <div class=\"col-xs-12 col-md-4 col-lg-3\">\n    <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n      {{ 'common.back' | cxTranslate }}\n    </button>\n  </div>\n  <div class=\"col-xs-12 col-md-4 col-lg-3\">\n    <button\n      class=\"btn btn-block btn-primary\"\n      (click)=\"submit()\"\n      [disabled]=\"isReturning$ | async\"\n    >\n      {{ 'orderDetails.cancellationAndReturn.submit' | cxTranslate }}\n    </button>\n  </div>\n</div>\n\n<h4>\n  {{ 'orderDetails.cancellationAndReturn.note' | cxTranslate }}\n</h4>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ReturnOrderConfirmationComponent.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: OrderCancelOrReturnService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvY2FuY2VsbGF0aW9ucy1yZXR1cm5zL3JldHVybi1vcmRlci1jb25maXJtYXRpb24vcmV0dXJuLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEdBR3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBT3pFLE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7O0lBQzNDLFlBQ1ksbUJBQXdDLEVBQ3hDLHFCQUFpRDtRQURqRCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBNEI7UUFJN0QsaUJBQVksR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDO1FBR3ZELHFCQUFnQixHQUVaLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQ2pELE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFDdkMsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUMzQyxHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7O2tCQUNKLGVBQWUsR0FBRyxFQUFFO1lBQzFCLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM1QixJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDaEUsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDN0I7WUFDSCxDQUFDLEVBQUMsQ0FBQztZQUNILE9BQU8sZUFBZSxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUNILENBQUM7SUFwQkMsQ0FBQzs7OztJQXNCSixRQUFRO1FBQ04sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsU0FBUzs7OztRQUN2RSxPQUFPLENBQUMsRUFBRTtZQUNSLElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUM1QztRQUNILENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyx1QkFBdUIsQ0FDaEQsYUFBYSxFQUNiLElBQUksQ0FBQyxTQUFTLENBQ2YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7WUF6REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLHc0Q0FBeUQ7Z0JBQ3pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBUFEsbUJBQW1CO1lBQ25CLDBCQUEwQjs7OztJQWFqQyxxREFBa0I7O0lBQ2xCLHdEQUF1RDs7SUFDdkQsd0RBQTJCOztJQUUzQiw0REFjRTs7Ozs7SUF0QkEsK0RBQWtEOzs7OztJQUNsRCxpRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4uLy4uL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyQ2FuY2VsT3JSZXR1cm5TZXJ2aWNlIH0gZnJvbSAnLi4vY2FuY2VsLW9yLXJldHVybi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcmV0dXJuLW9yZGVyLWNvbmZpcm1hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXR1cm4tb3JkZXItY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFJldHVybk9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgb3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2FuY2VsT3JSZXR1cm5TZXJ2aWNlOiBPcmRlckNhbmNlbE9yUmV0dXJuU2VydmljZVxuICApIHt9XG5cbiAgb3JkZXJDb2RlOiBzdHJpbmc7XG4gIGlzUmV0dXJuaW5nJCA9IHRoaXMuY2FuY2VsT3JSZXR1cm5TZXJ2aWNlLmlzUmV0dXJuaW5nJDtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgcmV0dXJuZWRFbnRyaWVzJDogT2JzZXJ2YWJsZTxcbiAgICBPcmRlckVudHJ5W11cbiAgPiA9IHRoaXMub3JkZXJEZXRhaWxzU2VydmljZS5nZXRPcmRlckRldGFpbHMoKS5waXBlKFxuICAgIGZpbHRlcihvcmRlciA9PiBCb29sZWFuKG9yZGVyLmVudHJpZXMpKSxcbiAgICB0YXAob3JkZXIgPT4gKHRoaXMub3JkZXJDb2RlID0gb3JkZXIuY29kZSkpLFxuICAgIG1hcChvcmRlciA9PiB7XG4gICAgICBjb25zdCByZXR1cm5lZEVudHJpZXMgPSBbXTtcbiAgICAgIG9yZGVyLmVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNhbmNlbE9yUmV0dXJuU2VydmljZS5pc0VudHJ5Q2FuY2VsbGVkT3JSZXR1cm5lZChlbnRyeSkpIHtcbiAgICAgICAgICByZXR1cm5lZEVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJldHVybmVkRW50cmllcztcbiAgICB9KVxuICApO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsT3JSZXR1cm5TZXJ2aWNlLmNsZWFyUmV0dXJuUmVxdWVzdCgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jYW5jZWxPclJldHVyblNlcnZpY2UuaXNSZXR1cm5TdWNjZXNzJC5zdWJzY3JpYmUoXG4gICAgICBzdWNjZXNzID0+IHtcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICB0aGlzLmNhbmNlbE9yUmV0dXJuU2VydmljZS5yZXR1cm5TdWNjZXNzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgc3VibWl0KCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsT3JSZXR1cm5TZXJ2aWNlLnJldHVybk9yZGVyKHRoaXMub3JkZXJDb2RlKTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxPclJldHVyblNlcnZpY2UuZ29Ub09yZGVyQ2FuY2VsT3JSZXR1cm4oXG4gICAgICAnb3JkZXJSZXR1cm4nLFxuICAgICAgdGhpcy5vcmRlckNvZGVcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19