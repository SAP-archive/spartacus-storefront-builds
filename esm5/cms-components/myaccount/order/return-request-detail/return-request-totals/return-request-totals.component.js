import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ReturnRequestService } from '../return-request.service';
var ReturnRequestTotalsComponent = /** @class */ (function () {
    function ReturnRequestTotalsComponent(returnRequestService) {
        this.returnRequestService = returnRequestService;
        this.returnRequest$ = this.returnRequestService.getReturnRequest();
    }
    ReturnRequestTotalsComponent.prototype.ngOnDestroy = function () {
        this.returnRequestService.clearReturnRequest();
    };
    ReturnRequestTotalsComponent.ctorParameters = function () { return [
        { type: ReturnRequestService }
    ]; };
    ReturnRequestTotalsComponent = __decorate([
        Component({
            selector: 'cx-return-request-totals',
            template: "<ng-container *ngIf=\"returnRequest$ | async as returnRequest\">\n  <div class=\"row justify-content-end\">\n    <div class=\"cx-summary col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n      <h4>{{ 'returnRequest.summary' | cxTranslate }}</h4>\n      <div class=\"cx-summary-row\">\n        <div class=\"col-6 cx-summary-label\">\n          {{ 'returnRequest.subtotal' | cxTranslate }}\n        </div>\n        <div class=\"col-6 cx-summary-amount\">\n          {{ returnRequest.subTotal?.formattedValue }}\n        </div>\n      </div>\n      <div class=\"cx-summary-row\">\n        <div class=\"col-6 cx-summary-label\">\n          {{ 'returnRequest.deliveryCode' | cxTranslate }}\n        </div>\n        <div class=\"col-6 cx-summary-amount\">\n          {{ returnRequest.deliveryCost?.formattedValue }}\n        </div>\n      </div>\n      <div class=\"cx-summary-row cx-summary-total\">\n        <div class=\"col-6 cx-summary-label\">\n          {{ 'returnRequest.estimatedRefund' | cxTranslate }}\n        </div>\n        <div class=\"col-6 cx-summary-amount\">\n          {{ returnRequest.totalPrice?.formattedValue }}\n        </div>\n      </div>\n      <div class=\"cx-summary-row cx-footnote\">\n        {{ 'returnRequest.note' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ReturnRequestTotalsComponent);
    return ReturnRequestTotalsComponent;
}());
export { ReturnRequestTotalsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3QtdG90YWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9yZXR1cm4tcmVxdWVzdC1kZXRhaWwvcmV0dXJuLXJlcXVlc3QtdG90YWxzL3JldHVybi1yZXF1ZXN0LXRvdGFscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFPakU7SUFDRSxzQ0FBc0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFFaEUsbUJBQWMsR0FFVixJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUprQixDQUFDO0lBTXBFLGtEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNqRCxDQUFDOztnQkFSMkMsb0JBQW9COztJQURyRCw0QkFBNEI7UUFMeEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyxveUNBQXFEO1lBQ3JELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyw0QkFBNEIsQ0FVeEM7SUFBRCxtQ0FBQztDQUFBLEFBVkQsSUFVQztTQVZZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmV0dXJuUmVxdWVzdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0U2VydmljZSB9IGZyb20gJy4uL3JldHVybi1yZXF1ZXN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1yZXR1cm4tcmVxdWVzdC10b3RhbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV0dXJuLXJlcXVlc3QtdG90YWxzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFJldHVyblJlcXVlc3RUb3RhbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmV0dXJuUmVxdWVzdFNlcnZpY2U6IFJldHVyblJlcXVlc3RTZXJ2aWNlKSB7fVxuXG4gIHJldHVyblJlcXVlc3QkOiBPYnNlcnZhYmxlPFxuICAgIFJldHVyblJlcXVlc3RcbiAgPiA9IHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UuZ2V0UmV0dXJuUmVxdWVzdCgpO1xuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UuY2xlYXJSZXR1cm5SZXF1ZXN0KCk7XG4gIH1cbn1cbiJdfQ==