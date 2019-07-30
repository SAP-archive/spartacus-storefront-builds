/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CartService } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
export class CartPageLayoutHandler {
    /**
     * @param {?} cartService
     */
    constructor(cartService) {
        this.cartService = cartService;
    }
    /**
     * @param {?} slots$
     * @param {?=} pageTemplate
     * @param {?=} section
     * @return {?}
     */
    handle(slots$, pageTemplate, section) {
        if (pageTemplate === 'CartPageTemplate' && !section) {
            return combineLatest([slots$, this.cartService.getActive()]).pipe(map((/**
             * @param {?} __0
             * @return {?}
             */
            ([slots, cart]) => {
                if (cart.totalItems) {
                    return slots.filter((/**
                     * @param {?} slot
                     * @return {?}
                     */
                    slot => slot !== 'EmptyCartMiddleContent'));
                }
                else {
                    return slots.filter((/**
                     * @param {?} slot
                     * @return {?}
                     */
                    slot => slot !== 'TopContent' && slot !== 'CenterRightContentSlot'));
                }
            })));
        }
        return slots$;
    }
}
CartPageLayoutHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartPageLayoutHandler.ctorParameters = () => [
    { type: CartService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CartPageLayoutHandler.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWxheW91dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXBhZ2UtbGF5b3V0LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXJDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFDaEMsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDOzs7Ozs7O0lBRWhELE1BQU0sQ0FDSixNQUE0QixFQUM1QixZQUFxQixFQUNyQixPQUFnQjtRQUVoQixJQUFJLFlBQVksS0FBSyxrQkFBa0IsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNuRCxPQUFPLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQy9ELEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDbkIsT0FBTyxLQUFLLENBQUMsTUFBTTs7OztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyx3QkFBd0IsRUFBQyxDQUFDO2lCQUNoRTtxQkFBTTtvQkFDTCxPQUFPLEtBQUssQ0FBQyxNQUFNOzs7O29CQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxZQUFZLElBQUksSUFBSSxLQUFLLHdCQUF3QixFQUNuRSxDQUFDO2lCQUNIO1lBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztTQUNIO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7O1lBdkJGLFVBQVU7Ozs7WUFMRixXQUFXOzs7Ozs7O0lBT04sNENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZUxheW91dEhhbmRsZXIgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQtaGFuZGxlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0UGFnZUxheW91dEhhbmRsZXIgaW1wbGVtZW50cyBQYWdlTGF5b3V0SGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKSB7fVxuXG4gIGhhbmRsZShcbiAgICBzbG90cyQ6IE9ic2VydmFibGU8c3RyaW5nW10+LFxuICAgIHBhZ2VUZW1wbGF0ZT86IHN0cmluZyxcbiAgICBzZWN0aW9uPzogc3RyaW5nXG4gICkge1xuICAgIGlmIChwYWdlVGVtcGxhdGUgPT09ICdDYXJ0UGFnZVRlbXBsYXRlJyAmJiAhc2VjdGlvbikge1xuICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW3Nsb3RzJCwgdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKV0pLnBpcGUoXG4gICAgICAgIG1hcCgoW3Nsb3RzLCBjYXJ0XSkgPT4ge1xuICAgICAgICAgIGlmIChjYXJ0LnRvdGFsSXRlbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBzbG90cy5maWx0ZXIoc2xvdCA9PiBzbG90ICE9PSAnRW1wdHlDYXJ0TWlkZGxlQ29udGVudCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc2xvdHMuZmlsdGVyKFxuICAgICAgICAgICAgICBzbG90ID0+IHNsb3QgIT09ICdUb3BDb250ZW50JyAmJiBzbG90ICE9PSAnQ2VudGVyUmlnaHRDb250ZW50U2xvdCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHNsb3RzJDtcbiAgfVxufVxuIl19