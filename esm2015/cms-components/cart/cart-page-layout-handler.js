/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CartService } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
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
            return combineLatest(slots$, this.cartService.getActive()).pipe(map((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWxheW91dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXBhZ2UtbGF5b3V0LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFDaEMsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDOzs7Ozs7O0lBRWhELE1BQU0sQ0FDSixNQUE0QixFQUM1QixZQUFxQixFQUNyQixPQUFnQjtRQUVoQixJQUFJLFlBQVksS0FBSyxrQkFBa0IsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNuRCxPQUFPLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDN0QsR0FBRzs7OztZQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDcEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNuQixPQUFPLEtBQUssQ0FBQyxNQUFNOzs7O29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLHdCQUF3QixFQUFDLENBQUM7aUJBQ2hFO3FCQUFNO29CQUNMLE9BQU8sS0FBSyxDQUFDLE1BQU07Ozs7b0JBQ2pCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLFlBQVksSUFBSSxJQUFJLEtBQUssd0JBQXdCLEVBQ25FLENBQUM7aUJBQ0g7WUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1NBQ0g7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7WUF2QkYsVUFBVTs7OztZQUxGLFdBQVc7Ozs7Ozs7SUFPTiw0Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlTGF5b3V0SGFuZGxlciB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC1oYW5kbGVyJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRQYWdlTGF5b3V0SGFuZGxlciBpbXBsZW1lbnRzIFBhZ2VMYXlvdXRIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UpIHt9XG5cbiAgaGFuZGxlKFxuICAgIHNsb3RzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT4sXG4gICAgcGFnZVRlbXBsYXRlPzogc3RyaW5nLFxuICAgIHNlY3Rpb24/OiBzdHJpbmdcbiAgKSB7XG4gICAgaWYgKHBhZ2VUZW1wbGF0ZSA9PT0gJ0NhcnRQYWdlVGVtcGxhdGUnICYmICFzZWN0aW9uKSB7XG4gICAgICByZXR1cm4gY29tYmluZUxhdGVzdChzbG90cyQsIHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCkpLnBpcGUoXG4gICAgICAgIG1hcCgoW3Nsb3RzLCBjYXJ0XSkgPT4ge1xuICAgICAgICAgIGlmIChjYXJ0LnRvdGFsSXRlbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBzbG90cy5maWx0ZXIoc2xvdCA9PiBzbG90ICE9PSAnRW1wdHlDYXJ0TWlkZGxlQ29udGVudCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc2xvdHMuZmlsdGVyKFxuICAgICAgICAgICAgICBzbG90ID0+IHNsb3QgIT09ICdUb3BDb250ZW50JyAmJiBzbG90ICE9PSAnQ2VudGVyUmlnaHRDb250ZW50U2xvdCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHNsb3RzJDtcbiAgfVxufVxuIl19