import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { OccConfig } from '@spartacus/core';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import { BREAKPOINT } from '../../../layout/config/layout-config';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../../../layout/breakpoint/breakpoint.service";
/** the default format is used for browsers that do not support   */
const DEFAULT_MEDIA_FORMAT = 'tablet';
let MediaService = class MediaService {
    constructor(config, breakpointService) {
        this.config = config;
        this.breakpointService = breakpointService;
    }
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
    getMedia(container, format, alt) {
        return {
            src: this.getMainImage(container, format),
            srcset: this.getSrcSet(container),
            alt: alt || this.getAlt(container, format),
        };
    }
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
     */
    getHighestAvailableFormat(media) {
        if (media) {
            let mediaFormat;
            this.mediaFormats.forEach(format => {
                if (!mediaFormat ||
                    (mediaFormat.threshold < format.threshold && media[format.code])) {
                    mediaFormat = format;
                }
            });
            return mediaFormat.code;
        }
        return null;
    }
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
     */
    getSrcSet(media) {
        if (!media) {
            return undefined;
        }
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
    getImageUrl(url) {
        if (!url) {
            return null;
        }
        return url.startsWith('http') ? url : this.getBaseUrl() + url;
    }
    getBaseUrl() {
        return (this.config.backend.media.baseUrl || this.config.backend.occ.baseUrl || '');
    }
};
MediaService.ctorParameters = () => [
    { type: OccConfig },
    { type: BreakpointService }
];
MediaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MediaService_Factory() { return new MediaService(i0.ɵɵinject(i1.OccConfig), i0.ɵɵinject(i2.BreakpointService)); }, token: MediaService, providedIn: "root" });
MediaService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], MediaService);
export { MediaService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL21lZGlhL21lZGlhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQUdsRSxvRUFBb0U7QUFDcEUsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUM7QUFLdEMsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUN2QixZQUNZLE1BQWlCLEVBQ2pCLGlCQUFvQztRQURwQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDN0MsQ0FBQztJQUVKLElBQVksWUFBWTtRQUN0QixPQUFPO1lBQ0w7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQzthQUN6RDtZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7YUFDekQ7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO2FBQ3pEO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7YUFDekQ7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVEsQ0FBQyxTQUFTLEVBQUUsTUFBZSxFQUFFLEdBQVk7UUFDL0MsT0FBTztZQUNMLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7WUFDekMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1lBQ2pDLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO1NBQzNDLENBQUM7SUFDSixDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFlO1FBQ3pDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksb0JBQW9CLENBQUMsRUFBRTtZQUNsRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxvQkFBb0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BFO2FBQU0sSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDO2FBQU0sSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0U7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSyx5QkFBeUIsQ0FBQyxLQUFLO1FBQ3JDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxXQUF5QixDQUFDO1lBRTlCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNqQyxJQUNFLENBQUMsV0FBVztvQkFDWixDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ2hFO29CQUNBLFdBQVcsR0FBRyxNQUFNLENBQUM7aUJBQ3RCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDekI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQWU7UUFDbkMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO2FBQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLG9CQUFvQixDQUFDLEVBQUU7WUFDaEQsT0FBTyxLQUFLLENBQUMsTUFBTSxJQUFJLG9CQUFvQixDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ3REO2FBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3hCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNLLFNBQVMsQ0FBQyxLQUFLO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksR0FBRyxFQUFFO29CQUNQLEdBQUcsSUFBSSxJQUFJLENBQUM7aUJBQ2I7Z0JBQ0QsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUNoRCxNQUFNLENBQUMsU0FDVCxHQUFHLENBQUM7YUFDTDtZQUNELE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRVAsT0FBTyxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM1QyxDQUFDO0lBRU8sV0FBVyxDQUFDLEdBQVc7UUFDN0IsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUNoRSxDQUFDO0lBRU8sVUFBVTtRQUNoQixPQUFPLENBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FDM0UsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQS9HcUIsU0FBUztZQUNFLGlCQUFpQjs7O0FBSHJDLFlBQVk7SUFIeEIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLFlBQVksQ0FpSHhCO1NBakhZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQnJlYWtwb2ludFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvYnJlYWtwb2ludC9icmVha3BvaW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQlJFQUtQT0lOVCB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBNZWRpYSwgTWVkaWFGb3JtYXRzIH0gZnJvbSAnLi9tZWRpYS5tb2RlbCc7XG5cbi8qKiB0aGUgZGVmYXVsdCBmb3JtYXQgaXMgdXNlZCBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCAgICovXG5jb25zdCBERUZBVUxUX01FRElBX0ZPUk1BVCA9ICd0YWJsZXQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnLFxuICAgIHByb3RlY3RlZCBicmVha3BvaW50U2VydmljZTogQnJlYWtwb2ludFNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0IG1lZGlhRm9ybWF0cygpOiBNZWRpYUZvcm1hdHNbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ21vYmlsZScsXG4gICAgICAgIHRocmVzaG9sZDogdGhpcy5icmVha3BvaW50U2VydmljZS5nZXRTaXplKEJSRUFLUE9JTlQueHMpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ3RhYmxldCcsXG4gICAgICAgIHRocmVzaG9sZDogdGhpcy5icmVha3BvaW50U2VydmljZS5nZXRTaXplKEJSRUFLUE9JTlQuc20pLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ2Rlc2t0b3AnLFxuICAgICAgICB0aHJlc2hvbGQ6IHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuZ2V0U2l6ZShCUkVBS1BPSU5ULm1kKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICd3aWRlc2NyZWVuJyxcbiAgICAgICAgdGhyZXNob2xkOiB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmdldFNpemUoQlJFQUtQT0lOVC5sZyksXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICBnZXRNZWRpYShjb250YWluZXIsIGZvcm1hdD86IHN0cmluZywgYWx0Pzogc3RyaW5nKTogTWVkaWEge1xuICAgIHJldHVybiB7XG4gICAgICBzcmM6IHRoaXMuZ2V0TWFpbkltYWdlKGNvbnRhaW5lciwgZm9ybWF0KSxcbiAgICAgIHNyY3NldDogdGhpcy5nZXRTcmNTZXQoY29udGFpbmVyKSxcbiAgICAgIGFsdDogYWx0IHx8IHRoaXMuZ2V0QWx0KGNvbnRhaW5lciwgZm9ybWF0KSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYWluSW1hZ2UobWVkaWEsIGZvcm1hdD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKG1lZGlhICYmIG1lZGlhW2Zvcm1hdCB8fCBERUZBVUxUX01FRElBX0ZPUk1BVF0pIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEltYWdlVXJsKG1lZGlhW2Zvcm1hdCB8fCBERUZBVUxUX01FRElBX0ZPUk1BVF0udXJsKTtcbiAgICB9IGVsc2UgaWYgKG1lZGlhICYmIG1lZGlhLnVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VVcmwobWVkaWEudXJsKTtcbiAgICB9IGVsc2UgaWYgKG1lZGlhICYmIG1lZGlhW3RoaXMuZ2V0SGlnaGVzdEF2YWlsYWJsZUZvcm1hdChtZWRpYSldKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVVybChtZWRpYVt0aGlzLmdldEhpZ2hlc3RBdmFpbGFibGVGb3JtYXQobWVkaWEpXS51cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBoaWdoZXN0IHJlc29sdXRpb24gZm9ybWF0IG5hbWUgZnJvbSBtZWRpYSBmb3JtYXRzXG4gICAqL1xuICBwcml2YXRlIGdldEhpZ2hlc3RBdmFpbGFibGVGb3JtYXQobWVkaWEpOiBzdHJpbmcge1xuICAgIGlmIChtZWRpYSkge1xuICAgICAgbGV0IG1lZGlhRm9ybWF0OiBNZWRpYUZvcm1hdHM7XG5cbiAgICAgIHRoaXMubWVkaWFGb3JtYXRzLmZvckVhY2goZm9ybWF0ID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFtZWRpYUZvcm1hdCB8fFxuICAgICAgICAgIChtZWRpYUZvcm1hdC50aHJlc2hvbGQgPCBmb3JtYXQudGhyZXNob2xkICYmIG1lZGlhW2Zvcm1hdC5jb2RlXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgbWVkaWFGb3JtYXQgPSBmb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbWVkaWFGb3JtYXQuY29kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWx0KG1lZGlhLCBmb3JtYXQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghbWVkaWEpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmIChtZWRpYVtmb3JtYXQgfHwgREVGQVVMVF9NRURJQV9GT1JNQVRdKSB7XG4gICAgICByZXR1cm4gbWVkaWFbZm9ybWF0IHx8IERFRkFVTFRfTUVESUFfRk9STUFUXS5hbHRUZXh0O1xuICAgIH0gZWxzZSBpZiAobWVkaWEuYWx0VGV4dCkge1xuICAgICAgcmV0dXJuIG1lZGlhLmFsdFRleHQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGJ1aWxkcyBhIHNldCBvZiBpbWFnZXMgYWxpZ25lZCB3aXRoIHRoZSBicmVha3BvaW50c1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRTcmNTZXQobWVkaWEpOiBzdHJpbmcge1xuICAgIGlmICghbWVkaWEpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHNyY3NldCA9IHRoaXMubWVkaWFGb3JtYXRzLnJlZHVjZSgoc2V0LCBmb3JtYXQpID0+IHtcbiAgICAgIGlmICghIW1lZGlhW2Zvcm1hdC5jb2RlXSkge1xuICAgICAgICBpZiAoc2V0KSB7XG4gICAgICAgICAgc2V0ICs9ICcsICc7XG4gICAgICAgIH1cbiAgICAgICAgc2V0ICs9IGAke3RoaXMuZ2V0SW1hZ2VVcmwobWVkaWFbZm9ybWF0LmNvZGVdLnVybCl9ICR7XG4gICAgICAgICAgZm9ybWF0LnRocmVzaG9sZFxuICAgICAgICB9d2A7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2V0O1xuICAgIH0sICcnKTtcblxuICAgIHJldHVybiBzcmNzZXQgPT09ICcnID8gdW5kZWZpbmVkIDogc3Jjc2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJbWFnZVVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSA/IHVybCA6IHRoaXMuZ2V0QmFzZVVybCgpICsgdXJsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCYXNlVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQubWVkaWEuYmFzZVVybCB8fCB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8ICcnXG4gICAgKTtcbiAgfVxufVxuIl19