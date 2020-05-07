import { __decorate } from "tslib";
import { Injectable, isDevMode, Renderer2, RendererFactory2, } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { fromEvent, of } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export var QUALTRICS_EVENT_NAME = 'qsi_js_loaded';
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
var QualtricsLoaderService = /** @class */ (function () {
    function QualtricsLoaderService(winRef, rendererFactory) {
        var _this = this;
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
        this.qsi$ = this.qsiLoaded$.pipe(switchMap(function () { return _this.isDataLoaded(); }), map(function () { var _a; return (_a = _this.winRef) === null || _a === void 0 ? void 0 : _a.nativeWindow['QSI']; }), filter(function (api) { return Boolean(api); }), tap(function (qsi) { return (_this.qsiApi = qsi); }));
        this.initialize();
    }
    /**
     * Starts observing the Qualtrics integration. The integration is based on a
     * Qualtrics specific event (`qsi_js_loaded`). As soon as this events happens,
     * we run the API.
     */
    QualtricsLoaderService.prototype.initialize = function () {
        var _this = this;
        this.qsi$.subscribe(function () { return _this.run(); });
    };
    /**
     * Evaluates the Qualtrics project code for the application.
     *
     * In order to reload the evaluation in Qualtrics, the API requires to unload the API before
     * running it again. We don't do this by default, but offer a flag to conditionally unload the API.
     */
    QualtricsLoaderService.prototype.run = function (reload) {
        if (reload === void 0) { reload = false; }
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
    };
    /**
     * Adds the deployment script to the DOM.
     *
     * The script will not be added twice if it was loaded before. In that case, we use
     * the Qualtrics API directly to _unload_ and _run_ the project.
     */
    QualtricsLoaderService.prototype.addScript = function (scriptSource) {
        if (this.hasScript(scriptSource)) {
            this.run(true);
        }
        else {
            var script = this.renderer.createElement('script');
            script.type = 'text/javascript';
            script.defer = true;
            script.src = scriptSource;
            this.renderer.appendChild(this.winRef.document.body, script);
        }
    };
    /**
     * This logic exist in order to let the client(s) add their own logic to wait for any kind of page data.
     * You can observe any data in this method.
     *
     * Defaults to true.
     */
    QualtricsLoaderService.prototype.isDataLoaded = function () {
        return of(true);
    };
    /**
     * Indicates if the script is already added to the DOM.
     */
    QualtricsLoaderService.prototype.hasScript = function (source) {
        return !!this.winRef.document.querySelector("script[src=\"" + source + "\"]");
    };
    Object.defineProperty(QualtricsLoaderService.prototype, "renderer", {
        get: function () {
            return this.rendererFactory.createRenderer(null, null);
        },
        enumerable: true,
        configurable: true
    });
    QualtricsLoaderService.ctorParameters = function () { return [
        { type: WindowRef },
        { type: RendererFactory2 }
    ]; };
    QualtricsLoaderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function QualtricsLoaderService_Factory() { return new QualtricsLoaderService(i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i0.RendererFactory2)); }, token: QualtricsLoaderService, providedIn: "root" });
    QualtricsLoaderService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], QualtricsLoaderService);
    return QualtricsLoaderService;
}());
export { QualtricsLoaderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbWlzYy9xdWFsdHJpY3MvcXVhbHRyaWNzLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxTQUFTLEVBQ1QsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsU0FBUyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUU3RCxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyxlQUFlLENBQUM7QUFFcEQ7Ozs7Ozs7Ozs7OztHQVlHO0FBSUg7SUEwQkUsZ0NBQ1ksTUFBaUIsRUFDakIsZUFBaUM7UUFGN0MsaUJBS0M7O1FBSlcsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUF0QjdDOztXQUVHO1FBQ0ssZUFBVSxHQUFvQixPQUFBLElBQUksQ0FBQyxNQUFNLDBDQUFFLFlBQVksRUFDN0QsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQztZQUMzRCxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFVDs7Ozs7V0FLRztRQUNPLFNBQUksR0FBb0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3BELFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksRUFBRSxFQUFuQixDQUFtQixDQUFDLEVBQ3BDLEdBQUcsQ0FBQyxtQ0FBTSxLQUFJLENBQUMsTUFBTSwwQ0FBRSxZQUFZLENBQUMsS0FBSyxJQUFDLENBQUMsRUFDM0MsTUFBTSxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFaLENBQVksQ0FBQyxFQUM3QixHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FDbEMsQ0FBQztRQU1BLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLDJDQUFVLEdBQXBCO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEdBQUcsRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLG9DQUFHLEdBQWIsVUFBYyxNQUFjO1FBQWQsdUJBQUEsRUFBQSxjQUFjOztRQUMxQixJQUFJLFFBQUMsSUFBSSxDQUFDLE1BQU0sMENBQUUsR0FBRyxDQUFBLEVBQUU7WUFDckIsSUFBSSxTQUFTLEVBQUUsRUFBRTtnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7YUFDN0M7WUFDRCxPQUFPO1NBQ1I7UUFFRCxJQUFJLE1BQU0sRUFBRTtZQUNWLDZDQUE2QztZQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUMxQjtRQUVELDhFQUE4RTtRQUM5RSwrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsMENBQVMsR0FBVCxVQUFVLFlBQW9CO1FBQzVCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO2FBQU07WUFDTCxJQUFNLE1BQU0sR0FBc0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEUsTUFBTSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztZQUNoQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNwQixNQUFNLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQztZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyw2Q0FBWSxHQUF0QjtRQUNFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNPLDBDQUFTLEdBQW5CLFVBQW9CLE1BQWU7UUFDakMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFlLE1BQU0sUUFBSSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELHNCQUFjLDRDQUFRO2FBQXRCO1lBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekQsQ0FBQzs7O09BQUE7O2dCQTVFbUIsU0FBUztnQkFDQSxnQkFBZ0I7OztJQTVCbEMsc0JBQXNCO1FBSGxDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxzQkFBc0IsQ0F3R2xDO2lDQXBJRDtDQW9JQyxBQXhHRCxJQXdHQztTQXhHWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBpc0Rldk1vZGUsXG4gIFJlbmRlcmVyMixcbiAgUmVuZGVyZXJGYWN0b3J5Mixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY29uc3QgUVVBTFRSSUNTX0VWRU5UX05BTUUgPSAncXNpX2pzX2xvYWRlZCc7XG5cbi8qKlxuICogU2VydmljZSB0byBpbnRlZ3JhdGlvbiBRdWFsdHJpY3MuXG4gKlxuICogVGhlIGludGVncmF0aW9uIG9ic2VydmVzIHRoZSBRdWFsdHJpY3MgQVBJLCBhbmQgd2hlbiBhdmFpbGFibGUsIGl0IHJ1bnMgdGhlIFFTSSBBUElcbiAqIHRvIGxldCBRdWFsdHJpY3MgZXZhbHVhdGUgdGhlIGFwcGxpY2F0aW9uLlxuICpcbiAqIFRoZSBzZXJ2aWNlIHN1cHBvcnRzIGFuIGFkZGl0aW9uYWwgX2hvb2tfIChgaXNEYXRhTG9hZGVkKClgKSB0aGF0IGNhbiBiZSB1c2VkIHRvIGxvYWQgYXBwbGljYXRpb25cbiAqIGRhdGEgYmVmb3JlIHB1bGxpbmcgdGhlIFFTSSBBUEkuIFRoaXMgaXMgYmVuZWZpY2lhbCBpbiBhIHNpbmdsZSBwYWdlIGFwcGxpY2F0aW9uIHdoZW4gYWRkaXRpb25hbFxuICogZGF0YSBpcyByZXF1aXJlZCBiZWZvcmUgdGhlIFF1YWx0cmljcyBfY3JlYXRpdmVzXyBydW4uXG4gKlxuICogVGhpcyBzZXJ2aWNlIGFsc28gc3VwcG9ydHMgdGhlIGNyZWF0aW9uIG9mIHRoZSBRdWFsdHJpY3MgZGVwbG95bWVudCBzY3JpcHQuIFRoaXMgaXMgb3B0aW9uYWwsIGFzXG4gKiB0aGUgc2NyaXB0IGNhbiBiZSBhZGRlZCBpbiBhbHRlcm5hdGl2ZXMgd2F5cy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFF1YWx0cmljc0xvYWRlclNlcnZpY2Uge1xuICAvKipcbiAgICogUmVmZXJlbmNlIHRvIHRoZSBRU0kgQVBJLlxuICAgKi9cbiAgcHJvdGVjdGVkIHFzaUFwaTogYW55O1xuXG4gIC8qKlxuICAgKiBRU0kgbG9hZCBldmVudCB0aGF0IGhhcHBlbnMgd2hlbiB0aGUgUVNJIEpTIGZpbGUgaXMgbG9hZGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBxc2lMb2FkZWQkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLndpblJlZj8ubmF0aXZlV2luZG93XG4gICAgPyBmcm9tRXZlbnQodGhpcy53aW5SZWYubmF0aXZlV2luZG93LCBRVUFMVFJJQ1NfRVZFTlRfTkFNRSlcbiAgICA6IG9mKCk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHRoZSBRdWFsdHJpY3MgU2l0ZSBJbnRlcmNlcHQgKFFTSSkgSmF2YVNjcmlwdCBBUEkgd2hlbmV2ZXIgYXZhaWxhYmxlLlxuICAgKlxuICAgKiBUaGUgQVBJIGlzIGVtaXR0ZWQgd2hlbiB0aGUgSmF2YVNjcmlwdCByZXNvdXJjZSBob2xkaW5nIHRoaXMgQVBJIGlzIGZ1bGx5IGxvYWRlZC5cbiAgICogVGhlIEFQSSBpcyBhbHNvIHN0b3JlZCBsb2NhbGx5IGluIHRoZSBzZXJ2aWNlLCBpbiBjYXNlIGl0J3MgcmVxdWlyZWQgbGF0ZXIgb24uXG4gICAqL1xuICBwcm90ZWN0ZWQgcXNpJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5xc2lMb2FkZWQkLnBpcGUoXG4gICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuaXNEYXRhTG9hZGVkKCkpLFxuICAgIG1hcCgoKSA9PiB0aGlzLndpblJlZj8ubmF0aXZlV2luZG93WydRU0knXSksXG4gICAgZmlsdGVyKChhcGkpID0+IEJvb2xlYW4oYXBpKSksXG4gICAgdGFwKChxc2kpID0+ICh0aGlzLnFzaUFwaSA9IHFzaSkpXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTJcbiAgKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIG9ic2VydmluZyB0aGUgUXVhbHRyaWNzIGludGVncmF0aW9uLiBUaGUgaW50ZWdyYXRpb24gaXMgYmFzZWQgb24gYVxuICAgKiBRdWFsdHJpY3Mgc3BlY2lmaWMgZXZlbnQgKGBxc2lfanNfbG9hZGVkYCkuIEFzIHNvb24gYXMgdGhpcyBldmVudHMgaGFwcGVucyxcbiAgICogd2UgcnVuIHRoZSBBUEkuXG4gICAqL1xuICBwcm90ZWN0ZWQgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLnFzaSQuc3Vic2NyaWJlKCgpID0+IHRoaXMucnVuKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlcyB0aGUgUXVhbHRyaWNzIHByb2plY3QgY29kZSBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgKlxuICAgKiBJbiBvcmRlciB0byByZWxvYWQgdGhlIGV2YWx1YXRpb24gaW4gUXVhbHRyaWNzLCB0aGUgQVBJIHJlcXVpcmVzIHRvIHVubG9hZCB0aGUgQVBJIGJlZm9yZVxuICAgKiBydW5uaW5nIGl0IGFnYWluLiBXZSBkb24ndCBkbyB0aGlzIGJ5IGRlZmF1bHQsIGJ1dCBvZmZlciBhIGZsYWcgdG8gY29uZGl0aW9uYWxseSB1bmxvYWQgdGhlIEFQSS5cbiAgICovXG4gIHByb3RlY3RlZCBydW4ocmVsb2FkID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucXNpQXBpPy5BUEkpIHtcbiAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnVGhlIFFTSSBhcGkgaXMgbm90IGF2YWlsYWJsZScpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChyZWxvYWQpIHtcbiAgICAgIC8vIFJlbW92ZXMgYW55IGN1cnJlbnRseSBkaXNwbGF5aW5nIGNyZWF0aXZlc1xuICAgICAgdGhpcy5xc2lBcGkuQVBJLnVubG9hZCgpO1xuICAgIH1cblxuICAgIC8vIFN0YXJ0cyB0aGUgaW50ZXJjZXB0IGNvZGUgZXZhbHVhdGlvbiByaWdodCBhZnRlciBsb2FkaW5nIHRoZSBTaXRlIEludGVyY2VwdFxuICAgIC8vIGNvZGUgZm9yIGFueSBkZWZpbmVkIGludGVyY2VwdHMgb3IgY3JlYXRpdmVzXG4gICAgdGhpcy5xc2lBcGkuQVBJLmxvYWQoKS5kb25lKHRoaXMucXNpQXBpLkFQSS5ydW4oKSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgZGVwbG95bWVudCBzY3JpcHQgdG8gdGhlIERPTS5cbiAgICpcbiAgICogVGhlIHNjcmlwdCB3aWxsIG5vdCBiZSBhZGRlZCB0d2ljZSBpZiBpdCB3YXMgbG9hZGVkIGJlZm9yZS4gSW4gdGhhdCBjYXNlLCB3ZSB1c2VcbiAgICogdGhlIFF1YWx0cmljcyBBUEkgZGlyZWN0bHkgdG8gX3VubG9hZF8gYW5kIF9ydW5fIHRoZSBwcm9qZWN0LlxuICAgKi9cbiAgYWRkU2NyaXB0KHNjcmlwdFNvdXJjZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaGFzU2NyaXB0KHNjcmlwdFNvdXJjZSkpIHtcbiAgICAgIHRoaXMucnVuKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzY3JpcHQ6IEhUTUxTY3JpcHRFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICAgICAgc2NyaXB0LnNyYyA9IHNjcmlwdFNvdXJjZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keSwgc2NyaXB0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBsb2dpYyBleGlzdCBpbiBvcmRlciB0byBsZXQgdGhlIGNsaWVudChzKSBhZGQgdGhlaXIgb3duIGxvZ2ljIHRvIHdhaXQgZm9yIGFueSBraW5kIG9mIHBhZ2UgZGF0YS5cbiAgICogWW91IGNhbiBvYnNlcnZlIGFueSBkYXRhIGluIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGlzRGF0YUxvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gb2YodHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRoZSBzY3JpcHQgaXMgYWxyZWFkeSBhZGRlZCB0byB0aGUgRE9NLlxuICAgKi9cbiAgcHJvdGVjdGVkIGhhc1NjcmlwdChzb3VyY2U/OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLndpblJlZi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjPVwiJHtzb3VyY2V9XCJdYCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHJlbmRlcmVyKCk6IFJlbmRlcmVyMiB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG59XG4iXX0=