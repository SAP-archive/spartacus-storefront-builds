import { __decorate, __param } from "tslib";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CmsComponentMapping, CmsConfig } from '@spartacus/core';
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
        this.missingComponents = [];
    }
    getComponentMapping(componentType) {
        var _a;
        const componentConfig = (_a = this.config.cmsComponents) === null || _a === void 0 ? void 0 : _a[componentType];
        if (!componentConfig) {
            if (!this.missingComponents.includes(componentType)) {
                this.missingComponents.push(componentType);
                console.warn(`No component implementation found for the CMS component type '${componentType}'.\n`, `Make sure you implement a component and register it in the mapper.`);
            }
        }
        return componentConfig;
    }
    isComponentEnabled(componentType) {
        var _a;
        const isSSR = isPlatformServer(this.platformId);
        return !(isSSR && ((_a = this.getComponentMapping(componentType)) === null || _a === void 0 ? void 0 : _a.disableSSR));
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
            this.getGuardsForComponent(componentType).forEach((guard) => guards.add(guard));
        }
        return Array.from(guards);
    }
    getI18nKeysForComponents(componentTypes) {
        const i18nKeys = new Set();
        for (const componentType of componentTypes) {
            if (this.isComponentEnabled(componentType)) {
                this.getI18nKeysForComponent(componentType).forEach((key) => i18nKeys.add(key));
            }
        }
        return Array.from(i18nKeys);
    }
    getRoutesForComponent(componentType) {
        var _a, _b;
        return (_b = (_a = this.getComponentMapping(componentType)) === null || _a === void 0 ? void 0 : _a.childRoutes) !== null && _b !== void 0 ? _b : [];
    }
    getGuardsForComponent(componentType) {
        var _a, _b;
        return (_b = (_a = this.getComponentMapping(componentType)) === null || _a === void 0 ? void 0 : _a.guards) !== null && _b !== void 0 ? _b : [];
    }
    getI18nKeysForComponent(componentType) {
        var _a, _b;
        return (_b = (_a = this.getComponentMapping(componentType)) === null || _a === void 0 ? void 0 : _a.i18nKeys) !== null && _b !== void 0 ? _b : [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLW1hcHBpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLW1hcHBpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRW5EOztLQUVLO0FBSUwsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFHNUIsWUFDVSxNQUFpQixFQUNJLFVBQWtCO1FBRHZDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDSSxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBSnpDLHNCQUFpQixHQUFhLEVBQUUsQ0FBQztJQUt0QyxDQUFDO0lBRUcsbUJBQW1CLENBQUMsYUFBcUI7O1FBQzlDLE1BQU0sZUFBZSxTQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSwwQ0FBRyxhQUFhLENBQUMsQ0FBQztRQUVuRSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUNuRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQyxPQUFPLENBQUMsSUFBSSxDQUNWLGlFQUFpRSxhQUFhLE1BQU0sRUFDcEYsb0VBQW9FLENBQ3JFLENBQUM7YUFDSDtTQUNGO1FBRUQsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUVELGtCQUFrQixDQUFDLGFBQXFCOztRQUN0QyxNQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLENBQUMsS0FBSyxXQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsMENBQUUsVUFBVSxDQUFBLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsc0JBQXNCLENBQUMsY0FBd0I7UUFDN0MsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEtBQUssTUFBTSxhQUFhLElBQUksY0FBYyxFQUFFO1lBQzFDLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFDM0Q7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxjQUF3QjtRQUM3QyxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBTyxDQUFDO1FBQzlCLEtBQUssTUFBTSxhQUFhLElBQUksY0FBYyxFQUFFO1lBQzFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUMxRCxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUNsQixDQUFDO1NBQ0g7UUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHdCQUF3QixDQUFDLGNBQXdCO1FBQy9DLE1BQU0sUUFBUSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFDbkMsS0FBSyxNQUFNLGFBQWEsSUFBSSxjQUFjLEVBQUU7WUFDMUMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUMxRCxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUNsQixDQUFDO2FBQ0g7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU8scUJBQXFCLENBQUMsYUFBcUI7O1FBQ2pELG1CQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsMENBQUUsV0FBVyxtQ0FBSSxFQUFFLENBQUM7SUFDcEUsQ0FBQztJQUVPLHFCQUFxQixDQUFDLGFBQXFCOztRQUNqRCxtQkFBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLDBDQUFFLE1BQU0sbUNBQUksRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFTyx1QkFBdUIsQ0FBQyxhQUFxQjs7UUFDbkQsbUJBQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQywwQ0FBRSxRQUFRLG1DQUFJLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0NBQ0YsQ0FBQTs7WUFwRW1CLFNBQVM7WUFDZ0IsTUFBTSx1QkFBOUMsTUFBTSxTQUFDLFdBQVc7OztBQUxWLGlCQUFpQjtJQUg3QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0lBTUcsV0FBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7R0FMWCxpQkFBaUIsQ0F3RTdCO1NBeEVZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudE1hcHBpbmcsIENtc0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLyoqXG4gKiBQbGVhc2UgZG9uJ3QgcHV0IHRoYXQgc2VydmljZSBpbiBwdWJsaWMgQVBJLlxuICogKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNNYXBwaW5nU2VydmljZSB7XG4gIHByaXZhdGUgbWlzc2luZ0NvbXBvbmVudHM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IENtc0NvbmZpZyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdFxuICApIHt9XG5cbiAgcHVibGljIGdldENvbXBvbmVudE1hcHBpbmcoY29tcG9uZW50VHlwZTogc3RyaW5nKTogQ21zQ29tcG9uZW50TWFwcGluZyB7XG4gICAgY29uc3QgY29tcG9uZW50Q29uZmlnID0gdGhpcy5jb25maWcuY21zQ29tcG9uZW50cz8uW2NvbXBvbmVudFR5cGVdO1xuXG4gICAgaWYgKCFjb21wb25lbnRDb25maWcpIHtcbiAgICAgIGlmICghdGhpcy5taXNzaW5nQ29tcG9uZW50cy5pbmNsdWRlcyhjb21wb25lbnRUeXBlKSkge1xuICAgICAgICB0aGlzLm1pc3NpbmdDb21wb25lbnRzLnB1c2goY29tcG9uZW50VHlwZSk7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgTm8gY29tcG9uZW50IGltcGxlbWVudGF0aW9uIGZvdW5kIGZvciB0aGUgQ01TIGNvbXBvbmVudCB0eXBlICcke2NvbXBvbmVudFR5cGV9Jy5cXG5gLFxuICAgICAgICAgIGBNYWtlIHN1cmUgeW91IGltcGxlbWVudCBhIGNvbXBvbmVudCBhbmQgcmVnaXN0ZXIgaXQgaW4gdGhlIG1hcHBlci5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudENvbmZpZztcbiAgfVxuXG4gIGlzQ29tcG9uZW50RW5hYmxlZChjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc1NTUiA9IGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKTtcbiAgICByZXR1cm4gIShpc1NTUiAmJiB0aGlzLmdldENvbXBvbmVudE1hcHBpbmcoY29tcG9uZW50VHlwZSk/LmRpc2FibGVTU1IpO1xuICB9XG5cbiAgZ2V0Um91dGVzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBSb3V0ZVtdIHtcbiAgICBjb25zdCByb3V0ZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29tcG9uZW50RW5hYmxlZChjb21wb25lbnRUeXBlKSkge1xuICAgICAgICByb3V0ZXMucHVzaCguLi50aGlzLmdldFJvdXRlc0ZvckNvbXBvbmVudChjb21wb25lbnRUeXBlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByb3V0ZXM7XG4gIH1cblxuICBnZXRHdWFyZHNGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IGFueVtdIHtcbiAgICBjb25zdCBndWFyZHMgPSBuZXcgU2V0PGFueT4oKTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIHRoaXMuZ2V0R3VhcmRzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGUpLmZvckVhY2goKGd1YXJkKSA9PlxuICAgICAgICBndWFyZHMuYWRkKGd1YXJkKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZ3VhcmRzKTtcbiAgfVxuXG4gIGdldEkxOG5LZXlzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgaTE4bktleXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29tcG9uZW50RW5hYmxlZChjb21wb25lbnRUeXBlKSkge1xuICAgICAgICB0aGlzLmdldEkxOG5LZXlzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGUpLmZvckVhY2goKGtleSkgPT5cbiAgICAgICAgICBpMThuS2V5cy5hZGQoa2V5KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuZnJvbShpMThuS2V5cyk7XG4gIH1cblxuICBwcml2YXRlIGdldFJvdXRlc0ZvckNvbXBvbmVudChjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBSb3V0ZVtdIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5jaGlsZFJvdXRlcyA/PyBbXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0R3VhcmRzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5ndWFyZHMgPz8gW107XG4gIH1cblxuICBwcml2YXRlIGdldEkxOG5LZXlzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5pMThuS2V5cyA/PyBbXTtcbiAgfVxufVxuIl19