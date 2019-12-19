/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ReturnRequestService } from '../return-request.service';
var ReturnRequestOverviewComponent = /** @class */ (function () {
    function ReturnRequestOverviewComponent(returnRequestService) {
        var _this = this;
        this.returnRequestService = returnRequestService;
        this.returnRequest$ = this.returnRequestService
            .getReturnRequest()
            .pipe(tap((/**
         * @param {?} returnRequest
         * @return {?}
         */
        function (returnRequest) { return (_this.rma = returnRequest.rma); })));
        this.isCancelling$ = this.returnRequestService.isCancelling$;
    }
    /**
     * @return {?}
     */
    ReturnRequestOverviewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription = this.returnRequestService.isCancelSuccess$.subscribe((/**
         * @param {?} success
         * @return {?}
         */
        function (success) {
            if (success) {
                _this.returnRequestService.cancelSuccess(_this.rma);
            }
        }));
    };
    /**
     * @param {?} returnRequestCode
     * @return {?}
     */
    ReturnRequestOverviewComponent.prototype.cancelReturn = /**
     * @param {?} returnRequestCode
     * @return {?}
     */
    function (returnRequestCode) {
        this.returnRequestService.cancelReturnRequest(returnRequestCode);
    };
    /**
     * @return {?}
     */
    ReturnRequestOverviewComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.returnRequestService.backToList();
    };
    /**
     * @return {?}
     */
    ReturnRequestOverviewComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ReturnRequestOverviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-return-request-overview',
                    template: "<ng-container *ngIf=\"returnRequest$ | async as returnRequest\">\n  <div class=\"cx-nav row\">\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <button (click)=\"back()\" class=\"btn btn-block btn-action\">\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <button\n        *ngIf=\"returnRequest.cancellable\"\n        class=\"btn btn-block btn-primary\"\n        (click)=\"cancelReturn(returnRequest.rma)\"\n        [disabled]=\"isCancelling$ | async\"\n      >\n        {{ 'returnRequest.cancel' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n  <div class=\"cx-header row\">\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'returnRequest.returnRequestId' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ returnRequest.rma }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'returnRequest.orderCode' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ returnRequest.order?.code }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'returnRequest.status' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">\n        {{\n          'returnRequestList.statusDisplay'\n            | cxTranslate: { context: returnRequest.status }\n        }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ReturnRequestOverviewComponent.ctorParameters = function () { return [
        { type: ReturnRequestService }
    ]; };
    return ReturnRequestOverviewComponent;
}());
export { ReturnRequestOverviewComponent };
if (false) {
    /** @type {?} */
    ReturnRequestOverviewComponent.prototype.rma;
    /** @type {?} */
    ReturnRequestOverviewComponent.prototype.subscription;
    /** @type {?} */
    ReturnRequestOverviewComponent.prototype.returnRequest$;
    /** @type {?} */
    ReturnRequestOverviewComponent.prototype.isCancelling$;
    /**
     * @type {?}
     * @protected
     */
    ReturnRequestOverviewComponent.prototype.returnRequestService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3Qtb3ZlcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL3JldHVybi1yZXF1ZXN0LWRldGFpbC9yZXR1cm4tcmVxdWVzdC1vdmVydmlldy9yZXR1cm4tcmVxdWVzdC1vdmVydmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEdBR3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVqRTtJQU1FLHdDQUFzQixvQkFBMEM7UUFBaEUsaUJBQW9FO1FBQTlDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFLaEUsbUJBQWMsR0FFVixJQUFJLENBQUMsb0JBQW9CO2FBQzFCLGdCQUFnQixFQUFFO2FBQ2xCLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxhQUFhLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUE5QixDQUE4QixFQUFDLENBQUMsQ0FBQztRQUU5RCxrQkFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7SUFYVyxDQUFDOzs7O0lBYXBFLGlEQUFROzs7SUFBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsU0FBUzs7OztRQUN0RSxVQUFBLE9BQU87WUFDTCxJQUFJLE9BQU8sRUFBRTtnQkFDWCxLQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNuRDtRQUNILENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxxREFBWTs7OztJQUFaLFVBQWEsaUJBQXlCO1FBQ3BDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFRCw2Q0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELG9EQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Z0JBekNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxtaERBQXVEO29CQUN2RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBTlEsb0JBQW9COztJQTRDN0IscUNBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXJDWSw4QkFBOEI7OztJQUd6Qyw2Q0FBWTs7SUFDWixzREFBMkI7O0lBRTNCLHdEQUk4RDs7SUFFOUQsdURBQXdEOzs7OztJQVg1Qyw4REFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJldHVyblJlcXVlc3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUmV0dXJuUmVxdWVzdFNlcnZpY2UgfSBmcm9tICcuLi9yZXR1cm4tcmVxdWVzdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcmV0dXJuLXJlcXVlc3Qtb3ZlcnZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV0dXJuLXJlcXVlc3Qtb3ZlcnZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUmV0dXJuUmVxdWVzdE92ZXJ2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmV0dXJuUmVxdWVzdFNlcnZpY2U6IFJldHVyblJlcXVlc3RTZXJ2aWNlKSB7fVxuXG4gIHJtYTogc3RyaW5nO1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICByZXR1cm5SZXF1ZXN0JDogT2JzZXJ2YWJsZTxcbiAgICBSZXR1cm5SZXF1ZXN0XG4gID4gPSB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlXG4gICAgLmdldFJldHVyblJlcXVlc3QoKVxuICAgIC5waXBlKHRhcChyZXR1cm5SZXF1ZXN0ID0+ICh0aGlzLnJtYSA9IHJldHVyblJlcXVlc3Qucm1hKSkpO1xuXG4gIGlzQ2FuY2VsbGluZyQgPSB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmlzQ2FuY2VsbGluZyQ7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmlzQ2FuY2VsU3VjY2VzcyQuc3Vic2NyaWJlKFxuICAgICAgc3VjY2VzcyA9PiB7XG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5jYW5jZWxTdWNjZXNzKHRoaXMucm1hKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBjYW5jZWxSZXR1cm4ocmV0dXJuUmVxdWVzdENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UuY2FuY2VsUmV0dXJuUmVxdWVzdChyZXR1cm5SZXF1ZXN0Q29kZSk7XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UuYmFja1RvTGlzdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19