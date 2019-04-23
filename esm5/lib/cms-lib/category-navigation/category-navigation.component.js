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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zLWxpYi9jYXRlZ29yeS1uYXZpZ2F0aW9uL2NhdGVnb3J5LW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV6RTtJQUtpRCx1REFBbUI7SUFMcEU7O0lBS3NFLENBQUM7O2dCQUx0RSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsME5BQW1EO29CQUNuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7O0lBQ3FFLGtDQUFDO0NBQUEsQUFMdkUsQ0FLaUQsbUJBQW1CLEdBQUc7U0FBMUQsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYXRlZ29yeS1uYXZpZ2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhdGVnb3J5LW5hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlOYXZpZ2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgTmF2aWdhdGlvbkNvbXBvbmVudCB7fVxuIl19