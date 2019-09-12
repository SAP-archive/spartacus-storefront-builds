/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { concat, from, isObservable, of } from 'rxjs';
import { endWith, first, skipWhile } from 'rxjs/operators';
import { CmsMappingService } from './cms-mapping.service';
import * as i0 from "@angular/core";
import * as i1 from "./cms-mapping.service";
export class CmsGuardsService {
    /**
     * @param {?} cmsMapping
     * @param {?} injector
     */
    constructor(cmsMapping, injector) {
        this.cmsMapping = cmsMapping;
        this.injector = injector;
    }
    /**
     * @param {?} componentTypes
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    cmsPageCanActivate(componentTypes, route, state) {
        /** @type {?} */
        const guards = this.cmsMapping.getGuardsForComponents(componentTypes);
        if (guards.length) {
            /** @type {?} */
            const canActivateObservables = guards.map((/**
             * @param {?} guardClass
             * @return {?}
             */
            guardClass => {
                /** @type {?} */
                const guard = this.injector.get(guardClass, null);
                if (isCanActivate(guard)) {
                    return wrapIntoObservable(guard.canActivate(route, state)).pipe(first());
                }
                else {
                    throw new Error('Invalid CanActivate guard in cmsMapping');
                }
            }));
            return concat(...canActivateObservables).pipe(skipWhile((/**
             * @param {?} canActivate
             * @return {?}
             */
            (canActivate) => canActivate === true)), endWith(true), first());
        }
        else {
            return of(true);
        }
    }
}
CmsGuardsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsGuardsService.ctorParameters = () => [
    { type: CmsMappingService },
    { type: Injector }
];
/** @nocollapse */ CmsGuardsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CmsGuardsService_Factory() { return new CmsGuardsService(i0.ɵɵinject(i1.CmsMappingService), i0.ɵɵinject(i0.INJECTOR)); }, token: CmsGuardsService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmsGuardsService.prototype.cmsMapping;
    /**
     * @type {?}
     * @private
     */
    CmsGuardsService.prototype.injector;
}
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
function wrapIntoObservable(value) {
    if (isObservable(value)) {
        return value;
    }
    if (isPromise(value)) {
        return from(Promise.resolve(value));
    }
    return of(value);
}
/**
 * @param {?} obj
 * @return {?}
 */
function isPromise(obj) {
    return !!obj && typeof obj.then === 'function';
}
/**
 * @param {?} guard
 * @return {?}
 */
function isCanActivate(guard) {
    return guard && isFunction(guard.canActivate);
}
/**
 * @template T
 * @param {?} v
 * @return {?}
 */
function isFunction(v) {
    return typeof v === 'function';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWd1YXJkcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZXJ2aWNlcy9jbXMtZ3VhcmRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQUsxRCxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQUMzQixZQUNVLFVBQTZCLEVBQzdCLFFBQWtCO1FBRGxCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzdCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDekIsQ0FBQzs7Ozs7OztJQUVKLGtCQUFrQixDQUNoQixjQUF3QixFQUN4QixLQUFnQyxFQUNoQyxLQUEwQjs7Y0FFcEIsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsY0FBYyxDQUFDO1FBRXJFLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTs7a0JBQ1gsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFVLENBQUMsRUFBRTs7c0JBQy9DLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBYyxVQUFVLEVBQUUsSUFBSSxDQUFDO2dCQUM5RCxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDeEIsT0FBTyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDN0QsS0FBSyxFQUFFLENBQ1IsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7aUJBQzVEO1lBQ0gsQ0FBQyxFQUFDO1lBRUYsT0FBTyxNQUFNLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyxDQUFDLElBQUksQ0FDM0MsU0FBUzs7OztZQUFDLENBQUMsV0FBOEIsRUFBRSxFQUFFLENBQUMsV0FBVyxLQUFLLElBQUksRUFBQyxFQUNuRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQ2IsS0FBSyxFQUFFLENBQ1IsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQjtJQUNILENBQUM7OztZQXBDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxpQkFBaUI7WUFMTCxRQUFROzs7Ozs7OztJQVl6QixzQ0FBcUM7Ozs7O0lBQ3JDLG9DQUEwQjs7Ozs7OztBQWlDOUIsU0FBUyxrQkFBa0IsQ0FDekIsS0FBcUM7SUFFckMsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdkIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUNyQztJQUVELE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25CLENBQUM7Ozs7O0FBRUQsU0FBUyxTQUFTLENBQUMsR0FBUTtJQUN6QixPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQztBQUNqRCxDQUFDOzs7OztBQUVELFNBQVMsYUFBYSxDQUFDLEtBQVU7SUFDL0IsT0FBTyxLQUFLLElBQUksVUFBVSxDQUFjLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM3RCxDQUFDOzs7Ozs7QUFFRCxTQUFTLFVBQVUsQ0FBSSxDQUFNO0lBQzNCLE9BQU8sT0FBTyxDQUFDLEtBQUssVUFBVSxDQUFDO0FBQ2pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29uY2F0LCBmcm9tLCBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGVuZFdpdGgsIGZpcnN0LCBza2lwV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNNYXBwaW5nU2VydmljZSB9IGZyb20gJy4vY21zLW1hcHBpbmcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNHdWFyZHNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjbXNNYXBwaW5nOiBDbXNNYXBwaW5nU2VydmljZSxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgY21zUGFnZUNhbkFjdGl2YXRlKFxuICAgIGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSxcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgY29uc3QgZ3VhcmRzID0gdGhpcy5jbXNNYXBwaW5nLmdldEd1YXJkc0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXMpO1xuXG4gICAgaWYgKGd1YXJkcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGNhbkFjdGl2YXRlT2JzZXJ2YWJsZXMgPSBndWFyZHMubWFwKGd1YXJkQ2xhc3MgPT4ge1xuICAgICAgICBjb25zdCBndWFyZCA9IHRoaXMuaW5qZWN0b3IuZ2V0PENhbkFjdGl2YXRlPihndWFyZENsYXNzLCBudWxsKTtcbiAgICAgICAgaWYgKGlzQ2FuQWN0aXZhdGUoZ3VhcmQpKSB7XG4gICAgICAgICAgcmV0dXJuIHdyYXBJbnRvT2JzZXJ2YWJsZShndWFyZC5jYW5BY3RpdmF0ZShyb3V0ZSwgc3RhdGUpKS5waXBlKFxuICAgICAgICAgICAgZmlyc3QoKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIENhbkFjdGl2YXRlIGd1YXJkIGluIGNtc01hcHBpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBjb25jYXQoLi4uY2FuQWN0aXZhdGVPYnNlcnZhYmxlcykucGlwZShcbiAgICAgICAgc2tpcFdoaWxlKChjYW5BY3RpdmF0ZTogYm9vbGVhbiB8IFVybFRyZWUpID0+IGNhbkFjdGl2YXRlID09PSB0cnVlKSxcbiAgICAgICAgZW5kV2l0aCh0cnVlKSxcbiAgICAgICAgZmlyc3QoKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9mKHRydWUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB3cmFwSW50b09ic2VydmFibGU8VD4oXG4gIHZhbHVlOiBUIHwgUHJvbWlzZTxUPiB8IE9ic2VydmFibGU8VD5cbik6IE9ic2VydmFibGU8VD4ge1xuICBpZiAoaXNPYnNlcnZhYmxlKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlmIChpc1Byb21pc2UodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZyb20oUHJvbWlzZS5yZXNvbHZlKHZhbHVlKSk7XG4gIH1cblxuICByZXR1cm4gb2YodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc1Byb21pc2Uob2JqOiBhbnkpOiBvYmogaXMgUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuICEhb2JqICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNDYW5BY3RpdmF0ZShndWFyZDogYW55KTogZ3VhcmQgaXMgQ2FuQWN0aXZhdGUge1xuICByZXR1cm4gZ3VhcmQgJiYgaXNGdW5jdGlvbjxDYW5BY3RpdmF0ZT4oZ3VhcmQuY2FuQWN0aXZhdGUpO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uPFQ+KHY6IGFueSk6IHYgaXMgVCB7XG4gIHJldHVybiB0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJztcbn1cbiJdfQ==