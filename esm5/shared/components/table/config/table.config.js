import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Config } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/**
 * The `TableConfig` provides table configurations. The configuration allows for a
 * an optional breakpoint specific structure, so a dedicated table structure per
 * screen size can be generated (see `TableService`).
 *
 * The string based key is used to define a configuration for a specific type. The type
 * binds to a specific component, such as the cost-center table. The various table types
 * should be exposed by feature modules, to ease the configuration.
 *
 * The `TableConfiguration` is added in an array, so that any opinionated default configurations
 * can be replaced by customer configurations.
 */
var TableConfig = /** @class */ (function () {
    function TableConfig() {
    }
    TableConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function TableConfig_Factory() { return i0.ɵɵinject(i1.Config); }, token: TableConfig, providedIn: "root" });
    TableConfig = __decorate([
        Injectable({
            providedIn: 'root',
            useExisting: Config,
        })
    ], TableConfig);
    return TableConfig;
}());
export { TableConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvdGFibGUvY29uZmlnL3RhYmxlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQVd6Qzs7Ozs7Ozs7Ozs7R0FXRztBQUtIO0lBQUE7S0FJQzs7SUFKcUIsV0FBVztRQUpoQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtZQUNsQixXQUFXLEVBQUUsTUFBTTtTQUNwQixDQUFDO09BQ29CLFdBQVcsQ0FJaEM7c0JBaENEO0NBZ0NDLEFBSkQsSUFJQztTQUpxQixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJSRUFLUE9JTlQgfSBmcm9tICcuLi8uLi8uLi8uLi9sYXlvdXQvY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgVGFibGVTdHJ1Y3R1cmVDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vdGFibGUubW9kZWwnO1xuXG4vKipcbiAqIEhlbHBlciBjb25maWd1cmF0aW9uIHRvIGludHJvZHVjZSBhIGJyZWFrcG9pbnQgc3BlY2lmaWMgdGFibGUgY29uZmlndXJhdGlvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUYWJsZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBUYWJsZVN0cnVjdHVyZUNvbmZpZ3VyYXRpb24ge1xuICBicmVha3BvaW50PzogQlJFQUtQT0lOVDtcbn1cblxuLyoqXG4gKiBUaGUgYFRhYmxlQ29uZmlnYCBwcm92aWRlcyB0YWJsZSBjb25maWd1cmF0aW9ucy4gVGhlIGNvbmZpZ3VyYXRpb24gYWxsb3dzIGZvciBhXG4gKiBhbiBvcHRpb25hbCBicmVha3BvaW50IHNwZWNpZmljIHN0cnVjdHVyZSwgc28gYSBkZWRpY2F0ZWQgdGFibGUgc3RydWN0dXJlIHBlclxuICogc2NyZWVuIHNpemUgY2FuIGJlIGdlbmVyYXRlZCAoc2VlIGBUYWJsZVNlcnZpY2VgKS5cbiAqXG4gKiBUaGUgc3RyaW5nIGJhc2VkIGtleSBpcyB1c2VkIHRvIGRlZmluZSBhIGNvbmZpZ3VyYXRpb24gZm9yIGEgc3BlY2lmaWMgdHlwZS4gVGhlIHR5cGVcbiAqIGJpbmRzIHRvIGEgc3BlY2lmaWMgY29tcG9uZW50LCBzdWNoIGFzIHRoZSBjb3N0LWNlbnRlciB0YWJsZS4gVGhlIHZhcmlvdXMgdGFibGUgdHlwZXNcbiAqIHNob3VsZCBiZSBleHBvc2VkIGJ5IGZlYXR1cmUgbW9kdWxlcywgdG8gZWFzZSB0aGUgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBUaGUgYFRhYmxlQ29uZmlndXJhdGlvbmAgaXMgYWRkZWQgaW4gYW4gYXJyYXksIHNvIHRoYXQgYW55IG9waW5pb25hdGVkIGRlZmF1bHQgY29uZmlndXJhdGlvbnNcbiAqIGNhbiBiZSByZXBsYWNlZCBieSBjdXN0b21lciBjb25maWd1cmF0aW9ucy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIHVzZUV4aXN0aW5nOiBDb25maWcsXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhYmxlQ29uZmlnIHtcbiAgdGFibGU6IHtcbiAgICBba2V5OiBzdHJpbmddOiBUYWJsZUNvbmZpZ3VyYXRpb25bXTtcbiAgfTtcbn1cbiJdfQ==