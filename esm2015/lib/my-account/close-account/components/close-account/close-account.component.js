/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CloseAccountModalComponent } from '../close-account-modal/close-account-modal.component';
export class CloseAccountComponent {
    /**
     * @param {?} modalService
     */
    constructor(modalService) {
        this.modalService = modalService;
    }
    /**
     * @return {?}
     */
    openModal() {
        this.modal = this.modalService.open(CloseAccountModalComponent, {
            centered: true,
        }).componentInstance;
    }
}
CloseAccountComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-close-account',
                template: "<div class=\"col-lg-8 col-md-9\">\n  <p\n    class=\"cx-info\"\n    [innerHTML]=\"'closeAccount.info.retention' | cxTranslate\"\n  ></p>\n  <div class=\"row cx-btn-group\">\n    <div class=\"col-sm-3\">\n      <a\n        [routerLink]=\"{ route: 'home' } | cxTranslateUrl\"\n        class=\"btn btn-block btn-secondary\"\n        >{{ 'closeAccount.action.cancel' | cxTranslate }}</a\n      >\n    </div>\n    <div class=\"col-sm-6\">\n      <button class=\"btn btn-primary\" (click)=\"openModal()\">\n        {{ 'closeAccount.action.closeMyAccount' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
CloseAccountComponent.ctorParameters = () => [
    { type: NgbModal }
];
if (false) {
    /** @type {?} */
    CloseAccountComponent.prototype.modal;
    /**
     * @type {?}
     * @private
     */
    CloseAccountComponent.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvbXktYWNjb3VudC9jbG9zZS1hY2NvdW50L2NvbXBvbmVudHMvY2xvc2UtYWNjb3VudC9jbG9zZS1hY2NvdW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFRbEcsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUVoQyxZQUFvQixZQUFzQjtRQUF0QixpQkFBWSxHQUFaLFlBQVksQ0FBVTtJQUFHLENBQUM7Ozs7SUFFOUMsU0FBUztRQUNQLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUU7WUFDOUQsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUMsaUJBQWlCLENBQUM7SUFDdkIsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGtuQkFBNkM7Z0JBRTdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQVJRLFFBQVE7Ozs7SUFVZixzQ0FBVzs7Ozs7SUFDQyw2Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IENsb3NlQWNjb3VudE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vY2xvc2UtYWNjb3VudC1tb2RhbC9jbG9zZS1hY2NvdW50LW1vZGFsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNsb3NlLWFjY291bnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2xvc2UtYWNjb3VudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nsb3NlLWFjY291bnQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENsb3NlQWNjb3VudENvbXBvbmVudCB7XG4gIG1vZGFsOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCkge31cblxuICBvcGVuTW9kYWwoKTogdm9pZCB7XG4gICAgdGhpcy5tb2RhbCA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQ2xvc2VBY2NvdW50TW9kYWxDb21wb25lbnQsIHtcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgIH0pLmNvbXBvbmVudEluc3RhbmNlO1xuICB9XG59XG4iXX0=