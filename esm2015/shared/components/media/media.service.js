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
            srcset: this.resolveSrcSet(mediaContainer),
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
     * Returns a set of media for the available media formats. Additionally, the configured media
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL3NoYXJlZC9jb21wb25lbnRzL21lZGlhL21lZGlhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBb0IsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUdsRixPQUFPLEVBQ0wsb0JBQW9CLEdBSXJCLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXZCOzs7Ozs7Ozs7OztHQVdHO0FBSUgsTUFBTSxPQUFPLFlBQVk7SUFRdkIsWUFDNEIsTUFBd0I7SUFDbEQ7Ozs7OztPQU1HO0lBQ08saUJBQW9DO1FBUnBCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBUXhDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDN0MsQ0FBQztJQUVKOzs7T0FHRztJQUNILFFBQVEsQ0FDTixjQUFzQyxFQUN0QyxNQUFlLEVBQ2YsR0FBWTtRQUVaLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBRUQsTUFBTSxTQUFTLEdBQVUsY0FBYyxDQUFDLEdBQUc7WUFDekMsQ0FBQyxDQUFDLGNBQWM7WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBZ0MsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVoRSxPQUFPO1lBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsR0FBRyxDQUFDO1lBQzVDLEdBQUcsRUFBRSxHQUFHLEtBQUksU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU8sQ0FBQTtZQUM5QixNQUFN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Q0FBQzthQUNMO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFUCxPQUFPLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzVDLENBQUM7SUFFRDs7O09BR0c7SUFDTyxrQkFBa0IsQ0FBQyxHQUFXO1FBQ3RDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDaEUsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDTyxVQUFVO1FBQ2xCLE9BQU8sQ0FDSixJQUFJLENBQUMsTUFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDL0MsSUFBSSxDQUFDLE1BQW9CLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO1lBQzlDLEVBQUUsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztZQTFLRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs0Q0FVSSxNQUFNLFNBQUMsTUFBTTtZQWxDVCxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgSW1hZ2UsIE9jY0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCcmVha3BvaW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9icmVha3BvaW50L2JyZWFrcG9pbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yZWZyb250Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmVmcm9udC1jb25maWcnO1xuaW1wb3J0IHsgTWVkaWFDb25maWcgfSBmcm9tICcuL21lZGlhLmNvbmZpZyc7XG5pbXBvcnQge1xuICBJbWFnZUxvYWRpbmdTdHJhdGVneSxcbiAgTWVkaWEsXG4gIE1lZGlhQ29udGFpbmVyLFxuICBNZWRpYUZvcm1hdFNpemUsXG59IGZyb20gJy4vbWVkaWEubW9kZWwnO1xuXG4vKipcbiAqIFNlcnZpY2Ugd2hpY2ggZ2VuZXJhdGVzIG1lZGlhIFVSTHMuIEl0IGxldmVyYWdlIHRoZSBNZWRpYUNvbnRhaW5lciBhbmQgTWVkaWFGb3JtYXRzIHNvXG4gKiB0aGF0IFVSTHMgYW5kIHNpemVzIGFyZSBnZW5lcmF0ZWQgZm9yIHRoZSBzYW1lIG1lZGlhLiBUaGlzIGhlbHBzIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcbiAqIGFjcm9zcyBkaWZmZXJlbmNlIGRldmljZXMgYW5kIGxheW91dHMuXG4gKlxuICogTWVkaWEgZm9ybWF0cyBhcmUgb3B0aW9uYWwsIGJ1dCBoaWdobHkgcmVjb21tZW5kZWQuIFRoZSBmb3JtYXQgd2lsbCBoZWxwIHRoZSBicm93c2VyIHRvXG4gKiBpZGVudGlmeSB0aGUgcmlnaHQgbWVkaWEgZm9yIHRoZSByaWdodCBleHBlcmllbmNlLlxuICpcbiAqIFRoZSBNZWRpYVNlcnZpY2Ugd2lsbCBnZW5lcmF0ZSBhYnNvbHV0ZSBVUkxzIGluIGNhc2UgcmVsYXRpdmUgVVJMcyBhcmUgcHJvdmlkZWQgZm9yIHRoZSBNZWRpYS5cbiAqIFRoZSBiYXNlVXJsIGlzIHJlYWQgZnJvbSB0aGUgYG9jY0NvbmZpZy5iYWNrZW5kLm1lZGlhLmJhc2VVcmxgIG9yXG4gKiBgb2NjQ29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmxgLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFRoZSBtZWRpYSBmb3JtYXRzIHNvcnRlZCBieSBzaXplLiBUaGUgbWVkaWEgZm9ybWF0IHJlcHJlc2VudGluZyB0aGUgc21hbGxlc3RcbiAgICogc2l6ZSBpcyBzb3J0ZWQgb24gdG9wLlxuICAgKi9cbiAgcHJpdmF0ZSBfc29ydGVkRm9ybWF0czogeyBjb2RlOiBzdHJpbmc7IHNpemU6IE1lZGlhRm9ybWF0U2l6ZSB9W107XG4gIHByaXZhdGUgX3JldmVyc2VkRm9ybWF0czogeyBjb2RlOiBzdHJpbmc7IHNpemU6IE1lZGlhRm9ybWF0U2l6ZSB9W107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDb25maWcpIHByb3RlY3RlZCBjb25maWc6IFN0b3JlZnJvbnRDb25maWcsXG4gICAgLyoqXG4gICAgICogVGhlIEJyZWFrcG9pbnRTZXJ2aWNlIGlzIG5vIGxvbmdlciB1c2VkIGluIHZlcnNpb24gMi4wIGFzIHRoZSBkaWZmZXJlbnQgc2l6ZSBmb3JtYXRzIGFyZVxuICAgICAqIGRyaXZlbiBieSBjb25maWd1cmF0aW9uIG9ubHkuIFRoZXJlJ3MgaG93ZXZlciBhIGNoYW5nZSB0aGF0IHRoaXMgc2VydmljZSB3aWxsIHBsYXkgYSByb2xlXG4gICAgICogaW4gdGhlIG5lYXIgZnV0dXJlLCB3aGljaCBpcyB3aHkgd2Uga2VlcCB0aGUgY29uc3RydWN0b3IgYXMtaXMuXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBicmVha3BvaW50U2VydmljZTogQnJlYWtwb2ludFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgYE1lZGlhYCBvYmplY3Qgd2l0aCB0aGUgbWFpbiBtZWRpYSAoYHNyY2ApIGFuZCB2YXJpb3VzIG1lZGlhIChgc3JjYClcbiAgICogZm9yIHNwZWNpZmljIGZvcm1hdHMuXG4gICAqL1xuICBnZXRNZWRpYShcbiAgICBtZWRpYUNvbnRhaW5lcjogTWVkaWFDb250YWluZXIgfCBJbWFnZSxcbiAgICBmb3JtYXQ/OiBzdHJpbmcsXG4gICAgYWx0Pzogc3RyaW5nXG4gICk6IE1lZGlhIHtcbiAgICBpZiAoIW1lZGlhQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFpbk1lZGlhOiBJbWFnZSA9IG1lZGlhQ29udGFpbmVyLnVybFxuICAgICAgPyBtZWRpYUNvbnRhaW5lclxuICAgICAgOiB0aGlzLnJlc29sdmVNZWRpYShtZWRpYUNvbnRhaW5lciBhcyBNZWRpYUNvbnRhaW5lciwgZm9ybWF0KTtcblxuICAgIHJldHVybiB7XG4gICAgICBzcmM6IHRoaXMucmVzb2x2ZUFic29sdXRlVXJsKG1haW5NZWRpYT8udXJsKSxcbiAgICAgIGFsdDogYWx0IHx8IG1haW5NZWRpYT8uYWx0VGV4dCxcbiAgICAgIHNyY3NldDogdGhpcy5yZXNvbHZlU3JjU2V0KG1lZGlhQ29udGFpbmVyKSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBsb2FkaW5nIHN0cmF0ZWd5IGZyb20gdGhlIGBNZWRpYUNvbmZpZ2AuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIGBJbWFnZUxvYWRpbmdTdHJhdGVneS5FQUdFUmAuXG4gICAqL1xuICBnZXQgbG9hZGluZ1N0cmF0ZWd5KCk6IEltYWdlTG9hZGluZ1N0cmF0ZWd5IHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuY29uZmlnIGFzIE1lZGlhQ29uZmlnKT8uaW1hZ2VMb2FkaW5nU3RyYXRlZ3kgPz9cbiAgICAgIEltYWdlTG9hZGluZ1N0cmF0ZWd5LkVBR0VSXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBtZWRpYSBmb3JtYXRzIGluIGEgbG9naWNhbCBzb3J0ZWQgb3JkZXIuIFRoZSBtYXAgY29udGFpbnMgdGhlXG4gICAqIGZvcm1hdCBrZXkgYW5kIHRoZSBmb3JtYXQgc2l6ZSBpbmZvcm1hdGlvbi4gV2UgZG8gdGhpcyBvbmx5IG9uY2UgZm9yIHBlcmZvcm1hbmNlXG4gICAqIGJlbmVmaXRzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzb3J0ZWRGb3JtYXRzKCk6IHsgY29kZTogc3RyaW5nOyBzaXplOiBNZWRpYUZvcm1hdFNpemUgfVtdIHtcbiAgICBpZiAoIXRoaXMuX3NvcnRlZEZvcm1hdHMpIHtcbiAgICAgIHRoaXMuX3NvcnRlZEZvcm1hdHMgPSBPYmplY3Qua2V5cyhcbiAgICAgICAgKHRoaXMuY29uZmlnIGFzIE1lZGlhQ29uZmlnKS5tZWRpYUZvcm1hdHNcbiAgICAgIClcbiAgICAgICAgLm1hcCgoa2V5KSA9PiAoe1xuICAgICAgICAgIGNvZGU6IGtleSxcbiAgICAgICAgICBzaXplOiAodGhpcy5jb25maWcgYXMgTWVkaWFDb25maWcpLm1lZGlhRm9ybWF0c1trZXldLFxuICAgICAgICB9KSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IChhLnNpemUud2lkdGggPiBiLnNpemUud2lkdGggPyAxIDogLTEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRlZEZvcm1hdHM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgbWVkaWEgZm9ybWF0cyBpbiBhIHJldmVyc2VkIHNvcnRlZCBvcmRlci5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgcmV2ZXJzZWRGb3JtYXRzKCk6IHsgY29kZTogc3RyaW5nOyBzaXplOiBNZWRpYUZvcm1hdFNpemUgfVtdIHtcbiAgICBpZiAoIXRoaXMuX3JldmVyc2VkRm9ybWF0cykge1xuICAgICAgdGhpcy5fcmV2ZXJzZWRGb3JtYXRzID0gdGhpcy5zb3J0ZWRGb3JtYXRzLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcmV2ZXJzZWRGb3JtYXRzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSByaWdodCBtZWRpYSBmb3IgdGhlIGdpdmVuIGZvcm1hdC4gVGhlIGZvXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVzb2x2ZU1lZGlhKG1lZGlhOiBNZWRpYUNvbnRhaW5lciwgZm9ybWF0Pzogc3RyaW5nKTogSW1hZ2Uge1xuICAgIHJldHVybiBtZWRpYVt0aGlzLnJlc29sdmVGb3JtYXQobWVkaWEsIGZvcm1hdCldO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyB0aGUgZm9ybWF0IGFnYWluc3QgdGhlIGdpdmVuIG1lZGlhQ29udGFpbmVyLiBJZiB0aGVyZSBpcyBubyBmb3JtYXQgYXZhaWxhYmxlLFxuICAgKiBvciBpZiB0aGUgbWVkaWFDb250YWluZXIgZG9lc24ndCBjb250YWluIGEgbWVkaWEgZm9yIHRoZSBnaXZlbiBtZWRpYSwgdGhlIG1vc3Qgb3B0aW1hbFxuICAgKiBmb3JtYXQgaXMgcmVzb2x2ZWQuIElmIGV2ZW4gdGhhdCBpcyBub3QgcG9zc2libGUsIHRoZSBmaXJzdCBmb3JtYXQgaXMgcmV0dXJuZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVzb2x2ZUZvcm1hdChcbiAgICBtZWRpYUNvbnRhaW5lcjogTWVkaWFDb250YWluZXIsXG4gICAgZm9ybWF0Pzogc3RyaW5nXG4gICk6IHN0cmluZyB7XG4gICAgaWYgKGZvcm1hdCAmJiBtZWRpYUNvbnRhaW5lcltmb3JtYXRdKSB7XG4gICAgICByZXR1cm4gZm9ybWF0O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5yZXNvbHZlQmVzdEZvcm1hdChtZWRpYUNvbnRhaW5lcikgfHwgT2JqZWN0LmtleXMobWVkaWFDb250YWluZXIpWzBdXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtZWRpYSBmb3JtYXQgY29kZSB3aXRoIHRoZSBiZXN0IHNpemUuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVzb2x2ZUJlc3RGb3JtYXQobWVkaWE6IE1lZGlhQ29udGFpbmVyIHwgSW1hZ2UpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJldmVyc2VkRm9ybWF0cy5maW5kKChmb3JtYXQpID0+XG4gICAgICBtZWRpYS5oYXNPd25Qcm9wZXJ0eShmb3JtYXQuY29kZSlcbiAgICApPy5jb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzZXQgb2YgbWVkaWEgZm9yIHRoZSBhdmFpbGFibGUgbWVkaWEgZm9ybWF0cy4gQWRkaXRpb25hbGx5LCB0aGUgY29uZmlndXJlZCBtZWRpYVxuICAgKiBmb3JtYXQgd2lkdGggaXMgYWRkZWQgdG8gdGhlIHNyY3NldCwgc28gdGhhdCBicm93c2VycyBjYW4gc2VsZWN0IHRoZSBhcHByb3ByaWF0ZSBtZWRpYS5cbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlU3JjU2V0KG1lZGlhOiBNZWRpYUNvbnRhaW5lciB8IEltYWdlKTogc3RyaW5nIHtcbiAgICBpZiAoIW1lZGlhKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IHNyY3NldCA9IHRoaXMuc29ydGVkRm9ybWF0cy5yZWR1Y2UoKHNldCwgZm9ybWF0KSA9PiB7XG4gICAgICBpZiAoISFtZWRpYVtmb3JtYXQuY29kZV0pIHtcbiAgICAgICAgaWYgKHNldCkge1xuICAgICAgICAgIHNldCArPSAnLCAnO1xuICAgICAgICB9XG4gICAgICAgIHNldCArPSBgJHt0aGlzLnJlc29sdmVBYnNvbHV0ZVVybChtZWRpYVtmb3JtYXQuY29kZV0udXJsKX0gJHtcbiAgICAgICAgICBmb3JtYXQuc2l6ZS53aWR0aFxuICAgICAgICB9d2A7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2V0O1xuICAgIH0sICcnKTtcblxuICAgIHJldHVybiBzcmNzZXQgPT09ICcnID8gdW5kZWZpbmVkIDogc3Jjc2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBhYnNvbHV0ZSBVUkwgZm9yIHRoZSBnaXZlbiB1cmwuIEluIG1vc3QgY2FzZXMsIHRoaXMgVVJMIHJlcHJlc2VudHNcbiAgICogdGhlIHJlbGF0aXZlIFVSTCBvbiB0aGUgYmFja2VuZC4gSW4gdGhhdCBjYXNlLCB3ZSBwcmVmaXggdGhlIHVybCB3aXRoIHRoZSBiYXNlVXJsLlxuICAgKi9cbiAgcHJvdGVjdGVkIHJlc29sdmVBYnNvbHV0ZVVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSA/IHVybCA6IHRoaXMuZ2V0QmFzZVVybCgpICsgdXJsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBiYXNlIFVSTCBpcyBlaXRoZXIgZHJpdmVuIGJ5IGEgc3BlY2lmaWMgYGJhY2tlbmQubWVkaWEuYmFzZVVybGAsIG9yIGJ5IHRoZVxuICAgKiBgYmFja2VuZC5vY2MuYmFzZVVybGAuXG4gICAqXG4gICAqIFRoZSBgYmFja2VuZC5tZWRpYS5iYXNlVXJsYCBjYW4gYmUgdXNlZCB0byBsb2FkIG1lZGlhIGZyb20gYSBkaWZmZXJlbnQgbG9jYXRpb24uXG4gICAqXG4gICAqIEluIENvbW1lcmNlIENsb3VkLCBhIGRpZmZlcm50IGxvY2F0aW9uIGNvdWxkIG1lYW4gYSBkaWZmZXJlbnQgXCJhc3BlY3RcIi5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRCYXNlVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmNvbmZpZyBhcyBPY2NDb25maWcpLmJhY2tlbmQubWVkaWEuYmFzZVVybCB8fFxuICAgICAgKHRoaXMuY29uZmlnIGFzIE9jY0NvbmZpZykuYmFja2VuZC5vY2MuYmFzZVVybCB8fFxuICAgICAgJydcbiAgICApO1xuICB9XG59XG4iXX0=