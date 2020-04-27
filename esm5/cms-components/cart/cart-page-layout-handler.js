import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { ActiveCartService, Cart, SelectiveCartService } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
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
                this.selectiveCartService.isEnabled()
                    ? this.selectiveCartService.getCart()
                    : of({}),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWxheW91dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXBhZ2UtbGF5b3V0LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTXJDO0lBQ0UsK0JBQ1ksaUJBQW9DLEVBQ3BDLG9CQUEwQztRQUQxQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDbkQsQ0FBQztJQUVKLHNDQUFNLEdBQU4sVUFDRSxNQUE0QixFQUM1QixZQUFxQixFQUNyQixPQUFnQjtRQUVoQixJQUFJLFlBQVksS0FBSyxrQkFBa0IsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNuRCxPQUFPLGFBQWEsQ0FBQztnQkFDbkIsTUFBTTtnQkFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFO29CQUNuQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRTtvQkFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFVLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUU7YUFDcEMsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHLENBQUMsVUFBQyxFQUF5QztvQkFBekMsa0JBQXlDLEVBQXhDLGFBQUssRUFBRSxZQUFJLEVBQUUscUJBQWEsRUFBRSxtQkFBVztnQkFDM0MsSUFBTSxPQUFPLEdBQUcsVUFBQyxHQUFHLEVBQUUsSUFBSTtvQkFDeEIsT0FBQSxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsS0FBSyxJQUFJLEVBQVosQ0FBWSxDQUFDLEVBQWpDLENBQWlDLENBQUM7Z0JBQXZELENBQXVELENBQUM7Z0JBQzFELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFdBQVc7b0JBQ2xELENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO3dCQUNiLFlBQVk7d0JBQ1osd0JBQXdCO3dCQUN4Qix3QkFBd0I7cUJBQ3pCLENBQUM7b0JBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVO3dCQUNqQixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUM7d0JBQzVDLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVTs0QkFDMUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0NBQ2Isd0JBQXdCO2dDQUN4Qix3QkFBd0I7NkJBQ3pCLENBQUM7NEJBQ0osQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1lBQy9ELENBQUMsQ0FBQyxDQUNILENBQUM7U0FDSDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQXZDOEIsaUJBQWlCO2dCQUNkLG9CQUFvQjs7O0lBSDNDLHFCQUFxQjtRQUhqQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1cscUJBQXFCLENBMENqQztnQ0FuREQ7Q0FtREMsQUExQ0QsSUEwQ0M7U0ExQ1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UsIENhcnQsIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0SGFuZGxlciB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC1oYW5kbGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRQYWdlTGF5b3V0SGFuZGxlciBpbXBsZW1lbnRzIFBhZ2VMYXlvdXRIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge31cblxuICBoYW5kbGUoXG4gICAgc2xvdHMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPixcbiAgICBwYWdlVGVtcGxhdGU/OiBzdHJpbmcsXG4gICAgc2VjdGlvbj86IHN0cmluZ1xuICApIHtcbiAgICBpZiAocGFnZVRlbXBsYXRlID09PSAnQ2FydFBhZ2VUZW1wbGF0ZScgJiYgIXNlY3Rpb24pIHtcbiAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgc2xvdHMkLFxuICAgICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpLFxuICAgICAgICB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlLmlzRW5hYmxlZCgpXG4gICAgICAgICAgPyB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlLmdldENhcnQoKVxuICAgICAgICAgIDogb2Yoe30gYXMgQ2FydCksXG4gICAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0TG9hZGluZygpLFxuICAgICAgXSkucGlwZShcbiAgICAgICAgbWFwKChbc2xvdHMsIGNhcnQsIHNlbGVjdGl2ZUNhcnQsIGxvYWRpbmdDYXJ0XSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGV4Y2x1ZGUgPSAoYXJyLCBhcmdzKSA9PlxuICAgICAgICAgICAgYXJyLmZpbHRlcigoaXRlbSkgPT4gYXJncy5ldmVyeSgoYXJnKSA9PiBhcmcgIT09IGl0ZW0pKTtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoY2FydCkubGVuZ3RoID09PSAwICYmIGxvYWRpbmdDYXJ0XG4gICAgICAgICAgICA/IGV4Y2x1ZGUoc2xvdHMsIFtcbiAgICAgICAgICAgICAgICAnVG9wQ29udGVudCcsXG4gICAgICAgICAgICAgICAgJ0NlbnRlclJpZ2h0Q29udGVudFNsb3QnLFxuICAgICAgICAgICAgICAgICdFbXB0eUNhcnRNaWRkbGVDb250ZW50JyxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogY2FydC50b3RhbEl0ZW1zXG4gICAgICAgICAgICA/IGV4Y2x1ZGUoc2xvdHMsIFsnRW1wdHlDYXJ0TWlkZGxlQ29udGVudCddKVxuICAgICAgICAgICAgOiBzZWxlY3RpdmVDYXJ0LnRvdGFsSXRlbXNcbiAgICAgICAgICAgID8gZXhjbHVkZShzbG90cywgW1xuICAgICAgICAgICAgICAgICdFbXB0eUNhcnRNaWRkbGVDb250ZW50JyxcbiAgICAgICAgICAgICAgICAnQ2VudGVyUmlnaHRDb250ZW50U2xvdCcsXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IGV4Y2x1ZGUoc2xvdHMsIFsnVG9wQ29udGVudCcsICdDZW50ZXJSaWdodENvbnRlbnRTbG90J10pO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHNsb3RzJDtcbiAgfVxufVxuIl19