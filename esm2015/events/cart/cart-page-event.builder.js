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
let CartPageEventBuilder = class CartPageEventBuilder {
    constructor(actions, eventService) {
        this.actions = actions;
        this.eventService = eventService;
        this.register();
    }
    register() {
        this.eventService.register(CartPageEvent, this.buildCartPageEvent());
    }
    buildCartPageEvent() {
        return this.eventService.get(PageEvent).pipe(filter((pageEvent) => pageEvent.semanticRoute === 'cart'), map((pageEvent) => createFrom(CartPageEvent, pageEvent)));
    }
};
CartPageEventBuilder.ctorParameters = () => [
    { type: ActionsSubject },
    { type: EventService }
];
CartPageEventBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartPageEventBuilder_Factory() { return new CartPageEventBuilder(i0.ɵɵinject(i1.ActionsSubject), i0.ɵɵinject(i2.EventService)); }, token: CartPageEventBuilder, providedIn: "root" });
CartPageEventBuilder = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CartPageEventBuilder);
export { CartPageEventBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWV2ZW50LmJ1aWxkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJldmVudHMvY2FydC9jYXJ0LXBhZ2UtZXZlbnQuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBS25ELElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBQy9CLFlBQ1ksT0FBdUIsRUFDdkIsWUFBMEI7UUFEMUIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFFcEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFUyxRQUFRO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFUyxrQkFBa0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQzFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsS0FBSyxNQUFNLENBQUMsRUFDekQsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQ3pELENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUFoQnNCLGNBQWM7WUFDVCxZQUFZOzs7QUFIM0Isb0JBQW9CO0lBSGhDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxvQkFBb0IsQ0FrQmhDO1NBbEJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnNTdWJqZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgY3JlYXRlRnJvbSwgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZUV2ZW50IH0gZnJvbSAnLi4vcGFnZS9wYWdlLmV2ZW50cyc7XG5pbXBvcnQgeyBDYXJ0UGFnZUV2ZW50IH0gZnJvbSAnLi9jYXJ0LXBhZ2UuZXZlbnRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRQYWdlRXZlbnRCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFjdGlvbnM6IEFjdGlvbnNTdWJqZWN0LFxuICAgIHByb3RlY3RlZCBldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZVxuICApIHtcbiAgICB0aGlzLnJlZ2lzdGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudFNlcnZpY2UucmVnaXN0ZXIoQ2FydFBhZ2VFdmVudCwgdGhpcy5idWlsZENhcnRQYWdlRXZlbnQoKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYnVpbGRDYXJ0UGFnZUV2ZW50KCk6IE9ic2VydmFibGU8Q2FydFBhZ2VFdmVudD4ge1xuICAgIHJldHVybiB0aGlzLmV2ZW50U2VydmljZS5nZXQoUGFnZUV2ZW50KS5waXBlKFxuICAgICAgZmlsdGVyKChwYWdlRXZlbnQpID0+IHBhZ2VFdmVudC5zZW1hbnRpY1JvdXRlID09PSAnY2FydCcpLFxuICAgICAgbWFwKChwYWdlRXZlbnQpID0+IGNyZWF0ZUZyb20oQ2FydFBhZ2VFdmVudCwgcGFnZUV2ZW50KSlcbiAgICApO1xuICB9XG59XG4iXX0=