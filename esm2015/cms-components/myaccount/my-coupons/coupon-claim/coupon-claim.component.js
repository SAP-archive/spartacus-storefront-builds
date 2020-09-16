import { Component } from '@angular/core';
import { RoutingService, CustomerCouponService, GlobalMessageService, GlobalMessageType, } from '@spartacus/core';
export class CouponClaimComponent {
    constructor(couponService, routingService, messageService) {
        this.couponService = couponService;
        this.routingService = routingService;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.routingService
            .getRouterState()
            .subscribe((k) => {
            const couponCode = k.state.params.couponCode;
            if (couponCode) {
                this.couponService.claimCustomerCoupon(couponCode);
                this.subscription = this.couponService
                    .getClaimCustomerCouponResultSuccess()
                    .subscribe((success) => {
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
}
CouponClaimComponent.decorators = [
    { type: Component, args: [{
                template: "",
                selector: 'cx-coupon-claim'
            },] }
];
CouponClaimComponent.ctorParameters = () => [
    { type: CustomerCouponService },
    { type: RoutingService },
    { type: GlobalMessageService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLWNsYWltLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC9teS1jb3Vwb25zL2NvdXBvbi1jbGFpbS9jb3Vwb24tY2xhaW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDTCxjQUFjLEVBQ2QscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSxpQkFBaUIsQ0FBQztBQU96QixNQUFNLE9BQU8sb0JBQW9CO0lBRy9CLFlBQ1ksYUFBb0MsRUFDcEMsY0FBOEIsRUFDOUIsY0FBb0M7UUFGcEMsa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7SUFDN0MsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYzthQUNoQixjQUFjLEVBQUU7YUFDaEIsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDZixNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDN0MsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYTtxQkFDbkMsbUNBQW1DLEVBQUU7cUJBQ3JDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO29CQUNyQixJQUFJLE9BQU8sRUFBRTt3QkFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FDckIsRUFBRSxHQUFHLEVBQUUsK0JBQStCLEVBQUUsRUFDeEMsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7cUJBQ0g7b0JBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztnQkFDakQsQ0FBQyxDQUFDLENBQUM7YUFDTjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO2FBQ2pEO1FBQ0gsQ0FBQyxDQUFDO2FBQ0QsV0FBVyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7OztZQTFDRixTQUFTLFNBQUM7Z0JBQ1QsWUFBNEM7Z0JBQzVDLFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7OztZQVRDLHFCQUFxQjtZQURyQixjQUFjO1lBRWQsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUm91dGluZ1NlcnZpY2UsXG4gIEN1c3RvbWVyQ291cG9uU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJy4vY291cG9uLWNsYWltLmNvbXBvbmVudC5odG1sJyxcbiAgc2VsZWN0b3I6ICdjeC1jb3Vwb24tY2xhaW0nLFxufSlcbmV4cG9ydCBjbGFzcyBDb3Vwb25DbGFpbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvdXBvblNlcnZpY2U6IEN1c3RvbWVyQ291cG9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBtZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRSb3V0ZXJTdGF0ZSgpXG4gICAgICAuc3Vic2NyaWJlKChrKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdXBvbkNvZGUgPSBrLnN0YXRlLnBhcmFtcy5jb3Vwb25Db2RlO1xuICAgICAgICBpZiAoY291cG9uQ29kZSkge1xuICAgICAgICAgIHRoaXMuY291cG9uU2VydmljZS5jbGFpbUN1c3RvbWVyQ291cG9uKGNvdXBvbkNvZGUpO1xuICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jb3Vwb25TZXJ2aWNlXG4gICAgICAgICAgICAuZ2V0Q2xhaW1DdXN0b21lckNvdXBvblJlc3VsdFN1Y2Nlc3MoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoc3VjY2VzcykgPT4ge1xuICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgICAgICAgICAgeyBrZXk6ICdteUNvdXBvbnMuY2xhaW1DdXN0b21lckNvdXBvbicgfSxcbiAgICAgICAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdjb3Vwb25zJyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnbm90Rm91bmQnIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=