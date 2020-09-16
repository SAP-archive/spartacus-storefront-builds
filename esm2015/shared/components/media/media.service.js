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
export class MediaService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL3NoYXJlZC9jb21wb25lbnRzL21lZGlhL21lZGlhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBb0IsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7OztBQUtsRjs7Ozs7Ozs7Ozs7R0FXRztBQUlILE1BQU0sT0FBTyxZQUFZO0lBUXZCLFlBQzRCLE1BQXdCO0lBQ2xEOzs7O09BSUc7SUFDTyxpQkFBb0M7UUFOcEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFNeEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUM3QyxDQUFDO0lBRUo7OztPQUdHO0lBQ0gsUUFBUSxDQUNOLGNBQXNDLEVBQ3RDLE1BQWUsRUFDZixHQUFZO1FBRVosSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFFRCxNQUFNLFNBQVMsR0FBVSxjQUFjLENBQUMsR0FBRztZQUN6QyxDQUFDLENBQUMsY0FBYztZQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFnQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWhFLE9BQU87WUFDTCxHQUFHLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxHQUFHLENBQUM7WUFDNUMsR0FBRyxFQUFFLEdBQUcsS0FBSSxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsT0FBTyxDQUFBO1lBQzlCLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztTQUMzQyxDQUFD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Q0FBQyxHQUFXO1FBQ3RDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDaEUsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDTyxVQUFVO1FBQ2xCLE9BQU8sQ0FDSixJQUFJLENBQUMsTUFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDL0MsSUFBSSxDQUFDLE1BQW9CLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO1lBQzlDLEVBQUUsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztZQTVKRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs0Q0FVSSxNQUFNLFNBQUMsTUFBTTtZQTdCVCxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgSW1hZ2UsIE9jY0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCcmVha3BvaW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9icmVha3BvaW50L2JyZWFrcG9pbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yZWZyb250Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmVmcm9udC1jb25maWcnO1xuaW1wb3J0IHsgTWVkaWFDb25maWcgfSBmcm9tICcuL21lZGlhLmNvbmZpZyc7XG5pbXBvcnQgeyBNZWRpYSwgTWVkaWFDb250YWluZXIsIE1lZGlhRm9ybWF0U2l6ZSB9IGZyb20gJy4vbWVkaWEubW9kZWwnO1xuXG4vKipcbiAqIFNlcnZpY2Ugd2hpY2ggZ2VuZXJhdGVzIG1lZGlhIFVSTHMuIEl0IGxldmVyYWdlIHRoZSBNZWRpYUNvbnRhaW5lciBhbmQgTWVkaWFGb3JtYXRzIHNvXG4gKiB0aGF0IFVSTHMgYW5kIHNpemVzIGFyZSBnZW5lcmF0ZWQgZm9yIHRoZSBzYW1lIG1lZGlhLiBUaGlzIGhlbHBzIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcbiAqIGFjcm9zcyBkaWZmZXJlbmNlIGRldmljZXMgYW5kIGxheW91dHMuXG4gKlxuICogTWVkaWEgZm9ybWF0cyBhcmUgb3B0aW9uYWwsIGJ1dCBoaWdobHkgcmVjb21tZW5kZWQuIFRoZSBmb3JtYXQgd2lsbCBoZWxwIHRoZSBicm93c2VyIHRvXG4gKiBpZGVudGlmeSB0aGUgcmlnaHQgbWVkaWEgZm9yIHRoZSByaWdodCBleHBlcmllbmNlLlxuICpcbiAqIFRoZSBNZWRpYVNlcnZpY2Ugd2lsbCBnZW5lcmF0ZSBhYnNvbHV0ZSBVUkxzIGluIGNhc2UgcmVsYXRpdmUgVVJMcyBhcmUgcHJvdmlkZWQgZm9yIHRoZSBNZWRpYS5cbiAqIFRoZSBiYXNlVXJsIGlzIHJlYWQgZnJvbSB0aGUgYG9jY0NvbmZpZy5iYWNrZW5kLm1lZGlhLmJhc2VVcmxgIG9yXG4gKiBgb2NjQ29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmxgLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFRoZSBtZWRpYSBmb3JtYXRzIHNvcnRlZCBieSBzaXplLiBUaGUgbWVkaWEgZm9ybWF0IHJlcHJlc2VudGluZyB0aGUgc21hbGxlc3RcbiAgICogc2l6ZSBpcyBzb3J0ZWQgb24gdG9wLlxuICAgKi9cbiAgcHJpdmF0ZSBfc29ydGVkRm9ybWF0czogeyBjb2RlOiBzdHJpbmc7IHNpemU6IE1lZGlhRm9ybWF0U2l6ZSB9W107XG4gIHByaXZhdGUgX3JldmVyc2VkRm9ybWF0czogeyBjb2RlOiBzdHJpbmc7IHNpemU6IE1lZGlhRm9ybWF0U2l6ZSB9W107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDb25maWcpIHByb3RlY3RlZCBjb25maWc6IFN0b3JlZnJvbnRDb25maWcsXG4gICAgLyoqXG4gICAgICogVGhlIEJyZWFrcG9pbnRTZXJ2aWNlIGlzIG5vIGxvbmdlciB1c2VkIGluIHZlcnNpb24gMi4wIGFzIHRoZSBkaWZmZXJlbnQgc2l6ZSBmb3JtYXRzIGFyZVxuICAgICAqIGRyaXZlbiBieSBjb25maWd1cmF0aW9uIG9ubHkuIFRoZXJlJ3MgaG93ZXZlciBhIGNoYW5nZSB0aGF0IHRoaXMgc2VydmljZSB3aWxsIHBsYXkgYSByb2xlXG4gICAgICogaW4gdGhlIG5lYXIgZnV0dXJlLCB3aGljaCBpcyB3aHkgd2Uga2VlcCB0aGUgY29uc3RydWN0b3IgYXMtaXMuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGJyZWFrcG9pbnRTZXJ2aWNlOiBCcmVha3BvaW50U2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBgTWVkaWFgIG9iamVjdCB3aXRoIHRoZSBtYWluIG1lZGlhIChgc3JjYCkgYW5kIHZhcmlvdXMgbWVkaWEgKGBzcmNgKVxuICAgKiBmb3Igc3BlY2lmaWMgZm9ybWF0cy5cbiAgICovXG4gIGdldE1lZGlhKFxuICAgIG1lZGlhQ29udGFpbmVyOiBNZWRpYUNvbnRhaW5lciB8IEltYWdlLFxuICAgIGZvcm1hdD86IHN0cmluZyxcbiAgICBhbHQ/OiBzdHJpbmdcbiAgKTogTWVkaWEge1xuICAgIGlmICghbWVkaWFDb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYWluTWVkaWE6IEltYWdlID0gbWVkaWFDb250YWluZXIudXJsXG4gICAgICA/IG1lZGlhQ29udGFpbmVyXG4gICAgICA6IHRoaXMucmVzb2x2ZU1lZGlhKG1lZGlhQ29udGFpbmVyIGFzIE1lZGlhQ29udGFpbmVyLCBmb3JtYXQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNyYzogdGhpcy5yZXNvbHZlQWJzb2x1dGVVcmwobWFpbk1lZGlhPy51cmwpLFxuICAgICAgYWx0OiBhbHQgfHwgbWFpbk1lZGlhPy5hbHRUZXh0LFxuICAgICAgc3Jjc2V0OiB0aGlzLnJlc29sdmVTcmNTZXQobWVkaWFDb250YWluZXIpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgbWVkaWEgZm9ybWF0cyBpbiBhIGxvZ2ljYWwgc29ydGVkIG9yZGVyLiBUaGUgbWFwIGNvbnRhaW5zIHRoZVxuICAgKiBmb3JtYXQga2V5IGFuZCB0aGUgZm9ybWF0IHNpemUgaW5mb3JtYXRpb24uIFdlIGRvIHRoaXMgb25seSBvbmNlIGZvciBwZXJmb3JtYW5jZVxuICAgKiBiZW5lZml0cy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc29ydGVkRm9ybWF0cygpOiB7IGNvZGU6IHN0cmluZzsgc2l6ZTogTWVkaWFGb3JtYXRTaXplIH1bXSB7XG4gICAgaWYgKCF0aGlzLl9zb3J0ZWRGb3JtYXRzKSB7XG4gICAgICB0aGlzLl9zb3J0ZWRGb3JtYXRzID0gT2JqZWN0LmtleXMoXG4gICAgICAgICh0aGlzLmNvbmZpZyBhcyBNZWRpYUNvbmZpZykubWVkaWFGb3JtYXRzXG4gICAgICApXG4gICAgICAgIC5tYXAoKGtleSkgPT4gKHtcbiAgICAgICAgICBjb2RlOiBrZXksXG4gICAgICAgICAgc2l6ZTogKHRoaXMuY29uZmlnIGFzIE1lZGlhQ29uZmlnKS5tZWRpYUZvcm1hdHNba2V5XSxcbiAgICAgICAgfSkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiAoYS5zaXplLndpZHRoID4gYi5zaXplLndpZHRoID8gMSA6IC0xKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zb3J0ZWRGb3JtYXRzO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIG1lZGlhIGZvcm1hdHMgaW4gYSByZXZlcnNlZCBzb3J0ZWQgb3JkZXIuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHJldmVyc2VkRm9ybWF0cygpOiB7IGNvZGU6IHN0cmluZzsgc2l6ZTogTWVkaWFGb3JtYXRTaXplIH1bXSB7XG4gICAgaWYgKCF0aGlzLl9yZXZlcnNlZEZvcm1hdHMpIHtcbiAgICAgIHRoaXMuX3JldmVyc2VkRm9ybWF0cyA9IHRoaXMuc29ydGVkRm9ybWF0cy5zbGljZSgpLnJldmVyc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3JldmVyc2VkRm9ybWF0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyB0aGUgcmlnaHQgbWVkaWEgZm9yIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSBmb1xuICAgKi9cbiAgcHJvdGVjdGVkIHJlc29sdmVNZWRpYShtZWRpYTogTWVkaWFDb250YWluZXIsIGZvcm1hdD86IHN0cmluZyk6IEltYWdlIHtcbiAgICByZXR1cm4gbWVkaWFbdGhpcy5yZXNvbHZlRm9ybWF0KG1lZGlhLCBmb3JtYXQpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgdGhlIGZvcm1hdCBhZ2FpbnN0IHRoZSBnaXZlbiBtZWRpYUNvbnRhaW5lci4gSWYgdGhlcmUgaXMgbm8gZm9ybWF0IGF2YWlsYWJsZSxcbiAgICogb3IgaWYgdGhlIG1lZGlhQ29udGFpbmVyIGRvZXNuJ3QgY29udGFpbiBhIG1lZGlhIGZvciB0aGUgZ2l2ZW4gbWVkaWEsIHRoZSBtb3N0IG9wdGltYWxcbiAgICogZm9ybWF0IGlzIHJlc29sdmVkLiBJZiBldmVuIHRoYXQgaXMgbm90IHBvc3NpYmxlLCB0aGUgZmlyc3QgZm9ybWF0IGlzIHJldHVybmVkLlxuICAgKi9cbiAgcHJvdGVjdGVkIHJlc29sdmVGb3JtYXQoXG4gICAgbWVkaWFDb250YWluZXI6IE1lZGlhQ29udGFpbmVyLFxuICAgIGZvcm1hdD86IHN0cmluZ1xuICApOiBzdHJpbmcge1xuICAgIGlmIChmb3JtYXQgJiYgbWVkaWFDb250YWluZXJbZm9ybWF0XSkge1xuICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucmVzb2x2ZUJlc3RGb3JtYXQobWVkaWFDb250YWluZXIpIHx8IE9iamVjdC5rZXlzKG1lZGlhQ29udGFpbmVyKVswXVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWVkaWEgZm9ybWF0IGNvZGUgd2l0aCB0aGUgYmVzdCBzaXplLlxuICAgKi9cbiAgcHJvdGVjdGVkIHJlc29sdmVCZXN0Rm9ybWF0KG1lZGlhOiBNZWRpYUNvbnRhaW5lciB8IEltYWdlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXZlcnNlZEZvcm1hdHMuZmluZCgoZm9ybWF0KSA9PlxuICAgICAgbWVkaWEuaGFzT3duUHJvcGVydHkoZm9ybWF0LmNvZGUpXG4gICAgKT8uY29kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc2V0IG9mIG1lZGlhIGZvciB0aGUgYXZhaWxhYmxlIG1lZGlhIGZvcm1hdHMuIEFkZGl0aW9uYWxseSwgdGhlIGNvbmdpdXJlZCBtZWRpYVxuICAgKiBmb3JtYXQgd2lkdGggaXMgYWRkZWQgdG8gdGhlIHNyY3NldCwgc28gdGhhdCBicm93c2VycyBjYW4gc2VsZWN0IHRoZSBhcHByb3ByaWF0ZSBtZWRpYS5cbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlU3JjU2V0KG1lZGlhOiBNZWRpYUNvbnRhaW5lciB8IEltYWdlKTogc3RyaW5nIHtcbiAgICBpZiAoIW1lZGlhKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IHNyY3NldCA9IHRoaXMuc29ydGVkRm9ybWF0cy5yZWR1Y2UoKHNldCwgZm9ybWF0KSA9PiB7XG4gICAgICBpZiAoISFtZWRpYVtmb3JtYXQuY29kZV0pIHtcbiAgICAgICAgaWYgKHNldCkge1xuICAgICAgICAgIHNldCArPSAnLCAnO1xuICAgICAgICB9XG4gICAgICAgIHNldCArPSBgJHt0aGlzLnJlc29sdmVBYnNvbHV0ZVVybChtZWRpYVtmb3JtYXQuY29kZV0udXJsKX0gJHtcbiAgICAgICAgICBmb3JtYXQuc2l6ZS53aWR0aFxuICAgICAgICB9d2A7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2V0O1xuICAgIH0sICcnKTtcblxuICAgIHJldHVybiBzcmNzZXQgPT09ICcnID8gdW5kZWZpbmVkIDogc3Jjc2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBhYnNvbHV0ZSBVUkwgZm9yIHRoZSBnaXZlbiB1cmwuIEluIG1vc3QgY2FzZXMsIHRoaXMgVVJMIHJlcHJlc2VudHNcbiAgICogdGhlIHJlbGF0aXZlIFVSTCBvbiB0aGUgYmFja2VuZC4gSW4gdGhhdCBjYXNlLCB3ZSBwcmVmaXggdGhlIHVybCB3aXRoIHRoZSBiYXNlVXJsLlxuICAgKi9cbiAgcHJvdGVjdGVkIHJlc29sdmVBYnNvbHV0ZVVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSA/IHVybCA6IHRoaXMuZ2V0QmFzZVVybCgpICsgdXJsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBiYXNlIFVSTCBpcyBlaXRoZXIgZHJpdmVuIGJ5IGEgc3BlY2lmaWMgYGJhY2tlbmQubWVkaWEuYmFzZVVybGAsIG9yIGJ5IHRoZVxuICAgKiBgYmFja2VuZC5vY2MuYmFzZVVybGAuXG4gICAqXG4gICAqIFRoZSBgYmFja2VuZC5tZWRpYS5iYXNlVXJsYCBjYW4gYmUgdXNlZCB0byBsb2FkIG1lZGlhIGZyb20gYSBkaWZmZXJlbnQgbG9jYXRpb24uXG4gICAqXG4gICAqIEluIENvbW1lcmNlIENsb3VkLCBhIGRpZmZlcm50IGxvY2F0aW9uIGNvdWxkIG1lYW4gYSBkaWZmZXJlbnQgXCJhc3BlY3RcIi5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRCYXNlVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmNvbmZpZyBhcyBPY2NDb25maWcpLmJhY2tlbmQubWVkaWEuYmFzZVVybCB8fFxuICAgICAgKHRoaXMuY29uZmlnIGFzIE9jY0NvbmZpZykuYmFja2VuZC5vY2MuYmFzZVVybCB8fFxuICAgICAgJydcbiAgICApO1xuICB9XG59XG4iXX0=