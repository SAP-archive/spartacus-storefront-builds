import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ActiveCartService, Cart, SelectiveCartService } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
let CartPageLayoutHandler = class CartPageLayoutHandler {
    constructor(activeCartService, selectiveCartService) {
        this.activeCartService = activeCartService;
        this.selectiveCartService = selectiveCartService;
    }
    handle(slots$, pageTemplate, section) {
        if (pageTemplate === 'CartPageTemplate' && !section) {
            return combineLatest([
                slots$,
                this.activeCartService.getActive(),
                this.selectiveCartService.isEnabled()
                    ? this.selectiveCartService.getCart()
                    : of({}),
                this.activeCartService.getLoading(),
            ]).pipe(map(([slots, cart, selectiveCart, loadingCart]) => {
                const exclude = (arr, args) => arr.filter((item) => args.every((arg) => arg !== item));
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
    }
};
CartPageLayoutHandler.ctorParameters = () => [
    { type: ActiveCartService },
    { type: SelectiveCartService }
];
CartPageLayoutHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartPageLayoutHandler_Factory() { return new CartPageLayoutHandler(i0.ɵɵinject(i1.ActiveCartService), i0.ɵɵinject(i1.SelectiveCartService)); }, token: CartPageLayoutHandler, providedIn: "root" });
CartPageLayoutHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CartPageLayoutHandler);
export { CartPageLayoutHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWxheW91dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXBhZ2UtbGF5b3V0LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTXJDLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBQ2hDLFlBQ1ksaUJBQW9DLEVBQ3BDLG9CQUEwQztRQUQxQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDbkQsQ0FBQztJQUVKLE1BQU0sQ0FDSixNQUE0QixFQUM1QixZQUFxQixFQUNyQixPQUFnQjtRQUVoQixJQUFJLFlBQVksS0FBSyxrQkFBa0IsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNuRCxPQUFPLGFBQWEsQ0FBQztnQkFDbkIsTUFBTTtnQkFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFO29CQUNuQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRTtvQkFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFVLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUU7YUFDcEMsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2hELE1BQU0sT0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQzVCLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxXQUFXO29CQUNsRCxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTt3QkFDYixZQUFZO3dCQUNaLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3FCQUN6QixDQUFDO29CQUNKLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTt3QkFDakIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO3dCQUM1QyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVU7NEJBQzFCLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO2dDQUNiLHdCQUF3QjtnQ0FDeEIsd0JBQXdCOzZCQUN6QixDQUFDOzRCQUNKLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLHdCQUF3QixDQUFDLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQUMsQ0FDSCxDQUFDO1NBQ0g7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQTs7WUF4Q2dDLGlCQUFpQjtZQUNkLG9CQUFvQjs7O0FBSDNDLHFCQUFxQjtJQUhqQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1cscUJBQXFCLENBMENqQztTQTFDWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSwgQ2FydCwgU2VsZWN0aXZlQ2FydFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LWhhbmRsZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydFBhZ2VMYXlvdXRIYW5kbGVyIGltcGxlbWVudHMgUGFnZUxheW91dEhhbmRsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIGhhbmRsZShcbiAgICBzbG90cyQ6IE9ic2VydmFibGU8c3RyaW5nW10+LFxuICAgIHBhZ2VUZW1wbGF0ZT86IHN0cmluZyxcbiAgICBzZWN0aW9uPzogc3RyaW5nXG4gICkge1xuICAgIGlmIChwYWdlVGVtcGxhdGUgPT09ICdDYXJ0UGFnZVRlbXBsYXRlJyAmJiAhc2VjdGlvbikge1xuICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICBzbG90cyQsXG4gICAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QWN0aXZlKCksXG4gICAgICAgIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UuaXNFbmFibGVkKClcbiAgICAgICAgICA/IHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UuZ2V0Q2FydCgpXG4gICAgICAgICAgOiBvZih7fSBhcyBDYXJ0KSxcbiAgICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRMb2FkaW5nKCksXG4gICAgICBdKS5waXBlKFxuICAgICAgICBtYXAoKFtzbG90cywgY2FydCwgc2VsZWN0aXZlQ2FydCwgbG9hZGluZ0NhcnRdKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhjbHVkZSA9IChhcnIsIGFyZ3MpID0+XG4gICAgICAgICAgICBhcnIuZmlsdGVyKChpdGVtKSA9PiBhcmdzLmV2ZXJ5KChhcmcpID0+IGFyZyAhPT0gaXRlbSkpO1xuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhjYXJ0KS5sZW5ndGggPT09IDAgJiYgbG9hZGluZ0NhcnRcbiAgICAgICAgICAgID8gZXhjbHVkZShzbG90cywgW1xuICAgICAgICAgICAgICAgICdUb3BDb250ZW50JyxcbiAgICAgICAgICAgICAgICAnQ2VudGVyUmlnaHRDb250ZW50U2xvdCcsXG4gICAgICAgICAgICAgICAgJ0VtcHR5Q2FydE1pZGRsZUNvbnRlbnQnLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBjYXJ0LnRvdGFsSXRlbXNcbiAgICAgICAgICAgID8gZXhjbHVkZShzbG90cywgWydFbXB0eUNhcnRNaWRkbGVDb250ZW50J10pXG4gICAgICAgICAgICA6IHNlbGVjdGl2ZUNhcnQudG90YWxJdGVtc1xuICAgICAgICAgICAgPyBleGNsdWRlKHNsb3RzLCBbXG4gICAgICAgICAgICAgICAgJ0VtcHR5Q2FydE1pZGRsZUNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICdDZW50ZXJSaWdodENvbnRlbnRTbG90JyxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogZXhjbHVkZShzbG90cywgWydUb3BDb250ZW50JywgJ0NlbnRlclJpZ2h0Q29udGVudFNsb3QnXSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gc2xvdHMkO1xuICB9XG59XG4iXX0=