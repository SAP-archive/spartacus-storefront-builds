/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AnonymousConsentsConfig, AnonymousConsentsService, isFeatureLevel, } from '@spartacus/core';
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
    ngOnInit() {
        this.templates$ = this.anonymousConsentsService.getTemplates();
        this.consents$ = this.anonymousConsentsService.getConsents();
        this.loading$ = this.anonymousConsentsService.getLoadTemplatesLoading();
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
                template: "<div #dialog>\n  <div *ngIf=\"loading$ | async; else dialogBody\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <!-- Modal Header -->\n  <ng-template #dialogBody>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'anonymousConsents.dialog.title' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"closeModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Separator -->\n    <div\n      class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n    ></div>\n    <div class=\"cx-dialog-description\" *ngIf=\"showLegalDescription\">\n      {{ 'anonymousConsents.dialog.legalDescription' | cxTranslate }}\n      <div\n        class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n      ></div>\n    </div>\n    <!-- Actions -->\n    <div class=\"cx-dialog-buttons\">\n      <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"rejectAll()\">{{\n        'anonymousConsents.dialog.clearAll' | cxTranslate\n      }}</a>\n      <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"allowAll()\">{{\n        'anonymousConsents.dialog.selectAll' | cxTranslate\n      }}</a>\n    </div>\n    <!-- Modal Body -->\n    <div\n      class=\"cx-dialog-body modal-body\"\n      *ngIf=\"templates$ | async as templates\"\n    >\n      <div *ngIf=\"consents$ | async as consents\">\n        <div\n          class=\"cx-dialog-row col-sm-12 col-md-6\"\n          *ngFor=\"let template of templates\"\n        >\n          <cx-consent-management-form\n            [consentTemplate]=\"template\"\n            [requiredConsents]=\"requiredConsents\"\n            [consent]=\"getCorrespondingConsent(template, consents)\"\n            [isAnonymousConsentsEnabled]=\"true\"\n            [isLevel13]=\"isLevel13\"\n            (consentChanged)=\"onConsentChange($event)\"\n          ></cx-consent-management-form>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Fub255bW91cy1jb25zZW50cy9kaWFsb2cvYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUVMLHVCQUF1QixFQUN2Qix3QkFBd0IsRUFFeEIsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTWpELE1BQU0sT0FBTywrQkFBK0I7Ozs7OztJQWMxQyxZQUNVLE1BQStCLEVBQy9CLFlBQTBCLEVBQzFCLHdCQUFrRDtRQUZsRCxXQUFNLEdBQU4sTUFBTSxDQUF5QjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBaEJwRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0MseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQzVCLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIscUJBQWdCLEdBQWEsRUFBRSxDQUFDOztRQU9oQyxjQUFTLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFPN0MsSUFBSSxPQUFPLENBQUMsSUFB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Qjs7SUFDNUIsb0RBQXNCOztJQUN0QiwyREFBZ0M7O0lBRWhDLG1EQUE4Qjs7SUFDOUIscURBQTBDOztJQUMxQyxvREFBMEM7O0lBRzFDLG9EQUErQzs7Ozs7SUFHN0MsaURBQXVDOzs7OztJQUN2Qyx1REFBa0M7Ozs7O0lBQ2xDLG1FQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFub255bW91c0NvbnNlbnQsXG4gIEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gIENvbnNlbnRUZW1wbGF0ZSxcbiAgaXNGZWF0dXJlTGV2ZWwsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kYWwvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hbm9ueW1vdXMtY29uc2VudC1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHNob3dMZWdhbERlc2NyaXB0aW9uID0gdHJ1ZTtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuICByZXF1aXJlZENvbnNlbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICB0ZW1wbGF0ZXMkOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPjtcbiAgY29uc2VudHMkOiBPYnNlcnZhYmxlPEFub255bW91c0NvbnNlbnRbXT47XG5cbiAgLy8gVE9ETyhpc3N1ZTo0OTg5KSBBbm9ueW1vdXMgY29uc2VudHMgLSByZW1vdmVcbiAgaXNMZXZlbDEzID0gaXNGZWF0dXJlTGV2ZWwodGhpcy5jb25maWcsICcxLjMnKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlXG4gICkge1xuICAgIGlmIChCb29sZWFuKHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzKSkge1xuICAgICAgdGhpcy5zaG93TGVnYWxEZXNjcmlwdGlvbiA9IHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzLnNob3dMZWdhbERlc2NyaXB0aW9uSW5EaWFsb2c7XG4gICAgICBpZiAoQm9vbGVhbih0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzKSkge1xuICAgICAgICB0aGlzLnJlcXVpcmVkQ29uc2VudHMgPSB0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGVtcGxhdGVzJCA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdldFRlbXBsYXRlcygpO1xuICAgIHRoaXMuY29uc2VudHMkID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2V0Q29uc2VudHMoKTtcbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2V0TG9hZFRlbXBsYXRlc0xvYWRpbmcoKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwocmVhc29uPzogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RhbFNlcnZpY2UuY2xvc2VBY3RpdmVNb2RhbChyZWFzb24pO1xuICB9XG5cbiAgcmVqZWN0QWxsKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICBjb21iaW5lTGF0ZXN0KFt0aGlzLnRlbXBsYXRlcyQsIHRoaXMuY29uc2VudHMkXSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgIHRhcCgoW3RlbXBsYXRlcywgY29uc2VudHNdKSA9PlxuICAgICAgICAgICAgdGVtcGxhdGVzLmZvckVhY2godGVtcGxhdGUgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb25zZW50ID0gdGhpcy5nZXRDb3JyZXNwb25kaW5nQ29uc2VudCh0ZW1wbGF0ZSwgY29uc2VudHMpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuaXNDb25zZW50R2l2ZW4oY29uc2VudCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1JlcXVpcmVkQ29uc2VudCh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS53aXRoZHJhd0NvbnNlbnQodGVtcGxhdGUuaWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKClcbiAgICApO1xuICAgIHRoaXMuY2xvc2VNb2RhbCgncmVqZWN0QWxsJyk7XG4gIH1cblxuICBhbGxvd0FsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgY29tYmluZUxhdGVzdChbdGhpcy50ZW1wbGF0ZXMkLCB0aGlzLmNvbnNlbnRzJF0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgICB0YXAoKFt0ZW1wbGF0ZXMsIGNvbnNlbnRzXSkgPT5cbiAgICAgICAgICAgIHRlbXBsYXRlcy5mb3JFYWNoKHRlbXBsYXRlID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY29uc2VudCA9IHRoaXMuZ2V0Q29ycmVzcG9uZGluZ0NvbnNlbnQodGVtcGxhdGUsIGNvbnNlbnRzKTtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGNvbnNlbnQuY29uc2VudFN0YXRlID09IG51bGwgfHxcbiAgICAgICAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudClcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSZXF1aXJlZENvbnNlbnQodGVtcGxhdGUpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2l2ZUNvbnNlbnQodGVtcGxhdGUuaWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKClcbiAgICApO1xuICAgIHRoaXMuY2xvc2VNb2RhbCgnYWxsb3dBbGwnKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNSZXF1aXJlZENvbnNlbnQodGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBCb29sZWFuKHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzKSAmJlxuICAgICAgQm9vbGVhbih0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzKSAmJlxuICAgICAgdGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyh0ZW1wbGF0ZS5pZClcbiAgICApO1xuICB9XG5cbiAgb25Db25zZW50Q2hhbmdlKHtcbiAgICBnaXZlbixcbiAgICB0ZW1wbGF0ZSxcbiAgfToge1xuICAgIGdpdmVuOiBib29sZWFuO1xuICAgIHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGU7XG4gIH0pOiB2b2lkIHtcbiAgICBpZiAoZ2l2ZW4pIHtcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdpdmVDb25zZW50KHRlbXBsYXRlLmlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2Uud2l0aGRyYXdDb25zZW50KHRlbXBsYXRlLmlkKTtcbiAgICB9XG4gIH1cblxuICBnZXRDb3JyZXNwb25kaW5nQ29uc2VudChcbiAgICB0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlLFxuICAgIGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10gPSBbXVxuICApOiBBbm9ueW1vdXNDb25zZW50IHtcbiAgICBmb3IgKGNvbnN0IGNvbnNlbnQgb2YgY29uc2VudHMpIHtcbiAgICAgIGlmICh0ZW1wbGF0ZS5pZCA9PT0gY29uc2VudC50ZW1wbGF0ZUNvZGUpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==