import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ReturnRequestService } from '../return-request.service';
let ReturnRequestTotalsComponent = class ReturnRequestTotalsComponent {
    constructor(returnRequestService) {
        this.returnRequestService = returnRequestService;
        this.returnRequest$ = this.returnRequestService.getReturnRequest();
    }
    ngOnDestroy() {
        this.returnRequestService.clearReturnRequest();
    }
};
ReturnRequestTotalsComponent.ctorParameters = () => [
    { type: ReturnRequestService }
];
ReturnRequestTotalsComponent = __decorate([
    Component({
        selector: 'cx-return-request-totals',
        template: "<ng-container *ngIf=\"returnRequest$ | async as returnRequest\">\n  <div class=\"row justify-content-end\">\n    <div class=\"cx-summary col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n      <h4>{{ 'returnRequest.summary' | cxTranslate }}</h4>\n      <div class=\"cx-summary-row\">\n        <div class=\"col-6 cx-summary-label\">\n          {{ 'returnRequest.subtotal' | cxTranslate }}\n        </div>\n        <div class=\"col-6 cx-summary-amount\">\n          {{ returnRequest.subTotal?.formattedValue }}\n        </div>\n      </div>\n      <div class=\"cx-summary-row\">\n        <div class=\"col-6 cx-summary-label\">\n          {{ 'returnRequest.deliveryCode' | cxTranslate }}\n        </div>\n        <div class=\"col-6 cx-summary-amount\">\n          {{ returnRequest.deliveryCost?.formattedValue }}\n        </div>\n      </div>\n      <div class=\"cx-summary-row cx-summary-total\">\n        <div class=\"col-6 cx-summary-label\">\n          {{ 'returnRequest.estimatedRefund' | cxTranslate }}\n        </div>\n        <div class=\"col-6 cx-summary-amount\">\n          {{ returnRequest.totalPrice?.formattedValue }}\n        </div>\n      </div>\n      <div class=\"cx-summary-row cx-footnote\">\n        {{ 'returnRequest.note' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ReturnRequestTotalsComponent);
export { ReturnRequestTotalsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3QtdG90YWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9yZXR1cm4tcmVxdWVzdC1kZXRhaWwvcmV0dXJuLXJlcXVlc3QtdG90YWxzL3JldHVybi1yZXF1ZXN0LXRvdGFscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFPakUsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFDdkMsWUFBc0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFFaEUsbUJBQWMsR0FFVixJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUprQixDQUFDO0lBTXBFLFdBQVc7UUFDVCxJQUFJLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0NBQ0YsQ0FBQTs7WUFUNkMsb0JBQW9COztBQURyRCw0QkFBNEI7SUFMeEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDBCQUEwQjtRQUNwQyxveUNBQXFEO1FBQ3JELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyw0QkFBNEIsQ0FVeEM7U0FWWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJldHVyblJlcXVlc3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUmV0dXJuUmVxdWVzdFNlcnZpY2UgfSBmcm9tICcuLi9yZXR1cm4tcmVxdWVzdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcmV0dXJuLXJlcXVlc3QtdG90YWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JldHVybi1yZXF1ZXN0LXRvdGFscy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBSZXR1cm5SZXF1ZXN0VG90YWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJldHVyblJlcXVlc3RTZXJ2aWNlOiBSZXR1cm5SZXF1ZXN0U2VydmljZSkge31cblxuICByZXR1cm5SZXF1ZXN0JDogT2JzZXJ2YWJsZTxcbiAgICBSZXR1cm5SZXF1ZXN0XG4gID4gPSB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmdldFJldHVyblJlcXVlc3QoKTtcblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmNsZWFyUmV0dXJuUmVxdWVzdCgpO1xuICB9XG59XG4iXX0=