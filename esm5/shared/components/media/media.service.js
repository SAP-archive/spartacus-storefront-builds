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
     * @param {?=} alt
     * @return {?}
     */
    MediaService.prototype.getMissingImage = /**
     * @param {?=} alt
     * @return {?}
     */
    function (alt) {
        return {
            src: this.getMissingImageSrc(),
            alt: alt || undefined,
        };
    };
    /**
     * @private
     * @return {?}
     */
    MediaService.prototype.getMissingImageSrc = /**
     * @private
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
            return this.getMissingImageSrc();
        }
        else if (media[format || DEFAULT_MEDIA_FORMAT]) {
            return this.getImageUrl(media[format || DEFAULT_MEDIA_FORMAT].url);
        }
        else if (media.url) {
            return this.getImageUrl(media.url);
        }
        else {
            return this.getMissingImageSrc();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL21lZGlhL21lZGlhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7Ozs7O0lBSXZFLG9CQUFvQixHQUFHLFFBQVE7QUFFckM7SUFJRSxzQkFDWSxNQUFpQixFQUNqQixZQUEwQjtRQUZ0QyxpQkFHSTtRQUZRLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFHOUIsaUJBQVksR0FBbUI7WUFDckMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDM0UsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDM0U7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7YUFDeEQ7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7YUFDeEQ7U0FDRixDQUFDO1FBaUVNLGdC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QUFDLENBQUMsTUFBTSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBTU8saUNBQVU7Ozs7SUFBbEI7UUFDRSxPQUFPLENBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FDM0UsQ0FBQztJQUNKLENBQUM7O2dCQTdGRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVZRLFNBQVM7Z0JBQ0csWUFBWTs7O3VCQUZqQztDQXVHQyxBQTlGRCxJQThGQztTQTNGWSxZQUFZOzs7Ozs7SUFNdkIsb0NBV0U7Ozs7O0lBaUVGLG1DQUVFOzs7OztJQWxGQSw4QkFBMkI7Ozs7O0lBQzNCLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCUkVBS1BPSU5ULCBMYXlvdXRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvaW5kZXgnO1xuaW1wb3J0IHsgbWlzc2luZ1Byb2R1Y3RJbWdTcmMgfSBmcm9tICcuLi8uLi8uLi9saWIvdWkvaW1hZ2VzL21pc3NpbmdQcm9kdWN0JztcbmltcG9ydCB7IE1lZGlhLCBNZWRpYUZvcm1hdHMgfSBmcm9tICcuL21lZGlhLm1vZGVsJztcblxuLyoqIHRoZSBkZWZhdWx0IGZvcm1hdCBpcyB1c2VkIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0ICAgKi9cbmNvbnN0IERFRkFVTFRfTUVESUFfRk9STUFUID0gJ3RhYmxldCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBNZWRpYVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWcsXG4gICAgcHJvdGVjdGVkIGxheW91dENvbmZpZzogTGF5b3V0Q29uZmlnXG4gICkge31cblxuICBwcml2YXRlIG1lZGlhRm9ybWF0czogTWVkaWFGb3JtYXRzW10gPSBbXG4gICAgeyBjb2RlOiAnbW9iaWxlJywgdGhyZXNob2xkOiB0aGlzLmxheW91dENvbmZpZy5icmVha3BvaW50c1tCUkVBS1BPSU5ULnhzXSB9LFxuICAgIHsgY29kZTogJ3RhYmxldCcsIHRocmVzaG9sZDogdGhpcy5sYXlvdXRDb25maWcuYnJlYWtwb2ludHNbQlJFQUtQT0lOVC5zbV0gfSxcbiAgICB7XG4gICAgICBjb2RlOiAnZGVza3RvcCcsXG4gICAgICB0aHJlc2hvbGQ6IHRoaXMubGF5b3V0Q29uZmlnLmJyZWFrcG9pbnRzW0JSRUFLUE9JTlQubWRdLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogJ3dpZGVzY3JlZW4nLFxuICAgICAgdGhyZXNob2xkOiB0aGlzLmxheW91dENvbmZpZy5icmVha3BvaW50c1tCUkVBS1BPSU5ULmxnXSxcbiAgICB9LFxuICBdO1xuXG4gIGdldEltYWdlKG1lZGlhLCBmb3JtYXQ/OiBzdHJpbmcsIGFsdD86IHN0cmluZyk6IE1lZGlhIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3JjOiB0aGlzLmdldE1haW5JbWFnZShtZWRpYSwgZm9ybWF0KSxcbiAgICAgIHNyY3NldDogdGhpcy5nZXRTcmNTZXQobWVkaWEpLFxuICAgICAgYWx0OiBhbHQgfHwgdGhpcy5nZXRBbHQobWVkaWEsIGZvcm1hdCksXG4gICAgfTtcbiAgfVxuXG4gIGdldE1pc3NpbmdJbWFnZShhbHQ/OiBzdHJpbmcpOiBNZWRpYSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNyYzogdGhpcy5nZXRNaXNzaW5nSW1hZ2VTcmMoKSxcbiAgICAgIGFsdDogYWx0IHx8IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNaXNzaW5nSW1hZ2VTcmMoKSB7XG4gICAgcmV0dXJuIG1pc3NpbmdQcm9kdWN0SW1nU3JjO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYWluSW1hZ2UobWVkaWEsIGZvcm1hdD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFtZWRpYSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0TWlzc2luZ0ltYWdlU3JjKCk7XG4gICAgfSBlbHNlIGlmIChtZWRpYVtmb3JtYXQgfHwgREVGQVVMVF9NRURJQV9GT1JNQVRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVVybChtZWRpYVtmb3JtYXQgfHwgREVGQVVMVF9NRURJQV9GT1JNQVRdLnVybCk7XG4gICAgfSBlbHNlIGlmIChtZWRpYS51cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEltYWdlVXJsKG1lZGlhLnVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmdldE1pc3NpbmdJbWFnZVNyYygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWx0KG1lZGlhLCBmb3JtYXQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghbWVkaWEpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmIChtZWRpYVtmb3JtYXQgfHwgREVGQVVMVF9NRURJQV9GT1JNQVRdKSB7XG4gICAgICByZXR1cm4gbWVkaWFbZm9ybWF0IHx8IERFRkFVTFRfTUVESUFfRk9STUFUXS5hbHRUZXh0O1xuICAgIH0gZWxzZSBpZiAobWVkaWEuYWx0VGV4dCkge1xuICAgICAgcmV0dXJuIG1lZGlhLmFsdFRleHQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGJ1aWxkcyBhIHNldCBvZiBpbWFnZXMgYWxpZ25lZCB3aXRoIHRoZSBicmVha3BvaW50c1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRTcmNTZXQobWVkaWEpOiBzdHJpbmcge1xuICAgIGlmICghbWVkaWEpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHNyY3NldCA9IHRoaXMubWVkaWFGb3JtYXRzLnJlZHVjZSgoc2V0LCBmb3JtYXQpID0+IHtcbiAgICAgIGlmICghIW1lZGlhW2Zvcm1hdC5jb2RlXSkge1xuICAgICAgICBpZiAoc2V0KSB7XG4gICAgICAgICAgc2V0ICs9ICcsICc7XG4gICAgICAgIH1cbiAgICAgICAgc2V0ICs9IGAke3RoaXMuZ2V0SW1hZ2VVcmwobWVkaWFbZm9ybWF0LmNvZGVdLnVybCl9ICR7XG4gICAgICAgICAgZm9ybWF0LnRocmVzaG9sZFxuICAgICAgICB9d2A7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2V0O1xuICAgIH0sICcnKTtcblxuICAgIHJldHVybiBzcmNzZXQgPT09ICcnID8gdW5kZWZpbmVkIDogc3Jjc2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJbWFnZVVybCA9ICh1cmw6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aCgnaHR0cCcpID8gdXJsIDogdGhpcy5nZXRCYXNlVXJsKCkgKyB1cmw7XG4gIH07XG5cbiAgcHJpdmF0ZSBnZXRCYXNlVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQubWVkaWEuYmFzZVVybCB8fCB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8ICcnXG4gICAgKTtcbiAgfVxufVxuIl19