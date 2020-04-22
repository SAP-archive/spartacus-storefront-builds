import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Config } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
let PWAModuleConfig = class PWAModuleConfig {
};
PWAModuleConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function PWAModuleConfig_Factory() { return i0.ɵɵinject(i1.Config); }, token: PWAModuleConfig, providedIn: "root" });
PWAModuleConfig = __decorate([
    Injectable({
        providedIn: 'root',
        useExisting: Config,
    })
], PWAModuleConfig);
export { PWAModuleConfig };
export const defaultPWAModuleConfig = {
    pwa: {
        enabled: false,
        addToHomeScreen: false,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLm1vZHVsZS1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3B3YS9wd2EubW9kdWxlLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQU16QyxJQUFzQixlQUFlLEdBQXJDLE1BQXNCLGVBQWU7Q0FLcEMsQ0FBQTs7QUFMcUIsZUFBZTtJQUpwQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtRQUNsQixXQUFXLEVBQUUsTUFBTTtLQUNwQixDQUFDO0dBQ29CLGVBQWUsQ0FLcEM7U0FMcUIsZUFBZTtBQU9yQyxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBb0I7SUFDckQsR0FBRyxFQUFFO1FBQ0gsT0FBTyxFQUFFLEtBQUs7UUFDZCxlQUFlLEVBQUUsS0FBSztLQUN2QjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgdXNlRXhpc3Rpbmc6IENvbmZpZyxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUFdBTW9kdWxlQ29uZmlnIHtcbiAgcHdhPzoge1xuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgIGFkZFRvSG9tZVNjcmVlbj86IGJvb2xlYW47XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0UFdBTW9kdWxlQ29uZmlnOiBQV0FNb2R1bGVDb25maWcgPSB7XG4gIHB3YToge1xuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIGFkZFRvSG9tZVNjcmVlbjogZmFsc2UsXG4gIH0sXG59O1xuIl19