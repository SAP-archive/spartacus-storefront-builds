/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnonymousConsentsConfig, AuthService, isFeatureLevel, } from '@spartacus/core';
import { iif, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { AnonymousConsentsDialogComponent } from '../../../shared/components/anonymous-consents/dialog/anonymous-consents-dialog.component';
import { ModalService } from '../../../shared/components/modal/index';
import { NavigationService } from '../navigation/navigation.service';
export class FooterNavigationComponent {
    /**
     * @param {?} componentData
     * @param {?} service
     * @param {?=} anonymousConsentsConfig
     * @param {?=} authService
     * @param {?=} modalService
     */
    constructor(componentData, service, anonymousConsentsConfig, authService, modalService) {
        this.componentData = componentData;
        this.service = service;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.authService = authService;
        this.modalService = modalService;
        this.node$ = this.service.getNavigationNode(this.componentData.data$);
        this.styleClass$ = this.componentData.data$.pipe(map((/**
         * @param {?} d
         * @return {?}
         */
        d => d.styleClass)));
        this.data$ = this.componentData.data$;
    }
    /**
     * @return {?}
     */
    get showConsentPreferences() {
        // TODO(issue:4989) Anonymous consents - remove the `iif` operator and just return the `trueResult` parameter
        return iif((/**
         * @return {?}
         */
        () => Boolean(this.anonymousConsentsConfig) &&
            isFeatureLevel(this.anonymousConsentsConfig, '1.3')), this.authService
            .isUserLoggedIn()
            .pipe(map((/**
         * @param {?} isUserLoggedIn
         * @return {?}
         */
        isUserLoggedIn => !isUserLoggedIn &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            this.anonymousConsentsConfig.anonymousConsents.footerLink))), of(false));
    }
    /**
     * @return {?}
     */
    openDialog() {
        if (Boolean(this.anonymousConsentsConfig) &&
            // TODO(issue:4989) Anonymous consents - remove `isFeatureLevel(this.anonymousConsentsConfig, '1.3')` check
            isFeatureLevel(this.anonymousConsentsConfig, '1.3')) {
            this.modalService.open(AnonymousConsentsDialogComponent, {
                centered: true,
                size: 'lg',
            });
        }
    }
}
FooterNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-footer-navigation',
                template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [flyout]=\"false\"\n  [ngClass]=\"styleClass$ | async\"\n></cx-navigation-ui>\n\n<div *ngIf=\"showConsentPreferences | async\" class=\"anonymous-consents\">\n  <a role=\"link\" (click)=\"openDialog()\">{{\n    'anonymousConsents.preferences' | cxTranslate\n  }}</a>\n</div>\n\n<div class=\"notice\" *ngIf=\"data$ | async as data\">\n  {{ data.notice }}\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
FooterNavigationComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: NavigationService },
    { type: AnonymousConsentsConfig },
    { type: AuthService },
    { type: ModalService }
];
if (false) {
    /** @type {?} */
    FooterNavigationComponent.prototype.node$;
    /** @type {?} */
    FooterNavigationComponent.prototype.styleClass$;
    /** @type {?} */
    FooterNavigationComponent.prototype.data$;
    /**
     * @type {?}
     * @protected
     */
    FooterNavigationComponent.prototype.componentData;
    /**
     * @type {?}
     * @protected
     */
    FooterNavigationComponent.prototype.service;
    /**
     * @type {?}
     * @protected
     */
    FooterNavigationComponent.prototype.anonymousConsentsConfig;
    /**
     * @type {?}
     * @protected
     */
    FooterNavigationComponent.prototype.authService;
    /**
     * @type {?}
     * @protected
     */
    FooterNavigationComponent.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixXQUFXLEVBRVgsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLEdBQUcsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDBGQUEwRixDQUFDO0FBQzVJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU9yRSxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7OztJQXFDcEMsWUFDWSxhQUF1RCxFQUN2RCxPQUEwQixFQUMxQix1QkFBaUQsRUFDakQsV0FBeUIsRUFDekIsWUFBMkI7UUFKM0Isa0JBQWEsR0FBYixhQUFhLENBQTBDO1FBQ3ZELFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQzFCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBMEI7UUFDakQsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFDekIsaUJBQVksR0FBWixZQUFZLENBQWU7UUF6Q3ZDLFVBQUssR0FBK0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQ3pCLENBQUM7UUFFRixnQkFBVyxHQUF1QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzdELEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUMsQ0FDdkIsQ0FBQztRQUVGLFVBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztJQWtDOUIsQ0FBQzs7OztJQUVKLElBQUksc0JBQXNCO1FBQ3hCLDZHQUE2RztRQUM3RyxPQUFPLEdBQUc7OztRQUNSLEdBQUcsRUFBRSxDQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7WUFDckMsY0FBYyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsR0FDckQsSUFBSSxDQUFDLFdBQVc7YUFDYixjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUNILEdBQUc7Ozs7UUFDRCxjQUFjLENBQUMsRUFBRSxDQUNmLENBQUMsY0FBYztZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUM7WUFDdkQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFDNUQsQ0FDRixFQUNILEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FDVixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7WUFDckMsMkdBQTJHO1lBQzNHLGNBQWMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLEVBQ25EO1lBQ0EsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLEVBQUU7Z0JBQ3ZELFFBQVEsRUFBRSxJQUFJO2dCQUNkLElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7WUFqRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLHVhQUFpRDtnQkFDakQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFWUSxnQkFBZ0I7WUFJaEIsaUJBQWlCO1lBWHhCLHVCQUF1QjtZQUN2QixXQUFXO1lBUUosWUFBWTs7OztJQVVuQiwwQ0FFRTs7SUFFRixnREFFRTs7SUFFRiwwQ0FBaUM7Ozs7O0lBNkIvQixrREFBaUU7Ozs7O0lBQ2pFLDRDQUFvQzs7Ozs7SUFDcEMsNERBQTJEOzs7OztJQUMzRCxnREFBbUM7Ozs7O0lBQ25DLGlEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICBBdXRoU2VydmljZSxcbiAgQ21zTmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgaXNGZWF0dXJlTGV2ZWwsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBpaWYsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Fub255bW91cy1jb25zZW50cy9kaWFsb2cvYW5vbnltb3VzLWNvbnNlbnRzLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvaW5kZXgnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk5vZGUgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtZm9vdGVyLW5hdmlnYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9vdGVyLW5hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudCB7XG4gIG5vZGUkOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25Ob2RlPiA9IHRoaXMuc2VydmljZS5nZXROYXZpZ2F0aW9uTm9kZShcbiAgICB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSRcbiAgKTtcblxuICBzdHlsZUNsYXNzJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUoXG4gICAgbWFwKGQgPT4gZC5zdHlsZUNsYXNzKVxuICApO1xuXG4gIGRhdGEkID0gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD4sXG4gICAgc2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgYW5vbnltb3VzQ29uc2VudHNDb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZVxuICApO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBJbnN0ZWFkLCB1c2U6XG4gICAqIFxuICAgIGBgYHRzXG4gICAgICBjb25zdHJ1Y3RvcihcbiAgICAgIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD4sXG4gICAgICBzZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSxcbiAgICAgIGFub255bW91c0NvbnNlbnRzQ29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICAgIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlXG4gICAgKVxuICAgIGBgYFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PixcbiAgICBzZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZVxuICApO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFub255bW91c0NvbnNlbnRzQ29uZmlnPzogQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlPzogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZT86IE1vZGFsU2VydmljZVxuICApIHt9XG5cbiAgZ2V0IHNob3dDb25zZW50UHJlZmVyZW5jZXMoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgLy8gVE9ETyhpc3N1ZTo0OTg5KSBBbm9ueW1vdXMgY29uc2VudHMgLSByZW1vdmUgdGhlIGBpaWZgIG9wZXJhdG9yIGFuZCBqdXN0IHJldHVybiB0aGUgYHRydWVSZXN1bHRgIHBhcmFtZXRlclxuICAgIHJldHVybiBpaWYoXG4gICAgICAoKSA9PlxuICAgICAgICBCb29sZWFuKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcpICYmXG4gICAgICAgIGlzRmVhdHVyZUxldmVsKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsICcxLjMnKSxcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgLmlzVXNlckxvZ2dlZEluKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgaXNVc2VyTG9nZ2VkSW4gPT5cbiAgICAgICAgICAgICAgIWlzVXNlckxvZ2dlZEluICYmXG4gICAgICAgICAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5mb290ZXJMaW5rXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgb2YoZmFsc2UpXG4gICAgKTtcbiAgfVxuXG4gIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgQm9vbGVhbih0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnKSAmJlxuICAgICAgLy8gVE9ETyhpc3N1ZTo0OTg5KSBBbm9ueW1vdXMgY29uc2VudHMgLSByZW1vdmUgYGlzRmVhdHVyZUxldmVsKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsICcxLjMnKWAgY2hlY2tcbiAgICAgIGlzRmVhdHVyZUxldmVsKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsICcxLjMnKVxuICAgICkge1xuICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihBbm9ueW1vdXNDb25zZW50c0RpYWxvZ0NvbXBvbmVudCwge1xuICAgICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgICAgc2l6ZTogJ2xnJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19