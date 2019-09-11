/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UserOrderService, } from '@spartacus/core';
import { ModalService, } from '../../../../../../shared/components/modal/index';
import { TrackingEventsComponent } from './tracking-events/tracking-events.component';
var ConsignmentTrackingComponent = /** @class */ (function () {
    function ConsignmentTrackingComponent(userOrderService, modalService) {
        this.userOrderService = userOrderService;
        this.modalService = modalService;
        this.consignmentStatus = [
            'SHIPPED',
            'IN_TRANSIT',
            'DELIVERY_COMPLETED',
            'DELIVERY_REJECTED',
            'DELIVERING',
        ];
    }
    /**
     * @return {?}
     */
    ConsignmentTrackingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.consignmentTracking$ = this.userOrderService.getConsignmentTracking();
    };
    /**
     * @param {?} consignment
     * @return {?}
     */
    ConsignmentTrackingComponent.prototype.openTrackingDialog = /**
     * @param {?} consignment
     * @return {?}
     */
    function (consignment) {
        this.userOrderService.loadConsignmentTracking(this.orderCode, consignment.code);
        /** @type {?} */
        var modalInstance;
        this.modalRef = this.modalService.open(TrackingEventsComponent, {
            centered: true,
            size: 'lg',
        });
        modalInstance = this.modalRef.componentInstance;
        modalInstance.tracking$ = this.consignmentTracking$;
        modalInstance.shipDate = consignment.statusDate;
        modalInstance.consignmentCode = consignment.code;
    };
    /**
     * @return {?}
     */
    ConsignmentTrackingComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.userOrderService.clearConsignmentTracking();
    };
    ConsignmentTrackingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-consignment-tracking',
                    template: "<ng-container *ngIf=\"consignment && consignment.status\">\n  <div *ngIf=\"consignmentStatus.includes(consignment.status)\">\n    <button\n      (click)=\"openTrackingDialog(consignment)\"\n      class=\"btn btn-action\"\n      data-test=\"btn-events\"\n    >\n      {{ 'orderDetails.consignmentTracking.action' | cxTranslate }}\n    </button>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    ConsignmentTrackingComponent.ctorParameters = function () { return [
        { type: UserOrderService },
        { type: ModalService }
    ]; };
    ConsignmentTrackingComponent.propDecorators = {
        consignment: [{ type: Input }],
        orderCode: [{ type: Input }]
    };
    return ConsignmentTrackingComponent;
}());
export { ConsignmentTrackingComponent };
if (false) {
    /** @type {?} */
    ConsignmentTrackingComponent.prototype.consignmentStatus;
    /** @type {?} */
    ConsignmentTrackingComponent.prototype.modalRef;
    /** @type {?} */
    ConsignmentTrackingComponent.prototype.consignment;
    /** @type {?} */
    ConsignmentTrackingComponent.prototype.orderCode;
    /** @type {?} */
    ConsignmentTrackingComponent.prototype.consignmentTracking$;
    /**
     * @type {?}
     * @private
     */
    ConsignmentTrackingComponent.prototype.userOrderService;
    /**
     * @type {?}
     * @private
     */
    ConsignmentTrackingComponent.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2lnbm1lbnQtdHJhY2tpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlsLWl0ZW1zL2NvbnNpZ25tZW50LXRyYWNraW5nL2NvbnNpZ25tZW50LXRyYWNraW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFHTCxnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBRUwsWUFBWSxHQUNiLE1BQU0saURBQWlELENBQUM7QUFDekQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFdEY7SUFvQkUsc0NBQ1UsZ0JBQWtDLEVBQ2xDLFlBQTBCO1FBRDFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFqQnBDLHNCQUFpQixHQUFhO1lBQzVCLFNBQVM7WUFDVCxZQUFZO1lBQ1osb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQixZQUFZO1NBQ2IsQ0FBQztJQVlDLENBQUM7Ozs7SUFFSiwrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDN0UsQ0FBQzs7Ozs7SUFFRCx5REFBa0I7Ozs7SUFBbEIsVUFBbUIsV0FBd0I7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUMzQyxJQUFJLENBQUMsU0FBUyxFQUNkLFdBQVcsQ0FBQyxJQUFJLENBQ2pCLENBQUM7O1lBQ0UsYUFBa0I7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUM5RCxRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUFDO1FBRUgsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7UUFDaEQsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFDcEQsYUFBYSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDO1FBQ2hELGFBQWEsQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsa0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbkQsQ0FBQzs7Z0JBaERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxnWUFBb0Q7aUJBQ3JEOzs7O2dCQVpDLGdCQUFnQjtnQkFLaEIsWUFBWTs7OzhCQWtCWCxLQUFLOzRCQUVMLEtBQUs7O0lBaUNSLG1DQUFDO0NBQUEsQUFqREQsSUFpREM7U0E3Q1ksNEJBQTRCOzs7SUFDdkMseURBTUU7O0lBQ0YsZ0RBQW1COztJQUVuQixtREFDeUI7O0lBQ3pCLGlEQUNrQjs7SUFDbEIsNERBQXNEOzs7OztJQUdwRCx3REFBMEM7Ozs7O0lBQzFDLG9EQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb25zaWdubWVudCxcbiAgQ29uc2lnbm1lbnRUcmFja2luZyxcbiAgVXNlck9yZGVyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIE1vZGFsUmVmLFxuICBNb2RhbFNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcbmltcG9ydCB7IFRyYWNraW5nRXZlbnRzQ29tcG9uZW50IH0gZnJvbSAnLi90cmFja2luZy1ldmVudHMvdHJhY2tpbmctZXZlbnRzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNvbnNpZ25tZW50LXRyYWNraW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnNpZ25tZW50LXRyYWNraW5nLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29uc2lnbm1lbnRUcmFja2luZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc2lnbm1lbnRTdGF0dXM6IHN0cmluZ1tdID0gW1xuICAgICdTSElQUEVEJyxcbiAgICAnSU5fVFJBTlNJVCcsXG4gICAgJ0RFTElWRVJZX0NPTVBMRVRFRCcsXG4gICAgJ0RFTElWRVJZX1JFSkVDVEVEJyxcbiAgICAnREVMSVZFUklORycsXG4gIF07XG4gIG1vZGFsUmVmOiBNb2RhbFJlZjtcblxuICBASW5wdXQoKVxuICBjb25zaWdubWVudDogQ29uc2lnbm1lbnQ7XG4gIEBJbnB1dCgpXG4gIG9yZGVyQ29kZTogc3RyaW5nO1xuICBjb25zaWdubWVudFRyYWNraW5nJDogT2JzZXJ2YWJsZTxDb25zaWdubWVudFRyYWNraW5nPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJPcmRlclNlcnZpY2U6IFVzZXJPcmRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb25zaWdubWVudFRyYWNraW5nJCA9IHRoaXMudXNlck9yZGVyU2VydmljZS5nZXRDb25zaWdubWVudFRyYWNraW5nKCk7XG4gIH1cblxuICBvcGVuVHJhY2tpbmdEaWFsb2coY29uc2lnbm1lbnQ6IENvbnNpZ25tZW50KSB7XG4gICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmxvYWRDb25zaWdubWVudFRyYWNraW5nKFxuICAgICAgdGhpcy5vcmRlckNvZGUsXG4gICAgICBjb25zaWdubWVudC5jb2RlXG4gICAgKTtcbiAgICBsZXQgbW9kYWxJbnN0YW5jZTogYW55O1xuICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKFRyYWNraW5nRXZlbnRzQ29tcG9uZW50LCB7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHNpemU6ICdsZycsXG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlID0gdGhpcy5tb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBtb2RhbEluc3RhbmNlLnRyYWNraW5nJCA9IHRoaXMuY29uc2lnbm1lbnRUcmFja2luZyQ7XG4gICAgbW9kYWxJbnN0YW5jZS5zaGlwRGF0ZSA9IGNvbnNpZ25tZW50LnN0YXR1c0RhdGU7XG4gICAgbW9kYWxJbnN0YW5jZS5jb25zaWdubWVudENvZGUgPSBjb25zaWdubWVudC5jb2RlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmNsZWFyQ29uc2lnbm1lbnRUcmFja2luZygpO1xuICB9XG59XG4iXX0=