import { Compiler, Injector, OnDestroy } from '@angular/core';
import { CmsComponentMapping, ConfigInitializerService } from '@spartacus/core';
import { Observable } from 'rxjs';
/**
 * Service responsible for resolving cms config based feature modules.
 */
import * as ɵngcc0 from '@angular/core';
export declare class FeatureModulesService implements OnDestroy {
    protected configInitializer: ConfigInitializerService;
    protected compiler: Compiler;
    protected injector: Injector;
    private featureModulesConfig?;
    private componentFeatureMap;
    private features;
    private dependencyModules;
    constructor(configInitializer: ConfigInitializerService, compiler: Compiler, injector: Injector);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tb2R1bGVzLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiZmVhdHVyZS1tb2R1bGVzLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlEQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBpbGVyLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRNYXBwaW5nLCBDb25maWdJbml0aWFsaXplclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuLyoqXG4gKiBTZXJ2aWNlIHJlc3BvbnNpYmxlIGZvciByZXNvbHZpbmcgY21zIGNvbmZpZyBiYXNlZCBmZWF0dXJlIG1vZHVsZXMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZlYXR1cmVNb2R1bGVzU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZ0luaXRpYWxpemVyOiBDb25maWdJbml0aWFsaXplclNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNvbXBpbGVyOiBDb21waWxlcjtcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yO1xuICAgIHByaXZhdGUgZmVhdHVyZU1vZHVsZXNDb25maWc/O1xuICAgIHByaXZhdGUgY29tcG9uZW50RmVhdHVyZU1hcDtcbiAgICBwcml2YXRlIGZlYXR1cmVzO1xuICAgIHByaXZhdGUgZGVwZW5kZW5jeU1vZHVsZXM7XG4gICAgY29uc3RydWN0b3IoY29uZmlnSW5pdGlhbGl6ZXI6IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSwgY29tcGlsZXI6IENvbXBpbGVyLCBpbmplY3RvcjogSW5qZWN0b3IpO1xuICAgIHByaXZhdGUgaW5pdEZlYXR1cmVNYXA7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlcmUgaXMgZmVhdHVyZSBtb2R1bGUgY29uZmlndXJhdGlvbiB0aGF0IGNvdmVycyBzcGVjaWZpZWRcbiAgICAgKiBjb21wb25lbnQgdHlwZVxuICAgICAqL1xuICAgIGhhc0ZlYXR1cmVGb3IoY29tcG9uZW50VHlwZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gZnVsbCBDbXNDb21wb25lbnQgbWFwcGluZyBkZWZpbmVkIGluIGZlYXR1cmUgbW9kdWxlXG4gICAgICovXG4gICAgZ2V0Q21zTWFwcGluZyhjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudE1hcHBpbmc+O1xuICAgIC8qKlxuICAgICAqIEdldCBhbGwgaW5qZWN0b3JzIGZvciBmZWF0dXJlIGFuZCBpdHMgZGVwZW5kZW5jaWVzXG4gICAgICpcbiAgICAgKiBBcyBpdCdzIGEgc3luY2hyb25vdXMgbWV0aG9kLCBpdCB3b3JrcyBvbmx5IGZvciBhbHJlYWR5IHJlc29sdmVkIGZlYXR1cmVzLFxuICAgICAqIHJldHVybmluZyB1bmRlZmluZWQgb3RoZXJ3aXNlXG4gICAgICovXG4gICAgZ2V0SW5qZWN0b3JzKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IEluamVjdG9yW10gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogUmVzb2x2ZSBmZWF0dXJlIGJhc2VkIG9uIGZlYXR1cmUgbmFtZSwgaWYgZmVhdHVyZSB3YXMgbm90IHlldCByZXNvbHZlZFxuICAgICAqXG4gICAgICogSXQgd2lsbCBmaXJzdCByZXNvbHZlIGFsbCBtb2R1bGUgZGVwZW5kZW5jaWVzIGlmIGRlZmluZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlc29sdmVGZWF0dXJlO1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgZmVhdHVyZSBtb2R1bGUgYnkgcmV0dXJuaW5nIGZlYXR1cmUgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlc29sdmVGZWF0dXJlTW9kdWxlO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgY29uZmlndXJhdGlvbiBwcm92aWRlZCBpbiBmZWF0dXJlIG1vZHVsZVxuICAgICAqL1xuICAgIHByaXZhdGUgcmVzb2x2ZUZlYXR1cmVDb25maWd1cmF0aW9uO1xuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIGRlcGVuZGVuY3kgbW9kdWxlIGFuZCBpbml0aWFsaXplcyBzaW5nbGUgbW9kdWxlIGluc3RhbmNlXG4gICAgICovXG4gICAgcHJpdmF0ZSByZXNvbHZlRGVwZW5kZW5jeU1vZHVsZTtcbiAgICAvKipcbiAgICAgKiBSZXNvbHZlIGFueSBBbmd1bGFyIG1vZHVsZSBmcm9tIGFuIGZ1bmN0aW9uIHRoYXQgcmV0dXJuIG1vZHVsZSBvciBtb2R1bGVGYWN0b3J5XG4gICAgICovXG4gICAgcHJpdmF0ZSByZXNvbHZlTW9kdWxlRmFjdG9yeTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19