import { Injectable, isDevMode, RendererFactory2, } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { fromEvent, of } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export const QUALTRICS_EVENT_NAME = 'qsi_js_loaded';
/**
 * Service to integration Qualtrics.
 *
 * The integration observes the Qualtrics API, and when available, it runs the QSI API
 * to let Qualtrics evaluate the application.
 *
 * The service supports an additional _hook_ (`isDataLoaded()`) that can be used to load application
 * data before pulling the QSI API. This is beneficial in a single page application when additional
 * data is required before the Qualtrics _creatives_ run.
 *
 * This service also supports the creation of the Qualtrics deployment script. This is optional, as
 * the script can be added in alternatives ways.
 */
export class QualtricsLoaderService {
    constructor(winRef, rendererFactory) {
        var _a;
        this.winRef = winRef;
        this.rendererFactory = rendererFactory;
        /**
         * QSI load event that happens when the QSI JS file is loaded.
         */
        this.qsiLoaded$ = ((_a = this.winRef) === null || _a === void 0 ? void 0 : _a.nativeWindow) ? fromEvent(this.winRef.nativeWindow, QUALTRICS_EVENT_NAME)
            : of();
        /**
         * Emits the Qualtrics Site Intercept (QSI) JavaScript API whenever available.
         *
         * The API is emitted when the JavaScript resource holding this API is fully loaded.
         * The API is also stored locally in the service, in case it's required later on.
         */
        this.qsi$ = this.qsiLoaded$.pipe(switchMap(() => this.isDataLoaded()), map(() => { var _a; return (_a = this.winRef) === null || _a === void 0 ? void 0 : _a.nativeWindow['QSI']; }), filter((api) => Boolean(api)), tap((qsi) => (this.qsiApi = qsi)));
        this.initialize();
    }
    /**
     * Starts observing the Qualtrics integration. The integration is based on a
     * Qualtrics specific event (`qsi_js_loaded`). As soon as this events happens,
     * we run the API.
     */
    initialize() {
        this.qsi$.subscribe(() => this.run());
    }
    /**
     * Evaluates the Qualtrics project code for the application.
     *
     * In order to reload the evaluation in Qualtrics, the API requires to unload the API before
     * running it again. We don't do this by default, but offer a flag to conditionally unload the API.
     */
    run(reload = false) {
        var _a;
        if (!((_a = this.qsiApi) === null || _a === void 0 ? void 0 : _a.API)) {
            if (isDevMode()) {
                console.log('The QSI api is not available');
            }
            return;
        }
        if (reload) {
            // Removes any currently displaying creatives
            this.qsiApi.API.unload();
        }
        // Starts the intercept code evaluation right after loading the Site Intercept
        // code for any defined intercepts or creatives
        this.qsiApi.API.load().done(this.qsiApi.API.run());
    }
    /**
     * Adds the deployment script to the DOM.
     *
     * The script will not be added twice if it was loaded before. In that case, we use
     * the Qualtrics API directly to _unload_ and _run_ the project.
     */
    addScript(scriptSource) {
        if (this.hasScript(scriptSource)) {
            this.run(true);
        }
        else {
            const script = this.renderer.createElement('script');
            script.type = 'text/javascript';
            script.defer = true;
            script.src = scriptSource;
            this.renderer.appendChild(this.winRef.document.body, script);
        }
    }
    /**
     * This logic exist in order to let the client(s) add their own logic to wait for any kind of page data.
     * You can observe any data in this method.
     *
     * Defaults to true.
     */
    isDataLoaded() {
        return of(true);
    }
    /**
     * Indicates if the script is already added to the DOM.
     */
    hasScript(source) {
        return !!this.winRef.document.querySelector(`script[src="${source}"]`);
    }
    get renderer() {
        return this.rendererFactory.createRenderer(null, null);
    }
}
QualtricsLoaderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function QualtricsLoaderService_Factory() { return new QualtricsLoaderService(i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i0.RendererFactory2)); }, token: QualtricsLoaderService, providedIn: "root" });
QualtricsLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
QualtricsLoaderService.ctorParameters = () => [
    { type: WindowRef },
    { type: RendererFactory2 }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvbWlzYy9xdWFsdHJpY3MvcXVhbHRyaWNzLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUVULGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFN0QsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsZUFBZSxDQUFDO0FBRXBEOzs7Ozs7Ozs7Ozs7R0FZRztBQUlILE1BQU0sT0FBTyxzQkFBc0I7SUEwQmpDLFlBQ1ksTUFBaUIsRUFDakIsZUFBaUM7O1FBRGpDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBdEI3Qzs7V0FFRztRQUNLLGVBQVUsR0FBb0IsT0FBQSxJQUFJLENBQUMsTUFBTSwwQ0FBRSxZQUFZLEVBQzdELENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsb0JBQW9CLENBQUM7WUFDM0QsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRVQ7Ozs7O1dBS0c7UUFDTyxTQUFJLEdBQW9CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNwRCxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQ3BDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsd0JBQUMsSUFBSSxDQUFDLE1BQU0sMENBQUUsWUFBWSxDQUFDLEtBQUssSUFBQyxDQUFDLEVBQzNDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzdCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQ2xDLENBQUM7UUFNQSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxVQUFVO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSzs7UUFDMUIsSUFBSSxRQUFDLElBQUksQ0FBQyxNQUFNLDBDQUFFLEdBQUcsQ0FBQSxFQUFFO1lBQ3JCLElBQUksU0FBUyxFQUFFLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO2FBQzdDO1lBQ0QsT0FBTztTQUNSO1FBRUQsSUFBSSxNQUFNLEVBQUU7WUFDViw2Q0FBNkM7WUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDMUI7UUFFRCw4RUFBOEU7UUFDOUUsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFNBQVMsQ0FBQyxZQUFvQjtRQUM1QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQjthQUFNO1lBQ0wsTUFBTSxNQUFNLEdBQXNCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7WUFDaEMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDcEIsTUFBTSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzlEO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ08sWUFBWTtRQUNwQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQ7O09BRUc7SUFDTyxTQUFTLENBQUMsTUFBZTtRQUNqQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxJQUFjLFFBQVE7UUFDcEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztZQTFHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQXJCUSxTQUFTO1lBRmhCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIGlzRGV2TW9kZSxcbiAgUmVuZGVyZXIyLFxuICBSZW5kZXJlckZhY3RvcnkyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjb25zdCBRVUFMVFJJQ1NfRVZFTlRfTkFNRSA9ICdxc2lfanNfbG9hZGVkJztcblxuLyoqXG4gKiBTZXJ2aWNlIHRvIGludGVncmF0aW9uIFF1YWx0cmljcy5cbiAqXG4gKiBUaGUgaW50ZWdyYXRpb24gb2JzZXJ2ZXMgdGhlIFF1YWx0cmljcyBBUEksIGFuZCB3aGVuIGF2YWlsYWJsZSwgaXQgcnVucyB0aGUgUVNJIEFQSVxuICogdG8gbGV0IFF1YWx0cmljcyBldmFsdWF0ZSB0aGUgYXBwbGljYXRpb24uXG4gKlxuICogVGhlIHNlcnZpY2Ugc3VwcG9ydHMgYW4gYWRkaXRpb25hbCBfaG9va18gKGBpc0RhdGFMb2FkZWQoKWApIHRoYXQgY2FuIGJlIHVzZWQgdG8gbG9hZCBhcHBsaWNhdGlvblxuICogZGF0YSBiZWZvcmUgcHVsbGluZyB0aGUgUVNJIEFQSS4gVGhpcyBpcyBiZW5lZmljaWFsIGluIGEgc2luZ2xlIHBhZ2UgYXBwbGljYXRpb24gd2hlbiBhZGRpdGlvbmFsXG4gKiBkYXRhIGlzIHJlcXVpcmVkIGJlZm9yZSB0aGUgUXVhbHRyaWNzIF9jcmVhdGl2ZXNfIHJ1bi5cbiAqXG4gKiBUaGlzIHNlcnZpY2UgYWxzbyBzdXBwb3J0cyB0aGUgY3JlYXRpb24gb2YgdGhlIFF1YWx0cmljcyBkZXBsb3ltZW50IHNjcmlwdC4gVGhpcyBpcyBvcHRpb25hbCwgYXNcbiAqIHRoZSBzY3JpcHQgY2FuIGJlIGFkZGVkIGluIGFsdGVybmF0aXZlcyB3YXlzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUXVhbHRyaWNzTG9hZGVyU2VydmljZSB7XG4gIC8qKlxuICAgKiBSZWZlcmVuY2UgdG8gdGhlIFFTSSBBUEkuXG4gICAqL1xuICBwcm90ZWN0ZWQgcXNpQXBpOiBhbnk7XG5cbiAgLyoqXG4gICAqIFFTSSBsb2FkIGV2ZW50IHRoYXQgaGFwcGVucyB3aGVuIHRoZSBRU0kgSlMgZmlsZSBpcyBsb2FkZWQuXG4gICAqL1xuICBwcml2YXRlIHFzaUxvYWRlZCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMud2luUmVmPy5uYXRpdmVXaW5kb3dcbiAgICA/IGZyb21FdmVudCh0aGlzLndpblJlZi5uYXRpdmVXaW5kb3csIFFVQUxUUklDU19FVkVOVF9OQU1FKVxuICAgIDogb2YoKTtcblxuICAvKipcbiAgICogRW1pdHMgdGhlIFF1YWx0cmljcyBTaXRlIEludGVyY2VwdCAoUVNJKSBKYXZhU2NyaXB0IEFQSSB3aGVuZXZlciBhdmFpbGFibGUuXG4gICAqXG4gICAqIFRoZSBBUEkgaXMgZW1pdHRlZCB3aGVuIHRoZSBKYXZhU2NyaXB0IHJlc291cmNlIGhvbGRpbmcgdGhpcyBBUEkgaXMgZnVsbHkgbG9hZGVkLlxuICAgKiBUaGUgQVBJIGlzIGFsc28gc3RvcmVkIGxvY2FsbHkgaW4gdGhlIHNlcnZpY2UsIGluIGNhc2UgaXQncyByZXF1aXJlZCBsYXRlciBvbi5cbiAgICovXG4gIHByb3RlY3RlZCBxc2kkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLnFzaUxvYWRlZCQucGlwZShcbiAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5pc0RhdGFMb2FkZWQoKSksXG4gICAgbWFwKCgpID0+IHRoaXMud2luUmVmPy5uYXRpdmVXaW5kb3dbJ1FTSSddKSxcbiAgICBmaWx0ZXIoKGFwaSkgPT4gQm9vbGVhbihhcGkpKSxcbiAgICB0YXAoKHFzaSkgPT4gKHRoaXMucXNpQXBpID0gcXNpKSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MlxuICApIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgb2JzZXJ2aW5nIHRoZSBRdWFsdHJpY3MgaW50ZWdyYXRpb24uIFRoZSBpbnRlZ3JhdGlvbiBpcyBiYXNlZCBvbiBhXG4gICAqIFF1YWx0cmljcyBzcGVjaWZpYyBldmVudCAoYHFzaV9qc19sb2FkZWRgKS4gQXMgc29vbiBhcyB0aGlzIGV2ZW50cyBoYXBwZW5zLFxuICAgKiB3ZSBydW4gdGhlIEFQSS5cbiAgICovXG4gIHByb3RlY3RlZCBpbml0aWFsaXplKCkge1xuICAgIHRoaXMucXNpJC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5ydW4oKSk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGVzIHRoZSBRdWFsdHJpY3MgcHJvamVjdCBjb2RlIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAqXG4gICAqIEluIG9yZGVyIHRvIHJlbG9hZCB0aGUgZXZhbHVhdGlvbiBpbiBRdWFsdHJpY3MsIHRoZSBBUEkgcmVxdWlyZXMgdG8gdW5sb2FkIHRoZSBBUEkgYmVmb3JlXG4gICAqIHJ1bm5pbmcgaXQgYWdhaW4uIFdlIGRvbid0IGRvIHRoaXMgYnkgZGVmYXVsdCwgYnV0IG9mZmVyIGEgZmxhZyB0byBjb25kaXRpb25hbGx5IHVubG9hZCB0aGUgQVBJLlxuICAgKi9cbiAgcHJvdGVjdGVkIHJ1bihyZWxvYWQgPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5xc2lBcGk/LkFQSSkge1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGUgUVNJIGFwaSBpcyBub3QgYXZhaWxhYmxlJyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHJlbG9hZCkge1xuICAgICAgLy8gUmVtb3ZlcyBhbnkgY3VycmVudGx5IGRpc3BsYXlpbmcgY3JlYXRpdmVzXG4gICAgICB0aGlzLnFzaUFwaS5BUEkudW5sb2FkKCk7XG4gICAgfVxuXG4gICAgLy8gU3RhcnRzIHRoZSBpbnRlcmNlcHQgY29kZSBldmFsdWF0aW9uIHJpZ2h0IGFmdGVyIGxvYWRpbmcgdGhlIFNpdGUgSW50ZXJjZXB0XG4gICAgLy8gY29kZSBmb3IgYW55IGRlZmluZWQgaW50ZXJjZXB0cyBvciBjcmVhdGl2ZXNcbiAgICB0aGlzLnFzaUFwaS5BUEkubG9hZCgpLmRvbmUodGhpcy5xc2lBcGkuQVBJLnJ1bigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBkZXBsb3ltZW50IHNjcmlwdCB0byB0aGUgRE9NLlxuICAgKlxuICAgKiBUaGUgc2NyaXB0IHdpbGwgbm90IGJlIGFkZGVkIHR3aWNlIGlmIGl0IHdhcyBsb2FkZWQgYmVmb3JlLiBJbiB0aGF0IGNhc2UsIHdlIHVzZVxuICAgKiB0aGUgUXVhbHRyaWNzIEFQSSBkaXJlY3RseSB0byBfdW5sb2FkXyBhbmQgX3J1bl8gdGhlIHByb2plY3QuXG4gICAqL1xuICBhZGRTY3JpcHQoc2NyaXB0U291cmNlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5oYXNTY3JpcHQoc2NyaXB0U291cmNlKSkge1xuICAgICAgdGhpcy5ydW4odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNjcmlwdDogSFRNTFNjcmlwdEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gICAgICBzY3JpcHQuc3JjID0gc2NyaXB0U291cmNlO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LCBzY3JpcHQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGxvZ2ljIGV4aXN0IGluIG9yZGVyIHRvIGxldCB0aGUgY2xpZW50KHMpIGFkZCB0aGVpciBvd24gbG9naWMgdG8gd2FpdCBmb3IgYW55IGtpbmQgb2YgcGFnZSBkYXRhLlxuICAgKiBZb3UgY2FuIG9ic2VydmUgYW55IGRhdGEgaW4gdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIHRydWUuXG4gICAqL1xuICBwcm90ZWN0ZWQgaXNEYXRhTG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBvZih0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHNjcmlwdCBpcyBhbHJlYWR5IGFkZGVkIHRvIHRoZSBET00uXG4gICAqL1xuICBwcm90ZWN0ZWQgaGFzU2NyaXB0KHNvdXJjZT86IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMud2luUmVmLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmM9XCIke3NvdXJjZX1cIl1gKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgcmVuZGVyZXIoKTogUmVuZGVyZXIyIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gIH1cbn1cbiJdfQ==