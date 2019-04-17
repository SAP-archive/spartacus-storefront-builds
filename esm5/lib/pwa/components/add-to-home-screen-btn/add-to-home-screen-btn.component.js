/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AddToHomeScreenService } from '../../services/add-to-home-screen.service';
import { AddToHomeScreenComponent } from './../add-to-home-screen.component';
var AddToHomeScreenBtnComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AddToHomeScreenBtnComponent, _super);
    function AddToHomeScreenBtnComponent(addToHomeScreenService) {
        var _this = _super.call(this, addToHomeScreenService) || this;
        _this.addToHomeScreenService = addToHomeScreenService;
        return _this;
    }
    AddToHomeScreenBtnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-add-to-home-screen-btn',
                    template: "<span (click)=\"prompt()\">\n  <ng-content *ngIf=\"(canPrompt$ | async)\"></ng-content>\n</span>\n"
                }] }
    ];
    /** @nocollapse */
    AddToHomeScreenBtnComponent.ctorParameters = function () { return [
        { type: AddToHomeScreenService }
    ]; };
    return AddToHomeScreenBtnComponent;
}(AddToHomeScreenComponent));
export { AddToHomeScreenBtnComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AddToHomeScreenBtnComponent.prototype.addToHomeScreenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvcHdhL2NvbXBvbmVudHMvYWRkLXRvLWhvbWUtc2NyZWVuLWJ0bi9hZGQtdG8taG9tZS1zY3JlZW4tYnRuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFN0U7SUFJaUQsdURBQXdCO0lBQ3ZFLHFDQUFzQixzQkFBOEM7UUFBcEUsWUFDRSxrQkFBTSxzQkFBc0IsQ0FBQyxTQUM5QjtRQUZxQiw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCOztJQUVwRSxDQUFDOztnQkFQRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsOEdBQXNEO2lCQUN2RDs7OztnQkFOUSxzQkFBc0I7O0lBVy9CLGtDQUFDO0NBQUEsQUFSRCxDQUlpRCx3QkFBd0IsR0FJeEU7U0FKWSwyQkFBMkI7Ozs7OztJQUMxQiw2REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hZGQtdG8taG9tZS1zY3JlZW4uc2VydmljZSc7XG5pbXBvcnQgeyBBZGRUb0hvbWVTY3JlZW5Db21wb25lbnQgfSBmcm9tICcuLy4uL2FkZC10by1ob21lLXNjcmVlbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hZGQtdG8taG9tZS1zY3JlZW4tYnRuJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC10by1ob21lLXNjcmVlbi1idG4uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRUb0hvbWVTY3JlZW5CdG5Db21wb25lbnQgZXh0ZW5kcyBBZGRUb0hvbWVTY3JlZW5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRkVG9Ib21lU2NyZWVuU2VydmljZTogQWRkVG9Ib21lU2NyZWVuU2VydmljZSkge1xuICAgIHN1cGVyKGFkZFRvSG9tZVNjcmVlblNlcnZpY2UpO1xuICB9XG59XG4iXX0=