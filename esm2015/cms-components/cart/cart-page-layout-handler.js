/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CartService, SelectiveCartService, FeatureConfigService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class CartPageLayoutHandler {
    /**
     * @param {?} cartService
     * @param {?=} selectiveCartService
     * @param {?=} featureConfig
     */
    constructor(cartService, selectiveCartService, featureConfig) {
        this.cartService = cartService;
        this.selectiveCartService = selectiveCartService;
        this.featureConfig = featureConfig;
    }
    /**
     * @param {?} slots$
     * @param {?=} pageTemplate
     * @param {?=} section
     * @return {?}
     */
    handle(slots$, pageTemplate, section) {
        if (pageTemplate === 'CartPageTemplate' && !section) {
            if (this.featureConfig && this.featureConfig.isEnabled('saveForLater')) {
                return combineLatest([
                    slots$,
                    this.cartService.getActive(),
                    this.selectiveCartService.getCart(),
                ]).pipe(map((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ([slots, cart, selectiveCart]) => {
                    if (cart.totalItems) {
                        return slots.filter((/**
                         * @param {?} slot
                         * @return {?}
                         */
                        slot => slot !== 'EmptyCartMiddleContent'));
                    }
                    else if (selectiveCart.totalItems) {
                        return slots.filter((/**
                         * @param {?} slot
                         * @return {?}
                         */
                        slot => slot !== 'EmptyCartMiddleContent' &&
                            slot !== 'CenterRightContentSlot'));
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
            //TODO remove old code for #5958
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
            ////TODO remove old code for #5958
        }
        return slots$;
    }
}
CartPageLayoutHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CartPageLayoutHandler.ctorParameters = () => [
    { type: CartService },
    { type: SelectiveCartService },
    { type: FeatureConfigService }
];
/** @nocollapse */ CartPageLayoutHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CartPageLayoutHandler_Factory() { return new CartPageLayoutHandler(i0.ɵɵinject(i1.CartService), i0.ɵɵinject(i1.SelectiveCartService), i0.ɵɵinject(i1.FeatureConfigService)); }, token: CartPageLayoutHandler, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CartPageLayoutHandler.prototype.cartService;
    /**
     * @type {?}
     * @private
     */
    CartPageLayoutHandler.prototype.selectiveCartService;
    /**
     * @type {?}
     * @private
     */
    CartPageLayoutHandler.prototype.featureConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWxheW91dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXBhZ2UtbGF5b3V0LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLFdBQVcsRUFDWCxvQkFBb0IsRUFDcEIsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU1yQyxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUFhaEMsWUFDVSxXQUF3QixFQUN4QixvQkFBMkMsRUFDM0MsYUFBb0M7UUFGcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF1QjtRQUMzQyxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7SUFDM0MsQ0FBQzs7Ozs7OztJQUVKLE1BQU0sQ0FDSixNQUE0QixFQUM1QixZQUFxQixFQUNyQixPQUFnQjtRQUVoQixJQUFJLFlBQVksS0FBSyxrQkFBa0IsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNuRCxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQ3RFLE9BQU8sYUFBYSxDQUFDO29CQUNuQixNQUFNO29CQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO29CQUM1QixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFO2lCQUNwQyxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBRTtvQkFDbkMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO3dCQUNuQixPQUFPLEtBQUssQ0FBQyxNQUFNOzs7O3dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLHdCQUF3QixFQUFDLENBQUM7cUJBQ2hFO3lCQUFNLElBQUksYUFBYSxDQUFDLFVBQVUsRUFBRTt3QkFDbkMsT0FBTyxLQUFLLENBQUMsTUFBTTs7Ozt3QkFDakIsSUFBSSxDQUFDLEVBQUUsQ0FDTCxJQUFJLEtBQUssd0JBQXdCOzRCQUNqQyxJQUFJLEtBQUssd0JBQXdCLEVBQ3BDLENBQUM7cUJBQ0g7eUJBQU07d0JBQ0wsT0FBTyxLQUFLLENBQUMsTUFBTTs7Ozt3QkFDakIsSUFBSSxDQUFDLEVBQUUsQ0FDTCxJQUFJLEtBQUssWUFBWSxJQUFJLElBQUksS0FBSyx3QkFBd0IsRUFDN0QsQ0FBQztxQkFDSDtnQkFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO2FBQ0g7WUFDRCxnQ0FBZ0M7WUFDaEMsT0FBTyxhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUMvRCxHQUFHOzs7O1lBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNwQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ25CLE9BQU8sS0FBSyxDQUFDLE1BQU07Ozs7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssd0JBQXdCLEVBQUMsQ0FBQztpQkFDaEU7cUJBQU07b0JBQ0wsT0FBTyxLQUFLLENBQUMsTUFBTTs7OztvQkFDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssWUFBWSxJQUFJLElBQUksS0FBSyx3QkFBd0IsRUFDbkUsQ0FBQztpQkFDSDtZQUNILENBQUMsRUFBQyxDQUNILENBQUM7WUFDRixrQ0FBa0M7U0FDbkM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7WUFuRUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVkMsV0FBVztZQUNYLG9CQUFvQjtZQUNwQixvQkFBb0I7Ozs7Ozs7O0lBdUJsQiw0Q0FBZ0M7Ozs7O0lBQ2hDLHFEQUFtRDs7Ozs7SUFDbkQsOENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FydFNlcnZpY2UsXG4gIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxuICBGZWF0dXJlQ29uZmlnU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LWhhbmRsZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydFBhZ2VMYXlvdXRIYW5kbGVyIGltcGxlbWVudHMgUGFnZUxheW91dEhhbmRsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjVcbiAgICogQWRkIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlIGFuZCBmZWF0dXJlQ29uZmlnIGZvciBzYXZlIGZvciBsYXRlci5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNTk1OFxuICAgKi9cbiAgY29uc3RydWN0b3IoY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlPzogU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGhhbmRsZShcbiAgICBzbG90cyQ6IE9ic2VydmFibGU8c3RyaW5nW10+LFxuICAgIHBhZ2VUZW1wbGF0ZT86IHN0cmluZyxcbiAgICBzZWN0aW9uPzogc3RyaW5nXG4gICkge1xuICAgIGlmIChwYWdlVGVtcGxhdGUgPT09ICdDYXJ0UGFnZVRlbXBsYXRlJyAmJiAhc2VjdGlvbikge1xuICAgICAgaWYgKHRoaXMuZmVhdHVyZUNvbmZpZyAmJiB0aGlzLmZlYXR1cmVDb25maWcuaXNFbmFibGVkKCdzYXZlRm9yTGF0ZXInKSkge1xuICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgc2xvdHMkLFxuICAgICAgICAgIHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCksXG4gICAgICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5nZXRDYXJ0KCksXG4gICAgICAgIF0pLnBpcGUoXG4gICAgICAgICAgbWFwKChbc2xvdHMsIGNhcnQsIHNlbGVjdGl2ZUNhcnRdKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FydC50b3RhbEl0ZW1zKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzbG90cy5maWx0ZXIoc2xvdCA9PiBzbG90ICE9PSAnRW1wdHlDYXJ0TWlkZGxlQ29udGVudCcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RpdmVDYXJ0LnRvdGFsSXRlbXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNsb3RzLmZpbHRlcihcbiAgICAgICAgICAgICAgICBzbG90ID0+XG4gICAgICAgICAgICAgICAgICBzbG90ICE9PSAnRW1wdHlDYXJ0TWlkZGxlQ29udGVudCcgJiZcbiAgICAgICAgICAgICAgICAgIHNsb3QgIT09ICdDZW50ZXJSaWdodENvbnRlbnRTbG90J1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNsb3RzLmZpbHRlcihcbiAgICAgICAgICAgICAgICBzbG90ID0+XG4gICAgICAgICAgICAgICAgICBzbG90ICE9PSAnVG9wQ29udGVudCcgJiYgc2xvdCAhPT0gJ0NlbnRlclJpZ2h0Q29udGVudFNsb3QnXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIC8vVE9ETyByZW1vdmUgb2xkIGNvZGUgZm9yICM1OTU4XG4gICAgICByZXR1cm4gY29tYmluZUxhdGVzdChbc2xvdHMkLCB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpXSkucGlwZShcbiAgICAgICAgbWFwKChbc2xvdHMsIGNhcnRdKSA9PiB7XG4gICAgICAgICAgaWYgKGNhcnQudG90YWxJdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuIHNsb3RzLmZpbHRlcihzbG90ID0+IHNsb3QgIT09ICdFbXB0eUNhcnRNaWRkbGVDb250ZW50Jyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzbG90cy5maWx0ZXIoXG4gICAgICAgICAgICAgIHNsb3QgPT4gc2xvdCAhPT0gJ1RvcENvbnRlbnQnICYmIHNsb3QgIT09ICdDZW50ZXJSaWdodENvbnRlbnRTbG90J1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgLy8vL1RPRE8gcmVtb3ZlIG9sZCBjb2RlIGZvciAjNTk1OFxuICAgIH1cbiAgICByZXR1cm4gc2xvdHMkO1xuICB9XG59XG4iXX0=