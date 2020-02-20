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

//# sourceMappingURL=cms-mapping.service.d.ts.map