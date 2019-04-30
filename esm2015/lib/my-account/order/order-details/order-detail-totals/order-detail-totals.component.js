/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { OrderDetailsService } from '../order-details.service';
export class OrderDetailTotalsComponent {
    /**
     * @param {?} orderDetailsService
     */
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
}
OrderDetailTotalsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-details-totals',
                template: "<ng-container *ngIf=\"(order$ | async) as order\">\n  <div class=\"row justify-content-end\">\n    <div class=\"cx-summary col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n      <cx-order-summary [cart]=\"order\"></cx-order-summary>\n    </div>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
OrderDetailTotalsComponent.ctorParameters = () => [
    { type: OrderDetailsService }
];
if (false) {
    /** @type {?} */
    OrderDetailTotalsComponent.prototype.order$;
    /**
     * @type {?}
     * @protected
     */
    OrderDetailTotalsComponent.prototype.orderDetailsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLXRvdGFscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvbXktYWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbC10b3RhbHMvb3JkZXItZGV0YWlsLXRvdGFscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFJbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFNL0QsTUFBTSxPQUFPLDBCQUEwQjs7OztJQUNyQyxZQUFzQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUFHLENBQUM7Ozs7SUFJbEUsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNELENBQUM7OztZQVhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxxUkFBbUQ7YUFDcEQ7Ozs7WUFMUSxtQkFBbUI7Ozs7SUFTMUIsNENBQTBCOzs7OztJQUZkLHlEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmRlci1kZXRhaWxzLXRvdGFscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1kZXRhaWwtdG90YWxzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxUb3RhbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgb3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZSkge31cblxuICBvcmRlciQ6IE9ic2VydmFibGU8T3JkZXI+O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3JkZXIkID0gdGhpcy5vcmRlckRldGFpbHNTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpO1xuICB9XG59XG4iXX0=