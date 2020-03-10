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
            ]).pipe(map(([slots, cart, selectiveCart]) => {
                if (cart.totalItems) {
                    return slots.filter(slot => slot !== 'EmptyCartMiddleContent');
                }
                else if (selectiveCart.totalItems) {
                    return slots.filter(slot => slot !== 'EmptyCartMiddleContent' &&
                        slot !== 'CenterRightContentSlot');
                }
                else {
                    return slots.filter(slot => slot !== 'TopContent' && slot !== 'CenterRightContentSlot');
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWxheW91dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXBhZ2UtbGF5b3V0LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU1yQyxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQUNoQyxZQUNZLGlCQUFvQyxFQUNwQyxvQkFBMEM7UUFEMUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ25ELENBQUM7SUFFSixNQUFNLENBQ0osTUFBNEIsRUFDNUIsWUFBcUIsRUFDckIsT0FBZ0I7UUFFaEIsSUFBSSxZQUFZLEtBQUssa0JBQWtCLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbkQsT0FBTyxhQUFhLENBQUM7Z0JBQ25CLE1BQU07Z0JBQ04sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRTthQUNwQyxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsRUFBRSxFQUFFO2dCQUNuQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ25CLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyx3QkFBd0IsQ0FBQyxDQUFDO2lCQUNoRTtxQkFBTSxJQUFJLGFBQWEsQ0FBQyxVQUFVLEVBQUU7b0JBQ25DLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FDakIsSUFBSSxDQUFDLEVBQUUsQ0FDTCxJQUFJLEtBQUssd0JBQXdCO3dCQUNqQyxJQUFJLEtBQUssd0JBQXdCLENBQ3BDLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxZQUFZLElBQUksSUFBSSxLQUFLLHdCQUF3QixDQUNuRSxDQUFDO2lCQUNIO1lBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztTQUNIO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGLENBQUE7O1lBbENnQyxpQkFBaUI7WUFDZCxvQkFBb0I7OztBQUgzQyxxQkFBcUI7SUFIakMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHFCQUFxQixDQW9DakM7U0FwQ1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UsIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LWhhbmRsZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydFBhZ2VMYXlvdXRIYW5kbGVyIGltcGxlbWVudHMgUGFnZUxheW91dEhhbmRsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIGhhbmRsZShcbiAgICBzbG90cyQ6IE9ic2VydmFibGU8c3RyaW5nW10+LFxuICAgIHBhZ2VUZW1wbGF0ZT86IHN0cmluZyxcbiAgICBzZWN0aW9uPzogc3RyaW5nXG4gICkge1xuICAgIGlmIChwYWdlVGVtcGxhdGUgPT09ICdDYXJ0UGFnZVRlbXBsYXRlJyAmJiAhc2VjdGlvbikge1xuICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICBzbG90cyQsXG4gICAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QWN0aXZlKCksXG4gICAgICAgIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UuZ2V0Q2FydCgpLFxuICAgICAgXSkucGlwZShcbiAgICAgICAgbWFwKChbc2xvdHMsIGNhcnQsIHNlbGVjdGl2ZUNhcnRdKSA9PiB7XG4gICAgICAgICAgaWYgKGNhcnQudG90YWxJdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuIHNsb3RzLmZpbHRlcihzbG90ID0+IHNsb3QgIT09ICdFbXB0eUNhcnRNaWRkbGVDb250ZW50Jyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RpdmVDYXJ0LnRvdGFsSXRlbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBzbG90cy5maWx0ZXIoXG4gICAgICAgICAgICAgIHNsb3QgPT5cbiAgICAgICAgICAgICAgICBzbG90ICE9PSAnRW1wdHlDYXJ0TWlkZGxlQ29udGVudCcgJiZcbiAgICAgICAgICAgICAgICBzbG90ICE9PSAnQ2VudGVyUmlnaHRDb250ZW50U2xvdCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzbG90cy5maWx0ZXIoXG4gICAgICAgICAgICAgIHNsb3QgPT4gc2xvdCAhPT0gJ1RvcENvbnRlbnQnICYmIHNsb3QgIT09ICdDZW50ZXJSaWdodENvbnRlbnRTbG90J1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gc2xvdHMkO1xuICB9XG59XG4iXX0=