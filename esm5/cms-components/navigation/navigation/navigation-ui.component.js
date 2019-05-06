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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi11aS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi11aS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFFO0lBQUE7UUFNVyxpQkFBWSxHQUFHLE1BQU0sQ0FBQztJQUVqQyxDQUFDOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsMjJGQUE2QztvQkFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7K0JBRUUsS0FBSzt1QkFDTCxLQUFLOztJQUNSLDRCQUFDO0NBQUEsQUFSRCxJQVFDO1NBSFkscUJBQXFCOzs7SUFDaEMsNkNBQStCOztJQUMvQixxQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk5vZGUgfSBmcm9tICcuL25hdmlnYXRpb24tbm9kZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW5hdmlnYXRpb24tdWknLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGlvbi11aS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uVUlDb21wb25lbnQge1xuICBASW5wdXQoKSBkcm9wZG93bk1vZGUgPSAnbGlzdCc7XG4gIEBJbnB1dCgpIG5vZGU6IE5hdmlnYXRpb25Ob2RlO1xufVxuIl19