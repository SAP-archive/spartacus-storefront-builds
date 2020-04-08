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
     * The returned observable will only emit the first value. The
     * observable must be cleaned up either way, since the value might never emit; it
     *  depends on whether the element appears in the view port.
     */
    isIntersected(element, options) {
        return this.intersects(element, options).pipe(first((v) => v === true));
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
        const elementVisible$ = new Observable((observer) => {
            const rootMargin = this.getRootMargin(options);
            const intersectOptions = { rootMargin };
            const intersectionObserver = new IntersectionObserver((entries) => {
                observer.next(entries);
            }, intersectOptions);
            intersectionObserver.observe(element);
            return () => {
                intersectionObserver.disconnect();
            };
        }).pipe(flatMap((entries) => entries), map((entry) => entry.isIntersecting), distinctUntilChanged());
        return elementVisible$;
    }
    getRootMargin(options = {}) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJzZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbG9hZGluZy9pbnRlcnNlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBR3ZEOzs7O0dBSUc7QUFJSCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQUM5QixZQUFzQixNQUFvQjtRQUFwQixXQUFNLEdBQU4sTUFBTSxDQUFjO0lBQUcsQ0FBQztJQUU5Qzs7Ozs7OztPQU9HO0lBQ0gsYUFBYSxDQUNYLE9BQW9CLEVBQ3BCLE9BQTZCO1FBRTdCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSyxVQUFVLENBQ2hCLE9BQW9CLEVBQ3BCLE9BQTZCO1FBRTdCLE1BQU0sZUFBZSxHQUFHLElBQUksVUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDbEQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQyxNQUFNLGdCQUFnQixHQUFHLEVBQUUsVUFBVSxFQUFFLENBQUM7WUFDeEMsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLG9CQUFvQixDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ2hFLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekIsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDckIsb0JBQW9CLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDTCxPQUFPLENBQUMsQ0FBQyxPQUFvQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFDMUQsR0FBRyxDQUFDLENBQUMsS0FBZ0MsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUMvRCxvQkFBb0IsRUFBRSxDQUN2QixDQUFDO1FBRUYsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUVPLGFBQWEsQ0FBQyxVQUErQixFQUFFO1FBQ3JELElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN0QixPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUM7U0FDM0I7UUFDRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBc0IsQ0FBQztRQUNqRCxJQUNFLFlBQVksQ0FBQyxlQUFlO1lBQzVCLFlBQVksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQy9DO1lBQ0EsT0FBTyxZQUFZLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBNUQrQixZQUFZOzs7QUFEL0IsbUJBQW1CO0lBSC9CLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxtQkFBbUIsQ0E2RC9CO1NBN0RZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaXJzdCwgZmxhdE1hcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJzZWN0aW9uLm1vZGVsJztcblxuLyoqXG4gKiBUaGUgSW50ZXJzZWN0aW9uU2VydmljZSB1c2VzIHRoZSBuYXRpdmUgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgKHYyKSwgd2hpY2hcbiAqIGNhbiBiZSB1c2VkIHRvIGltcGxlbWVudCBwcmUtbG9hZGluZyBhbmQgZGVmZXJyZWQgbG9hZGluZyBvZiBET00gY29udGVudC5cbiAqXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBJbnRlcnNlY3Rpb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbmZpZzogTGF5b3V0Q29uZmlnKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBvbmx5IG9uY2UgYSBib29sZWFuIHZhbHVlIHdoZW5ldmVyXG4gICAqIHRoZSBnaXZlbiBlbGVtZW50IGhhcyBzaG93biBpbiB0aGUgdmlldyBwb3J0LlxuICAgKlxuICAgKiBUaGUgcmV0dXJuZWQgb2JzZXJ2YWJsZSB3aWxsIG9ubHkgZW1pdCB0aGUgZmlyc3QgdmFsdWUuIFRoZVxuICAgKiBvYnNlcnZhYmxlIG11c3QgYmUgY2xlYW5lZCB1cCBlaXRoZXIgd2F5LCBzaW5jZSB0aGUgdmFsdWUgbWlnaHQgbmV2ZXIgZW1pdDsgaXRcbiAgICogIGRlcGVuZHMgb24gd2hldGhlciB0aGUgZWxlbWVudCBhcHBlYXJzIGluIHRoZSB2aWV3IHBvcnQuXG4gICAqL1xuICBpc0ludGVyc2VjdGVkKFxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIG9wdGlvbnM/OiBJbnRlcnNlY3Rpb25PcHRpb25zXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmludGVyc2VjdHMoZWxlbWVudCwgb3B0aW9ucykucGlwZShmaXJzdCgodikgPT4gdiA9PT0gdHJ1ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGVuZXZlciB0aGUgZWxlbWVudCBpbnRlcnNlY3RzIHRoZSB2aWV3IHBvcnQuIEFuIG9wdGlvbmFsIG1hcmdpblxuICAgKiBpcyB1c2VkIHRvIGludGVyc2VjdHMgYmVmb3JlIHRoZSBlbGVtZW50IHNob3dzIHVwIGluIHRoZSB2aWV3cG9ydC5cbiAgICogQSB2YWx1ZSBpcyBlbWl0dGVkIGVhY2ggdGltZSB0aGUgZWxlbWVudCBpbnRlcnNlY3RzLlxuICAgKlxuICAgKiBUaGlzIGlzIHByaXZhdGUgZm9yIG5vdywgYnV0IGNvdWxkIGJlIGV4cG9zZWQgYXMgYSBwdWJsaWMgQVBJXG4gICAqIHRvIGludHJvZHVjZSBhZGRpdGlvbmFsIChjc3MpIHJlbmRlciBlZmZlY3RzIHRvIHRoZSBVSS5cbiAgICovXG4gIHByaXZhdGUgaW50ZXJzZWN0cyhcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBvcHRpb25zPzogSW50ZXJzZWN0aW9uT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBlbGVtZW50VmlzaWJsZSQgPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGNvbnN0IHJvb3RNYXJnaW4gPSB0aGlzLmdldFJvb3RNYXJnaW4ob3B0aW9ucyk7XG4gICAgICBjb25zdCBpbnRlcnNlY3RPcHRpb25zID0geyByb290TWFyZ2luIH07XG4gICAgICBjb25zdCBpbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGVudHJpZXMpO1xuICAgICAgfSwgaW50ZXJzZWN0T3B0aW9ucyk7XG4gICAgICBpbnRlcnNlY3Rpb25PYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaW50ZXJzZWN0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfTtcbiAgICB9KS5waXBlKFxuICAgICAgZmxhdE1hcCgoZW50cmllczogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVtdKSA9PiBlbnRyaWVzKSxcbiAgICAgIG1hcCgoZW50cnk6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRWaXNpYmxlJDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um9vdE1hcmdpbihvcHRpb25zOiBJbnRlcnNlY3Rpb25PcHRpb25zID0ge30pOiBzdHJpbmcge1xuICAgIGlmIChvcHRpb25zLnJvb3RNYXJnaW4pIHtcbiAgICAgIHJldHVybiBvcHRpb25zLnJvb3RNYXJnaW47XG4gICAgfVxuICAgIGNvbnN0IGxheW91dENvbmZpZyA9IHRoaXMuY29uZmlnIGFzIExheW91dENvbmZpZztcbiAgICBpZiAoXG4gICAgICBsYXlvdXRDb25maWcuZGVmZXJyZWRMb2FkaW5nICYmXG4gICAgICBsYXlvdXRDb25maWcuZGVmZXJyZWRMb2FkaW5nLmludGVyc2VjdGlvbk1hcmdpblxuICAgICkge1xuICAgICAgcmV0dXJuIGxheW91dENvbmZpZy5kZWZlcnJlZExvYWRpbmcuaW50ZXJzZWN0aW9uTWFyZ2luO1xuICAgIH1cbiAgfVxufVxuIl19