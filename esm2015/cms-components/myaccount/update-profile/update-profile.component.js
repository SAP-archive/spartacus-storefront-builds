/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, RoutingService, UserService, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
export class UpdateProfileComponent {
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
        // reset the previous form processing state
        this.userService.resetUpdatePersonalDetailsProcessingState();
        this.user$ = this.userService.get();
        this.titles$ = this.userService.getTitles().pipe(tap((/**
         * @param {?} titles
         * @return {?}
         */
        titles => {
            if (Object.keys(titles).length === 0) {
                this.userService.loadTitles();
            }
        })));
        this.loading$ = this.userService.getUpdatePersonalDetailsResultLoading();
        this.subscription.add(this.userService
            .getUpdatePersonalDetailsResultSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        success => this.onSuccess(success))));
    }
    /**
     * @param {?} success
     * @return {?}
     */
    onSuccess(success) {
        if (success) {
            this.globalMessageService.add({ key: 'updateProfileForm.profileUpdateSuccess' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
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
    onSubmit({ userUpdates }) {
        this.userService.updatePersonalDetails(userUpdates);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
        // clean up the state
        this.userService.resetUpdatePersonalDetailsProcessingState();
    }
}
UpdateProfileComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-update-profile',
                template: "<ng-container>\n  <div *ngIf=\"loading$ | async; else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-profile-form\n          *ngIf=\"(user$ | async)?.uid\"\n          class=\"col-md-6\"\n          [user]=\"user$ | async\"\n          [titles]=\"titles$ | async\"\n          (cancelled)=\"onCancel()\"\n          (submited)=\"onSubmit($event)\"\n        ></cx-update-profile-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
UpdateProfileComponent.ctorParameters = () => [
    { type: RoutingService },
    { type: UserService },
    { type: GlobalMessageService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L3VwZGF0ZS1wcm9maWxlL3VwZGF0ZS1wcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsY0FBYyxFQUdkLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXJDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQU9qQyxZQUNVLGNBQThCLEVBQzlCLFdBQXdCLEVBQ3hCLG9CQUEwQztRQUYxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVQ1QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFVdkMsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTiwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyx5Q0FBeUMsRUFBRSxDQUFDO1FBRTdELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUM5QyxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDWCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUMvQjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMscUNBQXFDLEVBQUUsQ0FBQztRQUV6RSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLFdBQVc7YUFDYixxQ0FBcUMsRUFBRTthQUN2QyxTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQ2pELENBQUM7SUFDSixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxPQUFnQjtRQUN4QixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEVBQ2pELGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBeUI7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFaEMscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMseUNBQXlDLEVBQUUsQ0FBQztJQUMvRCxDQUFDOzs7WUE3REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHNvQkFBOEM7YUFDL0M7Ozs7WUFYQyxjQUFjO1lBR2QsV0FBVztZQUxYLG9CQUFvQjs7Ozs7OztJQWVwQiw4Q0FBMEM7O0lBRTFDLHlDQUE2Qjs7SUFDN0IsdUNBQXdCOztJQUN4QiwwQ0FBOEI7Ozs7O0lBRzVCLGdEQUFzQzs7Ozs7SUFDdEMsNkNBQWdDOzs7OztJQUNoQyxzREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBUaXRsZSxcbiAgVXNlcixcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdXBkYXRlLXByb2ZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBkYXRlLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBVcGRhdGVQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICB0aXRsZXMkOiBPYnNlcnZhYmxlPFRpdGxlW10+O1xuICB1c2VyJDogT2JzZXJ2YWJsZTxVc2VyPjtcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIHJlc2V0IHRoZSBwcmV2aW91cyBmb3JtIHByb2Nlc3Npbmcgc3RhdGVcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0VXBkYXRlUGVyc29uYWxEZXRhaWxzUHJvY2Vzc2luZ1N0YXRlKCk7XG5cbiAgICB0aGlzLnVzZXIkID0gdGhpcy51c2VyU2VydmljZS5nZXQoKTtcbiAgICB0aGlzLnRpdGxlcyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFRpdGxlcygpLnBpcGUoXG4gICAgICB0YXAodGl0bGVzID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRpdGxlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkVGl0bGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy51c2VyU2VydmljZS5nZXRVcGRhdGVQZXJzb25hbERldGFpbHNSZXN1bHRMb2FkaW5nKCk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRVcGRhdGVQZXJzb25hbERldGFpbHNSZXN1bHRTdWNjZXNzKClcbiAgICAgICAgLnN1YnNjcmliZShzdWNjZXNzID0+IHRoaXMub25TdWNjZXNzKHN1Y2Nlc3MpKVxuICAgICk7XG4gIH1cblxuICBvblN1Y2Nlc3Moc3VjY2VzczogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgeyBrZXk6ICd1cGRhdGVQcm9maWxlRm9ybS5wcm9maWxlVXBkYXRlU3VjY2VzcycgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICApO1xuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdob21lJyB9KTtcbiAgICB9XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2hvbWUnIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoeyB1c2VyVXBkYXRlcyB9OiB7IHVzZXJVcGRhdGVzOiBVc2VyIH0pOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZVBlcnNvbmFsRGV0YWlscyh1c2VyVXBkYXRlcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXG4gICAgLy8gY2xlYW4gdXAgdGhlIHN0YXRlXG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFVwZGF0ZVBlcnNvbmFsRGV0YWlsc1Byb2Nlc3NpbmdTdGF0ZSgpO1xuICB9XG59XG4iXX0=