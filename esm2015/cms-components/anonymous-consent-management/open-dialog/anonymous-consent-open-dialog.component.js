/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AnonymousConsentDialogComponent } from '../../../shared/components/anonymous-consents/dialog/anonymous-consent-dialog.component';
import { ModalService } from '../../../shared/index';
export class AnonymousConsentOpenDialogComponent {
    /**
     * @param {?} modalService
     */
    constructor(modalService) {
        this.modalService = modalService;
    }
    /**
     * @return {?}
     */
    openDialog() {
        this.modalService.open(AnonymousConsentDialogComponent, {
            centered: true,
            size: 'lg',
        });
    }
}
AnonymousConsentOpenDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-anonymous-consent-open-dialog',
                template: "<div class=\"anonymous-consents\">\n  <button class=\"btn btn-link\" (click)=\"openDialog()\">\n    {{ 'anonymousConsents.preferences' | cxTranslate }}\n  </button>\n</div>\n"
            }] }
];
/** @nocollapse */
AnonymousConsentOpenDialogComponent.ctorParameters = () => [
    { type: ModalService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AnonymousConsentOpenDialogComponent.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtb3Blbi1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9vcGVuLWRpYWxvZy9hbm9ueW1vdXMtY29uc2VudC1vcGVuLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUZBQXlGLENBQUM7QUFDMUksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBTXJELE1BQU0sT0FBTyxtQ0FBbUM7Ozs7SUFDOUMsWUFBc0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDOzs7O0lBRXBELFVBQVU7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRTtZQUN0RCxRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLDBMQUE2RDthQUM5RDs7OztZQUxRLFlBQVk7Ozs7Ozs7SUFPUCwyREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9hbm9ueW1vdXMtY29uc2VudHMvZGlhbG9nL2Fub255bW91cy1jb25zZW50LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYW5vbnltb3VzLWNvbnNlbnQtb3Blbi1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5vbnltb3VzLWNvbnNlbnQtb3Blbi1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSkge31cblxuICBvcGVuRGlhbG9nKCk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQW5vbnltb3VzQ29uc2VudERpYWxvZ0NvbXBvbmVudCwge1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICBzaXplOiAnbGcnLFxuICAgIH0pO1xuICB9XG59XG4iXX0=