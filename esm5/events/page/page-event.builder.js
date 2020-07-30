import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { ActionsSubject } from '@ngrx/store';
import { ActivatedRouterStateSnapshot, createFrom, EventService, } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { HomePageVisitedEvent, PageVisitedEvent } from './page.events';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "@spartacus/core";
var PageEventBuilder = /** @class */ (function () {
    function PageEventBuilder(actions, eventService) {
        this.actions = actions;
        this.eventService = eventService;
        this.register();
    }
    PageEventBuilder.prototype.register = function () {
        this.eventService.register(PageVisitedEvent, this.buildPageVisitedEvent());
        this.eventService.register(HomePageVisitedEvent, this.buildHomePageVisitedEvent());
    };
    PageEventBuilder.prototype.buildPageVisitedEvent = function () {
        return this.getNavigatedEvent().pipe(map(function (state) {
            return createFrom(PageVisitedEvent, {
                context: state.context,
                semanticRoute: state.semanticRoute,
                url: state.url,
                params: state.params,
            });
        }));
    };
    PageEventBuilder.prototype.buildHomePageVisitedEvent = function () {
        return this.buildPageVisitedEvent().pipe(filter(function (pageVisitedEvent) { return pageVisitedEvent.semanticRoute === 'home'; }), map(function (pageVisitedEvent) {
            return createFrom(HomePageVisitedEvent, pageVisitedEvent);
        }));
    };
    PageEventBuilder.prototype.getNavigatedEvent = function () {
        return this.actions.pipe(ofType(ROUTER_NAVIGATED), map(function (event) { return event.payload.routerState; }));
    };
    PageEventBuilder.ctorParameters = function () { return [
        { type: ActionsSubject },
        { type: EventService }
    ]; };
    PageEventBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function PageEventBuilder_Factory() { return new PageEventBuilder(i0.ɵɵinject(i1.ActionsSubject), i0.ɵɵinject(i2.EventService)); }, token: PageEventBuilder, providedIn: "root" });
    PageEventBuilder = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], PageEventBuilder);
    return PageEventBuilder;
}());
export { PageEventBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1ldmVudC5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiZXZlbnRzL3BhZ2UvcGFnZS1ldmVudC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUF5QixnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0MsT0FBTyxFQUNMLDRCQUE0QixFQUM1QixVQUFVLEVBQ1YsWUFBWSxHQUNiLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFLdkU7SUFDRSwwQkFDWSxPQUF1QixFQUN2QixZQUEwQjtRQUQxQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUVwQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVTLG1DQUFRLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FDeEIsb0JBQW9CLEVBQ3BCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUNqQyxDQUFDO0lBQ0osQ0FBQztJQUVTLGdEQUFxQixHQUEvQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUNsQyxHQUFHLENBQUMsVUFBQyxLQUFLO1lBQ1IsT0FBQSxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzNCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDdEIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO2dCQUNsQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7Z0JBQ2QsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO2FBQ3JCLENBQUM7UUFMRixDQUtFLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVTLG9EQUF5QixHQUFuQztRQUNFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUN0QyxNQUFNLENBQUMsVUFBQyxnQkFBZ0IsSUFBSyxPQUFBLGdCQUFnQixDQUFDLGFBQWEsS0FBSyxNQUFNLEVBQXpDLENBQXlDLENBQUMsRUFDdkUsR0FBRyxDQUFDLFVBQUMsZ0JBQWdCO1lBQ25CLE9BQUEsVUFBVSxDQUFDLG9CQUFvQixFQUFFLGdCQUFnQixDQUFDO1FBQWxELENBQWtELENBQ25ELENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTyw0Q0FBaUIsR0FBekI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUN0QixNQUFNLENBQ0osZ0JBQWdCLENBQ2pCLEVBQ0QsR0FBRyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQXpCLENBQXlCLENBQUMsQ0FDMUMsQ0FBQztJQUNKLENBQUM7O2dCQTNDb0IsY0FBYztnQkFDVCxZQUFZOzs7SUFIM0IsZ0JBQWdCO1FBSDVCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxnQkFBZ0IsQ0E4QzVCOzJCQTlERDtDQThEQyxBQTlDRCxJQThDQztTQTlDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFJvdXRlck5hdmlnYXRlZEFjdGlvbiwgUk9VVEVSX05BVklHQVRFRCB9IGZyb20gJ0BuZ3J4L3JvdXRlci1zdG9yZSc7XG5pbXBvcnQgeyBBY3Rpb25zU3ViamVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3QsXG4gIGNyZWF0ZUZyb20sXG4gIEV2ZW50U2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSG9tZVBhZ2VWaXNpdGVkRXZlbnQsIFBhZ2VWaXNpdGVkRXZlbnQgfSBmcm9tICcuL3BhZ2UuZXZlbnRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VFdmVudEJ1aWxkZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYWN0aW9uczogQWN0aW9uc1N1YmplY3QsXG4gICAgcHJvdGVjdGVkIGV2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMucmVnaXN0ZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWdpc3RlcigpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50U2VydmljZS5yZWdpc3RlcihQYWdlVmlzaXRlZEV2ZW50LCB0aGlzLmJ1aWxkUGFnZVZpc2l0ZWRFdmVudCgpKTtcbiAgICB0aGlzLmV2ZW50U2VydmljZS5yZWdpc3RlcihcbiAgICAgIEhvbWVQYWdlVmlzaXRlZEV2ZW50LFxuICAgICAgdGhpcy5idWlsZEhvbWVQYWdlVmlzaXRlZEV2ZW50KClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJ1aWxkUGFnZVZpc2l0ZWRFdmVudCgpOiBPYnNlcnZhYmxlPFBhZ2VWaXNpdGVkRXZlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5nZXROYXZpZ2F0ZWRFdmVudCgpLnBpcGUoXG4gICAgICBtYXAoKHN0YXRlKSA9PlxuICAgICAgICBjcmVhdGVGcm9tKFBhZ2VWaXNpdGVkRXZlbnQsIHtcbiAgICAgICAgICBjb250ZXh0OiBzdGF0ZS5jb250ZXh0LFxuICAgICAgICAgIHNlbWFudGljUm91dGU6IHN0YXRlLnNlbWFudGljUm91dGUsXG4gICAgICAgICAgdXJsOiBzdGF0ZS51cmwsXG4gICAgICAgICAgcGFyYW1zOiBzdGF0ZS5wYXJhbXMsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZEhvbWVQYWdlVmlzaXRlZEV2ZW50KCk6IE9ic2VydmFibGU8SG9tZVBhZ2VWaXNpdGVkRXZlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5idWlsZFBhZ2VWaXNpdGVkRXZlbnQoKS5waXBlKFxuICAgICAgZmlsdGVyKChwYWdlVmlzaXRlZEV2ZW50KSA9PiBwYWdlVmlzaXRlZEV2ZW50LnNlbWFudGljUm91dGUgPT09ICdob21lJyksXG4gICAgICBtYXAoKHBhZ2VWaXNpdGVkRXZlbnQpID0+XG4gICAgICAgIGNyZWF0ZUZyb20oSG9tZVBhZ2VWaXNpdGVkRXZlbnQsIHBhZ2VWaXNpdGVkRXZlbnQpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmF2aWdhdGVkRXZlbnQoKTogT2JzZXJ2YWJsZTxBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90PiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9ucy5waXBlKFxuICAgICAgb2ZUeXBlPFJvdXRlck5hdmlnYXRlZEFjdGlvbjxBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90Pj4oXG4gICAgICAgIFJPVVRFUl9OQVZJR0FURURcbiAgICAgICksXG4gICAgICBtYXAoKGV2ZW50KSA9PiBldmVudC5wYXlsb2FkLnJvdXRlclN0YXRlKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==