/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, RoutingService, UserService, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
var UpdateProfileComponent = /** @class */ (function () {
    function UpdateProfileComponent(routingService, userService, globalMessageService) {
        this.routingService = routingService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    UpdateProfileComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // reset the previous form processing state
        this.userService.resetUpdatePersonalDetailsProcessingState();
        this.user$ = this.userService.get();
        this.titles$ = this.userService.getTitles().pipe(tap(function (titles) {
            if (Object.keys(titles).length === 0) {
                _this.userService.loadTitles();
            }
        }));
        this.loading$ = this.userService.getUpdatePersonalDetailsResultLoading();
        this.subscription.add(this.userService
            .getUpdatePersonalDetailsResultSuccess()
            .subscribe(function (success) { return _this.onSuccess(success); }));
    };
    /**
     * @param {?} success
     * @return {?}
     */
    UpdateProfileComponent.prototype.onSuccess = /**
     * @param {?} success
     * @return {?}
     */
    function (success) {
        if (success) {
            this.globalMessageService.add({
                text: 'Personal details successfully updated',
                type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
            });
            this.routingService.go({ route: 'home' });
        }
    };
    /**
     * @return {?}
     */
    UpdateProfileComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.routingService.go({ route: 'home' });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    UpdateProfileComponent.prototype.onSubmit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var uid = _a.uid, userUpdates = _a.userUpdates;
        this.userService.updatePersonalDetails(uid, userUpdates);
    };
    /**
     * @return {?}
     */
    UpdateProfileComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        // clean up the state
        this.userService.resetUpdatePersonalDetailsProcessingState();
    };
    UpdateProfileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-update-profile',
                    template: "<ng-container>\n  <div *ngIf=\"(loading$ | async); else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-profile-form\n          class=\"col-md-6\"\n          [user]=\"user$ | async\"\n          [titles]=\"titles$ | async\"\n          (cancelled)=\"onCancel()\"\n          (submited)=\"onSubmit($event)\"\n        ></cx-update-profile-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    UpdateProfileComponent.ctorParameters = function () { return [
        { type: RoutingService },
        { type: UserService },
        { type: GlobalMessageService }
    ]; };
    return UpdateProfileComponent;
}());
export { UpdateProfileComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UpdateProfileComponent.prototype.subscription;
    /** @type {?} */
    UpdateProfileComponent.prototype.titles$;
    /** @type {?} */
    UpdateProfileComponent.prototype.user$;
    /** @type {?} */
    UpdateProfileComponent.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    UpdateProfileComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    UpdateProfileComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    UpdateProfileComponent.prototype.globalMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL215LWFjY291bnQvdXBkYXRlLXByb2ZpbGUvdXBkYXRlLXByb2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixjQUFjLEVBR2QsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckM7SUFZRSxnQ0FDVSxjQUE4QixFQUM5QixXQUF3QixFQUN4QixvQkFBMEM7UUFGMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFUNUMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBVXZDLENBQUM7Ozs7SUFFSix5Q0FBUTs7O0lBQVI7UUFBQSxpQkFtQkM7UUFsQkMsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMseUNBQXlDLEVBQUUsQ0FBQztRQUU3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDOUMsR0FBRyxDQUFDLFVBQUEsTUFBTTtZQUNSLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNwQyxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQy9CO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQ0FBcUMsRUFBRSxDQUFDO1FBRXpFLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsV0FBVzthQUNiLHFDQUFxQyxFQUFFO2FBQ3ZDLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FDakQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsMENBQVM7Ozs7SUFBVCxVQUFVLE9BQWdCO1FBQ3hCLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztnQkFDNUIsSUFBSSxFQUFFLHVDQUF1QztnQkFDN0MsSUFBSSxFQUFFLGlCQUFpQixDQUFDLHFCQUFxQjthQUM5QyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCx5Q0FBUTs7OztJQUFSLFVBQVMsRUFBd0Q7WUFBdEQsWUFBRyxFQUFFLDRCQUFXO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztRQUNELHFCQUFxQjtRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLHlDQUF5QyxFQUFFLENBQUM7SUFDL0QsQ0FBQzs7Z0JBL0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qiw4bEJBQThDOztpQkFFL0M7Ozs7Z0JBWkMsY0FBYztnQkFHZCxXQUFXO2dCQUxYLG9CQUFvQjs7SUEwRXRCLDZCQUFDO0NBQUEsQUFoRUQsSUFnRUM7U0EzRFksc0JBQXNCOzs7Ozs7SUFDakMsOENBQTBDOztJQUUxQyx5Q0FBNkI7O0lBQzdCLHVDQUF3Qjs7SUFDeEIsMENBQThCOzs7OztJQUc1QixnREFBc0M7Ozs7O0lBQ3RDLDZDQUFnQzs7Ozs7SUFDaEMsc0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVGl0bGUsXG4gIFVzZXIsXG4gIFVzZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXVwZGF0ZS1wcm9maWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VwZGF0ZS1wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXBkYXRlLXByb2ZpbGUuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgdGl0bGVzJDogT2JzZXJ2YWJsZTxUaXRsZVtdPjtcbiAgdXNlciQ6IE9ic2VydmFibGU8VXNlcj47XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyByZXNldCB0aGUgcHJldmlvdXMgZm9ybSBwcm9jZXNzaW5nIHN0YXRlXG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFVwZGF0ZVBlcnNvbmFsRGV0YWlsc1Byb2Nlc3NpbmdTdGF0ZSgpO1xuXG4gICAgdGhpcy51c2VyJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0KCk7XG4gICAgdGhpcy50aXRsZXMkID0gdGhpcy51c2VyU2VydmljZS5nZXRUaXRsZXMoKS5waXBlKFxuICAgICAgdGFwKHRpdGxlcyA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aXRsZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9hZFRpdGxlcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0VXBkYXRlUGVyc29uYWxEZXRhaWxzUmVzdWx0TG9hZGluZygpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy51c2VyU2VydmljZVxuICAgICAgICAuZ2V0VXBkYXRlUGVyc29uYWxEZXRhaWxzUmVzdWx0U3VjY2VzcygpXG4gICAgICAgIC5zdWJzY3JpYmUoc3VjY2VzcyA9PiB0aGlzLm9uU3VjY2VzcyhzdWNjZXNzKSlcbiAgICApO1xuICB9XG5cbiAgb25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICB0ZXh0OiAnUGVyc29uYWwgZGV0YWlscyBzdWNjZXNzZnVsbHkgdXBkYXRlZCcsXG4gICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTixcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IHJvdXRlOiAnaG9tZScgfSk7XG4gICAgfVxuICB9XG5cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IHJvdXRlOiAnaG9tZScgfSk7XG4gIH1cblxuICBvblN1Ym1pdCh7IHVpZCwgdXNlclVwZGF0ZXMgfTogeyB1aWQ6IHN0cmluZzsgdXNlclVwZGF0ZXM6IFVzZXIgfSk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlUGVyc29uYWxEZXRhaWxzKHVpZCwgdXNlclVwZGF0ZXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICAvLyBjbGVhbiB1cCB0aGUgc3RhdGVcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0VXBkYXRlUGVyc29uYWxEZXRhaWxzUHJvY2Vzc2luZ1N0YXRlKCk7XG4gIH1cbn1cbiJdfQ==