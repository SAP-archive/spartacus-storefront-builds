/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AnonymousConsentsConfig, AnonymousConsentsService, ANONYMOUS_CONSENTS_FEATURE, AuthService, GlobalMessageService, GlobalMessageType, isFeatureEnabled, isFeatureLevel, UserConsentService, } from '@spartacus/core';
import { BehaviorSubject, combineLatest, concat, Subscription, } from 'rxjs';
import { distinctUntilChanged, filter, map, scan, skipWhile, tap, withLatestFrom, } from 'rxjs/operators';
var ConsentManagementComponent = /** @class */ (function () {
    function ConsentManagementComponent(userConsentService, globalMessageService, anonymousConsentsConfig, anonymousConsentsService, authService) {
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
    ConsentManagementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
        function (_a) {
            var _b = tslib_1.__read(_a, 5), consentLoading = _b[0], giveConsentLoading = _b[1], withdrawConsentLoading = _b[2], isUserLoggedIn = _b[3], allConsentsLoading = _b[4];
            return consentLoading ||
                giveConsentLoading ||
                withdrawConsentLoading ||
                !isUserLoggedIn ||
                allConsentsLoading;
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
        this.templateList$ = this.userConsentService.getConsents().pipe(withLatestFrom(this.anonymousConsentsService.getTemplates(), this.authService.isUserLoggedIn()), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 3), _templateList = _b[0], _anonymousTemplates = _b[1], isUserLoggedIn = _b[2];
            return isUserLoggedIn;
        })), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), templateList = _b[0], _anonymousTemplates = _b[1];
            if (!_this.consentsExists(templateList)) {
                _this.userConsentService.loadConsents();
            }
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), templateList = _b[0], anonymousTemplates = _b[1];
            if (!_this.isAnonymousConsentsEnabled) {
                return templateList;
            }
            if (Boolean(_this.anonymousConsentsConfig.anonymousConsents)) {
                if (Boolean(_this.anonymousConsentsConfig.anonymousConsents.requiredConsents)) {
                    _this.requiredConsents = _this.anonymousConsentsConfig.anonymousConsents.requiredConsents;
                }
                if (Boolean(_this.anonymousConsentsConfig.anonymousConsents
                    .consentManagementPage)) {
                    return _this.hideAnonymousConsents(templateList, anonymousTemplates);
                }
            }
            return templateList;
        })));
    };
    /**
     * @private
     * @param {?} templateList
     * @param {?=} anonymousTemplates
     * @return {?}
     */
    ConsentManagementComponent.prototype.hideAnonymousConsents = /**
     * @private
     * @param {?} templateList
     * @param {?=} anonymousTemplates
     * @return {?}
     */
    function (templateList, anonymousTemplates) {
        if (anonymousTemplates === void 0) { anonymousTemplates = []; }
        /** @type {?} */
        var hideTemplateIds = [];
        if (!this.anonymousConsentsConfig.anonymousConsents.consentManagementPage
            .showAnonymousConsents) {
            hideTemplateIds = anonymousTemplates.map((/**
             * @param {?} template
             * @return {?}
             */
            function (template) { return template.id; }));
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
     * @param {?=} templates
     * @return {?}
     */
    ConsentManagementComponent.prototype.rejectAll = /**
     * @param {?=} templates
     * @return {?}
     */
    function (templates) {
        var _this = this;
        if (templates === void 0) { templates = []; }
        /** @type {?} */
        var consentsToWithdraw = [];
        templates.forEach((/**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            if (_this.userConsentService.isConsentGiven(template.currentConsent)) {
                if (_this.isRequiredConsent(template)) {
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
        function (_timesLoaded) { return _this.allConsentsLoading.next(false); })))
            .subscribe());
    };
    /**
     * @private
     * @param {?=} consentsToWithdraw
     * @return {?}
     */
    ConsentManagementComponent.prototype.setupWithdrawalStream = /**
     * @private
     * @param {?=} consentsToWithdraw
     * @return {?}
     */
    function (consentsToWithdraw) {
        var _this = this;
        if (consentsToWithdraw === void 0) { consentsToWithdraw = []; }
        /** @type {?} */
        var loading$ = concat(this.userConsentService.getWithdrawConsentResultLoading()).pipe(distinctUntilChanged(), filter((/**
         * @param {?} loading
         * @return {?}
         */
        function (loading) { return !loading; })));
        /** @type {?} */
        var count$ = loading$.pipe(scan((/**
         * @param {?} acc
         * @param {?} _value
         * @return {?}
         */
        function (acc, _value) { return acc + 1; }), -1));
        /** @type {?} */
        var withdraw$ = count$.pipe(tap((/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            if (i < consentsToWithdraw.length) {
                _this.userConsentService.withdrawConsent(consentsToWithdraw[i].currentConsent.code);
            }
        })));
        /** @type {?} */
        var checkTimesLoaded$ = withdraw$.pipe(filter((/**
         * @param {?} timesLoaded
         * @return {?}
         */
        function (timesLoaded) { return timesLoaded === consentsToWithdraw.length; })));
        return checkTimesLoaded$;
    };
    /**
     * @param {?=} templates
     * @return {?}
     */
    ConsentManagementComponent.prototype.allowAll = /**
     * @param {?=} templates
     * @return {?}
     */
    function (templates) {
        var _this = this;
        if (templates === void 0) { templates = []; }
        /** @type {?} */
        var consentsToGive = [];
        templates.forEach((/**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            if (_this.userConsentService.isConsentWithdrawn(template.currentConsent)) {
                if (_this.isRequiredConsent(template)) {
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
        function (_timesLoaded) { return _this.allConsentsLoading.next(false); })))
            .subscribe());
    };
    /**
     * @private
     * @param {?=} consentsToGive
     * @return {?}
     */
    ConsentManagementComponent.prototype.setupGiveStream = /**
     * @private
     * @param {?=} consentsToGive
     * @return {?}
     */
    function (consentsToGive) {
        var _this = this;
        if (consentsToGive === void 0) { consentsToGive = []; }
        /** @type {?} */
        var loading$ = concat(this.userConsentService.getGiveConsentResultLoading()).pipe(distinctUntilChanged(), filter((/**
         * @param {?} loading
         * @return {?}
         */
        function (loading) { return !loading; })));
        /** @type {?} */
        var count$ = loading$.pipe(scan((/**
         * @param {?} acc
         * @param {?} _value
         * @return {?}
         */
        function (acc, _value) { return acc + 1; }), -1));
        /** @type {?} */
        var giveConsent$ = count$.pipe(tap((/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            if (i < consentsToGive.length) {
                _this.userConsentService.giveConsent(consentsToGive[i].id, consentsToGive[i].version);
            }
        })));
        /** @type {?} */
        var checkTimesLoaded$ = giveConsent$.pipe(filter((/**
         * @param {?} timesLoaded
         * @return {?}
         */
        function (timesLoaded) { return timesLoaded === consentsToGive.length; })));
        return checkTimesLoaded$;
    };
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    ConsentManagementComponent.prototype.isRequiredConsent = /**
     * @private
     * @param {?} template
     * @return {?}
     */
    function (template) {
        if (!this.isAnonymousConsentsEnabled) {
            return false;
        }
        return (Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.requiredConsents) &&
            this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(template.id));
    };
    /**
     * @return {?}
     */
    ConsentManagementComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.unsubscribe();
        this.allConsentsLoading.unsubscribe();
        this.userConsentService.resetGiveConsentProcessState();
        this.userConsentService.resetWithdrawConsentProcessState();
    };
    ConsentManagementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-consent-management',
                    template: "<!-- TODO(issue:4989) Anonymous consents - remove the wrapping `<ng-container *ngIf=\"isLevel13; else legacyConsentManagementPage\">` -->\n<ng-container *ngIf=\"isLevel13; else legacyConsentManagementPage\">\n  <div *ngIf=\"loading$ | async; else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <ng-container *ngIf=\"templateList$ | async as templateList\">\n      <div class=\"cx-consent-action-links\">\n        <div class=\"col-sm-12 col-md-8 col-lg-6\">\n          <a\n            tabindex=\"0\"\n            class=\"btn-link cx-action-link\"\n            (click)=\"rejectAll(templateList)\"\n            >{{ 'consentManagementForm.clearAll' | cxTranslate }}</a\n          >\n          <a\n            tabindex=\"0\"\n            class=\"btn-link cx-action-link\"\n            (click)=\"allowAll(templateList)\"\n            >{{ 'consentManagementForm.selectAll' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n\n      <div class=\"cx-consent-toggles\">\n        <div class=\"col-sm-12 col-md-8 col-lg-6\">\n          <cx-consent-management-form\n            *ngFor=\"let consentTemplate of templateList\"\n            [consentTemplate]=\"consentTemplate\"\n            [requiredConsents]=\"requiredConsents\"\n            [isAnonymousConsentsEnabled]=\"isAnonymousConsentsEnabled\"\n            [isLevel13]=\"isLevel13\"\n            (consentChanged)=\"onConsentChange($event)\"\n          ></cx-consent-management-form>\n        </div>\n      </div>\n    </ng-container>\n  </ng-template>\n</ng-container>\n\n<!-- TODO(issue:4989) Anonymous consents - remove this whole `<ng-template>` -->\n<ng-template #legacyConsentManagementPage>\n  <div *ngIf=\"loading$ | async; else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <cx-consent-management-form\n          *ngFor=\"let consentTemplate of templateList$ | async\"\n          [consentTemplate]=\"consentTemplate\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    ConsentManagementComponent.ctorParameters = function () { return [
        { type: UserConsentService },
        { type: GlobalMessageService },
        { type: AnonymousConsentsConfig },
        { type: AnonymousConsentsService },
        { type: AuthService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9jb25zZW50LW1hbmFnZW1lbnQvY29tcG9uZW50cy9jb25zZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLHVCQUF1QixFQUN2Qix3QkFBd0IsRUFDeEIsMEJBQTBCLEVBQzFCLFdBQVcsRUFFWCxvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixjQUFjLEVBQ2Qsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUNMLGVBQWUsRUFDZixhQUFhLEVBQ2IsTUFBTSxFQUVOLFlBQVksR0FDYixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLEdBQUcsRUFDSCxJQUFJLEVBQ0osU0FBUyxFQUNULEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QjtJQThDRSxvQ0FDVSxrQkFBc0MsRUFDdEMsb0JBQTBDLEVBQzFDLHVCQUFpRCxFQUNqRCx3QkFBbUQsRUFDbkQsV0FBeUI7UUFKekIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBMEI7UUFDakQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEyQjtRQUNuRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQTlDM0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLHVCQUFrQixHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxD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RSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztJQUM3RCxDQUFDOztnQkF6VkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLGkwRUFBa0Q7aUJBQ25EOzs7O2dCQXRCQyxrQkFBa0I7Z0JBSmxCLG9CQUFvQjtnQkFMcEIsdUJBQXVCO2dCQUN2Qix3QkFBd0I7Z0JBRXhCLFdBQVc7O0lBbVhiLGlDQUFDO0NBQUEsQUExVkQsSUEwVkM7U0F0VlksMEJBQTBCOzs7Ozs7SUFDckMsbURBQTJDOzs7OztJQUMzQyx3REFBaUU7O0lBRWpFLG1EQUE2Qzs7SUFDN0MsOENBQThCOztJQUU5QixzREFBZ0M7O0lBRWhDLGdFQUdFOztJQUdGLCtDQUFnRTs7Ozs7SUE0QjlELHdEQUE4Qzs7Ozs7SUFDOUMsMERBQWtEOzs7OztJQUNsRCw2REFBeUQ7Ozs7O0lBQ3pELDhEQUEyRDs7Ozs7SUFDM0QsaURBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gIEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkUsXG4gIEF1dGhTZXJ2aWNlLFxuICBDb25zZW50VGVtcGxhdGUsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgaXNGZWF0dXJlRW5hYmxlZCxcbiAgaXNGZWF0dXJlTGV2ZWwsXG4gIFVzZXJDb25zZW50U2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIEJlaGF2aW9yU3ViamVjdCxcbiAgY29tYmluZUxhdGVzdCxcbiAgY29uY2F0LFxuICBPYnNlcnZhYmxlLFxuICBTdWJzY3JpcHRpb24sXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzY2FuLFxuICBza2lwV2hpbGUsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY29uc2VudC1tYW5hZ2VtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnNlbnQtbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnNlbnRNYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHByaXZhdGUgYWxsQ29uc2VudHNMb2FkaW5nID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgdGVtcGxhdGVMaXN0JDogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT47XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIHJlcXVpcmVkQ29uc2VudHM6IHN0cmluZ1tdID0gW107XG5cbiAgaXNBbm9ueW1vdXNDb25zZW50c0VuYWJsZWQgPSBpc0ZlYXR1cmVFbmFibGVkKFxuICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkVcbiAgKTtcblxuICAvLyBUT0RPKGlzc3VlOjQ5ODkpIEFub255bW91cyBjb25zZW50cyAtIHJlbW92ZVxuICBpc0xldmVsMTMgPSBpc0ZlYXR1cmVMZXZlbCh0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLCAnMS4zJyk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdXNlckNvbnNlbnRTZXJ2aWNlOiBVc2VyQ29uc2VudFNlcnZpY2UsXG4gICAgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIGFub255bW91c0NvbnNlbnRzQ29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogSW5zdGVhZCwgdXNlOlxuICAgYGBgdHNcbiAgIGNvbnN0cnVjdG9yKFxuICAgICB1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZSxcbiAgICAgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgICBhbm9ueW1vdXNDb25zZW50c0NvbmZpZyA6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgICBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2UgOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICkgXG4gICBgYGBcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlLFxuICAgIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNDb25maWc/OiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzU2VydmljZT86IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlPzogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldENvbnNlbnRzUmVzdWx0TG9hZGluZygpLFxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0R2l2ZUNvbnNlbnRSZXN1bHRMb2FkaW5nKCksXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRMb2FkaW5nKCksXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCksXG4gICAgICB0aGlzLmFsbENvbnNlbnRzTG9hZGluZyxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW1xuICAgICAgICAgIGNvbnNlbnRMb2FkaW5nLFxuICAgICAgICAgIGdpdmVDb25zZW50TG9hZGluZyxcbiAgICAgICAgICB3aXRoZHJhd0NvbnNlbnRMb2FkaW5nLFxuICAgICAgICAgIGlzVXNlckxvZ2dlZEluLFxuICAgICAgICAgIGFsbENvbnNlbnRzTG9hZGluZyxcbiAgICAgICAgXSkgPT5cbiAgICAgICAgICBjb25zZW50TG9hZGluZyB8fFxuICAgICAgICAgIGdpdmVDb25zZW50TG9hZGluZyB8fFxuICAgICAgICAgIHdpdGhkcmF3Q29uc2VudExvYWRpbmcgfHxcbiAgICAgICAgICAhaXNVc2VyTG9nZ2VkSW4gfHxcbiAgICAgICAgICBhbGxDb25zZW50c0xvYWRpbmdcbiAgICAgIClcbiAgICApO1xuICAgIHRoaXMuY29uc2VudExpc3RJbml0KCk7XG4gICAgdGhpcy5naXZlQ29uc2VudEluaXQoKTtcbiAgICB0aGlzLndpdGhkcmF3Q29uc2VudEluaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uc2VudExpc3RJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGVtcGxhdGVMaXN0JCA9IHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldENvbnNlbnRzKCkucGlwZShcbiAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5nZXRUZW1wbGF0ZXMoKSxcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpXG4gICAgICApLFxuICAgICAgZmlsdGVyKFxuICAgICAgICAoW190ZW1wbGF0ZUxpc3QsIF9hbm9ueW1vdXNUZW1wbGF0ZXMsIGlzVXNlckxvZ2dlZEluXSkgPT4gaXNVc2VyTG9nZ2VkSW5cbiAgICAgICksXG4gICAgICB0YXAoKFt0ZW1wbGF0ZUxpc3QsIF9hbm9ueW1vdXNUZW1wbGF0ZXNdKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5jb25zZW50c0V4aXN0cyh0ZW1wbGF0ZUxpc3QpKSB7XG4gICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UubG9hZENvbnNlbnRzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChbdGVtcGxhdGVMaXN0LCBhbm9ueW1vdXNUZW1wbGF0ZXNdKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pc0Fub255bW91c0NvbnNlbnRzRW5hYmxlZCkge1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZUxpc3Q7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQm9vbGVhbih0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzKSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIEJvb2xlYW4oXG4gICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50c1xuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5yZXF1aXJlZENvbnNlbnRzID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBCb29sZWFuKFxuICAgICAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzXG4gICAgICAgICAgICAgICAgLmNvbnNlbnRNYW5hZ2VtZW50UGFnZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGlkZUFub255bW91c0NvbnNlbnRzKHRlbXBsYXRlTGlzdCwgYW5vbnltb3VzVGVtcGxhdGVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVtcGxhdGVMaXN0O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoaWRlQW5vbnltb3VzQ29uc2VudHMoXG4gICAgdGVtcGxhdGVMaXN0OiBDb25zZW50VGVtcGxhdGVbXSxcbiAgICBhbm9ueW1vdXNUZW1wbGF0ZXM6IENvbnNlbnRUZW1wbGF0ZVtdID0gW11cbiAgKTogQ29uc2VudFRlbXBsYXRlW10ge1xuICAgIGxldCBoaWRlVGVtcGxhdGVJZHM6IHN0cmluZ1tdID0gW107XG5cbiAgICBpZiAoXG4gICAgICAhdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5jb25zZW50TWFuYWdlbWVudFBhZ2VcbiAgICAgICAgLnNob3dBbm9ueW1vdXNDb25zZW50c1xuICAgICkge1xuICAgICAgaGlkZVRlbXBsYXRlSWRzID0gYW5vbnltb3VzVGVtcGxhdGVzLm1hcCh0ZW1wbGF0ZSA9PiB0ZW1wbGF0ZS5pZCk7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZmlsdGVyQ29uc2VudFRlbXBsYXRlcyhcbiAgICAgICAgdGVtcGxhdGVMaXN0LFxuICAgICAgICBoaWRlVGVtcGxhdGVJZHNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgQm9vbGVhbihcbiAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5jb25zZW50TWFuYWdlbWVudFBhZ2VcbiAgICAgICAgICAuaGlkZUNvbnNlbnRzXG4gICAgICApICYmXG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLmNvbnNlbnRNYW5hZ2VtZW50UGFnZVxuICAgICAgICAuaGlkZUNvbnNlbnRzLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIGhpZGVUZW1wbGF0ZUlkcyA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHNcbiAgICAgICAgLmNvbnNlbnRNYW5hZ2VtZW50UGFnZS5oaWRlQ29uc2VudHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmZpbHRlckNvbnNlbnRUZW1wbGF0ZXMoXG4gICAgICB0ZW1wbGF0ZUxpc3QsXG4gICAgICBoaWRlVGVtcGxhdGVJZHNcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnaXZlQ29uc2VudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRHaXZlQ29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZVxuICAgICAgICAuZ2V0R2l2ZUNvbnNlbnRSZXN1bHRTdWNjZXNzKClcbiAgICAgICAgLnN1YnNjcmliZShzdWNjZXNzID0+IHRoaXMub25Db25zZW50R2l2ZW5TdWNjZXNzKHN1Y2Nlc3MpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHdpdGhkcmF3Q29uc2VudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRXaXRoZHJhd0NvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2VcbiAgICAgICAgLmdldFdpdGhkcmF3Q29uc2VudFJlc3VsdExvYWRpbmcoKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBza2lwV2hpbGUoQm9vbGVhbiksXG4gICAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRTdWNjZXNzKClcbiAgICAgICAgICApLFxuICAgICAgICAgIG1hcCgoWywgd2l0aGRyYXdhbFN1Y2Nlc3NdKSA9PiB3aXRoZHJhd2FsU3VjY2VzcyksXG4gICAgICAgICAgdGFwKHdpdGhkcmF3YWxTdWNjZXNzID0+IHtcbiAgICAgICAgICAgIGlmICh3aXRoZHJhd2FsU3VjY2Vzcykge1xuICAgICAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5sb2FkQ29uc2VudHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUod2l0aGRyYXdhbFN1Y2Nlc3MgPT5cbiAgICAgICAgICB0aGlzLm9uQ29uc2VudFdpdGhkcmF3blN1Y2Nlc3Mod2l0aGRyYXdhbFN1Y2Nlc3MpXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zZW50c0V4aXN0cyh0ZW1wbGF0ZUxpc3Q6IENvbnNlbnRUZW1wbGF0ZVtdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGVtcGxhdGVMaXN0KSAmJiB0ZW1wbGF0ZUxpc3QubGVuZ3RoID4gMDtcbiAgfVxuXG4gIG9uQ29uc2VudENoYW5nZSh7XG4gICAgZ2l2ZW4sXG4gICAgdGVtcGxhdGUsXG4gIH06IHtcbiAgICBnaXZlbjogYm9vbGVhbjtcbiAgICB0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuICB9KTogdm9pZCB7XG4gICAgaWYgKGdpdmVuKSB7XG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5naXZlQ29uc2VudCh0ZW1wbGF0ZS5pZCwgdGVtcGxhdGUudmVyc2lvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLndpdGhkcmF3Q29uc2VudCh0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb2RlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uQ29uc2VudEdpdmVuU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7IGtleTogJ2NvbnNlbnRNYW5hZ2VtZW50Rm9ybS5tZXNzYWdlLnN1Y2Nlc3MuZ2l2ZW4nIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uQ29uc2VudFdpdGhkcmF3blN1Y2Nlc3Moc3VjY2VzczogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5yZXNldFdpdGhkcmF3Q29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHsga2V5OiAnY29uc2VudE1hbmFnZW1lbnRGb3JtLm1lc3NhZ2Uuc3VjY2Vzcy53aXRoZHJhd24nIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZWplY3RBbGwodGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXSA9IFtdKTogdm9pZCB7XG4gICAgY29uc3QgY29uc2VudHNUb1dpdGhkcmF3OiBDb25zZW50VGVtcGxhdGVbXSA9IFtdO1xuICAgIHRlbXBsYXRlcy5mb3JFYWNoKHRlbXBsYXRlID0+IHtcbiAgICAgIGlmICh0aGlzLnVzZXJDb25zZW50U2VydmljZS5pc0NvbnNlbnRHaXZlbih0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudCkpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZXF1aXJlZENvbnNlbnQodGVtcGxhdGUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNlbnRzVG9XaXRoZHJhdy5wdXNoKHRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYWxsQ29uc2VudHNMb2FkaW5nLm5leHQodHJ1ZSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5zZXR1cFdpdGhkcmF3YWxTdHJlYW0oY29uc2VudHNUb1dpdGhkcmF3KVxuICAgICAgICAucGlwZSh0YXAoX3RpbWVzTG9hZGVkID0+IHRoaXMuYWxsQ29uc2VudHNMb2FkaW5nLm5leHQoZmFsc2UpKSlcbiAgICAgICAgLnN1YnNjcmliZSgpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBXaXRoZHJhd2FsU3RyZWFtKFxuICAgIGNvbnNlbnRzVG9XaXRoZHJhdzogQ29uc2VudFRlbXBsYXRlW10gPSBbXVxuICApOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIGNvbnN0IGxvYWRpbmckID0gY29uY2F0KFxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0TG9hZGluZygpXG4gICAgKS5waXBlKFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIGZpbHRlcihsb2FkaW5nID0+ICFsb2FkaW5nKVxuICAgICk7XG4gICAgY29uc3QgY291bnQkID0gbG9hZGluZyQucGlwZShzY2FuKChhY2MsIF92YWx1ZSkgPT4gYWNjICsgMSwgLTEpKTtcbiAgICBjb25zdCB3aXRoZHJhdyQgPSBjb3VudCQucGlwZShcbiAgICAgIHRhcChpID0+IHtcbiAgICAgICAgaWYgKGkgPCBjb25zZW50c1RvV2l0aGRyYXcubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2Uud2l0aGRyYXdDb25zZW50KFxuICAgICAgICAgICAgY29uc2VudHNUb1dpdGhkcmF3W2ldLmN1cnJlbnRDb25zZW50LmNvZGVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgY29uc3QgY2hlY2tUaW1lc0xvYWRlZCQgPSB3aXRoZHJhdyQucGlwZShcbiAgICAgIGZpbHRlcih0aW1lc0xvYWRlZCA9PiB0aW1lc0xvYWRlZCA9PT0gY29uc2VudHNUb1dpdGhkcmF3Lmxlbmd0aClcbiAgICApO1xuXG4gICAgcmV0dXJuIGNoZWNrVGltZXNMb2FkZWQkO1xuICB9XG5cbiAgYWxsb3dBbGwodGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXSA9IFtdKTogdm9pZCB7XG4gICAgY29uc3QgY29uc2VudHNUb0dpdmU6IENvbnNlbnRUZW1wbGF0ZVtdID0gW107XG4gICAgdGVtcGxhdGVzLmZvckVhY2godGVtcGxhdGUgPT4ge1xuICAgICAgaWYgKHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bih0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudCkpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZXF1aXJlZENvbnNlbnQodGVtcGxhdGUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc2VudHNUb0dpdmUucHVzaCh0ZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmFsbENvbnNlbnRzTG9hZGluZy5uZXh0KHRydWUpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMuc2V0dXBHaXZlU3RyZWFtKGNvbnNlbnRzVG9HaXZlKVxuICAgICAgICAucGlwZSh0YXAoX3RpbWVzTG9hZGVkID0+IHRoaXMuYWxsQ29uc2VudHNMb2FkaW5nLm5leHQoZmFsc2UpKSlcbiAgICAgICAgLnN1YnNjcmliZSgpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBHaXZlU3RyZWFtKFxuICAgIGNvbnNlbnRzVG9HaXZlOiBDb25zZW50VGVtcGxhdGVbXSA9IFtdXG4gICk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgY29uc3QgbG9hZGluZyQgPSBjb25jYXQoXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRHaXZlQ29uc2VudFJlc3VsdExvYWRpbmcoKVxuICAgICkucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBmaWx0ZXIobG9hZGluZyA9PiAhbG9hZGluZylcbiAgICApO1xuICAgIGNvbnN0IGNvdW50JCA9IGxvYWRpbmckLnBpcGUoc2NhbigoYWNjLCBfdmFsdWUpID0+IGFjYyArIDEsIC0xKSk7XG4gICAgY29uc3QgZ2l2ZUNvbnNlbnQkID0gY291bnQkLnBpcGUoXG4gICAgICB0YXAoaSA9PiB7XG4gICAgICAgIGlmIChpIDwgY29uc2VudHNUb0dpdmUubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2l2ZUNvbnNlbnQoXG4gICAgICAgICAgICBjb25zZW50c1RvR2l2ZVtpXS5pZCxcbiAgICAgICAgICAgIGNvbnNlbnRzVG9HaXZlW2ldLnZlcnNpb25cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgY29uc3QgY2hlY2tUaW1lc0xvYWRlZCQgPSBnaXZlQ29uc2VudCQucGlwZShcbiAgICAgIGZpbHRlcih0aW1lc0xvYWRlZCA9PiB0aW1lc0xvYWRlZCA9PT0gY29uc2VudHNUb0dpdmUubGVuZ3RoKVxuICAgICk7XG5cbiAgICByZXR1cm4gY2hlY2tUaW1lc0xvYWRlZCQ7XG4gIH1cblxuICBwcml2YXRlIGlzUmVxdWlyZWRDb25zZW50KHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGUpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuaXNBbm9ueW1vdXNDb25zZW50c0VuYWJsZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgQm9vbGVhbih0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzKSAmJlxuICAgICAgQm9vbGVhbihcbiAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzXG4gICAgICApICYmXG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXMoXG4gICAgICAgIHRlbXBsYXRlLmlkXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuYWxsQ29uc2VudHNMb2FkaW5nLnVuc3Vic2NyaWJlKCk7XG5cbiAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5yZXNldEdpdmVDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRXaXRoZHJhd0NvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgfVxufVxuIl19