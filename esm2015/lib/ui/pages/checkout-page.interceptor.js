/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpResponse, } from '@angular/common/http';
import { map } from 'rxjs/operators';
export class HardcodedCheckoutComponent {
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        return next.handle(req).pipe(map(event => {
            if (event instanceof HttpResponse && this.shouldBeIntercepted(event)) {
                event = event.clone({ body: this.addComponent(event.body) });
            }
            return event;
        }));
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    shouldBeIntercepted(event) {
        return event.url.indexOf('pageLabelOrId=multiStepCheckoutSummaryPage') > -1;
    }
    /**
     * @private
     * @param {?} body
     * @return {?}
     */
    addComponent(body) {
        if (body.contentSlots && body.contentSlots.contentSlot) {
            ((/** @type {?} */ (body))).contentSlots.contentSlot.push({
                position: 'BodyContent',
                components: {
                    component: [
                        {
                            uid: 'MultiStepCheckoutComponent',
                            typeCode: 'JspIncludeComponent',
                        },
                    ],
                },
            });
        }
        return body;
    }
}
HardcodedCheckoutComponent.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGFnZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9wYWdlcy9jaGVja291dC1wYWdlLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFLTCxZQUFZLEdBQ2IsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJckMsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBQ3JDLFNBQVMsQ0FDUCxHQUFxQixFQUNyQixJQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUMxQixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDVixJQUFJLEtBQUssWUFBWSxZQUFZLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNwRSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDOUQ7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxtQkFBbUIsQ0FBQyxLQUF3QjtRQUNsRCxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLDRDQUE0QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLElBQVM7UUFDNUIsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO1lBQ3RELENBQUMsbUJBQVMsSUFBSSxFQUFBLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDNUMsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFVBQVUsRUFBRTtvQkFDVixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsR0FBRyxFQUFFLDRCQUE0Qjs0QkFDakMsUUFBUSxFQUFFLHFCQUFxQjt5QkFDaEM7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7O1lBcENGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwUmVxdWVzdCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVzcG9uc2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENNU1BhZ2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGFyZGNvZGVkQ2hlY2tvdXRDb21wb25lbnQgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBpbnRlcmNlcHQoXG4gICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKS5waXBlKFxuICAgICAgbWFwKGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlICYmIHRoaXMuc2hvdWxkQmVJbnRlcmNlcHRlZChldmVudCkpIHtcbiAgICAgICAgICBldmVudCA9IGV2ZW50LmNsb25lKHsgYm9keTogdGhpcy5hZGRDb21wb25lbnQoZXZlbnQuYm9keSkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRCZUludGVyY2VwdGVkKGV2ZW50OiBIdHRwUmVzcG9uc2U8YW55Pik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBldmVudC51cmwuaW5kZXhPZigncGFnZUxhYmVsT3JJZD1tdWx0aVN0ZXBDaGVja291dFN1bW1hcnlQYWdlJykgPiAtMTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkQ29tcG9uZW50KGJvZHk6IGFueSkge1xuICAgIGlmIChib2R5LmNvbnRlbnRTbG90cyAmJiBib2R5LmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCkge1xuICAgICAgKDxDTVNQYWdlPmJvZHkpLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdC5wdXNoKHtcbiAgICAgICAgcG9zaXRpb246ICdCb2R5Q29udGVudCcsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdWlkOiAnTXVsdGlTdGVwQ2hlY2tvdXRDb21wb25lbnQnLFxuICAgICAgICAgICAgICB0eXBlQ29kZTogJ0pzcEluY2x1ZGVDb21wb25lbnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvZHk7XG4gIH1cbn1cbiJdfQ==