/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
var FooterNavigationComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FooterNavigationComponent, _super);
    function FooterNavigationComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterNavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-footer-navigation',
                    template: "<nav *ngIf=\"(node$ | async) as node\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div\n        class=\"col-xs-12 col-sm-4 col-md-3 navigation-elements\"\n        *ngFor=\"let child of node?.children\"\n      >\n        <h1>{{ child.title }}</h1>\n        <ul>\n          <li *ngFor=\"let link of child.children\">\n            <cx-generic-link\n              [url]=\"link.url\"\n              [target]=\"link.target === true ? 'blank' : 'self'\"\n              >{{ link.title }}</cx-generic-link\n            >\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"notice\" *ngIf=\"(service.getComponentData() | async) as data\">\n  {{ data.notice }}\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    return FooterNavigationComponent;
}(NavigationComponent));
export { FooterNavigationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2Ntcy1saWIvZm9vdGVyLW5hdmlnYXRpb24vZm9vdGVyLW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV6RTtJQUsrQyxxREFBbUI7SUFMbEU7O0lBS29FLENBQUM7O2dCQUxwRSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsd3RCQUFpRDtvQkFDakQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOztJQUNtRSxnQ0FBQztDQUFBLEFBTHJFLENBSytDLG1CQUFtQixHQUFHO1NBQXhELHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtZm9vdGVyLW5hdmlnYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9vdGVyLW5hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudCBleHRlbmRzIE5hdmlnYXRpb25Db21wb25lbnQge31cbiJdfQ==