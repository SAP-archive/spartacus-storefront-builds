import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ReturnRequestService } from '../return-request.service';
var ReturnRequestOverviewComponent = /** @class */ (function () {
    function ReturnRequestOverviewComponent(returnRequestService) {
        var _this = this;
        this.returnRequestService = returnRequestService;
        this.returnRequest$ = this.returnRequestService
            .getReturnRequest()
            .pipe(tap(function (returnRequest) { return (_this.rma = returnRequest.rma); }));
        this.isCancelling$ = this.returnRequestService.isCancelling$;
    }
    ReturnRequestOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.returnRequestService.isCancelSuccess$.subscribe(function (success) {
            if (success) {
                _this.returnRequestService.cancelSuccess(_this.rma);
            }
        });
    };
    ReturnRequestOverviewComponent.prototype.cancelReturn = function (returnRequestCode) {
        this.returnRequestService.cancelReturnRequest(returnRequestCode);
    };
    ReturnRequestOverviewComponent.prototype.back = function () {
        this.returnRequestService.backToList();
    };
    ReturnRequestOverviewComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ReturnRequestOverviewComponent.ctorParameters = function () { return [
        { type: ReturnRequestService }
    ]; };
    ReturnRequestOverviewComponent = __decorate([
        Component({
            selector: 'cx-return-request-overview',
            template: "<ng-container *ngIf=\"returnRequest$ | async as returnRequest\">\n  <div class=\"cx-nav row\">\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <button (click)=\"back()\" class=\"btn btn-block btn-action\">\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <button\n        *ngIf=\"returnRequest.cancellable\"\n        class=\"btn btn-block btn-primary\"\n        (click)=\"cancelReturn(returnRequest.rma)\"\n        [disabled]=\"isCancelling$ | async\"\n      >\n        {{ 'returnRequest.cancel' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n  <div class=\"cx-header row\">\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'returnRequest.returnRequestId' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ returnRequest.rma }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'returnRequest.orderCode' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ returnRequest.order?.code }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'returnRequest.status' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">\n        {{\n          'returnRequestList.statusDisplay'\n            | cxTranslate: { context: returnRequest.status }\n        }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ReturnRequestOverviewComponent);
    return ReturnRequestOverviewComponent;
}());
export { ReturnRequestOverviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3Qtb3ZlcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL3JldHVybi1yZXF1ZXN0LWRldGFpbC9yZXR1cm4tcmVxdWVzdC1vdmVydmlldy9yZXR1cm4tcmVxdWVzdC1vdmVydmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEdBR3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU9qRTtJQUNFLHdDQUFzQixvQkFBMEM7UUFBaEUsaUJBQW9FO1FBQTlDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFLaEUsbUJBQWMsR0FFVixJQUFJLENBQUMsb0JBQW9CO2FBQzFCLGdCQUFnQixFQUFFO2FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxhQUFhLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUMsQ0FBQztRQUU5RCxrQkFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7SUFYVyxDQUFDO0lBYXBFLGlEQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FDdEUsVUFBQSxPQUFPO1lBQ0wsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbkQ7UUFDSCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxxREFBWSxHQUFaLFVBQWEsaUJBQXlCO1FBQ3BDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCw2Q0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxvREFBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOztnQkFuQzJDLG9CQUFvQjs7SUFEckQsOEJBQThCO1FBTDFDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsbWhEQUF1RDtZQUN2RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csOEJBQThCLENBcUMxQztJQUFELHFDQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FyQ1ksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFJldHVyblJlcXVlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vcmV0dXJuLXJlcXVlc3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXJldHVybi1yZXF1ZXN0LW92ZXJ2aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JldHVybi1yZXF1ZXN0LW92ZXJ2aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFJldHVyblJlcXVlc3RPdmVydmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJldHVyblJlcXVlc3RTZXJ2aWNlOiBSZXR1cm5SZXF1ZXN0U2VydmljZSkge31cblxuICBybWE6IHN0cmluZztcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgcmV0dXJuUmVxdWVzdCQ6IE9ic2VydmFibGU8XG4gICAgUmV0dXJuUmVxdWVzdFxuICA+ID0gdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZVxuICAgIC5nZXRSZXR1cm5SZXF1ZXN0KClcbiAgICAucGlwZSh0YXAocmV0dXJuUmVxdWVzdCA9PiAodGhpcy5ybWEgPSByZXR1cm5SZXF1ZXN0LnJtYSkpKTtcblxuICBpc0NhbmNlbGxpbmckID0gdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5pc0NhbmNlbGxpbmckO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5pc0NhbmNlbFN1Y2Nlc3MkLnN1YnNjcmliZShcbiAgICAgIHN1Y2Nlc3MgPT4ge1xuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UuY2FuY2VsU3VjY2Vzcyh0aGlzLnJtYSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY2FuY2VsUmV0dXJuKHJldHVyblJlcXVlc3RDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmNhbmNlbFJldHVyblJlcXVlc3QocmV0dXJuUmVxdWVzdENvZGUpO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmJhY2tUb0xpc3QoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==