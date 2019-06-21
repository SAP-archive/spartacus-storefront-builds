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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvY2xvc2UtYWNjb3VudC9jb21wb25lbnRzL2Nsb3NlLWFjY291bnQtbW9kYWwvY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxXQUFXLEVBQ1gsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLFdBQVcsR0FFWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFNUU7SUFZRSxvQ0FDWSxZQUEwQixFQUM1QixXQUF3QixFQUN4QixXQUF3QixFQUN4QixvQkFBMEMsRUFDMUMsY0FBOEIsRUFDOUIsa0JBQXNDO1FBTHBDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFaaEQsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUVkLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVd2QyxDQUFDOzs7O0lBRUosNkNBQVE7OztJQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsV0FBVzthQUNiLDBCQUEwQixFQUFFO2FBQzVCLFNBQVM7Ozs7UUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQXZCLENBQXVCLEVBQUMsQ0FDakQsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRUQsOENBQVM7Ozs7SUFBVCxVQUFVLE9BQWdCO1FBQTFCLGlCQWNDO1FBYkMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLGtCQUFrQjtpQkFDcEIsU0FBUyxDQUFDLHdDQUF3QyxDQUFDO2lCQUNuRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2IsU0FBUzs7OztZQUFDLFVBQUEsSUFBSTtnQkFDYixLQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixJQUFJLEVBQ0osaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7WUFDSixDQUFDLEVBQUMsQ0FBQztZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDOzs7OztJQUVELGlEQUFZOzs7O0lBQVosVUFBYSxNQUFZO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELGlEQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELGdEQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Z0JBNURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxzeUNBQW1EO29CQUNuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBTlEsWUFBWTtnQkFObkIsV0FBVztnQkFMWCxXQUFXO2dCQUNYLG9CQUFvQjtnQkFFcEIsY0FBYztnQkFDZCxrQkFBa0I7O0lBc0VwQixpQ0FBQztDQUFBLEFBN0RELElBNkRDO1NBeERZLDBCQUEwQjs7O0lBQ3JDLCtDQUFzQjs7Ozs7SUFFdEIsa0RBQTBDOztJQUMxQyxnREFBa0M7O0lBQ2xDLGdEQUFnQzs7Ozs7SUFHOUIsa0RBQW9DOzs7OztJQUNwQyxpREFBZ0M7Ozs7O0lBQ2hDLGlEQUFnQzs7Ozs7SUFDaEMsMERBQWtEOzs7OztJQUNsRCxvREFBc0M7Ozs7O0lBQ3RDLHdEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEF1dGhTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFVzZXJTZXJ2aWNlLFxuICBVc2VyVG9rZW4sXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2xvc2UtYWNjb3VudC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jbG9zZS1hY2NvdW50LW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENsb3NlQWNjb3VudE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHVzZXJUb2tlbiQ6IE9ic2VydmFibGU8VXNlclRva2VuPjtcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51c2VyVG9rZW4kID0gdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyVG9rZW4oKTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0UmVtb3ZlVXNlclByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMudXNlclNlcnZpY2VcbiAgICAgICAgLmdldFJlbW92ZVVzZXJSZXN1bHRTdWNjZXNzKClcbiAgICAgICAgLnN1YnNjcmliZShzdWNjZXNzID0+IHRoaXMub25TdWNjZXNzKHN1Y2Nlc3MpKVxuICAgICk7XG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy51c2VyU2VydmljZS5nZXRSZW1vdmVVc2VyUmVzdWx0TG9hZGluZygpO1xuICB9XG5cbiAgb25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy5kaXNtaXNzTW9kYWwoKTtcbiAgICAgIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlXG4gICAgICAgIC50cmFuc2xhdGUoJ2Nsb3NlQWNjb3VudC5hY2NvdW50Q2xvc2VkU3VjY2Vzc2Z1bGx5JylcbiAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgLnN1YnNjcmliZSh0ZXh0ID0+IHtcbiAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnaG9tZScgfSk7XG4gICAgfVxuICB9XG5cbiAgZGlzbWlzc01vZGFsKHJlYXNvbj86IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLmRpc21pc3NBY3RpdmVNb2RhbChyZWFzb24pO1xuICB9XG5cbiAgY2xvc2VBY2NvdW50KCkge1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVtb3ZlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=