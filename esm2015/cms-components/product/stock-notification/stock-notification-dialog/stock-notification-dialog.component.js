/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { UserInterestsService } from '@spartacus/core';
import { ModalService } from '../../../../shared/components/modal/modal.service';
export class StockNotificationDialogComponent {
    /**
     * @param {?} modalService
     * @param {?} interestsService
     */
    constructor(modalService, interestsService) {
        this.modalService = modalService;
        this.interestsService = interestsService;
        this.enabledPrefs = [];
    }
    /**
     * @return {?}
     */
    close() {
        this.modalService.dismissActiveModal();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscribeSuccess$) {
            this.subscribeSuccess$
                .subscribe((/**
             * @param {?} success
             * @return {?}
             */
            success => {
                if (success) {
                    this.interestsService.resetAddInterestState();
                }
            }))
                .unsubscribe();
        }
    }
}
StockNotificationDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-stock-notification-dialog',
                template: "<div class=\"cx-dialog-header modal-header\">\n  <div class=\"cx-dialog-title modal-title\">\n    {{ 'stockNotification.subscriptionDialog.header' | cxTranslate }}\n  </div>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n\n<ng-container *ngIf=\"subscribeSuccess$ | async; else loading\">\n  <div class=\"cx-dialog-body modal-body\">\n    <div class=\"container\">\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.notifiedPrefix' | cxTranslate\n        }}\n      </p>\n      <p *ngFor=\"let preference of enabledPrefs\" class=\"channels\">\n        <span>{{ preference.channel }}</span\n        ><span *ngIf=\"preference.value\">{{ ': ' + preference.value }}</span>\n      </p>\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.notifiedSuffix' | cxTranslate\n        }}\n      </p>\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.manageChannelsPrefix'\n            | cxTranslate\n        }}\n        <a\n          (click)=\"close()\"\n          [routerLink]=\"['/my-account/notification-preference']\"\n          class=\"link-prefs\"\n        >\n          {{\n            'stockNotification.subscriptionDialog.manageChannelsLink'\n              | cxTranslate\n          }}</a\n        >\n        {{\n          'stockNotification.subscriptionDialog.manageChannelsSuffix'\n            | cxTranslate\n        }}\n      </p>\n\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.manageSubscriptionsPrefix'\n            | cxTranslate\n        }}\n        <a\n          (click)=\"close()\"\n          [routerLink]=\"['/my-account/my-interests']\"\n          class=\"link-interests\"\n        >\n          {{\n            'stockNotification.subscriptionDialog.manageSubscriptionsLink'\n              | cxTranslate\n          }}</a\n        >\n        {{\n          'stockNotification.subscriptionDialog.manageSubscriptionsSuffix'\n            | cxTranslate\n        }}\n      </p>\n      <div class=\"row\">\n        <div class=\"cx-dialog-actions col-sm-12 col-md-3 offset-md-9\">\n          <button\n            class=\"btn btn-primary btn-block btn-ok\"\n            type=\"button\"\n            (click)=\"close()\"\n          >\n            {{ 'stockNotification.subscriptionDialog.okBtn' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-dialog-body modal-body\">\n    <p>\n      {{ 'stockNotification.subscriptionDialog.subscribing' | cxTranslate }}\n    </p>\n    <div class=\"cx-dialog-row\">\n      <div class=\"col-sm-12\">\n        <cx-spinner></cx-spinner>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
StockNotificationDialogComponent.ctorParameters = () => [
    { type: ModalService },
    { type: UserInterestsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2stbm90aWZpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3N0b2NrLW5vdGlmaWNhdGlvbi9zdG9jay1ub3RpZmljYXRpb24tZGlhbG9nL3N0b2NrLW5vdGlmaWNhdGlvbi1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBMEIsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFNakYsTUFBTSxPQUFPLGdDQUFnQzs7Ozs7SUFJM0MsWUFDVSxZQUEwQixFQUMxQixnQkFBc0M7UUFEdEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFzQjtRQUpoRCxpQkFBWSxHQUE2QixFQUFFLENBQUM7SUFLekMsQ0FBQzs7OztJQUVKLEtBQUs7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsaUJBQWlCO2lCQUNuQixTQUFTOzs7O1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksT0FBTyxFQUFFO29CQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2lCQUMvQztZQUNILENBQUMsRUFBQztpQkFDRCxXQUFXLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsd3dGQUF5RDthQUMxRDs7OztZQUxRLFlBQVk7WUFGWSxvQkFBb0I7Ozs7SUFTbkQsNkRBQXVDOztJQUN2Qyx3REFBNEM7Ozs7O0lBRzFDLHdEQUFrQzs7Ozs7SUFDbEMsNERBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblByZWZlcmVuY2UsIFVzZXJJbnRlcmVzdHNTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9jay1ub3RpZmljYXRpb24tZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b2NrLW5vdGlmaWNhdGlvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9ja05vdGlmaWNhdGlvbkRpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHN1YnNjcmliZVN1Y2Nlc3MkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBlbmFibGVkUHJlZnM6IE5vdGlmaWNhdGlvblByZWZlcmVuY2VbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbnRlcmVzdHNTZXJ2aWNlOiBVc2VySW50ZXJlc3RzU2VydmljZVxuICApIHt9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5tb2RhbFNlcnZpY2UuZGlzbWlzc0FjdGl2ZU1vZGFsKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpYmVTdWNjZXNzJCkge1xuICAgICAgdGhpcy5zdWJzY3JpYmVTdWNjZXNzJFxuICAgICAgICAuc3Vic2NyaWJlKHN1Y2Nlc3MgPT4ge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLmludGVyZXN0c1NlcnZpY2UucmVzZXRBZGRJbnRlcmVzdFN0YXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==