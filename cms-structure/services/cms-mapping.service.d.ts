import { CmsComponentMapping, CmsConfig } from '@spartacus/core';
import { Route } from '@angular/router';
/**
 * Please don't put that service in public API.
 * */
import * as ɵngcc0 from '@angular/core';
export declare class CmsMappingService {
    private config;
    private platformId;
    private missingComponents;
    constructor(config: CmsConfig, platformId: Object);
    getComponentMapping(componentType: string): CmsComponentMapping;
    isComponentEnabled(componentType: string): boolean;
    getRoutesForComponents(componentTypes: string[]): Route[];
    getGuardsForComponents(componentTypes: string[]): any[];
    getI18nKeysForComponents(componentTypes: string[]): string[];
    private getRoutesForComponent;
    private getGuardsForComponent;
    private getI18nKeysForComponent;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsMappingService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLW1hcHBpbmcuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjbXMtbWFwcGluZy5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7OztBQWFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ21zQ29tcG9uZW50TWFwcGluZywgQ21zQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8qKlxuICogUGxlYXNlIGRvbid0IHB1dCB0aGF0IHNlcnZpY2UgaW4gcHVibGljIEFQSS5cbiAqICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDbXNNYXBwaW5nU2VydmljZSB7XG4gICAgcHJpdmF0ZSBjb25maWc7XG4gICAgcHJpdmF0ZSBwbGF0Zm9ybUlkO1xuICAgIHByaXZhdGUgbWlzc2luZ0NvbXBvbmVudHM7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBDbXNDb25maWcsIHBsYXRmb3JtSWQ6IE9iamVjdCk7XG4gICAgZ2V0Q29tcG9uZW50TWFwcGluZyhjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICAgIGlzQ29tcG9uZW50RW5hYmxlZChjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBib29sZWFuO1xuICAgIGdldFJvdXRlc0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogUm91dGVbXTtcbiAgICBnZXRHdWFyZHNGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IGFueVtdO1xuICAgIGdldEkxOG5LZXlzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIGdldFJvdXRlc0ZvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdldEd1YXJkc0ZvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdldEkxOG5LZXlzRm9yQ29tcG9uZW50O1xufVxuIl19