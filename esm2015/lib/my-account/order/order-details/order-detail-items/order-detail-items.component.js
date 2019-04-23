/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { OrderDetailsService } from '../order-details.service';
export class OrderDetailItemsComponent {
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
    /**
     * @param {?} consignment
     * @return {?}
     */
    getConsignmentProducts(consignment) {
        /** @type {?} */
        const products = [];
        consignment.entries.forEach(element => {
            products.push(element.orderEntry);
        });
        return products;
    }
}
OrderDetailItemsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-details-items',
                template: "<ng-container *ngIf=\"(order$ | async) as order\">\n  <div *ngFor=\"let consignment of order.consignments\" class=\"cx-list row\">\n    <div class=\"cx-list-header col-12\">\n      <div class=\"cx-list-status\">{{ consignment?.status }}</div>\n      <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n        <div>{{ 'orderDetails.shippedOn' | cxTranslate }}&nbsp;</div>\n        <div>{{ consignment?.statusDate | date }}</div>\n      </div>\n    </div>\n    <div class=\"cx-list-item col-12\">\n      <cx-cart-item-list\n        [items]=\"getConsignmentProducts(consignment)\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n  </div>\n\n  <div *ngIf=\"order.unconsignedEntries?.length\" class=\"cx-list row\">\n    <div class=\"cx-list-header col-12\">\n      <div class=\"cx-list-status\">\n        {{ 'orderDetails.inProcess' | cxTranslate }}\n      </div>\n    </div>\n    <div class=\"cx-list-item col-12\">\n      <cx-cart-item-list\n        [items]=\"order?.unconsignedEntries\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n  </div>\n</ng-container>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-list-header{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,space-between);align-items:var(--cx-align-items,center);height:var(--cx-height,3.5rem);background-color:var(--cx-background-color,var(--cx-g-color-background));padding-left:var(--cx-padding,1.875rem);padding-right:var(--cx-padding,1.875rem)}.cx-list-status{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);margin-bottom:var(--cx-margin,0)}.cx-list-date{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);display:var(--cx-display,flex);justify-content:var(--cx-justify-content,flex-end);margin-bottom:var(--cx-margin,0)}@media (max-width:767.98px){.cx-list-header{padding-left:var(--cx-padding,1.25rem);padding-right:var(--cx-padding,1.25rem)}.cx-list-date{flex-direction:var(--cx-flex-direction,column);align-items:var(--cx-align-items,flex-end)}}.cx-list-item{padding:var(--cx-padding,0 0 2.5rem 0)}@media (max-width:767.98px){.cx-list-item{padding:var(--cx-padding,0)}}"]
            }] }
];
/** @nocollapse */
OrderDetailItemsComponent.ctorParameters = () => [
    { type: OrderDetailsService }
];
if (false) {
    /** @type {?} */
    OrderDetailItemsComponent.prototype.order$;
    /**
     * @type {?}
     * @private
     */
    OrderDetailItemsComponent.prototype.orderDetailsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9teS1hY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlsLWl0ZW1zL29yZGVyLWRldGFpbC1pdGVtcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFLbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPL0QsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQUNwQyxZQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUFHLENBQUM7Ozs7SUFJaEUsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQsc0JBQXNCLENBQUMsV0FBd0I7O2NBQ3ZDLFFBQVEsR0FBaUIsRUFBRTtRQUNqQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNwQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsZ25DQUFrRDs7YUFFbkQ7Ozs7WUFOUSxtQkFBbUI7Ozs7SUFVMUIsMkNBQTBCOzs7OztJQUZkLHdEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE9yZGVyLCBDb25zaWdubWVudCwgT3JkZXJFbnRyeSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmRlci1kZXRhaWxzLWl0ZW1zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWRldGFpbC1pdGVtcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29yZGVyLWRldGFpbC1pdGVtcy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlKSB7fVxuXG4gIG9yZGVyJDogT2JzZXJ2YWJsZTxPcmRlcj47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcmRlciQgPSB0aGlzLm9yZGVyRGV0YWlsc1NlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCk7XG4gIH1cblxuICBnZXRDb25zaWdubWVudFByb2R1Y3RzKGNvbnNpZ25tZW50OiBDb25zaWdubWVudCk6IE9yZGVyRW50cnlbXSB7XG4gICAgY29uc3QgcHJvZHVjdHM6IE9yZGVyRW50cnlbXSA9IFtdO1xuICAgIGNvbnNpZ25tZW50LmVudHJpZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHByb2R1Y3RzLnB1c2goZWxlbWVudC5vcmRlckVudHJ5KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9kdWN0cztcbiAgfVxufVxuIl19