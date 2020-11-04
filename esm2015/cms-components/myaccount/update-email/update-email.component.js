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
                // TODO(#9638): Use logout route when it will support passing redirect url
                yield this.authService.coreLogout();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC91cGRhdGUtZW1haWwvdXBkYXRlLWVtYWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFdBQVcsRUFDWCxvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTWhELE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsWUFDVSxjQUE4QixFQUM5QixvQkFBMEMsRUFDMUMsV0FBd0IsRUFDeEIsV0FBd0I7UUFIeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFHMUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRnZDLENBQUM7SUFNSixRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsV0FBVzthQUNiLDJCQUEyQixFQUFFO2FBQzdCLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUNuRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLDJCQUEyQixFQUFFLENBQUM7SUFDbkUsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUF3QztRQUNqRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVLLFNBQVMsQ0FBQyxPQUFnQjs7WUFDOUIsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0I7b0JBQ0UsR0FBRyxFQUFFLG9DQUFvQztvQkFDekMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7aUJBQ2hDLEVBQ0QsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7Z0JBQ0YsMEVBQTBFO2dCQUMxRSxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRTtvQkFDakQsS0FBSyxFQUFFO3dCQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtxQkFDcEI7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDO0tBQUE7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLDJCQUEyQixFQUFFLENBQUM7SUFDakQsQ0FBQzs7O1lBekRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixvaEJBQTRDO2FBQzdDOzs7WUFSQyxjQUFjO1lBRmQsb0JBQW9CO1lBR3BCLFdBQVc7WUFKWCxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXV0aFNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFVzZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXVwZGF0ZS1lbWFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGRhdGUtZW1haWwuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBVcGRhdGVFbWFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBwcml2YXRlIG5ld1VpZDogc3RyaW5nO1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVzZXRVcGRhdGVFbWFpbFJlc3VsdFN0YXRlKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy51c2VyU2VydmljZVxuICAgICAgICAuZ2V0VXBkYXRlRW1haWxSZXN1bHRTdWNjZXNzKClcbiAgICAgICAgLnN1YnNjcmliZSgoc3VjY2VzcykgPT4gdGhpcy5vblN1Y2Nlc3Moc3VjY2VzcykpXG4gICAgKTtcbiAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFVwZGF0ZUVtYWlsUmVzdWx0TG9hZGluZygpO1xuICB9XG5cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdob21lJyB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KHsgbmV3VWlkLCBwYXNzd29yZCB9OiB7IG5ld1VpZDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICB0aGlzLm5ld1VpZCA9IG5ld1VpZDtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZUVtYWlsKHBhc3N3b3JkLCBuZXdVaWQpO1xuICB9XG5cbiAgYXN5bmMgb25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICd1cGRhdGVFbWFpbEZvcm0uZW1haWxVcGRhdGVTdWNjZXNzJyxcbiAgICAgICAgICBwYXJhbXM6IHsgbmV3VWlkOiB0aGlzLm5ld1VpZCB9LFxuICAgICAgICB9LFxuICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICk7XG4gICAgICAvLyBUT0RPKCM5NjM4KTogVXNlIGxvZ291dCByb3V0ZSB3aGVuIGl0IHdpbGwgc3VwcG9ydCBwYXNzaW5nIHJlZGlyZWN0IHVybFxuICAgICAgYXdhaXQgdGhpcy5hdXRoU2VydmljZS5jb3JlTG9nb3V0KCk7XG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2xvZ2luJyB9LCBudWxsLCB7XG4gICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgbmV3VWlkOiB0aGlzLm5ld1VpZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFVwZGF0ZUVtYWlsUmVzdWx0U3RhdGUoKTtcbiAgfVxufVxuIl19