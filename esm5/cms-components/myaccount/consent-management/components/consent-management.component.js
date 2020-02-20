import { __decorate, __read } from "tslib";
import { Component } from '@angular/core';
import { AnonymousConsentsConfig, AnonymousConsentsService, ANONYMOUS_CONSENTS_FEATURE, AuthService, ConsentTemplate, GlobalMessageService, GlobalMessageType, isFeatureEnabled, isFeatureLevel, UserConsentService, } from '@spartacus/core';
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
    ConsentManagementComponent.prototype.ngOnInit = function () {
        this.loading$ = combineLatest([
            this.userConsentService.getConsentsResultLoading(),
            this.userConsentService.getGiveConsentResultLoading(),
            this.userConsentService.getWithdrawConsentResultLoading(),
            this.authService.isUserLoggedIn(),
            this.allConsentsLoading,
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 5), consentLoading = _b[0], giveConsentLoading = _b[1], withdrawConsentLoading = _b[2], isUserLoggedIn = _b[3], allConsentsLoading = _b[4];
            return consentLoading ||
                giveConsentLoading ||
                withdrawConsentLoading ||
                !isUserLoggedIn ||
                allConsentsLoading;
        }));
        this.consentListInit();
        this.giveConsentInit();
        this.withdrawConsentInit();
    };
    ConsentManagementComponent.prototype.consentListInit = function () {
        var _this = this;
        this.templateList$ = this.userConsentService.getConsents().pipe(withLatestFrom(this.anonymousConsentsService.getTemplates(), this.authService.isUserLoggedIn()), filter(function (_a) {
            var _b = __read(_a, 3), _templateList = _b[0], _anonymousTemplates = _b[1], isUserLoggedIn = _b[2];
            return isUserLoggedIn;
        }), tap(function (_a) {
            var _b = __read(_a, 2), templateList = _b[0], _anonymousTemplates = _b[1];
            if (!_this.consentsExists(templateList)) {
                _this.userConsentService.loadConsents();
            }
        }), map(function (_a) {
            var _b = __read(_a, 2), templateList = _b[0], anonymousTemplates = _b[1];
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
        }));
    };
    ConsentManagementComponent.prototype.hideAnonymousConsents = function (templateList, anonymousTemplates) {
        if (anonymousTemplates === void 0) { anonymousTemplates = []; }
        var hideTemplateIds = [];
        if (!this.anonymousConsentsConfig.anonymousConsents.consentManagementPage
            .showAnonymousConsents) {
            hideTemplateIds = anonymousTemplates.map(function (template) { return template.id; });
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
    ConsentManagementComponent.prototype.giveConsentInit = function () {
        var _this = this;
        this.userConsentService.resetGiveConsentProcessState();
        this.subscriptions.add(this.userConsentService
            .getGiveConsentResultSuccess()
            .subscribe(function (success) { return _this.onConsentGivenSuccess(success); }));
    };
    ConsentManagementComponent.prototype.withdrawConsentInit = function () {
        var _this = this;
        this.userConsentService.resetWithdrawConsentProcessState();
        this.subscriptions.add(this.userConsentService
            .getWithdrawConsentResultLoading()
            .pipe(skipWhile(Boolean), withLatestFrom(this.userConsentService.getWithdrawConsentResultSuccess()), map(function (_a) {
            var _b = __read(_a, 2), withdrawalSuccess = _b[1];
            return withdrawalSuccess;
        }), tap(function (withdrawalSuccess) {
            if (withdrawalSuccess) {
                _this.userConsentService.loadConsents();
            }
        }))
            .subscribe(function (withdrawalSuccess) {
            return _this.onConsentWithdrawnSuccess(withdrawalSuccess);
        }));
    };
    ConsentManagementComponent.prototype.consentsExists = function (templateList) {
        return Boolean(templateList) && templateList.length > 0;
    };
    ConsentManagementComponent.prototype.onConsentChange = function (_a) {
        var given = _a.given, template = _a.template;
        if (given) {
            this.userConsentService.giveConsent(template.id, template.version);
        }
        else {
            this.userConsentService.withdrawConsent(template.currentConsent.code);
        }
    };
    ConsentManagementComponent.prototype.onConsentGivenSuccess = function (success) {
        if (success) {
            this.userConsentService.resetGiveConsentProcessState();
            this.globalMessageService.add({ key: 'consentManagementForm.message.success.given' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    };
    ConsentManagementComponent.prototype.onConsentWithdrawnSuccess = function (success) {
        if (success) {
            this.userConsentService.resetWithdrawConsentProcessState();
            this.globalMessageService.add({ key: 'consentManagementForm.message.success.withdrawn' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    };
    ConsentManagementComponent.prototype.rejectAll = function (templates) {
        var _this = this;
        if (templates === void 0) { templates = []; }
        var consentsToWithdraw = [];
        templates.forEach(function (template) {
            if (_this.userConsentService.isConsentGiven(template.currentConsent)) {
                if (_this.isRequiredConsent(template)) {
                    return;
                }
                consentsToWithdraw.push(template);
            }
        });
        this.allConsentsLoading.next(true);
        this.subscriptions.add(this.setupWithdrawalStream(consentsToWithdraw)
            .pipe(tap(function (_timesLoaded) { return _this.allConsentsLoading.next(false); }))
            .subscribe());
    };
    ConsentManagementComponent.prototype.setupWithdrawalStream = function (consentsToWithdraw) {
        var _this = this;
        if (consentsToWithdraw === void 0) { consentsToWithdraw = []; }
        var loading$ = concat(this.userConsentService.getWithdrawConsentResultLoading()).pipe(distinctUntilChanged(), filter(function (loading) { return !loading; }));
        var count$ = loading$.pipe(scan(function (acc, _value) { return acc + 1; }, -1));
        var withdraw$ = count$.pipe(tap(function (i) {
            if (i < consentsToWithdraw.length) {
                _this.userConsentService.withdrawConsent(consentsToWithdraw[i].currentConsent.code);
            }
        }));
        var checkTimesLoaded$ = withdraw$.pipe(filter(function (timesLoaded) { return timesLoaded === consentsToWithdraw.length; }));
        return checkTimesLoaded$;
    };
    ConsentManagementComponent.prototype.allowAll = function (templates) {
        var _this = this;
        if (templates === void 0) { templates = []; }
        var consentsToGive = [];
        templates.forEach(function (template) {
            if (_this.userConsentService.isConsentWithdrawn(template.currentConsent)) {
                if (_this.isRequiredConsent(template)) {
                    return;
                }
                consentsToGive.push(template);
            }
        });
        this.allConsentsLoading.next(true);
        this.subscriptions.add(this.setupGiveStream(consentsToGive)
            .pipe(tap(function (_timesLoaded) { return _this.allConsentsLoading.next(false); }))
            .subscribe());
    };
    ConsentManagementComponent.prototype.setupGiveStream = function (consentsToGive) {
        var _this = this;
        if (consentsToGive === void 0) { consentsToGive = []; }
        var loading$ = concat(this.userConsentService.getGiveConsentResultLoading()).pipe(distinctUntilChanged(), filter(function (loading) { return !loading; }));
        var count$ = loading$.pipe(scan(function (acc, _value) { return acc + 1; }, -1));
        var giveConsent$ = count$.pipe(tap(function (i) {
            if (i < consentsToGive.length) {
                _this.userConsentService.giveConsent(consentsToGive[i].id, consentsToGive[i].version);
            }
        }));
        var checkTimesLoaded$ = giveConsent$.pipe(filter(function (timesLoaded) { return timesLoaded === consentsToGive.length; }));
        return checkTimesLoaded$;
    };
    ConsentManagementComponent.prototype.isRequiredConsent = function (template) {
        if (!this.isAnonymousConsentsEnabled) {
            return false;
        }
        return (Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.requiredConsents) &&
            this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(template.id));
    };
    ConsentManagementComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
        this.allConsentsLoading.unsubscribe();
        this.userConsentService.resetGiveConsentProcessState();
        this.userConsentService.resetWithdrawConsentProcessState();
    };
    ConsentManagementComponent.ctorParameters = function () { return [
        { type: UserConsentService },
        { type: GlobalMessageService },
        { type: AnonymousConsentsConfig },
        { type: AnonymousConsentsService },
        { type: AuthService }
    ]; };
    ConsentManagementComponent = __decorate([
        Component({
            selector: 'cx-consent-management',
            template: "<!-- TODO(issue:4989) Anonymous consents - remove the wrapping `<ng-container *ngIf=\"isLevel13; else legacyConsentManagementPage\">` -->\n<ng-container *ngIf=\"isLevel13; else legacyConsentManagementPage\">\n  <div *ngIf=\"loading$ | async; else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <ng-container *ngIf=\"templateList$ | async as templateList\">\n      <div class=\"cx-consent-action-links\">\n        <div class=\"col-sm-12 col-md-8 col-lg-6\">\n          <a\n            tabindex=\"0\"\n            class=\"btn-link cx-action-link\"\n            (click)=\"rejectAll(templateList)\"\n            >{{ 'consentManagementForm.clearAll' | cxTranslate }}</a\n          >\n          <a\n            tabindex=\"0\"\n            class=\"btn-link cx-action-link\"\n            (click)=\"allowAll(templateList)\"\n            >{{ 'consentManagementForm.selectAll' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n\n      <div class=\"cx-consent-toggles\">\n        <div class=\"col-sm-12 col-md-8 col-lg-6\">\n          <cx-consent-management-form\n            *ngFor=\"let consentTemplate of templateList\"\n            [consentTemplate]=\"consentTemplate\"\n            [requiredConsents]=\"requiredConsents\"\n            [isAnonymousConsentsEnabled]=\"isAnonymousConsentsEnabled\"\n            [isLevel13]=\"isLevel13\"\n            (consentChanged)=\"onConsentChange($event)\"\n          ></cx-consent-management-form>\n        </div>\n      </div>\n    </ng-container>\n  </ng-template>\n</ng-container>\n\n<!-- TODO(issue:4989) Anonymous consents - remove this whole `<ng-template>` -->\n<ng-template #legacyConsentManagementPage>\n  <div *ngIf=\"loading$ | async; else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <cx-consent-management-form\n          *ngFor=\"let consentTemplate of templateList$ | async\"\n          [consentTemplate]=\"consentTemplate\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-template>\n"
        })
    ], ConsentManagementComponent);
    return ConsentManagementComponent;
}());
export { ConsentManagementComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9jb25zZW50LW1hbmFnZW1lbnQvY29tcG9uZW50cy9jb25zZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLHdCQUF3QixFQUN4QiwwQkFBMEIsRUFDMUIsV0FBVyxFQUNYLGVBQWUsRUFDZixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixjQUFjLEVBQ2Qsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUNMLGVBQWUsRUFDZixhQUFhLEVBQ2IsTUFBTSxFQUVOLFlBQVksR0FDYixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLEdBQUcsRUFDSCxJQUFJLEVBQ0osU0FBUyxFQUNULEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQU14QjtJQTBDRSxvQ0FDVSxrQkFBc0MsRUFDdEMsb0JBQTBDLEVBQzFDLHVCQUFpRCxFQUNqRCx3QkFBbUQsRUFDbkQsV0FBeUI7UUFKekIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBMEI7UUFDakQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEyQjtRQUNuRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQTlDM0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLHVCQUFrQixHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBS2pFLHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUVoQywrQkFBMEIsR0FBRyxnQkFBZ0IsQ0FDM0MsSUFBSSxDQUFDLHVCQUF1QixFQUM1QiwwQkFBMEIsQ0FDM0IsQ0FBQztRQUVGLCtDQUErQztRQUMvQyxjQUFTLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQWlDN0QsQ0FBQztJQUVKLDZDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztZQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLEVBQUU7WUFDbEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixFQUFFO1lBQ3JELElBQUksQ0FBQyxrQkFBa0IsQ0FBQywrQkFBK0IsRUFBRTtZQUN6RCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRTtZQUNqQyxJQUFJLENBQUMsa0JBQWtCO1NBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUNELFVBQUMsRUFNQTtnQkFOQSxrQkFNQSxFQUxDLHNCQUFjLEVBQ2QsMEJBQWtCLEVBQ2xCLDhCQUFzQixFQUN0QixzQkFBYyxFQUNkLDBCQUFrQjtZQUVsQixPQUFBLGNBQWM7Z0JBQ2Qsa0JBQWtCO2dCQUNsQixzQkFBc0I7Z0JBQ3RCLENBQUMsY0FBYztnQkFDZixrQkFBa0I7UUFKbEIsQ0FJa0IsQ0FDckIsQ0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU8sb0RBQWUsR0FBdkI7UUFBQSxpQkF3Q0M7UUF2Q0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUM3RCxjQUFjLENBQ1osSUFBSSxDQUFDLHdCQUF3QixDQUFDLFlBQVksRUFBRSxFQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUNsQyxFQUNELE1BQU0sQ0FDSixVQUFDLEVBQW9EO2dCQUFwRCxrQkFBb0QsRUFBbkQscUJBQWEsRUFBRSwyQkFBbUIsRUFBRSxzQkFBYztZQUFNLE9BQUEsY0FBYztRQUFkLENBQWMsQ0FDekUsRUFDRCxHQUFHLENBQUMsVUFBQyxFQUFtQztnQkFBbkMsa0JBQW1DLEVBQWxDLG9CQUFZLEVBQUUsMkJBQW1CO1lBQ3JDLElBQUksQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUN0QyxLQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsVUFBQyxFQUFrQztnQkFBbEMsa0JBQWtDLEVBQWpDLG9CQUFZLEVBQUUsMEJBQWtCO1lBQ3BDLElBQUksQ0FBQyxLQUFJLENBQUMsMEJBQTBCLEVBQUU7Z0JBQ3BDLE9BQU8sWUFBWSxDQUFDO2FBQ3JCO1lBRUQsSUFBSSxPQUFPLENBQUMsS0FBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLEVBQUU7Z0JBQzNELElBQ0UsT0FBTyxDQUNMLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FDaEUsRUFDRDtvQkFDQSxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDO2lCQUN6RjtnQkFDRCxJQUNFLE9BQU8sQ0FDTCxLQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCO3FCQUMzQyxxQkFBcUIsQ0FDekIsRUFDRDtvQkFDQSxPQUFPLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztpQkFDckU7YUFDRjtZQUVELE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRU8sMERBQXFCLEdBQTdCLFVBQ0UsWUFBK0IsRUFDL0Isa0JBQTBDO1FBQTFDLG1DQUFBLEVBQUEsdUJBQTBDO1FBRTFDLElBQUksZUFBZSxHQUFhLEVBQUUsQ0FBQztRQUVuQyxJQUNFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLHFCQUFxQjthQUNsRSxxQkFBcUIsRUFDeEI7WUFDQSxlQUFlLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztZQUNsRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FDbkQsWUFBWSxFQUNaLGVBQWUsQ0FDaEIsQ0FBQztTQUNIO1FBRUQsSUFDRSxPQUFPLENBQ0wsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLHFCQUFxQjthQUNqRSxZQUFZLENBQ2hCO1lBQ0QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLHFCQUFxQjtpQkFDakUsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQzFCO1lBQ0EsZUFBZSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUI7aUJBQzdELHFCQUFxQixDQUFDLFlBQVksQ0FBQztTQUN2QztRQUVELE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUNuRCxZQUFZLEVBQ1osZUFBZSxDQUNoQixDQUFDO0lBQ0osQ0FBQztJQUVPLG9EQUFlLEdBQXZCO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FDcEIsSUFBSSxDQUFDLGtCQUFrQjthQUNwQiwyQkFBMkIsRUFBRTthQUM3QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FDN0QsQ0FBQztJQUNKLENBQUM7SUFFTyx3REFBbUIsR0FBM0I7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdDQUFnQyxFQUFFLENBQUM7UUFDM0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxrQkFBa0I7YUFDcEIsK0JBQStCLEVBQUU7YUFDakMsSUFBSSxDQUNILFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFDbEIsY0FBYyxDQUNaLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywrQkFBK0IsRUFBRSxDQUMxRCxFQUNELEdBQUcsQ0FBQyxVQUFDLEVBQXFCO2dCQUFyQixrQkFBcUIsRUFBbEIseUJBQWlCO1lBQU0sT0FBQSxpQkFBaUI7UUFBakIsQ0FBaUIsQ0FBQyxFQUNqRCxHQUFHLENBQUMsVUFBQSxpQkFBaUI7WUFDbkIsSUFBSSxpQkFBaUIsRUFBRTtnQkFDckIsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3hDO1FBQ0gsQ0FBQyxDQUFDLENBQ0g7YUFDQSxTQUFTLENBQUMsVUFBQSxpQkFBaUI7WUFDMUIsT0FBQSxLQUFJLENBQUMseUJBQXlCLENBQUMsaUJBQWlCLENBQUM7UUFBakQsQ0FBaUQsQ0FDbEQsQ0FDSixDQUFDO0lBQ0osQ0FBQztJQUVPLG1EQUFjLEdBQXRCLFVBQXVCLFlBQStCO1FBQ3BELE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxvREFBZSxHQUFmLFVBQWdCLEVBTWY7WUFMQyxnQkFBSyxFQUNMLHNCQUFRO1FBS1IsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BFO2FBQU07WUFDTCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkU7SUFDSCxDQUFDO0lBRU8sMERBQXFCLEdBQTdCLFVBQThCLE9BQWdCO1FBQzVDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGtCQUFrQixDQUFDLDRCQUE0QixFQUFFLENBQUM7WUFDdkQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsRUFBRSxHQUFHLEVBQUUsNkNBQTZDLEVBQUUsRUFDdEQsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7U0FDSDtJQUNILENBQUM7SUFFTyw4REFBeUIsR0FBakMsVUFBa0MsT0FBZ0I7UUFDaEQsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixFQUFFLEdBQUcsRUFBRSxpREFBaUQsRUFBRSxFQUMxRCxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVELDhDQUFTLEdBQVQsVUFBVSxTQUFpQztRQUEzQyxpQkFrQkM7UUFsQlMsMEJBQUEsRUFBQSxjQUFpQztRQUN6QyxJQUFNLGtCQUFrQixHQUFzQixFQUFFLENBQUM7UUFDakQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7WUFDeEIsSUFBSSxLQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDbkUsSUFBSSxLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ3BDLE9BQU87aUJBQ1I7Z0JBQ0Qsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ25DO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUNwQixJQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQUM7YUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLFlBQVksSUFBSSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQzthQUM5RCxTQUFTLEVBQUUsQ0FDZixDQUFDO0lBQ0osQ0FBQztJQUVPLDBEQUFxQixHQUE3QixVQUNFLGtCQUEwQztRQUQ1QyxpQkF3QkM7UUF2QkMsbUNBQUEsRUFBQSx1QkFBMEM7UUFFMUMsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsK0JBQStCLEVBQUUsQ0FDMUQsQ0FBQyxJQUFJLENBQ0osb0JBQW9CLEVBQUUsRUFDdEIsTUFBTSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsQ0FBQyxPQUFPLEVBQVIsQ0FBUSxDQUFDLENBQzVCLENBQUM7UUFDRixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUcsRUFBRSxNQUFNLElBQUssT0FBQSxHQUFHLEdBQUcsQ0FBQyxFQUFQLENBQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FDM0IsR0FBRyxDQUFDLFVBQUEsQ0FBQztZQUNILElBQUksQ0FBQyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sRUFBRTtnQkFDakMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FDckMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDMUMsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNGLElBQU0saUJBQWlCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FDdEMsTUFBTSxDQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsV0FBVyxLQUFLLGtCQUFrQixDQUFDLE1BQU0sRUFBekMsQ0FBeUMsQ0FBQyxDQUNqRSxDQUFDO1FBRUYsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBRUQsNkNBQVEsR0FBUixVQUFTLFNBQWlDO1FBQTFDLGlCQW1CQztRQW5CUSwwQkFBQSxFQUFBLGNBQWlDO1FBQ3hDLElBQU0sY0FBYyxHQUFzQixFQUFFLENBQUM7UUFDN0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7WUFDeEIsSUFBSSxLQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUN2RSxJQUFJLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDcEMsT0FBTztpQkFDUjtnQkFFRCxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9CO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQzthQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsWUFBWSxJQUFJLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDO2FBQzlELFNBQVMsRUFBRSxDQUNmLENBQUM7SUFDSixDQUFDO0lBRU8sb0RBQWUsR0FBdkIsVUFDRSxjQUFzQztRQUR4QyxpQkF5QkM7UUF4QkMsK0JBQUEsRUFBQSxtQkFBc0M7UUFFdEMsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLEVBQUUsQ0FDdEQsQ0FBQyxJQUFJLENBQ0osb0JBQW9CLEVBQUUsRUFDdEIsTUFBTSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsQ0FBQyxPQUFPLEVBQVIsQ0FBUSxDQUFDLENBQzVCLENBQUM7UUFDRixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUcsRUFBRSxNQUFNLElBQUssT0FBQSxHQUFHLEdBQUcsQ0FBQyxFQUFQLENBQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FDOUIsR0FBRyxDQUFDLFVBQUEsQ0FBQztZQUNILElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQ2pDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQ3BCLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQzFCLENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7UUFDRixJQUFNLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxJQUFJLENBQ3pDLE1BQU0sQ0FBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLFdBQVcsS0FBSyxjQUFjLENBQUMsTUFBTSxFQUFyQyxDQUFxQyxDQUFDLENBQzdELENBQUM7UUFFRixPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFFTyxzREFBaUIsR0FBekIsVUFBMEIsUUFBeUI7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRTtZQUNwQyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxDQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUM7WUFDdkQsT0FBTyxDQUNMLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FDaEU7WUFDRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUN0RSxRQUFRLENBQUMsRUFBRSxDQUNaLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxnREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFdEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdDQUFnQyxFQUFFLENBQUM7SUFDN0QsQ0FBQzs7Z0JBMVM2QixrQkFBa0I7Z0JBQ2hCLG9CQUFvQjtnQkFDaEIsdUJBQXVCO2dCQUN0Qix3QkFBd0I7Z0JBQ3JDLFdBQVc7O0lBL0N4QiwwQkFBMEI7UUFKdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxpMEVBQWtEO1NBQ25ELENBQUM7T0FDVywwQkFBMEIsQ0FzVnRDO0lBQUQsaUNBQUM7Q0FBQSxBQXRWRCxJQXNWQztTQXRWWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSxcbiAgQXV0aFNlcnZpY2UsXG4gIENvbnNlbnRUZW1wbGF0ZSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBpc0ZlYXR1cmVFbmFibGVkLFxuICBpc0ZlYXR1cmVMZXZlbCxcbiAgVXNlckNvbnNlbnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgQmVoYXZpb3JTdWJqZWN0LFxuICBjb21iaW5lTGF0ZXN0LFxuICBjb25jYXQsXG4gIE9ic2VydmFibGUsXG4gIFN1YnNjcmlwdGlvbixcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHNjYW4sXG4gIHNraXBXaGlsZSxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jb25zZW50LW1hbmFnZW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29uc2VudE1hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgcHJpdmF0ZSBhbGxDb25zZW50c0xvYWRpbmcgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICB0ZW1wbGF0ZUxpc3QkOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPjtcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgcmVxdWlyZWRDb25zZW50czogc3RyaW5nW10gPSBbXTtcblxuICBpc0Fub255bW91c0NvbnNlbnRzRW5hYmxlZCA9IGlzRmVhdHVyZUVuYWJsZWQoXG4gICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRVxuICApO1xuXG4gIC8vIFRPRE8oaXNzdWU6NDk4OSkgQW5vbnltb3VzIGNvbnNlbnRzIC0gcmVtb3ZlXG4gIGlzTGV2ZWwxMyA9IGlzRmVhdHVyZUxldmVsKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsICcxLjMnKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZSxcbiAgICBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgYW5vbnltb3VzQ29uc2VudHNDb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBJbnN0ZWFkLCB1c2U6XG4gICBgYGB0c1xuICAgY29uc3RydWN0b3IoXG4gICAgIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlLFxuICAgICBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgIGFub255bW91c0NvbnNlbnRzQ29uZmlnIDogQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgIGFub255bW91c0NvbnNlbnRzU2VydmljZSA6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICAgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgKSBcbiAgIGBgYFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgdXNlckNvbnNlbnRTZXJ2aWNlOiBVc2VyQ29uc2VudFNlcnZpY2UsXG4gICAgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlckNvbnNlbnRTZXJ2aWNlOiBVc2VyQ29uc2VudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50c0NvbmZpZz86IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlPzogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U/OiBBdXRoU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHNSZXN1bHRMb2FkaW5nKCksXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRHaXZlQ29uc2VudFJlc3VsdExvYWRpbmcoKSxcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldFdpdGhkcmF3Q29uc2VudFJlc3VsdExvYWRpbmcoKSxcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKSxcbiAgICAgIHRoaXMuYWxsQ29uc2VudHNMb2FkaW5nLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChbXG4gICAgICAgICAgY29uc2VudExvYWRpbmcsXG4gICAgICAgICAgZ2l2ZUNvbnNlbnRMb2FkaW5nLFxuICAgICAgICAgIHdpdGhkcmF3Q29uc2VudExvYWRpbmcsXG4gICAgICAgICAgaXNVc2VyTG9nZ2VkSW4sXG4gICAgICAgICAgYWxsQ29uc2VudHNMb2FkaW5nLFxuICAgICAgICBdKSA9PlxuICAgICAgICAgIGNvbnNlbnRMb2FkaW5nIHx8XG4gICAgICAgICAgZ2l2ZUNvbnNlbnRMb2FkaW5nIHx8XG4gICAgICAgICAgd2l0aGRyYXdDb25zZW50TG9hZGluZyB8fFxuICAgICAgICAgICFpc1VzZXJMb2dnZWRJbiB8fFxuICAgICAgICAgIGFsbENvbnNlbnRzTG9hZGluZ1xuICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5jb25zZW50TGlzdEluaXQoKTtcbiAgICB0aGlzLmdpdmVDb25zZW50SW5pdCgpO1xuICAgIHRoaXMud2l0aGRyYXdDb25zZW50SW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zZW50TGlzdEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZUxpc3QkID0gdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHMoKS5waXBlKFxuICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdldFRlbXBsYXRlcygpLFxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKClcbiAgICAgICksXG4gICAgICBmaWx0ZXIoXG4gICAgICAgIChbX3RlbXBsYXRlTGlzdCwgX2Fub255bW91c1RlbXBsYXRlcywgaXNVc2VyTG9nZ2VkSW5dKSA9PiBpc1VzZXJMb2dnZWRJblxuICAgICAgKSxcbiAgICAgIHRhcCgoW3RlbXBsYXRlTGlzdCwgX2Fub255bW91c1RlbXBsYXRlc10pID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnNlbnRzRXhpc3RzKHRlbXBsYXRlTGlzdCkpIHtcbiAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5sb2FkQ29uc2VudHMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKFt0ZW1wbGF0ZUxpc3QsIGFub255bW91c1RlbXBsYXRlc10pID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQW5vbnltb3VzQ29uc2VudHNFbmFibGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlTGlzdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChCb29sZWFuKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMpKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgQm9vbGVhbihcbiAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVpcmVkQ29uc2VudHMgPSB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIEJvb2xlYW4oXG4gICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHNcbiAgICAgICAgICAgICAgICAuY29uc2VudE1hbmFnZW1lbnRQYWdlXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oaWRlQW5vbnltb3VzQ29uc2VudHModGVtcGxhdGVMaXN0LCBhbm9ueW1vdXNUZW1wbGF0ZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZUxpc3Q7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhpZGVBbm9ueW1vdXNDb25zZW50cyhcbiAgICB0ZW1wbGF0ZUxpc3Q6IENvbnNlbnRUZW1wbGF0ZVtdLFxuICAgIGFub255bW91c1RlbXBsYXRlczogQ29uc2VudFRlbXBsYXRlW10gPSBbXVxuICApOiBDb25zZW50VGVtcGxhdGVbXSB7XG4gICAgbGV0IGhpZGVUZW1wbGF0ZUlkczogc3RyaW5nW10gPSBbXTtcblxuICAgIGlmIChcbiAgICAgICF0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLmNvbnNlbnRNYW5hZ2VtZW50UGFnZVxuICAgICAgICAuc2hvd0Fub255bW91c0NvbnNlbnRzXG4gICAgKSB7XG4gICAgICBoaWRlVGVtcGxhdGVJZHMgPSBhbm9ueW1vdXNUZW1wbGF0ZXMubWFwKHRlbXBsYXRlID0+IHRlbXBsYXRlLmlkKTtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJDb25zZW50U2VydmljZS5maWx0ZXJDb25zZW50VGVtcGxhdGVzKFxuICAgICAgICB0ZW1wbGF0ZUxpc3QsXG4gICAgICAgIGhpZGVUZW1wbGF0ZUlkc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBCb29sZWFuKFxuICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLmNvbnNlbnRNYW5hZ2VtZW50UGFnZVxuICAgICAgICAgIC5oaWRlQ29uc2VudHNcbiAgICAgICkgJiZcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMuY29uc2VudE1hbmFnZW1lbnRQYWdlXG4gICAgICAgIC5oaWRlQ29uc2VudHMubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgaGlkZVRlbXBsYXRlSWRzID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50c1xuICAgICAgICAuY29uc2VudE1hbmFnZW1lbnRQYWdlLmhpZGVDb25zZW50cztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZmlsdGVyQ29uc2VudFRlbXBsYXRlcyhcbiAgICAgIHRlbXBsYXRlTGlzdCxcbiAgICAgIGhpZGVUZW1wbGF0ZUlkc1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdpdmVDb25zZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5yZXNldEdpdmVDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlXG4gICAgICAgIC5nZXRHaXZlQ29uc2VudFJlc3VsdFN1Y2Nlc3MoKVxuICAgICAgICAuc3Vic2NyaWJlKHN1Y2Nlc3MgPT4gdGhpcy5vbkNvbnNlbnRHaXZlblN1Y2Nlc3Moc3VjY2VzcykpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgd2l0aGRyYXdDb25zZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5yZXNldFdpdGhkcmF3Q29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZVxuICAgICAgICAuZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0TG9hZGluZygpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHNraXBXaGlsZShCb29sZWFuKSxcbiAgICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldFdpdGhkcmF3Q29uc2VudFJlc3VsdFN1Y2Nlc3MoKVxuICAgICAgICAgICksXG4gICAgICAgICAgbWFwKChbLCB3aXRoZHJhd2FsU3VjY2Vzc10pID0+IHdpdGhkcmF3YWxTdWNjZXNzKSxcbiAgICAgICAgICB0YXAod2l0aGRyYXdhbFN1Y2Nlc3MgPT4ge1xuICAgICAgICAgICAgaWYgKHdpdGhkcmF3YWxTdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmxvYWRDb25zZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSh3aXRoZHJhd2FsU3VjY2VzcyA9PlxuICAgICAgICAgIHRoaXMub25Db25zZW50V2l0aGRyYXduU3VjY2Vzcyh3aXRoZHJhd2FsU3VjY2VzcylcbiAgICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNvbnNlbnRzRXhpc3RzKHRlbXBsYXRlTGlzdDogQ29uc2VudFRlbXBsYXRlW10pOiBib29sZWFuIHtcbiAgICByZXR1cm4gQm9vbGVhbih0ZW1wbGF0ZUxpc3QpICYmIHRlbXBsYXRlTGlzdC5sZW5ndGggPiAwO1xuICB9XG5cbiAgb25Db25zZW50Q2hhbmdlKHtcbiAgICBnaXZlbixcbiAgICB0ZW1wbGF0ZSxcbiAgfToge1xuICAgIGdpdmVuOiBib29sZWFuO1xuICAgIHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGU7XG4gIH0pOiB2b2lkIHtcbiAgICBpZiAoZ2l2ZW4pIHtcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdpdmVDb25zZW50KHRlbXBsYXRlLmlkLCB0ZW1wbGF0ZS52ZXJzaW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2Uud2l0aGRyYXdDb25zZW50KHRlbXBsYXRlLmN1cnJlbnRDb25zZW50LmNvZGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25Db25zZW50R2l2ZW5TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRHaXZlQ29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHsga2V5OiAnY29uc2VudE1hbmFnZW1lbnRGb3JtLm1lc3NhZ2Uuc3VjY2Vzcy5naXZlbicgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25Db25zZW50V2l0aGRyYXduU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0V2l0aGRyYXdDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgeyBrZXk6ICdjb25zZW50TWFuYWdlbWVudEZvcm0ubWVzc2FnZS5zdWNjZXNzLndpdGhkcmF3bicgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlamVjdEFsbCh0ZW1wbGF0ZXM6IENvbnNlbnRUZW1wbGF0ZVtdID0gW10pOiB2b2lkIHtcbiAgICBjb25zdCBjb25zZW50c1RvV2l0aGRyYXc6IENvbnNlbnRUZW1wbGF0ZVtdID0gW107XG4gICAgdGVtcGxhdGVzLmZvckVhY2godGVtcGxhdGUgPT4ge1xuICAgICAgaWYgKHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudEdpdmVuKHRlbXBsYXRlLmN1cnJlbnRDb25zZW50KSkge1xuICAgICAgICBpZiAodGhpcy5pc1JlcXVpcmVkQ29uc2VudCh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc2VudHNUb1dpdGhkcmF3LnB1c2godGVtcGxhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hbGxDb25zZW50c0xvYWRpbmcubmV4dCh0cnVlKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnNldHVwV2l0aGRyYXdhbFN0cmVhbShjb25zZW50c1RvV2l0aGRyYXcpXG4gICAgICAgIC5waXBlKHRhcChfdGltZXNMb2FkZWQgPT4gdGhpcy5hbGxDb25zZW50c0xvYWRpbmcubmV4dChmYWxzZSkpKVxuICAgICAgICAuc3Vic2NyaWJlKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cFdpdGhkcmF3YWxTdHJlYW0oXG4gICAgY29uc2VudHNUb1dpdGhkcmF3OiBDb25zZW50VGVtcGxhdGVbXSA9IFtdXG4gICk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgY29uc3QgbG9hZGluZyQgPSBjb25jYXQoXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRMb2FkaW5nKClcbiAgICApLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgZmlsdGVyKGxvYWRpbmcgPT4gIWxvYWRpbmcpXG4gICAgKTtcbiAgICBjb25zdCBjb3VudCQgPSBsb2FkaW5nJC5waXBlKHNjYW4oKGFjYywgX3ZhbHVlKSA9PiBhY2MgKyAxLCAtMSkpO1xuICAgIGNvbnN0IHdpdGhkcmF3JCA9IGNvdW50JC5waXBlKFxuICAgICAgdGFwKGkgPT4ge1xuICAgICAgICBpZiAoaSA8IGNvbnNlbnRzVG9XaXRoZHJhdy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS53aXRoZHJhd0NvbnNlbnQoXG4gICAgICAgICAgICBjb25zZW50c1RvV2l0aGRyYXdbaV0uY3VycmVudENvbnNlbnQuY29kZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb25zdCBjaGVja1RpbWVzTG9hZGVkJCA9IHdpdGhkcmF3JC5waXBlKFxuICAgICAgZmlsdGVyKHRpbWVzTG9hZGVkID0+IHRpbWVzTG9hZGVkID09PSBjb25zZW50c1RvV2l0aGRyYXcubGVuZ3RoKVxuICAgICk7XG5cbiAgICByZXR1cm4gY2hlY2tUaW1lc0xvYWRlZCQ7XG4gIH1cblxuICBhbGxvd0FsbCh0ZW1wbGF0ZXM6IENvbnNlbnRUZW1wbGF0ZVtdID0gW10pOiB2b2lkIHtcbiAgICBjb25zdCBjb25zZW50c1RvR2l2ZTogQ29uc2VudFRlbXBsYXRlW10gPSBbXTtcbiAgICB0ZW1wbGF0ZXMuZm9yRWFjaCh0ZW1wbGF0ZSA9PiB7XG4gICAgICBpZiAodGhpcy51c2VyQ29uc2VudFNlcnZpY2UuaXNDb25zZW50V2l0aGRyYXduKHRlbXBsYXRlLmN1cnJlbnRDb25zZW50KSkge1xuICAgICAgICBpZiAodGhpcy5pc1JlcXVpcmVkQ29uc2VudCh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zZW50c1RvR2l2ZS5wdXNoKHRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYWxsQ29uc2VudHNMb2FkaW5nLm5leHQodHJ1ZSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5zZXR1cEdpdmVTdHJlYW0oY29uc2VudHNUb0dpdmUpXG4gICAgICAgIC5waXBlKHRhcChfdGltZXNMb2FkZWQgPT4gdGhpcy5hbGxDb25zZW50c0xvYWRpbmcubmV4dChmYWxzZSkpKVxuICAgICAgICAuc3Vic2NyaWJlKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cEdpdmVTdHJlYW0oXG4gICAgY29uc2VudHNUb0dpdmU6IENvbnNlbnRUZW1wbGF0ZVtdID0gW11cbiAgKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICBjb25zdCBsb2FkaW5nJCA9IGNvbmNhdChcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldEdpdmVDb25zZW50UmVzdWx0TG9hZGluZygpXG4gICAgKS5waXBlKFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIGZpbHRlcihsb2FkaW5nID0+ICFsb2FkaW5nKVxuICAgICk7XG4gICAgY29uc3QgY291bnQkID0gbG9hZGluZyQucGlwZShzY2FuKChhY2MsIF92YWx1ZSkgPT4gYWNjICsgMSwgLTEpKTtcbiAgICBjb25zdCBnaXZlQ29uc2VudCQgPSBjb3VudCQucGlwZShcbiAgICAgIHRhcChpID0+IHtcbiAgICAgICAgaWYgKGkgPCBjb25zZW50c1RvR2l2ZS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5naXZlQ29uc2VudChcbiAgICAgICAgICAgIGNvbnNlbnRzVG9HaXZlW2ldLmlkLFxuICAgICAgICAgICAgY29uc2VudHNUb0dpdmVbaV0udmVyc2lvblxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb25zdCBjaGVja1RpbWVzTG9hZGVkJCA9IGdpdmVDb25zZW50JC5waXBlKFxuICAgICAgZmlsdGVyKHRpbWVzTG9hZGVkID0+IHRpbWVzTG9hZGVkID09PSBjb25zZW50c1RvR2l2ZS5sZW5ndGgpXG4gICAgKTtcblxuICAgIHJldHVybiBjaGVja1RpbWVzTG9hZGVkJDtcbiAgfVxuXG4gIHByaXZhdGUgaXNSZXF1aXJlZENvbnNlbnQodGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZSk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5pc0Fub255bW91c0NvbnNlbnRzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBCb29sZWFuKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMpICYmXG4gICAgICBCb29sZWFuKFxuICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHNcbiAgICAgICkgJiZcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyhcbiAgICAgICAgdGVtcGxhdGUuaWRcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5hbGxDb25zZW50c0xvYWRpbmcudW5zdWJzY3JpYmUoKTtcblxuICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5yZXNldFdpdGhkcmF3Q29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICB9XG59XG4iXX0=