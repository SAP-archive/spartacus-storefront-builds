import { __decorate, __param, __read, __spread, __values } from "tslib";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CmsComponentMapping, CmsConfig } from '@spartacus/core';
import { isPlatformServer } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/**
 * Please don't put that service in public API.
 * */
var CmsMappingService = /** @class */ (function () {
    function CmsMappingService(config, platformId) {
        this.config = config;
        this.platformId = platformId;
        this.missingComponents = [];
    }
    CmsMappingService.prototype.getComponentMapping = function (componentType) {
        var _a;
        var componentConfig = (_a = this.config.cmsComponents) === null || _a === void 0 ? void 0 : _a[componentType];
        if (!componentConfig) {
            if (!this.missingComponents.includes(componentType)) {
                this.missingComponents.push(componentType);
                console.warn("No component implementation found for the CMS component type '" + componentType + "'.\n", "Make sure you implement a component and register it in the mapper.");
            }
        }
        return componentConfig;
    };
    CmsMappingService.prototype.isComponentEnabled = function (componentType) {
        var _a;
        var isSSR = isPlatformServer(this.platformId);
        return !(isSSR && ((_a = this.getComponentMapping(componentType)) === null || _a === void 0 ? void 0 : _a.disableSSR));
    };
    CmsMappingService.prototype.getRoutesForComponents = function (componentTypes) {
        var e_1, _a;
        var routes = [];
        try {
            for (var componentTypes_1 = __values(componentTypes), componentTypes_1_1 = componentTypes_1.next(); !componentTypes_1_1.done; componentTypes_1_1 = componentTypes_1.next()) {
                var componentType = componentTypes_1_1.value;
                if (this.isComponentEnabled(componentType)) {
                    routes.push.apply(routes, __spread(this.getRoutesForComponent(componentType)));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (componentTypes_1_1 && !componentTypes_1_1.done && (_a = componentTypes_1.return)) _a.call(componentTypes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return routes;
    };
    CmsMappingService.prototype.getGuardsForComponents = function (componentTypes) {
        var e_2, _a;
        var guards = new Set();
        try {
            for (var componentTypes_2 = __values(componentTypes), componentTypes_2_1 = componentTypes_2.next(); !componentTypes_2_1.done; componentTypes_2_1 = componentTypes_2.next()) {
                var componentType = componentTypes_2_1.value;
                this.getGuardsForComponent(componentType).forEach(function (guard) {
                    return guards.add(guard);
                });
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (componentTypes_2_1 && !componentTypes_2_1.done && (_a = componentTypes_2.return)) _a.call(componentTypes_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return Array.from(guards);
    };
    CmsMappingService.prototype.getI18nKeysForComponents = function (componentTypes) {
        var e_3, _a;
        var i18nKeys = new Set();
        try {
            for (var componentTypes_3 = __values(componentTypes), componentTypes_3_1 = componentTypes_3.next(); !componentTypes_3_1.done; componentTypes_3_1 = componentTypes_3.next()) {
                var componentType = componentTypes_3_1.value;
                if (this.isComponentEnabled(componentType)) {
                    this.getI18nKeysForComponent(componentType).forEach(function (key) {
                        return i18nKeys.add(key);
                    });
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (componentTypes_3_1 && !componentTypes_3_1.done && (_a = componentTypes_3.return)) _a.call(componentTypes_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return Array.from(i18nKeys);
    };
    CmsMappingService.prototype.getRoutesForComponent = function (componentType) {
        var _a, _b;
        return (_b = (_a = this.getComponentMapping(componentType)) === null || _a === void 0 ? void 0 : _a.childRoutes) !== null && _b !== void 0 ? _b : [];
    };
    CmsMappingService.prototype.getGuardsForComponent = function (componentType) {
        var _a, _b;
        return (_b = (_a = this.getComponentMapping(componentType)) === null || _a === void 0 ? void 0 : _a.guards) !== null && _b !== void 0 ? _b : [];
    };
    CmsMappingService.prototype.getI18nKeysForComponent = function (componentType) {
        var _a, _b;
        return (_b = (_a = this.getComponentMapping(componentType)) === null || _a === void 0 ? void 0 : _a.i18nKeys) !== null && _b !== void 0 ? _b : [];
    };
    CmsMappingService.ctorParameters = function () { return [
        { type: CmsConfig },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    CmsMappingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsMappingService_Factory() { return new CmsMappingService(i0.ɵɵinject(i1.CmsConfig), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: CmsMappingService, providedIn: "root" });
    CmsMappingService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(1, Inject(PLATFORM_ID))
    ], CmsMappingService);
    return CmsMappingService;
}());
export { CmsMappingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLW1hcHBpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLW1hcHBpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRW5EOztLQUVLO0FBSUw7SUFHRSwyQkFDVSxNQUFpQixFQUNJLFVBQWtCO1FBRHZDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDSSxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBSnpDLHNCQUFpQixHQUFhLEVBQUUsQ0FBQztJQUt0QyxDQUFDO0lBRUcsK0NBQW1CLEdBQTFCLFVBQTJCLGFBQXFCOztRQUM5QyxJQUFNLGVBQWUsU0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsMENBQUcsYUFBYSxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDbkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0MsT0FBTyxDQUFDLElBQUksQ0FDVixtRUFBaUUsYUFBYSxTQUFNLEVBQ3BGLG9FQUFvRSxDQUNyRSxDQUFDO2FBQ0g7U0FDRjtRQUVELE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw4Q0FBa0IsR0FBbEIsVUFBbUIsYUFBcUI7O1FBQ3RDLElBQU0sS0FBSyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRCxPQUFPLENBQUMsQ0FBQyxLQUFLLFdBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQywwQ0FBRSxVQUFVLENBQUEsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxrREFBc0IsR0FBdEIsVUFBdUIsY0FBd0I7O1FBQzdDLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQzs7WUFDbEIsS0FBNEIsSUFBQSxtQkFBQSxTQUFBLGNBQWMsQ0FBQSw4Q0FBQSwwRUFBRTtnQkFBdkMsSUFBTSxhQUFhLDJCQUFBO2dCQUN0QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDMUMsTUFBTSxDQUFDLElBQUksT0FBWCxNQUFNLFdBQVMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxHQUFFO2lCQUMzRDthQUNGOzs7Ozs7Ozs7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsa0RBQXNCLEdBQXRCLFVBQXVCLGNBQXdCOztRQUM3QyxJQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBTyxDQUFDOztZQUM5QixLQUE0QixJQUFBLG1CQUFBLFNBQUEsY0FBYyxDQUFBLDhDQUFBLDBFQUFFO2dCQUF2QyxJQUFNLGFBQWEsMkJBQUE7Z0JBQ3RCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO29CQUN0RCxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUFqQixDQUFpQixDQUNsQixDQUFDO2FBQ0g7Ozs7Ozs7OztRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsb0RBQXdCLEdBQXhCLFVBQXlCLGNBQXdCOztRQUMvQyxJQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDOztZQUNuQyxLQUE0QixJQUFBLG1CQUFBLFNBQUEsY0FBYyxDQUFBLDhDQUFBLDBFQUFFO2dCQUF2QyxJQUFNLGFBQWEsMkJBQUE7Z0JBQ3RCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUMxQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRzt3QkFDdEQsT0FBQSxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztvQkFBakIsQ0FBaUIsQ0FDbEIsQ0FBQztpQkFDSDthQUNGOzs7Ozs7Ozs7UUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVPLGlEQUFxQixHQUE3QixVQUE4QixhQUFxQjs7UUFDakQsbUJBQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQywwQ0FBRSxXQUFXLG1DQUFJLEVBQUUsQ0FBQztJQUNwRSxDQUFDO0lBRU8saURBQXFCLEdBQTdCLFVBQThCLGFBQXFCOztRQUNqRCxtQkFBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLDBDQUFFLE1BQU0sbUNBQUksRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFTyxtREFBdUIsR0FBL0IsVUFBZ0MsYUFBcUI7O1FBQ25ELG1CQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsMENBQUUsUUFBUSxtQ0FBSSxFQUFFLENBQUM7SUFDakUsQ0FBQzs7Z0JBbkVpQixTQUFTO2dCQUNnQixNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVzs7O0lBTFYsaUJBQWlCO1FBSDdCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7UUFNRyxXQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtPQUxYLGlCQUFpQixDQXdFN0I7NEJBbkZEO0NBbUZDLEFBeEVELElBd0VDO1NBeEVZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudE1hcHBpbmcsIENtc0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLyoqXG4gKiBQbGVhc2UgZG9uJ3QgcHV0IHRoYXQgc2VydmljZSBpbiBwdWJsaWMgQVBJLlxuICogKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNNYXBwaW5nU2VydmljZSB7XG4gIHByaXZhdGUgbWlzc2luZ0NvbXBvbmVudHM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IENtc0NvbmZpZyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdFxuICApIHt9XG5cbiAgcHVibGljIGdldENvbXBvbmVudE1hcHBpbmcoY29tcG9uZW50VHlwZTogc3RyaW5nKTogQ21zQ29tcG9uZW50TWFwcGluZyB7XG4gICAgY29uc3QgY29tcG9uZW50Q29uZmlnID0gdGhpcy5jb25maWcuY21zQ29tcG9uZW50cz8uW2NvbXBvbmVudFR5cGVdO1xuXG4gICAgaWYgKCFjb21wb25lbnRDb25maWcpIHtcbiAgICAgIGlmICghdGhpcy5taXNzaW5nQ29tcG9uZW50cy5pbmNsdWRlcyhjb21wb25lbnRUeXBlKSkge1xuICAgICAgICB0aGlzLm1pc3NpbmdDb21wb25lbnRzLnB1c2goY29tcG9uZW50VHlwZSk7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgTm8gY29tcG9uZW50IGltcGxlbWVudGF0aW9uIGZvdW5kIGZvciB0aGUgQ01TIGNvbXBvbmVudCB0eXBlICcke2NvbXBvbmVudFR5cGV9Jy5cXG5gLFxuICAgICAgICAgIGBNYWtlIHN1cmUgeW91IGltcGxlbWVudCBhIGNvbXBvbmVudCBhbmQgcmVnaXN0ZXIgaXQgaW4gdGhlIG1hcHBlci5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudENvbmZpZztcbiAgfVxuXG4gIGlzQ29tcG9uZW50RW5hYmxlZChjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc1NTUiA9IGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKTtcbiAgICByZXR1cm4gIShpc1NTUiAmJiB0aGlzLmdldENvbXBvbmVudE1hcHBpbmcoY29tcG9uZW50VHlwZSk/LmRpc2FibGVTU1IpO1xuICB9XG5cbiAgZ2V0Um91dGVzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBSb3V0ZVtdIHtcbiAgICBjb25zdCByb3V0ZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29tcG9uZW50RW5hYmxlZChjb21wb25lbnRUeXBlKSkge1xuICAgICAgICByb3V0ZXMucHVzaCguLi50aGlzLmdldFJvdXRlc0ZvckNvbXBvbmVudChjb21wb25lbnRUeXBlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByb3V0ZXM7XG4gIH1cblxuICBnZXRHdWFyZHNGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IGFueVtdIHtcbiAgICBjb25zdCBndWFyZHMgPSBuZXcgU2V0PGFueT4oKTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIHRoaXMuZ2V0R3VhcmRzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGUpLmZvckVhY2goKGd1YXJkKSA9PlxuICAgICAgICBndWFyZHMuYWRkKGd1YXJkKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZ3VhcmRzKTtcbiAgfVxuXG4gIGdldEkxOG5LZXlzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgaTE4bktleXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29tcG9uZW50RW5hYmxlZChjb21wb25lbnRUeXBlKSkge1xuICAgICAgICB0aGlzLmdldEkxOG5LZXlzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGUpLmZvckVhY2goKGtleSkgPT5cbiAgICAgICAgICBpMThuS2V5cy5hZGQoa2V5KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuZnJvbShpMThuS2V5cyk7XG4gIH1cblxuICBwcml2YXRlIGdldFJvdXRlc0ZvckNvbXBvbmVudChjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBSb3V0ZVtdIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5jaGlsZFJvdXRlcyA/PyBbXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0R3VhcmRzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5ndWFyZHMgPz8gW107XG4gIH1cblxuICBwcml2YXRlIGdldEkxOG5LZXlzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5pMThuS2V5cyA/PyBbXTtcbiAgfVxufVxuIl19