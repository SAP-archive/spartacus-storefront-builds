import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RoutingService, CustomerCouponService, GlobalMessageService, GlobalMessageType, } from '@spartacus/core';
var CouponClaimComponent = /** @class */ (function () {
    function CouponClaimComponent(couponService, routingService, messageService) {
        this.couponService = couponService;
        this.routingService = routingService;
        this.messageService = messageService;
    }
    CouponClaimComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routingService
            .getRouterState()
            .subscribe(function (k) {
            var couponCode = k.state.params.couponCode;
            if (couponCode) {
                _this.couponService.claimCustomerCoupon(couponCode);
                _this.subscription = _this.couponService
                    .getClaimCustomerCouponResultSuccess()
                    .subscribe(function (success) {
                    if (success) {
                        _this.messageService.add({ key: 'myCoupons.claimCustomerCoupon' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
                    }
                    _this.routingService.go({ cxRoute: 'coupons' });
                });
            }
            else {
                _this.routingService.go({ cxRoute: 'notFound' });
            }
        })
            .unsubscribe();
    };
    CouponClaimComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    CouponClaimComponent.ctorParameters = function () { return [
        { type: CustomerCouponService },
        { type: RoutingService },
        { type: GlobalMessageService }
    ]; };
    CouponClaimComponent = __decorate([
        Component({
            template: "",
            selector: 'cx-coupon-claim'
        })
    ], CouponClaimComponent);
    return CouponClaimComponent;
}());
export { CouponClaimComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLWNsYWltLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9teS1jb3Vwb25zL2NvdXBvbi1jbGFpbS9jb3Vwb24tY2xhaW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsY0FBYyxFQUNkLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsaUJBQWlCLEdBQ2xCLE1BQU0saUJBQWlCLENBQUM7QUFPekI7SUFHRSw4QkFDWSxhQUFvQyxFQUNwQyxjQUE4QixFQUM5QixjQUFvQztRQUZwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFDcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtJQUM3QyxDQUFDO0lBRUosdUNBQVEsR0FBUjtRQUFBLGlCQXVCQztRQXRCQyxJQUFJLENBQUMsY0FBYzthQUNoQixjQUFjLEVBQUU7YUFDaEIsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUNWLElBQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUM3QyxJQUFJLFVBQVUsRUFBRTtnQkFDZCxLQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNuRCxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxhQUFhO3FCQUNuQyxtQ0FBbUMsRUFBRTtxQkFDckMsU0FBUyxDQUFDLFVBQUEsT0FBTztvQkFDaEIsSUFBSSxPQUFPLEVBQUU7d0JBQ1gsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQ3JCLEVBQUUsR0FBRyxFQUFFLCtCQUErQixFQUFFLEVBQ3hDLGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO3FCQUNIO29CQUNELEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7Z0JBQ2pELENBQUMsQ0FBQyxDQUFDO2FBQ047aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQzthQUNqRDtRQUNILENBQUMsQ0FBQzthQUNELFdBQVcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCwwQ0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOztnQkFsQzBCLHFCQUFxQjtnQkFDcEIsY0FBYztnQkFDZCxvQkFBb0I7O0lBTnJDLG9CQUFvQjtRQUpoQyxTQUFTLENBQUM7WUFDVCxZQUE0QztZQUM1QyxRQUFRLEVBQUUsaUJBQWlCO1NBQzVCLENBQUM7T0FDVyxvQkFBb0IsQ0F1Q2hDO0lBQUQsMkJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQXZDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBSb3V0aW5nU2VydmljZSxcbiAgQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi9jb3Vwb24tY2xhaW0uY29tcG9uZW50Lmh0bWwnLFxuICBzZWxlY3RvcjogJ2N4LWNvdXBvbi1jbGFpbScsXG59KVxuZXhwb3J0IGNsYXNzIENvdXBvbkNsYWltQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY291cG9uU2VydmljZTogQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmdldFJvdXRlclN0YXRlKClcbiAgICAgIC5zdWJzY3JpYmUoayA9PiB7XG4gICAgICAgIGNvbnN0IGNvdXBvbkNvZGUgPSBrLnN0YXRlLnBhcmFtcy5jb3Vwb25Db2RlO1xuICAgICAgICBpZiAoY291cG9uQ29kZSkge1xuICAgICAgICAgIHRoaXMuY291cG9uU2VydmljZS5jbGFpbUN1c3RvbWVyQ291cG9uKGNvdXBvbkNvZGUpO1xuICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jb3Vwb25TZXJ2aWNlXG4gICAgICAgICAgICAuZ2V0Q2xhaW1DdXN0b21lckNvdXBvblJlc3VsdFN1Y2Nlc3MoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShzdWNjZXNzID0+IHtcbiAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgICAgICAgIHsga2V5OiAnbXlDb3Vwb25zLmNsYWltQ3VzdG9tZXJDb3Vwb24nIH0sXG4gICAgICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnY291cG9ucycgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ25vdEZvdW5kJyB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19