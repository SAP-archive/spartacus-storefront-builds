/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, RoutingService, UserService, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
export class UpdatePasswordComponent {
    /**
     * @param {?} routingService
     * @param {?} userService
     * @param {?} globalMessageService
     */
    constructor(routingService, userService, globalMessageService) {
        this.routingService = routingService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.userService.resetUpdatePasswordProcessState();
        this.loading$ = this.userService.getUpdatePasswordResultLoading();
        this.userService
            .get()
            .pipe(take(1))
            .subscribe(user => {
            this.userId = user.uid;
        });
        this.subscription.add(this.userService
            .getUpdatePasswordResultSuccess()
            .subscribe(success => this.onSuccess(success)));
    }
    /**
     * @param {?} success
     * @return {?}
     */
    onSuccess(success) {
        if (success) {
            this.globalMessageService.add({
                text: 'Password updated with success',
                type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
            });
            this.routingService.go({ route: 'home' });
        }
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.routingService.go({ route: 'home' });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onSubmit({ oldPassword, newPassword, }) {
        this.userService.updatePassword(this.userId, oldPassword, newPassword);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.userService.resetUpdatePasswordProcessState();
    }
}
UpdatePasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-update-password',
                template: "<ng-container>\n  <div *ngIf=\"(loading$ | async); else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-password-form\n          class=\"col-md-6\"\n          (cancelled)=\"onCancel()\"\n          (submited)=\"onSubmit($event)\"\n        ></cx-update-password-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
UpdatePasswordComponent.ctorParameters = () => [
    { type: RoutingService },
    { type: UserService },
    { type: GlobalMessageService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    UpdatePasswordComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    UpdatePasswordComponent.prototype.userId;
    /** @type {?} */
    UpdatePasswordComponent.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    UpdatePasswordComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    UpdatePasswordComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    UpdatePasswordComponent.prototype.globalMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9teS1hY2NvdW50L3VwZGF0ZS1wYXNzd29yZC9jb21wb25lbnRzL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPdEMsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBS2xDLFlBQ1UsY0FBOEIsRUFDOUIsV0FBd0IsRUFDeEIsb0JBQTBDO1FBRjFDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBUDVDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVF2QyxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsK0JBQStCLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsOEJBQThCLEVBQUUsQ0FBQztRQUNsRSxJQUFJLENBQUMsV0FBVzthQUNiLEdBQUcsRUFBRTthQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxXQUFXO2FBQ2IsOEJBQThCLEVBQUU7YUFDaEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUNqRCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsT0FBZ0I7UUFDeEIsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDO2dCQUM1QixJQUFJLEVBQUUsK0JBQStCO2dCQUNyQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMscUJBQXFCO2FBQzlDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsRUFDUCxXQUFXLEVBQ1gsV0FBVyxHQUlaO1FBQ0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsK0JBQStCLEVBQUUsQ0FBQztJQUNyRCxDQUFDOzs7WUE3REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLG9oQkFBK0M7O2FBRWhEOzs7O1lBVkMsY0FBYztZQUNkLFdBQVc7WUFIWCxvQkFBb0I7Ozs7Ozs7SUFjcEIsK0NBQTBDOzs7OztJQUMxQyx5Q0FBdUI7O0lBQ3ZCLDJDQUE4Qjs7Ozs7SUFHNUIsaURBQXNDOzs7OztJQUN0Qyw4Q0FBZ0M7Ozs7O0lBQ2hDLHVEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFVzZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC11cGRhdGUtcGFzc3dvcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFVwZGF0ZVBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgcHJpdmF0ZSB1c2VySWQ6IHN0cmluZztcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVzZXRVcGRhdGVQYXNzd29yZFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFVwZGF0ZVBhc3N3b3JkUmVzdWx0TG9hZGluZygpO1xuICAgIHRoaXMudXNlclNlcnZpY2VcbiAgICAgIC5nZXQoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUodXNlciA9PiB7XG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlci51aWQ7XG4gICAgICB9KTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRVcGRhdGVQYXNzd29yZFJlc3VsdFN1Y2Nlc3MoKVxuICAgICAgICAuc3Vic2NyaWJlKHN1Y2Nlc3MgPT4gdGhpcy5vblN1Y2Nlc3Moc3VjY2VzcykpXG4gICAgKTtcbiAgfVxuXG4gIG9uU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgdGV4dDogJ1Bhc3N3b3JkIHVwZGF0ZWQgd2l0aCBzdWNjZXNzJyxcbiAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgcm91dGU6ICdob21lJyB9KTtcbiAgICB9XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgcm91dGU6ICdob21lJyB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KHtcbiAgICBvbGRQYXNzd29yZCxcbiAgICBuZXdQYXNzd29yZCxcbiAgfToge1xuICAgIG9sZFBhc3N3b3JkOiBzdHJpbmc7XG4gICAgbmV3UGFzc3dvcmQ6IHN0cmluZztcbiAgfSk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlUGFzc3dvcmQodGhpcy51c2VySWQsIG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMudXNlclNlcnZpY2UucmVzZXRVcGRhdGVQYXNzd29yZFByb2Nlc3NTdGF0ZSgpO1xuICB9XG59XG4iXX0=