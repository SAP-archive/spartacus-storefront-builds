import { __decorate, __param, __read, __spread, __values } from "tslib";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CmsComponentMapping, CmsConfig, DeferLoadingStrategy, } from '@spartacus/core';
import { isPlatformServer } from '@angular/common';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CmsComponentsService = /** @class */ (function () {
    function CmsComponentsService(config, platformId) {
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
    CmsComponentsService.prototype.determineMappings = function (componentTypes) {
        return of(componentTypes);
    };
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
    CmsComponentsService.prototype.getMapping = function (componentType) {
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
    /**
     * Checks, if component should be rendered as some components
     * could be disabled for server side renderings
     */
    CmsComponentsService.prototype.shouldRender = function (componentType) {
        var _a;
        var isSSR = isPlatformServer(this.platformId);
        return !(isSSR && ((_a = this.getMapping(componentType)) === null || _a === void 0 ? void 0 : _a.disableSSR));
    };
    /**
     * Return DeferLoadingStrategy for component type.
     */
    CmsComponentsService.prototype.getDeferLoadingStrategy = function (componentType) {
        var _a, _b;
        return (_b = (_a = this.config.cmsComponents) === null || _a === void 0 ? void 0 : _a[componentType]) === null || _b === void 0 ? void 0 : _b.deferLoading;
    };
    /**
     * Get cms driven child routes for components
     */
    CmsComponentsService.prototype.getChildRoutes = function (componentTypes) {
        var e_1, _a;
        var _b, _c;
        var routes = [];
        try {
            for (var componentTypes_1 = __values(componentTypes), componentTypes_1_1 = componentTypes_1.next(); !componentTypes_1_1.done; componentTypes_1_1 = componentTypes_1.next()) {
                var componentType = componentTypes_1_1.value;
                if (this.shouldRender(componentType)) {
                    routes.push.apply(routes, __spread(((_c = (_b = this.getMapping(componentType)) === null || _b === void 0 ? void 0 : _b.childRoutes) !== null && _c !== void 0 ? _c : [])));
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
    /**
     * Get cms driven guards for components
     */
    CmsComponentsService.prototype.getGuards = function (componentTypes) {
        var e_2, _a;
        var _b, _c;
        var guards = new Set();
        try {
            for (var componentTypes_2 = __values(componentTypes), componentTypes_2_1 = componentTypes_2.next(); !componentTypes_2_1.done; componentTypes_2_1 = componentTypes_2.next()) {
                var componentType = componentTypes_2_1.value;
                (_c = (_b = this.getMapping(componentType)) === null || _b === void 0 ? void 0 : _b.guards) === null || _c === void 0 ? void 0 : _c.forEach(function (guard) {
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
    /**
     * Get i18n keys associated with components
     */
    CmsComponentsService.prototype.getI18nKeys = function (componentTypes) {
        var e_3, _a;
        var _b, _c;
        var i18nKeys = new Set();
        try {
            for (var componentTypes_3 = __values(componentTypes), componentTypes_3_1 = componentTypes_3.next(); !componentTypes_3_1.done; componentTypes_3_1 = componentTypes_3.next()) {
                var componentType = componentTypes_3_1.value;
                if (this.shouldRender(componentType)) {
                    (_c = (_b = this.getMapping(componentType)) === null || _b === void 0 ? void 0 : _b.i18nKeys) === null || _c === void 0 ? void 0 : _c.forEach(function (key) {
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
    CmsComponentsService.ctorParameters = function () { return [
        { type: CmsConfig },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    CmsComponentsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsComponentsService_Factory() { return new CmsComponentsService(i0.ɵɵinject(i1.CmsConfig), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: CmsComponentsService, providedIn: "root" });
    CmsComponentsService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(1, Inject(PLATFORM_ID))
    ], CmsComponentsService);
    return CmsComponentsService;
}());
export { CmsComponentsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLWNvbXBvbmVudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsU0FBUyxFQUNULG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUt0QztJQUdFLDhCQUNZLE1BQWlCLEVBQ0ksVUFBa0I7UUFEdkMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNJLGVBQVUsR0FBVixVQUFVLENBQVE7UUFKM0Msc0JBQWlCLEdBQWEsRUFBRSxDQUFDO0lBS3RDLENBQUM7SUFFSjs7Ozs7OztPQU9HO0lBQ0gsZ0RBQWlCLEdBQWpCLFVBQWtCLGNBQXdCO1FBQ3hDLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSCx5Q0FBVSxHQUFWLFVBQVcsYUFBcUI7O1FBQzlCLElBQU0sZUFBZSxTQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSwwQ0FBRyxhQUFhLENBQUMsQ0FBQztRQUVuRSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUNuRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQyxPQUFPLENBQUMsSUFBSSxDQUNWLG1FQUFpRSxhQUFhLFNBQU0sRUFDcEYsb0VBQW9FLENBQ3JFLENBQUM7YUFDSDtTQUNGO1FBRUQsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7T0FHRztJQUNILDJDQUFZLEdBQVosVUFBYSxhQUFxQjs7UUFDaEMsSUFBTSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxDQUFDLEtBQUssV0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQywwQ0FBRSxVQUFVLENBQUEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7T0FFRztJQUNILHNEQUF1QixHQUF2QixVQUF3QixhQUFxQjs7UUFDM0MsbUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLDBDQUFHLGFBQWEsMkNBQUcsWUFBWSxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7T0FFRztJQUNILDZDQUFjLEdBQWQsVUFBZSxjQUF3Qjs7O1FBQ3JDLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQzs7WUFDbEIsS0FBNEIsSUFBQSxtQkFBQSxTQUFBLGNBQWMsQ0FBQSw4Q0FBQSwwRUFBRTtnQkFBdkMsSUFBTSxhQUFhLDJCQUFBO2dCQUN0QixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLE9BQVgsTUFBTSxXQUFTLGFBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsMENBQUUsV0FBVyxtQ0FBSSxFQUFFLENBQUMsR0FBRTtpQkFDckU7YUFDRjs7Ozs7Ozs7O1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsd0NBQVMsR0FBVCxVQUFVLGNBQXdCOzs7UUFDaEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQU8sQ0FBQzs7WUFDOUIsS0FBNEIsSUFBQSxtQkFBQSxTQUFBLGNBQWMsQ0FBQSw4Q0FBQSwwRUFBRTtnQkFBdkMsSUFBTSxhQUFhLDJCQUFBO2dCQUN0QixZQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLDBDQUFFLE1BQU0sMENBQUUsT0FBTyxDQUFDLFVBQUMsS0FBSztvQkFDcEQsT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFBakIsQ0FBaUIsRUFDakI7YUFDSDs7Ozs7Ozs7O1FBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7T0FFRztJQUNILDBDQUFXLEdBQVgsVUFBWSxjQUF3Qjs7O1FBQ2xDLElBQU0sUUFBUSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7O1lBQ25DLEtBQTRCLElBQUEsbUJBQUEsU0FBQSxjQUFjLENBQUEsOENBQUEsMEVBQUU7Z0JBQXZDLElBQU0sYUFBYSwyQkFBQTtnQkFDdEIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUNwQyxZQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLDBDQUFFLFFBQVEsMENBQUUsT0FBTyxDQUFDLFVBQUMsR0FBRzt3QkFDcEQsT0FBQSxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztvQkFBakIsQ0FBaUIsRUFDakI7aUJBQ0g7YUFDRjs7Ozs7Ozs7O1FBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQWpHbUIsU0FBUztnQkFDZ0IsTUFBTSx1QkFBaEQsTUFBTSxTQUFDLFdBQVc7OztJQUxWLG9CQUFvQjtRQUhoQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBTUcsV0FBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7T0FMWCxvQkFBb0IsQ0FzR2hDOytCQW5IRDtDQW1IQyxBQXRHRCxJQXNHQztTQXRHWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNDb21wb25lbnRNYXBwaW5nLFxuICBDbXNDb25maWcsXG4gIERlZmVyTG9hZGluZ1N0cmF0ZWd5LFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zQ29tcG9uZW50c1NlcnZpY2Uge1xuICBwcml2YXRlIG1pc3NpbmdDb21wb25lbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWc6IENtc0NvbmZpZyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm1JZDogT2JqZWN0XG4gICkge31cblxuICAvKipcbiAgICogU2hvdWxkIGJlIGNhbGxlZCB0byBtYWtlIHN1cmUgYWxsIGNvbXBvbmVudCBtYXBwaW5ncyBhcmUgZGV0ZXJtaW5lZCxcbiAgICogZXNwZWNpYWxseSBsYXp5IGxvYWRlZCBvbmVzLlxuICAgKlxuICAgKiBJdCdzIHJlY29tbWVuZGVkIHdheSB0byBtYWtlIHN1cmUgYWxsIG90aGVyIG1ldGhvZHMgb2YgQ21zQ29tcG9uZW50U2VydmljZVxuICAgKiB3aWxsIGJlIGFibGUgdG8gd29yayBzeW5jaHJvbm91c2x5IGZvciBhc2tlZCBjb21wb25lbnQgdHlwZXMgYW5kIGF2b2lkIHJpc2tcbiAgICogb2YgcG90ZW50aWFsIGVycm9ycyB0aGF0IGNvdWxkIGJlIHRocm93biBvdGhlcndpc2UuXG4gICAqL1xuICBkZXRlcm1pbmVNYXBwaW5ncyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIG9mKGNvbXBvbmVudFR5cGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gY29sbGVjdGlvbiBvZiBjb21wb25lbnQgbWFwcGluZyBjb25maWd1cmF0aW9uIGZvciBzcGVjaWZpZWQgbGlzdCBvZlxuICAgKiBjb21wb25lbnQgdHlwZXMuXG4gICAqXG4gICAqIElmIGNvbXBvbmVudCBtYXBwaW5nIGNhbid0IGJlIGRldGVybWluZWQgc3luY2hyb25vdXNseSwgZm9yIGV4YW1wbGUsIGxhenlcbiAgICogbG9hZGVkIG9uZSwgaXQgd2lsbCB0aHJvdyBhbiBlcnJvci5cbiAgICpcbiAgICogVG8gbWFrZSBzdXJlIGNvbXBvbmVudCBtYXBwaW5nIGlzIGF2YWlsYWJsZSwgZGV0ZXJtaW5lTWFwcGluZ3MoKVxuICAgKiBzaG91bGQgYmUgY2FsbGVkIGFuZCBjb21wbGV0ZWQgZmlyc3QuXG4gICAqL1xuICBnZXRNYXBwaW5nKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IENtc0NvbXBvbmVudE1hcHBpbmcge1xuICAgIGNvbnN0IGNvbXBvbmVudENvbmZpZyA9IHRoaXMuY29uZmlnLmNtc0NvbXBvbmVudHM/Lltjb21wb25lbnRUeXBlXTtcblxuICAgIGlmICghY29tcG9uZW50Q29uZmlnKSB7XG4gICAgICBpZiAoIXRoaXMubWlzc2luZ0NvbXBvbmVudHMuaW5jbHVkZXMoY29tcG9uZW50VHlwZSkpIHtcbiAgICAgICAgdGhpcy5taXNzaW5nQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudFR5cGUpO1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgYE5vIGNvbXBvbmVudCBpbXBsZW1lbnRhdGlvbiBmb3VuZCBmb3IgdGhlIENNUyBjb21wb25lbnQgdHlwZSAnJHtjb21wb25lbnRUeXBlfScuXFxuYCxcbiAgICAgICAgICBgTWFrZSBzdXJlIHlvdSBpbXBsZW1lbnQgYSBjb21wb25lbnQgYW5kIHJlZ2lzdGVyIGl0IGluIHRoZSBtYXBwZXIuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRDb25maWc7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCBpZiBjb21wb25lbnQgc2hvdWxkIGJlIHJlbmRlcmVkIGFzIHNvbWUgY29tcG9uZW50c1xuICAgKiBjb3VsZCBiZSBkaXNhYmxlZCBmb3Igc2VydmVyIHNpZGUgcmVuZGVyaW5nc1xuICAgKi9cbiAgc2hvdWxkUmVuZGVyKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzU1NSID0gaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpO1xuICAgIHJldHVybiAhKGlzU1NSICYmIHRoaXMuZ2V0TWFwcGluZyhjb21wb25lbnRUeXBlKT8uZGlzYWJsZVNTUik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIERlZmVyTG9hZGluZ1N0cmF0ZWd5IGZvciBjb21wb25lbnQgdHlwZS5cbiAgICovXG4gIGdldERlZmVyTG9hZGluZ1N0cmF0ZWd5KGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IERlZmVyTG9hZGluZ1N0cmF0ZWd5IHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuY21zQ29tcG9uZW50cz8uW2NvbXBvbmVudFR5cGVdPy5kZWZlckxvYWRpbmc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNtcyBkcml2ZW4gY2hpbGQgcm91dGVzIGZvciBjb21wb25lbnRzXG4gICAqL1xuICBnZXRDaGlsZFJvdXRlcyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBSb3V0ZVtdIHtcbiAgICBjb25zdCByb3V0ZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlcihjb21wb25lbnRUeXBlKSkge1xuICAgICAgICByb3V0ZXMucHVzaCguLi4odGhpcy5nZXRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5jaGlsZFJvdXRlcyA/PyBbXSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcm91dGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbXMgZHJpdmVuIGd1YXJkcyBmb3IgY29tcG9uZW50c1xuICAgKi9cbiAgZ2V0R3VhcmRzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IGFueVtdIHtcbiAgICBjb25zdCBndWFyZHMgPSBuZXcgU2V0PGFueT4oKTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIHRoaXMuZ2V0TWFwcGluZyhjb21wb25lbnRUeXBlKT8uZ3VhcmRzPy5mb3JFYWNoKChndWFyZCkgPT5cbiAgICAgICAgZ3VhcmRzLmFkZChndWFyZClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKGd1YXJkcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGkxOG4ga2V5cyBhc3NvY2lhdGVkIHdpdGggY29tcG9uZW50c1xuICAgKi9cbiAgZ2V0STE4bktleXMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGkxOG5LZXlzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCBjb21wb25lbnRUeXBlIG9mIGNvbXBvbmVudFR5cGVzKSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRSZW5kZXIoY29tcG9uZW50VHlwZSkpIHtcbiAgICAgICAgdGhpcy5nZXRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5pMThuS2V5cz8uZm9yRWFjaCgoa2V5KSA9PlxuICAgICAgICAgIGkxOG5LZXlzLmFkZChrZXkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKGkxOG5LZXlzKTtcbiAgfVxufVxuIl19