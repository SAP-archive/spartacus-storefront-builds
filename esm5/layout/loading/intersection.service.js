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
var IntersectionService = /** @class */ (function () {
    function IntersectionService(config) {
        this.config = config;
    }
    /**
     * Returns an Observable that emits only once a boolean value whenever
     * the given element has shown in the view port.
     *
     * The returned obervable will only emit the first value. The
     * observable must be cleaned up either way, since the value might never emit; it
     *  depends on whether the element appears in the view port.
     */
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
    IntersectionService.prototype.isIntersected = /**
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
    function (element, options) {
        return this.intersects(element, options).pipe(first((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v === true; })));
    };
    /**
     * Indicates whenever the element intersects the view port. An optional margin
     * is used to intersects before the element shows up in the viewport.
     * A value is emitted each time the element intersects.
     *
     * This is private for now, but could be exposed as a public API
     * to introduce additional (css) render effects to the UI.
     */
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
    IntersectionService.prototype.intersects = /**
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
    function (element, options) {
        var _this = this;
        /** @type {?} */
        var elementVisible$ = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var rootMargin = _this.getRootMargin(options);
            /** @type {?} */
            var intersectOptions = { rootMargin: rootMargin };
            /** @type {?} */
            var intersectionObserver = new IntersectionObserver((/**
             * @param {?} entries
             * @return {?}
             */
            function (entries) {
                observer.next(entries);
            }), intersectOptions);
            intersectionObserver.observe(element);
            return (/**
             * @return {?}
             */
            function () {
                intersectionObserver.disconnect();
            });
        })).pipe(flatMap((/**
         * @param {?} entries
         * @return {?}
         */
        function (entries) { return entries; })), map((/**
         * @param {?} entry
         * @return {?}
         */
        function (entry) { return entry.isIntersecting; })), distinctUntilChanged());
        return elementVisible$;
    };
    /**
     * @private
     * @param {?=} options
     * @return {?}
     */
    IntersectionService.prototype.getRootMargin = /**
     * @private
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options.rootMargin) {
            return options.rootMargin;
        }
        /** @type {?} */
        var layoutConfig = (/** @type {?} */ (this.config));
        if (layoutConfig.deferredLoading &&
            layoutConfig.deferredLoading.intersectionMargin) {
            return layoutConfig.deferredLoading.intersectionMargin;
        }
    };
    IntersectionService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    IntersectionService.ctorParameters = function () { return [
        { type: LayoutConfig }
    ]; };
    /** @nocollapse */ IntersectionService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function IntersectionService_Factory() { return new IntersectionService(i0.ɵɵinject(i1.LayoutConfig)); }, token: IntersectionService, providedIn: "root" });
    return IntersectionService;
}());
export { IntersectionService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IntersectionService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJzZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbG9hZGluZy9pbnRlcnNlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7QUFRdkQ7SUFJRSw2QkFBc0IsTUFBb0I7UUFBcEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztJQUFHLENBQUM7SUFFOUM7Ozs7Ozs7T0FPRzs7Ozs7Ozs7Ozs7O0lBQ0gsMkNBQWE7Ozs7Ozs7Ozs7O0lBQWIsVUFDRSxPQUFvQixFQUNwQixPQUE2QjtRQUU3QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssSUFBSSxFQUFWLENBQVUsRUFBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOzs7Ozs7O09BT0c7Ozs7Ozs7Ozs7Ozs7SUFDSyx3Q0FBVTs7Ozs7Ozs7Ozs7O0lBQWxCLFVBQ0UsT0FBb0IsRUFDcEIsT0FBNkI7UUFGL0IsaUJBcUJDOztZQWpCTyxlQUFlLEdBQUcsSUFBSSxVQUFVOzs7O1FBQUMsVUFBQSxRQUFROztnQkFDdkMsVUFBVSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDOztnQkFDeEMsZ0JBQWdCLEdBQUcsRUFBRSxVQUFVLFlBQUEsRUFBRTs7Z0JBQ2pDLG9CQUFvQixHQUFHLElBQUksb0JBQW9COzs7O1lBQUMsVUFBQSxPQUFPO2dCQUMzRCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pCLENBQUMsR0FBRSxnQkFBZ0IsQ0FBQztZQUNwQixvQkFBb0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEM7OztZQUFPO2dCQUNMLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BDLENBQUMsRUFBQztRQUNKLENBQUMsRUFBQyxDQUFDLElBQUksQ0FDTCxPQUFPOzs7O1FBQUMsVUFBQyxPQUFvQyxJQUFLLE9BQUEsT0FBTyxFQUFQLENBQU8sRUFBQyxFQUMxRCxHQUFHOzs7O1FBQUMsVUFBQyxLQUFnQyxJQUFLLE9BQUEsS0FBSyxDQUFDLGNBQWMsRUFBcEIsQ0FBb0IsRUFBQyxFQUMvRCxvQkFBb0IsRUFBRSxDQUN2QjtRQUVELE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVPLDJDQUFhOzs7OztJQUFyQixVQUFzQixPQUE2QjtRQUNqRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQzNCOztZQUNLLFlBQVksR0FBRyxtQkFBQSxJQUFJLENBQUMsTUFBTSxFQUFnQjtRQUNoRCxJQUNFLFlBQVksQ0FBQyxlQUFlO1lBQzVCLFlBQVksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQy9DO1lBQ0EsT0FBTyxZQUFZLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDO1NBQ3hEO0lBQ0gsQ0FBQzs7Z0JBL0RGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVlEsWUFBWTs7OzhCQUhyQjtDQTJFQyxBQWhFRCxJQWdFQztTQTdEWSxtQkFBbUI7Ozs7OztJQUNsQixxQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlyc3QsIGZsYXRNYXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExheW91dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tICcuL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5cbi8qKlxuICogVGhlIEludGVyc2VjdGlvblNlcnZpY2UgdXNlcyB0aGUgbmF0aXZlIEludGVyc2VjdGlvbk9ic2VydmVyICh2MiksIHdoaWNoXG4gKiBjYW4gYmUgdXNlZCB0byBpbXBsZW1lbnQgcHJlLWxvYWRpbmcgYW5kIGRlZmVycmVkIGxvYWRpbmcgb2YgRE9NIGNvbnRlbnQuXG4gKlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJzZWN0aW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IExheW91dENvbmZpZykge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgb25seSBvbmNlIGEgYm9vbGVhbiB2YWx1ZSB3aGVuZXZlclxuICAgKiB0aGUgZ2l2ZW4gZWxlbWVudCBoYXMgc2hvd24gaW4gdGhlIHZpZXcgcG9ydC5cbiAgICpcbiAgICogVGhlIHJldHVybmVkIG9iZXJ2YWJsZSB3aWxsIG9ubHkgZW1pdCB0aGUgZmlyc3QgdmFsdWUuIFRoZVxuICAgKiBvYnNlcnZhYmxlIG11c3QgYmUgY2xlYW5lZCB1cCBlaXRoZXIgd2F5LCBzaW5jZSB0aGUgdmFsdWUgbWlnaHQgbmV2ZXIgZW1pdDsgaXRcbiAgICogIGRlcGVuZHMgb24gd2hldGhlciB0aGUgZWxlbWVudCBhcHBlYXJzIGluIHRoZSB2aWV3IHBvcnQuXG4gICAqL1xuICBpc0ludGVyc2VjdGVkKFxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIG9wdGlvbnM/OiBJbnRlcnNlY3Rpb25PcHRpb25zXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmludGVyc2VjdHMoZWxlbWVudCwgb3B0aW9ucykucGlwZShmaXJzdCh2ID0+IHYgPT09IHRydWUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hlbmV2ZXIgdGhlIGVsZW1lbnQgaW50ZXJzZWN0cyB0aGUgdmlldyBwb3J0LiBBbiBvcHRpb25hbCBtYXJnaW5cbiAgICogaXMgdXNlZCB0byBpbnRlcnNlY3RzIGJlZm9yZSB0aGUgZWxlbWVudCBzaG93cyB1cCBpbiB0aGUgdmlld3BvcnQuXG4gICAqIEEgdmFsdWUgaXMgZW1pdHRlZCBlYWNoIHRpbWUgdGhlIGVsZW1lbnQgaW50ZXJzZWN0cy5cbiAgICpcbiAgICogVGhpcyBpcyBwcml2YXRlIGZvciBub3csIGJ1dCBjb3VsZCBiZSBleHBvc2VkIGFzIGEgcHVibGljIEFQSVxuICAgKiB0byBpbnRyb2R1Y2UgYWRkaXRpb25hbCAoY3NzKSByZW5kZXIgZWZmZWN0cyB0byB0aGUgVUkuXG4gICAqL1xuICBwcml2YXRlIGludGVyc2VjdHMoXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgb3B0aW9ucz86IEludGVyc2VjdGlvbk9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgZWxlbWVudFZpc2libGUkID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgY29uc3Qgcm9vdE1hcmdpbiA9IHRoaXMuZ2V0Um9vdE1hcmdpbihvcHRpb25zKTtcbiAgICAgIGNvbnN0IGludGVyc2VjdE9wdGlvbnMgPSB7IHJvb3RNYXJnaW4gfTtcbiAgICAgIGNvbnN0IGludGVyc2VjdGlvbk9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGVudHJpZXMpO1xuICAgICAgfSwgaW50ZXJzZWN0T3B0aW9ucyk7XG4gICAgICBpbnRlcnNlY3Rpb25PYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaW50ZXJzZWN0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfTtcbiAgICB9KS5waXBlKFxuICAgICAgZmxhdE1hcCgoZW50cmllczogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVtdKSA9PiBlbnRyaWVzKSxcbiAgICAgIG1hcCgoZW50cnk6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRWaXNpYmxlJDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um9vdE1hcmdpbihvcHRpb25zPzogSW50ZXJzZWN0aW9uT3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLnJvb3RNYXJnaW4pIHtcbiAgICAgIHJldHVybiBvcHRpb25zLnJvb3RNYXJnaW47XG4gICAgfVxuICAgIGNvbnN0IGxheW91dENvbmZpZyA9IHRoaXMuY29uZmlnIGFzIExheW91dENvbmZpZztcbiAgICBpZiAoXG4gICAgICBsYXlvdXRDb25maWcuZGVmZXJyZWRMb2FkaW5nICYmXG4gICAgICBsYXlvdXRDb25maWcuZGVmZXJyZWRMb2FkaW5nLmludGVyc2VjdGlvbk1hcmdpblxuICAgICkge1xuICAgICAgcmV0dXJuIGxheW91dENvbmZpZy5kZWZlcnJlZExvYWRpbmcuaW50ZXJzZWN0aW9uTWFyZ2luO1xuICAgIH1cbiAgfVxufVxuIl19