/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AddToHomeScreenService } from '../../services/add-to-home-screen.service';
import { AddToHomeScreenComponent } from '../add-to-home-screen.component';
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
                    template: "<div *ngIf=\"canPrompt$ | async\">\n  <div class=\"cx-add-to-home-screen-banner\">\n    <div class=\"cx-add-to-home-screen-banner-inner\">\n      <p>\n        {{ 'pwa.addToHomeScreenDescription' | cxTranslate }}\n      </p>\n      <ul>\n        <li>{{ 'pwa.noInstallationNeeded' | cxTranslate }}</li>\n        <li>{{ 'pwa.fastAccessToApplication' | cxTranslate }}</li>\n      </ul>\n      <button (click)=\"prompt()\" class=\"btn btn-primary\">\n        {{ 'pwa.addToHomeScreen' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3B3YS9jb21wb25lbnRzL2FkZC10by1ob21lLXNjcmVlbi1iYW5uZXIvYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTNFO0lBSW9ELDBEQUF3QjtJQUMxRSx3Q0FBc0Isc0JBQThDO1FBQXBFLFlBQ0Usa0JBQU0sc0JBQXNCLENBQUMsU0FDOUI7UUFGcUIsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUF3Qjs7SUFFcEUsQ0FBQzs7Z0JBUEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLDRpQkFBeUQ7aUJBQzFEOzs7O2dCQU5RLHNCQUFzQjs7SUFXL0IscUNBQUM7Q0FBQSxBQVJELENBSW9ELHdCQUF3QixHQUkzRTtTQUpZLDhCQUE4Qjs7Ozs7O0lBQzdCLGdFQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FkZC10by1ob21lLXNjcmVlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlbkNvbXBvbmVudCB9IGZyb20gJy4uL2FkZC10by1ob21lLXNjcmVlbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hZGQtdG8taG9tZS1zY3JlZW4tYmFubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC10by1ob21lLXNjcmVlbi1iYW5uZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRUb0hvbWVTY3JlZW5CYW5uZXJDb21wb25lbnQgZXh0ZW5kcyBBZGRUb0hvbWVTY3JlZW5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRkVG9Ib21lU2NyZWVuU2VydmljZTogQWRkVG9Ib21lU2NyZWVuU2VydmljZSkge1xuICAgIHN1cGVyKGFkZFRvSG9tZVNjcmVlblNlcnZpY2UpO1xuICB9XG59XG4iXX0=