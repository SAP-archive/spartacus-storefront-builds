/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { AuthService, GlobalMessageService, GlobalMessageType, RoutingService, TranslationService, UserService, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/index';
import { ModalService } from '../../../../../shared/components/modal/index';
var CloseAccountModalComponent = /** @class */ (function () {
    function CloseAccountModalComponent(modalService, userService, authService, globalMessageService, routingService, translationService) {
        this.modalService = modalService;
        this.userService = userService;
        this.authService = authService;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.translationService = translationService;
        this.iconTypes = ICON_TYPE;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    CloseAccountModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.userToken$ = this.authService.getUserToken();
        this.userService.resetRemoveUserProcessState();
        this.subscription.add(this.userService
            .getRemoveUserResultSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        function (success) { return _this.onSuccess(success); })));
        this.subscription.add(this.userService
            .getRemoveUserResultError()
            .subscribe((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return _this.onError(error); })));
        this.isLoading$ = this.userService.getRemoveUserResultLoading();
    };
    /**
     * @param {?} success
     * @return {?}
     */
    CloseAccountModalComponent.prototype.onSuccess = /**
     * @param {?} success
     * @return {?}
     */
    function (success) {
        var _this = this;
        if (success) {
            this.dismissModal();
            this.translationService
                .translate('closeAccount.accountClosedSuccessfully')
                .pipe(first())
                .subscribe((/**
             * @param {?} text
             * @return {?}
             */
            function (text) {
                _this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            }));
            this.routingService.go({ cxRoute: 'home' });
        }
    };
    /**
     * @param {?} error
     * @return {?}
     */
    CloseAccountModalComponent.prototype.onError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        var _this = this;
        if (error) {
            this.dismissModal();
            this.translationService
                .translate('closeAccount.accountClosedFailure')
                .pipe(first())
                .subscribe((/**
             * @param {?} text
             * @return {?}
             */
            function (text) {
                _this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_ERROR);
            }));
        }
    };
    /**
     * @param {?=} reason
     * @return {?}
     */
    CloseAccountModalComponent.prototype.dismissModal = /**
     * @param {?=} reason
     * @return {?}
     */
    function (reason) {
        this.modalService.dismissActiveModal(reason);
    };
    /**
     * @return {?}
     */
    CloseAccountModalComponent.prototype.closeAccount = /**
     * @return {?}
     */
    function () {
        this.userService.remove();
    };
    /**
     * @return {?}
     */
    CloseAccountModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    CloseAccountModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-close-account-modal',
                    template: "<ng-container *ngIf=\"(userToken$ | async) as userToken\">\n  <div class=\"modal-header cx-dialog-header\">\n    <h3 class=\"modal-title\">\n      {{ 'closeAccount.confirmAccountClosure' | cxTranslate }}\n    </h3>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"dismissModal()\"\n    >\n      <span aria-hidden=\"true\">\n        <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n      </span>\n    </button>\n  </div>\n\n  <div *ngIf=\"(isLoading$ | async); else loaded\">\n    <div class=\"cx-spinner\">\n      <cx-spinner> </cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #loaded>\n    <div class=\"modal-body\">\n      <div class=\"cx-row\">\n        <p class=\"cx-confirmation\">\n          {{ 'closeAccount.confirmAccountClosureMessage' | cxTranslate }}\n        </p>\n      </div>\n      <div class=\"cx-row\">\n        <div class=\"cx-btn-group\">\n          <button class=\"btn btn-primary\" (click)=\"closeAccount()\">\n            {{ 'closeAccount.closeMyAccount' | cxTranslate }}\n          </button>\n          <button (click)=\"dismissModal()\" class=\"btn btn-block btn-secondary\">\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CloseAccountModalComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: UserService },
        { type: AuthService },
        { type: GlobalMessageService },
        { type: RoutingService },
        { type: TranslationService }
    ]; };
    return CloseAccountModalComponent;
}());
export { CloseAccountModalComponent };
if (false) {
    /** @type {?} */
    CloseAccountModalComponent.prototype.iconTypes;
    /**
     * @type {?}
     * @private
     */
    CloseAccountModalComponent.prototype.subscription;
    /** @type {?} */
    CloseAccountModalComponent.prototype.userToken$;
    /** @type {?} */
    CloseAccountModalComponent.prototype.isLoading$;
    /**
     * @type {?}
     * @protected
     */
    CloseAccountModalComponent.prototype.modalService;
    /**
     * @type {?}
     * @private
     */
    CloseAccountModalComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    CloseAccountModalComponent.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    CloseAccountModalComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    CloseAccountModalComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    CloseAccountModalComponent.prototype.translationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvY2xvc2UtYWNjb3VudC9jb21wb25lbnRzL2Nsb3NlLWFjY291bnQtbW9kYWwvY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxXQUFXLEVBQ1gsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLFdBQVcsR0FFWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFNUU7SUFZRSxvQ0FDWSxZQUEwQixFQUM1QixXQUF3QixFQUN4QixXQUF3QixFQUN4QixvQkFBMEMsRUFDMUMsY0FBOEIsRUFDOUIsa0JBQXNDO1FBTHBDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFaaEQsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUVkLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVd2QyxDQUFDOzs7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Z0M7Ozs7O0lBRzlCLGtEQUFvQzs7Ozs7SUFDcEMsaURBQWdDOzs7OztJQUNoQyxpREFBZ0M7Ozs7O0lBQ2hDLDBEQUFrRDs7Ozs7SUFDbEQsb0RBQXNDOzs7OztJQUN0Qyx3REFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VyU2VydmljZSxcbiAgVXNlclRva2VuLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNsb3NlLWFjY291bnQtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDbG9zZUFjY291bnRNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICB1c2VyVG9rZW4kOiBPYnNlcnZhYmxlPFVzZXJUb2tlbj47XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXNlclRva2VuJCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclRva2VuKCk7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFJlbW92ZVVzZXJQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRSZW1vdmVVc2VyUmVzdWx0U3VjY2VzcygpXG4gICAgICAgIC5zdWJzY3JpYmUoc3VjY2VzcyA9PiB0aGlzLm9uU3VjY2VzcyhzdWNjZXNzKSlcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy51c2VyU2VydmljZVxuICAgICAgICAuZ2V0UmVtb3ZlVXNlclJlc3VsdEVycm9yKClcbiAgICAgICAgLnN1YnNjcmliZShlcnJvciA9PiB0aGlzLm9uRXJyb3IoZXJyb3IpKVxuICAgICk7XG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy51c2VyU2VydmljZS5nZXRSZW1vdmVVc2VyUmVzdWx0TG9hZGluZygpO1xuICB9XG5cbiAgb25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy5kaXNtaXNzTW9kYWwoKTtcbiAgICAgIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlXG4gICAgICAgIC50cmFuc2xhdGUoJ2Nsb3NlQWNjb3VudC5hY2NvdW50Q2xvc2VkU3VjY2Vzc2Z1bGx5JylcbiAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgLnN1YnNjcmliZSh0ZXh0ID0+IHtcbiAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnaG9tZScgfSk7XG4gICAgfVxuICB9XG5cbiAgb25FcnJvcihlcnJvcjogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhpcy5kaXNtaXNzTW9kYWwoKTtcbiAgICAgIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlXG4gICAgICAgIC50cmFuc2xhdGUoJ2Nsb3NlQWNjb3VudC5hY2NvdW50Q2xvc2VkRmFpbHVyZScpXG4gICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgIC5zdWJzY3JpYmUodGV4dCA9PiB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQodGV4dCwgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkaXNtaXNzTW9kYWwocmVhc29uPzogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RhbFNlcnZpY2UuZGlzbWlzc0FjdGl2ZU1vZGFsKHJlYXNvbik7XG4gIH1cblxuICBjbG9zZUFjY291bnQoKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZW1vdmUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==