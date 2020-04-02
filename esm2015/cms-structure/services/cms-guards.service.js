import { __decorate } from "tslib";
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
    shouldForceRefreshPage() {
        const config = this.injector.get(Config);
        return !isFeatureEnabled(config, 'cmsPageLoadOnce');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWd1YXJkcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZXJ2aWNlcy9jbXMtZ3VhcmRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEUsT0FBTyxFQUVMLE1BQU0sRUFDTixnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBRTFEOztLQUVLO0FBSUwsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFDM0IsWUFDVSxVQUE2QixFQUM3QixRQUFrQjtRQURsQixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3pCLENBQUM7SUFFSixrQkFBa0IsQ0FDaEIsY0FBd0IsRUFDeEIsS0FBZ0MsRUFDaEMsS0FBMEI7UUFFMUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV0RSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDakIsTUFBTSxzQkFBc0IsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7Z0JBQ3ZELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFjLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLE9BQU8sa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzdELEtBQUssRUFBRSxDQUNSLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO2lCQUM1RDtZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxNQUFNLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyxDQUFDLElBQUksQ0FDM0MsU0FBUyxDQUFDLENBQUMsV0FBOEIsRUFBRSxFQUFFLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxFQUNuRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQ2IsS0FBSyxFQUFFLENBQ1IsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFFRCxzQkFBc0I7UUFDcEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDRixDQUFBOztZQXJDdUIsaUJBQWlCO1lBQ25CLFFBQVE7OztBQUhqQixnQkFBZ0I7SUFINUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGdCQUFnQixDQXVDNUI7U0F2Q1ksZ0JBQWdCO0FBeUM3QixTQUFTLGtCQUFrQixDQUN6QixLQUFxQztJQUVyQyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN2QixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3JDO0lBRUQsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLEdBQVE7SUFDekIsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7QUFDakQsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLEtBQVU7SUFDL0IsT0FBTyxLQUFLLElBQUksVUFBVSxDQUFjLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUksQ0FBTTtJQUMzQixPQUFPLE9BQU8sQ0FBQyxLQUFLLFVBQVUsQ0FBQztBQUNqQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbmNhdCwgZnJvbSwgaXNPYnNlcnZhYmxlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgQ29uZmlnLFxuICBpc0ZlYXR1cmVFbmFibGVkLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZW5kV2l0aCwgZmlyc3QsIHNraXBXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc01hcHBpbmdTZXJ2aWNlIH0gZnJvbSAnLi9jbXMtbWFwcGluZy5zZXJ2aWNlJztcblxuLyoqXG4gKiBQbGVhc2UgZG9uJ3QgcHV0IHRoYXQgc2VydmljZSBpbiBwdWJsaWMgQVBJLlxuICogKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNHdWFyZHNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjbXNNYXBwaW5nOiBDbXNNYXBwaW5nU2VydmljZSxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgY21zUGFnZUNhbkFjdGl2YXRlKFxuICAgIGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSxcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgY29uc3QgZ3VhcmRzID0gdGhpcy5jbXNNYXBwaW5nLmdldEd1YXJkc0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXMpO1xuXG4gICAgaWYgKGd1YXJkcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGNhbkFjdGl2YXRlT2JzZXJ2YWJsZXMgPSBndWFyZHMubWFwKChndWFyZENsYXNzKSA9PiB7XG4gICAgICAgIGNvbnN0IGd1YXJkID0gdGhpcy5pbmplY3Rvci5nZXQ8Q2FuQWN0aXZhdGU+KGd1YXJkQ2xhc3MsIG51bGwpO1xuICAgICAgICBpZiAoaXNDYW5BY3RpdmF0ZShndWFyZCkpIHtcbiAgICAgICAgICByZXR1cm4gd3JhcEludG9PYnNlcnZhYmxlKGd1YXJkLmNhbkFjdGl2YXRlKHJvdXRlLCBzdGF0ZSkpLnBpcGUoXG4gICAgICAgICAgICBmaXJzdCgpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQ2FuQWN0aXZhdGUgZ3VhcmQgaW4gY21zTWFwcGluZycpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNvbmNhdCguLi5jYW5BY3RpdmF0ZU9ic2VydmFibGVzKS5waXBlKFxuICAgICAgICBza2lwV2hpbGUoKGNhbkFjdGl2YXRlOiBib29sZWFuIHwgVXJsVHJlZSkgPT4gY2FuQWN0aXZhdGUgPT09IHRydWUpLFxuICAgICAgICBlbmRXaXRoKHRydWUpLFxuICAgICAgICBmaXJzdCgpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2YodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2hvdWxkRm9yY2VSZWZyZXNoUGFnZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmluamVjdG9yLmdldChDb25maWcpO1xuICAgIHJldHVybiAhaXNGZWF0dXJlRW5hYmxlZChjb25maWcsICdjbXNQYWdlTG9hZE9uY2UnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3cmFwSW50b09ic2VydmFibGU8VD4oXG4gIHZhbHVlOiBUIHwgUHJvbWlzZTxUPiB8IE9ic2VydmFibGU8VD5cbik6IE9ic2VydmFibGU8VD4ge1xuICBpZiAoaXNPYnNlcnZhYmxlKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlmIChpc1Byb21pc2UodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZyb20oUHJvbWlzZS5yZXNvbHZlKHZhbHVlKSk7XG4gIH1cblxuICByZXR1cm4gb2YodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc1Byb21pc2Uob2JqOiBhbnkpOiBvYmogaXMgUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuICEhb2JqICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNDYW5BY3RpdmF0ZShndWFyZDogYW55KTogZ3VhcmQgaXMgQ2FuQWN0aXZhdGUge1xuICByZXR1cm4gZ3VhcmQgJiYgaXNGdW5jdGlvbjxDYW5BY3RpdmF0ZT4oZ3VhcmQuY2FuQWN0aXZhdGUpO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uPFQ+KHY6IGFueSk6IHYgaXMgVCB7XG4gIHJldHVybiB0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJztcbn1cbiJdfQ==