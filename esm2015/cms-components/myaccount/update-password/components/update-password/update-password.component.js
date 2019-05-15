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
            this.globalMessageService.add({ key: 'updatePasswordForm.passwordUpdateSuccess' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            this.routingService.go({ cxRoute: 'home' });
        }
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.routingService.go({ cxRoute: 'home' });
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
                template: "<ng-container>\n  <div *ngIf=\"(loading$ | async); else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-password-form\n          class=\"col-md-6\"\n          (cancelled)=\"onCancel()\"\n          (submited)=\"onSubmit($event)\"\n        ></cx-update-password-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC91cGRhdGUtcGFzc3dvcmQvY29tcG9uZW50cy91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsY0FBYyxFQUNkLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXRDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQUtsQyxZQUNVLGNBQThCLEVBQzlCLFdBQXdCLEVBQ3hCLG9CQUEwQztRQUYxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVA1QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFRdkMsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLCtCQUErQixFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLDhCQUE4QixFQUFFLENBQUM7UUFDbEUsSUFBSSxDQUFDLFdBQVc7YUFDYixHQUFHLEVBQUU7YUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsV0FBVzthQUNiLDhCQUE4QixFQUFFO2FBQ2hDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FDakQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE9BQWdCO1FBQ3hCLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsRUFBRSxHQUFHLEVBQUUsMENBQTBDLEVBQUUsRUFDbkQsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7WUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEVBQ1AsV0FBVyxFQUNYLFdBQVcsR0FJWjtRQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLCtCQUErQixFQUFFLENBQUM7SUFDckQsQ0FBQzs7O1lBNURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixvaEJBQStDO2FBQ2hEOzs7O1lBVEMsY0FBYztZQUNkLFdBQVc7WUFIWCxvQkFBb0I7Ozs7Ozs7SUFhcEIsK0NBQTBDOzs7OztJQUMxQyx5Q0FBdUI7O0lBQ3ZCLDJDQUE4Qjs7Ozs7SUFHNUIsaURBQXNDOzs7OztJQUN0Qyw4Q0FBZ0M7Ozs7O0lBQ2hDLHVEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFVzZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC11cGRhdGUtcGFzc3dvcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlUGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBwcml2YXRlIHVzZXJJZDogc3RyaW5nO1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFVwZGF0ZVBhc3N3b3JkUHJvY2Vzc1N0YXRlKCk7XG4gICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0VXBkYXRlUGFzc3dvcmRSZXN1bHRMb2FkaW5nKCk7XG4gICAgdGhpcy51c2VyU2VydmljZVxuICAgICAgLmdldCgpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSh1c2VyID0+IHtcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VyLnVpZDtcbiAgICAgIH0pO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMudXNlclNlcnZpY2VcbiAgICAgICAgLmdldFVwZGF0ZVBhc3N3b3JkUmVzdWx0U3VjY2VzcygpXG4gICAgICAgIC5zdWJzY3JpYmUoc3VjY2VzcyA9PiB0aGlzLm9uU3VjY2VzcyhzdWNjZXNzKSlcbiAgICApO1xuICB9XG5cbiAgb25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHsga2V5OiAndXBkYXRlUGFzc3dvcmRGb3JtLnBhc3N3b3JkVXBkYXRlU3VjY2VzcycgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICApO1xuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdob21lJyB9KTtcbiAgICB9XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2hvbWUnIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoe1xuICAgIG9sZFBhc3N3b3JkLFxuICAgIG5ld1Bhc3N3b3JkLFxuICB9OiB7XG4gICAgb2xkUGFzc3dvcmQ6IHN0cmluZztcbiAgICBuZXdQYXNzd29yZDogc3RyaW5nO1xuICB9KTogdm9pZCB7XG4gICAgdGhpcy51c2VyU2VydmljZS51cGRhdGVQYXNzd29yZCh0aGlzLnVzZXJJZCwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFVwZGF0ZVBhc3N3b3JkUHJvY2Vzc1N0YXRlKCk7XG4gIH1cbn1cbiJdfQ==