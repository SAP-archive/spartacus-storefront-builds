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
            const canActivateObservables = guards.map((guardClass) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWd1YXJkcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZXJ2aWNlcy9jbXMtZ3VhcmRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQUUxRDs7S0FFSztBQUlMLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBQzNCLFlBQ1UsVUFBNkIsRUFDN0IsUUFBa0I7UUFEbEIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN6QixDQUFDO0lBRUosa0JBQWtCLENBQ2hCLGNBQXdCLEVBQ3hCLEtBQWdDLEVBQ2hDLEtBQTBCO1FBRTFCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFdEUsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE1BQU0sc0JBQXNCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO2dCQUN2RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBYyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQy9ELElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN4QixPQUFPLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUM3RCxLQUFLLEVBQUUsQ0FDUixDQUFDO2lCQUNIO3FCQUFNO29CQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztpQkFDNUQ7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sTUFBTSxDQUFDLEdBQUcsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQzNDLFNBQVMsQ0FBQyxDQUFDLFdBQThCLEVBQUUsRUFBRSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsRUFDbkUsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUNiLEtBQUssRUFBRSxDQUNSLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakI7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFoQ3VCLGlCQUFpQjtZQUNuQixRQUFROzs7QUFIakIsZ0JBQWdCO0lBSDVCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxnQkFBZ0IsQ0FrQzVCO1NBbENZLGdCQUFnQjtBQW9DN0IsU0FBUyxrQkFBa0IsQ0FDekIsS0FBcUM7SUFFckMsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdkIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUNyQztJQUVELE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25CLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxHQUFRO0lBQ3pCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDO0FBQ2pELENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxLQUFVO0lBQy9CLE9BQU8sS0FBSyxJQUFJLFVBQVUsQ0FBYyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDN0QsQ0FBQztBQUVELFNBQVMsVUFBVSxDQUFJLENBQU07SUFDM0IsT0FBTyxPQUFPLENBQUMsS0FBSyxVQUFVLENBQUM7QUFDakMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbmNhdCwgZnJvbSwgaXNPYnNlcnZhYmxlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZW5kV2l0aCwgZmlyc3QsIHNraXBXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc01hcHBpbmdTZXJ2aWNlIH0gZnJvbSAnLi9jbXMtbWFwcGluZy5zZXJ2aWNlJztcblxuLyoqXG4gKiBQbGVhc2UgZG9uJ3QgcHV0IHRoYXQgc2VydmljZSBpbiBwdWJsaWMgQVBJLlxuICogKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNHdWFyZHNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjbXNNYXBwaW5nOiBDbXNNYXBwaW5nU2VydmljZSxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgY21zUGFnZUNhbkFjdGl2YXRlKFxuICAgIGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSxcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgY29uc3QgZ3VhcmRzID0gdGhpcy5jbXNNYXBwaW5nLmdldEd1YXJkc0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXMpO1xuXG4gICAgaWYgKGd1YXJkcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGNhbkFjdGl2YXRlT2JzZXJ2YWJsZXMgPSBndWFyZHMubWFwKChndWFyZENsYXNzKSA9PiB7XG4gICAgICAgIGNvbnN0IGd1YXJkID0gdGhpcy5pbmplY3Rvci5nZXQ8Q2FuQWN0aXZhdGU+KGd1YXJkQ2xhc3MsIG51bGwpO1xuICAgICAgICBpZiAoaXNDYW5BY3RpdmF0ZShndWFyZCkpIHtcbiAgICAgICAgICByZXR1cm4gd3JhcEludG9PYnNlcnZhYmxlKGd1YXJkLmNhbkFjdGl2YXRlKHJvdXRlLCBzdGF0ZSkpLnBpcGUoXG4gICAgICAgICAgICBmaXJzdCgpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQ2FuQWN0aXZhdGUgZ3VhcmQgaW4gY21zTWFwcGluZycpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNvbmNhdCguLi5jYW5BY3RpdmF0ZU9ic2VydmFibGVzKS5waXBlKFxuICAgICAgICBza2lwV2hpbGUoKGNhbkFjdGl2YXRlOiBib29sZWFuIHwgVXJsVHJlZSkgPT4gY2FuQWN0aXZhdGUgPT09IHRydWUpLFxuICAgICAgICBlbmRXaXRoKHRydWUpLFxuICAgICAgICBmaXJzdCgpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2YodHJ1ZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHdyYXBJbnRvT2JzZXJ2YWJsZTxUPihcbiAgdmFsdWU6IFQgfCBQcm9taXNlPFQ+IHwgT2JzZXJ2YWJsZTxUPlxuKTogT2JzZXJ2YWJsZTxUPiB7XG4gIGlmIChpc09ic2VydmFibGUodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaWYgKGlzUHJvbWlzZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZnJvbShQcm9taXNlLnJlc29sdmUodmFsdWUpKTtcbiAgfVxuXG4gIHJldHVybiBvZih2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZShvYmo6IGFueSk6IG9iaiBpcyBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gISFvYmogJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc0NhbkFjdGl2YXRlKGd1YXJkOiBhbnkpOiBndWFyZCBpcyBDYW5BY3RpdmF0ZSB7XG4gIHJldHVybiBndWFyZCAmJiBpc0Z1bmN0aW9uPENhbkFjdGl2YXRlPihndWFyZC5jYW5BY3RpdmF0ZSk7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb248VD4odjogYW55KTogdiBpcyBUIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09PSAnZnVuY3Rpb24nO1xufVxuIl19