import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RoutingService, CustomerCouponService, GlobalMessageService, GlobalMessageType, } from '@spartacus/core';
let CouponClaimComponent = class CouponClaimComponent {
    constructor(couponService, routingService, messageService) {
        this.couponService = couponService;
        this.routingService = routingService;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.routingService
            .getRouterState()
            .subscribe(k => {
            const couponCode = k.state.params.couponCode;
            if (couponCode) {
                this.couponService.claimCustomerCoupon(couponCode);
                this.subscription = this.couponService
                    .getClaimCustomerCouponResultSuccess()
                    .subscribe(success => {
                    if (success) {
                        this.messageService.add({ key: 'myCoupons.claimCustomerCoupon' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
                    }
                    this.routingService.go({ cxRoute: 'coupons' });
                });
            }
            else {
                this.routingService.go({ cxRoute: 'notFound' });
            }
        })
            .unsubscribe();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
CouponClaimComponent.ctorParameters = () => [
    { type: CustomerCouponService },
    { type: RoutingService },
    { type: GlobalMessageService }
];
CouponClaimComponent = __decorate([
    Component({
        template: "",
        selector: 'cx-coupon-claim'
    })
], CouponClaimComponent);
export { CouponClaimComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLWNsYWltLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9teS1jb3Vwb25zL2NvdXBvbi1jbGFpbS9jb3Vwb24tY2xhaW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsY0FBYyxFQUNkLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsaUJBQWlCLEdBQ2xCLE1BQU0saUJBQWlCLENBQUM7QUFPekIsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFHL0IsWUFDWSxhQUFvQyxFQUNwQyxjQUE4QixFQUM5QixjQUFvQztRQUZwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFDcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtJQUM3QyxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjO2FBQ2hCLGNBQWMsRUFBRTthQUNoQixTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDYixNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDN0MsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYTtxQkFDbkMsbUNBQW1DLEVBQUU7cUJBQ3JDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDbkIsSUFBSSxPQUFPLEVBQUU7d0JBQ1gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQ3JCLEVBQUUsR0FBRyxFQUFFLCtCQUErQixFQUFFLEVBQ3hDLGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO3FCQUNIO29CQUNELElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7Z0JBQ2pELENBQUMsQ0FBQyxDQUFDO2FBQ047aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQzthQUNqRDtRQUNILENBQUMsQ0FBQzthQUNELFdBQVcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFuQzRCLHFCQUFxQjtZQUNwQixjQUFjO1lBQ2Qsb0JBQW9COztBQU5yQyxvQkFBb0I7SUFKaEMsU0FBUyxDQUFDO1FBQ1QsWUFBNEM7UUFDNUMsUUFBUSxFQUFFLGlCQUFpQjtLQUM1QixDQUFDO0dBQ1csb0JBQW9CLENBdUNoQztTQXZDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBSb3V0aW5nU2VydmljZSxcbiAgQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi9jb3Vwb24tY2xhaW0uY29tcG9uZW50Lmh0bWwnLFxuICBzZWxlY3RvcjogJ2N4LWNvdXBvbi1jbGFpbScsXG59KVxuZXhwb3J0IGNsYXNzIENvdXBvbkNsYWltQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY291cG9uU2VydmljZTogQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmdldFJvdXRlclN0YXRlKClcbiAgICAgIC5zdWJzY3JpYmUoayA9PiB7XG4gICAgICAgIGNvbnN0IGNvdXBvbkNvZGUgPSBrLnN0YXRlLnBhcmFtcy5jb3Vwb25Db2RlO1xuICAgICAgICBpZiAoY291cG9uQ29kZSkge1xuICAgICAgICAgIHRoaXMuY291cG9uU2VydmljZS5jbGFpbUN1c3RvbWVyQ291cG9uKGNvdXBvbkNvZGUpO1xuICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jb3Vwb25TZXJ2aWNlXG4gICAgICAgICAgICAuZ2V0Q2xhaW1DdXN0b21lckNvdXBvblJlc3VsdFN1Y2Nlc3MoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShzdWNjZXNzID0+IHtcbiAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgICAgICAgIHsga2V5OiAnbXlDb3Vwb25zLmNsYWltQ3VzdG9tZXJDb3Vwb24nIH0sXG4gICAgICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnY291cG9ucycgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ25vdEZvdW5kJyB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19