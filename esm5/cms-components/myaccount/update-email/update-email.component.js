/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthService, GlobalMessageService, GlobalMessageType, RoutingService, UserService, } from '@spartacus/core';
import { Subscription } from 'rxjs';
var UpdateEmailComponent = /** @class */ (function () {
    function UpdateEmailComponent(routingService, globalMessageService, userService, authService) {
        this.routingService = routingService;
        this.globalMessageService = globalMessageService;
        this.userService = userService;
        this.authService = authService;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    UpdateEmailComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.userService.resetUpdateEmailResultState();
        this.subscription.add(this.userService.get().subscribe(function (result) { return (_this.uid = result.uid); }));
        this.subscription.add(this.userService
            .getUpdateEmailResultSuccess()
            .subscribe(function (success) { return _this.onSuccess(success); }));
        this.isLoading$ = this.userService.getUpdateEmailResultLoading();
    };
    /**
     * @return {?}
     */
    UpdateEmailComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.routingService.go({ cxRoute: 'home' });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    UpdateEmailComponent.prototype.onSubmit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var newUid = _a.newUid, password = _a.password;
        this.newUid = newUid;
        this.userService.updateEmail(this.uid, password, newUid);
    };
    /**
     * @param {?} success
     * @return {?}
     */
    UpdateEmailComponent.prototype.onSuccess = /**
     * @param {?} success
     * @return {?}
     */
    function (success) {
        if (success) {
            this.globalMessageService.add({
                key: 'updateEmailForm.emailUpdateSuccess',
                params: { newUid: this.newUid },
            }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            this.authService.logout();
            this.routingService.go({ cxRoute: 'login' });
        }
    };
    /**
     * @return {?}
     */
    UpdateEmailComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.userService.resetUpdateEmailResultState();
    };
    UpdateEmailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-update-email',
                    template: "<ng-container>\n  <div *ngIf=\"(isLoading$ | async); else loaded\">\n    <div class=\"cx-spinner\">\n      <cx-spinner> </cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #loaded>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-email-form\n          class=\"col-md-6\"\n          (saveEmail)=\"onSubmit($event)\"\n          (cancelEmail)=\"onCancel()\"\n        >\n        </cx-update-email-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    UpdateEmailComponent.ctorParameters = function () { return [
        { type: RoutingService },
        { type: GlobalMessageService },
        { type: UserService },
        { type: AuthService }
    ]; };
    return UpdateEmailComponent;
}());
export { UpdateEmailComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.uid;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.newUid;
    /** @type {?} */
    UpdateEmailComponent.prototype.isLoading$;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC91cGRhdGUtZW1haWwvdXBkYXRlLWVtYWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFdBQVcsRUFDWCxvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhEO0lBTUUsOEJBQ1UsY0FBOEIsRUFDOUIsb0JBQTBDLEVBQzFDLFdBQXdCLEVBQ3hCLFdBQXdCO1FBSHhCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRzFCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUZ2QyxDQUFDOzs7O0lBT0osdUNBQVE7OztJQUFSO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsV0FBVyxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUNwRSxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxXQUFXO2FBQ2IsMkJBQTJCLEVBQUU7YUFDN0IsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUNqRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLDJCQUEyQixFQUFFLENBQUM7SUFDbkUsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCx1Q0FBUTs7OztJQUFSLFVBQVMsRUFBMEQ7WUFBeEQsa0JBQU0sRUFBRSxzQkFBUTtRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVELHdDQUFTOzs7O0lBQVQsVUFBVSxPQUFnQjtRQUN4QixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCO2dCQUNFLEdBQUcsRUFBRSxvQ0FBb0M7Z0JBQ3pDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO2FBQ2hDLEVBQ0QsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7WUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLDJCQUEyQixFQUFFLENBQUM7SUFDakQsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixzaEJBQTRDOztpQkFFN0M7Ozs7Z0JBVEMsY0FBYztnQkFGZCxvQkFBb0I7Z0JBR3BCLFdBQVc7Z0JBSlgsV0FBVzs7SUFvRWIsMkJBQUM7Q0FBQSxBQTVERCxJQTREQztTQXZEWSxvQkFBb0I7Ozs7OztJQVEvQiw0Q0FBMEM7Ozs7O0lBQzFDLG1DQUFvQjs7Ozs7SUFDcEIsc0NBQXVCOztJQUN2QiwwQ0FBZ0M7Ozs7O0lBVDlCLDhDQUFzQzs7Ozs7SUFDdEMsb0RBQWtEOzs7OztJQUNsRCwyQ0FBZ0M7Ozs7O0lBQ2hDLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEF1dGhTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC11cGRhdGUtZW1haWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBkYXRlLWVtYWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXBkYXRlLWVtYWlsLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFVwZGF0ZUVtYWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHByaXZhdGUgdWlkOiBzdHJpbmc7XG4gIHByaXZhdGUgbmV3VWlkOiBzdHJpbmc7XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFVwZGF0ZUVtYWlsUmVzdWx0U3RhdGUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldCgpLnN1YnNjcmliZShyZXN1bHQgPT4gKHRoaXMudWlkID0gcmVzdWx0LnVpZCkpXG4gICAgKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRVcGRhdGVFbWFpbFJlc3VsdFN1Y2Nlc3MoKVxuICAgICAgICAuc3Vic2NyaWJlKHN1Y2Nlc3MgPT4gdGhpcy5vblN1Y2Nlc3Moc3VjY2VzcykpXG4gICAgKTtcbiAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFVwZGF0ZUVtYWlsUmVzdWx0TG9hZGluZygpO1xuICB9XG5cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdob21lJyB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KHsgbmV3VWlkLCBwYXNzd29yZCB9OiB7IG5ld1VpZDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICB0aGlzLm5ld1VpZCA9IG5ld1VpZDtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZUVtYWlsKHRoaXMudWlkLCBwYXNzd29yZCwgbmV3VWlkKTtcbiAgfVxuXG4gIG9uU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAndXBkYXRlRW1haWxGb3JtLmVtYWlsVXBkYXRlU3VjY2VzcycsXG4gICAgICAgICAgcGFyYW1zOiB7IG5ld1VpZDogdGhpcy5uZXdVaWQgfSxcbiAgICAgICAgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICApO1xuICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnbG9naW4nIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFVwZGF0ZUVtYWlsUmVzdWx0U3RhdGUoKTtcbiAgfVxufVxuIl19