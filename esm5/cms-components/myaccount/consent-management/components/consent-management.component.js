/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, RoutingService, UserConsentService, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { map, skipWhile, tap, withLatestFrom } from 'rxjs/operators';
var ConsentManagementComponent = /** @class */ (function () {
    function ConsentManagementComponent(userConsentService, routingService, globalMessageService) {
        this.userConsentService = userConsentService;
        this.routingService = routingService;
        this.globalMessageService = globalMessageService;
        this.subscriptions = new Subscription();
    }
    /**
     * @return {?}
     */
    ConsentManagementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.loading$ = combineLatest(this.userConsentService.getConsentsResultLoading(), this.userConsentService.getGiveConsentResultLoading(), this.userConsentService.getWithdrawConsentResultLoading()).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 3), consentLoading = _b[0], giveConsentLoading = _b[1], withdrawConsentLoading = _b[2];
            return consentLoading || giveConsentLoading || withdrawConsentLoading;
        })));
        this.consentListInit();
        this.giveConsentInit();
        this.withdrawConsentInit();
    };
    /**
     * @private
     * @return {?}
     */
    ConsentManagementComponent.prototype.consentListInit = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.templateList$ = this.userConsentService.getConsents().pipe(tap((/**
         * @param {?} templateList
         * @return {?}
         */
        function (templateList) {
            if (!_this.consentsExists(templateList)) {
                _this.userConsentService.loadConsents();
            }
        })));
    };
    /**
     * @private
     * @return {?}
     */
    ConsentManagementComponent.prototype.giveConsentInit = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.userConsentService.resetGiveConsentProcessState();
        this.subscriptions.add(this.userConsentService
            .getGiveConsentResultSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        function (success) { return _this.onConsentGivenSuccess(success); })));
    };
    /**
     * @private
     * @return {?}
     */
    ConsentManagementComponent.prototype.withdrawConsentInit = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.userConsentService.resetWithdrawConsentProcessState();
        this.subscriptions.add(this.userConsentService
            .getWithdrawConsentResultLoading()
            .pipe(skipWhile(Boolean), withLatestFrom(this.userConsentService.getWithdrawConsentResultSuccess()), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), withdrawalSuccess = _b[1];
            return withdrawalSuccess;
        })), tap((/**
         * @param {?} withdrawalSuccess
         * @return {?}
         */
        function (withdrawalSuccess) {
            if (withdrawalSuccess) {
                _this.userConsentService.loadConsents();
            }
        })))
            .subscribe((/**
         * @param {?} withdrawalSuccess
         * @return {?}
         */
        function (withdrawalSuccess) {
            return _this.onConsentWithdrawnSuccess(withdrawalSuccess);
        })));
    };
    /**
     * @private
     * @param {?} templateList
     * @return {?}
     */
    ConsentManagementComponent.prototype.consentsExists = /**
     * @private
     * @param {?} templateList
     * @return {?}
     */
    function (templateList) {
        return Boolean(templateList) && templateList.length > 0;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    ConsentManagementComponent.prototype.onConsentChange = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var given = _a.given, template = _a.template;
        if (given) {
            this.userConsentService.giveConsent(template.id, template.version);
        }
        else {
            this.userConsentService.withdrawConsent(template.currentConsent.code);
        }
    };
    /**
     * @return {?}
     */
    ConsentManagementComponent.prototype.onDone = /**
     * @return {?}
     */
    function () {
        this.routingService.go({ cxRoute: 'home' });
    };
    /**
     * @private
     * @param {?} success
     * @return {?}
     */
    ConsentManagementComponent.prototype.onConsentGivenSuccess = /**
     * @private
     * @param {?} success
     * @return {?}
     */
    function (success) {
        if (success) {
            this.userConsentService.resetGiveConsentProcessState();
            this.globalMessageService.add({ key: 'consentManagementForm.message.success.given' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    };
    /**
     * @private
     * @param {?} success
     * @return {?}
     */
    ConsentManagementComponent.prototype.onConsentWithdrawnSuccess = /**
     * @private
     * @param {?} success
     * @return {?}
     */
    function (success) {
        if (success) {
            this.userConsentService.resetWithdrawConsentProcessState();
            this.globalMessageService.add({ key: 'consentManagementForm.message.success.withdrawn' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    };
    /**
     * @return {?}
     */
    ConsentManagementComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.unsubscribe();
        this.userConsentService.resetGiveConsentProcessState();
        this.userConsentService.resetWithdrawConsentProcessState();
    };
    ConsentManagementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-consent-management',
                    template: "<ng-container>\n  <div *ngIf=\"(loading$ | async); else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <cx-consent-management-form\n          *ngFor=\"let consentTemplate of (templateList$ | async)\"\n          [consentTemplate]=\"consentTemplate\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n        <div class=\"cx-checkout-btns row\">\n          <div class=\"col-lg-12\">\n            <button class=\"btn btn-block btn-primary\" (click)=\"onDone()\">\n              {{ 'common.done' | cxTranslate }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    ConsentManagementComponent.ctorParameters = function () { return [
        { type: UserConsentService },
        { type: RoutingService },
        { type: GlobalMessageService }
    ]; };
    return ConsentManagementComponent;
}());
export { ConsentManagementComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9jb25zZW50LW1hbmFnZW1lbnQvY29tcG9uZW50cy9jb25zZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsY0FBYyxFQUNkLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRTtJQVVFLG9DQUNVLGtCQUFzQyxFQUN0QyxjQUE4QixFQUM5QixvQkFBMEM7UUFGMUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVI1QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFTeEMsQ0FBQzs7OztJQUVKLDZDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLEVBQUUsRUFDbEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixFQUFFLEVBQ3JELElBQUksQ0FBQyxrQkFBa0IsQ0FBQywrQkFBK0IsRUFBRSxDQUMxRCxDQUFDLElBQUksQ0FDSixHQUFHOzs7O1FBQ0QsVUFBQyxFQUE0RDtnQkFBNUQsMEJBQTRELEVBQTNELHNC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LFVBQThCLE9BQWdCO1FBQzVDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGtCQUFrQixDQUFDLDRCQUE0QixFQUFFLENBQUM7WUFDdkQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsRUFBRSxHQUFHLEVBQUUsNkNBQTZDLEVBQUUsRUFDdEQsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7OztJQUNPLDhEQUF5Qjs7Ozs7SUFBakMsVUFBa0MsT0FBZ0I7UUFDaEQsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixFQUFFLEdBQUcsRUFBRSxpREFBaUQsRUFBRSxFQUMxRCxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7OztJQUVELGdEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdDQUFnQyxFQUFFLENBQUM7SUFDN0QsQ0FBQzs7Z0JBdkhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQywwM0JBQWtEO2lCQUNuRDs7OztnQkFSQyxrQkFBa0I7Z0JBRGxCLGNBQWM7Z0JBRmQsb0JBQW9COztJQWdJdEIsaUNBQUM7Q0FBQSxBQXhIRCxJQXdIQztTQXBIWSwwQkFBMEI7Ozs7OztJQUNyQyxtREFBMkM7O0lBRTNDLG1EQUE2Qzs7SUFDN0MsOENBQThCOzs7OztJQUc1Qix3REFBOEM7Ozs7O0lBQzlDLG9EQUFzQzs7Ozs7SUFDdEMsMERBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29uc2VudFRlbXBsYXRlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBVc2VyQ29uc2VudFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2tpcFdoaWxlLCB0YXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jb25zZW50LW1hbmFnZW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29uc2VudE1hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICB0ZW1wbGF0ZUxpc3QkOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPjtcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nJCA9IGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRDb25zZW50c1Jlc3VsdExvYWRpbmcoKSxcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldEdpdmVDb25zZW50UmVzdWx0TG9hZGluZygpLFxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0TG9hZGluZygpXG4gICAgKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW2NvbnNlbnRMb2FkaW5nLCBnaXZlQ29uc2VudExvYWRpbmcsIHdpdGhkcmF3Q29uc2VudExvYWRpbmddKSA9PlxuICAgICAgICAgIGNvbnNlbnRMb2FkaW5nIHx8IGdpdmVDb25zZW50TG9hZGluZyB8fCB3aXRoZHJhd0NvbnNlbnRMb2FkaW5nXG4gICAgICApXG4gICAgKTtcbiAgICB0aGlzLmNvbnNlbnRMaXN0SW5pdCgpO1xuICAgIHRoaXMuZ2l2ZUNvbnNlbnRJbml0KCk7XG4gICAgdGhpcy53aXRoZHJhd0NvbnNlbnRJbml0KCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnNlbnRMaXN0SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlTGlzdCQgPSB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRDb25zZW50cygpLnBpcGUoXG4gICAgICB0YXAodGVtcGxhdGVMaXN0ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnNlbnRzRXhpc3RzKHRlbXBsYXRlTGlzdCkpIHtcbiAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5sb2FkQ29uc2VudHMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnaXZlQ29uc2VudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRHaXZlQ29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZVxuICAgICAgICAuZ2V0R2l2ZUNvbnNlbnRSZXN1bHRTdWNjZXNzKClcbiAgICAgICAgLnN1YnNjcmliZShzdWNjZXNzID0+IHRoaXMub25Db25zZW50R2l2ZW5TdWNjZXNzKHN1Y2Nlc3MpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHdpdGhkcmF3Q29uc2VudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRXaXRoZHJhd0NvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2VcbiAgICAgICAgLmdldFdpdGhkcmF3Q29uc2VudFJlc3VsdExvYWRpbmcoKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBza2lwV2hpbGUoQm9vbGVhbiksXG4gICAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRTdWNjZXNzKClcbiAgICAgICAgICApLFxuICAgICAgICAgIG1hcCgoWywgd2l0aGRyYXdhbFN1Y2Nlc3NdKSA9PiB3aXRoZHJhd2FsU3VjY2VzcyksXG4gICAgICAgICAgdGFwKHdpdGhkcmF3YWxTdWNjZXNzID0+IHtcbiAgICAgICAgICAgIGlmICh3aXRoZHJhd2FsU3VjY2Vzcykge1xuICAgICAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5sb2FkQ29uc2VudHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUod2l0aGRyYXdhbFN1Y2Nlc3MgPT5cbiAgICAgICAgICB0aGlzLm9uQ29uc2VudFdpdGhkcmF3blN1Y2Nlc3Mod2l0aGRyYXdhbFN1Y2Nlc3MpXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zZW50c0V4aXN0cyh0ZW1wbGF0ZUxpc3Q6IENvbnNlbnRUZW1wbGF0ZVtdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGVtcGxhdGVMaXN0KSAmJiB0ZW1wbGF0ZUxpc3QubGVuZ3RoID4gMDtcbiAgfVxuXG4gIG9uQ29uc2VudENoYW5nZSh7XG4gICAgZ2l2ZW4sXG4gICAgdGVtcGxhdGUsXG4gIH06IHtcbiAgICBnaXZlbjogYm9vbGVhbjtcbiAgICB0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuICB9KTogdm9pZCB7XG4gICAgaWYgKGdpdmVuKSB7XG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5naXZlQ29uc2VudCh0ZW1wbGF0ZS5pZCwgdGVtcGxhdGUudmVyc2lvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLndpdGhkcmF3Q29uc2VudCh0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb2RlKTtcbiAgICB9XG4gIH1cblxuICBvbkRvbmUoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdob21lJyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25Db25zZW50R2l2ZW5TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRHaXZlQ29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHsga2V5OiAnY29uc2VudE1hbmFnZW1lbnRGb3JtLm1lc3NhZ2Uuc3VjY2Vzcy5naXZlbicgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIG9uQ29uc2VudFdpdGhkcmF3blN1Y2Nlc3Moc3VjY2VzczogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5yZXNldFdpdGhkcmF3Q29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHsga2V5OiAnY29uc2VudE1hbmFnZW1lbnRGb3JtLm1lc3NhZ2Uuc3VjY2Vzcy53aXRoZHJhd24nIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5yZXNldEdpdmVDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRXaXRoZHJhd0NvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgfVxufVxuIl19