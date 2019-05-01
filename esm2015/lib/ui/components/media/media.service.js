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
     * @return {?}
     */
    getMissingImage() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9jb21wb25lbnRzL21lZGlhL21lZGlhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7O01BSXhELG9CQUFvQixHQUFHLFFBQVE7QUFLckMsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBQ3ZCLFlBQ1ksTUFBaUIsRUFDakIsWUFBMEI7UUFEMUIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUc5QixpQkFBWSxHQUFtQjtZQUNyQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUMzRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUMzRTtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQzthQUN4RDtZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQzthQUN4RDtTQUNGLENBQUM7UUEwRE0sZ0JBQVcsR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFO1lBQ3BDLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ2hFLENBQUMsQ0FBQztJQXpFQyxDQUFDOzs7Ozs7O0lBZUosUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFlLEVBQUUsR0FBWTtRQUMzQyxPQUFPO1lBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztZQUNyQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDN0IsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7U0FDdkMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsT0FBTyxvQkFBb0IsQ0FBQztJQUM5QixDQUFDOzs7Ozs7O0lBRU8sWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFlO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMvQjthQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxvQkFBb0IsQ0FBQyxFQUFFO1lBQ2hELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEU7YUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFlO1FBQ25DLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLFNBQVMsQ0FBQztTQUNsQjthQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxvQkFBb0IsQ0FBQyxFQUFFO1lBQ2hELE9BQU8sS0FBSyxDQUFDLE1BQU0sSUFBSSxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUN0RDthQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUN4QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7Ozs7O0lBS08sU0FBUyxDQUFDLEtBQUs7UUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sU0FBUyxDQUFDO1NBQ2xCOztjQUNLLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0RCxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4QixJQUFJLEdBQUcsRUFBRTtvQkFDUCxHQUFHLElBQUksSUFBSSxDQUFDO2lCQUNiO2dCQUNELEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFDaEQsTUFBTSxDQUFDLFNBQ1QsR0FBRyxDQUFDO2FBQ0w7WUFDRCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFTixPQUFPLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBTU8sVUFBVTtRQUNoQixPQUFPLENBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FDM0UsQ0FBQztJQUNKLENBQUM7OztZQXRGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFWUSxTQUFTO1lBRUcsWUFBWTs7Ozs7Ozs7SUFlL0Isb0NBV0U7Ozs7O0lBMERGLG1DQUVFOzs7OztJQTNFQSw4QkFBMkI7Ozs7O0lBQzNCLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBtaXNzaW5nUHJvZHVjdEltZ1NyYyB9IGZyb20gJy4uLy4uL2ltYWdlcy9taXNzaW5nUHJvZHVjdCc7XG5pbXBvcnQgeyBCUkVBS1BPSU5ULCBMYXlvdXRDb25maWcgfSBmcm9tICcuLi8uLi9sYXlvdXQvaW5kZXgnO1xuaW1wb3J0IHsgTWVkaWEsIE1lZGlhRm9ybWF0cyB9IGZyb20gJy4vbWVkaWEubW9kZWwnO1xuXG4vKiogdGhlIGRlZmF1bHQgZm9ybWF0IGlzIHVzZWQgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgICAqL1xuY29uc3QgREVGQVVMVF9NRURJQV9GT1JNQVQgPSAndGFibGV0JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWc6IE9jY0NvbmZpZyxcbiAgICBwcm90ZWN0ZWQgbGF5b3V0Q29uZmlnOiBMYXlvdXRDb25maWdcbiAgKSB7fVxuXG4gIHByaXZhdGUgbWVkaWFGb3JtYXRzOiBNZWRpYUZvcm1hdHNbXSA9IFtcbiAgICB7IGNvZGU6ICdtb2JpbGUnLCB0aHJlc2hvbGQ6IHRoaXMubGF5b3V0Q29uZmlnLmJyZWFrcG9pbnRzW0JSRUFLUE9JTlQueHNdIH0sXG4gICAgeyBjb2RlOiAndGFibGV0JywgdGhyZXNob2xkOiB0aGlzLmxheW91dENvbmZpZy5icmVha3BvaW50c1tCUkVBS1BPSU5ULnNtXSB9LFxuICAgIHtcbiAgICAgIGNvZGU6ICdkZXNrdG9wJyxcbiAgICAgIHRocmVzaG9sZDogdGhpcy5sYXlvdXRDb25maWcuYnJlYWtwb2ludHNbQlJFQUtQT0lOVC5tZF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiAnd2lkZXNjcmVlbicsXG4gICAgICB0aHJlc2hvbGQ6IHRoaXMubGF5b3V0Q29uZmlnLmJyZWFrcG9pbnRzW0JSRUFLUE9JTlQubGddLFxuICAgIH0sXG4gIF07XG5cbiAgZ2V0SW1hZ2UobWVkaWEsIGZvcm1hdD86IHN0cmluZywgYWx0Pzogc3RyaW5nKTogTWVkaWEge1xuICAgIHJldHVybiB7XG4gICAgICBzcmM6IHRoaXMuZ2V0TWFpbkltYWdlKG1lZGlhLCBmb3JtYXQpLFxuICAgICAgc3Jjc2V0OiB0aGlzLmdldFNyY1NldChtZWRpYSksXG4gICAgICBhbHQ6IGFsdCB8fCB0aGlzLmdldEFsdChtZWRpYSwgZm9ybWF0KSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0TWlzc2luZ0ltYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG1pc3NpbmdQcm9kdWN0SW1nU3JjO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYWluSW1hZ2UobWVkaWEsIGZvcm1hdD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFtZWRpYSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0TWlzc2luZ0ltYWdlKCk7XG4gICAgfSBlbHNlIGlmIChtZWRpYVtmb3JtYXQgfHwgREVGQVVMVF9NRURJQV9GT1JNQVRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVVybChtZWRpYVtmb3JtYXQgfHwgREVGQVVMVF9NRURJQV9GT1JNQVRdLnVybCk7XG4gICAgfSBlbHNlIGlmIChtZWRpYS51cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEltYWdlVXJsKG1lZGlhLnVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmdldE1pc3NpbmdJbWFnZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWx0KG1lZGlhLCBmb3JtYXQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghbWVkaWEpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmIChtZWRpYVtmb3JtYXQgfHwgREVGQVVMVF9NRURJQV9GT1JNQVRdKSB7XG4gICAgICByZXR1cm4gbWVkaWFbZm9ybWF0IHx8IERFRkFVTFRfTUVESUFfRk9STUFUXS5hbHRUZXh0O1xuICAgIH0gZWxzZSBpZiAobWVkaWEuYWx0VGV4dCkge1xuICAgICAgcmV0dXJuIG1lZGlhLmFsdFRleHQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGJ1aWxkcyBhIHNldCBvZiBpbWFnZXMgYWxpZ25lZCB3aXRoIHRoZSBicmVha3BvaW50c1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRTcmNTZXQobWVkaWEpOiBzdHJpbmcge1xuICAgIGlmICghbWVkaWEpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHNyY3NldCA9IHRoaXMubWVkaWFGb3JtYXRzLnJlZHVjZSgoc2V0LCBmb3JtYXQpID0+IHtcbiAgICAgIGlmICghIW1lZGlhW2Zvcm1hdC5jb2RlXSkge1xuICAgICAgICBpZiAoc2V0KSB7XG4gICAgICAgICAgc2V0ICs9ICcsICc7XG4gICAgICAgIH1cbiAgICAgICAgc2V0ICs9IGAke3RoaXMuZ2V0SW1hZ2VVcmwobWVkaWFbZm9ybWF0LmNvZGVdLnVybCl9ICR7XG4gICAgICAgICAgZm9ybWF0LnRocmVzaG9sZFxuICAgICAgICB9d2A7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2V0O1xuICAgIH0sICcnKTtcblxuICAgIHJldHVybiBzcmNzZXQgPT09ICcnID8gdW5kZWZpbmVkIDogc3Jjc2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJbWFnZVVybCA9ICh1cmw6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aCgnaHR0cCcpID8gdXJsIDogdGhpcy5nZXRCYXNlVXJsKCkgKyB1cmw7XG4gIH07XG5cbiAgcHJpdmF0ZSBnZXRCYXNlVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQubWVkaWEuYmFzZVVybCB8fCB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8ICcnXG4gICAgKTtcbiAgfVxufVxuIl19