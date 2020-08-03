import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Config } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/**
 * The direction config provides an easy way to configure "ltr" versus "rtl" direction
 * for the storefront. The direction can be configured to detect the direction by language.
 *
 * The following configuration detects rtl languages by isoCode for Arabic and Hebrew:
 *
 * ```typescript
 * direction: {
 *   detect: true,
 *   default: DirectionMode.LTR,
 *   rtlLanguages: ['ar', 'he']
 * }
 * ```
 */
var DirectionConfig = /** @class */ (function () {
    function DirectionConfig() {
    }
    DirectionConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function DirectionConfig_Factory() { return i0.ɵɵinject(i1.Config); }, token: DirectionConfig, providedIn: "root" });
    DirectionConfig = __decorate([
        Injectable({
            providedIn: 'root',
            useExisting: Config,
        })
    ], DirectionConfig);
    return DirectionConfig;
}());
export { DirectionConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9uLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9kaXJlY3Rpb24vY29uZmlnL2RpcmVjdGlvbi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFHekM7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUtIO0lBQUE7S0FFQzs7SUFGcUIsZUFBZTtRQUpwQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtZQUNsQixXQUFXLEVBQUUsTUFBTTtTQUNwQixDQUFDO09BQ29CLGVBQWUsQ0FFcEM7MEJBeEJEO0NBd0JDLEFBRkQsSUFFQztTQUZxQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJy4vZGlyZWN0aW9uLm1vZGVsJztcblxuLyoqXG4gKiBUaGUgZGlyZWN0aW9uIGNvbmZpZyBwcm92aWRlcyBhbiBlYXN5IHdheSB0byBjb25maWd1cmUgXCJsdHJcIiB2ZXJzdXMgXCJydGxcIiBkaXJlY3Rpb25cbiAqIGZvciB0aGUgc3RvcmVmcm9udC4gVGhlIGRpcmVjdGlvbiBjYW4gYmUgY29uZmlndXJlZCB0byBkZXRlY3QgdGhlIGRpcmVjdGlvbiBieSBsYW5ndWFnZS5cbiAqXG4gKiBUaGUgZm9sbG93aW5nIGNvbmZpZ3VyYXRpb24gZGV0ZWN0cyBydGwgbGFuZ3VhZ2VzIGJ5IGlzb0NvZGUgZm9yIEFyYWJpYyBhbmQgSGVicmV3OlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGRpcmVjdGlvbjoge1xuICogICBkZXRlY3Q6IHRydWUsXG4gKiAgIGRlZmF1bHQ6IERpcmVjdGlvbk1vZGUuTFRSLFxuICogICBydGxMYW5ndWFnZXM6IFsnYXInLCAnaGUnXVxuICogfVxuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICB1c2VFeGlzdGluZzogQ29uZmlnLFxufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEaXJlY3Rpb25Db25maWcge1xuICBkaXJlY3Rpb24/OiBEaXJlY3Rpb247XG59XG4iXX0=