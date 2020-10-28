import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, NotificationType, OCC_USER_ID_ANONYMOUS, TranslationService, UserIdService, UserInterestsService, UserNotificationPreferenceService, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';
import { ModalService } from '../../../shared/components/modal/modal.service';
import { CurrentProductService } from '../current-product.service';
import { StockNotificationDialogComponent } from './stock-notification-dialog/stock-notification-dialog.component';
export class StockNotificationComponent {
    constructor(currentProductService, globalMessageService, translationService, interestsService, modalService, notificationPrefService, userIdService) {
        this.currentProductService = currentProductService;
        this.globalMessageService = globalMessageService;
        this.translationService = translationService;
        this.interestsService = interestsService;
        this.modalService = modalService;
        this.notificationPrefService = notificationPrefService;
        this.userIdService = userIdService;
        this.anonymous = true;
        this.enabledPrefs = [];
        this.subscriptions = new Subscription();
    }
    ngOnInit() {
        this.outOfStock$ = combineLatest([
            this.currentProductService.getProduct().pipe(filter(Boolean)),
            this.userIdService.getUserId(),
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
            .pipe(map((interests) => !!interests.results && interests.results.length === 1));
        this.subscribeSuccess$ = this.interestsService.getAddProductInterestSuccess();
        this.isRemoveInterestLoading$ = this.interestsService.getRemoveProdutInterestLoading();
        this.prefsEnabled$ = this.notificationPrefService
            .getEnabledPreferences()
            .pipe(tap((prefs) => (this.enabledPrefs = prefs)), map((prefs) => prefs.length > 0));
        this.subscriptions.add(this.interestsService.getAddProductInterestError().subscribe((error) => {
            if (error) {
                this.onInterestAddingError();
            }
        }));
        this.subscriptions.add(this.interestsService
            .getRemoveProdutInterestSuccess()
            .subscribe((success) => {
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
            .subscribe((text) => this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_INFO)));
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
}
StockNotificationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-stock-notification',
                template: "<ng-container *ngIf=\"outOfStock$ | async\">\n  <ng-container *ngIf=\"!(hasProductInterests$ | async); else stopNotify\">\n    <ng-container *ngIf=\"prefsEnabled$ | async; else disableNotify\">\n      <div class=\"stock-notification-notes\">\n        <p>{{ 'stockNotification.getNotified' | cxTranslate }}</p>\n      </div>\n      <button\n        class=\"btn btn-primary btn-block btn-notify\"\n        type=\"button\"\n        (click)=\"subscribe()\"\n      >\n        {{ 'stockNotification.notifyMe' | cxTranslate }}\n      </button>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #disableNotify>\n  <div class=\"stock-notification-notes\">\n    <p>\n      <ng-container *ngIf=\"anonymous; else loggedIn\">\n        <a [routerLink]=\"{ cxRoute: 'login' } | cxUrl\">\n          {{ 'miniLogin.signInRegister' | cxTranslate }}</a\n        >\n        {{ 'stockNotification.getNotifySuffix' | cxTranslate }}<br />\n      </ng-container>\n      <ng-template #loggedIn>\n        {{ 'stockNotification.getNotify' | cxTranslate }}<br />\n        {{ 'stockNotification.activateChannelsPrefix' | cxTranslate\n        }}<a [routerLink]=\"['/my-account/notification-preference']\">{{\n          'stockNotification.channelsLink' | cxTranslate\n        }}</a\n        >{{ 'stockNotification.activateChannelsSuffix' | cxTranslate }}\n      </ng-template>\n    </p>\n  </div>\n  <button\n    class=\"btn btn-primary btn-block btn-notify\"\n    type=\"button\"\n    disabled=\"true\"\n  >\n    {{ 'stockNotification.notifyMe' | cxTranslate }}\n  </button>\n</ng-template>\n\n<ng-template #stopNotify>\n  <ng-container *ngIf=\"!(isRemoveInterestLoading$ | async); else loading\">\n    <div class=\"stock-notification-notes\">\n      <p>{{ 'stockNotification.notified' | cxTranslate }}</p>\n    </div>\n    <button\n      class=\"btn btn-primary btn-block btn-stop-notify\"\n      type=\"button\"\n      (click)=\"unsubscribe()\"\n    >\n      {{ 'stockNotification.stopNotify' | cxTranslate }}\n    </button>\n  </ng-container>\n</ng-template>\n\n<ng-template #loading>\n  <div class=\"cx-dialog-body modal-body\">\n    <div class=\"cx-dialog-row\">\n      <div class=\"col-sm-12\">\n        <cx-spinner></cx-spinner>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
StockNotificationComponent.ctorParameters = () => [
    { type: CurrentProductService },
    { type: GlobalMessageService },
    { type: TranslationService },
    { type: UserInterestsService },
    { type: ModalService },
    { type: UserNotificationPreferenceService },
    { type: UserIdService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2stbm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL3Byb2R1Y3Qvc3RvY2stbm90aWZpY2F0aW9uL3N0b2NrLW5vdGlmaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsRUFFakIsZ0JBQWdCLEVBQ2hCLHFCQUFxQixFQUVyQixrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLG9CQUFvQixFQUNwQixpQ0FBaUMsR0FDbEMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBT25ILE1BQU0sT0FBTywwQkFBMEI7SUFZckMsWUFDVSxxQkFBNEMsRUFDNUMsb0JBQTBDLEVBQzFDLGtCQUFzQyxFQUN0QyxnQkFBc0MsRUFDdEMsWUFBMEIsRUFDMUIsdUJBQTBELEVBQzFELGFBQTRCO1FBTjVCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHFCQUFnQixHQUFo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QUNYLENBQ0YsQ0FBQyxpQkFBaUIsQ0FBQztRQUNwQixhQUFhLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3pELGFBQWEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNqRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDbEQsQ0FBQzs7O1lBL0lGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxxdkVBQWtEO2dCQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBUFEscUJBQXFCO1lBZDVCLG9CQUFvQjtZQU1wQixrQkFBa0I7WUFFbEIsb0JBQW9CO1lBS2IsWUFBWTtZQUpuQixpQ0FBaUM7WUFGakMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgTm90aWZpY2F0aW9uUHJlZmVyZW5jZSxcbiAgTm90aWZpY2F0aW9uVHlwZSxcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxuICBQcm9kdWN0LFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFVzZXJJZFNlcnZpY2UsXG4gIFVzZXJJbnRlcmVzdHNTZXJ2aWNlLFxuICBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZVNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZmlyc3QsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyBTdG9ja05vdGlmaWNhdGlvbkRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vc3RvY2stbm90aWZpY2F0aW9uLWRpYWxvZy9zdG9jay1ub3RpZmljYXRpb24tZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b2NrLW5vdGlmaWNhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9jay1ub3RpZmljYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU3RvY2tOb3RpZmljYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGhhc1Byb2R1Y3RJbnRlcmVzdHMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwcmVmc0VuYWJsZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBvdXRPZlN0b2NrJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgaXNSZW1vdmVJbnRlcmVzdExvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBhbm9ueW1vdXMgPSB0cnVlO1xuXG4gIHByaXZhdGUgZW5hYmxlZFByZWZzOiBOb3RpZmljYXRpb25QcmVmZXJlbmNlW10gPSBbXTtcbiAgcHJpdmF0ZSBwcm9kdWN0Q29kZTogc3RyaW5nO1xuICBwcml2YXRlIHN1YnNjcmliZVN1Y2Nlc3MkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSxcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgaW50ZXJlc3RzU2VydmljZTogVXNlckludGVyZXN0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvblByZWZTZXJ2aWNlOiBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VySWRTZXJ2aWNlOiBVc2VySWRTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm91dE9mU3RvY2skID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmN1cnJlbnRQcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0KCkucGlwZShmaWx0ZXIoQm9vbGVhbikpLFxuICAgICAgdGhpcy51c2VySWRTZXJ2aWNlLmdldFVzZXJJZCgpLFxuICAgIF0pLnBpcGUoXG4gICAgICB0YXAoKFtwcm9kdWN0LCB1c2VySWRdOiBbUHJvZHVjdCwgU3RyaW5nXSkgPT4ge1xuICAgICAgICB0aGlzLnByb2R1Y3RDb2RlID0gcHJvZHVjdC5jb2RlO1xuICAgICAgICBpZiAodXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgICAgICB0aGlzLmFub255bW91cyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uUHJlZlNlcnZpY2UubG9hZFByZWZlcmVuY2VzKCk7XG4gICAgICAgICAgdGhpcy5pbnRlcmVzdHNTZXJ2aWNlLmxvYWRQcm9kdWN0SW50ZXJlc3RzKFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgcHJvZHVjdC5jb2RlLFxuICAgICAgICAgICAgTm90aWZpY2F0aW9uVHlwZS5CQUNLX0lOX1NUT0NLXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoXG4gICAgICAgIChbcHJvZHVjdF06IFtQcm9kdWN0LCBTdHJpbmddKSA9PlxuICAgICAgICAgICEhcHJvZHVjdC5zdG9jayAmJiBwcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWxTdGF0dXMgPT09ICdvdXRPZlN0b2NrJ1xuICAgICAgKVxuICAgICk7XG5cbiAgICB0aGlzLmhhc1Byb2R1Y3RJbnRlcmVzdHMkID0gdGhpcy5pbnRlcmVzdHNTZXJ2aWNlXG4gICAgICAuZ2V0UHJvZHVjdEludGVyZXN0cygpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKFxuICAgICAgICAgIChpbnRlcmVzdHMpID0+ICEhaW50ZXJlc3RzLnJlc3VsdHMgJiYgaW50ZXJlc3RzLnJlc3VsdHMubGVuZ3RoID09PSAxXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgdGhpcy5zdWJzY3JpYmVTdWNjZXNzJCA9IHRoaXMuaW50ZXJlc3RzU2VydmljZS5nZXRBZGRQcm9kdWN0SW50ZXJlc3RTdWNjZXNzKCk7XG4gICAgdGhpcy5pc1JlbW92ZUludGVyZXN0TG9hZGluZyQgPSB0aGlzLmludGVyZXN0c1NlcnZpY2UuZ2V0UmVtb3ZlUHJvZHV0SW50ZXJlc3RMb2FkaW5nKCk7XG4gICAgdGhpcy5wcmVmc0VuYWJsZWQkID0gdGhpcy5ub3RpZmljYXRpb25QcmVmU2VydmljZVxuICAgICAgLmdldEVuYWJsZWRQcmVmZXJlbmNlcygpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKChwcmVmcykgPT4gKHRoaXMuZW5hYmxlZFByZWZzID0gcHJlZnMpKSxcbiAgICAgICAgbWFwKChwcmVmcykgPT4gcHJlZnMubGVuZ3RoID4gMClcbiAgICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5pbnRlcmVzdHNTZXJ2aWNlLmdldEFkZFByb2R1Y3RJbnRlcmVzdEVycm9yKCkuc3Vic2NyaWJlKChlcnJvcikgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICB0aGlzLm9uSW50ZXJlc3RBZGRpbmdFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMuaW50ZXJlc3RzU2VydmljZVxuICAgICAgICAuZ2V0UmVtb3ZlUHJvZHV0SW50ZXJlc3RTdWNjZXNzKClcbiAgICAgICAgLnN1YnNjcmliZSgoc3VjY2VzcykgPT4ge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLm9uSW50ZXJlc3RSZW1vdmluZ1N1Y2Nlc3MoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHN1YnNjcmliZSgpIHtcbiAgICB0aGlzLm9wZW5EaWFsb2coKTtcbiAgICB0aGlzLmludGVyZXN0c1NlcnZpY2UuYWRkUHJvZHVjdEludGVyZXN0KFxuICAgICAgdGhpcy5wcm9kdWN0Q29kZSxcbiAgICAgIE5vdGlmaWNhdGlvblR5cGUuQkFDS19JTl9TVE9DS1xuICAgICk7XG4gIH1cblxuICB1bnN1YnNjcmliZSgpIHtcbiAgICB0aGlzLmludGVyZXN0c1NlcnZpY2UucmVtb3ZlUHJvZHV0SW50ZXJlc3QoXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgICBjb2RlOiB0aGlzLnByb2R1Y3RDb2RlLFxuICAgICAgICB9LFxuICAgICAgICBwcm9kdWN0SW50ZXJlc3RFbnRyeTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGludGVyZXN0VHlwZTogTm90aWZpY2F0aW9uVHlwZS5CQUNLX0lOX1NUT0NLLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgdHJ1ZVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG9uSW50ZXJlc3RSZW1vdmluZ1N1Y2Nlc3MoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlXG4gICAgICAgIC50cmFuc2xhdGUoJ3N0b2NrTm90aWZpY2F0aW9uLnVuc3Vic2NyaWJlU3VjY2VzcycpXG4gICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKHRleHQpID0+XG4gICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQodGV4dCwgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfSU5GTylcbiAgICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5pbnRlcmVzdHNTZXJ2aWNlLnJlc2V0UmVtb3ZlSW50ZXJlc3RTdGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkludGVyZXN0QWRkaW5nRXJyb3IoKSB7XG4gICAgdGhpcy5tb2RhbFNlcnZpY2UuZGlzbWlzc0FjdGl2ZU1vZGFsKCk7XG4gICAgdGhpcy5pbnRlcmVzdHNTZXJ2aWNlLnJlc2V0QWRkSW50ZXJlc3RTdGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuRGlhbG9nKCkge1xuICAgIGNvbnN0IG1vZGFsSW5zdGFuY2UgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKFxuICAgICAgU3RvY2tOb3RpZmljYXRpb25EaWFsb2dDb21wb25lbnQsXG4gICAgICB7XG4gICAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgICBzaXplOiAnbGcnLFxuICAgICAgfVxuICAgICkuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgbW9kYWxJbnN0YW5jZS5zdWJzY3JpYmVTdWNjZXNzJCA9IHRoaXMuc3Vic2NyaWJlU3VjY2VzcyQ7XG4gICAgbW9kYWxJbnN0YW5jZS5lbmFibGVkUHJlZnMgPSB0aGlzLmVuYWJsZWRQcmVmcztcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuaW50ZXJlc3RzU2VydmljZS5jbGVhclByb2R1Y3RJbnRlcmVzdHMoKTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvblByZWZTZXJ2aWNlLmNsZWFyUHJlZmVyZW5jZXMoKTtcbiAgfVxufVxuIl19