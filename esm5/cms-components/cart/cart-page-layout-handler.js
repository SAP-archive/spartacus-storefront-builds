/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CartService } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWxheW91dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXBhZ2UtbGF5b3V0LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQztJQUVFLCtCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7Ozs7Ozs7SUFFaEQsc0NBQU07Ozs7OztJQUFOLFVBQ0UsTUFBNEIsRUFDNUIsWUFBcUIsRUFDckIsT0FBZ0I7UUFFaEIsSUFBSSxZQUFZLEtBQUssa0JBQWtCLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbkQsT0FBTyxhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUMvRCxHQUFHOzs7O1lBQUMsVUFBQyxFQUFhO29CQUFiLDBCQUFhLEVBQVosYUFBSyxFQUFFLFlBQUk7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNuQixPQUFPLEtBQUssQ0FBQyxNQUFNOzs7O29CQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxLQUFLLHdCQUF3QixFQUFqQyxDQUFpQyxFQUFDLENBQUM7aUJBQ2hFO3FCQUFNO29CQUNMLE9BQU8sS0FBSyxDQUFDLE1BQU07Ozs7b0JBQ2pCLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxLQUFLLFlBQVksSUFBSSxJQUFJLEtBQUssd0JBQXdCLEVBQTFELENBQTBELEVBQ25FLENBQUM7aUJBQ0g7WUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1NBQ0g7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztnQkF2QkYsVUFBVTs7OztnQkFMRixXQUFXOztJQTZCcEIsNEJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXZCWSxxQkFBcUI7Ozs7OztJQUNwQiw0Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0SGFuZGxlciB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC1oYW5kbGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRQYWdlTGF5b3V0SGFuZGxlciBpbXBsZW1lbnRzIFBhZ2VMYXlvdXRIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UpIHt9XG5cbiAgaGFuZGxlKFxuICAgIHNsb3RzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT4sXG4gICAgcGFnZVRlbXBsYXRlPzogc3RyaW5nLFxuICAgIHNlY3Rpb24/OiBzdHJpbmdcbiAgKSB7XG4gICAgaWYgKHBhZ2VUZW1wbGF0ZSA9PT0gJ0NhcnRQYWdlVGVtcGxhdGUnICYmICFzZWN0aW9uKSB7XG4gICAgICByZXR1cm4gY29tYmluZUxhdGVzdChbc2xvdHMkLCB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpXSkucGlwZShcbiAgICAgICAgbWFwKChbc2xvdHMsIGNhcnRdKSA9PiB7XG4gICAgICAgICAgaWYgKGNhcnQudG90YWxJdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuIHNsb3RzLmZpbHRlcihzbG90ID0+IHNsb3QgIT09ICdFbXB0eUNhcnRNaWRkbGVDb250ZW50Jyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzbG90cy5maWx0ZXIoXG4gICAgICAgICAgICAgIHNsb3QgPT4gc2xvdCAhPT0gJ1RvcENvbnRlbnQnICYmIHNsb3QgIT09ICdDZW50ZXJSaWdodENvbnRlbnRTbG90J1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gc2xvdHMkO1xuICB9XG59XG4iXX0=