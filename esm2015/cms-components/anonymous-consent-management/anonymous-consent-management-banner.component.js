/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AnonymousConsentsService, ANONYMOUS_CONSENTS_FEATURE, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AnonymousConsentsDialogComponent } from '../../shared/components/anonymous-consents/dialog/anonymous-consents-dialog.component';
import { ModalService } from '../../shared/components/modal/index';
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.templatesUpdated$ = this.anonymousConsentsService
            .getTemplatesUpdated()
            .pipe(tap((/**
         * @param {?} updated
         * @return {?}
         */
        updated => {
            if (updated) {
                this.anonymousConsentsService.toggleAnonymousConsentsBannerVisibility(true);
            }
        })));
        this.bannerVisible$ = this.anonymousConsentsService.isAnonymousConsentsBannerVisible();
    }
    /**
     * @return {?}
     */
    viewDetails() {
        this.hideBanner();
        this.modalService.open(AnonymousConsentsDialogComponent, {
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
        this.anonymousConsentsService.toggleAnonymousConsentsBannerVisibility(false);
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
                template: "<ng-container *cxFeature=\"anonymousConsentsFeature\">\n  <ng-container *ngIf=\"templatesUpdated$ | async\"></ng-container>\n  <ng-container *ngIf=\"bannerVisible$ | async as bannerVisible\">\n    <div\n      [ngClass]=\"{ 'anonymous-consent-banner-hidden': !bannerVisible }\"\n      class=\"anonymous-consent-banner\"\n    >\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-8 col-xs-12\">\n            <div class=\"cx-banner-title\">\n              {{ 'anonymousConsents.banner.title' | cxTranslate }}\n            </div>\n            <div class=\"cx-banner-description\">\n              {{ 'anonymousConsents.banner.description' | cxTranslate }}\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-xs-12 cx-banner-buttons\">\n            <button class=\"btn btn-action\" (click)=\"viewDetails()\">\n              {{ 'anonymousConsents.banner.viewDetails' | cxTranslate }}\n            </button>\n            <button class=\"btn btn-primary\" (click)=\"allowAll()\">\n              {{ 'anonymousConsents.banner.allowAll' | cxTranslate }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n"
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
    /** @type {?} */
    AnonymousConsentManagementBannerComponent.prototype.templatesUpdated$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9hbm9ueW1vdXMtY29uc2VudC1tYW5hZ2VtZW50LWJhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsMEJBQTBCLEdBQzNCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDekksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBTW5FLE1BQU0sT0FBTyx5Q0FBeUM7Ozs7O0lBUXBELFlBQ1UsWUFBMEIsRUFDMUIsd0JBQWtEO1FBRGxELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFScEQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNDLDZCQUF3QixHQUFHLDBCQUEwQixDQUFDO0lBT25ELENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyx3QkFBd0I7YUFDbkQsbUJBQW1CLEVBQUU7YUFDckIsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNaLElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1Q0FBdUMsQ0FDbkUsSUFBSSxDQUNMLENBQUM7YUFDSDtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7UUFDSixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDO0lBQ3pGLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxFQUFFO1lBQ3ZELFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUNwQixJQUFJLENBQUMsd0JBQXdCO2FBQzFCLGVBQWUsRUFBRTthQUNqQixJQUFJLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFDLENBQUM7YUFDakMsU0FBUyxFQUFFLENBQ2YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVDQUF1QyxDQUNuRSxLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7WUF6REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3Q0FBd0M7Z0JBQ2xELHd0Q0FBbUU7YUFDcEU7Ozs7WUFMUSxZQUFZO1lBTm5CLHdCQUF3Qjs7Ozs7OztJQWN4QixrRUFBMkM7O0lBRTNDLDZFQUFzRDs7SUFDdEQsbUVBQW9DOztJQUNwQyxzRUFBdUM7Ozs7O0lBR3JDLGlFQUFrQzs7Ozs7SUFDbEMsNkVBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29tcG9uZW50cy9hbm9ueW1vdXMtY29uc2VudHMvZGlhbG9nL2Fub255bW91cy1jb25zZW50cy1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGFub255bW91c0NvbnNlbnRzRmVhdHVyZSA9IEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFO1xuICBiYW5uZXJWaXNpYmxlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgdGVtcGxhdGVzVXBkYXRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlc1VwZGF0ZWQkID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2VcbiAgICAgIC5nZXRUZW1wbGF0ZXNVcGRhdGVkKClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAodXBkYXRlZCA9PiB7XG4gICAgICAgICAgaWYgKHVwZGF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLnRvZ2dsZUFub255bW91c0NvbnNlbnRzQmFubmVyVmlzaWJpbGl0eShcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIHRoaXMuYmFubmVyVmlzaWJsZSQgPSB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0Fub255bW91c0NvbnNlbnRzQmFubmVyVmlzaWJsZSgpO1xuICB9XG5cbiAgdmlld0RldGFpbHMoKTogdm9pZCB7XG4gICAgdGhpcy5oaWRlQmFubmVyKCk7XG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihBbm9ueW1vdXNDb25zZW50c0RpYWxvZ0NvbXBvbmVudCwge1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICBzaXplOiAnbGcnLFxuICAgIH0pO1xuICB9XG5cbiAgYWxsb3dBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlXG4gICAgICAgIC5naXZlQWxsQ29uc2VudHMoKVxuICAgICAgICAucGlwZSh0YXAoXyA9PiB0aGlzLmhpZGVCYW5uZXIoKSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICk7XG4gIH1cblxuICBoaWRlQmFubmVyKCk6IHZvaWQge1xuICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLnRvZ2dsZUFub255bW91c0NvbnNlbnRzQmFubmVyVmlzaWJpbGl0eShcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=