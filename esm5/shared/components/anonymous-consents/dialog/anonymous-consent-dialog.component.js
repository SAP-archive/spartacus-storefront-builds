/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AnonymousConsentsConfig, AnonymousConsentsService, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { distinctUntilChanged, take, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/index';
import { ModalService } from '../../modal/index';
var AnonymousConsentDialogComponent = /** @class */ (function () {
    function AnonymousConsentDialogComponent(config, modalService, anonymousConsentsService) {
        this.config = config;
        this.modalService = modalService;
        this.anonymousConsentsService = anonymousConsentsService;
        this.subscriptions = new Subscription();
        this.showLegalDescription = true;
        this.iconTypes = ICON_TYPE;
        this.requiredConsents = [];
        if (Boolean(this.config.anonymousConsents)) {
            this.showLegalDescription = this.config.anonymousConsents.showLegalDescriptionInDialog;
            if (Boolean(this.config.anonymousConsents.requiredConsents)) {
                this.requiredConsents = this.config.anonymousConsents.requiredConsents;
            }
        }
    }
    /**
     * @return {?}
     */
    AnonymousConsentDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.templates$ = this.anonymousConsentsService.getTemplates();
        this.consents$ = this.anonymousConsentsService.getConsents();
    };
    /**
     * @param {?=} reason
     * @return {?}
     */
    AnonymousConsentDialogComponent.prototype.closeModal = /**
     * @param {?=} reason
     * @return {?}
     */
    function (reason) {
        this.modalService.closeActiveModal(reason);
    };
    /**
     * @return {?}
     */
    AnonymousConsentDialogComponent.prototype.rejectAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscriptions.add(combineLatest([this.templates$, this.consents$])
            .pipe(take(1), distinctUntilChanged(), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), templates = _b[0], consents = _b[1];
            return templates.forEach((/**
             * @param {?} template
             * @return {?}
             */
            function (template) {
                /** @type {?} */
                var consent = _this.getCorrespondingConsent(template, consents);
                if (_this.anonymousConsentsService.isConsentGiven(consent)) {
                    if (_this.isRequiredConsent(template)) {
                        return;
                    }
                    _this.anonymousConsentsService.withdrawConsent(template.id);
                }
            }));
        })))
            .subscribe());
        this.closeModal('rejectAll');
    };
    /**
     * @return {?}
     */
    AnonymousConsentDialogComponent.prototype.allowAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscriptions.add(combineLatest([this.templates$, this.consents$])
            .pipe(take(1), distinctUntilChanged(), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), templates = _b[0], consents = _b[1];
            return templates.forEach((/**
             * @param {?} template
             * @return {?}
             */
            function (template) {
                /** @type {?} */
                var consent = _this.getCorrespondingConsent(template, consents);
                if (consent.consentState == null ||
                    _this.anonymousConsentsService.isConsentWithdrawn(consent)) {
                    if (_this.isRequiredConsent(template)) {
                        return;
                    }
                    _this.anonymousConsentsService.giveConsent(template.id);
                }
            }));
        })))
            .subscribe());
        this.closeModal('allowAll');
    };
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    AnonymousConsentDialogComponent.prototype.isRequiredConsent = /**
     * @private
     * @param {?} template
     * @return {?}
     */
    function (template) {
        return (Boolean(this.config.anonymousConsents) &&
            Boolean(this.config.anonymousConsents.requiredConsents) &&
            this.config.anonymousConsents.requiredConsents.includes(template.id));
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    AnonymousConsentDialogComponent.prototype.onConsentChange = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var given = _a.given, template = _a.template;
        if (given) {
            this.anonymousConsentsService.giveConsent(template.id);
        }
        else {
            this.anonymousConsentsService.withdrawConsent(template.id);
        }
    };
    /**
     * @param {?} template
     * @param {?=} consents
     * @return {?}
     */
    AnonymousConsentDialogComponent.prototype.getCorrespondingConsent = /**
     * @param {?} template
     * @param {?=} consents
     * @return {?}
     */
    function (template, consents) {
        var e_1, _a;
        if (consents === void 0) { consents = []; }
        try {
            for (var consents_1 = tslib_1.__values(consents), consents_1_1 = consents_1.next(); !consents_1_1.done; consents_1_1 = consents_1.next()) {
                var consent = consents_1_1.value;
                if (template.id === consent.templateCode) {
                    return consent;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (consents_1_1 && !consents_1_1.done && (_a = consents_1.return)) _a.call(consents_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    /**
     * @return {?}
     */
    AnonymousConsentDialogComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.unsubscribe();
    };
    AnonymousConsentDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-anonymous-consent-dialog',
                    template: "<div #dialog>\n  <!-- Modal Header -->\n  <div class=\"cx-dialog-header modal-header\">\n    <div class=\"cx-dialog-title modal-title\">\n      {{ 'anonymousConsents.dialog.title' | cxTranslate }}\n    </div>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"closeModal('Cross click')\"\n    >\n      <span aria-hidden=\"true\">\n        <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n      </span>\n    </button>\n  </div>\n  <!-- Separator -->\n  <div\n    class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n  ></div>\n  <div class=\"cx-dialog-description\" *ngIf=\"showLegalDescription\">\n    {{ 'anonymousConsents.dialog.legalDescription' | cxTranslate }}\n    <div\n      class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n    ></div>\n  </div>\n  <!-- Actions -->\n  <div class=\"cx-dialog-buttons\">\n    <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"rejectAll()\">{{\n      'anonymousConsents.dialog.clearAll' | cxTranslate\n    }}</a>\n    <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"allowAll()\">{{\n      'anonymousConsents.dialog.selectAll' | cxTranslate\n    }}</a>\n  </div>\n  <!-- Modal Body -->\n  <div\n    class=\"cx-dialog-body modal-body\"\n    *ngIf=\"templates$ | async as templates\"\n  >\n    <div *ngIf=\"consents$ | async as consents\">\n      <div\n        class=\"cx-dialog-row col-sm-12 col-md-6\"\n        *ngFor=\"let template of templates\"\n      >\n        <cx-consent-management-form\n          [consentTemplate]=\"template\"\n          [requiredConsents]=\"requiredConsents\"\n          [consent]=\"getCorrespondingConsent(template, consents)\"\n          [isAnonymousConsentsEnabled]=\"true\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n      </div>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    AnonymousConsentDialogComponent.ctorParameters = function () { return [
        { type: AnonymousConsentsConfig },
        { type: ModalService },
        { type: AnonymousConsentsService }
    ]; };
    return AnonymousConsentDialogComponent;
}());
export { AnonymousConsentDialogComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentDialogComponent.prototype.subscriptions;
    /** @type {?} */
    AnonymousConsentDialogComponent.prototype.showLegalDescription;
    /** @type {?} */
    AnonymousConsentDialogComponent.prototype.iconTypes;
    /** @type {?} */
    AnonymousConsentDialogComponent.prototype.requiredConsents;
    /** @type {?} */
    AnonymousConsentDialogComponent.prototype.templates$;
    /** @type {?} */
    AnonymousConsentDialogComponent.prototype.consents$;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentDialogComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentDialogComponent.prototype.modalService;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentDialogComponent.prototype.anonymousConsentsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Fub255bW91cy1jb25zZW50cy9kaWFsb2cvYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsd0JBQXdCLEdBRXpCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBY0UseUNBQ1UsTUFBK0IsRUFDL0IsWUFBMEIsRUFDMUIsd0JBQWtEO1FBRmxELFdBQU0sR0FBTixNQUFNLENBQXlCO1FBQy9CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFacEQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNDLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1QixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQVU5QixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMs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LFlBQVk7Z0JBTm5CLHdCQUF3Qjs7SUFvSTFCLHNDQUFDO0NBQUEsQUE1SEQsSUE0SEM7U0F4SFksK0JBQStCOzs7Ozs7SUFDMUMsd0RBQTJDOztJQUUzQywrREFBNEI7O0lBQzVCLG9EQUFzQjs7SUFDdEIsMkRBQWdDOztJQUVoQyxxREFBMEM7O0lBQzFDLG9EQUEwQzs7Ozs7SUFHeEMsaURBQXVDOzs7OztJQUN2Qyx1REFBa0M7Ozs7O0lBQ2xDLG1FQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFub255bW91c0NvbnNlbnQsXG4gIEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gIENvbnNlbnRUZW1wbGF0ZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RhbC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFub255bW91cy1jb25zZW50LWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbm9ueW1vdXMtY29uc2VudC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50RGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgc2hvd0xlZ2FsRGVzY3JpcHRpb24gPSB0cnVlO1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIHJlcXVpcmVkQ29uc2VudHM6IHN0cmluZ1tdID0gW107XG5cbiAgdGVtcGxhdGVzJDogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT47XG4gIGNvbnNlbnRzJDogT2JzZXJ2YWJsZTxBbm9ueW1vdXNDb25zZW50W10+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2VcbiAgKSB7XG4gICAgaWYgKEJvb2xlYW4odGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMpKSB7XG4gICAgICB0aGlzLnNob3dMZWdhbERlc2NyaXB0aW9uID0gdGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMuc2hvd0xlZ2FsRGVzY3JpcHRpb25JbkRpYWxvZztcbiAgICAgIGlmIChCb29sZWFuKHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMpKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZWRDb25zZW50cyA9IHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZXMkID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2V0VGVtcGxhdGVzKCk7XG4gICAgdGhpcy5jb25zZW50cyQgPSB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5nZXRDb25zZW50cygpO1xuICB9XG5cbiAgY2xvc2VNb2RhbChyZWFzb24/OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsU2VydmljZS5jbG9zZUFjdGl2ZU1vZGFsKHJlYXNvbik7XG4gIH1cblxuICByZWplY3RBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMudGVtcGxhdGVzJCwgdGhpcy5jb25zZW50cyRdKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgdGFwKChbdGVtcGxhdGVzLCBjb25zZW50c10pID0+XG4gICAgICAgICAgICB0ZW1wbGF0ZXMuZm9yRWFjaCh0ZW1wbGF0ZSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbnNlbnQgPSB0aGlzLmdldENvcnJlc3BvbmRpbmdDb25zZW50KHRlbXBsYXRlLCBjb25zZW50cyk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUmVxdWlyZWRDb25zZW50KHRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLndpdGhkcmF3Q29uc2VudCh0ZW1wbGF0ZS5pZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICk7XG4gICAgdGhpcy5jbG9zZU1vZGFsKCdyZWplY3RBbGwnKTtcbiAgfVxuXG4gIGFsbG93QWxsKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICBjb21iaW5lTGF0ZXN0KFt0aGlzLnRlbXBsYXRlcyQsIHRoaXMuY29uc2VudHMkXSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgIHRhcCgoW3RlbXBsYXRlcywgY29uc2VudHNdKSA9PlxuICAgICAgICAgICAgdGVtcGxhdGVzLmZvckVhY2godGVtcGxhdGUgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb25zZW50ID0gdGhpcy5nZXRDb3JyZXNwb25kaW5nQ29uc2VudCh0ZW1wbGF0ZSwgY29uc2VudHMpO1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgY29uc2VudC5jb25zZW50U3RhdGUgPT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50KVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1JlcXVpcmVkQ29uc2VudCh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5naXZlQ29uc2VudCh0ZW1wbGF0ZS5pZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICk7XG4gICAgdGhpcy5jbG9zZU1vZGFsKCdhbGxvd0FsbCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1JlcXVpcmVkQ29uc2VudCh0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIEJvb2xlYW4odGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMpICYmXG4gICAgICBCb29sZWFuKHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMpICYmXG4gICAgICB0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKHRlbXBsYXRlLmlkKVxuICAgICk7XG4gIH1cblxuICBvbkNvbnNlbnRDaGFuZ2Uoe1xuICAgIGdpdmVuLFxuICAgIHRlbXBsYXRlLFxuICB9OiB7XG4gICAgZ2l2ZW46IGJvb2xlYW47XG4gICAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcbiAgfSk6IHZvaWQge1xuICAgIGlmIChnaXZlbikge1xuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2l2ZUNvbnNlbnQodGVtcGxhdGUuaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS53aXRoZHJhd0NvbnNlbnQodGVtcGxhdGUuaWQpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvcnJlc3BvbmRpbmdDb25zZW50KFxuICAgIHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGUsXG4gICAgY29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSA9IFtdXG4gICk6IEFub255bW91c0NvbnNlbnQge1xuICAgIGZvciAoY29uc3QgY29uc2VudCBvZiBjb25zZW50cykge1xuICAgICAgaWYgKHRlbXBsYXRlLmlkID09PSBjb25zZW50LnRlbXBsYXRlQ29kZSkge1xuICAgICAgICByZXR1cm4gY29uc2VudDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19