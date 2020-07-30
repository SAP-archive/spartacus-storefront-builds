import { __decorate, __param, __read, __spread, __values } from "tslib";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CmsComponentMapping, CmsConfig, deepMerge, DeferLoadingStrategy, } from '@spartacus/core';
import { isPlatformServer } from '@angular/common';
import { defer, forkJoin, of } from 'rxjs';
import { mapTo, share, tap } from 'rxjs/operators';
import { FeatureModulesService } from './feature-modules.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "./feature-modules.service";
var CmsComponentsService = /** @class */ (function () {
    /**
     * @deprecated since 2.1
     * constructor(config: CmsConfig, platformId: Object);
     */
    function CmsComponentsService(config, platformId, featureModules) {
        this.config = config;
        this.platformId = platformId;
        this.featureModules = featureModules;
        this.missingComponents = [];
        this.mappings = {};
        // contains
        this.mappingResolvers = new Map();
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
        var _this = this;
        return defer(function () {
            var e_1, _a;
            // we use defer, to be sure the logic below used to compose final observable
            // will be executed at subscription time (with up to date state at the time,
            // when it will be needed)
            var featureResolvers = [];
            try {
                for (var componentTypes_1 = __values(componentTypes), componentTypes_1_1 = componentTypes_1.next(); !componentTypes_1_1.done; componentTypes_1_1 = componentTypes_1.next()) {
                    var componentType = componentTypes_1_1.value;
                    if (!_this.mappings[componentType]) {
                        var staticConfig = _this.config.cmsComponents[componentType];
                        // check if this component type is managed by feature module
                        if (_this.featureModules.hasFeatureFor(componentType)) {
                            featureResolvers.push(
                            // we delegate populating this.mappings to feature resolver
                            _this.getFeatureMappingResolver(componentType, staticConfig));
                        }
                        else {
                            // simply use only static config
                            _this.mappings[componentType] = staticConfig;
                        }
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
            if (featureResolvers.length) {
                return forkJoin(featureResolvers).pipe(mapTo(componentTypes));
            }
            else {
                return of(componentTypes);
            }
        });
    };
    CmsComponentsService.prototype.getFeatureMappingResolver = function (componentType, staticConfig) {
        var _this = this;
        if (!this.mappingResolvers.has(componentType)) {
            var mappingResolver$ = this.featureModules
                .getCmsMapping(componentType)
                .pipe(tap(function (featureComponentMapping) {
                // We treat cms mapping configuration from a feature as a default,
                // that can be overridden by app/static configuration
                _this.mappings[componentType] = deepMerge({}, featureComponentMapping, staticConfig);
                _this.mappingResolvers.delete(componentType);
            }), share());
            this.mappingResolvers.set(componentType, mappingResolver$);
        }
        return this.mappingResolvers.get(componentType);
    };
    CmsComponentsService.prototype.getInjectors = function (componentType) {
        var _a;
        return ((_a = (this.featureModules.hasFeatureFor(componentType) &&
            this.featureModules.getInjectors(componentType))) !== null && _a !== void 0 ? _a : []);
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
        var _a, _b;
        var componentConfig = (_a = this.mappings[componentType]) !== null && _a !== void 0 ? _a : (_b = this.config.cmsComponents) === null || _b === void 0 ? void 0 : _b[componentType];
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
        var e_2, _a;
        var _b, _c;
        var routes = [];
        try {
            for (var componentTypes_2 = __values(componentTypes), componentTypes_2_1 = componentTypes_2.next(); !componentTypes_2_1.done; componentTypes_2_1 = componentTypes_2.next()) {
                var componentType = componentTypes_2_1.value;
                if (this.shouldRender(componentType)) {
                    routes.push.apply(routes, __spread(((_c = (_b = this.getMapping(componentType)) === null || _b === void 0 ? void 0 : _b.childRoutes) !== null && _c !== void 0 ? _c : [])));
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (componentTypes_2_1 && !componentTypes_2_1.done && (_a = componentTypes_2.return)) _a.call(componentTypes_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return routes;
    };
    /**
     * Get cms driven guards for components
     */
    CmsComponentsService.prototype.getGuards = function (componentTypes) {
        var e_3, _a;
        var _b, _c;
        var guards = new Set();
        try {
            for (var componentTypes_3 = __values(componentTypes), componentTypes_3_1 = componentTypes_3.next(); !componentTypes_3_1.done; componentTypes_3_1 = componentTypes_3.next()) {
                var componentType = componentTypes_3_1.value;
                (_c = (_b = this.getMapping(componentType)) === null || _b === void 0 ? void 0 : _b.guards) === null || _c === void 0 ? void 0 : _c.forEach(function (guard) {
                    return guards.add(guard);
                });
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (componentTypes_3_1 && !componentTypes_3_1.done && (_a = componentTypes_3.return)) _a.call(componentTypes_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return Array.from(guards);
    };
    /**
     * Get i18n keys associated with components
     */
    CmsComponentsService.prototype.getI18nKeys = function (componentTypes) {
        var e_4, _a;
        var _b, _c;
        var i18nKeys = new Set();
        try {
            for (var componentTypes_4 = __values(componentTypes), componentTypes_4_1 = componentTypes_4.next(); !componentTypes_4_1.done; componentTypes_4_1 = componentTypes_4.next()) {
                var componentType = componentTypes_4_1.value;
                if (this.shouldRender(componentType)) {
                    (_c = (_b = this.getMapping(componentType)) === null || _b === void 0 ? void 0 : _b.i18nKeys) === null || _c === void 0 ? void 0 : _c.forEach(function (key) {
                        return i18nKeys.add(key);
                    });
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (componentTypes_4_1 && !componentTypes_4_1.done && (_a = componentTypes_4.return)) _a.call(componentTypes_4);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return Array.from(i18nKeys);
    };
    CmsComponentsService.ctorParameters = function () { return [
        { type: CmsConfig },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: FeatureModulesService }
    ]; };
    CmsComponentsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsComponentsService_Factory() { return new CmsComponentsService(i0.ɵɵinject(i1.CmsConfig), i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i2.FeatureModulesService)); }, token: CmsComponentsService, providedIn: "root" });
    CmsComponentsService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(1, Inject(PLATFORM_ID))
    ], CmsComponentsService);
    return CmsComponentsService;
}());
export { CmsComponentsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLWNvbXBvbmVudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVksV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsU0FBUyxFQUNULFNBQVMsRUFDVCxvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFLbEU7SUFVRTs7O09BR0c7SUFDSCw4QkFDWSxNQUFpQixFQUNJLFVBQWtCLEVBQ3ZDLGNBQXNDO1FBRnRDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDSSxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLG1CQUFjLEdBQWQsY0FBYyxDQUF3QjtRQWhCMUMsc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBQ2pDLGFBQVEsR0FBcUQsRUFBRSxDQUFDO1FBRXhFLFdBQVc7UUFDSCxxQkFBZ0IsR0FHcEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQVVYLENBQUM7SUFFSjs7Ozs7OztPQU9HO0lBQ0gsZ0RBQWlCLEdBQWpCLFVBQWtCLGNBQXdCO1FBQTFDLGlCQThCQztRQTdCQyxPQUFPLEtBQUssQ0FBQzs7WUFDWCw0RUFBNEU7WUFDNUUsNEVBQTRFO1lBQzVFLDBC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QUFDLDBDQUFFLE1BQU0sMENBQUUsT0FBTyxDQUFDLFVBQUMsS0FBSztvQkFDcEQsT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFBakIsQ0FBaUIsRUFDakI7YUFDSDs7Ozs7Ozs7O1FBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7T0FFRztJQUNILDBDQUFXLEdBQVgsVUFBWSxjQUF3Qjs7O1FBQ2xDLElBQU0sUUFBUSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7O1lBQ25DLEtBQTRCLElBQUEsbUJBQUEsU0FBQSxjQUFjLENBQUEsOENBQUEsMEVBQUU7Z0JBQXZDLElBQU0sYUFBYSwyQkFBQTtnQkFDdEIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUNwQyxZQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLDBDQUFFLFFBQVEsMENBQUUsT0FBTyxDQUFDLFVBQUMsR0FBRzt3QkFDcEQsT0FBQSxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztvQkFBakIsQ0FBaUIsRUFDakI7aUJBQ0g7YUFDRjs7Ozs7Ozs7O1FBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQWpLbUIsU0FBUztnQkFDZ0IsTUFBTSx1QkFBaEQsTUFBTSxTQUFDLFdBQVc7Z0JBQ1EscUJBQXFCOzs7SUFqQnZDLG9CQUFvQjtRQUhoQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBaUJHLFdBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO09BaEJYLG9CQUFvQixDQWlMaEM7K0JBak1EO0NBaU1DLEFBakxELElBaUxDO1NBakxZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNDb21wb25lbnRNYXBwaW5nLFxuICBDbXNDb25maWcsXG4gIGRlZXBNZXJnZSxcbiAgRGVmZXJMb2FkaW5nU3RyYXRlZ3ksXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGRlZmVyLCBmb3JrSm9pbiwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcFRvLCBzaGFyZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZXNTZXJ2aWNlIH0gZnJvbSAnLi9mZWF0dXJlLW1vZHVsZXMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNDb21wb25lbnRzU2VydmljZSB7XG4gIHByaXZhdGUgbWlzc2luZ0NvbXBvbmVudHM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgbWFwcGluZ3M6IHsgW2NvbXBvbmVudFR5cGU6IHN0cmluZ106IENtc0NvbXBvbmVudE1hcHBpbmcgfSA9IHt9O1xuXG4gIC8vIGNvbnRhaW5zXG4gIHByaXZhdGUgbWFwcGluZ1Jlc29sdmVyczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBPYnNlcnZhYmxlPENtc0NvbXBvbmVudE1hcHBpbmc+XG4gID4gPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDIuMVxuICAgKiBjb25zdHJ1Y3Rvcihjb25maWc6IENtc0NvbmZpZywgcGxhdGZvcm1JZDogT2JqZWN0KTtcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWc6IENtc0NvbmZpZyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIHByb3RlY3RlZCBmZWF0dXJlTW9kdWxlcz86IEZlYXR1cmVNb2R1bGVzU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFNob3VsZCBiZSBjYWxsZWQgdG8gbWFrZSBzdXJlIGFsbCBjb21wb25lbnQgbWFwcGluZ3MgYXJlIGRldGVybWluZWQsXG4gICAqIGVzcGVjaWFsbHkgbGF6eSBsb2FkZWQgb25lcy5cbiAgICpcbiAgICogSXQncyByZWNvbW1lbmRlZCB3YXkgdG8gbWFrZSBzdXJlIGFsbCBvdGhlciBtZXRob2RzIG9mIENtc0NvbXBvbmVudFNlcnZpY2VcbiAgICogd2lsbCBiZSBhYmxlIHRvIHdvcmsgc3luY2hyb25vdXNseSBmb3IgYXNrZWQgY29tcG9uZW50IHR5cGVzIGFuZCBhdm9pZCByaXNrXG4gICAqIG9mIHBvdGVudGlhbCBlcnJvcnMgdGhhdCBjb3VsZCBiZSB0aHJvd24gb3RoZXJ3aXNlLlxuICAgKi9cbiAgZGV0ZXJtaW5lTWFwcGluZ3MoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBkZWZlcigoKSA9PiB7XG4gICAgICAvLyB3ZSB1c2UgZGVmZXIsIHRvIGJlIHN1cmUgdGhlIGxvZ2ljIGJlbG93IHVzZWQgdG8gY29tcG9zZSBmaW5hbCBvYnNlcnZhYmxlXG4gICAgICAvLyB3aWxsIGJlIGV4ZWN1dGVkIGF0IHN1YnNjcmlwdGlvbiB0aW1lICh3aXRoIHVwIHRvIGRhdGUgc3RhdGUgYXQgdGhlIHRpbWUsXG4gICAgICAvLyB3aGVuIGl0IHdpbGwgYmUgbmVlZGVkKVxuICAgICAgY29uc3QgZmVhdHVyZVJlc29sdmVycyA9IFtdO1xuXG4gICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1hcHBpbmdzW2NvbXBvbmVudFR5cGVdKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGljQ29uZmlnID0gdGhpcy5jb25maWcuY21zQ29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoaXMgY29tcG9uZW50IHR5cGUgaXMgbWFuYWdlZCBieSBmZWF0dXJlIG1vZHVsZVxuICAgICAgICAgIGlmICh0aGlzLmZlYXR1cmVNb2R1bGVzLmhhc0ZlYXR1cmVGb3IoY29tcG9uZW50VHlwZSkpIHtcbiAgICAgICAgICAgIGZlYXR1cmVSZXNvbHZlcnMucHVzaChcbiAgICAgICAgICAgICAgLy8gd2UgZGVsZWdhdGUgcG9wdWxhdGluZyB0aGlzLm1hcHBpbmdzIHRvIGZlYXR1cmUgcmVzb2x2ZXJcbiAgICAgICAgICAgICAgdGhpcy5nZXRGZWF0dXJlTWFwcGluZ1Jlc29sdmVyKGNvbXBvbmVudFR5cGUsIHN0YXRpY0NvbmZpZylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNpbXBseSB1c2Ugb25seSBzdGF0aWMgY29uZmlnXG4gICAgICAgICAgICB0aGlzLm1hcHBpbmdzW2NvbXBvbmVudFR5cGVdID0gc3RhdGljQ29uZmlnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmVhdHVyZVJlc29sdmVycy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZvcmtKb2luKGZlYXR1cmVSZXNvbHZlcnMpLnBpcGUobWFwVG8oY29tcG9uZW50VHlwZXMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvZihjb21wb25lbnRUeXBlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldEZlYXR1cmVNYXBwaW5nUmVzb2x2ZXIoXG4gICAgY29tcG9uZW50VHlwZTogc3RyaW5nLFxuICAgIHN0YXRpY0NvbmZpZz86IENtc0NvbXBvbmVudE1hcHBpbmdcbiAgKTogT2JzZXJ2YWJsZTxDbXNDb21wb25lbnRNYXBwaW5nPiB7XG4gICAgaWYgKCF0aGlzLm1hcHBpbmdSZXNvbHZlcnMuaGFzKGNvbXBvbmVudFR5cGUpKSB7XG4gICAgICBjb25zdCBtYXBwaW5nUmVzb2x2ZXIkID0gdGhpcy5mZWF0dXJlTW9kdWxlc1xuICAgICAgICAuZ2V0Q21zTWFwcGluZyhjb21wb25lbnRUeXBlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YXAoKGZlYXR1cmVDb21wb25lbnRNYXBwaW5nKSA9PiB7XG4gICAgICAgICAgICAvLyBXZSB0cmVhdCBjbXMgbWFwcGluZyBjb25maWd1cmF0aW9uIGZyb20gYSBmZWF0dXJlIGFzIGEgZGVmYXVsdCxcbiAgICAgICAgICAgIC8vIHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gYnkgYXBwL3N0YXRpYyBjb25maWd1cmF0aW9uXG4gICAgICAgICAgICB0aGlzLm1hcHBpbmdzW2NvbXBvbmVudFR5cGVdID0gZGVlcE1lcmdlKFxuICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgZmVhdHVyZUNvbXBvbmVudE1hcHBpbmcsXG4gICAgICAgICAgICAgIHN0YXRpY0NvbmZpZ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMubWFwcGluZ1Jlc29sdmVycy5kZWxldGUoY29tcG9uZW50VHlwZSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc2hhcmUoKVxuICAgICAgICApO1xuICAgICAgdGhpcy5tYXBwaW5nUmVzb2x2ZXJzLnNldChjb21wb25lbnRUeXBlLCBtYXBwaW5nUmVzb2x2ZXIkKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwcGluZ1Jlc29sdmVycy5nZXQoY29tcG9uZW50VHlwZSk7XG4gIH1cblxuICBnZXRJbmplY3RvcnMoY29tcG9uZW50VHlwZTogc3RyaW5nKTogSW5qZWN0b3JbXSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmZlYXR1cmVNb2R1bGVzLmhhc0ZlYXR1cmVGb3IoY29tcG9uZW50VHlwZSkgJiZcbiAgICAgICAgdGhpcy5mZWF0dXJlTW9kdWxlcy5nZXRJbmplY3RvcnMoY29tcG9uZW50VHlwZSkpID8/XG4gICAgICBbXVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGNvbGxlY3Rpb24gb2YgY29tcG9uZW50IG1hcHBpbmcgY29uZmlndXJhdGlvbiBmb3Igc3BlY2lmaWVkIGxpc3Qgb2ZcbiAgICogY29tcG9uZW50IHR5cGVzLlxuICAgKlxuICAgKiBJZiBjb21wb25lbnQgbWFwcGluZyBjYW4ndCBiZSBkZXRlcm1pbmVkIHN5bmNocm9ub3VzbHksIGZvciBleGFtcGxlLCBsYXp5XG4gICAqIGxvYWRlZCBvbmUsIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IuXG4gICAqXG4gICAqIFRvIG1ha2Ugc3VyZSBjb21wb25lbnQgbWFwcGluZyBpcyBhdmFpbGFibGUsIGRldGVybWluZU1hcHBpbmdzKClcbiAgICogc2hvdWxkIGJlIGNhbGxlZCBhbmQgY29tcGxldGVkIGZpcnN0LlxuICAgKi9cbiAgZ2V0TWFwcGluZyhjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBDbXNDb21wb25lbnRNYXBwaW5nIHtcbiAgICBjb25zdCBjb21wb25lbnRDb25maWcgPVxuICAgICAgdGhpcy5tYXBwaW5nc1tjb21wb25lbnRUeXBlXSA/P1xuICAgICAgdGhpcy5jb25maWcuY21zQ29tcG9uZW50cz8uW2NvbXBvbmVudFR5cGVdO1xuXG4gICAgaWYgKCFjb21wb25lbnRDb25maWcpIHtcbiAgICAgIGlmICghdGhpcy5taXNzaW5nQ29tcG9uZW50cy5pbmNsdWRlcyhjb21wb25lbnRUeXBlKSkge1xuICAgICAgICB0aGlzLm1pc3NpbmdDb21wb25lbnRzLnB1c2goY29tcG9uZW50VHlwZSk7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgTm8gY29tcG9uZW50IGltcGxlbWVudGF0aW9uIGZvdW5kIGZvciB0aGUgQ01TIGNvbXBvbmVudCB0eXBlICcke2NvbXBvbmVudFR5cGV9Jy5cXG5gLFxuICAgICAgICAgIGBNYWtlIHN1cmUgeW91IGltcGxlbWVudCBhIGNvbXBvbmVudCBhbmQgcmVnaXN0ZXIgaXQgaW4gdGhlIG1hcHBlci5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudENvbmZpZztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MsIGlmIGNvbXBvbmVudCBzaG91bGQgYmUgcmVuZGVyZWQgYXMgc29tZSBjb21wb25lbnRzXG4gICAqIGNvdWxkIGJlIGRpc2FibGVkIGZvciBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdzXG4gICAqL1xuICBzaG91bGRSZW5kZXIoY29tcG9uZW50VHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNTU1IgPSBpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCk7XG4gICAgcmV0dXJuICEoaXNTU1IgJiYgdGhpcy5nZXRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5kaXNhYmxlU1NSKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gRGVmZXJMb2FkaW5nU3RyYXRlZ3kgZm9yIGNvbXBvbmVudCB0eXBlLlxuICAgKi9cbiAgZ2V0RGVmZXJMb2FkaW5nU3RyYXRlZ3koY29tcG9uZW50VHlwZTogc3RyaW5nKTogRGVmZXJMb2FkaW5nU3RyYXRlZ3kge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzPy5bY29tcG9uZW50VHlwZV0/LmRlZmVyTG9hZGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY21zIGRyaXZlbiBjaGlsZCByb3V0ZXMgZm9yIGNvbXBvbmVudHNcbiAgICovXG4gIGdldENoaWxkUm91dGVzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IFJvdXRlW10ge1xuICAgIGNvbnN0IHJvdXRlcyA9IFtdO1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50VHlwZSBvZiBjb21wb25lbnRUeXBlcykge1xuICAgICAgaWYgKHRoaXMuc2hvdWxkUmVuZGVyKGNvbXBvbmVudFR5cGUpKSB7XG4gICAgICAgIHJvdXRlcy5wdXNoKC4uLih0aGlzLmdldE1hcHBpbmcoY29tcG9uZW50VHlwZSk/LmNoaWxkUm91dGVzID8/IFtdKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByb3V0ZXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNtcyBkcml2ZW4gZ3VhcmRzIGZvciBjb21wb25lbnRzXG4gICAqL1xuICBnZXRHdWFyZHMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogYW55W10ge1xuICAgIGNvbnN0IGd1YXJkcyA9IG5ldyBTZXQ8YW55PigpO1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50VHlwZSBvZiBjb21wb25lbnRUeXBlcykge1xuICAgICAgdGhpcy5nZXRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5ndWFyZHM/LmZvckVhY2goKGd1YXJkKSA9PlxuICAgICAgICBndWFyZHMuYWRkKGd1YXJkKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZ3VhcmRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaTE4biBrZXlzIGFzc29jaWF0ZWQgd2l0aCBjb21wb25lbnRzXG4gICAqL1xuICBnZXRJMThuS2V5cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgaTE4bktleXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlcihjb21wb25lbnRUeXBlKSkge1xuICAgICAgICB0aGlzLmdldE1hcHBpbmcoY29tcG9uZW50VHlwZSk/LmkxOG5LZXlzPy5mb3JFYWNoKChrZXkpID0+XG4gICAgICAgICAgaTE4bktleXMuYWRkKGtleSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oaTE4bktleXMpO1xuICB9XG59XG4iXX0=