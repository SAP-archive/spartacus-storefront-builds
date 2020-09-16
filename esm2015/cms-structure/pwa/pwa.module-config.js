import { Injectable } from '@angular/core';
import { Config } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class PWAModuleConfig {
}
PWAModuleConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function PWAModuleConfig_Factory() { return i0.ɵɵinject(i1.Config); }, token: PWAModuleConfig, providedIn: "root" });
PWAModuleConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
                useExisting: Config,
            },] }
];
export const defaultPWAModuleConfig = {
    pwa: {
        enabled: false,
        addToHomeScreen: false,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLm1vZHVsZS1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3B3YS9wd2EubW9kdWxlLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBTXpDLE1BQU0sT0FBZ0IsZUFBZTs7OztZQUpwQyxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07Z0JBQ2xCLFdBQVcsRUFBRSxNQUFNO2FBQ3BCOztBQVFELE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFvQjtJQUNyRCxHQUFHLEVBQUU7UUFDSCxPQUFPLEVBQUUsS0FBSztRQUNkLGVBQWUsRUFBRSxLQUFLO0tBQ3ZCO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICB1c2VFeGlzdGluZzogQ29uZmlnLFxufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQV0FNb2R1bGVDb25maWcge1xuICBwd2E/OiB7XG4gICAgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgYWRkVG9Ib21lU2NyZWVuPzogYm9vbGVhbjtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQV0FNb2R1bGVDb25maWc6IFBXQU1vZHVsZUNvbmZpZyA9IHtcbiAgcHdhOiB7XG4gICAgZW5hYmxlZDogZmFsc2UsXG4gICAgYWRkVG9Ib21lU2NyZWVuOiBmYWxzZSxcbiAgfSxcbn07XG4iXX0=