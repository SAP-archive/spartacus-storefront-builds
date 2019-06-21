/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AddToHomeScreenService } from '../../services/add-to-home-screen.service';
import { AddToHomeScreenComponent } from '../add-to-home-screen.component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3B3YS9jb21wb25lbnRzL2FkZC10by1ob21lLXNjcmVlbi1idG4vYWRkLXRvLWhvbWUtc2NyZWVuLWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTNFO0lBSWlELHVEQUF3QjtJQUN2RSxxQ0FBc0Isc0JBQThDO1FBQXBFLFlBQ0Usa0JBQU0sc0JBQXNCLENBQUMsU0FDOUI7UUFGcUIsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUF3Qjs7SUFFcEUsQ0FBQzs7Z0JBUEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLDhHQUFzRDtpQkFDdkQ7Ozs7Z0JBTlEsc0JBQXNCOztJQVcvQixrQ0FBQztDQUFBLEFBUkQsQ0FJaUQsd0JBQXdCLEdBSXhFO1NBSlksMkJBQTJCOzs7Ozs7SUFDMUIsNkRBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZGRUb0hvbWVTY3JlZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuQ29tcG9uZW50IH0gZnJvbSAnLi4vYWRkLXRvLWhvbWUtc2NyZWVuLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFkZC10by1ob21lLXNjcmVlbi1idG4nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLXRvLWhvbWUtc2NyZWVuLWJ0bi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFkZFRvSG9tZVNjcmVlbkJ0bkNvbXBvbmVudCBleHRlbmRzIEFkZFRvSG9tZVNjcmVlbkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGRUb0hvbWVTY3JlZW5TZXJ2aWNlOiBBZGRUb0hvbWVTY3JlZW5TZXJ2aWNlKSB7XG4gICAgc3VwZXIoYWRkVG9Ib21lU2NyZWVuU2VydmljZSk7XG4gIH1cbn1cbiJdfQ==