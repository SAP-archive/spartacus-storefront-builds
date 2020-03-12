import { CmsConfig } from '@spartacus/core';
import { Route } from '@angular/router';
/**
 * Please don't put that service in public API.
 * */
import * as ɵngcc0 from '@angular/core';
export declare class CmsMappingService {
    private config;
    private platformId;
    constructor(config: CmsConfig, platformId: Object);
    isComponentEnabled(flexType: string): boolean;
    getRoutesForComponents(componentTypes: string[]): Route[];
    getGuardsForComponents(componentTypes: string[]): any[];
    getI18nKeysForComponents(componentTypes: string[]): string[];
    private getRoutesForComponent;
    private getGuardsForComponent;
    private getI18nKeysForComponent;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsMappingService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLW1hcHBpbmcuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjbXMtbWFwcGluZy5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7QUFXQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENtc0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vKipcbiAqIFBsZWFzZSBkb24ndCBwdXQgdGhhdCBzZXJ2aWNlIGluIHB1YmxpYyBBUEkuXG4gKiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ21zTWFwcGluZ1NlcnZpY2Uge1xuICAgIHByaXZhdGUgY29uZmlnO1xuICAgIHByaXZhdGUgcGxhdGZvcm1JZDtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IENtc0NvbmZpZywgcGxhdGZvcm1JZDogT2JqZWN0KTtcbiAgICBpc0NvbXBvbmVudEVuYWJsZWQoZmxleFR5cGU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgZ2V0Um91dGVzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBSb3V0ZVtdO1xuICAgIGdldEd1YXJkc0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogYW55W107XG4gICAgZ2V0STE4bktleXNGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IHN0cmluZ1tdO1xuICAgIHByaXZhdGUgZ2V0Um91dGVzRm9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ2V0R3VhcmRzRm9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ2V0STE4bktleXNGb3JDb21wb25lbnQ7XG59XG4iXX0=