/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserOrderService } from '@spartacus/core';
var TrackingEventsComponent = /** @class */ (function () {
    function TrackingEventsComponent(activeModal, userOrderService) {
        this.activeModal = activeModal;
        this.userOrderService = userOrderService;
    }
    /**
     * @return {?}
     */
    TrackingEventsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.userOrderService.clearConsignmentTracking();
    };
    TrackingEventsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-tracking-events',
                    template: "<div class=\"cx-consignment-tracking-dialog\">\n  <!-- Modal Header -->\n  <ng-container\n    *ngIf=\"(tracking$ | async) as consignmentTracking; else loading\"\n  >\n    <div class=\"header modal-header\">\n      <div class=\"title modal-title\">\n        {{ 'orderDetails.consignmentTracking.dialog.header' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <!-- shipment header -->\n    <ng-container\n      *ngIf=\"\n        consignmentTracking?.carrierDetails && consignmentTracking?.trackingID;\n        else noTracking\n      \"\n    >\n      <div class=\"shipment-heading\" data-test=\"head-track\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title \">\n              {{\n                'orderDetails.consignmentTracking.dialog.shipped' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ shipDate | cxDate: 'medium' }}\n            </div>\n          </div>\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.estimate' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ consignmentTracking?.targetArrivalDate | cxDate: 'medium' }}\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.carrier' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ consignmentTracking?.carrierDetails?.name }}\n            </div>\n          </div>\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.trackingId'\n                  | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              <label>\n                {{ consignmentTracking?.trackingID }}\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <!-- tracking events -->\n    <div class=\"events modal-body\">\n      <ng-container\n        *ngFor=\"let consignmentEvent of consignmentTracking.trackingEvents\"\n      >\n        <div class=\"event-body\" data-test=\"body-event\">\n          <div class=\"event-content\">\n            {{ consignmentEvent.eventDate | cxDate: 'medium' }}\n          </div>\n          <div class=\"event-title\">\n            {{ consignmentEvent.referenceCode }}\n          </div>\n          <div class=\"event-content\">{{ consignmentEvent.detail }}</div>\n          <div class=\"event-city\">\n            location: {{ consignmentEvent.location }}\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n\n  <ng-template #noTracking>\n    <div class=\"no-tracking-heading\" data-test=\"head-notrack\">\n      <div class=\"shipment-content\">\n        {{ 'orderDetails.consignmentTracking.dialog.noTracking' | cxTranslate }}\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template #loading>\n    <div class=\"tracking-loading\" data-test=\"loading-track\">\n      <div class=\"header modal-header\">\n        <div class=\"title modal-title\">\n          {{\n            'orderDetails.consignmentTracking.dialog.loadingHeader'\n              | cxTranslate\n          }}\n        </div>\n        <button\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          data-test=\"btn-dismiss\"\n          (click)=\"activeModal.dismiss('Cross click')\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <!-- Modal Body -->\n      <div class=\"body modal-body\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <cx-spinner></cx-spinner>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    TrackingEventsComponent.ctorParameters = function () { return [
        { type: NgbActiveModal },
        { type: UserOrderService }
    ]; };
    return TrackingEventsComponent;
}());
export { TrackingEventsComponent };
if (false) {
    /** @type {?} */
    TrackingEventsComponent.prototype.tracking$;
    /** @type {?} */
    TrackingEventsComponent.prototype.shipDate;
    /** @type {?} */
    TrackingEventsComponent.prototype.consignmentCode;
    /** @type {?} */
    TrackingEventsComponent.prototype.activeModal;
    /**
     * @type {?}
     * @private
     */
    TrackingEventsComponent.prototype.userOrderService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tpbmctZXZlbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbC1pdGVtcy9jb25zaWdubWVudC10cmFja2luZy90cmFja2luZy1ldmVudHMvdHJhY2tpbmctZXZlbnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUF1QixnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3hFO0lBU0UsaUNBQ1MsV0FBMkIsRUFDMUIsZ0JBQWtDO1FBRG5DLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUMxQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3pDLENBQUM7Ozs7SUFFSiw2Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNuRCxDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLDIwSUFBK0M7aUJBQ2hEOzs7O2dCQVBRLGNBQWM7Z0JBQ08sZ0JBQWdCOztJQW9COUMsOEJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWJZLHVCQUF1Qjs7O0lBQ2xDLDRDQUEyQzs7SUFDM0MsMkNBQWU7O0lBQ2Ysa0RBQXdCOztJQUd0Qiw4Q0FBa0M7Ozs7O0lBQ2xDLG1EQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcsIFVzZXJPcmRlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC10cmFja2luZy1ldmVudHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJhY2tpbmctZXZlbnRzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVHJhY2tpbmdFdmVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICB0cmFja2luZyQ6IE9ic2VydmFibGU8Q29uc2lnbm1lbnRUcmFja2luZz47XG4gIHNoaXBEYXRlOiBEYXRlO1xuICBjb25zaWdubWVudENvZGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuICAgIHByaXZhdGUgdXNlck9yZGVyU2VydmljZTogVXNlck9yZGVyU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmNsZWFyQ29uc2lnbm1lbnRUcmFja2luZygpO1xuICB9XG59XG4iXX0=