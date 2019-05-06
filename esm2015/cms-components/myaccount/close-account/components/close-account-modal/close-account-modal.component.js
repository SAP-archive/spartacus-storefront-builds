/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalMessageService, GlobalMessageType, RoutingService, UserService, AuthService, TranslationService, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
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
                .translate('closeAccount.message.success')
                .pipe(first())
                .subscribe(text => {
                this.globalMessageService.add({
                    text,
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                });
            });
            this.routingService.go({ route: 'home' });
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
                template: "<ng-container *ngIf=\"(userToken$ | async) as userToken\">\n  <div class=\"modal-header cx-dialog-header\">\n    <h3 class=\"modal-title\">\n      {{ 'closeAccount.modal.title' | cxTranslate }}\n    </h3>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"closeModal()\"\n    >\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div *ngIf=\"(isLoading$ | async); else loaded\">\n    <div class=\"cx-spinner\">\n      <cx-spinner> </cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #loaded>\n    <div class=\"modal-body\">\n      <div class=\"cx-row\">\n        <p class=\"cx-confirmation\">\n          {{ 'closeAccount.modal.confirmation' | cxTranslate }}\n        </p>\n      </div>\n      <div class=\"cx-row\">\n        <div class=\"cx-btn-group\">\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"closeAccount(userToken.userId)\"\n          >\n            {{ 'closeAccount.action.closeMyAccount' | cxTranslate }}\n          </button>\n          <button (click)=\"closeModal()\" class=\"btn btn-block btn-secondary\">\n            {{ 'closeAccount.action.cancel' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvY2xvc2UtYWNjb3VudC9jb21wb25lbnRzL2Nsb3NlLWFjY291bnQtbW9kYWwvY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QsV0FBVyxFQUVYLFdBQVcsRUFDWCxrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVF2QyxNQUFNLE9BQU8sMEJBQTBCOzs7Ozs7Ozs7SUFLckMsWUFDVSxXQUEyQixFQUMzQixXQUF3QixFQUN4QixXQUF3QixFQUN4QixvQkFBMEMsRUFDMUMsY0FBOEIsRUFDOUIsa0JBQXNDO1FBTHRDLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBVnhDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVd2QyxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsV0FBVyxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxXQUFXO2FBQ2IsMEJBQTBCLEVBQUU7YUFDNUIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUNqRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsT0FBZ0I7UUFDeEIsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLGtCQUFrQjtpQkFDcEIsU0FBUyxDQUFDLDhCQUE4QixDQUFDO2lCQUN6QyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2IsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDO29CQUM1QixJQUFJO29CQUNKLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxxQkFBcUI7aUJBQzlDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUFjO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7WUEzREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLCt4Q0FBbUQ7Z0JBRW5ELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQXBCUSxjQUFjO1lBTXJCLFdBQVc7WUFFWCxXQUFXO1lBTFgsb0JBQW9CO1lBRXBCLGNBQWM7WUFJZCxrQkFBa0I7Ozs7Ozs7SUFhbEIsa0RBQTBDOztJQUMxQyxnREFBa0M7O0lBQ2xDLGdEQUFnQzs7Ozs7SUFHOUIsaURBQW1DOzs7OztJQUNuQyxpREFBZ0M7Ozs7O0lBQ2hDLGlEQUFnQzs7Ozs7SUFDaEMsMERBQWtEOzs7OztJQUNsRCxvREFBc0M7Ozs7O0lBQ3RDLHdEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFVzZXJTZXJ2aWNlLFxuICBVc2VyVG9rZW4sXG4gIEF1dGhTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNsb3NlLWFjY291bnQtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nsb3NlLWFjY291bnQtbW9kYWwuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENsb3NlQWNjb3VudE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgdXNlclRva2VuJDogT2JzZXJ2YWJsZTxVc2VyVG9rZW4+O1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXNlclRva2VuJCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclRva2VuKCk7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFJlbW92ZVVzZXJQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRSZW1vdmVVc2VyUmVzdWx0U3VjY2VzcygpXG4gICAgICAgIC5zdWJzY3JpYmUoc3VjY2VzcyA9PiB0aGlzLm9uU3VjY2VzcyhzdWNjZXNzKSlcbiAgICApO1xuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0UmVtb3ZlVXNlclJlc3VsdExvYWRpbmcoKTtcbiAgfVxuXG4gIG9uU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgdGhpcy50cmFuc2xhdGlvblNlcnZpY2VcbiAgICAgICAgLnRyYW5zbGF0ZSgnY2xvc2VBY2NvdW50Lm1lc3NhZ2Uuc3VjY2VzcycpXG4gICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgIC5zdWJzY3JpYmUodGV4dCA9PiB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgcm91dGU6ICdob21lJyB9KTtcbiAgICB9XG4gIH1cblxuICBjbG9zZU1vZGFsKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygpO1xuICB9XG5cbiAgY2xvc2VBY2NvdW50KHVzZXJJZDogc3RyaW5nKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZW1vdmUodXNlcklkKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==