/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE, isFeatureEnabled, } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { NavigationService } from '../navigation/navigation.service';
export class FooterNavigationComponent {
    /**
     * @param {?} componentData
     * @param {?} service
     * @param {?=} anonymousConsentsConfig
     */
    constructor(componentData, service, anonymousConsentsConfig) {
        this.componentData = componentData;
        this.service = service;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.node$ = this.service.getNavigationNode(this.componentData.data$);
        this.styleClass$ = this.componentData.data$.pipe(map((/**
         * @param {?} d
         * @return {?}
         */
        d => d.styleClass)));
        // in order to preserve the backwards compatibility, this should render only if anonymous consents feature is disabled
        this.data$ = this.componentData.data$.pipe(filter((/**
         * @param {?} _
         * @return {?}
         */
        _ => !isFeatureEnabled(this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE))));
    }
}
FooterNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-footer-navigation',
                template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [flyout]=\"false\"\n  [ngClass]=\"styleClass$ | async\"\n></cx-navigation-ui>\n\n<div class=\"notice\" *ngIf=\"data$ | async as data\">\n  {{ data.notice }}\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
FooterNavigationComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: NavigationService },
    { type: AnonymousConsentsConfig }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUNMLHVCQUF1QixFQUN2QiwwQkFBMEIsRUFFMUIsZ0JBQWdCLEdBQ2pCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUV4RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU9yRSxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7SUEwQ3BDLFlBQ1ksYUFBdUQsRUFDdkQsT0FBMEIsRUFDMUIsdUJBQWlEO1FBRmpELGtCQUFhLEdBQWIsYUFBYSxDQUEwQztRQUN2RCxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQTBCO1FBNUM3RCxVQUFLLEdBQStCLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQ2hFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUN6QixDQUFDO1FBRUYsZ0JBQVcsR0FBdUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUM3RCxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFDLENBQ3ZCLENBQUM7O1FBR0YsVUFBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDbkMsTUFBTTs7OztRQUNKLENBQUMsQ0FBQyxFQUFFLENBQ0YsQ0FBQyxnQkFBZ0IsQ0FDZixJQUFJLENBQUMsdUJBQXVCLEVBQzVCLDBCQUEwQixDQUMzQixFQUNKLENBQ0YsQ0FBQztJQTRCQyxDQUFDOzs7WUFuREwsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLG1PQUFpRDtnQkFDakQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFSUSxnQkFBZ0I7WUFFaEIsaUJBQWlCO1lBVHhCLHVCQUF1Qjs7OztJQWlCdkIsMENBRUU7O0lBRUYsZ0RBRUU7O0lBR0YsMENBUUU7Ozs7O0lBeUJBLGtEQUFpRTs7Ozs7SUFDakUsNENBQW9DOzs7OztJQUNwQyw0REFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkUsXG4gIENtc05hdmlnYXRpb25Db21wb25lbnQsXG4gIGlzRmVhdHVyZUVuYWJsZWQsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IE5hdmlnYXRpb25Ob2RlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWZvb3Rlci1uYXZpZ2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvb3Rlck5hdmlnYXRpb25Db21wb25lbnQge1xuICBub2RlJDogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT4gPSB0aGlzLnNlcnZpY2UuZ2V0TmF2aWdhdGlvbk5vZGUoXG4gICAgdGhpcy5jb21wb25lbnREYXRhLmRhdGEkXG4gICk7XG5cbiAgc3R5bGVDbGFzcyQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKFxuICAgIG1hcChkID0+IGQuc3R5bGVDbGFzcylcbiAgKTtcblxuICAvLyBpbiBvcmRlciB0byBwcmVzZXJ2ZSB0aGUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHRoaXMgc2hvdWxkIHJlbmRlciBvbmx5IGlmIGFub255bW91cyBjb25zZW50cyBmZWF0dXJlIGlzIGRpc2FibGVkXG4gIGRhdGEkID0gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUoXG4gICAgZmlsdGVyKFxuICAgICAgXyA9PlxuICAgICAgICAhaXNGZWF0dXJlRW5hYmxlZChcbiAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgICAgICAgIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PixcbiAgICBzZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIGFub255bW91c0NvbnNlbnRzQ29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZ1xuICApO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogSW5zdGVhZCwgdXNlOlxuICAgKiBcbiAgICBgYGB0c1xuICAgICAgY29uc3RydWN0b3IoXG4gICAgICBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc05hdmlnYXRpb25Db21wb25lbnQ+LFxuICAgICAgc2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgICBhbm9ueW1vdXNDb25zZW50c0NvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWdcbiAgICApXG4gICAgYGBgXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc05hdmlnYXRpb25Db21wb25lbnQ+LFxuICAgIHNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc05hdmlnYXRpb25Db21wb25lbnQ+LFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYW5vbnltb3VzQ29uc2VudHNDb25maWc/OiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZ1xuICApIHt9XG59XG4iXX0=