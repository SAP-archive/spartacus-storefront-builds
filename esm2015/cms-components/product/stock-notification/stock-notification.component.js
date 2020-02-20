import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { UserInterestsService, UserNotificationPreferenceService, AuthService, OCC_USER_ID_ANONYMOUS, NotificationPreference, NotificationType, Product, GlobalMessageService, TranslationService, GlobalMessageType, } from '@spartacus/core';
import { Subscription, combineLatest } from 'rxjs';
import { map, filter, tap, first } from 'rxjs/operators';
import { CurrentProductService } from '../current-product.service';
import { ModalService } from '../../../shared/components/modal/modal.service';
import { StockNotificationDialogComponent } from './stock-notification-dialog/stock-notification-dialog.component';
let StockNotificationComponent = class StockNotificationComponent {
    constructor(authService, currentProductService, globalMessageService, translationService, interestsService, modalService, notificationPrefService) {
        this.authService = authService;
        this.currentProductService = currentProductService;
        this.globalMessageService = globalMessageService;
        this.translationService = translationService;
        this.interestsService = interestsService;
        this.modalService = modalService;
        this.notificationPrefService = notificationPrefService;
        this.anonymous = true;
        this.enabledPrefs = [];
        this.subscriptions = new Subscription();
    }
    ngOnInit() {
        this.outOfStock$ = combineLatest([
            this.currentProductService.getProduct().pipe(filter(Boolean)),
            this.authService.getOccUserId(),
        ]).pipe(tap(([product, userId]) => {
            this.productCode = product.code;
            if (userId !== OCC_USER_ID_ANONYMOUS) {
                this.anonymous = false;
                this.notificationPrefService.loadPreferences();
                this.interestsService.loadProductInterests(null, null, null, product.code, NotificationType.BACK_IN_STOCK);
            }
        }), map(([product]) => !!product.stock && product.stock.stockLevelStatus === 'outOfStock'));
        this.hasProductInterests$ = this.interestsService
            .getProductInterests()
            .pipe(map(interests => !!interests.results && interests.results.length === 1));
        this.subscribeSuccess$ = this.interestsService.getAddProductInterestSuccess();
        this.isRemoveInterestLoading$ = this.interestsService.getRemoveProdutInterestLoading();
        this.prefsEnabled$ = this.notificationPrefService
            .getEnabledPreferences()
            .pipe(tap(prefs => (this.enabledPrefs = prefs)), map(prefs => prefs.length > 0));
        this.subscriptions.add(this.interestsService.getAddProductInterestError().subscribe(error => {
            if (error) {
                this.onInterestAddingError();
            }
        }));
        this.subscriptions.add(this.interestsService
            .getRemoveProdutInterestSuccess()
            .subscribe(success => {
            if (success) {
                this.onInterestRemovingSuccess();
            }
        }));
    }
    subscribe() {
        this.openDialog();
        this.interestsService.addProductInterest(this.productCode, NotificationType.BACK_IN_STOCK);
    }
    unsubscribe() {
        this.interestsService.removeProdutInterest({
            product: {
                code: this.productCode,
            },
            productInterestEntry: [
                {
                    interestType: NotificationType.BACK_IN_STOCK,
                },
            ],
        }, true);
    }
    onInterestRemovingSuccess() {
        this.subscriptions.add(this.translationService
            .translate('stockNotification.unsubscribeSuccess')
            .pipe(first())
            .subscribe(text => this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_INFO)));
        this.interestsService.resetRemoveInterestState();
    }
    onInterestAddingError() {
        this.modalService.dismissActiveModal();
        this.interestsService.resetAddInterestState();
    }
    openDialog() {
        const modalInstance = this.modalService.open(StockNotificationDialogComponent, {
            centered: true,
            size: 'lg',
        }).componentInstance;
        modalInstance.subscribeSuccess$ = this.subscribeSuccess$;
        modalInstance.enabledPrefs = this.enabledPrefs;
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.interestsService.clearProductInterests();
        this.notificationPrefService.clearPreferences();
    }
};
StockNotificationComponent.ctorParameters = () => [
    { type: AuthService },
    { type: CurrentProductService },
    { type: GlobalMessageService },
    { type: TranslationService },
    { type: UserInterestsService },
    { type: ModalService },
    { type: UserNotificationPreferenceService }
];
StockNotificationComponent = __decorate([
    Component({
        selector: 'cx-stock-notification',
        template: "<ng-container *ngIf=\"outOfStock$ | async\">\n  <ng-container *ngIf=\"!(hasProductInterests$ | async); else stopNotify\">\n    <ng-container *ngIf=\"prefsEnabled$ | async; else disableNotify\">\n      <div class=\"stock-notification-notes\">\n        <label>{{ 'stockNotification.getNotified' | cxTranslate }}</label>\n      </div>\n      <button\n        class=\"btn btn-primary btn-block btn-notify\"\n        type=\"button\"\n        (click)=\"subscribe()\"\n      >\n        {{ 'stockNotification.notifyMe' | cxTranslate }}\n      </button>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #disableNotify>\n  <div class=\"stock-notification-notes\">\n    <label>\n      <ng-container *ngIf=\"anonymous; else loggedIn\">\n        <a [routerLink]=\"{ cxRoute: 'login' } | cxUrl\">\n          {{ 'miniLogin.signInRegister' | cxTranslate }}</a\n        >\n        {{ 'stockNotification.getNotifySuffix' | cxTranslate }}<br />\n      </ng-container>\n      <ng-template #loggedIn>\n        {{ 'stockNotification.getNotify' | cxTranslate }}<br />\n        {{ 'stockNotification.activateChannelsPrefix' | cxTranslate\n        }}<a [routerLink]=\"['/my-account/notification-preference']\">{{\n          'stockNotification.channelsLink' | cxTranslate\n        }}</a\n        >{{ 'stockNotification.activateChannelsSuffix' | cxTranslate }}\n      </ng-template>\n    </label>\n  </div>\n  <button\n    class=\"btn btn-primary btn-block btn-notify\"\n    type=\"button\"\n    disabled=\"true\"\n  >\n    {{ 'stockNotification.notifyMe' | cxTranslate }}\n  </button>\n</ng-template>\n\n<ng-template #stopNotify>\n  <ng-container *ngIf=\"!(isRemoveInterestLoading$ | async); else loading\">\n    <div class=\"stock-notification-notes\">\n      <label>{{ 'stockNotification.notified' | cxTranslate }}</label>\n    </div>\n    <button\n      class=\"btn btn-primary btn-block btn-stop-notify\"\n      type=\"button\"\n      (click)=\"unsubscribe()\"\n    >\n      {{ 'stockNotification.stopNotify' | cxTranslate }}\n    </button>\n  </ng-container>\n</ng-template>\n\n<ng-template #loading>\n  <div class=\"cx-dialog-body modal-body\">\n    <div class=\"cx-dialog-row\">\n      <div class=\"col-sm-12\">\n        <cx-spinner></cx-spinner>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], StockNotificationComponent);
export { StockNotificationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2stbm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3Qvc3RvY2stbm90aWZpY2F0aW9uL3N0b2NrLW5vdGlmaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsaUNBQWlDLEVBQ2pDLFdBQVcsRUFDWCxxQkFBcUIsRUFDckIsc0JBQXNCLEVBQ3RCLGdCQUFnQixFQUNoQixPQUFPLEVBQ1Asb0JBQW9CLEVBQ3BCLGtCQUFrQixFQUNsQixpQkFBaUIsR0FDbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBT25ILElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTBCO0lBWXJDLFlBQ1UsV0FBd0IsRUFDeEIscUJBQTRDLEVBQzVDLG9CQUEwQyxFQUMxQyxrQkFBc0MsRUFDdEMsZ0JBQXNDLEVBQ3RDLFlBQTBCLEVBQzFCLHVCQUEwRDtRQU4xRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFD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QUMsaUJBQWlCLENBQUM7UUFDcEIsYUFBYSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUN6RCxhQUFhLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDakQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2xELENBQUM7Q0FDRixDQUFBOztZQTVId0IsV0FBVztZQUNELHFCQUFxQjtZQUN0QixvQkFBb0I7WUFDdEIsa0JBQWtCO1lBQ3BCLG9CQUFvQjtZQUN4QixZQUFZO1lBQ0QsaUNBQWlDOztBQW5CekQsMEJBQTBCO0lBTHRDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsNndFQUFrRDtRQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csMEJBQTBCLENBeUl0QztTQXpJWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBVc2VySW50ZXJlc3RzU2VydmljZSxcbiAgVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlLFxuICBBdXRoU2VydmljZSxcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxuICBOb3RpZmljYXRpb25QcmVmZXJlbmNlLFxuICBOb3RpZmljYXRpb25UeXBlLFxuICBQcm9kdWN0LFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHRhcCwgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b2NrTm90aWZpY2F0aW9uRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9zdG9jay1ub3RpZmljYXRpb24tZGlhbG9nL3N0b2NrLW5vdGlmaWNhdGlvbi1kaWFsb2cuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvY2stbm90aWZpY2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b2NrLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9ja05vdGlmaWNhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaGFzUHJvZHVjdEludGVyZXN0cyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHByZWZzRW5hYmxlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIG91dE9mU3RvY2skOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBpc1JlbW92ZUludGVyZXN0TG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGFub255bW91cyA9IHRydWU7XG5cbiAgcHJpdmF0ZSBlbmFibGVkUHJlZnM6IE5vdGlmaWNhdGlvblByZWZlcmVuY2VbXSA9IFtdO1xuICBwcml2YXRlIHByb2R1Y3RDb2RlOiBzdHJpbmc7XG4gIHByaXZhdGUgc3Vic2NyaWJlU3VjY2VzcyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbnRlcmVzdHNTZXJ2aWNlOiBVc2VySW50ZXJlc3RzU2VydmljZSxcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgbm90aWZpY2F0aW9uUHJlZlNlcnZpY2U6IFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vdXRPZlN0b2NrJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5jdXJyZW50UHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdCgpLnBpcGUoZmlsdGVyKEJvb2xlYW4pKSxcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgXSkucGlwZShcbiAgICAgIHRhcCgoW3Byb2R1Y3QsIHVzZXJJZF06IFtQcm9kdWN0LCBTdHJpbmddKSA9PiB7XG4gICAgICAgIHRoaXMucHJvZHVjdENvZGUgPSBwcm9kdWN0LmNvZGU7XG4gICAgICAgIGlmICh1c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgICAgIHRoaXMuYW5vbnltb3VzID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25QcmVmU2VydmljZS5sb2FkUHJlZmVyZW5jZXMoKTtcbiAgICAgICAgICB0aGlzLmludGVyZXN0c1NlcnZpY2UubG9hZFByb2R1Y3RJbnRlcmVzdHMoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBwcm9kdWN0LmNvZGUsXG4gICAgICAgICAgICBOb3RpZmljYXRpb25UeXBlLkJBQ0tfSU5fU1RPQ0tcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcChcbiAgICAgICAgKFtwcm9kdWN0XTogW1Byb2R1Y3QsIFN0cmluZ10pID0+XG4gICAgICAgICAgISFwcm9kdWN0LnN0b2NrICYmIHByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbFN0YXR1cyA9PT0gJ291dE9mU3RvY2snXG4gICAgICApXG4gICAgKTtcblxuICAgIHRoaXMuaGFzUHJvZHVjdEludGVyZXN0cyQgPSB0aGlzLmludGVyZXN0c1NlcnZpY2VcbiAgICAgIC5nZXRQcm9kdWN0SW50ZXJlc3RzKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoaW50ZXJlc3RzID0+ICEhaW50ZXJlc3RzLnJlc3VsdHMgJiYgaW50ZXJlc3RzLnJlc3VsdHMubGVuZ3RoID09PSAxKVxuICAgICAgKTtcbiAgICB0aGlzLnN1YnNjcmliZVN1Y2Nlc3MkID0gdGhpcy5pbnRlcmVzdHNTZXJ2aWNlLmdldEFkZFByb2R1Y3RJbnRlcmVzdFN1Y2Nlc3MoKTtcbiAgICB0aGlzLmlzUmVtb3ZlSW50ZXJlc3RMb2FkaW5nJCA9IHRoaXMuaW50ZXJlc3RzU2VydmljZS5nZXRSZW1vdmVQcm9kdXRJbnRlcmVzdExvYWRpbmcoKTtcbiAgICB0aGlzLnByZWZzRW5hYmxlZCQgPSB0aGlzLm5vdGlmaWNhdGlvblByZWZTZXJ2aWNlXG4gICAgICAuZ2V0RW5hYmxlZFByZWZlcmVuY2VzKClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAocHJlZnMgPT4gKHRoaXMuZW5hYmxlZFByZWZzID0gcHJlZnMpKSxcbiAgICAgICAgbWFwKHByZWZzID0+IHByZWZzLmxlbmd0aCA+IDApXG4gICAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMuaW50ZXJlc3RzU2VydmljZS5nZXRBZGRQcm9kdWN0SW50ZXJlc3RFcnJvcigpLnN1YnNjcmliZShlcnJvciA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHRoaXMub25JbnRlcmVzdEFkZGluZ0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5pbnRlcmVzdHNTZXJ2aWNlXG4gICAgICAgIC5nZXRSZW1vdmVQcm9kdXRJbnRlcmVzdFN1Y2Nlc3MoKVxuICAgICAgICAuc3Vic2NyaWJlKHN1Y2Nlc3MgPT4ge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLm9uSW50ZXJlc3RSZW1vdmluZ1N1Y2Nlc3MoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHN1YnNjcmliZSgpIHtcbiAgICB0aGlzLm9wZW5EaWFsb2coKTtcbiAgICB0aGlzLmludGVyZXN0c1NlcnZpY2UuYWRkUHJvZHVjdEludGVyZXN0KFxuICAgICAgdGhpcy5wcm9kdWN0Q29kZSxcbiAgICAgIE5vdGlmaWNhdGlvblR5cGUuQkFDS19JTl9TVE9DS1xuICAgICk7XG4gIH1cblxuICB1bnN1YnNjcmliZSgpIHtcbiAgICB0aGlzLmludGVyZXN0c1NlcnZpY2UucmVtb3ZlUHJvZHV0SW50ZXJlc3QoXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgICBjb2RlOiB0aGlzLnByb2R1Y3RDb2RlLFxuICAgICAgICB9LFxuICAgICAgICBwcm9kdWN0SW50ZXJlc3RFbnRyeTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGludGVyZXN0VHlwZTogTm90aWZpY2F0aW9uVHlwZS5CQUNLX0lOX1NUT0NLLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgdHJ1ZVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG9uSW50ZXJlc3RSZW1vdmluZ1N1Y2Nlc3MoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlXG4gICAgICAgIC50cmFuc2xhdGUoJ3N0b2NrTm90aWZpY2F0aW9uLnVuc3Vic2NyaWJlU3VjY2VzcycpXG4gICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgIC5zdWJzY3JpYmUodGV4dCA9PlxuICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHRleHQsIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0lORk8pXG4gICAgICAgIClcbiAgICApO1xuICAgIHRoaXMuaW50ZXJlc3RzU2VydmljZS5yZXNldFJlbW92ZUludGVyZXN0U3RhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25JbnRlcmVzdEFkZGluZ0Vycm9yKCkge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLmRpc21pc3NBY3RpdmVNb2RhbCgpO1xuICAgIHRoaXMuaW50ZXJlc3RzU2VydmljZS5yZXNldEFkZEludGVyZXN0U3RhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgb3BlbkRpYWxvZygpIHtcbiAgICBjb25zdCBtb2RhbEluc3RhbmNlID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihcbiAgICAgIFN0b2NrTm90aWZpY2F0aW9uRGlhbG9nQ29tcG9uZW50LFxuICAgICAge1xuICAgICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgICAgc2l6ZTogJ2xnJyxcbiAgICAgIH1cbiAgICApLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIG1vZGFsSW5zdGFuY2Uuc3Vic2NyaWJlU3VjY2VzcyQgPSB0aGlzLnN1YnNjcmliZVN1Y2Nlc3MkO1xuICAgIG1vZGFsSW5zdGFuY2UuZW5hYmxlZFByZWZzID0gdGhpcy5lbmFibGVkUHJlZnM7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmludGVyZXN0c1NlcnZpY2UuY2xlYXJQcm9kdWN0SW50ZXJlc3RzKCk7XG4gICAgdGhpcy5ub3RpZmljYXRpb25QcmVmU2VydmljZS5jbGVhclByZWZlcmVuY2VzKCk7XG4gIH1cbn1cbiJdfQ==