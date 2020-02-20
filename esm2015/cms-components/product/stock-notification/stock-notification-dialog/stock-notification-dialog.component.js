import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { NotificationPreference, UserInterestsService } from '@spartacus/core';
import { ModalService } from '../../../../shared/components/modal/modal.service';
let StockNotificationDialogComponent = class StockNotificationDialogComponent {
    constructor(modalService, interestsService) {
        this.modalService = modalService;
        this.interestsService = interestsService;
        this.enabledPrefs = [];
    }
    close() {
        this.modalService.dismissActiveModal();
    }
    ngOnDestroy() {
        if (this.subscribeSuccess$) {
            this.subscribeSuccess$
                .subscribe(success => {
                if (success) {
                    this.interestsService.resetAddInterestState();
                }
            })
                .unsubscribe();
        }
    }
};
StockNotificationDialogComponent.ctorParameters = () => [
    { type: ModalService },
    { type: UserInterestsService }
];
StockNotificationDialogComponent = __decorate([
    Component({
        selector: 'cx-stock-notification-dialog',
        template: "<div class=\"cx-dialog-header modal-header\">\n  <div class=\"cx-dialog-title modal-title\">\n    {{ 'stockNotification.subscriptionDialog.header' | cxTranslate }}\n  </div>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n\n<ng-container *ngIf=\"subscribeSuccess$ | async; else loading\">\n  <div class=\"cx-dialog-body modal-body\">\n    <div class=\"container\">\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.notifiedPrefix' | cxTranslate\n        }}\n      </p>\n      <p *ngFor=\"let preference of enabledPrefs\" class=\"channels\">\n        <span>{{ preference.channel }}</span\n        ><span *ngIf=\"preference.value\">{{ ': ' + preference.value }}</span>\n      </p>\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.notifiedSuffix' | cxTranslate\n        }}\n      </p>\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.manageChannelsPrefix'\n            | cxTranslate\n        }}\n        <a\n          (click)=\"close()\"\n          [routerLink]=\"['/my-account/notification-preference']\"\n          class=\"link-prefs\"\n        >\n          {{\n            'stockNotification.subscriptionDialog.manageChannelsLink'\n              | cxTranslate\n          }}</a\n        >\n        {{\n          'stockNotification.subscriptionDialog.manageChannelsSuffix'\n            | cxTranslate\n        }}\n      </p>\n\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.manageSubscriptionsPrefix'\n            | cxTranslate\n        }}\n        <a\n          (click)=\"close()\"\n          [routerLink]=\"['/my-account/my-interests']\"\n          class=\"link-interests\"\n        >\n          {{\n            'stockNotification.subscriptionDialog.manageSubscriptionsLink'\n              | cxTranslate\n          }}</a\n        >\n        {{\n          'stockNotification.subscriptionDialog.manageSubscriptionsSuffix'\n            | cxTranslate\n        }}\n      </p>\n      <div class=\"row\">\n        <div class=\"cx-dialog-actions col-sm-12 col-md-3 offset-md-9\">\n          <button\n            class=\"btn btn-primary btn-block btn-ok\"\n            type=\"button\"\n            (click)=\"close()\"\n          >\n            {{ 'stockNotification.subscriptionDialog.okBtn' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-dialog-body modal-body\">\n    <p>\n      {{ 'stockNotification.subscriptionDialog.subscribing' | cxTranslate }}\n    </p>\n    <div class=\"cx-dialog-row\">\n      <div class=\"col-sm-12\">\n        <cx-spinner></cx-spinner>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"
    })
], StockNotificationDialogComponent);
export { StockNotificationDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2stbm90aWZpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3N0b2NrLW5vdGlmaWNhdGlvbi9zdG9jay1ub3RpZmljYXRpb24tZGlhbG9nL3N0b2NrLW5vdGlmaWNhdGlvbi1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQU1qRixJQUFhLGdDQUFnQyxHQUE3QyxNQUFhLGdDQUFnQztJQUkzQyxZQUNVLFlBQTBCLEVBQzFCLGdCQUFzQztRQUR0QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXNCO1FBSmhELGlCQUFZLEdBQTZCLEVBQUUsQ0FBQztJQUt6QyxDQUFDO0lBRUosS0FBSztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUI7aUJBQ25CLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLENBQUM7aUJBQy9DO1lBQ0gsQ0FBQyxDQUFDO2lCQUNELFdBQVcsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBbkJ5QixZQUFZO1lBQ1Isb0JBQW9COztBQU5yQyxnQ0FBZ0M7SUFKNUMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDhCQUE4QjtRQUN4Qyx3d0ZBQXlEO0tBQzFELENBQUM7R0FDVyxnQ0FBZ0MsQ0F3QjVDO1NBeEJZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25QcmVmZXJlbmNlLCBVc2VySW50ZXJlc3RzU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvY2stbm90aWZpY2F0aW9uLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9jay1ub3RpZmljYXRpb24tZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvY2tOb3RpZmljYXRpb25EaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBzdWJzY3JpYmVTdWNjZXNzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgZW5hYmxlZFByZWZzOiBOb3RpZmljYXRpb25QcmVmZXJlbmNlW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgaW50ZXJlc3RzU2VydmljZTogVXNlckludGVyZXN0c1NlcnZpY2VcbiAgKSB7fVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLmRpc21pc3NBY3RpdmVNb2RhbCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaWJlU3VjY2VzcyQpIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlU3VjY2VzcyRcbiAgICAgICAgLnN1YnNjcmliZShzdWNjZXNzID0+IHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5pbnRlcmVzdHNTZXJ2aWNlLnJlc2V0QWRkSW50ZXJlc3RTdGF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=