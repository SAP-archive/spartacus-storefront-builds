/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AnonymousConsentsConfig, AnonymousConsentsService, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { distinctUntilChanged, take, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/index';
import { ModalService } from '../../modal/index';
export class AnonymousConsentDialogComponent {
    /**
     * @param {?} config
     * @param {?} modalService
     * @param {?} anonymousConsentsService
     */
    constructor(config, modalService, anonymousConsentsService) {
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
    ngOnInit() {
        this.templates$ = this.anonymousConsentsService.getTemplates();
        this.consents$ = this.anonymousConsentsService.getConsents();
    }
    /**
     * @param {?=} reason
     * @return {?}
     */
    closeModal(reason) {
        this.modalService.closeActiveModal(reason);
    }
    /**
     * @return {?}
     */
    rejectAll() {
        this.subscriptions.add(combineLatest([this.templates$, this.consents$])
            .pipe(take(1), distinctUntilChanged(), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([templates, consents]) => templates.forEach((/**
         * @param {?} template
         * @return {?}
         */
        template => {
            /** @type {?} */
            const consent = this.getCorrespondingConsent(template, consents);
            if (this.anonymousConsentsService.isConsentGiven(consent)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                this.anonymousConsentsService.withdrawConsent(template.id);
            }
        })))))
            .subscribe());
        this.closeModal('rejectAll');
    }
    /**
     * @return {?}
     */
    allowAll() {
        this.subscriptions.add(combineLatest([this.templates$, this.consents$])
            .pipe(take(1), distinctUntilChanged(), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([templates, consents]) => templates.forEach((/**
         * @param {?} template
         * @return {?}
         */
        template => {
            /** @type {?} */
            const consent = this.getCorrespondingConsent(template, consents);
            if (consent.consentState == null ||
                this.anonymousConsentsService.isConsentWithdrawn(consent)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                this.anonymousConsentsService.giveConsent(template.id);
            }
        })))))
            .subscribe());
        this.closeModal('allowAll');
    }
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    isRequiredConsent(template) {
        return (Boolean(this.config.anonymousConsents) &&
            Boolean(this.config.anonymousConsents.requiredConsents) &&
            this.config.anonymousConsents.requiredConsents.includes(template.id));
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onConsentChange({ given, template, }) {
        if (given) {
            this.anonymousConsentsService.giveConsent(template.id);
        }
        else {
            this.anonymousConsentsService.withdrawConsent(template.id);
        }
    }
    /**
     * @param {?} template
     * @param {?=} consents
     * @return {?}
     */
    getCorrespondingConsent(template, consents = []) {
        for (const consent of consents) {
            if (template.id === consent.templateCode) {
                return consent;
            }
        }
        return null;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
AnonymousConsentDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-anonymous-consent-dialog',
                template: "<div #dialog>\n  <!-- Modal Header -->\n  <div class=\"cx-dialog-header modal-header\">\n    <div class=\"cx-dialog-title modal-title\">\n      {{ 'anonymousConsents.dialog.title' | cxTranslate }}\n    </div>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"closeModal('Cross click')\"\n    >\n      <span aria-hidden=\"true\">\n        <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n      </span>\n    </button>\n  </div>\n  <!-- Separator -->\n  <div\n    class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n  ></div>\n  <div class=\"cx-dialog-description\" *ngIf=\"showLegalDescription\">\n    {{ 'anonymousConsents.dialog.legalDescription' | cxTranslate }}\n    <div\n      class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n    ></div>\n  </div>\n  <!-- Actions -->\n  <div class=\"cx-dialog-buttons\">\n    <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"rejectAll()\">{{\n      'anonymousConsents.dialog.clearAll' | cxTranslate\n    }}</a>\n    <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"allowAll()\">{{\n      'anonymousConsents.dialog.selectAll' | cxTranslate\n    }}</a>\n  </div>\n  <!-- Modal Body -->\n  <div\n    class=\"cx-dialog-body modal-body\"\n    *ngIf=\"templates$ | async as templates\"\n  >\n    <div *ngIf=\"consents$ | async as consents\">\n      <div\n        class=\"cx-dialog-row col-sm-12 col-md-6\"\n        *ngFor=\"let template of templates\"\n      >\n        <cx-consent-management-form\n          [consentTemplate]=\"template\"\n          [requiredConsents]=\"requiredConsents\"\n          [consent]=\"getCorrespondingConsent(template, consents)\"\n          [isAnonymousConsentsEnabled]=\"true\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n      </div>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
AnonymousConsentDialogComponent.ctorParameters = () => [
    { type: AnonymousConsentsConfig },
    { type: ModalService },
    { type: AnonymousConsentsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Fub255bW91cy1jb25zZW50cy9kaWFsb2cvYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUVMLHVCQUF1QixFQUN2Qix3QkFBd0IsR0FFekIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNakQsTUFBTSxPQUFPLCtCQUErQjs7Ozs7O0lBVTFDLFlBQ1UsTUFBK0IsRUFDL0IsWUFBMEIsRUFDMUIsd0JBQWtEO1FBRmxELFdBQU0sR0FBTixNQUFNLENBQXlCO1FBQy9CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFacEQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNDLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1QixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQVU5QixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxN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Q29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudCxcbiAgQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gIEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgQ29uc2VudFRlbXBsYXRlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGFsL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fub255bW91cy1jb25zZW50LWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBzaG93TGVnYWxEZXNjcmlwdGlvbiA9IHRydWU7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcbiAgcmVxdWlyZWRDb25zZW50czogc3RyaW5nW10gPSBbXTtcblxuICB0ZW1wbGF0ZXMkOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPjtcbiAgY29uc2VudHMkOiBPYnNlcnZhYmxlPEFub255bW91c0NvbnNlbnRbXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZVxuICApIHtcbiAgICBpZiAoQm9vbGVhbih0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cykpIHtcbiAgICAgIHRoaXMuc2hvd0xlZ2FsRGVzY3JpcHRpb24gPSB0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5zaG93TGVnYWxEZXNjcmlwdGlvbkluRGlhbG9nO1xuICAgICAgaWYgKEJvb2xlYW4odGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cykpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlZENvbnNlbnRzID0gdGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlcyQgPSB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5nZXRUZW1wbGF0ZXMoKTtcbiAgICB0aGlzLmNvbnNlbnRzJCA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdldENvbnNlbnRzKCk7XG4gIH1cblxuICBjbG9zZU1vZGFsKHJlYXNvbj86IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlQWN0aXZlTW9kYWwocmVhc29uKTtcbiAgfVxuXG4gIHJlamVjdEFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgY29tYmluZUxhdGVzdChbdGhpcy50ZW1wbGF0ZXMkLCB0aGlzLmNvbnNlbnRzJF0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgICB0YXAoKFt0ZW1wbGF0ZXMsIGNvbnNlbnRzXSkgPT5cbiAgICAgICAgICAgIHRlbXBsYXRlcy5mb3JFYWNoKHRlbXBsYXRlID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY29uc2VudCA9IHRoaXMuZ2V0Q29ycmVzcG9uZGluZ0NvbnNlbnQodGVtcGxhdGUsIGNvbnNlbnRzKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQ29uc2VudEdpdmVuKGNvbnNlbnQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSZXF1aXJlZENvbnNlbnQodGVtcGxhdGUpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2Uud2l0aGRyYXdDb25zZW50KHRlbXBsYXRlLmlkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgpXG4gICAgKTtcbiAgICB0aGlzLmNsb3NlTW9kYWwoJ3JlamVjdEFsbCcpO1xuICB9XG5cbiAgYWxsb3dBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMudGVtcGxhdGVzJCwgdGhpcy5jb25zZW50cyRdKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgdGFwKChbdGVtcGxhdGVzLCBjb25zZW50c10pID0+XG4gICAgICAgICAgICB0ZW1wbGF0ZXMuZm9yRWFjaCh0ZW1wbGF0ZSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbnNlbnQgPSB0aGlzLmdldENvcnJlc3BvbmRpbmdDb25zZW50KHRlbXBsYXRlLCBjb25zZW50cyk7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBjb25zZW50LmNvbnNlbnRTdGF0ZSA9PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUmVxdWlyZWRDb25zZW50KHRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdpdmVDb25zZW50KHRlbXBsYXRlLmlkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgpXG4gICAgKTtcbiAgICB0aGlzLmNsb3NlTW9kYWwoJ2FsbG93QWxsJyk7XG4gIH1cblxuICBwcml2YXRlIGlzUmVxdWlyZWRDb25zZW50KHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgQm9vbGVhbih0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgIEJvb2xlYW4odGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cykgJiZcbiAgICAgIHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXModGVtcGxhdGUuaWQpXG4gICAgKTtcbiAgfVxuXG4gIG9uQ29uc2VudENoYW5nZSh7XG4gICAgZ2l2ZW4sXG4gICAgdGVtcGxhdGUsXG4gIH06IHtcbiAgICBnaXZlbjogYm9vbGVhbjtcbiAgICB0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuICB9KTogdm9pZCB7XG4gICAgaWYgKGdpdmVuKSB7XG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5naXZlQ29uc2VudCh0ZW1wbGF0ZS5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLndpdGhkcmF3Q29uc2VudCh0ZW1wbGF0ZS5pZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29ycmVzcG9uZGluZ0NvbnNlbnQoXG4gICAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZSxcbiAgICBjb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdID0gW11cbiAgKTogQW5vbnltb3VzQ29uc2VudCB7XG4gICAgZm9yIChjb25zdCBjb25zZW50IG9mIGNvbnNlbnRzKSB7XG4gICAgICBpZiAodGVtcGxhdGUuaWQgPT09IGNvbnNlbnQudGVtcGxhdGVDb2RlKSB7XG4gICAgICAgIHJldHVybiBjb25zZW50O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=