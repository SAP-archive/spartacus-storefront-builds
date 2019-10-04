/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { concat, from, isObservable, of } from 'rxjs';
import { endWith, first, skipWhile } from 'rxjs/operators';
import { CmsMappingService } from './cms-mapping.service';
import * as i0 from "@angular/core";
import * as i1 from "./cms-mapping.service";
/**
 * Please don't put that service in public API.
 *
 */
var CmsGuardsService = /** @class */ (function () {
    function CmsGuardsService(cmsMapping, injector) {
        this.cmsMapping = cmsMapping;
        this.injector = injector;
    }
    /**
     * @param {?} componentTypes
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    CmsGuardsService.prototype.cmsPageCanActivate = /**
     * @param {?} componentTypes
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (componentTypes, route, state) {
        var _this = this;
        /** @type {?} */
        var guards = this.cmsMapping.getGuardsForComponents(componentTypes);
        if (guards.length) {
            /** @type {?} */
            var canActivateObservables = guards.map((/**
             * @param {?} guardClass
             * @return {?}
             */
            function (guardClass) {
                /** @type {?} */
                var guard = _this.injector.get(guardClass, null);
                if (isCanActivate(guard)) {
                    return wrapIntoObservable(guard.canActivate(route, state)).pipe(first());
                }
                else {
                    throw new Error('Invalid CanActivate guard in cmsMapping');
                }
            }));
            return concat.apply(void 0, tslib_1.__spread(canActivateObservables)).pipe(skipWhile((/**
             * @param {?} canActivate
             * @return {?}
             */
            function (canActivate) { return canActivate === true; })), endWith(true), first());
        }
        else {
            return of(true);
        }
    };
    CmsGuardsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsGuardsService.ctorParameters = function () { return [
        { type: CmsMappingService },
        { type: Injector }
    ]; };
    /** @nocollapse */ CmsGuardsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CmsGuardsService_Factory() { return new CmsGuardsService(i0.ɵɵinject(i1.CmsMappingService), i0.ɵɵinject(i0.INJECTOR)); }, token: CmsGuardsService, providedIn: "root" });
    return CmsGuardsService;
}());
export { CmsGuardsService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWd1YXJkcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZXJ2aWNlcy9jbXMtZ3VhcmRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBSzFEO0lBSUUsMEJBQ1UsVUFBNkIsRUFDN0IsUUFBa0I7UUFEbEIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN6QixDQUFDOzs7Ozs7O0lBRUosNkNBQWtCOzs7Ozs7SUFBbEIsVUFDRSxjQUF3QixFQUN4QixLQUFnQyxFQUNoQyxLQUEwQjtRQUg1QixpQkEyQkM7O1lBdEJPLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQztRQUVyRSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7O2dCQUNYLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxVQUFVOztvQkFDNUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFjLFVBQVUsRUFBRSxJQUFJLENBQUM7Z0JBQzlELElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN4QixPQUFPLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUM3RCxLQUFLLEVBQUUsQ0FDUixDQUFDO2lCQUNIO3FCQUFNO29CQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztpQkFDNUQ7WUFDSCxDQUFDLEVBQUM7WUFFRixPQUFPLE1BQU0sZ0NBQUksc0JBQXNCLEdBQUUsSUFBSSxDQUMzQyxTQUFTOzs7O1lBQUMsVUFBQyxXQUE4QixJQUFLLE9BQUEsV0FBVyxLQUFLLElBQUksRUFBcEIsQ0FBb0IsRUFBQyxFQUNuRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQ2IsS0FBSyxFQUFFLENBQ1IsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQjtJQUNILENBQUM7O2dCQXBDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLGlCQUFpQjtnQkFMTCxRQUFROzs7MkJBQTdCO0NBK0NDLEFBckNELElBcUNDO1NBbENZLGdCQUFnQjs7Ozs7O0lBRXpCLHNDQUFxQzs7Ozs7SUFDckMsb0NBQTBCOzs7Ozs7O0FBaUM5QixTQUFTLGtCQUFrQixDQUN6QixLQUFxQztJQUVyQyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN2QixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3JDO0lBRUQsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkIsQ0FBQzs7Ozs7QUFFRCxTQUFTLFNBQVMsQ0FBQyxHQUFRO0lBQ3pCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDO0FBQ2pELENBQUM7Ozs7O0FBRUQsU0FBUyxhQUFhLENBQUMsS0FBVTtJQUMvQixPQUFPLEtBQUssSUFBSSxVQUFVLENBQWMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzdELENBQUM7Ozs7OztBQUVELFNBQVMsVUFBVSxDQUFJLENBQU07SUFDM0IsT0FBTyxPQUFPLENBQUMsS0FBSyxVQUFVLENBQUM7QUFDakMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb25jYXQsIGZyb20sIGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZW5kV2l0aCwgZmlyc3QsIHNraXBXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc01hcHBpbmdTZXJ2aWNlIH0gZnJvbSAnLi9jbXMtbWFwcGluZy5zZXJ2aWNlJztcblxuLyoqXG4gKiBQbGVhc2UgZG9uJ3QgcHV0IHRoYXQgc2VydmljZSBpbiBwdWJsaWMgQVBJLlxuICogKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNHdWFyZHNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjbXNNYXBwaW5nOiBDbXNNYXBwaW5nU2VydmljZSxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgY21zUGFnZUNhbkFjdGl2YXRlKFxuICAgIGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSxcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgY29uc3QgZ3VhcmRzID0gdGhpcy5jbXNNYXBwaW5nLmdldEd1YXJkc0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXMpO1xuXG4gICAgaWYgKGd1YXJkcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGNhbkFjdGl2YXRlT2JzZXJ2YWJsZXMgPSBndWFyZHMubWFwKGd1YXJkQ2xhc3MgPT4ge1xuICAgICAgICBjb25zdCBndWFyZCA9IHRoaXMuaW5qZWN0b3IuZ2V0PENhbkFjdGl2YXRlPihndWFyZENsYXNzLCBudWxsKTtcbiAgICAgICAgaWYgKGlzQ2FuQWN0aXZhdGUoZ3VhcmQpKSB7XG4gICAgICAgICAgcmV0dXJuIHdyYXBJbnRvT2JzZXJ2YWJsZShndWFyZC5jYW5BY3RpdmF0ZShyb3V0ZSwgc3RhdGUpKS5waXBlKFxuICAgICAgICAgICAgZmlyc3QoKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIENhbkFjdGl2YXRlIGd1YXJkIGluIGNtc01hcHBpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBjb25jYXQoLi4uY2FuQWN0aXZhdGVPYnNlcnZhYmxlcykucGlwZShcbiAgICAgICAgc2tpcFdoaWxlKChjYW5BY3RpdmF0ZTogYm9vbGVhbiB8IFVybFRyZWUpID0+IGNhbkFjdGl2YXRlID09PSB0cnVlKSxcbiAgICAgICAgZW5kV2l0aCh0cnVlKSxcbiAgICAgICAgZmlyc3QoKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9mKHRydWUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB3cmFwSW50b09ic2VydmFibGU8VD4oXG4gIHZhbHVlOiBUIHwgUHJvbWlzZTxUPiB8IE9ic2VydmFibGU8VD5cbik6IE9ic2VydmFibGU8VD4ge1xuICBpZiAoaXNPYnNlcnZhYmxlKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlmIChpc1Byb21pc2UodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZyb20oUHJvbWlzZS5yZXNvbHZlKHZhbHVlKSk7XG4gIH1cblxuICByZXR1cm4gb2YodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc1Byb21pc2Uob2JqOiBhbnkpOiBvYmogaXMgUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuICEhb2JqICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNDYW5BY3RpdmF0ZShndWFyZDogYW55KTogZ3VhcmQgaXMgQ2FuQWN0aXZhdGUge1xuICByZXR1cm4gZ3VhcmQgJiYgaXNGdW5jdGlvbjxDYW5BY3RpdmF0ZT4oZ3VhcmQuY2FuQWN0aXZhdGUpO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uPFQ+KHY6IGFueSk6IHYgaXMgVCB7XG4gIHJldHVybiB0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJztcbn1cbiJdfQ==