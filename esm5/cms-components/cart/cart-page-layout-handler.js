/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CartService } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
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
            return combineLatest([slots$, this.cartService.getActive()]).pipe(map((/**
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CartPageLayoutHandler.ctorParameters = function () { return [
        { type: CartService }
    ]; };
    /** @nocollapse */ CartPageLayoutHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CartPageLayoutHandler_Factory() { return new CartPageLayoutHandler(i0.ɵɵinject(i1.CartService)); }, token: CartPageLayoutHandler, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWxheW91dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXBhZ2UtbGF5b3V0LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBR3JDO0lBSUUsK0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQzs7Ozs7OztJQUVoRCxzQ0FBTTs7Ozs7O0lBQU4sVUFDRSxNQUE0QixFQUM1QixZQUFxQixFQUNyQixPQUFnQjtRQUVoQixJQUFJLFlBQVksS0FBSyxrQkFBa0IsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNuRCxPQUFPLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQy9ELEdBQUc7Ozs7WUFBQyxVQUFDLEVBQWE7b0JBQWIsMEJBQWEsRUFBWixhQUFLLEVBQUUsWUFBSTtnQkFDZixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ25CLE9BQU8sS0FBSyxDQUFDLE1BQU07Ozs7b0JBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssd0JBQXdCLEVBQWpDLENBQWlDLEVBQUMsQ0FBQztpQkFDaEU7cUJBQU07b0JBQ0wsT0FBTyxLQUFLLENBQUMsTUFBTTs7OztvQkFDakIsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssWUFBWSxJQUFJLElBQUksS0FBSyx3QkFBd0IsRUFBMUQsQ0FBMEQsRUFDbkUsQ0FBQztpQkFDSDtZQUNILENBQUMsRUFBQyxDQUNILENBQUM7U0FDSDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQXpCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLFdBQVc7OztnQ0FEcEI7Q0FnQ0MsQUExQkQsSUEwQkM7U0F2QlkscUJBQXFCOzs7Ozs7SUFDcEIsNENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZUxheW91dEhhbmRsZXIgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQtaGFuZGxlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0UGFnZUxheW91dEhhbmRsZXIgaW1wbGVtZW50cyBQYWdlTGF5b3V0SGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKSB7fVxuXG4gIGhhbmRsZShcbiAgICBzbG90cyQ6IE9ic2VydmFibGU8c3RyaW5nW10+LFxuICAgIHBhZ2VUZW1wbGF0ZT86IHN0cmluZyxcbiAgICBzZWN0aW9uPzogc3RyaW5nXG4gICkge1xuICAgIGlmIChwYWdlVGVtcGxhdGUgPT09ICdDYXJ0UGFnZVRlbXBsYXRlJyAmJiAhc2VjdGlvbikge1xuICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW3Nsb3RzJCwgdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKV0pLnBpcGUoXG4gICAgICAgIG1hcCgoW3Nsb3RzLCBjYXJ0XSkgPT4ge1xuICAgICAgICAgIGlmIChjYXJ0LnRvdGFsSXRlbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBzbG90cy5maWx0ZXIoc2xvdCA9PiBzbG90ICE9PSAnRW1wdHlDYXJ0TWlkZGxlQ29udGVudCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc2xvdHMuZmlsdGVyKFxuICAgICAgICAgICAgICBzbG90ID0+IHNsb3QgIT09ICdUb3BDb250ZW50JyAmJiBzbG90ICE9PSAnQ2VudGVyUmlnaHRDb250ZW50U2xvdCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHNsb3RzJDtcbiAgfVxufVxuIl19