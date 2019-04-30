/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { OrderDetailsService } from '../order-details.service';
var OrderDetailItemsComponent = /** @class */ (function () {
    function OrderDetailItemsComponent(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * @return {?}
     */
    OrderDetailItemsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.order$ = this.orderDetailsService.getOrderDetails();
    };
    /**
     * @param {?} consignment
     * @return {?}
     */
    OrderDetailItemsComponent.prototype.getConsignmentProducts = /**
     * @param {?} consignment
     * @return {?}
     */
    function (consignment) {
        /** @type {?} */
        var products = [];
        consignment.entries.forEach(function (element) {
            products.push(element.orderEntry);
        });
        return products;
    };
    OrderDetailItemsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-details-items',
                    template: "<ng-container *ngIf=\"(order$ | async) as order\">\n  <div *ngFor=\"let consignment of order.consignments\" class=\"cx-list row\">\n    <div class=\"cx-list-header col-12\">\n      <div class=\"cx-list-status\">{{ consignment?.status }}</div>\n      <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n        <div>{{ 'orderDetails.shippedOn' | cxTranslate }}&nbsp;</div>\n        <div>{{ consignment?.statusDate | date }}</div>\n      </div>\n    </div>\n    <div class=\"cx-list-item col-12\">\n      <cx-cart-item-list\n        [items]=\"getConsignmentProducts(consignment)\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n  </div>\n\n  <div *ngIf=\"order.unconsignedEntries?.length\" class=\"cx-list row\">\n    <div class=\"cx-list-header col-12\">\n      <div class=\"cx-list-status\">\n        {{ 'orderDetails.inProcess' | cxTranslate }}\n      </div>\n    </div>\n    <div class=\"cx-list-item col-12\">\n      <cx-cart-item-list\n        [items]=\"order?.unconsignedEntries\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    OrderDetailItemsComponent.ctorParameters = function () { return [
        { type: OrderDetailsService }
    ]; };
    return OrderDetailItemsComponent;
}());
export { OrderDetailItemsComponent };
if (false) {
    /** @type {?} */
    OrderDetailItemsComponent.prototype.order$;
    /**
     * @type {?}
     * @private
     */
    OrderDetailItemsComponent.prototype.orderDetailsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9teS1hY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlsLWl0ZW1zL29yZGVyLWRldGFpbC1pdGVtcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFLbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFL0Q7SUFLRSxtQ0FBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFBRyxDQUFDOzs7O0lBSWhFLDRDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQsMERBQXNCOzs7O0lBQXRCLFVBQXVCLFdBQXdCOztZQUN2QyxRQUFRLEdBQWlCLEVBQUU7UUFDakMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ2pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Z0JBcEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxnbkNBQWtEO2lCQUNuRDs7OztnQkFMUSxtQkFBbUI7O0lBdUI1QixnQ0FBQztDQUFBLEFBckJELElBcUJDO1NBakJZLHlCQUF5Qjs7O0lBR3BDLDJDQUEwQjs7Ozs7SUFGZCx3REFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBPcmRlciwgQ29uc2lnbm1lbnQsIE9yZGVyRW50cnkgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItZGV0YWlscy1pdGVtcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1kZXRhaWwtaXRlbXMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlKSB7fVxuXG4gIG9yZGVyJDogT2JzZXJ2YWJsZTxPcmRlcj47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcmRlciQgPSB0aGlzLm9yZGVyRGV0YWlsc1NlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCk7XG4gIH1cblxuICBnZXRDb25zaWdubWVudFByb2R1Y3RzKGNvbnNpZ25tZW50OiBDb25zaWdubWVudCk6IE9yZGVyRW50cnlbXSB7XG4gICAgY29uc3QgcHJvZHVjdHM6IE9yZGVyRW50cnlbXSA9IFtdO1xuICAgIGNvbnNpZ25tZW50LmVudHJpZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHByb2R1Y3RzLnB1c2goZWxlbWVudC5vcmRlckVudHJ5KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9kdWN0cztcbiAgfVxufVxuIl19