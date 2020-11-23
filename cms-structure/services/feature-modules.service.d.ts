import { NgModuleRef, OnDestroy } from '@angular/core';
import { CmsComponentMapping, ConfigInitializerService, LazyModulesService } from '@spartacus/core';
import { Observable } from 'rxjs';
/**
 * Service responsible for resolving cms config based feature modules.
 */
import * as ɵngcc0 from '@angular/core';
export declare class FeatureModulesService implements OnDestroy {
    protected configInitializer: ConfigInitializerService;
    protected lazyModules: LazyModulesService;
    private featureModulesConfig?;
    private componentFeatureMap;
    private features;
    constructor(configInitializer: ConfigInitializerService, lazyModules: LazyModulesService);
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
     * Resolves feature module for provided component type
     *
     * @param componentType
     */
    getModule(componentType: string): NgModuleRef<any> | undefined;
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
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FeatureModulesService, never>;
}

//# sourceMappingURL=feature-modules.service.d.ts.map