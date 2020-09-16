import { Component, ViewContainerRef } from '@angular/core';
import { AnonymousConsentsService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AnonymousConsentLaunchDialogService } from '../anonymous-consent-launch-dialog.service';
export class AnonymousConsentManagementBannerComponent {
    constructor(anonymousConsentsService, anonymousConsentLaunchDialogService, vcr) {
        this.anonymousConsentsService = anonymousConsentsService;
        this.anonymousConsentLaunchDialogService = anonymousConsentLaunchDialogService;
        this.vcr = vcr;
        this.subscriptions = new Subscription();
        this.bannerVisible$ = this.anonymousConsentsService.isBannerVisible();
    }
    viewDetails() {
        this.hideBanner();
        const dialog = this.anonymousConsentLaunchDialogService.openDialog(null, this.vcr);
        if (dialog) {
            this.subscriptions.add(dialog.subscribe());
        }
    }
    allowAll() {
        this.subscriptions.add(this.anonymousConsentsService
            .giveAllConsents()
            .pipe(tap(() => this.hideBanner()))
            .subscribe());
    }
    hideBanner() {
        this.anonymousConsentsService.toggleBannerDismissed(true);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
AnonymousConsentManagementBannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-anonymous-consent-management-banner',
                template: "<ng-container *ngIf=\"bannerVisible$ | async as bannerVisible\">\n  <div\n    [ngClass]=\"{ 'anonymous-consent-banner-hidden': !bannerVisible }\"\n    class=\"anonymous-consent-banner\"\n  >\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-xs-12\">\n          <div class=\"cx-banner-title\">\n            {{ 'anonymousConsents.banner.title' | cxTranslate }}\n          </div>\n          <div class=\"cx-banner-description\">\n            {{ 'anonymousConsents.banner.description' | cxTranslate }}\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-xs-12 cx-banner-buttons\">\n          <button class=\"btn btn-action\" (click)=\"viewDetails()\">\n            {{ 'anonymousConsents.banner.viewDetails' | cxTranslate }}\n          </button>\n          <button class=\"btn btn-primary\" (click)=\"allowAll()\">\n            {{ 'anonymousConsents.banner.allowAll' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
            },] }
];
AnonymousConsentManagementBannerComponent.ctorParameters = () => [
    { type: AnonymousConsentsService },
    { type: AnonymousConsentLaunchDialogService },
    { type: ViewContainerRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9iYW5uZXIvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0QsT0FBTyxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFNakcsTUFBTSxPQUFPLHlDQUF5QztJQU9wRCxZQUNZLHdCQUFrRCxFQUNsRCxtQ0FBd0UsRUFDeEUsR0FBcUI7UUFGckIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCx3Q0FBbUMsR0FBbkMsbUNBQW1DLENBQXFDO1FBQ3hFLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBVHpCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUzQyxtQkFBYyxHQUVWLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQU1qRCxDQUFDO0lBRUosV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsbUNBQW1DLENBQUMsVUFBVSxDQUNoRSxJQUFJLEVBQ0osSUFBSSxDQUFDLEdBQUcsQ0FDVCxDQUFDO1FBQ0YsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyx3QkFBd0I7YUFDMUIsZUFBZSxFQUFFO2FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7YUFDbEMsU0FBUyxFQUFFLENBQ2YsQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7WUEzQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3Q0FBd0M7Z0JBQ2xELG9oQ0FBbUU7YUFDcEU7OztZQVJRLHdCQUF3QjtZQUd4QixtQ0FBbUM7WUFKYixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudExhdW5jaERpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi9hbm9ueW1vdXMtY29uc2VudC1sYXVuY2gtZGlhbG9nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hbm9ueW1vdXMtY29uc2VudC1tYW5hZ2VtZW50LWJhbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbm9ueW1vdXMtY29uc2VudC1tYW5hZ2VtZW50LWJhbm5lci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGJhbm5lclZpc2libGUkOiBPYnNlcnZhYmxlPFxuICAgIGJvb2xlYW5cbiAgPiA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQmFubmVyVmlzaWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYW5vbnltb3VzQ29uc2VudExhdW5jaERpYWxvZ1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRMYXVuY2hEaWFsb2dTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB2Y3I6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7fVxuXG4gIHZpZXdEZXRhaWxzKCk6IHZvaWQge1xuICAgIHRoaXMuaGlkZUJhbm5lcigpO1xuICAgIGNvbnN0IGRpYWxvZyA9IHRoaXMuYW5vbnltb3VzQ29uc2VudExhdW5jaERpYWxvZ1NlcnZpY2Uub3BlbkRpYWxvZyhcbiAgICAgIG51bGwsXG4gICAgICB0aGlzLnZjclxuICAgICk7XG4gICAgaWYgKGRpYWxvZykge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChkaWFsb2cuc3Vic2NyaWJlKCkpO1xuICAgIH1cbiAgfVxuXG4gIGFsbG93QWxsKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZVxuICAgICAgICAuZ2l2ZUFsbENvbnNlbnRzKClcbiAgICAgICAgLnBpcGUodGFwKCgpID0+IHRoaXMuaGlkZUJhbm5lcigpKSlcbiAgICAgICAgLnN1YnNjcmliZSgpXG4gICAgKTtcbiAgfVxuXG4gIGhpZGVCYW5uZXIoKTogdm9pZCB7XG4gICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UudG9nZ2xlQmFubmVyRGlzbWlzc2VkKHRydWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==