import { __decorate, __read } from "tslib";
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
    CartPageLayoutHandler.prototype.handle = function (slots$, pageTemplate, section) {
        if (pageTemplate === 'CartPageTemplate' && !section) {
            if (this.featureConfig && this.featureConfig.isEnabled('saveForLater')) {
                return combineLatest([
                    slots$,
                    this.cartService.getActive(),
                    this.selectiveCartService.getCart(),
                ]).pipe(map(function (_a) {
                    var _b = __read(_a, 3), slots = _b[0], cart = _b[1], selectiveCart = _b[2];
                    if (cart.totalItems) {
                        return slots.filter(function (slot) { return slot !== 'EmptyCartMiddleContent'; });
                    }
                    else if (selectiveCart.totalItems) {
                        return slots.filter(function (slot) {
                            return slot !== 'EmptyCartMiddleContent' &&
                                slot !== 'CenterRightContentSlot';
                        });
                    }
                    else {
                        return slots.filter(function (slot) {
                            return slot !== 'TopContent' && slot !== 'CenterRightContentSlot';
                        });
                    }
                }));
            }
            //TODO remove old code for #5958
            return combineLatest([slots$, this.cartService.getActive()]).pipe(map(function (_a) {
                var _b = __read(_a, 2), slots = _b[0], cart = _b[1];
                if (cart.totalItems) {
                    return slots.filter(function (slot) { return slot !== 'EmptyCartMiddleContent'; });
                }
                else {
                    return slots.filter(function (slot) { return slot !== 'TopContent' && slot !== 'CenterRightContentSlot'; });
                }
            }));
            ////TODO remove old code for #5958
        }
        return slots$;
    };
    CartPageLayoutHandler.ctorParameters = function () { return [
        { type: CartService },
        { type: SelectiveCartService },
        { type: FeatureConfigService }
    ]; };
    CartPageLayoutHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartPageLayoutHandler_Factory() { return new CartPageLayoutHandler(i0.ɵɵinject(i1.CartService), i0.ɵɵinject(i1.SelectiveCartService), i0.ɵɵinject(i1.FeatureConfigService)); }, token: CartPageLayoutHandler, providedIn: "root" });
    CartPageLayoutHandler = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CartPageLayoutHandler);
    return CartPageLayoutHandler;
}());
export { CartPageLayoutHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWxheW91dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXBhZ2UtbGF5b3V0LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLFdBQVcsRUFDWCxvQkFBb0IsRUFDcEIsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU1yQztJQWFFLCtCQUNVLFdBQXdCLEVBQ3hCLG9CQUEyQyxFQUMzQyxhQUFvQztRQUZwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO1FBQzNDLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtJQUMzQyxDQUFDO0lBRUosc0NBQU0sR0FBTixVQUNFLE1BQTRCLEVBQzVCLFlBQXFCLEVBQ3JCLE9BQWdCO1FBRWhCLElBQUksWUFBWSxLQUFLLGtCQUFrQixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ25ELElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDdEUsT0FBTyxhQUFhLENBQUM7b0JBQ25CLE1BQU07b0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUU7aUJBQ3BDLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUFDLFVBQUMsRUFBNEI7d0JBQTVCLGtCQUE0QixFQUEzQixhQUFLLEVBQUUsWUFBSSxFQUFFLHFCQUFhO29CQUM5QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7d0JBQ25CLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksS0FBSyx3QkFBd0IsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO3FCQUNoRTt5QkFBTSxJQUFJLGFBQWEsQ0FBQyxVQUFVLEVBQUU7d0JBQ25DLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FDakIsVUFBQSxJQUFJOzRCQUNGLE9BQUEsSUFBSSxLQUFLLHdCQUF3QjtnQ0FDakMsSUFBSSxLQUFLLHdCQUF3Qjt3QkFEakMsQ0FDaUMsQ0FDcEMsQ0FBQztxQkFDSDt5QkFBTTt3QkFDTCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQ2pCLFVBQUEsSUFBSTs0QkFDRixPQUFBLElBQUksS0FBSyxZQUFZLElBQUksSUFBSSxLQUFLLHdCQUF3Qjt3QkFBMUQsQ0FBMEQsQ0FDN0QsQ0FBQztxQkFDSDtnQkFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO2FBQ0g7WUFDRCxnQ0FBZ0M7WUFDaEMsT0FBTyxhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUMvRCxHQUFHLENBQUMsVUFBQyxFQUFhO29CQUFiLGtCQUFhLEVBQVosYUFBSyxFQUFFLFlBQUk7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNuQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssd0JBQXdCLEVBQWpDLENBQWlDLENBQUMsQ0FBQztpQkFDaEU7cUJBQU07b0JBQ0wsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUNqQixVQUFBLElBQUksSUFBSSxPQUFBLElBQUksS0FBSyxZQUFZLElBQUksSUFBSSxLQUFLLHdCQUF3QixFQUExRCxDQUEwRCxDQUNuRSxDQUFDO2lCQUNIO1lBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztZQUNGLGtDQUFrQztTQUNuQztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQWxEc0IsV0FBVztnQkFDRCxvQkFBb0I7Z0JBQzNCLG9CQUFvQjs7O0lBaEJuQyxxQkFBcUI7UUFIakMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLHFCQUFxQixDQWlFakM7Z0NBOUVEO0NBOEVDLEFBakVELElBaUVDO1NBakVZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhcnRTZXJ2aWNlLFxuICBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbiAgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0SGFuZGxlciB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC1oYW5kbGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRQYWdlTGF5b3V0SGFuZGxlciBpbXBsZW1lbnRzIFBhZ2VMYXlvdXRIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlOiBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbiAgICBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAqIEFkZCBzZWxlY3RpdmVDYXJ0U2VydmljZSBhbmQgZmVhdHVyZUNvbmZpZyBmb3Igc2F2ZSBmb3IgbGF0ZXIuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzU5NThcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZWxlY3RpdmVDYXJ0U2VydmljZT86IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmVhdHVyZUNvbmZpZz86IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBoYW5kbGUoXG4gICAgc2xvdHMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPixcbiAgICBwYWdlVGVtcGxhdGU/OiBzdHJpbmcsXG4gICAgc2VjdGlvbj86IHN0cmluZ1xuICApIHtcbiAgICBpZiAocGFnZVRlbXBsYXRlID09PSAnQ2FydFBhZ2VUZW1wbGF0ZScgJiYgIXNlY3Rpb24pIHtcbiAgICAgIGlmICh0aGlzLmZlYXR1cmVDb25maWcgJiYgdGhpcy5mZWF0dXJlQ29uZmlnLmlzRW5hYmxlZCgnc2F2ZUZvckxhdGVyJykpIHtcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgIHNsb3RzJCxcbiAgICAgICAgICB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpLFxuICAgICAgICAgIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UuZ2V0Q2FydCgpLFxuICAgICAgICBdKS5waXBlKFxuICAgICAgICAgIG1hcCgoW3Nsb3RzLCBjYXJ0LCBzZWxlY3RpdmVDYXJ0XSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhcnQudG90YWxJdGVtcykge1xuICAgICAgICAgICAgICByZXR1cm4gc2xvdHMuZmlsdGVyKHNsb3QgPT4gc2xvdCAhPT0gJ0VtcHR5Q2FydE1pZGRsZUNvbnRlbnQnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0aXZlQ2FydC50b3RhbEl0ZW1zKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzbG90cy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgc2xvdCA9PlxuICAgICAgICAgICAgICAgICAgc2xvdCAhPT0gJ0VtcHR5Q2FydE1pZGRsZUNvbnRlbnQnICYmXG4gICAgICAgICAgICAgICAgICBzbG90ICE9PSAnQ2VudGVyUmlnaHRDb250ZW50U2xvdCdcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBzbG90cy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgc2xvdCA9PlxuICAgICAgICAgICAgICAgICAgc2xvdCAhPT0gJ1RvcENvbnRlbnQnICYmIHNsb3QgIT09ICdDZW50ZXJSaWdodENvbnRlbnRTbG90J1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICAvL1RPRE8gcmVtb3ZlIG9sZCBjb2RlIGZvciAjNTk1OFxuICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW3Nsb3RzJCwgdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKV0pLnBpcGUoXG4gICAgICAgIG1hcCgoW3Nsb3RzLCBjYXJ0XSkgPT4ge1xuICAgICAgICAgIGlmIChjYXJ0LnRvdGFsSXRlbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBzbG90cy5maWx0ZXIoc2xvdCA9PiBzbG90ICE9PSAnRW1wdHlDYXJ0TWlkZGxlQ29udGVudCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc2xvdHMuZmlsdGVyKFxuICAgICAgICAgICAgICBzbG90ID0+IHNsb3QgIT09ICdUb3BDb250ZW50JyAmJiBzbG90ICE9PSAnQ2VudGVyUmlnaHRDb250ZW50U2xvdCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIC8vLy9UT0RPIHJlbW92ZSBvbGQgY29kZSBmb3IgIzU5NThcbiAgICB9XG4gICAgcmV0dXJuIHNsb3RzJDtcbiAgfVxufVxuIl19