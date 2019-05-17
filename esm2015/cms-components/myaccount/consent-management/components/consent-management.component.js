/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, RoutingService, UserService, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { filter, map, skipWhile, take, tap, withLatestFrom, } from 'rxjs/operators';
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
        this.loading$ = combineLatest(this.userService.getConsentsResultLoading(), this.userService.getGiveConsentResultLoading(), this.userService.getWithdrawConsentResultLoading()).pipe(map(([consentLoading, giveConsentLoading, withdrawConsentLoading]) => consentLoading || giveConsentLoading || withdrawConsentLoading));
        this.consentListInit();
        this.giveConsentInit();
        this.withdrawConsentInit();
    }
    /**
     * @private
     * @return {?}
     */
    consentListInit() {
        this.templateList$ = combineLatest(this.userService.get(), this.userService.getConsents()).pipe(filter(([user]) => Boolean(user) && Boolean(user.uid)), tap(([user, templateList]) => {
            if (!this.consentsExists(templateList)) {
                this.userService.loadConsents(user.uid);
            }
        }), map(([_, templateList]) => templateList));
    }
    /**
     * @private
     * @return {?}
     */
    giveConsentInit() {
        this.userService.resetGiveConsentProcessState();
        this.subscriptions.add(this.userService
            .getGiveConsentResultSuccess()
            .subscribe(success => this.onConsentGivenSuccess(success)));
    }
    /**
     * @private
     * @return {?}
     */
    withdrawConsentInit() {
        this.userService.resetWithdrawConsentProcessState();
        this.subscriptions.add(this.userService
            .getWithdrawConsentResultLoading()
            .pipe(skipWhile(Boolean), withLatestFrom(this.userService.getWithdrawConsentResultSuccess(), this.userService.get()), map(([_loading, withdrawalSuccess, user]) => {
            return { withdrawalSuccess, user };
        }), tap(data => {
            if (data.withdrawalSuccess) {
                this.userService.loadConsents(data.user.uid);
            }
        }))
            .subscribe(data => this.onConsentWithdrawnSuccess(data.withdrawalSuccess)));
    }
    /**
     * @private
     * @param {?} templateList
     * @return {?}
     */
    consentsExists(templateList) {
        return (Boolean(templateList) &&
            Boolean(templateList.consentTemplates) &&
            templateList.consentTemplates.length > 0);
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onConsentChange({ given, template, }) {
        this.userService
            .get()
            .pipe(map(user => user.uid), tap(userId => {
            if (given) {
                this.userService.giveConsent(userId, template.id, template.version);
            }
            else {
                this.userService.withdrawConsent(userId, template.currentConsent.code);
            }
        }), take(1))
            .subscribe();
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
                template: "<ng-container>\n  <div *ngIf=\"(loading$ | async); else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <cx-consent-management-form\n          *ngFor=\"\n            let consentTemplate of (templateList$ | async)?.consentTemplates\n          \"\n          [consentTemplate]=\"consentTemplate\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n        <div class=\"cx-checkout-btns row\">\n          <div class=\"col-lg-12\">\n            <button class=\"btn btn-block btn-primary\" (click)=\"onDone()\">\n              {{ 'common.done' | cxTranslate }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9jb25zZW50LW1hbmFnZW1lbnQvY29tcG9uZW50cy9jb25zZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBR0wsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUNMLE1BQU0sRUFDTixHQUFHLEVBQ0gsU0FBUyxFQUNULElBQUksRUFDSixHQUFHLEVBQ0gsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFNeEIsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBTXJDLFlBQ1UsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsb0JBQTBDO1FBRjFDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBUjVDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVN4QyxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLHdCQUF3QixFQUFFLEVBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsMkJBQTJCLEVBQUUsRUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQywrQkFBK0IsRUFBRSxDQUNuRCxDQUFDLElBQUksQ0FDSixHQUFHLENBQ0QsQ0FBQyxDQUFDLGNBQWMsRUFB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QUM7U0FDSDtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDO0lBQ3RELENBQUM7OztZQS9JRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsczZCQUFrRDthQUNuRDs7OztZQWZDLFdBQVc7WUFEWCxjQUFjO1lBRmQsb0JBQW9COzs7Ozs7O0lBb0JwQixtREFBMkM7O0lBRTNDLG1EQUErQzs7SUFDL0MsOENBQThCOzs7OztJQUc1QixpREFBZ0M7Ozs7O0lBQ2hDLG9EQUFzQzs7Ozs7SUFDdEMsMERBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29uc2VudFRlbXBsYXRlLFxuICBDb25zZW50VGVtcGxhdGVMaXN0LFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHNraXBXaGlsZSxcbiAgdGFrZSxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jb25zZW50LW1hbmFnZW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29uc2VudE1hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICB0ZW1wbGF0ZUxpc3QkOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZUxpc3Q+O1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nJCA9IGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldENvbnNlbnRzUmVzdWx0TG9hZGluZygpLFxuICAgICAgdGhpcy51c2VyU2VydmljZS5nZXRHaXZlQ29uc2VudFJlc3VsdExvYWRpbmcoKSxcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0TG9hZGluZygpXG4gICAgKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW2NvbnNlbnRMb2FkaW5nLCBnaXZlQ29uc2VudExvYWRpbmcsIHdpdGhkcmF3Q29uc2VudExvYWRpbmddKSA9PlxuICAgICAgICAgIGNvbnNlbnRMb2FkaW5nIHx8IGdpdmVDb25zZW50TG9hZGluZyB8fCB3aXRoZHJhd0NvbnNlbnRMb2FkaW5nXG4gICAgICApXG4gICAgKTtcbiAgICB0aGlzLmNvbnNlbnRMaXN0SW5pdCgpO1xuICAgIHRoaXMuZ2l2ZUNvbnNlbnRJbml0KCk7XG4gICAgdGhpcy53aXRoZHJhd0NvbnNlbnRJbml0KCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnNlbnRMaXN0SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlTGlzdCQgPSBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy51c2VyU2VydmljZS5nZXQoKSxcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0Q29uc2VudHMoKVxuICAgICkucGlwZShcbiAgICAgIGZpbHRlcigoW3VzZXJdKSA9PiBCb29sZWFuKHVzZXIpICYmIEJvb2xlYW4odXNlci51aWQpKSxcbiAgICAgIHRhcCgoW3VzZXIsIHRlbXBsYXRlTGlzdF0pID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnNlbnRzRXhpc3RzKHRlbXBsYXRlTGlzdCkpIHtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRDb25zZW50cyh1c2VyLnVpZCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChbXywgdGVtcGxhdGVMaXN0XSkgPT4gdGVtcGxhdGVMaXN0KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdpdmVDb25zZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy51c2VyU2VydmljZVxuICAgICAgICAuZ2V0R2l2ZUNvbnNlbnRSZXN1bHRTdWNjZXNzKClcbiAgICAgICAgLnN1YnNjcmliZShzdWNjZXNzID0+IHRoaXMub25Db25zZW50R2l2ZW5TdWNjZXNzKHN1Y2Nlc3MpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHdpdGhkcmF3Q29uc2VudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFdpdGhkcmF3Q29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRMb2FkaW5nKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2tpcFdoaWxlKEJvb2xlYW4pLFxuICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5nZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRTdWNjZXNzKCksXG4gICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldCgpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBtYXAoKFtfbG9hZGluZywgd2l0aGRyYXdhbFN1Y2Nlc3MsIHVzZXJdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyB3aXRoZHJhd2FsU3VjY2VzcywgdXNlciB9O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRhcChkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhLndpdGhkcmF3YWxTdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9hZENvbnNlbnRzKGRhdGEudXNlci51aWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShkYXRhID0+XG4gICAgICAgICAgdGhpcy5vbkNvbnNlbnRXaXRoZHJhd25TdWNjZXNzKGRhdGEud2l0aGRyYXdhbFN1Y2Nlc3MpXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zZW50c0V4aXN0cyh0ZW1wbGF0ZUxpc3Q6IENvbnNlbnRUZW1wbGF0ZUxpc3QpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgQm9vbGVhbih0ZW1wbGF0ZUxpc3QpICYmXG4gICAgICBCb29sZWFuKHRlbXBsYXRlTGlzdC5jb25zZW50VGVtcGxhdGVzKSAmJlxuICAgICAgdGVtcGxhdGVMaXN0LmNvbnNlbnRUZW1wbGF0ZXMubGVuZ3RoID4gMFxuICAgICk7XG4gIH1cblxuICBvbkNvbnNlbnRDaGFuZ2Uoe1xuICAgIGdpdmVuLFxuICAgIHRlbXBsYXRlLFxuICB9OiB7XG4gICAgZ2l2ZW46IGJvb2xlYW47XG4gICAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcbiAgfSk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2VcbiAgICAgIC5nZXQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCh1c2VyID0+IHVzZXIudWlkKSxcbiAgICAgICAgdGFwKHVzZXJJZCA9PiB7XG4gICAgICAgICAgaWYgKGdpdmVuKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdpdmVDb25zZW50KHVzZXJJZCwgdGVtcGxhdGUuaWQsIHRlbXBsYXRlLnZlcnNpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLndpdGhkcmF3Q29uc2VudChcbiAgICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgICB0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb2RlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG9uRG9uZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2hvbWUnIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkNvbnNlbnRHaXZlblN1Y2Nlc3Moc3VjY2VzczogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7IGtleTogJ2NvbnNlbnRNYW5hZ2VtZW50Rm9ybS5tZXNzYWdlLnN1Y2Nlc3MuZ2l2ZW4nIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBvbkNvbnNlbnRXaXRoZHJhd25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy51c2VyU2VydmljZS5yZXNldFdpdGhkcmF3Q29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHsga2V5OiAnY29uc2VudE1hbmFnZW1lbnRGb3JtLm1lc3NhZ2Uuc3VjY2Vzcy53aXRoZHJhd24nIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0V2l0aGRyYXdDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gIH1cbn1cbiJdfQ==