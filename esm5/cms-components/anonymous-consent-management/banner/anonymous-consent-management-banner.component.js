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
                _this.anonymousConsentsService.toggleBannerVisibility(true);
            }
        })));
        this.bannerVisible$ = this.anonymousConsentsService.isBannerVisible();
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
        this.anonymousConsentsService.toggleBannerVisibility(false);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9iYW5uZXIvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLDBCQUEwQixHQUMzQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBQzFJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV0RTtJQVlFLG1EQUNVLFlBQTBCLEVBQzFCLHdCQUFrRDtRQURsRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBUnBELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUzQyw2QkFBd0IsR0FBRywwQkFBMEIsQ0FBQztJQU9uRCxDQUFDOzs7O0lBRUosNERBQVE7OztJQUFSO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QjthQUNuRCxtQkFBbUIsRUFBRTthQUNyQixJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUEsT0FBTztZQUNULElBQUksT0FBTyxFQUFFO2dCQUNYLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1RDtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7UUFDSixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4RSxDQUFDOzs7O0lBRUQsK0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFO1lBQ3RELFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsNERBQVE7OztJQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FDcEIsSUFBSSxDQUFDLHdCQUF3QjthQUMxQixlQUFlLEVBQUU7YUFDakIsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLEVBQUUsRUFBakIsQ0FBaUIsRUFBQyxDQUFDO2FBQ2pDLFNBQVMsRUFBRSxDQUNmLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsOERBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7SUFFRCwrREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7O2dCQXJERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdDQUF3QztvQkFDbEQsdWxDQUFtRTtpQkFDcEU7Ozs7Z0JBTFEsWUFBWTtnQkFObkIsd0JBQXdCOztJQThEMUIsZ0RBQUM7Q0FBQSxBQXRERCxJQXNEQztTQWxEWSx5Q0FBeUM7Ozs7OztJQUVwRCxrRUFBMkM7O0lBRTNDLDZFQUFzRDs7SUFDdEQsbUVBQW9DOztJQUNwQyxzRUFBdUM7Ozs7O0lBR3JDLGlFQUFrQzs7Ozs7SUFDbEMsNkVBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Fub255bW91cy1jb25zZW50cy9kaWFsb2cvYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQtYmFubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQtYmFubmVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBhbm9ueW1vdXNDb25zZW50c0ZlYXR1cmUgPSBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRTtcbiAgYmFubmVyVmlzaWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHRlbXBsYXRlc1VwZGF0ZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZXNVcGRhdGVkJCA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlXG4gICAgICAuZ2V0VGVtcGxhdGVzVXBkYXRlZCgpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKHVwZGF0ZWQgPT4ge1xuICAgICAgICAgIGlmICh1cGRhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS50b2dnbGVCYW5uZXJWaXNpYmlsaXR5KHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgdGhpcy5iYW5uZXJWaXNpYmxlJCA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQmFubmVyVmlzaWJsZSgpO1xuICB9XG5cbiAgdmlld0RldGFpbHMoKTogdm9pZCB7XG4gICAgdGhpcy5oaWRlQmFubmVyKCk7XG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihBbm9ueW1vdXNDb25zZW50RGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHNpemU6ICdsZycsXG4gICAgfSk7XG4gIH1cblxuICBhbGxvd0FsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2VcbiAgICAgICAgLmdpdmVBbGxDb25zZW50cygpXG4gICAgICAgIC5waXBlKHRhcChfID0+IHRoaXMuaGlkZUJhbm5lcigpKSlcbiAgICAgICAgLnN1YnNjcmliZSgpXG4gICAgKTtcbiAgfVxuXG4gIGhpZGVCYW5uZXIoKTogdm9pZCB7XG4gICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UudG9nZ2xlQmFubmVyVmlzaWJpbGl0eShmYWxzZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19