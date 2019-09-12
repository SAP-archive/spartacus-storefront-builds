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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWd1YXJkcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZXJ2aWNlcy9jbXMtZ3VhcmRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFFMUQ7SUFJRSwwQkFDVSxVQUE2QixFQUM3QixRQUFrQjtRQURsQixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3pCLENBQUM7Ozs7Ozs7SUFFSiw2Q0FBa0I7Ozs7OztJQUFsQixVQUNFLGNBQXdCLEVBQ3hCLEtBQWdDLEVBQ2hDLEtBQTBCO1FBSDVCLGlCQTJCQzs7WUF0Qk8sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsY0FBYyxDQUFDO1FBRXJFLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTs7Z0JBQ1gsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLFVBQVU7O29CQUM1QyxLQUFLLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQWMsVUFBVSxFQUFFLElBQUksQ0FBQztnQkFDOUQsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLE9BQU8sa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzdELEtBQUssRUFBRSxDQUNSLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO2lCQUM1RDtZQUNILENBQUMsRUFBQztZQUVGLE9BQU8sTUFBTSxnQ0FBSSxzQkFBc0IsR0FBRSxJQUFJLENBQzNDLFNBQVM7Ozs7WUFBQyxVQUFDLFdBQThCLElBQUssT0FBQSxXQUFXLEtBQUssSUFBSSxFQUFwQixDQUFvQixFQUFDLEVBQ25FLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFDYixLQUFLLEVBQUUsQ0FDUixDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQzs7Z0JBcENGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsaUJBQWlCO2dCQUxMLFFBQVE7OzsyQkFBN0I7Q0E0Q0MsQUFyQ0QsSUFxQ0M7U0FsQ1ksZ0JBQWdCOzs7Ozs7SUFFekIsc0NBQXFDOzs7OztJQUNyQyxvQ0FBMEI7Ozs7Ozs7QUFpQzlCLFNBQVMsa0JBQWtCLENBQ3pCLEtBQXFDO0lBRXJDLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDckM7SUFFRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQixDQUFDOzs7OztBQUVELFNBQVMsU0FBUyxDQUFDLEdBQVE7SUFDekIsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7QUFDakQsQ0FBQzs7Ozs7QUFFRCxTQUFTLGFBQWEsQ0FBQyxLQUFVO0lBQy9CLE9BQU8sS0FBSyxJQUFJLFVBQVUsQ0FBYyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDN0QsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxVQUFVLENBQUksQ0FBTTtJQUMzQixPQUFPLE9BQU8sQ0FBQyxLQUFLLFVBQVUsQ0FBQztBQUNqQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbmNhdCwgZnJvbSwgaXNPYnNlcnZhYmxlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBlbmRXaXRoLCBmaXJzdCwgc2tpcFdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zTWFwcGluZ1NlcnZpY2UgfSBmcm9tICcuL2Ntcy1tYXBwaW5nLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zR3VhcmRzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY21zTWFwcGluZzogQ21zTWFwcGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIGNtc1BhZ2VDYW5BY3RpdmF0ZShcbiAgICBjb21wb25lbnRUeXBlczogc3RyaW5nW10sXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIGNvbnN0IGd1YXJkcyA9IHRoaXMuY21zTWFwcGluZy5nZXRHdWFyZHNGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzKTtcblxuICAgIGlmIChndWFyZHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjYW5BY3RpdmF0ZU9ic2VydmFibGVzID0gZ3VhcmRzLm1hcChndWFyZENsYXNzID0+IHtcbiAgICAgICAgY29uc3QgZ3VhcmQgPSB0aGlzLmluamVjdG9yLmdldDxDYW5BY3RpdmF0ZT4oZ3VhcmRDbGFzcywgbnVsbCk7XG4gICAgICAgIGlmIChpc0NhbkFjdGl2YXRlKGd1YXJkKSkge1xuICAgICAgICAgIHJldHVybiB3cmFwSW50b09ic2VydmFibGUoZ3VhcmQuY2FuQWN0aXZhdGUocm91dGUsIHN0YXRlKSkucGlwZShcbiAgICAgICAgICAgIGZpcnN0KClcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBDYW5BY3RpdmF0ZSBndWFyZCBpbiBjbXNNYXBwaW5nJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gY29uY2F0KC4uLmNhbkFjdGl2YXRlT2JzZXJ2YWJsZXMpLnBpcGUoXG4gICAgICAgIHNraXBXaGlsZSgoY2FuQWN0aXZhdGU6IGJvb2xlYW4gfCBVcmxUcmVlKSA9PiBjYW5BY3RpdmF0ZSA9PT0gdHJ1ZSksXG4gICAgICAgIGVuZFdpdGgodHJ1ZSksXG4gICAgICAgIGZpcnN0KClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvZih0cnVlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gd3JhcEludG9PYnNlcnZhYmxlPFQ+KFxuICB2YWx1ZTogVCB8IFByb21pc2U8VD4gfCBPYnNlcnZhYmxlPFQ+XG4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgaWYgKGlzT2JzZXJ2YWJsZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpZiAoaXNQcm9taXNlKHZhbHVlKSkge1xuICAgIHJldHVybiBmcm9tKFByb21pc2UucmVzb2x2ZSh2YWx1ZSkpO1xuICB9XG5cbiAgcmV0dXJuIG9mKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlKG9iajogYW55KTogb2JqIGlzIFByb21pc2U8YW55PiB7XG4gIHJldHVybiAhIW9iaiAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzQ2FuQWN0aXZhdGUoZ3VhcmQ6IGFueSk6IGd1YXJkIGlzIENhbkFjdGl2YXRlIHtcbiAgcmV0dXJuIGd1YXJkICYmIGlzRnVuY3Rpb248Q2FuQWN0aXZhdGU+KGd1YXJkLmNhbkFjdGl2YXRlKTtcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbjxUPih2OiBhbnkpOiB2IGlzIFQge1xuICByZXR1cm4gdHlwZW9mIHYgPT09ICdmdW5jdGlvbic7XG59XG4iXX0=