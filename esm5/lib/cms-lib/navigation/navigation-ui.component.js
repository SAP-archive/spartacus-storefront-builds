/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var NavigationUIComponent = /** @class */ (function () {
    function NavigationUIComponent() {
        this.dropdownMode = 'list';
    }
    NavigationUIComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-navigation-ui',
                    template: "<div *ngIf=\"node\" class=\"cx-nav-item nav-item\" ngbDropdown>\n  <a\n    *ngIf=\"node.children && !node.title; else nodeWithChildren\"\n    ngbDropdownToggle\n    >&nbsp;\n  </a>\n  <ng-template #nodeWithChildren>\n    <span\n      *ngIf=\"node.children; else noChildren\"\n      ngbDropdownToggle\n      class=\"cx-nav-link nav-link\"\n      role=\"link\"\n      id=\"{{ node.title }}\"\n      >{{ node.title }}</span\n    >\n  </ng-template>\n  <ng-template #noChildren>\n    <a\n      [routerLink]=\"node.url\"\n      class=\"cx-nav-link nav-link\"\n      id=\"{{ node.title }}\"\n      >{{ node.title }}\n    </a>\n  </ng-template>\n  <ng-container [ngSwitch]=\"dropdownMode\">\n    <ng-container *ngSwitchCase=\"'list'\">\n      <div\n        ngbDropdownMenu\n        class=\"cx-nav-child-list\"\n        [attr.aria-label]=\"node.title\"\n        role=\"list\"\n      >\n        <div\n          role=\"listitem\"\n          *ngFor=\"let subCategory of node.children\"\n          class=\"dropdown-item cx-nav-child-item\"\n        >\n          <ng-container *ngIf=\"subCategory.url\">\n            <a [routerLink]=\"subCategory.url\" class=\"cx-nav-child-link\"\n              >{{ subCategory.title }}\n            </a>\n          </ng-container>\n          <ng-container *ngIf=\"!subCategory.url\">\n            <a class=\"cx-nav-child-link\">{{ subCategory.title }} </a>\n          </ng-container>\n          <a\n            [routerLink]=\"subCategoryChild.url\"\n            *ngFor=\"let subCategoryChild of subCategory.children\"\n            >{{ subCategoryChild.title }}\n          </a>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'column'\">\n      <div\n        ngbDropdownMenu\n        class=\"cx-nav-child-list-columns\"\n        [attr.aria-label]=\"node.title\"\n      >\n        <div\n          class=\"cx-nav-child-column\"\n          *ngFor=\"let subCategory of node.children\"\n        >\n          <ng-container *ngIf=\"subCategory.url\">\n            <a\n              role=\"link\"\n              [routerLink]=\"subCategory.url\"\n              class=\"cx-nav-child-link cx-nav-column-title\"\n              >{{ subCategory.title }}\n            </a>\n          </ng-container>\n          <ng-container *ngIf=\"!subCategory.url\">\n            <a class=\"cx-nav-child-link cx-nav-column-title\"\n              >{{ subCategory.title }}\n            </a>\n          </ng-container>\n\n          <div\n            *ngFor=\"let subCategoryChild of subCategory.children\"\n            class=\"dropdown-item cx-nav-child-column-item\"\n          >\n            <a\n              role=\"link\"\n              [routerLink]=\"subCategoryChild.url\"\n              class=\"cx-nav-child-link\"\n              >{{ subCategoryChild.title }}\n            </a>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </ng-container>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    NavigationUIComponent.propDecorators = {
        dropdownMode: [{ type: Input }],
        node: [{ type: Input }]
    };
    return NavigationUIComponent;
}());
export { NavigationUIComponent };
if (false) {
    /** @type {?} */
    NavigationUIComponent.prototype.dropdownMode;
    /** @type {?} */
    NavigationUIComponent.prototype.node;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi11aS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zLWxpYi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tdWkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxRTtJQUFBO1FBTVcsaUJBQVksR0FBRyxNQUFNLENBQUM7SUFFakMsQ0FBQzs7Z0JBUkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDIyRkFBNkM7b0JBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OytCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFDUiw0QkFBQztDQUFBLEFBUkQsSUFRQztTQUhZLHFCQUFxQjs7O0lBQ2hDLDZDQUErQjs7SUFDL0IscUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25Ob2RlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLW5vZGUubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1uYXZpZ2F0aW9uLXVpJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmlnYXRpb24tdWkuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvblVJQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZHJvcGRvd25Nb2RlID0gJ2xpc3QnO1xuICBASW5wdXQoKSBub2RlOiBOYXZpZ2F0aW9uTm9kZTtcbn1cbiJdfQ==