import { CmsComponentMapping, CmsConfig, DeferLoadingStrategy } from '@spartacus/core';
import { Route } from '@angular/router';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CmsComponentsService {
    protected config: CmsConfig;
    protected platformId: Object;
    private missingComponents;
    constructor(config: CmsConfig, platformId: Object);
    /**
     * Should be called to make sure all component mappings are determined,
     * especially lazy loaded ones.
     *
     * It's recommended way to make sure all other methods of CmsComponentService
     * will be able to work synchronously for asked component types and avoid risk
     * of potential errors that could be thrown otherwise.
     */
    determineMappings(componentTypes: string[]): Observable<string[]>;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudHMuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4Q0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNDb21wb25lbnRNYXBwaW5nLCBDbXNDb25maWcsIERlZmVyTG9hZGluZ1N0cmF0ZWd5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENtc0NvbXBvbmVudHNTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBDbXNDb25maWc7XG4gICAgcHJvdGVjdGVkIHBsYXRmb3JtSWQ6IE9iamVjdDtcbiAgICBwcml2YXRlIG1pc3NpbmdDb21wb25lbnRzO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogQ21zQ29uZmlnLCBwbGF0Zm9ybUlkOiBPYmplY3QpO1xuICAgIC8qKlxuICAgICAqIFNob3VsZCBiZSBjYWxsZWQgdG8gbWFrZSBzdXJlIGFsbCBjb21wb25lbnQgbWFwcGluZ3MgYXJlIGRldGVybWluZWQsXG4gICAgICogZXNwZWNpYWxseSBsYXp5IGxvYWRlZCBvbmVzLlxuICAgICAqXG4gICAgICogSXQncyByZWNvbW1lbmRlZCB3YXkgdG8gbWFrZSBzdXJlIGFsbCBvdGhlciBtZXRob2RzIG9mIENtc0NvbXBvbmVudFNlcnZpY2VcbiAgICAgKiB3aWxsIGJlIGFibGUgdG8gd29yayBzeW5jaHJvbm91c2x5IGZvciBhc2tlZCBjb21wb25lbnQgdHlwZXMgYW5kIGF2b2lkIHJpc2tcbiAgICAgKiBvZiBwb3RlbnRpYWwgZXJyb3JzIHRoYXQgY291bGQgYmUgdGhyb3duIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBkZXRlcm1pbmVNYXBwaW5ncyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gY29sbGVjdGlvbiBvZiBjb21wb25lbnQgbWFwcGluZyBjb25maWd1cmF0aW9uIGZvciBzcGVjaWZpZWQgbGlzdCBvZlxuICAgICAqIGNvbXBvbmVudCB0eXBlcy5cbiAgICAgKlxuICAgICAqIElmIGNvbXBvbmVudCBtYXBwaW5nIGNhbid0IGJlIGRldGVybWluZWQgc3luY2hyb25vdXNseSwgZm9yIGV4YW1wbGUsIGxhenlcbiAgICAgKiBsb2FkZWQgb25lLCBpdCB3aWxsIHRocm93IGFuIGVycm9yLlxuICAgICAqXG4gICAgICogVG8gbWFrZSBzdXJlIGNvbXBvbmVudCBtYXBwaW5nIGlzIGF2YWlsYWJsZSwgZGV0ZXJtaW5lTWFwcGluZ3MoKVxuICAgICAqIHNob3VsZCBiZSBjYWxsZWQgYW5kIGNvbXBsZXRlZCBmaXJzdC5cbiAgICAgKi9cbiAgICBnZXRNYXBwaW5nKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gICAgLyoqXG4gICAgICogQ2hlY2tzLCBpZiBjb21wb25lbnQgc2hvdWxkIGJlIHJlbmRlcmVkIGFzIHNvbWUgY29tcG9uZW50c1xuICAgICAqIGNvdWxkIGJlIGRpc2FibGVkIGZvciBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdzXG4gICAgICovXG4gICAgc2hvdWxkUmVuZGVyKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogUmV0dXJuIERlZmVyTG9hZGluZ1N0cmF0ZWd5IGZvciBjb21wb25lbnQgdHlwZS5cbiAgICAgKi9cbiAgICBnZXREZWZlckxvYWRpbmdTdHJhdGVneShjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBEZWZlckxvYWRpbmdTdHJhdGVneTtcbiAgICAvKipcbiAgICAgKiBHZXQgY21zIGRyaXZlbiBjaGlsZCByb3V0ZXMgZm9yIGNvbXBvbmVudHNcbiAgICAgKi9cbiAgICBnZXRDaGlsZFJvdXRlcyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBSb3V0ZVtdO1xuICAgIC8qKlxuICAgICAqIEdldCBjbXMgZHJpdmVuIGd1YXJkcyBmb3IgY29tcG9uZW50c1xuICAgICAqL1xuICAgIGdldEd1YXJkcyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBhbnlbXTtcbiAgICAvKipcbiAgICAgKiBHZXQgaTE4biBrZXlzIGFzc29jaWF0ZWQgd2l0aCBjb21wb25lbnRzXG4gICAgICovXG4gICAgZ2V0STE4bktleXMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogc3RyaW5nW107XG59XG4iXX0=