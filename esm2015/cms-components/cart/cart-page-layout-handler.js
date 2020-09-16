import { Injectable } from '@angular/core';
import { ActiveCartService, SelectiveCartService } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class CartPageLayoutHandler {
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
}
CartPageLayoutHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartPageLayoutHandler_Factory() { return new CartPageLayoutHandler(i0.ɵɵinject(i1.ActiveCartService), i0.ɵɵinject(i1.SelectiveCartService)); }, token: CartPageLayoutHandler, providedIn: "root" });
CartPageLayoutHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CartPageLayoutHandler.ctorParameters = () => [
    { type: ActiveCartService },
    { type: SelectiveCartService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWxheW91dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXBhZ2UtbGF5b3V0LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQVEsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU1yQyxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLFlBQ1ksaUJBQW9DLEVBQ3BDLG9CQUEwQztRQUQxQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDbkQsQ0FBQztJQUVKLE1BQU0sQ0FDSixNQUE0QixFQUM1QixZQUFxQixFQUNyQixPQUFnQjtRQUVoQixJQUFJLFlBQVksS0FBSyxrQkFBa0IsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNuRCxPQUFPLGFBQWEsQ0FBQztnQkFDbkIsTUFBTTtnQkFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFO29CQUNuQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRTtvQkFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFVLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUU7YUFDcEMsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2hELE1BQU0sT0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQzVCLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxXQUFXO29CQUNsRCxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTt3QkFDYixZQUFZO3dCQUNaLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3FCQUN6QixDQUFDO29CQUNKLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTt3QkFDakIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO3dCQUM1QyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVU7NEJBQzFCLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO2dDQUNiLHdCQUF3QjtnQ0FDeEIsd0JBQXdCOzZCQUN6QixDQUFDOzRCQUNKLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLHdCQUF3QixDQUFDLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQUMsQ0FDSCxDQUFDO1NBQ0g7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7O1lBNUNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUFEsaUJBQWlCO1lBQVEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UsIENhcnQsIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0SGFuZGxlciB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC1oYW5kbGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRQYWdlTGF5b3V0SGFuZGxlciBpbXBsZW1lbnRzIFBhZ2VMYXlvdXRIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge31cblxuICBoYW5kbGUoXG4gICAgc2xvdHMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPixcbiAgICBwYWdlVGVtcGxhdGU/OiBzdHJpbmcsXG4gICAgc2VjdGlvbj86IHN0cmluZ1xuICApIHtcbiAgICBpZiAocGFnZVRlbXBsYXRlID09PSAnQ2FydFBhZ2VUZW1wbGF0ZScgJiYgIXNlY3Rpb24pIHtcbiAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgc2xvdHMkLFxuICAgICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpLFxuICAgICAgICB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlLmlzRW5hYmxlZCgpXG4gICAgICAgICAgPyB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlLmdldENhcnQoKVxuICAgICAgICAgIDogb2Yoe30gYXMgQ2FydCksXG4gICAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0TG9hZGluZygpLFxuICAgICAgXSkucGlwZShcbiAgICAgICAgbWFwKChbc2xvdHMsIGNhcnQsIHNlbGVjdGl2ZUNhcnQsIGxvYWRpbmdDYXJ0XSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGV4Y2x1ZGUgPSAoYXJyLCBhcmdzKSA9PlxuICAgICAgICAgICAgYXJyLmZpbHRlcigoaXRlbSkgPT4gYXJncy5ldmVyeSgoYXJnKSA9PiBhcmcgIT09IGl0ZW0pKTtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoY2FydCkubGVuZ3RoID09PSAwICYmIGxvYWRpbmdDYXJ0XG4gICAgICAgICAgICA/IGV4Y2x1ZGUoc2xvdHMsIFtcbiAgICAgICAgICAgICAgICAnVG9wQ29udGVudCcsXG4gICAgICAgICAgICAgICAgJ0NlbnRlclJpZ2h0Q29udGVudFNsb3QnLFxuICAgICAgICAgICAgICAgICdFbXB0eUNhcnRNaWRkbGVDb250ZW50JyxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogY2FydC50b3RhbEl0ZW1zXG4gICAgICAgICAgICA/IGV4Y2x1ZGUoc2xvdHMsIFsnRW1wdHlDYXJ0TWlkZGxlQ29udGVudCddKVxuICAgICAgICAgICAgOiBzZWxlY3RpdmVDYXJ0LnRvdGFsSXRlbXNcbiAgICAgICAgICAgID8gZXhjbHVkZShzbG90cywgW1xuICAgICAgICAgICAgICAgICdFbXB0eUNhcnRNaWRkbGVDb250ZW50JyxcbiAgICAgICAgICAgICAgICAnQ2VudGVyUmlnaHRDb250ZW50U2xvdCcsXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IGV4Y2x1ZGUoc2xvdHMsIFsnVG9wQ29udGVudCcsICdDZW50ZXJSaWdodENvbnRlbnRTbG90J10pO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHNsb3RzJDtcbiAgfVxufVxuIl19