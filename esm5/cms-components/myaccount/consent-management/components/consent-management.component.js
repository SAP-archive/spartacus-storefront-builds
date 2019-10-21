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
            if (_this.isConsentGiven(template)) {
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
     * @private
     * @param {?} consentTemplate
     * @return {?}
     */
    ConsentManagementComponent.prototype.isConsentGiven = /**
     * @private
     * @param {?} consentTemplate
     * @return {?}
     */
    function (consentTemplate) {
        return (Boolean(consentTemplate.currentConsent) &&
            Boolean(consentTemplate.currentConsent.consentGivenDate) &&
            !Boolean(consentTemplate.currentConsent.consentWithdrawnDate));
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
            if (_this.isConsentWithdrawn(template)) {
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
     * @param {?} consentTemplate
     * @return {?}
     */
    ConsentManagementComponent.prototype.isConsentWithdrawn = /**
     * @private
     * @param {?} consentTemplate
     * @return {?}
     */
    function (consentTemplate) {
        if (Boolean(consentTemplate.currentConsent)) {
            return Boolean(consentTemplate.currentConsent.consentWithdrawnDate);
        }
        return true;
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
                    template: "<!-- TODO(issue:4989) Anonymous consents - remove the wrapping `<ng-container *ngIf=\"isLevel13; else legacyConsentManagementPage\">` -->\n<ng-container *ngIf=\"isLevel13; else legacyConsentManagementPage\">\n  <div *ngIf=\"loading$ | async; else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <ng-container *ngIf=\"templateList$ | async as templateList\">\n      <div class=\"cx-consent-action-links\">\n        <div class=\"col-sm-12 col-md-8 col-lg-6\">\n          <a\n            tabindex=\"0\"\n            class=\"btn-link cx-action-link\"\n            (click)=\"rejectAll(templateList)\"\n            >{{ 'consentManagementForm.rejectAll' | cxTranslate }}</a\n          >\n          <span class=\"cx-links-separator\">|</span>\n          <a\n            tabindex=\"0\"\n            class=\"btn-link cx-action-link\"\n            (click)=\"allowAll(templateList)\"\n            >{{ 'consentManagementForm.allowAll' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n\n      <div class=\"cx-consent-toggles\">\n        <div class=\"col-sm-12 col-md-8 col-lg-6\">\n          <!-- TODO(issue:4989) Anonymous consents - remove `[isLevel13]=\"isLevel13\"` -->\n          <cx-consent-management-form\n            *ngFor=\"let consentTemplate of templateList\"\n            [consentTemplate]=\"consentTemplate\"\n            [requiredConsents]=\"requiredConsents\"\n            [isAnonymousConsentsEnabled]=\"isAnonymousConsentsEnabled\"\n            [isLevel13]=\"isLevel13\"\n            (consentChanged)=\"onConsentChange($event)\"\n          ></cx-consent-management-form>\n        </div>\n      </div>\n    </ng-container>\n  </ng-template>\n</ng-container>\n\n<!-- TODO(issue:4989) Anonymous consents - remove this whole `<ng-template>` -->\n<ng-template #legacyConsentManagementPage>\n  <div *ngIf=\"loading$ | async; else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <cx-consent-management-form\n          *ngFor=\"let consentTemplate of templateList$ | async\"\n          [consentTemplate]=\"consentTemplate\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-template>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9jb25zZW50LW1hbmFnZW1lbnQvY29tcG9uZW50cy9jb25zZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLHVCQUF1QixFQUN2Qix3QkFBd0IsRUFDeEIsMEJBQTBCLEVBQzFCLFdBQVcsRUFFWCxvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixjQUFjLEVBQ2Qsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUNMLGVBQWUsRUFDZixhQUFhLEVBQ2IsTUFBTSxFQUVOLFlBQVksR0FDYixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLEdBQUcsRUFDSCxJQUFJLEVBQ0osU0FBUyxFQUNULEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QjtJQThDRSxvQ0FDVSxrQkFBc0MsRUFDdEMsb0JBQTBDLEVBQzFDLHVCQUFpRCxFQUNqRCx3QkFBbUQsRUFDbkQsV0FBeUI7UUFKekIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBMEI7UUFDakQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEyQjtRQUNuRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQTlDM0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLHVCQUFrQixHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBS2pFLHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUVoQywrQkFBMEIsR0FBRyxnQkFBZ0IsQ0FDM0MsSUFBSSxDQUFDLHVCQUF1QixFQUM1QiwwQkFBMEIsQ0FDM0IsQ0FBQzs7UUFHRixjQUFTLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQWlDN0QsQ0FBQzs7OztJQUVKLDZDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1lBQzVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFBRTtZQUNsRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLEVBQUU7WUFDckQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLCtCQUErQixFQUFFO1lBQ3pELElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxrQkFBa0I7U0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHOzs7O1FBQ0QsVUFBQyxFQU1BO2dCQU5BLDBCQU1BLEVBTEMsc0JBQWMsRUFDZCwwQkFBa0IsRUFDbEIsOEJBQXNCLEVBQ3RCLHNCQUFjLEVBQ2QsMEJBQWtCO1lBRWxCLE9BQUEsY0FBYztnQkFDZCxrQkFBa0I7Z0JBQ2xCLHNCQUFzQjtnQkFDdEIsQ0FBQyxjQUFjO2dCQUNmLGtCQUFrQjtRQUpsQixDQUlrQixFQUNyQixDQUNGLENBQUM7UUFDRixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRU8sb0RBQWU7Ozs7SUFBdkI7UUFBQSxpQkF3Q0M7UUF2Q0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUM3RCxjQUFjLENBQ1osSUFBSSxDQUFDLHdCQUF3QixDQUFDLFlBQVksRUFBRSxFQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUNsQyxFQUNELE1BQU07Ozs7UUFDSixVQUFDLEVBQW9EO2dCQUFwRCwwQkFBb0QsRUFBbkQscUJBQWEsRUFBRSwyQkFBbUIsRUFBRSxzQkFBYztZQUFNLE9BQUEsY0FBYztRQUFkLENBQWMsRUFDekUsRUFDRCxHQUFHOzs7O1FBQUMsVUFBQyxFQUFtQztnQkFBbkMsMEJBQW1DLEVBQWxDLG9CQUFZLEVBQUUsMkJBQW1CO1lBQ3JDLElBQUksQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUN0QyxLQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDeEM7UUFDSCxDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsVUFBQyxFQUFrQztnQkFBbEMsMEJBQWtDLEVBQWpDLG9CQUFZLEVBQUUsMEJBQWtCO1lBQ3BDLElBQUksQ0FBQyxLQUFJLENBQUMsMEJBQTBCLEVBQUU7Z0JBQ3BDLE9BQU8sWUFBWSxDQUFDO2FBQ3JCO1lBRUQsSUFBSSxPQUFPLENBQUMsS0FBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLEVBQUU7Z0JBQzNELElBQ0UsT0FBTyxDQUNMLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FDaEUsRUFDRDtvQkFDQSxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDO2lCQUN6RjtnQkFDRCxJQUNFLE9BQU8sQ0FDTCxLQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCO3FCQUMzQyxxQkFBcUIsQ0FDekIsRUFDRDtvQkFDQSxPQUFPLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztpQkFDckU7YUFDRjtZQUVELE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRU8sMERBQXFCOzs7Ozs7SUFBN0IsVUFDRSxZQUErQixFQUMvQixrQkFBMEM7UUFBMUMsbUNBQUEsRUFBQSx1QkFBMEM7O1lBRXRDLGVBQWUsR0FBYSxFQUFFO1FBRWxDLElBQ0UsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMscUJBQXFCO2FBQ2xFLHFCQUFxQixFQUN4QjtZQUNBLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsRUFBRSxFQUFYLENBQVcsRUFBQyxDQUFDO1lBQ2xFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUNuRCxZQUFZLEVBQ1osZUFBZSxDQUNoQixDQUFDO1NBQ0g7UUFFRCxJQUNFLE9BQU8sQ0FDTCxJQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMscUJBQXFCO2FBQ2pFLFlBQVksQ0FDaEI7WUFDRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMscUJBQXFCO2lCQUNqRSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDMUI7WUFDQSxlQUFlLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQjtpQkFDN0QscUJBQXFCLENBQUMsWUFBWSxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQ25ELFlBQVksRUFDWixlQUFlLENBQ2hCLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLG9EQUFlOzs7O0lBQXZCO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FDcEIsSUFBSSxDQUFDLGtCQUFrQjthQUNwQiwyQkFBMkIsRUFBRTthQUM3QixTQUFTOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLEVBQW5DLENBQW1DLEVBQUMsQ0FDN0QsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU8sd0RBQW1COzs7O0lBQTNCO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDO1FBQzNELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUNwQixJQUFJLENBQUMsa0JBQWtCO2FBQ3BCLCtCQUErQixFQUFFO2FBQ2pDLElBQUksQ0FDSCxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQ2xCLGNBQWMsQ0FDWixJQUFJLENBQUMsa0JBQWtCLENBQUMsK0JBQStCLEVBQUUsQ0FDMUQsRUFDRCxHQUFHOzs7O1FBQUMsVUFBQyxFQUFxQjtnQkFBckIsMEJBQXFCLEVBQWxCLHlCQUFpQjtZQUFNLE9BQUEsaUJBQWlCO1FBQWpCLENBQWlCLEVBQUMsRUFDakQsR0FBRzs7OztRQUFDLFVBQUEsaUJBQWlCO1lBQ25CLElBQUksaUJBQWlCLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN4QztRQUNILENBQUMsRUFBQyxDQUNIO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUEsaUJBQWlCO1lBQzFCLE9BQUEsS0FBSSxDQUFDLHlCQUF5QixDQUFDLGlCQUFpQixDQUFDO1FBQWpELENBQWlELEVBQ2xELENBQ0osQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLG1EQUFjOzs7OztJQUF0QixVQUF1QixZQUErQjtRQUNwRCxPQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7OztJQUVELG9EQUFlOzs7O0lBQWYsVUFBZ0IsRUFNZjtZQUxDLGdCQUFLLEVBQ0wsc0JBQVE7UUFLUixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEU7YUFBTTtZQUNMLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2RTtJQUNILENBQUM7Ozs7OztJQUVPLDBEQUFxQjs7Ozs7SUFBN0IsVUFBOEIsT0FBZ0I7UUFDNUMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsa0JBQWtCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztZQUN2RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixFQUFFLEdBQUcsRUFBRSw2Q0FBNkMsRUFBRSxFQUN0RCxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sOERBQXlCOzs7OztJQUFqQyxVQUFrQyxPQUFnQjtRQUNoRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDO1lBQzNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLEVBQUUsR0FBRyxFQUFFLGlEQUFpRCxFQUFFLEVBQzFELGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7OztJQUVELDhDQUFTOzs7O0lBQVQsVUFBVSxTQUFpQztRQUEzQyxpQkFrQkM7UUFsQlMsMEJBQUEsRUFBQSxjQUFpQzs7WUFDbkMsa0JBQWtCLEdBQXNCLEVBQUU7UUFDaEQsU0FBUyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLFFBQVE7WUFDeEIsSUFBSSxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDcEMsT0FBTztpQkFDUjtnQkFDRCxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQzthQUMzQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsWUFBWSxJQUFJLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBbkMsQ0FBbUMsRUFBQyxDQUFDO2FBQzlELFNBQVMsRUFBRSxDQUNmLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTywwREFBcUI7Ozs7O0lBQTdCLFVBQ0Usa0JBQTBDO1FBRDVDLGlCQXdCQztRQXZCQyxtQ0FBQSxFQUFBLHVCQUEwQzs7WUFFcEMsUUFBUSxHQUFHLE1BQU0sQ0FDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLCtCQUErQixFQUFFLENBQzFELENBQUMsSUFBSSxDQUNKLG9CQUFvQixFQUFFLEVBQ3RCLE1BQU07Ozs7UUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLENBQUMsT0FBTyxFQUFSLENBQVEsRUFBQyxDQUM1Qjs7WUFDSyxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJOzs7OztRQUFDLFVBQUMsR0FBRyxFQUFFLE1BQU0sSUFBSyxPQUFBLEdBQUcsR0FBRyxDQUFDLEVBQVAsQ0FBTyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQzFELFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUMzQixHQUFHOzs7O1FBQUMsVUFBQSxDQUFDO1lBQ0gsSUFBSSxDQUFDLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxFQUFFO2dCQUNqQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUNyQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUMxQyxDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FDSDs7WUFDSyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUN0QyxNQUFNOzs7O1FBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxXQUFXLEtBQUssa0JBQWtCLENBQUMsTUFBTSxFQUF6QyxDQUF5QyxFQUFDLENBQ2pFO1FBRUQsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFFTyxtREFBYzs7Ozs7SUFBdEIsVUFBdUIsZUFBZ0M7UUFDckQsT0FBTyxDQUNMLE9BQU8sQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDO1lBQ3hELENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FDOUQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsNkNBQVE7Ozs7SUFBUixVQUFTLFNBQWlDO1FBQTFDLGlCQW1CQztRQW5CUSwwQkFBQSxFQUFBLGNBQWlDOztZQUNsQyxjQUFjLEdBQXNCLEVBQUU7UUFDNUMsU0FBUyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLFFBQVE7WUFDeEIsSUFBSSxLQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3JDLElBQUksS0FBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNwQyxPQUFPO2lCQUNSO2dCQUVELGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDO2FBQ2pDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxZQUFZLElBQUksT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFuQyxDQUFtQyxFQUFDLENBQUM7YUFDOUQsU0FBUyxFQUFFLENBQ2YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLG9EQUFlOzs7OztJQUF2QixVQUNFLGNBQXNDO1FBRHhDLGlCQXlCQztRQXhCQywrQkFBQSxFQUFBLG1CQUFzQzs7WUFFaEMsUUFBUSxHQUFHLE1BQU0sQ0FDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixFQUFFLENBQ3RELENBQUMsSUFBSSxDQUNKLG9CQUFvQixFQUFFLEVBQ3RCLE1BQU07Ozs7UUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLENBQUMsT0FBTyxFQUFSLENBQVEsRUFBQyxDQUM1Qjs7WUFDSyxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJOzs7OztRQUFDLFVBQUMsR0FBRyxFQUFFLE1BQU0sSUFBSyxPQUFBLEdBQUcsR0FBRyxDQUFDLEVBQVAsQ0FBTyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQzFELFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUM5QixHQUFHOzs7O1FBQUMsVUFBQSxDQUFDO1lBQ0gsSUFBSSxDQUFDLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FDakMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFDcEIsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FDMUIsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxFQUFDLENBQ0g7O1lBQ0ssaUJBQWlCLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FDekMsTUFBTTs7OztRQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsV0FBVyxLQUFLLGNBQWMsQ0FBQyxNQUFNLEVBQXJDLENBQXFDLEVBQUMsQ0FDN0Q7UUFFRCxPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVPLHVEQUFrQjs7Ozs7SUFBMUIsVUFBMkIsZUFBZ0M7UUFDekQsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzNDLE9BQU8sT0FBTyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUNyRTtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRU8sc0RBQWlCOzs7OztJQUF6QixVQUEwQixRQUF5QjtRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFO1lBQ3BDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLENBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQztZQUN2RCxPQUFPLENBQ0wsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUNoRTtZQUNELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQ3RFLFFBQVEsQ0FBQyxFQUFFLENBQ1osQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGdEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXRDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDO0lBQzdELENBQUM7O2dCQXhXRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMscTlFQUFrRDtpQkFDbkQ7Ozs7Z0JBdEJDLGtCQUFrQjtnQkFKbEIsb0JBQW9CO2dCQUxwQix1QkFBdUI7Z0JBQ3ZCLHdCQUF3QjtnQkFFeEIsV0FBVzs7SUFrWWIsaUNBQUM7Q0FBQSxBQXpXRCxJQXlXQztTQXJXWSwwQkFBMEI7Ozs7OztJQUNyQyxtREFBMkM7Ozs7O0lBQzNDLHdEQUFpRTs7SUFFakUsbURBQTZDOztJQUM3Qyw4Q0FBOEI7O0lBRTlCLHNEQUFnQzs7SUFFaEMsZ0VBR0U7O0lBR0YsK0NBQWdFOzs7OztJQTRCOUQsd0RBQThDOzs7OztJQUM5QywwREFBa0Q7Ozs7O0lBQ2xELDZEQUF5RDs7Ozs7SUFDekQsOERBQTJEOzs7OztJQUMzRCxpREFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSxcbiAgQXV0aFNlcnZpY2UsXG4gIENvbnNlbnRUZW1wbGF0ZSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBpc0ZlYXR1cmVFbmFibGVkLFxuICBpc0ZlYXR1cmVMZXZlbCxcbiAgVXNlckNvbnNlbnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgQmVoYXZpb3JTdWJqZWN0LFxuICBjb21iaW5lTGF0ZXN0LFxuICBjb25jYXQsXG4gIE9ic2VydmFibGUsXG4gIFN1YnNjcmlwdGlvbixcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHNjYW4sXG4gIHNraXBXaGlsZSxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jb25zZW50LW1hbmFnZW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29uc2VudE1hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgcHJpdmF0ZSBhbGxDb25zZW50c0xvYWRpbmcgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICB0ZW1wbGF0ZUxpc3QkOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPjtcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgcmVxdWlyZWRDb25zZW50czogc3RyaW5nW10gPSBbXTtcblxuICBpc0Fub255bW91c0NvbnNlbnRzRW5hYmxlZCA9IGlzRmVhdHVyZUVuYWJsZWQoXG4gICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRVxuICApO1xuXG4gIC8vIFRPRE8oaXNzdWU6NDk4OSkgQW5vbnltb3VzIGNvbnNlbnRzIC0gcmVtb3ZlXG4gIGlzTGV2ZWwxMyA9IGlzRmVhdHVyZUxldmVsKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsICcxLjMnKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZSxcbiAgICBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgYW5vbnltb3VzQ29uc2VudHNDb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBJbnN0ZWFkLCB1c2U6XG4gICBgYGB0c1xuICAgY29uc3RydWN0b3IoXG4gICAgIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlLFxuICAgICBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgIGFub255bW91c0NvbnNlbnRzQ29uZmlnIDogQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgIGFub255bW91c0NvbnNlbnRzU2VydmljZSA6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICAgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgKSBcbiAgIGBgYFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgdXNlckNvbnNlbnRTZXJ2aWNlOiBVc2VyQ29uc2VudFNlcnZpY2UsXG4gICAgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlckNvbnNlbnRTZXJ2aWNlOiBVc2VyQ29uc2VudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50c0NvbmZpZz86IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlPzogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U/OiBBdXRoU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHNSZXN1bHRMb2FkaW5nKCksXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRHaXZlQ29uc2VudFJlc3VsdExvYWRpbmcoKSxcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldFdpdGhkcmF3Q29uc2VudFJlc3VsdExvYWRpbmcoKSxcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKSxcbiAgICAgIHRoaXMuYWxsQ29uc2VudHNMb2FkaW5nLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChbXG4gICAgICAgICAgY29uc2VudExvYWRpbmcsXG4gICAgICAgICAgZ2l2ZUNvbnNlbnRMb2FkaW5nLFxuICAgICAgICAgIHdpdGhkcmF3Q29uc2VudExvYWRpbmcsXG4gICAgICAgICAgaXNVc2VyTG9nZ2VkSW4sXG4gICAgICAgICAgYWxsQ29uc2VudHNMb2FkaW5nLFxuICAgICAgICBdKSA9PlxuICAgICAgICAgIGNvbnNlbnRMb2FkaW5nIHx8XG4gICAgICAgICAgZ2l2ZUNvbnNlbnRMb2FkaW5nIHx8XG4gICAgICAgICAgd2l0aGRyYXdDb25zZW50TG9hZGluZyB8fFxuICAgICAgICAgICFpc1VzZXJMb2dnZWRJbiB8fFxuICAgICAgICAgIGFsbENvbnNlbnRzTG9hZGluZ1xuICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5jb25zZW50TGlzdEluaXQoKTtcbiAgICB0aGlzLmdpdmVDb25zZW50SW5pdCgpO1xuICAgIHRoaXMud2l0aGRyYXdDb25zZW50SW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zZW50TGlzdEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZUxpc3QkID0gdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHMoKS5waXBlKFxuICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdldFRlbXBsYXRlcygpLFxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKClcbiAgICAgICksXG4gICAgICBmaWx0ZXIoXG4gICAgICAgIChbX3RlbXBsYXRlTGlzdCwgX2Fub255bW91c1RlbXBsYXRlcywgaXNVc2VyTG9nZ2VkSW5dKSA9PiBpc1VzZXJMb2dnZWRJblxuICAgICAgKSxcbiAgICAgIHRhcCgoW3RlbXBsYXRlTGlzdCwgX2Fub255bW91c1RlbXBsYXRlc10pID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnNlbnRzRXhpc3RzKHRlbXBsYXRlTGlzdCkpIHtcbiAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5sb2FkQ29uc2VudHMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKFt0ZW1wbGF0ZUxpc3QsIGFub255bW91c1RlbXBsYXRlc10pID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQW5vbnltb3VzQ29uc2VudHNFbmFibGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlTGlzdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChCb29sZWFuKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMpKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgQm9vbGVhbihcbiAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVpcmVkQ29uc2VudHMgPSB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIEJvb2xlYW4oXG4gICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHNcbiAgICAgICAgICAgICAgICAuY29uc2VudE1hbmFnZW1lbnRQYWdlXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oaWRlQW5vbnltb3VzQ29uc2VudHModGVtcGxhdGVMaXN0LCBhbm9ueW1vdXNUZW1wbGF0ZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZUxpc3Q7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhpZGVBbm9ueW1vdXNDb25zZW50cyhcbiAgICB0ZW1wbGF0ZUxpc3Q6IENvbnNlbnRUZW1wbGF0ZVtdLFxuICAgIGFub255bW91c1RlbXBsYXRlczogQ29uc2VudFRlbXBsYXRlW10gPSBbXVxuICApOiBDb25zZW50VGVtcGxhdGVbXSB7XG4gICAgbGV0IGhpZGVUZW1wbGF0ZUlkczogc3RyaW5nW10gPSBbXTtcblxuICAgIGlmIChcbiAgICAgICF0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLmNvbnNlbnRNYW5hZ2VtZW50UGFnZVxuICAgICAgICAuc2hvd0Fub255bW91c0NvbnNlbnRzXG4gICAgKSB7XG4gICAgICBoaWRlVGVtcGxhdGVJZHMgPSBhbm9ueW1vdXNUZW1wbGF0ZXMubWFwKHRlbXBsYXRlID0+IHRlbXBsYXRlLmlkKTtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJDb25zZW50U2VydmljZS5maWx0ZXJDb25zZW50VGVtcGxhdGVzKFxuICAgICAgICB0ZW1wbGF0ZUxpc3QsXG4gICAgICAgIGhpZGVUZW1wbGF0ZUlkc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBCb29sZWFuKFxuICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLmNvbnNlbnRNYW5hZ2VtZW50UGFnZVxuICAgICAgICAgIC5oaWRlQ29uc2VudHNcbiAgICAgICkgJiZcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMuY29uc2VudE1hbmFnZW1lbnRQYWdlXG4gICAgICAgIC5oaWRlQ29uc2VudHMubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgaGlkZVRlbXBsYXRlSWRzID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50c1xuICAgICAgICAuY29uc2VudE1hbmFnZW1lbnRQYWdlLmhpZGVDb25zZW50cztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZmlsdGVyQ29uc2VudFRlbXBsYXRlcyhcbiAgICAgIHRlbXBsYXRlTGlzdCxcbiAgICAgIGhpZGVUZW1wbGF0ZUlkc1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdpdmVDb25zZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5yZXNldEdpdmVDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlXG4gICAgICAgIC5nZXRHaXZlQ29uc2VudFJlc3VsdFN1Y2Nlc3MoKVxuICAgICAgICAuc3Vic2NyaWJlKHN1Y2Nlc3MgPT4gdGhpcy5vbkNvbnNlbnRHaXZlblN1Y2Nlc3Moc3VjY2VzcykpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgd2l0aGRyYXdDb25zZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5yZXNldFdpdGhkcmF3Q29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZVxuICAgICAgICAuZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0TG9hZGluZygpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHNraXBXaGlsZShCb29sZWFuKSxcbiAgICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldFdpdGhkcmF3Q29uc2VudFJlc3VsdFN1Y2Nlc3MoKVxuICAgICAgICAgICksXG4gICAgICAgICAgbWFwKChbLCB3aXRoZHJhd2FsU3VjY2Vzc10pID0+IHdpdGhkcmF3YWxTdWNjZXNzKSxcbiAgICAgICAgICB0YXAod2l0aGRyYXdhbFN1Y2Nlc3MgPT4ge1xuICAgICAgICAgICAgaWYgKHdpdGhkcmF3YWxTdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmxvYWRDb25zZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSh3aXRoZHJhd2FsU3VjY2VzcyA9PlxuICAgICAgICAgIHRoaXMub25Db25zZW50V2l0aGRyYXduU3VjY2Vzcyh3aXRoZHJhd2FsU3VjY2VzcylcbiAgICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNvbnNlbnRzRXhpc3RzKHRlbXBsYXRlTGlzdDogQ29uc2VudFRlbXBsYXRlW10pOiBib29sZWFuIHtcbiAgICByZXR1cm4gQm9vbGVhbih0ZW1wbGF0ZUxpc3QpICYmIHRlbXBsYXRlTGlzdC5sZW5ndGggPiAwO1xuICB9XG5cbiAgb25Db25zZW50Q2hhbmdlKHtcbiAgICBnaXZlbixcbiAgICB0ZW1wbGF0ZSxcbiAgfToge1xuICAgIGdpdmVuOiBib29sZWFuO1xuICAgIHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGU7XG4gIH0pOiB2b2lkIHtcbiAgICBpZiAoZ2l2ZW4pIHtcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdpdmVDb25zZW50KHRlbXBsYXRlLmlkLCB0ZW1wbGF0ZS52ZXJzaW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2Uud2l0aGRyYXdDb25zZW50KHRlbXBsYXRlLmN1cnJlbnRDb25zZW50LmNvZGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25Db25zZW50R2l2ZW5TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRHaXZlQ29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHsga2V5OiAnY29uc2VudE1hbmFnZW1lbnRGb3JtLm1lc3NhZ2Uuc3VjY2Vzcy5naXZlbicgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25Db25zZW50V2l0aGRyYXduU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0V2l0aGRyYXdDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgeyBrZXk6ICdjb25zZW50TWFuYWdlbWVudEZvcm0ubWVzc2FnZS5zdWNjZXNzLndpdGhkcmF3bicgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlamVjdEFsbCh0ZW1wbGF0ZXM6IENvbnNlbnRUZW1wbGF0ZVtdID0gW10pOiB2b2lkIHtcbiAgICBjb25zdCBjb25zZW50c1RvV2l0aGRyYXc6IENvbnNlbnRUZW1wbGF0ZVtdID0gW107XG4gICAgdGVtcGxhdGVzLmZvckVhY2godGVtcGxhdGUgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNDb25zZW50R2l2ZW4odGVtcGxhdGUpKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVxdWlyZWRDb25zZW50KHRlbXBsYXRlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zZW50c1RvV2l0aGRyYXcucHVzaCh0ZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmFsbENvbnNlbnRzTG9hZGluZy5uZXh0KHRydWUpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMuc2V0dXBXaXRoZHJhd2FsU3RyZWFtKGNvbnNlbnRzVG9XaXRoZHJhdylcbiAgICAgICAgLnBpcGUodGFwKF90aW1lc0xvYWRlZCA9PiB0aGlzLmFsbENvbnNlbnRzTG9hZGluZy5uZXh0KGZhbHNlKSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwV2l0aGRyYXdhbFN0cmVhbShcbiAgICBjb25zZW50c1RvV2l0aGRyYXc6IENvbnNlbnRUZW1wbGF0ZVtdID0gW11cbiAgKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICBjb25zdCBsb2FkaW5nJCA9IGNvbmNhdChcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldFdpdGhkcmF3Q29uc2VudFJlc3VsdExvYWRpbmcoKVxuICAgICkucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBmaWx0ZXIobG9hZGluZyA9PiAhbG9hZGluZylcbiAgICApO1xuICAgIGNvbnN0IGNvdW50JCA9IGxvYWRpbmckLnBpcGUoc2NhbigoYWNjLCBfdmFsdWUpID0+IGFjYyArIDEsIC0xKSk7XG4gICAgY29uc3Qgd2l0aGRyYXckID0gY291bnQkLnBpcGUoXG4gICAgICB0YXAoaSA9PiB7XG4gICAgICAgIGlmIChpIDwgY29uc2VudHNUb1dpdGhkcmF3Lmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLndpdGhkcmF3Q29uc2VudChcbiAgICAgICAgICAgIGNvbnNlbnRzVG9XaXRoZHJhd1tpXS5jdXJyZW50Q29uc2VudC5jb2RlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIGNvbnN0IGNoZWNrVGltZXNMb2FkZWQkID0gd2l0aGRyYXckLnBpcGUoXG4gICAgICBmaWx0ZXIodGltZXNMb2FkZWQgPT4gdGltZXNMb2FkZWQgPT09IGNvbnNlbnRzVG9XaXRoZHJhdy5sZW5ndGgpXG4gICAgKTtcblxuICAgIHJldHVybiBjaGVja1RpbWVzTG9hZGVkJDtcbiAgfVxuXG4gIHByaXZhdGUgaXNDb25zZW50R2l2ZW4oY29uc2VudFRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgQm9vbGVhbihjb25zZW50VGVtcGxhdGUuY3VycmVudENvbnNlbnQpICYmXG4gICAgICBCb29sZWFuKGNvbnNlbnRUZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb25zZW50R2l2ZW5EYXRlKSAmJlxuICAgICAgIUJvb2xlYW4oY29uc2VudFRlbXBsYXRlLmN1cnJlbnRDb25zZW50LmNvbnNlbnRXaXRoZHJhd25EYXRlKVxuICAgICk7XG4gIH1cblxuICBhbGxvd0FsbCh0ZW1wbGF0ZXM6IENvbnNlbnRUZW1wbGF0ZVtdID0gW10pOiB2b2lkIHtcbiAgICBjb25zdCBjb25zZW50c1RvR2l2ZTogQ29uc2VudFRlbXBsYXRlW10gPSBbXTtcbiAgICB0ZW1wbGF0ZXMuZm9yRWFjaCh0ZW1wbGF0ZSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0NvbnNlbnRXaXRoZHJhd24odGVtcGxhdGUpKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVxdWlyZWRDb25zZW50KHRlbXBsYXRlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNlbnRzVG9HaXZlLnB1c2godGVtcGxhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hbGxDb25zZW50c0xvYWRpbmcubmV4dCh0cnVlKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnNldHVwR2l2ZVN0cmVhbShjb25zZW50c1RvR2l2ZSlcbiAgICAgICAgLnBpcGUodGFwKF90aW1lc0xvYWRlZCA9PiB0aGlzLmFsbENvbnNlbnRzTG9hZGluZy5uZXh0KGZhbHNlKSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwR2l2ZVN0cmVhbShcbiAgICBjb25zZW50c1RvR2l2ZTogQ29uc2VudFRlbXBsYXRlW10gPSBbXVxuICApOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIGNvbnN0IGxvYWRpbmckID0gY29uY2F0KFxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0R2l2ZUNvbnNlbnRSZXN1bHRMb2FkaW5nKClcbiAgICApLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgZmlsdGVyKGxvYWRpbmcgPT4gIWxvYWRpbmcpXG4gICAgKTtcbiAgICBjb25zdCBjb3VudCQgPSBsb2FkaW5nJC5waXBlKHNjYW4oKGFjYywgX3ZhbHVlKSA9PiBhY2MgKyAxLCAtMSkpO1xuICAgIGNvbnN0IGdpdmVDb25zZW50JCA9IGNvdW50JC5waXBlKFxuICAgICAgdGFwKGkgPT4ge1xuICAgICAgICBpZiAoaSA8IGNvbnNlbnRzVG9HaXZlLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdpdmVDb25zZW50KFxuICAgICAgICAgICAgY29uc2VudHNUb0dpdmVbaV0uaWQsXG4gICAgICAgICAgICBjb25zZW50c1RvR2l2ZVtpXS52ZXJzaW9uXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIGNvbnN0IGNoZWNrVGltZXNMb2FkZWQkID0gZ2l2ZUNvbnNlbnQkLnBpcGUoXG4gICAgICBmaWx0ZXIodGltZXNMb2FkZWQgPT4gdGltZXNMb2FkZWQgPT09IGNvbnNlbnRzVG9HaXZlLmxlbmd0aClcbiAgICApO1xuXG4gICAgcmV0dXJuIGNoZWNrVGltZXNMb2FkZWQkO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudFRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGUpOiBib29sZWFuIHtcbiAgICBpZiAoQm9vbGVhbihjb25zZW50VGVtcGxhdGUuY3VycmVudENvbnNlbnQpKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihjb25zZW50VGVtcGxhdGUuY3VycmVudENvbnNlbnQuY29uc2VudFdpdGhkcmF3bkRhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgaXNSZXF1aXJlZENvbnNlbnQodGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZSk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5pc0Fub255bW91c0NvbnNlbnRzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBCb29sZWFuKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMpICYmXG4gICAgICBCb29sZWFuKFxuICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHNcbiAgICAgICkgJiZcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyhcbiAgICAgICAgdGVtcGxhdGUuaWRcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5hbGxDb25zZW50c0xvYWRpbmcudW5zdWJzY3JpYmUoKTtcblxuICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5yZXNldFdpdGhkcmF3Q29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICB9XG59XG4iXX0=