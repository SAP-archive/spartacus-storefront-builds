import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Config } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/**
 * Provides configuration specific to Media, such as images. This is used to optimize
 * rendering of the media, SEO and performance.
 */
var MediaConfig = /** @class */ (function () {
    function MediaConfig() {
    }
    MediaConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function MediaConfig_Factory() { return i0.ɵɵinject(i1.Config); }, token: MediaConfig, providedIn: "root" });
    MediaConfig = __decorate([
        Injectable({
            providedIn: 'root',
            useExisting: Config,
        })
    ], MediaConfig);
    return MediaConfig;
}());
export { MediaConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRXpDOzs7R0FHRztBQUtIO0lBQUE7S0FZQzs7SUFacUIsV0FBVztRQUpoQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtZQUNsQixXQUFXLEVBQUUsTUFBTTtTQUNwQixDQUFDO09BQ29CLFdBQVcsQ0FZaEM7c0JBeEJEO0NBd0JDLEFBWkQsSUFZQztTQVpxQixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVkaWFGb3JtYXRTaXplIH0gZnJvbSAnLi9tZWRpYS5tb2RlbCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG4vKipcbiAqIFByb3ZpZGVzIGNvbmZpZ3VyYXRpb24gc3BlY2lmaWMgdG8gTWVkaWEsIHN1Y2ggYXMgaW1hZ2VzLiBUaGlzIGlzIHVzZWQgdG8gb3B0aW1pemVcbiAqIHJlbmRlcmluZyBvZiB0aGUgbWVkaWEsIFNFTyBhbmQgcGVyZm9ybWFuY2UuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICB1c2VFeGlzdGluZzogQ29uZmlnLFxufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNZWRpYUNvbmZpZyB7XG4gIC8qKlxuICAgKiBNZWRpYSBfZm9ybWF0XyBjb25maWd1cmF0aW9uIGhvbGRzIHRoZSBzaXplIG9mIHRoZSBtZWRpYSdzIGFzc2lnbmVkIHRvXG4gICAqIGEgZm9ybWF0LlxuICAgKi9cbiAgbWVkaWFGb3JtYXRzPzoge1xuICAgIC8qKlxuICAgICAqIFJlcHJlc2VudHMgdGhlIG1lZGlhIGZvcm1hdCBjb2RlLCB0aGF0IGlzIHRoZSBrZXkgdG8gZGlzdGluZ3Vpc2ggZGlmZmVyZW50XG4gICAgICogbWVkaWEgaW4gYSBjb250YWluZXIuXG4gICAgICovXG4gICAgW2Zvcm1hdDogc3RyaW5nXTogTWVkaWFGb3JtYXRTaXplO1xuICB9O1xufVxuIl19