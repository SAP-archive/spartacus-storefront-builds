/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { OccConfig } from '@spartacus/core';
import { missingProductImgSrc } from '../../images/missingProduct';
import { BREAKPOINT, LayoutConfig } from '../../layout/index';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../../layout/config/layout-config";
/**
 * the default format is used for browsers that do not support
 * @type {?}
 */
var DEFAULT_MEDIA_FORMAT = 'tablet';
var MediaService = /** @class */ (function () {
    function MediaService(config, layoutConfig) {
        var _this = this;
        this.config = config;
        this.layoutConfig = layoutConfig;
        this.mediaFormats = [
            { code: 'mobile', threshold: this.layoutConfig.breakpoints[BREAKPOINT.xs] },
            { code: 'tablet', threshold: this.layoutConfig.breakpoints[BREAKPOINT.sm] },
            {
                code: 'desktop',
                threshold: this.layoutConfig.breakpoints[BREAKPOINT.md],
            },
            {
                code: 'widescreen',
                threshold: this.layoutConfig.breakpoints[BREAKPOINT.lg],
            },
        ];
        this.getImageUrl = function (url) {
            return url.startsWith('http') ? url : _this.getBaseUrl() + url;
        };
    }
    /**
     * @param {?} media
     * @param {?=} format
     * @param {?=} alt
     * @return {?}
     */
    MediaService.prototype.getImage = /**
     * @param {?} media
     * @param {?=} format
     * @param {?=} alt
     * @return {?}
     */
    function (media, format, alt) {
        return {
            src: this.getMainImage(media, format),
            srcset: this.getSrcSet(media),
            alt: alt || this.getAlt(media, format),
        };
    };
    /**
     * @return {?}
     */
    MediaService.prototype.getMissingImage = /**
     * @return {?}
     */
    function () {
        return missingProductImgSrc;
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
        if (!media) {
            return this.getMissingImage();
        }
        else if (media[format || DEFAULT_MEDIA_FORMAT]) {
            return this.getImageUrl(media[format || DEFAULT_MEDIA_FORMAT].url);
        }
        else if (media.url) {
            return this.getImageUrl(media.url);
        }
        else {
            return this.getMissingImage();
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
        var srcset = this.mediaFormats.reduce(function (set, format) {
            if (!!media[format.code]) {
                if (set) {
                    set += ', ';
                }
                set += _this.getImageUrl(media[format.code].url) + " " + format.threshold + "w";
            }
            return set;
        }, '');
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
        { type: LayoutConfig }
    ]; };
    /** @nocollapse */ MediaService.ngInjectableDef = i0.defineInjectable({ factory: function MediaService_Factory() { return new MediaService(i0.inject(i1.OccConfig), i0.inject(i2.LayoutConfig)); }, token: MediaService, providedIn: "root" });
    return MediaService;
}());
export { MediaService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MediaService.prototype.mediaFormats;
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
    MediaService.prototype.layoutConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9jb21wb25lbnRzL21lZGlhL21lZGlhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7O0lBSXhELG9CQUFvQixHQUFHLFFBQVE7QUFFckM7SUFJRSxzQkFDWSxNQUFpQixFQUNqQixZQUEwQjtRQUZ0QyxpQkFHSTtRQUZRLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFHOUIsaUJBQVksR0FBbUI7WUFDckMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDM0UsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDM0U7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7YUFDeEQ7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7YUFDeEQ7U0FDRixDQUFDO1FBMERNLGdC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TyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUMzRSxDQUFDO0lBQ0osQ0FBQzs7Z0JBdEZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVlEsU0FBUztnQkFFRyxZQUFZOzs7dUJBSGpDO0NBZ0dDLEFBdkZELElBdUZDO1NBcEZZLFlBQVk7Ozs7OztJQU12QixvQ0FXRTs7Ozs7SUEwREYsbUNBRUU7Ozs7O0lBM0VBLDhCQUEyQjs7Ozs7SUFDM0Isb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IG1pc3NpbmdQcm9kdWN0SW1nU3JjIH0gZnJvbSAnLi4vLi4vaW1hZ2VzL21pc3NpbmdQcm9kdWN0JztcbmltcG9ydCB7IEJSRUFLUE9JTlQsIExheW91dENvbmZpZyB9IGZyb20gJy4uLy4uL2xheW91dC9pbmRleCc7XG5pbXBvcnQgeyBNZWRpYSwgTWVkaWFGb3JtYXRzIH0gZnJvbSAnLi9tZWRpYS5tb2RlbCc7XG5cbi8qKiB0aGUgZGVmYXVsdCBmb3JtYXQgaXMgdXNlZCBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCAgICovXG5jb25zdCBERUZBVUxUX01FRElBX0ZPUk1BVCA9ICd0YWJsZXQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnLFxuICAgIHByb3RlY3RlZCBsYXlvdXRDb25maWc6IExheW91dENvbmZpZ1xuICApIHt9XG5cbiAgcHJpdmF0ZSBtZWRpYUZvcm1hdHM6IE1lZGlhRm9ybWF0c1tdID0gW1xuICAgIHsgY29kZTogJ21vYmlsZScsIHRocmVzaG9sZDogdGhpcy5sYXlvdXRDb25maWcuYnJlYWtwb2ludHNbQlJFQUtQT0lOVC54c10gfSxcbiAgICB7IGNvZGU6ICd0YWJsZXQnLCB0aHJlc2hvbGQ6IHRoaXMubGF5b3V0Q29uZmlnLmJyZWFrcG9pbnRzW0JSRUFLUE9JTlQuc21dIH0sXG4gICAge1xuICAgICAgY29kZTogJ2Rlc2t0b3AnLFxuICAgICAgdGhyZXNob2xkOiB0aGlzLmxheW91dENvbmZpZy5icmVha3BvaW50c1tCUkVBS1BPSU5ULm1kXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6ICd3aWRlc2NyZWVuJyxcbiAgICAgIHRocmVzaG9sZDogdGhpcy5sYXlvdXRDb25maWcuYnJlYWtwb2ludHNbQlJFQUtQT0lOVC5sZ10sXG4gICAgfSxcbiAgXTtcblxuICBnZXRJbWFnZShtZWRpYSwgZm9ybWF0Pzogc3RyaW5nLCBhbHQ/OiBzdHJpbmcpOiBNZWRpYSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNyYzogdGhpcy5nZXRNYWluSW1hZ2UobWVkaWEsIGZvcm1hdCksXG4gICAgICBzcmNzZXQ6IHRoaXMuZ2V0U3JjU2V0KG1lZGlhKSxcbiAgICAgIGFsdDogYWx0IHx8IHRoaXMuZ2V0QWx0KG1lZGlhLCBmb3JtYXQpLFxuICAgIH07XG4gIH1cblxuICBnZXRNaXNzaW5nSW1hZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbWlzc2luZ1Byb2R1Y3RJbWdTcmM7XG4gIH1cblxuICBwcml2YXRlIGdldE1haW5JbWFnZShtZWRpYSwgZm9ybWF0Pzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIW1lZGlhKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRNaXNzaW5nSW1hZ2UoKTtcbiAgICB9IGVsc2UgaWYgKG1lZGlhW2Zvcm1hdCB8fCBERUZBVUxUX01FRElBX0ZPUk1BVF0pIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEltYWdlVXJsKG1lZGlhW2Zvcm1hdCB8fCBERUZBVUxUX01FRElBX0ZPUk1BVF0udXJsKTtcbiAgICB9IGVsc2UgaWYgKG1lZGlhLnVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VVcmwobWVkaWEudXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0TWlzc2luZ0ltYWdlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRBbHQobWVkaWEsIGZvcm1hdD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFtZWRpYSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKG1lZGlhW2Zvcm1hdCB8fCBERUZBVUxUX01FRElBX0ZPUk1BVF0pIHtcbiAgICAgIHJldHVybiBtZWRpYVtmb3JtYXQgfHwgREVGQVVMVF9NRURJQV9GT1JNQVRdLmFsdFRleHQ7XG4gICAgfSBlbHNlIGlmIChtZWRpYS5hbHRUZXh0KSB7XG4gICAgICByZXR1cm4gbWVkaWEuYWx0VGV4dDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYnVpbGRzIGEgc2V0IG9mIGltYWdlcyBhbGlnbmVkIHdpdGggdGhlIGJyZWFrcG9pbnRzXG4gICAqL1xuICBwcml2YXRlIGdldFNyY1NldChtZWRpYSk6IHN0cmluZyB7XG4gICAgaWYgKCFtZWRpYSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3Qgc3Jjc2V0ID0gdGhpcy5tZWRpYUZvcm1hdHMucmVkdWNlKChzZXQsIGZvcm1hdCkgPT4ge1xuICAgICAgaWYgKCEhbWVkaWFbZm9ybWF0LmNvZGVdKSB7XG4gICAgICAgIGlmIChzZXQpIHtcbiAgICAgICAgICBzZXQgKz0gJywgJztcbiAgICAgICAgfVxuICAgICAgICBzZXQgKz0gYCR7dGhpcy5nZXRJbWFnZVVybChtZWRpYVtmb3JtYXQuY29kZV0udXJsKX0gJHtcbiAgICAgICAgICBmb3JtYXQudGhyZXNob2xkXG4gICAgICAgIH13YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXQ7XG4gICAgfSwgJycpO1xuXG4gICAgcmV0dXJuIHNyY3NldCA9PT0gJycgPyB1bmRlZmluZWQgOiBzcmNzZXQ7XG4gIH1cblxuICBwcml2YXRlIGdldEltYWdlVXJsID0gKHVybDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKCdodHRwJykgPyB1cmwgOiB0aGlzLmdldEJhc2VVcmwoKSArIHVybDtcbiAgfTtcblxuICBwcml2YXRlIGdldEJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZC5tZWRpYS5iYXNlVXJsIHx8IHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmwgfHwgJydcbiAgICApO1xuICB9XG59XG4iXX0=