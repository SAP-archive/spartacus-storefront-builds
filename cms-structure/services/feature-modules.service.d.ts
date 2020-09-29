import { Compiler, Injector, OnDestroy } from '@angular/core';
import { CmsComponentMapping, ConfigInitializerService, EventService } from '@spartacus/core';
import { Observable } from 'rxjs';
/**
 * Service responsible for resolving cms config based feature modules.
 */
import * as ɵngcc0 from '@angular/core';
export declare class FeatureModulesService implements OnDestroy {
    protected configInitializer: ConfigInitializerService;
    protected compiler: Compiler;
    protected injector: Injector;
    protected events: EventService;
    private featureModulesConfig?;
    private componentFeatureMap;
    private features;
    private dependencyModules;
    constructor(configInitializer: ConfigInitializerService, compiler: Compiler, injector: Injector, events: EventService);
    private initFeatureMap;
    /**
     * Check if there is feature module configuration that covers specified
     * component type
     */
    hasFeatureFor(componentType: string): boolean;
    /**
     * Return full CmsComponent mapping defined in feature module
     */
    getCmsMapping(componentType: string): Observable<CmsComponentMapping>;
    /**
     * Get all injectors for feature and its dependencies
     *
     * As it's a synchronous method, it works only for already resolved features,
     * returning undefined otherwise
     */
    getInjectors(componentType: string): Injector[] | undefined;
    /**
     * Resolve feature based on feature name, if feature was not yet resolved
     *
     * It will first resolve all module dependencies if defined
     */
    private resolveFeature;
    /**
     * Initialize feature module by returning feature instance
     */
    private resolveFeatureModule;
    /**
     * Returns configuration provided in feature module
     */
    private resolveFeatureConfiguration;
    /**
     * Resolves dependency module and initializes single module instance
     */
    private resolveDependencyModule;
    /**
     * Resolve any Angular module from an function that return module or moduleFactory
     */
    private resolveModuleFactory;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FeatureModulesService, never>;
}

//# sourceMappingURL=feature-modules.service.d.ts.map