/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CartService } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
var CartPageLayoutHandler = /** @class */ (function () {
    function CartPageLayoutHandler(cartService) {
        this.cartService = cartService;
    }
    /**
     * @param {?} slots$
     * @param {?=} pageTemplate
     * @param {?=} section
     * @return {?}
     */
    CartPageLayoutHandler.prototype.handle = /**
     * @param {?} slots$
     * @param {?=} pageTemplate
     * @param {?=} section
     * @return {?}
     */
    function (slots$, pageTemplate, section) {
        if (pageTemplate === 'CartPageTemplate' && !section) {
            return combineLatest(slots$, this.cartService.getActive()).pipe(map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), slots = _b[0], cart = _b[1];
                if (cart.totalItems) {
                    return slots.filter((/**
                     * @param {?} slot
                     * @return {?}
                     */
                    function (slot) { return slot !== 'EmptyCartMiddleContent'; }));
                }
                else {
                    return slots.filter((/**
                     * @param {?} slot
                     * @return {?}
                     */
                    function (slot) { return slot !== 'TopContent' && slot !== 'CenterRightContentSlot'; }));
                }
            })));
        }
        return slots$;
    };
    CartPageLayoutHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CartPageLayoutHandler.ctorParameters = function () { return [
        { type: CartService }
    ]; };
    return CartPageLayoutHandler;
}());
export { CartPageLayoutHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CartPageLayoutHandler.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWxheW91dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXBhZ2UtbGF5b3V0LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUVFLCtCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7Ozs7Ozs7SUFFaEQsc0NBQU07Ozs7OztJQUFOLFVBQ0UsTUFBNEIsRUFDNUIsWUFBcUIsRUFDckIsT0FBZ0I7UUFFaEIsSUFBSSxZQUFZLEtBQUssa0JBQWtCLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbkQsT0FBTyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzdELEdBQUc7Ozs7WUFBQyxVQUFDLEVBQWE7b0JBQWIsMEJBQWEsRUFBWixhQUFLLEVBQUUsWUFBSTtnQkFDZixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ25CLE9BQU8sS0FBSyxDQUFDLE1BQU07Ozs7b0JBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssd0JBQXdCLEVBQWpDLENBQWlDLEVBQUMsQ0FBQztpQkFDaEU7cUJBQU07b0JBQ0wsT0FBTyxLQUFLLENBQUMsTUFBTTs7OztvQkFDakIsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssWUFBWSxJQUFJLElBQUksS0FBSyx3QkFBd0IsRUFBMUQsQ0FBMEQsRUFDbkUsQ0FBQztpQkFDSDtZQUNILENBQUMsRUFBQyxDQUNILENBQUM7U0FDSDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQXZCRixVQUFVOzs7O2dCQUxGLFdBQVc7O0lBNkJwQiw0QkFBQztDQUFBLEFBeEJELElBd0JDO1NBdkJZLHFCQUFxQjs7Ozs7O0lBQ3BCLDRDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VMYXlvdXRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LWhhbmRsZXInO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydFBhZ2VMYXlvdXRIYW5kbGVyIGltcGxlbWVudHMgUGFnZUxheW91dEhhbmRsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSkge31cblxuICBoYW5kbGUoXG4gICAgc2xvdHMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPixcbiAgICBwYWdlVGVtcGxhdGU/OiBzdHJpbmcsXG4gICAgc2VjdGlvbj86IHN0cmluZ1xuICApIHtcbiAgICBpZiAocGFnZVRlbXBsYXRlID09PSAnQ2FydFBhZ2VUZW1wbGF0ZScgJiYgIXNlY3Rpb24pIHtcbiAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHNsb3RzJCwgdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKSkucGlwZShcbiAgICAgICAgbWFwKChbc2xvdHMsIGNhcnRdKSA9PiB7XG4gICAgICAgICAgaWYgKGNhcnQudG90YWxJdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuIHNsb3RzLmZpbHRlcihzbG90ID0+IHNsb3QgIT09ICdFbXB0eUNhcnRNaWRkbGVDb250ZW50Jyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzbG90cy5maWx0ZXIoXG4gICAgICAgICAgICAgIHNsb3QgPT4gc2xvdCAhPT0gJ1RvcENvbnRlbnQnICYmIHNsb3QgIT09ICdDZW50ZXJSaWdodENvbnRlbnRTbG90J1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gc2xvdHMkO1xuICB9XG59XG4iXX0=