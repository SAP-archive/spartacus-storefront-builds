/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CartService, SelectiveCartService, FeatureConfigService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CartPageLayoutHandler = /** @class */ (function () {
    function CartPageLayoutHandler(cartService, selectiveCartService, featureConfig) {
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
    CartPageLayoutHandler.prototype.handle = /**
     * @param {?} slots$
     * @param {?=} pageTemplate
     * @param {?=} section
     * @return {?}
     */
    function (slots$, pageTemplate, section) {
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
                function (_a) {
                    var _b = tslib_1.__read(_a, 3), slots = _b[0], cart = _b[1], selectiveCart = _b[2];
                    if (cart.totalItems) {
                        return slots.filter((/**
                         * @param {?} slot
                         * @return {?}
                         */
                        function (slot) { return slot !== 'EmptyCartMiddleContent'; }));
                    }
                    else if (selectiveCart.totalItems) {
                        return slots.filter((/**
                         * @param {?} slot
                         * @return {?}
                         */
                        function (slot) {
                            return slot !== 'EmptyCartMiddleContent' &&
                                slot !== 'CenterRightContentSlot';
                        }));
                    }
                    else {
                        return slots.filter((/**
                         * @param {?} slot
                         * @return {?}
                         */
                        function (slot) {
                            return slot !== 'TopContent' && slot !== 'CenterRightContentSlot';
                        }));
                    }
                })));
            }
            //TODO remove old code for #5958
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
            ////TODO remove old code for #5958
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
        { type: CartService },
        { type: SelectiveCartService },
        { type: FeatureConfigService }
    ]; };
    /** @nocollapse */ CartPageLayoutHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CartPageLayoutHandler_Factory() { return new CartPageLayoutHandler(i0.ɵɵinject(i1.CartService), i0.ɵɵinject(i1.SelectiveCartService), i0.ɵɵinject(i1.FeatureConfigService)); }, token: CartPageLayoutHandler, providedIn: "root" });
    return CartPageLayoutHandler;
}());
export { CartPageLayoutHandler };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWxheW91dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXBhZ2UtbGF5b3V0LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsb0JBQW9CLEVBQ3BCLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFHckM7SUFnQkUsK0JBQ1UsV0FBd0IsRUFDeEIsb0JBQTJDLEVBQzNDLGFBQW9DO1FBRnBDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7UUFDM0Msa0JBQWEsR0FBYixhQUFhLENBQXVCO0lBQzNDLENBQUM7Ozs7Ozs7SUFFSixzQ0FBTTs7Ozs7O0lBQU4sVUFDRSxNQUE0QixFQUM1QixZQUFxQixFQUNyQixPQUFnQjtRQUVoQixJQUFJLFlBQVksS0FBSyxrQkFBa0IsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNuRCxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQ3RFLE9BQU8sYUFBYSxDQUFDO29CQUNuQixNQUFNO29CQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO29CQUM1QixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFO2lCQUNwQyxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7Z0JBQUMsVUFBQyxFQUE0Qjt3QkFBNUIsMEJBQTRCLEVBQTNCLGFBQUssRUFBRSxZQUFJLEVBQUUscUJBQWE7b0JBQzlCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTt3QkFDbkIsT0FBTyxLQUFLLENBQUMsTUFBTTs7Ozt3QkFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksS0FBSyx3QkFBd0IsRUFBakMsQ0FBaUMsRUFBQyxDQUFDO3FCQUNoRTt5QkFBTSxJQUFJLGFBQWEsQ0FBQyxVQUFVLEVBQUU7d0JBQ25DLE9BQU8sS0FBSyxDQUFDLE1BQU07Ozs7d0JBQ2pCLFVBQUEsSUFBSTs0QkFDRixPQUFBLElBQUksS0FBSyx3QkFBd0I7Z0NBQ2pDLElBQUksS0FBSyx3QkFBd0I7d0JBRGpDLENBQ2lDLEVBQ3BDLENBQUM7cUJBQ0g7eUJBQU07d0JBQ0wsT0FBTyxLQUFLLENBQUMsTUFBTTs7Ozt3QkFDakIsVUFBQSxJQUFJOzRCQUNGLE9BQUEsSUFBSSxLQUFLLFlBQVksSUFBSSxJQUFJLEtBQUssd0JBQXdCO3dCQUExRCxDQUEwRCxFQUM3RCxDQUFDO3FCQUNIO2dCQUNILENBQUMsRUFBQyxDQUNILENBQUM7YUFDSDtZQUNELGdDQUFnQztZQUNoQyxPQUFPLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQy9ELEdBQUc7Ozs7WUFBQyxVQUFDLEVBQWE7b0JBQWIsMEJBQWEsRUFBWixhQUFLLEVBQUUsWUFBSTtnQkFDZixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ25CLE9BQU8sS0FBSyxDQUFDLE1BQU07Ozs7b0JBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssd0JBQXdCLEVBQWpDLENBQWlDLEVBQUMsQ0FBQztpQkFDaEU7cUJBQU07b0JBQ0wsT0FBTyxLQUFLLENBQUMsTUFBTTs7OztvQkFDakIsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssWUFBWSxJQUFJLElBQUksS0FBSyx3QkFBd0IsRUFBMUQsQ0FBMEQsRUFDbkUsQ0FBQztpQkFDSDtZQUNILENBQUMsRUFBQyxDQUNILENBQUM7WUFDRixrQ0FBa0M7U0FDbkM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztnQkFuRUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFWQyxXQUFXO2dCQUNYLG9CQUFvQjtnQkFDcEIsb0JBQW9COzs7Z0NBSnRCO0NBOEVDLEFBcEVELElBb0VDO1NBakVZLHFCQUFxQjs7Ozs7O0lBYzlCLDRDQUFnQzs7Ozs7SUFDaEMscURBQW1EOzs7OztJQUNuRCw4Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYXJ0U2VydmljZSxcbiAgU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZUxheW91dEhhbmRsZXIgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQtaGFuZGxlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0UGFnZUxheW91dEhhbmRsZXIgaW1wbGVtZW50cyBQYWdlTGF5b3V0SGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuNVxuICAgKiBBZGQgc2VsZWN0aXZlQ2FydFNlcnZpY2UgYW5kIGZlYXR1cmVDb25maWcgZm9yIHNhdmUgZm9yIGxhdGVyLlxuICAgKiBSZW1vdmUgaXNzdWU6ICM1OTU4XG4gICAqL1xuICBjb25zdHJ1Y3RvcihjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2VsZWN0aXZlQ2FydFNlcnZpY2U/OiBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIGZlYXR1cmVDb25maWc/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgaGFuZGxlKFxuICAgIHNsb3RzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT4sXG4gICAgcGFnZVRlbXBsYXRlPzogc3RyaW5nLFxuICAgIHNlY3Rpb24/OiBzdHJpbmdcbiAgKSB7XG4gICAgaWYgKHBhZ2VUZW1wbGF0ZSA9PT0gJ0NhcnRQYWdlVGVtcGxhdGUnICYmICFzZWN0aW9uKSB7XG4gICAgICBpZiAodGhpcy5mZWF0dXJlQ29uZmlnICYmIHRoaXMuZmVhdHVyZUNvbmZpZy5pc0VuYWJsZWQoJ3NhdmVGb3JMYXRlcicpKSB7XG4gICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICBzbG90cyQsXG4gICAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKSxcbiAgICAgICAgICB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlLmdldENhcnQoKSxcbiAgICAgICAgXSkucGlwZShcbiAgICAgICAgICBtYXAoKFtzbG90cywgY2FydCwgc2VsZWN0aXZlQ2FydF0pID0+IHtcbiAgICAgICAgICAgIGlmIChjYXJ0LnRvdGFsSXRlbXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNsb3RzLmZpbHRlcihzbG90ID0+IHNsb3QgIT09ICdFbXB0eUNhcnRNaWRkbGVDb250ZW50Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGl2ZUNhcnQudG90YWxJdGVtcykge1xuICAgICAgICAgICAgICByZXR1cm4gc2xvdHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIHNsb3QgPT5cbiAgICAgICAgICAgICAgICAgIHNsb3QgIT09ICdFbXB0eUNhcnRNaWRkbGVDb250ZW50JyAmJlxuICAgICAgICAgICAgICAgICAgc2xvdCAhPT0gJ0NlbnRlclJpZ2h0Q29udGVudFNsb3QnXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gc2xvdHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIHNsb3QgPT5cbiAgICAgICAgICAgICAgICAgIHNsb3QgIT09ICdUb3BDb250ZW50JyAmJiBzbG90ICE9PSAnQ2VudGVyUmlnaHRDb250ZW50U2xvdCdcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgLy9UT0RPIHJlbW92ZSBvbGQgY29kZSBmb3IgIzU5NThcbiAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtzbG90cyQsIHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCldKS5waXBlKFxuICAgICAgICBtYXAoKFtzbG90cywgY2FydF0pID0+IHtcbiAgICAgICAgICBpZiAoY2FydC50b3RhbEl0ZW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gc2xvdHMuZmlsdGVyKHNsb3QgPT4gc2xvdCAhPT0gJ0VtcHR5Q2FydE1pZGRsZUNvbnRlbnQnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNsb3RzLmZpbHRlcihcbiAgICAgICAgICAgICAgc2xvdCA9PiBzbG90ICE9PSAnVG9wQ29udGVudCcgJiYgc2xvdCAhPT0gJ0NlbnRlclJpZ2h0Q29udGVudFNsb3QnXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICAvLy8vVE9ETyByZW1vdmUgb2xkIGNvZGUgZm9yICM1OTU4XG4gICAgfVxuICAgIHJldHVybiBzbG90cyQ7XG4gIH1cbn1cbiJdfQ==