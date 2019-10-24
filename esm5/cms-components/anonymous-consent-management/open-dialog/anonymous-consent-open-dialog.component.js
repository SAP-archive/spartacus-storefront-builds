/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AnonymousConsentDialogComponent } from '../../../shared/components/anonymous-consents/dialog/anonymous-consent-dialog.component';
import { ModalService } from '../../../shared/index';
var AnonymousConsentOpenDialogComponent = /** @class */ (function () {
    function AnonymousConsentOpenDialogComponent(modalService) {
        this.modalService = modalService;
    }
    /**
     * @return {?}
     */
    AnonymousConsentOpenDialogComponent.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        this.modalService.open(AnonymousConsentDialogComponent, {
            centered: true,
            size: 'lg',
        });
    };
    AnonymousConsentOpenDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-anonymous-consent-open-dialog',
                    template: "<div class=\"anonymous-consents\">\n  <button class=\"btn btn-link\" (click)=\"openDialog()\">\n    {{ 'anonymousConsents.preferences' | cxTranslate }}\n  </button>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    AnonymousConsentOpenDialogComponent.ctorParameters = function () { return [
        { type: ModalService }
    ]; };
    return AnonymousConsentOpenDialogComponent;
}());
export { AnonymousConsentOpenDialogComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AnonymousConsentOpenDialogComponent.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtb3Blbi1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9vcGVuLWRpYWxvZy9hbm9ueW1vdXMtY29uc2VudC1vcGVuLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUZBQXlGLENBQUM7QUFDMUksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXJEO0lBS0UsNkNBQXNCLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUcsQ0FBQzs7OztJQUVwRCx3REFBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRTtZQUN0RCxRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQ0FBa0M7b0JBQzVDLDBMQUE2RDtpQkFDOUQ7Ozs7Z0JBTFEsWUFBWTs7SUFlckIsMENBQUM7Q0FBQSxBQWJELElBYUM7U0FUWSxtQ0FBbUM7Ozs7OztJQUNsQywyREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9hbm9ueW1vdXMtY29uc2VudHMvZGlhbG9nL2Fub255bW91cy1jb25zZW50LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYW5vbnltb3VzLWNvbnNlbnQtb3Blbi1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5vbnltb3VzLWNvbnNlbnQtb3Blbi1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSkge31cblxuICBvcGVuRGlhbG9nKCk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQW5vbnltb3VzQ29uc2VudERpYWxvZ0NvbXBvbmVudCwge1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICBzaXplOiAnbGcnLFxuICAgIH0pO1xuICB9XG59XG4iXX0=