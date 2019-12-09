/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { UserInterestsService } from '@spartacus/core';
import { ModalService } from '../../../../shared/components/modal/modal.service';
var StockNotificationDialogComponent = /** @class */ (function () {
    function StockNotificationDialogComponent(modalService, interestsService) {
        this.modalService = modalService;
        this.interestsService = interestsService;
        this.enabledPrefs = [];
    }
    /**
     * @return {?}
     */
    StockNotificationDialogComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.modalService.dismissActiveModal();
    };
    /**
     * @return {?}
     */
    StockNotificationDialogComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.subscribeSuccess$) {
            this.subscribeSuccess$
                .subscribe((/**
             * @param {?} success
             * @return {?}
             */
            function (success) {
                if (success) {
                    _this.interestsService.resetAddInterestState();
                }
            }))
                .unsubscribe();
        }
    };
    StockNotificationDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-stock-notification-dialog',
                    template: "<div class=\"cx-dialog-header modal-header\">\n  <div class=\"cx-dialog-title modal-title\">\n    {{ 'stockNotification.subscriptionDialog.header' | cxTranslate }}\n  </div>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n\n<ng-container *ngIf=\"subscribeSuccess$ | async; else loading\">\n  <div class=\"cx-dialog-body modal-body\">\n    <div class=\"container\">\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.notifiedPrefix' | cxTranslate\n        }}\n      </p>\n      <p *ngFor=\"let preference of enabledPrefs\" class=\"channels\">\n        <span>{{ preference.channel }}</span\n        ><span *ngIf=\"preference.value\">{{ ': ' + preference.value }}</span>\n      </p>\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.notifiedSuffix' | cxTranslate\n        }}\n      </p>\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.manageChannelsPrefix'\n            | cxTranslate\n        }}\n        <a\n          (click)=\"close()\"\n          [routerLink]=\"['/my-account/notification-preference']\"\n          class=\"link-prefs\"\n        >\n          {{\n            'stockNotification.subscriptionDialog.manageChannelsLink'\n              | cxTranslate\n          }}</a\n        >\n        {{\n          'stockNotification.subscriptionDialog.manageChannelsSuffix'\n            | cxTranslate\n        }}\n      </p>\n\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.manageSubscriptionsPrefix'\n            | cxTranslate\n        }}\n        <a\n          (click)=\"close()\"\n          [routerLink]=\"['/my-account/my-interests']\"\n          class=\"link-interests\"\n        >\n          {{\n            'stockNotification.subscriptionDialog.manageSubscriptionsLink'\n              | cxTranslate\n          }}</a\n        >\n        {{\n          'stockNotification.subscriptionDialog.manageSubscriptionsSuffix'\n            | cxTranslate\n        }}\n      </p>\n      <div class=\"row\">\n        <div class=\"cx-dialog-actions col-sm-12 col-md-3 offset-md-9\">\n          <button\n            class=\"btn btn-primary btn-block btn-ok\"\n            type=\"button\"\n            (click)=\"close()\"\n          >\n            {{ 'stockNotification.subscriptionDialog.okBtn' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-dialog-body modal-body\">\n    <p>\n      {{ 'stockNotification.subscriptionDialog.subscribing' | cxTranslate }}\n    </p>\n    <div class=\"cx-dialog-row\">\n      <div class=\"col-sm-12\">\n        <cx-spinner></cx-spinner>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    StockNotificationDialogComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: UserInterestsService }
    ]; };
    return StockNotificationDialogComponent;
}());
export { StockNotificationDialogComponent };
if (false) {
    /** @type {?} */
    StockNotificationDialogComponent.prototype.subscribeSuccess$;
    /** @type {?} */
    StockNotificationDialogComponent.prototype.enabledPrefs;
    /**
     * @type {?}
     * @private
     */
    StockNotificationDialogComponent.prototype.modalService;
    /**
     * @type {?}
     * @private
     */
    StockNotificationDialogComponent.prototype.interestsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2stbm90aWZpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3N0b2NrLW5vdGlmaWNhdGlvbi9zdG9jay1ub3RpZmljYXRpb24tZGlhbG9nL3N0b2NrLW5vdGlmaWNhdGlvbi1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBMEIsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFakY7SUFRRSwwQ0FDVSxZQUEwQixFQUMxQixnQkFBc0M7UUFEdEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFzQjtRQUpoRCxpQkFBWSxHQUE2QixFQUFFLENBQUM7SUFLekMsQ0FBQzs7OztJQUVKLGdEQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsc0RBQVc7OztJQUFYO1FBQUEsaUJBVUM7UUFUQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsaUJBQWlCO2lCQUNuQixTQUFTOzs7O1lBQUMsVUFBQSxPQUFPO2dCQUNoQixJQUFJLE9BQU8sRUFBRTtvQkFDWCxLQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztpQkFDL0M7WUFDSCxDQUFDLEVBQUM7aUJBQ0QsV0FBVyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDOztnQkEzQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLHd3RkFBeUQ7aUJBQzFEOzs7O2dCQUxRLFlBQVk7Z0JBRlksb0JBQW9COztJQWdDckQsdUNBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQXhCWSxnQ0FBZ0M7OztJQUMzQyw2REFBdUM7O0lBQ3ZDLHdEQUE0Qzs7Ozs7SUFHMUMsd0RBQWtDOzs7OztJQUNsQyw0REFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uUHJlZmVyZW5jZSwgVXNlckludGVyZXN0c1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b2NrLW5vdGlmaWNhdGlvbi1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvY2stbm90aWZpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b2NrTm90aWZpY2F0aW9uRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgc3Vic2NyaWJlU3VjY2VzcyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGVuYWJsZWRQcmVmczogTm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIGludGVyZXN0c1NlcnZpY2U6IFVzZXJJbnRlcmVzdHNTZXJ2aWNlXG4gICkge31cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLm1vZGFsU2VydmljZS5kaXNtaXNzQWN0aXZlTW9kYWwoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmliZVN1Y2Nlc3MkKSB7XG4gICAgICB0aGlzLnN1YnNjcmliZVN1Y2Nlc3MkXG4gICAgICAgIC5zdWJzY3JpYmUoc3VjY2VzcyA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJlc3RzU2VydmljZS5yZXNldEFkZEludGVyZXN0U3RhdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19