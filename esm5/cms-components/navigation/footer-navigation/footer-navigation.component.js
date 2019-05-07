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
                    template: "<nav *ngIf=\"(node$ | async) as node\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div\n        class=\"col-xs-12 col-sm-4 col-md-3 navigation-elements\"\n        *ngFor=\"let child of node?.children\"\n      >\n        <h5>{{ child.title }}</h5>\n        <ul>\n          <li *ngFor=\"let link of child.children\">\n            <cx-generic-link\n              [url]=\"link.url\"\n              [target]=\"link.target === true ? 'blank' : 'self'\"\n              >{{ link.title }}</cx-generic-link\n            >\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"notice\" *ngIf=\"(service.getComponentData() | async) as data\">\n  {{ data.notice }}\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    return FooterNavigationComponent;
}(NavigationComponent));
export { FooterNavigationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXpFO0lBSytDLHFEQUFtQjtJQUxsRTs7SUFLb0UsQ0FBQzs7Z0JBTHBFLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyx3dEJBQWlEO29CQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7O0lBQ21FLGdDQUFDO0NBQUEsQUFMckUsQ0FLK0MsbUJBQW1CLEdBQUc7U0FBeEQseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1mb290ZXItbmF2aWdhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXItbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgTmF2aWdhdGlvbkNvbXBvbmVudCB7fVxuIl19