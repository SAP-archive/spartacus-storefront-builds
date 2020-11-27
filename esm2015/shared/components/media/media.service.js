import { Inject, Injectable } from '@angular/core';
import { Config } from '@spartacus/core';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import { ImageLoadingStrategy, } from './media.model';
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
export class MediaService {
    constructor(config, 
    /**
     * The BreakpointService is no longer used in version 2.0 as the different size formats are
     * driven by configuration only. There's however a change that this service will play a role
     * in the near future, which is why we keep the constructor as-is.
     *
     * @deprecated
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
            srcset: this.resolveSrcSet(mediaContainer, format),
        };
    }
    /**
     * Reads the loading strategy from the `MediaConfig`.
     *
     * Defaults to `ImageLoadingStrategy.EAGER`.
     */
    get loadingStrategy() {
        var _a, _b;
        return ((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.imageLoadingStrategy) !== null && _b !== void 0 ? _b : ImageLoadingStrategy.EAGER);
    }
    /**
     * Creates the media formats in a logical sorted order. The map contains the
     * format key and the format size information. We do this only once for performance
     * benefits.
     */
    get sortedFormats() {
        var _a, _b;
        if (!this._sortedFormats && ((_a = this.config) === null || _a === void 0 ? void 0 : _a.mediaFormats)) {
            this._sortedFormats = Object.keys(this.config.mediaFormats)
                .map((key) => ({
                code: key,
                size: this.config.mediaFormats[key],
            }))
                .sort((a, b) => (a.size.width > b.size.width ? 1 : -1));
        }
        return (_b = this._sortedFormats) !== null && _b !== void 0 ? _b : [];
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
     * Returns a set of media for the available media formats. Additionally, the configured media
     * format width is added to the srcset, so that browsers can select the appropriate media.
     *
     * The optional maxFormat indicates that only sources till a certain format should be added
     * to the srcset.
     */
    resolveSrcSet(media, maxFormat) {
        if (!media) {
            return undefined;
        }
        // Only create srcset images that are smaller than the given `maxFormat` (if any)
        let formats = this.sortedFormats;
        const max = formats.findIndex((f) => f.code === maxFormat);
        if (max > -1) {
            formats = formats.slice(0, max + 1);
        }
        const srcset = formats.reduce((set, format) => {
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
     * In Commerce Cloud, a different location could mean a different "aspect".
     *
     * Defaults to empty string in case no config is provided.
     */
    getBaseUrl() {
        var _a, _b, _c, _d, _e, _f;
        return ((_f = (_c = (_b = (_a = this.config.backend) === null || _a === void 0 ? void 0 : _a.media) === null || _b === void 0 ? void 0 : _b.baseUrl) !== null && _c !== void 0 ? _c : (_e = (_d = this.config.backend) === null || _d === void 0 ? void 0 : _d.occ) === null || _e === void 0 ? void 0 : _e.baseUrl) !== null && _f !== void 0 ? _f : '');
    }
}
MediaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MediaService_Factory() { return new MediaService(i0.ɵɵinject(i1.Config), i0.ɵɵinject(i2.BreakpointService)); }, token: MediaService, providedIn: "root" });
MediaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
MediaService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [Config,] }] },
    { type: BreakpointService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL3NoYXJlZC9jb21wb25lbnRzL21lZGlhL21lZGlhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBb0IsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUdsRixPQUFPLEVBQ0wsb0JBQW9CLEdBSXJCLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXZCOzs7Ozs7Ozs7OztHQVdHO0FBSUgsTUFBTSxPQUFPLFlBQVk7SUFRdkIsWUFDNEIsTUFBd0I7SUFDbEQ7Ozs7OztPQU1HO0lBQ08saUJBQW9DO1FBUnBCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBUXhDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDN0MsQ0FBQztJQUVKOzs7T0FHRztJQUNILFFBQVEsQ0FDTixjQUFzQyxFQUN0QyxNQUFlLEVBQ2YsR0FBWTtRQUVaLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBRUQsTUFBTSxTQUFTLEdBQVUsY0FBYyxDQUFDLEdBQUc7WUFDekMsQ0FBQyxDQUFDLGNBQWM7WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBZ0MsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVoRSxPQUFPO1lBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsR0FBRyxDQUFDO1lBQzVDLEdBQUcsRUFBRSxHQUFHLEtBQUksU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU8sQ0FBQTtZQUM5QixNQUFN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QUNuQjs7OzRDQVVJLE1BQU0sU0FBQyxNQUFNO1lBbENULGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBJbWFnZSwgT2NjQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJyZWFrcG9pbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JlZnJvbnRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9zdG9yZWZyb250LWNvbmZpZyc7XG5pbXBvcnQgeyBNZWRpYUNvbmZpZyB9IGZyb20gJy4vbWVkaWEuY29uZmlnJztcbmltcG9ydCB7XG4gIEltYWdlTG9hZGluZ1N0cmF0ZWd5LFxuICBNZWRpYSxcbiAgTWVkaWFDb250YWluZXIsXG4gIE1lZGlhRm9ybWF0U2l6ZSxcbn0gZnJvbSAnLi9tZWRpYS5tb2RlbCc7XG5cbi8qKlxuICogU2VydmljZSB3aGljaCBnZW5lcmF0ZXMgbWVkaWEgVVJMcy4gSXQgbGV2ZXJhZ2UgdGhlIE1lZGlhQ29udGFpbmVyIGFuZCBNZWRpYUZvcm1hdHMgc29cbiAqIHRoYXQgVVJMcyBhbmQgc2l6ZXMgYXJlIGdlbmVyYXRlZCBmb3IgdGhlIHNhbWUgbWVkaWEuIFRoaXMgaGVscHMgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZVxuICogYWNyb3NzIGRpZmZlcmVuY2UgZGV2aWNlcyBhbmQgbGF5b3V0cy5cbiAqXG4gKiBNZWRpYSBmb3JtYXRzIGFyZSBvcHRpb25hbCwgYnV0IGhpZ2hseSByZWNvbW1lbmRlZC4gVGhlIGZvcm1hdCB3aWxsIGhlbHAgdGhlIGJyb3dzZXIgdG9cbiAqIGlkZW50aWZ5IHRoZSByaWdodCBtZWRpYSBmb3IgdGhlIHJpZ2h0IGV4cGVyaWVuY2UuXG4gKlxuICogVGhlIE1lZGlhU2VydmljZSB3aWxsIGdlbmVyYXRlIGFic29sdXRlIFVSTHMgaW4gY2FzZSByZWxhdGl2ZSBVUkxzIGFyZSBwcm92aWRlZCBmb3IgdGhlIE1lZGlhLlxuICogVGhlIGJhc2VVcmwgaXMgcmVhZCBmcm9tIHRoZSBgb2NjQ29uZmlnLmJhY2tlbmQubWVkaWEuYmFzZVVybGAgb3JcbiAqIGBvY2NDb25maWcuYmFja2VuZC5vY2MuYmFzZVVybGAuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBNZWRpYVNlcnZpY2Uge1xuICAvKipcbiAgICogVGhlIG1lZGlhIGZvcm1hdHMgc29ydGVkIGJ5IHNpemUuIFRoZSBtZWRpYSBmb3JtYXQgcmVwcmVzZW50aW5nIHRoZSBzbWFsbGVzdFxuICAgKiBzaXplIGlzIHNvcnRlZCBvbiB0b3AuXG4gICAqL1xuICBwcml2YXRlIF9zb3J0ZWRGb3JtYXRzOiB7IGNvZGU6IHN0cmluZzsgc2l6ZTogTWVkaWFGb3JtYXRTaXplIH1bXTtcbiAgcHJpdmF0ZSBfcmV2ZXJzZWRGb3JtYXRzOiB7IGNvZGU6IHN0cmluZzsgc2l6ZTogTWVkaWFGb3JtYXRTaXplIH1bXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KENvbmZpZykgcHJvdGVjdGVkIGNvbmZpZzogU3RvcmVmcm9udENvbmZpZyxcbiAgICAvKipcbiAgICAgKiBUaGUgQnJlYWtwb2ludFNlcnZpY2UgaXMgbm8gbG9uZ2VyIHVzZWQgaW4gdmVyc2lvbiAyLjAgYXMgdGhlIGRpZmZlcmVudCBzaXplIGZvcm1hdHMgYXJlXG4gICAgICogZHJpdmVuIGJ5IGNvbmZpZ3VyYXRpb24gb25seS4gVGhlcmUncyBob3dldmVyIGEgY2hhbmdlIHRoYXQgdGhpcyBzZXJ2aWNlIHdpbGwgcGxheSBhIHJvbGVcbiAgICAgKiBpbiB0aGUgbmVhciBmdXR1cmUsIHdoaWNoIGlzIHdoeSB3ZSBrZWVwIHRoZSBjb25zdHJ1Y3RvciBhcy1pcy5cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGJyZWFrcG9pbnRTZXJ2aWNlOiBCcmVha3BvaW50U2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBgTWVkaWFgIG9iamVjdCB3aXRoIHRoZSBtYWluIG1lZGlhIChgc3JjYCkgYW5kIHZhcmlvdXMgbWVkaWEgKGBzcmNgKVxuICAgKiBmb3Igc3BlY2lmaWMgZm9ybWF0cy5cbiAgICovXG4gIGdldE1lZGlhKFxuICAgIG1lZGlhQ29udGFpbmVyOiBNZWRpYUNvbnRhaW5lciB8IEltYWdlLFxuICAgIGZvcm1hdD86IHN0cmluZyxcbiAgICBhbHQ/OiBzdHJpbmdcbiAgKTogTWVkaWEge1xuICAgIGlmICghbWVkaWFDb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYWluTWVkaWE6IEltYWdlID0gbWVkaWFDb250YWluZXIudXJsXG4gICAgICA/IG1lZGlhQ29udGFpbmVyXG4gICAgICA6IHRoaXMucmVzb2x2ZU1lZGlhKG1lZGlhQ29udGFpbmVyIGFzIE1lZGlhQ29udGFpbmVyLCBmb3JtYXQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNyYzogdGhpcy5yZXNvbHZlQWJzb2x1dGVVcmwobWFpbk1lZGlhPy51cmwpLFxuICAgICAgYWx0OiBhbHQgfHwgbWFpbk1lZGlhPy5hbHRUZXh0LFxuICAgICAgc3Jjc2V0OiB0aGlzLnJlc29sdmVTcmNTZXQobWVkaWFDb250YWluZXIsIGZvcm1hdCksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgbG9hZGluZyBzdHJhdGVneSBmcm9tIHRoZSBgTWVkaWFDb25maWdgLlxuICAgKlxuICAgKiBEZWZhdWx0cyB0byBgSW1hZ2VMb2FkaW5nU3RyYXRlZ3kuRUFHRVJgLlxuICAgKi9cbiAgZ2V0IGxvYWRpbmdTdHJhdGVneSgpOiBJbWFnZUxvYWRpbmdTdHJhdGVneSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmNvbmZpZyBhcyBNZWRpYUNvbmZpZyk/LmltYWdlTG9hZGluZ1N0cmF0ZWd5ID8/XG4gICAgICBJbWFnZUxvYWRpbmdTdHJhdGVneS5FQUdFUlxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgbWVkaWEgZm9ybWF0cyBpbiBhIGxvZ2ljYWwgc29ydGVkIG9yZGVyLiBUaGUgbWFwIGNvbnRhaW5zIHRoZVxuICAgKiBmb3JtYXQga2V5IGFuZCB0aGUgZm9ybWF0IHNpemUgaW5mb3JtYXRpb24uIFdlIGRvIHRoaXMgb25seSBvbmNlIGZvciBwZXJmb3JtYW5jZVxuICAgKiBiZW5lZml0cy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc29ydGVkRm9ybWF0cygpOiB7IGNvZGU6IHN0cmluZzsgc2l6ZTogTWVkaWFGb3JtYXRTaXplIH1bXSB7XG4gICAgaWYgKCF0aGlzLl9zb3J0ZWRGb3JtYXRzICYmICh0aGlzLmNvbmZpZyBhcyBNZWRpYUNvbmZpZyk/Lm1lZGlhRm9ybWF0cykge1xuICAgICAgdGhpcy5fc29ydGVkRm9ybWF0cyA9IE9iamVjdC5rZXlzKFxuICAgICAgICAodGhpcy5jb25maWcgYXMgTWVkaWFDb25maWcpLm1lZGlhRm9ybWF0c1xuICAgICAgKVxuICAgICAgICAubWFwKChrZXkpID0+ICh7XG4gICAgICAgICAgY29kZToga2V5LFxuICAgICAgICAgIHNpemU6ICh0aGlzLmNvbmZpZyBhcyBNZWRpYUNvbmZpZykubWVkaWFGb3JtYXRzW2tleV0sXG4gICAgICAgIH0pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gKGEuc2l6ZS53aWR0aCA+IGIuc2l6ZS53aWR0aCA/IDEgOiAtMSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc29ydGVkRm9ybWF0cyA/PyBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBtZWRpYSBmb3JtYXRzIGluIGEgcmV2ZXJzZWQgc29ydGVkIG9yZGVyLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCByZXZlcnNlZEZvcm1hdHMoKTogeyBjb2RlOiBzdHJpbmc7IHNpemU6IE1lZGlhRm9ybWF0U2l6ZSB9W10ge1xuICAgIGlmICghdGhpcy5fcmV2ZXJzZWRGb3JtYXRzKSB7XG4gICAgICB0aGlzLl9yZXZlcnNlZEZvcm1hdHMgPSB0aGlzLnNvcnRlZEZvcm1hdHMuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9yZXZlcnNlZEZvcm1hdHM7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgdGhlIHJpZ2h0IG1lZGlhIGZvciB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgZm9cbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlTWVkaWEobWVkaWE6IE1lZGlhQ29udGFpbmVyLCBmb3JtYXQ/OiBzdHJpbmcpOiBJbWFnZSB7XG4gICAgcmV0dXJuIG1lZGlhW3RoaXMucmVzb2x2ZUZvcm1hdChtZWRpYSwgZm9ybWF0KV07XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIHRoZSBmb3JtYXQgYWdhaW5zdCB0aGUgZ2l2ZW4gbWVkaWFDb250YWluZXIuIElmIHRoZXJlIGlzIG5vIGZvcm1hdCBhdmFpbGFibGUsXG4gICAqIG9yIGlmIHRoZSBtZWRpYUNvbnRhaW5lciBkb2Vzbid0IGNvbnRhaW4gYSBtZWRpYSBmb3IgdGhlIGdpdmVuIG1lZGlhLCB0aGUgbW9zdCBvcHRpbWFsXG4gICAqIGZvcm1hdCBpcyByZXNvbHZlZC4gSWYgZXZlbiB0aGF0IGlzIG5vdCBwb3NzaWJsZSwgdGhlIGZpcnN0IGZvcm1hdCBpcyByZXR1cm5lZC5cbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlRm9ybWF0KFxuICAgIG1lZGlhQ29udGFpbmVyOiBNZWRpYUNvbnRhaW5lcixcbiAgICBmb3JtYXQ/OiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICBpZiAoZm9ybWF0ICYmIG1lZGlhQ29udGFpbmVyW2Zvcm1hdF0pIHtcbiAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnJlc29sdmVCZXN0Rm9ybWF0KG1lZGlhQ29udGFpbmVyKSB8fCBPYmplY3Qua2V5cyhtZWRpYUNvbnRhaW5lcilbMF1cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1lZGlhIGZvcm1hdCBjb2RlIHdpdGggdGhlIGJlc3Qgc2l6ZS5cbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlQmVzdEZvcm1hdChtZWRpYTogTWVkaWFDb250YWluZXIgfCBJbWFnZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmV2ZXJzZWRGb3JtYXRzLmZpbmQoKGZvcm1hdCkgPT5cbiAgICAgIG1lZGlhLmhhc093blByb3BlcnR5KGZvcm1hdC5jb2RlKVxuICAgICk/LmNvZGU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHNldCBvZiBtZWRpYSBmb3IgdGhlIGF2YWlsYWJsZSBtZWRpYSBmb3JtYXRzLiBBZGRpdGlvbmFsbHksIHRoZSBjb25maWd1cmVkIG1lZGlhXG4gICAqIGZvcm1hdCB3aWR0aCBpcyBhZGRlZCB0byB0aGUgc3Jjc2V0LCBzbyB0aGF0IGJyb3dzZXJzIGNhbiBzZWxlY3QgdGhlIGFwcHJvcHJpYXRlIG1lZGlhLlxuICAgKlxuICAgKiBUaGUgb3B0aW9uYWwgbWF4Rm9ybWF0IGluZGljYXRlcyB0aGF0IG9ubHkgc291cmNlcyB0aWxsIGEgY2VydGFpbiBmb3JtYXQgc2hvdWxkIGJlIGFkZGVkXG4gICAqIHRvIHRoZSBzcmNzZXQuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVzb2x2ZVNyY1NldChcbiAgICBtZWRpYTogTWVkaWFDb250YWluZXIgfCBJbWFnZSxcbiAgICBtYXhGb3JtYXQ/OiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICBpZiAoIW1lZGlhKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8vIE9ubHkgY3JlYXRlIHNyY3NldCBpbWFnZXMgdGhhdCBhcmUgc21hbGxlciB0aGFuIHRoZSBnaXZlbiBgbWF4Rm9ybWF0YCAoaWYgYW55KVxuICAgIGxldCBmb3JtYXRzID0gdGhpcy5zb3J0ZWRGb3JtYXRzO1xuICAgIGNvbnN0IG1heDogbnVtYmVyID0gZm9ybWF0cy5maW5kSW5kZXgoKGYpID0+IGYuY29kZSA9PT0gbWF4Rm9ybWF0KTtcbiAgICBpZiAobWF4ID4gLTEpIHtcbiAgICAgIGZvcm1hdHMgPSBmb3JtYXRzLnNsaWNlKDAsIG1heCArIDEpO1xuICAgIH1cblxuICAgIGNvbnN0IHNyY3NldCA9IGZvcm1hdHMucmVkdWNlKChzZXQsIGZvcm1hdCkgPT4ge1xuICAgICAgaWYgKCEhbWVkaWFbZm9ybWF0LmNvZGVdKSB7XG4gICAgICAgIGlmIChzZXQpIHtcbiAgICAgICAgICBzZXQgKz0gJywgJztcbiAgICAgICAgfVxuICAgICAgICBzZXQgKz0gYCR7dGhpcy5yZXNvbHZlQWJzb2x1dGVVcmwobWVkaWFbZm9ybWF0LmNvZGVdLnVybCl9ICR7XG4gICAgICAgICAgZm9ybWF0LnNpemUud2lkdGhcbiAgICAgICAgfXdgO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNldDtcbiAgICB9LCAnJyk7XG5cbiAgICByZXR1cm4gc3Jjc2V0ID09PSAnJyA/IHVuZGVmaW5lZCA6IHNyY3NldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyB0aGUgYWJzb2x1dGUgVVJMIGZvciB0aGUgZ2l2ZW4gdXJsLiBJbiBtb3N0IGNhc2VzLCB0aGlzIFVSTCByZXByZXNlbnRzXG4gICAqIHRoZSByZWxhdGl2ZSBVUkwgb24gdGhlIGJhY2tlbmQuIEluIHRoYXQgY2FzZSwgd2UgcHJlZml4IHRoZSB1cmwgd2l0aCB0aGUgYmFzZVVybC5cbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlQWJzb2x1dGVVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghdXJsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKCdodHRwJykgPyB1cmwgOiB0aGlzLmdldEJhc2VVcmwoKSArIHVybDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYmFzZSBVUkwgaXMgZWl0aGVyIGRyaXZlbiBieSBhIHNwZWNpZmljIGBiYWNrZW5kLm1lZGlhLmJhc2VVcmxgLCBvciBieSB0aGVcbiAgICogYGJhY2tlbmQub2NjLmJhc2VVcmxgLlxuICAgKlxuICAgKiBUaGUgYGJhY2tlbmQubWVkaWEuYmFzZVVybGAgY2FuIGJlIHVzZWQgdG8gbG9hZCBtZWRpYSBmcm9tIGEgZGlmZmVyZW50IGxvY2F0aW9uLlxuICAgKlxuICAgKiBJbiBDb21tZXJjZSBDbG91ZCwgYSBkaWZmZXJlbnQgbG9jYXRpb24gY291bGQgbWVhbiBhIGRpZmZlcmVudCBcImFzcGVjdFwiLlxuICAgKlxuICAgKiBEZWZhdWx0cyB0byBlbXB0eSBzdHJpbmcgaW4gY2FzZSBubyBjb25maWcgaXMgcHJvdmlkZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0QmFzZVVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5jb25maWcgYXMgT2NjQ29uZmlnKS5iYWNrZW5kPy5tZWRpYT8uYmFzZVVybCA/P1xuICAgICAgKHRoaXMuY29uZmlnIGFzIE9jY0NvbmZpZykuYmFja2VuZD8ub2NjPy5iYXNlVXJsID8/XG4gICAgICAnJ1xuICAgICk7XG4gIH1cbn1cbiJdfQ==