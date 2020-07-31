import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { ActionsSubject } from '@ngrx/store';
import { ActivatedRouterStateSnapshot, createFrom, EventService, } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { HomePageEvent, PageEvent } from './page.events';
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
        this.eventService.register(PageEvent, this.buildPageEvent());
        this.eventService.register(HomePageEvent, this.buildHomePageEvent());
    };
    PageEventBuilder.prototype.buildPageEvent = function () {
        return this.getNavigatedEvent().pipe(map(function (state) {
            return createFrom(PageEvent, {
                context: state.context,
                semanticRoute: state.semanticRoute,
                url: state.url,
                params: state.params,
            });
        }));
    };
    PageEventBuilder.prototype.buildHomePageEvent = function () {
        return this.buildPageEvent().pipe(filter(function (pageEvent) { return pageEvent.semanticRoute === 'home'; }), map(function (pageEvent) { return createFrom(HomePageEvent, pageEvent); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1ldmVudC5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiZXZlbnRzL3BhZ2UvcGFnZS1ldmVudC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUF5QixnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0MsT0FBTyxFQUNMLDRCQUE0QixFQUM1QixVQUFVLEVBQ1YsWUFBWSxHQUNiLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUt6RDtJQUNFLDBCQUNZLE9BQXVCLEVBQ3ZCLFlBQTBCO1FBRDFCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRXBDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRVMsbUNBQVEsR0FBbEI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVTLHlDQUFjLEdBQXhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQ2xDLEdBQUcsQ0FBQyxVQUFDLEtBQUs7WUFDUixPQUFBLFVBQVUsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3BCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDdEIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO2dCQUNsQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7Z0JBQ2QsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO2FBQ3JCLENBQUM7UUFMRixDQUtFLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVTLDZDQUFrQixHQUE1QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDL0IsTUFBTSxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsU0FBUyxDQUFDLGFBQWEsS0FBSyxNQUFNLEVBQWxDLENBQWtDLENBQUMsRUFDekQsR0FBRyxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsRUFBcEMsQ0FBb0MsQ0FBQyxDQUN6RCxDQUFDO0lBQ0osQ0FBQztJQUVPLDRDQUFpQixHQUF6QjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3RCLE1BQU0sQ0FDSixnQkFBZ0IsQ0FDakIsRUFDRCxHQUFHLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBekIsQ0FBeUIsQ0FBQyxDQUMxQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBdENvQixjQUFjO2dCQUNULFlBQVk7OztJQUgzQixnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGdCQUFnQixDQXlDNUI7MkJBekREO0NBeURDLEFBekNELElBeUNDO1NBekNZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgUm91dGVyTmF2aWdhdGVkQWN0aW9uLCBST1VURVJfTkFWSUdBVEVEIH0gZnJvbSAnQG5ncngvcm91dGVyLXN0b3JlJztcbmltcG9ydCB7IEFjdGlvbnNTdWJqZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgY3JlYXRlRnJvbSxcbiAgRXZlbnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIb21lUGFnZUV2ZW50LCBQYWdlRXZlbnQgfSBmcm9tICcuL3BhZ2UuZXZlbnRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VFdmVudEJ1aWxkZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYWN0aW9uczogQWN0aW9uc1N1YmplY3QsXG4gICAgcHJvdGVjdGVkIGV2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMucmVnaXN0ZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWdpc3RlcigpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50U2VydmljZS5yZWdpc3RlcihQYWdlRXZlbnQsIHRoaXMuYnVpbGRQYWdlRXZlbnQoKSk7XG4gICAgdGhpcy5ldmVudFNlcnZpY2UucmVnaXN0ZXIoSG9tZVBhZ2VFdmVudCwgdGhpcy5idWlsZEhvbWVQYWdlRXZlbnQoKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYnVpbGRQYWdlRXZlbnQoKTogT2JzZXJ2YWJsZTxQYWdlRXZlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5nZXROYXZpZ2F0ZWRFdmVudCgpLnBpcGUoXG4gICAgICBtYXAoKHN0YXRlKSA9PlxuICAgICAgICBjcmVhdGVGcm9tKFBhZ2VFdmVudCwge1xuICAgICAgICAgIGNvbnRleHQ6IHN0YXRlLmNvbnRleHQsXG4gICAgICAgICAgc2VtYW50aWNSb3V0ZTogc3RhdGUuc2VtYW50aWNSb3V0ZSxcbiAgICAgICAgICB1cmw6IHN0YXRlLnVybCxcbiAgICAgICAgICBwYXJhbXM6IHN0YXRlLnBhcmFtcyxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJ1aWxkSG9tZVBhZ2VFdmVudCgpOiBPYnNlcnZhYmxlPEhvbWVQYWdlRXZlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5idWlsZFBhZ2VFdmVudCgpLnBpcGUoXG4gICAgICBmaWx0ZXIoKHBhZ2VFdmVudCkgPT4gcGFnZUV2ZW50LnNlbWFudGljUm91dGUgPT09ICdob21lJyksXG4gICAgICBtYXAoKHBhZ2VFdmVudCkgPT4gY3JlYXRlRnJvbShIb21lUGFnZUV2ZW50LCBwYWdlRXZlbnQpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldE5hdmlnYXRlZEV2ZW50KCk6IE9ic2VydmFibGU8QWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdD4ge1xuICAgIHJldHVybiB0aGlzLmFjdGlvbnMucGlwZShcbiAgICAgIG9mVHlwZTxSb3V0ZXJOYXZpZ2F0ZWRBY3Rpb248QWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdD4+KFxuICAgICAgICBST1VURVJfTkFWSUdBVEVEXG4gICAgICApLFxuICAgICAgbWFwKChldmVudCkgPT4gZXZlbnQucGF5bG9hZC5yb3V0ZXJTdGF0ZSlcbiAgICApO1xuICB9XG59XG4iXX0=