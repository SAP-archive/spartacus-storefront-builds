import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Config } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var PWAModuleConfig = /** @class */ (function () {
    function PWAModuleConfig() {
    }
    PWAModuleConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function PWAModuleConfig_Factory() { return i0.ɵɵinject(i1.Config); }, token: PWAModuleConfig, providedIn: "root" });
    PWAModuleConfig = __decorate([
        Injectable({
            providedIn: 'root',
            useExisting: Config,
        })
    ], PWAModuleConfig);
    return PWAModuleConfig;
}());
export { PWAModuleConfig };
export var defaultPWAModuleConfig = {
    pwa: {
        enabled: false,
        addToHomeScreen: false,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLm1vZHVsZS1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3B3YS9wd2EubW9kdWxlLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQU16QztJQUFBO0tBS0M7O0lBTHFCLGVBQWU7UUFKcEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07WUFDbEIsV0FBVyxFQUFFLE1BQU07U0FDcEIsQ0FBQztPQUNvQixlQUFlLENBS3BDOzBCQVpEO0NBWUMsQUFMRCxJQUtDO1NBTHFCLGVBQWU7QUFPckMsTUFBTSxDQUFDLElBQU0sc0JBQXNCLEdBQW9CO0lBQ3JELEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSxLQUFLO1FBQ2QsZUFBZSxFQUFFLEtBQUs7S0FDdkI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIHVzZUV4aXN0aW5nOiBDb25maWcsXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBXQU1vZHVsZUNvbmZpZyB7XG4gIHB3YT86IHtcbiAgICBlbmFibGVkPzogYm9vbGVhbjtcbiAgICBhZGRUb0hvbWVTY3JlZW4/OiBib29sZWFuO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFBXQU1vZHVsZUNvbmZpZzogUFdBTW9kdWxlQ29uZmlnID0ge1xuICBwd2E6IHtcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgICBhZGRUb0hvbWVTY3JlZW46IGZhbHNlLFxuICB9LFxufTtcbiJdfQ==