import { __decorate, __read } from "tslib";
import { Component } from '@angular/core';
import { AnonymousConsentsConfig, AnonymousConsentsService, AuthService, ConsentTemplate, GlobalMessageService, GlobalMessageType, UserConsentService, } from '@spartacus/core';
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
            template: "<div *ngIf=\"loading$ | async; else consentManagementForm\">\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</div>\n\n<ng-template #consentManagementForm>\n  <ng-container *ngIf=\"templateList$ | async as templateList\">\n    <div class=\"cx-consent-action-links\">\n      <div class=\"col-sm-12 col-md-8 col-lg-6\">\n        <button\n          tabindex=\"0\"\n          class=\"btn cx-action-link\"\n          (click)=\"rejectAll(templateList)\"\n        >\n          {{ 'consentManagementForm.clearAll' | cxTranslate }}\n        </button>\n        <button\n          tabindex=\"0\"\n          class=\"btn cx-action-link\"\n          (click)=\"allowAll(templateList)\"\n        >\n          {{ 'consentManagementForm.selectAll' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div class=\"cx-consent-toggles\">\n      <div class=\"col-sm-12 col-md-8 col-lg-6\">\n        <cx-consent-management-form\n          *ngFor=\"let consentTemplate of templateList\"\n          [consentTemplate]=\"consentTemplate\"\n          [requiredConsents]=\"requiredConsents\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n      </div>\n    </div>\n  </ng-container>\n</ng-template>\n"
        })
    ], ConsentManagementComponent);
    return ConsentManagementComponent;
}());
export { ConsentManagementComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9jb25zZW50LW1hbmFnZW1lbnQvY29tcG9uZW50cy9jb25zZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLHdCQUF3QixFQUN4QixXQUFXLEVBQ1gsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUNMLGVBQWUsRUFDZixhQUFhLEVBQ2IsTUFBTSxFQUVOLFlBQVksR0FDYixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLEdBQUcsRUFDSCxJQUFJLEVBQ0osU0FBUyxFQUNULEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQU14QjtJQVNFLG9DQUNZLGtCQUFzQyxFQUN0QyxvQkFBMEMsRUFDMUMsdUJBQWdELEVBQ2hELHdCQUFrRCxFQUNsRCxXQUF3QjtRQUp4Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBYjVCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUtqRSxxQkFBZ0IsR0FBYSxFQUFFLENBQUM7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bXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICBBdXRoU2VydmljZSxcbiAgQ29uc2VudFRlbXBsYXRlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFVzZXJDb25zZW50U2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIEJlaGF2aW9yU3ViamVjdCxcbiAgY29tYmluZUxhdGVzdCxcbiAgY29uY2F0LFxuICBPYnNlcnZhYmxlLFxuICBTdWJzY3JpcHRpb24sXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzY2FuLFxuICBza2lwV2hpbGUsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY29uc2VudC1tYW5hZ2VtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnNlbnQtbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnNlbnRNYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHByaXZhdGUgYWxsQ29uc2VudHNMb2FkaW5nID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgdGVtcGxhdGVMaXN0JDogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT47XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIHJlcXVpcmVkQ29uc2VudHM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFub255bW91c0NvbnNlbnRzQ29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICBwcm90ZWN0ZWQgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHNSZXN1bHRMb2FkaW5nKCksXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRHaXZlQ29uc2VudFJlc3VsdExvYWRpbmcoKSxcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldFdpdGhkcmF3Q29uc2VudFJlc3VsdExvYWRpbmcoKSxcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKSxcbiAgICAgIHRoaXMuYWxsQ29uc2VudHNMb2FkaW5nLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChbXG4gICAgICAgICAgY29uc2VudExvYWRpbmcsXG4gICAgICAgICAgZ2l2ZUNvbnNlbnRMb2FkaW5nLFxuICAgICAgICAgIHdpdGhkcmF3Q29uc2VudExvYWRpbmcsXG4gICAgICAgICAgaXNVc2VyTG9nZ2VkSW4sXG4gICAgICAgICAgYWxsQ29uc2VudHNMb2FkaW5nLFxuICAgICAgICBdKSA9PlxuICAgICAgICAgIGNvbnNlbnRMb2FkaW5nIHx8XG4gICAgICAgICAgZ2l2ZUNvbnNlbnRMb2FkaW5nIHx8XG4gICAgICAgICAgd2l0aGRyYXdDb25zZW50TG9hZGluZyB8fFxuICAgICAgICAgICFpc1VzZXJMb2dnZWRJbiB8fFxuICAgICAgICAgIGFsbENvbnNlbnRzTG9hZGluZ1xuICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5jb25zZW50TGlzdEluaXQoKTtcbiAgICB0aGlzLmdpdmVDb25zZW50SW5pdCgpO1xuICAgIHRoaXMud2l0aGRyYXdDb25zZW50SW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zZW50TGlzdEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZUxpc3QkID0gdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHMoKS5waXBlKFxuICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdldFRlbXBsYXRlcygpLFxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKClcbiAgICAgICksXG4gICAgICBmaWx0ZXIoXG4gICAgICAgIChbX3RlbXBsYXRlTGlzdCwgX2Fub255bW91c1RlbXBsYXRlcywgaXNVc2VyTG9nZ2VkSW5dKSA9PiBpc1VzZXJMb2dnZWRJblxuICAgICAgKSxcbiAgICAgIHRhcCgoW3RlbXBsYXRlTGlzdCwgX2Fub255bW91c1RlbXBsYXRlc10pID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnNlbnRzRXhpc3RzKHRlbXBsYXRlTGlzdCkpIHtcbiAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5sb2FkQ29uc2VudHMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKFt0ZW1wbGF0ZUxpc3QsIGFub255bW91c1RlbXBsYXRlc10pID0+IHtcbiAgICAgICAgaWYgKEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cykpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBCb29sZWFuKFxuICAgICAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHNcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZWRDb25zZW50cyA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgQm9vbGVhbihcbiAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50c1xuICAgICAgICAgICAgICAgIC5jb25zZW50TWFuYWdlbWVudFBhZ2VcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhpZGVBbm9ueW1vdXNDb25zZW50cyh0ZW1wbGF0ZUxpc3QsIGFub255bW91c1RlbXBsYXRlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlTGlzdDtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZUFub255bW91c0NvbnNlbnRzKFxuICAgIHRlbXBsYXRlTGlzdDogQ29uc2VudFRlbXBsYXRlW10sXG4gICAgYW5vbnltb3VzVGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXSA9IFtdXG4gICk6IENvbnNlbnRUZW1wbGF0ZVtdIHtcbiAgICBsZXQgaGlkZVRlbXBsYXRlSWRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgaWYgKFxuICAgICAgIXRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMuY29uc2VudE1hbmFnZW1lbnRQYWdlXG4gICAgICAgIC5zaG93QW5vbnltb3VzQ29uc2VudHNcbiAgICApIHtcbiAgICAgIGhpZGVUZW1wbGF0ZUlkcyA9IGFub255bW91c1RlbXBsYXRlcy5tYXAoKHRlbXBsYXRlKSA9PiB0ZW1wbGF0ZS5pZCk7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZmlsdGVyQ29uc2VudFRlbXBsYXRlcyhcbiAgICAgICAgdGVtcGxhdGVMaXN0LFxuICAgICAgICBoaWRlVGVtcGxhdGVJZHNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgQm9vbGVhbihcbiAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5jb25zZW50TWFuYWdlbWVudFBhZ2VcbiAgICAgICAgICAuaGlkZUNvbnNlbnRzXG4gICAgICApICYmXG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLmNvbnNlbnRNYW5hZ2VtZW50UGFnZVxuICAgICAgICAuaGlkZUNvbnNlbnRzLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIGhpZGVUZW1wbGF0ZUlkcyA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHNcbiAgICAgICAgLmNvbnNlbnRNYW5hZ2VtZW50UGFnZS5oaWRlQ29uc2VudHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmZpbHRlckNvbnNlbnRUZW1wbGF0ZXMoXG4gICAgICB0ZW1wbGF0ZUxpc3QsXG4gICAgICBoaWRlVGVtcGxhdGVJZHNcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnaXZlQ29uc2VudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRHaXZlQ29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZVxuICAgICAgICAuZ2V0R2l2ZUNvbnNlbnRSZXN1bHRTdWNjZXNzKClcbiAgICAgICAgLnN1YnNjcmliZSgoc3VjY2VzcykgPT4gdGhpcy5vbkNvbnNlbnRHaXZlblN1Y2Nlc3Moc3VjY2VzcykpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgd2l0aGRyYXdDb25zZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5yZXNldFdpdGhkcmF3Q29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZVxuICAgICAgICAuZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0TG9hZGluZygpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHNraXBXaGlsZShCb29sZWFuKSxcbiAgICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldFdpdGhkcmF3Q29uc2VudFJlc3VsdFN1Y2Nlc3MoKVxuICAgICAgICAgICksXG4gICAgICAgICAgbWFwKChbLCB3aXRoZHJhd2FsU3VjY2Vzc10pID0+IHdpdGhkcmF3YWxTdWNjZXNzKSxcbiAgICAgICAgICB0YXAoKHdpdGhkcmF3YWxTdWNjZXNzKSA9PiB7XG4gICAgICAgICAgICBpZiAod2l0aGRyYXdhbFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UubG9hZENvbnNlbnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCh3aXRoZHJhd2FsU3VjY2VzcykgPT5cbiAgICAgICAgICB0aGlzLm9uQ29uc2VudFdpdGhkcmF3blN1Y2Nlc3Mod2l0aGRyYXdhbFN1Y2Nlc3MpXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zZW50c0V4aXN0cyh0ZW1wbGF0ZUxpc3Q6IENvbnNlbnRUZW1wbGF0ZVtdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGVtcGxhdGVMaXN0KSAmJiB0ZW1wbGF0ZUxpc3QubGVuZ3RoID4gMDtcbiAgfVxuXG4gIG9uQ29uc2VudENoYW5nZSh7XG4gICAgZ2l2ZW4sXG4gICAgdGVtcGxhdGUsXG4gIH06IHtcbiAgICBnaXZlbjogYm9vbGVhbjtcbiAgICB0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuICB9KTogdm9pZCB7XG4gICAgaWYgKGdpdmVuKSB7XG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5naXZlQ29uc2VudCh0ZW1wbGF0ZS5pZCwgdGVtcGxhdGUudmVyc2lvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLndpdGhkcmF3Q29uc2VudCh0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb2RlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uQ29uc2VudEdpdmVuU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7IGtleTogJ2NvbnNlbnRNYW5hZ2VtZW50Rm9ybS5tZXNzYWdlLnN1Y2Nlc3MuZ2l2ZW4nIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uQ29uc2VudFdpdGhkcmF3blN1Y2Nlc3Moc3VjY2VzczogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5yZXNldFdpdGhkcmF3Q29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHsga2V5OiAnY29uc2VudE1hbmFnZW1lbnRGb3JtLm1lc3NhZ2Uuc3VjY2Vzcy53aXRoZHJhd24nIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZWplY3RBbGwodGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXSA9IFtdKTogdm9pZCB7XG4gICAgY29uc3QgY29uc2VudHNUb1dpdGhkcmF3OiBDb25zZW50VGVtcGxhdGVbXSA9IFtdO1xuICAgIHRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgaWYgKHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudEdpdmVuKHRlbXBsYXRlLmN1cnJlbnRDb25zZW50KSkge1xuICAgICAgICBpZiAodGhpcy5pc1JlcXVpcmVkQ29uc2VudCh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc2VudHNUb1dpdGhkcmF3LnB1c2godGVtcGxhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hbGxDb25zZW50c0xvYWRpbmcubmV4dCh0cnVlKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnNldHVwV2l0aGRyYXdhbFN0cmVhbShjb25zZW50c1RvV2l0aGRyYXcpXG4gICAgICAgIC5waXBlKHRhcCgoX3RpbWVzTG9hZGVkKSA9PiB0aGlzLmFsbENvbnNlbnRzTG9hZGluZy5uZXh0KGZhbHNlKSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwV2l0aGRyYXdhbFN0cmVhbShcbiAgICBjb25zZW50c1RvV2l0aGRyYXc6IENvbnNlbnRUZW1wbGF0ZVtdID0gW11cbiAgKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICBjb25zdCBsb2FkaW5nJCA9IGNvbmNhdChcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldFdpdGhkcmF3Q29uc2VudFJlc3VsdExvYWRpbmcoKVxuICAgICkucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBmaWx0ZXIoKGxvYWRpbmcpID0+ICFsb2FkaW5nKVxuICAgICk7XG4gICAgY29uc3QgY291bnQkID0gbG9hZGluZyQucGlwZShzY2FuKChhY2MsIF92YWx1ZSkgPT4gYWNjICsgMSwgLTEpKTtcbiAgICBjb25zdCB3aXRoZHJhdyQgPSBjb3VudCQucGlwZShcbiAgICAgIHRhcCgoaSkgPT4ge1xuICAgICAgICBpZiAoaSA8IGNvbnNlbnRzVG9XaXRoZHJhdy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS53aXRoZHJhd0NvbnNlbnQoXG4gICAgICAgICAgICBjb25zZW50c1RvV2l0aGRyYXdbaV0uY3VycmVudENvbnNlbnQuY29kZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb25zdCBjaGVja1RpbWVzTG9hZGVkJCA9IHdpdGhkcmF3JC5waXBlKFxuICAgICAgZmlsdGVyKCh0aW1lc0xvYWRlZCkgPT4gdGltZXNMb2FkZWQgPT09IGNvbnNlbnRzVG9XaXRoZHJhdy5sZW5ndGgpXG4gICAgKTtcblxuICAgIHJldHVybiBjaGVja1RpbWVzTG9hZGVkJDtcbiAgfVxuXG4gIGFsbG93QWxsKHRlbXBsYXRlczogQ29uc2VudFRlbXBsYXRlW10gPSBbXSk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnNlbnRzVG9HaXZlOiBDb25zZW50VGVtcGxhdGVbXSA9IFtdO1xuICAgIHRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgaWYgKHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bih0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudCkpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZXF1aXJlZENvbnNlbnQodGVtcGxhdGUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc2VudHNUb0dpdmUucHVzaCh0ZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmFsbENvbnNlbnRzTG9hZGluZy5uZXh0KHRydWUpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMuc2V0dXBHaXZlU3RyZWFtKGNvbnNlbnRzVG9HaXZlKVxuICAgICAgICAucGlwZSh0YXAoKF90aW1lc0xvYWRlZCkgPT4gdGhpcy5hbGxDb25zZW50c0xvYWRpbmcubmV4dChmYWxzZSkpKVxuICAgICAgICAuc3Vic2NyaWJlKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cEdpdmVTdHJlYW0oXG4gICAgY29uc2VudHNUb0dpdmU6IENvbnNlbnRUZW1wbGF0ZVtdID0gW11cbiAgKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICBjb25zdCBsb2FkaW5nJCA9IGNvbmNhdChcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldEdpdmVDb25zZW50UmVzdWx0TG9hZGluZygpXG4gICAgKS5waXBlKFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIGZpbHRlcigobG9hZGluZykgPT4gIWxvYWRpbmcpXG4gICAgKTtcbiAgICBjb25zdCBjb3VudCQgPSBsb2FkaW5nJC5waXBlKHNjYW4oKGFjYywgX3ZhbHVlKSA9PiBhY2MgKyAxLCAtMSkpO1xuICAgIGNvbnN0IGdpdmVDb25zZW50JCA9IGNvdW50JC5waXBlKFxuICAgICAgdGFwKChpKSA9PiB7XG4gICAgICAgIGlmIChpIDwgY29uc2VudHNUb0dpdmUubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2l2ZUNvbnNlbnQoXG4gICAgICAgICAgICBjb25zZW50c1RvR2l2ZVtpXS5pZCxcbiAgICAgICAgICAgIGNvbnNlbnRzVG9HaXZlW2ldLnZlcnNpb25cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgY29uc3QgY2hlY2tUaW1lc0xvYWRlZCQgPSBnaXZlQ29uc2VudCQucGlwZShcbiAgICAgIGZpbHRlcigodGltZXNMb2FkZWQpID0+IHRpbWVzTG9hZGVkID09PSBjb25zZW50c1RvR2l2ZS5sZW5ndGgpXG4gICAgKTtcblxuICAgIHJldHVybiBjaGVja1RpbWVzTG9hZGVkJDtcbiAgfVxuXG4gIHByaXZhdGUgaXNSZXF1aXJlZENvbnNlbnQodGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBCb29sZWFuKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMpICYmXG4gICAgICBCb29sZWFuKFxuICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHNcbiAgICAgICkgJiZcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyhcbiAgICAgICAgdGVtcGxhdGUuaWRcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5hbGxDb25zZW50c0xvYWRpbmcudW5zdWJzY3JpYmUoKTtcblxuICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5yZXNldFdpdGhkcmF3Q29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICB9XG59XG4iXX0=