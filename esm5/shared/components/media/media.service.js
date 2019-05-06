/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { OccConfig } from '@spartacus/core';
import { BREAKPOINT, LayoutConfig } from '../../../layout/index';
import { missingProductImgSrc } from '../../../lib/ui/images/missingProduct';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../../../layout/config/layout-config";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL21lZGlhL21lZGlhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7Ozs7O0lBSXZFLG9CQUFvQixHQUFHLFFBQVE7QUFFckM7SUFJRSxzQkFDWSxNQUFpQixFQUNqQixZQUEwQjtRQUZ0QyxpQkFHSTtRQUZRLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFHOUIsaUJBQVksR0FBbUI7WUFDckMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDM0UsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDM0U7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7YUFDeEQ7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7YUFDeEQ7U0FDRixDQUFDO1FBMERNLGdC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TyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUMzRSxDQUFDO0lBQ0osQ0FBQzs7Z0JBdEZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVlEsU0FBUztnQkFDRyxZQUFZOzs7dUJBRmpDO0NBZ0dDLEFBdkZELElBdUZDO1NBcEZZLFlBQVk7Ozs7OztJQU12QixvQ0FXRTs7Ozs7SUEwREYsbUNBRUU7Ozs7O0lBM0VBLDhCQUEyQjs7Ozs7SUFDM0Isb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJSRUFLUE9JTlQsIExheW91dENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9pbmRleCc7XG5pbXBvcnQgeyBtaXNzaW5nUHJvZHVjdEltZ1NyYyB9IGZyb20gJy4uLy4uLy4uL2xpYi91aS9pbWFnZXMvbWlzc2luZ1Byb2R1Y3QnO1xuaW1wb3J0IHsgTWVkaWEsIE1lZGlhRm9ybWF0cyB9IGZyb20gJy4vbWVkaWEubW9kZWwnO1xuXG4vKiogdGhlIGRlZmF1bHQgZm9ybWF0IGlzIHVzZWQgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgICAqL1xuY29uc3QgREVGQVVMVF9NRURJQV9GT1JNQVQgPSAndGFibGV0JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWc6IE9jY0NvbmZpZyxcbiAgICBwcm90ZWN0ZWQgbGF5b3V0Q29uZmlnOiBMYXlvdXRDb25maWdcbiAgKSB7fVxuXG4gIHByaXZhdGUgbWVkaWFGb3JtYXRzOiBNZWRpYUZvcm1hdHNbXSA9IFtcbiAgICB7IGNvZGU6ICdtb2JpbGUnLCB0aHJlc2hvbGQ6IHRoaXMubGF5b3V0Q29uZmlnLmJyZWFrcG9pbnRzW0JSRUFLUE9JTlQueHNdIH0sXG4gICAgeyBjb2RlOiAndGFibGV0JywgdGhyZXNob2xkOiB0aGlzLmxheW91dENvbmZpZy5icmVha3BvaW50c1tCUkVBS1BPSU5ULnNtXSB9LFxuICAgIHtcbiAgICAgIGNvZGU6ICdkZXNrdG9wJyxcbiAgICAgIHRocmVzaG9sZDogdGhpcy5sYXlvdXRDb25maWcuYnJlYWtwb2ludHNbQlJFQUtQT0lOVC5tZF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiAnd2lkZXNjcmVlbicsXG4gICAgICB0aHJlc2hvbGQ6IHRoaXMubGF5b3V0Q29uZmlnLmJyZWFrcG9pbnRzW0JSRUFLUE9JTlQubGddLFxuICAgIH0sXG4gIF07XG5cbiAgZ2V0SW1hZ2UobWVkaWEsIGZvcm1hdD86IHN0cmluZywgYWx0Pzogc3RyaW5nKTogTWVkaWEge1xuICAgIHJldHVybiB7XG4gICAgICBzcmM6IHRoaXMuZ2V0TWFpbkltYWdlKG1lZGlhLCBmb3JtYXQpLFxuICAgICAgc3Jjc2V0OiB0aGlzLmdldFNyY1NldChtZWRpYSksXG4gICAgICBhbHQ6IGFsdCB8fCB0aGlzLmdldEFsdChtZWRpYSwgZm9ybWF0KSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0TWlzc2luZ0ltYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG1pc3NpbmdQcm9kdWN0SW1nU3JjO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYWluSW1hZ2UobWVkaWEsIGZvcm1hdD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFtZWRpYSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0TWlzc2luZ0ltYWdlKCk7XG4gICAgfSBlbHNlIGlmIChtZWRpYVtmb3JtYXQgfHwgREVGQVVMVF9NRURJQV9GT1JNQVRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVVybChtZWRpYVtmb3JtYXQgfHwgREVGQVVMVF9NRURJQV9GT1JNQVRdLnVybCk7XG4gICAgfSBlbHNlIGlmIChtZWRpYS51cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEltYWdlVXJsKG1lZGlhLnVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmdldE1pc3NpbmdJbWFnZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWx0KG1lZGlhLCBmb3JtYXQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghbWVkaWEpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmIChtZWRpYVtmb3JtYXQgfHwgREVGQVVMVF9NRURJQV9GT1JNQVRdKSB7XG4gICAgICByZXR1cm4gbWVkaWFbZm9ybWF0IHx8IERFRkFVTFRfTUVESUFfRk9STUFUXS5hbHRUZXh0O1xuICAgIH0gZWxzZSBpZiAobWVkaWEuYWx0VGV4dCkge1xuICAgICAgcmV0dXJuIG1lZGlhLmFsdFRleHQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGJ1aWxkcyBhIHNldCBvZiBpbWFnZXMgYWxpZ25lZCB3aXRoIHRoZSBicmVha3BvaW50c1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRTcmNTZXQobWVkaWEpOiBzdHJpbmcge1xuICAgIGlmICghbWVkaWEpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHNyY3NldCA9IHRoaXMubWVkaWFGb3JtYXRzLnJlZHVjZSgoc2V0LCBmb3JtYXQpID0+IHtcbiAgICAgIGlmICghIW1lZGlhW2Zvcm1hdC5jb2RlXSkge1xuICAgICAgICBpZiAoc2V0KSB7XG4gICAgICAgICAgc2V0ICs9ICcsICc7XG4gICAgICAgIH1cbiAgICAgICAgc2V0ICs9IGAke3RoaXMuZ2V0SW1hZ2VVcmwobWVkaWFbZm9ybWF0LmNvZGVdLnVybCl9ICR7XG4gICAgICAgICAgZm9ybWF0LnRocmVzaG9sZFxuICAgICAgICB9d2A7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2V0O1xuICAgIH0sICcnKTtcblxuICAgIHJldHVybiBzcmNzZXQgPT09ICcnID8gdW5kZWZpbmVkIDogc3Jjc2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJbWFnZVVybCA9ICh1cmw6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aCgnaHR0cCcpID8gdXJsIDogdGhpcy5nZXRCYXNlVXJsKCkgKyB1cmw7XG4gIH07XG5cbiAgcHJpdmF0ZSBnZXRCYXNlVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQubWVkaWEuYmFzZVVybCB8fCB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8ICcnXG4gICAgKTtcbiAgfVxufVxuIl19