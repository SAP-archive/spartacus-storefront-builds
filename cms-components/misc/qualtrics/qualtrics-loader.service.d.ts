import { Renderer2, RendererFactory2 } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare const QUALTRICS_EVENT_NAME = "qsi_js_loaded";
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
export declare class QualtricsLoaderService {
    protected winRef: WindowRef;
    protected rendererFactory: RendererFactory2;
    /**
     * Reference to the QSI API.
     */
    protected qsiApi: any;
    /**
     * QSI load event that happens when the QSI JS file is loaded.
     */
    private qsiLoaded$;
    /**
     * Emits the Qualtrics Site Intercept (QSI) JavaScript API whenever available.
     *
     * The API is emitted when the JavaScript resource holding this API is fully loaded.
     * The API is also stored locally in the service, in case it's required later on.
     */
    protected qsi$: Observable<any>;
    constructor(winRef: WindowRef, rendererFactory: RendererFactory2);
    /**
     * Starts observing the Qualtrics integration. The integration is based on a
     * Qualtrics specific event (`qsi_js_loaded`). As soon as this events happens,
     * we run the API.
     */
    protected initialize(): void;
    /**
     * Evaluates the Qualtrics project code for the application.
     *
     * In order to reload the evaluation in Qualtrics, the API requires to unload the API before
     * running it again. We don't do this by default, but offer a flag to conditionally unload the API.
     */
    protected run(reload?: boolean): void;
    /**
     * Adds the deployment script to the DOM.
     *
     * The script will not be added twice if it was loaded before. In that case, we use
     * the Qualtrics API directly to _unload_ and _run_ the project.
     */
    addScript(scriptSource: string): void;
    /**
     * This logic exist in order to let the client(s) add their own logic to wait for any kind of page data.
     * You can observe any data in this method.
     *
     * Defaults to true.
     */
    protected isDataLoaded(): Observable<boolean>;
    /**
     * Indicates if the script is already added to the DOM.
     */
    protected hasScript(source?: string): boolean;
    protected get renderer(): Renderer2;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<QualtricsLoaderService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLWxvYWRlci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInF1YWx0cmljcy1sb2FkZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlFQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IFFVQUxUUklDU19FVkVOVF9OQU1FID0gXCJxc2lfanNfbG9hZGVkXCI7XG4vKipcbiAqIFNlcnZpY2UgdG8gaW50ZWdyYXRpb24gUXVhbHRyaWNzLlxuICpcbiAqIFRoZSBpbnRlZ3JhdGlvbiBvYnNlcnZlcyB0aGUgUXVhbHRyaWNzIEFQSSwgYW5kIHdoZW4gYXZhaWxhYmxlLCBpdCBydW5zIHRoZSBRU0kgQVBJXG4gKiB0byBsZXQgUXVhbHRyaWNzIGV2YWx1YXRlIHRoZSBhcHBsaWNhdGlvbi5cbiAqXG4gKiBUaGUgc2VydmljZSBzdXBwb3J0cyBhbiBhZGRpdGlvbmFsIF9ob29rXyAoYGlzRGF0YUxvYWRlZCgpYCkgdGhhdCBjYW4gYmUgdXNlZCB0byBsb2FkIGFwcGxpY2F0aW9uXG4gKiBkYXRhIGJlZm9yZSBwdWxsaW5nIHRoZSBRU0kgQVBJLiBUaGlzIGlzIGJlbmVmaWNpYWwgaW4gYSBzaW5nbGUgcGFnZSBhcHBsaWNhdGlvbiB3aGVuIGFkZGl0aW9uYWxcbiAqIGRhdGEgaXMgcmVxdWlyZWQgYmVmb3JlIHRoZSBRdWFsdHJpY3MgX2NyZWF0aXZlc18gcnVuLlxuICpcbiAqIFRoaXMgc2VydmljZSBhbHNvIHN1cHBvcnRzIHRoZSBjcmVhdGlvbiBvZiB0aGUgUXVhbHRyaWNzIGRlcGxveW1lbnQgc2NyaXB0LiBUaGlzIGlzIG9wdGlvbmFsLCBhc1xuICogdGhlIHNjcmlwdCBjYW4gYmUgYWRkZWQgaW4gYWx0ZXJuYXRpdmVzIHdheXMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFF1YWx0cmljc0xvYWRlclNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZjtcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyO1xuICAgIC8qKlxuICAgICAqIFJlZmVyZW5jZSB0byB0aGUgUVNJIEFQSS5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcXNpQXBpOiBhbnk7XG4gICAgLyoqXG4gICAgICogUVNJIGxvYWQgZXZlbnQgdGhhdCBoYXBwZW5zIHdoZW4gdGhlIFFTSSBKUyBmaWxlIGlzIGxvYWRlZC5cbiAgICAgKi9cbiAgICBwcml2YXRlIHFzaUxvYWRlZCQ7XG4gICAgLyoqXG4gICAgICogRW1pdHMgdGhlIFF1YWx0cmljcyBTaXRlIEludGVyY2VwdCAoUVNJKSBKYXZhU2NyaXB0IEFQSSB3aGVuZXZlciBhdmFpbGFibGUuXG4gICAgICpcbiAgICAgKiBUaGUgQVBJIGlzIGVtaXR0ZWQgd2hlbiB0aGUgSmF2YVNjcmlwdCByZXNvdXJjZSBob2xkaW5nIHRoaXMgQVBJIGlzIGZ1bGx5IGxvYWRlZC5cbiAgICAgKiBUaGUgQVBJIGlzIGFsc28gc3RvcmVkIGxvY2FsbHkgaW4gdGhlIHNlcnZpY2UsIGluIGNhc2UgaXQncyByZXF1aXJlZCBsYXRlciBvbi5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcXNpJDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGNvbnN0cnVjdG9yKHdpblJlZjogV2luZG93UmVmLCByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIpO1xuICAgIC8qKlxuICAgICAqIFN0YXJ0cyBvYnNlcnZpbmcgdGhlIFF1YWx0cmljcyBpbnRlZ3JhdGlvbi4gVGhlIGludGVncmF0aW9uIGlzIGJhc2VkIG9uIGFcbiAgICAgKiBRdWFsdHJpY3Mgc3BlY2lmaWMgZXZlbnQgKGBxc2lfanNfbG9hZGVkYCkuIEFzIHNvb24gYXMgdGhpcyBldmVudHMgaGFwcGVucyxcbiAgICAgKiB3ZSBydW4gdGhlIEFQSS5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdGlhbGl6ZSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEV2YWx1YXRlcyB0aGUgUXVhbHRyaWNzIHByb2plY3QgY29kZSBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqXG4gICAgICogSW4gb3JkZXIgdG8gcmVsb2FkIHRoZSBldmFsdWF0aW9uIGluIFF1YWx0cmljcywgdGhlIEFQSSByZXF1aXJlcyB0byB1bmxvYWQgdGhlIEFQSSBiZWZvcmVcbiAgICAgKiBydW5uaW5nIGl0IGFnYWluLiBXZSBkb24ndCBkbyB0aGlzIGJ5IGRlZmF1bHQsIGJ1dCBvZmZlciBhIGZsYWcgdG8gY29uZGl0aW9uYWxseSB1bmxvYWQgdGhlIEFQSS5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcnVuKHJlbG9hZD86IGJvb2xlYW4pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGRlcGxveW1lbnQgc2NyaXB0IHRvIHRoZSBET00uXG4gICAgICpcbiAgICAgKiBUaGUgc2NyaXB0IHdpbGwgbm90IGJlIGFkZGVkIHR3aWNlIGlmIGl0IHdhcyBsb2FkZWQgYmVmb3JlLiBJbiB0aGF0IGNhc2UsIHdlIHVzZVxuICAgICAqIHRoZSBRdWFsdHJpY3MgQVBJIGRpcmVjdGx5IHRvIF91bmxvYWRfIGFuZCBfcnVuXyB0aGUgcHJvamVjdC5cbiAgICAgKi9cbiAgICBhZGRTY3JpcHQoc2NyaXB0U291cmNlOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFRoaXMgbG9naWMgZXhpc3QgaW4gb3JkZXIgdG8gbGV0IHRoZSBjbGllbnQocykgYWRkIHRoZWlyIG93biBsb2dpYyB0byB3YWl0IGZvciBhbnkga2luZCBvZiBwYWdlIGRhdGEuXG4gICAgICogWW91IGNhbiBvYnNlcnZlIGFueSBkYXRhIGluIHRoaXMgbWV0aG9kLlxuICAgICAqXG4gICAgICogRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaXNEYXRhTG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGlmIHRoZSBzY3JpcHQgaXMgYWxyZWFkeSBhZGRlZCB0byB0aGUgRE9NLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBoYXNTY3JpcHQoc291cmNlPzogc3RyaW5nKTogYm9vbGVhbjtcbiAgICBwcm90ZWN0ZWQgZ2V0IHJlbmRlcmVyKCk6IFJlbmRlcmVyMjtcbn1cbiJdfQ==