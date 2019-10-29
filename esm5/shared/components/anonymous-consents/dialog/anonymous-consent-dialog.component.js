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
                    template: "<div #dialog>\n  <!-- Modal Header -->\n  <div class=\"cx-dialog-header modal-header\">\n    <div class=\"cx-dialog-title modal-title\">\n      {{ 'anonymousConsents.dialog.title' | cxTranslate }}\n    </div>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"closeModal('Cross click')\"\n    >\n      <span aria-hidden=\"true\">\n        <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n      </span>\n    </button>\n  </div>\n  <!-- Separator -->\n  <div\n    class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n  ></div>\n  <div class=\"cx-dialog-description\" *ngIf=\"showLegalDescription\">\n    {{ 'anonymousConsents.dialog.legalDescription' | cxTranslate }}\n    <div\n      class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n    ></div>\n  </div>\n  <!-- Actions -->\n  <div class=\"cx-dialog-buttons\">\n    <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"rejectAll()\">{{\n      'anonymousConsents.dialog.clearAll' | cxTranslate\n    }}</a>\n    <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"allowAll()\">{{\n      'anonymousConsents.dialog.selectAll' | cxTranslate\n    }}</a>\n  </div>\n  <!-- Modal Body -->\n  <div\n    class=\"cx-dialog-body modal-body\"\n    *ngIf=\"templates$ | async as templates\"\n  >\n    <div *ngIf=\"consents$ | async as consents\">\n      <div\n        class=\"cx-dialog-row col-sm-12 col-md-6\"\n        *ngFor=\"let template of templates\"\n      >\n        <cx-consent-management-form\n          [consentTemplate]=\"template\"\n          [requiredConsents]=\"requiredConsents\"\n          [consent]=\"getCorrespondingConsent(template, consents)\"\n          [isAnonymousConsentsEnabled]=\"true\"\n          [isLevel13]=\"isLevel13\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n      </div>\n    </div>\n  </div>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Fub255bW91cy1jb25zZW50cy9kaWFsb2cvYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsd0JBQXdCLEVBRXhCLGNBQWMsR0FDZixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRDtJQWlCRSx5Q0FDVSxNQUErQixFQUMvQixZQUEwQixFQUMxQix3QkFBa0Q7UUFGbEQsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7UUFDL0IsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQWZwRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0MseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQzVCLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIscUJBQWdCLEdBQWEsRUFBRSxDQUFDOztRQU1oQyxjQUFTLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFPN0MsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLDRCQUE0QixDQUFDO1lBQ3ZGLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDM0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUM7YUFDeEU7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCxrREFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvRCxDQUFDOzs7OztJQUVELG9EQUFVOzs7O0lBQVYsVUFBVyxNQUFZO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELG1EQUFTOzs7SUFBVDtRQUFBLGlCQXNCQztRQXJCQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FDcEIsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDN0MsSUFBSSxDQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxvQkFBb0IsRUFBRSxFQUN0QixHQUFHOzs7O1FBQUMsVUFBQyxFQUFxQjtnQkFBckIsMEJBQXFCLEVBQXBCLGlCQUFTLEVBQUUsZ0JBQVE7WUFDdkIsT0FBQSxTQUFTLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsUUFBUTs7b0JBQ2xCLE9BQU8sR0FBRyxLQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDaEUsSUFBSSxLQUFJLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUN6RCxJQUFJLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDcEMsT0FBTztxQkFDUjtvQkFFRCxLQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDNUQ7WUFDSCxDQUFDLEVBQUM7UUFURixDQVNFLEVBQ0gsQ0FDRjthQUNBLFNBQVMsRUFBRSxDQUNmLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxrREFBUTs7O0lBQVI7UUFBQSxpQkF5QkM7UUF4QkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzdDLElBQUksQ0FDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1Asb0JBQW9CLEVBQUUsRUFDdEIsR0FBRzs7OztRQUFDLFVBQUMsRUFBcUI7Z0JBQXJCLDBCQUFxQixFQUFwQixpQkFBUyxFQUFFLGdCQUFRO1lBQ3ZCLE9BQUEsU0FBUyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLFFBQVE7O29CQUNsQixPQUFPLEdBQUcsS0FBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ2hFLElBQ0UsT0FBTyxDQUFDLFlBQVksSUFBSSxJQUFJO29CQUM1QixLQUFJLENBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQ3pEO29CQUNBLElBQUksS0FBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUNwQyxPQUFPO3FCQUNSO29CQUVELEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUN4RDtZQUNILENBQUMsRUFBQztRQVpGLENBWUUsRUFDSCxDQUNGO2FBQ0EsU0FBUyxFQUFFLENBQ2YsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRU8sMkRBQWlCOzs7OztJQUF6QixVQUEwQixRQUF5QjtRQUNqRCxPQUFPLENBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7WUFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUM7WUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUNyRSxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCx5REFBZTs7OztJQUFmLFVBQWdCLEVBTWY7WUFMQyxnQkFBSyxFQUNMLHNCQUFRO1FBS1IsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN4RDthQUFNO1lBQ0wsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOzs7Ozs7SUFFRCxpRUFBdUI7Ozs7O0lBQXZCLFVBQ0UsUUFBeUIsRUFDekIsUUFBaUM7O1FBQWpDLHlCQUFBLEVBQUEsYUFBaUM7O1lBRWpDLEtBQXNCLElBQUEsYUFBQSxpQkFBQSxRQUFRLENBQUEsa0NBQUEsd0RBQUU7Z0JBQTNCLElBQU0sT0FBTyxxQkFBQTtnQkFDaEIsSUFBSSxRQUFRLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxZQUFZLEVBQUU7b0JBQ3hDLE9BQU8sT0FBTyxDQUFDO2lCQUNoQjthQUNGOzs7Ozs7Ozs7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxxREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7O2dCQTlIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsbTZEQUF3RDtpQkFDekQ7Ozs7Z0JBYkMsdUJBQXVCO2dCQVFoQixZQUFZO2dCQVBuQix3QkFBd0I7O0lBd0kxQixzQ0FBQztDQUFBLEFBL0hELElBK0hDO1NBM0hZLCtCQUErQjs7Ozs7O0lBQzFDLHdEQUEyQzs7SUFFM0MsK0RBQTRCOztJQUM1QixvREFBc0I7O0lBQ3RCLDJEQUFnQzs7SUFFaEMscURBQTBDOztJQUMxQyxvREFBMEM7O0lBRzFDLG9EQUErQzs7Ozs7SUFHN0MsaURBQXVDOzs7OztJQUN2Qyx1REFBa0M7Ozs7O0lBQ2xDLG1FQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFub255bW91c0NvbnNlbnQsXG4gIEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gIENvbnNlbnRUZW1wbGF0ZSxcbiAgaXNGZWF0dXJlTGV2ZWwsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kYWwvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hbm9ueW1vdXMtY29uc2VudC1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHNob3dMZWdhbERlc2NyaXB0aW9uID0gdHJ1ZTtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuICByZXF1aXJlZENvbnNlbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHRlbXBsYXRlcyQ6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+O1xuICBjb25zZW50cyQ6IE9ic2VydmFibGU8QW5vbnltb3VzQ29uc2VudFtdPjtcblxuICAvLyBUT0RPKGlzc3VlOjQ5ODkpIEFub255bW91cyBjb25zZW50cyAtIHJlbW92ZVxuICBpc0xldmVsMTMgPSBpc0ZlYXR1cmVMZXZlbCh0aGlzLmNvbmZpZywgJzEuMycpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2VcbiAgKSB7XG4gICAgaWYgKEJvb2xlYW4odGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMpKSB7XG4gICAgICB0aGlzLnNob3dMZWdhbERlc2NyaXB0aW9uID0gdGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMuc2hvd0xlZ2FsRGVzY3JpcHRpb25JbkRpYWxvZztcbiAgICAgIGlmIChCb29sZWFuKHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMpKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZWRDb25zZW50cyA9IHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZXMkID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2V0VGVtcGxhdGVzKCk7XG4gICAgdGhpcy5jb25zZW50cyQgPSB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5nZXRDb25zZW50cygpO1xuICB9XG5cbiAgY2xvc2VNb2RhbChyZWFzb24/OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsU2VydmljZS5jbG9zZUFjdGl2ZU1vZGFsKHJlYXNvbik7XG4gIH1cblxuICByZWplY3RBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMudGVtcGxhdGVzJCwgdGhpcy5jb25zZW50cyRdKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgdGFwKChbdGVtcGxhdGVzLCBjb25zZW50c10pID0+XG4gICAgICAgICAgICB0ZW1wbGF0ZXMuZm9yRWFjaCh0ZW1wbGF0ZSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbnNlbnQgPSB0aGlzLmdldENvcnJlc3BvbmRpbmdDb25zZW50KHRlbXBsYXRlLCBjb25zZW50cyk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUmVxdWlyZWRDb25zZW50KHRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLndpdGhkcmF3Q29uc2VudCh0ZW1wbGF0ZS5pZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICk7XG4gICAgdGhpcy5jbG9zZU1vZGFsKCdyZWplY3RBbGwnKTtcbiAgfVxuXG4gIGFsbG93QWxsKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICBjb21iaW5lTGF0ZXN0KFt0aGlzLnRlbXBsYXRlcyQsIHRoaXMuY29uc2VudHMkXSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgIHRhcCgoW3RlbXBsYXRlcywgY29uc2VudHNdKSA9PlxuICAgICAgICAgICAgdGVtcGxhdGVzLmZvckVhY2godGVtcGxhdGUgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb25zZW50ID0gdGhpcy5nZXRDb3JyZXNwb25kaW5nQ29uc2VudCh0ZW1wbGF0ZSwgY29uc2VudHMpO1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgY29uc2VudC5jb25zZW50U3RhdGUgPT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50KVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1JlcXVpcmVkQ29uc2VudCh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5naXZlQ29uc2VudCh0ZW1wbGF0ZS5pZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICk7XG4gICAgdGhpcy5jbG9zZU1vZGFsKCdhbGxvd0FsbCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1JlcXVpcmVkQ29uc2VudCh0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIEJvb2xlYW4odGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMpICYmXG4gICAgICBCb29sZWFuKHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMpICYmXG4gICAgICB0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKHRlbXBsYXRlLmlkKVxuICAgICk7XG4gIH1cblxuICBvbkNvbnNlbnRDaGFuZ2Uoe1xuICAgIGdpdmVuLFxuICAgIHRlbXBsYXRlLFxuICB9OiB7XG4gICAgZ2l2ZW46IGJvb2xlYW47XG4gICAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcbiAgfSk6IHZvaWQge1xuICAgIGlmIChnaXZlbikge1xuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2l2ZUNvbnNlbnQodGVtcGxhdGUuaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS53aXRoZHJhd0NvbnNlbnQodGVtcGxhdGUuaWQpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvcnJlc3BvbmRpbmdDb25zZW50KFxuICAgIHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGUsXG4gICAgY29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSA9IFtdXG4gICk6IEFub255bW91c0NvbnNlbnQge1xuICAgIGZvciAoY29uc3QgY29uc2VudCBvZiBjb25zZW50cykge1xuICAgICAgaWYgKHRlbXBsYXRlLmlkID09PSBjb25zZW50LnRlbXBsYXRlQ29kZSkge1xuICAgICAgICByZXR1cm4gY29uc2VudDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19