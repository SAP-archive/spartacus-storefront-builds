/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, RoutingService, UserService, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { map, skipWhile, tap, withLatestFrom } from 'rxjs/operators';
export class ConsentManagementComponent {
    /**
     * @param {?} userService
     * @param {?} routingService
     * @param {?} globalMessageService
     */
    constructor(userService, routingService, globalMessageService) {
        this.userService = userService;
        this.routingService = routingService;
        this.globalMessageService = globalMessageService;
        this.subscriptions = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loading$ = combineLatest(this.userService.getConsentsResultLoading(), this.userService.getGiveConsentResultLoading(), this.userService.getWithdrawConsentResultLoading()).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([consentLoading, giveConsentLoading, withdrawConsentLoading]) => consentLoading || giveConsentLoading || withdrawConsentLoading)));
        this.consentListInit();
        this.giveConsentInit();
        this.withdrawConsentInit();
    }
    /**
     * @private
     * @return {?}
     */
    consentListInit() {
        this.templateList$ = this.userService.getConsents().pipe(tap((/**
         * @param {?} templateList
         * @return {?}
         */
        templateList => {
            if (!this.consentsExists(templateList)) {
                this.userService.loadConsents();
            }
        })));
    }
    /**
     * @private
     * @return {?}
     */
    giveConsentInit() {
        this.userService.resetGiveConsentProcessState();
        this.subscriptions.add(this.userService
            .getGiveConsentResultSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        success => this.onConsentGivenSuccess(success))));
    }
    /**
     * @private
     * @return {?}
     */
    withdrawConsentInit() {
        this.userService.resetWithdrawConsentProcessState();
        this.subscriptions.add(this.userService
            .getWithdrawConsentResultLoading()
            .pipe(skipWhile(Boolean), withLatestFrom(this.userService.getWithdrawConsentResultSuccess()), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([, withdrawalSuccess]) => withdrawalSuccess)), tap((/**
         * @param {?} withdrawalSuccess
         * @return {?}
         */
        withdrawalSuccess => {
            if (withdrawalSuccess) {
                this.userService.loadConsents();
            }
        })))
            .subscribe((/**
         * @param {?} withdrawalSuccess
         * @return {?}
         */
        withdrawalSuccess => this.onConsentWithdrawnSuccess(withdrawalSuccess))));
    }
    /**
     * @private
     * @param {?} templateList
     * @return {?}
     */
    consentsExists(templateList) {
        return Boolean(templateList) && templateList.length > 0;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onConsentChange({ given, template, }) {
        if (given) {
            this.userService.giveConsent(template.id, template.version);
        }
        else {
            this.userService.withdrawConsent(template.currentConsent.code);
        }
    }
    /**
     * @return {?}
     */
    onDone() {
        this.routingService.go({ cxRoute: 'home' });
    }
    /**
     * @private
     * @param {?} success
     * @return {?}
     */
    onConsentGivenSuccess(success) {
        if (success) {
            this.userService.resetGiveConsentProcessState();
            this.globalMessageService.add({ key: 'consentManagementForm.message.success.given' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    }
    /**
     * @private
     * @param {?} success
     * @return {?}
     */
    onConsentWithdrawnSuccess(success) {
        if (success) {
            this.userService.resetWithdrawConsentProcessState();
            this.globalMessageService.add({ key: 'consentManagementForm.message.success.withdrawn' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.userService.resetGiveConsentProcessState();
        this.userService.resetWithdrawConsentProcessState();
    }
}
ConsentManagementComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-consent-management',
                template: "<ng-container>\n  <div *ngIf=\"(loading$ | async); else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <cx-consent-management-form\n          *ngFor=\"let consentTemplate of (templateList$ | async)\"\n          [consentTemplate]=\"consentTemplate\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n        <div class=\"cx-checkout-btns row\">\n          <div class=\"col-lg-12\">\n            <button class=\"btn btn-block btn-primary\" (click)=\"onDone()\">\n              {{ 'common.done' | cxTranslate }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
ConsentManagementComponent.ctorParameters = () => [
    { type: UserService },
    { type: RoutingService },
    { type: GlobalMessageService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConsentManagementComponent.prototype.subscriptions;
    /** @type {?} */
    ConsentManagementComponent.prototype.templateList$;
    /** @type {?} */
    ConsentManagementComponent.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    ConsentManagementComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    ConsentManagementComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    ConsentManagementComponent.prototype.globalMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9jb25zZW50LW1hbmFnZW1lbnQvY29tcG9uZW50cy9jb25zZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXJFLE1BQU0sT0FBTywwQkFBMEI7Ozs7OztJQU1yQyxZQUNVLFdBQXdCLEVBQ3hCLGNBQThCLEVBQzlCLG9CQUEwQztRQUYxQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVI1QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFTeEMsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsRUFBRSxFQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLDJCQUEyQixFQUFFLEVBQzlDLElBQUksQ0FBQyxXQUFXLENBQUMsK0JBQStCLEVBQUUsQ0FDbkQsQ0FBQyxJQUFJLENBQ0osR0FBRzs7OztRQUNELENBQUMsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLENBQUMsRUFBRSxFQUFFLENBQy9ELGNBQWMsSUFBSSxrQkFBa0IsSUFBSSxzQkFBc0IsRUFDakUsQ0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVPLGVBQWU7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FDdEQsR0FBRzs7OztRQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU8sZUFBZTtRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxXQUFXO2FBQ2IsMkJBQTJCLEVBQUU7YUFDN0IsU0FBUzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQzdELENBQUM7SUFDSixDQUFDOzs7OztJQUVPLG1CQUFtQjtRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxXQUFXO2FBQ2IsK0JBQStCLEVBQUU7YUFDakMsSUFBSSxDQUNILFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFDbEIsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsK0JBQStCLEVBQUUsQ0FBQyxFQUNsRSxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxFQUFFLENBQUMsaUJBQWlCLEVBQUMsRUFDakQsR0FBRzs7OztRQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDdEIsSUFBSSxpQkFBaUIsRUFBRTtnQkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNqQztRQUNILENBQUMsRUFBQyxDQUNIO2FBQ0EsU0FBUzs7OztRQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FDN0IsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGlCQUFpQixDQUFDLEVBQ2xELENBQ0osQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxZQUErQjtRQUNwRCxPQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxFQUNkLEtBQUssRUFDTCxRQUFRLEdBSVQ7UUFDQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdEO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hFO0lBQ0gsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUVPLHFCQUFxQixDQUFDLE9BQWdCO1FBQzVDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLEVBQUUsR0FBRyxFQUFFLDZDQUE2QyxFQUFFLEVBQ3RELGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7Ozs7SUFDTyx5QkFBeUIsQ0FBQyxPQUFnQjtRQUNoRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztZQUNwRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixFQUFFLEdBQUcsRUFBRSxpREFBaUQsRUFBRSxFQUMxRCxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxFQUFFLENBQUM7SUFDdEQsQ0FBQzs7O1lBckhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQywwM0JBQWtEO2FBQ25EOzs7O1lBUkMsV0FBVztZQURYLGNBQWM7WUFGZCxvQkFBb0I7Ozs7Ozs7SUFhcEIsbURBQTJDOztJQUUzQyxtREFBNkM7O0lBQzdDLDhDQUE4Qjs7Ozs7SUFHNUIsaURBQWdDOzs7OztJQUNoQyxvREFBc0M7Ozs7O0lBQ3RDLDBEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnNlbnRUZW1wbGF0ZSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2tpcFdoaWxlLCB0YXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jb25zZW50LW1hbmFnZW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29uc2VudE1hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICB0ZW1wbGF0ZUxpc3QkOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPjtcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyQgPSBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy51c2VyU2VydmljZS5nZXRDb25zZW50c1Jlc3VsdExvYWRpbmcoKSxcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0R2l2ZUNvbnNlbnRSZXN1bHRMb2FkaW5nKCksXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFdpdGhkcmF3Q29uc2VudFJlc3VsdExvYWRpbmcoKVxuICAgICkucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKFtjb25zZW50TG9hZGluZywgZ2l2ZUNvbnNlbnRMb2FkaW5nLCB3aXRoZHJhd0NvbnNlbnRMb2FkaW5nXSkgPT5cbiAgICAgICAgICBjb25zZW50TG9hZGluZyB8fCBnaXZlQ29uc2VudExvYWRpbmcgfHwgd2l0aGRyYXdDb25zZW50TG9hZGluZ1xuICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5jb25zZW50TGlzdEluaXQoKTtcbiAgICB0aGlzLmdpdmVDb25zZW50SW5pdCgpO1xuICAgIHRoaXMud2l0aGRyYXdDb25zZW50SW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zZW50TGlzdEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZUxpc3QkID0gdGhpcy51c2VyU2VydmljZS5nZXRDb25zZW50cygpLnBpcGUoXG4gICAgICB0YXAodGVtcGxhdGVMaXN0ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnNlbnRzRXhpc3RzKHRlbXBsYXRlTGlzdCkpIHtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRDb25zZW50cygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdpdmVDb25zZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy51c2VyU2VydmljZVxuICAgICAgICAuZ2V0R2l2ZUNvbnNlbnRSZXN1bHRTdWNjZXNzKClcbiAgICAgICAgLnN1YnNjcmliZShzdWNjZXNzID0+IHRoaXMub25Db25zZW50R2l2ZW5TdWNjZXNzKHN1Y2Nlc3MpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHdpdGhkcmF3Q29uc2VudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFdpdGhkcmF3Q29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRMb2FkaW5nKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2tpcFdoaWxlKEJvb2xlYW4pLFxuICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMudXNlclNlcnZpY2UuZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0U3VjY2VzcygpKSxcbiAgICAgICAgICBtYXAoKFssIHdpdGhkcmF3YWxTdWNjZXNzXSkgPT4gd2l0aGRyYXdhbFN1Y2Nlc3MpLFxuICAgICAgICAgIHRhcCh3aXRoZHJhd2FsU3VjY2VzcyA9PiB7XG4gICAgICAgICAgICBpZiAod2l0aGRyYXdhbFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkQ29uc2VudHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUod2l0aGRyYXdhbFN1Y2Nlc3MgPT5cbiAgICAgICAgICB0aGlzLm9uQ29uc2VudFdpdGhkcmF3blN1Y2Nlc3Mod2l0aGRyYXdhbFN1Y2Nlc3MpXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zZW50c0V4aXN0cyh0ZW1wbGF0ZUxpc3Q6IENvbnNlbnRUZW1wbGF0ZVtdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGVtcGxhdGVMaXN0KSAmJiB0ZW1wbGF0ZUxpc3QubGVuZ3RoID4gMDtcbiAgfVxuXG4gIG9uQ29uc2VudENoYW5nZSh7XG4gICAgZ2l2ZW4sXG4gICAgdGVtcGxhdGUsXG4gIH06IHtcbiAgICBnaXZlbjogYm9vbGVhbjtcbiAgICB0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuICB9KTogdm9pZCB7XG4gICAgaWYgKGdpdmVuKSB7XG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdpdmVDb25zZW50KHRlbXBsYXRlLmlkLCB0ZW1wbGF0ZS52ZXJzaW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51c2VyU2VydmljZS53aXRoZHJhd0NvbnNlbnQodGVtcGxhdGUuY3VycmVudENvbnNlbnQuY29kZSk7XG4gICAgfVxuICB9XG5cbiAgb25Eb25lKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnaG9tZScgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uQ29uc2VudEdpdmVuU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMudXNlclNlcnZpY2UucmVzZXRHaXZlQ29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHsga2V5OiAnY29uc2VudE1hbmFnZW1lbnRGb3JtLm1lc3NhZ2Uuc3VjY2Vzcy5naXZlbicgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIG9uQ29uc2VudFdpdGhkcmF3blN1Y2Nlc3Moc3VjY2VzczogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0V2l0aGRyYXdDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgeyBrZXk6ICdjb25zZW50TWFuYWdlbWVudEZvcm0ubWVzc2FnZS5zdWNjZXNzLndpdGhkcmF3bicgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVzZXRHaXZlQ29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVzZXRXaXRoZHJhd0NvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgfVxufVxuIl19