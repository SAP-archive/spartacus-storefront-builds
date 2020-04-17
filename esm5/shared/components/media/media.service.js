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
var MediaService = /** @class */ (function () {
    function MediaService(config, 
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
    MediaService.prototype.getMedia = function (mediaContainer, format, alt) {
        if (!mediaContainer) {
            return;
        }
        var mainMedia = mediaContainer.url
            ? mediaContainer
            : this.resolveMedia(mediaContainer, format);
        return {
            src: this.resolveAbsoluteUrl(mainMedia === null || mainMedia === void 0 ? void 0 : mainMedia.url),
            alt: alt || (mainMedia === null || mainMedia === void 0 ? void 0 : mainMedia.altText),
            srcset: this.resolveSrcSet(mediaContainer),
        };
    };
    Object.defineProperty(MediaService.prototype, "sortedFormats", {
        /**
         * Creates the media formats in a logical sorted order. The map contains the
         * format key and the format size information. We do this only once for performance
         * benefits.
         */
        get: function () {
            var _this = this;
            if (!this._sortedFormats) {
                this._sortedFormats = Object.keys(this.config.mediaFormats)
                    .map(function (key) { return ({
                    code: key,
                    size: _this.config.mediaFormats[key],
                }); })
                    .sort(function (a, b) { return (a.size.width > b.size.width ? 1 : -1); });
            }
            return this._sortedFormats;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaService.prototype, "reversedFormats", {
        /**
         * Creates the media formats in a reversed sorted order.
         */
        get: function () {
            if (!this._reversedFormats) {
                this._reversedFormats = this.sortedFormats.slice().reverse();
            }
            return this._reversedFormats;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Resolves the right media for the given format. The fo
     */
    MediaService.prototype.resolveMedia = function (media, format) {
        return media[this.resolveFormat(media, format)];
    };
    /**
     * Validates the format against the given mediaContainer. If there is no format available,
     * or if the mediaContainer doesn't contain a media for the given media, the most optimal
     * format is resolved. If even that is not possible, the first format is returned.
     */
    MediaService.prototype.resolveFormat = function (mediaContainer, format) {
        if (format && mediaContainer[format]) {
            return format;
        }
        return (this.resolveBestFormat(mediaContainer) || Object.keys(mediaContainer)[0]);
    };
    /**
     * Returns the media format code with the best size.
     */
    MediaService.prototype.resolveBestFormat = function (media) {
        var _a;
        return (_a = this.reversedFormats.find(function (format) {
            return media.hasOwnProperty(format.code);
        })) === null || _a === void 0 ? void 0 : _a.code;
    };
    /**
     * Returns a set of media for the available media formats. Additionally, the congiured media
     * format width is added to the srcset, so that browsers can select the appropriate media.
     */
    MediaService.prototype.resolveSrcSet = function (media) {
        var _this = this;
        if (!media) {
            return undefined;
        }
        var srcset = this.sortedFormats.reduce(function (set, format) {
            if (!!media[format.code]) {
                if (set) {
                    set += ', ';
                }
                set += _this.resolveAbsoluteUrl(media[format.code].url) + " " + format.size.width + "w";
            }
            return set;
        }, '');
        return srcset === '' ? undefined : srcset;
    };
    /**
     * Resolves the absolute URL for the given url. In most cases, this URL represents
     * the relative URL on the backend. In that case, we prefix the url with the baseUrl.
     */
    MediaService.prototype.resolveAbsoluteUrl = function (url) {
        if (!url) {
            return null;
        }
        return url.startsWith('http') ? url : this.getBaseUrl() + url;
    };
    /**
     * The base URL is either driven by a specific `backend.media.baseUrl`, or by the
     * `backend.occ.baseUrl`.
     *
     * The `backend.media.baseUrl` can be used to load media from a different location.
     *
     * In Commerce Cloud, a differnt location could mean a different "aspect".
     */
    MediaService.prototype.getBaseUrl = function () {
        return (this.config.backend.media.baseUrl ||
            this.config.backend.occ.baseUrl ||
            '');
    };
    MediaService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [Config,] }] },
        { type: BreakpointService }
    ]; };
    MediaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MediaService_Factory() { return new MediaService(i0.ɵɵinject(i1.Config), i0.ɵɵinject(i2.BreakpointService)); }, token: MediaService, providedIn: "root" });
    MediaService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(0, Inject(Config))
    ], MediaService);
    return MediaService;
}());
export { MediaService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL21lZGlhL21lZGlhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQW9CLE1BQU0saUJBQWlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7QUFLbEY7Ozs7Ozs7Ozs7O0dBV0c7QUFJSDtJQVFFLHNCQUM0QixNQUF3QjtJQUNsRDs7OztPQUlHO0lBQ08saUJBQW9DO1FBTnBCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBTXhDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDN0MsQ0FBQztJQUVKOzs7T0FHRztJQUNILCtCQUFRLEdBQVIsVUFDRSxjQUFzQyxFQUN0QyxNQUFlLEVBQ2YsR0FBWTtRQUVaLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBRUQsSUFBTSxTQUFTLEdBQVUsY0FBYyxDQUFDLEdBQUc7WUFDekMsQ0FBQyxDQUFDLGNBQWM7WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBZ0MsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVoRSxPQUFPO1lBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsR0FBRyxDQUFDO1lBQzVDLEdBQUcsRUFBRSxHQUFHLEtBQUksU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU8sQ0FBQTtZQUM5QixNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7U0FDM0MsQ0FBQztJQUNKLENBQUM7SUFPRCxzQkFBYyx1Q0FB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QVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzVDLENBQUM7SUFFRDs7O09BR0c7SUFDTyx5Q0FBa0IsR0FBNUIsVUFBNkIsR0FBVztRQUN0QyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ08saUNBQVUsR0FBcEI7UUFDRSxPQUFPLENBQ0osSUFBSSxDQUFDLE1BQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQy9DLElBQUksQ0FBQyxNQUFvQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztZQUM5QyxFQUFFLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dEQWhKRSxNQUFNLFNBQUMsTUFBTTtnQkFNZSxpQkFBaUI7OztJQWZyQyxZQUFZO1FBSHhCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7UUFVRyxXQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtPQVROLFlBQVksQ0EwSnhCO3VCQWhMRDtDQWdMQyxBQTFKRCxJQTBKQztTQTFKWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIEltYWdlLCBPY2NDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQnJlYWtwb2ludFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvYnJlYWtwb2ludC9icmVha3BvaW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmVmcm9udENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3N0b3JlZnJvbnQtY29uZmlnJztcbmltcG9ydCB7IE1lZGlhQ29uZmlnIH0gZnJvbSAnLi9tZWRpYS5jb25maWcnO1xuaW1wb3J0IHsgTWVkaWEsIE1lZGlhQ29udGFpbmVyLCBNZWRpYUZvcm1hdFNpemUgfSBmcm9tICcuL21lZGlhLm1vZGVsJztcblxuLyoqXG4gKiBTZXJ2aWNlIHdoaWNoIGdlbmVyYXRlcyBtZWRpYSBVUkxzLiBJdCBsZXZlcmFnZSB0aGUgTWVkaWFDb250YWluZXIgYW5kIE1lZGlhRm9ybWF0cyBzb1xuICogdGhhdCBVUkxzIGFuZCBzaXplcyBhcmUgZ2VuZXJhdGVkIGZvciB0aGUgc2FtZSBtZWRpYS4gVGhpcyBoZWxwcyB0byBpbXByb3ZlIHBlcmZvcm1hbmNlXG4gKiBhY3Jvc3MgZGlmZmVyZW5jZSBkZXZpY2VzIGFuZCBsYXlvdXRzLlxuICpcbiAqIE1lZGlhIGZvcm1hdHMgYXJlIG9wdGlvbmFsLCBidXQgaGlnaGx5IHJlY29tbWVuZGVkLiBUaGUgZm9ybWF0IHdpbGwgaGVscCB0aGUgYnJvd3NlciB0b1xuICogaWRlbnRpZnkgdGhlIHJpZ2h0IG1lZGlhIGZvciB0aGUgcmlnaHQgZXhwZXJpZW5jZS5cbiAqXG4gKiBUaGUgTWVkaWFTZXJ2aWNlIHdpbGwgZ2VuZXJhdGUgYWJzb2x1dGUgVVJMcyBpbiBjYXNlIHJlbGF0aXZlIFVSTHMgYXJlIHByb3ZpZGVkIGZvciB0aGUgTWVkaWEuXG4gKiBUaGUgYmFzZVVybCBpcyByZWFkIGZyb20gdGhlIGBvY2NDb25maWcuYmFja2VuZC5tZWRpYS5iYXNlVXJsYCBvclxuICogYG9jY0NvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsYC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhU2VydmljZSB7XG4gIC8qKlxuICAgKiBUaGUgbWVkaWEgZm9ybWF0cyBzb3J0ZWQgYnkgc2l6ZS4gVGhlIG1lZGlhIGZvcm1hdCByZXByZXNlbnRpbmcgdGhlIHNtYWxsZXN0XG4gICAqIHNpemUgaXMgc29ydGVkIG9uIHRvcC5cbiAgICovXG4gIHByaXZhdGUgX3NvcnRlZEZvcm1hdHM6IHsgY29kZTogc3RyaW5nOyBzaXplOiBNZWRpYUZvcm1hdFNpemUgfVtdO1xuICBwcml2YXRlIF9yZXZlcnNlZEZvcm1hdHM6IHsgY29kZTogc3RyaW5nOyBzaXplOiBNZWRpYUZvcm1hdFNpemUgfVtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQ29uZmlnKSBwcm90ZWN0ZWQgY29uZmlnOiBTdG9yZWZyb250Q29uZmlnLFxuICAgIC8qKlxuICAgICAqIFRoZSBCcmVha3BvaW50U2VydmljZSBpcyBubyBsb25nZXIgdXNlZCBpbiB2ZXJzaW9uIDIuMCBhcyB0aGUgZGlmZmVyZW50IHNpemUgZm9ybWF0cyBhcmVcbiAgICAgKiBkcml2ZW4gYnkgY29uZmlndXJhdGlvbiBvbmx5LiBUaGVyZSdzIGhvd2V2ZXIgYSBjaGFuZ2UgdGhhdCB0aGlzIHNlcnZpY2Ugd2lsbCBwbGF5IGEgcm9sZVxuICAgICAqIGluIHRoZSBuZWFyIGZ1dHVyZSwgd2hpY2ggaXMgd2h5IHdlIGtlZXAgdGhlIGNvbnN0cnVjdG9yIGFzLWlzLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBicmVha3BvaW50U2VydmljZTogQnJlYWtwb2ludFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgYE1lZGlhYCBvYmplY3Qgd2l0aCB0aGUgbWFpbiBtZWRpYSAoYHNyY2ApIGFuZCB2YXJpb3VzIG1lZGlhIChgc3JjYClcbiAgICogZm9yIHNwZWNpZmljIGZvcm1hdHMuXG4gICAqL1xuICBnZXRNZWRpYShcbiAgICBtZWRpYUNvbnRhaW5lcjogTWVkaWFDb250YWluZXIgfCBJbWFnZSxcbiAgICBmb3JtYXQ/OiBzdHJpbmcsXG4gICAgYWx0Pzogc3RyaW5nXG4gICk6IE1lZGlhIHtcbiAgICBpZiAoIW1lZGlhQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFpbk1lZGlhOiBJbWFnZSA9IG1lZGlhQ29udGFpbmVyLnVybFxuICAgICAgPyBtZWRpYUNvbnRhaW5lclxuICAgICAgOiB0aGlzLnJlc29sdmVNZWRpYShtZWRpYUNvbnRhaW5lciBhcyBNZWRpYUNvbnRhaW5lciwgZm9ybWF0KTtcblxuICAgIHJldHVybiB7XG4gICAgICBzcmM6IHRoaXMucmVzb2x2ZUFic29sdXRlVXJsKG1haW5NZWRpYT8udXJsKSxcbiAgICAgIGFsdDogYWx0IHx8IG1haW5NZWRpYT8uYWx0VGV4dCxcbiAgICAgIHNyY3NldDogdGhpcy5yZXNvbHZlU3JjU2V0KG1lZGlhQ29udGFpbmVyKSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIG1lZGlhIGZvcm1hdHMgaW4gYSBsb2dpY2FsIHNvcnRlZCBvcmRlci4gVGhlIG1hcCBjb250YWlucyB0aGVcbiAgICogZm9ybWF0IGtleSBhbmQgdGhlIGZvcm1hdCBzaXplIGluZm9ybWF0aW9uLiBXZSBkbyB0aGlzIG9ubHkgb25jZSBmb3IgcGVyZm9ybWFuY2VcbiAgICogYmVuZWZpdHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNvcnRlZEZvcm1hdHMoKTogeyBjb2RlOiBzdHJpbmc7IHNpemU6IE1lZGlhRm9ybWF0U2l6ZSB9W10ge1xuICAgIGlmICghdGhpcy5fc29ydGVkRm9ybWF0cykge1xuICAgICAgdGhpcy5fc29ydGVkRm9ybWF0cyA9IE9iamVjdC5rZXlzKFxuICAgICAgICAodGhpcy5jb25maWcgYXMgTWVkaWFDb25maWcpLm1lZGlhRm9ybWF0c1xuICAgICAgKVxuICAgICAgICAubWFwKChrZXkpID0+ICh7XG4gICAgICAgICAgY29kZToga2V5LFxuICAgICAgICAgIHNpemU6ICh0aGlzLmNvbmZpZyBhcyBNZWRpYUNvbmZpZykubWVkaWFGb3JtYXRzW2tleV0sXG4gICAgICAgIH0pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gKGEuc2l6ZS53aWR0aCA+IGIuc2l6ZS53aWR0aCA/IDEgOiAtMSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc29ydGVkRm9ybWF0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBtZWRpYSBmb3JtYXRzIGluIGEgcmV2ZXJzZWQgc29ydGVkIG9yZGVyLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCByZXZlcnNlZEZvcm1hdHMoKTogeyBjb2RlOiBzdHJpbmc7IHNpemU6IE1lZGlhRm9ybWF0U2l6ZSB9W10ge1xuICAgIGlmICghdGhpcy5fcmV2ZXJzZWRGb3JtYXRzKSB7XG4gICAgICB0aGlzLl9yZXZlcnNlZEZvcm1hdHMgPSB0aGlzLnNvcnRlZEZvcm1hdHMuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9yZXZlcnNlZEZvcm1hdHM7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgdGhlIHJpZ2h0IG1lZGlhIGZvciB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgZm9cbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlTWVkaWEobWVkaWE6IE1lZGlhQ29udGFpbmVyLCBmb3JtYXQ/OiBzdHJpbmcpOiBJbWFnZSB7XG4gICAgcmV0dXJuIG1lZGlhW3RoaXMucmVzb2x2ZUZvcm1hdChtZWRpYSwgZm9ybWF0KV07XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIHRoZSBmb3JtYXQgYWdhaW5zdCB0aGUgZ2l2ZW4gbWVkaWFDb250YWluZXIuIElmIHRoZXJlIGlzIG5vIGZvcm1hdCBhdmFpbGFibGUsXG4gICAqIG9yIGlmIHRoZSBtZWRpYUNvbnRhaW5lciBkb2Vzbid0IGNvbnRhaW4gYSBtZWRpYSBmb3IgdGhlIGdpdmVuIG1lZGlhLCB0aGUgbW9zdCBvcHRpbWFsXG4gICAqIGZvcm1hdCBpcyByZXNvbHZlZC4gSWYgZXZlbiB0aGF0IGlzIG5vdCBwb3NzaWJsZSwgdGhlIGZpcnN0IGZvcm1hdCBpcyByZXR1cm5lZC5cbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlRm9ybWF0KFxuICAgIG1lZGlhQ29udGFpbmVyOiBNZWRpYUNvbnRhaW5lcixcbiAgICBmb3JtYXQ/OiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICBpZiAoZm9ybWF0ICYmIG1lZGlhQ29udGFpbmVyW2Zvcm1hdF0pIHtcbiAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnJlc29sdmVCZXN0Rm9ybWF0KG1lZGlhQ29udGFpbmVyKSB8fCBPYmplY3Qua2V5cyhtZWRpYUNvbnRhaW5lcilbMF1cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1lZGlhIGZvcm1hdCBjb2RlIHdpdGggdGhlIGJlc3Qgc2l6ZS5cbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlQmVzdEZvcm1hdChtZWRpYTogTWVkaWFDb250YWluZXIgfCBJbWFnZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmV2ZXJzZWRGb3JtYXRzLmZpbmQoKGZvcm1hdCkgPT5cbiAgICAgIG1lZGlhLmhhc093blByb3BlcnR5KGZvcm1hdC5jb2RlKVxuICAgICk/LmNvZGU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHNldCBvZiBtZWRpYSBmb3IgdGhlIGF2YWlsYWJsZSBtZWRpYSBmb3JtYXRzLiBBZGRpdGlvbmFsbHksIHRoZSBjb25naXVyZWQgbWVkaWFcbiAgICogZm9ybWF0IHdpZHRoIGlzIGFkZGVkIHRvIHRoZSBzcmNzZXQsIHNvIHRoYXQgYnJvd3NlcnMgY2FuIHNlbGVjdCB0aGUgYXBwcm9wcmlhdGUgbWVkaWEuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVzb2x2ZVNyY1NldChtZWRpYTogTWVkaWFDb250YWluZXIgfCBJbWFnZSk6IHN0cmluZyB7XG4gICAgaWYgKCFtZWRpYSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBzcmNzZXQgPSB0aGlzLnNvcnRlZEZvcm1hdHMucmVkdWNlKChzZXQsIGZvcm1hdCkgPT4ge1xuICAgICAgaWYgKCEhbWVkaWFbZm9ybWF0LmNvZGVdKSB7XG4gICAgICAgIGlmIChzZXQpIHtcbiAgICAgICAgICBzZXQgKz0gJywgJztcbiAgICAgICAgfVxuICAgICAgICBzZXQgKz0gYCR7dGhpcy5yZXNvbHZlQWJzb2x1dGVVcmwobWVkaWFbZm9ybWF0LmNvZGVdLnVybCl9ICR7XG4gICAgICAgICAgZm9ybWF0LnNpemUud2lkdGhcbiAgICAgICAgfXdgO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNldDtcbiAgICB9LCAnJyk7XG5cbiAgICByZXR1cm4gc3Jjc2V0ID09PSAnJyA/IHVuZGVmaW5lZCA6IHNyY3NldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyB0aGUgYWJzb2x1dGUgVVJMIGZvciB0aGUgZ2l2ZW4gdXJsLiBJbiBtb3N0IGNhc2VzLCB0aGlzIFVSTCByZXByZXNlbnRzXG4gICAqIHRoZSByZWxhdGl2ZSBVUkwgb24gdGhlIGJhY2tlbmQuIEluIHRoYXQgY2FzZSwgd2UgcHJlZml4IHRoZSB1cmwgd2l0aCB0aGUgYmFzZVVybC5cbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlQWJzb2x1dGVVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghdXJsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKCdodHRwJykgPyB1cmwgOiB0aGlzLmdldEJhc2VVcmwoKSArIHVybDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYmFzZSBVUkwgaXMgZWl0aGVyIGRyaXZlbiBieSBhIHNwZWNpZmljIGBiYWNrZW5kLm1lZGlhLmJhc2VVcmxgLCBvciBieSB0aGVcbiAgICogYGJhY2tlbmQub2NjLmJhc2VVcmxgLlxuICAgKlxuICAgKiBUaGUgYGJhY2tlbmQubWVkaWEuYmFzZVVybGAgY2FuIGJlIHVzZWQgdG8gbG9hZCBtZWRpYSBmcm9tIGEgZGlmZmVyZW50IGxvY2F0aW9uLlxuICAgKlxuICAgKiBJbiBDb21tZXJjZSBDbG91ZCwgYSBkaWZmZXJudCBsb2NhdGlvbiBjb3VsZCBtZWFuIGEgZGlmZmVyZW50IFwiYXNwZWN0XCIuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0QmFzZVVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5jb25maWcgYXMgT2NjQ29uZmlnKS5iYWNrZW5kLm1lZGlhLmJhc2VVcmwgfHxcbiAgICAgICh0aGlzLmNvbmZpZyBhcyBPY2NDb25maWcpLmJhY2tlbmQub2NjLmJhc2VVcmwgfHxcbiAgICAgICcnXG4gICAgKTtcbiAgfVxufVxuIl19