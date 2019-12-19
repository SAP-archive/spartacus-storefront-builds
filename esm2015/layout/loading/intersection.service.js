/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, first, flatMap, map } from 'rxjs/operators';
import { LayoutConfig } from '../config/layout-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/layout-config";
/**
 * The IntersectionService uses the native IntersectionObserver (v2), which
 * can be used to implement pre-loading and deferred loading of DOM content.
 *
 */
export class IntersectionService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * Returns an Observable that emits only once a boolean value whenever
     * the given element has shown in the view port.
     *
     * The returned obervable will only emit the first value. The
     * observable must be cleaned up either way, since the value might never emit; it
     *  depends on whether the element appears in the view port.
     * @param {?} element
     * @param {?=} options
     * @return {?}
     */
    isIntersected(element, options) {
        return this.intersects(element, options).pipe(first((/**
         * @param {?} v
         * @return {?}
         */
        v => v === true)));
    }
    /**
     * Indicates whenever the element intersects the view port. An optional margin
     * is used to intersects before the element shows up in the viewport.
     * A value is emitted each time the element intersects.
     *
     * This is private for now, but could be exposed as a public API
     * to introduce additional (css) render effects to the UI.
     * @private
     * @param {?} element
     * @param {?=} options
     * @return {?}
     */
    intersects(element, options) {
        /** @type {?} */
        const elementVisible$ = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            /** @type {?} */
            const rootMargin = this.getRootMargin(options);
            /** @type {?} */
            const intersectOptions = { rootMargin };
            /** @type {?} */
            const intersectionObserver = new IntersectionObserver((/**
             * @param {?} entries
             * @return {?}
             */
            entries => {
                observer.next(entries);
            }), intersectOptions);
            intersectionObserver.observe(element);
            return (/**
             * @return {?}
             */
            () => {
                intersectionObserver.disconnect();
            });
        })).pipe(flatMap((/**
         * @param {?} entries
         * @return {?}
         */
        (entries) => entries)), map((/**
         * @param {?} entry
         * @return {?}
         */
        (entry) => entry.isIntersecting)), distinctUntilChanged());
        return elementVisible$;
    }
    /**
     * @private
     * @param {?=} options
     * @return {?}
     */
    getRootMargin(options) {
        if (options.rootMargin) {
            return options.rootMargin;
        }
        /** @type {?} */
        const layoutConfig = (/** @type {?} */ (this.config));
        if (layoutConfig.deferredLoading &&
            layoutConfig.deferredLoading.intersectionMargin) {
            return layoutConfig.deferredLoading.intersectionMargin;
        }
    }
}
IntersectionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
IntersectionService.ctorParameters = () => [
    { type: LayoutConfig }
];
/** @nocollapse */ IntersectionService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function IntersectionService_Factory() { return new IntersectionService(i0.ɵɵinject(i1.LayoutConfig)); }, token: IntersectionService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IntersectionService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJzZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbG9hZGluZy9pbnRlcnNlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7QUFXdkQsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUM5QixZQUFzQixNQUFvQjtRQUFwQixXQUFNLEdBQU4sTUFBTSxDQUFjO0lBQUcsQ0FBQzs7Ozs7Ozs7Ozs7O0lBVTlDLGFBQWEsQ0FDWCxPQUFvQixFQUNwQixPQUE2QjtRQUU3QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7Ozs7Ozs7Ozs7O0lBVU8sVUFBVSxDQUNoQixPQUFvQixFQUNwQixPQUE2Qjs7Y0FFdkIsZUFBZSxHQUFHLElBQUksVUFBVTs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFOztrQkFDMUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDOztrQkFDeEMsZ0JBQWdCLEdBQUcsRUFBRSxVQUFVLEVBQUU7O2tCQUNqQyxvQkFBb0IsR0FBRyxJQUFJLG9CQUFvQjs7OztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUM5RCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pCLENBQUMsR0FBRSxnQkFBZ0IsQ0FBQztZQUNwQixvQkFBb0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEM7OztZQUFPLEdBQUcsRUFBRTtnQkFDVixvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQyxDQUFDLEVBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQ0wsT0FBTzs7OztRQUFDLENBQUMsT0FBb0MsRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFDLEVBQzFELEdBQUc7Ozs7UUFBQyxDQUFDLEtBQWdDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUMsRUFDL0Qsb0JBQW9CLEVBQUUsQ0FDdkI7UUFFRCxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsT0FBNkI7UUFDakQsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3RCLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQztTQUMzQjs7Y0FDSyxZQUFZLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE1BQU0sRUFBZ0I7UUFDaEQsSUFDRSxZQUFZLENBQUMsZUFBZTtZQUM1QixZQUFZLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUMvQztZQUNBLE9BQU8sWUFBWSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQztTQUN4RDtJQUNILENBQUM7OztZQS9ERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFWUSxZQUFZOzs7Ozs7OztJQVlQLHFDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaXJzdCwgZmxhdE1hcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJzZWN0aW9uLm1vZGVsJztcblxuLyoqXG4gKiBUaGUgSW50ZXJzZWN0aW9uU2VydmljZSB1c2VzIHRoZSBuYXRpdmUgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgKHYyKSwgd2hpY2hcbiAqIGNhbiBiZSB1c2VkIHRvIGltcGxlbWVudCBwcmUtbG9hZGluZyBhbmQgZGVmZXJyZWQgbG9hZGluZyBvZiBET00gY29udGVudC5cbiAqXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBJbnRlcnNlY3Rpb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbmZpZzogTGF5b3V0Q29uZmlnKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBvbmx5IG9uY2UgYSBib29sZWFuIHZhbHVlIHdoZW5ldmVyXG4gICAqIHRoZSBnaXZlbiBlbGVtZW50IGhhcyBzaG93biBpbiB0aGUgdmlldyBwb3J0LlxuICAgKlxuICAgKiBUaGUgcmV0dXJuZWQgb2JlcnZhYmxlIHdpbGwgb25seSBlbWl0IHRoZSBmaXJzdCB2YWx1ZS4gVGhlXG4gICAqIG9ic2VydmFibGUgbXVzdCBiZSBjbGVhbmVkIHVwIGVpdGhlciB3YXksIHNpbmNlIHRoZSB2YWx1ZSBtaWdodCBuZXZlciBlbWl0OyBpdFxuICAgKiAgZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBlbGVtZW50IGFwcGVhcnMgaW4gdGhlIHZpZXcgcG9ydC5cbiAgICovXG4gIGlzSW50ZXJzZWN0ZWQoXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgb3B0aW9ucz86IEludGVyc2VjdGlvbk9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJzZWN0cyhlbGVtZW50LCBvcHRpb25zKS5waXBlKGZpcnN0KHYgPT4gdiA9PT0gdHJ1ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGVuZXZlciB0aGUgZWxlbWVudCBpbnRlcnNlY3RzIHRoZSB2aWV3IHBvcnQuIEFuIG9wdGlvbmFsIG1hcmdpblxuICAgKiBpcyB1c2VkIHRvIGludGVyc2VjdHMgYmVmb3JlIHRoZSBlbGVtZW50IHNob3dzIHVwIGluIHRoZSB2aWV3cG9ydC5cbiAgICogQSB2YWx1ZSBpcyBlbWl0dGVkIGVhY2ggdGltZSB0aGUgZWxlbWVudCBpbnRlcnNlY3RzLlxuICAgKlxuICAgKiBUaGlzIGlzIHByaXZhdGUgZm9yIG5vdywgYnV0IGNvdWxkIGJlIGV4cG9zZWQgYXMgYSBwdWJsaWMgQVBJXG4gICAqIHRvIGludHJvZHVjZSBhZGRpdGlvbmFsIChjc3MpIHJlbmRlciBlZmZlY3RzIHRvIHRoZSBVSS5cbiAgICovXG4gIHByaXZhdGUgaW50ZXJzZWN0cyhcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBvcHRpb25zPzogSW50ZXJzZWN0aW9uT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBlbGVtZW50VmlzaWJsZSQgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG4gICAgICBjb25zdCByb290TWFyZ2luID0gdGhpcy5nZXRSb290TWFyZ2luKG9wdGlvbnMpO1xuICAgICAgY29uc3QgaW50ZXJzZWN0T3B0aW9ucyA9IHsgcm9vdE1hcmdpbiB9O1xuICAgICAgY29uc3QgaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZW50cmllcyk7XG4gICAgICB9LCBpbnRlcnNlY3RPcHRpb25zKTtcbiAgICAgIGludGVyc2VjdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpbnRlcnNlY3Rpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9O1xuICAgIH0pLnBpcGUoXG4gICAgICBmbGF0TWFwKChlbnRyaWVzOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10pID0+IGVudHJpZXMpLFxuICAgICAgbWFwKChlbnRyeTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSkgPT4gZW50cnkuaXNJbnRlcnNlY3RpbmcpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG5cbiAgICByZXR1cm4gZWxlbWVudFZpc2libGUkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb290TWFyZ2luKG9wdGlvbnM/OiBJbnRlcnNlY3Rpb25PcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMucm9vdE1hcmdpbikge1xuICAgICAgcmV0dXJuIG9wdGlvbnMucm9vdE1hcmdpbjtcbiAgICB9XG4gICAgY29uc3QgbGF5b3V0Q29uZmlnID0gdGhpcy5jb25maWcgYXMgTGF5b3V0Q29uZmlnO1xuICAgIGlmIChcbiAgICAgIGxheW91dENvbmZpZy5kZWZlcnJlZExvYWRpbmcgJiZcbiAgICAgIGxheW91dENvbmZpZy5kZWZlcnJlZExvYWRpbmcuaW50ZXJzZWN0aW9uTWFyZ2luXG4gICAgKSB7XG4gICAgICByZXR1cm4gbGF5b3V0Q29uZmlnLmRlZmVycmVkTG9hZGluZy5pbnRlcnNlY3Rpb25NYXJnaW47XG4gICAgfVxuICB9XG59XG4iXX0=