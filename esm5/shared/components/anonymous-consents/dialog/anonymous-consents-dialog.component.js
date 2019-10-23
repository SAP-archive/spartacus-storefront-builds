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
var AnonymousConsentsDialogComponent = /** @class */ (function () {
    function AnonymousConsentsDialogComponent(config, modalService, anonymousConsentsService) {
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
    AnonymousConsentsDialogComponent.prototype.ngOnInit = /**
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
    AnonymousConsentsDialogComponent.prototype.closeModal = /**
     * @param {?=} reason
     * @return {?}
     */
    function (reason) {
        this.modalService.closeActiveModal(reason);
    };
    /**
     * @return {?}
     */
    AnonymousConsentsDialogComponent.prototype.rejectAll = /**
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
    AnonymousConsentsDialogComponent.prototype.allowAll = /**
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
    AnonymousConsentsDialogComponent.prototype.isRequiredConsent = /**
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
    AnonymousConsentsDialogComponent.prototype.onConsentChange = /**
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
    AnonymousConsentsDialogComponent.prototype.getCorrespondingConsent = /**
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
    AnonymousConsentsDialogComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.unsubscribe();
    };
    AnonymousConsentsDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-anonymous-consents-dialog',
                    template: "<div #dialog>\n  <!-- Modal Header -->\n  <div class=\"cx-dialog-header modal-header\">\n    <div class=\"cx-dialog-title modal-title\">\n      {{ 'anonymousConsents.dialog.title' | cxTranslate }}\n    </div>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"closeModal('Cross click')\"\n    >\n      <span aria-hidden=\"true\">\n        <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n      </span>\n    </button>\n  </div>\n  <!-- Separator -->\n  <div\n    class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n  ></div>\n  <div class=\"cx-dialog-description\" *ngIf=\"showLegalDescription\">\n    {{ 'anonymousConsents.dialog.legalDescription' | cxTranslate }}\n    <div\n      class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n    ></div>\n  </div>\n  <!-- Actions -->\n  <div class=\"cx-dialog-buttons\">\n    <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"rejectAll()\">{{\n      'anonymousConsents.dialog.clearAll' | cxTranslate\n    }}</a>\n    <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"allowAll()\">{{\n      'anonymousConsents.dialog.selectAll' | cxTranslate\n    }}</a>\n  </div>\n  <!-- Modal Body -->\n  <div\n    class=\"cx-dialog-body modal-body\"\n    *ngIf=\"templates$ | async as templates\"\n  >\n    <div *ngIf=\"consents$ | async as consents\">\n      <div\n        class=\"cx-dialog-row col-sm-12 col-md-6\"\n        *ngFor=\"let template of templates\"\n      >\n        <cx-consent-management-form\n          [consentTemplate]=\"template\"\n          [requiredConsents]=\"requiredConsents\"\n          [consent]=\"getCorrespondingConsent(template, consents)\"\n          [isAnonymousConsentsEnabled]=\"true\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n      </div>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    AnonymousConsentsDialogComponent.ctorParameters = function () { return [
        { type: AnonymousConsentsConfig },
        { type: ModalService },
        { type: AnonymousConsentsService }
    ]; };
    return AnonymousConsentsDialogComponent;
}());
export { AnonymousConsentsDialogComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsDialogComponent.prototype.subscriptions;
    /** @type {?} */
    AnonymousConsentsDialogComponent.prototype.showLegalDescription;
    /** @type {?} */
    AnonymousConsentsDialogComponent.prototype.iconTypes;
    /** @type {?} */
    AnonymousConsentsDialogComponent.prototype.requiredConsents;
    /** @type {?} */
    AnonymousConsentsDialogComponent.prototype.templates$;
    /** @type {?} */
    AnonymousConsentsDialogComponent.prototype.consents$;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsDialogComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsDialogComponent.prototype.modalService;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsDialogComponent.prototype.anonymousConsentsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9hbm9ueW1vdXMtY29uc2VudHMvZGlhbG9nL2Fub255bW91cy1jb25zZW50cy1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUVMLHVCQUF1QixFQUN2Qix3QkFBd0IsR0FFekIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFjRSwwQ0FDVSxNQUErQixFQUMvQixZQUEwQixFQUMxQix3QkFBa0Q7UUFGbEQsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7UUFDL0IsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQVpwRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0MseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQzVCLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIscUJBQWdCLEdBQWEsRUFBRSxDQUFDO1FBVTlCLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FB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aEIsWUFBWTtnQkFObkIsd0JBQXdCOztJQW9JMUIsdUNBQUM7Q0FBQSxBQTVIRCxJQTRIQztTQXhIWSxnQ0FBZ0M7Ozs7OztJQUMzQyx5REFBMkM7O0lBRTNDLGdFQUE0Qjs7SUFDNUIscURBQXNCOztJQUN0Qiw0REFBZ0M7O0lBRWhDLHNEQUEwQzs7SUFDMUMscURBQTBDOzs7OztJQUd4QyxrREFBdUM7Ozs7O0lBQ3ZDLHdEQUFrQzs7Ozs7SUFDbEMsb0VBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudCxcbiAgQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gIEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgQ29uc2VudFRlbXBsYXRlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGFsL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYW5vbnltb3VzLWNvbnNlbnRzLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbm9ueW1vdXMtY29uc2VudHMtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudHNEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBzaG93TGVnYWxEZXNjcmlwdGlvbiA9IHRydWU7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcbiAgcmVxdWlyZWRDb25zZW50czogc3RyaW5nW10gPSBbXTtcblxuICB0ZW1wbGF0ZXMkOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPjtcbiAgY29uc2VudHMkOiBPYnNlcnZhYmxlPEFub255bW91c0NvbnNlbnRbXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZVxuICApIHtcbiAgICBpZiAoQm9vbGVhbih0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cykpIHtcbiAgICAgIHRoaXMuc2hvd0xlZ2FsRGVzY3JpcHRpb24gPSB0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5zaG93TGVnYWxEZXNjcmlwdGlvbkluRGlhbG9nO1xuICAgICAgaWYgKEJvb2xlYW4odGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cykpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlZENvbnNlbnRzID0gdGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlcyQgPSB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5nZXRUZW1wbGF0ZXMoKTtcbiAgICB0aGlzLmNvbnNlbnRzJCA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdldENvbnNlbnRzKCk7XG4gIH1cblxuICBjbG9zZU1vZGFsKHJlYXNvbj86IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlQWN0aXZlTW9kYWwocmVhc29uKTtcbiAgfVxuXG4gIHJlamVjdEFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgY29tYmluZUxhdGVzdChbdGhpcy50ZW1wbGF0ZXMkLCB0aGlzLmNvbnNlbnRzJF0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgICB0YXAoKFt0ZW1wbGF0ZXMsIGNvbnNlbnRzXSkgPT5cbiAgICAgICAgICAgIHRlbXBsYXRlcy5mb3JFYWNoKHRlbXBsYXRlID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY29uc2VudCA9IHRoaXMuZ2V0Q29ycmVzcG9uZGluZ0NvbnNlbnQodGVtcGxhdGUsIGNvbnNlbnRzKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQ29uc2VudEdpdmVuKGNvbnNlbnQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSZXF1aXJlZENvbnNlbnQodGVtcGxhdGUpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2Uud2l0aGRyYXdDb25zZW50KHRlbXBsYXRlLmlkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgpXG4gICAgKTtcbiAgICB0aGlzLmNsb3NlTW9kYWwoJ3JlamVjdEFsbCcpO1xuICB9XG5cbiAgYWxsb3dBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMudGVtcGxhdGVzJCwgdGhpcy5jb25zZW50cyRdKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgdGFwKChbdGVtcGxhdGVzLCBjb25zZW50c10pID0+XG4gICAgICAgICAgICB0ZW1wbGF0ZXMuZm9yRWFjaCh0ZW1wbGF0ZSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbnNlbnQgPSB0aGlzLmdldENvcnJlc3BvbmRpbmdDb25zZW50KHRlbXBsYXRlLCBjb25zZW50cyk7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBjb25zZW50LmNvbnNlbnRTdGF0ZSA9PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUmVxdWlyZWRDb25zZW50KHRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdpdmVDb25zZW50KHRlbXBsYXRlLmlkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgpXG4gICAgKTtcbiAgICB0aGlzLmNsb3NlTW9kYWwoJ2FsbG93QWxsJyk7XG4gIH1cblxuICBwcml2YXRlIGlzUmVxdWlyZWRDb25zZW50KHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgQm9vbGVhbih0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgIEJvb2xlYW4odGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cykgJiZcbiAgICAgIHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXModGVtcGxhdGUuaWQpXG4gICAgKTtcbiAgfVxuXG4gIG9uQ29uc2VudENoYW5nZSh7XG4gICAgZ2l2ZW4sXG4gICAgdGVtcGxhdGUsXG4gIH06IHtcbiAgICBnaXZlbjogYm9vbGVhbjtcbiAgICB0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuICB9KTogdm9pZCB7XG4gICAgaWYgKGdpdmVuKSB7XG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5naXZlQ29uc2VudCh0ZW1wbGF0ZS5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLndpdGhkcmF3Q29uc2VudCh0ZW1wbGF0ZS5pZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29ycmVzcG9uZGluZ0NvbnNlbnQoXG4gICAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZSxcbiAgICBjb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdID0gW11cbiAgKTogQW5vbnltb3VzQ29uc2VudCB7XG4gICAgZm9yIChjb25zdCBjb25zZW50IG9mIGNvbnNlbnRzKSB7XG4gICAgICBpZiAodGVtcGxhdGUuaWQgPT09IGNvbnNlbnQudGVtcGxhdGVDb2RlKSB7XG4gICAgICAgIHJldHVybiBjb25zZW50O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=