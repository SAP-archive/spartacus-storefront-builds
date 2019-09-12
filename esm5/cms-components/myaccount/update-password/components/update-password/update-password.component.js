/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, RoutingService, UserService, } from '@spartacus/core';
import { Subscription } from 'rxjs';
var UpdatePasswordComponent = /** @class */ (function () {
    function UpdatePasswordComponent(routingService, userService, globalMessageService) {
        this.routingService = routingService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    UpdatePasswordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.userService.resetUpdatePasswordProcessState();
        this.loading$ = this.userService.getUpdatePasswordResultLoading();
        this.subscription.add(this.userService
            .getUpdatePasswordResultSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        function (success) { return _this.onSuccess(success); })));
    };
    /**
     * @param {?} success
     * @return {?}
     */
    UpdatePasswordComponent.prototype.onSuccess = /**
     * @param {?} success
     * @return {?}
     */
    function (success) {
        if (success) {
            this.globalMessageService.add({ key: 'updatePasswordForm.passwordUpdateSuccess' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            this.routingService.go({ cxRoute: 'home' });
        }
    };
    /**
     * @return {?}
     */
    UpdatePasswordComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.routingService.go({ cxRoute: 'home' });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    UpdatePasswordComponent.prototype.onSubmit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var oldPassword = _a.oldPassword, newPassword = _a.newPassword;
        this.userService.updatePassword(oldPassword, newPassword);
    };
    /**
     * @return {?}
     */
    UpdatePasswordComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
        this.userService.resetUpdatePasswordProcessState();
    };
    UpdatePasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-update-password',
                    template: "<ng-container>\n  <div *ngIf=\"loading$ | async; else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-password-form\n          class=\"col-md-6\"\n          (cancelled)=\"onCancel()\"\n          (submited)=\"onSubmit($event)\"\n        ></cx-update-password-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    UpdatePasswordComponent.ctorParameters = function () { return [
        { type: RoutingService },
        { type: UserService },
        { type: GlobalMessageService }
    ]; };
    return UpdatePasswordComponent;
}());
export { UpdatePasswordComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UpdatePasswordComponent.prototype.subscription;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC91cGRhdGUtcGFzc3dvcmQvY29tcG9uZW50cy91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsY0FBYyxFQUNkLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFaEQ7SUFRRSxpQ0FDVSxjQUE4QixFQUM5QixXQUF3QixFQUN4QixvQkFBMEM7UUFGMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFONUMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBT3ZDLENBQUM7Ozs7SUFFSiwwQ0FBUTs7O0lBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxXQUFXLENBQUMsK0JBQStCLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsOEJBQThCLEVBQUUsQ0FBQztRQUNsRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLFdBQVc7YUFDYiw4QkFBOEIsRUFBRTthQUNoQyxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUF2QixDQUF1QixFQUFDLENBQ2pELENBQUM7SUFDSixDQUFDOzs7OztJQUVELDJDQUFTOzs7O0lBQVQsVUFBVSxPQUFnQjtRQUN4QixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLEVBQUUsR0FBRyxFQUFFLDBDQUEwQyxFQUFFLEVBQ25ELGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsMENBQVE7Ozs7SUFBUixVQUFTLEVBTVI7WUFMQyw0QkFBVyxFQUNYLDRCQUFXO1FBS1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCw2Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWhDLElBQUksQ0FBQyxXQUFXLENBQUMsK0JBQStCLEVBQUUsQ0FBQztJQUNyRCxDQUFDOztnQkFwREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLGtoQkFBK0M7aUJBQ2hEOzs7O2dCQVJDLGNBQWM7Z0JBQ2QsV0FBVztnQkFIWCxvQkFBb0I7O0lBNER0Qiw4QkFBQztDQUFBLEFBckRELElBcURDO1NBakRZLHVCQUF1Qjs7Ozs7O0lBQ2xDLCtDQUEwQzs7SUFDMUMsMkNBQThCOzs7OztJQUc1QixpREFBc0M7Ozs7O0lBQ3RDLDhDQUFnQzs7Ozs7SUFDaEMsdURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdXBkYXRlLXBhc3N3b3JkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VwZGF0ZS1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFVwZGF0ZVBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVzZXRVcGRhdGVQYXNzd29yZFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFVwZGF0ZVBhc3N3b3JkUmVzdWx0TG9hZGluZygpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMudXNlclNlcnZpY2VcbiAgICAgICAgLmdldFVwZGF0ZVBhc3N3b3JkUmVzdWx0U3VjY2VzcygpXG4gICAgICAgIC5zdWJzY3JpYmUoc3VjY2VzcyA9PiB0aGlzLm9uU3VjY2VzcyhzdWNjZXNzKSlcbiAgICApO1xuICB9XG5cbiAgb25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHsga2V5OiAndXBkYXRlUGFzc3dvcmRGb3JtLnBhc3N3b3JkVXBkYXRlU3VjY2VzcycgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICApO1xuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdob21lJyB9KTtcbiAgICB9XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2hvbWUnIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoe1xuICAgIG9sZFBhc3N3b3JkLFxuICAgIG5ld1Bhc3N3b3JkLFxuICB9OiB7XG4gICAgb2xkUGFzc3dvcmQ6IHN0cmluZztcbiAgICBuZXdQYXNzd29yZDogc3RyaW5nO1xuICB9KTogdm9pZCB7XG4gICAgdGhpcy51c2VyU2VydmljZS51cGRhdGVQYXNzd29yZChvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblxuICAgIHRoaXMudXNlclNlcnZpY2UucmVzZXRVcGRhdGVQYXNzd29yZFByb2Nlc3NTdGF0ZSgpO1xuICB9XG59XG4iXX0=