/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AnonymousConsentsConfig, AnonymousConsentsService, isFeatureLevel, } from '@spartacus/core';
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
        // TODO(issue:4989) Anonymous consents - remove
        this.isLevel13 = isFeatureLevel(this.config, '1.3');
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
        this.loading$ = this.anonymousConsentsService.getLoadTemplatesLoading();
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
                if ((consent && consent.consentState == null) ||
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
                    template: "<div #dialog>\n  <div *ngIf=\"loading$ | async; else dialogBody\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <!-- Modal Header -->\n  <ng-template #dialogBody>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'anonymousConsents.dialog.title' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"closeModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Separator -->\n    <div\n      class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n    ></div>\n    <div class=\"cx-dialog-description\" *ngIf=\"showLegalDescription\">\n      {{ 'anonymousConsents.dialog.legalDescription' | cxTranslate }}\n      <div\n        class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n      ></div>\n    </div>\n    <!-- Actions -->\n    <div class=\"cx-dialog-buttons\">\n      <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"rejectAll()\">{{\n        'anonymousConsents.dialog.clearAll' | cxTranslate\n      }}</a>\n      <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"allowAll()\">{{\n        'anonymousConsents.dialog.selectAll' | cxTranslate\n      }}</a>\n    </div>\n    <!-- Modal Body -->\n    <div\n      class=\"cx-dialog-body modal-body\"\n      *ngIf=\"templates$ | async as templates\"\n    >\n      <div *ngIf=\"consents$ | async as consents\">\n        <div\n          class=\"cx-dialog-row col-sm-12 col-md-6\"\n          *ngFor=\"let template of templates\"\n        >\n          <cx-consent-management-form\n            [consentTemplate]=\"template\"\n            [requiredConsents]=\"requiredConsents\"\n            [consent]=\"getCorrespondingConsent(template, consents)\"\n            [isAnonymousConsentsEnabled]=\"true\"\n            [isLevel13]=\"isLevel13\"\n            (consentChanged)=\"onConsentChange($event)\"\n          ></cx-consent-management-form>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
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
    AnonymousConsentDialogComponent.prototype.loading$;
    /** @type {?} */
    AnonymousConsentDialogComponent.prototype.templates$;
    /** @type {?} */
    AnonymousConsentDialogComponent.prototype.consents$;
    /** @type {?} */
    AnonymousConsentDialogComponent.prototype.isLevel13;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Fub255bW91cy1jb25zZW50cy9kaWFsb2cvYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsd0JBQXdCLEVBRXhCLGNBQWMsR0FDZixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRDtJQWtCRSx5Q0FDVSxNQUErQixFQUMvQixZQUEwQixFQUMxQix3QkFBa0Q7UUFGbEQsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7UUFDL0IsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQWhCcEQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNDLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1QixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLHFCQUFnQixHQUFhLEVBQUUsQ0FBQzs7UUFPaEMsY0FBUyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBTzdDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJB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Qzs7OztJQUVELHFEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Z0JBaElGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2Qyw4c0VBQXdEO2lCQUN6RDs7OztnQkFiQyx1QkFBdUI7Z0JBUWhCLFlBQVk7Z0JBUG5CLHdCQUF3Qjs7SUEwSTFCLHNDQUFDO0NBQUEsQUFqSUQsSUFpSUM7U0E3SFksK0JBQStCOzs7Ozs7SUFDMUMsd0RBQTJDOztJQUUzQywrREFBNEI7O0lBQzVCLG9EQUFzQjs7SUFDdEIsMkRBQWdDOztJQUVoQyxtREFBOEI7O0lBQzlCLHFEQUEwQzs7SUFDMUMsb0RBQTBDOztJQUcxQyxvREFBK0M7Ozs7O0lBRzdDLGlEQUF1Qzs7Ozs7SUFDdkMsdURBQWtDOzs7OztJQUNsQyxtRUFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50LFxuICBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICBDb25zZW50VGVtcGxhdGUsXG4gIGlzRmVhdHVyZUxldmVsLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGFsL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fub255bW91cy1jb25zZW50LWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBzaG93TGVnYWxEZXNjcmlwdGlvbiA9IHRydWU7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcbiAgcmVxdWlyZWRDb25zZW50czogc3RyaW5nW10gPSBbXTtcblxuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgdGVtcGxhdGVzJDogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT47XG4gIGNvbnNlbnRzJDogT2JzZXJ2YWJsZTxBbm9ueW1vdXNDb25zZW50W10+O1xuXG4gIC8vIFRPRE8oaXNzdWU6NDk4OSkgQW5vbnltb3VzIGNvbnNlbnRzIC0gcmVtb3ZlXG4gIGlzTGV2ZWwxMyA9IGlzRmVhdHVyZUxldmVsKHRoaXMuY29uZmlnLCAnMS4zJyk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZVxuICApIHtcbiAgICBpZiAoQm9vbGVhbih0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cykpIHtcbiAgICAgIHRoaXMuc2hvd0xlZ2FsRGVzY3JpcHRpb24gPSB0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5zaG93TGVnYWxEZXNjcmlwdGlvbkluRGlhbG9nO1xuICAgICAgaWYgKEJvb2xlYW4odGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cykpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlZENvbnNlbnRzID0gdGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlcyQgPSB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5nZXRUZW1wbGF0ZXMoKTtcbiAgICB0aGlzLmNvbnNlbnRzJCA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdldENvbnNlbnRzKCk7XG4gICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdldExvYWRUZW1wbGF0ZXNMb2FkaW5nKCk7XG4gIH1cblxuICBjbG9zZU1vZGFsKHJlYXNvbj86IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlQWN0aXZlTW9kYWwocmVhc29uKTtcbiAgfVxuXG4gIHJlamVjdEFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgY29tYmluZUxhdGVzdChbdGhpcy50ZW1wbGF0ZXMkLCB0aGlzLmNvbnNlbnRzJF0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgICB0YXAoKFt0ZW1wbGF0ZXMsIGNvbnNlbnRzXSkgPT5cbiAgICAgICAgICAgIHRlbXBsYXRlcy5mb3JFYWNoKHRlbXBsYXRlID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY29uc2VudCA9IHRoaXMuZ2V0Q29ycmVzcG9uZGluZ0NvbnNlbnQodGVtcGxhdGUsIGNvbnNlbnRzKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQ29uc2VudEdpdmVuKGNvbnNlbnQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSZXF1aXJlZENvbnNlbnQodGVtcGxhdGUpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2Uud2l0aGRyYXdDb25zZW50KHRlbXBsYXRlLmlkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgpXG4gICAgKTtcbiAgICB0aGlzLmNsb3NlTW9kYWwoJ3JlamVjdEFsbCcpO1xuICB9XG5cbiAgYWxsb3dBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMudGVtcGxhdGVzJCwgdGhpcy5jb25zZW50cyRdKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgdGFwKChbdGVtcGxhdGVzLCBjb25zZW50c10pID0+XG4gICAgICAgICAgICB0ZW1wbGF0ZXMuZm9yRWFjaCh0ZW1wbGF0ZSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbnNlbnQgPSB0aGlzLmdldENvcnJlc3BvbmRpbmdDb25zZW50KHRlbXBsYXRlLCBjb25zZW50cyk7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoY29uc2VudCAmJiBjb25zZW50LmNvbnNlbnRTdGF0ZSA9PSBudWxsKSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50KVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1JlcXVpcmVkQ29uc2VudCh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5naXZlQ29uc2VudCh0ZW1wbGF0ZS5pZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICk7XG4gICAgdGhpcy5jbG9zZU1vZGFsKCdhbGxvd0FsbCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1JlcXVpcmVkQ29uc2VudCh0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIEJvb2xlYW4odGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMpICYmXG4gICAgICBCb29sZWFuKHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMpICYmXG4gICAgICB0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKHRlbXBsYXRlLmlkKVxuICAgICk7XG4gIH1cblxuICBvbkNvbnNlbnRDaGFuZ2Uoe1xuICAgIGdpdmVuLFxuICAgIHRlbXBsYXRlLFxuICB9OiB7XG4gICAgZ2l2ZW46IGJvb2xlYW47XG4gICAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcbiAgfSk6IHZvaWQge1xuICAgIGlmIChnaXZlbikge1xuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2l2ZUNvbnNlbnQodGVtcGxhdGUuaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS53aXRoZHJhd0NvbnNlbnQodGVtcGxhdGUuaWQpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvcnJlc3BvbmRpbmdDb25zZW50KFxuICAgIHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGUsXG4gICAgY29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSA9IFtdXG4gICk6IEFub255bW91c0NvbnNlbnQge1xuICAgIGZvciAoY29uc3QgY29uc2VudCBvZiBjb25zZW50cykge1xuICAgICAgaWYgKHRlbXBsYXRlLmlkID09PSBjb25zZW50LnRlbXBsYXRlQ29kZSkge1xuICAgICAgICByZXR1cm4gY29uc2VudDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19