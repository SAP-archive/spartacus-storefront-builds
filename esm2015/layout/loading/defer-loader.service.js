/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DeferLoadingStrategy } from '@spartacus/core';
import { of } from 'rxjs';
import { LayoutConfig } from '../config/layout-config';
import { IntersectionService } from './intersection.service';
import * as i0 from "@angular/core";
import * as i1 from "../config/layout-config";
import * as i2 from "./intersection.service";
/**
 * The defer loading serivce is used to defer loading of DOM elements
 * until the elements are required for the user experience.
 */
export class DeferLoaderService {
    /**
     * @param {?} platformId
     * @param {?} config
     * @param {?} intersectionService
     */
    constructor(platformId, config, intersectionService) {
        this.platformId = platformId;
        this.config = config;
        this.intersectionService = intersectionService;
        this.globalLoadStrategy = config.deferredLoading
            ? config.deferredLoading.strategy
            : DeferLoadingStrategy.INSTANT;
    }
    /**
     * Defer loading till the element intersects the viewport.
     *
     * We evalutes whether we instantly load the element for different reasons:
     * - we run in SSR mode
     * - there's no global strategy given
     * - the global loading strategy is set to INSTANT loading,
     *   and the loading strategy in the given is not set to DEFER
     * - the loading strategy in the given options is set to INSTANT
     * @param {?} element
     * @param {?=} options
     * @return {?}
     */
    load(element, options) {
        if (this.shouldLoadInstantly((options || {}).deferLoading)) {
            return of(true);
        }
        else {
            return this.intersectionService.isIntersected(element, options);
        }
    }
    /**
     * @private
     * @param {?} elementLoadingStrategy
     * @return {?}
     */
    shouldLoadInstantly(elementLoadingStrategy) {
        return (isPlatformServer(this.platformId) ||
            elementLoadingStrategy === DeferLoadingStrategy.INSTANT ||
            (elementLoadingStrategy !== DeferLoadingStrategy.DEFER &&
                this.globalLoadStrategy === DeferLoadingStrategy.INSTANT));
    }
}
DeferLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
DeferLoaderService.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: LayoutConfig },
    { type: IntersectionService }
];
/** @nocollapse */ DeferLoaderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DeferLoaderService_Factory() { return new DeferLoaderService(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.LayoutConfig), i0.ɵɵinject(i2.IntersectionService)); }, token: DeferLoaderService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DeferLoaderService.prototype.globalLoadStrategy;
    /**
     * @type {?}
     * @private
     */
    DeferLoaderService.prototype.platformId;
    /**
     * @type {?}
     * @protected
     */
    DeferLoaderService.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    DeferLoaderService.prototype.intersectionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmZXItbG9hZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbG9hZGluZy9kZWZlci1sb2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7OztBQVM3RCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUFHN0IsWUFDK0IsVUFBa0IsRUFDckMsTUFBb0IsRUFDcEIsbUJBQXdDO1FBRnJCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBRWxELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsZUFBZTtZQUM5QyxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRO1lBQ2pDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7SUFDbkMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUFZRCxJQUFJLENBQ0YsT0FBb0IsRUFDcEIsT0FBNkI7UUFFN0IsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDMUQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDakU7SUFDSCxDQUFDOzs7Ozs7SUFFTyxtQkFBbUIsQ0FDekIsc0JBQTRDO1FBRTVDLE9BQU8sQ0FDTCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2pDLHNCQUFzQixLQUFLLG9CQUFvQixDQUFDLE9BQU87WUFDdkQsQ0FBQyxzQkFBc0IsS0FBSyxvQkFBb0IsQ0FBQyxLQUFLO2dCQUNwRCxJQUFJLENBQUMsa0JBQWtCLEtBQUssb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQzVELENBQUM7SUFDSixDQUFDOzs7WUE5Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSzRDLE1BQU0sdUJBQTlDLE1BQU0sU0FBQyxXQUFXO1lBZmQsWUFBWTtZQUVaLG1CQUFtQjs7Ozs7SUFVMUIsZ0RBQXlDOzs7OztJQUd2Qyx3Q0FBK0M7Ozs7O0lBQy9DLG9DQUE4Qjs7Ozs7SUFDOUIsaURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWZlckxvYWRpbmdTdHJhdGVneSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJzZWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IEludGVyc2VjdGlvblNlcnZpY2UgfSBmcm9tICcuL2ludGVyc2VjdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBUaGUgZGVmZXIgbG9hZGluZyBzZXJpdmNlIGlzIHVzZWQgdG8gZGVmZXIgbG9hZGluZyBvZiBET00gZWxlbWVudHNcbiAqIHVudGlsIHRoZSBlbGVtZW50cyBhcmUgcmVxdWlyZWQgZm9yIHRoZSB1c2VyIGV4cGVyaWVuY2UuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZlckxvYWRlclNlcnZpY2Uge1xuICBnbG9iYWxMb2FkU3RyYXRlZ3k6IERlZmVyTG9hZGluZ1N0cmF0ZWd5O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIHByb3RlY3RlZCBjb25maWc6IExheW91dENvbmZpZyxcbiAgICBwcm90ZWN0ZWQgaW50ZXJzZWN0aW9uU2VydmljZTogSW50ZXJzZWN0aW9uU2VydmljZVxuICApIHtcbiAgICB0aGlzLmdsb2JhbExvYWRTdHJhdGVneSA9IGNvbmZpZy5kZWZlcnJlZExvYWRpbmdcbiAgICAgID8gY29uZmlnLmRlZmVycmVkTG9hZGluZy5zdHJhdGVneVxuICAgICAgOiBEZWZlckxvYWRpbmdTdHJhdGVneS5JTlNUQU5UO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmVyIGxvYWRpbmcgdGlsbCB0aGUgZWxlbWVudCBpbnRlcnNlY3RzIHRoZSB2aWV3cG9ydC5cbiAgICpcbiAgICogV2UgZXZhbHV0ZXMgd2hldGhlciB3ZSBpbnN0YW50bHkgbG9hZCB0aGUgZWxlbWVudCBmb3IgZGlmZmVyZW50IHJlYXNvbnM6XG4gICAqIC0gd2UgcnVuIGluIFNTUiBtb2RlXG4gICAqIC0gdGhlcmUncyBubyBnbG9iYWwgc3RyYXRlZ3kgZ2l2ZW5cbiAgICogLSB0aGUgZ2xvYmFsIGxvYWRpbmcgc3RyYXRlZ3kgaXMgc2V0IHRvIElOU1RBTlQgbG9hZGluZyxcbiAgICogICBhbmQgdGhlIGxvYWRpbmcgc3RyYXRlZ3kgaW4gdGhlIGdpdmVuIGlzIG5vdCBzZXQgdG8gREVGRVJcbiAgICogLSB0aGUgbG9hZGluZyBzdHJhdGVneSBpbiB0aGUgZ2l2ZW4gb3B0aW9ucyBpcyBzZXQgdG8gSU5TVEFOVFxuICAgKi9cbiAgbG9hZChcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBvcHRpb25zPzogSW50ZXJzZWN0aW9uT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2FkSW5zdGFudGx5KChvcHRpb25zIHx8IHt9KS5kZWZlckxvYWRpbmcpKSB7XG4gICAgICByZXR1cm4gb2YodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVyc2VjdGlvblNlcnZpY2UuaXNJbnRlcnNlY3RlZChlbGVtZW50LCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3VsZExvYWRJbnN0YW50bHkoXG4gICAgZWxlbWVudExvYWRpbmdTdHJhdGVneTogRGVmZXJMb2FkaW5nU3RyYXRlZ3lcbiAgKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKSB8fFxuICAgICAgZWxlbWVudExvYWRpbmdTdHJhdGVneSA9PT0gRGVmZXJMb2FkaW5nU3RyYXRlZ3kuSU5TVEFOVCB8fFxuICAgICAgKGVsZW1lbnRMb2FkaW5nU3RyYXRlZ3kgIT09IERlZmVyTG9hZGluZ1N0cmF0ZWd5LkRFRkVSICYmXG4gICAgICAgIHRoaXMuZ2xvYmFsTG9hZFN0cmF0ZWd5ID09PSBEZWZlckxvYWRpbmdTdHJhdGVneS5JTlNUQU5UKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==