/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
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
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvbXktYWNjb3VudC9jbG9zZS1hY2NvdW50L2NvbXBvbmVudHMvY2xvc2UtYWNjb3VudC9jbG9zZS1hY2NvdW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFbEc7SUFRRSwrQkFBb0IsWUFBc0I7UUFBdEIsaUJBQVksR0FBWixZQUFZLENBQVU7SUFBRyxDQUFDOzs7O0lBRTlDLHlDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUU7WUFDOUQsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUMsaUJBQWlCLENBQUM7SUFDdkIsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGtuQkFBNkM7b0JBRTdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBUlEsUUFBUTs7SUFrQmpCLDRCQUFDO0NBQUEsQUFmRCxJQWVDO1NBVFkscUJBQXFCOzs7SUFDaEMsc0NBQVc7Ozs7O0lBQ0MsNkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBDbG9zZUFjY291bnRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL2Nsb3NlLWFjY291bnQtbW9kYWwvY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jbG9zZS1hY2NvdW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nsb3NlLWFjY291bnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jbG9zZS1hY2NvdW50LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDbG9zZUFjY291bnRDb21wb25lbnQge1xuICBtb2RhbDogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwpIHt9XG5cbiAgb3Blbk1vZGFsKCk6IHZvaWQge1xuICAgIHRoaXMubW9kYWwgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKENsb3NlQWNjb3VudE1vZGFsQ29tcG9uZW50LCB7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICB9KS5jb21wb25lbnRJbnN0YW5jZTtcbiAgfVxufVxuIl19