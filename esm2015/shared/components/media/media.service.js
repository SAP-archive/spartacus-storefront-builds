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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL21lZGlhL21lZGlhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7Ozs7O01BSXZFLG9CQUFvQixHQUFHLFFBQVE7QUFLckMsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBQ3ZCLFlBQ1ksTUFBaUIsRUFDakIsWUFBMEI7UUFEMUIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUc5QixpQkFBWSxHQUFtQjtZQUNyQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUMzRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUMzRTtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQzthQUN4RDtZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQzthQUN4RDtTQUNGLENBQUM7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Q0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FDM0UsQ0FBQztJQUNKLENBQUM7OztZQTdGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFWUSxTQUFTO1lBQ0csWUFBWTs7Ozs7Ozs7SUFnQi9CLG9DQVdFOzs7OztJQWlFRixtQ0FFRTs7Ozs7SUFsRkEsOEJBQTJCOzs7OztJQUMzQixvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQlJFQUtQT0lOVCwgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2luZGV4JztcbmltcG9ydCB7IG1pc3NpbmdQcm9kdWN0SW1nU3JjIH0gZnJvbSAnLi4vLi4vLi4vbGliL3VpL2ltYWdlcy9taXNzaW5nUHJvZHVjdCc7XG5pbXBvcnQgeyBNZWRpYSwgTWVkaWFGb3JtYXRzIH0gZnJvbSAnLi9tZWRpYS5tb2RlbCc7XG5cbi8qKiB0aGUgZGVmYXVsdCBmb3JtYXQgaXMgdXNlZCBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCAgICovXG5jb25zdCBERUZBVUxUX01FRElBX0ZPUk1BVCA9ICd0YWJsZXQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnLFxuICAgIHByb3RlY3RlZCBsYXlvdXRDb25maWc6IExheW91dENvbmZpZ1xuICApIHt9XG5cbiAgcHJpdmF0ZSBtZWRpYUZvcm1hdHM6IE1lZGlhRm9ybWF0c1tdID0gW1xuICAgIHsgY29kZTogJ21vYmlsZScsIHRocmVzaG9sZDogdGhpcy5sYXlvdXRDb25maWcuYnJlYWtwb2ludHNbQlJFQUtQT0lOVC54c10gfSxcbiAgICB7IGNvZGU6ICd0YWJsZXQnLCB0aHJlc2hvbGQ6IHRoaXMubGF5b3V0Q29uZmlnLmJyZWFrcG9pbnRzW0JSRUFLUE9JTlQuc21dIH0sXG4gICAge1xuICAgICAgY29kZTogJ2Rlc2t0b3AnLFxuICAgICAgdGhyZXNob2xkOiB0aGlzLmxheW91dENvbmZpZy5icmVha3BvaW50c1tCUkVBS1BPSU5ULm1kXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6ICd3aWRlc2NyZWVuJyxcbiAgICAgIHRocmVzaG9sZDogdGhpcy5sYXlvdXRDb25maWcuYnJlYWtwb2ludHNbQlJFQUtQT0lOVC5sZ10sXG4gICAgfSxcbiAgXTtcblxuICBnZXRNZWRpYShjb250YWluZXIsIGZvcm1hdD86IHN0cmluZywgYWx0Pzogc3RyaW5nKTogTWVkaWEge1xuICAgIHJldHVybiB7XG4gICAgICBzcmM6IHRoaXMuZ2V0TWFpbkltYWdlKGNvbnRhaW5lciwgZm9ybWF0KSxcbiAgICAgIHNyY3NldDogdGhpcy5nZXRTcmNTZXQoY29udGFpbmVyKSxcbiAgICAgIGFsdDogYWx0IHx8IHRoaXMuZ2V0QWx0KGNvbnRhaW5lciwgZm9ybWF0KSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0TWlzc2luZ0ltYWdlKGFsdD86IHN0cmluZyk6IE1lZGlhIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3JjOiB0aGlzLmdldE1pc3NpbmdJbWFnZVNyYygpLFxuICAgICAgYWx0OiBhbHQgfHwgdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldE1pc3NpbmdJbWFnZVNyYygpIHtcbiAgICByZXR1cm4gbWlzc2luZ1Byb2R1Y3RJbWdTcmM7XG4gIH1cblxuICBwcml2YXRlIGdldE1haW5JbWFnZShtZWRpYSwgZm9ybWF0Pzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIW1lZGlhKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRNaXNzaW5nSW1hZ2VTcmMoKTtcbiAgICB9IGVsc2UgaWYgKG1lZGlhW2Zvcm1hdCB8fCBERUZBVUxUX01FRElBX0ZPUk1BVF0pIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEltYWdlVXJsKG1lZGlhW2Zvcm1hdCB8fCBERUZBVUxUX01FRElBX0ZPUk1BVF0udXJsKTtcbiAgICB9IGVsc2UgaWYgKG1lZGlhLnVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VVcmwobWVkaWEudXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0TWlzc2luZ0ltYWdlU3JjKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRBbHQobWVkaWEsIGZvcm1hdD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFtZWRpYSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKG1lZGlhW2Zvcm1hdCB8fCBERUZBVUxUX01FRElBX0ZPUk1BVF0pIHtcbiAgICAgIHJldHVybiBtZWRpYVtmb3JtYXQgfHwgREVGQVVMVF9NRURJQV9GT1JNQVRdLmFsdFRleHQ7XG4gICAgfSBlbHNlIGlmIChtZWRpYS5hbHRUZXh0KSB7XG4gICAgICByZXR1cm4gbWVkaWEuYWx0VGV4dDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYnVpbGRzIGEgc2V0IG9mIGltYWdlcyBhbGlnbmVkIHdpdGggdGhlIGJyZWFrcG9pbnRzXG4gICAqL1xuICBwcml2YXRlIGdldFNyY1NldChtZWRpYSk6IHN0cmluZyB7XG4gICAgaWYgKCFtZWRpYSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3Qgc3Jjc2V0ID0gdGhpcy5tZWRpYUZvcm1hdHMucmVkdWNlKChzZXQsIGZvcm1hdCkgPT4ge1xuICAgICAgaWYgKCEhbWVkaWFbZm9ybWF0LmNvZGVdKSB7XG4gICAgICAgIGlmIChzZXQpIHtcbiAgICAgICAgICBzZXQgKz0gJywgJztcbiAgICAgICAgfVxuICAgICAgICBzZXQgKz0gYCR7dGhpcy5nZXRJbWFnZVVybChtZWRpYVtmb3JtYXQuY29kZV0udXJsKX0gJHtcbiAgICAgICAgICBmb3JtYXQudGhyZXNob2xkXG4gICAgICAgIH13YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXQ7XG4gICAgfSwgJycpO1xuXG4gICAgcmV0dXJuIHNyY3NldCA9PT0gJycgPyB1bmRlZmluZWQgOiBzcmNzZXQ7XG4gIH1cblxuICBwcml2YXRlIGdldEltYWdlVXJsID0gKHVybDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKCdodHRwJykgPyB1cmwgOiB0aGlzLmdldEJhc2VVcmwoKSArIHVybDtcbiAgfTtcblxuICBwcml2YXRlIGdldEJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZC5tZWRpYS5iYXNlVXJsIHx8IHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmwgfHwgJydcbiAgICApO1xuICB9XG59XG4iXX0=