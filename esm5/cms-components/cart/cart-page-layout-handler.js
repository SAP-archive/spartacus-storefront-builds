import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { ActiveCartService, SelectiveCartService } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CartPageLayoutHandler = /** @class */ (function () {
    function CartPageLayoutHandler(activeCartService, selectiveCartService) {
        this.activeCartService = activeCartService;
        this.selectiveCartService = selectiveCartService;
    }
    CartPageLayoutHandler.prototype.handle = function (slots$, pageTemplate, section) {
        if (pageTemplate === 'CartPageTemplate' && !section) {
            return combineLatest([
                slots$,
                this.activeCartService.getActive(),
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
                    return slots.filter(function (slot) { return slot !== 'TopContent' && slot !== 'CenterRightContentSlot'; });
                }
            }));
        }
        return slots$;
    };
    CartPageLayoutHandler.ctorParameters = function () { return [
        { type: ActiveCartService },
        { type: SelectiveCartService }
    ]; };
    CartPageLayoutHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartPageLayoutHandler_Factory() { return new CartPageLayoutHandler(i0.ɵɵinject(i1.ActiveCartService), i0.ɵɵinject(i1.SelectiveCartService)); }, token: CartPageLayoutHandler, providedIn: "root" });
    CartPageLayoutHandler = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CartPageLayoutHandler);
    return CartPageLayoutHandler;
}());
export { CartPageLayoutHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWxheW91dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXBhZ2UtbGF5b3V0LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU1yQztJQUNFLCtCQUNZLGlCQUFvQyxFQUNwQyxvQkFBMEM7UUFEMUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ25ELENBQUM7SUFFSixzQ0FBTSxHQUFOLFVBQ0UsTUFBNEIsRUFDNUIsWUFBcUIsRUFDckIsT0FBZ0I7UUFFaEIsSUFBSSxZQUFZLEtBQUssa0JBQWtCLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbkQsT0FBTyxhQUFhLENBQUM7Z0JBQ25CLE1BQU07Z0JBQ04sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRTthQUNwQyxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxVQUFDLEVBQTRCO29CQUE1QixrQkFBNEIsRUFBM0IsYUFBSyxFQUFFLFlBQUksRUFBRSxxQkFBYTtnQkFDOUIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNuQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssd0JBQXdCLEVBQWpDLENBQWlDLENBQUMsQ0FBQztpQkFDaEU7cUJBQU0sSUFBSSxhQUFhLENBQUMsVUFBVSxFQUFFO29CQUNuQyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQ2pCLFVBQUEsSUFBSTt3QkFDRixPQUFBLElBQUksS0FBSyx3QkFBd0I7NEJBQ2pDLElBQUksS0FBSyx3QkFBd0I7b0JBRGpDLENBQ2lDLENBQ3BDLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUNqQixVQUFBLElBQUksSUFBSSxPQUFBLElBQUksS0FBSyxZQUFZLElBQUksSUFBSSxLQUFLLHdCQUF3QixFQUExRCxDQUEwRCxDQUNuRSxDQUFDO2lCQUNIO1lBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztTQUNIO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Z0JBakM4QixpQkFBaUI7Z0JBQ2Qsb0JBQW9COzs7SUFIM0MscUJBQXFCO1FBSGpDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxxQkFBcUIsQ0FvQ2pDO2dDQTdDRDtDQTZDQyxBQXBDRCxJQW9DQztTQXBDWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSwgU2VsZWN0aXZlQ2FydFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZUxheW91dEhhbmRsZXIgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQtaGFuZGxlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0UGFnZUxheW91dEhhbmRsZXIgaW1wbGVtZW50cyBQYWdlTGF5b3V0SGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlOiBTZWxlY3RpdmVDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgaGFuZGxlKFxuICAgIHNsb3RzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT4sXG4gICAgcGFnZVRlbXBsYXRlPzogc3RyaW5nLFxuICAgIHNlY3Rpb24/OiBzdHJpbmdcbiAgKSB7XG4gICAgaWYgKHBhZ2VUZW1wbGF0ZSA9PT0gJ0NhcnRQYWdlVGVtcGxhdGUnICYmICFzZWN0aW9uKSB7XG4gICAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICAgIHNsb3RzJCxcbiAgICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRBY3RpdmUoKSxcbiAgICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5nZXRDYXJ0KCksXG4gICAgICBdKS5waXBlKFxuICAgICAgICBtYXAoKFtzbG90cywgY2FydCwgc2VsZWN0aXZlQ2FydF0pID0+IHtcbiAgICAgICAgICBpZiAoY2FydC50b3RhbEl0ZW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gc2xvdHMuZmlsdGVyKHNsb3QgPT4gc2xvdCAhPT0gJ0VtcHR5Q2FydE1pZGRsZUNvbnRlbnQnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGl2ZUNhcnQudG90YWxJdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuIHNsb3RzLmZpbHRlcihcbiAgICAgICAgICAgICAgc2xvdCA9PlxuICAgICAgICAgICAgICAgIHNsb3QgIT09ICdFbXB0eUNhcnRNaWRkbGVDb250ZW50JyAmJlxuICAgICAgICAgICAgICAgIHNsb3QgIT09ICdDZW50ZXJSaWdodENvbnRlbnRTbG90J1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNsb3RzLmZpbHRlcihcbiAgICAgICAgICAgICAgc2xvdCA9PiBzbG90ICE9PSAnVG9wQ29udGVudCcgJiYgc2xvdCAhPT0gJ0NlbnRlclJpZ2h0Q29udGVudFNsb3QnXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzbG90cyQ7XG4gIH1cbn1cbiJdfQ==