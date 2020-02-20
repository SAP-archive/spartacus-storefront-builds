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
let IntersectionService = class IntersectionService {
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
     */
    isIntersected(element, options) {
        return this.intersects(element, options).pipe(first(v => v === true));
    }
    /**
     * Indicates whenever the element intersects the view port. An optional margin
     * is used to intersects before the element shows up in the viewport.
     * A value is emitted each time the element intersects.
     *
     * This is private for now, but could be exposed as a public API
     * to introduce additional (css) render effects to the UI.
     */
    intersects(element, options) {
        const elementVisible$ = new Observable(observer => {
            const rootMargin = this.getRootMargin(options);
            const intersectOptions = { rootMargin };
            const intersectionObserver = new IntersectionObserver(entries => {
                observer.next(entries);
            }, intersectOptions);
            intersectionObserver.observe(element);
            return () => {
                intersectionObserver.disconnect();
            };
        }).pipe(flatMap((entries) => entries), map((entry) => entry.isIntersecting), distinctUntilChanged());
        return elementVisible$;
    }
    getRootMargin(options) {
        if (options.rootMargin) {
            return options.rootMargin;
        }
        const layoutConfig = this.config;
        if (layoutConfig.deferredLoading &&
            layoutConfig.deferredLoading.intersectionMargin) {
            return layoutConfig.deferredLoading.intersectionMargin;
        }
    }
};
IntersectionService.ctorParameters = () => [
    { type: LayoutConfig }
];
IntersectionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IntersectionService_Factory() { return new IntersectionService(i0.ɵɵinject(i1.LayoutConfig)); }, token: IntersectionService, providedIn: "root" });
IntersectionService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], IntersectionService);
export { IntersectionService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJzZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbG9hZGluZy9pbnRlcnNlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBR3ZEOzs7O0dBSUc7QUFJSCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQUM5QixZQUFzQixNQUFvQjtRQUFwQixXQUFNLEdBQU4sTUFBTSxDQUFjO0lBQUcsQ0FBQztJQUU5Qzs7Ozs7OztPQU9HO0lBQ0gsYUFBYSxDQUNYLE9BQW9CLEVBQ3BCLE9BQTZCO1FBRTdCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ssVUFBVSxDQUNoQixPQUFvQixFQUNwQixPQUE2QjtRQUU3QixNQUFNLGVBQWUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9DLE1BQU0sZ0JBQWdCLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQztZQUN4QyxNQUFNLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzlELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekIsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDckIsb0JBQW9CLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDTCxPQUFPLENBQUMsQ0FBQyxPQUFvQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFDMUQsR0FBRyxDQUFDLENBQUMsS0FBZ0MsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUMvRCxvQkFBb0IsRUFBRSxDQUN2QixDQUFDO1FBRUYsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUVPLGFBQWEsQ0FBQyxPQUE2QjtRQUNqRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQzNCO1FBQ0QsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQXNCLENBQUM7UUFDakQsSUFDRSxZQUFZLENBQUMsZUFBZTtZQUM1QixZQUFZLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUMvQztZQUNBLE9BQU8sWUFBWSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQztTQUN4RDtJQUNILENBQUM7Q0FDRixDQUFBOztZQTVEK0IsWUFBWTs7O0FBRC9CLG1CQUFtQjtJQUgvQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csbUJBQW1CLENBNkQvQjtTQTdEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlyc3QsIGZsYXRNYXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExheW91dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tICcuL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5cbi8qKlxuICogVGhlIEludGVyc2VjdGlvblNlcnZpY2UgdXNlcyB0aGUgbmF0aXZlIEludGVyc2VjdGlvbk9ic2VydmVyICh2MiksIHdoaWNoXG4gKiBjYW4gYmUgdXNlZCB0byBpbXBsZW1lbnQgcHJlLWxvYWRpbmcgYW5kIGRlZmVycmVkIGxvYWRpbmcgb2YgRE9NIGNvbnRlbnQuXG4gKlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJzZWN0aW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IExheW91dENvbmZpZykge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgb25seSBvbmNlIGEgYm9vbGVhbiB2YWx1ZSB3aGVuZXZlclxuICAgKiB0aGUgZ2l2ZW4gZWxlbWVudCBoYXMgc2hvd24gaW4gdGhlIHZpZXcgcG9ydC5cbiAgICpcbiAgICogVGhlIHJldHVybmVkIG9iZXJ2YWJsZSB3aWxsIG9ubHkgZW1pdCB0aGUgZmlyc3QgdmFsdWUuIFRoZVxuICAgKiBvYnNlcnZhYmxlIG11c3QgYmUgY2xlYW5lZCB1cCBlaXRoZXIgd2F5LCBzaW5jZSB0aGUgdmFsdWUgbWlnaHQgbmV2ZXIgZW1pdDsgaXRcbiAgICogIGRlcGVuZHMgb24gd2hldGhlciB0aGUgZWxlbWVudCBhcHBlYXJzIGluIHRoZSB2aWV3IHBvcnQuXG4gICAqL1xuICBpc0ludGVyc2VjdGVkKFxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIG9wdGlvbnM/OiBJbnRlcnNlY3Rpb25PcHRpb25zXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmludGVyc2VjdHMoZWxlbWVudCwgb3B0aW9ucykucGlwZShmaXJzdCh2ID0+IHYgPT09IHRydWUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hlbmV2ZXIgdGhlIGVsZW1lbnQgaW50ZXJzZWN0cyB0aGUgdmlldyBwb3J0LiBBbiBvcHRpb25hbCBtYXJnaW5cbiAgICogaXMgdXNlZCB0byBpbnRlcnNlY3RzIGJlZm9yZSB0aGUgZWxlbWVudCBzaG93cyB1cCBpbiB0aGUgdmlld3BvcnQuXG4gICAqIEEgdmFsdWUgaXMgZW1pdHRlZCBlYWNoIHRpbWUgdGhlIGVsZW1lbnQgaW50ZXJzZWN0cy5cbiAgICpcbiAgICogVGhpcyBpcyBwcml2YXRlIGZvciBub3csIGJ1dCBjb3VsZCBiZSBleHBvc2VkIGFzIGEgcHVibGljIEFQSVxuICAgKiB0byBpbnRyb2R1Y2UgYWRkaXRpb25hbCAoY3NzKSByZW5kZXIgZWZmZWN0cyB0byB0aGUgVUkuXG4gICAqL1xuICBwcml2YXRlIGludGVyc2VjdHMoXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgb3B0aW9ucz86IEludGVyc2VjdGlvbk9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgZWxlbWVudFZpc2libGUkID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgY29uc3Qgcm9vdE1hcmdpbiA9IHRoaXMuZ2V0Um9vdE1hcmdpbihvcHRpb25zKTtcbiAgICAgIGNvbnN0IGludGVyc2VjdE9wdGlvbnMgPSB7IHJvb3RNYXJnaW4gfTtcbiAgICAgIGNvbnN0IGludGVyc2VjdGlvbk9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGVudHJpZXMpO1xuICAgICAgfSwgaW50ZXJzZWN0T3B0aW9ucyk7XG4gICAgICBpbnRlcnNlY3Rpb25PYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaW50ZXJzZWN0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfTtcbiAgICB9KS5waXBlKFxuICAgICAgZmxhdE1hcCgoZW50cmllczogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVtdKSA9PiBlbnRyaWVzKSxcbiAgICAgIG1hcCgoZW50cnk6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRWaXNpYmxlJDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um9vdE1hcmdpbihvcHRpb25zPzogSW50ZXJzZWN0aW9uT3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLnJvb3RNYXJnaW4pIHtcbiAgICAgIHJldHVybiBvcHRpb25zLnJvb3RNYXJnaW47XG4gICAgfVxuICAgIGNvbnN0IGxheW91dENvbmZpZyA9IHRoaXMuY29uZmlnIGFzIExheW91dENvbmZpZztcbiAgICBpZiAoXG4gICAgICBsYXlvdXRDb25maWcuZGVmZXJyZWRMb2FkaW5nICYmXG4gICAgICBsYXlvdXRDb25maWcuZGVmZXJyZWRMb2FkaW5nLmludGVyc2VjdGlvbk1hcmdpblxuICAgICkge1xuICAgICAgcmV0dXJuIGxheW91dENvbmZpZy5kZWZlcnJlZExvYWRpbmcuaW50ZXJzZWN0aW9uTWFyZ2luO1xuICAgIH1cbiAgfVxufVxuIl19