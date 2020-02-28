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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLW1hcHBpbmcuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjbXMtbWFwcGluZy5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7QUFXQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLyoqXG4gKiBQbGVhc2UgZG9uJ3QgcHV0IHRoYXQgc2VydmljZSBpbiBwdWJsaWMgQVBJLlxuICogKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENtc01hcHBpbmdTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGNvbmZpZztcbiAgICBwcml2YXRlIHBsYXRmb3JtSWQ7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBDbXNDb25maWcsIHBsYXRmb3JtSWQ6IE9iamVjdCk7XG4gICAgaXNDb21wb25lbnRFbmFibGVkKGZsZXhUeXBlOiBzdHJpbmcpOiBib29sZWFuO1xuICAgIGdldFJvdXRlc0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogUm91dGVbXTtcbiAgICBnZXRHdWFyZHNGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IGFueVtdO1xuICAgIGdldEkxOG5LZXlzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIGdldFJvdXRlc0ZvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdldEd1YXJkc0ZvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdldEkxOG5LZXlzRm9yQ29tcG9uZW50O1xufVxuIl19