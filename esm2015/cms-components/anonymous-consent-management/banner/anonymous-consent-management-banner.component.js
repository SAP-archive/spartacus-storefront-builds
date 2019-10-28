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
                this.anonymousConsentsService.toggleBannerVisibility(true);
            }
        })));
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
        this.anonymousConsentsService.toggleBannerVisibility(false);
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
                template: "<ng-container *ngIf=\"templatesUpdated$ | async\"></ng-container>\n<ng-container *ngIf=\"bannerVisible$ | async as bannerVisible\">\n  <div\n    [ngClass]=\"{ 'anonymous-consent-banner-hidden': !bannerVisible }\"\n    class=\"anonymous-consent-banner\"\n  >\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-xs-12\">\n          <div class=\"cx-banner-title\">\n            {{ 'anonymousConsents.banner.title' | cxTranslate }}\n          </div>\n          <div class=\"cx-banner-description\">\n            {{ 'anonymousConsents.banner.description' | cxTranslate }}\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-xs-12 cx-banner-buttons\">\n          <button class=\"btn btn-action\" (click)=\"viewDetails()\">\n            {{ 'anonymousConsents.banner.viewDetails' | cxTranslate }}\n          </button>\n          <button class=\"btn btn-primary\" (click)=\"allowAll()\">\n            {{ 'anonymousConsents.banner.allowAll' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9iYW5uZXIvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLDBCQUEwQixHQUMzQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBQzFJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQU10RSxNQUFNLE9BQU8seUNBQXlDOzs7OztJQVFwRCxZQUNVLFlBQTBCLEVBQzFCLHdCQUFrRDtRQURsRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBUnBELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUzQyw2QkFBd0IsR0FBRywwQkFBMEIsQ0FBQztJQU9uRCxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsd0JBQXdCO2FBQ25ELG1CQUFtQixFQUFFO2FBQ3JCLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDWixJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUQ7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBQ0osSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDeEUsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUU7WUFDdEQsUUFBUSxFQUFFLElBQUk7WUFDZCxJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyx3QkFBd0I7YUFDMUIsZUFBZSxFQUFFO2FBQ2pCLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUMsQ0FBQzthQUNqQyxTQUFTLEVBQUUsQ0FDZixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7OztZQXJERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdDQUF3QztnQkFDbEQsdWxDQUFtRTthQUNwRTs7OztZQUxRLFlBQVk7WUFObkIsd0JBQXdCOzs7Ozs7O0lBY3hCLGtFQUEyQzs7SUFFM0MsNkVBQXNEOztJQUN0RCxtRUFBb0M7O0lBQ3BDLHNFQUF1Qzs7Ozs7SUFHckMsaUVBQWtDOzs7OztJQUNsQyw2RUFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnRzL2RpYWxvZy9hbm9ueW1vdXMtY29uc2VudC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGFub255bW91c0NvbnNlbnRzRmVhdHVyZSA9IEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFO1xuICBiYW5uZXJWaXNpYmxlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgdGVtcGxhdGVzVXBkYXRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlc1VwZGF0ZWQkID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2VcbiAgICAgIC5nZXRUZW1wbGF0ZXNVcGRhdGVkKClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAodXBkYXRlZCA9PiB7XG4gICAgICAgICAgaWYgKHVwZGF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLnRvZ2dsZUJhbm5lclZpc2liaWxpdHkodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB0aGlzLmJhbm5lclZpc2libGUkID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuaXNCYW5uZXJWaXNpYmxlKCk7XG4gIH1cblxuICB2aWV3RGV0YWlscygpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGVCYW5uZXIoKTtcbiAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEFub255bW91c0NvbnNlbnREaWFsb2dDb21wb25lbnQsIHtcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgc2l6ZTogJ2xnJyxcbiAgICB9KTtcbiAgfVxuXG4gIGFsbG93QWxsKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZVxuICAgICAgICAuZ2l2ZUFsbENvbnNlbnRzKClcbiAgICAgICAgLnBpcGUodGFwKF8gPT4gdGhpcy5oaWRlQmFubmVyKCkpKVxuICAgICAgICAuc3Vic2NyaWJlKClcbiAgICApO1xuICB9XG5cbiAgaGlkZUJhbm5lcigpOiB2b2lkIHtcbiAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS50b2dnbGVCYW5uZXJWaXNpYmlsaXR5KGZhbHNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=