/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AddToHomeScreenService } from '../../services/add-to-home-screen.service';
import { AddToHomeScreenComponent } from './../add-to-home-screen.component';
var AddToHomeScreenBannerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AddToHomeScreenBannerComponent, _super);
    function AddToHomeScreenBannerComponent(addToHomeScreenService) {
        var _this = _super.call(this, addToHomeScreenService) || this;
        _this.addToHomeScreenService = addToHomeScreenService;
        return _this;
    }
    AddToHomeScreenBannerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-add-to-home-screen-banner',
                    template: "<div *ngIf=\"(canPrompt$ | async)\">\n  <div class=\"cx-add-to-home-screen-banner\">\n    <div class=\"cx-add-to-home-screen-banner-inner\">\n      <p>\n        {{ 'pwa.addSapStorefront' | cxTranslate }}\n      </p>\n      <ul>\n        <li>{{ 'pwa.noInstallationNeeded' | cxTranslate }}</li>\n        <li>{{ 'pwa.fastAccessToApplication' | cxTranslate }}</li>\n      </ul>\n      <button (click)=\"prompt()\" class=\"btn btn-primary\">\n        {{ 'pwa.addToHomeScreen' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    AddToHomeScreenBannerComponent.ctorParameters = function () { return [
        { type: AddToHomeScreenService }
    ]; };
    return AddToHomeScreenBannerComponent;
}(AddToHomeScreenComponent));
export { AddToHomeScreenBannerComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AddToHomeScreenBannerComponent.prototype.addToHomeScreenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvcHdhL2NvbXBvbmVudHMvYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lci9hZGQtdG8taG9tZS1zY3JlZW4tYmFubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFN0U7SUFJb0QsMERBQXdCO0lBQzFFLHdDQUFzQixzQkFBOEM7UUFBcEUsWUFDRSxrQkFBTSxzQkFBc0IsQ0FBQyxTQUM5QjtRQUZxQiw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCOztJQUVwRSxDQUFDOztnQkFQRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsb2lCQUF5RDtpQkFDMUQ7Ozs7Z0JBTlEsc0JBQXNCOztJQVcvQixxQ0FBQztDQUFBLEFBUkQsQ0FJb0Qsd0JBQXdCLEdBSTNFO1NBSlksOEJBQThCOzs7Ozs7SUFDN0IsZ0VBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZGRUb0hvbWVTY3JlZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9hZGQtdG8taG9tZS1zY3JlZW4uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtdG8taG9tZS1zY3JlZW4tYmFubmVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQWRkVG9Ib21lU2NyZWVuQmFubmVyQ29tcG9uZW50IGV4dGVuZHMgQWRkVG9Ib21lU2NyZWVuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkZFRvSG9tZVNjcmVlblNlcnZpY2U6IEFkZFRvSG9tZVNjcmVlblNlcnZpY2UpIHtcbiAgICBzdXBlcihhZGRUb0hvbWVTY3JlZW5TZXJ2aWNlKTtcbiAgfVxufVxuIl19