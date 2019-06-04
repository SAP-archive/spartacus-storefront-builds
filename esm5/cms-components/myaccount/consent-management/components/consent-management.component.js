/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, RoutingService, UserService, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { map, skipWhile, tap, withLatestFrom } from 'rxjs/operators';
var ConsentManagementComponent = /** @class */ (function () {
    function ConsentManagementComponent(userService, routingService, globalMessageService) {
        this.userService = userService;
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
        this.loading$ = combineLatest(this.userService.getConsentsResultLoading(), this.userService.getGiveConsentResultLoading(), this.userService.getWithdrawConsentResultLoading()).pipe(map((/**
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
        this.templateList$ = this.userService.getConsents().pipe(tap((/**
         * @param {?} templateList
         * @return {?}
         */
        function (templateList) {
            if (!_this.consentsExists(templateList)) {
                _this.userService.loadConsents();
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
        this.userService.resetGiveConsentProcessState();
        this.subscriptions.add(this.userService
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
        this.userService.resetWithdrawConsentProcessState();
        this.subscriptions.add(this.userService
            .getWithdrawConsentResultLoading()
            .pipe(skipWhile(Boolean), withLatestFrom(this.userService.getWithdrawConsentResultSuccess()), map((/**
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
                _this.userService.loadConsents();
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
            this.userService.giveConsent(template.id, template.version);
        }
        else {
            this.userService.withdrawConsent(template.currentConsent.code);
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
            this.userService.resetGiveConsentProcessState();
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
            this.userService.resetWithdrawConsentProcessState();
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
        this.userService.resetGiveConsentProcessState();
        this.userService.resetWithdrawConsentProcessState();
    };
    ConsentManagementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-consent-management',
                    template: "<ng-container>\n  <div *ngIf=\"(loading$ | async); else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <cx-consent-management-form\n          *ngFor=\"let consentTemplate of (templateList$ | async)\"\n          [consentTemplate]=\"consentTemplate\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n        <div class=\"cx-checkout-btns row\">\n          <div class=\"col-lg-12\">\n            <button class=\"btn btn-block btn-primary\" (click)=\"onDone()\">\n              {{ 'common.done' | cxTranslate }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    ConsentManagementComponent.ctorParameters = function () { return [
        { type: UserService },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9jb25zZW50LW1hbmFnZW1lbnQvY29tcG9uZW50cy9jb25zZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsY0FBYyxFQUNkLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRTtJQVVFLG9DQUNVLFdBQXdCLEVBQ3hCLGNBQThCLEVBQzlCLG9CQUEwQztRQUYxQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVI1QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFTeEMsQ0FBQzs7OztJQUVKLDZDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLHdCQUF3QixFQUFFLEVBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsMkJBQTJCLEVBQUUsRUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQywrQkFBK0IsRUFBRSxDQUNuRCxDQUFDLElBQUksQ0FDSixHQUFHOzs7O1FBQ0QsVUFBQyxFQUE0RDtnQkFBNUQsMEJBQTRELEVBQTNELHNCQUFjLEVBQUUsMEJBQWtC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WCxJQUFJLENBQUMsV0FBVyxDQUFDLDRCQUE0QixFQUFFLENBQUM7WUFDaEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsRUFBRSxHQUFHLEVBQUUsNkNBQTZDLEVBQUUsRUFDdEQsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7OztJQUNPLDhEQUF5Qjs7Ozs7SUFBakMsVUFBa0MsT0FBZ0I7UUFDaEQsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxFQUFFLENBQUM7WUFDcEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsRUFBRSxHQUFHLEVBQUUsaURBQWlELEVBQUUsRUFDMUQsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7SUFFRCxnREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxFQUFFLENBQUM7SUFDdEQsQ0FBQzs7Z0JBckhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQywwM0JBQWtEO2lCQUNuRDs7OztnQkFSQyxXQUFXO2dCQURYLGNBQWM7Z0JBRmQsb0JBQW9COztJQThIdEIsaUNBQUM7Q0FBQSxBQXRIRCxJQXNIQztTQWxIWSwwQkFBMEI7Ozs7OztJQUNyQyxtREFBMkM7O0lBRTNDLG1EQUE2Qzs7SUFDN0MsOENBQThCOzs7OztJQUc1QixpREFBZ0M7Ozs7O0lBQ2hDLG9EQUFzQzs7Ozs7SUFDdEMsMERBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29uc2VudFRlbXBsYXRlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBza2lwV2hpbGUsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNvbnNlbnQtbWFuYWdlbWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25zZW50LW1hbmFnZW1lbnQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb25zZW50TWFuYWdlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHRlbXBsYXRlTGlzdCQ6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+O1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nJCA9IGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldENvbnNlbnRzUmVzdWx0TG9hZGluZygpLFxuICAgICAgdGhpcy51c2VyU2VydmljZS5nZXRHaXZlQ29uc2VudFJlc3VsdExvYWRpbmcoKSxcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0TG9hZGluZygpXG4gICAgKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW2NvbnNlbnRMb2FkaW5nLCBnaXZlQ29uc2VudExvYWRpbmcsIHdpdGhkcmF3Q29uc2VudExvYWRpbmddKSA9PlxuICAgICAgICAgIGNvbnNlbnRMb2FkaW5nIHx8IGdpdmVDb25zZW50TG9hZGluZyB8fCB3aXRoZHJhd0NvbnNlbnRMb2FkaW5nXG4gICAgICApXG4gICAgKTtcbiAgICB0aGlzLmNvbnNlbnRMaXN0SW5pdCgpO1xuICAgIHRoaXMuZ2l2ZUNvbnNlbnRJbml0KCk7XG4gICAgdGhpcy53aXRoZHJhd0NvbnNlbnRJbml0KCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnNlbnRMaXN0SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlTGlzdCQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldENvbnNlbnRzKCkucGlwZShcbiAgICAgIHRhcCh0ZW1wbGF0ZUxpc3QgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuY29uc2VudHNFeGlzdHModGVtcGxhdGVMaXN0KSkge1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9hZENvbnNlbnRzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2l2ZUNvbnNlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVzZXRHaXZlQ29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRHaXZlQ29uc2VudFJlc3VsdFN1Y2Nlc3MoKVxuICAgICAgICAuc3Vic2NyaWJlKHN1Y2Nlc3MgPT4gdGhpcy5vbkNvbnNlbnRHaXZlblN1Y2Nlc3Moc3VjY2VzcykpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgd2l0aGRyYXdDb25zZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0V2l0aGRyYXdDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMudXNlclNlcnZpY2VcbiAgICAgICAgLmdldFdpdGhkcmF3Q29uc2VudFJlc3VsdExvYWRpbmcoKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBza2lwV2hpbGUoQm9vbGVhbiksXG4gICAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy51c2VyU2VydmljZS5nZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRTdWNjZXNzKCkpLFxuICAgICAgICAgIG1hcCgoWywgd2l0aGRyYXdhbFN1Y2Nlc3NdKSA9PiB3aXRoZHJhd2FsU3VjY2VzcyksXG4gICAgICAgICAgdGFwKHdpdGhkcmF3YWxTdWNjZXNzID0+IHtcbiAgICAgICAgICAgIGlmICh3aXRoZHJhd2FsU3VjY2Vzcykge1xuICAgICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRDb25zZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSh3aXRoZHJhd2FsU3VjY2VzcyA9PlxuICAgICAgICAgIHRoaXMub25Db25zZW50V2l0aGRyYXduU3VjY2Vzcyh3aXRoZHJhd2FsU3VjY2VzcylcbiAgICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNvbnNlbnRzRXhpc3RzKHRlbXBsYXRlTGlzdDogQ29uc2VudFRlbXBsYXRlW10pOiBib29sZWFuIHtcbiAgICByZXR1cm4gQm9vbGVhbih0ZW1wbGF0ZUxpc3QpICYmIHRlbXBsYXRlTGlzdC5sZW5ndGggPiAwO1xuICB9XG5cbiAgb25Db25zZW50Q2hhbmdlKHtcbiAgICBnaXZlbixcbiAgICB0ZW1wbGF0ZSxcbiAgfToge1xuICAgIGdpdmVuOiBib29sZWFuO1xuICAgIHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGU7XG4gIH0pOiB2b2lkIHtcbiAgICBpZiAoZ2l2ZW4pIHtcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2l2ZUNvbnNlbnQodGVtcGxhdGUuaWQsIHRlbXBsYXRlLnZlcnNpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLndpdGhkcmF3Q29uc2VudCh0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb2RlKTtcbiAgICB9XG4gIH1cblxuICBvbkRvbmUoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdob21lJyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25Db25zZW50R2l2ZW5TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy51c2VyU2VydmljZS5yZXNldEdpdmVDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgeyBrZXk6ICdjb25zZW50TWFuYWdlbWVudEZvcm0ubWVzc2FnZS5zdWNjZXNzLmdpdmVuJyB9LFxuICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgb25Db25zZW50V2l0aGRyYXduU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMudXNlclNlcnZpY2UucmVzZXRXaXRoZHJhd0NvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7IGtleTogJ2NvbnNlbnRNYW5hZ2VtZW50Rm9ybS5tZXNzYWdlLnN1Y2Nlc3Mud2l0aGRyYXduJyB9LFxuICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldEdpdmVDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFdpdGhkcmF3Q29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICB9XG59XG4iXX0=