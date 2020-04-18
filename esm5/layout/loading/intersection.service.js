import { __decorate } from "tslib";
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
     * The returned observable will only emit the first value. The
     * observable must be cleaned up either way, since the value might never emit; it
     *  depends on whether the element appears in the view port.
     */
    IntersectionService.prototype.isIntersected = function (element, options) {
        return this.intersects(element, options).pipe(first(function (v) { return v === true; }));
    };
    /**
     * Indicates whenever the element intersects the view port. An optional margin
     * is used to intersects before the element shows up in the viewport.
     * A value is emitted each time the element intersects.
     *
     * This is private for now, but could be exposed as a public API
     * to introduce additional (css) render effects to the UI.
     */
    IntersectionService.prototype.intersects = function (element, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var elementVisible$ = new Observable(function (observer) {
            var rootMargin = _this.getRootMargin(options);
            var intersectOptions = { rootMargin: rootMargin, thresholds: options.threshold };
            var intersectionObserver = new IntersectionObserver(function (entries) {
                observer.next(entries);
            }, intersectOptions);
            intersectionObserver.observe(element);
            return function () {
                intersectionObserver.disconnect();
            };
        }).pipe(flatMap(function (entries) { return entries; }), map(function (entry) { return entry.isIntersecting; }), distinctUntilChanged());
        return elementVisible$;
    };
    IntersectionService.prototype.getRootMargin = function (options) {
        if (options === void 0) { options = {}; }
        if (options.rootMargin) {
            return options.rootMargin;
        }
        var layoutConfig = this.config;
        if (layoutConfig.deferredLoading &&
            layoutConfig.deferredLoading.intersectionMargin) {
            return layoutConfig.deferredLoading.intersectionMargin;
        }
    };
    IntersectionService.ctorParameters = function () { return [
        { type: LayoutConfig }
    ]; };
    IntersectionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IntersectionService_Factory() { return new IntersectionService(i0.ɵɵinject(i1.LayoutConfig)); }, token: IntersectionService, providedIn: "root" });
    IntersectionService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], IntersectionService);
    return IntersectionService;
}());
export { IntersectionService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJzZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbG9hZGluZy9pbnRlcnNlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBR3ZEOzs7O0dBSUc7QUFJSDtJQUNFLDZCQUFzQixNQUFvQjtRQUFwQixXQUFNLEdBQU4sTUFBTSxDQUFjO0lBQUcsQ0FBQztJQUU5Qzs7Ozs7OztPQU9HO0lBQ0gsMkNBQWEsR0FBYixVQUNFLE9BQW9CLEVBQ3BCLE9BQTZCO1FBRTdCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsS0FBSyxJQUFJLEVBQVYsQ0FBVSxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNLLHdDQUFVLEdBQWxCLFVBQ0UsT0FBb0IsRUFDcEIsT0FBaUM7UUFGbkMsaUJBcUJDO1FBbkJDLHdCQUFBLEVBQUEsWUFBaUM7UUFFakMsSUFBTSxlQUFlLEdBQUcsSUFBSSxVQUFVLENBQUMsVUFBQyxRQUFRO1lBQzlDLElBQU0sVUFBVSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0MsSUFBTSxnQkFBZ0IsR0FBRyxFQUFFLFVBQVUsWUFBQSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDdkUsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLG9CQUFvQixDQUFDLFVBQUMsT0FBTztnQkFDNUQsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QixDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUNyQixvQkFBb0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEMsT0FBTztnQkFDTCxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ0wsT0FBTyxDQUFDLFVBQUMsT0FBb0MsSUFBSyxPQUFBLE9BQU8sRUFBUCxDQUFPLENBQUMsRUFDMUQsR0FBRyxDQUFDLFVBQUMsS0FBZ0MsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQXBCLENBQW9CLENBQUMsRUFDL0Qsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztRQUVGLE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFFTywyQ0FBYSxHQUFyQixVQUFzQixPQUFpQztRQUFqQyx3QkFBQSxFQUFBLFlBQWlDO1FBQ3JELElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN0QixPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUM7U0FDM0I7UUFDRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBc0IsQ0FBQztRQUNqRCxJQUNFLFlBQVksQ0FBQyxlQUFlO1lBQzVCLFlBQVksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQy9DO1lBQ0EsT0FBTyxZQUFZLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDO1NBQ3hEO0lBQ0gsQ0FBQzs7Z0JBM0Q2QixZQUFZOzs7SUFEL0IsbUJBQW1CO1FBSC9CLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxtQkFBbUIsQ0E2RC9COzhCQTNFRDtDQTJFQyxBQTdERCxJQTZEQztTQTdEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlyc3QsIGZsYXRNYXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExheW91dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tICcuL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5cbi8qKlxuICogVGhlIEludGVyc2VjdGlvblNlcnZpY2UgdXNlcyB0aGUgbmF0aXZlIEludGVyc2VjdGlvbk9ic2VydmVyICh2MiksIHdoaWNoXG4gKiBjYW4gYmUgdXNlZCB0byBpbXBsZW1lbnQgcHJlLWxvYWRpbmcgYW5kIGRlZmVycmVkIGxvYWRpbmcgb2YgRE9NIGNvbnRlbnQuXG4gKlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJzZWN0aW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IExheW91dENvbmZpZykge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgb25seSBvbmNlIGEgYm9vbGVhbiB2YWx1ZSB3aGVuZXZlclxuICAgKiB0aGUgZ2l2ZW4gZWxlbWVudCBoYXMgc2hvd24gaW4gdGhlIHZpZXcgcG9ydC5cbiAgICpcbiAgICogVGhlIHJldHVybmVkIG9ic2VydmFibGUgd2lsbCBvbmx5IGVtaXQgdGhlIGZpcnN0IHZhbHVlLiBUaGVcbiAgICogb2JzZXJ2YWJsZSBtdXN0IGJlIGNsZWFuZWQgdXAgZWl0aGVyIHdheSwgc2luY2UgdGhlIHZhbHVlIG1pZ2h0IG5ldmVyIGVtaXQ7IGl0XG4gICAqICBkZXBlbmRzIG9uIHdoZXRoZXIgdGhlIGVsZW1lbnQgYXBwZWFycyBpbiB0aGUgdmlldyBwb3J0LlxuICAgKi9cbiAgaXNJbnRlcnNlY3RlZChcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBvcHRpb25zPzogSW50ZXJzZWN0aW9uT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnNlY3RzKGVsZW1lbnQsIG9wdGlvbnMpLnBpcGUoZmlyc3QoKHYpID0+IHYgPT09IHRydWUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hlbmV2ZXIgdGhlIGVsZW1lbnQgaW50ZXJzZWN0cyB0aGUgdmlldyBwb3J0LiBBbiBvcHRpb25hbCBtYXJnaW5cbiAgICogaXMgdXNlZCB0byBpbnRlcnNlY3RzIGJlZm9yZSB0aGUgZWxlbWVudCBzaG93cyB1cCBpbiB0aGUgdmlld3BvcnQuXG4gICAqIEEgdmFsdWUgaXMgZW1pdHRlZCBlYWNoIHRpbWUgdGhlIGVsZW1lbnQgaW50ZXJzZWN0cy5cbiAgICpcbiAgICogVGhpcyBpcyBwcml2YXRlIGZvciBub3csIGJ1dCBjb3VsZCBiZSBleHBvc2VkIGFzIGEgcHVibGljIEFQSVxuICAgKiB0byBpbnRyb2R1Y2UgYWRkaXRpb25hbCAoY3NzKSByZW5kZXIgZWZmZWN0cyB0byB0aGUgVUkuXG4gICAqL1xuICBwcml2YXRlIGludGVyc2VjdHMoXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgb3B0aW9uczogSW50ZXJzZWN0aW9uT3B0aW9ucyA9IHt9XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGVsZW1lbnRWaXNpYmxlJCA9IG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgICAgY29uc3Qgcm9vdE1hcmdpbiA9IHRoaXMuZ2V0Um9vdE1hcmdpbihvcHRpb25zKTtcbiAgICAgIGNvbnN0IGludGVyc2VjdE9wdGlvbnMgPSB7IHJvb3RNYXJnaW4sIHRocmVzaG9sZHM6IG9wdGlvbnMudGhyZXNob2xkIH07XG4gICAgICBjb25zdCBpbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGVudHJpZXMpO1xuICAgICAgfSwgaW50ZXJzZWN0T3B0aW9ucyk7XG4gICAgICBpbnRlcnNlY3Rpb25PYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaW50ZXJzZWN0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfTtcbiAgICB9KS5waXBlKFxuICAgICAgZmxhdE1hcCgoZW50cmllczogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVtdKSA9PiBlbnRyaWVzKSxcbiAgICAgIG1hcCgoZW50cnk6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRWaXNpYmxlJDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um9vdE1hcmdpbihvcHRpb25zOiBJbnRlcnNlY3Rpb25PcHRpb25zID0ge30pOiBzdHJpbmcge1xuICAgIGlmIChvcHRpb25zLnJvb3RNYXJnaW4pIHtcbiAgICAgIHJldHVybiBvcHRpb25zLnJvb3RNYXJnaW47XG4gICAgfVxuICAgIGNvbnN0IGxheW91dENvbmZpZyA9IHRoaXMuY29uZmlnIGFzIExheW91dENvbmZpZztcbiAgICBpZiAoXG4gICAgICBsYXlvdXRDb25maWcuZGVmZXJyZWRMb2FkaW5nICYmXG4gICAgICBsYXlvdXRDb25maWcuZGVmZXJyZWRMb2FkaW5nLmludGVyc2VjdGlvbk1hcmdpblxuICAgICkge1xuICAgICAgcmV0dXJuIGxheW91dENvbmZpZy5kZWZlcnJlZExvYWRpbmcuaW50ZXJzZWN0aW9uTWFyZ2luO1xuICAgIH1cbiAgfVxufVxuIl19