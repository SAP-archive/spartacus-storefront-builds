/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AnonymousConsentsService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AnonymousConsentDialogComponent } from '../../../shared/components/anonymous-consents/dialog/anonymous-consent-dialog.component';
import { ModalService } from '../../../shared/components/modal/index';
var AnonymousConsentManagementBannerComponent = /** @class */ (function () {
    function AnonymousConsentManagementBannerComponent(modalService, anonymousConsentsService) {
        this.modalService = modalService;
        this.anonymousConsentsService = anonymousConsentsService;
        this.subscriptions = new Subscription();
        this.bannerVisible$ = this.anonymousConsentsService.isBannerVisible();
    }
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
        this.anonymousConsentsService.toggleBannerDismissed(true);
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
                    template: "<ng-container *ngIf=\"bannerVisible$ | async as bannerVisible\">\n  <div\n    [ngClass]=\"{ 'anonymous-consent-banner-hidden': !bannerVisible }\"\n    class=\"anonymous-consent-banner\"\n  >\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-xs-12\">\n          <div class=\"cx-banner-title\">\n            {{ 'anonymousConsents.banner.title' | cxTranslate }}\n          </div>\n          <div class=\"cx-banner-description\">\n            {{ 'anonymousConsents.banner.description' | cxTranslate }}\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-xs-12 cx-banner-buttons\">\n          <button class=\"btn btn-action\" (click)=\"viewDetails()\">\n            {{ 'anonymousConsents.banner.viewDetails' | cxTranslate }}\n          </button>\n          <button class=\"btn btn-primary\" (click)=\"allowAll()\">\n            {{ 'anonymousConsents.banner.allowAll' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9iYW5uZXIvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNELE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBQzFJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV0RTtJQVdFLG1EQUNVLFlBQTBCLEVBQzFCLHdCQUFrRDtRQURsRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBUnBELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUzQyxtQkFBYyxHQUVWLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUtqRCxDQUFDOzs7O0lBRUosK0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFO1lBQ3RELFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsNERBQVE7OztJQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FDcEIsSUFBSSxDQUFDLHdCQUF3QjthQUMxQixlQUFlLEVBQUU7YUFDakIsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLEVBQUUsRUFBakIsQ0FBaUIsRUFBQyxDQUFDO2FBQ2pDLFNBQVMsRUFBRSxDQUNmLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsOERBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCwrREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7O2dCQXZDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdDQUF3QztvQkFDbEQsb2hDQUFtRTtpQkFDcEU7Ozs7Z0JBTFEsWUFBWTtnQkFKWix3QkFBd0I7O0lBOENqQyxnREFBQztDQUFBLEFBeENELElBd0NDO1NBcENZLHlDQUF5Qzs7Ozs7O0lBQ3BELGtFQUEyQzs7SUFFM0MsbUVBRW9EOzs7OztJQUdsRCxpRUFBa0M7Ozs7O0lBQ2xDLDZFQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnRzL2RpYWxvZy9hbm9ueW1vdXMtY29uc2VudC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBiYW5uZXJWaXNpYmxlJDogT2JzZXJ2YWJsZTxcbiAgICBib29sZWFuXG4gID4gPSB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0Jhbm5lclZpc2libGUoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2VcbiAgKSB7fVxuXG4gIHZpZXdEZXRhaWxzKCk6IHZvaWQge1xuICAgIHRoaXMuaGlkZUJhbm5lcigpO1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQW5vbnltb3VzQ29uc2VudERpYWxvZ0NvbXBvbmVudCwge1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICBzaXplOiAnbGcnLFxuICAgIH0pO1xuICB9XG5cbiAgYWxsb3dBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlXG4gICAgICAgIC5naXZlQWxsQ29uc2VudHMoKVxuICAgICAgICAucGlwZSh0YXAoXyA9PiB0aGlzLmhpZGVCYW5uZXIoKSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICk7XG4gIH1cblxuICBoaWRlQmFubmVyKCk6IHZvaWQge1xuICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLnRvZ2dsZUJhbm5lckRpc21pc3NlZCh0cnVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=