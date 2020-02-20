import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { OrderDetailsService } from '../order-details.service';
let OrderDetailActionsComponent = class OrderDetailActionsComponent {
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
};
OrderDetailActionsComponent.ctorParameters = () => [
    { type: OrderDetailsService }
];
OrderDetailActionsComponent = __decorate([
    Component({
        selector: 'cx-order-details-actions',
        template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-nav row\">\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <button\n        [routerLink]=\"{ cxRoute: 'orders' } | cxUrl\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <a\n        *ngIf=\"order.cancellable\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orderCancel',\n            params: order\n          } | cxUrl\n        \"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'orderDetails.cancellationAndReturn.cancelAction' | cxTranslate }}\n      </a>\n\n      <a\n        *ngIf=\"order.returnable\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orderReturn',\n            params: order\n          } | cxUrl\n        \"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'orderDetails.cancellationAndReturn.returnAction' | cxTranslate }}\n      </a>\n    </div>\n  </div>\n</ng-container>\n"
    })
], OrderDetailActionsComponent);
export { OrderDetailActionsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLWFjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlsLWFjdGlvbnMvb3JkZXItZGV0YWlsLWFjdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBTS9ELElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTJCO0lBQ3RDLFlBQXNCLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBRTlELFdBQU0sR0FBc0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBRk4sQ0FBQztDQUduRSxDQUFBOztZQUg0QyxtQkFBbUI7O0FBRG5ELDJCQUEyQjtJQUp2QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMEJBQTBCO1FBQ3BDLHdqQ0FBb0Q7S0FDckQsQ0FBQztHQUNXLDJCQUEyQixDQUl2QztTQUpZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmRlci1kZXRhaWxzLWFjdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXItZGV0YWlsLWFjdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbEFjdGlvbnNDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgb3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZSkge31cblxuICBvcmRlciQ6IE9ic2VydmFibGU8T3JkZXI+ID0gdGhpcy5vcmRlckRldGFpbHNTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpO1xufVxuIl19