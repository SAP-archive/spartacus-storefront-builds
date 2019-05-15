/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalMessageService, GlobalMessageType, RoutingService, UserService, AuthService, TranslationService, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { ICON_TYPES } from '../../../../../cms-components/misc/icon/index';
export class CloseAccountModalComponent {
    /**
     * @param {?} activeModal
     * @param {?} userService
     * @param {?} authService
     * @param {?} globalMessageService
     * @param {?} routingService
     * @param {?} translationService
     */
    constructor(activeModal, userService, authService, globalMessageService, routingService, translationService) {
        this.activeModal = activeModal;
        this.userService = userService;
        this.authService = authService;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.translationService = translationService;
        this.iconTypes = ICON_TYPES;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.userToken$ = this.authService.getUserToken();
        this.userService.resetRemoveUserProcessState();
        this.subscription.add(this.userService
            .getRemoveUserResultSuccess()
            .subscribe(success => this.onSuccess(success)));
        this.isLoading$ = this.userService.getRemoveUserResultLoading();
    }
    /**
     * @param {?} success
     * @return {?}
     */
    onSuccess(success) {
        if (success) {
            this.closeModal();
            this.translationService
                .translate('closeAccount.accountClosedSuccessfully')
                .pipe(first())
                .subscribe(text => {
                this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            });
            this.routingService.go({ cxRoute: 'home' });
        }
    }
    /**
     * @return {?}
     */
    closeModal() {
        this.activeModal.dismiss();
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    closeAccount(userId) {
        this.userService.remove(userId);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
CloseAccountModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-close-account-modal',
                template: "<ng-container *ngIf=\"(userToken$ | async) as userToken\">\n  <div class=\"modal-header cx-dialog-header\">\n    <h3 class=\"modal-title\">\n      {{ 'closeAccount.confirmAccountClosure' | cxTranslate }}\n    </h3>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"closeModal()\"\n    >\n      <span aria-hidden=\"true\">\n        <cx-icon [type]=\"iconTypes.TIMES\"></cx-icon>\n      </span>\n    </button>\n  </div>\n\n  <div *ngIf=\"(isLoading$ | async); else loaded\">\n    <div class=\"cx-spinner\">\n      <cx-spinner> </cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #loaded>\n    <div class=\"modal-body\">\n      <div class=\"cx-row\">\n        <p class=\"cx-confirmation\">\n          {{ 'closeAccount.confirmAccountClosureMessage' | cxTranslate }}\n        </p>\n      </div>\n      <div class=\"cx-row\">\n        <div class=\"cx-btn-group\">\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"closeAccount(userToken.userId)\"\n          >\n            {{ 'closeAccount.closeMyAccount' | cxTranslate }}\n          </button>\n          <button (click)=\"closeModal()\" class=\"btn btn-block btn-secondary\">\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{display:flex;flex-direction:column;height:100%}.cx-dialog-header{padding:var(--cx-padding,2rem 1.75rem .85rem);border-width:var(--cx-border-width,0)}h3{font-weight:var(--cx-g-font-weight-semi)}.cx-row{display:flex}.cx-confirmation{margin:var(--cx-margin,0 0 3em 0)}.cx-btn-group{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,column);width:var(--cx-width,100%)}.cx-btn-group button:first-child{margin:var(--cx-margin,0 0 1em 0)}@media (max-width:767.98px){.modal-body{top:-85px;flex:none;margin:auto 0}}"]
            }] }
];
/** @nocollapse */
CloseAccountModalComponent.ctorParameters = () => [
    { type: NgbActiveModal },
    { type: UserService },
    { type: AuthService },
    { type: GlobalMessageService },
    { type: RoutingService },
    { type: TranslationService }
];
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
     * @private
     */
    CloseAccountModalComponent.prototype.activeModal;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvY2xvc2UtYWNjb3VudC9jb21wb25lbnRzL2Nsb3NlLWFjY291bnQtbW9kYWwvY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QsV0FBVyxFQUVYLFdBQVcsRUFDWCxrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFRM0UsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7Ozs7O0lBT3JDLFlBQ1UsV0FBMkIsRUFDM0IsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsb0JBQTBDLEVBQzFDLGNBQThCLEVBQzlCLGtCQUFzQztRQUx0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQVpoRCxjQUFTLEdBQUcsVUFBVSxDQUFDO1FBRWYsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBV3ZDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLFdBQVc7YUFDYiwwQkFBMEIsRUFBRTthQUM1QixTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQ2pELENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxPQUFnQjtRQUN4QixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsa0JBQWtCO2lCQUNwQixTQUFTLENBQUMsd0NBQXdDLENBQUM7aUJBQ25ELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDYixTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLElBQUksRUFDSixpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUFjO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7WUE3REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLHcxQ0FBbUQ7Z0JBRW5ELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQXJCUSxjQUFjO1lBTXJCLFdBQVc7WUFFWCxXQUFXO1lBTFgsb0JBQW9CO1lBRXBCLGNBQWM7WUFJZCxrQkFBa0I7Ozs7SUFjbEIsK0NBQXVCOzs7OztJQUV2QixrREFBMEM7O0lBQzFDLGdEQUFrQzs7SUFDbEMsZ0RBQWdDOzs7OztJQUc5QixpREFBbUM7Ozs7O0lBQ25DLGlEQUFnQzs7Ozs7SUFDaEMsaURBQWdDOzs7OztJQUNoQywwREFBa0Q7Ozs7O0lBQ2xELG9EQUFzQzs7Ozs7SUFDdEMsd0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG4gIFVzZXJUb2tlbixcbiAgQXV0aFNlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRVMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jbG9zZS1hY2NvdW50LW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nsb3NlLWFjY291bnQtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jbG9zZS1hY2NvdW50LW1vZGFsLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDbG9zZUFjY291bnRNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFUztcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgdXNlclRva2VuJDogT2JzZXJ2YWJsZTxVc2VyVG9rZW4+O1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXNlclRva2VuJCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclRva2VuKCk7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFJlbW92ZVVzZXJQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRSZW1vdmVVc2VyUmVzdWx0U3VjY2VzcygpXG4gICAgICAgIC5zdWJzY3JpYmUoc3VjY2VzcyA9PiB0aGlzLm9uU3VjY2VzcyhzdWNjZXNzKSlcbiAgICApO1xuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0UmVtb3ZlVXNlclJlc3VsdExvYWRpbmcoKTtcbiAgfVxuXG4gIG9uU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgdGhpcy50cmFuc2xhdGlvblNlcnZpY2VcbiAgICAgICAgLnRyYW5zbGF0ZSgnY2xvc2VBY2NvdW50LmFjY291bnRDbG9zZWRTdWNjZXNzZnVsbHknKVxuICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAuc3Vic2NyaWJlKHRleHQgPT4ge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdob21lJyB9KTtcbiAgICB9XG4gIH1cblxuICBjbG9zZU1vZGFsKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygpO1xuICB9XG5cbiAgY2xvc2VBY2NvdW50KHVzZXJJZDogc3RyaW5nKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZW1vdmUodXNlcklkKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==