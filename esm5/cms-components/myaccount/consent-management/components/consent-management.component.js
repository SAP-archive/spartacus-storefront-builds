/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AnonymousConsentsConfig, AnonymousConsentsService, AuthService, GlobalMessageService, GlobalMessageType, isFeatureLevel, UserConsentService, } from '@spartacus/core';
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
        // TODO(issue:4989) Anonymous consents - remove
        this.isAnonymousConsentsEnabled = isFeatureLevel(this.anonymousConsentsConfig, '1.3');
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
                    template: "<!-- TODO(issue:4989) Anonymous consents - remove the wrapping `<ng-container *ngIf=\"isAnonymousConsentsEnabled; else legacyConsentManagementPage\">` -->\n<ng-container\n  *ngIf=\"isAnonymousConsentsEnabled; else legacyConsentManagementPage\"\n>\n  <div *ngIf=\"loading$ | async; else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <ng-container *ngIf=\"templateList$ | async as templateList\">\n      <div class=\"cx-consent-action-links\">\n        <div class=\"col-sm-12 col-md-8 col-lg-6\">\n          <a\n            tabindex=\"0\"\n            class=\"btn-link cx-action-link\"\n            (click)=\"rejectAll(templateList)\"\n            >{{ 'consentManagementForm.rejectAll' | cxTranslate }}</a\n          >\n          <span class=\"cx-links-separator\">|</span>\n          <a\n            tabindex=\"0\"\n            class=\"btn-link cx-action-link\"\n            (click)=\"allowAll(templateList)\"\n            >{{ 'consentManagementForm.allowAll' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n\n      <div class=\"cx-consent-toggles\">\n        <div class=\"col-sm-12 col-md-8 col-lg-6\">\n          <!-- TODO(issue:4989) Anonymous consents - remove `[isAnonymousConsentsEnabled]=\"isAnonymousConsentsEnabled\"` -->\n          <cx-consent-management-form\n            *ngFor=\"let consentTemplate of templateList\"\n            [consentTemplate]=\"consentTemplate\"\n            [requiredConsents]=\"requiredConsents\"\n            [isAnonymousConsentsEnabled]=\"isAnonymousConsentsEnabled\"\n            (consentChanged)=\"onConsentChange($event)\"\n          ></cx-consent-management-form>\n        </div>\n      </div>\n    </ng-container>\n  </ng-template>\n</ng-container>\n\n<!-- TODO(issue:4989) Anonymous consents - remove this whole `<ng-template>` -->\n<ng-template #legacyConsentManagementPage>\n  <div *ngIf=\"loading$ | async; else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <cx-consent-management-form\n          *ngFor=\"let consentTemplate of templateList$ | async\"\n          [consentTemplate]=\"consentTemplate\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-template>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9jb25zZW50LW1hbmFnZW1lbnQvY29tcG9uZW50cy9jb25zZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLHVCQUF1QixFQUN2Qix3QkFBd0IsRUFDeEIsV0FBVyxFQUVYLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsY0FBYyxFQUNkLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFDTCxlQUFlLEVBQ2YsYUFBYSxFQUNiLE1BQU0sRUFFTixZQUFZLEdBQ2IsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixHQUFHLEVBQ0gsSUFBSSxFQUNKLFNBQVMsRUFDVCxHQUFHLEVBQ0gsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEI7SUE0Q0Usb0NBQ1Usa0JBQXNDLEVBQ3RDLG9CQUEwQyxFQUMxQyx1QkFBaUQsRUFDakQsd0JBQW1ELEVBQ25ELFdBQXlCO1FBSnpCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQTBCO1FBQ2pELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMkI7UUFDbkQsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUE1QzNCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUtqRSxxQkFBZ0IsR0FBYSxFQUFF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QUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQ2hFO1lBQ0QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FDdEUsUUFBUSxDQUFDLEVBQUUsQ0FDWixDQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsZ0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFdEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdDQUFnQyxFQUFFLENBQUM7SUFDN0QsQ0FBQzs7Z0JBbFdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyx1L0VBQWtEO2lCQUNuRDs7OztnQkF0QkMsa0JBQWtCO2dCQUhsQixvQkFBb0I7Z0JBSnBCLHVCQUF1QjtnQkFDdkIsd0JBQXdCO2dCQUN4QixXQUFXOztJQTJYYixpQ0FBQztDQUFBLEFBbldELElBbVdDO1NBL1ZZLDBCQUEwQjs7Ozs7O0lBQ3JDLG1EQUEyQzs7Ozs7SUFDM0Msd0RBQWlFOztJQUVqRSxtREFBNkM7O0lBQzdDLDhDQUE4Qjs7SUFFOUIsc0RBQWdDOztJQUdoQyxnRUFHRTs7Ozs7SUE0QkEsd0RBQThDOzs7OztJQUM5QywwREFBa0Q7Ozs7O0lBQ2xELDZEQUF5RDs7Ozs7SUFDekQsOERBQTJEOzs7OztJQUMzRCxpREFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICBBdXRoU2VydmljZSxcbiAgQ29uc2VudFRlbXBsYXRlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIGlzRmVhdHVyZUxldmVsLFxuICBVc2VyQ29uc2VudFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQge1xuICBCZWhhdmlvclN1YmplY3QsXG4gIGNvbWJpbmVMYXRlc3QsXG4gIGNvbmNhdCxcbiAgT2JzZXJ2YWJsZSxcbiAgU3Vic2NyaXB0aW9uLFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc2NhbixcbiAgc2tpcFdoaWxlLFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNvbnNlbnQtbWFuYWdlbWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25zZW50LW1hbmFnZW1lbnQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb25zZW50TWFuYWdlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBwcml2YXRlIGFsbENvbnNlbnRzTG9hZGluZyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHRlbXBsYXRlTGlzdCQ6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+O1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICByZXF1aXJlZENvbnNlbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8vIFRPRE8oaXNzdWU6NDk4OSkgQW5vbnltb3VzIGNvbnNlbnRzIC0gcmVtb3ZlXG4gIGlzQW5vbnltb3VzQ29uc2VudHNFbmFibGVkID0gaXNGZWF0dXJlTGV2ZWwoXG4gICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICAnMS4zJ1xuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlLFxuICAgIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBhbm9ueW1vdXNDb25zZW50c0NvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIEluc3RlYWQsIHVzZTpcbiAgIGBgYHRzXG4gICBjb25zdHJ1Y3RvcihcbiAgICAgdXNlckNvbnNlbnRTZXJ2aWNlOiBVc2VyQ29uc2VudFNlcnZpY2UsXG4gICAgIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICAgYW5vbnltb3VzQ29uc2VudHNDb25maWcgOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICAgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIDogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICApIFxuICAgYGBgXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICB1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZSxcbiAgICBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZSxcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzQ29uZmlnPzogQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U/OiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZT86IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmckID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRDb25zZW50c1Jlc3VsdExvYWRpbmcoKSxcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldEdpdmVDb25zZW50UmVzdWx0TG9hZGluZygpLFxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0TG9hZGluZygpLFxuICAgICAgdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpLFxuICAgICAgdGhpcy5hbGxDb25zZW50c0xvYWRpbmcsXG4gICAgXSkucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKFtcbiAgICAgICAgICBjb25zZW50TG9hZGluZyxcbiAgICAgICAgICBnaXZlQ29uc2VudExvYWRpbmcsXG4gICAgICAgICAgd2l0aGRyYXdDb25zZW50TG9hZGluZyxcbiAgICAgICAgICBpc1VzZXJMb2dnZWRJbixcbiAgICAgICAgICBhbGxDb25zZW50c0xvYWRpbmcsXG4gICAgICAgIF0pID0+XG4gICAgICAgICAgY29uc2VudExvYWRpbmcgfHxcbiAgICAgICAgICBnaXZlQ29uc2VudExvYWRpbmcgfHxcbiAgICAgICAgICB3aXRoZHJhd0NvbnNlbnRMb2FkaW5nIHx8XG4gICAgICAgICAgIWlzVXNlckxvZ2dlZEluIHx8XG4gICAgICAgICAgYWxsQ29uc2VudHNMb2FkaW5nXG4gICAgICApXG4gICAgKTtcbiAgICB0aGlzLmNvbnNlbnRMaXN0SW5pdCgpO1xuICAgIHRoaXMuZ2l2ZUNvbnNlbnRJbml0KCk7XG4gICAgdGhpcy53aXRoZHJhd0NvbnNlbnRJbml0KCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnNlbnRMaXN0SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlTGlzdCQgPSB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRDb25zZW50cygpLnBpcGUoXG4gICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2V0VGVtcGxhdGVzKCksXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKVxuICAgICAgKSxcbiAgICAgIGZpbHRlcihcbiAgICAgICAgKFtfdGVtcGxhdGVMaXN0LCBfYW5vbnltb3VzVGVtcGxhdGVzLCBpc1VzZXJMb2dnZWRJbl0pID0+IGlzVXNlckxvZ2dlZEluXG4gICAgICApLFxuICAgICAgdGFwKChbdGVtcGxhdGVMaXN0LCBfYW5vbnltb3VzVGVtcGxhdGVzXSkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuY29uc2VudHNFeGlzdHModGVtcGxhdGVMaXN0KSkge1xuICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmxvYWRDb25zZW50cygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoW3RlbXBsYXRlTGlzdCwgYW5vbnltb3VzVGVtcGxhdGVzXSkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNBbm9ueW1vdXNDb25zZW50c0VuYWJsZWQpIHtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGVMaXN0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cykpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBCb29sZWFuKFxuICAgICAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHNcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZWRDb25zZW50cyA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgQm9vbGVhbihcbiAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50c1xuICAgICAgICAgICAgICAgIC5jb25zZW50TWFuYWdlbWVudFBhZ2VcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhpZGVBbm9ueW1vdXNDb25zZW50cyh0ZW1wbGF0ZUxpc3QsIGFub255bW91c1RlbXBsYXRlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlTGlzdDtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZUFub255bW91c0NvbnNlbnRzKFxuICAgIHRlbXBsYXRlTGlzdDogQ29uc2VudFRlbXBsYXRlW10sXG4gICAgYW5vbnltb3VzVGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXSA9IFtdXG4gICk6IENvbnNlbnRUZW1wbGF0ZVtdIHtcbiAgICBsZXQgaGlkZVRlbXBsYXRlSWRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgaWYgKFxuICAgICAgIXRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMuY29uc2VudE1hbmFnZW1lbnRQYWdlXG4gICAgICAgIC5zaG93QW5vbnltb3VzQ29uc2VudHNcbiAgICApIHtcbiAgICAgIGhpZGVUZW1wbGF0ZUlkcyA9IGFub255bW91c1RlbXBsYXRlcy5tYXAodGVtcGxhdGUgPT4gdGVtcGxhdGUuaWQpO1xuICAgICAgcmV0dXJuIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmZpbHRlckNvbnNlbnRUZW1wbGF0ZXMoXG4gICAgICAgIHRlbXBsYXRlTGlzdCxcbiAgICAgICAgaGlkZVRlbXBsYXRlSWRzXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIEJvb2xlYW4oXG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMuY29uc2VudE1hbmFnZW1lbnRQYWdlXG4gICAgICAgICAgLmhpZGVDb25zZW50c1xuICAgICAgKSAmJlxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5jb25zZW50TWFuYWdlbWVudFBhZ2VcbiAgICAgICAgLmhpZGVDb25zZW50cy5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICBoaWRlVGVtcGxhdGVJZHMgPSB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzXG4gICAgICAgIC5jb25zZW50TWFuYWdlbWVudFBhZ2UuaGlkZUNvbnNlbnRzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnVzZXJDb25zZW50U2VydmljZS5maWx0ZXJDb25zZW50VGVtcGxhdGVzKFxuICAgICAgdGVtcGxhdGVMaXN0LFxuICAgICAgaGlkZVRlbXBsYXRlSWRzXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2l2ZUNvbnNlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2VcbiAgICAgICAgLmdldEdpdmVDb25zZW50UmVzdWx0U3VjY2VzcygpXG4gICAgICAgIC5zdWJzY3JpYmUoc3VjY2VzcyA9PiB0aGlzLm9uQ29uc2VudEdpdmVuU3VjY2VzcyhzdWNjZXNzKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSB3aXRoZHJhd0NvbnNlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0V2l0aGRyYXdDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlXG4gICAgICAgIC5nZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRMb2FkaW5nKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2tpcFdoaWxlKEJvb2xlYW4pLFxuICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0U3VjY2VzcygpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBtYXAoKFssIHdpdGhkcmF3YWxTdWNjZXNzXSkgPT4gd2l0aGRyYXdhbFN1Y2Nlc3MpLFxuICAgICAgICAgIHRhcCh3aXRoZHJhd2FsU3VjY2VzcyA9PiB7XG4gICAgICAgICAgICBpZiAod2l0aGRyYXdhbFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UubG9hZENvbnNlbnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKHdpdGhkcmF3YWxTdWNjZXNzID0+XG4gICAgICAgICAgdGhpcy5vbkNvbnNlbnRXaXRoZHJhd25TdWNjZXNzKHdpdGhkcmF3YWxTdWNjZXNzKVxuICAgICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uc2VudHNFeGlzdHModGVtcGxhdGVMaXN0OiBDb25zZW50VGVtcGxhdGVbXSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCb29sZWFuKHRlbXBsYXRlTGlzdCkgJiYgdGVtcGxhdGVMaXN0Lmxlbmd0aCA+IDA7XG4gIH1cblxuICBvbkNvbnNlbnRDaGFuZ2Uoe1xuICAgIGdpdmVuLFxuICAgIHRlbXBsYXRlLFxuICB9OiB7XG4gICAgZ2l2ZW46IGJvb2xlYW47XG4gICAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcbiAgfSk6IHZvaWQge1xuICAgIGlmIChnaXZlbikge1xuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2l2ZUNvbnNlbnQodGVtcGxhdGUuaWQsIHRlbXBsYXRlLnZlcnNpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS53aXRoZHJhd0NvbnNlbnQodGVtcGxhdGUuY3VycmVudENvbnNlbnQuY29kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkNvbnNlbnRHaXZlblN1Y2Nlc3Moc3VjY2VzczogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5yZXNldEdpdmVDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgeyBrZXk6ICdjb25zZW50TWFuYWdlbWVudEZvcm0ubWVzc2FnZS5zdWNjZXNzLmdpdmVuJyB9LFxuICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkNvbnNlbnRXaXRoZHJhd25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRXaXRoZHJhd0NvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7IGtleTogJ2NvbnNlbnRNYW5hZ2VtZW50Rm9ybS5tZXNzYWdlLnN1Y2Nlc3Mud2l0aGRyYXduJyB9LFxuICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVqZWN0QWxsKHRlbXBsYXRlczogQ29uc2VudFRlbXBsYXRlW10gPSBbXSk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnNlbnRzVG9XaXRoZHJhdzogQ29uc2VudFRlbXBsYXRlW10gPSBbXTtcbiAgICB0ZW1wbGF0ZXMuZm9yRWFjaCh0ZW1wbGF0ZSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0NvbnNlbnRHaXZlbih0ZW1wbGF0ZSkpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZXF1aXJlZENvbnNlbnQodGVtcGxhdGUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNlbnRzVG9XaXRoZHJhdy5wdXNoKHRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYWxsQ29uc2VudHNMb2FkaW5nLm5leHQodHJ1ZSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5zZXR1cFdpdGhkcmF3YWxTdHJlYW0oY29uc2VudHNUb1dpdGhkcmF3KVxuICAgICAgICAucGlwZSh0YXAoX3RpbWVzTG9hZGVkID0+IHRoaXMuYWxsQ29uc2VudHNMb2FkaW5nLm5leHQoZmFsc2UpKSlcbiAgICAgICAgLnN1YnNjcmliZSgpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBXaXRoZHJhd2FsU3RyZWFtKFxuICAgIGNvbnNlbnRzVG9XaXRoZHJhdzogQ29uc2VudFRlbXBsYXRlW10gPSBbXVxuICApOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIGNvbnN0IGxvYWRpbmckID0gY29uY2F0KFxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0TG9hZGluZygpXG4gICAgKS5waXBlKFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIGZpbHRlcihsb2FkaW5nID0+ICFsb2FkaW5nKVxuICAgICk7XG4gICAgY29uc3QgY291bnQkID0gbG9hZGluZyQucGlwZShzY2FuKChhY2MsIF92YWx1ZSkgPT4gYWNjICsgMSwgLTEpKTtcbiAgICBjb25zdCB3aXRoZHJhdyQgPSBjb3VudCQucGlwZShcbiAgICAgIHRhcChpID0+IHtcbiAgICAgICAgaWYgKGkgPCBjb25zZW50c1RvV2l0aGRyYXcubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2Uud2l0aGRyYXdDb25zZW50KFxuICAgICAgICAgICAgY29uc2VudHNUb1dpdGhkcmF3W2ldLmN1cnJlbnRDb25zZW50LmNvZGVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgY29uc3QgY2hlY2tUaW1lc0xvYWRlZCQgPSB3aXRoZHJhdyQucGlwZShcbiAgICAgIGZpbHRlcih0aW1lc0xvYWRlZCA9PiB0aW1lc0xvYWRlZCA9PT0gY29uc2VudHNUb1dpdGhkcmF3Lmxlbmd0aClcbiAgICApO1xuXG4gICAgcmV0dXJuIGNoZWNrVGltZXNMb2FkZWQkO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NvbnNlbnRHaXZlbihjb25zZW50VGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBCb29sZWFuKGNvbnNlbnRUZW1wbGF0ZS5jdXJyZW50Q29uc2VudCkgJiZcbiAgICAgIEJvb2xlYW4oY29uc2VudFRlbXBsYXRlLmN1cnJlbnRDb25zZW50LmNvbnNlbnRHaXZlbkRhdGUpICYmXG4gICAgICAhQm9vbGVhbihjb25zZW50VGVtcGxhdGUuY3VycmVudENvbnNlbnQuY29uc2VudFdpdGhkcmF3bkRhdGUpXG4gICAgKTtcbiAgfVxuXG4gIGFsbG93QWxsKHRlbXBsYXRlczogQ29uc2VudFRlbXBsYXRlW10gPSBbXSk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnNlbnRzVG9HaXZlOiBDb25zZW50VGVtcGxhdGVbXSA9IFtdO1xuICAgIHRlbXBsYXRlcy5mb3JFYWNoKHRlbXBsYXRlID0+IHtcbiAgICAgIGlmICh0aGlzLmlzQ29uc2VudFdpdGhkcmF3bih0ZW1wbGF0ZSkpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZXF1aXJlZENvbnNlbnQodGVtcGxhdGUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc2VudHNUb0dpdmUucHVzaCh0ZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmFsbENvbnNlbnRzTG9hZGluZy5uZXh0KHRydWUpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMuc2V0dXBHaXZlU3RyZWFtKGNvbnNlbnRzVG9HaXZlKVxuICAgICAgICAucGlwZSh0YXAoX3RpbWVzTG9hZGVkID0+IHRoaXMuYWxsQ29uc2VudHNMb2FkaW5nLm5leHQoZmFsc2UpKSlcbiAgICAgICAgLnN1YnNjcmliZSgpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBHaXZlU3RyZWFtKFxuICAgIGNvbnNlbnRzVG9HaXZlOiBDb25zZW50VGVtcGxhdGVbXSA9IFtdXG4gICk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgY29uc3QgbG9hZGluZyQgPSBjb25jYXQoXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRHaXZlQ29uc2VudFJlc3VsdExvYWRpbmcoKVxuICAgICkucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBmaWx0ZXIobG9hZGluZyA9PiAhbG9hZGluZylcbiAgICApO1xuICAgIGNvbnN0IGNvdW50JCA9IGxvYWRpbmckLnBpcGUoc2NhbigoYWNjLCBfdmFsdWUpID0+IGFjYyArIDEsIC0xKSk7XG4gICAgY29uc3QgZ2l2ZUNvbnNlbnQkID0gY291bnQkLnBpcGUoXG4gICAgICB0YXAoaSA9PiB7XG4gICAgICAgIGlmIChpIDwgY29uc2VudHNUb0dpdmUubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2l2ZUNvbnNlbnQoXG4gICAgICAgICAgICBjb25zZW50c1RvR2l2ZVtpXS5pZCxcbiAgICAgICAgICAgIGNvbnNlbnRzVG9HaXZlW2ldLnZlcnNpb25cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgY29uc3QgY2hlY2tUaW1lc0xvYWRlZCQgPSBnaXZlQ29uc2VudCQucGlwZShcbiAgICAgIGZpbHRlcih0aW1lc0xvYWRlZCA9PiB0aW1lc0xvYWRlZCA9PT0gY29uc2VudHNUb0dpdmUubGVuZ3RoKVxuICAgICk7XG5cbiAgICByZXR1cm4gY2hlY2tUaW1lc0xvYWRlZCQ7XG4gIH1cblxuICBwcml2YXRlIGlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50VGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZSk6IGJvb2xlYW4ge1xuICAgIGlmIChCb29sZWFuKGNvbnNlbnRUZW1wbGF0ZS5jdXJyZW50Q29uc2VudCkpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKGNvbnNlbnRUZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb25zZW50V2l0aGRyYXduRGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1JlcXVpcmVkQ29uc2VudCh0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgIEJvb2xlYW4oXG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50c1xuICAgICAgKSAmJlxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKFxuICAgICAgICB0ZW1wbGF0ZS5pZFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmFsbENvbnNlbnRzTG9hZGluZy51bnN1YnNjcmliZSgpO1xuXG4gICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRHaXZlQ29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0V2l0aGRyYXdDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gIH1cbn1cbiJdfQ==