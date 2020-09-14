import { MediaFormatSize } from './media.model';
/**
 * Provides configuration specific to Media, such as images. This is used to optimize
 * rendering of the media, SEO and performance.
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class MediaConfig {
    /**
     * Media _format_ configuration holds the size of the media's assigned to
     * a format.
     */
    mediaFormats?: {
        /**
         * Represents the media format code, that is the key to distinguish different
         * media in a container.
         */
        [format: string]: MediaFormatSize;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MediaConfig, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29uZmlnLmQudHMiLCJzb3VyY2VzIjpbIm1lZGlhLmNvbmZpZy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7OztBQVlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVkaWFGb3JtYXRTaXplIH0gZnJvbSAnLi9tZWRpYS5tb2RlbCc7XG4vKipcbiAqIFByb3ZpZGVzIGNvbmZpZ3VyYXRpb24gc3BlY2lmaWMgdG8gTWVkaWEsIHN1Y2ggYXMgaW1hZ2VzLiBUaGlzIGlzIHVzZWQgdG8gb3B0aW1pemVcbiAqIHJlbmRlcmluZyBvZiB0aGUgbWVkaWEsIFNFTyBhbmQgcGVyZm9ybWFuY2UuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIE1lZGlhQ29uZmlnIHtcbiAgICAvKipcbiAgICAgKiBNZWRpYSBfZm9ybWF0XyBjb25maWd1cmF0aW9uIGhvbGRzIHRoZSBzaXplIG9mIHRoZSBtZWRpYSdzIGFzc2lnbmVkIHRvXG4gICAgICogYSBmb3JtYXQuXG4gICAgICovXG4gICAgbWVkaWFGb3JtYXRzPzoge1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVwcmVzZW50cyB0aGUgbWVkaWEgZm9ybWF0IGNvZGUsIHRoYXQgaXMgdGhlIGtleSB0byBkaXN0aW5ndWlzaCBkaWZmZXJlbnRcbiAgICAgICAgICogbWVkaWEgaW4gYSBjb250YWluZXIuXG4gICAgICAgICAqL1xuICAgICAgICBbZm9ybWF0OiBzdHJpbmddOiBNZWRpYUZvcm1hdFNpemU7XG4gICAgfTtcbn1cbiJdfQ==