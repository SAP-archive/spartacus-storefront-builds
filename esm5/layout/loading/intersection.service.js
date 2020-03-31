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
     * The returned obervable will only emit the first value. The
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
        var elementVisible$ = new Observable(function (observer) {
            var rootMargin = _this.getRootMargin(options);
            var intersectOptions = { rootMargin: rootMargin };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJzZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbG9hZGluZy9pbnRlcnNlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBR3ZEOzs7O0dBSUc7QUFJSDtJQUNFLDZCQUFzQixNQUFvQjtRQUFwQixXQUFNLEdBQU4sTUFBTSxDQUFjO0lBQUcsQ0FBQztJQUU5Qzs7Ozs7OztPQU9HO0lBQ0gsMkNBQWEsR0FBYixVQUNFLE9BQW9CLEVBQ3BCLE9BQTZCO1FBRTdCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsS0FBSyxJQUFJLEVBQVYsQ0FBVSxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNLLHdDQUFVLEdBQWxCLFVBQ0UsT0FBb0IsRUFDcEIsT0FBNkI7UUFGL0IsaUJBcUJDO1FBakJDLElBQU0sZUFBZSxHQUFHLElBQUksVUFBVSxDQUFDLFVBQUMsUUFBUTtZQUM5QyxJQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9DLElBQU0sZ0JBQWdCLEdBQUcsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDO1lBQ3hDLElBQU0sb0JBQW9CLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxVQUFDLE9BQU87Z0JBQzVELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekIsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDckIsb0JBQW9CLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RDLE9BQU87Z0JBQ0wsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNMLE9BQU8sQ0FBQyxVQUFDLE9BQW9DLElBQUssT0FBQSxPQUFPLEVBQVAsQ0FBTyxDQUFDLEVBQzFELEdBQUcsQ0FBQyxVQUFDLEtBQWdDLElBQUssT0FBQSxLQUFLLENBQUMsY0FBYyxFQUFwQixDQUFvQixDQUFDLEVBQy9ELG9CQUFvQixFQUFFLENBQ3ZCLENBQUM7UUFFRixPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBRU8sMkNBQWEsR0FBckIsVUFBc0IsT0FBNkI7UUFDakQsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3RCLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQztTQUMzQjtRQUNELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFzQixDQUFDO1FBQ2pELElBQ0UsWUFBWSxDQUFDLGVBQWU7WUFDNUIsWUFBWSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFDL0M7WUFDQSxPQUFPLFlBQVksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUM7U0FDeEQ7SUFDSCxDQUFDOztnQkEzRDZCLFlBQVk7OztJQUQvQixtQkFBbUI7UUFIL0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLG1CQUFtQixDQTZEL0I7OEJBM0VEO0NBMkVDLEFBN0RELElBNkRDO1NBN0RZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaXJzdCwgZmxhdE1hcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJzZWN0aW9uLm1vZGVsJztcblxuLyoqXG4gKiBUaGUgSW50ZXJzZWN0aW9uU2VydmljZSB1c2VzIHRoZSBuYXRpdmUgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgKHYyKSwgd2hpY2hcbiAqIGNhbiBiZSB1c2VkIHRvIGltcGxlbWVudCBwcmUtbG9hZGluZyBhbmQgZGVmZXJyZWQgbG9hZGluZyBvZiBET00gY29udGVudC5cbiAqXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBJbnRlcnNlY3Rpb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbmZpZzogTGF5b3V0Q29uZmlnKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBvbmx5IG9uY2UgYSBib29sZWFuIHZhbHVlIHdoZW5ldmVyXG4gICAqIHRoZSBnaXZlbiBlbGVtZW50IGhhcyBzaG93biBpbiB0aGUgdmlldyBwb3J0LlxuICAgKlxuICAgKiBUaGUgcmV0dXJuZWQgb2JlcnZhYmxlIHdpbGwgb25seSBlbWl0IHRoZSBmaXJzdCB2YWx1ZS4gVGhlXG4gICAqIG9ic2VydmFibGUgbXVzdCBiZSBjbGVhbmVkIHVwIGVpdGhlciB3YXksIHNpbmNlIHRoZSB2YWx1ZSBtaWdodCBuZXZlciBlbWl0OyBpdFxuICAgKiAgZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBlbGVtZW50IGFwcGVhcnMgaW4gdGhlIHZpZXcgcG9ydC5cbiAgICovXG4gIGlzSW50ZXJzZWN0ZWQoXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgb3B0aW9ucz86IEludGVyc2VjdGlvbk9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJzZWN0cyhlbGVtZW50LCBvcHRpb25zKS5waXBlKGZpcnN0KCh2KSA9PiB2ID09PSB0cnVlKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZW5ldmVyIHRoZSBlbGVtZW50IGludGVyc2VjdHMgdGhlIHZpZXcgcG9ydC4gQW4gb3B0aW9uYWwgbWFyZ2luXG4gICAqIGlzIHVzZWQgdG8gaW50ZXJzZWN0cyBiZWZvcmUgdGhlIGVsZW1lbnQgc2hvd3MgdXAgaW4gdGhlIHZpZXdwb3J0LlxuICAgKiBBIHZhbHVlIGlzIGVtaXR0ZWQgZWFjaCB0aW1lIHRoZSBlbGVtZW50IGludGVyc2VjdHMuXG4gICAqXG4gICAqIFRoaXMgaXMgcHJpdmF0ZSBmb3Igbm93LCBidXQgY291bGQgYmUgZXhwb3NlZCBhcyBhIHB1YmxpYyBBUElcbiAgICogdG8gaW50cm9kdWNlIGFkZGl0aW9uYWwgKGNzcykgcmVuZGVyIGVmZmVjdHMgdG8gdGhlIFVJLlxuICAgKi9cbiAgcHJpdmF0ZSBpbnRlcnNlY3RzKFxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIG9wdGlvbnM/OiBJbnRlcnNlY3Rpb25PcHRpb25zXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGVsZW1lbnRWaXNpYmxlJCA9IG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgICAgY29uc3Qgcm9vdE1hcmdpbiA9IHRoaXMuZ2V0Um9vdE1hcmdpbihvcHRpb25zKTtcbiAgICAgIGNvbnN0IGludGVyc2VjdE9wdGlvbnMgPSB7IHJvb3RNYXJnaW4gfTtcbiAgICAgIGNvbnN0IGludGVyc2VjdGlvbk9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZW50cmllcyk7XG4gICAgICB9LCBpbnRlcnNlY3RPcHRpb25zKTtcbiAgICAgIGludGVyc2VjdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpbnRlcnNlY3Rpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9O1xuICAgIH0pLnBpcGUoXG4gICAgICBmbGF0TWFwKChlbnRyaWVzOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10pID0+IGVudHJpZXMpLFxuICAgICAgbWFwKChlbnRyeTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSkgPT4gZW50cnkuaXNJbnRlcnNlY3RpbmcpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG5cbiAgICByZXR1cm4gZWxlbWVudFZpc2libGUkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb290TWFyZ2luKG9wdGlvbnM/OiBJbnRlcnNlY3Rpb25PcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMucm9vdE1hcmdpbikge1xuICAgICAgcmV0dXJuIG9wdGlvbnMucm9vdE1hcmdpbjtcbiAgICB9XG4gICAgY29uc3QgbGF5b3V0Q29uZmlnID0gdGhpcy5jb25maWcgYXMgTGF5b3V0Q29uZmlnO1xuICAgIGlmIChcbiAgICAgIGxheW91dENvbmZpZy5kZWZlcnJlZExvYWRpbmcgJiZcbiAgICAgIGxheW91dENvbmZpZy5kZWZlcnJlZExvYWRpbmcuaW50ZXJzZWN0aW9uTWFyZ2luXG4gICAgKSB7XG4gICAgICByZXR1cm4gbGF5b3V0Q29uZmlnLmRlZmVycmVkTG9hZGluZy5pbnRlcnNlY3Rpb25NYXJnaW47XG4gICAgfVxuICB9XG59XG4iXX0=