import { __decorate, __param } from "tslib";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CmsConfig } from '@spartacus/core';
import { isPlatformServer } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/**
 * Please don't put that service in public API.
 * */
let CmsMappingService = class CmsMappingService {
    constructor(config, platformId) {
        this.config = config;
        this.platformId = platformId;
    }
    isComponentEnabled(flexType) {
        const isSSR = isPlatformServer(this.platformId);
        const isComponentDisabledInSSR = (this.config.cmsComponents[flexType] || {})
            .disableSSR;
        return !(isSSR && isComponentDisabledInSSR);
    }
    getRoutesForComponents(componentTypes) {
        const routes = [];
        for (const componentType of componentTypes) {
            if (this.isComponentEnabled(componentType)) {
                routes.push(...this.getRoutesForComponent(componentType));
            }
        }
        return routes;
    }
    getGuardsForComponents(componentTypes) {
        const guards = new Set();
        for (const componentType of componentTypes) {
            this.getGuardsForComponent(componentType).forEach(guard => guards.add(guard));
        }
        return Array.from(guards);
    }
    getI18nKeysForComponents(componentTypes) {
        const i18nKeys = new Set();
        for (const componentType of componentTypes) {
            if (this.isComponentEnabled(componentType)) {
                this.getI18nKeysForComponent(componentType).forEach(key => i18nKeys.add(key));
            }
        }
        return Array.from(i18nKeys);
    }
    getRoutesForComponent(componentType) {
        const mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.childRoutes) || [];
    }
    getGuardsForComponent(componentType) {
        const mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.guards) || [];
    }
    getI18nKeysForComponent(componentType) {
        const mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.i18nKeys) || [];
    }
};
CmsMappingService.ctorParameters = () => [
    { type: CmsConfig },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
CmsMappingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsMappingService_Factory() { return new CmsMappingService(i0.ɵɵinject(i1.CmsConfig), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: CmsMappingService, providedIn: "root" });
CmsMappingService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(1, Inject(PLATFORM_ID))
], CmsMappingService);
export { CmsMappingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLW1hcHBpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLW1hcHBpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRW5EOztLQUVLO0FBSUwsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFDNUIsWUFDVSxNQUFpQixFQUNJLFVBQWtCO1FBRHZDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDSSxlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQzlDLENBQUM7SUFFSixrQkFBa0IsQ0FBQyxRQUFnQjtRQUNqQyxNQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEQsTUFBTSx3QkFBd0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN6RSxVQUFVLENBQUM7UUFDZCxPQUFPLENBQUMsQ0FBQyxLQUFLLElBQUksd0JBQXdCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsc0JBQXNCLENBQUMsY0FBd0I7UUFDN0MsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEtBQUssTUFBTSxhQUFhLElBQUksY0FBYyxFQUFFO1lBQzFDLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFDM0Q7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxjQUF3QjtRQUM3QyxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBTyxDQUFDO1FBQzlCLEtBQUssTUFBTSxhQUFhLElBQUksY0FBYyxFQUFFO1lBQzFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDeEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDbEIsQ0FBQztTQUNIO1FBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCx3QkFBd0IsQ0FBQyxjQUF3QjtRQUMvQyxNQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQ25DLEtBQUssTUFBTSxhQUFhLElBQUksY0FBYyxFQUFFO1lBQzFDLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQ3hELFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQ2xCLENBQUM7YUFDSDtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTyxxQkFBcUIsQ0FBQyxhQUFxQjtRQUNqRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvRCxPQUFPLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUVPLHFCQUFxQixDQUFDLGFBQXFCO1FBQ2pELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRU8sdUJBQXVCLENBQUMsYUFBcUI7UUFDbkQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0QsT0FBTyxDQUFDLGFBQWEsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pELENBQUM7Q0FDRixDQUFBOztZQXpEbUIsU0FBUztZQUNnQixNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVzs7O0FBSFYsaUJBQWlCO0lBSDdCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7SUFJRyxXQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtHQUhYLGlCQUFpQixDQTJEN0I7U0EzRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vKipcbiAqIFBsZWFzZSBkb24ndCBwdXQgdGhhdCBzZXJ2aWNlIGluIHB1YmxpYyBBUEkuXG4gKiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc01hcHBpbmdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IENtc0NvbmZpZyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdFxuICApIHt9XG5cbiAgaXNDb21wb25lbnRFbmFibGVkKGZsZXhUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc1NTUiA9IGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKTtcbiAgICBjb25zdCBpc0NvbXBvbmVudERpc2FibGVkSW5TU1IgPSAodGhpcy5jb25maWcuY21zQ29tcG9uZW50c1tmbGV4VHlwZV0gfHwge30pXG4gICAgICAuZGlzYWJsZVNTUjtcbiAgICByZXR1cm4gIShpc1NTUiAmJiBpc0NvbXBvbmVudERpc2FibGVkSW5TU1IpO1xuICB9XG5cbiAgZ2V0Um91dGVzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBSb3V0ZVtdIHtcbiAgICBjb25zdCByb3V0ZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29tcG9uZW50RW5hYmxlZChjb21wb25lbnRUeXBlKSkge1xuICAgICAgICByb3V0ZXMucHVzaCguLi50aGlzLmdldFJvdXRlc0ZvckNvbXBvbmVudChjb21wb25lbnRUeXBlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByb3V0ZXM7XG4gIH1cblxuICBnZXRHdWFyZHNGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IGFueVtdIHtcbiAgICBjb25zdCBndWFyZHMgPSBuZXcgU2V0PGFueT4oKTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIHRoaXMuZ2V0R3VhcmRzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGUpLmZvckVhY2goZ3VhcmQgPT5cbiAgICAgICAgZ3VhcmRzLmFkZChndWFyZClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKGd1YXJkcyk7XG4gIH1cblxuICBnZXRJMThuS2V5c0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGkxOG5LZXlzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCBjb21wb25lbnRUeXBlIG9mIGNvbXBvbmVudFR5cGVzKSB7XG4gICAgICBpZiAodGhpcy5pc0NvbXBvbmVudEVuYWJsZWQoY29tcG9uZW50VHlwZSkpIHtcbiAgICAgICAgdGhpcy5nZXRJMThuS2V5c0ZvckNvbXBvbmVudChjb21wb25lbnRUeXBlKS5mb3JFYWNoKGtleSA9PlxuICAgICAgICAgIGkxOG5LZXlzLmFkZChrZXkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKGkxOG5LZXlzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um91dGVzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IFJvdXRlW10ge1xuICAgIGNvbnN0IG1hcHBpbmdDb25maWcgPSB0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xuICAgIHJldHVybiAobWFwcGluZ0NvbmZpZyAmJiBtYXBwaW5nQ29uZmlnLmNoaWxkUm91dGVzKSB8fCBbXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0R3VhcmRzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IGFueVtdIHtcbiAgICBjb25zdCBtYXBwaW5nQ29uZmlnID0gdGhpcy5jb25maWcuY21zQ29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtcbiAgICByZXR1cm4gKG1hcHBpbmdDb25maWcgJiYgbWFwcGluZ0NvbmZpZy5ndWFyZHMpIHx8IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJMThuS2V5c0ZvckNvbXBvbmVudChjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgbWFwcGluZ0NvbmZpZyA9IHRoaXMuY29uZmlnLmNtc0NvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XG4gICAgcmV0dXJuIChtYXBwaW5nQ29uZmlnICYmIG1hcHBpbmdDb25maWcuaTE4bktleXMpIHx8IFtdO1xuICB9XG59XG4iXX0=