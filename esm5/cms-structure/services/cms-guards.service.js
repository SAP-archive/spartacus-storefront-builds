import { __decorate, __read, __spread } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { concat, from, isObservable, of } from 'rxjs';
import { Config, isFeatureEnabled, } from '@spartacus/core';
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
    CmsGuardsService.prototype.shouldForceRefreshPage = function () {
        var config = this.injector.get(Config);
        return !isFeatureEnabled(config, 'cmsPageLoadOnce');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWd1YXJkcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZXJ2aWNlcy9jbXMtZ3VhcmRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEUsT0FBTyxFQUVMLE1BQU0sRUFDTixnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBRTFEOztLQUVLO0FBSUw7SUFDRSwwQkFDVSxVQUE2QixFQUM3QixRQUFrQjtRQURsQixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3pCLENBQUM7SUFFSiw2Q0FBa0IsR0FBbEIsVUFDRSxjQUF3QixFQUN4QixLQUFnQyxFQUNoQyxLQUEwQjtRQUg1QixpQkEyQkM7UUF0QkMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV0RSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDakIsSUFBTSxzQkFBc0IsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsVUFBVTtnQkFDbkQsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQWMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDeEIsT0FBTyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDN0QsS0FBSyxFQUFFLENBQ1IsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7aUJBQzVEO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLE1BQU0sd0JBQUksc0JBQXNCLEdBQUUsSUFBSSxDQUMzQyxTQUFTLENBQUMsVUFBQyxXQUE4QixJQUFLLE9BQUEsV0FBVyxLQUFLLElBQUksRUFBcEIsQ0FBb0IsQ0FBQyxFQUNuRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQ2IsS0FBSyxFQUFFLENBQ1IsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFFRCxpREFBc0IsR0FBdEI7UUFDRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBcENxQixpQkFBaUI7Z0JBQ25CLFFBQVE7OztJQUhqQixnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGdCQUFnQixDQXVDNUI7MkJBeEREO0NBd0RDLEFBdkNELElBdUNDO1NBdkNZLGdCQUFnQjtBQXlDN0IsU0FBUyxrQkFBa0IsQ0FDekIsS0FBcUM7SUFFckMsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdkIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUNyQztJQUVELE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25CLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxHQUFRO0lBQ3pCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDO0FBQ2pELENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxLQUFVO0lBQy9CLE9BQU8sS0FBSyxJQUFJLFVBQVUsQ0FBYyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDN0QsQ0FBQztBQUVELFNBQVMsVUFBVSxDQUFJLENBQU07SUFDM0IsT0FBTyxPQUFPLENBQUMsS0FBSyxVQUFVLENBQUM7QUFDakMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb25jYXQsIGZyb20sIGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIENvbmZpZyxcbiAgaXNGZWF0dXJlRW5hYmxlZCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGVuZFdpdGgsIGZpcnN0LCBza2lwV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNNYXBwaW5nU2VydmljZSB9IGZyb20gJy4vY21zLW1hcHBpbmcuc2VydmljZSc7XG5cbi8qKlxuICogUGxlYXNlIGRvbid0IHB1dCB0aGF0IHNlcnZpY2UgaW4gcHVibGljIEFQSS5cbiAqICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zR3VhcmRzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY21zTWFwcGluZzogQ21zTWFwcGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIGNtc1BhZ2VDYW5BY3RpdmF0ZShcbiAgICBjb21wb25lbnRUeXBlczogc3RyaW5nW10sXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIGNvbnN0IGd1YXJkcyA9IHRoaXMuY21zTWFwcGluZy5nZXRHdWFyZHNGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzKTtcblxuICAgIGlmIChndWFyZHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjYW5BY3RpdmF0ZU9ic2VydmFibGVzID0gZ3VhcmRzLm1hcCgoZ3VhcmRDbGFzcykgPT4ge1xuICAgICAgICBjb25zdCBndWFyZCA9IHRoaXMuaW5qZWN0b3IuZ2V0PENhbkFjdGl2YXRlPihndWFyZENsYXNzLCBudWxsKTtcbiAgICAgICAgaWYgKGlzQ2FuQWN0aXZhdGUoZ3VhcmQpKSB7XG4gICAgICAgICAgcmV0dXJuIHdyYXBJbnRvT2JzZXJ2YWJsZShndWFyZC5jYW5BY3RpdmF0ZShyb3V0ZSwgc3RhdGUpKS5waXBlKFxuICAgICAgICAgICAgZmlyc3QoKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIENhbkFjdGl2YXRlIGd1YXJkIGluIGNtc01hcHBpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBjb25jYXQoLi4uY2FuQWN0aXZhdGVPYnNlcnZhYmxlcykucGlwZShcbiAgICAgICAgc2tpcFdoaWxlKChjYW5BY3RpdmF0ZTogYm9vbGVhbiB8IFVybFRyZWUpID0+IGNhbkFjdGl2YXRlID09PSB0cnVlKSxcbiAgICAgICAgZW5kV2l0aCh0cnVlKSxcbiAgICAgICAgZmlyc3QoKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9mKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHNob3VsZEZvcmNlUmVmcmVzaFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5pbmplY3Rvci5nZXQoQ29uZmlnKTtcbiAgICByZXR1cm4gIWlzRmVhdHVyZUVuYWJsZWQoY29uZmlnLCAnY21zUGFnZUxvYWRPbmNlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gd3JhcEludG9PYnNlcnZhYmxlPFQ+KFxuICB2YWx1ZTogVCB8IFByb21pc2U8VD4gfCBPYnNlcnZhYmxlPFQ+XG4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgaWYgKGlzT2JzZXJ2YWJsZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpZiAoaXNQcm9taXNlKHZhbHVlKSkge1xuICAgIHJldHVybiBmcm9tKFByb21pc2UucmVzb2x2ZSh2YWx1ZSkpO1xuICB9XG5cbiAgcmV0dXJuIG9mKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlKG9iajogYW55KTogb2JqIGlzIFByb21pc2U8YW55PiB7XG4gIHJldHVybiAhIW9iaiAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzQ2FuQWN0aXZhdGUoZ3VhcmQ6IGFueSk6IGd1YXJkIGlzIENhbkFjdGl2YXRlIHtcbiAgcmV0dXJuIGd1YXJkICYmIGlzRnVuY3Rpb248Q2FuQWN0aXZhdGU+KGd1YXJkLmNhbkFjdGl2YXRlKTtcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbjxUPih2OiBhbnkpOiB2IGlzIFQge1xuICByZXR1cm4gdHlwZW9mIHYgPT09ICdmdW5jdGlvbic7XG59XG4iXX0=