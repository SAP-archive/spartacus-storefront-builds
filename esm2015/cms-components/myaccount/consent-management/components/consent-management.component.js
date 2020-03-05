import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AnonymousConsentsConfig, AnonymousConsentsService, ANONYMOUS_CONSENTS_FEATURE, AuthService, ConsentTemplate, GlobalMessageService, GlobalMessageType, isFeatureEnabled, isFeatureLevel, UserConsentService, } from '@spartacus/core';
import { BehaviorSubject, combineLatest, concat, Subscription, } from 'rxjs';
import { distinctUntilChanged, filter, map, scan, skipWhile, tap, withLatestFrom, } from 'rxjs/operators';
let ConsentManagementComponent = class ConsentManagementComponent {
    constructor(userConsentService, globalMessageService, anonymousConsentsConfig, anonymousConsentsService, authService) {
        this.userConsentService = userConsentService;
        this.globalMessageService = globalMessageService;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.anonymousConsentsService = anonymousConsentsService;
        this.authService = authService;
        this.subscriptions = new Subscription();
        this.allConsentsLoading = new BehaviorSubject(false);
        this.requiredConsents = [];
        this.isAnonymousConsentsEnabled = isFeatureEnabled(this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE);
        // TODO(issue:4989) Anonymous consents - remove
        this.isLevel13 = isFeatureLevel(this.anonymousConsentsConfig, '1.3');
    }
    ngOnInit() {
        this.loading$ = combineLatest([
            this.userConsentService.getConsentsResultLoading(),
            this.userConsentService.getGiveConsentResultLoading(),
            this.userConsentService.getWithdrawConsentResultLoading(),
            this.authService.isUserLoggedIn(),
            this.allConsentsLoading,
        ]).pipe(map(([consentLoading, giveConsentLoading, withdrawConsentLoading, isUserLoggedIn, allConsentsLoading,]) => consentLoading ||
            giveConsentLoading ||
            withdrawConsentLoading ||
            !isUserLoggedIn ||
            allConsentsLoading));
        this.consentListInit();
        this.giveConsentInit();
        this.withdrawConsentInit();
    }
    consentListInit() {
        this.templateList$ = this.userConsentService.getConsents().pipe(withLatestFrom(this.anonymousConsentsService.getTemplates(), this.authService.isUserLoggedIn()), filter(([_templateList, _anonymousTemplates, isUserLoggedIn]) => isUserLoggedIn), tap(([templateList, _anonymousTemplates]) => {
            if (!this.consentsExists(templateList)) {
                this.userConsentService.loadConsents();
            }
        }), map(([templateList, anonymousTemplates]) => {
            if (!this.isAnonymousConsentsEnabled) {
                return templateList;
            }
            if (Boolean(this.anonymousConsentsConfig.anonymousConsents)) {
                if (Boolean(this.anonymousConsentsConfig.anonymousConsents.requiredConsents)) {
                    this.requiredConsents = this.anonymousConsentsConfig.anonymousConsents.requiredConsents;
                }
                if (Boolean(this.anonymousConsentsConfig.anonymousConsents
                    .consentManagementPage)) {
                    return this.hideAnonymousConsents(templateList, anonymousTemplates);
                }
            }
            return templateList;
        }));
    }
    hideAnonymousConsents(templateList, anonymousTemplates = []) {
        let hideTemplateIds = [];
        if (!this.anonymousConsentsConfig.anonymousConsents.consentManagementPage
            .showAnonymousConsents) {
            hideTemplateIds = anonymousTemplates.map(template => template.id);
            return this.userConsentService.filterConsentTemplates(templateList, hideTemplateIds);
        }
        if (Boolean(this.anonymousConsentsConfig.anonymousConsents.consentManagementPage
            .hideConsents) &&
            this.anonymousConsentsConfig.anonymousConsents.consentManagementPage
                .hideConsents.length > 0) {
            hideTemplateIds = this.anonymousConsentsConfig.anonymousConsents
                .consentManagementPage.hideConsents;
        }
        return this.userConsentService.filterConsentTemplates(templateList, hideTemplateIds);
    }
    giveConsentInit() {
        this.userConsentService.resetGiveConsentProcessState();
        this.subscriptions.add(this.userConsentService
            .getGiveConsentResultSuccess()
            .subscribe(success => this.onConsentGivenSuccess(success)));
    }
    withdrawConsentInit() {
        this.userConsentService.resetWithdrawConsentProcessState();
        this.subscriptions.add(this.userConsentService
            .getWithdrawConsentResultLoading()
            .pipe(skipWhile(Boolean), withLatestFrom(this.userConsentService.getWithdrawConsentResultSuccess()), map(([, withdrawalSuccess]) => withdrawalSuccess), tap(withdrawalSuccess => {
            if (withdrawalSuccess) {
                this.userConsentService.loadConsents();
            }
        }))
            .subscribe(withdrawalSuccess => this.onConsentWithdrawnSuccess(withdrawalSuccess)));
    }
    consentsExists(templateList) {
        return Boolean(templateList) && templateList.length > 0;
    }
    onConsentChange({ given, template, }) {
        if (given) {
            this.userConsentService.giveConsent(template.id, template.version);
        }
        else {
            this.userConsentService.withdrawConsent(template.currentConsent.code);
        }
    }
    onConsentGivenSuccess(success) {
        if (success) {
            this.userConsentService.resetGiveConsentProcessState();
            this.globalMessageService.add({ key: 'consentManagementForm.message.success.given' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    }
    onConsentWithdrawnSuccess(success) {
        if (success) {
            this.userConsentService.resetWithdrawConsentProcessState();
            this.globalMessageService.add({ key: 'consentManagementForm.message.success.withdrawn' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    }
    rejectAll(templates = []) {
        const consentsToWithdraw = [];
        templates.forEach(template => {
            if (this.userConsentService.isConsentGiven(template.currentConsent)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                consentsToWithdraw.push(template);
            }
        });
        this.allConsentsLoading.next(true);
        this.subscriptions.add(this.setupWithdrawalStream(consentsToWithdraw)
            .pipe(tap(_timesLoaded => this.allConsentsLoading.next(false)))
            .subscribe());
    }
    setupWithdrawalStream(consentsToWithdraw = []) {
        const loading$ = concat(this.userConsentService.getWithdrawConsentResultLoading()).pipe(distinctUntilChanged(), filter(loading => !loading));
        const count$ = loading$.pipe(scan((acc, _value) => acc + 1, -1));
        const withdraw$ = count$.pipe(tap(i => {
            if (i < consentsToWithdraw.length) {
                this.userConsentService.withdrawConsent(consentsToWithdraw[i].currentConsent.code);
            }
        }));
        const checkTimesLoaded$ = withdraw$.pipe(filter(timesLoaded => timesLoaded === consentsToWithdraw.length));
        return checkTimesLoaded$;
    }
    allowAll(templates = []) {
        const consentsToGive = [];
        templates.forEach(template => {
            if (this.userConsentService.isConsentWithdrawn(template.currentConsent)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                consentsToGive.push(template);
            }
        });
        this.allConsentsLoading.next(true);
        this.subscriptions.add(this.setupGiveStream(consentsToGive)
            .pipe(tap(_timesLoaded => this.allConsentsLoading.next(false)))
            .subscribe());
    }
    setupGiveStream(consentsToGive = []) {
        const loading$ = concat(this.userConsentService.getGiveConsentResultLoading()).pipe(distinctUntilChanged(), filter(loading => !loading));
        const count$ = loading$.pipe(scan((acc, _value) => acc + 1, -1));
        const giveConsent$ = count$.pipe(tap(i => {
            if (i < consentsToGive.length) {
                this.userConsentService.giveConsent(consentsToGive[i].id, consentsToGive[i].version);
            }
        }));
        const checkTimesLoaded$ = giveConsent$.pipe(filter(timesLoaded => timesLoaded === consentsToGive.length));
        return checkTimesLoaded$;
    }
    isRequiredConsent(template) {
        if (!this.isAnonymousConsentsEnabled) {
            return false;
        }
        return (Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.requiredConsents) &&
            this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(template.id));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.allConsentsLoading.unsubscribe();
        this.userConsentService.resetGiveConsentProcessState();
        this.userConsentService.resetWithdrawConsentProcessState();
    }
};
ConsentManagementComponent.ctorParameters = () => [
    { type: UserConsentService },
    { type: GlobalMessageService },
    { type: AnonymousConsentsConfig },
    { type: AnonymousConsentsService },
    { type: AuthService }
];
ConsentManagementComponent = __decorate([
    Component({
        selector: 'cx-consent-management',
        template: "<!-- TODO(issue:4989) Anonymous consents - remove the wrapping `<ng-container *ngIf=\"isLevel13; else legacyConsentManagementPage\">` -->\n<ng-container *ngIf=\"isLevel13; else legacyConsentManagementPage\">\n  <div *ngIf=\"loading$ | async; else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <ng-container *ngIf=\"templateList$ | async as templateList\">\n      <div class=\"cx-consent-action-links\">\n        <div class=\"col-sm-12 col-md-8 col-lg-6\">\n          <button\n            tabindex=\"0\"\n            class=\"btn cx-action-link\"\n            (click)=\"rejectAll(templateList)\"\n          >\n            {{ 'consentManagementForm.clearAll' | cxTranslate }}\n          </button>\n          <button\n            tabindex=\"0\"\n            class=\"btn cx-action-link\"\n            (click)=\"allowAll(templateList)\"\n          >\n            {{ 'consentManagementForm.selectAll' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-consent-toggles\">\n        <div class=\"col-sm-12 col-md-8 col-lg-6\">\n          <cx-consent-management-form\n            *ngFor=\"let consentTemplate of templateList\"\n            [consentTemplate]=\"consentTemplate\"\n            [requiredConsents]=\"requiredConsents\"\n            [isAnonymousConsentsEnabled]=\"isAnonymousConsentsEnabled\"\n            [isLevel13]=\"isLevel13\"\n            (consentChanged)=\"onConsentChange($event)\"\n          ></cx-consent-management-form>\n        </div>\n      </div>\n    </ng-container>\n  </ng-template>\n</ng-container>\n\n<!-- TODO(issue:4989) Anonymous consents - remove this whole `<ng-template>` -->\n<ng-template #legacyConsentManagementPage>\n  <div *ngIf=\"loading$ | async; else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <cx-consent-management-form\n          *ngFor=\"let consentTemplate of templateList$ | async\"\n          [consentTemplate]=\"consentTemplate\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-template>\n"
    })
], ConsentManagementComponent);
export { ConsentManagementComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9jb25zZW50LW1hbmFnZW1lbnQvY29tcG9uZW50cy9jb25zZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLHdCQUF3QixFQUN4QiwwQkFBMEIsRUFDMUIsV0FBVyxFQUNYLGVBQWUsRUFDZixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixjQUFjLEVBQ2Qsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUNMLGVBQWUsRUFDZixhQUFhLEVBQ2IsTUFBTSxFQUVOLFlBQVksR0FDYixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLEdBQUcsRUFDSCxJQUFJLEVBQ0osU0FBUyxFQUNULEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQU14QixJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQTBDckMsWUFDVSxrQkFBc0MsRUFDdEMsb0JBQTBDLEVBQzFDLHVCQUFpRCxFQUNqRCx3QkFBbUQsRUFDbkQsV0FBeUI7UUFKekIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBMEI7UUFDakQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEyQjtRQUNuRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQTlDM0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLHVC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QUFLLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FDN0QsQ0FBQztRQUVGLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVPLGlCQUFpQixDQUFDLFFBQXlCO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUU7WUFDcEMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sQ0FDTCxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDO1lBQ3ZELE9BQU8sQ0FDTCxJQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQ2hFO1lBQ0QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FDdEUsUUFBUSxDQUFDLEVBQUUsQ0FDWixDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXRDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDO0lBQzdELENBQUM7Q0FDRixDQUFBOztZQTNTK0Isa0JBQWtCO1lBQ2hCLG9CQUFvQjtZQUNoQix1QkFBdUI7WUFDdEIsd0JBQXdCO1lBQ3JDLFdBQVc7O0FBL0N4QiwwQkFBMEI7SUFKdEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxtMkVBQWtEO0tBQ25ELENBQUM7R0FDVywwQkFBMEIsQ0FzVnRDO1NBdFZZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFLFxuICBBdXRoU2VydmljZSxcbiAgQ29uc2VudFRlbXBsYXRlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIGlzRmVhdHVyZUVuYWJsZWQsXG4gIGlzRmVhdHVyZUxldmVsLFxuICBVc2VyQ29uc2VudFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQge1xuICBCZWhhdmlvclN1YmplY3QsXG4gIGNvbWJpbmVMYXRlc3QsXG4gIGNvbmNhdCxcbiAgT2JzZXJ2YWJsZSxcbiAgU3Vic2NyaXB0aW9uLFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc2NhbixcbiAgc2tpcFdoaWxlLFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNvbnNlbnQtbWFuYWdlbWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25zZW50LW1hbmFnZW1lbnQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb25zZW50TWFuYWdlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBwcml2YXRlIGFsbENvbnNlbnRzTG9hZGluZyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHRlbXBsYXRlTGlzdCQ6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+O1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICByZXF1aXJlZENvbnNlbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGlzQW5vbnltb3VzQ29uc2VudHNFbmFibGVkID0gaXNGZWF0dXJlRW5hYmxlZChcbiAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFXG4gICk7XG5cbiAgLy8gVE9ETyhpc3N1ZTo0OTg5KSBBbm9ueW1vdXMgY29uc2VudHMgLSByZW1vdmVcbiAgaXNMZXZlbDEzID0gaXNGZWF0dXJlTGV2ZWwodGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZywgJzEuMycpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlLFxuICAgIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBhbm9ueW1vdXNDb25zZW50c0NvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIEluc3RlYWQsIHVzZTpcbiAgIGBgYHRzXG4gICBjb25zdHJ1Y3RvcihcbiAgICAgdXNlckNvbnNlbnRTZXJ2aWNlOiBVc2VyQ29uc2VudFNlcnZpY2UsXG4gICAgIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICAgYW5vbnltb3VzQ29uc2VudHNDb25maWcgOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICAgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIDogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICApIFxuICAgYGBgXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICB1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZSxcbiAgICBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZSxcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzQ29uZmlnPzogQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U/OiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZT86IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmckID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRDb25zZW50c1Jlc3VsdExvYWRpbmcoKSxcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldEdpdmVDb25zZW50UmVzdWx0TG9hZGluZygpLFxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0TG9hZGluZygpLFxuICAgICAgdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpLFxuICAgICAgdGhpcy5hbGxDb25zZW50c0xvYWRpbmcsXG4gICAgXSkucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKFtcbiAgICAgICAgICBjb25zZW50TG9hZGluZyxcbiAgICAgICAgICBnaXZlQ29uc2VudExvYWRpbmcsXG4gICAgICAgICAgd2l0aGRyYXdDb25zZW50TG9hZGluZyxcbiAgICAgICAgICBpc1VzZXJMb2dnZWRJbixcbiAgICAgICAgICBhbGxDb25zZW50c0xvYWRpbmcsXG4gICAgICAgIF0pID0+XG4gICAgICAgICAgY29uc2VudExvYWRpbmcgfHxcbiAgICAgICAgICBnaXZlQ29uc2VudExvYWRpbmcgfHxcbiAgICAgICAgICB3aXRoZHJhd0NvbnNlbnRMb2FkaW5nIHx8XG4gICAgICAgICAgIWlzVXNlckxvZ2dlZEluIHx8XG4gICAgICAgICAgYWxsQ29uc2VudHNMb2FkaW5nXG4gICAgICApXG4gICAgKTtcbiAgICB0aGlzLmNvbnNlbnRMaXN0SW5pdCgpO1xuICAgIHRoaXMuZ2l2ZUNvbnNlbnRJbml0KCk7XG4gICAgdGhpcy53aXRoZHJhd0NvbnNlbnRJbml0KCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnNlbnRMaXN0SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlTGlzdCQgPSB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRDb25zZW50cygpLnBpcGUoXG4gICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2V0VGVtcGxhdGVzKCksXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKVxuICAgICAgKSxcbiAgICAgIGZpbHRlcihcbiAgICAgICAgKFtfdGVtcGxhdGVMaXN0LCBfYW5vbnltb3VzVGVtcGxhdGVzLCBpc1VzZXJMb2dnZWRJbl0pID0+IGlzVXNlckxvZ2dlZEluXG4gICAgICApLFxuICAgICAgdGFwKChbdGVtcGxhdGVMaXN0LCBfYW5vbnltb3VzVGVtcGxhdGVzXSkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuY29uc2VudHNFeGlzdHModGVtcGxhdGVMaXN0KSkge1xuICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmxvYWRDb25zZW50cygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoW3RlbXBsYXRlTGlzdCwgYW5vbnltb3VzVGVtcGxhdGVzXSkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNBbm9ueW1vdXNDb25zZW50c0VuYWJsZWQpIHtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGVMaXN0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cykpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBCb29sZWFuKFxuICAgICAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHNcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZWRDb25zZW50cyA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgQm9vbGVhbihcbiAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50c1xuICAgICAgICAgICAgICAgIC5jb25zZW50TWFuYWdlbWVudFBhZ2VcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhpZGVBbm9ueW1vdXNDb25zZW50cyh0ZW1wbGF0ZUxpc3QsIGFub255bW91c1RlbXBsYXRlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlTGlzdDtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZUFub255bW91c0NvbnNlbnRzKFxuICAgIHRlbXBsYXRlTGlzdDogQ29uc2VudFRlbXBsYXRlW10sXG4gICAgYW5vbnltb3VzVGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXSA9IFtdXG4gICk6IENvbnNlbnRUZW1wbGF0ZVtdIHtcbiAgICBsZXQgaGlkZVRlbXBsYXRlSWRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgaWYgKFxuICAgICAgIXRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMuY29uc2VudE1hbmFnZW1lbnRQYWdlXG4gICAgICAgIC5zaG93QW5vbnltb3VzQ29uc2VudHNcbiAgICApIHtcbiAgICAgIGhpZGVUZW1wbGF0ZUlkcyA9IGFub255bW91c1RlbXBsYXRlcy5tYXAodGVtcGxhdGUgPT4gdGVtcGxhdGUuaWQpO1xuICAgICAgcmV0dXJuIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmZpbHRlckNvbnNlbnRUZW1wbGF0ZXMoXG4gICAgICAgIHRlbXBsYXRlTGlzdCxcbiAgICAgICAgaGlkZVRlbXBsYXRlSWRzXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIEJvb2xlYW4oXG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMuY29uc2VudE1hbmFnZW1lbnRQYWdlXG4gICAgICAgICAgLmhpZGVDb25zZW50c1xuICAgICAgKSAmJlxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5jb25zZW50TWFuYWdlbWVudFBhZ2VcbiAgICAgICAgLmhpZGVDb25zZW50cy5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICBoaWRlVGVtcGxhdGVJZHMgPSB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzXG4gICAgICAgIC5jb25zZW50TWFuYWdlbWVudFBhZ2UuaGlkZUNvbnNlbnRzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnVzZXJDb25zZW50U2VydmljZS5maWx0ZXJDb25zZW50VGVtcGxhdGVzKFxuICAgICAgdGVtcGxhdGVMaXN0LFxuICAgICAgaGlkZVRlbXBsYXRlSWRzXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2l2ZUNvbnNlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2VcbiAgICAgICAgLmdldEdpdmVDb25zZW50UmVzdWx0U3VjY2VzcygpXG4gICAgICAgIC5zdWJzY3JpYmUoc3VjY2VzcyA9PiB0aGlzLm9uQ29uc2VudEdpdmVuU3VjY2VzcyhzdWNjZXNzKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSB3aXRoZHJhd0NvbnNlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0V2l0aGRyYXdDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlXG4gICAgICAgIC5nZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRMb2FkaW5nKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2tpcFdoaWxlKEJvb2xlYW4pLFxuICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0U3VjY2VzcygpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBtYXAoKFssIHdpdGhkcmF3YWxTdWNjZXNzXSkgPT4gd2l0aGRyYXdhbFN1Y2Nlc3MpLFxuICAgICAgICAgIHRhcCh3aXRoZHJhd2FsU3VjY2VzcyA9PiB7XG4gICAgICAgICAgICBpZiAod2l0aGRyYXdhbFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UubG9hZENvbnNlbnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKHdpdGhkcmF3YWxTdWNjZXNzID0+XG4gICAgICAgICAgdGhpcy5vbkNvbnNlbnRXaXRoZHJhd25TdWNjZXNzKHdpdGhkcmF3YWxTdWNjZXNzKVxuICAgICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uc2VudHNFeGlzdHModGVtcGxhdGVMaXN0OiBDb25zZW50VGVtcGxhdGVbXSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCb29sZWFuKHRlbXBsYXRlTGlzdCkgJiYgdGVtcGxhdGVMaXN0Lmxlbmd0aCA+IDA7XG4gIH1cblxuICBvbkNvbnNlbnRDaGFuZ2Uoe1xuICAgIGdpdmVuLFxuICAgIHRlbXBsYXRlLFxuICB9OiB7XG4gICAgZ2l2ZW46IGJvb2xlYW47XG4gICAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcbiAgfSk6IHZvaWQge1xuICAgIGlmIChnaXZlbikge1xuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2l2ZUNvbnNlbnQodGVtcGxhdGUuaWQsIHRlbXBsYXRlLnZlcnNpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS53aXRoZHJhd0NvbnNlbnQodGVtcGxhdGUuY3VycmVudENvbnNlbnQuY29kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkNvbnNlbnRHaXZlblN1Y2Nlc3Moc3VjY2VzczogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5yZXNldEdpdmVDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgeyBrZXk6ICdjb25zZW50TWFuYWdlbWVudEZvcm0ubWVzc2FnZS5zdWNjZXNzLmdpdmVuJyB9LFxuICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkNvbnNlbnRXaXRoZHJhd25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRXaXRoZHJhd0NvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7IGtleTogJ2NvbnNlbnRNYW5hZ2VtZW50Rm9ybS5tZXNzYWdlLnN1Y2Nlc3Mud2l0aGRyYXduJyB9LFxuICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVqZWN0QWxsKHRlbXBsYXRlczogQ29uc2VudFRlbXBsYXRlW10gPSBbXSk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnNlbnRzVG9XaXRoZHJhdzogQ29uc2VudFRlbXBsYXRlW10gPSBbXTtcbiAgICB0ZW1wbGF0ZXMuZm9yRWFjaCh0ZW1wbGF0ZSA9PiB7XG4gICAgICBpZiAodGhpcy51c2VyQ29uc2VudFNlcnZpY2UuaXNDb25zZW50R2l2ZW4odGVtcGxhdGUuY3VycmVudENvbnNlbnQpKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVxdWlyZWRDb25zZW50KHRlbXBsYXRlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zZW50c1RvV2l0aGRyYXcucHVzaCh0ZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmFsbENvbnNlbnRzTG9hZGluZy5uZXh0KHRydWUpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMuc2V0dXBXaXRoZHJhd2FsU3RyZWFtKGNvbnNlbnRzVG9XaXRoZHJhdylcbiAgICAgICAgLnBpcGUodGFwKF90aW1lc0xvYWRlZCA9PiB0aGlzLmFsbENvbnNlbnRzTG9hZGluZy5uZXh0KGZhbHNlKSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwV2l0aGRyYXdhbFN0cmVhbShcbiAgICBjb25zZW50c1RvV2l0aGRyYXc6IENvbnNlbnRUZW1wbGF0ZVtdID0gW11cbiAgKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICBjb25zdCBsb2FkaW5nJCA9IGNvbmNhdChcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldFdpdGhkcmF3Q29uc2VudFJlc3VsdExvYWRpbmcoKVxuICAgICkucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBmaWx0ZXIobG9hZGluZyA9PiAhbG9hZGluZylcbiAgICApO1xuICAgIGNvbnN0IGNvdW50JCA9IGxvYWRpbmckLnBpcGUoc2NhbigoYWNjLCBfdmFsdWUpID0+IGFjYyArIDEsIC0xKSk7XG4gICAgY29uc3Qgd2l0aGRyYXckID0gY291bnQkLnBpcGUoXG4gICAgICB0YXAoaSA9PiB7XG4gICAgICAgIGlmIChpIDwgY29uc2VudHNUb1dpdGhkcmF3Lmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLndpdGhkcmF3Q29uc2VudChcbiAgICAgICAgICAgIGNvbnNlbnRzVG9XaXRoZHJhd1tpXS5jdXJyZW50Q29uc2VudC5jb2RlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIGNvbnN0IGNoZWNrVGltZXNMb2FkZWQkID0gd2l0aGRyYXckLnBpcGUoXG4gICAgICBmaWx0ZXIodGltZXNMb2FkZWQgPT4gdGltZXNMb2FkZWQgPT09IGNvbnNlbnRzVG9XaXRoZHJhdy5sZW5ndGgpXG4gICAgKTtcblxuICAgIHJldHVybiBjaGVja1RpbWVzTG9hZGVkJDtcbiAgfVxuXG4gIGFsbG93QWxsKHRlbXBsYXRlczogQ29uc2VudFRlbXBsYXRlW10gPSBbXSk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnNlbnRzVG9HaXZlOiBDb25zZW50VGVtcGxhdGVbXSA9IFtdO1xuICAgIHRlbXBsYXRlcy5mb3JFYWNoKHRlbXBsYXRlID0+IHtcbiAgICAgIGlmICh0aGlzLnVzZXJDb25zZW50U2VydmljZS5pc0NvbnNlbnRXaXRoZHJhd24odGVtcGxhdGUuY3VycmVudENvbnNlbnQpKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVxdWlyZWRDb25zZW50KHRlbXBsYXRlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNlbnRzVG9HaXZlLnB1c2godGVtcGxhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hbGxDb25zZW50c0xvYWRpbmcubmV4dCh0cnVlKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnNldHVwR2l2ZVN0cmVhbShjb25zZW50c1RvR2l2ZSlcbiAgICAgICAgLnBpcGUodGFwKF90aW1lc0xvYWRlZCA9PiB0aGlzLmFsbENvbnNlbnRzTG9hZGluZy5uZXh0KGZhbHNlKSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwR2l2ZVN0cmVhbShcbiAgICBjb25zZW50c1RvR2l2ZTogQ29uc2VudFRlbXBsYXRlW10gPSBbXVxuICApOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIGNvbnN0IGxvYWRpbmckID0gY29uY2F0KFxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0R2l2ZUNvbnNlbnRSZXN1bHRMb2FkaW5nKClcbiAgICApLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgZmlsdGVyKGxvYWRpbmcgPT4gIWxvYWRpbmcpXG4gICAgKTtcbiAgICBjb25zdCBjb3VudCQgPSBsb2FkaW5nJC5waXBlKHNjYW4oKGFjYywgX3ZhbHVlKSA9PiBhY2MgKyAxLCAtMSkpO1xuICAgIGNvbnN0IGdpdmVDb25zZW50JCA9IGNvdW50JC5waXBlKFxuICAgICAgdGFwKGkgPT4ge1xuICAgICAgICBpZiAoaSA8IGNvbnNlbnRzVG9HaXZlLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdpdmVDb25zZW50KFxuICAgICAgICAgICAgY29uc2VudHNUb0dpdmVbaV0uaWQsXG4gICAgICAgICAgICBjb25zZW50c1RvR2l2ZVtpXS52ZXJzaW9uXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIGNvbnN0IGNoZWNrVGltZXNMb2FkZWQkID0gZ2l2ZUNvbnNlbnQkLnBpcGUoXG4gICAgICBmaWx0ZXIodGltZXNMb2FkZWQgPT4gdGltZXNMb2FkZWQgPT09IGNvbnNlbnRzVG9HaXZlLmxlbmd0aClcbiAgICApO1xuXG4gICAgcmV0dXJuIGNoZWNrVGltZXNMb2FkZWQkO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1JlcXVpcmVkQ29uc2VudCh0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmlzQW5vbnltb3VzQ29uc2VudHNFbmFibGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgIEJvb2xlYW4oXG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50c1xuICAgICAgKSAmJlxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKFxuICAgICAgICB0ZW1wbGF0ZS5pZFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmFsbENvbnNlbnRzTG9hZGluZy51bnN1YnNjcmliZSgpO1xuXG4gICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRHaXZlQ29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0V2l0aGRyYXdDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gIH1cbn1cbiJdfQ==