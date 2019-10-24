/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE, isFeatureEnabled, } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { NavigationService } from '../navigation/navigation.service';
var FooterNavigationComponent = /** @class */ (function () {
    function FooterNavigationComponent(componentData, service, anonymousConsentsConfig) {
        var _this = this;
        this.componentData = componentData;
        this.service = service;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.node$ = this.service.getNavigationNode(this.componentData.data$);
        this.styleClass$ = this.componentData.data$.pipe(map((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return d.styleClass; })));
        // in order to preserve the backwards compatibility, this should render only if anonymous consents feature is disabled
        this.data$ = this.componentData.data$.pipe(filter((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            return !isFeatureEnabled(_this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE);
        })));
    }
    FooterNavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-footer-navigation',
                    template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [flyout]=\"false\"\n  [ngClass]=\"styleClass$ | async\"\n></cx-navigation-ui>\n\n<div class=\"notice\" *ngIf=\"data$ | async as data\">\n  {{ data.notice }}\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    FooterNavigationComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: NavigationService },
        { type: AnonymousConsentsConfig }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUNMLHVCQUF1QixFQUN2QiwwQkFBMEIsRUFFMUIsZ0JBQWdCLEdBQ2pCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUV4RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVyRTtJQStDRSxtQ0FDWSxhQUF1RCxFQUN2RCxPQUEwQixFQUMxQix1QkFBaUQ7UUFIN0QsaUJBSUk7UUFIUSxrQkFBYSxHQUFiLGFBQWEsQ0FBMEM7UUFDdkQsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDMUIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUEwQjtRQTVDN0QsVUFBSyxHQUErQixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUNoRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FDekIsQ0FBQztRQUVGLGdCQUFXLEdBQXVCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDN0QsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFVBQVUsRUFBWixDQUFZLEVBQUMsQ0FDdkIsQ0FBQzs7UUFHRixVQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNuQyxNQUFNOzs7O1FBQ0osVUFBQSxDQUFDO1lBQ0MsT0FBQSxDQUFDLGdCQUFnQixDQUNmLEtBQUksQ0FBQyx1QkFBdUIsRUFDNUIsMEJBQTBCLENBQzNCO1FBSEQsQ0FHQyxFQUNKLENBQ0YsQ0FBQztJQTRCQyxDQUFDOztnQkFuREwsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLG1PQUFpRDtvQkFDakQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVJRLGdCQUFnQjtnQkFFaEIsaUJBQWlCO2dCQVR4Qix1QkFBdUI7O0lBK0R6QixnQ0FBQztDQUFBLEFBcERELElBb0RDO1NBL0NZLHlCQUF5Qjs7O0lBQ3BDLDBDQUVFOztJQUVGLGdEQUVFOztJQUdGLDBDQVFFOzs7OztJQXlCQSxrREFBaUU7Ozs7O0lBQ2pFLDRDQUFvQzs7Ozs7SUFDcEMsNERBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFLFxuICBDbXNOYXZpZ2F0aW9uQ29tcG9uZW50LFxuICBpc0ZlYXR1cmVFbmFibGVkLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTm9kZSB9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi1ub2RlLm1vZGVsJztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1mb290ZXItbmF2aWdhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXItbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50IHtcbiAgbm9kZSQ6IE9ic2VydmFibGU8TmF2aWdhdGlvbk5vZGU+ID0gdGhpcy5zZXJ2aWNlLmdldE5hdmlnYXRpb25Ob2RlKFxuICAgIHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJFxuICApO1xuXG4gIHN0eWxlQ2xhc3MkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICBtYXAoZCA9PiBkLnN0eWxlQ2xhc3MpXG4gICk7XG5cbiAgLy8gaW4gb3JkZXIgdG8gcHJlc2VydmUgdGhlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB0aGlzIHNob3VsZCByZW5kZXIgb25seSBpZiBhbm9ueW1vdXMgY29uc2VudHMgZmVhdHVyZSBpcyBkaXNhYmxlZFxuICBkYXRhJCA9IHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKFxuICAgIGZpbHRlcihcbiAgICAgIF8gPT5cbiAgICAgICAgIWlzRmVhdHVyZUVuYWJsZWQoXG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICAgICAgICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD4sXG4gICAgc2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBhbm9ueW1vdXNDb25zZW50c0NvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWdcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIEluc3RlYWQsIHVzZTpcbiAgICogXG4gICAgYGBgdHNcbiAgICAgIGNvbnN0cnVjdG9yKFxuICAgICAgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PixcbiAgICAgIHNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgICAgYW5vbnltb3VzQ29uc2VudHNDb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnXG4gICAgKVxuICAgIGBgYFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PixcbiAgICBzZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZVxuICApO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFub255bW91c0NvbnNlbnRzQ29uZmlnPzogQW5vbnltb3VzQ29uc2VudHNDb25maWdcbiAgKSB7fVxufVxuIl19