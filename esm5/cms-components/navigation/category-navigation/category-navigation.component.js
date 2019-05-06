/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
var CategoryNavigationComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryNavigationComponent, _super);
    function CategoryNavigationComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryNavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-category-navigation',
                    template: "<nav *ngIf=\"(node$ | async) as node\">\n  <cx-navigation-ui\n    *ngFor=\"let child of node?.children\"\n    ngbDropdown\n    [node]=\"child\"\n    dropdownMode=\"column\"\n  ></cx-navigation-ui>\n</nav>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    return CategoryNavigationComponent;
}(NavigationComponent));
export { CategoryNavigationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL2NhdGVnb3J5LW5hdmlnYXRpb24vY2F0ZWdvcnktbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXpFO0lBS2lELHVEQUFtQjtJQUxwRTs7SUFLc0UsQ0FBQzs7Z0JBTHRFLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQywwTkFBbUQ7b0JBQ25ELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7SUFDcUUsa0NBQUM7Q0FBQSxBQUx2RSxDQUtpRCxtQkFBbUIsR0FBRztTQUExRCwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhdGVnb3J5LW5hdmlnYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2F0ZWdvcnktbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeU5hdmlnYXRpb25Db21wb25lbnQgZXh0ZW5kcyBOYXZpZ2F0aW9uQ29tcG9uZW50IHt9XG4iXX0=