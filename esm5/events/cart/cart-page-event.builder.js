import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ActionsSubject } from '@ngrx/store';
import { createFrom, EventService } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { PageVisitedEvent } from '../page/page.events';
import { CartPageVisitedEvent } from './cart-page.events';
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
        this.eventService.register(CartPageVisitedEvent, this.buildCartPageEvent());
    };
    CartPageEventBuilder.prototype.buildCartPageEvent = function () {
        return this.eventService.get(PageVisitedEvent).pipe(filter(function (pageVisitedEvent) { return pageVisitedEvent.semanticRoute === 'cart'; }), map(function (pageVisitedEvent) {
            return createFrom(CartPageVisitedEvent, pageVisitedEvent);
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWV2ZW50LmJ1aWxkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJldmVudHMvY2FydC9jYXJ0LXBhZ2UtZXZlbnQuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUsxRDtJQUNFLDhCQUNZLE9BQXVCLEVBQ3ZCLFlBQTBCO1FBRDFCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRXBDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRVMsdUNBQVEsR0FBbEI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFUyxpREFBa0IsR0FBNUI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUNqRCxNQUFNLENBQUMsVUFBQyxnQkFBZ0IsSUFBSyxPQUFBLGdCQUFnQixDQUFDLGFBQWEsS0FBSyxNQUFNLEVBQXpDLENBQXlDLENBQUMsRUFDdkUsR0FBRyxDQUFDLFVBQUMsZ0JBQWdCO1lBQ25CLE9BQUEsVUFBVSxDQUFDLG9CQUFvQixFQUFFLGdCQUFnQixDQUFDO1FBQWxELENBQWtELENBQ25ELENBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWpCb0IsY0FBYztnQkFDVCxZQUFZOzs7SUFIM0Isb0JBQW9CO1FBSGhDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxvQkFBb0IsQ0FvQmhDOytCQS9CRDtDQStCQyxBQXBCRCxJQW9CQztTQXBCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zU3ViamVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGNyZWF0ZUZyb20sIEV2ZW50U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VWaXNpdGVkRXZlbnQgfSBmcm9tICcuLi9wYWdlL3BhZ2UuZXZlbnRzJztcbmltcG9ydCB7IENhcnRQYWdlVmlzaXRlZEV2ZW50IH0gZnJvbSAnLi9jYXJ0LXBhZ2UuZXZlbnRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRQYWdlRXZlbnRCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFjdGlvbnM6IEFjdGlvbnNTdWJqZWN0LFxuICAgIHByb3RlY3RlZCBldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZVxuICApIHtcbiAgICB0aGlzLnJlZ2lzdGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudFNlcnZpY2UucmVnaXN0ZXIoQ2FydFBhZ2VWaXNpdGVkRXZlbnQsIHRoaXMuYnVpbGRDYXJ0UGFnZUV2ZW50KCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJ1aWxkQ2FydFBhZ2VFdmVudCgpOiBPYnNlcnZhYmxlPENhcnRQYWdlVmlzaXRlZEV2ZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRTZXJ2aWNlLmdldChQYWdlVmlzaXRlZEV2ZW50KS5waXBlKFxuICAgICAgZmlsdGVyKChwYWdlVmlzaXRlZEV2ZW50KSA9PiBwYWdlVmlzaXRlZEV2ZW50LnNlbWFudGljUm91dGUgPT09ICdjYXJ0JyksXG4gICAgICBtYXAoKHBhZ2VWaXNpdGVkRXZlbnQpID0+XG4gICAgICAgIGNyZWF0ZUZyb20oQ2FydFBhZ2VWaXNpdGVkRXZlbnQsIHBhZ2VWaXNpdGVkRXZlbnQpXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19