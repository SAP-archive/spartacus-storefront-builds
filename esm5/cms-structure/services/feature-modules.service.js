import { __assign, __awaiter, __decorate, __generator, __read, __spread, __values } from "tslib";
import { Compiler, Injectable, InjectFlags, Injector, NgModuleFactory, NgModuleRef, OnDestroy, } from '@angular/core';
import { CMSComponentConfig, CmsComponentMapping, CmsConfig, ConfigChunk, ConfigInitializerService, createFrom, deepMerge, DefaultConfigChunk, EventService, FeatureModuleConfig, ModuleInitializedEvent, } from '@spartacus/core';
import { combineLatest, defer, forkJoin, from, merge, of, queueScheduler, } from 'rxjs';
import { map, observeOn, pluck, shareReplay, switchMap, tap, } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/**
 * Service responsible for resolving cms config based feature modules.
 */
var FeatureModulesService = /** @class */ (function () {
    function FeatureModulesService(configInitializer, compiler, injector, events) {
        this.configInitializer = configInitializer;
        this.compiler = compiler;
        this.injector = injector;
        this.events = events;
        // maps componentType to feature
        this.componentFeatureMap = new Map();
        /*
         * Contains either FeatureInstance or FeatureInstance resolver for not yet
         * resolved feature modules
         */
        this.features = new Map();
        this.dependencyModules = new Map();
        this.initFeatureMap();
    }
    FeatureModulesService.prototype.initFeatureMap = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var config, _c, _d, _e, featureName, featureConfig, _f, _g, component;
            var e_1, _h, e_2, _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0: return [4 /*yield*/, this.configInitializer.getStableConfig('featureModules')];
                    case 1:
                        config = _k.sent();
                        this.featureModulesConfig = (_a = config.featureModules) !== null && _a !== void 0 ? _a : {};
                        try {
                            for (_c = __values(Object.entries(this.featureModulesConfig)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                _e = __read(_d.value, 2), featureName = _e[0], featureConfig = _e[1];
                                if ((_b = featureConfig === null || featureConfig === void 0 ? void 0 : featureConfig.cmsComponents) === null || _b === void 0 ? void 0 : _b.length) {
                                    try {
                                        for (_f = (e_2 = void 0, __values(featureConfig.cmsComponents)), _g = _f.next(); !_g.done; _g = _f.next()) {
                                            component = _g.value;
                                            this.componentFeatureMap.set(component, featureName);
                                        }
                                    }
                                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                    finally {
                                        try {
                                            if (_g && !_g.done && (_j = _f.return)) _j.call(_f);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                    }
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_h = _c.return)) _h.call(_c);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Check if there is feature module configuration that covers specified
     * component type
     */
    FeatureModulesService.prototype.hasFeatureFor = function (componentType) {
        return this.componentFeatureMap.has(componentType);
    };
    /**
     * Return full CmsComponent mapping defined in feature module
     */
    FeatureModulesService.prototype.getCmsMapping = function (componentType) {
        var feature = this.componentFeatureMap.get(componentType);
        return this.resolveFeature(feature).pipe(map(function (featureInstance) { return featureInstance.componentsMappings[componentType]; }));
    };
    /**
     * Get all injectors for feature and its dependencies
     *
     * As it's a synchronous method, it works only for already resolved features,
     * returning undefined otherwise
     */
    FeatureModulesService.prototype.getInjectors = function (componentType) {
        var _this = this;
        var _a;
        var feature = this.componentFeatureMap.get(componentType);
        var injectors;
        // we are returning injectors only for already resolved features
        (_a = this.features
            .get(feature)) === null || _a === void 0 ? void 0 : _a.subscribe(function (featureInstance) {
            injectors = __spread([
                // feature module injector
                featureInstance.moduleRef.injector
            ], featureInstance.depsModules.map(function (module) { return _this.dependencyModules.get(module).injector; }));
        }).unsubscribe();
        return injectors;
    };
    /**
     * Resolve feature based on feature name, if feature was not yet resolved
     *
     * It will first resolve all module dependencies if defined
     */
    FeatureModulesService.prototype.resolveFeature = function (featureName) {
        var _this = this;
        return defer(function () {
            var _a;
            if (!_this.features.has(featureName)) {
                var featureConfig_1 = _this.featureModulesConfig[featureName];
                if (!(featureConfig_1 === null || featureConfig_1 === void 0 ? void 0 : featureConfig_1.module)) {
                    throw new Error('No module defined for Feature Module ' + featureName);
                }
                // resolve dependencies first (if any)
                var depsResolve = ((_a = featureConfig_1.dependencies) === null || _a === void 0 ? void 0 : _a.length) ? forkJoin(featureConfig_1.dependencies.map(function (depModuleFunc) {
                    return _this.resolveDependencyModule(depModuleFunc);
                }))
                    : of(undefined);
                _this.features.set(featureName, depsResolve.pipe(switchMap(function (deps) { return _this.resolveFeatureModule(featureConfig_1, deps); }), tap(function (featureInstance) {
                    return _this.events.dispatch(createFrom(ModuleInitializedEvent, {
                        featureName: featureName,
                        moduleRef: featureInstance.moduleRef,
                    }));
                }), shareReplay()));
            }
            return _this.features.get(featureName);
        });
    };
    /**
     * Initialize feature module by returning feature instance
     */
    FeatureModulesService.prototype.resolveFeatureModule = function (featureConfig, depsModules) {
        var _this = this;
        if (depsModules === void 0) { depsModules = []; }
        return this.resolveModuleFactory(featureConfig === null || featureConfig === void 0 ? void 0 : featureConfig.module).pipe(map(function (_a) {
            var e_3, _b;
            var _c = __read(_a, 1), moduleFactory = _c[0];
            var moduleRef = moduleFactory.create(_this.injector);
            var featureInstance = __assign(__assign({}, featureConfig), { moduleRef: moduleRef,
                depsModules: depsModules, componentsMappings: {} });
            // resolve configuration for feature module
            var resolvedConfiguration = _this.resolveFeatureConfiguration(moduleRef.injector);
            try {
                // extract cms components configuration from feature config
                for (var _d = __values(featureInstance.cmsComponents), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var componentType = _e.value;
                    featureInstance.componentsMappings[componentType] =
                        resolvedConfiguration.cmsComponents[componentType];
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return featureInstance;
        }));
    };
    /**
     * Returns configuration provided in feature module
     */
    FeatureModulesService.prototype.resolveFeatureConfiguration = function (featureInjector) {
        // get config chunks from feature lib
        var featureConfigChunks = featureInjector.get(ConfigChunk, [], InjectFlags.Self);
        // get default config chunks from feature lib
        var featureDefaultConfigChunks = featureInjector.get(DefaultConfigChunk, [], InjectFlags.Self);
        return deepMerge.apply(void 0, __spread([{}], (featureDefaultConfigChunks !== null && featureDefaultConfigChunks !== void 0 ? featureDefaultConfigChunks : []), (featureConfigChunks !== null && featureConfigChunks !== void 0 ? featureConfigChunks : [])));
    };
    /**
     * Resolves dependency module and initializes single module instance
     */
    FeatureModulesService.prototype.resolveDependencyModule = function (moduleFunc) {
        var _this = this;
        // We grab moduleFactory symbol from module function and if there is no
        // such a module created yet, we create it and store it in a
        // dependencyModules map
        return this.resolveModuleFactory(moduleFunc).pipe(tap(function (_a) {
            var _b = __read(_a, 2), moduleFactory = _b[0], module = _b[1];
            if (!_this.dependencyModules.has(module)) {
                var moduleRef = moduleFactory.create(_this.injector);
                _this.dependencyModules.set(module, moduleRef);
                _this.events.dispatch(createFrom(ModuleInitializedEvent, {
                    moduleRef: moduleRef,
                }));
            }
        }), pluck(1));
    };
    /**
     * Resolve any Angular module from an function that return module or moduleFactory
     */
    FeatureModulesService.prototype.resolveModuleFactory = function (moduleFunc) {
        var _this = this;
        return from(moduleFunc()).pipe(switchMap(function (module) {
            return module instanceof NgModuleFactory
                ? of([module, module])
                : combineLatest([
                    // using compiler here is for jit compatibility, there is no overhead
                    // for aot production builds as it will be stubbed
                    from(_this.compiler.compileModuleAsync(module)),
                    of(module),
                ]);
        }), observeOn(queueScheduler));
    };
    FeatureModulesService.prototype.ngOnDestroy = function () {
        // clean up all initialized features
        merge.apply(void 0, __spread(Array.from(this.features.values()))).subscribe(function (featureInstance) { var _a; return (_a = featureInstance.moduleRef) === null || _a === void 0 ? void 0 : _a.destroy(); });
        // clean up all initialized dependency modules
        this.dependencyModules.forEach(function (dependency) { return dependency.destroy(); });
    };
    FeatureModulesService.ctorParameters = function () { return [
        { type: ConfigInitializerService },
        { type: Compiler },
        { type: Injector },
        { type: EventService }
    ]; };
    FeatureModulesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FeatureModulesService_Factory() { return new FeatureModulesService(i0.ɵɵinject(i1.ConfigInitializerService), i0.ɵɵinject(i0.Compiler), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.EventService)); }, token: FeatureModulesService, providedIn: "root" });
    FeatureModulesService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], FeatureModulesService);
    return FeatureModulesService;
}());
export { FeatureModulesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tb2R1bGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3NlcnZpY2VzL2ZlYXR1cmUtbW9kdWxlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsUUFBUSxFQUNSLFVBQVUsRUFDVixXQUFXLEVBQ1gsUUFBUSxFQUNSLGVBQWUsRUFDZixXQUFXLEVBQ1gsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsbUJBQW1CLEVBQ25CLFNBQVMsRUFDVCxXQUFXLEVBQ1gsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixTQUFTLEVBQ1Qsa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsc0JBQXNCLEdBQ3ZCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUNMLGFBQWEsRUFDYixLQUFLLEVBQ0wsUUFBUSxFQUNSLElBQUksRUFDSixLQUFLLEVBRUwsRUFBRSxFQUNGLGNBQWMsR0FDZixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFDTCxHQUFHLEVBQ0gsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFDOzs7QUFReEI7O0dBRUc7QUFJSDtJQWlCRSwrQkFDWSxpQkFBMkMsRUFDM0MsUUFBa0IsRUFDbEIsUUFBa0IsRUFDbEIsTUFBb0I7UUFIcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtRQUMzQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQWZoQyxnQ0FBZ0M7UUFDeEIsd0JBQW1CLEdBQXdCLElBQUksR0FBRyxFQUFFLENBQUM7UUFFN0Q7OztXQUdHO1FBQ0ssYUFBUSxHQUE2QyxJ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LENBQUMsTUFBYSxDQUFDLENBQUM7b0JBQ3JELEVBQUUsQ0FBQyxNQUFNLENBQUM7aUJBQ1gsQ0FBQztRQVBOLENBT00sQ0FDUCxFQUNELFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FDMUIsQ0FBQztJQUNKLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0Usb0NBQW9DO1FBQ3BDLEtBQUssd0JBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUUsU0FBUyxDQUFDLFVBQUMsZUFBZSx5QkFDckUsZUFBZSxDQUFDLFNBQVMsMENBQUUsT0FBTyxLQUFFLENBQ3JDLENBQUM7UUFFRiw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7O2dCQXhPOEIsd0JBQXdCO2dCQUNqQyxRQUFRO2dCQUNSLFFBQVE7Z0JBQ1YsWUFBWTs7O0lBckJyQixxQkFBcUI7UUFIakMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLHFCQUFxQixDQTJQakM7Z0NBaFREO0NBZ1RDLEFBM1BELElBMlBDO1NBM1BZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBpbGVyLFxuICBJbmplY3RhYmxlLFxuICBJbmplY3RGbGFncyxcbiAgSW5qZWN0b3IsXG4gIE5nTW9kdWxlRmFjdG9yeSxcbiAgTmdNb2R1bGVSZWYsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDTVNDb21wb25lbnRDb25maWcsXG4gIENtc0NvbXBvbmVudE1hcHBpbmcsXG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnQ2h1bmssXG4gIENvbmZpZ0luaXRpYWxpemVyU2VydmljZSxcbiAgY3JlYXRlRnJvbSxcbiAgZGVlcE1lcmdlLFxuICBEZWZhdWx0Q29uZmlnQ2h1bmssXG4gIEV2ZW50U2VydmljZSxcbiAgRmVhdHVyZU1vZHVsZUNvbmZpZyxcbiAgTW9kdWxlSW5pdGlhbGl6ZWRFdmVudCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIGNvbWJpbmVMYXRlc3QsXG4gIGRlZmVyLFxuICBmb3JrSm9pbixcbiAgZnJvbSxcbiAgbWVyZ2UsXG4gIE9ic2VydmFibGUsXG4gIG9mLFxuICBxdWV1ZVNjaGVkdWxlcixcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBtYXAsXG4gIG9ic2VydmVPbixcbiAgcGx1Y2ssXG4gIHNoYXJlUmVwbGF5LFxuICBzd2l0Y2hNYXAsXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbnRlcmZhY2UgRmVhdHVyZUluc3RhbmNlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZUNvbmZpZyB7XG4gIG1vZHVsZVJlZj86IE5nTW9kdWxlUmVmPGFueT47XG4gIGRlcHNNb2R1bGVzPzogYW55W107XG4gIGNvbXBvbmVudHNNYXBwaW5ncz86IENNU0NvbXBvbmVudENvbmZpZztcbn1cblxuLyoqXG4gKiBTZXJ2aWNlIHJlc3BvbnNpYmxlIGZvciByZXNvbHZpbmcgY21zIGNvbmZpZyBiYXNlZCBmZWF0dXJlIG1vZHVsZXMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlTW9kdWxlc1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvLyBmZWF0dXJlIG1vZHVsZXMgY29uZmlndXJhdGlvblxuICBwcml2YXRlIGZlYXR1cmVNb2R1bGVzQ29uZmlnPzoge1xuICAgIFtmZWF0dXJlTmFtZTogc3RyaW5nXTogRmVhdHVyZU1vZHVsZUNvbmZpZztcbiAgfTtcblxuICAvLyBtYXBzIGNvbXBvbmVudFR5cGUgdG8gZmVhdHVyZVxuICBwcml2YXRlIGNvbXBvbmVudEZlYXR1cmVNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwKCk7XG5cbiAgLypcbiAgICogQ29udGFpbnMgZWl0aGVyIEZlYXR1cmVJbnN0YW5jZSBvciBGZWF0dXJlSW5zdGFuY2UgcmVzb2x2ZXIgZm9yIG5vdCB5ZXRcbiAgICogcmVzb2x2ZWQgZmVhdHVyZSBtb2R1bGVzXG4gICAqL1xuICBwcml2YXRlIGZlYXR1cmVzOiBNYXA8c3RyaW5nLCBPYnNlcnZhYmxlPEZlYXR1cmVJbnN0YW5jZT4+ID0gbmV3IE1hcCgpO1xuXG4gIHByaXZhdGUgZGVwZW5kZW5jeU1vZHVsZXMgPSBuZXcgTWFwPGFueSwgTmdNb2R1bGVSZWY8YW55Pj4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29uZmlnSW5pdGlhbGl6ZXI6IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29tcGlsZXI6IENvbXBpbGVyLFxuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJvdGVjdGVkIGV2ZW50czogRXZlbnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuaW5pdEZlYXR1cmVNYXAoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaW5pdEZlYXR1cmVNYXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY29uZmlnOiBDbXNDb25maWcgPSBhd2FpdCB0aGlzLmNvbmZpZ0luaXRpYWxpemVyLmdldFN0YWJsZUNvbmZpZyhcbiAgICAgICdmZWF0dXJlTW9kdWxlcydcbiAgICApO1xuXG4gICAgdGhpcy5mZWF0dXJlTW9kdWxlc0NvbmZpZyA9IGNvbmZpZy5mZWF0dXJlTW9kdWxlcyA/PyB7fTtcblxuICAgIGZvciAoY29uc3QgW2ZlYXR1cmVOYW1lLCBmZWF0dXJlQ29uZmlnXSBvZiBPYmplY3QuZW50cmllcyhcbiAgICAgIHRoaXMuZmVhdHVyZU1vZHVsZXNDb25maWdcbiAgICApKSB7XG4gICAgICBpZiAoZmVhdHVyZUNvbmZpZz8uY21zQ29tcG9uZW50cz8ubGVuZ3RoKSB7XG4gICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIGZlYXR1cmVDb25maWcuY21zQ29tcG9uZW50cykge1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50RmVhdHVyZU1hcC5zZXQoY29tcG9uZW50LCBmZWF0dXJlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlcmUgaXMgZmVhdHVyZSBtb2R1bGUgY29uZmlndXJhdGlvbiB0aGF0IGNvdmVycyBzcGVjaWZpZWRcbiAgICogY29tcG9uZW50IHR5cGVcbiAgICovXG4gIGhhc0ZlYXR1cmVGb3IoY29tcG9uZW50VHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RmVhdHVyZU1hcC5oYXMoY29tcG9uZW50VHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGZ1bGwgQ21zQ29tcG9uZW50IG1hcHBpbmcgZGVmaW5lZCBpbiBmZWF0dXJlIG1vZHVsZVxuICAgKi9cbiAgZ2V0Q21zTWFwcGluZyhjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudE1hcHBpbmc+IHtcbiAgICBjb25zdCBmZWF0dXJlID0gdGhpcy5jb21wb25lbnRGZWF0dXJlTWFwLmdldChjb21wb25lbnRUeXBlKTtcblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVGZWF0dXJlKGZlYXR1cmUpLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChmZWF0dXJlSW5zdGFuY2UpID0+IGZlYXR1cmVJbnN0YW5jZS5jb21wb25lbnRzTWFwcGluZ3NbY29tcG9uZW50VHlwZV1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgaW5qZWN0b3JzIGZvciBmZWF0dXJlIGFuZCBpdHMgZGVwZW5kZW5jaWVzXG4gICAqXG4gICAqIEFzIGl0J3MgYSBzeW5jaHJvbm91cyBtZXRob2QsIGl0IHdvcmtzIG9ubHkgZm9yIGFscmVhZHkgcmVzb2x2ZWQgZmVhdHVyZXMsXG4gICAqIHJldHVybmluZyB1bmRlZmluZWQgb3RoZXJ3aXNlXG4gICAqL1xuICBnZXRJbmplY3RvcnMoY29tcG9uZW50VHlwZTogc3RyaW5nKTogSW5qZWN0b3JbXSB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgZmVhdHVyZSA9IHRoaXMuY29tcG9uZW50RmVhdHVyZU1hcC5nZXQoY29tcG9uZW50VHlwZSk7XG4gICAgbGV0IGluamVjdG9ycztcblxuICAgIC8vIHdlIGFyZSByZXR1cm5pbmcgaW5qZWN0b3JzIG9ubHkgZm9yIGFscmVhZHkgcmVzb2x2ZWQgZmVhdHVyZXNcbiAgICB0aGlzLmZlYXR1cmVzXG4gICAgICAuZ2V0KGZlYXR1cmUpXG4gICAgICA/LnN1YnNjcmliZSgoZmVhdHVyZUluc3RhbmNlKSA9PiB7XG4gICAgICAgIGluamVjdG9ycyA9IFtcbiAgICAgICAgICAvLyBmZWF0dXJlIG1vZHVsZSBpbmplY3RvclxuICAgICAgICAgIGZlYXR1cmVJbnN0YW5jZS5tb2R1bGVSZWYuaW5qZWN0b3IsXG4gICAgICAgICAgLy8gaW5qZWN0b3JzIGZyb20gZGVwZW5kZW5jeSBtb2R1bGVzXG4gICAgICAgICAgLi4uZmVhdHVyZUluc3RhbmNlLmRlcHNNb2R1bGVzLm1hcChcbiAgICAgICAgICAgIChtb2R1bGUpID0+IHRoaXMuZGVwZW5kZW5jeU1vZHVsZXMuZ2V0KG1vZHVsZSkuaW5qZWN0b3JcbiAgICAgICAgICApLFxuICAgICAgICBdO1xuICAgICAgfSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIHJldHVybiBpbmplY3RvcnM7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSBmZWF0dXJlIGJhc2VkIG9uIGZlYXR1cmUgbmFtZSwgaWYgZmVhdHVyZSB3YXMgbm90IHlldCByZXNvbHZlZFxuICAgKlxuICAgKiBJdCB3aWxsIGZpcnN0IHJlc29sdmUgYWxsIG1vZHVsZSBkZXBlbmRlbmNpZXMgaWYgZGVmaW5lZFxuICAgKi9cbiAgcHJpdmF0ZSByZXNvbHZlRmVhdHVyZShmZWF0dXJlTmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxGZWF0dXJlSW5zdGFuY2U+IHtcbiAgICByZXR1cm4gZGVmZXIoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmZlYXR1cmVzLmhhcyhmZWF0dXJlTmFtZSkpIHtcbiAgICAgICAgY29uc3QgZmVhdHVyZUNvbmZpZyA9IHRoaXMuZmVhdHVyZU1vZHVsZXNDb25maWdbZmVhdHVyZU5hbWVdO1xuXG4gICAgICAgIGlmICghZmVhdHVyZUNvbmZpZz8ubW9kdWxlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ05vIG1vZHVsZSBkZWZpbmVkIGZvciBGZWF0dXJlIE1vZHVsZSAnICsgZmVhdHVyZU5hbWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzb2x2ZSBkZXBlbmRlbmNpZXMgZmlyc3QgKGlmIGFueSlcbiAgICAgICAgY29uc3QgZGVwc1Jlc29sdmUgPSBmZWF0dXJlQ29uZmlnLmRlcGVuZGVuY2llcz8ubGVuZ3RoXG4gICAgICAgICAgPyBmb3JrSm9pbihcbiAgICAgICAgICAgICAgZmVhdHVyZUNvbmZpZy5kZXBlbmRlbmNpZXMubWFwKChkZXBNb2R1bGVGdW5jKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZURlcGVuZGVuY3lNb2R1bGUoZGVwTW9kdWxlRnVuYylcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogb2YodW5kZWZpbmVkKTtcblxuICAgICAgICB0aGlzLmZlYXR1cmVzLnNldChcbiAgICAgICAgICBmZWF0dXJlTmFtZSxcbiAgICAgICAgICBkZXBzUmVzb2x2ZS5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKChkZXBzKSA9PiB0aGlzLnJlc29sdmVGZWF0dXJlTW9kdWxlKGZlYXR1cmVDb25maWcsIGRlcHMpKSxcbiAgICAgICAgICAgIHRhcCgoZmVhdHVyZUluc3RhbmNlKSA9PlxuICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5kaXNwYXRjaChcbiAgICAgICAgICAgICAgICBjcmVhdGVGcm9tKE1vZHVsZUluaXRpYWxpemVkRXZlbnQsIHtcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmVOYW1lLFxuICAgICAgICAgICAgICAgICAgbW9kdWxlUmVmOiBmZWF0dXJlSW5zdGFuY2UubW9kdWxlUmVmLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzaGFyZVJlcGxheSgpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5mZWF0dXJlcy5nZXQoZmVhdHVyZU5hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZmVhdHVyZSBtb2R1bGUgYnkgcmV0dXJuaW5nIGZlYXR1cmUgaW5zdGFuY2VcbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZUZlYXR1cmVNb2R1bGUoXG4gICAgZmVhdHVyZUNvbmZpZzogRmVhdHVyZU1vZHVsZUNvbmZpZyxcbiAgICBkZXBzTW9kdWxlczogYW55W10gPSBbXVxuICApOiBPYnNlcnZhYmxlPEZlYXR1cmVJbnN0YW5jZT4ge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVNb2R1bGVGYWN0b3J5KGZlYXR1cmVDb25maWc/Lm1vZHVsZSkucGlwZShcbiAgICAgIG1hcCgoW21vZHVsZUZhY3RvcnldKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZHVsZVJlZiA9IG1vZHVsZUZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXG4gICAgICAgIGNvbnN0IGZlYXR1cmVJbnN0YW5jZTogRmVhdHVyZUluc3RhbmNlID0ge1xuICAgICAgICAgIC4uLmZlYXR1cmVDb25maWcsXG4gICAgICAgICAgbW9kdWxlUmVmLFxuICAgICAgICAgIGRlcHNNb2R1bGVzLFxuICAgICAgICAgIGNvbXBvbmVudHNNYXBwaW5nczoge30sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gcmVzb2x2ZSBjb25maWd1cmF0aW9uIGZvciBmZWF0dXJlIG1vZHVsZVxuICAgICAgICBjb25zdCByZXNvbHZlZENvbmZpZ3VyYXRpb24gPSB0aGlzLnJlc29sdmVGZWF0dXJlQ29uZmlndXJhdGlvbihcbiAgICAgICAgICBtb2R1bGVSZWYuaW5qZWN0b3JcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBleHRyYWN0IGNtcyBjb21wb25lbnRzIGNvbmZpZ3VyYXRpb24gZnJvbSBmZWF0dXJlIGNvbmZpZ1xuICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgZmVhdHVyZUluc3RhbmNlLmNtc0NvbXBvbmVudHMpIHtcbiAgICAgICAgICBmZWF0dXJlSW5zdGFuY2UuY29tcG9uZW50c01hcHBpbmdzW2NvbXBvbmVudFR5cGVdID1cbiAgICAgICAgICAgIHJlc29sdmVkQ29uZmlndXJhdGlvbi5jbXNDb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZWF0dXJlSW5zdGFuY2U7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjb25maWd1cmF0aW9uIHByb3ZpZGVkIGluIGZlYXR1cmUgbW9kdWxlXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVGZWF0dXJlQ29uZmlndXJhdGlvbihmZWF0dXJlSW5qZWN0b3I6IEluamVjdG9yKTogQ21zQ29uZmlnIHtcbiAgICAvLyBnZXQgY29uZmlnIGNodW5rcyBmcm9tIGZlYXR1cmUgbGliXG4gICAgY29uc3QgZmVhdHVyZUNvbmZpZ0NodW5rcyA9IGZlYXR1cmVJbmplY3Rvci5nZXQ8YW55W10+KFxuICAgICAgQ29uZmlnQ2h1bmssXG4gICAgICBbXSxcbiAgICAgIEluamVjdEZsYWdzLlNlbGZcbiAgICApO1xuICAgIC8vIGdldCBkZWZhdWx0IGNvbmZpZyBjaHVua3MgZnJvbSBmZWF0dXJlIGxpYlxuICAgIGNvbnN0IGZlYXR1cmVEZWZhdWx0Q29uZmlnQ2h1bmtzID0gZmVhdHVyZUluamVjdG9yLmdldDxhbnlbXT4oXG4gICAgICBEZWZhdWx0Q29uZmlnQ2h1bmssXG4gICAgICBbXSxcbiAgICAgIEluamVjdEZsYWdzLlNlbGZcbiAgICApO1xuXG4gICAgcmV0dXJuIGRlZXBNZXJnZShcbiAgICAgIHt9LFxuICAgICAgLi4uKGZlYXR1cmVEZWZhdWx0Q29uZmlnQ2h1bmtzID8/IFtdKSxcbiAgICAgIC4uLihmZWF0dXJlQ29uZmlnQ2h1bmtzID8/IFtdKVxuICAgICkgYXMgQ21zQ29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIGRlcGVuZGVuY3kgbW9kdWxlIGFuZCBpbml0aWFsaXplcyBzaW5nbGUgbW9kdWxlIGluc3RhbmNlXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVEZXBlbmRlbmN5TW9kdWxlKFxuICAgIG1vZHVsZUZ1bmM6ICgpID0+IFByb21pc2U8YW55PlxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8vIFdlIGdyYWIgbW9kdWxlRmFjdG9yeSBzeW1ib2wgZnJvbSBtb2R1bGUgZnVuY3Rpb24gYW5kIGlmIHRoZXJlIGlzIG5vXG4gICAgLy8gc3VjaCBhIG1vZHVsZSBjcmVhdGVkIHlldCwgd2UgY3JlYXRlIGl0IGFuZCBzdG9yZSBpdCBpbiBhXG4gICAgLy8gZGVwZW5kZW5jeU1vZHVsZXMgbWFwXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZU1vZHVsZUZhY3RvcnkobW9kdWxlRnVuYykucGlwZShcbiAgICAgIHRhcCgoW21vZHVsZUZhY3RvcnksIG1vZHVsZV0pID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmRlcGVuZGVuY3lNb2R1bGVzLmhhcyhtb2R1bGUpKSB7XG4gICAgICAgICAgY29uc3QgbW9kdWxlUmVmID0gbW9kdWxlRmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG4gICAgICAgICAgdGhpcy5kZXBlbmRlbmN5TW9kdWxlcy5zZXQobW9kdWxlLCBtb2R1bGVSZWYpO1xuXG4gICAgICAgICAgdGhpcy5ldmVudHMuZGlzcGF0Y2goXG4gICAgICAgICAgICBjcmVhdGVGcm9tKE1vZHVsZUluaXRpYWxpemVkRXZlbnQsIHtcbiAgICAgICAgICAgICAgbW9kdWxlUmVmLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHBsdWNrKDEpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIGFueSBBbmd1bGFyIG1vZHVsZSBmcm9tIGFuIGZ1bmN0aW9uIHRoYXQgcmV0dXJuIG1vZHVsZSBvciBtb2R1bGVGYWN0b3J5XG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVNb2R1bGVGYWN0b3J5KFxuICAgIG1vZHVsZUZ1bmM6ICgpID0+IFByb21pc2U8YW55PlxuICApOiBPYnNlcnZhYmxlPFtOZ01vZHVsZUZhY3Rvcnk8YW55PiwgYW55XT4ge1xuICAgIHJldHVybiBmcm9tKG1vZHVsZUZ1bmMoKSkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgobW9kdWxlKSA9PlxuICAgICAgICBtb2R1bGUgaW5zdGFuY2VvZiBOZ01vZHVsZUZhY3RvcnlcbiAgICAgICAgICA/IChvZihbbW9kdWxlLCBtb2R1bGVdKSBhcyBPYnNlcnZhYmxlPFtOZ01vZHVsZUZhY3Rvcnk8YW55PiwgYW55XT4pXG4gICAgICAgICAgOiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICAgICAgLy8gdXNpbmcgY29tcGlsZXIgaGVyZSBpcyBmb3Igaml0IGNvbXBhdGliaWxpdHksIHRoZXJlIGlzIG5vIG92ZXJoZWFkXG4gICAgICAgICAgICAgIC8vIGZvciBhb3QgcHJvZHVjdGlvbiBidWlsZHMgYXMgaXQgd2lsbCBiZSBzdHViYmVkXG4gICAgICAgICAgICAgIGZyb20odGhpcy5jb21waWxlci5jb21waWxlTW9kdWxlQXN5bmMobW9kdWxlIGFzIGFueSkpLFxuICAgICAgICAgICAgICBvZihtb2R1bGUpLFxuICAgICAgICAgICAgXSlcbiAgICAgICksXG4gICAgICBvYnNlcnZlT24ocXVldWVTY2hlZHVsZXIpXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vIGNsZWFuIHVwIGFsbCBpbml0aWFsaXplZCBmZWF0dXJlc1xuICAgIG1lcmdlKC4uLkFycmF5LmZyb20odGhpcy5mZWF0dXJlcy52YWx1ZXMoKSkpLnN1YnNjcmliZSgoZmVhdHVyZUluc3RhbmNlKSA9PlxuICAgICAgZmVhdHVyZUluc3RhbmNlLm1vZHVsZVJlZj8uZGVzdHJveSgpXG4gICAgKTtcblxuICAgIC8vIGNsZWFuIHVwIGFsbCBpbml0aWFsaXplZCBkZXBlbmRlbmN5IG1vZHVsZXNcbiAgICB0aGlzLmRlcGVuZGVuY3lNb2R1bGVzLmZvckVhY2goKGRlcGVuZGVuY3kpID0+IGRlcGVuZGVuY3kuZGVzdHJveSgpKTtcbiAgfVxufVxuIl19