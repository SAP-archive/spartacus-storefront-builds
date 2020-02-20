import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { OrderDetailsService } from '../order-details.service';
var OrderDetailActionsComponent = /** @class */ (function () {
    function OrderDetailActionsComponent(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
    OrderDetailActionsComponent.ctorParameters = function () { return [
        { type: OrderDetailsService }
    ]; };
    OrderDetailActionsComponent = __decorate([
        Component({
            selector: 'cx-order-details-actions',
            template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-nav row\">\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <button\n        [routerLink]=\"{ cxRoute: 'orders' } | cxUrl\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <a\n        *ngIf=\"order.cancellable\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orderCancel',\n            params: order\n          } | cxUrl\n        \"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'orderDetails.cancellationAndReturn.cancelAction' | cxTranslate }}\n      </a>\n\n      <a\n        *ngIf=\"order.returnable\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orderReturn',\n            params: order\n          } | cxUrl\n        \"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'orderDetails.cancellationAndReturn.returnAction' | cxTranslate }}\n      </a>\n    </div>\n  </div>\n</ng-container>\n"
        })
    ], OrderDetailActionsComponent);
    return OrderDetailActionsComponent;
}());
export { OrderDetailActionsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLWFjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlsLWFjdGlvbnMvb3JkZXItZGV0YWlsLWFjdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBTS9EO0lBQ0UscUNBQXNCLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBRTlELFdBQU0sR0FBc0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBRk4sQ0FBQzs7Z0JBQXZCLG1CQUFtQjs7SUFEbkQsMkJBQTJCO1FBSnZDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsd2pDQUFvRDtTQUNyRCxDQUFDO09BQ1csMkJBQTJCLENBSXZDO0lBQUQsa0NBQUM7Q0FBQSxBQUpELElBSUM7U0FKWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItZGV0YWlscy1hY3Rpb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWRldGFpbC1hY3Rpb25zLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxBY3Rpb25zQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UpIHt9XG5cbiAgb3JkZXIkOiBPYnNlcnZhYmxlPE9yZGVyPiA9IHRoaXMub3JkZXJEZXRhaWxzU2VydmljZS5nZXRPcmRlckRldGFpbHMoKTtcbn1cbiJdfQ==