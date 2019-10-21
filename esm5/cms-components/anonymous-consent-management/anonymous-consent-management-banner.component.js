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
        this.modalService.open(AnonymousConsentsDialogComponent, {
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
                    template: "<ng-container *cxFeature=\"anonymousConsentsFeature\">\n  <ng-container *ngIf=\"templatesUpdated$ | async\"></ng-container>\n  <ng-container *ngIf=\"bannerVisible$ | async as bannerVisible\">\n    <div\n      [ngClass]=\"{ 'anonymous-consent-banner-hidden': !bannerVisible }\"\n      class=\"anonymous-consent-banner\"\n    >\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-8 col-xs-12\">\n            <div class=\"cx-banner-title\">\n              {{ 'anonymousConsents.banner.title' | cxTranslate }}\n            </div>\n            <div class=\"cx-banner-description\">\n              {{ 'anonymousConsents.banner.description' | cxTranslate }}\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-xs-12 cx-banner-buttons\">\n            <button class=\"btn btn-action\" (click)=\"viewDetails()\">\n              {{ 'anonymousConsents.banner.viewDetails' | cxTranslate }}\n            </button>\n            <button class=\"btn btn-primary\" (click)=\"allowAll()\">\n              {{ 'anonymousConsents.banner.allowAll' | cxTranslate }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9hbm9ueW1vdXMtY29uc2VudC1tYW5hZ2VtZW50LWJhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsMEJBQTBCLEdBQzNCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDekksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRW5FO0lBWUUsbURBQ1UsWUFBMEIsRUFDMUIsd0JBQWtEO1FBRGxELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFScEQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNDLDZCQUF3QixHQUFHLDBCQUEwQixDQUFDO0lBT25ELENBQUM7Ozs7SUFFSiw0REFBUTs7O0lBQVI7UUFBQSxpQkFhQztRQVpDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsd0JBQXdCO2FBQ25ELG1CQUFtQixFQUFFO2FBQ3JCLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ1QsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLHdCQUF3QixDQUFDLHVDQUF1QyxDQUNuRSxJQUFJLENBQ0wsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUNKLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGdDQUFnQyxFQUFFLENBQUM7SUFDekYsQ0FBQzs7OztJQUVELCtEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRTtZQUN2RCxRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDREQUFROzs7SUFBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyx3QkFBd0I7YUFDMUIsZUFBZSxFQUFFO2FBQ2pCLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxFQUFFLEVBQWpCLENBQWlCLEVBQUMsQ0FBQzthQUNqQyxTQUFTLEVBQUUsQ0FDZixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDhEQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1Q0FBdUMsQ0FDbkUsS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsK0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDOztnQkF6REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3Q0FBd0M7b0JBQ2xELHd0Q0FBbUU7aUJBQ3BFOzs7O2dCQUxRLFlBQVk7Z0JBTm5CLHdCQUF3Qjs7SUFrRTFCLGdEQUFDO0NBQUEsQUExREQsSUEwREM7U0F0RFkseUNBQXlDOzs7Ozs7SUFFcEQsa0VBQTJDOztJQUUzQyw2RUFBc0Q7O0lBQ3RELG1FQUFvQzs7SUFDcEMsc0VBQXVDOzs7OztJQUdyQyxpRUFBa0M7Ozs7O0lBQ2xDLDZFQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnRzL2RpYWxvZy9hbm9ueW1vdXMtY29uc2VudHMtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQtYmFubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQtYmFubmVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBhbm9ueW1vdXNDb25zZW50c0ZlYXR1cmUgPSBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRTtcbiAgYmFubmVyVmlzaWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHRlbXBsYXRlc1VwZGF0ZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZXNVcGRhdGVkJCA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlXG4gICAgICAuZ2V0VGVtcGxhdGVzVXBkYXRlZCgpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKHVwZGF0ZWQgPT4ge1xuICAgICAgICAgIGlmICh1cGRhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS50b2dnbGVBbm9ueW1vdXNDb25zZW50c0Jhbm5lclZpc2liaWxpdHkoXG4gICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB0aGlzLmJhbm5lclZpc2libGUkID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuaXNBbm9ueW1vdXNDb25zZW50c0Jhbm5lclZpc2libGUoKTtcbiAgfVxuXG4gIHZpZXdEZXRhaWxzKCk6IHZvaWQge1xuICAgIHRoaXMuaGlkZUJhbm5lcigpO1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQW5vbnltb3VzQ29uc2VudHNEaWFsb2dDb21wb25lbnQsIHtcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgc2l6ZTogJ2xnJyxcbiAgICB9KTtcbiAgfVxuXG4gIGFsbG93QWxsKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZVxuICAgICAgICAuZ2l2ZUFsbENvbnNlbnRzKClcbiAgICAgICAgLnBpcGUodGFwKF8gPT4gdGhpcy5oaWRlQmFubmVyKCkpKVxuICAgICAgICAuc3Vic2NyaWJlKClcbiAgICApO1xuICB9XG5cbiAgaGlkZUJhbm5lcigpOiB2b2lkIHtcbiAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS50b2dnbGVBbm9ueW1vdXNDb25zZW50c0Jhbm5lclZpc2liaWxpdHkoXG4gICAgICBmYWxzZVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19