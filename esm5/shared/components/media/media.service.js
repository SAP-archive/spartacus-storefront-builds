/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { OccConfig } from '@spartacus/core';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import { BREAKPOINT } from '../../../layout/config/layout-config';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../../../layout/breakpoint/breakpoint.service";
/**
 * the default format is used for browsers that do not support
 * @type {?}
 */
var DEFAULT_MEDIA_FORMAT = 'tablet';
var MediaService = /** @class */ (function () {
    function MediaService(config, breakpointService) {
        this.config = config;
        this.breakpointService = breakpointService;
    }
    Object.defineProperty(MediaService.prototype, "mediaFormats", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return [
                {
                    code: 'mobile',
                    threshold: this.breakpointService.getSize(BREAKPOINT.xs),
                },
                {
                    code: 'tablet',
                    threshold: this.breakpointService.getSize(BREAKPOINT.sm),
                },
                {
                    code: 'desktop',
                    threshold: this.breakpointService.getSize(BREAKPOINT.md),
                },
                {
                    code: 'widescreen',
                    threshold: this.breakpointService.getSize(BREAKPOINT.lg),
                },
            ];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} container
     * @param {?=} format
     * @param {?=} alt
     * @return {?}
     */
    MediaService.prototype.getMedia = /**
     * @param {?} container
     * @param {?=} format
     * @param {?=} alt
     * @return {?}
     */
    function (container, format, alt) {
        return {
            src: this.getMainImage(container, format),
            srcset: this.getSrcSet(container),
            alt: alt || this.getAlt(container, format),
        };
    };
    /**
     * @private
     * @param {?} media
     * @param {?=} format
     * @return {?}
     */
    MediaService.prototype.getMainImage = /**
     * @private
     * @param {?} media
     * @param {?=} format
     * @return {?}
     */
    function (media, format) {
        if (media && media[format || DEFAULT_MEDIA_FORMAT]) {
            return this.getImageUrl(media[format || DEFAULT_MEDIA_FORMAT].url);
        }
        else if (media && media.url) {
            return this.getImageUrl(media.url);
        }
        else if (media) {
            return this.getImageUrl(media[this.getHighestAvailableFormat(media)].url);
        }
        else {
            return null;
        }
    };
    /**
     * returns highest resolution format name from media formats
     */
    /**
     * returns highest resolution format name from media formats
     * @private
     * @param {?} media
     * @return {?}
     */
    MediaService.prototype.getHighestAvailableFormat = /**
     * returns highest resolution format name from media formats
     * @private
     * @param {?} media
     * @return {?}
     */
    function (media) {
        if (media) {
            /** @type {?} */
            var mediaFormat_1;
            this.mediaFormats.forEach((/**
             * @param {?} format
             * @return {?}
             */
            function (format) {
                if (!mediaFormat_1 ||
                    (mediaFormat_1.threshold < format.threshold && media[format.code])) {
                    mediaFormat_1 = format;
                }
            }));
            return mediaFormat_1.code;
        }
        return null;
    };
    /**
     * @private
     * @param {?} media
     * @param {?=} format
     * @return {?}
     */
    MediaService.prototype.getAlt = /**
     * @private
     * @param {?} media
     * @param {?=} format
     * @return {?}
     */
    function (media, format) {
        if (!media) {
            return undefined;
        }
        else if (media[format || DEFAULT_MEDIA_FORMAT]) {
            return media[format || DEFAULT_MEDIA_FORMAT].altText;
        }
        else if (media.altText) {
            return media.altText;
        }
    };
    /**
     * builds a set of images aligned with the breakpoints
     */
    /**
     * builds a set of images aligned with the breakpoints
     * @private
     * @param {?} media
     * @return {?}
     */
    MediaService.prototype.getSrcSet = /**
     * builds a set of images aligned with the breakpoints
     * @private
     * @param {?} media
     * @return {?}
     */
    function (media) {
        var _this = this;
        if (!media) {
            return undefined;
        }
        /** @type {?} */
        var srcset = this.mediaFormats.reduce((/**
         * @param {?} set
         * @param {?} format
         * @return {?}
         */
        function (set, format) {
            if (!!media[format.code]) {
                if (set) {
                    set += ', ';
                }
                set += _this.getImageUrl(media[format.code].url) + " " + format.threshold + "w";
            }
            return set;
        }), '');
        return srcset === '' ? undefined : srcset;
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    MediaService.prototype.getImageUrl = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (!url) {
            return null;
        }
        return url.startsWith('http') ? url : this.getBaseUrl() + url;
    };
    /**
     * @private
     * @return {?}
     */
    MediaService.prototype.getBaseUrl = /**
     * @private
     * @return {?}
     */
    function () {
        return (this.config.backend.media.baseUrl || this.config.backend.occ.baseUrl || '');
    };
    MediaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    MediaService.ctorParameters = function () { return [
        { type: OccConfig },
        { type: BreakpointService }
    ]; };
    /** @nocollapse */ MediaService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MediaService_Factory() { return new MediaService(i0.ɵɵinject(i1.OccConfig), i0.ɵɵinject(i2.BreakpointService)); }, token: MediaService, providedIn: "root" });
    return MediaService;
}());
export { MediaService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    MediaService.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    MediaService.prototype.breakpointService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL21lZGlhL21lZGlhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7SUFJNUQsb0JBQW9CLEdBQUcsUUFBUTtBQUVyQztJQUlFLHNCQUNZLE1BQWlCLEVBQ2pCLGlCQUFvQztRQURwQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDN0MsQ0FBQztJQUVKLHNCQUFZLHNDQUFZOzs7OztRQUF4QjtZQUNFLE9BQU87Z0JBQ0w7b0JBQ0UsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztpQkFDekQ7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztpQkFDekQ7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztpQkFDekQ7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxF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TSxDQUFDLFNBQVMsTUFDZixDQUFDO2FBQ0w7WUFDRCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsR0FBRSxFQUFFLENBQUM7UUFFTixPQUFPLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzVDLENBQUM7Ozs7OztJQUVPLGtDQUFXOzs7OztJQUFuQixVQUFvQixHQUFXO1FBQzdCLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFTyxpQ0FBVTs7OztJQUFsQjtRQUNFLE9BQU8sQ0FDTCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUMzRSxDQUFDO0lBQ0osQ0FBQzs7Z0JBbkhGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVlEsU0FBUztnQkFDVCxpQkFBaUI7Ozt1QkFGMUI7Q0E2SEMsQUFwSEQsSUFvSEM7U0FqSFksWUFBWTs7Ozs7O0lBRXJCLDhCQUEyQjs7Ozs7SUFDM0IseUNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJyZWFrcG9pbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlJztcbmltcG9ydCB7IEJSRUFLUE9JTlQgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgTWVkaWEsIE1lZGlhRm9ybWF0cyB9IGZyb20gJy4vbWVkaWEubW9kZWwnO1xuXG4vKiogdGhlIGRlZmF1bHQgZm9ybWF0IGlzIHVzZWQgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgICAqL1xuY29uc3QgREVGQVVMVF9NRURJQV9GT1JNQVQgPSAndGFibGV0JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWc6IE9jY0NvbmZpZyxcbiAgICBwcm90ZWN0ZWQgYnJlYWtwb2ludFNlcnZpY2U6IEJyZWFrcG9pbnRTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGdldCBtZWRpYUZvcm1hdHMoKTogTWVkaWFGb3JtYXRzW10ge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdtb2JpbGUnLFxuICAgICAgICB0aHJlc2hvbGQ6IHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuZ2V0U2l6ZShCUkVBS1BPSU5ULnhzKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICd0YWJsZXQnLFxuICAgICAgICB0aHJlc2hvbGQ6IHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuZ2V0U2l6ZShCUkVBS1BPSU5ULnNtKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdkZXNrdG9wJyxcbiAgICAgICAgdGhyZXNob2xkOiB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmdldFNpemUoQlJFQUtQT0lOVC5tZCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnd2lkZXNjcmVlbicsXG4gICAgICAgIHRocmVzaG9sZDogdGhpcy5icmVha3BvaW50U2VydmljZS5nZXRTaXplKEJSRUFLUE9JTlQubGcpLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgZ2V0TWVkaWEoY29udGFpbmVyLCBmb3JtYXQ/OiBzdHJpbmcsIGFsdD86IHN0cmluZyk6IE1lZGlhIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3JjOiB0aGlzLmdldE1haW5JbWFnZShjb250YWluZXIsIGZvcm1hdCksXG4gICAgICBzcmNzZXQ6IHRoaXMuZ2V0U3JjU2V0KGNvbnRhaW5lciksXG4gICAgICBhbHQ6IGFsdCB8fCB0aGlzLmdldEFsdChjb250YWluZXIsIGZvcm1hdCksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWFpbkltYWdlKG1lZGlhLCBmb3JtYXQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChtZWRpYSAmJiBtZWRpYVtmb3JtYXQgfHwgREVGQVVMVF9NRURJQV9GT1JNQVRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVVybChtZWRpYVtmb3JtYXQgfHwgREVGQVVMVF9NRURJQV9GT1JNQVRdLnVybCk7XG4gICAgfSBlbHNlIGlmIChtZWRpYSAmJiBtZWRpYS51cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEltYWdlVXJsKG1lZGlhLnVybCk7XG4gICAgfSBlbHNlIGlmIChtZWRpYSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VVcmwobWVkaWFbdGhpcy5nZXRIaWdoZXN0QXZhaWxhYmxlRm9ybWF0KG1lZGlhKV0udXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgaGlnaGVzdCByZXNvbHV0aW9uIGZvcm1hdCBuYW1lIGZyb20gbWVkaWEgZm9ybWF0c1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRIaWdoZXN0QXZhaWxhYmxlRm9ybWF0KG1lZGlhKTogc3RyaW5nIHtcbiAgICBpZiAobWVkaWEpIHtcbiAgICAgIGxldCBtZWRpYUZvcm1hdDogTWVkaWFGb3JtYXRzO1xuXG4gICAgICB0aGlzLm1lZGlhRm9ybWF0cy5mb3JFYWNoKGZvcm1hdCA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhbWVkaWFGb3JtYXQgfHxcbiAgICAgICAgICAobWVkaWFGb3JtYXQudGhyZXNob2xkIDwgZm9ybWF0LnRocmVzaG9sZCAmJiBtZWRpYVtmb3JtYXQuY29kZV0pXG4gICAgICAgICkge1xuICAgICAgICAgIG1lZGlhRm9ybWF0ID0gZm9ybWF0O1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG1lZGlhRm9ybWF0LmNvZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldEFsdChtZWRpYSwgZm9ybWF0Pzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIW1lZGlhKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAobWVkaWFbZm9ybWF0IHx8IERFRkFVTFRfTUVESUFfRk9STUFUXSkge1xuICAgICAgcmV0dXJuIG1lZGlhW2Zvcm1hdCB8fCBERUZBVUxUX01FRElBX0ZPUk1BVF0uYWx0VGV4dDtcbiAgICB9IGVsc2UgaWYgKG1lZGlhLmFsdFRleHQpIHtcbiAgICAgIHJldHVybiBtZWRpYS5hbHRUZXh0O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBidWlsZHMgYSBzZXQgb2YgaW1hZ2VzIGFsaWduZWQgd2l0aCB0aGUgYnJlYWtwb2ludHNcbiAgICovXG4gIHByaXZhdGUgZ2V0U3JjU2V0KG1lZGlhKTogc3RyaW5nIHtcbiAgICBpZiAoIW1lZGlhKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBzcmNzZXQgPSB0aGlzLm1lZGlhRm9ybWF0cy5yZWR1Y2UoKHNldCwgZm9ybWF0KSA9PiB7XG4gICAgICBpZiAoISFtZWRpYVtmb3JtYXQuY29kZV0pIHtcbiAgICAgICAgaWYgKHNldCkge1xuICAgICAgICAgIHNldCArPSAnLCAnO1xuICAgICAgICB9XG4gICAgICAgIHNldCArPSBgJHt0aGlzLmdldEltYWdlVXJsKG1lZGlhW2Zvcm1hdC5jb2RlXS51cmwpfSAke1xuICAgICAgICAgIGZvcm1hdC50aHJlc2hvbGRcbiAgICAgICAgfXdgO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNldDtcbiAgICB9LCAnJyk7XG5cbiAgICByZXR1cm4gc3Jjc2V0ID09PSAnJyA/IHVuZGVmaW5lZCA6IHNyY3NldDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SW1hZ2VVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghdXJsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKCdodHRwJykgPyB1cmwgOiB0aGlzLmdldEJhc2VVcmwoKSArIHVybDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QmFzZVVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLm1lZGlhLmJhc2VVcmwgfHwgdGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCB8fCAnJ1xuICAgICk7XG4gIH1cbn1cbiJdfQ==