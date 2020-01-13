/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { RoutingService, CustomerCouponService, GlobalMessageService, GlobalMessageType, } from '@spartacus/core';
export class CouponClaimComponent {
    /**
     * @param {?} couponService
     * @param {?} routingService
     * @param {?} messageService
     */
    constructor(couponService, routingService, messageService) {
        this.couponService = couponService;
        this.routingService = routingService;
        this.messageService = messageService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.routingService
            .getRouterState()
            .subscribe((/**
         * @param {?} k
         * @return {?}
         */
        k => {
            /** @type {?} */
            const couponCode = k.state.params.couponCode;
            if (couponCode) {
                this.couponService.claimCustomerCoupon(couponCode);
                this.subscription = this.couponService
                    .getClaimCustomerCouponResultSuccess()
                    .subscribe((/**
                 * @param {?} success
                 * @return {?}
                 */
                success => {
                    if (success) {
                        this.messageService.add({ key: 'myCoupons.claimCustomerCoupon' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
                    }
                    this.routingService.go({ cxRoute: 'coupons' });
                }));
            }
            else {
                this.routingService.go({ cxRoute: 'notFound' });
            }
        }))
            .unsubscribe();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
CouponClaimComponent.decorators = [
    { type: Component, args: [{
                template: "",
                selector: 'cx-coupon-claim'
            }] }
];
/** @nocollapse */
CouponClaimComponent.ctorParameters = () => [
    { type: CustomerCouponService },
    { type: RoutingService },
    { type: GlobalMessageService }
];
if (false) {
    /** @type {?} */
    CouponClaimComponent.prototype.subscription;
    /**
     * @type {?}
     * @protected
     */
    CouponClaimComponent.prototype.couponService;
    /**
     * @type {?}
     * @protected
     */
    CouponClaimComponent.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    CouponClaimComponent.prototype.messageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLWNsYWltLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9teS1jb3Vwb25zL2NvdXBvbi1jbGFpbS9jb3Vwb24tY2xhaW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsY0FBYyxFQUNkLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsaUJBQWlCLEdBQ2xCLE1BQU0saUJBQWlCLENBQUM7QUFPekIsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBRy9CLFlBQ1ksYUFBb0MsRUFDcEMsY0FBOEIsRUFDOUIsY0FBb0M7UUFGcEMsa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7SUFDN0MsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYzthQUNoQixjQUFjLEVBQUU7YUFDaEIsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFOztrQkFDUCxVQUFVLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUM1QyxJQUFJLFVBQVUsRUFBRTtnQkFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhO3FCQUNuQyxtQ0FBbUMsRUFBRTtxQkFDckMsU0FBUzs7OztnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDbkIsSUFBSSxPQUFPLEVBQUU7d0JBQ1gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQ3JCLEVBQUUsR0FBRyxFQUFFLCtCQUErQixFQUFFLEVBQ3hDLGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO3FCQUNIO29CQUNELElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7Z0JBQ2pELENBQUMsRUFBQyxDQUFDO2FBQ047aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQzthQUNqRDtRQUNILENBQUMsRUFBQzthQUNELFdBQVcsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULFlBQTRDO2dCQUM1QyxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7O1lBVEMscUJBQXFCO1lBRHJCLGNBQWM7WUFFZCxvQkFBb0I7Ozs7SUFVcEIsNENBQTJCOzs7OztJQUd6Qiw2Q0FBOEM7Ozs7O0lBQzlDLDhDQUF3Qzs7Ozs7SUFDeEMsOENBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUm91dGluZ1NlcnZpY2UsXG4gIEN1c3RvbWVyQ291cG9uU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJy4vY291cG9uLWNsYWltLmNvbXBvbmVudC5odG1sJyxcbiAgc2VsZWN0b3I6ICdjeC1jb3Vwb24tY2xhaW0nLFxufSlcbmV4cG9ydCBjbGFzcyBDb3Vwb25DbGFpbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvdXBvblNlcnZpY2U6IEN1c3RvbWVyQ291cG9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBtZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRSb3V0ZXJTdGF0ZSgpXG4gICAgICAuc3Vic2NyaWJlKGsgPT4ge1xuICAgICAgICBjb25zdCBjb3Vwb25Db2RlID0gay5zdGF0ZS5wYXJhbXMuY291cG9uQ29kZTtcbiAgICAgICAgaWYgKGNvdXBvbkNvZGUpIHtcbiAgICAgICAgICB0aGlzLmNvdXBvblNlcnZpY2UuY2xhaW1DdXN0b21lckNvdXBvbihjb3Vwb25Db2RlKTtcbiAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuY291cG9uU2VydmljZVxuICAgICAgICAgICAgLmdldENsYWltQ3VzdG9tZXJDb3Vwb25SZXN1bHRTdWNjZXNzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoc3VjY2VzcyA9PiB7XG4gICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgICAgICAgICB7IGtleTogJ215Q291cG9ucy5jbGFpbUN1c3RvbWVyQ291cG9uJyB9LFxuICAgICAgICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2NvdXBvbnMnIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdub3RGb3VuZCcgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==