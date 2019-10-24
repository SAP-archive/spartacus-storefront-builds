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
var AnonymousConsentManagementBannerComponent = /** @class */ (function () {
    function AnonymousConsentManagementBannerComponent(modalService, anonymousConsentsService) {
        this.modalService = modalService;
        this.anonymousConsentsService = anonymousConsentsService;
        this.subscriptions = new Subscription();
        this.anonymousConsentsFeature = ANONYMOUS_CONSENTS_FEATURE;
    }
    /**
     * @return {?}
     */
    AnonymousConsentManagementBannerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.templatesUpdated$ = this.anonymousConsentsService
            .getTemplatesUpdated()
            .pipe(tap((/**
         * @param {?} updated
         * @return {?}
         */
        function (updated) {
            if (updated) {
                _this.anonymousConsentsService.toggleAnonymousConsentsBannerVisibility(true);
            }
        })));
        this.bannerVisible$ = this.anonymousConsentsService.isAnonymousConsentsBannerVisible();
    };
    /**
     * @return {?}
     */
    AnonymousConsentManagementBannerComponent.prototype.viewDetails = /**
     * @return {?}
     */
    function () {
        this.hideBanner();
        this.modalService.open(AnonymousConsentDialogComponent, {
            centered: true,
            size: 'lg',
        });
    };
    /**
     * @return {?}
     */
    AnonymousConsentManagementBannerComponent.prototype.allowAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscriptions.add(this.anonymousConsentsService
            .giveAllConsents()
            .pipe(tap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return _this.hideBanner(); })))
            .subscribe());
    };
    /**
     * @return {?}
     */
    AnonymousConsentManagementBannerComponent.prototype.hideBanner = /**
     * @return {?}
     */
    function () {
        this.anonymousConsentsService.toggleAnonymousConsentsBannerVisibility(false);
    };
    /**
     * @return {?}
     */
    AnonymousConsentManagementBannerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.unsubscribe();
    };
    AnonymousConsentManagementBannerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-anonymous-consent-management-banner',
                    template: "<ng-container *ngIf=\"templatesUpdated$ | async\"></ng-container>\n<ng-container *ngIf=\"bannerVisible$ | async as bannerVisible\">\n  <div\n    [ngClass]=\"{ 'anonymous-consent-banner-hidden': !bannerVisible }\"\n    class=\"anonymous-consent-banner\"\n  >\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-xs-12\">\n          <div class=\"cx-banner-title\">\n            {{ 'anonymousConsents.banner.title' | cxTranslate }}\n          </div>\n          <div class=\"cx-banner-description\">\n            {{ 'anonymousConsents.banner.description' | cxTranslate }}\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-xs-12 cx-banner-buttons\">\n          <button class=\"btn btn-action\" (click)=\"viewDetails()\">\n            {{ 'anonymousConsents.banner.viewDetails' | cxTranslate }}\n          </button>\n          <button class=\"btn btn-primary\" (click)=\"allowAll()\">\n            {{ 'anonymousConsents.banner.allowAll' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    AnonymousConsentManagementBannerComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: AnonymousConsentsService }
    ]; };
    return AnonymousConsentManagementBannerComponent;
}());
export { AnonymousConsentManagementBannerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9iYW5uZXIvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLDBCQUEwQixHQUMzQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBQzFJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV0RTtJQVlFLG1EQUNVLFlBQTBCLEVBQzFCLHdCQUFrRDtRQURsRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBUnBELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUzQyw2QkFBd0IsR0FBRywwQkFBMEIsQ0FBQztJQU9uRCxDQUFDOzs7O0lBRUosNERBQVE7OztJQUFSO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QjthQUNuRCxtQkFBbUIsRUFBRTthQUNyQixJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUEsT0FBTztZQUNULElBQUksT0FBTyxFQUFFO2dCQUNYLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1Q0FBdUMsQ0FDbkUsSUFBSSxDQUNMLENBQUM7YUFDSDtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7UUFDSixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDO0lBQ3pGLENBQUM7Ozs7SUFFRCwrREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUU7WUFDdEQsUUFBUSxFQUFFLElBQUk7WUFDZCxJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCw0REFBUTs7O0lBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUNwQixJQUFJLENBQUMsd0JBQXdCO2FBQzFCLGVBQWUsRUFBRTthQUNqQixJQUFJLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsRUFBRSxFQUFqQixDQUFpQixFQUFDLENBQUM7YUFDakMsU0FBUyxFQUFFLENBQ2YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCw4REFBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUNBQXVDLENBQ25FLEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELCtEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Z0JBekRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0NBQXdDO29CQUNsRCx1bENBQW1FO2lCQUNwRTs7OztnQkFMUSxZQUFZO2dCQU5uQix3QkFBd0I7O0lBa0UxQixnREFBQztDQUFBLEFBMURELElBMERDO1NBdERZLHlDQUF5Qzs7Ozs7O0lBRXBELGtFQUEyQzs7SUFFM0MsNkVBQXNEOztJQUN0RCxtRUFBb0M7O0lBQ3BDLHNFQUF1Qzs7Ozs7SUFHckMsaUVBQWtDOzs7OztJQUNsQyw2RUFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnRzL2RpYWxvZy9hbm9ueW1vdXMtY29uc2VudC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGFub255bW91c0NvbnNlbnRzRmVhdHVyZSA9IEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFO1xuICBiYW5uZXJWaXNpYmxlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgdGVtcGxhdGVzVXBkYXRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlc1VwZGF0ZWQkID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2VcbiAgICAgIC5nZXRUZW1wbGF0ZXNVcGRhdGVkKClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAodXBkYXRlZCA9PiB7XG4gICAgICAgICAgaWYgKHVwZGF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLnRvZ2dsZUFub255bW91c0NvbnNlbnRzQmFubmVyVmlzaWJpbGl0eShcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIHRoaXMuYmFubmVyVmlzaWJsZSQgPSB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0Fub255bW91c0NvbnNlbnRzQmFubmVyVmlzaWJsZSgpO1xuICB9XG5cbiAgdmlld0RldGFpbHMoKTogdm9pZCB7XG4gICAgdGhpcy5oaWRlQmFubmVyKCk7XG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihBbm9ueW1vdXNDb25zZW50RGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHNpemU6ICdsZycsXG4gICAgfSk7XG4gIH1cblxuICBhbGxvd0FsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2VcbiAgICAgICAgLmdpdmVBbGxDb25zZW50cygpXG4gICAgICAgIC5waXBlKHRhcChfID0+IHRoaXMuaGlkZUJhbm5lcigpKSlcbiAgICAgICAgLnN1YnNjcmliZSgpXG4gICAgKTtcbiAgfVxuXG4gIGhpZGVCYW5uZXIoKTogdm9pZCB7XG4gICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UudG9nZ2xlQW5vbnltb3VzQ29uc2VudHNCYW5uZXJWaXNpYmlsaXR5KFxuICAgICAgZmFsc2VcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==