/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE, AuthService, isFeatureEnabled, } from '@spartacus/core';
import { iif, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { AnonymousConsentsDialogComponent } from '../../../shared/components/anonymous-consents/dialog/anonymous-consents-dialog.component';
import { ModalService } from '../../../shared/components/modal/index';
import { NavigationService } from '../navigation/navigation.service';
var FooterNavigationComponent = /** @class */ (function () {
    function FooterNavigationComponent(componentData, service, anonymousConsentsConfig, authService, modalService) {
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
        function (d) { return d.styleClass; })));
        this.data$ = this.componentData.data$;
    }
    Object.defineProperty(FooterNavigationComponent.prototype, "showConsentPreferences", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return iif((/**
             * @return {?}
             */
            function () {
                return Boolean(_this.anonymousConsentsConfig) &&
                    isFeatureEnabled(_this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE);
            }), this.authService
                .isUserLoggedIn()
                .pipe(map((/**
             * @param {?} isUserLoggedIn
             * @return {?}
             */
            function (isUserLoggedIn) {
                return !isUserLoggedIn &&
                    Boolean(_this.anonymousConsentsConfig.anonymousConsents) &&
                    _this.anonymousConsentsConfig.anonymousConsents.footerLink;
            }))), of(false));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FooterNavigationComponent.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        if (Boolean(this.anonymousConsentsConfig) &&
            isFeatureEnabled(this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE)) {
            this.modalService.open(AnonymousConsentsDialogComponent, {
                centered: true,
                size: 'lg',
            });
        }
    };
    FooterNavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-footer-navigation',
                    template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [flyout]=\"false\"\n  [ngClass]=\"styleClass$ | async\"\n></cx-navigation-ui>\n\n<div *ngIf=\"showConsentPreferences | async\" class=\"anonymous-consents\">\n  <a role=\"link\" (click)=\"openDialog()\">{{\n    'anonymousConsents.preferences' | cxTranslate\n  }}</a>\n</div>\n\n<div class=\"notice\" *ngIf=\"data$ | async as data\">\n  {{ data.notice }}\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    FooterNavigationComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: NavigationService },
        { type: AnonymousConsentsConfig },
        { type: AuthService },
        { type: ModalService }
    ]; };
    return FooterNavigationComponent;
}());
export { FooterNavigationComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUNMLHVCQUF1QixFQUN2QiwwQkFBMEIsRUFDMUIsV0FBVyxFQUVYLGdCQUFnQixHQUNqQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxHQUFHLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwwRkFBMEYsQ0FBQztBQUM1SSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFckU7SUEwQ0UsbUNBQ1ksYUFBdUQsRUFDdkQsT0FBMEIsRUFDMUIsdUJBQWlELEVBQ2pELFdBQXlCLEVBQ3pCLFlBQTJCO1FBSjNCLGtCQUFhLEdBQWIsYUFBYSxDQUEwQztRQUN2RCxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQTBCO1FBQ2pELGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBQ3pCLGlCQUFZLEdBQVosWUFBWSxDQUFlO1FBekN2QyxVQUFLLEdBQStCLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQ2hFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUN6QixDQUFDO1FBRUYsZ0JBQVcsR0FBdUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUM3RCxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsVUFBVSxFQUFaLENBQVksRUFBQyxDQUN2QixDQUFDO1FBRUYsVUFBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBa0M5QixDQUFDO0lBRUosc0JBQUksNkRBQXNCOzs7O1FBQTFCO1lBQUEsaUJBb0JDO1lBbkJDLE9BQU8sR0FBRzs7O1lBQ1I7Z0JBQ0UsT0FBQSxPQUFPLENBQUMsS0FBSSxDQUFDLHVCQUF1QixDQUFDO29CQUNyQyxnQkFBZ0IsQ0FDZCxLQUFJLENBQUMsdUJBQXVCLEVBQzVCLDBCQUEwQixDQUMzQjtZQUpELENBSUMsR0FDSCxJQUFJLENBQUMsV0FBVztpQkFDYixjQUFjLEVBQUU7aUJBQ2hCLElBQUksQ0FDSCxHQUFHOzs7O1lBQ0QsVUFBQSxjQUFjO2dCQUNaLE9BQUEsQ0FBQyxjQUFjO29CQUNmLE9BQU8sQ0FBQyxLQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUM7b0JBQ3ZELEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVO1lBRnpELENBRXlELEVBQzVELENBQ0YsRUFDSCxFQUFFLENBQUMsS0FBSyxDQUFDLENBQ1YsQ0FBQztRQUNKLENBQUM7OztPQUFBOzs7O0lBRUQsOENBQVU7OztJQUFWO1FBQ0UsSUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1lBQ3JDLGdCQUFnQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSwwQkFBMEIsQ0FBQyxFQUMxRTtZQUNBLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxFQUFFO2dCQUN2RCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxJQUFJLEVBQUUsSUFBSTthQUNYLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Z0JBbEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyx1YUFBaUQ7b0JBQ2pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFWUSxnQkFBZ0I7Z0JBSWhCLGlCQUFpQjtnQkFaeEIsdUJBQXVCO2dCQUV2QixXQUFXO2dCQVFKLFlBQVk7O0lBdUZyQixnQ0FBQztDQUFBLEFBbkZELElBbUZDO1NBOUVZLHlCQUF5Qjs7O0lBQ3BDLDBDQUVFOztJQUVGLGdEQUVFOztJQUVGLDBDQUFpQzs7Ozs7SUE2Qi9CLGtEQUFpRTs7Ozs7SUFDakUsNENBQW9DOzs7OztJQUNwQyw0REFBMkQ7Ozs7O0lBQzNELGdEQUFtQzs7Ozs7SUFDbkMsaURBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFLFxuICBBdXRoU2VydmljZSxcbiAgQ21zTmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgaXNGZWF0dXJlRW5hYmxlZCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGlpZiwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnRzL2RpYWxvZy9hbm9ueW1vdXMtY29uc2VudHMtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9pbmRleCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTm9kZSB9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi1ub2RlLm1vZGVsJztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1mb290ZXItbmF2aWdhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXItbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50IHtcbiAgbm9kZSQ6IE9ic2VydmFibGU8TmF2aWdhdGlvbk5vZGU+ID0gdGhpcy5zZXJ2aWNlLmdldE5hdmlnYXRpb25Ob2RlKFxuICAgIHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJFxuICApO1xuXG4gIHN0eWxlQ2xhc3MkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICBtYXAoZCA9PiBkLnN0eWxlQ2xhc3MpXG4gICk7XG5cbiAgZGF0YSQgPSB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PixcbiAgICBzZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSxcbiAgICBhbm9ueW1vdXNDb25zZW50c0NvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIEluc3RlYWQsIHVzZTpcbiAgICogXG4gICAgYGBgdHNcbiAgICAgIGNvbnN0cnVjdG9yKFxuICAgICAgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PixcbiAgICAgIHNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgICAgYW5vbnltb3VzQ29uc2VudHNDb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgICAgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2VcbiAgICApXG4gICAgYGBgXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc05hdmlnYXRpb25Db21wb25lbnQ+LFxuICAgIHNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc05hdmlnYXRpb25Db21wb25lbnQ+LFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYW5vbnltb3VzQ29uc2VudHNDb25maWc/OiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U/OiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlPzogTW9kYWxTZXJ2aWNlXG4gICkge31cblxuICBnZXQgc2hvd0NvbnNlbnRQcmVmZXJlbmNlcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gaWlmKFxuICAgICAgKCkgPT5cbiAgICAgICAgQm9vbGVhbih0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnKSAmJlxuICAgICAgICBpc0ZlYXR1cmVFbmFibGVkKFxuICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgICAgICAgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkVcbiAgICAgICAgKSxcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgLmlzVXNlckxvZ2dlZEluKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgaXNVc2VyTG9nZ2VkSW4gPT5cbiAgICAgICAgICAgICAgIWlzVXNlckxvZ2dlZEluICYmXG4gICAgICAgICAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5mb290ZXJMaW5rXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgb2YoZmFsc2UpXG4gICAgKTtcbiAgfVxuXG4gIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgQm9vbGVhbih0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnKSAmJlxuICAgICAgaXNGZWF0dXJlRW5hYmxlZCh0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLCBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSlcbiAgICApIHtcbiAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQW5vbnltb3VzQ29uc2VudHNEaWFsb2dDb21wb25lbnQsIHtcbiAgICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICAgIHNpemU6ICdsZycsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==