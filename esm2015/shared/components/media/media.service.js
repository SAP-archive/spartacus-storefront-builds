import { __decorate, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { Config } from '@spartacus/core';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../../../layout/breakpoint/breakpoint.service";
/**
 * Service which generates media URLs. It leverage the MediaContainer and MediaFormats so
 * that URLs and sizes are generated for the same media. This helps to improve performance
 * across difference devices and layouts.
 *
 * Media formats are optional, but highly recommended. The format will help the browser to
 * identify the right media for the right experience.
 *
 * The MediaService will generate absolute URLs in case relative URLs are provided for the Media.
 * The baseUrl is read from the `occConfig.backend.media.baseUrl` or
 * `occConfig.backend.occ.baseUrl`.
 */
let MediaService = class MediaService {
    constructor(config, 
    /**
     * The BreakpointService is no longer used in version 2.0 as the different size formats are
     * driven by configuration only. There's however a change that this service will play a role
     * in the near future, which is why we keep the constructor as-is.
     */
    breakpointService) {
        this.config = config;
        this.breakpointService = breakpointService;
    }
    /**
     * Returns a `Media` object with the main media (`src`) and various media (`src`)
     * for specific formats.
     */
    getMedia(mediaContainer, format, alt) {
        if (!mediaContainer) {
            return;
        }
        const mainMedia = mediaContainer.url
            ? mediaContainer
            : this.resolveMedia(mediaContainer, format);
        return {
            src: this.resolveAbsoluteUrl(mainMedia === null || mainMedia === void 0 ? void 0 : mainMedia.url),
            alt: alt || (mainMedia === null || mainMedia === void 0 ? void 0 : mainMedia.altText),
            srcset: this.resolveSrcSet(mediaContainer),
        };
    }
    /**
     * Creates the media formats in a logical sorted order. The map contains the
     * format key and the format size information. We do this only once for performance
     * benefits.
     */
    get sortedFormats() {
        if (!this._sortedFormats) {
            this._sortedFormats = Object.keys(this.config.mediaFormats)
                .map((key) => ({
                code: key,
                size: this.config.mediaFormats[key],
            }))
                .sort((a, b) => (a.size.width > b.size.width ? 1 : -1));
        }
        return this._sortedFormats;
    }
    /**
     * Creates the media formats in a reversed sorted order.
     */
    get reversedFormats() {
        if (!this._reversedFormats) {
            this._reversedFormats = this.sortedFormats.slice().reverse();
        }
        return this._reversedFormats;
    }
    /**
     * Resolves the right media for the given format. The fo
     */
    resolveMedia(media, format) {
        return media[this.resolveFormat(media, format)];
    }
    /**
     * Validates the format against the given mediaContainer. If there is no format available,
     * or if the mediaContainer doesn't contain a media for the given media, the most optimal
     * format is resolved. If even that is not possible, the first format is returned.
     */
    resolveFormat(mediaContainer, format) {
        if (format && mediaContainer[format]) {
            return format;
        }
        return (this.resolveBestFormat(mediaContainer) || Object.keys(mediaContainer)[0]);
    }
    /**
     * Returns the media format code with the best size.
     */
    resolveBestFormat(media) {
        var _a;
        return (_a = this.reversedFormats.find((format) => media.hasOwnProperty(format.code))) === null || _a === void 0 ? void 0 : _a.code;
    }
    /**
     * Returns a set of media for the available media formats. Additionally, the congiured media
     * format width is added to the srcset, so that browsers can select the appropriate media.
     */
    resolveSrcSet(media) {
        if (!media) {
            return undefined;
        }
        const srcset = this.sortedFormats.reduce((set, format) => {
            if (!!media[format.code]) {
                if (set) {
                    set += ', ';
                }
                set += `${this.resolveAbsoluteUrl(media[format.code].url)} ${format.size.width}w`;
            }
            return set;
        }, '');
        return srcset === '' ? undefined : srcset;
    }
    /**
     * Resolves the absolute URL for the given url. In most cases, this URL represents
     * the relative URL on the backend. In that case, we prefix the url with the baseUrl.
     */
    resolveAbsoluteUrl(url) {
        if (!url) {
            return null;
        }
        return url.startsWith('http') ? url : this.getBaseUrl() + url;
    }
    /**
     * The base URL is either driven by a specific `backend.media.baseUrl`, or by the
     * `backend.occ.baseUrl`.
     *
     * The `backend.media.baseUrl` can be used to load media from a different location.
     *
     * In Commerce Cloud, a differnt location could mean a different "aspect".
     */
    getBaseUrl() {
        return (this.config.backend.media.baseUrl ||
            this.config.backend.occ.baseUrl ||
            '');
    }
};
MediaService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [Config,] }] },
    { type: BreakpointService }
];
MediaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MediaService_Factory() { return new MediaService(i0.ɵɵinject(i1.Config), i0.ɵɵinject(i2.BreakpointService)); }, token: MediaService, providedIn: "root" });
MediaService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Inject(Config))
], MediaService);
export { MediaService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL21lZGlhL21lZGlhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQW9CLE1BQU0saUJBQWlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7QUFLbEY7Ozs7Ozs7Ozs7O0dBV0c7QUFJSCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBUXZCLFlBQzRCLE1BQXdCO0lBQ2xEOzs7O09BSUc7SUFDTyxpQkFBb0M7UUFOcEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFNeEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUM3QyxDQUFDO0lBRUo7OztPQUdHO0lBQ0gsUUFBUSxDQUNOLGNBQXNDLEVBQ3RDLE1BQWUsRUFDZixHQUFZO1FBRVosSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFFRCxNQUFNLFNBQVMsR0FBVSxjQUFjLENBQUMsR0FBRztZQUN6QyxDQUFDLENBQUMsY0FBYztZQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFnQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWhFLE9BQU87WUFDTCxHQUFHLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxHQUFHLENBQUM7WUFDNUMsR0FBRyxFQUFFLEdBQUcsS0FBSSxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsT0FBTyxDQUFBO1lBQzlCLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztTQUMzQyxDQUFDO0lBQ0os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QUFXO1FBQ3RDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDaEUsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDTyxVQUFVO1FBQ2xCLE9BQU8sQ0FDSixJQUFJLENBQUMsTUFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDL0MsSUFBSSxDQUFDLE1BQW9CLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO1lBQzlDLEVBQUUsQ0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7OzRDQWpKSSxNQUFNLFNBQUMsTUFBTTtZQU1lLGlCQUFpQjs7O0FBZnJDLFlBQVk7SUFIeEIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQVVHLFdBQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0dBVE4sWUFBWSxDQTBKeEI7U0ExSlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBJbWFnZSwgT2NjQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJyZWFrcG9pbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JlZnJvbnRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9zdG9yZWZyb250LWNvbmZpZyc7XG5pbXBvcnQgeyBNZWRpYUNvbmZpZyB9IGZyb20gJy4vbWVkaWEuY29uZmlnJztcbmltcG9ydCB7IE1lZGlhLCBNZWRpYUNvbnRhaW5lciwgTWVkaWFGb3JtYXRTaXplIH0gZnJvbSAnLi9tZWRpYS5tb2RlbCc7XG5cbi8qKlxuICogU2VydmljZSB3aGljaCBnZW5lcmF0ZXMgbWVkaWEgVVJMcy4gSXQgbGV2ZXJhZ2UgdGhlIE1lZGlhQ29udGFpbmVyIGFuZCBNZWRpYUZvcm1hdHMgc29cbiAqIHRoYXQgVVJMcyBhbmQgc2l6ZXMgYXJlIGdlbmVyYXRlZCBmb3IgdGhlIHNhbWUgbWVkaWEuIFRoaXMgaGVscHMgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZVxuICogYWNyb3NzIGRpZmZlcmVuY2UgZGV2aWNlcyBhbmQgbGF5b3V0cy5cbiAqXG4gKiBNZWRpYSBmb3JtYXRzIGFyZSBvcHRpb25hbCwgYnV0IGhpZ2hseSByZWNvbW1lbmRlZC4gVGhlIGZvcm1hdCB3aWxsIGhlbHAgdGhlIGJyb3dzZXIgdG9cbiAqIGlkZW50aWZ5IHRoZSByaWdodCBtZWRpYSBmb3IgdGhlIHJpZ2h0IGV4cGVyaWVuY2UuXG4gKlxuICogVGhlIE1lZGlhU2VydmljZSB3aWxsIGdlbmVyYXRlIGFic29sdXRlIFVSTHMgaW4gY2FzZSByZWxhdGl2ZSBVUkxzIGFyZSBwcm92aWRlZCBmb3IgdGhlIE1lZGlhLlxuICogVGhlIGJhc2VVcmwgaXMgcmVhZCBmcm9tIHRoZSBgb2NjQ29uZmlnLmJhY2tlbmQubWVkaWEuYmFzZVVybGAgb3JcbiAqIGBvY2NDb25maWcuYmFja2VuZC5vY2MuYmFzZVVybGAuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBNZWRpYVNlcnZpY2Uge1xuICAvKipcbiAgICogVGhlIG1lZGlhIGZvcm1hdHMgc29ydGVkIGJ5IHNpemUuIFRoZSBtZWRpYSBmb3JtYXQgcmVwcmVzZW50aW5nIHRoZSBzbWFsbGVzdFxuICAgKiBzaXplIGlzIHNvcnRlZCBvbiB0b3AuXG4gICAqL1xuICBwcml2YXRlIF9zb3J0ZWRGb3JtYXRzOiB7IGNvZGU6IHN0cmluZzsgc2l6ZTogTWVkaWFGb3JtYXRTaXplIH1bXTtcbiAgcHJpdmF0ZSBfcmV2ZXJzZWRGb3JtYXRzOiB7IGNvZGU6IHN0cmluZzsgc2l6ZTogTWVkaWFGb3JtYXRTaXplIH1bXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KENvbmZpZykgcHJvdGVjdGVkIGNvbmZpZzogU3RvcmVmcm9udENvbmZpZyxcbiAgICAvKipcbiAgICAgKiBUaGUgQnJlYWtwb2ludFNlcnZpY2UgaXMgbm8gbG9uZ2VyIHVzZWQgaW4gdmVyc2lvbiAyLjAgYXMgdGhlIGRpZmZlcmVudCBzaXplIGZvcm1hdHMgYXJlXG4gICAgICogZHJpdmVuIGJ5IGNvbmZpZ3VyYXRpb24gb25seS4gVGhlcmUncyBob3dldmVyIGEgY2hhbmdlIHRoYXQgdGhpcyBzZXJ2aWNlIHdpbGwgcGxheSBhIHJvbGVcbiAgICAgKiBpbiB0aGUgbmVhciBmdXR1cmUsIHdoaWNoIGlzIHdoeSB3ZSBrZWVwIHRoZSBjb25zdHJ1Y3RvciBhcy1pcy5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYnJlYWtwb2ludFNlcnZpY2U6IEJyZWFrcG9pbnRTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyBhIGBNZWRpYWAgb2JqZWN0IHdpdGggdGhlIG1haW4gbWVkaWEgKGBzcmNgKSBhbmQgdmFyaW91cyBtZWRpYSAoYHNyY2ApXG4gICAqIGZvciBzcGVjaWZpYyBmb3JtYXRzLlxuICAgKi9cbiAgZ2V0TWVkaWEoXG4gICAgbWVkaWFDb250YWluZXI6IE1lZGlhQ29udGFpbmVyIHwgSW1hZ2UsXG4gICAgZm9ybWF0Pzogc3RyaW5nLFxuICAgIGFsdD86IHN0cmluZ1xuICApOiBNZWRpYSB7XG4gICAgaWYgKCFtZWRpYUNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1haW5NZWRpYTogSW1hZ2UgPSBtZWRpYUNvbnRhaW5lci51cmxcbiAgICAgID8gbWVkaWFDb250YWluZXJcbiAgICAgIDogdGhpcy5yZXNvbHZlTWVkaWEobWVkaWFDb250YWluZXIgYXMgTWVkaWFDb250YWluZXIsIGZvcm1hdCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3JjOiB0aGlzLnJlc29sdmVBYnNvbHV0ZVVybChtYWluTWVkaWE/LnVybCksXG4gICAgICBhbHQ6IGFsdCB8fCBtYWluTWVkaWE/LmFsdFRleHQsXG4gICAgICBzcmNzZXQ6IHRoaXMucmVzb2x2ZVNyY1NldChtZWRpYUNvbnRhaW5lciksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBtZWRpYSBmb3JtYXRzIGluIGEgbG9naWNhbCBzb3J0ZWQgb3JkZXIuIFRoZSBtYXAgY29udGFpbnMgdGhlXG4gICAqIGZvcm1hdCBrZXkgYW5kIHRoZSBmb3JtYXQgc2l6ZSBpbmZvcm1hdGlvbi4gV2UgZG8gdGhpcyBvbmx5IG9uY2UgZm9yIHBlcmZvcm1hbmNlXG4gICAqIGJlbmVmaXRzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzb3J0ZWRGb3JtYXRzKCk6IHsgY29kZTogc3RyaW5nOyBzaXplOiBNZWRpYUZvcm1hdFNpemUgfVtdIHtcbiAgICBpZiAoIXRoaXMuX3NvcnRlZEZvcm1hdHMpIHtcbiAgICAgIHRoaXMuX3NvcnRlZEZvcm1hdHMgPSBPYmplY3Qua2V5cyhcbiAgICAgICAgKHRoaXMuY29uZmlnIGFzIE1lZGlhQ29uZmlnKS5tZWRpYUZvcm1hdHNcbiAgICAgIClcbiAgICAgICAgLm1hcCgoa2V5KSA9PiAoe1xuICAgICAgICAgIGNvZGU6IGtleSxcbiAgICAgICAgICBzaXplOiAodGhpcy5jb25maWcgYXMgTWVkaWFDb25maWcpLm1lZGlhRm9ybWF0c1trZXldLFxuICAgICAgICB9KSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IChhLnNpemUud2lkdGggPiBiLnNpemUud2lkdGggPyAxIDogLTEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRlZEZvcm1hdHM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgbWVkaWEgZm9ybWF0cyBpbiBhIHJldmVyc2VkIHNvcnRlZCBvcmRlci5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgcmV2ZXJzZWRGb3JtYXRzKCk6IHsgY29kZTogc3RyaW5nOyBzaXplOiBNZWRpYUZvcm1hdFNpemUgfVtdIHtcbiAgICBpZiAoIXRoaXMuX3JldmVyc2VkRm9ybWF0cykge1xuICAgICAgdGhpcy5fcmV2ZXJzZWRGb3JtYXRzID0gdGhpcy5zb3J0ZWRGb3JtYXRzLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcmV2ZXJzZWRGb3JtYXRzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSByaWdodCBtZWRpYSBmb3IgdGhlIGdpdmVuIGZvcm1hdC4gVGhlIGZvXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVzb2x2ZU1lZGlhKG1lZGlhOiBNZWRpYUNvbnRhaW5lciwgZm9ybWF0Pzogc3RyaW5nKTogSW1hZ2Uge1xuICAgIHJldHVybiBtZWRpYVt0aGlzLnJlc29sdmVGb3JtYXQobWVkaWEsIGZvcm1hdCldO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyB0aGUgZm9ybWF0IGFnYWluc3QgdGhlIGdpdmVuIG1lZGlhQ29udGFpbmVyLiBJZiB0aGVyZSBpcyBubyBmb3JtYXQgYXZhaWxhYmxlLFxuICAgKiBvciBpZiB0aGUgbWVkaWFDb250YWluZXIgZG9lc24ndCBjb250YWluIGEgbWVkaWEgZm9yIHRoZSBnaXZlbiBtZWRpYSwgdGhlIG1vc3Qgb3B0aW1hbFxuICAgKiBmb3JtYXQgaXMgcmVzb2x2ZWQuIElmIGV2ZW4gdGhhdCBpcyBub3QgcG9zc2libGUsIHRoZSBmaXJzdCBmb3JtYXQgaXMgcmV0dXJuZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVzb2x2ZUZvcm1hdChcbiAgICBtZWRpYUNvbnRhaW5lcjogTWVkaWFDb250YWluZXIsXG4gICAgZm9ybWF0Pzogc3RyaW5nXG4gICk6IHN0cmluZyB7XG4gICAgaWYgKGZvcm1hdCAmJiBtZWRpYUNvbnRhaW5lcltmb3JtYXRdKSB7XG4gICAgICByZXR1cm4gZm9ybWF0O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5yZXNvbHZlQmVzdEZvcm1hdChtZWRpYUNvbnRhaW5lcikgfHwgT2JqZWN0LmtleXMobWVkaWFDb250YWluZXIpWzBdXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtZWRpYSBmb3JtYXQgY29kZSB3aXRoIHRoZSBiZXN0IHNpemUuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVzb2x2ZUJlc3RGb3JtYXQobWVkaWE6IE1lZGlhQ29udGFpbmVyIHwgSW1hZ2UpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJldmVyc2VkRm9ybWF0cy5maW5kKChmb3JtYXQpID0+XG4gICAgICBtZWRpYS5oYXNPd25Qcm9wZXJ0eShmb3JtYXQuY29kZSlcbiAgICApPy5jb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzZXQgb2YgbWVkaWEgZm9yIHRoZSBhdmFpbGFibGUgbWVkaWEgZm9ybWF0cy4gQWRkaXRpb25hbGx5LCB0aGUgY29uZ2l1cmVkIG1lZGlhXG4gICAqIGZvcm1hdCB3aWR0aCBpcyBhZGRlZCB0byB0aGUgc3Jjc2V0LCBzbyB0aGF0IGJyb3dzZXJzIGNhbiBzZWxlY3QgdGhlIGFwcHJvcHJpYXRlIG1lZGlhLlxuICAgKi9cbiAgcHJvdGVjdGVkIHJlc29sdmVTcmNTZXQobWVkaWE6IE1lZGlhQ29udGFpbmVyIHwgSW1hZ2UpOiBzdHJpbmcge1xuICAgIGlmICghbWVkaWEpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc3Jjc2V0ID0gdGhpcy5zb3J0ZWRGb3JtYXRzLnJlZHVjZSgoc2V0LCBmb3JtYXQpID0+IHtcbiAgICAgIGlmICghIW1lZGlhW2Zvcm1hdC5jb2RlXSkge1xuICAgICAgICBpZiAoc2V0KSB7XG4gICAgICAgICAgc2V0ICs9ICcsICc7XG4gICAgICAgIH1cbiAgICAgICAgc2V0ICs9IGAke3RoaXMucmVzb2x2ZUFic29sdXRlVXJsKG1lZGlhW2Zvcm1hdC5jb2RlXS51cmwpfSAke1xuICAgICAgICAgIGZvcm1hdC5zaXplLndpZHRoXG4gICAgICAgIH13YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXQ7XG4gICAgfSwgJycpO1xuXG4gICAgcmV0dXJuIHNyY3NldCA9PT0gJycgPyB1bmRlZmluZWQgOiBzcmNzZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgdGhlIGFic29sdXRlIFVSTCBmb3IgdGhlIGdpdmVuIHVybC4gSW4gbW9zdCBjYXNlcywgdGhpcyBVUkwgcmVwcmVzZW50c1xuICAgKiB0aGUgcmVsYXRpdmUgVVJMIG9uIHRoZSBiYWNrZW5kLiBJbiB0aGF0IGNhc2UsIHdlIHByZWZpeCB0aGUgdXJsIHdpdGggdGhlIGJhc2VVcmwuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVzb2x2ZUFic29sdXRlVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXVybCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aCgnaHR0cCcpID8gdXJsIDogdGhpcy5nZXRCYXNlVXJsKCkgKyB1cmw7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGJhc2UgVVJMIGlzIGVpdGhlciBkcml2ZW4gYnkgYSBzcGVjaWZpYyBgYmFja2VuZC5tZWRpYS5iYXNlVXJsYCwgb3IgYnkgdGhlXG4gICAqIGBiYWNrZW5kLm9jYy5iYXNlVXJsYC5cbiAgICpcbiAgICogVGhlIGBiYWNrZW5kLm1lZGlhLmJhc2VVcmxgIGNhbiBiZSB1c2VkIHRvIGxvYWQgbWVkaWEgZnJvbSBhIGRpZmZlcmVudCBsb2NhdGlvbi5cbiAgICpcbiAgICogSW4gQ29tbWVyY2UgQ2xvdWQsIGEgZGlmZmVybnQgbG9jYXRpb24gY291bGQgbWVhbiBhIGRpZmZlcmVudCBcImFzcGVjdFwiLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldEJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuY29uZmlnIGFzIE9jY0NvbmZpZykuYmFja2VuZC5tZWRpYS5iYXNlVXJsIHx8XG4gICAgICAodGhpcy5jb25maWcgYXMgT2NjQ29uZmlnKS5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8XG4gICAgICAnJ1xuICAgICk7XG4gIH1cbn1cbiJdfQ==