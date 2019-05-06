/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CloseAccountModalComponent } from '../close-account-modal/close-account-modal.component';
var CloseAccountComponent = /** @class */ (function () {
    function CloseAccountComponent(modalService) {
        this.modalService = modalService;
    }
    /**
     * @return {?}
     */
    CloseAccountComponent.prototype.openModal = /**
     * @return {?}
     */
    function () {
        this.modal = this.modalService.open(CloseAccountModalComponent, {
            centered: true,
        }).componentInstance;
    };
    CloseAccountComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-close-account',
                    template: "<div class=\"col-lg-8 col-md-9\">\n  <p\n    class=\"cx-info\"\n    [innerHTML]=\"'closeAccount.info.retention' | cxTranslate\"\n  ></p>\n  <div class=\"row cx-btn-group\">\n    <div class=\"col-sm-3\">\n      <a\n        [routerLink]=\"{ route: 'home' } | cxTranslateUrl\"\n        class=\"btn btn-block btn-secondary\"\n        >{{ 'closeAccount.action.cancel' | cxTranslate }}</a\n      >\n    </div>\n    <div class=\"col-sm-6\">\n      <button class=\"btn btn-primary\" (click)=\"openModal()\">\n        {{ 'closeAccount.action.closeMyAccount' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CloseAccountComponent.ctorParameters = function () { return [
        { type: NgbModal }
    ]; };
    return CloseAccountComponent;
}());
export { CloseAccountComponent };
if (false) {
    /** @type {?} */
    CloseAccountComponent.prototype.modal;
    /**
     * @type {?}
     * @private
     */
    CloseAccountComponent.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvY2xvc2UtYWNjb3VudC9jb21wb25lbnRzL2Nsb3NlLWFjY291bnQvY2xvc2UtYWNjb3VudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRWxHO0lBT0UsK0JBQW9CLFlBQXNCO1FBQXRCLGlCQUFZLEdBQVosWUFBWSxDQUFVO0lBQUcsQ0FBQzs7OztJQUU5Qyx5Q0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFO1lBQzlELFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0lBQ3ZCLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixrbkJBQTZDO29CQUM3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBUFEsUUFBUTs7SUFpQmpCLDRCQUFDO0NBQUEsQUFkRCxJQWNDO1NBVFkscUJBQXFCOzs7SUFDaEMsc0NBQVc7Ozs7O0lBQ0MsNkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBDbG9zZUFjY291bnRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL2Nsb3NlLWFjY291bnQtbW9kYWwvY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jbG9zZS1hY2NvdW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nsb3NlLWFjY291bnQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2xvc2VBY2NvdW50Q29tcG9uZW50IHtcbiAgbW9kYWw6IGFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsKSB7fVxuXG4gIG9wZW5Nb2RhbCgpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihDbG9zZUFjY291bnRNb2RhbENvbXBvbmVudCwge1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgfSkuY29tcG9uZW50SW5zdGFuY2U7XG4gIH1cbn1cbiJdfQ==