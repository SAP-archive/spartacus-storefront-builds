import { Injectable } from '@angular/core';
import { ActionsSubject } from '@ngrx/store';
import { createFrom, EventService } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { PageEvent } from '../page/page.events';
import { CartPageEvent } from './cart-page.events';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "@spartacus/core";
export class CartPageEventBuilder {
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
}
CartPageEventBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartPageEventBuilder_Factory() { return new CartPageEventBuilder(i0.ɵɵinject(i1.ActionsSubject), i0.ɵɵinject(i2.EventService)); }, token: CartPageEventBuilder, providedIn: "root" });
CartPageEventBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CartPageEventBuilder.ctorParameters = () => [
    { type: ActionsSubject },
    { type: EventService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWV2ZW50LmJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9ldmVudHMvY2FydC9jYXJ0LXBhZ2UtZXZlbnQuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFLbkQsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUNZLE9BQXVCLEVBQ3ZCLFlBQTBCO1FBRDFCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRXBDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRVMsUUFBUTtRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRVMsa0JBQWtCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUMxQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEtBQUssTUFBTSxDQUFDLEVBQ3pELEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUN6RCxDQUFDO0lBQ0osQ0FBQzs7OztZQXBCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVRRLGNBQWM7WUFDRixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uc1N1YmplY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjcmVhdGVGcm9tLCBFdmVudFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlRXZlbnQgfSBmcm9tICcuLi9wYWdlL3BhZ2UuZXZlbnRzJztcbmltcG9ydCB7IENhcnRQYWdlRXZlbnQgfSBmcm9tICcuL2NhcnQtcGFnZS5ldmVudHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydFBhZ2VFdmVudEJ1aWxkZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYWN0aW9uczogQWN0aW9uc1N1YmplY3QsXG4gICAgcHJvdGVjdGVkIGV2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMucmVnaXN0ZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWdpc3RlcigpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50U2VydmljZS5yZWdpc3RlcihDYXJ0UGFnZUV2ZW50LCB0aGlzLmJ1aWxkQ2FydFBhZ2VFdmVudCgpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZENhcnRQYWdlRXZlbnQoKTogT2JzZXJ2YWJsZTxDYXJ0UGFnZUV2ZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRTZXJ2aWNlLmdldChQYWdlRXZlbnQpLnBpcGUoXG4gICAgICBmaWx0ZXIoKHBhZ2VFdmVudCkgPT4gcGFnZUV2ZW50LnNlbWFudGljUm91dGUgPT09ICdjYXJ0JyksXG4gICAgICBtYXAoKHBhZ2VFdmVudCkgPT4gY3JlYXRlRnJvbShDYXJ0UGFnZUV2ZW50LCBwYWdlRXZlbnQpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==