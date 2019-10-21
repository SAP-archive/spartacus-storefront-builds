/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AnonymousConsentsConfig, AnonymousConsentsService, ANONYMOUS_CONSENTS_FEATURE, AuthService, GlobalMessageService, GlobalMessageType, isFeatureEnabled, isFeatureLevel, UserConsentService, } from '@spartacus/core';
import { BehaviorSubject, combineLatest, concat, Subscription, } from 'rxjs';
import { distinctUntilChanged, filter, map, scan, skipWhile, tap, withLatestFrom, } from 'rxjs/operators';
export class ConsentManagementComponent {
    /**
     * @param {?} userConsentService
     * @param {?} globalMessageService
     * @param {?=} anonymousConsentsConfig
     * @param {?=} anonymousConsentsService
     * @param {?=} authService
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loading$ = combineLatest([
            this.userConsentService.getConsentsResultLoading(),
            this.userConsentService.getGiveConsentResultLoading(),
            this.userConsentService.getWithdrawConsentResultLoading(),
            this.authService.isUserLoggedIn(),
            this.allConsentsLoading,
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([consentLoading, giveConsentLoading, withdrawConsentLoading, isUserLoggedIn, allConsentsLoading,]) => consentLoading ||
            giveConsentLoading ||
            withdrawConsentLoading ||
            !isUserLoggedIn ||
            allConsentsLoading)));
        this.consentListInit();
        this.giveConsentInit();
        this.withdrawConsentInit();
    }
    /**
     * @private
     * @return {?}
     */
    consentListInit() {
        this.templateList$ = this.userConsentService.getConsents().pipe(withLatestFrom(this.anonymousConsentsService.getTemplates(), this.authService.isUserLoggedIn()), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([_templateList, _anonymousTemplates, isUserLoggedIn]) => isUserLoggedIn)), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([templateList, _anonymousTemplates]) => {
            if (!this.consentsExists(templateList)) {
                this.userConsentService.loadConsents();
            }
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([templateList, anonymousTemplates]) => {
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
        })));
    }
    /**
     * @private
     * @param {?} templateList
     * @param {?=} anonymousTemplates
     * @return {?}
     */
    hideAnonymousConsents(templateList, anonymousTemplates = []) {
        /** @type {?} */
        let hideTemplateIds = [];
        if (!this.anonymousConsentsConfig.anonymousConsents.consentManagementPage
            .showAnonymousConsents) {
            hideTemplateIds = anonymousTemplates.map((/**
             * @param {?} template
             * @return {?}
             */
            template => template.id));
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
     * @param {?=} templates
     * @return {?}
     */
    rejectAll(templates = []) {
        /** @type {?} */
        const consentsToWithdraw = [];
        templates.forEach((/**
         * @param {?} template
         * @return {?}
         */
        template => {
            if (this.isConsentGiven(template)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                consentsToWithdraw.push(template);
            }
        }));
        this.allConsentsLoading.next(true);
        this.subscriptions.add(this.setupWithdrawalStream(consentsToWithdraw)
            .pipe(tap((/**
         * @param {?} _timesLoaded
         * @return {?}
         */
        _timesLoaded => this.allConsentsLoading.next(false))))
            .subscribe());
    }
    /**
     * @private
     * @param {?=} consentsToWithdraw
     * @return {?}
     */
    setupWithdrawalStream(consentsToWithdraw = []) {
        /** @type {?} */
        const loading$ = concat(this.userConsentService.getWithdrawConsentResultLoading()).pipe(distinctUntilChanged(), filter((/**
         * @param {?} loading
         * @return {?}
         */
        loading => !loading)));
        /** @type {?} */
        const count$ = loading$.pipe(scan((/**
         * @param {?} acc
         * @param {?} _value
         * @return {?}
         */
        (acc, _value) => acc + 1), -1));
        /** @type {?} */
        const withdraw$ = count$.pipe(tap((/**
         * @param {?} i
         * @return {?}
         */
        i => {
            if (i < consentsToWithdraw.length) {
                this.userConsentService.withdrawConsent(consentsToWithdraw[i].currentConsent.code);
            }
        })));
        /** @type {?} */
        const checkTimesLoaded$ = withdraw$.pipe(filter((/**
         * @param {?} timesLoaded
         * @return {?}
         */
        timesLoaded => timesLoaded === consentsToWithdraw.length)));
        return checkTimesLoaded$;
    }
    /**
     * @private
     * @param {?} consentTemplate
     * @return {?}
     */
    isConsentGiven(consentTemplate) {
        return (Boolean(consentTemplate.currentConsent) &&
            Boolean(consentTemplate.currentConsent.consentGivenDate) &&
            !Boolean(consentTemplate.currentConsent.consentWithdrawnDate));
    }
    /**
     * @param {?=} templates
     * @return {?}
     */
    allowAll(templates = []) {
        /** @type {?} */
        const consentsToGive = [];
        templates.forEach((/**
         * @param {?} template
         * @return {?}
         */
        template => {
            if (this.isConsentWithdrawn(template)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                consentsToGive.push(template);
            }
        }));
        this.allConsentsLoading.next(true);
        this.subscriptions.add(this.setupGiveStream(consentsToGive)
            .pipe(tap((/**
         * @param {?} _timesLoaded
         * @return {?}
         */
        _timesLoaded => this.allConsentsLoading.next(false))))
            .subscribe());
    }
    /**
     * @private
     * @param {?=} consentsToGive
     * @return {?}
     */
    setupGiveStream(consentsToGive = []) {
        /** @type {?} */
        const loading$ = concat(this.userConsentService.getGiveConsentResultLoading()).pipe(distinctUntilChanged(), filter((/**
         * @param {?} loading
         * @return {?}
         */
        loading => !loading)));
        /** @type {?} */
        const count$ = loading$.pipe(scan((/**
         * @param {?} acc
         * @param {?} _value
         * @return {?}
         */
        (acc, _value) => acc + 1), -1));
        /** @type {?} */
        const giveConsent$ = count$.pipe(tap((/**
         * @param {?} i
         * @return {?}
         */
        i => {
            if (i < consentsToGive.length) {
                this.userConsentService.giveConsent(consentsToGive[i].id, consentsToGive[i].version);
            }
        })));
        /** @type {?} */
        const checkTimesLoaded$ = giveConsent$.pipe(filter((/**
         * @param {?} timesLoaded
         * @return {?}
         */
        timesLoaded => timesLoaded === consentsToGive.length)));
        return checkTimesLoaded$;
    }
    /**
     * @private
     * @param {?} consentTemplate
     * @return {?}
     */
    isConsentWithdrawn(consentTemplate) {
        if (Boolean(consentTemplate.currentConsent)) {
            return Boolean(consentTemplate.currentConsent.consentWithdrawnDate);
        }
        return true;
    }
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    isRequiredConsent(template) {
        if (!this.isAnonymousConsentsEnabled) {
            return false;
        }
        return (Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.requiredConsents) &&
            this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(template.id));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.allConsentsLoading.unsubscribe();
        this.userConsentService.resetGiveConsentProcessState();
        this.userConsentService.resetWithdrawConsentProcessState();
    }
}
ConsentManagementComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-consent-management',
                template: "<!-- TODO(issue:4989) Anonymous consents - remove the wrapping `<ng-container *ngIf=\"isLevel13; else legacyConsentManagementPage\">` -->\n<ng-container *ngIf=\"isLevel13; else legacyConsentManagementPage\">\n  <div *ngIf=\"loading$ | async; else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <ng-container *ngIf=\"templateList$ | async as templateList\">\n      <div class=\"cx-consent-action-links\">\n        <div class=\"col-sm-12 col-md-8 col-lg-6\">\n          <a\n            tabindex=\"0\"\n            class=\"btn-link cx-action-link\"\n            (click)=\"rejectAll(templateList)\"\n            >{{ 'consentManagementForm.rejectAll' | cxTranslate }}</a\n          >\n          <span class=\"cx-links-separator\">|</span>\n          <a\n            tabindex=\"0\"\n            class=\"btn-link cx-action-link\"\n            (click)=\"allowAll(templateList)\"\n            >{{ 'consentManagementForm.allowAll' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n\n      <div class=\"cx-consent-toggles\">\n        <div class=\"col-sm-12 col-md-8 col-lg-6\">\n          <!-- TODO(issue:4989) Anonymous consents - remove `[isLevel13]=\"isLevel13\"` -->\n          <cx-consent-management-form\n            *ngFor=\"let consentTemplate of templateList\"\n            [consentTemplate]=\"consentTemplate\"\n            [requiredConsents]=\"requiredConsents\"\n            [isAnonymousConsentsEnabled]=\"isAnonymousConsentsEnabled\"\n            [isLevel13]=\"isLevel13\"\n            (consentChanged)=\"onConsentChange($event)\"\n          ></cx-consent-management-form>\n        </div>\n      </div>\n    </ng-container>\n  </ng-template>\n</ng-container>\n\n<!-- TODO(issue:4989) Anonymous consents - remove this whole `<ng-template>` -->\n<ng-template #legacyConsentManagementPage>\n  <div *ngIf=\"loading$ | async; else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <cx-consent-management-form\n          *ngFor=\"let consentTemplate of templateList$ | async\"\n          [consentTemplate]=\"consentTemplate\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
ConsentManagementComponent.ctorParameters = () => [
    { type: UserConsentService },
    { type: GlobalMessageService },
    { type: AnonymousConsentsConfig },
    { type: AnonymousConsentsService },
    { type: AuthService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConsentManagementComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    ConsentManagementComponent.prototype.allConsentsLoading;
    /** @type {?} */
    ConsentManagementComponent.prototype.templateList$;
    /** @type {?} */
    ConsentManagementComponent.prototype.loading$;
    /** @type {?} */
    ConsentManagementComponent.prototype.requiredConsents;
    /** @type {?} */
    ConsentManagementComponent.prototype.isAnonymousConsentsEnabled;
    /** @type {?} */
    ConsentManagementComponent.prototype.isLevel13;
    /**
     * @type {?}
     * @private
     */
    ConsentManagementComponent.prototype.userConsentService;
    /**
     * @type {?}
     * @private
     */
    ConsentManagementComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    ConsentManagementComponent.prototype.anonymousConsentsConfig;
    /**
     * @type {?}
     * @private
     */
    ConsentManagementComponent.prototype.anonymousConsentsService;
    /**
     * @type {?}
     * @private
     */
    ConsentManagementComponent.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9jb25zZW50LW1hbmFnZW1lbnQvY29tcG9uZW50cy9jb25zZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLHdCQUF3QixFQUN4QiwwQkFBMEIsRUFDMUIsV0FBVyxFQUVYLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZCxrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQ0wsZUFBZSxFQUNmLGFBQWEsRUFDYixNQUFNLEVBRU4sWUFBWSxHQUNiLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILElBQUksRUFDSixTQUFTLEVBQ1QsR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBTXhCLE1BQU0sT0FBTywwQkFBMEI7Ozs7Ozs7O0lBMENyQyxZQUNVLGtCQUFzQyxFQUN0QyxvQkFBMEMsRUFDMUMsdUJBQWlELEVBQ2pELHdCQUFtRCxFQUNuRCxXQUF5QjtRQUp6Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUEwQjtRQUNqRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTJCO1FBQ25ELGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBOUMzQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsdUJBQWtCLEdBQUcsSUFB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WUF4V0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLHE5RUFBa0Q7YUFDbkQ7Ozs7WUF0QkMsa0JBQWtCO1lBSmxCLG9CQUFvQjtZQUxwQix1QkFBdUI7WUFDdkIsd0JBQXdCO1lBRXhCLFdBQVc7Ozs7Ozs7SUE4QlgsbURBQTJDOzs7OztJQUMzQyx3REFBaUU7O0lBRWpFLG1EQUE2Qzs7SUFDN0MsOENBQThCOztJQUU5QixzREFBZ0M7O0lBRWhDLGdFQUdFOztJQUdGLCtDQUFnRTs7Ozs7SUE0QjlELHdEQUE4Qzs7Ozs7SUFDOUMsMERBQWtEOzs7OztJQUNsRCw2REFBeUQ7Ozs7O0lBQ3pELDhEQUEyRDs7Ozs7SUFDM0QsaURBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gIEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkUsXG4gIEF1dGhTZXJ2aWNlLFxuICBDb25zZW50VGVtcGxhdGUsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgaXNGZWF0dXJlRW5hYmxlZCxcbiAgaXNGZWF0dXJlTGV2ZWwsXG4gIFVzZXJDb25zZW50U2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIEJlaGF2aW9yU3ViamVjdCxcbiAgY29tYmluZUxhdGVzdCxcbiAgY29uY2F0LFxuICBPYnNlcnZhYmxlLFxuICBTdWJzY3JpcHRpb24sXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzY2FuLFxuICBza2lwV2hpbGUsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY29uc2VudC1tYW5hZ2VtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnNlbnQtbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnNlbnRNYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHByaXZhdGUgYWxsQ29uc2VudHNMb2FkaW5nID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgdGVtcGxhdGVMaXN0JDogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT47XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIHJlcXVpcmVkQ29uc2VudHM6IHN0cmluZ1tdID0gW107XG5cbiAgaXNBbm9ueW1vdXNDb25zZW50c0VuYWJsZWQgPSBpc0ZlYXR1cmVFbmFibGVkKFxuICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkVcbiAgKTtcblxuICAvLyBUT0RPKGlzc3VlOjQ5ODkpIEFub255bW91cyBjb25zZW50cyAtIHJlbW92ZVxuICBpc0xldmVsMTMgPSBpc0ZlYXR1cmVMZXZlbCh0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLCAnMS4zJyk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdXNlckNvbnNlbnRTZXJ2aWNlOiBVc2VyQ29uc2VudFNlcnZpY2UsXG4gICAgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIGFub255bW91c0NvbnNlbnRzQ29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogSW5zdGVhZCwgdXNlOlxuICAgYGBgdHNcbiAgIGNvbnN0cnVjdG9yKFxuICAgICB1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZSxcbiAgICAgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgICBhbm9ueW1vdXNDb25zZW50c0NvbmZpZyA6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgICBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2UgOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICkgXG4gICBgYGBcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlLFxuICAgIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNDb25maWc/OiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzU2VydmljZT86IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlPzogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldENvbnNlbnRzUmVzdWx0TG9hZGluZygpLFxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0R2l2ZUNvbnNlbnRSZXN1bHRMb2FkaW5nKCksXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRMb2FkaW5nKCksXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCksXG4gICAgICB0aGlzLmFsbENvbnNlbnRzTG9hZGluZyxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW1xuICAgICAgICAgIGNvbnNlbnRMb2FkaW5nLFxuICAgICAgICAgIGdpdmVDb25zZW50TG9hZGluZyxcbiAgICAgICAgICB3aXRoZHJhd0NvbnNlbnRMb2FkaW5nLFxuICAgICAgICAgIGlzVXNlckxvZ2dlZEluLFxuICAgICAgICAgIGFsbENvbnNlbnRzTG9hZGluZyxcbiAgICAgICAgXSkgPT5cbiAgICAgICAgICBjb25zZW50TG9hZGluZyB8fFxuICAgICAgICAgIGdpdmVDb25zZW50TG9hZGluZyB8fFxuICAgICAgICAgIHdpdGhkcmF3Q29uc2VudExvYWRpbmcgfHxcbiAgICAgICAgICAhaXNVc2VyTG9nZ2VkSW4gfHxcbiAgICAgICAgICBhbGxDb25zZW50c0xvYWRpbmdcbiAgICAgIClcbiAgICApO1xuICAgIHRoaXMuY29uc2VudExpc3RJbml0KCk7XG4gICAgdGhpcy5naXZlQ29uc2VudEluaXQoKTtcbiAgICB0aGlzLndpdGhkcmF3Q29uc2VudEluaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uc2VudExpc3RJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGVtcGxhdGVMaXN0JCA9IHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldENvbnNlbnRzKCkucGlwZShcbiAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5nZXRUZW1wbGF0ZXMoKSxcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpXG4gICAgICApLFxuICAgICAgZmlsdGVyKFxuICAgICAgICAoW190ZW1wbGF0ZUxpc3QsIF9hbm9ueW1vdXNUZW1wbGF0ZXMsIGlzVXNlckxvZ2dlZEluXSkgPT4gaXNVc2VyTG9nZ2VkSW5cbiAgICAgICksXG4gICAgICB0YXAoKFt0ZW1wbGF0ZUxpc3QsIF9hbm9ueW1vdXNUZW1wbGF0ZXNdKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5jb25zZW50c0V4aXN0cyh0ZW1wbGF0ZUxpc3QpKSB7XG4gICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UubG9hZENvbnNlbnRzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChbdGVtcGxhdGVMaXN0LCBhbm9ueW1vdXNUZW1wbGF0ZXNdKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pc0Fub255bW91c0NvbnNlbnRzRW5hYmxlZCkge1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZUxpc3Q7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQm9vbGVhbih0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzKSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIEJvb2xlYW4oXG4gICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50c1xuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5yZXF1aXJlZENvbnNlbnRzID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBCb29sZWFuKFxuICAgICAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzXG4gICAgICAgICAgICAgICAgLmNvbnNlbnRNYW5hZ2VtZW50UGFnZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGlkZUFub255bW91c0NvbnNlbnRzKHRlbXBsYXRlTGlzdCwgYW5vbnltb3VzVGVtcGxhdGVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVtcGxhdGVMaXN0O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoaWRlQW5vbnltb3VzQ29uc2VudHMoXG4gICAgdGVtcGxhdGVMaXN0OiBDb25zZW50VGVtcGxhdGVbXSxcbiAgICBhbm9ueW1vdXNUZW1wbGF0ZXM6IENvbnNlbnRUZW1wbGF0ZVtdID0gW11cbiAgKTogQ29uc2VudFRlbXBsYXRlW10ge1xuICAgIGxldCBoaWRlVGVtcGxhdGVJZHM6IHN0cmluZ1tdID0gW107XG5cbiAgICBpZiAoXG4gICAgICAhdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5jb25zZW50TWFuYWdlbWVudFBhZ2VcbiAgICAgICAgLnNob3dBbm9ueW1vdXNDb25zZW50c1xuICAgICkge1xuICAgICAgaGlkZVRlbXBsYXRlSWRzID0gYW5vbnltb3VzVGVtcGxhdGVzLm1hcCh0ZW1wbGF0ZSA9PiB0ZW1wbGF0ZS5pZCk7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZmlsdGVyQ29uc2VudFRlbXBsYXRlcyhcbiAgICAgICAgdGVtcGxhdGVMaXN0LFxuICAgICAgICBoaWRlVGVtcGxhdGVJZHNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgQm9vbGVhbihcbiAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5jb25zZW50TWFuYWdlbWVudFBhZ2VcbiAgICAgICAgICAuaGlkZUNvbnNlbnRzXG4gICAgICApICYmXG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLmNvbnNlbnRNYW5hZ2VtZW50UGFnZVxuICAgICAgICAuaGlkZUNvbnNlbnRzLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIGhpZGVUZW1wbGF0ZUlkcyA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHNcbiAgICAgICAgLmNvbnNlbnRNYW5hZ2VtZW50UGFnZS5oaWRlQ29uc2VudHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmZpbHRlckNvbnNlbnRUZW1wbGF0ZXMoXG4gICAgICB0ZW1wbGF0ZUxpc3QsXG4gICAgICBoaWRlVGVtcGxhdGVJZHNcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnaXZlQ29uc2VudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRHaXZlQ29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZVxuICAgICAgICAuZ2V0R2l2ZUNvbnNlbnRSZXN1bHRTdWNjZXNzKClcbiAgICAgICAgLnN1YnNjcmliZShzdWNjZXNzID0+IHRoaXMub25Db25zZW50R2l2ZW5TdWNjZXNzKHN1Y2Nlc3MpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHdpdGhkcmF3Q29uc2VudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRXaXRoZHJhd0NvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2VcbiAgICAgICAgLmdldFdpdGhkcmF3Q29uc2VudFJlc3VsdExvYWRpbmcoKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBza2lwV2hpbGUoQm9vbGVhbiksXG4gICAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRTdWNjZXNzKClcbiAgICAgICAgICApLFxuICAgICAgICAgIG1hcCgoWywgd2l0aGRyYXdhbFN1Y2Nlc3NdKSA9PiB3aXRoZHJhd2FsU3VjY2VzcyksXG4gICAgICAgICAgdGFwKHdpdGhkcmF3YWxTdWNjZXNzID0+IHtcbiAgICAgICAgICAgIGlmICh3aXRoZHJhd2FsU3VjY2Vzcykge1xuICAgICAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5sb2FkQ29uc2VudHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUod2l0aGRyYXdhbFN1Y2Nlc3MgPT5cbiAgICAgICAgICB0aGlzLm9uQ29uc2VudFdpdGhkcmF3blN1Y2Nlc3Mod2l0aGRyYXdhbFN1Y2Nlc3MpXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zZW50c0V4aXN0cyh0ZW1wbGF0ZUxpc3Q6IENvbnNlbnRUZW1wbGF0ZVtdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGVtcGxhdGVMaXN0KSAmJiB0ZW1wbGF0ZUxpc3QubGVuZ3RoID4gMDtcbiAgfVxuXG4gIG9uQ29uc2VudENoYW5nZSh7XG4gICAgZ2l2ZW4sXG4gICAgdGVtcGxhdGUsXG4gIH06IHtcbiAgICBnaXZlbjogYm9vbGVhbjtcbiAgICB0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuICB9KTogdm9pZCB7XG4gICAgaWYgKGdpdmVuKSB7XG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5naXZlQ29uc2VudCh0ZW1wbGF0ZS5pZCwgdGVtcGxhdGUudmVyc2lvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLndpdGhkcmF3Q29uc2VudCh0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb2RlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uQ29uc2VudEdpdmVuU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7IGtleTogJ2NvbnNlbnRNYW5hZ2VtZW50Rm9ybS5tZXNzYWdlLnN1Y2Nlc3MuZ2l2ZW4nIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uQ29uc2VudFdpdGhkcmF3blN1Y2Nlc3Moc3VjY2VzczogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5yZXNldFdpdGhkcmF3Q29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHsga2V5OiAnY29uc2VudE1hbmFnZW1lbnRGb3JtLm1lc3NhZ2Uuc3VjY2Vzcy53aXRoZHJhd24nIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZWplY3RBbGwodGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXSA9IFtdKTogdm9pZCB7XG4gICAgY29uc3QgY29uc2VudHNUb1dpdGhkcmF3OiBDb25zZW50VGVtcGxhdGVbXSA9IFtdO1xuICAgIHRlbXBsYXRlcy5mb3JFYWNoKHRlbXBsYXRlID0+IHtcbiAgICAgIGlmICh0aGlzLmlzQ29uc2VudEdpdmVuKHRlbXBsYXRlKSkge1xuICAgICAgICBpZiAodGhpcy5pc1JlcXVpcmVkQ29uc2VudCh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc2VudHNUb1dpdGhkcmF3LnB1c2godGVtcGxhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hbGxDb25zZW50c0xvYWRpbmcubmV4dCh0cnVlKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnNldHVwV2l0aGRyYXdhbFN0cmVhbShjb25zZW50c1RvV2l0aGRyYXcpXG4gICAgICAgIC5waXBlKHRhcChfdGltZXNMb2FkZWQgPT4gdGhpcy5hbGxDb25zZW50c0xvYWRpbmcubmV4dChmYWxzZSkpKVxuICAgICAgICAuc3Vic2NyaWJlKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cFdpdGhkcmF3YWxTdHJlYW0oXG4gICAgY29uc2VudHNUb1dpdGhkcmF3OiBDb25zZW50VGVtcGxhdGVbXSA9IFtdXG4gICk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgY29uc3QgbG9hZGluZyQgPSBjb25jYXQoXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRMb2FkaW5nKClcbiAgICApLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgZmlsdGVyKGxvYWRpbmcgPT4gIWxvYWRpbmcpXG4gICAgKTtcbiAgICBjb25zdCBjb3VudCQgPSBsb2FkaW5nJC5waXBlKHNjYW4oKGFjYywgX3ZhbHVlKSA9PiBhY2MgKyAxLCAtMSkpO1xuICAgIGNvbnN0IHdpdGhkcmF3JCA9IGNvdW50JC5waXBlKFxuICAgICAgdGFwKGkgPT4ge1xuICAgICAgICBpZiAoaSA8IGNvbnNlbnRzVG9XaXRoZHJhdy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS53aXRoZHJhd0NvbnNlbnQoXG4gICAgICAgICAgICBjb25zZW50c1RvV2l0aGRyYXdbaV0uY3VycmVudENvbnNlbnQuY29kZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb25zdCBjaGVja1RpbWVzTG9hZGVkJCA9IHdpdGhkcmF3JC5waXBlKFxuICAgICAgZmlsdGVyKHRpbWVzTG9hZGVkID0+IHRpbWVzTG9hZGVkID09PSBjb25zZW50c1RvV2l0aGRyYXcubGVuZ3RoKVxuICAgICk7XG5cbiAgICByZXR1cm4gY2hlY2tUaW1lc0xvYWRlZCQ7XG4gIH1cblxuICBwcml2YXRlIGlzQ29uc2VudEdpdmVuKGNvbnNlbnRUZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIEJvb2xlYW4oY29uc2VudFRlbXBsYXRlLmN1cnJlbnRDb25zZW50KSAmJlxuICAgICAgQm9vbGVhbihjb25zZW50VGVtcGxhdGUuY3VycmVudENvbnNlbnQuY29uc2VudEdpdmVuRGF0ZSkgJiZcbiAgICAgICFCb29sZWFuKGNvbnNlbnRUZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb25zZW50V2l0aGRyYXduRGF0ZSlcbiAgICApO1xuICB9XG5cbiAgYWxsb3dBbGwodGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXSA9IFtdKTogdm9pZCB7XG4gICAgY29uc3QgY29uc2VudHNUb0dpdmU6IENvbnNlbnRUZW1wbGF0ZVtdID0gW107XG4gICAgdGVtcGxhdGVzLmZvckVhY2godGVtcGxhdGUgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNDb25zZW50V2l0aGRyYXduKHRlbXBsYXRlKSkge1xuICAgICAgICBpZiAodGhpcy5pc1JlcXVpcmVkQ29uc2VudCh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zZW50c1RvR2l2ZS5wdXNoKHRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYWxsQ29uc2VudHNMb2FkaW5nLm5leHQodHJ1ZSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5zZXR1cEdpdmVTdHJlYW0oY29uc2VudHNUb0dpdmUpXG4gICAgICAgIC5waXBlKHRhcChfdGltZXNMb2FkZWQgPT4gdGhpcy5hbGxDb25zZW50c0xvYWRpbmcubmV4dChmYWxzZSkpKVxuICAgICAgICAuc3Vic2NyaWJlKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cEdpdmVTdHJlYW0oXG4gICAgY29uc2VudHNUb0dpdmU6IENvbnNlbnRUZW1wbGF0ZVtdID0gW11cbiAgKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICBjb25zdCBsb2FkaW5nJCA9IGNvbmNhdChcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldEdpdmVDb25zZW50UmVzdWx0TG9hZGluZygpXG4gICAgKS5waXBlKFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIGZpbHRlcihsb2FkaW5nID0+ICFsb2FkaW5nKVxuICAgICk7XG4gICAgY29uc3QgY291bnQkID0gbG9hZGluZyQucGlwZShzY2FuKChhY2MsIF92YWx1ZSkgPT4gYWNjICsgMSwgLTEpKTtcbiAgICBjb25zdCBnaXZlQ29uc2VudCQgPSBjb3VudCQucGlwZShcbiAgICAgIHRhcChpID0+IHtcbiAgICAgICAgaWYgKGkgPCBjb25zZW50c1RvR2l2ZS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5naXZlQ29uc2VudChcbiAgICAgICAgICAgIGNvbnNlbnRzVG9HaXZlW2ldLmlkLFxuICAgICAgICAgICAgY29uc2VudHNUb0dpdmVbaV0udmVyc2lvblxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb25zdCBjaGVja1RpbWVzTG9hZGVkJCA9IGdpdmVDb25zZW50JC5waXBlKFxuICAgICAgZmlsdGVyKHRpbWVzTG9hZGVkID0+IHRpbWVzTG9hZGVkID09PSBjb25zZW50c1RvR2l2ZS5sZW5ndGgpXG4gICAgKTtcblxuICAgIHJldHVybiBjaGVja1RpbWVzTG9hZGVkJDtcbiAgfVxuXG4gIHByaXZhdGUgaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnRUZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlKTogYm9vbGVhbiB7XG4gICAgaWYgKEJvb2xlYW4oY29uc2VudFRlbXBsYXRlLmN1cnJlbnRDb25zZW50KSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oY29uc2VudFRlbXBsYXRlLmN1cnJlbnRDb25zZW50LmNvbnNlbnRXaXRoZHJhd25EYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGlzUmVxdWlyZWRDb25zZW50KHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGUpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuaXNBbm9ueW1vdXNDb25zZW50c0VuYWJsZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgQm9vbGVhbih0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzKSAmJlxuICAgICAgQm9vbGVhbihcbiAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzXG4gICAgICApICYmXG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXMoXG4gICAgICAgIHRlbXBsYXRlLmlkXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuYWxsQ29uc2VudHNMb2FkaW5nLnVuc3Vic2NyaWJlKCk7XG5cbiAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5yZXNldEdpdmVDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRXaXRoZHJhd0NvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgfVxufVxuIl19