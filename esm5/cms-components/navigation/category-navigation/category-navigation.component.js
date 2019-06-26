/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { NavigationService } from '../navigation/navigation.service';
var CategoryNavigationComponent = /** @class */ (function () {
    function CategoryNavigationComponent(componentData, service) {
        this.componentData = componentData;
        this.service = service;
        this.node$ = this.service.getNavigationNode(this.componentData.data$);
        this.data$ = this.componentData.data$;
    }
    CategoryNavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-category-navigation',
                    template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [ngClass]=\"(data$ | async).styleClass\"\n  [wrapAfter]=\"(data$ | async).wrapAfter\"\n  [allowAlignToRight]=\"true\"\n></cx-navigation-ui>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CategoryNavigationComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: NavigationService }
    ]; };
    return CategoryNavigationComponent;
}());
export { CategoryNavigationComponent };
if (false) {
    /** @type {?} */
    CategoryNavigationComponent.prototype.node$;
    /** @type {?} */
    CategoryNavigationComponent.prototype.data$;
    /**
     * @type {?}
     * @protected
     */
    CategoryNavigationComponent.prototype.componentData;
    /**
     * @type {?}
     * @protected
     */
    CategoryNavigationComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL2NhdGVnb3J5LW5hdmlnYXRpb24vY2F0ZWdvcnktbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFckU7SUFZRSxxQ0FDWSxhQUF1RCxFQUN2RCxPQUEwQjtRQUQxQixrQkFBYSxHQUFiLGFBQWEsQ0FBMEM7UUFDdkQsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFSdEMsVUFBSyxHQUErQixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUNoRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FDekIsQ0FBQztRQUVGLFVBQUssR0FBdUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFLbEUsQ0FBQzs7Z0JBZkwsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLDBNQUFtRDtvQkFDbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVJRLGdCQUFnQjtnQkFFaEIsaUJBQWlCOztJQWtCMUIsa0NBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVhZLDJCQUEyQjs7O0lBQ3RDLDRDQUVFOztJQUVGLDRDQUFxRTs7Ozs7SUFHbkUsb0RBQWlFOzs7OztJQUNqRSw4Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IE5hdmlnYXRpb25Ob2RlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhdGVnb3J5LW5hdmlnYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2F0ZWdvcnktbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeU5hdmlnYXRpb25Db21wb25lbnQge1xuICBub2RlJDogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT4gPSB0aGlzLnNlcnZpY2UuZ2V0TmF2aWdhdGlvbk5vZGUoXG4gICAgdGhpcy5jb21wb25lbnREYXRhLmRhdGEkXG4gICk7XG5cbiAgZGF0YSQ6IE9ic2VydmFibGU8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD4gPSB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD4sXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==