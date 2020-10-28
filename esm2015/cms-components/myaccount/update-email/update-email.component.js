import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import { AuthService, GlobalMessageService, GlobalMessageType, RoutingService, UserService, } from '@spartacus/core';
import { Subscription } from 'rxjs';
export class UpdateEmailComponent {
    constructor(routingService, globalMessageService, userService, authService) {
        this.routingService = routingService;
        this.globalMessageService = globalMessageService;
        this.userService = userService;
        this.authService = authService;
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.userService.resetUpdateEmailResultState();
        this.subscription.add(this.userService
            .getUpdateEmailResultSuccess()
            .subscribe((success) => this.onSuccess(success)));
        this.isLoading$ = this.userService.getUpdateEmailResultLoading();
    }
    onCancel() {
        this.routingService.go({ cxRoute: 'home' });
    }
    onSubmit({ newUid, password }) {
        this.newUid = newUid;
        this.userService.updateEmail(password, newUid);
    }
    onSuccess(success) {
        return __awaiter(this, void 0, void 0, function* () {
            if (success) {
                this.globalMessageService.add({
                    key: 'updateEmailForm.emailUpdateSuccess',
                    params: { newUid: this.newUid },
                }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
                yield this.authService.logout();
                this.routingService.go({ cxRoute: 'login' }, null, {
                    state: {
                        newUid: this.newUid,
                    },
                });
            }
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.userService.resetUpdateEmailResultState();
    }
}
UpdateEmailComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-update-email',
                template: "<ng-container>\n  <div *ngIf=\"isLoading$ | async; else loaded\">\n    <div class=\"cx-spinner\">\n      <cx-spinner> </cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #loaded>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-email-form\n          class=\"col-md-6\"\n          (saveEmail)=\"onSubmit($event)\"\n          (cancelEmail)=\"onCancel()\"\n        >\n        </cx-update-email-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
            },] }
];
UpdateEmailComponent.ctorParameters = () => [
    { type: RoutingService },
    { type: GlobalMessageService },
    { type: UserService },
    { type: AuthService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC91cGRhdGUtZW1haWwvdXBkYXRlLWVtYWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFdBQVcsRUFDWCxvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTWhELE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsWUFDVSxjQUE4QixFQUM5QixvQkFBMEMsRUFDMUMsV0FBd0IsRUFDeEIsV0FBd0I7UUFIeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFHMUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRnZDLENBQUM7SUFNSixRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsV0FBVzthQUNiLDJCQUEyQixFQUFFO2FBQzdCLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUNuRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLDJCQUEyQixFQUFFLENBQUM7SUFDbkUsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUF3QztRQUNqRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVLLFNBQVMsQ0FBQyxPQUFnQjs7WUFDOUIsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0I7b0JBQ0UsR0FBRyxFQUFFLG9DQUFvQztvQkFDekMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7aUJBQ2hDLEVBQ0QsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7Z0JBQ0YsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUU7b0JBQ2pELEtBQUssRUFBRTt3QkFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07cUJBQ3BCO2lCQUNGLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQztLQUFBO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0lBQ2pELENBQUM7OztZQXhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0Isb2hCQUE0QzthQUM3Qzs7O1lBUkMsY0FBYztZQUZkLG9CQUFvQjtZQUdwQixXQUFXO1lBSlgsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEF1dGhTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC11cGRhdGUtZW1haWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBkYXRlLWVtYWlsLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlRW1haWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgcHJpdmF0ZSBuZXdVaWQ6IHN0cmluZztcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0VXBkYXRlRW1haWxSZXN1bHRTdGF0ZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMudXNlclNlcnZpY2VcbiAgICAgICAgLmdldFVwZGF0ZUVtYWlsUmVzdWx0U3VjY2VzcygpXG4gICAgICAgIC5zdWJzY3JpYmUoKHN1Y2Nlc3MpID0+IHRoaXMub25TdWNjZXNzKHN1Y2Nlc3MpKVxuICAgICk7XG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy51c2VyU2VydmljZS5nZXRVcGRhdGVFbWFpbFJlc3VsdExvYWRpbmcoKTtcbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnaG9tZScgfSk7XG4gIH1cblxuICBvblN1Ym1pdCh7IG5ld1VpZCwgcGFzc3dvcmQgfTogeyBuZXdVaWQ6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgdGhpcy5uZXdVaWQgPSBuZXdVaWQ7XG4gICAgdGhpcy51c2VyU2VydmljZS51cGRhdGVFbWFpbChwYXNzd29yZCwgbmV3VWlkKTtcbiAgfVxuXG4gIGFzeW5jIG9uU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAndXBkYXRlRW1haWxGb3JtLmVtYWlsVXBkYXRlU3VjY2VzcycsXG4gICAgICAgICAgcGFyYW1zOiB7IG5ld1VpZDogdGhpcy5uZXdVaWQgfSxcbiAgICAgICAgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICApO1xuICAgICAgYXdhaXQgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnbG9naW4nIH0sIG51bGwsIHtcbiAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICBuZXdVaWQ6IHRoaXMubmV3VWlkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0VXBkYXRlRW1haWxSZXN1bHRTdGF0ZSgpO1xuICB9XG59XG4iXX0=