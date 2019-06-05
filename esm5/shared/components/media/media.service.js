/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        var _this = this;
        this.config = config;
        this.breakpointService = breakpointService;
        this.getImageUrl = (/**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            return url.startsWith('http') ? url : _this.getBaseUrl() + url;
        });
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
        else {
            return null;
        }
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
     * @private
     */
    MediaService.prototype.getImageUrl;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL21lZGlhL21lZGlhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7SUFJNUQsb0JBQW9CLEdBQUcsUUFBUTtBQUVyQztJQUlFLHNCQUNZLE1BQWlCLEVBQ2pCLGlCQUFvQztRQUZoRCxpQkFHSTtRQUZRLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQTBFeEMsZ0JBQVc7Ozs7UUFBRyxVQUFDLEdBQVc7WUFDaEMsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDaEUsQ0FBQyxFQUFDO0lBM0VDLENBQUM7SUFFSixzQkFBWSxzQ0FBWTs7Ozs7UUFBeEI7WUFDRSxPQUFPO2dCQUNMO29CQUNFLElBQUksRUFBRSxRQUFRO29CQUNkLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7aUJBQ3pEO2dCQUNEO29CQUNFLElBQUksRUFBRSxRQUFRO29CQUNkLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7aUJBQ3pEO2dCQUNEO29CQUNFLElBQUksRUFB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eEZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVlEsU0FBUztnQkFDVCxpQkFBaUI7Ozt1QkFGMUI7Q0FrR0MsQUF6RkQsSUF5RkM7U0F0RlksWUFBWTs7Ozs7O0lBNkV2QixtQ0FFRTs7Ozs7SUE3RUEsOEJBQTJCOzs7OztJQUMzQix5Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQnJlYWtwb2ludFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvYnJlYWtwb2ludC9icmVha3BvaW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQlJFQUtQT0lOVCB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBNZWRpYSwgTWVkaWFGb3JtYXRzIH0gZnJvbSAnLi9tZWRpYS5tb2RlbCc7XG5cbi8qKiB0aGUgZGVmYXVsdCBmb3JtYXQgaXMgdXNlZCBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCAgICovXG5jb25zdCBERUZBVUxUX01FRElBX0ZPUk1BVCA9ICd0YWJsZXQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnLFxuICAgIHByb3RlY3RlZCBicmVha3BvaW50U2VydmljZTogQnJlYWtwb2ludFNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0IG1lZGlhRm9ybWF0cygpOiBNZWRpYUZvcm1hdHNbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ21vYmlsZScsXG4gICAgICAgIHRocmVzaG9sZDogdGhpcy5icmVha3BvaW50U2VydmljZS5nZXRTaXplKEJSRUFLUE9JTlQueHMpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ3RhYmxldCcsXG4gICAgICAgIHRocmVzaG9sZDogdGhpcy5icmVha3BvaW50U2VydmljZS5nZXRTaXplKEJSRUFLUE9JTlQuc20pLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ2Rlc2t0b3AnLFxuICAgICAgICB0aHJlc2hvbGQ6IHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuZ2V0U2l6ZShCUkVBS1BPSU5ULm1kKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICd3aWRlc2NyZWVuJyxcbiAgICAgICAgdGhyZXNob2xkOiB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmdldFNpemUoQlJFQUtQT0lOVC5sZyksXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICBnZXRNZWRpYShjb250YWluZXIsIGZvcm1hdD86IHN0cmluZywgYWx0Pzogc3RyaW5nKTogTWVkaWEge1xuICAgIHJldHVybiB7XG4gICAgICBzcmM6IHRoaXMuZ2V0TWFpbkltYWdlKGNvbnRhaW5lciwgZm9ybWF0KSxcbiAgICAgIHNyY3NldDogdGhpcy5nZXRTcmNTZXQoY29udGFpbmVyKSxcbiAgICAgIGFsdDogYWx0IHx8IHRoaXMuZ2V0QWx0KGNvbnRhaW5lciwgZm9ybWF0KSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYWluSW1hZ2UobWVkaWEsIGZvcm1hdD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKG1lZGlhICYmIG1lZGlhW2Zvcm1hdCB8fCBERUZBVUxUX01FRElBX0ZPUk1BVF0pIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEltYWdlVXJsKG1lZGlhW2Zvcm1hdCB8fCBERUZBVUxUX01FRElBX0ZPUk1BVF0udXJsKTtcbiAgICB9IGVsc2UgaWYgKG1lZGlhICYmIG1lZGlhLnVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VVcmwobWVkaWEudXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRBbHQobWVkaWEsIGZvcm1hdD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFtZWRpYSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKG1lZGlhW2Zvcm1hdCB8fCBERUZBVUxUX01FRElBX0ZPUk1BVF0pIHtcbiAgICAgIHJldHVybiBtZWRpYVtmb3JtYXQgfHwgREVGQVVMVF9NRURJQV9GT1JNQVRdLmFsdFRleHQ7XG4gICAgfSBlbHNlIGlmIChtZWRpYS5hbHRUZXh0KSB7XG4gICAgICByZXR1cm4gbWVkaWEuYWx0VGV4dDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYnVpbGRzIGEgc2V0IG9mIGltYWdlcyBhbGlnbmVkIHdpdGggdGhlIGJyZWFrcG9pbnRzXG4gICAqL1xuICBwcml2YXRlIGdldFNyY1NldChtZWRpYSk6IHN0cmluZyB7XG4gICAgaWYgKCFtZWRpYSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3Qgc3Jjc2V0ID0gdGhpcy5tZWRpYUZvcm1hdHMucmVkdWNlKChzZXQsIGZvcm1hdCkgPT4ge1xuICAgICAgaWYgKCEhbWVkaWFbZm9ybWF0LmNvZGVdKSB7XG4gICAgICAgIGlmIChzZXQpIHtcbiAgICAgICAgICBzZXQgKz0gJywgJztcbiAgICAgICAgfVxuICAgICAgICBzZXQgKz0gYCR7dGhpcy5nZXRJbWFnZVVybChtZWRpYVtmb3JtYXQuY29kZV0udXJsKX0gJHtcbiAgICAgICAgICBmb3JtYXQudGhyZXNob2xkXG4gICAgICAgIH13YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXQ7XG4gICAgfSwgJycpO1xuXG4gICAgcmV0dXJuIHNyY3NldCA9PT0gJycgPyB1bmRlZmluZWQgOiBzcmNzZXQ7XG4gIH1cblxuICBwcml2YXRlIGdldEltYWdlVXJsID0gKHVybDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKCdodHRwJykgPyB1cmwgOiB0aGlzLmdldEJhc2VVcmwoKSArIHVybDtcbiAgfTtcblxuICBwcml2YXRlIGdldEJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZC5tZWRpYS5iYXNlVXJsIHx8IHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmwgfHwgJydcbiAgICApO1xuICB9XG59XG4iXX0=