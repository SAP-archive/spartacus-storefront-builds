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
const DEFAULT_MEDIA_FORMAT = 'tablet';
export class MediaService {
    /**
     * @param {?} config
     * @param {?} breakpointService
     */
    constructor(config, breakpointService) {
        this.config = config;
        this.breakpointService = breakpointService;
    }
    /**
     * @private
     * @return {?}
     */
    get mediaFormats() {
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
    }
    /**
     * @param {?} container
     * @param {?=} format
     * @param {?=} alt
     * @return {?}
     */
    getMedia(container, format, alt) {
        return {
            src: this.getMainImage(container, format),
            srcset: this.getSrcSet(container),
            alt: alt || this.getAlt(container, format),
        };
    }
    /**
     * @private
     * @param {?} media
     * @param {?=} format
     * @return {?}
     */
    getMainImage(media, format) {
        if (media && media[format || DEFAULT_MEDIA_FORMAT]) {
            return this.getImageUrl(media[format || DEFAULT_MEDIA_FORMAT].url);
        }
        else if (media && media.url) {
            return this.getImageUrl(media.url);
        }
        else if (media && media[this.getHighestAvailableFormat(media)]) {
            return this.getImageUrl(media[this.getHighestAvailableFormat(media)].url);
        }
        else {
            return null;
        }
    }
    /**
     * returns highest resolution format name from media formats
     * @private
     * @param {?} media
     * @return {?}
     */
    getHighestAvailableFormat(media) {
        if (media) {
            /** @type {?} */
            let mediaFormat;
            this.mediaFormats.forEach((/**
             * @param {?} format
             * @return {?}
             */
            format => {
                if (!mediaFormat ||
                    (mediaFormat.threshold < format.threshold && media[format.code])) {
                    mediaFormat = format;
                }
            }));
            return mediaFormat.code;
        }
        return null;
    }
    /**
     * @private
     * @param {?} media
     * @param {?=} format
     * @return {?}
     */
    getAlt(media, format) {
        if (!media) {
            return undefined;
        }
        else if (media[format || DEFAULT_MEDIA_FORMAT]) {
            return media[format || DEFAULT_MEDIA_FORMAT].altText;
        }
        else if (media.altText) {
            return media.altText;
        }
    }
    /**
     * builds a set of images aligned with the breakpoints
     * @private
     * @param {?} media
     * @return {?}
     */
    getSrcSet(media) {
        if (!media) {
            return undefined;
        }
        /** @type {?} */
        const srcset = this.mediaFormats.reduce((/**
         * @param {?} set
         * @param {?} format
         * @return {?}
         */
        (set, format) => {
            if (!!media[format.code]) {
                if (set) {
                    set += ', ';
                }
                set += `${this.getImageUrl(media[format.code].url)} ${format.threshold}w`;
            }
            return set;
        }), '');
        return srcset === '' ? undefined : srcset;
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    getImageUrl(url) {
        if (!url) {
            return null;
        }
        return url.startsWith('http') ? url : this.getBaseUrl() + url;
    }
    /**
     * @private
     * @return {?}
     */
    getBaseUrl() {
        return (this.config.backend.media.baseUrl || this.config.backend.occ.baseUrl || '');
    }
}
MediaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
MediaService.ctorParameters = () => [
    { type: OccConfig },
    { type: BreakpointService }
];
/** @nocollapse */ MediaService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MediaService_Factory() { return new MediaService(i0.ɵɵinject(i1.OccConfig), i0.ɵɵinject(i2.BreakpointService)); }, token: MediaService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL21lZGlhL21lZGlhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7TUFJNUQsb0JBQW9CLEdBQUcsUUFBUTtBQUtyQyxNQUFNLE9BQU8sWUFBWTs7Ozs7SUFDdkIsWUFDWSxNQUFpQixFQUNqQixpQkFBb0M7UUFEcEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzdDLENBQUM7Ozs7O0lBRUosSUFBWSxZQUFZO1FBQ3RCLE9BQU87WUFDTDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO2FBQ3pEO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQzthQUN6RDtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7YUFDekQ7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxD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O1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEdBQUUsRUFBRSxDQUFDO1FBRU4sT0FBTyxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsR0FBVztRQUM3QixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRU8sVUFBVTtRQUNoQixPQUFPLENBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FDM0UsQ0FBQztJQUNKLENBQUM7OztZQW5IRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFWUSxTQUFTO1lBQ1QsaUJBQWlCOzs7Ozs7OztJQVl0Qiw4QkFBMkI7Ozs7O0lBQzNCLHlDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCcmVha3BvaW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9icmVha3BvaW50L2JyZWFrcG9pbnQuc2VydmljZSc7XG5pbXBvcnQgeyBCUkVBS1BPSU5UIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IE1lZGlhLCBNZWRpYUZvcm1hdHMgfSBmcm9tICcuL21lZGlhLm1vZGVsJztcblxuLyoqIHRoZSBkZWZhdWx0IGZvcm1hdCBpcyB1c2VkIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0ICAgKi9cbmNvbnN0IERFRkFVTFRfTUVESUFfRk9STUFUID0gJ3RhYmxldCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBNZWRpYVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWcsXG4gICAgcHJvdGVjdGVkIGJyZWFrcG9pbnRTZXJ2aWNlOiBCcmVha3BvaW50U2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXQgbWVkaWFGb3JtYXRzKCk6IE1lZGlhRm9ybWF0c1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBjb2RlOiAnbW9iaWxlJyxcbiAgICAgICAgdGhyZXNob2xkOiB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmdldFNpemUoQlJFQUtQT0lOVC54cyksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAndGFibGV0JyxcbiAgICAgICAgdGhyZXNob2xkOiB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmdldFNpemUoQlJFQUtQT0lOVC5zbSksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnZGVza3RvcCcsXG4gICAgICAgIHRocmVzaG9sZDogdGhpcy5icmVha3BvaW50U2VydmljZS5nZXRTaXplKEJSRUFLUE9JTlQubWQpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ3dpZGVzY3JlZW4nLFxuICAgICAgICB0aHJlc2hvbGQ6IHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuZ2V0U2l6ZShCUkVBS1BPSU5ULmxnKSxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG4gIGdldE1lZGlhKGNvbnRhaW5lciwgZm9ybWF0Pzogc3RyaW5nLCBhbHQ/OiBzdHJpbmcpOiBNZWRpYSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNyYzogdGhpcy5nZXRNYWluSW1hZ2UoY29udGFpbmVyLCBmb3JtYXQpLFxuICAgICAgc3Jjc2V0OiB0aGlzLmdldFNyY1NldChjb250YWluZXIpLFxuICAgICAgYWx0OiBhbHQgfHwgdGhpcy5nZXRBbHQoY29udGFpbmVyLCBmb3JtYXQpLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldE1haW5JbWFnZShtZWRpYSwgZm9ybWF0Pzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAobWVkaWEgJiYgbWVkaWFbZm9ybWF0IHx8IERFRkFVTFRfTUVESUFfRk9STUFUXSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VVcmwobWVkaWFbZm9ybWF0IHx8IERFRkFVTFRfTUVESUFfRk9STUFUXS51cmwpO1xuICAgIH0gZWxzZSBpZiAobWVkaWEgJiYgbWVkaWEudXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVVybChtZWRpYS51cmwpO1xuICAgIH0gZWxzZSBpZiAobWVkaWEgJiYgbWVkaWFbdGhpcy5nZXRIaWdoZXN0QXZhaWxhYmxlRm9ybWF0KG1lZGlhKV0pIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEltYWdlVXJsKG1lZGlhW3RoaXMuZ2V0SGlnaGVzdEF2YWlsYWJsZUZvcm1hdChtZWRpYSldLnVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGhpZ2hlc3QgcmVzb2x1dGlvbiBmb3JtYXQgbmFtZSBmcm9tIG1lZGlhIGZvcm1hdHNcbiAgICovXG4gIHByaXZhdGUgZ2V0SGlnaGVzdEF2YWlsYWJsZUZvcm1hdChtZWRpYSk6IHN0cmluZyB7XG4gICAgaWYgKG1lZGlhKSB7XG4gICAgICBsZXQgbWVkaWFGb3JtYXQ6IE1lZGlhRm9ybWF0cztcblxuICAgICAgdGhpcy5tZWRpYUZvcm1hdHMuZm9yRWFjaChmb3JtYXQgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIW1lZGlhRm9ybWF0IHx8XG4gICAgICAgICAgKG1lZGlhRm9ybWF0LnRocmVzaG9sZCA8IGZvcm1hdC50aHJlc2hvbGQgJiYgbWVkaWFbZm9ybWF0LmNvZGVdKVxuICAgICAgICApIHtcbiAgICAgICAgICBtZWRpYUZvcm1hdCA9IGZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBtZWRpYUZvcm1hdC5jb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBbHQobWVkaWEsIGZvcm1hdD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFtZWRpYSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKG1lZGlhW2Zvcm1hdCB8fCBERUZBVUxUX01FRElBX0ZPUk1BVF0pIHtcbiAgICAgIHJldHVybiBtZWRpYVtmb3JtYXQgfHwgREVGQVVMVF9NRURJQV9GT1JNQVRdLmFsdFRleHQ7XG4gICAgfSBlbHNlIGlmIChtZWRpYS5hbHRUZXh0KSB7XG4gICAgICByZXR1cm4gbWVkaWEuYWx0VGV4dDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYnVpbGRzIGEgc2V0IG9mIGltYWdlcyBhbGlnbmVkIHdpdGggdGhlIGJyZWFrcG9pbnRzXG4gICAqL1xuICBwcml2YXRlIGdldFNyY1NldChtZWRpYSk6IHN0cmluZyB7XG4gICAgaWYgKCFtZWRpYSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3Qgc3Jjc2V0ID0gdGhpcy5tZWRpYUZvcm1hdHMucmVkdWNlKChzZXQsIGZvcm1hdCkgPT4ge1xuICAgICAgaWYgKCEhbWVkaWFbZm9ybWF0LmNvZGVdKSB7XG4gICAgICAgIGlmIChzZXQpIHtcbiAgICAgICAgICBzZXQgKz0gJywgJztcbiAgICAgICAgfVxuICAgICAgICBzZXQgKz0gYCR7dGhpcy5nZXRJbWFnZVVybChtZWRpYVtmb3JtYXQuY29kZV0udXJsKX0gJHtcbiAgICAgICAgICBmb3JtYXQudGhyZXNob2xkXG4gICAgICAgIH13YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXQ7XG4gICAgfSwgJycpO1xuXG4gICAgcmV0dXJuIHNyY3NldCA9PT0gJycgPyB1bmRlZmluZWQgOiBzcmNzZXQ7XG4gIH1cblxuICBwcml2YXRlIGdldEltYWdlVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXVybCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aCgnaHR0cCcpID8gdXJsIDogdGhpcy5nZXRCYXNlVXJsKCkgKyB1cmw7XG4gIH1cblxuICBwcml2YXRlIGdldEJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZC5tZWRpYS5iYXNlVXJsIHx8IHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmwgfHwgJydcbiAgICApO1xuICB9XG59XG4iXX0=