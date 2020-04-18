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
    intersects(element, options = {}) {
        const elementVisible$ = new Observable((observer) => {
            const rootMargin = this.getRootMargin(options);
            const intersectOptions = { rootMargin, thresholds: options.threshold };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJzZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbG9hZGluZy9pbnRlcnNlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBR3ZEOzs7O0dBSUc7QUFJSCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQUM5QixZQUFzQixNQUFvQjtRQUFwQixXQUFNLEdBQU4sTUFBTSxDQUFjO0lBQUcsQ0FBQztJQUU5Qzs7Ozs7OztPQU9HO0lBQ0gsYUFBYSxDQUNYLE9BQW9CLEVBQ3BCLE9BQTZCO1FBRTdCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSyxVQUFVLENBQ2hCLE9BQW9CLEVBQ3BCLFVBQStCLEVBQUU7UUFFakMsTUFBTSxlQUFlLEdBQUcsSUFBSSxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNsRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9DLE1BQU0sZ0JBQWdCLEdBQUcsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN2RSxNQUFNLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDaEUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QixDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUNyQixvQkFBb0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1Ysb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNMLE9BQU8sQ0FBQyxDQUFDLE9BQW9DLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUMxRCxHQUFHLENBQUMsQ0FBQyxLQUFnQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQy9ELG9CQUFvQixFQUFFLENBQ3ZCLENBQUM7UUFFRixPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBRU8sYUFBYSxDQUFDLFVBQStCLEVBQUU7UUFDckQsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3RCLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQztTQUMzQjtRQUNELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFzQixDQUFDO1FBQ2pELElBQ0UsWUFBWSxDQUFDLGVBQWU7WUFDNUIsWUFBWSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFDL0M7WUFDQSxPQUFPLFlBQVksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUM7U0FDeEQ7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUE1RCtCLFlBQVk7OztBQUQvQixtQkFBbUI7SUFIL0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLG1CQUFtQixDQTZEL0I7U0E3RFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpcnN0LCBmbGF0TWFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMYXlvdXRDb25maWcgfSBmcm9tICcuLi9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBJbnRlcnNlY3Rpb25PcHRpb25zIH0gZnJvbSAnLi9pbnRlcnNlY3Rpb24ubW9kZWwnO1xuXG4vKipcbiAqIFRoZSBJbnRlcnNlY3Rpb25TZXJ2aWNlIHVzZXMgdGhlIG5hdGl2ZSBJbnRlcnNlY3Rpb25PYnNlcnZlciAodjIpLCB3aGljaFxuICogY2FuIGJlIHVzZWQgdG8gaW1wbGVtZW50IHByZS1sb2FkaW5nIGFuZCBkZWZlcnJlZCBsb2FkaW5nIG9mIERPTSBjb250ZW50LlxuICpcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEludGVyc2VjdGlvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBMYXlvdXRDb25maWcpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIG9ubHkgb25jZSBhIGJvb2xlYW4gdmFsdWUgd2hlbmV2ZXJcbiAgICogdGhlIGdpdmVuIGVsZW1lbnQgaGFzIHNob3duIGluIHRoZSB2aWV3IHBvcnQuXG4gICAqXG4gICAqIFRoZSByZXR1cm5lZCBvYnNlcnZhYmxlIHdpbGwgb25seSBlbWl0IHRoZSBmaXJzdCB2YWx1ZS4gVGhlXG4gICAqIG9ic2VydmFibGUgbXVzdCBiZSBjbGVhbmVkIHVwIGVpdGhlciB3YXksIHNpbmNlIHRoZSB2YWx1ZSBtaWdodCBuZXZlciBlbWl0OyBpdFxuICAgKiAgZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBlbGVtZW50IGFwcGVhcnMgaW4gdGhlIHZpZXcgcG9ydC5cbiAgICovXG4gIGlzSW50ZXJzZWN0ZWQoXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgb3B0aW9ucz86IEludGVyc2VjdGlvbk9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJzZWN0cyhlbGVtZW50LCBvcHRpb25zKS5waXBlKGZpcnN0KCh2KSA9PiB2ID09PSB0cnVlKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZW5ldmVyIHRoZSBlbGVtZW50IGludGVyc2VjdHMgdGhlIHZpZXcgcG9ydC4gQW4gb3B0aW9uYWwgbWFyZ2luXG4gICAqIGlzIHVzZWQgdG8gaW50ZXJzZWN0cyBiZWZvcmUgdGhlIGVsZW1lbnQgc2hvd3MgdXAgaW4gdGhlIHZpZXdwb3J0LlxuICAgKiBBIHZhbHVlIGlzIGVtaXR0ZWQgZWFjaCB0aW1lIHRoZSBlbGVtZW50IGludGVyc2VjdHMuXG4gICAqXG4gICAqIFRoaXMgaXMgcHJpdmF0ZSBmb3Igbm93LCBidXQgY291bGQgYmUgZXhwb3NlZCBhcyBhIHB1YmxpYyBBUElcbiAgICogdG8gaW50cm9kdWNlIGFkZGl0aW9uYWwgKGNzcykgcmVuZGVyIGVmZmVjdHMgdG8gdGhlIFVJLlxuICAgKi9cbiAgcHJpdmF0ZSBpbnRlcnNlY3RzKFxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIG9wdGlvbnM6IEludGVyc2VjdGlvbk9wdGlvbnMgPSB7fVxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBlbGVtZW50VmlzaWJsZSQgPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGNvbnN0IHJvb3RNYXJnaW4gPSB0aGlzLmdldFJvb3RNYXJnaW4ob3B0aW9ucyk7XG4gICAgICBjb25zdCBpbnRlcnNlY3RPcHRpb25zID0geyByb290TWFyZ2luLCB0aHJlc2hvbGRzOiBvcHRpb25zLnRocmVzaG9sZCB9O1xuICAgICAgY29uc3QgaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChlbnRyaWVzKTtcbiAgICAgIH0sIGludGVyc2VjdE9wdGlvbnMpO1xuICAgICAgaW50ZXJzZWN0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGludGVyc2VjdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH07XG4gICAgfSkucGlwZShcbiAgICAgIGZsYXRNYXAoKGVudHJpZXM6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlbXSkgPT4gZW50cmllcyksXG4gICAgICBtYXAoKGVudHJ5OiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KSA9PiBlbnRyeS5pc0ludGVyc2VjdGluZyksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcblxuICAgIHJldHVybiBlbGVtZW50VmlzaWJsZSQ7XG4gIH1cblxuICBwcml2YXRlIGdldFJvb3RNYXJnaW4ob3B0aW9uczogSW50ZXJzZWN0aW9uT3B0aW9ucyA9IHt9KTogc3RyaW5nIHtcbiAgICBpZiAob3B0aW9ucy5yb290TWFyZ2luKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5yb290TWFyZ2luO1xuICAgIH1cbiAgICBjb25zdCBsYXlvdXRDb25maWcgPSB0aGlzLmNvbmZpZyBhcyBMYXlvdXRDb25maWc7XG4gICAgaWYgKFxuICAgICAgbGF5b3V0Q29uZmlnLmRlZmVycmVkTG9hZGluZyAmJlxuICAgICAgbGF5b3V0Q29uZmlnLmRlZmVycmVkTG9hZGluZy5pbnRlcnNlY3Rpb25NYXJnaW5cbiAgICApIHtcbiAgICAgIHJldHVybiBsYXlvdXRDb25maWcuZGVmZXJyZWRMb2FkaW5nLmludGVyc2VjdGlvbk1hcmdpbjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==