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
const DEFAULT_MEDIA_FORMAT = 'tablet';
export class MediaService {
    /**
     * @param {?} config
     * @param {?} layoutConfig
     */
    constructor(config, layoutConfig) {
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
        this.getImageUrl = (url) => {
            return url.startsWith('http') ? url : this.getBaseUrl() + url;
        };
    }
    /**
     * @param {?} media
     * @param {?=} format
     * @param {?=} alt
     * @return {?}
     */
    getImage(media, format, alt) {
        return {
            src: this.getMainImage(media, format),
            srcset: this.getSrcSet(media),
            alt: alt || this.getAlt(media, format),
        };
    }
    /**
     * @param {?=} alt
     * @return {?}
     */
    getMissingImage(alt) {
        return {
            src: this.getMissingImageSrc(),
            alt: alt || undefined,
        };
    }
    /**
     * @private
     * @return {?}
     */
    getMissingImageSrc() {
        return missingProductImgSrc;
    }
    /**
     * @private
     * @param {?} media
     * @param {?=} format
     * @return {?}
     */
    getMainImage(media, format) {
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
        const srcset = this.mediaFormats.reduce((set, format) => {
            if (!!media[format.code]) {
                if (set) {
                    set += ', ';
                }
                set += `${this.getImageUrl(media[format.code].url)} ${format.threshold}w`;
            }
            return set;
        }, '');
        return srcset === '' ? undefined : srcset;
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
    { type: LayoutConfig }
];
/** @nocollapse */ MediaService.ngInjectableDef = i0.defineInjectable({ factory: function MediaService_Factory() { return new MediaService(i0.inject(i1.OccConfig), i0.inject(i2.LayoutConfig)); }, token: MediaService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL21lZGlhL21lZGlhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7Ozs7O01BSXZFLG9CQUFvQixHQUFHLFFBQVE7QUFLckMsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBQ3ZCLFlBQ1ksTUFBaUIsRUFDakIsWUFBMEI7UUFEMUIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUc5QixpQkFBWSxHQUFtQjtZQUNyQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUMzRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUMzRTtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQzthQUN4RDtZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQzthQUN4RDtTQUNGLENBQUM7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Q0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FDM0UsQ0FBQztJQUNKLENBQUM7OztZQTdGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFWUSxTQUFTO1lBQ0csWUFBWTs7Ozs7Ozs7SUFnQi9CLG9DQVdFOzs7OztJQWlFRixtQ0FFRTs7Ozs7SUFsRkEsOEJBQTJCOzs7OztJQUMzQixvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQlJFQUtQT0lOVCwgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2luZGV4JztcbmltcG9ydCB7IG1pc3NpbmdQcm9kdWN0SW1nU3JjIH0gZnJvbSAnLi4vLi4vLi4vbGliL3VpL2ltYWdlcy9taXNzaW5nUHJvZHVjdCc7XG5pbXBvcnQgeyBNZWRpYSwgTWVkaWFGb3JtYXRzIH0gZnJvbSAnLi9tZWRpYS5tb2RlbCc7XG5cbi8qKiB0aGUgZGVmYXVsdCBmb3JtYXQgaXMgdXNlZCBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCAgICovXG5jb25zdCBERUZBVUxUX01FRElBX0ZPUk1BVCA9ICd0YWJsZXQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnLFxuICAgIHByb3RlY3RlZCBsYXlvdXRDb25maWc6IExheW91dENvbmZpZ1xuICApIHt9XG5cbiAgcHJpdmF0ZSBtZWRpYUZvcm1hdHM6IE1lZGlhRm9ybWF0c1tdID0gW1xuICAgIHsgY29kZTogJ21vYmlsZScsIHRocmVzaG9sZDogdGhpcy5sYXlvdXRDb25maWcuYnJlYWtwb2ludHNbQlJFQUtQT0lOVC54c10gfSxcbiAgICB7IGNvZGU6ICd0YWJsZXQnLCB0aHJlc2hvbGQ6IHRoaXMubGF5b3V0Q29uZmlnLmJyZWFrcG9pbnRzW0JSRUFLUE9JTlQuc21dIH0sXG4gICAge1xuICAgICAgY29kZTogJ2Rlc2t0b3AnLFxuICAgICAgdGhyZXNob2xkOiB0aGlzLmxheW91dENvbmZpZy5icmVha3BvaW50c1tCUkVBS1BPSU5ULm1kXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6ICd3aWRlc2NyZWVuJyxcbiAgICAgIHRocmVzaG9sZDogdGhpcy5sYXlvdXRDb25maWcuYnJlYWtwb2ludHNbQlJFQUtQT0lOVC5sZ10sXG4gICAgfSxcbiAgXTtcblxuICBnZXRJbWFnZShtZWRpYSwgZm9ybWF0Pzogc3RyaW5nLCBhbHQ/OiBzdHJpbmcpOiBNZWRpYSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNyYzogdGhpcy5nZXRNYWluSW1hZ2UobWVkaWEsIGZvcm1hdCksXG4gICAgICBzcmNzZXQ6IHRoaXMuZ2V0U3JjU2V0KG1lZGlhKSxcbiAgICAgIGFsdDogYWx0IHx8IHRoaXMuZ2V0QWx0KG1lZGlhLCBmb3JtYXQpLFxuICAgIH07XG4gIH1cblxuICBnZXRNaXNzaW5nSW1hZ2UoYWx0Pzogc3RyaW5nKTogTWVkaWEge1xuICAgIHJldHVybiB7XG4gICAgICBzcmM6IHRoaXMuZ2V0TWlzc2luZ0ltYWdlU3JjKCksXG4gICAgICBhbHQ6IGFsdCB8fCB1bmRlZmluZWQsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWlzc2luZ0ltYWdlU3JjKCkge1xuICAgIHJldHVybiBtaXNzaW5nUHJvZHVjdEltZ1NyYztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWFpbkltYWdlKG1lZGlhLCBmb3JtYXQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghbWVkaWEpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldE1pc3NpbmdJbWFnZVNyYygpO1xuICAgIH0gZWxzZSBpZiAobWVkaWFbZm9ybWF0IHx8IERFRkFVTFRfTUVESUFfRk9STUFUXSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VVcmwobWVkaWFbZm9ybWF0IHx8IERFRkFVTFRfTUVESUFfRk9STUFUXS51cmwpO1xuICAgIH0gZWxzZSBpZiAobWVkaWEudXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVVybChtZWRpYS51cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRNaXNzaW5nSW1hZ2VTcmMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEFsdChtZWRpYSwgZm9ybWF0Pzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIW1lZGlhKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAobWVkaWFbZm9ybWF0IHx8IERFRkFVTFRfTUVESUFfRk9STUFUXSkge1xuICAgICAgcmV0dXJuIG1lZGlhW2Zvcm1hdCB8fCBERUZBVUxUX01FRElBX0ZPUk1BVF0uYWx0VGV4dDtcbiAgICB9IGVsc2UgaWYgKG1lZGlhLmFsdFRleHQpIHtcbiAgICAgIHJldHVybiBtZWRpYS5hbHRUZXh0O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBidWlsZHMgYSBzZXQgb2YgaW1hZ2VzIGFsaWduZWQgd2l0aCB0aGUgYnJlYWtwb2ludHNcbiAgICovXG4gIHByaXZhdGUgZ2V0U3JjU2V0KG1lZGlhKTogc3RyaW5nIHtcbiAgICBpZiAoIW1lZGlhKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBzcmNzZXQgPSB0aGlzLm1lZGlhRm9ybWF0cy5yZWR1Y2UoKHNldCwgZm9ybWF0KSA9PiB7XG4gICAgICBpZiAoISFtZWRpYVtmb3JtYXQuY29kZV0pIHtcbiAgICAgICAgaWYgKHNldCkge1xuICAgICAgICAgIHNldCArPSAnLCAnO1xuICAgICAgICB9XG4gICAgICAgIHNldCArPSBgJHt0aGlzLmdldEltYWdlVXJsKG1lZGlhW2Zvcm1hdC5jb2RlXS51cmwpfSAke1xuICAgICAgICAgIGZvcm1hdC50aHJlc2hvbGRcbiAgICAgICAgfXdgO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNldDtcbiAgICB9LCAnJyk7XG5cbiAgICByZXR1cm4gc3Jjc2V0ID09PSAnJyA/IHVuZGVmaW5lZCA6IHNyY3NldDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SW1hZ2VVcmwgPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSA/IHVybCA6IHRoaXMuZ2V0QmFzZVVybCgpICsgdXJsO1xuICB9O1xuXG4gIHByaXZhdGUgZ2V0QmFzZVVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLm1lZGlhLmJhc2VVcmwgfHwgdGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCB8fCAnJ1xuICAgICk7XG4gIH1cbn1cbiJdfQ==