import { __decorate } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { concat, from, isObservable, of } from 'rxjs';
import { endWith, first, skipWhile } from 'rxjs/operators';
import { CmsMappingService } from './cms-mapping.service';
import * as i0 from "@angular/core";
import * as i1 from "./cms-mapping.service";
/**
 * Please don't put that service in public API.
 * */
let CmsGuardsService = class CmsGuardsService {
    constructor(cmsMapping, injector) {
        this.cmsMapping = cmsMapping;
        this.injector = injector;
    }
    cmsPageCanActivate(componentTypes, route, state) {
        const guards = this.cmsMapping.getGuardsForComponents(componentTypes);
        if (guards.length) {
            const canActivateObservables = guards.map(guardClass => {
                const guard = this.injector.get(guardClass, null);
                if (isCanActivate(guard)) {
                    return wrapIntoObservable(guard.canActivate(route, state)).pipe(first());
                }
                else {
                    throw new Error('Invalid CanActivate guard in cmsMapping');
                }
            });
            return concat(...canActivateObservables).pipe(skipWhile((canActivate) => canActivate === true), endWith(true), first());
        }
        else {
            return of(true);
        }
    }
};
CmsGuardsService.ctorParameters = () => [
    { type: CmsMappingService },
    { type: Injector }
];
CmsGuardsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsGuardsService_Factory() { return new CmsGuardsService(i0.ɵɵinject(i1.CmsMappingService), i0.ɵɵinject(i0.INJECTOR)); }, token: CmsGuardsService, providedIn: "root" });
CmsGuardsService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsGuardsService);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWd1YXJkcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZXJ2aWNlcy9jbXMtZ3VhcmRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQUUxRDs7S0FFSztBQUlMLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBQzNCLFlBQ1UsVUFBNkIsRUFDN0IsUUFBa0I7UUFEbEIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN6QixDQUFDO0lBRUosa0JBQWtCLENBQ2hCLGNBQXdCLEVBQ3hCLEtBQWdDLEVBQ2hDLEtBQTBCO1FBRTFCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFdEUsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE1BQU0sc0JBQXNCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDckQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQWMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDeEIsT0FBTyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDN0QsS0FBSyxFQUFFLENBQ1IsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7aUJBQzVEO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLE1BQU0sQ0FBQyxHQUFHLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUMzQyxTQUFTLENBQUMsQ0FBQyxXQUE4QixFQUFFLEVBQUUsQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLEVBQ25FLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFDYixLQUFLLEVBQUUsQ0FDUixDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBaEN1QixpQkFBaUI7WUFDbkIsUUFBUTs7O0FBSGpCLGdCQUFnQjtJQUg1QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csZ0JBQWdCLENBa0M1QjtTQWxDWSxnQkFBZ0I7QUFvQzdCLFNBQVMsa0JBQWtCLENBQ3pCLEtBQXFDO0lBRXJDLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDckM7SUFFRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsR0FBUTtJQUN6QixPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQztBQUNqRCxDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsS0FBVTtJQUMvQixPQUFPLEtBQUssSUFBSSxVQUFVLENBQWMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzdELENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBSSxDQUFNO0lBQzNCLE9BQU8sT0FBTyxDQUFDLEtBQUssVUFBVSxDQUFDO0FBQ2pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29uY2F0LCBmcm9tLCBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGVuZFdpdGgsIGZpcnN0LCBza2lwV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNNYXBwaW5nU2VydmljZSB9IGZyb20gJy4vY21zLW1hcHBpbmcuc2VydmljZSc7XG5cbi8qKlxuICogUGxlYXNlIGRvbid0IHB1dCB0aGF0IHNlcnZpY2UgaW4gcHVibGljIEFQSS5cbiAqICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zR3VhcmRzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY21zTWFwcGluZzogQ21zTWFwcGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIGNtc1BhZ2VDYW5BY3RpdmF0ZShcbiAgICBjb21wb25lbnRUeXBlczogc3RyaW5nW10sXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIGNvbnN0IGd1YXJkcyA9IHRoaXMuY21zTWFwcGluZy5nZXRHdWFyZHNGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzKTtcblxuICAgIGlmIChndWFyZHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjYW5BY3RpdmF0ZU9ic2VydmFibGVzID0gZ3VhcmRzLm1hcChndWFyZENsYXNzID0+IHtcbiAgICAgICAgY29uc3QgZ3VhcmQgPSB0aGlzLmluamVjdG9yLmdldDxDYW5BY3RpdmF0ZT4oZ3VhcmRDbGFzcywgbnVsbCk7XG4gICAgICAgIGlmIChpc0NhbkFjdGl2YXRlKGd1YXJkKSkge1xuICAgICAgICAgIHJldHVybiB3cmFwSW50b09ic2VydmFibGUoZ3VhcmQuY2FuQWN0aXZhdGUocm91dGUsIHN0YXRlKSkucGlwZShcbiAgICAgICAgICAgIGZpcnN0KClcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBDYW5BY3RpdmF0ZSBndWFyZCBpbiBjbXNNYXBwaW5nJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gY29uY2F0KC4uLmNhbkFjdGl2YXRlT2JzZXJ2YWJsZXMpLnBpcGUoXG4gICAgICAgIHNraXBXaGlsZSgoY2FuQWN0aXZhdGU6IGJvb2xlYW4gfCBVcmxUcmVlKSA9PiBjYW5BY3RpdmF0ZSA9PT0gdHJ1ZSksXG4gICAgICAgIGVuZFdpdGgodHJ1ZSksXG4gICAgICAgIGZpcnN0KClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvZih0cnVlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gd3JhcEludG9PYnNlcnZhYmxlPFQ+KFxuICB2YWx1ZTogVCB8IFByb21pc2U8VD4gfCBPYnNlcnZhYmxlPFQ+XG4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgaWYgKGlzT2JzZXJ2YWJsZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpZiAoaXNQcm9taXNlKHZhbHVlKSkge1xuICAgIHJldHVybiBmcm9tKFByb21pc2UucmVzb2x2ZSh2YWx1ZSkpO1xuICB9XG5cbiAgcmV0dXJuIG9mKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlKG9iajogYW55KTogb2JqIGlzIFByb21pc2U8YW55PiB7XG4gIHJldHVybiAhIW9iaiAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzQ2FuQWN0aXZhdGUoZ3VhcmQ6IGFueSk6IGd1YXJkIGlzIENhbkFjdGl2YXRlIHtcbiAgcmV0dXJuIGd1YXJkICYmIGlzRnVuY3Rpb248Q2FuQWN0aXZhdGU+KGd1YXJkLmNhbkFjdGl2YXRlKTtcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbjxUPih2OiBhbnkpOiB2IGlzIFQge1xuICByZXR1cm4gdHlwZW9mIHYgPT09ICdmdW5jdGlvbic7XG59XG4iXX0=