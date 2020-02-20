import { __decorate, __read, __spread } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { concat, from, isObservable, of } from 'rxjs';
import { endWith, first, skipWhile } from 'rxjs/operators';
import { CmsMappingService } from './cms-mapping.service';
import * as i0 from "@angular/core";
import * as i1 from "./cms-mapping.service";
/**
 * Please don't put that service in public API.
 * */
var CmsGuardsService = /** @class */ (function () {
    function CmsGuardsService(cmsMapping, injector) {
        this.cmsMapping = cmsMapping;
        this.injector = injector;
    }
    CmsGuardsService.prototype.cmsPageCanActivate = function (componentTypes, route, state) {
        var _this = this;
        var guards = this.cmsMapping.getGuardsForComponents(componentTypes);
        if (guards.length) {
            var canActivateObservables = guards.map(function (guardClass) {
                var guard = _this.injector.get(guardClass, null);
                if (isCanActivate(guard)) {
                    return wrapIntoObservable(guard.canActivate(route, state)).pipe(first());
                }
                else {
                    throw new Error('Invalid CanActivate guard in cmsMapping');
                }
            });
            return concat.apply(void 0, __spread(canActivateObservables)).pipe(skipWhile(function (canActivate) { return canActivate === true; }), endWith(true), first());
        }
        else {
            return of(true);
        }
    };
    CmsGuardsService.ctorParameters = function () { return [
        { type: CmsMappingService },
        { type: Injector }
    ]; };
    CmsGuardsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsGuardsService_Factory() { return new CmsGuardsService(i0.ɵɵinject(i1.CmsMappingService), i0.ɵɵinject(i0.INJECTOR)); }, token: CmsGuardsService, providedIn: "root" });
    CmsGuardsService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CmsGuardsService);
    return CmsGuardsService;
}());
export { CmsGuardsService };
function wrapIntoObservable(value) {
    if (isObservable(value)) {
        return value;
    }
    if (isPromise(value)) {
        return from(Promise.resolve(value));
    }
    return of(value);
}
function isPromise(obj) {
    return !!obj && typeof obj.then === 'function';
}
function isCanActivate(guard) {
    return guard && isFunction(guard.canActivate);
}
function isFunction(v) {
    return typeof v === 'function';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWd1YXJkcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZXJ2aWNlcy9jbXMtZ3VhcmRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQUUxRDs7S0FFSztBQUlMO0lBQ0UsMEJBQ1UsVUFBNkIsRUFDN0IsUUFBa0I7UUFEbEIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN6QixDQUFDO0lBRUosNkNBQWtCLEdBQWxCLFVBQ0UsY0FBd0IsRUFDeEIsS0FBZ0MsRUFDaEMsS0FBMEI7UUFINUIsaUJBMkJDO1FBdEJDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFdEUsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLElBQU0sc0JBQXNCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLFVBQVU7Z0JBQ2xELElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFjLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLE9BQU8sa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzdELEtBQUssRUFBRSxDQUNSLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO2lCQUM1RDtZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxNQUFNLHdCQUFJLHNCQUFzQixHQUFFLElBQUksQ0FDM0MsU0FBUyxDQUFDLFVBQUMsV0FBOEIsSUFBSyxPQUFBLFdBQVcsS0FBSyxJQUFJLEVBQXBCLENBQW9CLENBQUMsRUFDbkUsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUNiLEtBQUssRUFBRSxDQUNSLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakI7SUFDSCxDQUFDOztnQkEvQnFCLGlCQUFpQjtnQkFDbkIsUUFBUTs7O0lBSGpCLGdCQUFnQjtRQUg1QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csZ0JBQWdCLENBa0M1QjsyQkEvQ0Q7Q0ErQ0MsQUFsQ0QsSUFrQ0M7U0FsQ1ksZ0JBQWdCO0FBb0M3QixTQUFTLGtCQUFrQixDQUN6QixLQUFxQztJQUVyQyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN2QixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3JDO0lBRUQsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLEdBQVE7SUFDekIsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7QUFDakQsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLEtBQVU7SUFDL0IsT0FBTyxLQUFLLElBQUksVUFBVSxDQUFjLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUksQ0FBTTtJQUMzQixPQUFPLE9BQU8sQ0FBQyxLQUFLLFVBQVUsQ0FBQztBQUNqQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbmNhdCwgZnJvbSwgaXNPYnNlcnZhYmxlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBlbmRXaXRoLCBmaXJzdCwgc2tpcFdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zTWFwcGluZ1NlcnZpY2UgfSBmcm9tICcuL2Ntcy1tYXBwaW5nLnNlcnZpY2UnO1xuXG4vKipcbiAqIFBsZWFzZSBkb24ndCBwdXQgdGhhdCBzZXJ2aWNlIGluIHB1YmxpYyBBUEkuXG4gKiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc0d1YXJkc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNtc01hcHBpbmc6IENtc01hcHBpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICBjbXNQYWdlQ2FuQWN0aXZhdGUoXG4gICAgY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdLFxuICAgIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICBjb25zdCBndWFyZHMgPSB0aGlzLmNtc01hcHBpbmcuZ2V0R3VhcmRzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlcyk7XG5cbiAgICBpZiAoZ3VhcmRzLmxlbmd0aCkge1xuICAgICAgY29uc3QgY2FuQWN0aXZhdGVPYnNlcnZhYmxlcyA9IGd1YXJkcy5tYXAoZ3VhcmRDbGFzcyA9PiB7XG4gICAgICAgIGNvbnN0IGd1YXJkID0gdGhpcy5pbmplY3Rvci5nZXQ8Q2FuQWN0aXZhdGU+KGd1YXJkQ2xhc3MsIG51bGwpO1xuICAgICAgICBpZiAoaXNDYW5BY3RpdmF0ZShndWFyZCkpIHtcbiAgICAgICAgICByZXR1cm4gd3JhcEludG9PYnNlcnZhYmxlKGd1YXJkLmNhbkFjdGl2YXRlKHJvdXRlLCBzdGF0ZSkpLnBpcGUoXG4gICAgICAgICAgICBmaXJzdCgpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQ2FuQWN0aXZhdGUgZ3VhcmQgaW4gY21zTWFwcGluZycpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNvbmNhdCguLi5jYW5BY3RpdmF0ZU9ic2VydmFibGVzKS5waXBlKFxuICAgICAgICBza2lwV2hpbGUoKGNhbkFjdGl2YXRlOiBib29sZWFuIHwgVXJsVHJlZSkgPT4gY2FuQWN0aXZhdGUgPT09IHRydWUpLFxuICAgICAgICBlbmRXaXRoKHRydWUpLFxuICAgICAgICBmaXJzdCgpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2YodHJ1ZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHdyYXBJbnRvT2JzZXJ2YWJsZTxUPihcbiAgdmFsdWU6IFQgfCBQcm9taXNlPFQ+IHwgT2JzZXJ2YWJsZTxUPlxuKTogT2JzZXJ2YWJsZTxUPiB7XG4gIGlmIChpc09ic2VydmFibGUodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaWYgKGlzUHJvbWlzZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZnJvbShQcm9taXNlLnJlc29sdmUodmFsdWUpKTtcbiAgfVxuXG4gIHJldHVybiBvZih2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZShvYmo6IGFueSk6IG9iaiBpcyBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gISFvYmogJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc0NhbkFjdGl2YXRlKGd1YXJkOiBhbnkpOiBndWFyZCBpcyBDYW5BY3RpdmF0ZSB7XG4gIHJldHVybiBndWFyZCAmJiBpc0Z1bmN0aW9uPENhbkFjdGl2YXRlPihndWFyZC5jYW5BY3RpdmF0ZSk7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb248VD4odjogYW55KTogdiBpcyBUIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09PSAnZnVuY3Rpb24nO1xufVxuIl19