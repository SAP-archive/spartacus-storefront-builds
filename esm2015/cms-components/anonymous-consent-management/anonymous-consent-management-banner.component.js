/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AnonymousConsentsService } from '@spartacus/core';
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
                template: "<!-- TODO(issue:4989) Anonymous consents -->\n<ng-container *cxFeatureLevel=\"'1.3'\">\n  <ng-container *ngIf=\"templatesUpdated$ | async\"></ng-container>\n  <ng-container *ngIf=\"bannerVisible$ | async as bannerVisible\">\n    <div\n      [ngClass]=\"{ 'anonymous-consent-banner-hidden': !bannerVisible }\"\n      class=\"anonymous-consent-banner\"\n    >\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-8 col-xs-12\">\n            <div class=\"cx-banner-title\">\n              {{ 'anonymousConsents.banner.title' | cxTranslate }}\n            </div>\n            <div class=\"cx-banner-description\">\n              {{ 'anonymousConsents.banner.description' | cxTranslate }}\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-xs-12 cx-banner-buttons\">\n            <button class=\"btn btn-action\" (click)=\"viewDetails()\">\n              {{ 'anonymousConsents.banner.viewDetails' | cxTranslate }}\n            </button>\n            <button class=\"btn btn-primary\" (click)=\"allowAll()\">\n              {{ 'anonymousConsents.banner.allowAll' | cxTranslate }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9hbm9ueW1vdXMtY29uc2VudC1tYW5hZ2VtZW50LWJhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNELE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVGQUF1RixDQUFDO0FBQ3pJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQU1uRSxNQUFNLE9BQU8seUNBQXlDOzs7OztJQU9wRCxZQUNVLFlBQTBCLEVBQzFCLHdCQUFrRDtRQURsRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBUHBELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVF4QyxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsd0JBQXdCO2FBQ25ELG1CQUFtQixFQUFFO2FBQ3JCLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDWixJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUNBQXVDLENBQ25FLElBQUksQ0FDTCxDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBQ0osSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztJQUN6RixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRTtZQUN2RCxRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FDcEIsSUFBSSxDQUFDLHdCQUF3QjthQUMxQixlQUFlLEVBQUU7YUFDakIsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUFDO2FBQ2pDLFNBQVMsRUFBRSxDQUNmLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1Q0FBdUMsQ0FDbkUsS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7O1lBeERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0NBQXdDO2dCQUNsRCx3dkNBQW1FO2FBQ3BFOzs7O1lBTFEsWUFBWTtZQUpaLHdCQUF3Qjs7Ozs7OztJQVkvQixrRUFBMkM7O0lBRTNDLG1FQUFvQzs7SUFDcEMsc0VBQXVDOzs7OztJQUdyQyxpRUFBa0M7Ozs7O0lBQ2xDLDZFQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnRzL2RpYWxvZy9hbm9ueW1vdXMtY29uc2VudHMtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQtYmFubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQtYmFubmVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBiYW5uZXJWaXNpYmxlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgdGVtcGxhdGVzVXBkYXRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlc1VwZGF0ZWQkID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2VcbiAgICAgIC5nZXRUZW1wbGF0ZXNVcGRhdGVkKClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAodXBkYXRlZCA9PiB7XG4gICAgICAgICAgaWYgKHVwZGF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLnRvZ2dsZUFub255bW91c0NvbnNlbnRzQmFubmVyVmlzaWJpbGl0eShcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIHRoaXMuYmFubmVyVmlzaWJsZSQgPSB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0Fub255bW91c0NvbnNlbnRzQmFubmVyVmlzaWJsZSgpO1xuICB9XG5cbiAgdmlld0RldGFpbHMoKTogdm9pZCB7XG4gICAgdGhpcy5oaWRlQmFubmVyKCk7XG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihBbm9ueW1vdXNDb25zZW50c0RpYWxvZ0NvbXBvbmVudCwge1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICBzaXplOiAnbGcnLFxuICAgIH0pO1xuICB9XG5cbiAgYWxsb3dBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlXG4gICAgICAgIC5naXZlQWxsQ29uc2VudHMoKVxuICAgICAgICAucGlwZSh0YXAoXyA9PiB0aGlzLmhpZGVCYW5uZXIoKSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICk7XG4gIH1cblxuICBoaWRlQmFubmVyKCk6IHZvaWQge1xuICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLnRvZ2dsZUFub255bW91c0NvbnNlbnRzQmFubmVyVmlzaWJpbGl0eShcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=