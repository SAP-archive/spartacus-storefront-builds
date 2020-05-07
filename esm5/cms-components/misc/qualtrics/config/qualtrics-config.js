import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Config } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/**
 * Configuration options for the Qualtrics integration, which allows you to
 * specify the qualtrics project and deployment script.
 */
var QualtricsConfig = /** @class */ (function () {
    function QualtricsConfig() {
    }
    QualtricsConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function QualtricsConfig_Factory() { return i0.ɵɵinject(i1.Config); }, token: QualtricsConfig, providedIn: "root" });
    QualtricsConfig = __decorate([
        Injectable({
            providedIn: 'root',
            useExisting: Config,
        })
    ], QualtricsConfig);
    return QualtricsConfig;
}());
export { QualtricsConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvcXVhbHRyaWNzL2NvbmZpZy9xdWFsdHJpY3MtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRXpDOzs7R0FHRztBQUtIO0lBQUE7S0FhQzs7SUFicUIsZUFBZTtRQUpwQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtZQUNsQixXQUFXLEVBQUUsTUFBTTtTQUNwQixDQUFDO09BQ29CLGVBQWUsQ0FhcEM7MEJBeEJEO0NBd0JDLEFBYkQsSUFhQztTQWJxQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBRdWFsdHJpY3MgaW50ZWdyYXRpb24sIHdoaWNoIGFsbG93cyB5b3UgdG9cbiAqIHNwZWNpZnkgdGhlIHF1YWx0cmljcyBwcm9qZWN0IGFuZCBkZXBsb3ltZW50IHNjcmlwdC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIHVzZUV4aXN0aW5nOiBDb25maWcsXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFF1YWx0cmljc0NvbmZpZyB7XG4gIC8qKlxuICAgKiBIb2xkcyB0aGUgcXVhbHRyaWNzIGludGVncmF0aW9uIG9wdGlvbnMuXG4gICAqL1xuICBxdWFsdHJpY3M/OiB7XG4gICAgLyoqXG4gICAgICogRGVwbG95bWVudCBzY3JpcHQsIGxvYWRlZCBmcm9tIGEgcmVzb3VyY2UsIHRvIGludGVncmF0ZSB0aGUgZGVwbG95bWVudCBvZiB0aGUgcXVhbHRyaWNzIHByb2plY3QuXG4gICAgICogWW91IHdvdWxkIHR5cGljYWxseSBzdG9yZSB0aGUgZmlsZSBpbiB0aGUgbG9jYWwgYXNzZXRzIGZvbGRlci5cbiAgICAgKlxuICAgICAqIERlZmF1bHRzIHRvIGBhc3NldHMvcXVhbHRyaWNzSW50ZWdyYXRpb24uanNgXG4gICAgICovXG4gICAgc2NyaXB0U291cmNlPzogc3RyaW5nO1xuICB9O1xufVxuIl19