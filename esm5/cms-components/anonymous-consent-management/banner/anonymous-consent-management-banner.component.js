import { __decorate } from "tslib";
import { Component, OnDestroy, ViewContainerRef } from '@angular/core';
import { AnonymousConsentsService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AnonymousConsentLaunchDialogService } from '../anonymous-consent-launch-dialog.service';
var AnonymousConsentManagementBannerComponent = /** @class */ (function () {
    function AnonymousConsentManagementBannerComponent(anonymousConsentsService, anonymousConsentLaunchDialogService, vcr) {
        this.anonymousConsentsService = anonymousConsentsService;
        this.anonymousConsentLaunchDialogService = anonymousConsentLaunchDialogService;
        this.vcr = vcr;
        this.subscriptions = new Subscription();
        this.bannerVisible$ = this.anonymousConsentsService.isBannerVisible();
    }
    AnonymousConsentManagementBannerComponent.prototype.viewDetails = function () {
        this.hideBanner();
        var dialog = this.anonymousConsentLaunchDialogService.openDialog(null, this.vcr);
        if (dialog) {
            this.subscriptions.add(dialog.subscribe());
        }
    };
    AnonymousConsentManagementBannerComponent.prototype.allowAll = function () {
        var _this = this;
        this.subscriptions.add(this.anonymousConsentsService
            .giveAllConsents()
            .pipe(tap(function () { return _this.hideBanner(); }))
            .subscribe());
    };
    AnonymousConsentManagementBannerComponent.prototype.hideBanner = function () {
        this.anonymousConsentsService.toggleBannerDismissed(true);
    };
    AnonymousConsentManagementBannerComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    AnonymousConsentManagementBannerComponent.ctorParameters = function () { return [
        { type: AnonymousConsentsService },
        { type: AnonymousConsentLaunchDialogService },
        { type: ViewContainerRef }
    ]; };
    AnonymousConsentManagementBannerComponent = __decorate([
        Component({
            selector: 'cx-anonymous-consent-management-banner',
            template: "<ng-container *ngIf=\"bannerVisible$ | async as bannerVisible\">\n  <div\n    [ngClass]=\"{ 'anonymous-consent-banner-hidden': !bannerVisible }\"\n    class=\"anonymous-consent-banner\"\n  >\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-xs-12\">\n          <div class=\"cx-banner-title\">\n            {{ 'anonymousConsents.banner.title' | cxTranslate }}\n          </div>\n          <div class=\"cx-banner-description\">\n            {{ 'anonymousConsents.banner.description' | cxTranslate }}\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-xs-12 cx-banner-buttons\">\n          <button class=\"btn btn-action\" (click)=\"viewDetails()\">\n            {{ 'anonymousConsents.banner.viewDetails' | cxTranslate }}\n          </button>\n          <button class=\"btn btn-primary\" (click)=\"allowAll()\">\n            {{ 'anonymousConsents.banner.allowAll' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
        })
    ], AnonymousConsentManagementBannerComponent);
    return AnonymousConsentManagementBannerComponent;
}());
export { AnonymousConsentManagementBannerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9iYW5uZXIvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRCxPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQU1qRztJQU9FLG1EQUNZLHdCQUFrRCxFQUNsRCxtQ0FBd0UsRUFDeEUsR0FBcUI7UUFGckIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCx3Q0FBbUMsR0FBbkMsbUNBQW1DLENBQXFDO1FBQ3hFLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBVHpCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUzQyxtQkFBYyxHQUVWLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQU1qRCxDQUFDO0lBRUosK0RBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsbUNBQW1DLENBQUMsVUFBVSxDQUNoRSxJQUFJLEVBQ0osSUFBSSxDQUFDLEdBQUcsQ0FDVCxDQUFDO1FBQ0YsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFRCw0REFBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FDcEIsSUFBSSxDQUFDLHdCQUF3QjthQUMxQixlQUFlLEVBQUU7YUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7YUFDbEMsU0FBUyxFQUFFLENBQ2YsQ0FBQztJQUNKLENBQUM7SUFFRCw4REFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCwrREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDOztnQkEvQnFDLHdCQUF3QjtnQkFDYixtQ0FBbUM7Z0JBQ25FLGdCQUFnQjs7SUFWdEIseUNBQXlDO1FBSnJELFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx3Q0FBd0M7WUFDbEQsb2hDQUFtRTtTQUNwRSxDQUFDO09BQ1cseUNBQXlDLENBd0NyRDtJQUFELGdEQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0F4Q1kseUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRMYXVuY2hEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vYW5vbnltb3VzLWNvbnNlbnQtbGF1bmNoLWRpYWxvZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBiYW5uZXJWaXNpYmxlJDogT2JzZXJ2YWJsZTxcbiAgICBib29sZWFuXG4gID4gPSB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0Jhbm5lclZpc2libGUoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFub255bW91c0NvbnNlbnRMYXVuY2hEaWFsb2dTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50TGF1bmNoRGlhbG9nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdmNyOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge31cblxuICB2aWV3RGV0YWlscygpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGVCYW5uZXIoKTtcbiAgICBjb25zdCBkaWFsb2cgPSB0aGlzLmFub255bW91c0NvbnNlbnRMYXVuY2hEaWFsb2dTZXJ2aWNlLm9wZW5EaWFsb2coXG4gICAgICBudWxsLFxuICAgICAgdGhpcy52Y3JcbiAgICApO1xuICAgIGlmIChkaWFsb2cpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoZGlhbG9nLnN1YnNjcmliZSgpKTtcbiAgICB9XG4gIH1cblxuICBhbGxvd0FsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2VcbiAgICAgICAgLmdpdmVBbGxDb25zZW50cygpXG4gICAgICAgIC5waXBlKHRhcCgoKSA9PiB0aGlzLmhpZGVCYW5uZXIoKSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICk7XG4gIH1cblxuICBoaWRlQmFubmVyKCk6IHZvaWQge1xuICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLnRvZ2dsZUJhbm5lckRpc21pc3NlZCh0cnVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=