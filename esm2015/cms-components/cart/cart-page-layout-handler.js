import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ActiveCartService, SelectiveCartService } from '@spartacus/core';
import { combineLatest } from 'rxjs';
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
                this.selectiveCartService.getCart(),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWxheW91dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXBhZ2UtbGF5b3V0LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU1yQyxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQUNoQyxZQUNZLGlCQUFvQyxFQUNwQyxvQkFBMEM7UUFEMUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ25ELENBQUM7SUFFSixNQUFNLENBQ0osTUFBNEIsRUFDNUIsWUFBcUIsRUFDckIsT0FBZ0I7UUFFaEIsSUFBSSxZQUFZLEtBQUssa0JBQWtCLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbkQsT0FBTyxhQUFhLENBQUM7Z0JBQ25CLE1BQU07Z0JBQ04sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRTtnQkFDbkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRTthQUNwQyxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRTtnQkFDaEQsTUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FDNUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzFELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFdBQVc7b0JBQ2xELENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO3dCQUNiLFlBQVk7d0JBQ1osd0JBQXdCO3dCQUN4Qix3QkFBd0I7cUJBQ3pCLENBQUM7b0JBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVO3dCQUNqQixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUM7d0JBQzVDLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVTs0QkFDMUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0NBQ2Isd0JBQXdCO2dDQUN4Qix3QkFBd0I7NkJBQ3pCLENBQUM7NEJBQ0osQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1lBQy9ELENBQUMsQ0FBQyxDQUNILENBQUM7U0FDSDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRixDQUFBOztZQXRDZ0MsaUJBQWlCO1lBQ2Qsb0JBQW9COzs7QUFIM0MscUJBQXFCO0lBSGpDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxxQkFBcUIsQ0F3Q2pDO1NBeENZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlLCBTZWxlY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0SGFuZGxlciB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC1oYW5kbGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRQYWdlTGF5b3V0SGFuZGxlciBpbXBsZW1lbnRzIFBhZ2VMYXlvdXRIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge31cblxuICBoYW5kbGUoXG4gICAgc2xvdHMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPixcbiAgICBwYWdlVGVtcGxhdGU/OiBzdHJpbmcsXG4gICAgc2VjdGlvbj86IHN0cmluZ1xuICApIHtcbiAgICBpZiAocGFnZVRlbXBsYXRlID09PSAnQ2FydFBhZ2VUZW1wbGF0ZScgJiYgIXNlY3Rpb24pIHtcbiAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgc2xvdHMkLFxuICAgICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpLFxuICAgICAgICB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlLmdldENhcnQoKSxcbiAgICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRMb2FkaW5nKCksXG4gICAgICBdKS5waXBlKFxuICAgICAgICBtYXAoKFtzbG90cywgY2FydCwgc2VsZWN0aXZlQ2FydCwgbG9hZGluZ0NhcnRdKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhjbHVkZSA9IChhcnIsIGFyZ3MpID0+XG4gICAgICAgICAgICBhcnIuZmlsdGVyKChpdGVtKSA9PiBhcmdzLmV2ZXJ5KChhcmcpID0+IGFyZyAhPT0gaXRlbSkpO1xuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhjYXJ0KS5sZW5ndGggPT09IDAgJiYgbG9hZGluZ0NhcnRcbiAgICAgICAgICAgID8gZXhjbHVkZShzbG90cywgW1xuICAgICAgICAgICAgICAgICdUb3BDb250ZW50JyxcbiAgICAgICAgICAgICAgICAnQ2VudGVyUmlnaHRDb250ZW50U2xvdCcsXG4gICAgICAgICAgICAgICAgJ0VtcHR5Q2FydE1pZGRsZUNvbnRlbnQnLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBjYXJ0LnRvdGFsSXRlbXNcbiAgICAgICAgICAgID8gZXhjbHVkZShzbG90cywgWydFbXB0eUNhcnRNaWRkbGVDb250ZW50J10pXG4gICAgICAgICAgICA6IHNlbGVjdGl2ZUNhcnQudG90YWxJdGVtc1xuICAgICAgICAgICAgPyBleGNsdWRlKHNsb3RzLCBbXG4gICAgICAgICAgICAgICAgJ0VtcHR5Q2FydE1pZGRsZUNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICdDZW50ZXJSaWdodENvbnRlbnRTbG90JyxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogZXhjbHVkZShzbG90cywgWydUb3BDb250ZW50JywgJ0NlbnRlclJpZ2h0Q29udGVudFNsb3QnXSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gc2xvdHMkO1xuICB9XG59XG4iXX0=