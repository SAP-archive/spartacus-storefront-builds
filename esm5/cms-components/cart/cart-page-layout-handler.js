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
                this.activeCartService.getLoading(),
            ]).pipe(map(function (_a) {
                var _b = __read(_a, 4), slots = _b[0], cart = _b[1], selectiveCart = _b[2], loadingCart = _b[3];
                var exclude = function (arr, args) {
                    return arr.filter(function (item) { return args.every(function (arg) { return arg !== item; }); });
                };
                return Object.keys(cart).length === 0 && loadingCart
                    ? exclude(slots, [
                        'TopContent',
                        'CenterRightContentSlot',
                        'EmptyCartMiddleContent',
                    ])
                    : cart.totalItems
                        ? exclude(slots, ['EmptyCartMiddleContent'])
                        : selectiveCart.totalItems
                            ? exclude(slots, [
                                'EmptyCartMiddleContent',
                                'CenterRightContentSlot',
                            ])
                            : exclude(slots, ['TopContent', 'CenterRightContentSlot']);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWxheW91dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXBhZ2UtbGF5b3V0LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU1yQztJQUNFLCtCQUNZLGlCQUFvQyxFQUNwQyxvQkFBMEM7UUFEMUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ25ELENBQUM7SUFFSixzQ0FBTSxHQUFOLFVBQ0UsTUFBNEIsRUFDNUIsWUFBcUIsRUFDckIsT0FBZ0I7UUFFaEIsSUFBSSxZQUFZLEtBQUssa0JBQWtCLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbkQsT0FBTyxhQUFhLENBQUM7Z0JBQ25CLE1BQU07Z0JBQ04sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRTtnQkFDbkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRTthQUNwQyxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxVQUFDLEVBQXlDO29CQUF6QyxrQkFBeUMsRUFBeEMsYUFBSyxFQUFFLFlBQUksRUFBRSxxQkFBYSxFQUFFLG1CQUFXO2dCQUMzQyxJQUFNLE9BQU8sR0FBRyxVQUFDLEdBQUcsRUFBRSxJQUFJO29CQUN4QixPQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxLQUFLLElBQUksRUFBWixDQUFZLENBQUMsRUFBakMsQ0FBaUMsQ0FBQztnQkFBdkQsQ0FBdUQsQ0FBQztnQkFDMUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksV0FBVztvQkFDbEQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7d0JBQ2IsWUFBWTt3QkFDWix3QkFBd0I7d0JBQ3hCLHdCQUF3QjtxQkFDekIsQ0FBQztvQkFDSixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7d0JBQ2pCLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsd0JBQXdCLENBQUMsQ0FBQzt3QkFDNUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVOzRCQUMxQixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtnQ0FDYix3QkFBd0I7Z0NBQ3hCLHdCQUF3Qjs2QkFDekIsQ0FBQzs0QkFDSixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7WUFDL0QsQ0FBQyxDQUFDLENBQ0gsQ0FBQztTQUNIO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Z0JBckM4QixpQkFBaUI7Z0JBQ2Qsb0JBQW9COzs7SUFIM0MscUJBQXFCO1FBSGpDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxxQkFBcUIsQ0F3Q2pDO2dDQWpERDtDQWlEQyxBQXhDRCxJQXdDQztTQXhDWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSwgU2VsZWN0aXZlQ2FydFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZUxheW91dEhhbmRsZXIgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQtaGFuZGxlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0UGFnZUxheW91dEhhbmRsZXIgaW1wbGVtZW50cyBQYWdlTGF5b3V0SGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlOiBTZWxlY3RpdmVDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgaGFuZGxlKFxuICAgIHNsb3RzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT4sXG4gICAgcGFnZVRlbXBsYXRlPzogc3RyaW5nLFxuICAgIHNlY3Rpb24/OiBzdHJpbmdcbiAgKSB7XG4gICAgaWYgKHBhZ2VUZW1wbGF0ZSA9PT0gJ0NhcnRQYWdlVGVtcGxhdGUnICYmICFzZWN0aW9uKSB7XG4gICAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICAgIHNsb3RzJCxcbiAgICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRBY3RpdmUoKSxcbiAgICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5nZXRDYXJ0KCksXG4gICAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0TG9hZGluZygpLFxuICAgICAgXSkucGlwZShcbiAgICAgICAgbWFwKChbc2xvdHMsIGNhcnQsIHNlbGVjdGl2ZUNhcnQsIGxvYWRpbmdDYXJ0XSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGV4Y2x1ZGUgPSAoYXJyLCBhcmdzKSA9PlxuICAgICAgICAgICAgYXJyLmZpbHRlcigoaXRlbSkgPT4gYXJncy5ldmVyeSgoYXJnKSA9PiBhcmcgIT09IGl0ZW0pKTtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoY2FydCkubGVuZ3RoID09PSAwICYmIGxvYWRpbmdDYXJ0XG4gICAgICAgICAgICA/IGV4Y2x1ZGUoc2xvdHMsIFtcbiAgICAgICAgICAgICAgICAnVG9wQ29udGVudCcsXG4gICAgICAgICAgICAgICAgJ0NlbnRlclJpZ2h0Q29udGVudFNsb3QnLFxuICAgICAgICAgICAgICAgICdFbXB0eUNhcnRNaWRkbGVDb250ZW50JyxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogY2FydC50b3RhbEl0ZW1zXG4gICAgICAgICAgICA/IGV4Y2x1ZGUoc2xvdHMsIFsnRW1wdHlDYXJ0TWlkZGxlQ29udGVudCddKVxuICAgICAgICAgICAgOiBzZWxlY3RpdmVDYXJ0LnRvdGFsSXRlbXNcbiAgICAgICAgICAgID8gZXhjbHVkZShzbG90cywgW1xuICAgICAgICAgICAgICAgICdFbXB0eUNhcnRNaWRkbGVDb250ZW50JyxcbiAgICAgICAgICAgICAgICAnQ2VudGVyUmlnaHRDb250ZW50U2xvdCcsXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IGV4Y2x1ZGUoc2xvdHMsIFsnVG9wQ29udGVudCcsICdDZW50ZXJSaWdodENvbnRlbnRTbG90J10pO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHNsb3RzJDtcbiAgfVxufVxuIl19