import { __decorate, __param } from "tslib";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CmsComponentMapping, CmsConfig, DeferLoadingStrategy, } from '@spartacus/core';
import { isPlatformServer } from '@angular/common';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
let CmsComponentsService = class CmsComponentsService {
    constructor(config, platformId) {
        this.config = config;
        this.platformId = platformId;
        this.missingComponents = [];
    }
    /**
     * Should be called to make sure all component mappings are determined,
     * especially lazy loaded ones.
     *
     * It's recommended way to make sure all other methods of CmsComponentService
     * will be able to work synchronously for asked component types and avoid risk
     * of potential errors that could be thrown otherwise.
     */
    determineMappings(componentTypes) {
        return of(componentTypes);
    }
    /**
     * Return collection of component mapping configuration for specified list of
     * component types.
     *
     * If component mapping can't be determined synchronously, for example, lazy
     * loaded one, it will throw an error.
     *
     * To make sure component mapping is available, determineMappings()
     * should be called and completed first.
     */
    getMapping(componentType) {
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
    /**
     * Checks, if component should be rendered as some components
     * could be disabled for server side renderings
     */
    shouldRender(componentType) {
        var _a;
        const isSSR = isPlatformServer(this.platformId);
        return !(isSSR && ((_a = this.getMapping(componentType)) === null || _a === void 0 ? void 0 : _a.disableSSR));
    }
    /**
     * Return DeferLoadingStrategy for component type.
     */
    getDeferLoadingStrategy(componentType) {
        var _a, _b;
        return (_b = (_a = this.config.cmsComponents) === null || _a === void 0 ? void 0 : _a[componentType]) === null || _b === void 0 ? void 0 : _b.deferLoading;
    }
    /**
     * Get cms driven child routes for components
     */
    getChildRoutes(componentTypes) {
        var _a, _b;
        const routes = [];
        for (const componentType of componentTypes) {
            if (this.shouldRender(componentType)) {
                routes.push(...((_b = (_a = this.getMapping(componentType)) === null || _a === void 0 ? void 0 : _a.childRoutes) !== null && _b !== void 0 ? _b : []));
            }
        }
        return routes;
    }
    /**
     * Get cms driven guards for components
     */
    getGuards(componentTypes) {
        var _a, _b;
        const guards = new Set();
        for (const componentType of componentTypes) {
            (_b = (_a = this.getMapping(componentType)) === null || _a === void 0 ? void 0 : _a.guards) === null || _b === void 0 ? void 0 : _b.forEach((guard) => guards.add(guard));
        }
        return Array.from(guards);
    }
    /**
     * Get i18n keys associated with components
     */
    getI18nKeys(componentTypes) {
        var _a, _b;
        const i18nKeys = new Set();
        for (const componentType of componentTypes) {
            if (this.shouldRender(componentType)) {
                (_b = (_a = this.getMapping(componentType)) === null || _a === void 0 ? void 0 : _a.i18nKeys) === null || _b === void 0 ? void 0 : _b.forEach((key) => i18nKeys.add(key));
            }
        }
        return Array.from(i18nKeys);
    }
};
CmsComponentsService.ctorParameters = () => [
    { type: CmsConfig },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
CmsComponentsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsComponentsService_Factory() { return new CmsComponentsService(i0.ɵɵinject(i1.CmsConfig), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: CmsComponentsService, providedIn: "root" });
CmsComponentsService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(1, Inject(PLATFORM_ID))
], CmsComponentsService);
export { CmsComponentsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLWNvbXBvbmVudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsU0FBUyxFQUNULG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUt0QyxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUcvQixZQUNZLE1BQWlCLEVBQ0ksVUFBa0I7UUFEdkMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNJLGVBQVUsR0FBVixVQUFVLENBQVE7UUFKM0Msc0JBQWlCLEdBQWEsRUFBRSxDQUFDO0lBS3RDLENBQUM7SUFFSjs7Ozs7OztPQU9HO0lBQ0gsaUJBQWlCLENBQUMsY0FBd0I7UUFDeEMsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILFVBQVUsQ0FBQyxhQUFxQjs7UUFDOUIsTUFBTSxlQUFlLFNBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLDBDQUFHLGFBQWEsQ0FBQyxDQUFDO1FBRW5FLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzNDLE9BQU8sQ0FBQyxJQUFJLENBQ1YsaUVBQWlFLGFBQWEsTUFBTSxFQUNwRixvRUFBb0UsQ0FDckUsQ0FBQzthQUNIO1NBQ0Y7UUFFRCxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsWUFBWSxDQUFDLGFBQXFCOztRQUNoQyxNQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLENBQUMsS0FBSyxXQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLDBDQUFFLFVBQVUsQ0FBQSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsdUJBQXVCLENBQUMsYUFBcUI7O1FBQzNDLG1CQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSwwQ0FBRyxhQUFhLDJDQUFHLFlBQVksQ0FBQztJQUNsRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxjQUFjLENBQUMsY0FBd0I7O1FBQ3JDLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFLLE1BQU0sYUFBYSxJQUFJLGNBQWMsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxhQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLDBDQUFFLFdBQVcsbUNBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNyRTtTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsU0FBUyxDQUFDLGNBQXdCOztRQUNoQyxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBTyxDQUFDO1FBQzlCLEtBQUssTUFBTSxhQUFhLElBQUksY0FBYyxFQUFFO1lBQzFDLFlBQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsMENBQUUsTUFBTSwwQ0FBRSxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUN4RCxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUNqQjtTQUNIO1FBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVcsQ0FBQyxjQUF3Qjs7UUFDbEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQUNuQyxLQUFLLE1BQU0sYUFBYSxJQUFJLGNBQWMsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ3BDLFlBQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsMENBQUUsUUFBUSwwQ0FBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUN4RCxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNqQjthQUNIO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNGLENBQUE7O1lBbEdxQixTQUFTO1lBQ2dCLE1BQU0sdUJBQWhELE1BQU0sU0FBQyxXQUFXOzs7QUFMVixvQkFBb0I7SUFIaEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQU1HLFdBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0dBTFgsb0JBQW9CLENBc0doQztTQXRHWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNDb21wb25lbnRNYXBwaW5nLFxuICBDbXNDb25maWcsXG4gIERlZmVyTG9hZGluZ1N0cmF0ZWd5LFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zQ29tcG9uZW50c1NlcnZpY2Uge1xuICBwcml2YXRlIG1pc3NpbmdDb21wb25lbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWc6IENtc0NvbmZpZyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm1JZDogT2JqZWN0XG4gICkge31cblxuICAvKipcbiAgICogU2hvdWxkIGJlIGNhbGxlZCB0byBtYWtlIHN1cmUgYWxsIGNvbXBvbmVudCBtYXBwaW5ncyBhcmUgZGV0ZXJtaW5lZCxcbiAgICogZXNwZWNpYWxseSBsYXp5IGxvYWRlZCBvbmVzLlxuICAgKlxuICAgKiBJdCdzIHJlY29tbWVuZGVkIHdheSB0byBtYWtlIHN1cmUgYWxsIG90aGVyIG1ldGhvZHMgb2YgQ21zQ29tcG9uZW50U2VydmljZVxuICAgKiB3aWxsIGJlIGFibGUgdG8gd29yayBzeW5jaHJvbm91c2x5IGZvciBhc2tlZCBjb21wb25lbnQgdHlwZXMgYW5kIGF2b2lkIHJpc2tcbiAgICogb2YgcG90ZW50aWFsIGVycm9ycyB0aGF0IGNvdWxkIGJlIHRocm93biBvdGhlcndpc2UuXG4gICAqL1xuICBkZXRlcm1pbmVNYXBwaW5ncyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIG9mKGNvbXBvbmVudFR5cGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gY29sbGVjdGlvbiBvZiBjb21wb25lbnQgbWFwcGluZyBjb25maWd1cmF0aW9uIGZvciBzcGVjaWZpZWQgbGlzdCBvZlxuICAgKiBjb21wb25lbnQgdHlwZXMuXG4gICAqXG4gICAqIElmIGNvbXBvbmVudCBtYXBwaW5nIGNhbid0IGJlIGRldGVybWluZWQgc3luY2hyb25vdXNseSwgZm9yIGV4YW1wbGUsIGxhenlcbiAgICogbG9hZGVkIG9uZSwgaXQgd2lsbCB0aHJvdyBhbiBlcnJvci5cbiAgICpcbiAgICogVG8gbWFrZSBzdXJlIGNvbXBvbmVudCBtYXBwaW5nIGlzIGF2YWlsYWJsZSwgZGV0ZXJtaW5lTWFwcGluZ3MoKVxuICAgKiBzaG91bGQgYmUgY2FsbGVkIGFuZCBjb21wbGV0ZWQgZmlyc3QuXG4gICAqL1xuICBnZXRNYXBwaW5nKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IENtc0NvbXBvbmVudE1hcHBpbmcge1xuICAgIGNvbnN0IGNvbXBvbmVudENvbmZpZyA9IHRoaXMuY29uZmlnLmNtc0NvbXBvbmVudHM/Lltjb21wb25lbnRUeXBlXTtcblxuICAgIGlmICghY29tcG9uZW50Q29uZmlnKSB7XG4gICAgICBpZiAoIXRoaXMubWlzc2luZ0NvbXBvbmVudHMuaW5jbHVkZXMoY29tcG9uZW50VHlwZSkpIHtcbiAgICAgICAgdGhpcy5taXNzaW5nQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudFR5cGUpO1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgYE5vIGNvbXBvbmVudCBpbXBsZW1lbnRhdGlvbiBmb3VuZCBmb3IgdGhlIENNUyBjb21wb25lbnQgdHlwZSAnJHtjb21wb25lbnRUeXBlfScuXFxuYCxcbiAgICAgICAgICBgTWFrZSBzdXJlIHlvdSBpbXBsZW1lbnQgYSBjb21wb25lbnQgYW5kIHJlZ2lzdGVyIGl0IGluIHRoZSBtYXBwZXIuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRDb25maWc7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCBpZiBjb21wb25lbnQgc2hvdWxkIGJlIHJlbmRlcmVkIGFzIHNvbWUgY29tcG9uZW50c1xuICAgKiBjb3VsZCBiZSBkaXNhYmxlZCBmb3Igc2VydmVyIHNpZGUgcmVuZGVyaW5nc1xuICAgKi9cbiAgc2hvdWxkUmVuZGVyKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzU1NSID0gaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpO1xuICAgIHJldHVybiAhKGlzU1NSICYmIHRoaXMuZ2V0TWFwcGluZyhjb21wb25lbnRUeXBlKT8uZGlzYWJsZVNTUik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIERlZmVyTG9hZGluZ1N0cmF0ZWd5IGZvciBjb21wb25lbnQgdHlwZS5cbiAgICovXG4gIGdldERlZmVyTG9hZGluZ1N0cmF0ZWd5KGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IERlZmVyTG9hZGluZ1N0cmF0ZWd5IHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuY21zQ29tcG9uZW50cz8uW2NvbXBvbmVudFR5cGVdPy5kZWZlckxvYWRpbmc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNtcyBkcml2ZW4gY2hpbGQgcm91dGVzIGZvciBjb21wb25lbnRzXG4gICAqL1xuICBnZXRDaGlsZFJvdXRlcyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBSb3V0ZVtdIHtcbiAgICBjb25zdCByb3V0ZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlcihjb21wb25lbnRUeXBlKSkge1xuICAgICAgICByb3V0ZXMucHVzaCguLi4odGhpcy5nZXRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5jaGlsZFJvdXRlcyA/PyBbXSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcm91dGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbXMgZHJpdmVuIGd1YXJkcyBmb3IgY29tcG9uZW50c1xuICAgKi9cbiAgZ2V0R3VhcmRzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IGFueVtdIHtcbiAgICBjb25zdCBndWFyZHMgPSBuZXcgU2V0PGFueT4oKTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIHRoaXMuZ2V0TWFwcGluZyhjb21wb25lbnRUeXBlKT8uZ3VhcmRzPy5mb3JFYWNoKChndWFyZCkgPT5cbiAgICAgICAgZ3VhcmRzLmFkZChndWFyZClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKGd1YXJkcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGkxOG4ga2V5cyBhc3NvY2lhdGVkIHdpdGggY29tcG9uZW50c1xuICAgKi9cbiAgZ2V0STE4bktleXMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGkxOG5LZXlzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCBjb21wb25lbnRUeXBlIG9mIGNvbXBvbmVudFR5cGVzKSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRSZW5kZXIoY29tcG9uZW50VHlwZSkpIHtcbiAgICAgICAgdGhpcy5nZXRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5pMThuS2V5cz8uZm9yRWFjaCgoa2V5KSA9PlxuICAgICAgICAgIGkxOG5LZXlzLmFkZChrZXkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKGkxOG5LZXlzKTtcbiAgfVxufVxuIl19