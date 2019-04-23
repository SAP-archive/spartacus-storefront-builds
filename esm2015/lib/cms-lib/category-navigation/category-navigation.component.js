/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
export class CategoryNavigationComponent extends NavigationComponent {
}
CategoryNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-category-navigation',
                template: "<nav *ngIf=\"(node$ | async) as node\">\n  <cx-navigation-ui\n    *ngFor=\"let child of node?.children\"\n    ngbDropdown\n    [node]=\"child\"\n    dropdownMode=\"column\"\n  ></cx-navigation-ui>\n</nav>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zLWxpYi9jYXRlZ29yeS1uYXZpZ2F0aW9uL2NhdGVnb3J5LW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBT3pFLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxtQkFBbUI7OztZQUxuRSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsME5BQW1EO2dCQUNuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2F0ZWdvcnktbmF2aWdhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXRlZ29yeS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5TmF2aWdhdGlvbkNvbXBvbmVudCBleHRlbmRzIE5hdmlnYXRpb25Db21wb25lbnQge31cbiJdfQ==