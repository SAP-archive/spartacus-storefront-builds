/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CloseAccountModalComponent } from '../close-account-modal/close-account-modal.component';
import { ModalService } from '../../../../../shared/components/modal/index';
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
                template: "<div class=\"col-lg-8 col-md-9\">\n  <div class=\"row cx-btn-group\">\n    <div class=\"col-sm-3\">\n      <a\n        [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n        class=\"btn btn-block btn-secondary\"\n        >{{ 'common.cancel' | cxTranslate }}</a\n      >\n    </div>\n    <div class=\"col-sm-6\">\n      <button class=\"btn btn-primary\" (click)=\"openModal()\">\n        {{ 'closeAccount.closeMyAccount' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CloseAccountComponent.ctorParameters = () => [
    { type: ModalService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvY2xvc2UtYWNjb3VudC9jb21wb25lbnRzL2Nsb3NlLWFjY291bnQvY2xvc2UtYWNjb3VudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDbEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBTzVFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFFaEMsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDOzs7O0lBRWxELFNBQVM7UUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFO1lBQzlELFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0lBQ3ZCLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixnZkFBNkM7Z0JBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBTlEsWUFBWTs7OztJQVFuQixzQ0FBVzs7Ozs7SUFDQyw2Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENsb3NlQWNjb3VudE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vY2xvc2UtYWNjb3VudC1tb2RhbC9jbG9zZS1hY2NvdW50LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNsb3NlLWFjY291bnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2xvc2UtYWNjb3VudC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDbG9zZUFjY291bnRDb21wb25lbnQge1xuICBtb2RhbDogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlKSB7fVxuXG4gIG9wZW5Nb2RhbCgpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihDbG9zZUFjY291bnRNb2RhbENvbXBvbmVudCwge1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgfSkuY29tcG9uZW50SW5zdGFuY2U7XG4gIH1cbn1cbiJdfQ==