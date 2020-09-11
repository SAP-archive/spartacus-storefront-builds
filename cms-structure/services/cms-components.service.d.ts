import { Injector } from '@angular/core';
import { CmsComponentMapping, CmsConfig, DeferLoadingStrategy } from '@spartacus/core';
import { Route } from '@angular/router';
import { Observable } from 'rxjs';
import { FeatureModulesService } from './feature-modules.service';
import * as ɵngcc0 from '@angular/core';
export declare class CmsComponentsService {
    protected config: CmsConfig;
    protected platformId: Object;
    protected featureModules?: FeatureModulesService;
    private missingComponents;
    private mappings;
    private mappingResolvers;
    /**
     * @deprecated since 2.1
     * constructor(config: CmsConfig, platformId: Object);
     */
    constructor(config: CmsConfig, platformId: Object, featureModules?: FeatureModulesService);
    /**
     * Should be called to make sure all component mappings are determined,
     * especially lazy loaded ones.
     *
     * It's recommended way to make sure all other methods of CmsComponentService
     * will be able to work synchronously for asked component types and avoid risk
     * of potential errors that could be thrown otherwise.
     */
    determineMappings(componentTypes: string[]): Observable<string[]>;
    private getFeatureMappingResolver;
    getInjectors(componentType: string): Injector[];
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
    getMapping(componentType: string): CmsComponentMapping;
    /**
     * Checks, if component should be rendered as some components
     * could be disabled for server side renderings
     */
    shouldRender(componentType: string): boolean;
    /**
     * Return DeferLoadingStrategy for component type.
     */
    getDeferLoadingStrategy(componentType: string): DeferLoadingStrategy;
    /**
     * Get cms driven child routes for components
     */
    getChildRoutes(componentTypes: string[]): Route[];
    /**
     * Get cms driven guards for components
     */
    getGuards(componentTypes: string[]): any[];
    /**
     * Get i18n keys associated with components
     */
    getI18nKeys(componentTypes: string[]): string[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsComponentsService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudHMuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRNYXBwaW5nLCBDbXNDb25maWcsIERlZmVyTG9hZGluZ1N0cmF0ZWd5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZlYXR1cmVNb2R1bGVzU2VydmljZSB9IGZyb20gJy4vZmVhdHVyZS1tb2R1bGVzLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ21zQ29tcG9uZW50c1NlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjb25maWc6IENtc0NvbmZpZztcbiAgICBwcm90ZWN0ZWQgcGxhdGZvcm1JZDogT2JqZWN0O1xuICAgIHByb3RlY3RlZCBmZWF0dXJlTW9kdWxlcz86IEZlYXR1cmVNb2R1bGVzU2VydmljZTtcbiAgICBwcml2YXRlIG1pc3NpbmdDb21wb25lbnRzO1xuICAgIHByaXZhdGUgbWFwcGluZ3M7XG4gICAgcHJpdmF0ZSBtYXBwaW5nUmVzb2x2ZXJzO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIDIuMVxuICAgICAqIGNvbnN0cnVjdG9yKGNvbmZpZzogQ21zQ29uZmlnLCBwbGF0Zm9ybUlkOiBPYmplY3QpO1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogQ21zQ29uZmlnLCBwbGF0Zm9ybUlkOiBPYmplY3QsIGZlYXR1cmVNb2R1bGVzPzogRmVhdHVyZU1vZHVsZXNTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBTaG91bGQgYmUgY2FsbGVkIHRvIG1ha2Ugc3VyZSBhbGwgY29tcG9uZW50IG1hcHBpbmdzIGFyZSBkZXRlcm1pbmVkLFxuICAgICAqIGVzcGVjaWFsbHkgbGF6eSBsb2FkZWQgb25lcy5cbiAgICAgKlxuICAgICAqIEl0J3MgcmVjb21tZW5kZWQgd2F5IHRvIG1ha2Ugc3VyZSBhbGwgb3RoZXIgbWV0aG9kcyBvZiBDbXNDb21wb25lbnRTZXJ2aWNlXG4gICAgICogd2lsbCBiZSBhYmxlIHRvIHdvcmsgc3luY2hyb25vdXNseSBmb3IgYXNrZWQgY29tcG9uZW50IHR5cGVzIGFuZCBhdm9pZCByaXNrXG4gICAgICogb2YgcG90ZW50aWFsIGVycm9ycyB0aGF0IGNvdWxkIGJlIHRocm93biBvdGhlcndpc2UuXG4gICAgICovXG4gICAgZGV0ZXJtaW5lTWFwcGluZ3MoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG4gICAgcHJpdmF0ZSBnZXRGZWF0dXJlTWFwcGluZ1Jlc29sdmVyO1xuICAgIGdldEluamVjdG9ycyhjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBJbmplY3RvcltdO1xuICAgIC8qKlxuICAgICAqIFJldHVybiBjb2xsZWN0aW9uIG9mIGNvbXBvbmVudCBtYXBwaW5nIGNvbmZpZ3VyYXRpb24gZm9yIHNwZWNpZmllZCBsaXN0IG9mXG4gICAgICogY29tcG9uZW50IHR5cGVzLlxuICAgICAqXG4gICAgICogSWYgY29tcG9uZW50IG1hcHBpbmcgY2FuJ3QgYmUgZGV0ZXJtaW5lZCBzeW5jaHJvbm91c2x5LCBmb3IgZXhhbXBsZSwgbGF6eVxuICAgICAqIGxvYWRlZCBvbmUsIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IuXG4gICAgICpcbiAgICAgKiBUbyBtYWtlIHN1cmUgY29tcG9uZW50IG1hcHBpbmcgaXMgYXZhaWxhYmxlLCBkZXRlcm1pbmVNYXBwaW5ncygpXG4gICAgICogc2hvdWxkIGJlIGNhbGxlZCBhbmQgY29tcGxldGVkIGZpcnN0LlxuICAgICAqL1xuICAgIGdldE1hcHBpbmcoY29tcG9uZW50VHlwZTogc3RyaW5nKTogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgICAvKipcbiAgICAgKiBDaGVja3MsIGlmIGNvbXBvbmVudCBzaG91bGQgYmUgcmVuZGVyZWQgYXMgc29tZSBjb21wb25lbnRzXG4gICAgICogY291bGQgYmUgZGlzYWJsZWQgZm9yIHNlcnZlciBzaWRlIHJlbmRlcmluZ3NcbiAgICAgKi9cbiAgICBzaG91bGRSZW5kZXIoY29tcG9uZW50VHlwZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gRGVmZXJMb2FkaW5nU3RyYXRlZ3kgZm9yIGNvbXBvbmVudCB0eXBlLlxuICAgICAqL1xuICAgIGdldERlZmVyTG9hZGluZ1N0cmF0ZWd5KGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IERlZmVyTG9hZGluZ1N0cmF0ZWd5O1xuICAgIC8qKlxuICAgICAqIEdldCBjbXMgZHJpdmVuIGNoaWxkIHJvdXRlcyBmb3IgY29tcG9uZW50c1xuICAgICAqL1xuICAgIGdldENoaWxkUm91dGVzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IFJvdXRlW107XG4gICAgLyoqXG4gICAgICogR2V0IGNtcyBkcml2ZW4gZ3VhcmRzIGZvciBjb21wb25lbnRzXG4gICAgICovXG4gICAgZ2V0R3VhcmRzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IGFueVtdO1xuICAgIC8qKlxuICAgICAqIEdldCBpMThuIGtleXMgYXNzb2NpYXRlZCB3aXRoIGNvbXBvbmVudHNcbiAgICAgKi9cbiAgICBnZXRJMThuS2V5cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBzdHJpbmdbXTtcbn1cbiJdfQ==