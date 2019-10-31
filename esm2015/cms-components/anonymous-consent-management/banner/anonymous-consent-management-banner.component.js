/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AnonymousConsentsService, ANONYMOUS_CONSENTS_FEATURE, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AnonymousConsentDialogComponent } from '../../../shared/components/anonymous-consents/dialog/anonymous-consent-dialog.component';
import { ModalService } from '../../../shared/components/modal/index';
export class AnonymousConsentManagementBannerComponent {
    /**
     * @param {?} modalService
     * @param {?} anonymousConsentsService
     */
    constructor(modalService, anonymousConsentsService) {
        this.modalService = modalService;
        this.anonymousConsentsService = anonymousConsentsService;
        this.subscriptions = new Subscription();
        this.anonymousConsentsFeature = ANONYMOUS_CONSENTS_FEATURE;
        this.bannerVisible$ = this.anonymousConsentsService.isBannerVisible();
    }
    /**
     * @return {?}
     */
    viewDetails() {
        this.hideBanner();
        this.modalService.open(AnonymousConsentDialogComponent, {
            centered: true,
            size: 'lg',
        });
    }
    /**
     * @return {?}
     */
    allowAll() {
        this.subscriptions.add(this.anonymousConsentsService
            .giveAllConsents()
            .pipe(tap((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.hideBanner())))
            .subscribe());
    }
    /**
     * @return {?}
     */
    hideBanner() {
        this.anonymousConsentsService.toggleBannerDismissed(true);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
AnonymousConsentManagementBannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-anonymous-consent-management-banner',
                template: "<ng-container *ngIf=\"bannerVisible$ | async as bannerVisible\">\n  <div\n    [ngClass]=\"{ 'anonymous-consent-banner-hidden': !bannerVisible }\"\n    class=\"anonymous-consent-banner\"\n  >\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-xs-12\">\n          <div class=\"cx-banner-title\">\n            {{ 'anonymousConsents.banner.title' | cxTranslate }}\n          </div>\n          <div class=\"cx-banner-description\">\n            {{ 'anonymousConsents.banner.description' | cxTranslate }}\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-xs-12 cx-banner-buttons\">\n          <button class=\"btn btn-action\" (click)=\"viewDetails()\">\n            {{ 'anonymousConsents.banner.viewDetails' | cxTranslate }}\n          </button>\n          <button class=\"btn btn-primary\" (click)=\"allowAll()\">\n            {{ 'anonymousConsents.banner.allowAll' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
AnonymousConsentManagementBannerComponent.ctorParameters = () => [
    { type: ModalService },
    { type: AnonymousConsentsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentManagementBannerComponent.prototype.subscriptions;
    /** @type {?} */
    AnonymousConsentManagementBannerComponent.prototype.anonymousConsentsFeature;
    /** @type {?} */
    AnonymousConsentManagementBannerComponent.prototype.bannerVisible$;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentManagementBannerComponent.prototype.modalService;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentManagementBannerComponent.prototype.anonymousConsentsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9iYW5uZXIvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsMEJBQTBCLEdBQzNCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUZBQXlGLENBQUM7QUFDMUksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBTXRFLE1BQU0sT0FBTyx5Q0FBeUM7Ozs7O0lBUXBELFlBQ1UsWUFBMEIsRUFDMUIsd0JBQWtEO1FBRGxELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFUcEQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNDLDZCQUF3QixHQUFHLDBCQUEwQixDQUFDO1FBQ3RELG1CQUFjLEdBRVYsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBS2pELENBQUM7Ozs7SUFFSixXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFO1lBQ3RELFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUNwQixJQUFJLENBQUMsd0JBQXdCO2FBQzFCLGVBQWUsRUFBRTthQUNqQixJQUFJLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFDLENBQUM7YUFDakMsU0FBUyxFQUFFLENBQ2YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3Q0FBd0M7Z0JBQ2xELG9oQ0FBbUU7YUFDcEU7Ozs7WUFMUSxZQUFZO1lBTm5CLHdCQUF3Qjs7Ozs7OztJQWF4QixrRUFBMkM7O0lBRTNDLDZFQUFzRDs7SUFDdEQsbUVBRW9EOzs7OztJQUdsRCxpRUFBa0M7Ozs7O0lBQ2xDLDZFQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnRzL2RpYWxvZy9hbm9ueW1vdXMtY29uc2VudC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBhbm9ueW1vdXNDb25zZW50c0ZlYXR1cmUgPSBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRTtcbiAgYmFubmVyVmlzaWJsZSQ6IE9ic2VydmFibGU8XG4gICAgYm9vbGVhblxuICA+ID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuaXNCYW5uZXJWaXNpYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlXG4gICkge31cblxuICB2aWV3RGV0YWlscygpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGVCYW5uZXIoKTtcbiAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEFub255bW91c0NvbnNlbnREaWFsb2dDb21wb25lbnQsIHtcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgc2l6ZTogJ2xnJyxcbiAgICB9KTtcbiAgfVxuXG4gIGFsbG93QWxsKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZVxuICAgICAgICAuZ2l2ZUFsbENvbnNlbnRzKClcbiAgICAgICAgLnBpcGUodGFwKF8gPT4gdGhpcy5oaWRlQmFubmVyKCkpKVxuICAgICAgICAuc3Vic2NyaWJlKClcbiAgICApO1xuICB9XG5cbiAgaGlkZUJhbm5lcigpOiB2b2lkIHtcbiAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS50b2dnbGVCYW5uZXJEaXNtaXNzZWQodHJ1ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19