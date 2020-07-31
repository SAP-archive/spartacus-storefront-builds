import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ActionsSubject } from '@ngrx/store';
import { createFrom, EventService } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { PageEvent } from '../page/page.events';
import { CartPageEvent } from './cart-page.events';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "@spartacus/core";
var CartPageEventBuilder = /** @class */ (function () {
    function CartPageEventBuilder(actions, eventService) {
        this.actions = actions;
        this.eventService = eventService;
        this.register();
    }
    CartPageEventBuilder.prototype.register = function () {
        this.eventService.register(CartPageEvent, this.buildCartPageEvent());
    };
    CartPageEventBuilder.prototype.buildCartPageEvent = function () {
        return this.eventService.get(PageEvent).pipe(filter(function (pageEvent) { return pageEvent.semanticRoute === 'cart'; }), map(function (pageEvent) { return createFrom(CartPageEvent, pageEvent); }));
    };
    CartPageEventBuilder.ctorParameters = function () { return [
        { type: ActionsSubject },
        { type: EventService }
    ]; };
    CartPageEventBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartPageEventBuilder_Factory() { return new CartPageEventBuilder(i0.ɵɵinject(i1.ActionsSubject), i0.ɵɵinject(i2.EventService)); }, token: CartPageEventBuilder, providedIn: "root" });
    CartPageEventBuilder = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CartPageEventBuilder);
    return CartPageEventBuilder;
}());
export { CartPageEventBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWV2ZW50LmJ1aWxkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJldmVudHMvY2FydC9jYXJ0LXBhZ2UtZXZlbnQuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBS25EO0lBQ0UsOEJBQ1ksT0FBdUIsRUFDdkIsWUFBMEI7UUFEMUIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFFcEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFUyx1Q0FBUSxHQUFsQjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFUyxpREFBa0IsR0FBNUI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDMUMsTUFBTSxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsU0FBUyxDQUFDLGFBQWEsS0FBSyxNQUFNLEVBQWxDLENBQWtDLENBQUMsRUFDekQsR0FBRyxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsRUFBcEMsQ0FBb0MsQ0FBQyxDQUN6RCxDQUFDO0lBQ0osQ0FBQzs7Z0JBZm9CLGNBQWM7Z0JBQ1QsWUFBWTs7O0lBSDNCLG9CQUFvQjtRQUhoQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csb0JBQW9CLENBa0JoQzsrQkE3QkQ7Q0E2QkMsQUFsQkQsSUFrQkM7U0FsQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uc1N1YmplY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjcmVhdGVGcm9tLCBFdmVudFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlRXZlbnQgfSBmcm9tICcuLi9wYWdlL3BhZ2UuZXZlbnRzJztcbmltcG9ydCB7IENhcnRQYWdlRXZlbnQgfSBmcm9tICcuL2NhcnQtcGFnZS5ldmVudHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydFBhZ2VFdmVudEJ1aWxkZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYWN0aW9uczogQWN0aW9uc1N1YmplY3QsXG4gICAgcHJvdGVjdGVkIGV2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMucmVnaXN0ZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWdpc3RlcigpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50U2VydmljZS5yZWdpc3RlcihDYXJ0UGFnZUV2ZW50LCB0aGlzLmJ1aWxkQ2FydFBhZ2VFdmVudCgpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZENhcnRQYWdlRXZlbnQoKTogT2JzZXJ2YWJsZTxDYXJ0UGFnZUV2ZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRTZXJ2aWNlLmdldChQYWdlRXZlbnQpLnBpcGUoXG4gICAgICBmaWx0ZXIoKHBhZ2VFdmVudCkgPT4gcGFnZUV2ZW50LnNlbWFudGljUm91dGUgPT09ICdjYXJ0JyksXG4gICAgICBtYXAoKHBhZ2VFdmVudCkgPT4gY3JlYXRlRnJvbShDYXJ0UGFnZUV2ZW50LCBwYWdlRXZlbnQpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==