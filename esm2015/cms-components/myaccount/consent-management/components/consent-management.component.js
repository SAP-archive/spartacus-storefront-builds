/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, RoutingService, UserConsentService, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { map, skipWhile, tap, withLatestFrom } from 'rxjs/operators';
export class ConsentManagementComponent {
    /**
     * @param {?} userConsentService
     * @param {?} routingService
     * @param {?} globalMessageService
     */
    constructor(userConsentService, routingService, globalMessageService) {
        this.userConsentService = userConsentService;
        this.routingService = routingService;
        this.globalMessageService = globalMessageService;
        this.subscriptions = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loading$ = combineLatest(this.userConsentService.getConsentsResultLoading(), this.userConsentService.getGiveConsentResultLoading(), this.userConsentService.getWithdrawConsentResultLoading()).pipe(map((/**
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
        this.templateList$ = this.userConsentService.getConsents().pipe(tap((/**
         * @param {?} templateList
         * @return {?}
         */
        templateList => {
            if (!this.consentsExists(templateList)) {
                this.userConsentService.loadConsents();
            }
        })));
    }
    /**
     * @private
     * @return {?}
     */
    giveConsentInit() {
        this.userConsentService.resetGiveConsentProcessState();
        this.subscriptions.add(this.userConsentService
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
        this.userConsentService.resetWithdrawConsentProcessState();
        this.subscriptions.add(this.userConsentService
            .getWithdrawConsentResultLoading()
            .pipe(skipWhile(Boolean), withLatestFrom(this.userConsentService.getWithdrawConsentResultSuccess()), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([, withdrawalSuccess]) => withdrawalSuccess)), tap((/**
         * @param {?} withdrawalSuccess
         * @return {?}
         */
        withdrawalSuccess => {
            if (withdrawalSuccess) {
                this.userConsentService.loadConsents();
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
            this.userConsentService.giveConsent(template.id, template.version);
        }
        else {
            this.userConsentService.withdrawConsent(template.currentConsent.code);
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
            this.userConsentService.resetGiveConsentProcessState();
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
            this.userConsentService.resetWithdrawConsentProcessState();
            this.globalMessageService.add({ key: 'consentManagementForm.message.success.withdrawn' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.userConsentService.resetGiveConsentProcessState();
        this.userConsentService.resetWithdrawConsentProcessState();
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
    { type: UserConsentService },
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
    ConsentManagementComponent.prototype.userConsentService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9jb25zZW50LW1hbmFnZW1lbnQvY29tcG9uZW50cy9jb25zZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2Qsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXJFLE1BQU0sT0FBTywwQkFBMEI7Ozs7OztJQU1yQyxZQUNVLGtCQUFzQyxFQUN0QyxjQUE4QixFQUM5QixvQkFBMEM7UUFGMUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVI1QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFTeEMsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixFQUFFLEVBQ2xELElBQUksQ0FBQyxrQkFBa0IsQ0FBQywyQkFBMkIsRUFBRSxFQUNyRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsK0JBQStCLEVBQUUsQ0FDMUQsQ0FBQyxJQUFJLENBQ0osR0FBRzs7OztRQUNELENBQUMsQ0FBQyxjQUFjLEVBQUUs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Q3RELGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7Ozs7SUFDTyx5QkFBeUIsQ0FBQyxPQUFnQjtRQUNoRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDO1lBQzNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLEVBQUUsR0FBRyxFQUFFLGlEQUFpRCxFQUFFLEVBQzFELGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdDQUFnQyxFQUFFLENBQUM7SUFDN0QsQ0FBQzs7O1lBdkhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQywwM0JBQWtEO2FBQ25EOzs7O1lBUkMsa0JBQWtCO1lBRGxCLGNBQWM7WUFGZCxvQkFBb0I7Ozs7Ozs7SUFhcEIsbURBQTJDOztJQUUzQyxtREFBNkM7O0lBQzdDLDhDQUE4Qjs7Ozs7SUFHNUIsd0RBQThDOzs7OztJQUM5QyxvREFBc0M7Ozs7O0lBQ3RDLDBEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnNlbnRUZW1wbGF0ZSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVXNlckNvbnNlbnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNraXBXaGlsZSwgdGFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY29uc2VudC1tYW5hZ2VtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnNlbnQtbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnNlbnRNYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgdGVtcGxhdGVMaXN0JDogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT47XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlckNvbnNlbnRTZXJ2aWNlOiBVc2VyQ29uc2VudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyQgPSBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHNSZXN1bHRMb2FkaW5nKCksXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRHaXZlQ29uc2VudFJlc3VsdExvYWRpbmcoKSxcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldFdpdGhkcmF3Q29uc2VudFJlc3VsdExvYWRpbmcoKVxuICAgICkucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKFtjb25zZW50TG9hZGluZywgZ2l2ZUNvbnNlbnRMb2FkaW5nLCB3aXRoZHJhd0NvbnNlbnRMb2FkaW5nXSkgPT5cbiAgICAgICAgICBjb25zZW50TG9hZGluZyB8fCBnaXZlQ29uc2VudExvYWRpbmcgfHwgd2l0aGRyYXdDb25zZW50TG9hZGluZ1xuICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5jb25zZW50TGlzdEluaXQoKTtcbiAgICB0aGlzLmdpdmVDb25zZW50SW5pdCgpO1xuICAgIHRoaXMud2l0aGRyYXdDb25zZW50SW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zZW50TGlzdEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZUxpc3QkID0gdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHMoKS5waXBlKFxuICAgICAgdGFwKHRlbXBsYXRlTGlzdCA9PiB7XG4gICAgICAgIGlmICghdGhpcy5jb25zZW50c0V4aXN0cyh0ZW1wbGF0ZUxpc3QpKSB7XG4gICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UubG9hZENvbnNlbnRzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2l2ZUNvbnNlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2VcbiAgICAgICAgLmdldEdpdmVDb25zZW50UmVzdWx0U3VjY2VzcygpXG4gICAgICAgIC5zdWJzY3JpYmUoc3VjY2VzcyA9PiB0aGlzLm9uQ29uc2VudEdpdmVuU3VjY2VzcyhzdWNjZXNzKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSB3aXRoZHJhd0NvbnNlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0V2l0aGRyYXdDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlXG4gICAgICAgIC5nZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRMb2FkaW5nKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2tpcFdoaWxlKEJvb2xlYW4pLFxuICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0U3VjY2VzcygpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBtYXAoKFssIHdpdGhkcmF3YWxTdWNjZXNzXSkgPT4gd2l0aGRyYXdhbFN1Y2Nlc3MpLFxuICAgICAgICAgIHRhcCh3aXRoZHJhd2FsU3VjY2VzcyA9PiB7XG4gICAgICAgICAgICBpZiAod2l0aGRyYXdhbFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UubG9hZENvbnNlbnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKHdpdGhkcmF3YWxTdWNjZXNzID0+XG4gICAgICAgICAgdGhpcy5vbkNvbnNlbnRXaXRoZHJhd25TdWNjZXNzKHdpdGhkcmF3YWxTdWNjZXNzKVxuICAgICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uc2VudHNFeGlzdHModGVtcGxhdGVMaXN0OiBDb25zZW50VGVtcGxhdGVbXSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCb29sZWFuKHRlbXBsYXRlTGlzdCkgJiYgdGVtcGxhdGVMaXN0Lmxlbmd0aCA+IDA7XG4gIH1cblxuICBvbkNvbnNlbnRDaGFuZ2Uoe1xuICAgIGdpdmVuLFxuICAgIHRlbXBsYXRlLFxuICB9OiB7XG4gICAgZ2l2ZW46IGJvb2xlYW47XG4gICAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcbiAgfSk6IHZvaWQge1xuICAgIGlmIChnaXZlbikge1xuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2l2ZUNvbnNlbnQodGVtcGxhdGUuaWQsIHRlbXBsYXRlLnZlcnNpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS53aXRoZHJhd0NvbnNlbnQodGVtcGxhdGUuY3VycmVudENvbnNlbnQuY29kZSk7XG4gICAgfVxuICB9XG5cbiAgb25Eb25lKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnaG9tZScgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uQ29uc2VudEdpdmVuU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7IGtleTogJ2NvbnNlbnRNYW5hZ2VtZW50Rm9ybS5tZXNzYWdlLnN1Y2Nlc3MuZ2l2ZW4nIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBvbkNvbnNlbnRXaXRoZHJhd25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRXaXRoZHJhd0NvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7IGtleTogJ2NvbnNlbnRNYW5hZ2VtZW50Rm9ybS5tZXNzYWdlLnN1Y2Nlc3Mud2l0aGRyYXduJyB9LFxuICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRHaXZlQ29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0V2l0aGRyYXdDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gIH1cbn1cbiJdfQ==